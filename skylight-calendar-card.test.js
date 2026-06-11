const { test, after } = require('node:test');
const assert = require('node:assert/strict');

class HTMLElementMock {
  attachShadow() {
    this.shadowRoot = { innerHTML: '', querySelector: () => null, querySelectorAll: () => [], getElementById: () => null };
    return this.shadowRoot;
  }
  querySelectorAll() { return []; }
  querySelector() { return null; }
  dispatchEvent() { return true; }
}

global.HTMLElement = HTMLElementMock;
global.customElements = {
  registry: new Map(),
  define(name, ctor) {
    if (this.registry.has(name) || Array.from(this.registry.values()).includes(ctor)) {
      throw new DOMException('This name or constructor has already been registered in the registry.', 'NotSupportedError');
    }
    this.registry.set(name, ctor);
  },
  get(name) { return this.registry.get(name); }
};
global.window = { localStorage: { getItem: () => null, setItem: () => {} }, getComputedStyle: () => ({ color: 'rgb(0, 0, 0)' }) };
global.document = {
  createElement: () => ({
    style: {},
    _textContent: '',
    set textContent(value) { this._textContent = String(value ?? ''); },
    get textContent() { return this._textContent; },
    get innerHTML() {
      return this._textContent.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
    },
    appendChild: () => {},
    remove: () => {}
  }),
  body: { appendChild: () => {} }
};
global.CustomEvent = class CustomEvent {
  constructor(type, init = {}) {
    this.type = type;
    this.detail = init.detail;
    this.bubbles = !!init.bubbles;
    this.composed = !!init.composed;
  }
};
global.DOMException = global.DOMException || class DOMException extends Error {
  constructor(message, name) {
    super(message);
    this.name = name;
  }
};

after(() => {
  delete global.HTMLElement;
  delete global.customElements;
  delete global.window;
  delete global.document;
  delete global.CustomEvent;
});

require('./skylight-calendar-card.js');

const Card = customElements.get('skylight-calendar-card');
const DaylightCard = customElements.get('daylight-calendar-card');
const originalCardRender = Card.prototype.render;
Card.prototype.render = function() {};
Card.prototype.renderPreservingAgendaScroll = function() {};
Card.prototype.ensureEventsForCurrentRange = function() {};


const CONFIG_COVERAGE_INVENTORY = {
  title: 'Danish language support localizes core labels and locale',
  entities: 'setConfig validates calendar entities and render tests use configured calendars',
  first_day_of_week: 'first_day_of_week normalizes to firstDayOfWeek and controls headers and week starts',
  colors: 'calendar colors prefer configured values before default palette',
  calendar_names: 'calendar_names overrides displayed calendar labels',
  calendar_badge_icons: 'calendar badge can show linked person location and picture',
  calendar_person_entities: 'calendar badge can show linked person location and picture',
  max_events: 'max_events limits rendered agenda events',
  default_view: 'setConfig normalizes fallback values and aliases',
  week_days: 'week_days filters configured week rendering days',
  rolling_days_week_compact: 'rolling_days_week_compact shows current day plus configured days',
  rolling_days_schedule: 'rolling_days_schedule shows current day plus configured days',
  rolling_days_agenda: 'agenda rolling days are configurable and include current day + N days',
  rolling_weeks: 'rolling_weeks month mode renders configured rolling rows from first day of week',
  show_week_numbers_month: 'show_week_numbers_month adds month-only week number headers and cells',
  show_all_events_month: 'month all-events options affect visible event limits',
  show_all_details_month: 'hide_times_for_calendars applies across agenda, week-standard, week-compact, and month renderers',
  hide_the_past: 'legacy hide_the_past true maps to hiding ended events',
  past_event_mode: 'past_event_mode muted leaves ended events visible and applies muted style',
  hide_empty_days: 'agenda hide_empty_days removes empty day rows',
  agenda_compact_events: 'agenda compact events use compact class and sizing',
  shorten_event_times: 'shorten_event_times removes minutes from whole-hour 12-hour event times',
  disable_swipe_controls: 'disable_swipe_controls disables swipe controls without affecting agenda',
  week_start_hour: 'lock_schedule_hours keeps configured schedule hours from expanding to events',
  week_end_hour: 'lock_schedule_hours keeps configured schedule hours from expanding to events',
  lock_schedule_hours: 'lock_schedule_hours keeps configured schedule hours from expanding to events',
  compact_height: 'setConfig applies visual layout and styling options',
  compact_width: 'setConfig applies visual layout and styling options',
  height_scale: 'height_scale scales week-standard hour slots deterministically',
  compact_header: 'setConfig applies visual layout and styling options',
  hide_year: 'setConfig applies visual layout and styling options',
  hide_calendars: 'setConfig applies visual layout and styling options',
  hide_header: 'hide_header removes the header wrapper entirely',
  hide_calendar_names: 'setConfig applies visual layout and styling options',
  hide_controls: 'calendar render includes header controls and modal container',
  hide_navigation_buttons: 'hide_navigation_buttons hides previous, next, and today controls only',
  hide_add_event_button: 'hide_add_event_button hides add event control only',
  hide_view_selector: 'hide_view_selector hides only the selector control',
  hide_dark_mode_toggle: 'hide_dark_mode_toggle hides only the theme toggle',
  show_dashboard_nav_button: 'setConfig applies visual layout and styling options',
  header_dashboard_path: 'setConfig schema keeps normalized fields from being overwritten by raw config',
  header_time_sensor: 'setConfig schema keeps normalized fields from being overwritten by raw config',
  header_weather_sensor: 'weather renders Home Assistant mdi icons instead of emoji glyphs',
  hide_event_calendar_bubble: 'setConfig applies visual layout and styling options',
  show_event_location: 'setConfig applies visual layout and styling options',
  use_short_location: 'setConfig applies visual layout and styling options',
  event_font_size: 'event font size wrappers share fallback and override behavior',
  event_time_font_size: 'event font size wrappers share fallback and override behavior',
  event_location_font_size: 'event font size wrappers share fallback and override behavior',
  event_calendar_friendly_name: 'setConfig applies visual layout and styling options',
  event_title_prefix: 'setConfig schema keeps normalized fields from being overwritten by raw config',
  event_font_colors: 'editor color swatches show effective calendar and event font colors',
  event_styles: 'setConfig schema keeps normalized fields from being overwritten by raw config',
  day_styles: 'setConfig applies visual layout and styling options',
  day_badges: 'setConfig schema keeps normalized fields from being overwritten by raw config',
  hide_times_for_calendars: 'hide_times_for_calendars applies across agenda, week-standard, week-compact, and month renderers',
  show_current_time_bar: 'setConfig applies visual layout and styling options',
  header_color: 'setConfig applies visual layout and styling options',
  header_text_color: 'setConfig applies visual layout and styling options',
  header_background_transparent: 'setConfig normalizes fallback values and aliases',
  header_background_opacity: 'setConfig applies visual layout and styling options',
  background_transparent: 'setConfig normalizes fallback values and aliases',
  background_opacity: 'setConfig applies visual layout and styling options',
  background_image_url: 'setConfig applies visual layout and styling options',
  background_image_size: 'setConfig applies visual layout and styling options',
  background_image_position: 'setConfig applies visual layout and styling options',
  background_image_repeat: 'setConfig applies visual layout and styling options',
  combine_calendars: 'setConfig applies visual layout and styling options',
  combine_style: 'normalizes enum helper aliases and fallbacks consistently',
  combine_background: 'setConfig applies visual layout and styling options',
  combine_calendars_width: 'setConfig applies visual layout and styling options',
  event_color_bar_width: 'event color modes normalize widths and tint opacity endpoints',
  event_color_mode: 'event color modes normalize widths and tint opacity endpoints',
  event_neutral_background: 'event color modes normalize widths and tint opacity endpoints',
  event_tint_opacity: 'event color modes normalize widths and tint opacity endpoints',
  enable_event_management: 'checkAllCalendarCapabilities marks google, caldav, and local capabilities correctly',
  event_modal_size: 'event_modal_size defaults and normalizes to supported modal size classes',
  readonly_calendars: 'readonly calendars suppress event management actions',
  hide_badge_calendars: 'calendar badges respect hidden badge calendars',
  default_hidden_calendars: 'default_hidden_calendars initializes hidden calendar badges',
  virtual_calendars: 'setConfig applies visual layout and styling options',
  language: 'Danish language support localizes core labels and locale',
  locale: 'Danish language support localizes core labels and locale',
  color_scheme: 'setConfig normalizes fallback values and aliases',
  preference_storage_key: 'preference_storage_key customizes persisted preference storage key',
  use_24hr_schedule: 'shorten_event_times compacts whole-hour 24-hour event times',
  default_calendar_visibility: 'default calendar visibility map can show or hide individual calendars',
  calendar_visibility: 'default calendar visibility map can show or hide individual calendars'
};

function schemaKeyToYamlOption(key) {
  return key === 'firstDayOfWeek' ? 'first_day_of_week' : key;
}

function localDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function dateKeys(dates) {
  return dates.map(localDateKey);
}

function localDateDataAttribute(dateKey) {
  const [year, month, day] = dateKey.split('-').map(Number);
  return new Date(year, month - 1, day).toISOString();
}

function makeCard(config = { entities: ['calendar.family'] }) {
  const card = new Card();
  card.setConfig(config);
  return card;
}


test('registers daylight custom element while retaining skylight compatibility', () => {
  assert.notEqual(DaylightCard, Card);
  assert.equal(Card.prototype instanceof DaylightCard, true);
  const DaylightEditor = customElements.get('daylight-calendar-card-editor');
  const LegacyEditor = customElements.get('skylight-calendar-card-editor');
  assert.notEqual(DaylightEditor, LegacyEditor);
  assert.equal(LegacyEditor.prototype instanceof DaylightEditor, true);
  assert.deepEqual(window.customCards.at(-1), {
    type: 'daylight-calendar-card',
    name: 'Daylight Calendar Card',
    description: 'A bright, family-friendly calendar card for Home Assistant dashboards.',
    preview: true,
    documentationURL: 'https://docs.daylightcalendar.com'
  });
});

test('Danish language support localizes core labels and locale', () => {
  const card = makeCard({ entities: ['calendar.family'], language: 'da' });

  assert.equal(card.getLanguage(), 'da');
  assert.equal(card.getLocale(), 'da-DK');
  assert.equal(card.t('defaultTitle'), 'Familiekalender');
  assert.equal(card.t('addEvent'), 'Tilføj begivenhed');
  assert.equal(card.t('deleteEventConfirm', { title: 'Sommerfest' }), 'Er du sikker på, at du vil slette "Sommerfest"? Denne handling kan ikke fortrydes.');
  assert.equal(card.t('durationHours', { count: 2 }), '2 timer');
});

function recurrenceCases() {
  return [
    { name: 'single event', rrule: null },
    { name: 'recurring no end date', rrule: 'FREQ=WEEKLY' },
    { name: 'recurring until date', rrule: 'FREQ=WEEKLY;UNTIL=20261231T235959Z' },
    { name: 'recurring n times', rrule: 'FREQ=WEEKLY;COUNT=5' }
  ];
}

test('YAML config coverage inventory tracks every normalized schema option', () => {
  const card = makeCard();
  const schemaOptions = card.getConfigNormalizationSchema().map((field) => schemaKeyToYamlOption(field.key));
  const runtimeOptionsOutsideSchema = ['use_24hr_schedule', 'default_calendar_visibility', 'calendar_visibility'];
  const requiredInventoryKeys = [...schemaOptions, ...runtimeOptionsOutsideSchema];

  for (const option of requiredInventoryKeys) {
    assert.ok(CONFIG_COVERAGE_INVENTORY[option], `${option} should be represented in CONFIG_COVERAGE_INVENTORY`);
  }

  const extraInventoryKeys = Object.keys(CONFIG_COVERAGE_INVENTORY).filter((option) => !requiredInventoryKeys.includes(option));
  assert.deepEqual(extraInventoryKeys, [], `unexpected inventory entries: ${extraInventoryKeys.join(', ')}`);
});

test('getStubConfig and normalized defaults include key configuration defaults', () => {
  const stub = Card.getStubConfig();
  const requiredStubKeys = [
    'default_view', 'first_day_of_week', 'week_days', 'week_start_hour', 'week_end_hour',
    'lock_schedule_hours', 'disable_swipe_controls', 'show_all_events_month', 'show_all_details_month',
    'hide_empty_days', 'agenda_compact_events', 'shorten_event_times', 'compact_width',
    'show_current_time_bar', 'show_event_location', 'use_short_location',
    'event_calendar_friendly_name', 'event_title_prefix', 'past_event_mode', 'event_color_mode',
    'event_neutral_background', 'event_tint_opacity', 'event_color_bar_width', 'combine_style',
    'combine_background', 'hide_calendars', 'hide_header', 'hide_year', 'hide_controls',
    'hide_navigation_buttons', 'hide_add_event_button', 'hide_view_selector',
    'hide_dark_mode_toggle', 'show_dashboard_nav_button', 'header_dashboard_path',
    'header_weather_sensor', 'calendar_person_entities', 'default_hidden_calendars', 'color_scheme', 'enable_event_management', 'event_modal_size'
  ];
  for (const key of requiredStubKeys) assert.ok(key in stub, `${key} should exist in getStubConfig()`);

  const normalized = makeCard({ entities: ['calendar.family'] })._config;
  for (const field of makeCard().getConfigNormalizationSchema()) {
    assert.ok(field.key in normalized, `${field.key} should exist after normalizeConfig()`);
  }
  assert.equal(normalized.firstDayOfWeek, 0);
  assert.equal(normalized.event_modal_size, 'medium');
  assert.equal(Object.prototype.hasOwnProperty.call(normalized, 'use_24hr_schedule'), false);
});

test('event_modal_size defaults and normalizes to supported modal size classes', () => {
  assert.equal(Card.getStubConfig().event_modal_size, 'medium');

  const invalid = makeCard({ entities: ['calendar.family'], event_modal_size: 'giant' });
  assert.equal(invalid._config.event_modal_size, 'medium');
  assert.equal(invalid.getEventModalSizeClass(), 'modal-size-medium');

  for (const size of ['narrow', 'medium', 'wide', 'full']) {
    const card = new Card();
    card._hass = { states: {}, locale: { language: 'en' }, language: 'en', themes: { darkMode: false } };
    card.setConfig({ entities: ['calendar.family'], event_modal_size: size });
    originalCardRender.call(card);
    assert.match(card._root.innerHTML, new RegExp(`class="modal-content modal-size-${size}" id="modal-content"`));
  }
});

test('event modal size classes can be applied without changing modal content behavior', () => {
  const card = makeCard({ entities: ['calendar.family'], event_modal_size: 'wide' });
  const classes = new Set(['modal-content']);
  const content = {
    classList: {
      add: (...names) => names.forEach((name) => classes.add(name)),
      remove: (...names) => names.forEach((name) => classes.delete(name))
    }
  };

  card.applyEventModalSizeClass(content);
  assert.equal(classes.has('modal-content'), true);
  assert.equal(classes.has('modal-size-wide'), true);
  assert.equal(classes.has('modal-size-medium'), false);
});

test('setConfig applies visual layout and styling options', () => {
  const card = makeCard({
    entities: ['calendar.family'],
    default_view: 'week',
    compact_height: true,
    compact_width: true,
    compact_header: true,
    hide_year: true,
    hide_calendars: true,
    hide_header: true,
    hide_calendar_names: true,
    hide_controls: true,
    hide_navigation_buttons: true,
    hide_add_event_button: true,
    hide_view_selector: true,
    hide_dark_mode_toggle: true,
    show_dashboard_nav_button: true,
    header_dashboard_path: 'lovelace-mobile',
    hide_event_calendar_bubble: true,
    show_event_location: true,
    use_short_location: true,
    event_font_size: 14,
    event_time_font_size: 12,
    event_location_font_size: 10,
    event_calendar_friendly_name: true,
    event_title_prefix: 'icon',
    show_current_time_bar: true,
    shorten_event_times: true,
    header_color: '#123456',
    header_text_color: '#ffffff',
    header_background_opacity: 55,
    background_opacity: 35,
    background_image_url: 'https://example.com/bg.png',
    background_image_size: 'contain',
    background_image_position: 'top left',
    background_image_repeat: 'repeat-x',
    combine_calendars: true,
    combine_style: 'zebra',
    combine_background: '#abcdef',
    combine_calendars_width: 26,
    event_color_mode: 'left-tint',
    event_neutral_background: '#F8F3E9',
    event_tint_opacity: 25,
    event_color_bar_width: 12,
    color_scheme: 'dark',
    calendar_badge_icons: { 'calendar.family': 'mdi:home' },
    calendar_person_entities: { 'calendar.family': 'person.ian' },
    colors: { 'calendar.family': '#f00' },
    event_font_colors: { 'calendar.family': '#0f0' },
    hide_badge_calendars: ['calendar.family'],
    default_hidden_calendars: ['calendar.family'],
    virtual_calendars: [{ name: 'home', icon: 'mdi:house', entities: ['calendar.family'] }],
    day_styles: [{ when: { day_of_week: [1] }, style: { background: '#111' } }],
    event_styles: [{ when: { title_contains: 'Meeting' }, style: { color: '#222' } }]
  });

  assert.equal(card._config.default_view, 'week-compact');
  assert.equal(card._config.compact_height, true);
  assert.equal(card._config.compact_width, true);
  assert.equal(card._config.compact_header, true);
  assert.equal(card._config.hide_year, true);
  assert.equal(card._config.hide_calendars, true);
  assert.equal(card._config.hide_header, true);
  assert.equal(card._config.hide_calendar_names, true);
  assert.equal(card._config.hide_controls, true);
  assert.equal(card._config.hide_navigation_buttons, true);
  assert.equal(card._config.hide_add_event_button, true);
  assert.equal(card._config.hide_view_selector, true);
  assert.equal(card._config.hide_dark_mode_toggle, true);
  assert.equal(card._config.show_dashboard_nav_button, true);
  assert.equal(card._config.header_dashboard_path, '/lovelace-mobile');
  assert.equal(card._config.hide_event_calendar_bubble, true);
  assert.equal(card._config.show_event_location, true);
  assert.equal(card._config.use_short_location, true);
  assert.equal(card._config.event_font_size, 14);
  assert.equal(card._config.event_time_font_size, 12);
  assert.equal(card._config.event_location_font_size, 10);
  assert.equal(card._config.event_calendar_friendly_name, true);
  assert.equal(card._config.event_title_prefix, 'badge_icon');
  assert.equal(card._config.show_current_time_bar, true);
  assert.equal(card._config.shorten_event_times, true);
  assert.equal(card._config.header_color, '#123456');
  assert.equal(card._config.header_text_color, '#ffffff');
  assert.equal(card._config.header_background_opacity, 55);
  assert.equal(card._config.background_opacity, 35);
  assert.equal(card._config.background_image_url, 'https://example.com/bg.png');
  assert.equal(card._config.background_image_size, 'contain');
  assert.equal(card._config.background_image_position, 'top left');
  assert.equal(card._config.background_image_repeat, 'repeat-x');
  assert.equal(card._config.combine_calendars, true);
  assert.equal(card._config.combine_style, 'zebra');
  assert.equal(card._config.combine_background, '#abcdef');
  assert.equal(card._config.combine_calendars_width, 26);
  assert.equal(card._config.event_color_mode, 'left-tint');
  assert.equal(card._config.event_neutral_background, '#F8F3E9');
  assert.equal(card._config.event_tint_opacity, 25);
  assert.equal(card._config.event_color_bar_width, 12);
  assert.equal(card._config.color_scheme, 'dark');
  assert.equal(card._config.calendar_badge_icons['calendar.family'], 'mdi:home');
  assert.equal(card._config.calendar_person_entities['calendar.family'], 'person.ian');
  assert.equal(card._config.colors['calendar.family'], '#f00');
  assert.equal(card._config.event_font_colors['calendar.family'], '#0f0');
  assert.deepEqual(card._config.hide_badge_calendars, ['calendar.family']);
  assert.deepEqual(card._config.default_hidden_calendars, ['calendar.family']);
  assert.equal(card._hiddenCalendars.has('calendar.family'), true);
  assert.equal(card._config.virtual_calendars[0].name, 'home');
});

