"""Fast, dependency-free regression tests for draft release-note generation."""

from __future__ import annotations

from pathlib import Path
import subprocess
import sys
import tempfile
import unittest

from scripts.release_notes import comparison_link, fallback, prepare, validate

TAG = "v5.0.0-beta0"
COMPARE = "https://github.com/superdingo101/daylight-calendar-card/compare/v4.14.0...v5.0.0-beta0"
GENERATED = f"""## What's Changed

* Add calendar preview by @alice in https://github.com/superdingo101/daylight-calendar-card/pull/300
* Fix unsafe upload error by @bob in https://github.com/superdingo101/daylight-calendar-card/pull/301
* docs: clarify calendar installation by @carol in https://github.com/superdingo101/daylight-calendar-card/pull/302
* Improve automated tests by @dave in https://github.com/superdingo101/daylight-calendar-card/pull/303

**Full Changelog**: {COMPARE}
"""


class ReleaseNotesTests(unittest.TestCase):
    def test_fallback_preserves_every_change_and_matches_style(self) -> None:
        notes = fallback(GENERATED, TAG)
        validate(notes, GENERATED, TAG)
        self.assertTrue(notes.startswith(f"## ✨ Daylight Calendar Card {TAG}\n"))
        for pr in ("300", "301", "302", "303"):
            self.assertIn(f"/pull/{pr}", notes)
        for heading in (
            "### 🆕 New Features",
            "### ⚠️ Fixes / Behavior Changes",
            "### 📚 Documentation Improvements",
            "### 🔧 Maintenance",
            "### 🔗 Full Changelog",
        ):
            self.assertIn(heading, notes)
        self.assertNotIn("### ✅ Breaking Changes", notes)
        self.assertEqual(notes.count(COMPARE), 1)

    def test_ai_style_notes_validate(self) -> None:
        polished = f"""## ✨ Daylight Calendar Card {TAG}

This release improves imports and documentation.

### 🆕 New Features

- **Calendar preview**
  - Added a preview for imported events.

### ⚠️ Fixes / Behavior Changes

- **Upload safety**
  - Fixed an upload error.

### 📚 Documentation Improvements

- Updated the installation instructions.

### 🔧 Maintenance

- Expanded automated tests.

### 🔗 Full Changelog

[v4.14.0...v5.0.0-beta0]({COMPARE})
"""
        validate(polished, GENERATED, TAG)

    def test_comparison_link_is_required_and_tied_to_tag(self) -> None:
        with self.assertRaisesRegex(ValueError, "comparison link"):
            comparison_link("* Fix test in pull/300", TAG)
        with self.assertRaisesRegex(ValueError, "does not end"):
            comparison_link(GENERATED, "v5.0.0-beta1")

    def test_rejects_ai_output_with_fabricated_link(self) -> None:
        poisoned = fallback(GENERATED, TAG).replace(
            "This release includes the updates listed below.",
            "See https://example.com/a-made-up-migration for setup instructions.",
        )
        with self.assertRaisesRegex(ValueError, "links absent"):
            validate(poisoned, GENERATED, TAG)

    def test_rejects_missing_changelog_or_renamed_heading(self) -> None:
        notes = fallback(GENERATED, TAG)
        with self.assertRaisesRegex(ValueError, "Full Changelog"):
            validate(notes.replace("### 🔗 Full Changelog", "### Links"), GENERATED, TAG)
        with self.assertRaisesRegex(ValueError, "version heading"):
            validate(notes.replace("## ✨", "## Release Notes"), GENERATED, TAG)
        with self.assertRaisesRegex(ValueError, "link or label"):
            validate(notes.replace("v4.14.0...v5.0.0-beta0]", "v4.13.0...v5.0.0-beta0]"), GENERATED, TAG)

    def test_rejects_empty_section(self) -> None:
        notes = fallback(GENERATED, TAG).replace(
            "### 🆕 New Features\n\n- Add calendar preview by @alice in https://github.com/superdingo101/daylight-calendar-card/pull/300",
            "### 🆕 New Features",
        )
        with self.assertRaisesRegex(ValueError, "empty change section"):
            validate(notes, GENERATED, TAG)

    def test_rejects_unsupported_breaking_change_claims(self) -> None:
        notes = fallback(GENERATED, TAG).replace(
            "### 🔗 Full Changelog",
            "### ✅ Breaking Changes\n\n- None.\n\n### 🔗 Full Changelog",
        )
        with self.assertRaisesRegex(ValueError, "source evidence"):
            validate(notes, GENERATED, TAG)

    def test_no_bullets_fails_closed(self) -> None:
        with self.assertRaisesRegex(ValueError, "no change bullets"):
            fallback(f"## What's Changed\n\n**Full Changelog**: {COMPARE}\n", TAG)

    def test_prompt_contains_style_and_original_evidence(self) -> None:
        notes, prompt = prepare(GENERATED, TAG)
        validate(notes, GENERATED, TAG)
        self.assertIn("published v4.13.0 and v4.14.0", prompt)
        self.assertIn("<source-notes>", prompt)
        self.assertIn("pull/300", prompt)
        self.assertIn(COMPARE, prompt)
        self.assertIn("only the complete Markdown release notes", prompt)

    def test_cli_rejects_invalid_ai_and_keeps_formatted_fallback(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            generated = root / "generated.md"
            notes = root / "notes.md"
            prompt = root / "prompt.md"
            candidate = root / "candidate.md"
            generated.write_text(GENERATED, encoding="utf-8")

            def run(*args: str) -> subprocess.CompletedProcess[str]:
                return subprocess.run(
                    [sys.executable, "-m", "scripts.release_notes", *args],
                    capture_output=True, text=True, check=True,
                )

            common = ("--generated", str(generated), "--tag", TAG, "--notes", str(notes))
            run("prepare", *common, "--prompt", str(prompt))
            original = notes.read_text(encoding="utf-8")
            candidate.write_text("## Wrong title\n\n- hallucinated", encoding="utf-8")
            result = run("select", *common, "--candidate", str(candidate))
            self.assertIn("rejected", result.stdout)
            self.assertEqual(original, notes.read_text(encoding="utf-8"))
            run("validate", *common)



    def test_beta_highlights_and_no_unverified_breaking_claims(self) -> None:
        generated = f"""## Highlights
- Added Italian language support by @whites11 in https://github.com/superdingo101/daylight-calendar-card/pull/642
- Connected the card to Daylight Import in https://github.com/superdingo101/daylight-calendar-card/pull/644

## Fixes
- Fixed missing Agenda heading in https://github.com/superdingo101/daylight-calendar-card/pull/640

## Maintenance
- Synced release branches in https://github.com/superdingo101/daylight-calendar-card/pull/648

No migration notes or breaking changes are indicated in these changes.

**Full changelog:** {COMPARE}
"""
        notes = fallback(generated, TAG)
        validate(notes, generated, TAG)
        self.assertIn("### 🆕 New Features", notes)
        self.assertIn("Connected the card", notes)
        self.assertIn("### ⚠️ Fixes / Behavior Changes", notes)
        self.assertIn("### 🔧 Maintenance", notes)
        self.assertNotIn("### ✅ Breaking Changes", notes)
        for number in ("642", "644", "640", "648"):
            self.assertIn(f"/pull/{number}", notes)

if __name__ == "__main__":
    unittest.main()
