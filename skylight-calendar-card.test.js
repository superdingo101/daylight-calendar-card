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
  display_full_weekday_names: 'display_full_weekday_names renders localized long weekday labels',
  shorten_event_times: 'shorten_event_times removes minutes from whole-hour 12-hour event times',
  time_zone: 'time_zone normalizes optional IANA zones and drives formatting and grouping',
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
  day_badge_layout_week: 'day_badge_layout_week controls week header layout classes',
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



test('editor schema metadata preserves config key order and editor defaults', () => {
  const card = makeCard();
  const schemaKeys = card.getConfigNormalizationSchema().map((field) => field.key);
  assert.deepEqual(schemaKeys.slice(0, 12), [
    'title',
    'entities',
    'firstDayOfWeek',
    'colors',
    'calendar_names',
    'calendar_badge_icons',
    'calendar_person_entities',
    'max_events',
    'default_view',
    'week_days',
    'rolling_days_week_compact',
    'rolling_days_schedule'
  ]);
  assert.deepEqual(schemaKeys.slice(-7), [
    'hide_badge_calendars',
    'default_hidden_calendars',
    'virtual_calendars',
    'language',
    'locale',
    'color_scheme',
    'preference_storage_key'
  ]);

  const Editor = customElements.get('skylight-calendar-card-editor');
  const editor = new Editor();
  assert.equal(editor.getEditorDefaultValue('week_start_hour'), 0);
  assert.equal(editor.getEditorDefaultValue('week_end_hour'), 23);
  assert.equal(editor.getEditorDefaultValue('event_font_size'), 11);
  assert.equal(editor.getEditorDefaultValue('event_time_font_size'), 9);
  assert.equal(editor.getEditorDefaultValue('event_location_font_size'), 9);
  assert.equal(editor.getEditorDefaultValue('event_tint_opacity'), 80);
  assert.equal(editor.getEditorDefaultValue('unknown_editor_field'), 0);
});