test('shorten_event_times defaults to unchanged event time formatting', () => {
  const card = makeCard({ entities: ['calendar.family'], locale: 'en-US' });
  const start = new Date('2026-05-14T10:00:00Z');
  const end = new Date('2026-05-14T11:00:00Z');

  assert.equal(card._config.shorten_event_times, false);
  assert.equal(card.formatEventTime(start), card.formatTime(start));
  assert.equal(card.formatEventTimeRange(start, end), `${card.formatTime(start)} - ${card.formatTime(end)}`);
});

test('shorten_event_times false preserves schedule formatter labels', () => {
  const card = makeCard({ entities: ['calendar.family'], locale: 'en-US', shorten_event_times: false });
  const originalFormatTime = card.formatTime.bind(card);
  const originalFormatScheduleTime = card.formatScheduleTime.bind(card);
  const formatToken = (prefix, date) => `${prefix}-${date.getUTCHours()}:${String(date.getUTCMinutes()).padStart(2, '0')}`;
  card.formatTime = (date) => formatToken('plain', date);
  card.formatScheduleTime = (date) => formatToken('schedule', date);

  try {
    const event = {
      entityId: 'calendar.family',
      color: '#3366ff',
      summary: 'Schedule event',
      start: { dateTime: '2026-05-14T09:00:00Z' },
      end: { dateTime: '2026-05-14T10:30:00Z' }
    };
    const weekStandardHtml = card.renderTimedEventsForDay([event], new Date('2026-05-14T00:00:00Z'), 0, 23, 40);

    assert.match(weekStandardHtml, /schedule-9:00 - schedule-10:30/);
    assert.doesNotMatch(weekStandardHtml, /plain-9:00 - plain-10:30/);
    assert.equal(card.formatEventTimeRange(new Date('2026-05-14T09:00:00Z'), new Date('2026-05-14T10:30:00Z')), 'plain-9:00 - plain-10:30');
    assert.equal(card.formatEventTimeRange(new Date('2026-05-14T09:00:00Z'), new Date('2026-05-14T10:30:00Z'), { schedule: true }), 'schedule-9:00 - schedule-10:30');

    const spanningEvent = {
      ...event,
      summary: 'Overnight event',
      start: { dateTime: '2026-05-14T22:00:00Z' },
      end: { dateTime: '2026-05-16T01:00:00Z' }
    };
    assert.equal(card.getScheduleVisualInfo(spanningEvent).displayTitle, 'Overnight event, schedule-22:00');
  } finally {
    card.formatTime = originalFormatTime;
    card.formatScheduleTime = originalFormatScheduleTime;
  }
});

test('shorten_event_times removes minutes from whole-hour 12-hour event times', () => {
  const card = makeCard({ entities: ['calendar.family'], locale: 'en-US', shorten_event_times: true });
  const start = new Date('2026-05-14T10:00:00Z');
  const end = new Date('2026-05-14T11:00:00Z');

  assert.equal(card.formatEventTime(start), '10 AM');
  assert.equal(card.formatEventTimeRange(start, end), '10 AM - 11 AM');
});

test('shorten_event_times compacts whole-hour 24-hour event times', () => {
  const card = makeCard({ entities: ['calendar.family'], locale: 'en-US', use_24hr_schedule: true, shorten_event_times: true });

  assert.equal(card.formatEventTime(new Date('2026-05-14T10:00:00Z')), '10h');
});

test('shorten_event_times compacts whole-hour 24-hour ranges', () => {
  const card = makeCard({ entities: ['calendar.family'], locale: 'en-US', use_24hr_schedule: true, shorten_event_times: true });
  const start = new Date('2026-05-14T10:00:00Z');
  const end = new Date('2026-05-14T11:00:00Z');

  assert.equal(card.formatEventTimeRange(start, end), '10-11h');
});

test('shorten_event_times preserves h24 midnight hour labels', () => {
  const card = makeCard({ entities: ['calendar.family'], locale: 'en-US', use_24hr_schedule: true, shorten_event_times: true });
  const start = new Date('2026-05-14T23:00:00Z');
  const end = new Date('2026-05-15T00:00:00Z');

  assert.equal(card.formatTime(end), '24:00');
  assert.equal(card.formatEventTime(end), '24h');
  assert.equal(card.formatEventTimeRange(start, end), '23-24h');
});

test('shorten_event_times preserves needed minutes in mixed 24-hour ranges', () => {
  const card = makeCard({ entities: ['calendar.family'], locale: 'en-US', use_24hr_schedule: true, shorten_event_times: true });

  assert.equal(card.formatEventTimeRange(new Date('2026-05-14T10:30:00Z'), new Date('2026-05-14T11:00:00Z')), '10:30-11h');
  assert.equal(card.formatEventTimeRange(new Date('2026-05-14T10:00:00Z'), new Date('2026-05-14T11:30:00Z')), '10-11:30');
  assert.equal(card.formatEventTimeRange(new Date('2026-05-14T10:15:00Z'), new Date('2026-05-14T11:45:00Z')), '10:15-11:45');
});

