## Project overview

This repository contains Daylight Calendar Card, a Home Assistant custom dashboard calendar card.

The project was formerly named Skylight Calendar Card. The public name is now Daylight Calendar Card, but some filenames and compatibility aliases intentionally still use `skylight`.

## Core rules

* Keep changes small, focused, and directly related to the prompt.
* Do not perform broad rewrites, formatting sweeps, dependency upgrades, or architectural refactors unless explicitly requested.
* Preserve `skylight-calendar-card.js` as the shipped HACS file.
* Preserve both `daylight-calendar-card` and legacy `skylight-calendar-card` custom element compatibility.
* Reuse existing helpers, patterns, tests, and fixtures before adding new abstractions.
* Do not change defaults or visual behavior unless the prompt asks for it.
* Treat visual/layout changes as potentially breaking for dashboard users.

## Repository structure

* `skylight-calendar-card.js` is the main shipped source file.
* `skylight-calendar-card.test.js` contains Node tests using `node:test`.
* `playwright/visual.spec.js` contains visual/browser behavior tests.
* `docs/` contains the Mintlify documentation site.
* `hacs.json` controls HACS metadata.

## Working in `skylight-calendar-card.js`

This file is large and tightly coupled. Before editing:

1. Find the existing feature area.
2. Make the smallest safe change.
3. Avoid moving unrelated code.
4. Avoid cleanup-only edits.
5. Add or update tests for behavior changes.

When adding or changing a config option, check:

* config normalization
* stub/default config
* editor support, if user-facing
* all affected views: month, week compact, week standard/schedule, agenda
* unit tests
* visual tests, if layout changes
* docs, if users need to configure it

## Tests

Use the relevant checks:

```
node --check skylight-calendar-card.js
npm test
npm run test:visual
```

* Run `node --check skylight-calendar-card.js` after JavaScript edits.
* Run `npm test` after logic, config, translation, matching, or compatibility changes.
* Run `npm run test:visual` after CSS, layout, rendering, modal, responsive, or DOM changes.
* Do not update visual snapshots unless the visual change is intentional.
* Do not claim tests passed unless they were actually run.

## Documentation

The docs site lives in `docs/`.

When changing user-facing behavior, update the relevant docs page. Keep docs concise, practical, and YAML-example driven. Use exact syntax. Do not invent features.

Do not duplicate the full docs in the README unless explicitly requested.

## Release/version rules

Do not update `DAYLIGHT_CALENDAR_CARD_VERSION`, create tags, or change release workflows unless the prompt is specifically about preparing a release.

Normal feature and bug-fix work should target `dev` unless told otherwise.

## Final response format

Summarize work like this:

```
## Summary
- ...

## Tests
- ...

## Notes / risks
- ...
```

If tests were not run, say so clearly.
