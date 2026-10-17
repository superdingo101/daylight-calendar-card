import { test } from 'node:test';
import assert from 'node:assert/strict';

import {
  DEFAULT_COUNTDOWN_MARKER,
  applyCountdownMarker,
  formatCountdownLabel,
  getCountdownDays,
  getCountdownFetchRange,
  getCountdownBarItems,
  hasCountdownMarker,
  isCountdownEvent,
  normalizeCountdownConfig,
  renderColoredHourglassSvg,
  selectCountdownEvents,
  stripCountdownMarker
} from './src/countdown/countdown.js';
import { renderCountdownBar } from './src/renderers/header-renderer.js';

const identity = (value) => String(value);
const t = (key, params = {}) => ({
  countdownToday: 'Today',
  countdownTomorrow: 'Tomorrow',
  countdownDays: `${params.count} days`
}[key] || key);
const getEventStartDate = (event) => (event.start.date
  ? new Date(`${event.start.date}T00:00:00`)
  : new Date(event.start.dateTime));

test('normalizeCountdownConfig is disabled unless configured', () => {
  assert.equal(normalizeCountdownConfig(undefined), null);
  assert.equal(normalizeCountdownConfig(false), null);
  assert.equal(normalizeCountdownConfig({ enabled: false }), null);
  assert.deepEqual(normalizeCountdownConfig(true), {
    marker: DEFAULT_COUNTDOWN_MARKER,
    days_ahead: 90,
    max_items: 3,
    calendars: [],
    show_toggle: true
  });
});

test('normalizeCountdownConfig clamps and trims options', () => {
  const config = normalizeCountdownConfig({
    marker: '  ⏳ Aftellen ',
    days_ahead: 9999,
    max_items: '0',
    calendars: ['calendar.trips', '', 5],
    show_toggle: false
  });
  assert.equal(config.marker, '⏳ Aftellen');
  assert.equal(config.days_ahead, 366);
  assert.equal(config.max_items, 3);
  assert.deepEqual(config.calendars, ['calendar.trips']);
  assert.equal(config.show_toggle, false);
});

test('countdown marker is detected, applied and stripped as its own line', () => {
  const marker = '⏳ Aftellen';
  assert.equal(hasCountdownMarker('Bring snacks\n\n⏳ aftellen ', marker), true);
  assert.equal(hasCountdownMarker('We are ⏳ Aftellen today', marker), false);
  assert.equal(applyCountdownMarker('', marker, true), marker);
  assert.equal(applyCountdownMarker('Bring snacks', marker, true), 'Bring snacks\n\n⏳ Aftellen');
  assert.equal(applyCountdownMarker('Bring snacks\n\n⏳ Aftellen', marker, true), 'Bring snacks\n\n⏳ Aftellen');
  assert.equal(applyCountdownMarker('Bring snacks\n\n⏳ Aftellen', marker, false), 'Bring snacks');
  assert.equal(stripCountdownMarker(undefined, marker), '');
});

test('isCountdownEvent matches marker or configured countdown calendar', () => {
  const config = normalizeCountdownConfig({ calendars: ['calendar.trips'] });
  assert.equal(isCountdownEvent({ entityId: 'calendar.trips', description: '' }, config), true);
  assert.equal(isCountdownEvent({ entityId: 'calendar.family', description: DEFAULT_COUNTDOWN_MARKER }, config), true);
  assert.equal(isCountdownEvent({ entityId: 'calendar.family', description: 'Nothing' }, config), false);
});

test('getCountdownDays counts local calendar days', () => {
  const now = new Date(2026, 9, 14, 23, 30);
  assert.equal(getCountdownDays(new Date(2026, 9, 14, 8, 0), now), 0);
  assert.equal(getCountdownDays(new Date(2026, 9, 15, 0, 10), now), 1);
  assert.equal(getCountdownDays(new Date(2026, 11, 25), now), 72);
});

test('selectCountdownEvents keeps the next occurrence per series, soonest first, limited', () => {
  const config = normalizeCountdownConfig({ max_items: 2, days_ahead: 60 });
  const now = new Date(2026, 9, 14, 12, 0);
  const marked = (summary, date, uid, entityId = 'calendar.family') => ({
    entityId, uid, summary, description: DEFAULT_COUNTDOWN_MARKER, start: { date }
  });
  const entries = selectCountdownEvents([
    marked('Swimming', '2026-10-21', 'swim'),
    marked('Swimming', '2026-10-28', 'swim'),
    marked('Holiday', '2026-10-17', 'holiday'),
    marked('Birthday', '2026-11-10', 'bday'),
    marked('Past', '2026-10-13', 'past'),
    marked('Too far', '2027-01-30', 'far'),
    { entityId: 'calendar.family', uid: 'plain', summary: 'Plain', description: '', start: { date: '2026-10-15' } }
  ], config, { getEventStartDate, now });

  assert.deepEqual(entries.map(({ event, days }) => [event.summary, days]), [['Holiday', 3], ['Swimming', 7]]);
});

test('countdown labels and bar items render escaped', () => {
  assert.equal(formatCountdownLabel(0, t), 'Today');
  assert.equal(formatCountdownLabel(1, t), 'Tomorrow');
  assert.equal(formatCountdownLabel(12, t), '12 days');

  const items = getCountdownBarItems([{ event: { summary: 'Trip <b>' }, days: 5 }], t);
  assert.deepEqual(items, [{ icon: 'mdi:timer-sand', iconHtml: '', title: 'Trip <b>', label: '5 days' }]);

  const escape = (value) => identity(value).replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const html = renderCountdownBar({ items, helpers: { escapeHtml: escape, escapeHtmlAttribute: escape } });
  assert.match(html, /class="countdown-bar"/);
  assert.match(html, /<button type="button" class="countdown-chip" data-countdown-index="0"/);
  assert.match(html, /<span class="countdown-chip-title">Trip &lt;b&gt;<\/span><span class="countdown-chip-label">· 5 days<\/span>/);
  assert.equal(renderCountdownBar({ items: [], helpers: {} }), '');
});

test('getCountdownFetchRange skips the already loaded range', () => {
  const config = normalizeCountdownConfig({ days_ahead: 30 });
  const now = new Date(2026, 9, 14, 12, 0);
  const full = getCountdownFetchRange(config, now);
  assert.deepEqual([full.startDate, full.endDate], [new Date(2026, 9, 14), new Date(2026, 10, 14)]);

  const loaded = { startDate: new Date(2026, 9, 12), endDate: new Date(2026, 9, 26) };
  const rest = getCountdownFetchRange(config, now, loaded);
  assert.deepEqual([rest.startDate, rest.endDate], [new Date(2026, 9, 26), new Date(2026, 10, 14)]);

  assert.equal(getCountdownFetchRange(config, now, { startDate: new Date(2026, 9, 1), endDate: new Date(2026, 11, 1) }), null);
  const future = { startDate: new Date(2026, 9, 20), endDate: new Date(2026, 9, 30) };
  assert.deepEqual(getCountdownFetchRange(config, now, future).startDate, new Date(2026, 9, 14));
});

test('colored countdown icon replaces the mdi icon when provided', () => {
  const svg = renderColoredHourglassSvg();
  assert.match(svg, /^<svg class="countdown-svg-icon"/);
  const items = getCountdownBarItems([{ event: { summary: 'Trip' }, days: 2 }], t, { iconHtml: svg });
  const html = renderCountdownBar({ items, helpers: { escapeHtml: identity, escapeHtmlAttribute: identity } });
  assert.match(html, /class="countdown-svg-icon"/);
  assert.doesNotMatch(html, /<ha-icon/);
});