test('shorten_event_times leaves all-day event labels unaffected', () => {
  const event = {
    entityId: 'calendar.family',
    color: '#3366ff',
    summary: 'All-day event',
    start: { date: '2026-05-14' },
    end: { date: '2026-05-15' }
  };
  const card = makeCard({ entities: ['calendar.family'], locale: 'en-US', shorten_event_times: true });
  const html = card.renderWeekCompactEvent(event, new Date('2026-05-14T00:00:00Z'));

  assert.match(html, /week-compact-event-time">All Day</);
  assert.doesNotMatch(html, /10 AM|10h/);
});

test('default_hidden_calendars initializes hidden calendar badges', () => {
  const card = makeCard({
    entities: ['calendar.family', 'calendar.work'],
    default_hidden_calendars: ['calendar.work', 'calendar.unknown']
  });

  assert.deepEqual(card._config.default_hidden_calendars, ['calendar.work']);
  assert.equal(card._hiddenCalendars.has('calendar.family'), false);
  assert.equal(card._hiddenCalendars.has('calendar.work'), true);
});

test('default calendar visibility map can show or hide individual calendars', () => {
  const card = makeCard({
    entities: ['calendar.family', 'calendar.work', 'calendar.school'],
    default_hidden_calendars: ['calendar.school'],
    default_calendar_visibility: {
      'calendar.family': 'hide',
      'calendar.work': false,
      'calendar.school': 'show'
    }
  });

  assert.deepEqual(card._config.default_hidden_calendars.sort(), ['calendar.family', 'calendar.work']);
  assert.equal(card._hiddenCalendars.has('calendar.family'), true);
  assert.equal(card._hiddenCalendars.has('calendar.work'), true);
  assert.equal(card._hiddenCalendars.has('calendar.school'), false);
});

test('persisted calendar visibility overrides configured hidden defaults', () => {
  const originalLocalStorage = window.localStorage;
  window.localStorage = {
    getItem: () => JSON.stringify({ hiddenCalendars: [] }),
    setItem: () => {}
  };

  try {
    const card = makeCard({
      entities: ['calendar.family', 'calendar.work'],
      default_hidden_calendars: ['calendar.work']
    });

    assert.equal(card._hiddenCalendars.has('calendar.work'), false);
  } finally {
    window.localStorage = originalLocalStorage;
  }
});

test('setConfig normalizes fallback values and aliases', () => {
  const card = makeCard({
    entities: ['calendar.family'],
    default_view: 'schedule',
    background_transparent: true,
    header_background_transparent: true,
    event_title_prefix: 'bad-value',
    color_scheme: 'invalid'
  });

  assert.equal(card._config.default_view, 'week-standard');
  assert.equal(card._config.background_opacity, 100);
  assert.equal(card._config.header_background_opacity, 100);
  assert.equal(card._config.event_title_prefix, 'none');
  assert.equal(card._config.color_scheme, 'auto');
});

test('setConfig schema keeps normalized fields from being overwritten by raw config', () => {
  const card = makeCard({
    entities: ['calendar.family'],
    default_view: 'week',
    event_title_prefix: 'icon',
    header_dashboard_path: 'lovelace-family',
    header_time_sensor: ' sensor.time ',
    event_styles: [
      { match: { title: 'meeting' }, style: { background_color: 'blue' } },
      { match: null, style: { background_color: 'red' } }
    ],
    day_badges: [
      { conditions: { title_contains: 'meeting' }, text: ' M ', background_color: 'lime', size: 28 },
      { conditions: null, text: 'ignored' }
    ]
  });

  assert.equal(card._config.default_view, 'week-compact');
  assert.equal(card._config.event_title_prefix, 'badge_icon');
  assert.equal(card._config.header_dashboard_path, '/lovelace-family');
  assert.equal(card._config.header_time_sensor, 'sensor.time');
  assert.deepEqual(card._config.event_styles.map(({ id, type, priority, index, match, output }) => ({ id, type, priority, index, match, output })), [{
    id: 'event-style-1',
    type: 'event_style',
    priority: 0,
    index: 0,
    match: { event: { title: 'meeting' }, day: {}, any: [], all: [], not: null },
    output: { style: { background_color: '#0000FF' } }
  }]);
  assert.deepEqual(card._config.day_badges.map(({ id, type, priority, index, match, output, conditions }) => ({ id, type, priority, index, match, output, conditions })), [{
    id: 'day-badge-1',
    type: 'day_badge',
    priority: 0,
    index: 0,
    match: { event: { title: 'contains:meeting' }, day: {}, any: [], all: [], not: null },
    output: { text: 'M', background_color: '#00FF00', size: '28px' },
    conditions: { title: 'contains:meeting' }
  }]);
});

test('setConfig preserves unknown custom config keys during normalization', () => {
  const customObject = { enabled: true };
  const card = makeCard({
    entities: ['calendar.family'],
    custom_integration_key: customObject,
    custom_scalar: 'keep-me'
  });

  assert.equal(card._config.custom_integration_key, customObject);
  assert.equal(card._config.custom_scalar, 'keep-me');
});

test('first_day_of_week normalizes to firstDayOfWeek and controls headers and week starts', () => {
  const card = makeCard({ entities: ['calendar.family'], first_day_of_week: 1 });
  card._currentDate = new Date('2026-05-13T12:00:00Z');
  card.setWeekStart();

  assert.equal(card._config.firstDayOfWeek, 1);
  assert.equal(localDateKey(card._weekStart), '2026-05-11');

  const headers = card.renderDayHeaders();
  assert.ok(headers.indexOf('Mon') < headers.indexOf('Tue'));
  assert.ok(headers.indexOf('Sun') > headers.indexOf('Sat'));
});

test('week_days filters configured week rendering days', () => {
  const card = makeCard({
    entities: ['calendar.family'],
    first_day_of_week: 1,
    week_days: [1, 3, 5]
  });
  card._currentDate = new Date('2026-05-13T12:00:00Z');
  card.setWeekStart();

  assert.deepEqual(dateKeys(card.getWeekDays('week-compact')), ['2026-05-11', '2026-05-13', '2026-05-15']);
});

test('rolling_days_week_compact shows current day plus configured days', () => {
  const card = makeCard({ entities: ['calendar.family'], rolling_days_week_compact: 2 });
  card._currentDate = new Date('2026-05-13T12:00:00Z');

  assert.deepEqual(dateKeys(card.getWeekDays('week-compact')), ['2026-05-13', '2026-05-14', '2026-05-15']);
});

test('rolling_days_schedule shows current day plus configured days', () => {
  const card = makeCard({ entities: ['calendar.family'], rolling_days_schedule: 3 });
  card._currentDate = new Date('2026-05-13T12:00:00Z');

  assert.deepEqual(dateKeys(card.getWeekDays('week-standard')), ['2026-05-13', '2026-05-14', '2026-05-15', '2026-05-16']);
});

test('rolling_weeks month mode renders configured rolling rows from first day of week', () => {
  const card = makeCard({
    entities: ['calendar.family'],
    default_view: 'month',
    first_day_of_week: 1,
    rolling_weeks: 1
  });
  card._currentDate = new Date('2026-05-13T12:00:00Z');
  card._events = [];

  assert.equal(card.getMonthWeekRowCount(), 2);
  assert.deepEqual(
    Object.fromEntries(Object.entries(card.getVisibleDateRange()).map(([key, value]) => [key, localDateKey(value)])),
    { startDate: '2026-05-11', endDate: '2026-05-24' }
  );

  const daysHtml = card.renderDays();
  assert.equal((daysHtml.match(/class="day-cell/g) || []).length, 14);
  assert.ok(daysHtml.includes(`data-date="${localDateDataAttribute('2026-05-11')}"`));
  assert.ok(daysHtml.includes(`data-date="${localDateDataAttribute('2026-05-24')}"`));
});

test('show_week_numbers_month adds month-only week number headers and cells', () => {
  const card = makeCard({ entities: ['calendar.family'], show_week_numbers_month: true });
  card._currentDate = new Date('2026-05-13T12:00:00Z');
  card._events = [];

  card._viewMode = 'month';
  assert.equal(card.shouldShowMonthWeekNumbers(), true);
  assert.match(card.renderDayHeaders(), /month-week-number-header/);
  assert.match(card.renderDays(), /month-week-number-cell/);
  assert.match(card.renderCalendarView(), /calendar-grid month-week-numbers/);

  card._viewMode = 'week-compact';
  assert.equal(card.shouldShowMonthWeekNumbers(), false);
  assert.doesNotMatch(card.renderDayHeaders(), /month-week-number-header/);
});

test('disable_swipe_controls disables swipe controls without affecting agenda', () => {
  const enabledCard = makeCard({ entities: ['calendar.family'] });
  enabledCard._viewMode = 'week-compact';
  assert.equal(enabledCard.shouldEnableSwipeControls(), true);

  const disabledCard = makeCard({ entities: ['calendar.family'], disable_swipe_controls: true });
  disabledCard._viewMode = 'week-compact';
  assert.equal(disabledCard.shouldEnableSwipeControls(), false);
  disabledCard._viewMode = 'agenda';
  assert.equal(disabledCard.shouldEnableSwipeControls(), false);
  assert.equal(disabledCard.getAgendaPeriodDaySpan(), 14);
});

test('lock_schedule_hours keeps configured schedule hours from expanding to events', () => {
  const earlyEvent = {
    entityId: 'calendar.family',
    summary: 'Early commute',
    start: { dateTime: '2026-05-13T06:30:00Z' },
    end: { dateTime: '2026-05-13T07:30:00Z' }
  };
  const weekDay = new Date('2026-05-13T00:00:00Z');

  const dynamicCard = makeCard({ entities: ['calendar.family'], week_start_hour: 9, week_end_hour: 17 });
  dynamicCard._events = [earlyEvent];
  assert.deepEqual(dynamicCard.getScheduleHourRangeForWeek([weekDay]), { startHour: 6, endHour: 17 });

  const lockedCard = makeCard({ entities: ['calendar.family'], week_start_hour: 9, week_end_hour: 17, lock_schedule_hours: true });
  lockedCard._events = [earlyEvent];
  assert.deepEqual(lockedCard.getScheduleHourRangeForWeek([weekDay]), { startHour: 9, endHour: 17 });
});

test('height_scale scales week-standard hour slots deterministically', () => {
  const defaultCard = makeCard({ entities: ['calendar.family'], default_view: 'week-standard', week_start_hour: 9, week_end_hour: 9 });
  defaultCard._currentDate = new Date('2026-05-13T12:00:00Z');
  defaultCard.setWeekStart();
  defaultCard._events = [];
  assert.match(defaultCard.renderWeekStandard(), /class="time-slot" style="height: 120px;"/);

  const scaledCard = makeCard({ entities: ['calendar.family'], default_view: 'week-standard', week_start_hour: 9, week_end_hour: 9, height_scale: 0.5 });
  scaledCard._currentDate = new Date('2026-05-13T12:00:00Z');
  scaledCard.setWeekStart();
  scaledCard._events = [];
  assert.match(scaledCard.renderWeekStandard(), /class="time-slot" style="height: 60px;"/);
  assert.match(scaledCard.renderWeekStandard(), /class="day-time-slots" style="height: 60px; min-height: 60px;"/);
});

test('calendar_names overrides displayed calendar labels', () => {
  const card = makeCard({
    entities: ['calendar.family'],
    calendar_names: { 'calendar.family': 'Household' }
  });
  card._hass = { states: { 'calendar.family': { attributes: { friendly_name: 'Family Friendly Name' } } } };

  assert.equal(card.getCalendarName('calendar.family'), 'Household');
  assert.match(card.renderCalendarBadges(), /Household/);
  assert.doesNotMatch(card.renderCalendarBadges(), /Family Friendly Name/);
});

test('preference_storage_key customizes persisted preference storage key', () => {
  const originalLocation = window.location;
  window.location = { pathname: '/lovelace-family/0', hash: '' };

  try {
    const defaultCard = makeCard({ entities: ['calendar.family', 'calendar.work'] });
    assert.equal(defaultCard.getPreferenceStorageKey(), 'skylight-calendar-card:lovelace-family:calendar.family|calendar.work');

    const customCard = makeCard({
      entities: ['calendar.family', 'calendar.work'],
      preference_storage_key: 'main-dashboard'
    });
    assert.equal(customCard.getPreferenceStorageKey(), 'skylight-calendar-card:lovelace-family:main-dashboard');
  } finally {
    window.location = originalLocation;
  }
});

test('normalizes enum helper aliases and fallbacks consistently', () => {
  const card = makeCard();

  assert.equal(card.normalizeDefaultDarkMode(true), 'dark');
  assert.equal(card.normalizeDefaultDarkMode(false), 'auto');
  assert.equal(card.normalizeDefaultDarkMode(' DARK '), 'dark');
  assert.equal(card.normalizeDefaultDarkMode('light'), 'light');
  assert.equal(card.normalizeDefaultDarkMode('invalid'), 'auto');
  assert.equal(card.normalizeEventTitlePrefixMode('icon'), 'badge_icon');
  assert.equal(card.normalizeEventTitlePrefixMode('badgeicon'), 'badge_icon');
  assert.equal(card.normalizeEventTitlePrefixMode('badgeIcon'), 'badge_icon');
  assert.equal(card.normalizeEventTitlePrefixMode('friendlyname'), 'friendly_name');
  assert.equal(card.normalizeEventTitlePrefixMode('friendlyName'), 'friendly_name');
  assert.equal(card.normalizeEventTitlePrefixMode('friendly_name'), 'friendly_name');
  assert.equal(card.normalizeEventTitlePrefixMode('bad-value'), 'none');
  assert.equal(card.normalizePastEventMode(' muted '), 'muted');
  assert.equal(card.normalizePastEventMode('bad-value'), 'none');
  assert.equal(card.normalizeCombineStyle('DOTS'), 'dots');
  assert.equal(card.normalizeCombineStyle('zebra'), 'bars');
  assert.equal(card.normalizeEventColorMode('left-neutral'), 'left-neutral');
  assert.equal(card.normalizeEventColorMode('bad-value'), 'classic');
});

test('normalizes css length helpers while preserving size and border width rules', () => {
  const card = makeCard();

  assert.equal(card.normalizeStyleSizeValue(5), '5px');
  assert.equal(card.normalizeStyleSizeValue(12), '12px');
  assert.equal(card.normalizeStyleSizeValue('5rem'), '5rem');
  assert.equal(card.normalizeStyleSizeValue(' 1.25rem '), '1.25rem');
  assert.equal(card.normalizeStyleSizeValue('50%'), '50%');
  assert.equal(card.normalizeStyleSizeValue('14'), '14px');
  assert.equal(card.normalizeStyleSizeValue(0), null);
  assert.equal(card.normalizeStyleSizeValue('0px'), '0px');
  assert.equal(card.normalizeStyleSizeValue('bad'), null);
  assert.equal(card.normalizeStyleBorderWidth(0), '0px');
  assert.equal(card.normalizeStyleBorderWidth(-5), '0px');
  assert.equal(card.normalizeStyleBorderWidth(-2), '0px');
  assert.equal(card.normalizeStyleBorderWidth('0'), '0px');
  assert.equal(card.normalizeStyleBorderWidth('2em'), '2em');
  assert.equal(card.normalizeStyleBorderWidth('-2'), null);
});

test('event font size wrappers share fallback and override behavior', () => {
  const card = makeCard({
    entities: ['calendar.family'],
    event_font_size: 13,
    event_time_font_size: ' 0.75rem ',
    event_location_font_size: ''
  });

  assert.equal(card.getEventBubbleFontSize(), '13px');
  assert.equal(card.getEventTimeFontSize(), '0.75rem');
  assert.equal(card.getEventLocationFontSize(), '9px');
  assert.equal(card.getEventFontSize(), '13px');
  assert.equal(card.getEventFontSize(null, 'missing_font_size', 14), '14px');

  const originalGetEventStyleOverrides = card.getEventStyleOverrides.bind(card);
  card.getEventStyleOverrides = () => ({
    event_font_size: '15',
    event_time_font_size: 10,
    event_location_font_size: ' 0.8em '
  });

  try {
    const event = { entityId: 'calendar.family', summary: 'Styled' };
    assert.equal(card.getEventBubbleFontSize(event), '15px');
    assert.equal(card.getEventTimeFontSize(event), '10px');
    assert.equal(card.getEventLocationFontSize(event), '0.8em');
  } finally {
    card.getEventStyleOverrides = originalGetEventStyleOverrides;
  }
});


function makeRelativeEvent(summary, startOffsetMs, endOffsetMs) {
  const now = Date.now();
  return {
    entityId: 'calendar.family',
    color: '#3366ff',
    summary,
    start: { dateTime: new Date(now + startOffsetMs).toISOString() },
    end: { dateTime: new Date(now + endOffsetMs).toISOString() }
  };
}

function eventDate(event) {
  return new Date(event.start.dateTime);
}

test('legacy hide_the_past true maps to hiding ended events', () => {
  const card = makeCard({ entities: ['calendar.family'], hide_the_past: true });
  const pastEvent = makeRelativeEvent('Past', -7200000, -3600000);
  card._events = [pastEvent];

  assert.equal(card._config.past_event_mode, 'hide');
  assert.equal(card.isPastEvent(pastEvent), true);
  assert.deepEqual(card.getEventsForDay(eventDate(pastEvent)), []);
});

test('past_event_mode none leaves ended events visible', () => {
  const card = makeCard({ entities: ['calendar.family'], past_event_mode: 'none', hide_the_past: true });
  const pastEvent = makeRelativeEvent('Past visible', -7200000, -3600000);
  card._events = [pastEvent];

  assert.equal(card._config.past_event_mode, 'none');
  assert.deepEqual(card.getEventsForDay(eventDate(pastEvent)), [pastEvent]);
  assert.doesNotMatch(card.getEventStyle(pastEvent), /opacity: 0\.55/);
});

test('past_event_mode hide hides ended events', () => {
  const card = makeCard({ entities: ['calendar.family'], past_event_mode: 'hide' });
  const pastEvent = makeRelativeEvent('Past hidden', -7200000, -3600000);
  card._events = [pastEvent];

  assert.equal(card._config.past_event_mode, 'hide');
  assert.deepEqual(card.getEventsForDay(eventDate(pastEvent)), []);
});

test('past_event_mode muted leaves ended events visible and applies muted style', () => {
  const card = makeCard({ entities: ['calendar.family'], past_event_mode: 'muted' });
  const pastEvent = makeRelativeEvent('Past muted', -7200000, -3600000);
  card._events = [pastEvent];

  assert.equal(card._config.past_event_mode, 'muted');
  assert.deepEqual(card.getEventsForDay(eventDate(pastEvent)), [pastEvent]);
  assert.match(card.getEventStyle(pastEvent), /opacity: 0\.55/);
  assert.match(card.getEventStyle(pastEvent), /filter: grayscale\(70%\) saturate\(45%\)/);
});


test('event color modes normalize widths and tint opacity endpoints', () => {
  const event = { entityId: 'calendar.family', color: '#ff0000', summary: 'Test', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } };

  const opaqueTint = makeCard({ entities: ['calendar.family'], event_color_mode: 'left-tint', event_tint_opacity: 0, event_color_bar_width: 14 });
  assert.equal(opaqueTint.getEventTintBackgroundColor('#ff0000'), 'rgb(255, 0, 0)');
  assert.equal(opaqueTint.getEventBackgroundColor(event), 'rgb(255, 0, 0)');
  assert.match(opaqueTint.getEventStyle(event), /--combine-left-offset: 14px/);
  assert.match(opaqueTint.getEventStyle(event), /background-color: rgb\(255, 0, 0\)/);

  const transparentTint = makeCard({ entities: ['calendar.family'], event_color_mode: 'left-tint', event_tint_opacity: 100 });
  assert.equal(transparentTint.getEventTintBackgroundColor('#ff0000'), 'rgb(255, 255, 255)');
  assert.equal(transparentTint.getEventBackgroundColor(event), 'rgb(255, 255, 255)');

  const darkTransparentTint = makeCard({ entities: ['calendar.family'], color_scheme: 'dark', event_color_mode: 'left-tint', event_tint_opacity: 100 });
  assert.equal(darkTransparentTint.getEventTintBackgroundColor('#ff0000'), 'rgb(42, 47, 54)');

  const clampedTint = makeCard({ entities: ['calendar.family'], event_color_mode: 'left-tint', event_tint_opacity: 150 });
  assert.equal(clampedTint._config.event_tint_opacity, 100);
  assert.equal(clampedTint.getEventTintBackgroundColor('#ff0000'), 'rgb(255, 255, 255)');

  const widthFallback = makeCard({ entities: ['calendar.family'], event_color_mode: 'left-neutral', combine_calendars_width: 22 });
  assert.equal(widthFallback._config.event_color_bar_width, 22);
  assert.match(widthFallback.getEventStyle(event), /--combine-left-offset: 22px/);
});

test('checkAllCalendarCapabilities marks google, caldav, and local capabilities correctly', async () => {
  const card = makeCard({
    entities: ['calendar.google_home', 'calendar.caldav_work', 'calendar.local_family'],
    readonly_calendars: ['calendar.caldav_work']
  });
  card._hass = { states: {
    'calendar.google_home': { attributes: { integration: 'google', supported_features: 0 } },
    'calendar.caldav_work': { attributes: { supported_features: 2 } },
    'calendar.local_family': { attributes: { supported_features: 6 } }
  } };

  await card.checkAllCalendarCapabilities();

  assert.equal(card._calendarCapabilities['calendar.google_home'].isGoogleCalendar, true);
  assert.equal(card._calendarCapabilities['calendar.google_home'].canUpdate, false);
  assert.equal(card._calendarCapabilities['calendar.caldav_work'].isReadonly, true);
  assert.equal(card._calendarCapabilities['calendar.local_family'].canUpdate, true);
  assert.equal(card._calendarCapabilities['calendar.local_family'].canDelete, true);
});



test('calendar badge can show linked person location and picture', () => {
  const card = new Card();
  card._hass = {
    states: {
      'calendar.family': { entity_id: 'calendar.family', attributes: { friendly_name: 'Ian' } },
      'person.ian': { entity_id: 'person.ian', state: 'home', attributes: { friendly_name: 'Ian', entity_picture: '/api/image/serve/ian/original' } }
    },
    locale: { language: 'en' },
    language: 'en',
    themes: { darkMode: false }
  };
  card.setConfig({
    entities: ['calendar.family'],
    calendar_person_entities: { 'calendar.family': 'person.ian' }
  });

  originalCardRender.call(card);
  const html = card._root.innerHTML;

  assert.match(html, /calendar-badge-label/);
  assert.match(html, /calendar-badge-person-icon/);
  assert.match(html, /calendar-badge-person-state/);
  assert.match(html, />Home</);
  assert.match(html, /src="\/api\/image\/serve\/ian\/original"/);
});


test('event modal overlay CSS uses viewport-fixed coverage and high stacking', () => {
  const card = makeCard();
  const styles = card.getStyles();

  assert.match(styles, /\.event-modal\s*\{[\s\S]*position:\s*fixed;/);
  assert.match(styles, /\.event-modal\s*\{[\s\S]*inset:\s*0;/);
  assert.match(styles, /\.event-modal\s*\{[\s\S]*z-index:\s*2147483647;/);
  assert.match(styles, /:host\(\.event-modal-open\)[\s\S]*z-index:\s*2147483000;/);
  assert.match(styles, /event-modal-open[\s\S]*\.calendar-container[\s\S]*overflow:\s*visible;/);
  assert.match(styles, /event-modal-open[\s\S]*\.calendar-body[\s\S]*overflow:\s*visible;/);
});

test('event modal open state toggles a host stacking class', () => {
  const card = makeCard();
  const classes = new Set();
  card.classList = {
    toggle(name, enabled) {
      if (enabled) classes.add(name);
      else classes.delete(name);
    },
    contains(name) {
      return classes.has(name);
    }
  };

  const modalClasses = new Set();
  const modal = {
    classList: {
      contains(name) {
        return modalClasses.has(name);
      }
    }
  };

  card.updateEventModalOpenState(modal);
  assert.equal(card.classList.contains('event-modal-open'), false);

  modalClasses.add('show');
  card.updateEventModalOpenState(modal);
  assert.equal(card.classList.contains('event-modal-open'), true);

  modalClasses.delete('show');
  card.updateEventModalOpenState(modal);
  assert.equal(card.classList.contains('event-modal-open'), false);
});

test('calendar render includes header controls and modal container', () => {
  const card = new Card();
  card._hass = { states: {}, locale: { language: 'en' }, language: 'en', themes: { darkMode: false } };
  card.setConfig({ entities: ['calendar.family'], enable_event_management: true, show_dashboard_nav_button: true, header_dashboard_path: 'lovelace' });
  // run real render for markup validation
  originalCardRender.call(card);
  const html = card._root.innerHTML;
  assert.match(html, /id="prev-period"/);
  assert.match(html, /id="next-period"/);
  assert.match(html, /id="today"/);
  assert.match(html, /id="event-modal"/);
});

test('hide_header removes the header wrapper entirely', () => {
  const card = new Card();
  card._hass = { states: {}, locale: { language: 'en' }, language: 'en', themes: { darkMode: false } };
  card.setConfig({ entities: ['calendar.family'], hide_header: true });
  originalCardRender.call(card);
  const html = card._root.innerHTML;
  assert.doesNotMatch(html, /class="header/);
  assert.match(html, /class="calendar-body"/);
});



test('renderEventDescription supports markdown formatting with safe links', () => {
  const card = makeCard();
  const html = card.renderEventDescription('# Details\n\nBring **snacks** and [agenda](https://example.com/path?a=1&b=2).\n- RSVP\n- Arrive `early`');

  assert.match(html, /<h1>Details<\/h1>/);
  assert.match(html, /<strong>snacks<\/strong>/);
  assert.match(html, /<a href="https:\/\/example\.com\/path\?a=1&amp;b=2" target="_blank" rel="noopener noreferrer">agenda<\/a>/);
  assert.match(html, /<ul><li>RSVP<\/li><li>Arrive <code>early<\/code><\/li><\/ul>/);
});

test('renderEventDescription allows basic HTML but strips scripts and unsafe links', () => {
  const card = makeCard();
  const html = card.renderEventDescription('<p><b>Bring plates</b></p><script>alert(1)</script><a href="javascript:alert(1)">bad</a><a href="/local/info">good</a>');

  assert.match(html, /<p><b>Bring plates<\/b><\/p>/);
  assert.doesNotMatch(html, /<script|alert\(1\)|javascript:/);
  assert.match(html, />bad/);
  assert.doesNotMatch(html, /bad<\/a>/);
  assert.match(html, /<a href="\/local\/info" target="_blank" rel="noopener noreferrer">good<\/a>/);
});

test('renderEventDescription restores HTML links escaped with literal quoted hrefs', () => {
  const card = makeCard();
  card.escapeHtml = (text) => String(text ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  const html = card.renderEventDescription('<p><a href="/local/rich-info">More info</a></p>');

  assert.match(html, /<a href="\/local\/rich-info" target="_blank" rel="noopener noreferrer">More info<\/a>/);
});

test('renderEventDescription keeps common HTML wrappers from rendering as raw text', () => {
  const card = makeCard();
  const html = card.renderEventDescription('<div>Line 1</div><div>Line 2</div><table><tr><th>When</th><td>Noon</td></tr></table>');

  assert.match(html, /<div>Line 1<\/div><div>Line 2<\/div>/);
  assert.match(html, /<table><tr><th>When<\/th><td>Noon<\/td><\/tr><\/table>/);
  assert.doesNotMatch(html, /&lt;\/?(?:div|table|tr|th|td)\b/i);
});

test('weather renders Home Assistant mdi icons instead of emoji glyphs', () => {
  const card = makeCard({
    entities: ['calendar.family'],
    header_weather_sensor: 'weather.home'
  });
  card._hass = {
    states: {
      'weather.home': {
        state: 'sunny',
        attributes: {
          temperature: 21,
          forecast: [
            { datetime: '2026-05-14T12:00:00Z', condition: 'partlycloudy', temperature: 24, templow: 12 }
          ]
        }
      }
    }
  };

  const headerHtml = card.renderHeaderTitle();
  assert.match(headerHtml, /<ha-icon icon="mdi:weather-sunny"><\/ha-icon>21°/);
  assert.doesNotMatch(headerHtml, /☀️|⛅/);

  const forecastHtml = card.renderDayForecast(new Date('2026-05-14T00:00:00Z'));
  assert.match(forecastHtml, /<ha-icon icon="mdi:weather-partly-cloudy"><\/ha-icon>/);
  assert.doesNotMatch(forecastHtml, /☀️|⛅/);
});

test('agenda view renders daily weather forecast', () => {
  const card = makeCard({
    entities: ['calendar.family'],
    default_view: 'agenda',
    header_weather_sensor: 'weather.home'
  });
  card._viewMode = 'agenda';
  card._events = [];
  card.getAgendaEventMinHeight = () => '68px';
  card._hass = {
    states: {
      'weather.home': {
        state: 'sunny',
        attributes: {
          forecast: [
            { datetime: '2026-05-14T12:00:00Z', condition: 'rainy', temperature: 18, templow: 9 }
          ]
        }
      }
    }
  };
  card._agendaStartDate = new Date('2026-05-14T00:00:00Z');
  card._agendaEndDate = new Date('2026-05-14T23:59:59Z');

  const html = card.renderAgenda();

  assert.match(html, /class="agenda-day-forecast"/);
  assert.match(html, /<ha-icon icon="mdi:weather-rainy"><\/ha-icon>/);
  assert.match(html, /<span class="forecast-temp-high">18°<\/span>/);
  assert.match(html, /<span class="forecast-temp-low">9°<\/span>/);
});

test('hide_navigation_buttons hides previous, next, and today controls only', () => {
  const card = new Card();
  card._hass = { states: {}, locale: { language: 'en' }, language: 'en', themes: { darkMode: false } };
  card.setConfig({ entities: ['calendar.family'], hide_navigation_buttons: true });

  originalCardRender.call(card);
  const html = card._root.innerHTML;

  assert.doesNotMatch(html, /id="prev-period"/);
  assert.doesNotMatch(html, /id="next-period"/);
  assert.doesNotMatch(html, /id="today"/);
  assert.match(html, /class="month-year"/);
  assert.match(html, /id="view-mode-select"/);
});

test('hide_add_event_button hides add event control only', () => {
  const card = new Card();
  card._hass = { states: {}, locale: { language: 'en' }, language: 'en', themes: { darkMode: false } };
  card.setConfig({ entities: ['calendar.family'], enable_event_management: true, hide_add_event_button: true });
  card._calendarCapabilities = { 'calendar.family': { canCreate: true, isReadonly: false } };

  originalCardRender.call(card);
  const html = card._root.innerHTML;

  assert.doesNotMatch(html, /id="add-event-btn"/);
  assert.match(html, /id="prev-period"/);
  assert.match(html, /id="view-mode-select"/);
});

test('hide_view_selector hides view drop-down selector only', () => {
  const card = new Card();
  card._hass = { states: {}, locale: { language: 'en' }, language: 'en', themes: { darkMode: false } };
  card.setConfig({ entities: ['calendar.family'], hide_view_selector: true });

  originalCardRender.call(card);
  const html = card._root.innerHTML;

  assert.doesNotMatch(html, /id="view-mode-select"/);
  assert.match(html, /id="prev-period"/);
  assert.match(html, /id="today"/);
});

test('header button listeners invoke expected actions', () => {
  const card = makeCard({ entities: ['calendar.family'] });
  const handlers = {};
  const mkEl = (id) => ({ id, addEventListener: (evt, cb) => { handlers[id + ':' + evt] = cb; } });
  const elements = {
    'prev-period': mkEl('prev-period'),
    'next-period': mkEl('next-period'),
    'today': mkEl('today'),
    'add-event-btn': mkEl('add-event-btn'),
    'theme-toggle': mkEl('theme-toggle'),
    'header-dashboard-btn': mkEl('header-dashboard-btn'),
    'event-modal': mkEl('event-modal'),
    'agenda-container': mkEl('agenda-container'),
    'view-mode-select': { value: 'month', addEventListener: (evt, cb) => { handlers['view-mode-select:'+evt] = cb; } }
  };
  card.getRootElementById = (id) => elements[id] || null;
  card._root = { querySelector: () => null, querySelectorAll: (sel) => (sel === '.agenda-day-row' ? [] : []) };
  let prev=0,next=0,add=0,nav=0;
  card.observeModalVisibility = () => {};
  card.navigateToPreviousPeriod = () => { prev++; };
  card.navigateToNextPeriod = () => { next++; };
  card.showCreateEventModal = () => { add++; };
  card.navigateToConfiguredDashboard = () => { nav++; };
  card.applyThemeMode = () => {};
  card.persistPreferences = () => {};
  card.render = () => {};
  card.ensureEventsForCurrentRange = () => {};
  card.attachEventListeners();
  handlers['prev-period:click']();
  handlers['next-period:click']();
  handlers['add-event-btn:click']();
  handlers['header-dashboard-btn:click']();
  assert.equal(prev,1);assert.equal(next,1);assert.equal(add,1);assert.equal(nav,1);
});

test('agenda rolling days are configurable and include current day + N days', () => {
  const card = makeCard({ entities: ['calendar.family'], rolling_days_agenda: 4 });

  card.resetAgendaWindowToToday();

  const dayMs = 24 * 60 * 60 * 1000;
  const spanDays = Math.round((card._agendaEndDate.getTime() - card._agendaStartDate.getTime()) / dayMs);
  assert.equal(spanDays, 5);
  assert.equal(card.getAgendaDays().length, 5);
});

test('agenda vertical scroll loading is disabled in rolling-days mode', async () => {
  const card = makeCard({ entities: ['calendar.family'], rolling_days_agenda: 2 });
  const handlers = {};
  const mkEl = (id) => ({ id, addEventListener: (evt, cb) => { handlers[id + ':' + evt] = cb; } });
  const agendaContainer = {
    ...mkEl('agenda-container'),
    scrollTop: 500,
    clientHeight: 300,
    scrollHeight: 780,
    getBoundingClientRect: () => ({ top: 0, bottom: 300 }),
    querySelectorAll: () => []
  };
  const elements = {
    'prev-period': mkEl('prev-period'),
    'next-period': mkEl('next-period'),
    'today': mkEl('today'),
    'add-event-btn': mkEl('add-event-btn'),
    'theme-toggle': mkEl('theme-toggle'),
    'header-dashboard-btn': mkEl('header-dashboard-btn'),
    'event-modal': mkEl('event-modal'),
    'agenda-container': agendaContainer,
    'view-mode-select': { value: 'agenda', addEventListener: (evt, cb) => { handlers['view-mode-select:'+evt] = cb; } }
  };
  card.getRootElementById = (id) => elements[id] || null;
  card._root = { querySelector: () => null, querySelectorAll: (sel) => (sel === '.agenda-day-row' ? [] : []) };
  card.observeModalVisibility = () => {};
  card.navigateToPreviousPeriod = () => {};
  card.navigateToNextPeriod = () => {};
  card.showCreateEventModal = () => {};
  card.navigateToConfiguredDashboard = () => {};
  card.applyThemeMode = () => {};
  card.persistPreferences = () => {};
  card.render = () => {};
  card._viewMode = 'agenda';
  card.resetAgendaWindowToToday();
  const originalStart = new Date(card._agendaStartDate);
  const originalEnd = new Date(card._agendaEndDate);
  let ensureCalls = 0;
  card.ensureEventsForCurrentRange = async () => { ensureCalls += 1; };

  card.attachEventListeners();
  await handlers['agenda-container:scroll']();

  assert.equal(ensureCalls, 0);
  assert.equal(card._agendaStartDate.toISOString(), originalStart.toISOString());
  assert.equal(card._agendaEndDate.toISOString(), originalEnd.toISOString());
});

test('editor renders key controls and updates config on change', () => {
  const Editor = customElements.get('skylight-calendar-card-editor');
  const editor = new Editor();
  editor._hass = { states: { 'calendar.family': { entity_id: 'calendar.family', attributes: { friendly_name: 'Family' } } } };
  editor.setConfig({ entities: ['calendar.family'], show_event_location: false, hide_the_past: true });
  assert.doesNotThrow(() => editor.render());
  assert.equal(editor._config.past_event_mode, 'hide');
  assert.match(editor.innerHTML, /data-field="past_event_mode"/);
  assert.match(editor.innerHTML, /<option value="hide" selected>Hide<\/option>/);
  editor._config = { entities: ['calendar.family'], show_event_location: false, past_event_mode: 'none' };
  editor._fireConfigChanged = () => {};
  editor.handleChange({ target: { dataset: { field: 'show_event_location' }, type: 'checkbox', checked: true } });
  assert.equal(editor._config.show_event_location, true);
  editor.handleChange({ target: { dataset: { field: 'past_event_mode' }, value: 'muted' } });
  assert.equal(editor._config.past_event_mode, 'muted');
});


function createEditorDomHarness(editor) {
  let html = '';
  let controls = null;

  const decode = (value = '') => String(value)
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');

  const toDatasetKey = (name) => name.replace(/^data-/, '').replace(/-([a-z])/g, (_, char) => char.toUpperCase());

  const parseAttributes = (attributeText) => {
    const attrs = {};
    const attrRegex = /([:\w-]+)(?:="([^"]*)")?/g;
    let match;
    while ((match = attrRegex.exec(attributeText))) {
      attrs[match[1]] = match[2] === undefined ? true : decode(match[2]);
    }
    return attrs;
  };

  class FakeControl {
    constructor(tag, attrs) {
      this.tagName = tag.toUpperCase();
      this.type = attrs.type || '';
      this.value = attrs.value || '';
      this.checked = Object.prototype.hasOwnProperty.call(attrs, 'checked');
      this.disabled = Object.prototype.hasOwnProperty.call(attrs, 'disabled');
      this.dataset = {};
      this.listeners = {};
      Object.entries(attrs).forEach(([name, value]) => {
        if (name.startsWith('data-')) this.dataset[toDatasetKey(name)] = value === true ? 'true' : String(value);
      });
    }

    addEventListener(type, handler) {
      this.listeners[type] = this.listeners[type] || [];
      this.listeners[type].push(handler);
    }

    dispatch(type) {
      for (const handler of this.listeners[type] || []) {
        handler({ target: this, currentTarget: this });
      }
    }
  }

  const parseControls = () => {
    if (controls) return controls;
    controls = [];
    for (const match of html.matchAll(/<input\b([^>]*)>/g)) {
      controls.push(new FakeControl('input', parseAttributes(match[1])));
    }
    for (const match of html.matchAll(/<button\b([^>]*)>[\s\S]*?<\/button>/g)) {
      controls.push(new FakeControl('button', parseAttributes(match[1])));
    }
    return controls;
  };

  Object.defineProperty(editor, 'innerHTML', {
    get() { return html; },
    set(value) {
      html = String(value);
      controls = null;
    },
    configurable: true
  });

  editor.querySelector = () => null;
  editor.querySelectorAll = (selector) => {
    const allControls = parseControls();
    if (selector === '[data-virtual-calendar-action]') {
      return allControls.filter((control) => control.dataset.virtualCalendarAction !== undefined);
    }
    if (selector === '[data-virtual-calendar-field]') {
      return allControls.filter((control) => control.dataset.virtualCalendarField !== undefined);
    }
    if (selector === '[data-virtual-calendar-entity]') {
      return allControls.filter((control) => control.dataset.virtualCalendarEntity !== undefined);
    }
    if (selector === '[data-color-trigger]') {
      return allControls.filter((control) => control.dataset.colorTrigger !== undefined);
    }
    const checkedEntityMatch = selector.match(/^input\[data-virtual-calendar-entity\]\[data-virtual-calendar-index="(\d+)"\]:checked$/);
    if (checkedEntityMatch) {
      return allControls.filter((control) => (
        control.tagName === 'INPUT' &&
        control.dataset.virtualCalendarEntity !== undefined &&
        control.dataset.virtualCalendarIndex === checkedEntityMatch[1] &&
        control.checked
      ));
    }
    return [];
  };

  return {
    getControls: parseControls,
    findControl(predicate) {
      return parseControls().find(predicate);
    }
  };
}

test('editor renders and updates virtual calendars without dropping empty entity selections', () => {
  const Editor = customElements.get('skylight-calendar-card-editor');
  const editor = new Editor();
  editor._hass = {
    states: {
      'calendar.family': { entity_id: 'calendar.family', attributes: { friendly_name: 'Family' } },
      'calendar.work': { entity_id: 'calendar.work', attributes: { friendly_name: 'Work' } }
    }
  };
  editor.setConfig({
    entities: ['calendar.family', 'calendar.work', 'virtual:old'],
    virtual_calendars: [
      { id: 'kids', name: 'Kids', icon: 'mdi:school', color: '#112233', entities: ['calendar.family', 'calendar.legacy'] },
      'yaml-only-entry'
    ]
  });

  assert.match(editor.innerHTML, /Virtual calendars/);
  assert.match(editor.innerHTML, /data-virtual-calendar-field="name"/);
  assert.match(editor.innerHTML, /data-virtual-calendar-entity="true"/);
  assert.match(editor.innerHTML, /calendar\.legacy/);
  assert.match(editor.innerHTML, /not in configured calendars/);
  assert.match(editor.innerHTML, /Override: #112233/);
  assert.doesNotMatch(editor.innerHTML, /value="virtual:old"/);

  const emittedConfigs = [];
  editor.dispatchEvent = (event) => {
    emittedConfigs.push(event.detail.config);
    return true;
  };
  editor.updateFieldValues = () => {};

  editor.updateVirtualCalendar(0, { name: '  Kids Calendar  ', icon: '   ', color: '  #445566  ' });
  assert.equal(editor._config.virtual_calendars[0].name, 'Kids Calendar');
  assert.equal(editor._config.virtual_calendars[0].icon, null);
  assert.equal(editor._config.virtual_calendars[0].color, '#445566');
  assert.deepEqual(editor._config.virtual_calendars[0].entities, ['calendar.family', 'calendar.legacy']);
  assert.equal(editor._config.virtual_calendars[1], 'yaml-only-entry');

  editor.updateVirtualCalendar(0, { entities: [] });
  assert.deepEqual(editor._config.virtual_calendars[0].entities, []);
  assert.equal(emittedConfigs.at(-1).virtual_calendars.length, 2);
  assert.equal(emittedConfigs.at(-1).virtual_calendars[1], 'yaml-only-entry');
});

test('editor can add, remove, reorder, and color virtual calendars', () => {
  const Editor = customElements.get('skylight-calendar-card-editor');
  const editor = new Editor();
  editor._hass = { states: {} };
  editor.setConfig({
    entities: ['calendar.family'],
    virtual_calendars: [
      { id: 'virtual_1', name: 'One', entities: ['calendar.family'] },
      { id: 'custom', name: 'Custom', entities: [] }
    ]
  });
  editor.updateFieldValues = () => {};
  editor.render = () => {};

  const emittedConfigs = [];
  editor.dispatchEvent = (event) => {
    emittedConfigs.push(event.detail.config);
    return true;
  };

  editor.addVirtualCalendar();
  assert.equal(editor._config.virtual_calendars.at(-1).id, 'virtual_2');
  assert.equal(editor._config.virtual_calendars.at(-1).name, 'Virtual Calendar');
  assert.deepEqual(editor._config.virtual_calendars.at(-1).entities, []);

  editor.moveVirtualCalendar(2, -1);
  assert.equal(editor._config.virtual_calendars[1].id, 'virtual_2');
  assert.equal(editor._config.virtual_calendars[2].id, 'custom');

  editor._colorPickerState = { field: 'virtual_calendar_color', mapKey: '1' };
  editor.applyColorPickerColor('#ABCDEF');
  assert.equal(editor._config.virtual_calendars[1].color, '#ABCDEF');

  editor.removeVirtualCalendar(1);
  assert.deepEqual(editor._config.virtual_calendars.map((calendar) => calendar.id), ['virtual_1', 'custom']);
  assert.equal(emittedConfigs.at(-1).virtual_calendars.length, 2);
});


test('editor flags blank and duplicate virtual calendar ids', () => {
  const Editor = customElements.get('skylight-calendar-card-editor');
  const editor = new Editor();
  editor._hass = { states: {} };
  editor.setConfig({
    entities: ['calendar.family'],
    virtual_calendars: [
      { id: '', name: 'Blank', entities: [] },
      { id: 'dupe', name: 'One', color: null, entities: [] },
      { id: 'dupe', name: 'Two', color: '#3f51b5', entities: [] }
    ]
  });

  assert.match(editor.innerHTML, /ID is required for runtime matching/);
  assert.match(editor.innerHTML, /ID duplicates another virtual calendar/);
  assert.match(editor.innerHTML, /No color override set/);
  assert.match(editor.innerHTML, /Override: #3f51b5/);
});

test('editor virtual calendar rendered controls dispatch listeners and update config', () => {
  const Editor = customElements.get('skylight-calendar-card-editor');
  const editor = new Editor();
  const harness = createEditorDomHarness(editor);
  editor._hass = {
    states: {
      'calendar.family': { entity_id: 'calendar.family', attributes: { friendly_name: 'Family' } },
      'calendar.work': { entity_id: 'calendar.work', attributes: { friendly_name: 'Work' } }
    }
  };
  const emittedConfigs = [];
  editor.dispatchEvent = (event) => {
    emittedConfigs.push(event.detail.config);
    return true;
  };

  editor.setConfig({ entities: ['calendar.family', 'calendar.work'], virtual_calendars: [] });
  const addButton = harness.findControl((control) => control.dataset.virtualCalendarAction === 'add');
  assert.ok(addButton, 'rendered add button should be found');
  assert.ok(addButton.listeners.click?.length, 'add button should have a click listener');
  addButton.dispatch('click');

  assert.equal(editor._config.virtual_calendars.length, 1);
  assert.equal(editor._config.virtual_calendars[0].id, 'virtual_1');

  const nameInput = harness.findControl((control) => control.dataset.virtualCalendarField === 'name' && control.dataset.virtualCalendarIndex === '0');
  assert.ok(nameInput, 'rendered name input should be found after re-render');
  assert.ok(nameInput.listeners.change?.length, 'name input should have a change listener');
  nameInput.value = '  DOM Calendar  ';
  nameInput.dispatch('change');
  assert.equal(editor._config.virtual_calendars[0].name, 'DOM Calendar');
  assert.match(editor.innerHTML, /<strong>DOM Calendar<\/strong>/);

  const colorInput = harness.findControl((control) => control.dataset.virtualCalendarField === 'color' && control.dataset.virtualCalendarIndex === '0');
  assert.ok(colorInput, 'rendered color input should be found after name re-render');
  colorInput.value = '#123456';
  colorInput.dispatch('change');
  assert.equal(editor._config.virtual_calendars[0].color, '#123456');
  assert.match(editor.innerHTML, /Override: #123456/);

  editor._colorPickerState = { field: 'virtual_calendar_color', mapKey: '0' };
  editor.applyColorPickerColor('#654321');
  assert.equal(editor._config.virtual_calendars[0].color, '#654321');
  assert.match(editor.innerHTML, /Override: #654321/);

  const workCheckbox = harness.findControl((control) => control.dataset.virtualCalendarEntity === 'true' && control.value === 'calendar.work');
  assert.ok(workCheckbox, 'rendered work checkbox should be found');
  assert.ok(workCheckbox.listeners.change?.length, 'entity checkbox should have a change listener');
  workCheckbox.checked = true;
  workCheckbox.dispatch('change');
  assert.deepEqual(editor._config.virtual_calendars[0].entities, ['calendar.work']);
  assert.deepEqual(emittedConfigs.at(-1).virtual_calendars[0].entities, ['calendar.work']);
});

test('editor color picker Set updates scalar and calendar color config', () => {
  const Editor = customElements.get('skylight-calendar-card-editor');
  const editor = new Editor();
  editor._hass = { states: { 'calendar.family': { entity_id: 'calendar.family', attributes: { friendly_name: 'Family' } } } };
  editor.setConfig({
    entities: ['calendar.family'],
    header_color: '#111111',
    header_text_color: '#222222',
    event_neutral_background: '#333333',
    colors: { 'calendar.family': '#444444' },
    event_font_colors: { 'calendar.family': '#555555' }
  });

  const emittedConfigs = [];
  editor.dispatchEvent = (event) => {
    emittedConfigs.push(event.detail.config);
    return true;
  };

  for (const field of ['header_color', 'header_text_color', 'event_neutral_background']) {
    editor._colorPickerState = { field, mapKey: null };
    assert.doesNotThrow(() => editor.applyColorPickerColor('#ABCDEF'));
    assert.equal(editor._config[field], '#ABCDEF');
    assert.equal(emittedConfigs.at(-1)[field], '#ABCDEF');
  }

  editor._colorPickerState = { field: 'colors', mapKey: 'calendar.family' };
  assert.doesNotThrow(() => editor.applyColorPickerColor('#123456'));
  assert.equal(editor._config.colors['calendar.family'], '#123456');
  assert.equal(emittedConfigs.at(-1).colors['calendar.family'], '#123456');

  editor._colorPickerState = { field: 'event_font_colors', mapKey: 'calendar.family' };
  assert.doesNotThrow(() => editor.applyColorPickerColor('#654321'));
  assert.equal(editor._config.event_font_colors['calendar.family'], '#654321');
  assert.equal(emittedConfigs.at(-1).event_font_colors['calendar.family'], '#654321');
  assert.equal(emittedConfigs.length, 5);
});

test('combine_calendars merges exact duplicates and keeps distinct events', () => {
  const card = makeCard({ entities: ['calendar.a', 'calendar.b'], combine_calendars: true });
  const events = [
    { entityId: 'calendar.a', color: '#f00', summary: 'Meeting', location: 'Room', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } },
    { entityId: 'calendar.b', color: '#0f0', summary: 'Meeting', location: 'Room', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } },
    { entityId: 'calendar.a', color: '#f00', summary: 'Different', location: 'Room', start: { dateTime: '2026-05-01T12:00:00Z' }, end: { dateTime: '2026-05-01T13:00:00Z' } }
  ];
  const combined = card.combineDuplicateCalendarEvents(events);
  assert.equal(combined.length, 2);
  const merged = combined.find((event) => event.isCombinedCalendarEvent);
  assert.ok(merged);
  assert.deepEqual(merged.sourceEntityIds.sort(), ['calendar.a', 'calendar.b']);
});



test('HTML attribute escaping protects quoted event prefill values', () => {
  const card = makeCard({ entities: ['calendar.a'] });

  assert.equal(
    card.escapeHtmlAttribute("Team \"sync\" & <review> 'plan'"),
    'Team &quot;sync&quot; &amp; &lt;review&gt; &#39;plan&#39;'
  );
});

test('forward event detects calendars that already contain matching event', () => {
  const card = makeCard({ entities: ['calendar.a', 'calendar.b', 'calendar.c'] });
  const event = {
    entityId: 'calendar.a',
    sourceEntityIds: ['calendar.a'],
    sourceEvents: [{ entityId: 'calendar.a' }],
    summary: 'Team sync',
    location: 'Room A',
    start: { dateTime: '2026-05-01T10:00:00Z' },
    end: { dateTime: '2026-05-01T11:00:00Z' }
  };
  card._events = [
    { entityId: 'calendar.b', summary: 'Team sync', location: 'Room A', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } },
    { entityId: 'calendar.c', summary: 'Different', location: 'Room A', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } }
  ];

  assert.deepEqual([...card.getForwardExistingCalendarIds(event)].sort(), ['calendar.a', 'calendar.b']);
});

test('event_styles apply rule priority and match logic', () => {
  const card = makeCard({
    entities: ['calendar.a'],
    event_styles: [
      { match: { title: 'meeting' }, priority: 1, style: { background_color: '#112233', event_font_color: '#ffffff' } },
      { match: { all_day: true }, priority: 5, style: { background_color: '#445566' } }
    ]
  });
  const event = { entityId: 'calendar.a', color: '#f00', summary: 'Team meeting', start: { date: '2026-05-01' }, end: { date: '2026-05-02' } };
  const overrides = card.getEventStyleOverrides(event);
  assert.equal(overrides.background_color, '#445566');
  assert.equal(overrides.event_font_color, '#ffffff');
  assert.equal(card.eventMatchesRule(event, { title: 'meeting', not: { title: 'holiday' } }), true);
});


test('event_styles do not render event icons by default', () => {
  const card = makeCard({ entities: ['calendar.a'] });
  const event = { entityId: 'calendar.a', color: '#f00', summary: 'Team meeting', start: { date: '2026-05-01' }, end: { date: '2026-05-02' } };

  assert.equal(card.getEventStyleIconConfig(event), null);
  assert.equal(card.renderEventTitleWithPrefix(event, event.summary), 'Team meeting');
  assert.equal(card.renderEventStyleCornerIcon(event), '');
});

test('event_styles render event icon when matching rule applies', () => {
  const card = makeCard({
    entities: ['calendar.a'],
    event_styles: [
      { match: { title: 'meeting' }, style: { icon: 'mdi:basketball' } }
    ]
  });
  const event = { entityId: 'calendar.a', color: '#f00', summary: 'Team meeting', start: { date: '2026-05-01' }, end: { date: '2026-05-02' } };

  const title = card.renderEventTitleWithPrefix(event, event.summary);
  assert.match(title, /ha-icon class="event-style-icon event-style-icon-before-title" icon="mdi:basketball"/);
  assert.match(title, /Team meeting/);
});

test('event_styles non-matching icon rules do not render icons', () => {
  const card = makeCard({
    entities: ['calendar.a'],
    event_styles: [
      { match: { title: 'practice' }, style: { icon: 'mdi:basketball' } }
    ]
  });
  const event = { entityId: 'calendar.a', color: '#f00', summary: 'Team meeting', start: { date: '2026-05-01' }, end: { date: '2026-05-02' } };

  assert.equal(card.getEventStyleIconConfig(event), null);
  assert.doesNotMatch(card.renderEventTitleWithPrefix(event, event.summary), /ha-icon/);
});

test('event_styles ignore invalid event icon names safely', () => {
  const card = makeCard({
    entities: ['calendar.a'],
    event_styles: [
      { match: { title: 'meeting' }, style: { icon: 'javascript:alert-1', icon_color: 'orange', icon_size: 18 } },
      { match: { title: 'meeting' }, priority: -1, style: { icon: 'mdi:Valid-But-Mixed-Case' } },
      { match: { title: 'meeting' }, priority: -2, style: { icon: 'mdi:' } }
    ]
  });
  const event = { entityId: 'calendar.a', color: '#f00', summary: 'Team meeting', start: { date: '2026-05-01' }, end: { date: '2026-05-02' } };

  assert.equal(card.getEventStyleIconConfig(event), null);
  assert.doesNotMatch(card.renderEventTitleWithPrefix(event, event.summary), /ha-icon/);
});

test('event_styles ignore top-level event icon fields outside style block', () => {
  const card = makeCard({
    entities: ['calendar.a'],
    event_styles: [
      { match: { title: 'meeting' }, icon: 'mdi:star', icon_color: 'gold', style: { background_color: '#112233' } }
    ]
  });
  const event = { entityId: 'calendar.a', color: '#f00', summary: 'Team meeting', start: { date: '2026-05-01' }, end: { date: '2026-05-02' } };

  assert.equal(card.getEventStyleIconConfig(event), null);
  assert.equal(card.getEventStyleOverrides(event).background_color, '#112233');
  assert.doesNotMatch(card.renderEventTitleWithPrefix(event, event.summary), /mdi:star/);
});

test('event_styles apply configured event icon color and size', () => {
  const card = makeCard({
    entities: ['calendar.a'],
    event_styles: [
      { match: { title: 'meeting' }, style: { icon: 'mdi:basketball', icon_color: 'orange', icon_size: 18 } }
    ]
  });
  const event = { entityId: 'calendar.a', color: '#f00', summary: 'Team meeting', start: { date: '2026-05-01' }, end: { date: '2026-05-02' } };

  const title = card.renderEventTitleWithPrefix(event, event.summary);
  assert.match(title, /color: #FFA500;/);
  assert.match(title, /--event-style-icon-size: 18px;/);
});

test('event_styles icon precedence follows style rule precedence', () => {
  const card = makeCard({
    entities: ['calendar.a'],
    event_styles: [
      { match: { title: 'meeting' }, priority: 1, style: { icon: 'mdi:calendar', icon_color: 'blue' } },
      { match: { all_day: true }, priority: 5, style: { icon: 'mdi:trophy', icon_color: 'red' } }
    ]
  });
  const event = { entityId: 'calendar.a', color: '#f00', summary: 'Team meeting', start: { date: '2026-05-01' }, end: { date: '2026-05-02' } };

  const title = card.renderEventTitleWithPrefix(event, event.summary);
  assert.match(title, /icon="mdi:trophy"/);
  assert.match(title, /color: #FF0000;/);
  assert.doesNotMatch(title, /mdi:calendar/);
});

test('renderEventTitleWithPrefix keeps existing title output without icon and adds icon with prefixes', () => {
  const plainCard = makeCard({ entities: ['calendar.a'], event_title_prefix: 'none' });
  const prefixedCard = makeCard({
    entities: ['calendar.a'],
    calendar_badge_icons: { 'calendar.a': 'mdi:home' },
    event_title_prefix: 'badge_icon',
    event_styles: [
      { match: { title: 'meeting' }, style: { icon: 'mdi:basketball' } }
    ]
  });
  const event = { entityId: 'calendar.a', color: '#f00', summary: 'Team meeting', start: { date: '2026-05-01' }, end: { date: '2026-05-02' } };

  assert.equal(plainCard.renderEventTitleWithPrefix(event, event.summary), 'Team meeting');
  const prefixedTitle = prefixedCard.renderEventTitleWithPrefix(event, event.summary);
  assert.match(prefixedTitle, /event-title-prefix-badge/);
  assert.match(prefixedTitle, /icon="mdi:home"/);
  assert.match(prefixedTitle, /event-style-icon-before-title/);
  assert.match(prefixedTitle, /icon="mdi:basketball"/);
});

test('event_styles render corner-position icons separately from event titles', () => {
  const card = makeCard({
    entities: ['calendar.a'],
    event_styles: [
      { match: { title: 'meeting' }, style: { icon: 'mdi:star', icon_position: 'corner', icon_size: '1.2em' } }
    ]
  });
  const event = { entityId: 'calendar.a', color: '#f00', summary: 'Team meeting', start: { date: '2026-05-01' }, end: { date: '2026-05-02' } };

  assert.doesNotMatch(card.renderEventTitleWithPrefix(event, event.summary), /mdi:star/);
  const cornerIcon = card.renderEventStyleCornerIcon(event);
  assert.match(cornerIcon, /event-style-icon-corner/);
  assert.match(cornerIcon, /icon="mdi:star"/);
  assert.match(cornerIcon, /--event-style-icon-size: 1.2em;/);
});

test('event_styles supports past matcher for past and future events', () => {
  const card = makeCard({ entities: ['calendar.a'] });
  const pastEvent = { entityId: 'calendar.a', color: '#f00', summary: 'Past Event', start: { dateTime: '2000-05-01T10:00:00Z' }, end: { dateTime: '2000-05-01T11:00:00Z' } };
  const futureEvent = { entityId: 'calendar.a', color: '#0f0', summary: 'Future Event', start: { dateTime: '2999-05-01T10:00:00Z' }, end: { dateTime: '2999-05-01T11:00:00Z' } };

  assert.equal(card.eventMatchesRule(pastEvent, { past: true }), true);
  assert.equal(card.eventMatchesRule(futureEvent, { past: true }), false);
  assert.equal(card.eventMatchesRule(futureEvent, { past: false }), true);
  assert.equal(card.eventMatchesRule(pastEvent, { past: 'true' }), true);
  assert.equal(card.eventMatchesRule(futureEvent, { past: 'false' }), true);
});

test('event_styles supports past matcher inside logical all and not wrappers', () => {
  const card = makeCard({ entities: ['calendar.a'] });
  const pastEvent = { entityId: 'calendar.a', color: '#f00', summary: 'Past Meeting', start: { dateTime: '2000-05-01T10:00:00Z' }, end: { dateTime: '2000-05-01T11:00:00Z' } };
  const futureEvent = { entityId: 'calendar.a', color: '#0f0', summary: 'Future Meeting', start: { dateTime: '2999-05-01T10:00:00Z' }, end: { dateTime: '2999-05-01T11:00:00Z' } };

  assert.equal(card.eventMatchesRule(pastEvent, { all: [{ past: true }, { title: 'meeting' }] }), true);
  assert.equal(card.eventMatchesRule(futureEvent, { all: [{ past: true }, { title: 'meeting' }] }), false);
  assert.equal(card.eventMatchesRule(futureEvent, { not: { past: true } }), true);
  assert.equal(card.eventMatchesRule(pastEvent, { not: { past: true } }), false);
});

test('event_styles applies custom opacity and filter to past events only', () => {
  const card = makeCard({
    entities: ['calendar.a'],
    event_styles: [{ match: { past: true }, style: { opacity: 0.35, filter: ' grayscale(80%) ' } }]
  });
  const pastEvent = { entityId: 'calendar.a', color: '#f00', summary: 'Past Event', start: { dateTime: '2000-05-01T10:00:00Z' }, end: { dateTime: '2000-05-01T11:00:00Z' } };
  const futureEvent = { entityId: 'calendar.a', color: '#0f0', summary: 'Future Event', start: { dateTime: '2999-05-01T10:00:00Z' }, end: { dateTime: '2999-05-01T11:00:00Z' } };

  assert.match(card.getEventStyle(pastEvent), /opacity: 0\.35/);
  assert.match(card.getEventStyle(pastEvent), /filter: grayscale\(80%\)/);
  assert.doesNotMatch(card.getEventStyle(futureEvent), /opacity: 0\.35/);
  assert.doesNotMatch(card.getEventStyle(futureEvent), /filter: grayscale\(80%\)/);
});

test('event_styles custom opacity and filter override muted past event defaults', () => {
  const card = makeCard({
    entities: ['calendar.a'],
    past_event_mode: 'muted',
    event_styles: [{ match: { past: true }, style: { opacity: '0.35', filter: 'grayscale(80%)' } }]
  });
  const pastEvent = { entityId: 'calendar.a', color: '#f00', summary: 'Past Event', start: { dateTime: '2000-05-01T10:00:00Z' }, end: { dateTime: '2000-05-01T11:00:00Z' } };
  const style = card.getEventStyle(pastEvent);

  assert.match(style, /opacity: 0\.35/);
  assert.match(style, /filter: grayscale\(80%\)/);
  assert.doesNotMatch(style, /opacity: 0\.55/);
  assert.doesNotMatch(style, /filter: grayscale\(70%\) saturate\(45%\)/);
});

test('event_styles ignores invalid opacity and filter values', () => {
  const card = makeCard({
    entities: ['calendar.a'],
    event_styles: [
      { match: { title: 'bad opacity' }, style: { opacity: 'opaque', filter: 'blur(2px); color: red' } },
      { match: { title: 'bad filter' }, style: { opacity: 0.4, filter: '<script>' } },
      { match: { title: 'double quote attack' }, style: { opacity: 0.5, filter: 'blur(1px)" onmouseover="alert(1)' } },
      { match: { title: 'single quoted filter' }, style: { opacity: 0.6, filter: "blur(1px)' onmouseover='alert(1)" } },
      { match: { title: 'empty filter' }, style: { filter: '   ' } }
    ]
  });
  const badOpacityEvent = { entityId: 'calendar.a', color: '#f00', summary: 'Bad Opacity', start: { dateTime: '2999-05-01T10:00:00Z' }, end: { dateTime: '2999-05-01T11:00:00Z' } };
  const badFilterEvent = { entityId: 'calendar.a', color: '#0f0', summary: 'Bad Filter', start: { dateTime: '2999-05-02T10:00:00Z' }, end: { dateTime: '2999-05-02T11:00:00Z' } };
  const quotedFilterEvent = { entityId: 'calendar.a', color: '#00f', summary: 'Double Quote Attack', start: { dateTime: '2999-05-03T10:00:00Z' }, end: { dateTime: '2999-05-03T11:00:00Z' } };
  const singleQuotedFilterEvent = { entityId: 'calendar.a', color: '#ff0', summary: 'Single Quoted Filter', start: { dateTime: '2999-05-04T10:00:00Z' }, end: { dateTime: '2999-05-04T11:00:00Z' } };
  const emptyFilterEvent = { entityId: 'calendar.a', color: '#0ff', summary: 'Empty Filter', start: { dateTime: '2999-05-05T10:00:00Z' }, end: { dateTime: '2999-05-05T11:00:00Z' } };

  assert.doesNotMatch(card.getEventStyle(badOpacityEvent), /opacity:/);
  assert.doesNotMatch(card.getEventStyle(badOpacityEvent), /filter:/);
  assert.match(card.getEventStyle(badFilterEvent), /opacity: 0\.4/);
  assert.doesNotMatch(card.getEventStyle(badFilterEvent), /filter:/);
  assert.match(card.getEventStyle(quotedFilterEvent), /opacity: 0\.5/);
  assert.doesNotMatch(card.getEventStyle(quotedFilterEvent), /filter:/);
  assert.match(card.getEventStyle(singleQuotedFilterEvent), /opacity: 0\.6/);
  assert.doesNotMatch(card.getEventStyle(singleQuotedFilterEvent), /filter:/);
  assert.doesNotMatch(card.getEventStyle(emptyFilterEvent), /filter:/);
});

test('event_styles style hide with past matcher hides normally but keeps includeHiddenStyledEvents access', () => {
  const card = makeCard({
    entities: ['calendar.a'],
    event_styles: [{ match: { past: true }, style: 'hide' }]
  });
  card._events = [
    { entityId: 'calendar.a', color: '#f00', summary: 'Past Hidden Event', start: { dateTime: '2000-05-01T10:00:00Z' }, end: { dateTime: '2000-05-01T11:00:00Z' } },
    { entityId: 'calendar.a', color: '#0f0', summary: 'Future Visible Event', start: { dateTime: '2999-05-01T10:00:00Z' }, end: { dateTime: '2999-05-01T11:00:00Z' } }
  ];

  const pastDay = new Date('2000-05-01T00:00:00Z');
  const visibleEvents = card.getEventsForDay(pastDay);
  const styledEvents = card.getEventsForDay(pastDay, { includeHiddenStyledEvents: true });

  assert.equal(visibleEvents.length, 0);
  assert.equal(styledEvents.length, 1);
  assert.equal(styledEvents[0].summary, 'Past Hidden Event');
});

test('event_styles supports `style: hide` and keeps hidden events available for day_badges matching', () => {
  const card = makeCard({
    entities: ['calendar.a'],
    event_styles: [{ match: { title: 'private' }, style: 'hide' }],
    day_badges: [{ conditions: { title: 'private' }, text: 'P' }]
  });
  card._events = [
    { entityId: 'calendar.a', color: '#f00', summary: 'Private Meeting', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } }
  ];

  const day = new Date('2026-05-01T00:00:00Z');
  const visibleEvents = card.getEventsForDay(day);
  const badgeEvents = card.getEventsForDay(day, { includeHiddenStyledEvents: true });

  assert.equal(visibleEvents.length, 0);
  assert.equal(badgeEvents.length, 1);
  assert.match(card.renderDayBadges(day, badgeEvents), /day-badge-text">P</);
});

test('event_styles supports object hide syntax and hidden events still trigger day_styles has_event', () => {
  const card = makeCard({
    entities: ['calendar.a'],
    event_styles: [{ match: { title: 'private' }, style: { hide: true } }],
    day_styles: [{ condition: 'has_event', calendar: 'calendar.a', title_match: 'private', background: '#123456' }]
  });
  card._events = [
    { entityId: 'calendar.a', color: '#f00', summary: 'Private Meeting', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } }
  ];

  const day = new Date('2026-05-01T00:00:00Z');
  const matchingEvents = card.getEventsForDay(day, { includeHiddenStyledEvents: true });
  const visibleEvents = matchingEvents.filter((event) => !card.isEventHiddenByStyle(event));
  const dayStyle = card.getDayStyleAttributes(day, matchingEvents, false);

  assert.equal(visibleEvents.length, 0);
  assert.match(dayStyle.style, /#123456/);
});

test('hidden events do not contribute to month overflow counts', () => {
  const card = makeCard({
    entities: ['calendar.a'],
    max_events: 1,
    event_styles: [{ match: { title: 'private' }, style: 'hide' }]
  });
  card._events = [
    { entityId: 'calendar.a', color: '#0f0', summary: 'Visible Event', start: { dateTime: '2026-05-01T08:00:00Z' }, end: { dateTime: '2026-05-01T09:00:00Z' } },
    { entityId: 'calendar.a', color: '#f00', summary: 'Private Event', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } }
  ];

  const html = card.renderDay(1, new Date('2026-05-01T00:00:00Z'), false);
  assert.doesNotMatch(html, /more-events/);
  assert.doesNotMatch(html, /Private Event/);
  assert.match(html, /Visible Event/);
});


test('day_badges renders text badge when event title matches', () => {
  const card = makeCard({ entities: ['calendar.a'], day_badges: [{ conditions: { title_contains: 'ballet' }, text: 'PL', background_color: '#ff4b2b', color: '#000000' }] });
  const events = [{ entityId: 'calendar.a', summary: 'Ballet Practice', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } }];
  const html = card.renderDayBadges(new Date('2026-05-01T00:00:00Z'), events);
  assert.match(html, /day-badge-text">PL</);
});

test('day_badges renders icon badge when event title matches', () => {
  const card = makeCard({ entities: ['calendar.a'], day_badges: [{ conditions: { title: 'ballet' }, icon: 'mdi:shoe-ballet' }] });
  const events = [{ entityId: 'calendar.a', summary: 'Ballet Practice', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } }];
  const html = card.renderDayBadges(new Date('2026-05-01T00:00:00Z'), events);
  assert.match(html, /ha-icon icon="mdi:shoe-ballet"/);
});

test('day_badges prefers text when both text and icon are configured', () => {
  const card = makeCard({ entities: ['calendar.a'], day_badges: [{ conditions: { title: 'ballet' }, text: 'PL', icon: 'mdi:shoe-ballet' }] });
  const events = [{ entityId: 'calendar.a', summary: 'Ballet Practice', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } }];
  const html = card.renderDayBadges(new Date('2026-05-01T00:00:00Z'), events);
  assert.match(html, /day-badge-text">PL</);
  assert.doesNotMatch(html, /mdi:shoe-ballet/);
});

test('day_badges does not render on non-matching days', () => {
  const card = makeCard({ entities: ['calendar.a'], day_badges: [{ conditions: { title: 'ballet' }, text: 'PL' }] });
  const events = [{ entityId: 'calendar.a', summary: 'Daily Sync', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } }];
  assert.equal(card.renderDayBadges(new Date('2026-05-01T00:00:00Z'), events), '');
});

test('day_badges renders multiple matching badge rules', () => {
  const card = makeCard({ entities: ['calendar.a'], day_badges: [
    { conditions: { title: 'sync' }, text: 'S' },
    { conditions: { calendar: 'calendar.a' }, icon: 'mdi:calendar' }
  ] });

  const events = [{ entityId: 'calendar.a', summary: 'Daily Sync', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } }];
  const html = card.renderDayBadges(new Date('2026-05-01T00:00:00Z'), events);
  assert.equal((html.match(/class="day-badge"/g) || []).length, 2);
});

test('day_badges supports legacy-style condition aliases', () => {
  const card = makeCard({ entities: ['calendar.a'], day_badges: [{ conditions: { entity: 'calendar.a', location_contains: 'mountain' }, text: 'L' }] });
  const events = [{ entityId: 'calendar.a', summary: 'Run', location: 'Black Mountain Rd', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } }];
  const html = card.renderDayBadges(new Date('2026-05-01T00:00:00Z'), events);
  assert.match(html, /day-badge-text">L</);
});

test('day_badges supports configurable size and font_size', () => {
  const card = makeCard({ entities: ['calendar.a'], day_badges: [{ conditions: { title: 'ballet' }, text: 'PL', size: 32, font_size: '14px' }] });
  const events = [{ entityId: 'calendar.a', summary: 'Ballet Practice', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } }];
  const html = card.renderDayBadges(new Date('2026-05-01T00:00:00Z'), events);
  assert.match(html, /--dcc-day-badge-size: 32px;/);
  assert.match(html, /--dcc-day-badge-font-size: 14px;/);
  assert.doesNotMatch(html, /--day-badge-size:/);
  assert.doesNotMatch(html, /--day-badge-font-size:/);
});


function extractCssRule(styles, selector) {
  const start = styles.indexOf(selector);
  assert.notEqual(start, -1, `${selector} should exist`);
  const end = styles.indexOf('}', start);
  return styles.slice(start, end + 1);
}

test('getStyles includes full-height flex layout contract for HA Sections grids', () => {
  const card = makeCard({ entities: ['calendar.a'] });
  const styles = card.getStyles();

  const hostRule = extractCssRule(styles, ':host,');
  assert.match(hostRule, /height:\s*100%/);
  assert.match(hostRule, /min-height:\s*0/);

  const containerRule = extractCssRule(styles, '.calendar-container {');
  assert.match(containerRule, /height:\s*100%/);
  assert.match(containerRule, /min-height:\s*100%/);
  assert.match(containerRule, /display:\s*flex/);
  assert.match(containerRule, /flex-direction:\s*column/);

  const bodyRule = extractCssRule(styles, '.calendar-body {');
  assert.match(bodyRule, /flex:\s*1 1 auto/);
  assert.match(bodyRule, /min-height:\s*0/);
  assert.match(bodyRule, /display:\s*flex/);
  assert.match(bodyRule, /flex-direction:\s*column/);

  for (const selector of ['.calendar-grid {', '.week-compact-container {', '.week-standard-container {', '.agenda-container {']) {
    const rule = extractCssRule(styles, selector);
    assert.match(rule, /flex:\s*1 1 auto/, `${selector} should flex`);
    assert.match(rule, /min-height:\s*0/, `${selector} should be allowed to shrink`);
  }
});

test('getCompactContainerStyle uses grid-aware percentage height inside constrained parent', () => {
  const card = makeCard({ entities: ['calendar.a'], compact_height: true });
  const parent = {
    style: { height: '480px' },
    getBoundingClientRect: () => ({ width: 320, height: 480 }),
    hasAttribute: () => false,
    classList: { contains: () => false }
  };
  card.parentElement = parent;

  const originalGetComputedStyle = window.getComputedStyle;
  try {
    window.getComputedStyle = (element) => element === parent
      ? { height: '480px', maxHeight: 'none', display: 'block', overflowY: 'visible', overflow: 'visible' }
      : originalGetComputedStyle(element);

    assert.equal(card.hasFixedHeightParentAllocation(), true);
    assert.equal(card.getCompactContainerStyle(720), 'height: 100%; min-height: 0; overflow-y: auto;');
  } finally {
    window.getComputedStyle = originalGetComputedStyle;
  }
});


test('getCompactContainerStyle preserves viewport fallback for auto-height parent with computed height', () => {
  const card = makeCard({ entities: ['calendar.a'], compact_height: true });
  const parent = {
    style: {},
    getAttribute: () => '',
    getBoundingClientRect: () => ({ width: 320, height: 480 }),
    hasAttribute: () => false,
    classList: { contains: () => false }
  };
  card.parentElement = parent;
  card.getBoundingClientRect = () => ({ width: 320, height: 480, top: 120 });

  const originalGetComputedStyle = window.getComputedStyle;
  const originalInnerHeight = window.innerHeight;
  const originalVisualViewport = window.visualViewport;
  try {
    window.innerHeight = 900;
    delete window.visualViewport;
    window.getComputedStyle = (element) => element === parent
      ? { height: '480px', maxHeight: 'none', display: 'block', overflowY: 'visible', overflow: 'visible' }
      : originalGetComputedStyle(element);

    assert.equal(card.hasFixedHeightParentAllocation(), false);
    assert.equal(card.getCompactContainerStyle(), 'height: 780px; max-height: 780px; overflow-y: auto;');
  } finally {
    window.getComputedStyle = originalGetComputedStyle;
    window.innerHeight = originalInnerHeight;
    window.visualViewport = originalVisualViewport;
  }
});

test('getCompactContainerStyle uses grid-aware percentage height inside grid-like parent', () => {
  const card = makeCard({ entities: ['calendar.a'], compact_height: true });
  const parent = {
    style: {},
    getAttribute: () => '',
    getBoundingClientRect: () => ({ width: 320, height: 480 }),
    hasAttribute: () => false,
    classList: { contains: (className) => className === 'grid-cell' }
  };
  card.parentElement = parent;

  const originalGetComputedStyle = window.getComputedStyle;
  try {
    window.getComputedStyle = (element) => element === parent
      ? { height: '480px', maxHeight: 'none', display: 'block', overflowY: 'visible', overflow: 'visible' }
      : originalGetComputedStyle(element);

    assert.equal(card.hasFixedHeightParentAllocation(), true);
    assert.equal(card.getCompactContainerStyle(720), 'height: 100%; min-height: 0; overflow-y: auto;');
  } finally {
    window.getComputedStyle = originalGetComputedStyle;
  }
});

test('getCompactContainerStyle preserves viewport fallback without constrained parent', () => {
  const card = makeCard({ entities: ['calendar.a'], compact_height: true });
  card.parentElement = null;
  card.getBoundingClientRect = () => ({ top: 120 });
  const originalInnerHeight = window.innerHeight;
  const originalVisualViewport = window.visualViewport;
  try {
    window.innerHeight = 900;
    delete window.visualViewport;
    assert.equal(card.hasFixedHeightParentAllocation(), false);
    assert.equal(card.getCompactContainerStyle(), 'height: 780px; max-height: 780px; overflow-y: auto;');
  } finally {
    window.innerHeight = originalInnerHeight;
    window.visualViewport = originalVisualViewport;
  }
});

test('disconnectedCallback disconnects host ResizeObserver', () => {
  const card = makeCard({ entities: ['calendar.a'] });
  let disconnectCount = 0;
  const originalResizeObserver = window.ResizeObserver;
  const originalCancelAnimationFrame = window.cancelAnimationFrame;
  const originalRemoveEventListener = window.removeEventListener;
  try {
    window.ResizeObserver = class ResizeObserverMock {
      observe() {}
      disconnect() { disconnectCount += 1; }
    };
    window.cancelAnimationFrame = () => {};
    window.removeEventListener = () => {};
    card.parentElement = { getBoundingClientRect: () => ({ width: 320, height: 480 }) };

    card.observeHostAndParentResize();
    assert.ok(card._hostResizeObserver);

    card.disconnectedCallback();

    assert.equal(disconnectCount, 1);
    assert.equal(card._hostResizeObserver, null);
  } finally {
    window.ResizeObserver = originalResizeObserver;
    window.cancelAnimationFrame = originalCancelAnimationFrame;
    window.removeEventListener = originalRemoveEventListener;
  }
});

test('day_badge CSS variables do not leak into non-badge selectors', () => {
  const card = makeCard({ entities: ['calendar.a'] });
  const styles = card.getStyles();
  const leakingSelectors = [
    '.day-header',
    '.week-day-name',
    '.agenda-day-weekday',
    '.agenda-empty-day',
    '.calendar-badge-name',
    '.week-standard-day-name',
    '.forecast-temperatures'
  ];

  for (const selector of leakingSelectors) {
    let start = 0;
    let foundAny = false;

    while ((start = styles.indexOf(selector, start)) !== -1) {
      foundAny = true;
      const end = styles.indexOf('}', start);
      const block = styles.slice(start, end + 1);

      assert.doesNotMatch(block, /var\(--day-badge-/);
      assert.doesNotMatch(block, /var\(--dcc-day-badge-/);

      start = end;
    }

    assert.equal(foundAny, true);
  }
});

test('legacy day_badge CSS variables are fully removed from styles', () => {
  const card = makeCard({ entities: ['calendar.a'] });
  const styles = card.getStyles();

  assert.doesNotMatch(styles, /--day-badge-size/);
  assert.doesNotMatch(styles, /--day-badge-font-size/);
  assert.doesNotMatch(styles, /--day-badge-background/);
  assert.doesNotMatch(styles, /--day-badge-color/);
});

test('empty day_badges config does not emit badge variables', () => {
  const card = makeCard({ entities: ['calendar.a'], day_badges: [] });
  const events = [{ entityId: 'calendar.a', summary: 'Ballet Practice', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } }];
  const html = card.renderDayBadges(new Date('2026-05-01T00:00:00Z'), events);
  assert.equal(html, '');
  assert.doesNotMatch(html, /--dcc-day-badge-/);
  assert.doesNotMatch(html, /--day-badge-/);
});

test('standard header wrapped state does not force header groups to full width', () => {
  const card = makeCard({ entities: ['calendar.a'], compact_header: false });
  const styles = card.getStyles();
  const standardRuleIndex = styles.indexOf('.header.is-wrapped .header-left');
  assert.notEqual(standardRuleIndex, -1);
  const standardRuleEnd = styles.indexOf('}', standardRuleIndex);
  const standardRule = styles.slice(standardRuleIndex, standardRuleEnd + 1);

  assert.doesNotMatch(standardRule, /width:\s*100%/);
  assert.match(standardRule, /justify-content:\s*center/);
});

test('compact header wrapped state still forces full-width centered groups', () => {
  const card = makeCard({ entities: ['calendar.a'], compact_header: true });
  const styles = card.getStyles();

  const compactRuleIndex = styles.indexOf('.header-compact.is-wrapped .compact-header-left');
  assert.notEqual(compactRuleIndex, -1);

  const compactRuleEnd = styles.indexOf('}', compactRuleIndex);
  const compactRule = styles.slice(compactRuleIndex, compactRuleEnd + 1);

  assert.match(compactRule, /width:\s*100%/);
  assert.match(compactRule, /justify-content:\s*center/);

  assert.match(styles, /\.header-compact\.is-wrapped\s*\{[^}]*align-items:\s*center/);
  assert.match(styles, /\.header-compact\.is-wrapped\s*\{[^}]*justify-content:\s*center/);
  assert.match(styles, /\.header-compact\.is-wrapped \.compact-header-left\s*\{[^}]*text-align:\s*center/);
  assert.match(styles, /\.header-compact\.is-wrapped \.compact-header-left\s*\{[^}]*flex-wrap:\s*wrap/);
  assert.match(styles, /\.header-compact\.is-wrapped \.header-title-wrap\s*\{[^}]*text-align:\s*center/);
  assert.match(styles, /\.header-compact\.is-wrapped \.compact-header-controls\s*\{[^}]*row-gap:\s*12px/);
  assert.match(styles, /\.header-compact\.is-wrapped \.compact-header-controls\s*\{[^}]*column-gap:\s*12px/);
  assert.match(styles, /\.header-compact\.is-wrapped \.compact-period-controls\s*\{[^}]*flex-wrap:\s*wrap/);
  assert.match(styles, /\.header-compact\.is-wrapped \.today-button,\s*\n\s*\.header-compact\.is-wrapped \.compact-add-event-button/);
});

test('issue 321 standard header wrapped state does not force full-width rows', () => {
  const card = makeCard({
    entities: ['calendar.a'],
    compact_header: false,
    day_badges: [],
    hide_dark_mode_toggle: true,
    show_dashboard_nav_button: true,
    header_weather_sensor: 'weather.home',
    enable_event_management: true
  });

  const styles = card.getStyles();

  const standardRuleIndex = styles.indexOf('.header.is-wrapped .header-left');
  assert.notEqual(standardRuleIndex, -1);
  const standardRuleEnd = styles.indexOf('}', standardRuleIndex);
  const standardRule = styles.slice(standardRuleIndex, standardRuleEnd + 1);
  assert.doesNotMatch(standardRule, /width:\s*100%/);
});

test('issue321 compact header width detection is deterministic', () => {
  const card = makeCard({ entities: ['calendar.a'], compact_header: true });
  const header = document.createElement('div');
  const left = document.createElement('div');
  const controls = document.createElement('div');

  Object.defineProperty(header, 'clientWidth', { configurable: true, value: 1000 });

  const originalMeasure = card.measureNaturalGroupWidth;
  const originalGetComputedStyle = window.getComputedStyle;
  try {
    card.measureNaturalGroupWidth = (group) => (group === left ? 300 : 400);
    window.getComputedStyle = () => ({ columnGap: '16px', gap: '16px' });
    assert.equal(card.shouldMarkHeaderWrappedFromWidth(header, left, controls), false);

    Object.defineProperty(header, 'clientWidth', { configurable: true, value: 600 });
    assert.equal(card.shouldMarkHeaderWrappedFromWidth(header, left, controls), true);
  } finally {
    card.measureNaturalGroupWidth = originalMeasure;
    window.getComputedStyle = originalGetComputedStyle;
  }
});

test('issue321 standard header width detection is deterministic', () => {
  const card = makeCard({ entities: ['calendar.a'], compact_header: false });
  const header = document.createElement('div');
  const left = document.createElement('div');
  const controls = document.createElement('div');

  Object.defineProperty(header, 'clientWidth', { configurable: true, value: 920 });

  const originalMeasure = card.measureNaturalGroupWidth;
  const originalGetComputedStyle = window.getComputedStyle;
  try {
    card.measureNaturalGroupWidth = (group) => (group === left ? 320 : 500);
    window.getComputedStyle = () => ({ columnGap: '16px', gap: '16px' });
    assert.equal(card.shouldMarkHeaderWrappedFromWidth(header, left, controls), false);

    Object.defineProperty(header, 'clientWidth', { configurable: true, value: 780 });
    assert.equal(card.shouldMarkHeaderWrappedFromWidth(header, left, controls), true);
  } finally {
    card.measureNaturalGroupWidth = originalMeasure;
    window.getComputedStyle = originalGetComputedStyle;
  }
});


test('issue321 controls wrap detection uses width-based helper', () => {
  const card = makeCard({ entities: ['calendar.a'] });
  const group = document.createElement('div');

  Object.defineProperty(group, 'clientWidth', { configurable: true, value: 800 });

  const originalMeasure = card.measureNaturalGroupWidth;
  try {
    card.measureNaturalGroupWidth = () => 616;
    assert.equal(card.shouldMarkGroupWrappedFromWidth(group), false);

    Object.defineProperty(group, 'clientWidth', { configurable: true, value: 500 });
    assert.equal(card.shouldMarkGroupWrappedFromWidth(group), true);
  } finally {
    card.measureNaturalGroupWidth = originalMeasure;
  }
});

test('header width detection uses content-box width excluding padding', () => {
  const card = makeCard({ entities: ['calendar.a'] });
  const header = document.createElement('div');
  const left = document.createElement('div');
  const controls = document.createElement('div');

  Object.defineProperty(header, 'clientWidth', { configurable: true, value: 1000 });

  const originalMeasure = card.measureNaturalGroupWidth;
  const originalGetComputedStyle = window.getComputedStyle;
  try {
    card.measureNaturalGroupWidth = (group) => (group === left ? 480 : 460);
    window.getComputedStyle = (element) => {
      if (element === header) {
        return {
          columnGap: '16px',
          gap: '16px',
          paddingLeft: '24px',
          paddingRight: '24px'
        };
      }

      return {
        columnGap: '0px',
        gap: '0px',
        paddingLeft: '0px',
        paddingRight: '0px'
      };
    };

    assert.equal(card.shouldMarkHeaderWrappedFromWidth(header, left, controls), true);
  } finally {
    card.measureNaturalGroupWidth = originalMeasure;
    window.getComputedStyle = originalGetComputedStyle;
  }
});

test('issue321 header width detection uses 2px tolerance to avoid flicker', () => {
  const card = makeCard({ entities: ['calendar.a'] });
  const header = document.createElement('div');
  const left = document.createElement('div');
  const controls = document.createElement('div');

  Object.defineProperty(header, 'clientWidth', { configurable: true, value: 800 });

  const originalMeasure = card.measureNaturalGroupWidth;
  const originalGetComputedStyle = window.getComputedStyle;
  try {
    let leftWidth = 400;
    let controlsWidth = 385;
    card.measureNaturalGroupWidth = (group) => (group === left ? leftWidth : controlsWidth);
    window.getComputedStyle = () => ({ columnGap: '16px', gap: '16px' });

    assert.equal(card.shouldMarkHeaderWrappedFromWidth(header, left, controls), false);

    controlsWidth = 389;
    assert.equal(card.shouldMarkHeaderWrappedFromWidth(header, left, controls), true);
  } finally {
    card.measureNaturalGroupWidth = originalMeasure;
    window.getComputedStyle = originalGetComputedStyle;
  }
});

test('measureNaturalGroupWidth includes child horizontal margins', () => {
  const card = makeCard({ entities: ['calendar.a'] });

  const childOne = {
    offsetParent: {},
    getBoundingClientRect: () => ({ width: 90 })
  };

  const childTwo = {
    offsetParent: {},
    getBoundingClientRect: () => ({ width: 85 })
  };

  const group = {
    children: [childOne, childTwo],
    scrollWidth: 120
  };

  const originalGetComputedStyle = window.getComputedStyle;
  try {
    window.getComputedStyle = (element) => {
      if (element === group) {
        return {
          columnGap: '10px',
          gap: '10px',
          marginLeft: '0px',
          marginRight: '0px'
        };
      }

      if (element === childOne) {
        return {
          marginLeft: '4px',
          marginRight: '6px'
        };
      }

      if (element === childTwo) {
        return {
          marginLeft: '8px',
          marginRight: '2px'
        };
      }

      return {
        marginLeft: '0px',
        marginRight: '0px'
      };
    };

    assert.equal(card.measureNaturalGroupWidth(group), 205);
  } finally {
    window.getComputedStyle = originalGetComputedStyle;
  }
});

test('updateCompactHeaderWrapState keeps header single-row after delayed updates when widths fit', () => {
  const card = makeCard({ entities: ['calendar.a'], compact_header: true });
  const header = {
    classList: {
      _set: new Set(['is-wrapped']),
      remove(name) { this._set.delete(name); },
      toggle(name, force) { if (force) this._set.add(name); else this._set.delete(name); },
      contains(name) { return this._set.has(name); }
    },
    querySelector(sel) {
      if (sel === '.compact-header-left') return left;
      if (sel === '.compact-header-controls') return controls;
      return null;
    }
  };
  const left = { scrollWidth: 300 };
  const controls = {
    scrollWidth: 400,
    children: [{ offsetParent: {}, offsetTop: 20 }, { offsetParent: {}, offsetTop: 20 }],
    classList: { remove() {}, toggle() {} }
  };
  Object.defineProperty(header, 'clientWidth', { configurable: true, value: 1000 });

  const badges = { children: [], classList: { remove() {}, toggle() {} } };
  card._root = {
    querySelector(sel) {
      if (sel === '.header-compact') return header;
      if (sel === '.compact-header-controls') return controls;
      if (sel === '.calendar-badges-inline') return badges;
      if (sel === '.header-controls') return null;
      return null;
    }
  };

  const callbacks = new Map();
  let rafId = 0;
  const originalRaf = window.requestAnimationFrame;
  const originalCancel = window.cancelAnimationFrame;
  const originalGetComputedStyle = window.getComputedStyle;
  const originalMeasure = card.measureNaturalGroupWidth;
  try {
    card.measureNaturalGroupWidth = (group) => (group === left ? 300 : 400);
    window.getComputedStyle = () => ({ columnGap: '16px', gap: '16px' });
    window.requestAnimationFrame = (cb) => {
      rafId += 1;
      callbacks.set(rafId, cb);
      return rafId;
    };
    window.cancelAnimationFrame = (id) => { callbacks.delete(id); };

    card.updateCompactHeaderWrapState();
    const first = callbacks.get(1);
    first();
    const second = callbacks.get(2);
    second();

    assert.equal(header.classList.contains('is-wrapped'), false);
  } finally {
    window.requestAnimationFrame = originalRaf;
    window.cancelAnimationFrame = originalCancel;
    window.getComputedStyle = originalGetComputedStyle;
    card.measureNaturalGroupWidth = originalMeasure;
  }
});

test('repeated updateCompactHeaderWrapState calls cancel previous pending RAFs', () => {
  const card = makeCard({ entities: ['calendar.a'], compact_header: false });
  const callbacks = new Map();
  let rafId = 0;
  const cancelled = [];
  const originalRaf = window.requestAnimationFrame;
  const originalCancel = window.cancelAnimationFrame;
  try {
    window.requestAnimationFrame = (cb) => {
      rafId += 1;
      callbacks.set(rafId, cb);
      return rafId;
    };
    window.cancelAnimationFrame = (id) => {
      cancelled.push(id);
      callbacks.delete(id);
    };

    card.updateCompactHeaderWrapState();
    const firstId = card._wrapMeasureRaf1;
    card.updateCompactHeaderWrapState();
    const secondId = card._wrapMeasureRaf1;

    assert.notEqual(firstId, null);
    assert.notEqual(secondId, null);
    assert.notEqual(firstId, secondId);
    assert.ok(cancelled.includes(firstId));
  } finally {
    window.requestAnimationFrame = originalRaf;
    window.cancelAnimationFrame = originalCancel;
  }
});
test('day_styles evaluate today/weekend/has_event rules and auto background', () => {
  const card = makeCard({
    entities: ['calendar.a'],
    day_styles: [
      { condition: 'today', opacity: 0.7 },
      { condition: 'has_event', calendar: 'calendar.a', title_match: 'sync', background: 'auto', border_color: '#111111', border_width: 2 }
    ]
  });
  const date = new Date();
  const dayEvents = [{ entityId: 'calendar.a', color: '#224466', summary: 'Daily sync', start: { dateTime: '2026-05-01T09:00:00Z' }, end: { dateTime: '2026-05-01T09:30:00Z' } }];
  const style = card.getDayStyleConfig(date, dayEvents, true);
  assert.equal(style.opacity, 0.7);
  assert.equal(style.background, '#224466');
  assert.equal(style.border_color, '#111111');
  assert.equal(style.border_width, '2px');
});

test('day_styles remain empty by default without today convenience options', () => {
  const card = makeCard({ entities: ['calendar.a'] });

  assert.deepEqual(card._config.day_styles, []);
  assert.equal(card.getDayStyleConfig(new Date(), [], true), null);
});

test('today_background_color styles only today through day_styles', () => {
  const card = makeCard({
    entities: ['calendar.a'],
    today_background_color: 'red'
  });

  assert.equal(card._config.day_styles.length, 1);
  assert.equal(card._config.day_styles[0].condition, 'today');
  assert.equal(card._config.day_styles[0].background, '#FF0000');
  assert.equal(card.getDayStyleConfig(new Date(), [], true).background, '#FF0000');
  assert.equal(card.getDayStyleConfig(new Date('2026-05-01T00:00:00Z'), [], false), null);
});

test('today_style styles only today using day style fields', () => {
  const card = makeCard({
    entities: ['calendar.a'],
    today_style: {
      background_color: 'var(--primary-color)',
      background_opacity: 0.4,
      opacity: 0.75,
      border_color: 'blue',
      border_width: 3
    }
  });

  const style = card.getDayStyleConfig(new Date(), [], true);
  assert.equal(style.background, 'var(--primary-color)');
  assert.equal(style.background_opacity, 0.4);
  assert.equal(style.opacity, 0.75);
  assert.equal(style.border_color, '#0000FF');
  assert.equal(style.border_width, '3px');
  assert.equal(card.getDayStyleConfig(new Date('2026-05-01T00:00:00Z'), [], false), null);
});

test('today_style overrides today_background_color for overlapping fields', () => {
  const card = makeCard({
    entities: ['calendar.a'],
    today_background_color: '#ff0000',
    today_style: {
      background_color: '#00ff00',
      opacity: 0.5
    }
  });

  const style = card.getDayStyleConfig(new Date(), [], true);
  assert.equal(style.background, '#00ff00');
  assert.equal(style.opacity, 0.5);
});

test('today convenience styles preserve explicit day_styles behavior', () => {
  const card = makeCard({
    entities: ['calendar.a'],
    today_background_color: '#ff0000',
    day_styles: [{ condition: 'day_of_week', day_of_week: ['friday'], background: '#123456' }]
  });

  const friday = new Date('2026-05-01T00:00:00Z');
  assert.equal(card.getDayStyleConfig(friday, [], false).background, '#123456');
});

test('today convenience styles use default priority lower than explicit higher priority day_styles', () => {
  const card = makeCard({
    entities: ['calendar.a'],
    today_style: { background_color: '#111111', opacity: 0.25, border_color: '#222222' },
    day_styles: [
      { condition: 'today', priority: 1, background: '#333333' },
      { condition: 'today', priority: 0, opacity: 0.8 }
    ]
  });

  const style = card.getDayStyleConfig(new Date(), [], true);
  assert.equal(style.background, '#333333');
  assert.equal(style.opacity, 0.8);
  assert.equal(style.border_color, '#222222');
});

test('today convenience styles ignore invalid style values safely', () => {
  const card = makeCard({
    entities: ['calendar.a'],
    today_style: {
      background_color: '',
      opacity: 'not-a-number',
      background_opacity: 'invalid',
      border_width: '-2'
    }
  });

  assert.deepEqual(card._config.day_styles, []);
  assert.equal(card.getDayStyleConfig(new Date(), [], true), null);
});



test('day_styles apply priority per field with tie-break by rule order', () => {
  const card = makeCard({
    entities: ['calendar.a'],
    day_styles: [
      { condition: 'today', priority: 1, background: '#111111', opacity: 0.2, border_color: '#222222' },
      { condition: 'today', priority: 5, background: '#333333' },
      { condition: 'today', priority: 5, background: '#444444' },
      { condition: 'today', priority: 3, opacity: 0.8, border_color: '#999999', border_width: 4 }
    ]
  });

  const style = card.getDayStyleConfig(new Date(), [], true);
  assert.equal(style.background, '#333333');
  assert.equal(style.opacity, 0.8);
  assert.equal(style.border_color, '#999999');
  assert.equal(style.border_width, '4px');
});

test('day_styles auto background also respects priority', () => {
  const card = makeCard({
    entities: ['calendar.a'],
    day_styles: [
      { condition: 'has_event', calendar: 'calendar.a', title_match: 'sync', priority: 1, background: 'auto' },
      { condition: 'has_event', calendar: 'calendar.a', title_match: 'sync', priority: 9, background: '#abcdef' }
    ]
  });
  const dayEvents = [{ entityId: 'calendar.a', color: '#123456', summary: 'Daily sync', start: { dateTime: '2026-05-01T09:00:00Z' }, end: { dateTime: '2026-05-01T09:30:00Z' } }];
  const style = card.getDayStyleConfig(new Date('2026-05-01T00:00:00Z'), dayEvents, false);
  assert.equal(style.background, '#abcdef');
});
test('virtual_calendars normalize and affect calendar token matching', () => {
  const card = makeCard({
    entities: ['calendar.a', 'calendar.b'],
    virtual_calendars: [{ id: 'family', name: 'Family', entities: ['calendar.a', 'calendar.b'], color: '#778899' }]
  });
  const virtual = card.getVirtualBadgeById('family');
  assert.ok(virtual);
  assert.equal(virtual.color, '#778899');
  const event = { entityId: 'calendar.a', color: '#f00', summary: 'Trip', start: { dateTime: '2026-05-01T09:00:00Z' }, end: { dateTime: '2026-05-01T10:00:00Z' } };
  const tokens = card.getEventCalendarMatchTokens(event);
  assert.ok(tokens.includes('virtual:family'));
  assert.equal(card.eventFieldMatches(event, 'calendar', 'virtual:family'), true);
});



test('feature order: combine then virtual then event styles influences visible colors/style', () => {
  const card = makeCard({
    entities: ['calendar.a', 'calendar.b'],
    combine_calendars: true,
    combine_style: 'bars',
    combine_background: 'primary',
    virtual_calendars: [{ id: 'family', name: 'Family', entities: ['calendar.a'], color: '#123123' }],
    event_styles: [
      { match: { calendar: 'virtual:family' }, priority: 5, style: { background_color: '#999999' } },
      { match: { calendar: 'calendar.b' }, priority: 1, style: { background_color: '#555555' } }
    ]
  });
  const events = card.combineDuplicateCalendarEvents([
    { entityId: 'calendar.a', color: '#ff0000', summary: 'Dup', location: '', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } },
    { entityId: 'calendar.b', color: '#00ff00', summary: 'Dup', location: '', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } }
  ]);
  const combinedEvent = events.find((e) => e.isCombinedCalendarEvent);
  const style = card.getEventStyle(combinedEvent);
  assert.match(style, /background-color: #999999/);
  assert.match(style, /background-image: linear-gradient\(to bottom, #555555 0% 100%\)/);
});

test('all features together: combine + virtual + event_styles + day_styles', () => {
  const card = makeCard({
    entities: ['calendar.a', 'calendar.b'],
    combine_calendars: true,
    combine_style: 'zebra',
    combine_background: 'neutral',
    virtual_calendars: [{ id: 'family', name: 'Family', entities: ['calendar.a', 'calendar.b'], color: '#abcdef' }],
    event_styles: [{ match: { title: 'sync' }, priority: 10, style: { event_font_color: '#ffffff', background_color: '#222222' } }],
    day_styles: [{ condition: 'has_event', calendar: 'virtual:family', title_match: 'sync', background: 'auto', border_color: '#111111', border_width: 2 }]
  });
  const combined = card.combineDuplicateCalendarEvents([
    { entityId: 'calendar.a', color: '#ff0000', summary: 'Daily sync', start: { dateTime: '2026-05-01T09:00:00Z' }, end: { dateTime: '2026-05-01T09:30:00Z' } },
    { entityId: 'calendar.b', color: '#00ff00', summary: 'Daily sync', start: { dateTime: '2026-05-01T09:00:00Z' }, end: { dateTime: '2026-05-01T09:30:00Z' } }
  ])[0];
  const eventStyle = card.getEventStyleOverrides(combined);
  const dayStyle = card.getDayStyleConfig(new Date('2026-05-01T00:00:00Z'), [combined], false);
  assert.equal(combined.isCombinedCalendarEvent, true);
  assert.equal(card.eventFieldMatches(combined, 'calendar', 'virtual:family'), true);
  assert.equal(eventStyle.event_font_color, '#ffffff');
  assert.deepEqual(eventStyle.backgroundColors, ['#222222', '#222222']);
  assert.equal(eventStyle.hasDuplicateBackgroundColors, true);
  assert.equal(dayStyle.background, '#ff0000');
  assert.equal(dayStyle.border_color, '#111111');
});

test('must not happen: no combine when disabled and hidden calendars do not contribute visible colors', () => {
  const card = makeCard({ entities: ['calendar.a', 'calendar.b'], combine_calendars: false });
  card._hiddenCalendars = new Set(['calendar.b']);
  const events = card.combineDuplicateCalendarEvents([
    { entityId: 'calendar.a', color: '#ff0000', summary: 'Dup', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } },
    { entityId: 'calendar.b', color: '#00ff00', summary: 'Dup', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } }
  ]);
  assert.equal(events.length, 2);
  assert.equal(events.some((event) => event.isCombinedCalendarEvent), false);
  const visibleColors = card.getVisibleCalendarColorsForEvent(events[1]);
  assert.deepEqual(visibleColors, []);
});

test('must not happen: day_styles has_event without match should not style day', () => {
  const card = makeCard({
    entities: ['calendar.a'],
    day_styles: [{ condition: 'has_event', calendar: 'calendar.a', title_match: 'nonexistent', background: 'auto' }]
  });
  const dayEvents = [{ entityId: 'calendar.a', color: '#123456', summary: 'Daily sync', start: { dateTime: '2026-05-01T09:00:00Z' }, end: { dateTime: '2026-05-01T09:30:00Z' } }];
  const style = card.getDayStyleConfig(new Date(), dayEvents, false);
  assert.equal(style, null);
});



test('combine_calendars does not combine same title with different location', () => {
  const card = makeCard({ entities: ['calendar.a', 'calendar.b'], combine_calendars: true });
  const events = card.combineDuplicateCalendarEvents([
    { entityId: 'calendar.a', color: '#f00', summary: 'Meeting', location: 'Room A', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } },
    { entityId: 'calendar.b', color: '#0f0', summary: 'Meeting', location: 'Room B', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } }
  ]);
  assert.equal(events.length, 2);
  assert.equal(events.some((event) => event.isCombinedCalendarEvent), false);
});

test('combine_calendars does not combine events shifted by one minute', () => {
  const card = makeCard({ entities: ['calendar.a', 'calendar.b'], combine_calendars: true });
  const events = card.combineDuplicateCalendarEvents([
    { entityId: 'calendar.a', color: '#f00', summary: 'Meeting', location: 'Room', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } },
    { entityId: 'calendar.b', color: '#0f0', summary: 'Meeting', location: 'Room', start: { dateTime: '2026-05-01T10:01:00Z' }, end: { dateTime: '2026-05-01T11:01:00Z' } }
  ]);
  assert.equal(events.length, 2);
});

test('combine_calendars combines when one location is missing and one is empty', () => {
  const card = makeCard({ entities: ['calendar.a', 'calendar.b'], combine_calendars: true });
  const events = card.combineDuplicateCalendarEvents([
    { entityId: 'calendar.a', color: '#f00', summary: 'Meeting', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } },
    { entityId: 'calendar.b', color: '#0f0', summary: 'Meeting', location: '', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } }
  ]);
  assert.equal(events.length, 1);
  assert.equal(events[0].isCombinedCalendarEvent, true);
});

