# Source map

`src/skylight-calendar-card.js` is the Rollup entry point and the main custom element source for Daylight Calendar Card. It owns card-instance orchestration, Home Assistant integration glue, lifecycle methods, rendering, DOM updates, CSS, modals, and editor behavior.

The root `skylight-calendar-card.js` file is generated from `src/skylight-calendar-card.js` and committed as the HACS/manual-install artifact. Run `npm run build` to regenerate it, then verify it is current with `git diff --exit-code -- skylight-calendar-card.js`.

Current source module groups:

- `translations.js`: translation data.
- `constants.js`: shared static constants.
- `defaults.js`: default config values, option lists, aliases, and stub config creation.
- `utils/`: pure utility helpers.
- `events/`: event normalization and event-related non-rendering helpers.
- `rules/`: rule normalization and condition matching helpers.

Future modules may be added as the card evolves. Keep runtime rendering, CSS, DOM structure, lifecycle, modal, editor, and service orchestration in `src/skylight-calendar-card.js` unless a change is explicitly scoped to move that area.
