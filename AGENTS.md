## Project overview

This repository contains Daylight Calendar Card, a Home Assistant custom dashboard calendar card.

The project was formerly named Skylight Calendar Card. The public name is now Daylight Calendar Card, but some filenames and compatibility aliases intentionally still use `skylight`.

## Core rules

* Keep changes small, focused, and directly related to the prompt.
* Do not perform broad rewrites, formatting sweeps, dependency upgrades, or architectural refactors unless explicitly requested.
* Preserve `skylight-calendar-card.js` as the shipped HACS/manual-install artifact.
* Preserve both `daylight-calendar-card` and legacy `skylight-calendar-card` custom element compatibility.
* Reuse existing helpers, patterns, tests, and fixtures before adding new abstractions.
* Do not change defaults or visual behavior unless the prompt asks for it.
* Treat visual/layout changes as potentially breaking for dashboard users.

## Repository structure

* `src/` is the authored source of truth.
* `src/skylight-calendar-card.js` is the Rollup entry point and main custom element source.
* The root `skylight-calendar-card.js` file is the generated shipped artifact for HACS/manual installs.
* `rollup.config.mjs` builds `src/skylight-calendar-card.js` into the root `skylight-calendar-card.js` artifact.
* The generated root `skylight-calendar-card.js` artifact must remain committed.
* Do not hand-edit the root `skylight-calendar-card.js` file as source-of-truth. Make source changes in `src/`, then run `npm run build` and commit the regenerated artifact when it changes.
* `skylight-calendar-card.test.js` contains Node tests using `node:test`.
* `playwright/visual.spec.js` contains visual/browser behavior tests.
* `docs/` contains the Mintlify documentation site.
* `hacs.json` controls HACS metadata.

## Module boundaries

Current modules are organized around these boundaries. Future modules may be added, but new modules should preserve the same separation principles and keep card-instance orchestration separate from pure/data-only helpers.

* `src/skylight-calendar-card.js`: main custom element, lifecycle, Home Assistant orchestration, view composition, renderer callback wiring, DOM measurement, scroll restoration, modal/editor DOM behavior, preference persistence, service behavior, and event handlers.
* `src/translations.js`: translation data.
* `src/constants.js`: shared static constants.
* `src/defaults.js`: default config values, option lists, aliases, and stub config creation.
* `src/utils/`: pure utility helpers for dates, normalization, and strings.
* `src/events/event-normalizer.js`: Home Assistant calendar event normalization and combined-event data shaping.
* `src/events/event-form.js`: event form validation and create/update data normalization.
* `src/events/event-service.js`: Home Assistant calendar event service and WebSocket payload helpers.
* `src/events/event-display.js`: non-rendering event display decisions and display metadata.
* `src/rules/condition-matcher.js`: condition and value matching helpers.
* `src/rules/style-rules.js`: style rule normalization and matching helpers.
* `src/badges/day-badges.js`: day badge normalization, matching, and display data helpers.
* `src/weather/weather-utils.js`: weather formatting, icon, temperature, and forecast utility helpers.
* `src/weather/weather-service.js`: weather entity discovery and Home Assistant weather service payload helpers.
* `src/editor/editor-schema.js`: editor default values, option metadata, and config normalization helpers.
* `src/views/month-view-model.js`: month-grid date and visible-range view-model helpers.
* `src/views/week-view-model.js`: week and rolling-days view-model helpers.
* `src/views/agenda-view-model.js`: agenda visible-range and rolling-days view-model helpers.
* `src/calendars/calendar-entities.js`: calendar entity metadata, colors, names, virtual calendar badges, writable calendars, and person mappings.
* `src/renderers/`: extracted markup renderers for header, month, day cells, week compact, week standard, agenda, shared events, modals/forms, editor controls, calendar badges, and day/weather helpers. Renderers receive explicit data and callbacks from the card.
* `src/styles/card-styles.js`: static card CSS used by the main custom element.

## Modularization guardrails

* Prefer extracting pure/data-only logic before rendering or DOM logic.
* Keep lifecycle methods, card-instance view composition, renderer callback wiring, DOM querying, modal behavior, editor behavior, preference persistence, ResizeObserver/compact-height behavior, and Home Assistant service orchestration in `src/skylight-calendar-card.js` unless a prompt explicitly asks to move that area.
* New modules should receive explicit inputs/helpers rather than importing or depending on card instance state.
* Do not pass the whole card instance into helper modules unless explicitly justified.
* Preserve public config option names, custom element names, CSS class names, DOM structure, and visual behavior.
* Preserve both Daylight and legacy Skylight compatibility.
* Keep refactors small and narrowly scoped.

## Working in `src/`

Most source work should start in `src/`. `src/skylight-calendar-card.js` remains large and tightly coupled because it owns lifecycle, view composition, renderer callback wiring, DOM behavior, and orchestration. Before editing:

1. Find the existing feature area and existing module boundary.
2. Reuse existing modules/helpers before adding new ones.
3. Make the smallest safe change.
4. Avoid moving unrelated code.
5. Avoid cleanup-only edits.
6. Add or update tests for behavior changes.

When adding or changing a config option, check:

* config normalization
* stub/default config
* editor support, if user-facing
* all affected views: month, week compact, week standard/schedule, agenda
* unit tests
* visual tests, if layout changes
* docs, if users need to configure it

## Tests and validation

Use the relevant checks:

```
npm ci --no-audit --fund=false
npm run build
git diff --exit-code -- skylight-calendar-card.js
node --check src/skylight-calendar-card.js
node --check skylight-calendar-card.js
node --check <changed-or-new-src-file>.js
npm test
npm run test:visual
```

* Run `npm ci --no-audit --fund=false` when dependencies need to be installed or refreshed.
* Run `npm run build` after source changes that should affect the shipped artifact.
* Run `git diff --exit-code -- skylight-calendar-card.js` after `npm run build` to verify whether the generated artifact is fresh.
* Run `node --check src/skylight-calendar-card.js` after JavaScript edits that affect the main source file.
* Run `node --check skylight-calendar-card.js` after regenerating the shipped artifact.
* Run `node --check` for any changed or newly added `src/**/*.js` files.
* Run `npm test` after logic, config, translation, matching, compatibility, or build-output changes.
* Run `npm run test:visual` when rendering, CSS, DOM, layout, modal, responsive behavior, or visual output could be affected.
* Do not update visual snapshots unless the visual change is intentional.
* Do not claim tests passed unless they were actually run.
* Do not claim the generated artifact is fresh unless `npm run build` and `git diff --exit-code -- skylight-calendar-card.js` were actually run.
* If `npm run build` changes the root `skylight-calendar-card.js` file, commit the regenerated artifact with the source change.

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

## Generated artifact
- ...

## Notes / risks
- ...
```

If tests were not run, say so clearly.