test('combine_calendars does not combine all-day and timed events', () => {
  const card = makeCard({ entities: ['calendar.a', 'calendar.b'], combine_calendars: true });
  const events = card.combineDuplicateCalendarEvents([
    { entityId: 'calendar.a', color: '#f00', summary: 'Day Event', location: 'Home', start: { date: '2026-05-01' }, end: { date: '2026-05-02' } },
    { entityId: 'calendar.b', color: '#0f0', summary: 'Day Event', location: 'Home', start: { dateTime: '2026-05-01T00:00:00Z' }, end: { dateTime: '2026-05-01T23:59:00Z' } }
  ]);
  assert.equal(events.length, 2);
});

test('combine_calendars does not combine partial overlapping events', () => {
  const card = makeCard({ entities: ['calendar.a', 'calendar.b'], combine_calendars: true });
  const events = card.combineDuplicateCalendarEvents([
    { entityId: 'calendar.a', color: '#f00', summary: 'Overlap', location: 'Room', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } },
    { entityId: 'calendar.b', color: '#0f0', summary: 'Overlap', location: 'Room', start: { dateTime: '2026-05-01T10:30:00Z' }, end: { dateTime: '2026-05-01T11:30:00Z' } }
  ]);
  assert.equal(events.length, 2);
});

for (const calendarType of [
  { id: 'calendar.google_home', integration: 'google' },
  { id: 'calendar.caldav_work', integration: 'caldav' },
  { id: 'calendar.local_family', integration: 'local' }
]) {
  for (const recurrence of recurrenceCases()) {
    test(`createEvent ${calendarType.integration} - ${recurrence.name}`, async () => {
      const card = makeCard();
      const sent = [];
      const calls = [];
      card._hass = {
        connection: { sendMessagePromise: async (payload) => sent.push(payload) },
        callService: async (...args) => calls.push(args)
      };

      const eventData = {
        summary: 'Event',
        start: recurrence.rrule ? { dateTime: '2026-05-01T10:00:00Z' } : { date: '2026-05-01' },
        end: recurrence.rrule ? { dateTime: '2026-05-01T11:00:00Z' } : { date: '2026-05-02' },
        ...(recurrence.rrule ? { rrule: recurrence.rrule } : {})
      };

      await card.createEvent(calendarType.id, eventData);

      if (recurrence.rrule) {
        assert.equal(sent.length, 1);
        assert.equal(sent[0].type, 'calendar/event/create');
        assert.equal(sent[0].entity_id, calendarType.id);
        assert.equal(sent[0].event.rrule, recurrence.rrule);
      } else {
        assert.equal(calls.length, 1);
        assert.equal(calls[0][1], 'create_event');
        assert.equal(calls[0][2].entity_id, calendarType.id);
      }
    });

    test(`updateEvent ${calendarType.integration} - ${recurrence.name}`, async () => {
      const card = makeCard();
      const sent = [];
      const calls = [];
      card._calendarCapabilities[calendarType.id] = { canUpdate: true };
      card._hass = {
        connection: { sendMessagePromise: async (payload) => sent.push(payload) },
        services: { calendar: { update_event: {} } },
        callService: async (...args) => calls.push(args)
      };

      const originalEvent = {
        entityId: calendarType.id,
        uid: 'uid-1',
        recurrence_id: '20260501T100000Z',
        ...(recurrence.rrule ? { rrule: recurrence.rrule } : {})
      };
      const eventData = {
        summary: 'Updated',
        start: recurrence.rrule ? { dateTime: '2026-05-01T12:00:00Z' } : { date: '2026-05-01' },
        end: recurrence.rrule ? { dateTime: '2026-05-01T13:00:00Z' } : { date: '2026-05-02' },
        ...(recurrence.rrule ? { rrule: recurrence.rrule } : {})
      };

      await card.updateEvent(originalEvent, calendarType.id, eventData, 'future');

      if (recurrence.rrule) {
        assert.equal(sent.length, 1);
        assert.equal(sent[0].type, 'calendar/event/update');
        assert.equal(sent[0].entity_id, calendarType.id);
        assert.equal(sent[0].event.rrule, recurrence.rrule);
        assert.equal(sent[0].recurrence_range, 'THISANDFUTURE');
      } else {
        assert.equal(calls.length, 1);
        assert.equal(calls[0][1], 'update_event');
        assert.equal(calls[0][2].entity_id, calendarType.id);
      }
    });

    test(`deleteEvent ${calendarType.integration} - ${recurrence.name}`, async () => {
      const card = makeCard();
      const sent = [];
      const originalConsoleLog = console.log;
      console.log = () => {};
      card._hass = {
        connection: { sendMessagePromise: async (payload) => sent.push(payload) },
        callService: async () => {}
      };

      try {
        await card.deleteEvent(
          calendarType.id,
          'uid-1',
          recurrence.rrule ? '20260501T100000Z' : null,
          recurrence.rrule ? 'THISANDFUTURE' : null
        );
      } finally {
        console.log = originalConsoleLog;
      }

      assert.equal(sent.length, 1);
      assert.equal(sent[0].type, 'calendar/event/delete');
      assert.equal(sent[0].entity_id, calendarType.id);
      if (recurrence.rrule) {
        assert.equal(sent[0].recurrence_id, '20260501T100000Z');
        assert.equal(sent[0].recurrence_range, 'THISANDFUTURE');
      }
    });
  }
}

