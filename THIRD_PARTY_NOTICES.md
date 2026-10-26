# Third-party notices

Daylight Calendar Card is licensed under the MIT License (see [`LICENSE`](LICENSE)).
It includes the following third-party material under its own license.

## Home Assistant frontend — weather icon artwork

- **Used in:** `src/weather/weather-svg-icons.js`, and through it the generated `skylight-calendar-card.js`
  (the colored weather icons for `weather_icon_style: colored`).
- **Source:** [`src/data/weather.ts`](https://github.com/home-assistant/frontend/blob/dev/src/data/weather.ts)
  in [home-assistant/frontend](https://github.com/home-assistant/frontend).
- **Copyright:** Home Assistant contributors.
- **License:** Apache License 2.0 — full text in [`LICENSES/Apache-2.0.txt`](LICENSES/Apache-2.0.txt),
  also available at <https://www.apache.org/licenses/LICENSE-2.0>.
- **Changes:** only the SVG path data is used. The paths were regrouped per weather condition, given
  CSS classes for theming, and are rendered as standalone inline SVG markup by this card's own code.
