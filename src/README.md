# Source module map

`src/` is the authored source of truth for Daylight Calendar Card. The root `skylight-calendar-card.js` file is the generated Rollup bundle used for HACS and manual installs; it must be committed when build output changes, but it should not be edited as the source of truth. Make source changes in `src/`, then run `npm run build` to regenerate the root artifact.

## Main custom element

`src/skylight-calendar-card.js` remains the Rollup entry point and main custom element source. It still owns the card-instance responsibilities that have not been extracted:

- custom element lifecycle
- Home Assistant integration and orchestration
- rendering methods, Lit/HTML templates, and view composition
- CSS
- DOM measurement
- scroll restoration
- modal and editor DOM behavior
- event handlers

Do not move renderers, CSS, DOM structure, modal/editor rendering, or service orchestration unless a change is explicitly scoped to do that work.

## Extracted module areas

The current post-Phase 13 module layout keeps pure/data-only helpers outside the main custom element while leaving rendering in `src/skylight-calendar-card.js`:

- `constants.js`: shared static constants used across source modules and the card.
- `defaults.js`: default config values, option lists, config aliases, and stub config creation.
- `translations.js`: translation strings and locale data.
- `utils/`: pure utility helpers for dates, normalization, and strings.
- `events/event-normalizer.js`: Home Assistant calendar event normalization and combined-event data shaping.
- `events/event-form.js`: event form validation and create/update data normalization.
- `events/event-service.js`: Home Assistant calendar event service and WebSocket payload helpers.
- `events/event-display.js`: non-rendering event display decisions, including time/location visibility, badge data, and schedule visual metadata.
- `rules/condition-matcher.js`: condition and value matching helpers for rule evaluation.
- `rules/style-rules.js`: style rule normalization and matching helpers.
- `badges/day-badges.js`: day badge normalization, matching, and display data helpers.
- `weather/weather-utils.js`: weather formatting, icon, temperature, and forecast utility helpers.
- `weather/weather-service.js`: weather entity discovery and Home Assistant weather service payload helpers.
- `editor/editor-schema.js`: editor default values, option metadata, and config normalization helpers for the editor.
- `views/month-view-model.js`: month-grid date and visible-range view-model helpers.
- `views/week-view-model.js`: week and rolling-days view-model helpers.
- `views/agenda-view-model.js`: agenda visible-range and rolling-days view-model helpers.
- `calendars/calendar-entities.js`: calendar entity metadata, colors, names, virtual calendar badges, writable calendars, and person mappings.

## Guardrails for future phases

- Prefer direct module tests for extracted pure/data helpers before moving any renderer code.
- Keep helpers explicit: pass inputs and callbacks instead of importing or depending on the card instance.
- Preserve public config option names, custom element names, CSS class names, DOM structure, translations, and visual behavior unless a prompt explicitly requests a behavior change.
- Preserve both `daylight-calendar-card` and legacy `skylight-calendar-card` compatibility.