test('calendar colors prefer configured values before default palette', () => {
  const card = makeCard({
    entities: ['calendar.family', 'calendar.work'],
    colors: { 'calendar.family': '#112233' }
  });

  assert.equal(card.getCalendarColor('calendar.family', 0), '#112233');
  assert.equal(card.getCalendarColor('calendar.work', 1), '#4ECDC4');
});

test('editor color swatches show effective calendar and event font colors', () => {
  const Editor = customElements.get('daylight-calendar-card-editor');
  const editor = new Editor();
  editor._config = {
    entities: ['calendar.family', 'calendar.work', 'calendar.school'],
    colors: { 'calendar.school': '#ABCDEF' },
    event_font_colors: { 'calendar.school': '#123456' }
  };
  editor._hass = {
    states: {
      'calendar.family': { attributes: { friendly_name: 'Family' } },
      'calendar.work': { attributes: { friendly_name: 'Work' } },
      'calendar.school': { attributes: { friendly_name: 'School' } }
    }
  };

  assert.equal(editor.getColorValue('colors', 'calendar.family'), '#FF6B6B');
  assert.equal(editor.getColorValue('colors', 'calendar.work'), '#4ECDC4');
  assert.equal(editor.getColorValue('colors', 'calendar.school'), '#ABCDEF');
  assert.equal(editor.getColorValue('event_font_colors', 'calendar.family'), '#FFFFFF');
  assert.equal(editor.getColorValue('event_font_colors', 'calendar.work'), '#000000');
  assert.equal(editor.getColorValue('event_font_colors', 'calendar.school'), '#123456');
});

