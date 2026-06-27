# Source module map

`src/` is the authored source of truth for Daylight Calendar Card. The root `skylight-calendar-card.js` file is the generated Rollup bundle used for HACS and manual installs; it must be committed when build output changes, but it should not be edited as the source of truth. Make source changes in `src/`, then run `npm run build` to regenerate the root artifact.

## Main custom element

`src/skylight-calendar-card.js` remains the Rollup entry point and main card custom element source after the modularization work through Phase 33. It intentionally owns card-instance responsibilities that depend on live Home Assistant state, DOM state, browser APIs, render timing, or custom-element lifecycle:

- custom element registration and lifecycle, including Daylight and legacy Skylight compatibility;
- config orchestration and compatibility with public config option names;
- preference persistence;
- Home Assistant `hass` setter behavior;
- capability checks;
- final event and weather refresh decisions;
- final render timing;
- DOM reads/writes;
- ResizeObserver behavior;
- compact-height measurement;
- scroll restoration;
- modal behavior;
- event listeners;
- renderer callback wiring.

Do not move lifecycle, service orchestration, DOM structure, modal behavior, event listeners, renderer callback wiring, preference persistence, DOM measurement, or compatibility aliases unless a change is explicitly scoped to do that work. Further refactors should be opportunistic and tied to real feature or bug work, especially around modal flows, DOM measurement, event listeners, and preference persistence.

## Extracted module areas

The current post-Phase 33 module layout keeps pure/data helpers, service helpers, controller-style helpers, renderer markup helpers, and static styles outside the main custom element while leaving card-instance orchestration in `src/skylight-calendar-card.js`.

### Core data, defaults, version, and translations

- `constants.js`: shared static constants used across source modules and the card.
- `defaults.js`: default config values, option lists, config aliases, and stub config creation.
- `translations.js`: translation strings and locale data.
- `version.js`: version lookup helper used by the card without moving release/version ownership.

### Config, editor, utilities, Home Assistant state, and view models

- `config/config-normalizers.js`: config normalization helpers for modes, colors, opacities, hidden calendars, and related public option values.
- `editor/daylight-calendar-card-editor.js`: Daylight Calendar Card editor custom element registration and editor element implementation.
- `editor/editor-schema.js`: editor default values, option metadata, and config normalization schema helpers for the editor.
- `ha/ha-state-helpers.js`: Home Assistant entity state display helpers, render signatures, person labels/pictures, and header weather display data.
- `utils/color-utils.js`: color parsing, named-color handling, alpha blending, contrast, and color map normalization helpers.
- `utils/date-utils.js`: date parsing, local date formatting, range chunking, and ISO week helpers.
- `utils/normalization-utils.js`: small normalization helpers for enums, booleans, dashboard paths, and entity maps.
- `utils/string-utils.js`: string and HTML-attribute escaping helpers.
- `views/month-view-model.js`: month-grid date and visible-range view-model helpers.
- `views/week-view-model.js`: week and rolling-days view-model helpers.
- `views/agenda-view-model.js`: agenda window, visible-range, and rolling-days view-model helpers.

### Calendar, event, weather, badge, and rule helpers

- `calendars/calendar-entities.js`: calendar entity metadata, colors, names, virtual calendar badges, writable calendars, and person mappings.
- `events/event-normalizer.js`: Home Assistant calendar event normalization and combined-event data shaping.
- `events/event-display.js`: non-rendering event display decisions, including time/location visibility, badge data, and schedule visual metadata.
- `events/event-fetcher.js`: calendar fetch/cache helpers, range coverage checks, stable signatures, merge/sort helpers, and WebSocket fetch orchestration helpers.
- `events/event-form.js`: event form validation, recurrence helpers, and create/update data normalization.
- `events/event-service.js`: Home Assistant calendar event service and WebSocket payload helpers.
- `rules/condition-matcher.js`: condition and value matching helpers for rule evaluation.
- `rules/style-rules.js`: style rule normalization and matching helpers.
- `badges/day-badges.js`: day badge normalization, matching, template resolution, and display data helpers.
- `weather/weather-controller.js`: weather forecast controller helper that encapsulates forecast cache/refresh state while the card keeps final refresh decisions and render timing.
- `weather/weather-utils.js`: weather formatting, icon, temperature, and forecast utility helpers.
- `weather/weather-service.js`: weather entity discovery and Home Assistant weather service payload helpers.

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
- `renderers/editor-renderer.js`: reusable editor section, color input, and weekday checkbox markup used by the editor custom element.
- `renderers/calendar-badge-renderer.js`: calendar badge containers, labels, and icons.
- `renderers/day-weather-renderer.js`: day badge and day forecast markup.
- `styles/card-styles.js`: static card CSS string used by the main custom element.

## Wrapper and ownership checkpoint

The remaining card-facing wrapper methods in `src/skylight-calendar-card.js` are intentionally kept when they do at least one of the following:

- compose card-instance state before calling an extracted helper or renderer;
- provide callback bridges so renderers and helper modules do not depend on the card instance;
- preserve compatibility with existing tests or legacy method call sites;
- keep extracted modules independent from card-instance state;
- perform DOM, Home Assistant, modal, preference, render-timing, capability, event-listener, or service orchestration that belongs in the main custom element.

Only objectively unused wrappers should be removed, and only after confirming they are not referenced by `src/`, tests, renderer callbacks, compatibility paths, or the generated artifact process. If there is doubt, keep the wrapper and document the reason in the relevant cleanup work.

## Guardrails for future work

- Prefer direct module tests for extracted pure/data helpers before moving any additional behavior.
- Keep helpers explicit: pass inputs and callbacks instead of importing or depending on the card instance.
- Preserve public config option names, custom element names, CSS class names, DOM structure, data attributes, IDs, translations, and visual behavior unless a prompt explicitly requests a behavior change.
- Preserve both `daylight-calendar-card` and legacy `skylight-calendar-card` compatibility.
- Treat visual/layout changes as potentially breaking for dashboard users.
- Keep future refactors small, opportunistic, and tied to real feature or bug work rather than extraction-only churn.
