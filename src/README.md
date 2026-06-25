# Source module map

`src/` is the authored source of truth for Daylight Calendar Card. The root `skylight-calendar-card.js` file is the generated Rollup bundle used for HACS and manual installs; it must be committed when build output changes, but it should not be edited as the source of truth. Make source changes in `src/`, then run `npm run build` to regenerate the root artifact.

## Main custom element

`src/skylight-calendar-card.js` remains the Rollup entry point and main custom element source. After the renderer extractions through Phase 27, it still intentionally owns card-instance responsibilities that depend on live Home Assistant state, DOM state, browser APIs, or custom-element lifecycle:

- custom element lifecycle and registration compatibility
- config normalization orchestration and preference persistence
- Home Assistant integration, service calls, capability checks, and event fetching
- view composition and renderer callback wiring
- DOM reads/writes, ResizeObserver handling, compact-height measurement, and scroll restoration
- modal behavior and editor/card event handlers
- compatibility wrapper methods that keep extracted renderers isolated from card internals

Do not move lifecycle, service orchestration, DOM structure, modal behavior, event handlers, or compatibility aliases unless a change is explicitly scoped to do that work.

## Extracted module areas

The current post-Phase 27 module layout keeps pure/data helpers and renderer markup helpers outside the main custom element while leaving card-instance orchestration in `src/skylight-calendar-card.js`:

### Core data, defaults, and translations

- `constants.js`: shared static constants used across source modules and the card.
- `defaults.js`: default config values, option lists, config aliases, and stub config creation.
- `translations.js`: translation strings and locale data.

### Utilities and view models

- `utils/date-utils.js`: date parsing, local date formatting, range chunking, and ISO week helpers.
- `utils/normalization-utils.js`: small normalization helpers for enums, booleans, dashboard paths, and entity maps.
- `utils/string-utils.js`: string and HTML-attribute escaping helpers.
- `views/month-view-model.js`: month-grid date and visible-range view-model helpers.
- `views/week-view-model.js`: week and rolling-days view-model helpers.
- `views/agenda-view-model.js`: agenda window, visible-range, and rolling-days view-model helpers.

### Calendar, event, weather, badge, and rule helpers

- `calendars/calendar-entities.js`: calendar entity metadata, colors, names, virtual calendar badges, writable calendars, and person mappings.
- `events/event-normalizer.js`: Home Assistant calendar event normalization and combined-event data shaping.
- `events/event-form.js`: event form validation, recurrence helpers, and create/update data normalization.
- `events/event-service.js`: Home Assistant calendar event service and WebSocket payload helpers.
- `events/event-display.js`: non-rendering event display decisions, including time/location visibility, badge data, and schedule visual metadata.
- `rules/condition-matcher.js`: condition and value matching helpers for rule evaluation.
- `rules/style-rules.js`: style rule normalization and matching helpers.
- `badges/day-badges.js`: day badge normalization, matching, template resolution, and display data helpers.
- `weather/weather-utils.js`: weather formatting, icon, temperature, and forecast utility helpers.
- `weather/weather-service.js`: weather entity discovery and Home Assistant weather service payload helpers.
- `editor/editor-schema.js`: editor default values, option metadata, and config normalization helpers for the editor.

### Renderers and styles

Renderer modules return existing markup for specific card regions. They receive explicit data and helper callbacks from the main card instead of importing card-instance state.

- `renderers/header-renderer.js`: standard/compact header, title, navigation, view selector, dashboard button, and theme toggle markup.
- `renderers/month-renderer.js`: month view shell, day headers, month day grid, and week-number row cells.
- `renderers/day-cell-renderer.js`: month day-cell markup.
- `renderers/week-compact-renderer.js`: compact week view markup.
- `renderers/week-standard-renderer.js`: schedule/week-standard view markup.
- `renderers/agenda-renderer.js`: agenda view markup.
- `renderers/event-renderer.js`: shared event bubble/icon/title/corner-bubble markup helpers.
- `renderers/event-modal-renderer.js`: event detail modal markup.
- `renderers/event-form-renderer.js`: create/edit event form modal markup.
- `renderers/editor-renderer.js`: reusable editor section, color input, and weekday checkbox markup.
- `renderers/calendar-badge-renderer.js`: calendar badge containers, labels, and icons.
- `renderers/day-weather-renderer.js`: day badge and day forecast markup.
- `styles/card-styles.js`: static card CSS string used by the main custom element.

## Renderer wrapper checkpoint

Phase 28 reviewed the remaining render-related methods in `src/skylight-calendar-card.js` as a conservative checkpoint. The remaining wrappers are intentionally kept when they do at least one of the following:

- compose card-instance state before calling an extracted renderer;
- provide callback bridges so renderers do not depend on the card instance;
- preserve compatibility with existing tests or legacy method call sites;
- perform DOM, Home Assistant, modal, preference, or service orchestration that belongs in the main custom element.

Only obviously unused wrappers should be removed in future phases, and only after confirming they are not referenced by `src/`, tests, renderer callbacks, or compatibility paths.

## Guardrails for future phases

- Prefer direct module tests for extracted pure/data helpers before moving any additional behavior.
- Keep helpers explicit: pass inputs and callbacks instead of importing or depending on the card instance.
- Preserve public config option names, custom element names, CSS class names, DOM structure, translations, and visual behavior unless a prompt explicitly requests a behavior change.
- Preserve both `daylight-calendar-card` and legacy `skylight-calendar-card` compatibility.
- Treat visual/layout changes as potentially breaking for dashboard users.