test('hide_times_for_calendars applies across agenda, week-standard, week-compact, and month renderers', () => {
  const hiddenEntityId = 'calendar.hidden';
  const visibleEntityId = 'calendar.visible';
  const baseDate = new Date('2026-05-14T00:00:00Z');

  const hiddenEvent = {
    entityId: hiddenEntityId,
    color: '#3366ff',
    summary: 'Hidden time event',
    start: { dateTime: '2026-05-14T09:00:00Z' },
    end: { dateTime: '2026-05-14T10:00:00Z' }
  };
  const visibleEvent = {
    ...hiddenEvent,
    entityId: visibleEntityId,
    summary: 'Visible time event'
  };

  const card = makeCard({
    entities: [hiddenEntityId, visibleEntityId],
    hide_times_for_calendars: [hiddenEntityId]
  });
  card._hass = { states: {}, locale: { language: 'en' }, language: 'en', themes: { darkMode: false } };

  const hiddenWeekCompact = card.renderWeekCompactEvent(hiddenEvent, baseDate);
  const visibleWeekCompact = card.renderWeekCompactEvent(visibleEvent, baseDate);
  assert.doesNotMatch(hiddenWeekCompact, /week-compact-event-time/);
  assert.match(visibleWeekCompact, /week-compact-event-time/);

  const hiddenMonthStandard = card.renderEvent(hiddenEvent, baseDate);
  const visibleMonthStandard = card.renderEvent(visibleEvent, baseDate);
  assert.doesNotMatch(hiddenMonthStandard, /class="event-time"/);
  assert.match(visibleMonthStandard, /class="event-time"/);

  card._config.show_all_details_month = true;
  const hiddenMonthWeekCompact = card.renderMonthDayEvent(hiddenEvent, baseDate);
  const visibleMonthWeekCompact = card.renderMonthDayEvent(visibleEvent, baseDate);
  assert.doesNotMatch(hiddenMonthWeekCompact, /week-compact-event-time/);
  assert.match(visibleMonthWeekCompact, /week-compact-event-time/);

  const hiddenWeekStandard = card.renderTimedEventsForDay([hiddenEvent], baseDate, 0, 23, 40);
  const visibleWeekStandard = card.renderTimedEventsForDay([visibleEvent], baseDate, 0, 23, 40);
  assert.doesNotMatch(hiddenWeekStandard, /week-standard-event-time/);
  assert.match(visibleWeekStandard, /week-standard-event-time/);

  card._viewMode = 'agenda';
  card._events = [hiddenEvent, visibleEvent];
  card.getAgendaDays = () => [baseDate];
  card.getAgendaEventMinHeight = () => '68px';
  card.getCompactMaxHeight = () => null;
  card.getCompactContainerStyle = () => '';
  card.getEventsForDay = () => [hiddenEvent, visibleEvent];

  const agendaHtml = card.renderAgenda();
  assert.equal((agendaHtml.match(/agenda-event-time/g) || []).length, 1);
});