test('getStubConfig and normalized defaults include key configuration defaults', () => {
  const stub = Card.getStubConfig();
  const requiredStubKeys = [
    'default_view', 'first_day_of_week', 'week_days', 'week_start_hour', 'week_end_hour',
    'lock_schedule_hours', 'disable_swipe_controls', 'show_all_events_month', 'show_all_details_month',
    'hide_empty_days', 'agenda_compact_events', 'shorten_event_times', 'time_zone', 'display_full_weekday_names', 'compact_width', 'day_badge_layout_week',
    'show_current_time_bar', 'show_event_location', 'use_short_location',
    'event_calendar_friendly_name', 'event_title_prefix', 'past_event_mode', 'event_color_mode',
    'event_neutral_background', 'event_tint_opacity', 'event_color_bar_width', 'combine_style',
    'combine_background', 'hide_calendars', 'hide_header', 'hide_year', 'hide_controls',
    'hide_navigation_buttons', 'hide_add_event_button', 'hide_view_selector',
    'hide_dark_mode_toggle', 'show_dashboard_nav_button', 'header_dashboard_path',
    'header_weather_sensor', 'calendar_person_entities', 'default_hidden_calendars', 'color_scheme', 'enable_event_management', 'event_modal_size'
  ];
  for (const key of requiredStubKeys) assert.ok(key in stub, `${key} should exist in getStubConfig()`);
  assert.deepEqual(stub, {
    title: 'Family Calendar',
    entities: ['calendar.personal'],
    default_view: 'month',
    first_day_of_week: 0,
    week_days: [0, 1, 2, 3, 4, 5, 6],
    week_start_hour: 0,
    week_end_hour: 23,
    lock_schedule_hours: false,
    hide_the_past: false,
    past_event_mode: 'none',
    disable_swipe_controls: false,
    show_all_events_month: false,
    show_all_details_month: false,
    hide_empty_days: false,
    agenda_compact_events: false,
    shorten_event_times: false,
    time_zone: '',
    display_full_weekday_names: false,
    compact_width: false,
    show_current_time_bar: false,
    show_event_location: false,
    use_short_location: false,
    event_location_font_size: 9,
    background_opacity: 0,
    header_background_opacity: 0,
    event_calendar_friendly_name: false,
    event_title_prefix: 'none',
    combine_style: 'bars',
    combine_background: 'primary',
    event_color_mode: 'classic',
    event_neutral_background: '#F8F3E9',
    event_tint_opacity: 80,
    event_color_bar_width: 18,
    day_badges: [],
    day_badge_layout_week: 'inline',
    hide_calendars: false,
    hide_header: false,
    hide_year: false,
    hide_controls: false,
    hide_navigation_buttons: false,
    hide_add_event_button: false,
    hide_view_selector: false,
    hide_dark_mode_toggle: false,
    show_dashboard_nav_button: false,
    header_dashboard_path: null,
    header_weather_sensor: '',
    calendar_person_entities: {},
    default_hidden_calendars: [],
    color_scheme: 'auto',
    enable_event_management: true,
    event_modal_size: 'medium'
  });

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

test('event modal confirm dialogs expand in non-medium modal sizes', () => {
  const styles = makeCard().getStyles();

  assert.match(styles, /\.modal-content\.modal-size-narrow\s*>\s*\.confirm-dialog,\s*\.modal-content\.modal-size-wide\s*>\s*\.confirm-dialog,\s*\.modal-content\.modal-size-full\s*>\s*\.confirm-dialog\s*\{[\s\S]*max-width:\s*none;[\s\S]*width:\s*100%;/);
  assert.doesNotMatch(styles, /\.modal-content\.modal-size-medium\s*>\s*\.confirm-dialog/);
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
    time_zone: 'America/New_York',
    display_full_weekday_names: true,
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
    event_styles: [{ when: { title_contains: 'Meeting' }, style: { color: '#222' } }],
    day_badge_layout_week: 'stacked'
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
  assert.equal(card._config.time_zone, 'America/New_York');
  assert.equal(card._config.display_full_weekday_names, true);
  assert.equal(card._config.day_badge_layout_week, 'stacked');
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


test('day_badge_layout_week controls week header layout classes', () => {
  const inlineCard = makeCard({ entities: ['calendar.family'], default_view: 'week-compact' });
  const explicitInlineCard = makeCard({ entities: ['calendar.family'], default_view: 'week-standard', day_badge_layout_week: 'inline' });
  const stackedCompactCard = makeCard({ entities: ['calendar.family'], default_view: 'week-compact', day_badge_layout_week: 'stacked' });
  const stackedStandardCard = makeCard({ entities: ['calendar.family'], default_view: 'week-standard', day_badge_layout_week: 'stacked' });

  assert.equal(inlineCard._config.day_badge_layout_week, 'inline');
  assert.match(inlineCard.renderWeekCompact(), /week-compact-container day-badge-layout-inline/);
  assert.match(explicitInlineCard.renderWeekStandard(), /week-standard-container [^"]*day-badge-layout-inline/);
  assert.match(stackedCompactCard.renderWeekCompact(), /week-compact-container day-badge-layout-stacked/);
  assert.match(stackedStandardCard.renderWeekStandard(), /week-standard-container [^"]*day-badge-layout-stacked/);

  const styles = stackedCompactCard.getStyles();
  assert.match(styles, /\.week-compact-container\.day-badge-layout-stacked \.week-day-meta-row/);
  assert.match(styles, /\.week-standard-container\.day-badge-layout-stacked \.week-day-meta-row/);
  assert.match(styles, /flex-direction:\s*column;/);
  assert.match(styles, /height:\s*var\(--week-standard-time-header-spacer-height, 60px\);/);
  assert.match(styles, /min-height:\s*var\(--week-standard-day-header-height, auto\);/);
  assert.match(styles, /min-height:\s*var\(--week-compact-header-height, auto\);/);

  assert.doesNotMatch(inlineCard.renderWeekStandard?.() || '', /--week-standard-day-header-height:/);
  assert.doesNotMatch(stackedStandardCard.renderWeekStandard(), /--week-standard-day-header-height:/);
  assert.doesNotMatch(stackedCompactCard.renderWeekCompact(), /--week-compact-header-height:/);

  stackedStandardCard._weekStandardHeaderHeight = 86;
  assert.match(stackedStandardCard.renderWeekStandard(), /style="--week-standard-day-header-height: 86px;--week-standard-time-header-spacer-height: 60px;/);

  stackedCompactCard._weekCompactHeaderHeight = 92;
  assert.match(stackedCompactCard.renderWeekCompact(), /style="--week-compact-header-height: 92px;/);
});

function makeMeasuredDayHeader({ headerHeight, badgeHeight = null }) {
  const metaRow = {};
  const badges = badgeHeight === null ? null : {
    querySelector: (selector) => selector === '.day-badge' ? {} : null,
    closest: (selector) => selector === '.week-day-meta-row' ? metaRow : null,
    getBoundingClientRect: () => ({ height: badgeHeight })
  };

  return {
    querySelector: (selector) => {
      if (selector === '.day-badges') return badges;
      if (selector === '.day-badges .day-badge') return badges ? {} : null;
      if (selector === '.week-day-meta-row') return metaRow;
      return null;
    },
    getBoundingClientRect: () => ({ height: headerHeight })
  };
}

function makeWeekMeasurementRoot({ containerSelector, headerSelector, headers, previousHeaderVariable = '', headerVariableName = '--week-standard-day-header-height' }) {
  const styleValues = new Map(previousHeaderVariable ? [[headerVariableName, previousHeaderVariable]] : []);
  const container = {
    style: {
      getPropertyValue: (name) => styleValues.get(name) || '',
      removeProperty: (name) => styleValues.delete(name),
      setProperty: (name, value) => styleValues.set(name, value)
    },
    getBoundingClientRect: () => ({ top: 24 })
  };

  return {
    querySelector: (selector) => selector === containerSelector ? container : null,
    querySelectorAll: (selector) => selector === headerSelector ? headers : []
  };
}

test('stacked week-standard header measurement shares tallest header height without compact offset double count', () => {
  const originalGetComputedStyle = window.getComputedStyle;
  window.getComputedStyle = (element) => element ? { rowGap: '6px', gap: '6px' } : originalGetComputedStyle(element);

  try {
    const inlineCard = makeCard({ entities: ['calendar.family'], default_view: 'week-standard', day_badge_layout_week: 'inline', compact_height: true });
    inlineCard._root = makeWeekMeasurementRoot({
      containerSelector: '.week-standard-container',
      headerSelector: '.week-standard-day-header',
      headers: [makeMeasuredDayHeader({ headerHeight: 96, badgeHeight: 20 })]
    });
    inlineCard._viewMode = 'week-standard';
    inlineCard.getCompactMaxHeight = () => 223;
    inlineCard.updateWeekStandardFixedOffsetHeightFromDom();
    assert.equal(inlineCard._weekStandardExtraHeaderHeight, 0);
    assert.equal(inlineCard._weekStandardHeaderHeight, null);
    assert.equal(inlineCard._weekStandardFixedOffsetHeight, null);
    assert.doesNotMatch(inlineCard.renderWeekStandard(), /--week-standard-day-header-height:/);

    const stackedNoBadgesCard = makeCard({ entities: ['calendar.family'], default_view: 'week-standard', day_badge_layout_week: 'stacked', compact_height: true });
    stackedNoBadgesCard._root = makeWeekMeasurementRoot({
      containerSelector: '.week-standard-container',
      headerSelector: '.week-standard-day-header',
      headers: [makeMeasuredDayHeader({ headerHeight: 96 })]
    });
    stackedNoBadgesCard._viewMode = 'week-standard';
    stackedNoBadgesCard.getCompactMaxHeight = () => 223;
    stackedNoBadgesCard.updateWeekStandardFixedOffsetHeightFromDom();
    assert.equal(stackedNoBadgesCard._weekStandardExtraHeaderHeight, 0);
    assert.equal(stackedNoBadgesCard._weekStandardHeaderHeight, null);
    assert.equal(stackedNoBadgesCard._weekStandardFixedOffsetHeight, null);
    assert.doesNotMatch(stackedNoBadgesCard.renderWeekStandard(), /--week-standard-day-header-height:/);

    const stackedExtraCard = makeCard({ entities: ['calendar.family'], default_view: 'week-standard', day_badge_layout_week: 'stacked', compact_height: true, week_start_hour: 9, week_end_hour: 9 });
    stackedExtraCard._root = makeWeekMeasurementRoot({
      containerSelector: '.week-standard-container',
      headerSelector: '.week-standard-day-header',
      headers: [
        makeMeasuredDayHeader({ headerHeight: 72 }),
        makeMeasuredDayHeader({ headerHeight: 96, badgeHeight: 20 })
      ],
      previousHeaderVariable: '120px'
    });
    stackedExtraCard._viewMode = 'week-standard';
    stackedExtraCard.getCompactMaxHeight = () => 223;
    stackedExtraCard.updateWeekStandardFixedOffsetHeightFromDom();
    assert.equal(stackedExtraCard._weekStandardExtraHeaderHeight, 36);
    assert.equal(stackedExtraCard._weekStandardHeaderHeight, 96);
    assert.equal(stackedExtraCard._weekStandardFixedOffsetHeight, null);
    assert.match(stackedExtraCard.renderWeekStandard(), /--week-standard-day-header-height: 96px;--week-standard-time-header-spacer-height: 61px;/);

    assert.match(stackedExtraCard.renderWeekStandard(), /class="time-slot" style="height: 95px;"/);
  } finally {
    window.getComputedStyle = originalGetComputedStyle;
  }
});

test('stacked week-compact header measurement shares tallest header height only when badges render', () => {
  const stackedNoBadgesCard = makeCard({ entities: ['calendar.family'], default_view: 'week-compact', day_badge_layout_week: 'stacked' });
  stackedNoBadgesCard._root = makeWeekMeasurementRoot({
    containerSelector: '.week-compact-container',
    headerSelector: '.week-day-header',
    headers: [makeMeasuredDayHeader({ headerHeight: 92 }), makeMeasuredDayHeader({ headerHeight: 64 })],
    headerVariableName: '--week-compact-header-height'
  });
  stackedNoBadgesCard._viewMode = 'week-compact';
  stackedNoBadgesCard.updateWeekCompactStackedHeaderHeightFromDom();
  assert.equal(stackedNoBadgesCard._weekCompactHeaderHeight, null);
  assert.doesNotMatch(stackedNoBadgesCard.renderWeekCompact(), /--week-compact-header-height:/);

  const stackedBadgesCard = makeCard({ entities: ['calendar.family'], default_view: 'week-compact', day_badge_layout_week: 'stacked' });
  stackedBadgesCard._root = makeWeekMeasurementRoot({
    containerSelector: '.week-compact-container',
    headerSelector: '.week-day-header',
    headers: [makeMeasuredDayHeader({ headerHeight: 92, badgeHeight: 20 }), makeMeasuredDayHeader({ headerHeight: 64 })],
    previousHeaderVariable: '120px',
    headerVariableName: '--week-compact-header-height'
  });
  stackedBadgesCard._viewMode = 'week-compact';
  stackedBadgesCard.updateWeekCompactStackedHeaderHeightFromDom();
  assert.equal(stackedBadgesCard._weekCompactHeaderHeight, 92);
  assert.match(stackedBadgesCard.renderWeekCompact(), /--week-compact-header-height: 92px;/);
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


test('time_zone is optional and preserves default local formatting when unset', () => {
  const card = makeCard({ entities: ['calendar.family'], locale: 'en-US' });
  const date = new Date('2026-01-01T12:00:00Z');

  assert.equal(card._config.time_zone, null);
  assert.equal(card.formatTime(date), new Intl.DateTimeFormat('en-US', card.getTimeFormatOptions()).format(date));
});

test('time_zone retains valid IANA zones and uses them in formatting', () => {
  const card = makeCard({ entities: ['calendar.family'], locale: 'en-US', time_zone: 'America/New_York' });

  assert.equal(card._config.time_zone, 'America/New_York');
  assert.equal(card.formatTime(new Date('2026-01-01T12:00:00Z')), '7:00 AM');
  assert.match(card.formatDate(new Date('2026-01-01T12:00:00Z')), /Thursday, January 1, 2026/);
});

test('time_zone ignores blank and invalid values safely', () => {
  const originalWarn = console.warn;
  const warnings = [];
  console.warn = (message) => warnings.push(String(message));
  try {
    const blank = makeCard({ entities: ['calendar.family'], time_zone: '   ' });
    const invalid = makeCard({ entities: ['calendar.family'], time_zone: 'Not/AZone' });

    assert.equal(blank._config.time_zone, null);
    assert.equal(invalid._config.time_zone, null);
    assert.equal(warnings.length, 1);
    assert.match(warnings[0], /invalid time_zone/);
  } finally {
    console.warn = originalWarn;
  }
});

test('time_zone can render an ISO event time differently than the default zone', () => {
  const defaultCard = makeCard({ entities: ['calendar.family'], locale: 'en-US' });
  const zonedCard = makeCard({ entities: ['calendar.family'], locale: 'en-US', time_zone: 'America/New_York' });
  const date = new Date('2026-01-01T12:00:00Z');

  assert.equal(defaultCard.formatEventTime(date), '12:00 PM');
  assert.equal(zonedCard.formatEventTime(date), '7:00 AM');
  assert.notEqual(defaultCard.formatEventTime(date), zonedCard.formatEventTime(date));
});

test('time_zone controls event day grouping and week placement calculations', () => {
  const card = makeCard({ entities: ['calendar.family'], locale: 'en-US', time_zone: 'America/New_York' });
  card._events = [{
    entityId: 'calendar.family',
    color: '#3366ff',
    summary: 'Late UTC event',
    start: { dateTime: '2026-01-02T02:00:00Z' },
    end: { dateTime: '2026-01-02T03:00:00Z' }
  }];

  const jan1 = new Date(2026, 0, 1);
  const jan2 = new Date(2026, 0, 2);
  assert.equal(card.getEventsForDay(jan1).length, 1);
  assert.equal(card.getEventsForDay(jan2).length, 0);

  const segment = card.getEventDaySegment(card._events[0], jan1);
  assert.equal(card.formatEventTimeRange(segment.segmentStart, segment.segmentEnd), '9:00 PM - 10:00 PM');
  assert.equal(card.getLocalDayHourFloat(segment.segmentStart, jan1), 21);
});

test('time_zone does not shift synthetic display date labels west of browser zone', () => {
  const card = makeCard({
    entities: ['calendar.family'],
    locale: 'en-US',
    time_zone: 'America/New_York',
    rolling_days_week_compact: 0
  });
  card._viewMode = 'week-compact';
  card._currentDate = new Date('2026-01-01T00:00:00Z');

  assert.equal(card.getPeriodLabel(), 'Jan 1, 2026');
  assert.match(card.formatDisplayDate(card.getWeekDays()[0]), /Thursday, January 1, 2026/);
});

test('time_zone compares date-only all-day events using configured-zone day bounds', () => {
  const card = makeCard({ entities: ['calendar.family'], locale: 'en-US', time_zone: 'America/New_York' });
  card._events = [{
    entityId: 'calendar.family',
    color: '#3366ff',
    summary: 'New Year all-day',
    start: { date: '2026-01-01' },
    end: { date: '2026-01-02' }
  }];

  const dec31 = new Date('2025-12-31T00:00:00Z');
  const jan1 = new Date('2026-01-01T00:00:00Z');
  assert.equal(card.getEventsForDay(dec31).length, 0);
  assert.equal(card.getEventsForDay(jan1).length, 1);

  const segment = card.getEventDaySegment(card._events[0], jan1);
  assert.equal(segment.isAllDaySegment, true);
  assert.equal(segment.segmentStart.toISOString(), '2026-01-01T05:00:00.000Z');
  assert.equal(segment.segmentEnd.toISOString(), '2026-01-02T05:00:00.000Z');
});

test('time_zone subtracts all-day modal end dates as configured-zone calendar days across DST', () => {
  const card = makeCard({ entities: ['calendar.family'], locale: 'en-US', time_zone: 'America/New_York' });
  const content = { innerHTML: '', classList: { add: () => {}, remove: () => {} } };
  const modal = { classList: { add: () => {}, remove: () => {} } };

  card.getRootElementById = (id) => {
    if (id === 'event-modal') return modal;
    if (id === 'modal-content') return content;
    return null;
  };

  card.showEventModal({
    entityId: 'calendar.family',
    color: '#3366ff',
    summary: 'DST all-day',
    start: { date: '2025-03-09' },
    end: { date: '2025-03-10' }
  });

  assert.match(content.innerHTML, /Sunday, March 9, 2025 \(All Day\)/);
  assert.doesNotMatch(content.innerHTML, /Saturday, March 8, 2025 \(All Day\)/);
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
    color_scheme: 'invalid',
    day_badge_layout_week: 'sideways'
  });

  assert.equal(card._config.default_view, 'week-standard');
  assert.equal(card._config.background_opacity, 100);
  assert.equal(card._config.header_background_opacity, 100);
  assert.equal(card._config.event_title_prefix, 'none');
  assert.equal(card._config.color_scheme, 'auto');
  assert.equal(card._config.day_badge_layout_week, 'inline');
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

test('display_full_weekday_names renders localized long weekday labels', () => {
  const card = makeCard({
    entities: ['calendar.family'],
    display_full_weekday_names: true,
    locale: 'fr-FR'
  });

  assert.equal(card.getWeekdayNameFormat(), 'long');
  assert.deepEqual(card.getWeekdayNames().slice(0, 3), ['dimanche', 'lundi', 'mardi']);
  assert.match(card.renderDayHeaders(), /<div class="day-header">lundi<\/div>/);
  assert.doesNotMatch(card.renderDayHeaders(), /<div class="day-header">lun\.<\/div>/);
});

test('weekday names inherit the Home Assistant locale when card locale is not configured', () => {
  const card = makeCard({ entities: ['calendar.family'], display_full_weekday_names: true });
  card._hass = { states: {}, locale: { language: 'en-GB' }, language: 'en', themes: { darkMode: false } };

  assert.equal(card.getLocale(), 'en-GB');
  assert.equal(card.getWeekdayNames()[0], 'Sunday');
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


test('month grid includes leading and trailing days and range boundaries', () => {
  const card = makeCard({ entities: ['calendar.family'], default_view: 'month', first_day_of_week: 1 });
  card._currentDate = new Date(2026, 1, 10); // February 2026 starts on Sunday.
  card._events = [];

  assert.deepEqual(
    Object.fromEntries(Object.entries(card.getVisibleDateRange()).map(([key, value]) => [key, localDateKey(value)])),
    { startDate: '2026-01-26', endDate: '2026-03-01' }
  );

  const daysHtml = card.renderDays();
  assert.equal((daysHtml.match(/class="day-cell/g) || []).length, 35);
  assert.ok(daysHtml.includes(`data-date="${localDateDataAttribute('2026-01-26')}"`));
  assert.ok(daysHtml.includes(`data-date="${localDateDataAttribute('2026-03-01')}"`));
});

test('week visible date range follows configured week days and week start', () => {
  const card = makeCard({
    entities: ['calendar.family'],
    default_view: 'week-compact',
    first_day_of_week: 0,
    week_days: [0, 2, 4]
  });
  card._currentDate = new Date(2026, 4, 13, 12);
  card.setWeekStart();

  assert.deepEqual(dateKeys(card.getWeekDays('week-compact')), ['2026-05-10', '2026-05-12', '2026-05-14']);
  assert.deepEqual(
    Object.fromEntries(Object.entries(card.getVisibleDateRange()).map(([key, value]) => [key, localDateKey(value)])),
    { startDate: '2026-05-10', endDate: '2026-05-14' }
  );
});

test('agenda window generation preserves inclusive current day plus default span', () => {
  const card = makeCard({ entities: ['calendar.family'], default_view: 'agenda' });
  card._agendaStartDate = new Date(2026, 2, 7);
  card._agendaEndDate = new Date(2026, 2, 21, 23, 59, 59, 999);

  assert.equal(card.getAgendaPeriodDaySpan(), 14);
  assert.equal(card.getAgendaDays().length, 15);
  assert.deepEqual([card.getAgendaDays()[0], card.getAgendaDays().at(-1)].map(localDateKey), ['2026-03-07', '2026-03-21']);
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

test('calendar entity helpers resolve names, colors, visibility, virtual badges, writable calendars, and person mappings', async () => {
  const {
    getCalendarBadgePersonEntityId,
    getCalendarColor,
    getCalendarName,
    getVirtualBadgeItems,
    getWritableCalendars,
    normalizeVirtualCalendars
  } = await import('./src/calendars/calendar-entities.js');
  const normalizeSingleColor = (value) => value || null;
  const virtualCalendars = normalizeVirtualCalendars([
    {
      id: 'family_group',
      name: 'Family Group',
      icon: 'mdi:account-group',
      color: '#445566',
      entities: ['calendar.family', 'calendar.work', 'calendar.family']
    }
  ], { normalizeSingleColor });

  assert.equal(getCalendarName('calendar.family', {
    hassStates: { 'calendar.family': { attributes: { friendly_name: 'Family Friendly Name' } } }
  }), 'Family Friendly Name');
  assert.equal(getCalendarName('calendar.family', {
    calendarNames: { 'calendar.family': 'Household' },
    hassStates: { 'calendar.family': { attributes: { friendly_name: 'Family Friendly Name' } } }
  }), 'Household');
  assert.equal(getCalendarName('calendar.school'), 'school');
  assert.equal(getCalendarName('virtual:family_group', { virtualCalendars }), 'Family Group');

  assert.equal(getCalendarColor('calendar.family', 0, {
    colors: { 'calendar.family': '#112233' },
    getDefaultColor: () => '#AABBCC',
    normalizeSingleColor
  }), '#112233');
  assert.equal(getCalendarColor('calendar.work', 1, {
    colors: {},
    getDefaultColor: () => '#4ECDC4',
    normalizeSingleColor
  }), '#4ECDC4');

  const badgeItems = getVirtualBadgeItems({
    entities: ['calendar.family', 'calendar.work', 'calendar.school'],
    virtualCalendars,
    hideBadgeCalendars: ['calendar.school'],
    hiddenCalendars: new Set(['calendar.family', 'calendar.work']),
    getCalendarColor: (_entityId, index) => ['#111111', '#222222', '#333333'][index],
    getCalendarName: (entityId) => entityId,
    getCalendarBadgeIcon: () => null
  });
  assert.deepEqual(badgeItems, [{
    id: 'family_group',
    entityId: 'virtual:family_group',
    name: 'Family Group',
    icon: 'mdi:account-group',
    color: '#445566',
    entities: ['calendar.family', 'calendar.work'],
    isHidden: true,
    type: 'virtual'
  }]);

  assert.deepEqual(getWritableCalendars(['calendar.family', 'calendar.work', 'calendar.school'], {
    'calendar.family': { canCreate: true, isReadonly: false },
    'calendar.work': { canCreate: true, isReadonly: true },
    'calendar.school': { canCreate: false, isReadonly: false }
  }), ['calendar.family']);
  assert.equal(getCalendarBadgePersonEntityId('calendar.family', { 'calendar.family': 'person.ian' }), 'person.ian');
  assert.equal(getCalendarBadgePersonEntityId('virtual:family_group', { family_group: 'person.family' }), 'person.family');
});

test('calendar entity helpers resolve virtual badges for combined events', async () => {
  const {
    getVirtualBadgeForEvent,
    normalizeVirtualCalendars
  } = await import('./src/calendars/calendar-entities.js');
  const virtualCalendars = normalizeVirtualCalendars([
    { id: 'family_group', name: 'Family Group', entities: ['calendar.family', 'calendar.school'] },
    { id: 'work_group', name: 'Work Group', entities: ['calendar.work'] }
  ], { normalizeSingleColor: (value) => value || null });

  assert.equal(getVirtualBadgeForEvent(virtualCalendars, {
    isCombinedCalendarEvent: true,
    sourceEntityIds: ['calendar.school', 'calendar.family']
  })?.id, 'family_group');
  assert.equal(getVirtualBadgeForEvent(virtualCalendars, {
    isCombinedCalendarEvent: true,
    sourceEntityIds: ['calendar.unknown']
  }), null);
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
  assert.match(styles, /daylight-calendar-card\.event-modal-open,[\s\S]*skylight-calendar-card\.event-modal-open[\s\S]*z-index:\s*2147483000;/);
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


test('weather utility maps Home Assistant conditions to mdi icons with fallback', async () => {
  const { mapWeatherConditionToIcon } = await import('./src/weather/weather-utils.js');

  assert.equal(mapWeatherConditionToIcon('sunny'), 'mdi:weather-sunny');
  assert.equal(mapWeatherConditionToIcon('clear_night'), 'mdi:weather-night');
  assert.equal(mapWeatherConditionToIcon('lightning-rainy'), 'mdi:weather-lightning-rainy');
  assert.equal(mapWeatherConditionToIcon('unknown'), '');
  assert.equal(mapWeatherConditionToIcon('unavailable'), '');
  assert.equal(mapWeatherConditionToIcon('not-a-real-condition'), '');
  assert.equal(mapWeatherConditionToIcon(null), '');
});

test('weather utility normalizes header weather data and preserves temperature unit display', async () => {
  const { normalizeHeaderWeatherData } = await import('./src/weather/weather-utils.js');

  assert.deepEqual(normalizeHeaderWeatherData({
    state: 'sunny',
    attributes: { temperature: 21.4 }
  }), { conditionIcon: 'mdi:weather-sunny', temperature: '21°' });
  assert.deepEqual(normalizeHeaderWeatherData({
    state: 'cloudy',
    attributes: { condition: 'rainy', current_temperature: 18.6 }
  }), { conditionIcon: 'mdi:weather-rainy', temperature: '19°' });
  assert.equal(normalizeHeaderWeatherData({ state: 'unavailable', attributes: { temperature: 20 } }), null);
  assert.equal(normalizeHeaderWeatherData({ state: 'sunny', attributes: {} }), null);
  assert.equal(normalizeHeaderWeatherData(null), null);
});

test('weather utility normalizes forecast items and handles missing or empty data', async () => {
  const { normalizeForecastForDate } = await import('./src/weather/weather-utils.js');
  const getDateKey = (date) => date.toISOString().slice(0, 10);

  assert.deepEqual(normalizeForecastForDate([
    { datetime: '2026-05-13T12:00:00Z', condition: 'sunny', temperature: 22, templow: 11 },
    { date: '2026-05-14', condition: 'partlycloudy', temphigh: 24.2, temperature_low: 12.4 }
  ], new Date('2026-05-14T00:00:00Z'), getDateKey), {
    conditionIcon: 'mdi:weather-partly-cloudy',
    highTemp: '24°',
    lowTemp: '12°'
  });
  assert.equal(normalizeForecastForDate([], new Date('2026-05-14T00:00:00Z'), getDateKey), null);
  assert.equal(normalizeForecastForDate(null, new Date('2026-05-14T00:00:00Z'), getDateKey), null);
  assert.equal(normalizeForecastForDate([{ date: '2026-05-14', condition: 'unknown', temperature: 20 }], new Date('2026-05-14T00:00:00Z'), getDateKey), null);
  assert.equal(normalizeForecastForDate([{ date: '2026-05-14', condition: 'sunny' }], new Date('2026-05-14T00:00:00Z'), getDateKey), null);
});

test('weather service builds Home Assistant forecast websocket payloads', async () => {
  const {
    buildWeatherForecastRequestMessage,
    buildWeatherForecastSubscriptionMessage,
    isWeatherEntityId
  } = await import('./src/weather/weather-service.js');

  assert.deepEqual(buildWeatherForecastSubscriptionMessage('weather.home'), {
    type: 'weather/subscribe_forecast',
    entity_id: 'weather.home',
    forecast_type: 'daily'
  });
  assert.deepEqual(buildWeatherForecastRequestMessage('weather.home'), {
    type: 'weather/get_forecasts',
    entity_ids: ['weather.home'],
    forecast_type: 'daily'
  });
  assert.equal(isWeatherEntityId('weather.home'), true);
  assert.equal(isWeatherEntityId('sensor.home'), false);
  assert.equal(isWeatherEntityId(''), false);
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



test('day badge helper module delegates preserve normalization and resolution behavior', () => {
  const card = makeCard({ entities: ['calendar.a'] });
  const block = card.normalizeDayBadgeBlock({
    text: '  School  ',
    icon: ' mdi:school ',
    background_color: '{{ event.description_json.badge_color }}',
    color: 'red',
    size: 24,
    font_size: ' 0.85rem '
  });

  assert.deepEqual(block, {
    text: 'School',
    icon: 'mdi:school',
    background_color: '{{ event.description_json.badge_color }}',
    color: '#FF0000',
    size: '24px',
    font_size: '0.85rem'
  });
  assert.equal(card.isFullValueTemplate('{{event.description_json.foo}}'), true);
  assert.equal(card.isFullValueTemplate('Label {{ event.description_json.foo }}'), false);
});

test('day badge safe path resolution blocks prototype segments and missing/non-scalar values', () => {
  const card = makeCard({ entities: ['calendar.a'] });
  const context = {
    event: {
      description_json: {
        label: 'School',
        count: 3,
        active: true,
        nested: { label: 'Nested' },
        items: ['a']
      }
    }
  };

  assert.equal(card.resolveSafePath('event.description_json.label', context), 'School');
  assert.equal(card.resolveSafePath('event.description_json.count', context), '3');
  assert.equal(card.resolveSafePath('event.description_json.active', context), 'true');
  assert.equal(card.resolveSafePath('event.description_json.missing', context), undefined);
  assert.equal(card.resolveSafePath('event.description_json.nested', context), undefined);
  assert.equal(card.resolveSafePath('event.description_json.items', context), undefined);
  assert.equal(card.resolveSafePath('event.__proto__.polluted', context), undefined);
  assert.equal(card.resolveSafePath('event.prototype.polluted', context), undefined);
  assert.equal(card.resolveSafePath('event.constructor.polluted', context), undefined);
});

test('day badge display value and description JSON helpers preserve primitive template semantics', () => {
  const card = makeCard({ entities: ['calendar.a'] });
  const event = { description: '{"badge_text":"School","count":2,"enabled":false}' };
  const context = card.buildDayBadgeResolutionContext(new Date('2026-05-01T00:00:00Z'), event);

  assert.deepEqual(card.parseEventDescriptionJson(event), { badge_text: 'School', count: 2, enabled: false });
  assert.equal(card.parseEventDescriptionJson({ description: '{bad json}' }), undefined);
  assert.equal(card.parseEventDescriptionJson({ description: '["array"]' }), undefined);
  assert.equal(card.resolveDayBadgeDisplayValue('{{ event.description_json.badge_text }}', context), 'School');
  assert.equal(card.resolveDayBadgeDisplayValue('{{ event.description_json.count }}', context), '2');
  assert.equal(card.resolveDayBadgeDisplayValue('{{ event.description_json.enabled }}', context), 'false');
  assert.equal(card.resolveDayBadgeDisplayValue('{{ event.description_json.missing }}', context), undefined);
  assert.equal(card.resolveDayBadgeDisplayValue('School: {{ event.description_json.badge_text }}', context), 'School: {{ event.description_json.badge_text }}');
});

test('day badge render resolution removes empty fields and validates resolved colors', () => {
  const card = makeCard({ entities: ['calendar.a'] });
  const event = { description: '{"text":"School","icon":"mdi:school","empty":"","bad_color":"not-a-color","good_color":"#123456"}' };
  const resolved = card.resolveDayBadgeForRender({
    text: '{{ event.description_json.text }}',
    icon: '{{ event.description_json.empty }}',
    background_color: '{{ event.description_json.good_color }}',
    color: '{{ event.description_json.bad_color }}',
    size: '20px',
    font_size: '12px'
  }, new Date('2026-05-01T00:00:00Z'), event);

  assert.equal(resolved.text, 'School');
  assert.equal(resolved.icon, undefined);
  assert.equal(resolved.background_color, '#123456');
  assert.equal(resolved.color, undefined);
  assert.equal(resolved.size, '20px');
  assert.equal(resolved.font_size, '12px');
});

test('day_badges renders text badge when event title matches', () => {
  const card = makeCard({ entities: ['calendar.a'], day_badges: [{ conditions: { title_contains: 'ballet' }, text: 'PL', background_color: '#ff4b2b', color: '#000000' }] });
  const events = [{ entityId: 'calendar.a', summary: 'Ballet Practice', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } }];
  const html = card.renderDayBadges(new Date('2026-05-01T00:00:00Z'), events);
  assert.match(html, /class="day-badge has-text"/);
  assert.match(html, /day-badge-text">PL</);
});

test('day_badges renders multi-character text-only badges as chips', () => {
  const card = makeCard({ entities: ['calendar.a'], day_badges: [{ conditions: { title_contains: 'standup' }, text: 'Standup' }] });
  const events = [{ entityId: 'calendar.a', summary: 'Team Standup', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } }];
  const html = card.renderDayBadges(new Date('2026-05-01T00:00:00Z'), events);
  assert.match(html, /class="day-badge has-text"/);
  assert.match(html, /day-badge-text">Standup</);
});

test('day_badges renders icon badge when event title matches', () => {
  const card = makeCard({ entities: ['calendar.a'], day_badges: [{ conditions: { title: 'ballet' }, icon: 'mdi:shoe-ballet' }] });
  const events = [{ entityId: 'calendar.a', summary: 'Ballet Practice', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } }];
  const html = card.renderDayBadges(new Date('2026-05-01T00:00:00Z'), events);
  assert.match(html, /ha-icon icon="mdi:shoe-ballet"/);
});

test('day_badges renders icon and text together in one badge', () => {
  const card = makeCard({ entities: ['calendar.a'], day_badges: [{ conditions: { title: 'ballet' }, text: 'PL', icon: 'mdi:shoe-ballet' }] });
  const events = [{ entityId: 'calendar.a', summary: 'Ballet Practice', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } }];
  const html = card.renderDayBadges(new Date('2026-05-01T00:00:00Z'), events);
  assert.equal((html.match(/day-badge has-icon has-text/g) || []).length, 1);
  assert.equal((html.match(/<span class="day-badge(?:\s|")/g) || []).length, 1);
  assert.match(html, /ha-icon icon="mdi:shoe-ballet"/);
  assert.match(html, /day-badge-text">PL</);
});

test('day_badges renders icon before text when both are configured', () => {
  const card = makeCard({ entities: ['calendar.a'], day_badges: [{ conditions: { title: 'ballet' }, text: 'PL', icon: 'mdi:shoe-ballet' }] });
  const events = [{ entityId: 'calendar.a', summary: 'Ballet Practice', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } }];
  const html = card.renderDayBadges(new Date('2026-05-01T00:00:00Z'), events);
  assert.ok(html.indexOf('ha-icon icon="mdi:shoe-ballet"') < html.indexOf('day-badge-text">PL'));
});

test('day_badges matching behavior is unchanged for combined badges', () => {
  const card = makeCard({ entities: ['calendar.a'], day_badges: [{ conditions: { calendar: 'calendar.a', all_day: true, title: 'Schoolday' }, text: 'School', icon: 'mdi:school' }] });
  const matchingEvents = [{ entityId: 'calendar.a', summary: 'Schoolday', start: { date: '2026-05-01' }, end: { date: '2026-05-02' } }];
  const nonMatchingEvents = [{ entityId: 'calendar.a', summary: 'Schoolday', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } }];
  assert.match(card.renderDayBadges(new Date('2026-05-01T00:00:00Z'), matchingEvents), /mdi:school/);
  assert.equal(card.renderDayBadges(new Date('2026-05-01T00:00:00Z'), nonMatchingEvents), '');
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
  assert.equal((html.match(/<span class="day-badge(?:\s|")/g) || []).length, 2);
});

test('day_badges supports legacy-style condition aliases', () => {
  const card = makeCard({ entities: ['calendar.a'], day_badges: [{ conditions: { entity: 'calendar.a', location_contains: 'mountain' }, text: 'L' }] });
  const events = [{ entityId: 'calendar.a', summary: 'Run', location: 'Black Mountain Rd', start: { dateTime: '2026-05-01T10:00:00Z' }, end: { dateTime: '2026-05-01T11:00:00Z' } }];
  const html = card.renderDayBadges(new Date('2026-05-01T00:00:00Z'), events);
  assert.match(html, /day-badge-text">L</);
});


test('day_badges parses JSON object descriptions safely', () => {
  const card = makeCard({ entities: ['calendar.a'] });
  assert.deepEqual(card.parseEventDescriptionJson({ description: ' { "icon": "mdi:school" } ' }), { icon: 'mdi:school' });
  assert.equal(card.parseEventDescriptionJson({ description: '{ nope' }), undefined);
  assert.equal(card.parseEventDescriptionJson({ description: 'regular notes' }), undefined);
  assert.equal(card.parseEventDescriptionJson({ description: '["mdi:school"]' }), undefined);
  assert.equal(card.parseEventDescriptionJson({ description: '' }), undefined);
});

test('day_badges resolves display templates from matched event description JSON', () => {
  const card = makeCard({ entities: ['calendar.helper_day_types'], day_badges: [{
    conditions: { calendar: 'calendar.helper_day_types', all_day: true },
    icon: '{{ event.description_json.icon }}',
    text: '{{ event.description_json.badge_text }}',
    background_color: '{{ event.description_json.badge_color }}'
  }] });
  const events = [{ entityId: 'calendar.helper_day_types', summary: 'Schoolday', description: '{"icon":"mdi:school","badge_text":"School","badge_color":"#EDE7F6"}', start: { date: '2026-05-01' }, end: { date: '2026-05-02' } }];
  const html = card.renderDayBadges(new Date('2026-05-01T00:00:00Z'), events);
  assert.match(html, /class="day-badge has-icon has-text"/);
  assert.match(html, /ha-icon icon="mdi:school"/);
  assert.match(html, /day-badge-text">School</);
  assert.match(html, /--dcc-day-badge-background: #EDE7F6;/);
});


test('day_badges validates dynamic color templates before rendering styles', () => {
  const card = makeCard({ entities: ['calendar.a'], day_badges: [
    {
      conditions: { title: 'schoolday' },
      text: '{{ event.description_json.badge_text }}',
      background_color: '{{ event.description_json.badge_color }}',
      color: '{{ event.description_json.text_color }}'
    },
    {
      conditions: { title: 'schoolday' },
      text: 'Safe',
      background_color: '{{ event.description_json.safe_color }}',
      color: '{{ event.description_json.safe_text_color }}'
    }
  ] });
  const events = [{ entityId: 'calendar.a', summary: 'Schoolday', description: JSON.stringify({ badge_text: 'Bad', badge_color: 'red" onclick="alert(1)', text_color: '#fff; color:red', safe_color: 'rgb(10, 20, 30)', safe_text_color: 'blue' }), start: { date: '2026-05-01' }, end: { date: '2026-05-02' } }];
  const html = card.renderDayBadges(new Date('2026-05-01T00:00:00Z'), events);
  assert.match(html, /day-badge-text">Bad</);
  assert.match(html, /day-badge-text">Safe</);
  assert.match(html, /--dcc-day-badge-background: rgb\(10, 20, 30\);/);
  assert.match(html, /--dcc-day-badge-color: #0000FF;/);
  assert.doesNotMatch(html, /onclick|alert|#fff; color:red/);
});

test('day_badges accepts compact template whitespace and non-template literals remain literal', () => {
  const card = makeCard({ entities: ['calendar.a'], day_badges: [
    { conditions: { title: 'schoolday' }, text: '{{event.description_json.badge_text}}' },
    { conditions: { title: 'schoolday' }, text: 'School: {{ event.description_json.badge_text }}' }
  ] });
  const events = [{ entityId: 'calendar.a', summary: 'Schoolday', description: '{"badge_text":"School"}', start: { date: '2026-05-01' }, end: { date: '2026-05-02' } }];
  const html = card.renderDayBadges(new Date('2026-05-01T00:00:00Z'), events);
  assert.match(html, /day-badge-text">School</);
  assert.match(html, /day-badge-text">School: \{\{ event.description_json.badge_text \}\}</);
});

test('day_badges omits unresolved unsafe and non-scalar dynamic display fields', () => {
  const card = makeCard({ entities: ['calendar.a'], day_badges: [
    { conditions: { title: 'schoolday' }, icon: '{{ event.description_json.missing }}', text: '{{ event.description_json.items }}' },
    { conditions: { title: 'schoolday' }, icon: '{{ event.description_json.nested }}', text: '{{ event.__proto__.polluted }}' },
    { conditions: { title: 'schoolday' }, text: '{{ event.description_json.ok }}' }
  ] });
  const events = [{ entityId: 'calendar.a', summary: 'Schoolday', description: '{"items":["A"],"nested":{"icon":"mdi:x"},"ok":true}', start: { date: '2026-05-01' }, end: { date: '2026-05-02' } }];
  const html = card.renderDayBadges(new Date('2026-05-01T00:00:00Z'), events);
  assert.equal((html.match(/<span class="day-badge(?:\s|")/g) || []).length, 1);
  assert.match(html, /day-badge-text">true</);
  assert.doesNotMatch(html, /polluted|mdi:x/);
});

test('day_badges renders dynamic icon-only text-only and no empty unresolved badges', () => {
  const card = makeCard({ entities: ['calendar.a'], day_badges: [
    { conditions: { title: 'schoolday' }, icon: '{{ event.description_json.icon }}' },
    { conditions: { title: 'schoolday' }, text: '{{ event.description_json.badge_text }}' },
    { conditions: { title: 'schoolday' }, icon: '{{ event.description_json.missing_icon }}', text: '{{ event.description_json.missing_text }}' }
  ] });
  const events = [{ entityId: 'calendar.a', summary: 'Schoolday', description: '{"icon":"mdi:school","badge_text":"School"}', start: { date: '2026-05-01' }, end: { date: '2026-05-02' } }];
  const html = card.renderDayBadges(new Date('2026-05-01T00:00:00Z'), events);
  assert.equal((html.match(/<span class="day-badge(?:\s|")/g) || []).length, 2);
  assert.match(html, /class="day-badge has-icon"/);
  assert.match(html, /class="day-badge has-text"/);
});

test('day_badges hidden helper calendar events provide dynamic badge values', () => {
  const card = makeCard({ entities: ['calendar.visible', 'calendar.helper'], event_styles: [{ match: { calendar: 'calendar.helper' }, style: 'hide' }], day_badges: [{ conditions: { calendar: 'calendar.helper' }, icon: '{{ event.description_json.icon }}', text: '{{ event.description_json.badge_text }}' }] });
  const day = new Date('2026-05-01T00:00:00Z');
  card._events = [{ entityId: 'calendar.helper', summary: 'Helper', description: '{"icon":"mdi:school","badge_text":"School"}', start: { date: '2026-05-01' }, end: { date: '2026-05-02' } }];
  const matchingEvents = card.getEventsForDay(day, { includeHiddenStyledEvents: true });
  const visibleEvents = matchingEvents.filter((event) => !card.isEventHiddenByStyle(event));
  const html = card.renderDayBadges(day, matchingEvents);
  assert.equal(visibleEvents.length, 0);
  assert.match(html, /ha-icon icon="mdi:school"/);
  assert.match(html, /day-badge-text">School</);
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


test('getStyles keeps light-DOM card typography scoped to internal content', () => {
  const card = makeCard({ entities: ['calendar.a'] });
  const styles = card.getStyles();

  assert.doesNotMatch(styles, /-apple-system,\s*BlinkMacSystemFont,\s*'Segoe UI',\s*Roboto,\s*Oxygen,\s*Ubuntu,\s*Cantarell,\s*sans-serif/);

  const cardElementRule = extractCssRule(styles, 'daylight-calendar-card,');
  assert.doesNotMatch(cardElementRule, /font-family\s*:/);

  const containerRule = extractCssRule(styles, '.calendar-container {');
  assert.match(containerRule, /font-family:\s*var\(--ha-font-family-body,\s*var\(--paper-font-body1_-_font-family,\s*inherit\)\)/);

  const formControlsFontRule = styles.match(/\.calendar-container input,[\s\S]*?\.calendar-container button \{[\s\S]*?font-family:\s*inherit;[\s\S]*?\}/)?.[0] ?? '';
  assert.notEqual(formControlsFontRule, '', 'form controls should explicitly inherit the scoped card font');
  assert.doesNotMatch(formControlsFontRule, /-apple-system|BlinkMacSystemFont|'Segoe UI'|Roboto|Oxygen|Ubuntu|Cantarell|sans-serif/);
});

test('getStyles includes full-height flex layout contract for HA Sections grids', () => {
  const card = makeCard({ entities: ['calendar.a'] });
  const styles = card.getStyles();

  const cardElementRule = extractCssRule(styles, 'daylight-calendar-card,');
  assert.match(cardElementRule, /display:\s*block/);
  assert.match(cardElementRule, /width:\s*100%/);
  assert.match(cardElementRule, /height:\s*100%/);
  assert.match(cardElementRule, /min-height:\s*0/);
  assert.doesNotMatch(cardElementRule, /font-family\s*:/);
  assert.doesNotMatch(cardElementRule, /:host/);

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


test('scheduleHostAndParentResizeHandling defers host resize render while event modal is open', () => {
  const card = makeCard({ entities: ['calendar.a'], compact_height: true });
  let renderCount = 0;
  let hostSize = { width: 300, height: 400 };
  let parentSize = { width: 320, height: 480 };
  const modalClasses = new Set(['show']);
  const modal = { classList: { contains: (name) => modalClasses.has(name) } };
  const originalRequestAnimationFrame = window.requestAnimationFrame;

  try {
    window.requestAnimationFrame = (callback) => {
      callback();
      return 1;
    };
    card.render = () => { renderCount += 1; };
    card._viewMode = 'month';
    card._monthCompactMeasurementDirty = false;
    card._root = { querySelector: (selector) => selector === '#event-modal' ? modal : null };
    card.getBoundingClientRect = () => ({ width: hostSize.width, height: hostSize.height });
    card.parentElement = { getBoundingClientRect: () => ({ width: parentSize.width, height: parentSize.height }) };
    card._lastObservedHostSize = card.measureHostAndParentSize();

    hostSize = { width: 340, height: 410 };
    parentSize = { width: 360, height: 500 };
    card.scheduleHostAndParentResizeHandling();

    assert.equal(renderCount, 0);
    assert.deepEqual(card._lastObservedHostSize, {
      hostWidth: 340,
      hostHeight: 410,
      parentWidth: 360,
      parentHeight: 500
    });
    assert.equal(card._monthCompactMeasurementDirty, true);
    assert.equal(card._pendingHostResizeRender, true);

    hostSize = { width: 380, height: 430 };
    card.scheduleHostAndParentResizeHandling();
    assert.equal(renderCount, 0);
    assert.equal(card._pendingHostResizeRender, true);

    modalClasses.delete('show');
    card.updateEventModalOpenState(modal);
    assert.equal(renderCount, 1);
    assert.equal(card._pendingHostResizeRender, false);

    card.updateEventModalOpenState(modal);
    assert.equal(renderCount, 1);
  } finally {
    window.requestAnimationFrame = originalRequestAnimationFrame;
  }
});

test('scheduleHostAndParentResizeHandling updates header state without rendering for ordinary size changes', () => {
  const card = makeCard({ entities: ['calendar.a'] });
  let renderCount = 0;
  let hostSize = { width: 300, height: 400 };
  const originalRequestAnimationFrame = window.requestAnimationFrame;

  try {
    window.requestAnimationFrame = (callback) => {
      callback();
      return 1;
    };
    let wrapUpdateCount = 0;
    let badgeUpdateCount = 0;
    card.render = () => { renderCount += 1; };
    card.updateCompactHeaderWrapState = () => { wrapUpdateCount += 1; };
    card.updateCalendarBadgesScrollState = () => { badgeUpdateCount += 1; };
    card.isEventManagementDialogOpen = () => false;
    card.getBoundingClientRect = () => ({ width: hostSize.width, height: hostSize.height });
    card.parentElement = { getBoundingClientRect: () => ({ width: 320, height: 480 }) };
    card._lastObservedHostSize = card.measureHostAndParentSize();

    hostSize = { width: 340, height: 400 };
    card.scheduleHostAndParentResizeHandling();

    assert.equal(renderCount, 0);
    assert.equal(wrapUpdateCount, 1);
    assert.equal(badgeUpdateCount, 1);
    assert.equal(card._pendingHostResizeRender, false);
  } finally {
    window.requestAnimationFrame = originalRequestAnimationFrame;
  }
});

test('scheduleHostAndParentResizeHandling renders for compact-height size changes', () => {
  const card = makeCard({ entities: ['calendar.a'], compact_height: true });
  let renderCount = 0;
  let hostSize = { width: 300, height: 400 };
  const originalRequestAnimationFrame = window.requestAnimationFrame;

  try {
    window.requestAnimationFrame = (callback) => {
      callback();
      return 1;
    };
    card.render = () => { renderCount += 1; };
    card.isEventManagementDialogOpen = () => false;
    card.getBoundingClientRect = () => ({ width: hostSize.width, height: hostSize.height });
    card.parentElement = { getBoundingClientRect: () => ({ width: 320, height: 480 }) };
    card._lastObservedHostSize = card.measureHostAndParentSize();

    hostSize = { width: 340, height: 400 };
    card.scheduleHostAndParentResizeHandling();

    assert.equal(renderCount, 1);
    assert.equal(card._pendingHostResizeRender, false);
  } finally {
    window.requestAnimationFrame = originalRequestAnimationFrame;
  }
});


test('scheduleHostAndParentResizeHandling refreshes stacked week-compact header height without rendering', () => {
  const card = makeCard({ entities: ['calendar.a'], default_view: 'week-compact', day_badge_layout_week: 'stacked' });
  let renderCount = 0;
  let hostSize = { width: 300, height: 400 };
  const styleValues = new Map([['--week-compact-header-height', '120px']]);
  const container = {
    style: {
      getPropertyValue: (name) => styleValues.get(name) || '',
      removeProperty: (name) => styleValues.delete(name),
      setProperty: (name, value) => styleValues.set(name, value)
    }
  };
  const header = makeMeasuredDayHeader({ headerHeight: 84, badgeHeight: 20 });
  const originalRequestAnimationFrame = window.requestAnimationFrame;

  try {
    window.requestAnimationFrame = (callback) => { callback(); return 1; };
    card.render = () => { renderCount += 1; };
    card.updateCompactHeaderWrapState = () => {};
    card.updateCalendarBadgesScrollState = () => {};
    card.isEventManagementDialogOpen = () => false;
    card._viewMode = 'week-compact';
    card._weekCompactHeaderHeight = 120;
    card._root = {
      querySelector: (selector) => selector === '.week-compact-container' ? container : null,
      querySelectorAll: (selector) => selector === '.week-day-header' ? [header] : []
    };
    card.getBoundingClientRect = () => ({ width: hostSize.width, height: hostSize.height });
    card.parentElement = { getBoundingClientRect: () => ({ width: 320, height: 480 }) };
    card._lastObservedHostSize = card.measureHostAndParentSize();

    hostSize = { width: 360, height: 400 };
    card.scheduleHostAndParentResizeHandling();

    assert.equal(renderCount, 0);
    assert.equal(card._weekCompactHeaderHeight, 84);
    assert.equal(styleValues.get('--week-compact-header-height'), '84px');
  } finally {
    window.requestAnimationFrame = originalRequestAnimationFrame;
  }
});

test('scheduleHostAndParentResizeHandling refreshes stacked week-standard header height without rendering', () => {
  const card = makeCard({ entities: ['calendar.a'], default_view: 'week-standard', day_badge_layout_week: 'stacked' });
  let renderCount = 0;
  let hostSize = { width: 300, height: 400 };
  const styleValues = new Map([
    ['--week-standard-day-header-height', '120px'],
    ['--week-standard-time-header-spacer-height', '85px']
  ]);
  const container = {
    style: {
      getPropertyValue: (name) => styleValues.get(name) || '',
      removeProperty: (name) => styleValues.delete(name),
      setProperty: (name, value) => styleValues.set(name, value)
    },
    getBoundingClientRect: () => ({ top: 24 })
  };
  const header = makeMeasuredDayHeader({ headerHeight: 90, badgeHeight: 20 });
  const originalRequestAnimationFrame = window.requestAnimationFrame;

  try {
    window.requestAnimationFrame = (callback) => { callback(); return 1; };
    card.render = () => { renderCount += 1; };
    card.updateCompactHeaderWrapState = () => {};
    card.updateCalendarBadgesScrollState = () => {};
    card.isEventManagementDialogOpen = () => false;
    card._viewMode = 'week-standard';
    card._weekStandardHeaderHeight = 120;
    card._weekStandardExtraHeaderHeight = 60;
    card._weekStandardContainerTopInViewport = 24;
    card._root = {
      querySelector: (selector) => selector === '.week-standard-container' ? container : null,
      querySelectorAll: (selector) => selector === '.week-standard-day-header' ? [header] : []
    };
    card.getBoundingClientRect = () => ({ width: hostSize.width, height: hostSize.height });
    card.parentElement = { getBoundingClientRect: () => ({ width: 320, height: 480 }) };
    card._lastObservedHostSize = card.measureHostAndParentSize();

    hostSize = { width: 360, height: 400 };
    card.scheduleHostAndParentResizeHandling();

    assert.equal(renderCount, 0);
    assert.equal(card._weekStandardHeaderHeight, 90);
    assert.equal(card._weekStandardExtraHeaderHeight, 30);
    assert.equal(styleValues.get('--week-standard-day-header-height'), '90px');
    assert.equal(styleValues.get('--week-standard-time-header-spacer-height'), '60px');
  } finally {
    window.requestAnimationFrame = originalRequestAnimationFrame;
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


test('issue 384 wrapped header keeps configured opaque header background fallback', () => {
  const card = new Card();
  card._hass = { states: {}, locale: { language: 'en' }, language: 'en', themes: { darkMode: false } };
  card.setConfig({ entities: ['calendar.family'], header_color: '#123456', compact_header: true });

  originalCardRender.call(card);

  assert.match(card.getStyles(), /\.header\.is-wrapped,[\s\S]*\.header-compact\.is-wrapped\s*\{[\s\S]*background:\s*var\(--header-wrapped-background, transparent\);/);
  assert.match(card._root.innerHTML, /--header-background-base:\s*#123456;/);
  assert.match(card._root.innerHTML, /--header-background-alpha:\s*1;/);
  assert.match(card._root.innerHTML, /--header-wrapped-background:\s*#123456;/);
});

test('issue 384 transparent header mode does not get an opaque wrapped fallback', () => {
  const card = new Card();
  card._hass = { states: {}, locale: { language: 'en' }, language: 'en', themes: { darkMode: false } };
  card.setConfig({
    entities: ['calendar.family'],
    header_color: '#123456',
    header_background_transparent: true,
    compact_header: true
  });

  originalCardRender.call(card);

  assert.match(card._root.innerHTML, /--header-background-base:\s*#123456;/);
  assert.match(card._root.innerHTML, /--header-wrapped-background:\s*transparent;/);
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
    classList: { remove() {}, toggle() {}, contains() { return false; } }
  };
  Object.defineProperty(header, 'clientWidth', { configurable: true, value: 1000 });

  const badges = { children: [], classList: { remove() {}, toggle() {}, contains() { return false; } } };
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


test('measureAndApplyHeaderWrapState does not mutate classes when measured state is unchanged', () => {
  const card = makeCard({ entities: ['calendar.a'], compact_header: true });
  const makeClassList = (initial = []) => ({
    _set: new Set(initial),
    toggles: [],
    removes: [],
    contains(name) { return this._set.has(name); },
    toggle(name, force) { this.toggles.push([name, force]); if (force) this._set.add(name); else this._set.delete(name); },
    remove(name) { this.removes.push(name); this._set.delete(name); }
  });
  const left = { classList: makeClassList(), children: [] };
  const controls = { classList: makeClassList(['is-wrapped']), children: [] };
  const badges = { classList: makeClassList(['is-wrapped']), children: [{ offsetParent: {}, offsetTop: 0 }, { offsetParent: {}, offsetTop: 3 }] };
  const header = {
    classList: makeClassList(['is-wrapped']),
    querySelector(selector) {
      if (selector === '.compact-header-left') return left;
      if (selector === '.compact-header-controls') return controls;
      return null;
    }
  };
  card._root = {
    querySelector(selector) {
      if (selector === '.header-compact') return header;
      if (selector === '.compact-header-controls') return controls;
      if (selector === '.calendar-badges-inline') return badges;
      return null;
    }
  };
  card.shouldMarkHeaderWrappedFromWidth = () => true;
  card.shouldMarkGroupWrappedFromWidth = () => true;

  card.measureAndApplyHeaderWrapState();
  card.measureAndApplyHeaderWrapState();

  assert.deepEqual(header.classList.removes, []);
  assert.deepEqual(controls.classList.removes, []);
  assert.deepEqual(badges.classList.removes, []);
  assert.deepEqual(header.classList.toggles, []);
  assert.deepEqual(controls.classList.toggles, []);
  assert.deepEqual(badges.classList.toggles, []);
});


test('measureAndApplyHeaderWrapState uses unwrapped probe to remove stale compact wrapping when width grows', () => {
  const card = makeCard({ entities: ['calendar.a'], compact_header: true });
  const makeClassList = (initial = []) => ({
    _set: new Set(initial),
    contains(name) { return this._set.has(name); },
    add(name) { this._set.add(name); },
    remove(name) { this._set.delete(name); },
    toggle(name, force) { if (force) this._set.add(name); else this._set.delete(name); }
  });
  const makeGroup = (naturalWidth, wrappedWidth, classes = []) => ({
    naturalWidth,
    wrappedWidth,
    classList: makeClassList(classes),
    children: []
  });
  const liveLeft = makeGroup(300, 300);
  const liveControls = makeGroup(300, 500, ['is-wrapped']);
  const cloneLeft = makeGroup(300, 300);
  const cloneControls = makeGroup(300, 300, ['is-wrapped']);
  const badges = { classList: makeClassList(['is-wrapped']), children: [] };
  let appendedClone = null;
  const clone = {
    style: {},
    classList: makeClassList(['is-wrapped']),
    querySelector(selector) {
      if (selector === '.compact-header-left') return cloneLeft;
      if (selector === '.compact-header-controls') return cloneControls;
      return null;
    },
    remove() { appendedClone = null; }
  };
  const header = {
    clientWidth: 700,
    style: {},
    classList: makeClassList(['is-wrapped']),
    parentNode: { appendChild(node) { appendedClone = node; } },
    getBoundingClientRect: () => ({ width: 700 }),
    cloneNode: () => clone,
    querySelector(selector) {
      if (selector === '.compact-header-left') return liveLeft;
      if (selector === '.compact-header-controls') return liveControls;
      return null;
    }
  };
  card._root = {
    querySelector(selector) {
      if (selector === '.header-compact') return header;
      if (selector === '.compact-header-controls') return liveControls;
      if (selector === '.calendar-badges-inline') return badges;
      return null;
    }
  };

  const originalMeasure = card.measureNaturalGroupWidth;
  const originalGetComputedStyle = window.getComputedStyle;
  try {
    card.measureNaturalGroupWidth = (group) => group.naturalWidth;
    window.getComputedStyle = () => ({ columnGap: '16px', gap: '16px', paddingLeft: '0px', paddingRight: '0px' });

    card.measureAndApplyHeaderWrapState();

    assert.equal(header.classList.contains('is-wrapped'), false);
    assert.equal(liveControls.classList.contains('is-wrapped'), false);
    assert.equal(appendedClone, null);
    assert.equal(clone.classList.contains('is-wrapped'), false);
    assert.equal(cloneControls.classList.contains('is-wrapped'), false);
  } finally {
    card.measureNaturalGroupWidth = originalMeasure;
    window.getComputedStyle = originalGetComputedStyle;
  }
});

test('measureAndApplyHeaderWrapState reaches stable compact wrapped and unwrapped states', () => {
  const card = makeCard({ entities: ['calendar.a'], compact_header: true });
  const makeClassList = () => ({
    _set: new Set(),
    toggleCount: 0,
    contains(name) { return this._set.has(name); },
    toggle(name, force) { this.toggleCount += 1; if (force) this._set.add(name); else this._set.delete(name); }
  });
  const left = {};
  const controls = { classList: makeClassList(), children: [] };
  const badges = { classList: makeClassList(), children: [] };
  const header = {
    classList: makeClassList(),
    querySelector(selector) {
      if (selector === '.compact-header-left') return left;
      if (selector === '.compact-header-controls') return controls;
      return null;
    }
  };
  let shouldWrap = true;
  card._root = {
    querySelector(selector) {
      if (selector === '.header-compact') return header;
      if (selector === '.compact-header-controls') return controls;
      if (selector === '.calendar-badges-inline') return badges;
      return null;
    }
  };
  card.shouldMarkHeaderWrappedFromWidth = () => shouldWrap;
  card.shouldMarkGroupWrappedFromWidth = () => shouldWrap;

  card.measureAndApplyHeaderWrapState();
  card.measureAndApplyHeaderWrapState();
  assert.equal(header.classList.contains('is-wrapped'), true);
  assert.equal(controls.classList.contains('is-wrapped'), true);
  assert.equal(header.classList.toggleCount, 1);
  assert.equal(controls.classList.toggleCount, 1);

  shouldWrap = false;
  card.measureAndApplyHeaderWrapState();
  card.measureAndApplyHeaderWrapState();
  assert.equal(header.classList.contains('is-wrapped'), false);
  assert.equal(controls.classList.contains('is-wrapped'), false);
  assert.equal(header.classList.toggleCount, 2);
  assert.equal(controls.classList.toggleCount, 2);
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

test('date utility helpers preserve local date and ISO week behavior', async () => {
  const {
    formatLocalDate,
    getDateRangeChunks,
    getIsoWeekNumber,
    parseLocalDate,
    parsePossiblyLocalDateTime
  } = await import('./src/utils/date-utils.js');

  assert.equal(formatLocalDate(new Date(2026, 5, 3)), '2026-06-03');
  assert.equal(formatLocalDate(new Date('invalid')), '');
  assert.deepEqual(
    [parseLocalDate('2026-06-03').getFullYear(), parseLocalDate('2026-06-03').getMonth(), parseLocalDate('2026-06-03').getDate()],
    [2026, 5, 3]
  );
  assert.deepEqual(
    [parsePossiblyLocalDateTime('2026-06-03T04:05:06').getFullYear(), parsePossiblyLocalDateTime('2026-06-03T04:05:06').getMonth(), parsePossiblyLocalDateTime('2026-06-03T04:05:06').getDate(), parsePossiblyLocalDateTime('2026-06-03T04:05:06').getHours()],
    [2026, 5, 3, 4]
  );
  assert.equal(getIsoWeekNumber(new Date(2021, 0, 4)), 1);
  assert.equal(getIsoWeekNumber(new Date(2020, 11, 31)), 53);

  const chunks = getDateRangeChunks(new Date(2026, 0, 1, 12), new Date(2026, 0, 5, 9), 2);
  assert.equal(chunks.length, 3);
  assert.equal(formatLocalDate(chunks[0].startDate), '2026-01-01');
  assert.equal(formatLocalDate(chunks[0].endDate), '2026-01-02');
  assert.equal(formatLocalDate(chunks[2].startDate), '2026-01-05');
});

test('string utility helpers preserve normalization and attribute escaping', async () => {
  const { escapeHtmlAttribute, normalizeEventTextValue } = await import('./src/utils/string-utils.js');

  assert.equal(normalizeEventTextValue('  Team\n\tSync  '), 'Team Sync');
  assert.equal(normalizeEventTextValue('ＡＢＣ'), 'ABC');
  assert.equal(escapeHtmlAttribute('Team "sync" & <review> \'plan\''), 'Team &quot;sync&quot; &amp; &lt;review&gt; &#39;plan&#39;');
});

test('normalization utility helpers preserve dashboard, enum, map, and boolean behavior', async () => {
  const {
    normalizeBooleanStyleValue,
    normalizeDashboardPath,
    normalizeEntityStringMap,
    normalizeEnumValue
  } = await import('./src/utils/normalization-utils.js');

  assert.equal(normalizeDashboardPath(' lovelace/home '), '/lovelace/home');
  assert.equal(normalizeDashboardPath('/lovelace/home'), '/lovelace/home');
  assert.equal(normalizeDashboardPath('   '), null);
  assert.equal(normalizeDashboardPath(null), null);

  assert.equal(normalizeEnumValue(' Week ', { aliases: { week: 'week-compact' }, allowed: ['month', 'week-compact'], fallback: 'month' }), 'week-compact');
  assert.equal(normalizeEnumValue('bad', { allowed: ['month'], fallback: 'month' }), 'month');

  assert.deepEqual(normalizeEntityStringMap({ ' calendar.work ': ' Work ', '': 'Empty', 'calendar.blank': '   ', 'calendar.number': 5 }), {
    'calendar.work': 'Work'
  });
  assert.deepEqual(normalizeEntityStringMap(['calendar.work']), {});

  assert.equal(normalizeBooleanStyleValue(true), true);
  assert.equal(normalizeBooleanStyleValue(' false '), false);
  assert.equal(normalizeBooleanStyleValue('maybe'), null);
});

test('event normalizer module preserves identity, all-day detection, and start dates', async () => {
  const {
    getEventDateTimeInfo,
    getEventIdentityKey,
    getEventStartDate,
    normalizeCalendarEvent
  } = await import('./src/events/event-normalizer.js');

  const rawEvent = {
    uid: 'abc',
    start: { date: '2026-06-23' },
    end: { date: '2026-06-24' },
    summary: 'Holiday'
  };
  const parseLocalDateForTest = (value) => new Date(`${value}T00:00:00`);

  assert.equal(
    getEventIdentityKey('calendar.work', rawEvent),
    'calendar.work|abc||2026-06-23|2026-06-24|Holiday'
  );
  assert.deepEqual(normalizeCalendarEvent(rawEvent, { entityId: 'calendar.work', color: '#123456' }), {
    ...rawEvent,
    entityId: 'calendar.work',
    color: '#123456'
  });
  assert.equal(getEventStartDate(rawEvent, { parseLocalDate: parseLocalDateForTest }).getFullYear(), 2026);

  const allDayInfo = getEventDateTimeInfo(rawEvent, { parseCalendarDate: parseLocalDateForTest });
  assert.equal(allDayInfo.isAllDay, true);
  assert.equal(allDayInfo.eventStart.getDate(), 23);

  const timedInfo = getEventDateTimeInfo({ start: { dateTime: '2026-06-23T10:00:00Z' }, end: { dateTime: '2026-06-23T11:00:00Z' } });
  assert.equal(timedInfo.isAllDay, false);
});

test('rule modules preserve event, day, badge, and priority matching behavior', async () => {
  const {
    matchesAdvancedRule,
    matchTextCondition,
    eventMatchesNormalizedRule,
    dayMatchesNormalizedRule
  } = await import('./src/rules/condition-matcher.js');
  const { normalizeAdvancedRuleMatch } = await import('./src/rules/style-rules.js');

  const event = {
    entityId: 'calendar.work',
    summary: 'Team Sync',
    location: 'Conference Room',
    description: 'Quarterly planning',
    start: { dateTime: '2026-06-23T10:00:00Z' },
    end: { dateTime: '2026-06-23T11:00:00Z' }
  };
  const helpers = {
    getEventCalendarMatchTokens: () => ['calendar.work', 'Work'],
    getEventDateTimeInfo: () => ({ isAllDay: false }),
    isPastEvent: () => false,
    normalizeEventTextValue: (value) => String(value ?? '').trim().replace(/\s+/g, ' ')
  };

  assert.equal(matchTextCondition(event.summary, 'contains:team', helpers), true);
  assert.equal(eventMatchesNormalizedRule(event, { calendar: 'work', title: { substring: 'Sync' }, all_day: false }, helpers), true);
  assert.equal(eventMatchesNormalizedRule(event, { title: 'Team', not: { location: 'Kitchen' } }, helpers), true);

  const normalizedEventStyleMatch = normalizeAdvancedRuleMatch({ title_contains: 'team', calendar_entity: 'calendar.work' }, { defaultScope: 'event' });
  assert.equal(matchesAdvancedRule(normalizedEventStyleMatch, { event }, helpers).matches, true);

  const normalizeDayOfWeekRule = (value) => Array.isArray(value) ? value : [value];
  const normalizedDayStyleMatch = normalizeAdvancedRuleMatch(
    { day: { weekday: true, day_of_week: 2, has_event: { title_contains: 'team' } } },
    { defaultScope: 'day', normalizeDayOfWeekRule }
  );
  const dayResult = matchesAdvancedRule(normalizedDayStyleMatch, {
    date: new Date('2026-06-23T00:00:00'),
    dayEvents: [event]
  }, helpers);
  assert.equal(dayResult.matches, true);
  assert.equal(dayResult.matchedEvent, event);

  assert.equal(dayMatchesNormalizedRule({ no_event: { title: 'Dentist' } }, {
    date: new Date('2026-06-23T00:00:00'),
    dayEvents: [event]
  }, helpers).matches, true);
});

test('day badge module preserves normalization, safe resolution, and render preparation behavior', async () => {
  const {
    isFullValueTemplate,
    normalizeDayBadgeBlock,
    normalizeDayBadgeDisplayColor,
    normalizeResolvedDayBadgeDisplayColor,
    parseEventDescriptionJson,
    buildDayBadgeResolutionContext,
    resolveSafePath,
    resolveDayBadgeDisplayValue,
    resolveDayBadgeForRender,
    normalizeDayBadges
  } = await import('./src/badges/day-badges.js');

  const normalizeSingleColor = (value) => ({ red: '#FF0000', blue: '#0000FF' }[String(value || '').trim().toLowerCase()] || String(value || '').trim() || null);
  const normalizeEventTextValueForTest = (value) => String(value ?? '').trim().replace(/\s+/g, ' ');
  const normalizeStyleSizeValueForTest = (value) => {
    const trimmed = String(value ?? '').trim();
    if (!trimmed) return null;
    const numeric = Number(trimmed);
    return Number.isFinite(numeric) && numeric > 0 ? `${numeric}px` : trimmed;
  };

  assert.deepEqual(normalizeDayBadgeBlock({
    text: '  Bus  ',
    icon: ' mdi:bus ',
    background_color: '{{ event.description_json.badge_color }}',
    color: 'red',
    size: 18,
    font_size: '11px'
  }, {
    normalizeEventTextValue: normalizeEventTextValueForTest,
    normalizeDayBadgeDisplayColor: (value) => normalizeDayBadgeDisplayColor(value, { normalizeSingleColor }),
    normalizeStyleSizeValue: normalizeStyleSizeValueForTest
  }), {
    text: 'Bus',
    icon: 'mdi:bus',
    background_color: '{{ event.description_json.badge_color }}',
    color: '#FF0000',
    size: '18px',
    font_size: '11px'
  });
  assert.equal(isFullValueTemplate('{{event.description_json.badge_color}}'), true);
  assert.equal(isFullValueTemplate('Bus {{ event.description_json.badge_color }}'), false);
  assert.equal(normalizeResolvedDayBadgeDisplayColor('blue', { normalizeSingleColor }), '#0000FF');
  assert.equal(normalizeResolvedDayBadgeDisplayColor('not-a-color', { normalizeSingleColor }), undefined);

  const event = { entityId: 'calendar.helper', summary: 'Helper', description: '{"label":"Bus","count":4,"enabled":true,"color":"#112233","empty":"","nested":{"x":1}}' };
  const context = buildDayBadgeResolutionContext(new Date('2026-05-01T00:00:00Z'), event, { formatLocalDate: () => '2026-05-01' });
  assert.deepEqual(parseEventDescriptionJson(event), { label: 'Bus', count: 4, enabled: true, color: '#112233', empty: '', nested: { x: 1 } });
  assert.equal(parseEventDescriptionJson({ description: '{bad json}' }), undefined);
  assert.equal(resolveSafePath('event.description_json.label', context), 'Bus');
  assert.equal(resolveSafePath('event.description_json.count', context), '4');
  assert.equal(resolveSafePath('event.__proto__.polluted', context), undefined);
  assert.equal(resolveSafePath('event.prototype.polluted', context), undefined);
  assert.equal(resolveSafePath('event.constructor.polluted', context), undefined);
  assert.equal(resolveSafePath('event.description_json.missing', context), undefined);
  assert.equal(resolveSafePath('event.description_json.nested', context), undefined);
  assert.equal(resolveDayBadgeDisplayValue('{{ event.description_json.enabled }}', context), 'true');
  assert.equal(resolveDayBadgeDisplayValue('Literal {{ event.description_json.label }}', context), 'Literal {{ event.description_json.label }}');

  assert.deepEqual(resolveDayBadgeForRender({
    text: '{{ event.description_json.label }}',
    icon: '{{ event.description_json.empty }}',
    background_color: '{{ event.description_json.color }}',
    color: '{{ event.description_json.nested }}',
    size: '18px'
  }, new Date('2026-05-01T00:00:00Z'), event, {
    formatLocalDate: () => '2026-05-01',
    normalizeResolvedDayBadgeDisplayColor: (value) => normalizeResolvedDayBadgeDisplayColor(value, { normalizeSingleColor })
  }), {
    text: 'Bus',
    background_color: '#112233',
    size: '18px'
  });

  const normalizedRules = normalizeDayBadges([
    { conditions: { title_contains: 'helper' }, text: 'H' },
    { match: { event: { title: 'Helper' } }, icon: 'mdi:calendar' }
  ], {
    normalizeAdvancedRuleMatch: (rawMatch) => ({ event: rawMatch.event || rawMatch }),
    normalizeDayBadgeBlock: (rule) => normalizeDayBadgeBlock(rule, {
      normalizeEventTextValue: normalizeEventTextValueForTest,
      normalizeDayBadgeDisplayColor: (value) => normalizeDayBadgeDisplayColor(value, { normalizeSingleColor }),
      normalizeStyleSizeValue: normalizeStyleSizeValueForTest
    })
  });
  assert.equal(normalizedRules[0].conditions.title_contains, 'helper');
  assert.equal(normalizedRules[1].match.event.title, 'Helper');
});


test('event display helpers preserve title time location and style data decisions', async () => {
  const {
    getDisplayLocation,
    getEventBubbleFontColor,
    getEventFontSizeDisplayValue,
    getModalCalendarBadgesForEvent,
    getScheduleVisualInfo,
    getVisibleCalendarBadgesForEvent,
    shouldShowCombinedCornerBubbles,
    shouldShowEventLocation,
    shouldShowEventTime
  } = await import('./src/events/event-display.js');

  assert.equal(getEventFontSizeDisplayValue(13, 11), '13px');
  assert.equal(getEventFontSizeDisplayValue(' 0.75rem ', 9), '0.75rem');
  assert.equal(getEventFontSizeDisplayValue('', 9), '9px');

  const hiddenCalendars = new Set(['calendar.hidden']);
  assert.equal(shouldShowEventTime({ entityId: 'calendar.hidden' }, { hideTimesForCalendars: ['calendar.hidden'] }), false);
  assert.equal(shouldShowEventTime({ entityId: 'calendar.visible' }, { hideTimesForCalendars: ['calendar.hidden'] }), true);
  assert.equal(shouldShowEventTime({ entityId: 'calendar.visible' }, { styleOverrides: { hide_time: true } }), false);
  assert.equal(shouldShowEventTime({ entityId: 'calendar.hidden' }, { styleOverrides: { show_time: true }, hideTimesForCalendars: ['calendar.hidden'] }), true);
  assert.equal(shouldShowEventTime({ isCombinedCalendarEvent: true, sourceEntityIds: ['calendar.hidden'] }, { hiddenCalendars }), false);

  const event = { entityId: 'calendar.a', location: 'Room 101, Main Building' };
  assert.equal(shouldShowEventLocation(event, { showEventLocation: true }), true);
  assert.equal(shouldShowEventLocation(event, { styleOverrides: { show_event_location: false }, showEventLocation: true }), false);
  assert.equal(shouldShowEventLocation({ entityId: 'calendar.a', location: '' }, { showEventLocation: true }), false);
  assert.equal(getDisplayLocation('Room 101, Main Building', { useShortLocation: true }), 'Room');
  assert.equal(getDisplayLocation('123 Main Street, Springfield', { useShortLocation: true }), '123 Main Street');
  assert.equal(getDisplayLocation('Studio', { useShortLocation: true }), 'Studio');

  assert.equal(getEventBubbleFontColor({ entityId: 'calendar.a' }, {
    eventFontColors: { 'calendar.a': '#123456' },
    normalizeSingleColor: (color) => color,
    getEventBackgroundColor: () => '#ffffff',
    getContrastColor: () => '#000000'
  }), '#123456');
  assert.equal(getEventBubbleFontColor({ entityId: 'calendar.a' }, {
    styleOverrides: { event_font_color: '#abcdef' },
    normalizeSingleColor: (color) => color,
    getEventBackgroundColor: () => '#ffffff',
    getContrastColor: () => '#000000'
  }), '#abcdef');

  const combinedEvent = {
    isCombinedCalendarEvent: true,
    color: '#999999',
    sourceCalendars: [
      { entityId: 'calendar.hidden', color: '#111111' },
      { entityId: 'calendar.visible', color: '#222222' }
    ]
  };
  assert.deepEqual(getVisibleCalendarBadgesForEvent(combinedEvent, { hiddenCalendars }), [{ entityId: 'calendar.visible', color: '#222222' }]);
  assert.deepEqual(getModalCalendarBadgesForEvent(combinedEvent, { hiddenCalendars }), [{ entityId: 'calendar.visible', color: '#222222' }]);
  assert.equal(shouldShowCombinedCornerBubbles(combinedEvent, { combineCalendars: true, styleOverrides: { hasDuplicateBackgroundColors: true } }), true);
  assert.equal(shouldShowCombinedCornerBubbles(combinedEvent, { combineCalendars: true, isSingleVirtualCalendar: true, styleOverrides: { hasDuplicateBackgroundColors: true } }), false);

  const scheduleInfo = getScheduleVisualInfo({ summary: '', start: { dateTime: '2026-05-01T22:00:00Z' }, end: { dateTime: '2026-05-03T01:00:00Z' } }, {
    getEventDateTimeInfo: () => ({ eventStart: new Date('2026-05-01T22:00:00Z'), eventEnd: new Date('2026-05-03T01:00:00Z'), isAllDay: false }),
    shouldRenderTimedEventAsAllDayInSchedule: () => true,
    shouldShowEventTime: () => true,
    formatEventTime: () => '10:00 PM',
    translate: (key, params) => key === 'untitledEvent' ? 'Untitled event' : `${params.title}, ${params.time}`
  });
  assert.equal(scheduleInfo.displayTitle, 'Untitled event, 10:00 PM');
});

test('event display helper detects combined events inside one visible virtual calendar', async () => {
  const { isCombinedEventWithinSingleVirtualCalendar } = await import('./src/events/event-display.js');
  const event = {
    isCombinedCalendarEvent: true,
    sourceEvents: [
      { entityId: 'calendar.family' },
      { entityId: 'calendar.school' }
    ]
  };
  const getVirtualBadgeForEntity = (entityId) => ['calendar.family', 'calendar.school'].includes(entityId)
    ? { id: 'family_group' }
    : null;

  assert.equal(isCombinedEventWithinSingleVirtualCalendar(event, { getVirtualBadgeForEntity }), true);
  assert.equal(isCombinedEventWithinSingleVirtualCalendar(event, {
    hiddenCalendars: new Set(['calendar.school']),
    getVirtualBadgeForEntity
  }), false);
  assert.equal(isCombinedEventWithinSingleVirtualCalendar({
    ...event,
    sourceEvents: [{ entityId: 'calendar.family' }, { entityId: 'calendar.work' }]
  }, {
    getVirtualBadgeForEntity: (entityId) => entityId === 'calendar.family' ? { id: 'family_group' } : { id: 'work_group' }
  }), false);
});

test('editor schema normalizes default view aliases for editor controls', async () => {
  const { normalizeDefaultViewForEditor } = await import('./src/editor/editor-schema.js');

  assert.equal(normalizeDefaultViewForEditor('week'), 'week-compact');
  assert.equal(normalizeDefaultViewForEditor('schedule'), 'week-standard');
  assert.equal(normalizeDefaultViewForEditor('agenda'), 'agenda');
  assert.equal(normalizeDefaultViewForEditor(''), 'month');
});

test('event form helper preserves validation message keys and normalized data', async () => {
  const { normalizeEventFormData } = await import('./src/events/event-form.js');

  assert.deepEqual(normalizeEventFormData({ title: '', isAllDay: true }), { valid: false, errorKey: 'eventTitleRequired' });
  assert.deepEqual(normalizeEventFormData({ title: 'Event', isAllDay: true, startDate: '', endDate: '2026-05-01' }), { valid: false, errorKey: 'startEndDatesRequired' });
  assert.deepEqual(normalizeEventFormData({ title: 'Event', isAllDay: false, startDateTime: '', endDateTime: '2026-05-01T11:00' }), { valid: false, errorKey: 'startEndTimesRequired' });
  assert.deepEqual(normalizeEventFormData({ title: 'Event', isAllDay: true, startDate: '2026-05-02', endDate: '2026-05-01' }), { valid: false, errorKey: 'endDateBeforeStart' });
  assert.deepEqual(normalizeEventFormData({ title: 'Event', isAllDay: false, startDateTime: '2026-05-01T11:00', endDateTime: '2026-05-01T10:00' }), { valid: false, errorKey: 'endTimeBeforeStart' });

  const allDay = normalizeEventFormData({
    title: 'All day',
    location: '',
    description: 'Notes',
    isAllDay: true,
    startDate: '2026-05-01',
    endDate: '2026-05-01'
  });
  assert.equal(allDay.valid, true);
  assert.deepEqual(allDay.eventData, {
    summary: 'All day',
    location: undefined,
    description: 'Notes',
    start: { date: '2026-05-01' },
    end: { date: '2026-05-02' }
  });

  const timed = normalizeEventFormData({
    title: 'Timed',
    location: 'Room',
    description: '',
    isAllDay: false,
    startDateTime: '2026-05-01T10:00',
    endDateTime: '2026-05-01T11:00'
  });
  assert.equal(timed.valid, true);
  assert.equal(timed.eventData.summary, 'Timed');
  assert.equal(timed.eventData.location, 'Room');
  assert.equal(timed.eventData.description, undefined);
  assert.equal(timed.eventData.start.dateTime, new Date('2026-05-01T10:00').toISOString());
  assert.equal(timed.eventData.end.dateTime, new Date('2026-05-01T11:00').toISOString());
});

test('event service helpers preserve create update and delete payload shapes', async () => {
  const {
    buildCreateEventWebSocketPayload,
    buildDeleteEventPayload,
    buildDeleteEventWebSocketPayload,
    buildEventServiceData,
    buildUpdateEventServiceData,
    buildUpdateEventWebSocketPayload,
    getRecurringUpdateControls
  } = await import('./src/events/event-service.js');

  const allDayEventData = {
    summary: 'All day',
    location: 'Home',
    description: 'Desc',
    start: { date: '2026-05-01' },
    end: { date: '2026-05-02' }
  };
  assert.deepEqual(buildEventServiceData('calendar.home', allDayEventData), {
    entity_id: 'calendar.home',
    summary: 'All day',
    location: 'Home',
    description: 'Desc',
    start_date: '2026-05-01',
    end_date: '2026-05-02'
  });

  const timedEventData = {
    summary: 'Timed',
    start: { dateTime: '2026-05-01T10:00:00.000Z' },
    end: { dateTime: '2026-05-01T11:00:00.000Z' },
    rrule: 'FREQ=WEEKLY;BYDAY=FR'
  };
  assert.deepEqual(buildEventServiceData('calendar.work', timedEventData), {
    entity_id: 'calendar.work',
    summary: 'Timed',
    start_date_time: '2026-05-01T10:00:00.000Z',
    end_date_time: '2026-05-01T11:00:00.000Z',
    rrule: 'FREQ=WEEKLY;BYDAY=FR'
  });

  assert.deepEqual(buildCreateEventWebSocketPayload('calendar.work', timedEventData), {
    type: 'calendar/event/create',
    entity_id: 'calendar.work',
    event: {
      summary: 'Timed',
      location: undefined,
      description: undefined,
      rrule: 'FREQ=WEEKLY;BYDAY=FR',
      dtstart: '2026-05-01T10:00:00.000Z',
      dtend: '2026-05-01T11:00:00.000Z'
    }
  });

  const originalEvent = { entityId: 'calendar.work', uid: 'uid-1', recurrence_id: 'rid-1', rrule: 'FREQ=WEEKLY' };
  const controls = getRecurringUpdateControls(originalEvent, timedEventData, 'future');
  assert.deepEqual(controls, { isRecurringUpdate: true, recurrenceId: 'rid-1', recurrenceRange: 'THISANDFUTURE' });
  assert.deepEqual(buildUpdateEventServiceData(originalEvent, timedEventData, controls.recurrenceId, controls.recurrenceRange), {
    entity_id: 'calendar.work',
    summary: 'Timed',
    start_date_time: '2026-05-01T10:00:00.000Z',
    end_date_time: '2026-05-01T11:00:00.000Z',
    rrule: 'FREQ=WEEKLY;BYDAY=FR',
    uid: 'uid-1',
    recurrence_id: 'rid-1',
    recurrence_range: 'THISANDFUTURE'
  });
  assert.deepEqual(buildUpdateEventWebSocketPayload(originalEvent, timedEventData, controls.recurrenceId, controls.recurrenceRange), {
    type: 'calendar/event/update',
    entity_id: 'calendar.work',
    uid: 'uid-1',
    event: {
      summary: 'Timed',
      dtstart: '2026-05-01T10:00:00.000Z',
      dtend: '2026-05-01T11:00:00.000Z',
      rrule: 'FREQ=WEEKLY;BYDAY=FR'
    },
    recurrence_id: 'rid-1',
    recurrence_range: 'THISANDFUTURE'
  });
  assert.deepEqual(buildDeleteEventPayload('calendar.work', 'uid-1', 'rid-1', 'THISANDFUTURE'), {
    entity_id: 'calendar.work',
    uid: 'uid-1',
    recurrence_id: 'rid-1',
    recurrence_range: 'THISANDFUTURE'
  });
  assert.deepEqual(buildDeleteEventWebSocketPayload('calendar.work', 'uid-1', 'rid-1', 'THISANDFUTURE'), {
    type: 'calendar/event/delete',
    entity_id: 'calendar.work',
    uid: 'uid-1',
    recurrence_id: 'rid-1',
    recurrence_range: 'THISANDFUTURE'
  });
});

test('event fetcher stable stringify sorts object keys recursively', async () => {
  const { toStableString } = await import('./src/events/event-fetcher.js');

  assert.equal(
    toStableString({ b: 2, a: { d: 4, c: 3 }, e: [{ g: 7, f: 6 }] }),
    '{"a":{"c":3,"d":4},"b":2,"e":[{"f":6,"g":7}]}'
  );
});

test('event fetcher calendar data signature ignores entity color and is order independent', async () => {
  const { getCalendarDataSignature } = await import('./src/events/event-fetcher.js');
  const first = getCalendarDataSignature([
    { entityId: 'calendar.work', color: '#fff', summary: 'B', start: { date: '2026-01-02' } },
    { entityId: 'calendar.work', color: '#000', summary: 'A', start: { date: '2026-01-01' } }
  ]);
  const second = getCalendarDataSignature([
    { entityId: 'calendar.work', color: 'red', summary: 'A', start: { date: '2026-01-01' } },
    { entityId: 'calendar.work', color: 'blue', summary: 'B', start: { date: '2026-01-02' } }
  ]);

  assert.equal(first, second);
});

test('event fetcher mergeEvents replaces duplicate keys and sorts by start date', async () => {
  const { mergeEvents } = await import('./src/events/event-fetcher.js');
  const merged = mergeEvents(
    [
      { entityId: 'calendar.work', uid: '1', summary: 'Old', start: '2026-01-03' },
      { entityId: 'calendar.work', uid: '2', summary: 'Middle', start: '2026-01-02' }
    ],
    [
      { entityId: 'calendar.work', uid: '1', summary: 'New', start: '2026-01-01' }
    ],
    {
      getEventIdentityKey: (entityId, event) => `${entityId}:${event.uid}`,
      getEventStartDate: event => new Date(event.start)
    }
  );

  assert.deepEqual(merged.map(event => event.summary), ['New', 'Middle']);
});

test('event fetcher loaded range coverage and stale refresh decisions match boundaries', async () => {
  const { isDateRangeCoveredByLoadedEvents, shouldRefreshEvents } = await import('./src/events/event-fetcher.js');
  const loaded = {
    startDate: new Date('2026-01-01T00:00:00Z'),
    endDate: new Date('2026-01-31T23:59:59Z')
  };

  assert.equal(isDateRangeCoveredByLoadedEvents(null, loaded.startDate, loaded.endDate), false);
  assert.equal(isDateRangeCoveredByLoadedEvents(loaded, loaded.startDate, loaded.endDate), true);
  assert.equal(isDateRangeCoveredByLoadedEvents(loaded, new Date('2025-12-31T23:59:59Z'), loaded.endDate), false);
  assert.equal(shouldRefreshEvents({ lastFetch: null, now: 100000 }), true);
  assert.equal(shouldRefreshEvents({ lastFetch: 40000, now: 100000 }), false);
  assert.equal(shouldRefreshEvents({ lastFetch: 39999, now: 100000 }), true);
});

test('event fetcher sends WebSocket calendar event payload unchanged', async () => {
  const { fetchEventsViaWebSocket } = await import('./src/events/event-fetcher.js');
  let payload;
  const hass = {
    callWS(message) {
      payload = message;
      return Promise.resolve([{ summary: 'WS event' }]);
    }
  };

  const result = await fetchEventsViaWebSocket({
    hass,
    entityId: 'calendar.work',
    chunkStartStr: '2026-01-01T00:00:00.000Z',
    chunkEndStr: '2026-01-31T23:59:59.999Z'
  });

  assert.deepEqual(payload, {
    type: 'calendar/events',
    entity_id: 'calendar.work',
    start_date_time: '2026-01-01T00:00:00.000Z',
    end_date_time: '2026-01-31T23:59:59.999Z'
  });
  assert.deepEqual(result, [{ summary: 'WS event' }]);
});

test('event fetcher falls back to REST URL and returns empty array after failed fetches', async () => {
  const { fetchEventsForChunk } = await import('./src/events/event-fetcher.js');
  const chunk = {
    startDate: new Date('2026-01-01T12:34:56Z'),
    endDate: new Date('2026-01-31T12:34:56Z')
  };
  let restUrl;
  const originalConsoleError = console.error;
  console.error = () => {};
  try {
    const restEvents = await fetchEventsForChunk({
      hass: {
        callWS: () => Promise.reject(new Error('no ws')),
        callApi(method, url) {
          restUrl = url;
          assert.equal(method, 'GET');
          return Promise.resolve([{ summary: 'REST event' }]);
        }
      },
      entityId: 'calendar.work',
      chunk,
      formatLocalDate: date => date.toISOString().slice(0, 10)
    });

    assert.deepEqual(restEvents, [{ summary: 'REST event' }]);
    assert.equal(restUrl, 'calendars/calendar.work?start=2026-01-01T00:00:00Z&end=2026-01-31T23:59:59Z');

    const failedEvents = await fetchEventsForChunk({
      hass: {
        callWS: () => Promise.reject(new Error('no ws')),
        callApi: () => Promise.reject(new Error('no rest'))
      },
      entityId: 'calendar.work',
      chunk,
      formatLocalDate: date => date.toISOString().slice(0, 10)
    });

    assert.deepEqual(failedEvents, []);
  } finally {
    console.error = originalConsoleError;
  }
});

test('event fetcher normalizes with calendar colors and de-duplicates chunk overlaps', async () => {
  const { fetchEventsForCalendar } = await import('./src/events/event-fetcher.js');
  const chunks = [
    { startDate: new Date('2026-01-01T00:00:00Z'), endDate: new Date('2026-01-02T00:00:00Z') },
    { startDate: new Date('2026-01-02T00:00:00Z'), endDate: new Date('2026-01-03T00:00:00Z') }
  ];
  const hass = {
    callWS: ({ start_date_time }) => Promise.resolve(
      start_date_time === '2026-01-01T00:00:00.000Z'
        ? [{ uid: '1', summary: 'First' }, { uid: '2', summary: 'Second' }]
        : [{ uid: '1', summary: 'First duplicate' }]
    )
  };
  const normalizedContexts = [];

  const events = await fetchEventsForCalendar({
    hass,
    entityId: 'calendar.work',
    colorIndex: 3,
    chunks,
    formatLocalDate: date => date.toISOString().slice(0, 10),
    getCalendarColor: (entityId, index) => `${entityId}:${index}:color`,
    getEventIdentityKey: (entityId, event) => `${entityId}:${event.uid}`,
    normalizeCalendarEvent: (event, context) => {
      normalizedContexts.push(context);
      return { ...event, ...context };
    }
  });

  assert.deepEqual(events.map(event => event.summary), ['First', 'Second']);
  assert.deepEqual(normalizedContexts, [
    { entityId: 'calendar.work', color: 'calendar.work:3:color' },
    { entityId: 'calendar.work', color: 'calendar.work:3:color' }
  ]);
});

test('weather controller ignores missing hass, missing/non-weather entities, and caches forecast by entity', async () => {
  const { createWeatherForecastController } = await import('./src/weather/weather-controller.js');
  let entityId = 'sensor.outdoor';
  let requestCount = 0;
  let subscribeCount = 0;
  const controller = createWeatherForecastController({
    getHass: () => null,
    getWeatherEntityId: () => entityId,
    requestForecast: async () => { requestCount += 1; },
    subscribeForecast: async () => { subscribeCount += 1; return () => {}; }
  });

  await controller.ensureSubscription();
  await controller.refreshForecastData();
  assert.equal(subscribeCount, 0);
  assert.equal(requestCount, 0);

  entityId = null;
  await controller.ensureSubscription();
  await controller.refreshForecastData();
  assert.equal(controller.getForecastForEntity('weather.home'), undefined);
});

test('weather controller subscribes with weather payload and avoids duplicate in-flight subscriptions', async () => {
  const { createWeatherForecastController } = await import('./src/weather/weather-controller.js');
  let resolveSubscription;
  let callback;
  const messages = [];
  let updated = null;
  const unsubscribe = () => { unsubscribe.called = true; };
  const controller = createWeatherForecastController({
    getHass: () => ({ connection: {} }),
    getWeatherEntityId: () => 'weather.home',
    subscribeForecast: (nextCallback, message) => {
      callback = nextCallback;
      messages.push(message);
      return new Promise((resolve) => { resolveSubscription = () => resolve(unsubscribe); });
    },
    onForecastUpdated: (entityId, forecast, details) => { updated = { entityId, forecast, details }; }
  });

  const first = controller.ensureSubscription();
  const second = controller.ensureSubscription();
  assert.equal(messages.length, 1);
  assert.deepEqual(messages[0], {
    type: 'weather/subscribe_forecast',
    entity_id: 'weather.home',
    forecast_type: 'daily'
  });

  callback({ forecast: [{ datetime: '2026-06-25', condition: 'sunny' }] });
  assert.deepEqual(controller.getForecastForEntity('weather.home'), [{ datetime: '2026-06-25', condition: 'sunny' }]);
  assert.deepEqual(updated, {
    entityId: 'weather.home',
    forecast: [{ datetime: '2026-06-25', condition: 'sunny' }],
    details: { source: 'subscription' }
  });

  resolveSubscription();
  await first;
  await controller.ensureSubscription();
  assert.equal(messages.length, 1);
});

test('weather controller refreshes with forecast payload, prevents duplicates, and caches successes', async () => {
  const { createWeatherForecastController } = await import('./src/weather/weather-controller.js');
  let resolveRequest;
  const messages = [];
  const updates = [];
  const controller = createWeatherForecastController({
    getHass: () => ({}),
    getWeatherEntityId: () => 'weather.home',
    requestForecast: (message) => {
      messages.push(message);
      return new Promise((resolve) => { resolveRequest = () => resolve({ weather: {}, 'weather.home': { forecast: [{ date: '2026-06-25' }] } }); });
    },
    onForecastUpdated: (entityId, forecast, details) => updates.push({ entityId, forecast, details })
  });

  const first = controller.refreshForecastData();
  const second = controller.refreshForecastData();
  assert.equal(messages.length, 1);
  assert.deepEqual(messages[0], {
    type: 'weather/get_forecasts',
    entity_ids: ['weather.home'],
    forecast_type: 'daily'
  });
  resolveRequest();
  await first;
  await second;

  assert.deepEqual(controller.getForecastForEntity('weather.home'), [{ date: '2026-06-25' }]);
  assert.deepEqual(updates, [{
    entityId: 'weather.home',
    forecast: [{ date: '2026-06-25' }],
    details: { source: 'refresh' }
  }]);
  await controller.refreshForecastData();
  assert.equal(messages.length, 1);
});

test('weather controller records retry timing after failed refresh and suppresses until retry time', async () => {
  const { createWeatherForecastController } = await import('./src/weather/weather-controller.js');
  let now = 1000;
  let requestCount = 0;
  const controller = createWeatherForecastController({
    getHass: () => ({}),
    getWeatherEntityId: () => 'weather.home',
    now: () => now,
    retryDelayMs: 300000,
    requestForecast: async () => {
      requestCount += 1;
      if (requestCount === 1) throw new Error('no forecasts');
      return { 'weather.home': { forecast: [{ date: '2026-06-26' }] } };
    }
  });

  await controller.refreshForecastData();
  assert.equal(controller.refreshRetryAtByEntity.get('weather.home'), 301000);
  await controller.refreshForecastData();
  assert.equal(requestCount, 1);
  now = 301001;
  await controller.refreshForecastData();
  assert.equal(requestCount, 2);
  assert.equal(controller.refreshRetryAtByEntity.has('weather.home'), false);
});

test('weather controller config changes tear down subscription and clear forecasts and retries', async () => {
  const { createWeatherForecastController } = await import('./src/weather/weather-controller.js');
  let entityId = 'weather.home';
  let unsubscribeCount = 0;
  const controller = createWeatherForecastController({
    getHass: () => ({ connection: {} }),
    getWeatherEntityId: () => entityId,
    subscribeForecast: async () => () => { unsubscribeCount += 1; }
  });

  await controller.ensureSubscription();
  controller.forecastByEntity.set('weather.home', [{ date: '2026-06-25' }]);
  controller.refreshRetryAtByEntity.set('weather.home', 1234);
  entityId = 'weather.garden';
  controller.handleConfigChanged('weather.home', 'weather.garden');

  assert.equal(unsubscribeCount, 1);
  assert.equal(controller.subscriptionEntityId, null);
  assert.equal(controller.getForecastForEntity('weather.home'), undefined);
  assert.equal(controller.refreshRetryAtByEntity.size, 0);
});

test('detectStaleSkylightResource detects old HACS skylight resource path', () => {
  const result = Card.detectStaleSkylightResource({
    scripts: [{ src: '/hacsfiles/skylight-calendar-card/skylight-calendar-card.js' }],
    querySelectorAll: () => []
  });

  assert.equal(result.detected, true);
  assert.equal(result.staleUrl, '/hacsfiles/skylight-calendar-card/skylight-calendar-card.js');
});

test('detectStaleSkylightResource does not warn for current Daylight HACS resource path', () => {
  const result = Card.detectStaleSkylightResource({
    scripts: [{ src: '/hacsfiles/daylight-calendar-card/skylight-calendar-card.js' }],
    querySelectorAll: () => []
  });

  assert.equal(result.detected, false);
  assert.equal(result.staleUrl, null);
});

test('detectStaleSkylightResource handles missing and empty document resources safely', () => {
  assert.equal(Card.detectStaleSkylightResource(null).detected, false);
  assert.equal(Card.detectStaleSkylightResource({}).detected, false);
  assert.equal(Card.detectStaleSkylightResource({ scripts: [], querySelectorAll: () => [] }).detected, false);
});

test('detectStaleSkylightResource ignores unrelated scripts and links', () => {
  const result = Card.detectStaleSkylightResource({
    scripts: [{ src: '/hacsfiles/other-card/other-card.js' }],
    querySelectorAll: () => [{ href: '/local/daylight-calendar-card.js' }]
  });

  assert.equal(result.detected, false);
  assert.equal(result.staleUrl, null);
});