test('advanced matching aliases are normalized consistently across event_styles day_badges and day_styles', () => {
  const event = { entityId: 'calendar.school', color: '#123456', summary: 'Soccer Practice', location: 'Main Field', description: 'Bring cleats', start: { date: '2026-05-01' }, end: { date: '2026-05-02' } };

  for (const calendarAlias of ['calendar_entity', 'entity_id', 'entity']) {
    const card = makeCard({
      entities: ['calendar.school'],
      event_styles: [{ match: { title_contains: 'Soccer', [calendarAlias]: 'calendar.school', all_day_event: true }, style: { background_color: 'red' } }],
      day_badges: [{ conditions: { title_contains: 'Soccer', [calendarAlias]: 'calendar.school', all_day_event: true }, text: 'S' }],
      day_styles: [{ match: { day: { has_event: { title_contains: 'Soccer', [calendarAlias]: 'calendar.school', all_day_event: true } } }, background: 'auto' }]
    });

    assert.equal(card.getEventStyleOverrides(event).background_color, '#FF0000');
    assert.match(card.renderDayBadges(new Date('2026-05-01T00:00:00Z'), [event]), /day-badge-text">S</);
    assert.equal(card.getDayStyleConfig(new Date('2026-05-01T00:00:00Z'), [event], false).background, '#123456');
  }
});

test('advanced matching preserves legacy event_styles day_badges and day_styles syntax', () => {
  const event = { entityId: 'calendar.school', color: '#224466', summary: 'Soccer Practice', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } };
  const card = makeCard({
    entities: ['calendar.school'],
    event_styles: [{ match: { title: 'contains:Soccer' }, style: { background_color: '#112233' } }],
    day_badges: [{ conditions: { title_contains: 'Soccer' }, text: 'S' }],
    day_styles: [
      { condition: 'has_event', calendar: 'calendar.school', title_match: 'Soccer', background: 'auto' },
      { condition: '!has_event', calendar: 'calendar.school', title_match: 'Soccer', border_color: '#ff0000' }
    ]
  });

  assert.equal(card.getEventStyleOverrides(event).background_color, '#112233');
  assert.match(card.renderDayBadges(new Date('2026-05-01T00:00:00Z'), [event]), /day-badge-text">S</);
  const styleWithEvent = card.getDayStyleConfig(new Date('2026-05-01T00:00:00Z'), [event], false);
  assert.equal(styleWithEvent.background, '#224466');
  assert.equal(styleWithEvent.border_color, null);
  assert.equal(card.getDayStyleConfig(new Date('2026-05-02T00:00:00Z'), [], false).border_color, '#ff0000');
});

test('advanced matching supports explicit logical event matchers and nested event matchers', () => {
  const soccer = { entityId: 'calendar.school', summary: 'Soccer Practice', location: 'Main Field', description: 'Bring cleats', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } };
  const piano = { entityId: 'calendar.music', summary: 'Piano Lesson', location: 'Studio', description: 'Bring book', start: { dateTime: '2026-05-01T12:00:00Z' }, end: { dateTime: '2026-05-01T13:00:00Z' } };
  const card = makeCard({
    entities: ['calendar.school', 'calendar.music'],
    day_badges: [
      { match: { event: { any: [{ title_contains: 'Soccer' }, { title_contains: 'Baseball' }], not: { location_contains: 'Gym' } } }, text: 'A' },
      { match: { event: { all: [{ title_contains: 'Soccer' }, { calendar_entity: 'calendar.school' }] } }, text: 'B' },
      { match: { event: { and: [{ title_contains: 'Soccer' }, { description: { contains: 'cleats' } }] } }, text: 'C' },
      { match: { all: [{ event: { title_contains: 'Soccer' } }, { event: { not: { calendar: 'calendar.music' } } }] }, text: 'D' }
    ]
  });

  const html = card.renderDayBadges(new Date('2026-05-01T00:00:00Z'), [soccer, piano]);
  assert.match(html, />A</);
  assert.match(html, />B</);
  assert.match(html, />C</);
  assert.match(html, />D</);
});


test('advanced matching evaluates top-level not when any is empty by default', () => {
  const card = makeCard({
    entities: ['calendar.school'],
    event_styles: [{ match: { not: { title_contains: 'private' } }, style: { background_color: '#112233' } }]
  });

  const publicEvent = { entityId: 'calendar.school', summary: 'Team Meeting', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } };
  const privateEvent = { entityId: 'calendar.school', summary: 'Private Appointment', start: { dateTime: '2026-05-01T12:00:00Z' }, end: { dateTime: '2026-05-01T13:00:00Z' } };

  assert.equal(card.getEventStyleOverrides(publicEvent).background_color, '#112233');
  assert.equal(card.getEventStyleOverrides(privateEvent).background_color, undefined);
});

test('legacy has_event day_styles without event criteria are ignored', () => {
  const dayEvents = [{ entityId: 'calendar.school', color: '#335577', summary: 'Soccer Practice', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } }];
  const emptyDay = new Date('2026-05-02T00:00:00Z');
  const eventDay = new Date('2026-05-01T00:00:00Z');
  const legacyCard = makeCard({
    entities: ['calendar.school'],
    day_styles: [
      { condition: 'has_event', background: '#111111' },
      { condition: '!has_event', border_color: '#222222' }
    ]
  });
  const advancedCard = makeCard({
    entities: ['calendar.school'],
    day_styles: [
      { match: { day: { has_event: true } }, background: '#111111' },
      { match: { day: { no_event: true } }, border_color: '#222222' }
    ]
  });

  assert.equal(legacyCard.getDayStyleConfig(eventDay, dayEvents, false), null);
  assert.equal(legacyCard.getDayStyleConfig(emptyDay, [], false), null);
  assert.equal(advancedCard.getDayStyleConfig(eventDay, dayEvents, false).background, '#111111');
  assert.equal(advancedCard.getDayStyleConfig(emptyDay, [], false).border_color, '#222222');
});

test('advanced day matching supports relative day fields day_of_week has_event and no_event', () => {
  const event = { entityId: 'calendar.school', color: '#335577', summary: 'Soccer Practice', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } };
  const card = makeCard({
    entities: ['calendar.school'],
    day_styles: [
      { match: { day: { today: true } }, priority: 1, opacity: 0.1 },
      { match: { day: { past: true } }, priority: 2, opacity: 0.2 },
      { match: { day: { future: true } }, priority: 3, opacity: 0.3 },
      { match: { day: { weekend: true } }, priority: 4, border_color: '#111111' },
      { match: { day: { weekday: true } }, priority: 5, border_width: 2 },
      { match: { day: { day_of_week: 'Friday' } }, priority: 6, background: '#222222' },
      { match: { day: { has_event: true } }, priority: 7, background: 'auto' },
      { match: { day: { has_event: { title_contains: 'Soccer' } } }, priority: 8, border_color: '#333333' },
      { match: { day: { no_event: true } }, priority: 9, background: '#444444' },
      { match: { day: { no_event: { title_contains: 'Piano' } } }, priority: 10, border_width: 4 }
    ]
  });

  const todayStyle = card.getDayStyleConfig(new Date(), [], true);
  assert.equal(todayStyle.opacity, 0.1);

  const pastStyle = card.getDayStyleConfig(new Date('2000-05-01T00:00:00Z'), [], false);
  assert.equal(pastStyle.opacity, 0.2);
  assert.equal(pastStyle.background, '#444444');

  const futureStyle = card.getDayStyleConfig(new Date('2999-05-02T00:00:00Z'), [], false);
  assert.equal(futureStyle.opacity, 0.3);

  const weekendStyle = card.getDayStyleConfig(new Date('2026-05-02T00:00:00Z'), [], false);
  assert.equal(weekendStyle.border_color, '#111111');

  const fridayStyle = card.getDayStyleConfig(new Date('2026-05-01T00:00:00Z'), [event], false);
  assert.equal(fridayStyle.background, '#335577');
  assert.equal(fridayStyle.border_color, '#333333');
  assert.equal(fridayStyle.border_width, '4px');
});

test('advanced style conflict behavior is per property with priority and earlier-rule tie breaks', () => {
  const event = { entityId: 'calendar.school', color: '#123456', summary: 'Soccer Practice', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } };
  const card = makeCard({
    entities: ['calendar.school'],
    event_styles: [
      { match: { title_contains: 'Soccer' }, priority: 1, style: { background_color: '#111111', event_font_color: '#aaaaaa' } },
      { match: { title_contains: 'Soccer' }, priority: 3, style: { background_color: '#222222' } },
      { match: { title_contains: 'Soccer' }, priority: 3, style: { background_color: '#333333' } },
      { match: { title_contains: 'Soccer' }, priority: 2, style: { event_font_color: '#bbbbbb' } }
    ],
    day_styles: [
      { match: { day: { has_event: true } }, priority: 1, background: '#444444', opacity: 0.2 },
      { match: { day: { has_event: true } }, priority: 5, background: '#555555' },
      { match: { day: { has_event: true } }, priority: 5, background: '#666666' },
      { match: { day: { has_event: true } }, priority: 3, opacity: 0.8 }
    ]
  });

  const eventStyle = card.getEventStyleOverrides(event);
  assert.equal(eventStyle.background_color, '#222222');
  assert.equal(eventStyle.event_font_color, '#bbbbbb');

  const dayStyle = card.getDayStyleConfig(new Date('2026-05-01T00:00:00Z'), [event], false);
  assert.equal(dayStyle.background, '#555555');
  assert.equal(dayStyle.opacity, 0.8);
});
