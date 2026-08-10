// This file is generated from src/ by npm run build. Do not edit directly.
const COMMON_NAMED_COLORS = {
  black: '#000000',
  white: '#FFFFFF',
  red: '#FF0000',
  lime: '#00FF00',
  green: '#008000',
  'lime/green': '#00FF00',
  limegreen: '#00FF00',
  blue: '#0000FF',
  yellow: '#FFFF00',
  cyan: '#00FFFF',
  aqua: '#00FFFF',
  'cyan/aqua': '#00FFFF',
  magenta: '#FF00FF',
  fuchsia: '#FF00FF',
  'magenta/fuchsia': '#FF00FF',
  silver: '#C0C0C0',
  gray: '#808080',
  grey: '#808080',
  maroon: '#800000',
  olive: '#808000',
  darkgreen: '#008000',
  'dark green': '#008000',
  'green dark': '#008000',
  greendark: '#008000',
  purple: '#800080',
  teal: '#008080',
  navy: '#000080',
  orange: '#FFA500',
  pink: '#FFC0CB'
};

const DEFAULT_LANGUAGE = 'en';

const DEFAULT_VIEW = 'month';

const DEFAULT_WEEK_DAYS = [0, 1, 2, 3, 4, 5, 6];

const DEFAULT_THEME_MODE = 'auto';
const DEFAULT_EVENT_TITLE_PREFIX = 'none';
const DEFAULT_PAST_EVENT_MODE = 'none';
const DEFAULT_DAY_BADGE_LAYOUT_WEEK = 'inline';
const DEFAULT_BACKGROUND_IMAGE_SIZE = 'cover';
const DEFAULT_BACKGROUND_IMAGE_POSITION = 'center';
const DEFAULT_BACKGROUND_IMAGE_REPEAT = 'no-repeat';
const DEFAULT_COMBINE_STYLE = 'bars';
const DEFAULT_COMBINE_BACKGROUND = 'primary';
const DEFAULT_EVENT_COLOR_MODE = 'classic';
const DEFAULT_EVENT_NEUTRAL_BACKGROUND = '#F8F3E9';
const DEFAULT_EVENT_TINT_OPACITY = 80;
const DEFAULT_EVENT_COLOR_BAR_WIDTH = 18;
const DEFAULT_EVENT_MODAL_SIZE = 'medium';

const THEME_MODE_OPTIONS = ['auto', 'light', 'dark'];
const EVENT_TITLE_PREFIX_OPTIONS = ['friendly_name', 'badge_icon', 'none'];
const PAST_EVENT_MODE_OPTIONS = ['none', 'hide', 'muted'];
const DAY_BADGE_LAYOUT_WEEK_OPTIONS = ['inline', 'stacked'];
const COMBINE_STYLE_OPTIONS = ['stripes', 'bars', 'dots'];
const EVENT_COLOR_MODE_OPTIONS = ['classic', 'left-neutral', 'left-tint'];
const COMBINE_BACKGROUND_MODE_OPTIONS = ['neutral', 'primary'];
const EVENT_MODAL_SIZE_OPTIONS = ['narrow', 'medium', 'wide', 'full'];

const EVENT_TITLE_PREFIX_ALIASES = {
  icon: 'badge_icon',
  badge: 'badge_icon',
  badgeicon: 'badge_icon',
  friendly: 'friendly_name',
  friendlyname: 'friendly_name'
};

const HIDDEN_CALENDAR_VISIBILITY_VALUES = [false, 'hide', 'hidden', 'off'];
const VISIBLE_CALENDAR_VISIBILITY_VALUES = [true, 'show', 'shown', 'visible', 'on'];


const DEFAULT_CONFIG_VALUES = {
  firstDayOfWeek: 0,
  calendar_names: {},
  calendar_badge_icons: {},
  week_days: DEFAULT_WEEK_DAYS,
  rolling_days_week_compact: null,
  week_compact_weekday_font_size: 12,
  week_compact_weekday_color: null,
  week_compact_day_header_spacing: 12,
  rolling_days_schedule: null,
  rolling_days_agenda: null,
  rolling_weeks: null,
  show_week_numbers_month: false,
  week_number_prefix: null,
  show_all_events_month: false,
  show_all_details_month: false,
  month_day_tap_action: 'create',
  hide_the_past: false,
  hide_empty_days: false,
  agenda_compact_events: false,
  display_full_weekday_names: false,
  shorten_event_times: false,
  disable_swipe_controls: false,
  lock_schedule_hours: false,
  compact_height: false,
  compact_width: false,
  height_scale: 1.0,
  compact_header: false,
  hide_year: false,
  hide_calendars: false,
  hide_header: false,
  hide_calendar_names: false,
  hide_controls: false,
  hide_navigation_buttons: false,
  hide_add_event_button: false,
  hide_view_selector: false,
  hide_dark_mode_toggle: false,
  show_dashboard_nav_button: false,
  show_daily_weather_forecast: true,
  hide_event_calendar_bubble: false,
  show_event_location: false,
  use_short_location: false,
  location_links: false,
  event_font_size: 11,
  event_time_font_size: 9,
  event_location_font_size: 9,
  event_calendar_friendly_name: false,
  hide_times_for_calendars: [],
  show_current_time_bar: false,
  header_color: 'var(--primary-color)',
  background_opacity_transparent_threshold: 100,
  background_image_url: null,
  combine_calendars: false,
  enable_event_management: true,
  readonly_calendars: [],
  hide_badge_calendars: [],
  virtual_calendars: [],
  language: null,
  locale: null,
  preference_storage_key: null
};

const DEFAULT_STUB_CONFIG = {
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
  month_day_tap_action: 'create',
  hide_empty_days: false,
  agenda_compact_events: false,
  shorten_event_times: false,
  time_zone: '',
  display_full_weekday_names: false,
  week_compact_weekday_font_size: 12,
  week_compact_weekday_color: null,
  week_compact_day_header_spacing: 12,
  compact_width: false,
  show_current_time_bar: false,
  show_event_location: false,
  use_short_location: false,
  location_links: false,
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
  show_daily_weather_forecast: true,
  header_items: [],
  calendar_person_entities: {},
  default_hidden_calendars: [],
  color_scheme: 'auto',
  enable_event_management: true,
  event_modal_size: 'medium'
};

const createDefaultStubConfig = () => ({
  ...DEFAULT_STUB_CONFIG,
  entities: [...DEFAULT_STUB_CONFIG.entities],
  week_days: [...DEFAULT_STUB_CONFIG.week_days],
  day_badges: [...DEFAULT_STUB_CONFIG.day_badges],
  calendar_person_entities: { ...DEFAULT_STUB_CONFIG.calendar_person_entities },
  default_hidden_calendars: [...DEFAULT_STUB_CONFIG.default_hidden_calendars],
  header_items: [...DEFAULT_STUB_CONFIG.header_items]
});

function getDateRangeChunks(startDate, endDate, chunkDays = 30) {
  const chunks = [];
  let cursor = new Date(startDate);
  cursor.setHours(0, 0, 0, 0);

  while (cursor <= endDate) {
    const chunkStart = new Date(cursor);
    const chunkEnd = new Date(cursor);
    chunkEnd.setDate(chunkEnd.getDate() + chunkDays - 1);
    if (chunkEnd > endDate) {
      chunkEnd.setTime(endDate.getTime());
    }
    chunkEnd.setHours(23, 59, 59, 999);

    chunks.push({ startDate: chunkStart, endDate: chunkEnd });

    cursor = new Date(chunkEnd);
    cursor.setDate(cursor.getDate() + 1);
    cursor.setHours(0, 0, 0, 0);
  }

  return chunks;
}

function parseLocalDate(dateStr) {
  if (!dateStr || typeof dateStr !== 'string') return new Date(dateStr);
  const [year, month, day] = dateStr.split('-').map(Number);
  if (![year, month, day].every(Number.isFinite)) return new Date(dateStr);
  return new Date(year, month - 1, day);
}

function parsePossiblyLocalDateTime(value) {
  if (!value || typeof value !== 'string') return new Date(value);

  const hasTimezone = /(?:[zZ]|[+-]\d{2}:?\d{2})$/.test(value);
  if (hasTimezone) return new Date(value);

  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2})(?::(\d{2}))?$/);
  if (!match) return new Date(value);

  const [, year, month, day, hour, minute, second = '0'] = match;
  return new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hour),
    Number(minute),
    Number(second)
  );
}

function formatLocalDate(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return '';
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getIsoWeekNumber(date) {
  const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNumber = utcDate.getUTCDay() || 7;
  utcDate.setUTCDate(utcDate.getUTCDate() + 4 - dayNumber);
  const yearStart = new Date(Date.UTC(utcDate.getUTCFullYear(), 0, 1));
  return Math.ceil((((utcDate - yearStart) / 86400000) + 1) / 7);
}

const HEADER_ITEM_FORMATS = new Set(['auto', 'raw', 'time', 'date', 'datetime']);
const EMPTY_STATES = new Set(['', 'unknown', 'unavailable']);

function normalizeOptionalString(value) {
  if (value === undefined || value === null) return null;
  const normalized = String(value).trim();
  return normalized || null;
}

function normalizeHeaderItems(items) {
  if (!Array.isArray(items)) return [];
  return items
    .filter((item) => item && typeof item === 'object' && !Array.isArray(item))
    .map((item) => ({
      icon: normalizeOptionalString(item.icon),
      entity: normalizeOptionalString(item.entity),
      attribute: normalizeOptionalString(item.attribute),
      text: normalizeOptionalString(item.text),
      format: HEADER_ITEM_FORMATS.has(normalizeOptionalString(item.format)) ? normalizeOptionalString(item.format) : 'auto'
    }))
    .filter((item) => item.icon || item.entity || item.text);
}

function isEmptyResolvedValue(value) {
  if (value === undefined || value === null) return true;
  if (typeof value === 'string') return EMPTY_STATES.has(value.trim().toLowerCase());
  return false;
}

function stringifyRawValue(value) {
  if (value instanceof Date) return value.toISOString();
  if (Array.isArray(value)) return value.join(', ');
  if (typeof value === 'object' && value !== null) return JSON.stringify(value);
  return String(value);
}

function parseDateValue(value, parseTimeValue) {
  if (value instanceof Date) return Number.isNaN(value.getTime()) ? null : value;
  const raw = String(value ?? '').trim();
  if (!raw) return null;
  if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) {
    const parsedLocalDate = parseLocalDate(raw);
    return parsedLocalDate instanceof Date && !Number.isNaN(parsedLocalDate.getTime()) ? parsedLocalDate : null;
  }
  if (typeof parseTimeValue === 'function') {
    const parsedTime = parseTimeValue(value);
    if (parsedTime) return parsedTime;
  }
  const parsed = parsePossiblyLocalDateTime(raw);
  return parsed instanceof Date && !Number.isNaN(parsed.getTime()) ? parsed : null;
}

function formatDateValue(value, format, formatters = {}) {
  const parsed = parseDateValue(value, formatters.parseTimeValue);
  if (!parsed) return '';
  if (format === 'time') return formatters.formatTime?.(parsed) || '';
  if (format === 'date') return formatters.formatDate?.(parsed) || '';
  return formatters.formatDateTime?.(parsed) || '';
}

function resolveHeaderItemValue(item, hass, formatters = {}) {
  const entityState = item.entity ? hass?.states?.[item.entity] : null;
  const hasEntityValue = !!entityState;
  const rawEntityValue = hasEntityValue
    ? (item.attribute ? entityState.attributes?.[item.attribute] : entityState.state)
    : undefined;
  const rawValue = !isEmptyResolvedValue(rawEntityValue) ? rawEntityValue : item.text;
  if (isEmptyResolvedValue(rawValue)) return '';

  const format = item.format || 'auto';
  if (format === 'time' || format === 'date' || format === 'datetime') {
    return formatDateValue(rawValue, format, formatters);
  }

  if (format === 'raw') return stringifyRawValue(rawValue);

  const deviceClass = normalizeOptionalString(entityState?.attributes?.device_class);
  if (deviceClass === 'timestamp') return formatDateValue(rawValue, 'time', formatters);
  if (deviceClass === 'date') return formatDateValue(rawValue, 'date', formatters);

  const rawText = stringifyRawValue(rawValue);
  const unit = normalizeOptionalString(entityState?.attributes?.unit_of_measurement);
  if (unit && hasEntityValue && !item.attribute) return `${rawText} ${unit}`;
  return rawText;
}

function resolveHeaderItems(items, hass, formatters = {}) {
  return normalizeHeaderItems(items).map((item) => ({
    icon: item.icon,
    value: resolveHeaderItemValue(item, hass, formatters)
  })).filter((item) => !isEmptyResolvedValue(item.value));
}

function getHeaderItemsRenderSignature(items, hass) {
  return JSON.stringify(normalizeHeaderItems(items).filter((item) => item.entity).map((item) => {
    const state = hass?.states?.[item.entity];
    return {
      entity: item.entity,
      attribute: item.attribute,
      state: state?.state ?? null,
      attributeValue: item.attribute ? state?.attributes?.[item.attribute] ?? null : null,
      deviceClass: state?.attributes?.device_class ?? null,
      unitOfMeasurement: state?.attributes?.unit_of_measurement ?? null,
      icon: state?.attributes?.icon ?? null
    };
  }));
}

function createConfigNormalizationSchema({
  hasCustomTitle,
  normalizeDashboardPath,
  normalizeCombineStyle,
  normalizeCombineBackground,
  normalizeEventColorMode,
  normalizeSingleColor,
  normalizeBackgroundOpacity,
  normalizeEventModalSize,
  normalizeVirtualCalendars,
  normalizeDefaultDarkMode,
  getDefaultTitle
}) {
  return [
      { key: 'title', defaultValue: ({ rawConfig, language }) => hasCustomTitle ? rawConfig.title : getDefaultTitle(language) },
      { key: 'entities', defaultValue: ({ rawConfig }) => rawConfig.entities },
      { key: 'firstDayOfWeek', defaultValue: ({ rawConfig }) => rawConfig.first_day_of_week || DEFAULT_CONFIG_VALUES.firstDayOfWeek },
      { key: 'colors', defaultValue: ({ derived }) => derived.normalizedCalendarColors },
      { key: 'calendar_names', defaultValue: ({ rawConfig }) => rawConfig.calendar_names || { ...DEFAULT_CONFIG_VALUES.calendar_names } },
      { key: 'calendar_badge_icons', defaultValue: ({ rawConfig }) => rawConfig.calendar_badge_icons || { ...DEFAULT_CONFIG_VALUES.calendar_badge_icons } },
      { key: 'calendar_person_entities', defaultValue: ({ derived }) => derived.normalizedCalendarPersonEntities, normalize: ({ derived }) => derived.normalizedCalendarPersonEntities },
      { key: 'max_events', defaultValue: ({ rawConfig }) => rawConfig.max_events },
      { key: 'default_view', defaultValue: ({ derived }) => derived.normalizedDefaultView || DEFAULT_VIEW, normalize: ({ derived }) => derived.normalizedDefaultView || DEFAULT_VIEW },
      { key: 'week_days', defaultValue: ({ rawConfig }) => rawConfig.week_days || [...DEFAULT_CONFIG_VALUES.week_days] },
      { key: 'rolling_days_week_compact', defaultValue: ({ rawConfig }) => rawConfig.rolling_days_week_compact ?? DEFAULT_CONFIG_VALUES.rolling_days_week_compact },
      { key: 'week_compact_weekday_font_size', defaultValue: ({ derived }) => derived.normalizedWeekCompactWeekdayFontSize, normalize: ({ derived }) => derived.normalizedWeekCompactWeekdayFontSize },
      { key: 'week_compact_weekday_color', defaultValue: ({ derived }) => derived.normalizedWeekCompactWeekdayColor, normalize: ({ derived }) => derived.normalizedWeekCompactWeekdayColor },
      { key: 'week_compact_day_header_spacing', defaultValue: ({ derived }) => derived.normalizedWeekCompactDayHeaderSpacing, normalize: ({ derived }) => derived.normalizedWeekCompactDayHeaderSpacing },
      { key: 'rolling_days_schedule', defaultValue: ({ rawConfig }) => rawConfig.rolling_days_schedule ?? DEFAULT_CONFIG_VALUES.rolling_days_schedule },
      { key: 'rolling_days_agenda', defaultValue: ({ rawConfig }) => rawConfig.rolling_days_agenda ?? DEFAULT_CONFIG_VALUES.rolling_days_agenda, normalize: ({ rawConfig }) => rawConfig.rolling_days_agenda ?? DEFAULT_CONFIG_VALUES.rolling_days_agenda },
      { key: 'rolling_weeks', defaultValue: ({ rawConfig }) => rawConfig.rolling_weeks || DEFAULT_CONFIG_VALUES.rolling_weeks },
      { key: 'show_week_numbers_month', defaultValue: ({ rawConfig }) => rawConfig.show_week_numbers_month || DEFAULT_CONFIG_VALUES.show_week_numbers_month },
      { key: 'week_number_prefix', defaultValue: ({ rawConfig }) => rawConfig.week_number_prefix == null ? DEFAULT_CONFIG_VALUES.week_number_prefix : String(rawConfig.week_number_prefix).trim(), normalize: ({ rawConfig }) => rawConfig.week_number_prefix == null ? DEFAULT_CONFIG_VALUES.week_number_prefix : String(rawConfig.week_number_prefix).trim() },
      { key: 'show_all_events_month', defaultValue: ({ rawConfig }) => rawConfig.show_all_events_month || DEFAULT_CONFIG_VALUES.show_all_events_month },
      { key: 'show_all_details_month', defaultValue: ({ rawConfig }) => rawConfig.show_all_details_month || DEFAULT_CONFIG_VALUES.show_all_details_month },
      { key: 'month_day_tap_action', defaultValue: ({ rawConfig }) => rawConfig.month_day_tap_action === 'show_events' ? 'show_events' : DEFAULT_CONFIG_VALUES.month_day_tap_action, normalize: ({ rawConfig }) => rawConfig.month_day_tap_action === 'show_events' ? 'show_events' : DEFAULT_CONFIG_VALUES.month_day_tap_action },
      { key: 'hide_the_past', defaultValue: ({ rawConfig }) => rawConfig.hide_the_past || DEFAULT_CONFIG_VALUES.hide_the_past, normalize: ({ rawConfig }) => rawConfig.hide_the_past || DEFAULT_CONFIG_VALUES.hide_the_past },
      { key: 'past_event_mode', defaultValue: ({ derived }) => derived.normalizedPastEventMode, normalize: ({ derived }) => derived.normalizedPastEventMode },
      { key: 'hide_empty_days', defaultValue: ({ rawConfig }) => rawConfig.hide_empty_days || DEFAULT_CONFIG_VALUES.hide_empty_days },
      { key: 'agenda_compact_events', defaultValue: ({ rawConfig }) => rawConfig.agenda_compact_events ?? DEFAULT_CONFIG_VALUES.agenda_compact_events, normalize: ({ rawConfig }) => rawConfig.agenda_compact_events ?? DEFAULT_CONFIG_VALUES.agenda_compact_events },
      { key: 'display_full_weekday_names', defaultValue: ({ rawConfig }) => rawConfig.display_full_weekday_names ?? DEFAULT_CONFIG_VALUES.display_full_weekday_names },
      { key: 'shorten_event_times', defaultValue: ({ rawConfig }) => rawConfig.shorten_event_times ?? DEFAULT_CONFIG_VALUES.shorten_event_times },
      { key: 'time_zone', defaultValue: ({ derived }) => derived.normalizedTimeZone, normalize: ({ derived }) => derived.normalizedTimeZone },
      { key: 'disable_swipe_controls', defaultValue: ({ rawConfig }) => rawConfig.disable_swipe_controls ?? DEFAULT_CONFIG_VALUES.disable_swipe_controls },
      { key: 'week_start_hour', defaultValue: ({ derived }) => derived.normalizedWeekStartHour },
      { key: 'week_end_hour', defaultValue: ({ derived }) => derived.normalizedWeekEndHour },
      { key: 'lock_schedule_hours', defaultValue: ({ rawConfig }) => rawConfig.lock_schedule_hours ?? DEFAULT_CONFIG_VALUES.lock_schedule_hours },
      { key: 'compact_height', defaultValue: ({ rawConfig }) => rawConfig.compact_height || DEFAULT_CONFIG_VALUES.compact_height },
      { key: 'compact_width', defaultValue: ({ rawConfig }) => rawConfig.compact_width || DEFAULT_CONFIG_VALUES.compact_width },
      { key: 'height_scale', defaultValue: ({ rawConfig }) => rawConfig.height_scale || DEFAULT_CONFIG_VALUES.height_scale },
      { key: 'compact_header', defaultValue: ({ rawConfig }) => rawConfig.compact_header || DEFAULT_CONFIG_VALUES.compact_header },
      { key: 'hide_year', defaultValue: ({ rawConfig }) => rawConfig.hide_year || DEFAULT_CONFIG_VALUES.hide_year },
      { key: 'hide_calendars', defaultValue: ({ rawConfig }) => rawConfig.hide_calendars || DEFAULT_CONFIG_VALUES.hide_calendars },
      { key: 'hide_header', defaultValue: ({ rawConfig }) => rawConfig.hide_header || DEFAULT_CONFIG_VALUES.hide_header },
      { key: 'hide_calendar_names', defaultValue: ({ rawConfig }) => rawConfig.hide_calendar_names || DEFAULT_CONFIG_VALUES.hide_calendar_names },
      { key: 'hide_controls', defaultValue: ({ rawConfig }) => rawConfig.hide_controls || DEFAULT_CONFIG_VALUES.hide_controls },
      { key: 'hide_navigation_buttons', defaultValue: ({ rawConfig }) => rawConfig.hide_navigation_buttons || DEFAULT_CONFIG_VALUES.hide_navigation_buttons },
      { key: 'hide_add_event_button', defaultValue: ({ rawConfig }) => rawConfig.hide_add_event_button || DEFAULT_CONFIG_VALUES.hide_add_event_button },
      { key: 'hide_view_selector', defaultValue: ({ rawConfig }) => rawConfig.hide_view_selector || DEFAULT_CONFIG_VALUES.hide_view_selector },
      { key: 'hide_dark_mode_toggle', defaultValue: ({ rawConfig }) => rawConfig.hide_dark_mode_toggle || DEFAULT_CONFIG_VALUES.hide_dark_mode_toggle },
      { key: 'show_dashboard_nav_button', defaultValue: ({ rawConfig }) => rawConfig.show_dashboard_nav_button || DEFAULT_CONFIG_VALUES.show_dashboard_nav_button },
      { key: 'header_dashboard_path', defaultValue: ({ rawConfig }) => normalizeDashboardPath(rawConfig.header_dashboard_path), normalize: ({ rawConfig }) => normalizeDashboardPath(rawConfig.header_dashboard_path) },
      { key: 'header_time_sensor', defaultValue: ({ derived }) => derived.normalizedHeaderTimeSensor, normalize: ({ derived }) => derived.normalizedHeaderTimeSensor },
      { key: 'header_weather_sensor', defaultValue: ({ derived }) => derived.normalizedHeaderWeatherSensor, normalize: ({ derived }) => derived.normalizedHeaderWeatherSensor },
      { key: 'show_daily_weather_forecast', defaultValue: ({ rawConfig }) => rawConfig.show_daily_weather_forecast ?? DEFAULT_CONFIG_VALUES.show_daily_weather_forecast, normalize: ({ rawConfig }) => rawConfig.show_daily_weather_forecast ?? DEFAULT_CONFIG_VALUES.show_daily_weather_forecast },
      { key: 'header_items', defaultValue: ({ derived }) => derived.normalizedHeaderItems, normalize: ({ derived }) => derived.normalizedHeaderItems },
      { key: 'hide_event_calendar_bubble', defaultValue: ({ rawConfig }) => rawConfig.hide_event_calendar_bubble || DEFAULT_CONFIG_VALUES.hide_event_calendar_bubble },
      { key: 'show_event_location', defaultValue: ({ rawConfig }) => rawConfig.show_event_location || DEFAULT_CONFIG_VALUES.show_event_location },
      { key: 'use_short_location', defaultValue: ({ rawConfig }) => rawConfig.use_short_location || DEFAULT_CONFIG_VALUES.use_short_location },
      { key: 'location_links', defaultValue: ({ rawConfig }) => rawConfig.location_links === true ? true : DEFAULT_CONFIG_VALUES.location_links },
      { key: 'event_font_size', defaultValue: ({ rawConfig }) => rawConfig.event_font_size ?? DEFAULT_CONFIG_VALUES.event_font_size },
      { key: 'event_time_font_size', defaultValue: ({ rawConfig }) => rawConfig.event_time_font_size ?? DEFAULT_CONFIG_VALUES.event_time_font_size },
      { key: 'event_location_font_size', defaultValue: ({ rawConfig }) => rawConfig.event_location_font_size ?? DEFAULT_CONFIG_VALUES.event_location_font_size },
      { key: 'event_calendar_friendly_name', defaultValue: ({ rawConfig }) => rawConfig.event_calendar_friendly_name || DEFAULT_CONFIG_VALUES.event_calendar_friendly_name },
      { key: 'event_title_prefix', defaultValue: ({ derived }) => derived.normalizedEventTitlePrefix, normalize: ({ derived }) => derived.normalizedEventTitlePrefix },
      { key: 'event_font_colors', defaultValue: ({ derived }) => derived.normalizedEventFontColors },
      { key: 'event_styles', defaultValue: ({ derived }) => derived.normalizedEventStyles, normalize: ({ derived }) => derived.normalizedEventStyles },
      { key: 'day_styles', defaultValue: ({ derived }) => derived.normalizedDayStyles, normalize: ({ derived }) => derived.normalizedDayStyles },
      { key: 'day_badges', defaultValue: ({ derived }) => derived.normalizedDayBadges, normalize: ({ derived }) => derived.normalizedDayBadges },
      { key: 'day_badge_layout_week', defaultValue: ({ derived }) => derived.normalizedDayBadgeLayoutWeek, normalize: ({ derived }) => derived.normalizedDayBadgeLayoutWeek },
      { key: 'hide_times_for_calendars', defaultValue: ({ rawConfig }) => rawConfig.hide_times_for_calendars || [...DEFAULT_CONFIG_VALUES.hide_times_for_calendars] },
      { key: 'show_current_time_bar', defaultValue: ({ rawConfig }) => rawConfig.show_current_time_bar || DEFAULT_CONFIG_VALUES.show_current_time_bar },
      { key: 'header_color', defaultValue: ({ derived }) => derived.normalizedHeaderColor !== undefined ? derived.normalizedHeaderColor : DEFAULT_CONFIG_VALUES.header_color },
      { key: 'header_text_color', defaultValue: ({ derived }) => derived.normalizedHeaderTextColor },
      { key: 'grid_color', defaultValue: ({ derived }) => derived.normalizedGridColor, normalize: ({ derived }) => derived.normalizedGridColor },
      { key: 'header_background_transparent', defaultValue: ({ derived }) => derived.normalizedHeaderBackgroundOpacity >= DEFAULT_CONFIG_VALUES.background_opacity_transparent_threshold, normalize: ({ derived }) => derived.normalizedHeaderBackgroundOpacity >= DEFAULT_CONFIG_VALUES.background_opacity_transparent_threshold },
      { key: 'header_background_opacity', defaultValue: ({ derived }) => derived.normalizedHeaderBackgroundOpacity, normalize: ({ derived }) => derived.normalizedHeaderBackgroundOpacity },
      { key: 'background_transparent', defaultValue: ({ derived }) => derived.normalizedBackgroundOpacity >= DEFAULT_CONFIG_VALUES.background_opacity_transparent_threshold, normalize: ({ derived }) => derived.normalizedBackgroundOpacity >= DEFAULT_CONFIG_VALUES.background_opacity_transparent_threshold },
      { key: 'background_opacity', defaultValue: ({ derived }) => derived.normalizedBackgroundOpacity, normalize: ({ derived }) => derived.normalizedBackgroundOpacity },
      { key: 'background_image_url', defaultValue: ({ rawConfig }) => rawConfig.background_image_url || DEFAULT_CONFIG_VALUES.background_image_url },
      { key: 'background_image_size', defaultValue: ({ rawConfig }) => rawConfig.background_image_size || DEFAULT_BACKGROUND_IMAGE_SIZE },
      { key: 'background_image_position', defaultValue: ({ rawConfig }) => rawConfig.background_image_position || DEFAULT_BACKGROUND_IMAGE_POSITION },
      { key: 'background_image_repeat', defaultValue: ({ rawConfig }) => rawConfig.background_image_repeat || DEFAULT_BACKGROUND_IMAGE_REPEAT },
      { key: 'combine_calendars', defaultValue: ({ rawConfig }) => rawConfig.combine_calendars ?? DEFAULT_CONFIG_VALUES.combine_calendars },
      { key: 'combine_style', defaultValue: ({ rawConfig }) => normalizeCombineStyle(rawConfig.combine_style ?? DEFAULT_COMBINE_STYLE) },
      { key: 'combine_background', defaultValue: ({ rawConfig }) => normalizeCombineBackground(rawConfig.combine_background ?? DEFAULT_COMBINE_BACKGROUND) },
      { key: 'combine_calendars_width', defaultValue: ({ derived }) => derived.normalizedCombineWidth, normalize: ({ derived }) => derived.normalizedCombineWidth },
      { key: 'event_color_bar_width', defaultValue: ({ derived }) => derived.normalizedEventBarWidth, normalize: ({ derived }) => derived.normalizedEventBarWidth },
      { key: 'event_color_mode', defaultValue: ({ rawConfig }) => normalizeEventColorMode(rawConfig.event_color_mode ?? DEFAULT_EVENT_COLOR_MODE), normalize: ({ rawConfig }) => normalizeEventColorMode(rawConfig.event_color_mode ?? DEFAULT_EVENT_COLOR_MODE) },
      { key: 'event_neutral_background', defaultValue: ({ rawConfig }) => normalizeSingleColor(rawConfig.event_neutral_background) || DEFAULT_EVENT_NEUTRAL_BACKGROUND, normalize: ({ rawConfig }) => normalizeSingleColor(rawConfig.event_neutral_background) || DEFAULT_EVENT_NEUTRAL_BACKGROUND },
      { key: 'event_tint_opacity', defaultValue: ({ rawConfig }) => normalizeBackgroundOpacity(rawConfig.event_tint_opacity, DEFAULT_EVENT_TINT_OPACITY), normalize: ({ rawConfig }) => normalizeBackgroundOpacity(rawConfig.event_tint_opacity, DEFAULT_EVENT_TINT_OPACITY) },
      { key: 'enable_event_management', defaultValue: ({ rawConfig }) => rawConfig.enable_event_management === false ? false : DEFAULT_CONFIG_VALUES.enable_event_management },
      { key: 'event_modal_size', defaultValue: ({ rawConfig }) => normalizeEventModalSize(rawConfig.event_modal_size), normalize: ({ rawConfig }) => normalizeEventModalSize(rawConfig.event_modal_size) },
      { key: 'readonly_calendars', defaultValue: ({ rawConfig }) => rawConfig.readonly_calendars || [...DEFAULT_CONFIG_VALUES.readonly_calendars] },
      { key: 'hide_badge_calendars', defaultValue: ({ rawConfig }) => rawConfig.hide_badge_calendars || [...DEFAULT_CONFIG_VALUES.hide_badge_calendars] },
      { key: 'default_hidden_calendars', defaultValue: ({ derived }) => derived.normalizedDefaultHiddenCalendars, normalize: ({ derived }) => derived.normalizedDefaultHiddenCalendars },
      { key: 'virtual_calendars', defaultValue: ({ rawConfig }) => normalizeVirtualCalendars(rawConfig.virtual_calendars || [...DEFAULT_CONFIG_VALUES.virtual_calendars]) },
      { key: 'language', defaultValue: ({ rawConfig }) => rawConfig.language || DEFAULT_CONFIG_VALUES.language },
      { key: 'locale', defaultValue: ({ rawConfig }) => rawConfig.locale || DEFAULT_CONFIG_VALUES.locale },
      { key: 'color_scheme', defaultValue: ({ rawConfig }) => normalizeDefaultDarkMode(rawConfig.color_scheme), normalize: ({ rawConfig }) => normalizeDefaultDarkMode(rawConfig.color_scheme) },
      { key: 'preference_storage_key', defaultValue: ({ rawConfig }) => rawConfig.preference_storage_key || DEFAULT_CONFIG_VALUES.preference_storage_key }
    ];
}

const EDITOR_DEFAULT_VALUES = Object.freeze({
  week_start_hour: 0,
  week_end_hour: 23,
  lock_schedule_hours: false,
  hide_the_past: false,
  past_event_mode: 'none',
  height_scale: 1,
  event_font_size: 11,
  event_time_font_size: 9,
  event_location_font_size: 9,
  week_compact_weekday_font_size: 12,
  week_compact_day_header_spacing: 12,
  combine_calendars_width: DEFAULT_EVENT_COLOR_BAR_WIDTH,
  event_color_bar_width: DEFAULT_EVENT_COLOR_BAR_WIDTH,
  event_tint_opacity: DEFAULT_EVENT_TINT_OPACITY,
  first_day_of_week: 0,
  header_background_opacity: 0,
  background_opacity: 0
});

const EDITOR_WEEKDAY_OPTIONS = Object.freeze(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);

function getEditorDefaultValue(key) {
  return Object.prototype.hasOwnProperty.call(EDITOR_DEFAULT_VALUES, key) ? EDITOR_DEFAULT_VALUES[key] : 0;
}

function normalizeDefaultViewForEditor(value) {
  if (value === 'week') return 'week-compact';
  if (value === 'schedule') return 'week-standard';
  return value || DEFAULT_VIEW;
}

function getEventCalendarBubbleMode(config = {}) {
  if (config.event_calendar_friendly_name) {
    return 'friendly_name';
  }

  if (config.hide_event_calendar_bubble) {
    return 'none';
  }

  return 'icon';
}

function renderEditorSection({ title, content, disclosureKey, open = false }) {
  const openAttr = open ? 'open' : '';
  return `
      <details class="config-section" data-disclosure-key="${disclosureKey}" ${openAttr}>
        <summary>${title}</summary>
        <div class="section-content">${content}</div>
      </details>
    `;
}

function renderEditorSubSection({ title, content, disclosureKey, open = false }) {
  const openAttr = open ? 'open' : '';
  return `
      <details class="config-subsection" data-disclosure-key="${disclosureKey}" ${openAttr}>
        <summary>${title}</summary>
        <div class="subsection-content">${content}</div>
      </details>
    `;
}

function renderEditorColorInputControl({ id, field, mapKey = null, value, toColorInputValue }) {
  const colorValue = toColorInputValue(value);
  const triggerAttributes = mapKey
    ? `data-color-trigger="true" data-color-field="${field}" data-color-map-key="${mapKey}"`
    : `data-color-trigger="true" data-color-field="${field}"`;

  return `
      <div class="color-picker-wrap">
        <button id="${id}" class="selected-color-swatch" data-color-field="${field}" ${mapKey ? `data-color-map-key="${mapKey}"` : ''} ${triggerAttributes} style="--selected-color: ${colorValue};" title="Choose color" type="button"></button>
      </div>
    `;
}

function renderEditorWeekdayCheckboxes({ selectedWeekdays }) {
  const days = EDITOR_WEEKDAY_OPTIONS;

  return `
      <div class="weekday-grid" role="group" aria-label="Week days">
        ${days.map((day) => `<span class="weekday-label">${day}</span>`).join('')}
        ${days.map((_, index) => `
          <label class="weekday-checkbox-wrap" aria-label="${days[index]}">
            <input type="checkbox" data-weekday="${index}" ${selectedWeekdays.has(index) ? 'checked' : ''}>
          </label>
        `).join('')}
      </div>
    `;
}

function normalizeWeatherTemperature(value) {
  const numericValue = Number(value);
  if (!Number.isFinite(numericValue)) return null;
  return `${Math.round(numericValue)}°`;
}

function mapWeatherConditionToIcon(conditionValue) {
  const condition = String(conditionValue || '').trim().toLowerCase().replace(/_/g, '-');
  if (!condition || condition === 'unknown' || condition === 'unavailable') return '';

  const iconMap = {
    sunny: 'mdi:weather-sunny',
    clear: 'mdi:weather-sunny',
    'clear-night': 'mdi:weather-night',
    partlycloudy: 'mdi:weather-partly-cloudy',
    cloudy: 'mdi:weather-cloudy',
    overcast: 'mdi:weather-cloudy',
    rainy: 'mdi:weather-rainy',
    pouring: 'mdi:weather-pouring',
    snow: 'mdi:weather-snowy',
    snowy: 'mdi:weather-snowy',
    'snowy-rainy': 'mdi:weather-snowy-rainy',
    hail: 'mdi:weather-hail',
    lightning: 'mdi:weather-lightning',
    'lightning-rainy': 'mdi:weather-lightning-rainy',
    windy: 'mdi:weather-windy',
    'windy-variant': 'mdi:weather-windy-variant',
    fog: 'mdi:weather-fog',
    exceptional: 'mdi:alert-circle-outline'
  };

  return iconMap[condition] || '';
}

function normalizeHeaderWeatherData(weatherEntity) {
  if (!weatherEntity) return null;

  const attrs = weatherEntity.attributes || {};
  const condition = attrs.condition || weatherEntity.state;
  const conditionIcon = mapWeatherConditionToIcon(condition);
  const temperature = normalizeWeatherTemperature(
    attrs.temperature ?? attrs.current_temperature ?? attrs.temp ?? weatherEntity.state
  );

  if (!conditionIcon || !temperature) return null;
  return { conditionIcon, temperature };
}

function normalizeForecastForDate(forecasts, date, getDateKey) {
  if (!Array.isArray(forecasts) || forecasts.length === 0) return null;

  const targetDateKey = getDateKey(date);
  const match = forecasts.find((item) => {
    const forecastDateValue = item?.datetime || item?.date;
    if (!forecastDateValue) return false;
    const forecastDate = new Date(forecastDateValue);
    if (Number.isNaN(forecastDate.getTime())) return false;
    return getDateKey(forecastDate) === targetDateKey;
  });

  if (!match) return null;

  const highTemp = normalizeWeatherTemperature(match.temperature ?? match.temphigh ?? match.high);
  const lowTemp = normalizeWeatherTemperature(match.templow ?? match.low ?? match.temperature_low);
  const conditionIcon = mapWeatherConditionToIcon(match.condition);

  if (!conditionIcon || !highTemp) return null;
  return { conditionIcon, highTemp, lowTemp };
}

function getWeatherEntityForecast(weatherEntity, wsForecast) {
  return Array.isArray(wsForecast) && wsForecast.length > 0
    ? wsForecast
    : weatherEntity?.attributes?.forecast;
}

function getHeaderWeatherEntityRenderSignature(entityState) {
  if (!entityState) return '';
  const attrs = entityState.attributes || {};
  return JSON.stringify({
    state: entityState.state,
    temperature: attrs.temperature ?? attrs.current_temperature ?? attrs.temp ?? null,
    condition: attrs.condition ?? null,
    friendly_name: attrs.friendly_name ?? null,
    entity_picture: attrs.entity_picture ?? null,
    forecast: Array.isArray(attrs.forecast)
      ? attrs.forecast.map((forecastItem) => ({
        datetime: forecastItem?.datetime ?? forecastItem?.date ?? null,
        condition: forecastItem?.condition ?? null,
        high: forecastItem?.temperature ?? forecastItem?.temphigh ?? forecastItem?.high ?? null,
        low: forecastItem?.templow ?? forecastItem?.low ?? forecastItem?.temperature_low ?? null
      }))
      : null
  });
}

function getEntityState(hass, entityId) {
  if (!hass || !entityId) return null;
  return hass.states?.[entityId] || null;
}

function getEntityFriendlyName(hass, entityId, fallback = entityId) {
  const friendlyName = getEntityState(hass, entityId)?.attributes?.friendly_name;
  return friendlyName || fallback;
}

function getEntityIcon(hass, entityId, fallback = null) {
  const icon = getEntityState(hass, entityId)?.attributes?.icon;
  return typeof icon === 'string' && icon.trim() ? icon.trim() : fallback;
}

function getEntityPicture(hass, entityId, fallback = null) {
  const picture = getEntityState(hass, entityId)?.attributes?.entity_picture;
  return typeof picture === 'string' && picture.trim() ? picture.trim() : fallback;
}

function resolveEntityPictureUrl(hass, picture, fallback = null) {
  if (typeof picture !== 'string' || !picture.trim()) return fallback;
  const trimmedPicture = picture.trim();
  if (trimmedPicture.startsWith('/') && typeof hass?.hassUrl === 'function') {
    return hass.hassUrl(trimmedPicture);
  }
  return trimmedPicture;
}

function getEntityPictureUrl(hass, entityId, fallback = null) {
  return resolveEntityPictureUrl(hass, getEntityPicture(hass, entityId), fallback);
}

function getSensorDisplayValue(hass, entityId, fallback = '') {
  const state = getEntityState(hass, entityId)?.state;
  if (state === undefined || state === null || state === 'unknown' || state === 'unavailable') return fallback;
  const displayState = String(state).trim();
  return displayState || fallback;
}

function getFormattedHeaderSensorTime(hass, entityId, parseTimeValue, formatTime, fallback = '') {
  const sensorState = getSensorDisplayValue(hass, entityId, null);
  if (!sensorState || typeof parseTimeValue !== 'function' || typeof formatTime !== 'function') return fallback;
  const parsed = parseTimeValue(sensorState);
  return parsed ? formatTime(parsed) : fallback;
}

function getHeaderWeatherDisplayData(hass, entityId) {
  return normalizeHeaderWeatherData(getEntityState(hass, entityId));
}

function getHeaderEntityRenderSignatureFromState(entityState) {
  return getHeaderWeatherEntityRenderSignature(entityState);
}

function getHeaderEntityRenderSignature(hass, entityId) {
  return getHeaderEntityRenderSignatureFromState(getEntityState(hass, entityId));
}

function getPersonStateLabel(personState) {
  if (!personState || !personState.state || ['unknown', 'unavailable'].includes(personState.state)) {
    return '';
  }

  if (personState.state === 'home') return 'Home';
  if (personState.state === 'not_home') return 'Away';

  return String(personState.state)
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function getPersonEntityPictureUrl(hass, personState) {
  return resolveEntityPictureUrl(hass, personState?.attributes?.entity_picture, null);
}

function getEntityRenderSignature(hass, entityIds = []) {
  return JSON.stringify(entityIds.map((entityId) => {
    const entityState = getEntityState(hass, entityId);
    return {
      entityId,
      state: entityState?.state ?? null,
      picture: entityState?.attributes?.entity_picture ?? null,
      friendlyName: entityState?.attributes?.friendly_name ?? null
    };
  }));
}

const DAYLIGHT_CALENDAR_CARD_VERSION = 'v4.10.0';

function getDaylightCalendarCardVersion() {
  return DAYLIGHT_CALENDAR_CARD_VERSION.includes('__')
    ? 'dev'
    : DAYLIGHT_CALENDAR_CARD_VERSION;
}

async function fetchEventsByCalendarInRange({
  hass,
  entities = [],
  startDate,
  endDate,
  getDateRangeChunks,
  formatLocalDate,
  getCalendarColor,
  getEventIdentityKey,
  normalizeCalendarEvent
}) {
  const chunks = getDateRangeChunks(startDate, endDate, 30);
  const fetchedRange = chunks.length > 0
    ? { startDate: chunks[0].startDate, endDate: chunks[chunks.length - 1].endDate }
    : { startDate, endDate };
  const calendarResults = await Promise.all(
    entities.map((entityId, index) => fetchEventsForCalendar({
      hass,
      entityId,
      colorIndex: index,
      chunks,
      formatLocalDate,
      getCalendarColor,
      getEventIdentityKey,
      normalizeCalendarEvent,
      fetchedRange
    }))
  );

  return entities.reduce((acc, entityId, index) => {
    acc[entityId] = calendarResults[index] || { success: false, events: [] };
    return acc;
  }, {});
}

async function fetchEventsForCalendar({
  hass,
  entityId,
  colorIndex = 0,
  chunks = [],
  formatLocalDate,
  getCalendarColor,
  getEventIdentityKey,
  normalizeCalendarEvent,
  fetchedRange = null
}) {
  const mergedRawEventsByKey = new Map();
  const color = getCalendarColor(entityId, colorIndex);

  const chunkResults = await Promise.all(
    chunks.map(chunk => fetchEventsForChunk({ hass, entityId, chunk, formatLocalDate }))
  );

  const failedChunks = chunkResults.filter(result => !result?.success);
  if (failedChunks.length > 0) {
    return { success: false, events: [], failedChunks, fetchedRange };
  }

  chunkResults.forEach(result => {
    const events = Array.isArray(result?.events) ? result.events : [];

    events.forEach(event => {
      const key = getEventIdentityKey(entityId, event);
      mergedRawEventsByKey.set(key, event);
    });
  });

  return {
    success: true,
    events: Array.from(mergedRawEventsByKey.values()).map(event => normalizeCalendarEvent(event, { entityId, color })),
    fetchedRange
  };
}

async function fetchEventsForChunk({ hass, entityId, chunk, formatLocalDate }) {
  const chunkStartStr = chunk.startDate.toISOString();
  const chunkEndStr = chunk.endDate.toISOString();

  try {
    const events = await fetchEventsViaWebSocket({ hass, entityId, chunkStartStr, chunkEndStr });
    if (!Array.isArray(events)) throw new Error('Calendar WebSocket response was not an array');
    return { success: true, events };
  } catch (error) {
    try {
      const events = await hass.callApi('GET', `calendars/${entityId}?start=${encodeURIComponent(chunkStartStr)}&end=${encodeURIComponent(chunkEndStr)}`);
      if (!Array.isArray(events)) throw new Error('Calendar REST response was not an array');
      return { success: true, events };
    } catch (error2) {
      console.error(`Failed to fetch events for ${entityId}:`, error2.message || error2);
      return { success: false, events: [], error: error2 };
    }
  }
}

async function fetchEventsViaWebSocket({ hass, entityId, chunkStartStr, chunkEndStr }) {
  return hass.callWS({
    type: 'calendar/events',
    entity_id: entityId,
    start_date_time: chunkStartStr,
    end_date_time: chunkEndStr
  });
}

function mergeEvents(existingEvents, incomingEvents, { getEventIdentityKey, getEventStartDate }) {
  const mergedByKey = new Map();

  existingEvents.forEach(event => {
    mergedByKey.set(getEventIdentityKey(event.entityId, event), event);
  });

  incomingEvents.forEach(event => {
    mergedByKey.set(getEventIdentityKey(event.entityId, event), event);
  });

  return sortEventsByStartDate(Array.from(mergedByKey.values()), { getEventStartDate });
}

function sortEventsByStartDate(events, { getEventStartDate }) {
  return [...events].sort((a, b) => getEventStartDate(a) - getEventStartDate(b));
}

function toStableString(value) {
  if (Array.isArray(value)) {
    return `[${value.map(item => toStableString(item)).join(',')}]`;
  }

  if (value && typeof value === 'object') {
    const entries = Object.keys(value)
      .sort()
      .map(key => `${JSON.stringify(key)}:${toStableString(value[key])}`);
    return `{${entries.join(',')}}`;
  }

  return JSON.stringify(value);
}

function getCalendarDataSignature(events = []) {
  return events
    .map(event => {
      const { entityId, color, ...eventData } = event;
      return toStableString(eventData);
    })
    .sort()
    .join('|');
}

function isDateRangeCoveredByLoadedEvents(loadedEventRange, targetStartDate, targetEndDate) {
  if (!loadedEventRange) return false;

  return targetStartDate >= loadedEventRange.startDate &&
         targetEndDate <= loadedEventRange.endDate;
}

function shouldRefreshEvents({ lastFetch, now = Date.now(), maxAge = 60000 } = {}) {
  return !lastFetch || (now - lastFetch > maxAge);
}

const EVENT_CACHE_SCHEMA_VERSION = 2;
const DB_NAME = 'daylight-calendar-card-events';
const DB_VERSION = 1;
const STORE_NAME = 'eventSnapshots';
const MAX_CACHE_ENTRIES = 12;
let eventCacheMutationQueue = Promise.resolve();
let eventCacheMutationEpoch = 0;

function getEventCacheMutationEpoch() {
  return eventCacheMutationEpoch;
}

function beginEventCacheFlush() {
  eventCacheMutationEpoch += 1;
  return eventCacheMutationEpoch;
}

const queueEventCacheMutation = (callback) => {
  const run = eventCacheMutationQueue.then(callback, callback);
  eventCacheMutationQueue = run.catch(() => {});
  return run;
};

const openEventCacheDb = () => new Promise((resolve, reject) => {
  const indexedDBRef = globalThis.indexedDB;
  if (!indexedDBRef) {
    resolve(null);
    return;
  }
  const request = indexedDBRef.open(DB_NAME, DB_VERSION);
  request.onupgradeneeded = () => {
    const db = request.result;
    if (!db.objectStoreNames.contains(STORE_NAME)) {
      db.createObjectStore(STORE_NAME, { keyPath: 'key' });
    }
  };
  request.onsuccess = () => resolve(request.result);
  request.onerror = () => reject(request.error || new Error('Unable to open event cache'));
});

const transact = async (mode, callback) => {
  const db = await openEventCacheDb();
  if (!db) return { available: false, value: null };
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, mode);
    const store = tx.objectStore(STORE_NAME);
    let callbackResult;
    tx.oncomplete = () => {
      db.close?.();
      resolve({ available: true, value: callbackResult });
    };
    tx.onerror = () => {
      db.close?.();
      reject(tx.error || new Error('Event cache transaction failed'));
    };
    tx.onabort = tx.onerror;
    callbackResult = callback(store, (value) => { callbackResult = value; });
  });
};

function buildEventCacheConfigSignature({ entities = [], timeZone = null, colors = {}, userScope = null } = {}) {
  return toStableString({ entities, timeZone: timeZone || null, colors: colors || {}, userScope: userScope || null });
}

function buildEventCacheKey(configSignature) {
  return `events:${configSignature}`;
}

function normalizeEventCacheSnapshot(snapshot, { configSignature } = {}) {
  if (!snapshot || typeof snapshot !== 'object') return null;
  if (snapshot.schemaVersion !== EVENT_CACHE_SCHEMA_VERSION) return null;
  if (configSignature && snapshot.configSignature !== configSignature) return null;
  if (!snapshot.coveredRange || !snapshot.coveredRange.start || !snapshot.coveredRange.end) return null;
  const coveredStart = new Date(snapshot.coveredRange.start);
  const coveredEnd = new Date(snapshot.coveredRange.end);
  if (!Number.isFinite(coveredStart.getTime()) || !Number.isFinite(coveredEnd.getTime()) || coveredStart > coveredEnd) return null;
  if (!Number.isFinite(snapshot.lastSuccessfulRefresh)) return null;
  if (!snapshot.eventsByCalendar || typeof snapshot.eventsByCalendar !== 'object') return null;

  const getSupportedEventDateValue = (value) => {
    if (typeof value === 'string') return { kind: 'string', value };
    if (!value || typeof value !== 'object' || value instanceof Date) return null;
    if (typeof value.dateTime === 'string' && value.date === undefined) return { kind: 'dateTime', value: value.dateTime };
    if (typeof value.date === 'string' && value.dateTime === undefined) return { kind: 'date', value: value.date };
    return null;
  };
  const isValidCachedEvent = (event, entityId) => {
    if (!event || typeof event !== 'object') return false;
    if (event.entityId !== entityId) return false;
    const startValue = getSupportedEventDateValue(event.start);
    const endValue = getSupportedEventDateValue(event.end);
    if (!startValue || !endValue || startValue.kind !== endValue.kind) return false;
    const start = new Date(startValue.value);
    const end = new Date(endValue.value);
    return Number.isFinite(start.getTime()) && Number.isFinite(end.getTime()) && end >= start;
  };
  const eventsByCalendar = {};
  Object.entries(snapshot.eventsByCalendar).forEach(([entityId, events]) => {
    if (!Array.isArray(events)) return;
    if (events.length === 0) {
      eventsByCalendar[entityId] = [];
      return;
    }
    if (!events.every(event => isValidCachedEvent(event, entityId))) return;
    eventsByCalendar[entityId] = events;
  });

  return {
    schemaVersion: EVENT_CACHE_SCHEMA_VERSION,
    key: snapshot.key || buildEventCacheKey(snapshot.configSignature),
    updatedAt: Number(snapshot.updatedAt) || snapshot.lastSuccessfulRefresh,
    lastSuccessfulRefresh: snapshot.lastSuccessfulRefresh,
    coveredRange: {
      start: coveredStart.toISOString(),
      end: coveredEnd.toISOString()
    },
    configSignature: snapshot.configSignature,
    eventsByCalendar,
    perCalendarMetadata: snapshot.perCalendarMetadata && typeof snapshot.perCalendarMetadata === 'object' ? snapshot.perCalendarMetadata : {}
  };
}

function createEventCacheSnapshot({ configSignature, startDate, endDate, eventsByCalendar, lastSuccessfulRefresh = Date.now(), perCalendarMetadata = {} }) {
  return normalizeEventCacheSnapshot({
    schemaVersion: EVENT_CACHE_SCHEMA_VERSION,
    key: buildEventCacheKey(configSignature),
    updatedAt: Date.now(),
    lastSuccessfulRefresh,
    coveredRange: {
      start: startDate instanceof Date ? startDate.toISOString() : startDate,
      end: endDate instanceof Date ? endDate.toISOString() : endDate
    },
    configSignature,
    eventsByCalendar,
    perCalendarMetadata
  }, { configSignature });
}

async function readEventCacheSnapshot(configSignature) {
  try {
    const key = buildEventCacheKey(configSignature);
    const result = await transact('readonly', (store, setResult) => {
      const request = store.get(key);
      request.onsuccess = () => setResult(request.result || null);
    });
    if (!result.available) return { available: false, snapshot: null };
    return { available: true, snapshot: normalizeEventCacheSnapshot(result.value, { configSignature }) };
  } catch (error) {
    console.warn('Failed to read Daylight event cache:', error);
    return { available: false, snapshot: null, error };
  }
}

async function writeEventCacheSnapshot(snapshot, { epoch = getEventCacheMutationEpoch() } = {}) {
  const normalized = normalizeEventCacheSnapshot(snapshot, { configSignature: snapshot?.configSignature });
  if (!normalized) return false;
  return queueEventCacheMutation(async () => {
    if (epoch !== eventCacheMutationEpoch) return false;
    try {
      const result = await transact('readwrite', (store) => {
        store.put(normalized);
        const getAllRequest = store.getAll();
        getAllRequest.onsuccess = () => {
          const entries = (getAllRequest.result || [])
            .filter((entry) => entry?.key && String(entry.key).startsWith('events:'))
            .sort((a, b) => (Number(b.updatedAt) || 0) - (Number(a.updatedAt) || 0));
          entries.slice(MAX_CACHE_ENTRIES).forEach((entry) => store.delete(entry.key));
        };
      });
      return epoch === eventCacheMutationEpoch && !!result.available;
    } catch (error) {
      console.warn('Failed to write Daylight event cache:', error);
      return false;
    }
  });
}

async function clearAllEventCacheSnapshots({ epoch = beginEventCacheFlush() } = {}) {
  return queueEventCacheMutation(async () => {
    if (epoch !== eventCacheMutationEpoch) return false;
    try {
      const result = await transact('readwrite', (store) => {
        const getAllKeysRequest = store.getAllKeys();
        getAllKeysRequest.onsuccess = () => {
          (getAllKeysRequest.result || [])
            .filter((key) => String(key).startsWith('events:'))
            .forEach((key) => store.delete(key));
        };
      });
      return epoch === eventCacheMutationEpoch && !!result.available;
    } catch (error) {
      console.warn('Failed to clear Daylight event cache:', error);
      return false;
    }
  });
}

function normalizeDashboardPath(pathValue) {
  if (typeof pathValue !== 'string') return null;
  const trimmedPath = pathValue.trim();
  if (!trimmedPath) return null;
  return trimmedPath.startsWith('/') ? trimmedPath : `/${trimmedPath}`;
}

function normalizeEnumValue(value, { aliases = {}, allowed = [], fallback }) {
  const normalizedValue = String(value ?? '').trim().toLowerCase();
  const mappedValue = aliases[normalizedValue] ?? normalizedValue;
  return allowed.includes(mappedValue) ? mappedValue : fallback;
}

function normalizeEntityStringMap(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return {};
  }

  return Object.entries(value).reduce((acc, [key, mappedValue]) => {
    const normalizedKey = typeof key === 'string' ? key.trim() : '';
    const normalizedValue = typeof mappedValue === 'string' ? mappedValue.trim() : '';
    if (normalizedKey && normalizedValue) {
      acc[normalizedKey] = normalizedValue;
    }
    return acc;
  }, {});
}

function normalizeBooleanStyleValue(value) {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') {
    const normalizedValue = value.trim().toLowerCase();
    if (normalizedValue === 'true') return true;
    if (normalizedValue === 'false') return false;
  }
  return null;
}

const STALE_RESOURCE_WARNING_STORAGE_KEY = 'daylight-calendar-card:stale-resource-warning-dismissed';
const STALE_RESOURCE_TROUBLESHOOTING_URL = 'https://docs.daylightcalendar.com/troubleshooting#updated-to-the-latest-version-but-still-seeing-old-behavior';

const STALE_RESOURCE_SEGMENT = '/skylight-calendar-card/';
const CURRENT_HACS_RESOURCE_PATH = '/hacsfiles/daylight-calendar-card/skylight-calendar-card.js';

const normalizeResourceUrl = (value) => {
  if (typeof value !== 'string') return '';
  return value.trim();
};

const isStaleResourceUrl = (url) => {
  const normalized = normalizeResourceUrl(url).toLowerCase();
  if (!normalized) return false;
  return normalized.includes(STALE_RESOURCE_SEGMENT) && !normalized.includes(CURRENT_HACS_RESOURCE_PATH);
};

const collectResourceUrls = (documentLike) => {
  const urls = [];
  if (!documentLike) return urls;

  const addUrl = (value) => {
    const normalized = normalizeResourceUrl(value);
    if (normalized) urls.push(normalized);
  };

  try {
    for (const script of Array.from(documentLike.scripts || [])) {
      addUrl(script?.src);
    }
  } catch (_error) {
    // Ignore unavailable document APIs.
  }

  try {
    for (const link of Array.from(documentLike.querySelectorAll?.('link[href]') || [])) {
      addUrl(link?.href);
    }
  } catch (_error) {
    // Ignore unavailable document APIs.
  }

  return urls;
};

const detectStaleSkylightResource = (documentLike = globalThis.document) => {
  const urls = collectResourceUrls(documentLike);
  const staleUrl = urls.find(isStaleResourceUrl) || null;
  return {
    detected: !!staleUrl,
    staleUrl,
    urls
  };
};

const DEFAULT_COLOR_PICKER_PRESETS = ['#ffffff', '#ff0000', '#ffff00', '#00ff00', '#000000', '#00ffff', '#0000ff', '#ff00ff'];

function normalizePickerHexColor(value, fallback = null) {
  const raw = String(value || '').trim();
  if (!raw) return fallback;
  const withHash = raw.startsWith('#') ? raw : `#${raw}`;
  const short = withHash.match(/^#([0-9a-fA-F]{3})$/);
  if (short) {
    const [r, g, b] = short[1].split('');
    return `#${r}${r}${g}${g}${b}${b}`.toLowerCase();
  }
  return /^#[0-9a-fA-F]{6}$/.test(withHash) ? withHash.toLowerCase() : fallback;
}

function hexToHsv(hex) {
  const normalizedHex = normalizePickerHexColor(hex, '#3f51b5').replace('#', '');
  const r = parseInt(normalizedHex.slice(0, 2), 16) / 255;
  const g = parseInt(normalizedHex.slice(2, 4), 16) / 255;
  const b = parseInt(normalizedHex.slice(4, 6), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  let h = 0;
  if (delta !== 0) {
    if (max === r) h = ((g - b) / delta) % 6;
    else if (max === g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;
    h = Math.round(h * 60);
    if (h < 0) h += 360;
  }
  return { h, s: max === 0 ? 0 : delta / max, v: max };
}

function hsvToHex(h, s, v) {
  const hue = ((h % 360) + 360) % 360;
  const sat = Math.max(0, Math.min(1, s));
  const val = Math.max(0, Math.min(1, v));
  const c = val * sat;
  const x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
  const m = val - c;
  let r = 0;
  let g = 0;
  let b = 0;
  if (hue < 60) [r, g, b] = [c, x, 0];
  else if (hue < 120) [r, g, b] = [x, c, 0];
  else if (hue < 180) [r, g, b] = [0, c, x];
  else if (hue < 240) [r, g, b] = [0, x, c];
  else if (hue < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  const toHex = (n) => Math.round((n + m) * 255).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

class DaylightColorPicker extends HTMLElement {
  static get observedAttributes() { return ['value', 'title', 'confirm-label', 'cancel-label', 'show-actions']; }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._value = '#3f51b5';
    this._h = 0;
    this._s = 1;
    this._v = 1;
    this._presets = DEFAULT_COLOR_PICKER_PRESETS;
    this._dragging = false;
  }
  connectedCallback() { this.value = this.getAttribute('value') || this._value; this.render(); }
  attributeChangedCallback(name, oldValue, newValue) { if (oldValue !== newValue) { if (name === 'value') this.value = newValue; if (this.isConnected) this.render(); } }
  get value() { return this._value; }
  set value(nextValue) { const normalized = normalizePickerHexColor(nextValue, this._value || '#3f51b5'); const hsv = hexToHsv(normalized); this._value = normalized; this._h = hsv.h; this._s = hsv.s; this._v = hsv.v; this.syncUi(); }
  get presets() { return this._presets; }
  set presets(values) { this._presets = Array.isArray(values) && values.length ? values.map((color) => normalizePickerHexColor(color)).filter(Boolean) : DEFAULT_COLOR_PICKER_PRESETS; if (this.isConnected) this.render(); }
  get showActions() { return this.getAttribute('show-actions') !== 'false'; }
  setColorFromHsv(h, s, v, { emit = true } = {}) { this._h = h; this._s = Math.max(0, Math.min(1, s)); this._v = Math.max(0.05, Math.min(1, v)); this._value = hsvToHex(this._h, this._s, this._v); this.syncUi(); if (emit) this.emitColorChange(); }
  setColorFromHex(value, { emit = true } = {}) { const normalized = normalizePickerHexColor(value); if (!normalized) return false; const hsv = hexToHsv(normalized); this._value = normalized; this._h = hsv.h; this._s = hsv.s; this._v = hsv.v; this.syncUi(); if (emit) this.emitColorChange(); return true; }
  emitColorChange() { this.dispatchEvent(new CustomEvent('color-change', { detail: { color: this._value }, bubbles: true, composed: true })); }
  syncUi() {
    const root = this.shadowRoot; if (!root) return;
    const marker = root.querySelector('.color-picker-wheel-marker');
    const brightnessInput = root.querySelector('#color-picker-brightness');
    const hexInput = root.querySelector('#color-picker-hex');
    const preview = root.querySelector('.color-picker-preview');
    const valueText = root.querySelector('.color-picker-value');
    if (marker) { const angle = ((this._h - 90) * Math.PI) / 180; marker.style.left = `${50 + Math.cos(angle) * this._s * 50}%`; marker.style.top = `${50 + Math.sin(angle) * this._s * 50}%`; }
    if (brightnessInput) brightnessInput.value = String(Math.round(this._v * 100));
    if (hexInput && root.activeElement !== hexInput) hexInput.value = this._value;
    if (preview) preview.style.background = this._value;
    if (valueText) valueText.textContent = this._value;
  }
  updateFromWheelEvent(event) { const wheel = event.currentTarget; const rect = wheel.getBoundingClientRect(); const x = event.clientX - rect.left - rect.width / 2; const y = event.clientY - rect.top - rect.height / 2; const radius = rect.width / 2; const distance = Math.min(Math.sqrt(x * x + y * y), radius); const saturation = radius > 0 ? distance / radius : 0; const hue = (Math.atan2(y, x) * 180) / Math.PI + 90; this.setColorFromHsv(hue < 0 ? hue + 360 : hue, saturation, this._v); }
  bindEvents() {
    const root = this.shadowRoot;
    const wheel = root.querySelector('#color-picker-wheel');
    if (wheel) { wheel.addEventListener('pointerdown', (event) => { this._dragging = true; wheel.setPointerCapture?.(event.pointerId); this.updateFromWheelEvent(event); }); wheel.addEventListener('pointermove', (event) => { if (this._dragging) this.updateFromWheelEvent(event); }); const stopDragging = () => { this._dragging = false; }; wheel.addEventListener('pointerup', stopDragging); wheel.addEventListener('pointercancel', stopDragging); wheel.addEventListener('pointerleave', stopDragging); }
    root.querySelectorAll('[data-color-preset]').forEach((preset) => preset.addEventListener('click', () => this.setColorFromHex(preset.dataset.colorPreset)));
    root.querySelector('#color-picker-brightness')?.addEventListener('input', (event) => this.setColorFromHsv(this._h, this._s, Number(event.target.value) / 100));
    const hexInput = root.querySelector('#color-picker-hex');
    if (hexInput) { const syncHex = () => this.setColorFromHex(hexInput.value); hexInput.addEventListener('input', syncHex); hexInput.addEventListener('change', syncHex); }
    root.querySelector('[data-color-cancel]')?.addEventListener('click', () => this.dispatchEvent(new CustomEvent('color-cancel', { detail: { color: this._value }, bubbles: true, composed: true })));
    root.querySelector('[data-color-confirm]')?.addEventListener('click', () => this.dispatchEvent(new CustomEvent('color-confirm', { detail: { color: this._value }, bubbles: true, composed: true })));
  }
  render() {
    if (!this.shadowRoot) return;
    const title = this.getAttribute('title') || 'Select color'; const confirmLabel = this.getAttribute('confirm-label') || 'Set'; const cancelLabel = this.getAttribute('cancel-label') || 'Cancel';
    this.shadowRoot.innerHTML = `<style>:host{display:block;color:var(--primary-text-color)}.color-picker-modal{display:grid;gap:12px}.color-picker-title{font-size:1.8rem;font-weight:600}.color-picker-wheel{position:relative;width:min(260px,calc(100vw - 64px));max-width:100%;aspect-ratio:1;border-radius:50%;margin:0 auto;touch-action:none;background:radial-gradient(circle at center,#ffffff 0%,rgba(255,255,255,.85) 16%,rgba(255,255,255,0) 58%),conic-gradient(from 0deg,#ff0000,#ff7f00,#ffff00,#00ff00,#00ffff,#0000ff,#8b00ff,#ff00ff,#ff0000)}.color-picker-wheel-marker{position:absolute;width:16px;height:16px;border-radius:50%;border:2px solid white;box-shadow:0 0 0 1px rgba(0,0,0,.5);transform:translate(-50%,-50%);pointer-events:none}.color-picker-controls{display:grid;gap:6px}.color-picker-controls input[type="text"]{padding:8px;border:1px solid var(--divider-color);border-radius:6px;font:inherit;color:var(--primary-text-color);background:var(--card-background-color);min-width:0}.color-picker-presets{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.color-preset{width:100%;aspect-ratio:1;border-radius:50%;border:2px solid rgba(0,0,0,.08);cursor:pointer;min-height:36px}.color-picker-selected-row{display:flex;align-items:center;gap:10px;flex-wrap:wrap}.color-picker-preview{width:24px;height:24px;border-radius:4px;border:1px solid var(--divider-color)}.color-picker-value{font-family:monospace}.color-picker-actions{display:flex;justify-content:flex-end;gap:10px}.color-picker-actions button{border:1px solid var(--divider-color);background:var(--card-background-color);border-radius:6px;padding:8px 12px;cursor:pointer;color:var(--primary-text-color)}.color-picker-actions button.primary{background:var(--primary-color);color:white;border-color:transparent}</style><div class="color-picker-modal" role="group" aria-label="${title}"><div class="color-picker-title">${title}</div><div class="color-picker-wheel" id="color-picker-wheel"><div class="color-picker-wheel-marker"></div></div><div class="color-picker-controls"><label for="color-picker-brightness">Color brightness</label><input id="color-picker-brightness" type="range" min="5" max="100" step="1"></div><div class="color-picker-controls"><label for="color-picker-hex">Hex color</label><input id="color-picker-hex" type="text" placeholder="#3f51b5"></div><div class="color-picker-presets">${this._presets.map((color) => `<button type="button" class="color-preset" data-color-preset="${color}" style="background:${color}"></button>`).join('')}</div><div class="color-picker-selected-row"><span>Chosen color</span><span class="color-picker-preview"></span><span class="color-picker-value"></span></div>${this.showActions ? `<div class="color-picker-actions"><button type="button" data-color-cancel>${cancelLabel}</button><button type="button" class="primary" data-color-confirm>${confirmLabel}</button></div>` : ''}</div>`;
    this.bindEvents(); this.syncUi();
  }
}

if (!customElements.get('daylight-color-picker')) customElements.define('daylight-color-picker', DaylightColorPicker);

function normalizeDefaultDarkMode(value) {
  if (value === true) return 'dark';
  if (value === false || value === undefined || value === null || value === '') return DEFAULT_THEME_MODE;

  return normalizeEnumValue(value, {
    allowed: THEME_MODE_OPTIONS,
    fallback: DEFAULT_THEME_MODE
  });
}

function normalizePastEventMode$1(value) {
  return normalizeEnumValue(value, {
    allowed: PAST_EVENT_MODE_OPTIONS,
    fallback: DEFAULT_PAST_EVENT_MODE
  });
}

function normalizeDayBadgeLayoutWeek$1(value) {
  return normalizeEnumValue(value, {
    allowed: DAY_BADGE_LAYOUT_WEEK_OPTIONS,
    fallback: DEFAULT_DAY_BADGE_LAYOUT_WEEK
  });
}

function normalizeEventModalSize$1(value) {
  const normalized = String(value || '').trim().toLowerCase();
  return EVENT_MODAL_SIZE_OPTIONS.includes(normalized) ? normalized : DEFAULT_EVENT_MODAL_SIZE;
}

function getDefaultColor(index) {
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2'];
  return colors[index % colors.length];
}

class SkylightCalendarCardEditor extends HTMLElement {
  constructor() {
    super();
    this._config = createDefaultStubConfig();
    this._hass = null;
    this._rendered = false;
    this._eventCacheFlushStatus = '';
    this._lastCalendarEntitiesKey = '';
    this._colorPickerState = { field: null, mapKey: null, color: '#3f51b5' };
    this._combineBackgroundMode = DEFAULT_COMBINE_BACKGROUND;
    this._combineBackgroundHexDraft = '';
    this._openDisclosureKeys = new Set();
    this._dashboardOptions = [];
  }

  normalizeHexColor(colorValue) {
    const normalizedColor = String(colorValue || '').trim();
    if (!normalizedColor) return null;

    const hex3Match = normalizedColor.match(/^#([\da-fA-F]{3})$/);
    if (hex3Match) {
      const [r, g, b] = hex3Match[1].split('');
      return `#${r}${r}${g}${g}${b}${b}`.toUpperCase();
    }

    const hex6Match = normalizedColor.match(/^#([\da-fA-F]{6})$/);
    if (hex6Match) {
      return `#${hex6Match[1].toUpperCase()}`;
    }

    return null;
  }

  normalizeBackgroundOpacity(opacityValue, fallback = 0) {
    const numericOpacity = Number(opacityValue);
    if (!Number.isFinite(numericOpacity)) {
      return fallback;
    }

    return Math.min(100, Math.max(0, numericOpacity));
  }

  syncCombineBackgroundEditorState(backgroundValue) {
    const rawValue = String(backgroundValue || '').trim();
    const normalizedLower = rawValue.toLowerCase();
    if (COMBINE_BACKGROUND_MODE_OPTIONS.includes(normalizedLower)) {
      this._combineBackgroundMode = normalizedLower;
      this._combineBackgroundHexDraft = '';
      return;
    }

    const normalizedHex = this.normalizeHexColor(rawValue);
    if (normalizedHex) {
      this._combineBackgroundMode = 'hex';
      this._combineBackgroundHexDraft = normalizedHex;
      return;
    }

    this._combineBackgroundMode = DEFAULT_COMBINE_BACKGROUND;
    this._combineBackgroundHexDraft = '';
  }

  setConfig(config) {
    const previousEntities = Array.isArray(this._config?.entities) ? this._config.entities : [];
    const previousWeekNumberPrefixMode = this.getWeekNumberPrefixMode();
    const previousWeekNumberPrefix = this._config?.week_number_prefix;
    const normalizedDefaultView = config.default_view === 'week'
      ? 'week-compact'
      : config.default_view === 'schedule'
        ? 'week-standard'
        : config.default_view;
    const normalizedPastEventMode = config.past_event_mode !== undefined && config.past_event_mode !== null && config.past_event_mode !== ''
      ? normalizePastEventMode$1(config.past_event_mode)
      : (config.hide_the_past ? 'hide' : createDefaultStubConfig().past_event_mode);

    this._config = {
      ...createDefaultStubConfig(),
      ...config,
      default_view: normalizedDefaultView || (createDefaultStubConfig().default_view || DEFAULT_VIEW),
      past_event_mode: normalizedPastEventMode,
      color_scheme: normalizeDefaultDarkMode(config.color_scheme),
      header_dashboard_path: normalizeDashboardPath(config.header_dashboard_path),
      event_modal_size: normalizeEventModalSize$1(config.event_modal_size),
      day_badge_layout_week: normalizeDayBadgeLayoutWeek$1(config.day_badge_layout_week)
    };
    this.syncCombineBackgroundEditorState(this._config.combine_background);

    if (!this._rendered) {
      this.render();
      return;
    }

    const nextEntities = Array.isArray(this._config.entities) ? this._config.entities : [];
    const entitiesChanged = previousEntities.join('|') !== nextEntities.join('|');
    const nextWeekNumberPrefixMode = this.getWeekNumberPrefixMode();
    const weekNumberPrefixChanged = previousWeekNumberPrefixMode !== nextWeekNumberPrefixMode || (
      nextWeekNumberPrefixMode === 'custom' && previousWeekNumberPrefix !== this._config.week_number_prefix
    );

    if (entitiesChanged || weekNumberPrefixChanged) {
      this.render();
      return;
    }

    this.updateFieldValues();
  }

  set hass(hass) {
    this._hass = hass;
    this._dashboardOptions = this.getDashboardOptionsForEditor();

    if (!this._rendered) {
      this.render();
      return;
    }

    this.refreshCalendarEntities();
    const weekdayColorSwatch = this.querySelector('[data-color-field="week_compact_weekday_color"]');
    weekdayColorSwatch?.style.setProperty('--selected-color', this.getWeekCompactWeekdayColorPreview());
  }

  get value() {
    return this._config || createDefaultStubConfig();
  }

  getCalendarEntities() {
    return Object.keys(this._hass?.states || {})
      .filter((entityId) => entityId.startsWith('calendar.'))
      .sort();
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  normalizeDefaultViewForEditor(value) {
    return normalizeDefaultViewForEditor(value);
  }

  getEventCalendarBubbleMode() {
    return getEventCalendarBubbleMode(this._config);
  }

  getWeekNumberPrefixMode() {
    const prefix = this._config?.week_number_prefix;
    if (prefix == null) return 'default';
    if (prefix === '') return 'number_only';
    return typeof prefix === 'string' ? 'custom' : 'default';
  }

  getMapFieldValue(key) {
    const value = this._config[key];
    return value && typeof value === 'object' && !Array.isArray(value) ? value : {};
  }

  getListFieldValue(key) {
    const value = this._config[key];
    return Array.isArray(value) ? value : [];
  }

  getListInputValue(key) {
    return this.getListFieldValue(key).join(', ');
  }

  getEditorDefaultValue(key) {
    return getEditorDefaultValue(key);
  }

  getConfiguredEntitiesForEditor() {
    const entities = Array.isArray(this._config.entities) ? this._config.entities : [];
    return entities.filter((entityId) => typeof entityId === 'string' && entityId.startsWith('calendar.'));
  }

  getEntityFriendlyName(entityId) {
    return getEntityFriendlyName(this._hass, entityId);
  }

  getConfiguredEntityIndex(entityId) {
    return this.getConfiguredEntitiesForEditor().indexOf(entityId);
  }

  getEditorCalendarColor(entityId) {
    const entityIndex = this.getConfiguredEntityIndex(entityId);
    return this.normalizeHexColor(this.getMapFieldValue('colors')[entityId]) ||
      getDefaultColor(Math.max(entityIndex, 0));
  }

  getContrastingEditorColor(backgroundColor) {
    const hex = this.normalizeHexColor(backgroundColor);
    if (!hex) return '#FFFFFF';

    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.6 ? '#000000' : '#FFFFFF';
  }

  getEditorEventFontColor(entityId) {
    return this.normalizeHexColor(this.getMapFieldValue('event_font_colors')[entityId]) ||
      this.getContrastingEditorColor(this.getEditorCalendarColor(entityId));
  }

  getVirtualCalendarsForEditor() {
    return Array.isArray(this._config.virtual_calendars) ? this._config.virtual_calendars : [];
  }

  getRenderableVirtualCalendarsForEditor() {
    return this.getVirtualCalendarsForEditor()
      .map((virtualCalendar, index) => ({ virtualCalendar, index }))
      .filter(({ virtualCalendar }) => virtualCalendar && typeof virtualCalendar === 'object' && !Array.isArray(virtualCalendar));
  }

  getNextVirtualCalendarId() {
    const existingIds = new Set(this.getVirtualCalendarsForEditor()
      .filter((virtualCalendar) => virtualCalendar && typeof virtualCalendar === 'object')
      .map((virtualCalendar) => String(virtualCalendar.id || '').trim())
      .filter(Boolean));
    let index = 1;
    let candidate = `virtual_${index}`;
    while (existingIds.has(candidate)) {
      index += 1;
      candidate = `virtual_${index}`;
    }
    return candidate;
  }

  sanitizeVirtualCalendarForEditor(virtualCalendar) {
    const nextVirtualCalendar = {
      ...(virtualCalendar && typeof virtualCalendar === 'object' ? virtualCalendar : {})
    };

    nextVirtualCalendar.id = String(nextVirtualCalendar.id || '').trim();
    nextVirtualCalendar.name = String(nextVirtualCalendar.name || '').trim();

    const icon = String(nextVirtualCalendar.icon || '').trim();
    if (icon) nextVirtualCalendar.icon = icon;
    else nextVirtualCalendar.icon = null;

    const color = String(nextVirtualCalendar.color || '').trim();
    if (color) nextVirtualCalendar.color = color;
    else nextVirtualCalendar.color = null;

    nextVirtualCalendar.entities = Array.isArray(nextVirtualCalendar.entities)
      ? nextVirtualCalendar.entities.filter((entityId) => typeof entityId === 'string' && entityId.startsWith('calendar.'))
      : [];

    return nextVirtualCalendar;
  }

  getVirtualCalendarIdValidation(index) {
    const virtualCalendars = this.getVirtualCalendarsForEditor();
    const virtualCalendar = virtualCalendars[index];
    if (!virtualCalendar || typeof virtualCalendar !== 'object') return '';

    const id = String(virtualCalendar.id || '').trim();
    if (!id) return 'ID is required for runtime matching.';

    const duplicateIndex = virtualCalendars.findIndex((otherVirtualCalendar, otherIndex) => (
      otherIndex !== index &&
      otherVirtualCalendar &&
      typeof otherVirtualCalendar === 'object' &&
      String(otherVirtualCalendar.id || '').trim() === id
    ));

    return duplicateIndex === -1 ? '' : 'ID duplicates another virtual calendar.';
  }

  getEditorVirtualCalendarColor(index) {
    const virtualCalendar = this.getVirtualCalendarsForEditor()[index];
    return this.toColorInputValue(virtualCalendar?.color);
  }

  getEditorMapColorValue(field, entityId) {
    if (field === 'colors') {
      return this.getEditorCalendarColor(entityId);
    }

    if (field === 'event_font_colors') {
      return this.getEditorEventFontColor(entityId);
    }

    return this.toColorInputValue(this.getMapFieldValue(field)[entityId]);
  }

  getDashboardOptionsForEditor() {
    const panels = this._hass?.panels || {};
    const dashboards = Object.values(panels)
      .filter((panel) => panel?.component_name === 'lovelace' && typeof panel.url_path === 'string' && panel.url_path.trim())
      .map((panel) => {
        const path = panel.url_path.startsWith('/') ? panel.url_path : `/${panel.url_path}`;
        const title = panel.title || panel.config?.title || panel.url_path;
        return { path, title };
      });

    const uniqueByPath = new Map();
    dashboards.forEach((dashboard) => {
      uniqueByPath.set(dashboard.path, dashboard);
    });

    const configuredPath = normalizeDashboardPath(this._config.header_dashboard_path);
    if (configuredPath && !uniqueByPath.has(configuredPath)) {
      uniqueByPath.set(configuredPath, { path: configuredPath, title: configuredPath });
    }

    return Array.from(uniqueByPath.values())
      .sort((a, b) => a.title.localeCompare(b.title, undefined, { sensitivity: 'base' }));
  }

  toColorInputValue(value, fallback = '#3f51b5') {
    const normalized = String(value || '').trim();
    if (/^#[0-9a-fA-F]{6}$/.test(normalized)) {
      return normalized;
    }
    return fallback;
  }

  getColorValue(field, mapKey = null) {
    if (field === 'virtual_calendar_color') {
      return this.getEditorVirtualCalendarColor(Number(mapKey));
    }
    if (field === 'week_compact_weekday_color') {
      return this.getWeekCompactWeekdayColorPreview();
    }
    if (mapKey) {
      return this.getEditorMapColorValue(field, mapKey);
    }
    return this.toColorInputValue(this._config[field]);
  }

  emitConfigChanged(nextConfig) {
    this._config = nextConfig;
    this.dispatchEvent(
      new CustomEvent('config-changed', {
        detail: { config: nextConfig },
        bubbles: true,
        composed: true
      })
    );
  }

  openColorPicker(field, mapKey = null) {
    const initialColor = this.getColorValue(field, mapKey);
    this._colorPickerState = { field, mapKey, color: initialColor };
    const dialog = this.querySelector('.color-picker-dialog');
    const picker = this.querySelector('daylight-color-picker');
    if (picker) picker.value = initialColor;
    if (dialog) dialog.classList.add('show');
  }

  closeColorPicker() {
    const dialog = this.querySelector('.color-picker-dialog');
    if (dialog) dialog.classList.remove('show');
  }

  applyColorPickerColor(hexColor = null) {
    const { field, mapKey } = this._colorPickerState;
    const picker = this.querySelector('daylight-color-picker');
    const selectedColor = hexColor || picker?.value || this._colorPickerState.color;
    if (!field || !selectedColor) return;

    if (field === 'virtual_calendar_color') {
      this.updateVirtualCalendar(Number(mapKey), { color: selectedColor }, { render: true });
      this.closeColorPicker();
      return;
    }

    const nextConfig = { ...this.value };
    if (mapKey) {
      nextConfig[field] = {
        ...this.getMapFieldValue(field),
        [mapKey]: selectedColor
      };
    } else {
      nextConfig[field] = selectedColor;
    }

    this.emitConfigChanged(nextConfig);
    this.updateFieldValues();
    this.closeColorPicker();
  }

  renderColorPickerDialog() {
    return `
      <div class="color-picker-dialog">
        <div class="color-picker-overlay" data-close-color-picker="true"></div>
        <div class="color-picker-modal" role="dialog" aria-label="Select color">
          <daylight-color-picker title="Select color" confirm-label="Set" cancel-label="Cancel"></daylight-color-picker>
        </div>
      </div>
    `;
  }

  renderColorInputControl({ id, field, mapKey = null, value }) {
    return renderEditorColorInputControl({
      id,
      field,
      mapKey,
      value,
      toColorInputValue: (colorValue) => this.toColorInputValue(colorValue)
    });
  }

  getWeekCompactWeekdayColorPreview() {
    if (this._config.week_compact_weekday_color) return this._config.week_compact_weekday_color;
    const darkMode = this._config.color_scheme === 'dark'
      || (this._config.color_scheme === DEFAULT_THEME_MODE && this._hass?.themes?.darkMode === true);
    return darkMode ? '#dde3ea' : '#6b7280';
  }

  renderMapRowInputs(mapKey, { label, inputType = 'text', placeholder = '' } = {}) {
    const mapValue = this.getMapFieldValue(mapKey);
    const entities = this.getConfiguredEntitiesForEditor();

    if (!entities.length) {
      return `<p class="helper">Select at least one calendar to configure ${label || mapKey}.</p>`;
    }

    return entities
      .map((entityId) => {
        const displayName = this.escapeHtml(this.getEntityFriendlyName(entityId));
        const value = inputType === 'color' ? this.getEditorMapColorValue(mapKey, entityId) : (mapValue[entityId] || '');
        if (inputType === 'color') {
          return `
            <div class="map-row">
              <label class="map-label" for="${mapKey}-${entityId}">${displayName}</label>
              ${this.renderColorInputControl({ id: `${mapKey}-${entityId}`, field: mapKey, mapKey: entityId, value })}
            </div>
          `;
        }

        return `
          <div class="map-row">
            <label class="map-label" for="${mapKey}-${entityId}">${displayName}</label>
            <input id="${mapKey}-${entityId}" type="text" data-map-field="${mapKey}" data-map-key="${entityId}" value="${this.escapeHtml(value)}" placeholder="${placeholder}">
          </div>
        `;
      })
      .join('');
  }

  renderCalendarListCheckboxes(field, { label }) {
    const entities = this.getConfiguredEntitiesForEditor();
    const selectedValues = new Set(this.getListFieldValue(field));

    if (!entities.length) {
      return `<p class="helper">Select at least one calendar to configure ${label || field}.</p>`;
    }

    return entities
      .map((entityId) => {
        const displayName = this.escapeHtml(this.getEntityFriendlyName(entityId));
        const checked = selectedValues.has(entityId) ? 'checked' : '';
        return `
          <label class="list-checkbox-row">
            <span>${displayName}</span>
            <input type="checkbox" data-list-field="${field}" value="${entityId}" ${checked}>
          </label>
        `;
      })
      .join('');
  }

  buildDisclosureKey(scope, title) {
    return `${scope}:${title}`;
  }

  captureOpenDisclosures() {
    const openKeys = new Set();
    this.querySelectorAll('details[data-disclosure-key][open]').forEach((detail) => {
      const key = detail.dataset.disclosureKey;
      if (key) openKeys.add(key);
    });
    this._openDisclosureKeys = openKeys;
  }

  renderSection(title, content) {
    const disclosureKey = this.buildDisclosureKey('section', title);
    return renderEditorSection({
      title,
      content,
      disclosureKey,
      open: this._openDisclosureKeys.has(disclosureKey)
    });
  }

  renderSubSection(title, content) {
    const disclosureKey = this.buildDisclosureKey('subsection', title);
    return renderEditorSubSection({
      title,
      content,
      disclosureKey,
      open: this._openDisclosureKeys.has(disclosureKey)
    });
  }

  renderVirtualCalendarsEditor() {
    const renderableVirtualCalendars = this.getRenderableVirtualCalendarsForEditor();

    return `
      <div class="virtual-calendars-editor">
        <p class="helper">Create display-only calendar badges that group one or more configured real calendars.</p>
        ${renderableVirtualCalendars.length ? renderableVirtualCalendars
          .map(({ virtualCalendar, index }, renderIndex) => this.renderVirtualCalendarRow(virtualCalendar, index, renderIndex, renderableVirtualCalendars.length))
          .join('') : '<p class="helper">No virtual calendars configured yet.</p>'}
        <button type="button" class="secondary-action" data-virtual-calendar-action="add">Add virtual calendar</button>
      </div>
    `;
  }

  renderVirtualCalendarRow(virtualCalendar, index, renderIndex = index, renderCount = this.getRenderableVirtualCalendarsForEditor().length) {
    const configuredEntities = this.getConfiguredEntitiesForEditor();
    const configuredEntitySet = new Set(configuredEntities);
    const selectedEntityValues = Array.isArray(virtualCalendar.entities)
      ? virtualCalendar.entities.filter((entityId) => typeof entityId === 'string' && entityId.startsWith('calendar.'))
      : [];
    const selectedEntities = new Set(selectedEntityValues);
    const legacyEntities = selectedEntityValues.filter((entityId) => !configuredEntitySet.has(entityId));
    const virtualCalendarName = String(virtualCalendar.name || '').trim();
    const virtualCalendarId = String(virtualCalendar.id || '').trim();
    const virtualCalendarIcon = String(virtualCalendar.icon || '').trim();
    const virtualCalendarColor = String(virtualCalendar.color || '').trim();
    const idValidation = this.getVirtualCalendarIdValidation(index);
    const idValidationMarkup = idValidation
      ? `<p class="validation-message" id="virtual-calendar-id-error-${index}">${this.escapeHtml(idValidation)}</p>`
      : '';
    const colorStatusMarkup = virtualCalendarColor
      ? `<span class="virtual-calendar-color-status">Override: ${this.escapeHtml(virtualCalendarColor)}</span>`
      : '<span class="virtual-calendar-color-status no-override">No color override set</span>';
    const checkboxRows = configuredEntities.map((entityId) => {
      const displayName = this.escapeHtml(this.getEntityFriendlyName(entityId));
      const checked = selectedEntities.has(entityId) ? 'checked' : '';
      return `
        <label class="list-checkbox-row virtual-calendar-entity-row">
          <span>${displayName}</span>
          <input type="checkbox" data-virtual-calendar-entity="true" data-virtual-calendar-index="${index}" value="${this.escapeHtml(entityId)}" ${checked}>
        </label>
      `;
    });

    legacyEntities.forEach((entityId) => {
      checkboxRows.push(`
        <label class="list-checkbox-row virtual-calendar-entity-row legacy-entity-row">
          <span>${this.escapeHtml(entityId)} <em>(not in configured calendars)</em></span>
          <input type="checkbox" data-virtual-calendar-entity="true" data-virtual-calendar-index="${index}" value="${this.escapeHtml(entityId)}" checked disabled>
        </label>
      `);
    });

    const checkboxMarkup = checkboxRows.length
      ? checkboxRows.join('')
      : '<p class="helper">Select at least one real calendar above to include calendars here.</p>';

    return `
      <div class="virtual-calendar-card" data-virtual-calendar-card="${index}">
        <div class="virtual-calendar-card-header">
          <strong>${this.escapeHtml(virtualCalendarName || virtualCalendarId || `Virtual calendar ${renderIndex + 1}`)}</strong>
          <div class="virtual-calendar-actions">
            <button type="button" title="Move up" data-virtual-calendar-action="move-up" data-virtual-calendar-index="${index}" ${renderIndex === 0 ? 'disabled' : ''}>↑</button>
            <button type="button" title="Move down" data-virtual-calendar-action="move-down" data-virtual-calendar-index="${index}" ${renderIndex === renderCount - 1 ? 'disabled' : ''}>↓</button>
            <button type="button" title="Remove" data-virtual-calendar-action="remove" data-virtual-calendar-index="${index}">Remove</button>
          </div>
        </div>
        <div class="field-row">
          <div class="field">
            <label for="virtual-calendar-name-${index}">Name</label>
            <input id="virtual-calendar-name-${index}" type="text" data-virtual-calendar-field="name" data-virtual-calendar-index="${index}" value="${this.escapeHtml(virtualCalendarName)}" placeholder="Virtual Calendar">
          </div>
          <div class="field">
            <label for="virtual-calendar-id-${index}">ID</label>
            <input id="virtual-calendar-id-${index}" type="text" data-virtual-calendar-field="id" data-virtual-calendar-index="${index}" value="${this.escapeHtml(virtualCalendarId)}" placeholder="virtual_1" ${idValidation ? 'aria-invalid="true"' : ''} ${idValidation ? `aria-describedby="virtual-calendar-id-error-${index}"` : ''}>
            ${idValidationMarkup}
          </div>
        </div>
        <div class="field-row">
          <div class="field">
            <label for="virtual-calendar-icon-${index}">Icon</label>
            <input id="virtual-calendar-icon-${index}" type="text" data-virtual-calendar-field="icon" data-virtual-calendar-index="${index}" value="${this.escapeHtml(virtualCalendarIcon)}" placeholder="mdi:calendar">
          </div>
          <div class="field virtual-calendar-color-field">
            <label for="virtual-calendar-color-${index}">Color override (optional)</label>
            <div class="virtual-calendar-color-row">
              ${this.renderColorInputControl({ id: `virtual-calendar-color-picker-${index}`, field: 'virtual_calendar_color', mapKey: String(index), value: virtualCalendarColor })}
              <input id="virtual-calendar-color-${index}" type="text" data-virtual-calendar-field="color" data-virtual-calendar-index="${index}" value="${this.escapeHtml(virtualCalendarColor)}" placeholder="#3f51b5">
              ${colorStatusMarkup}
            </div>
          </div>
        </div>
        <div class="field">
          <label>Included calendar entities</label>
          <div class="list-checkbox-grid virtual-calendar-entities">
            ${checkboxMarkup}
          </div>
        </div>
      </div>
    `;
  }

  updateVirtualCalendar(index, patch, { render = false } = {}) {
    const virtualCalendars = [...this.getVirtualCalendarsForEditor()];
    if (index < 0 || index >= virtualCalendars.length) return;
    const currentVirtualCalendar = virtualCalendars[index];
    if (!currentVirtualCalendar || typeof currentVirtualCalendar !== 'object' || Array.isArray(currentVirtualCalendar)) return;

    virtualCalendars[index] = this.sanitizeVirtualCalendarForEditor({
      ...currentVirtualCalendar,
      ...patch
    });

    this.emitConfigChanged({
      ...this.value,
      virtual_calendars: virtualCalendars
    });

    if (render) this.render();
    else this.updateFieldValues();
  }

  addVirtualCalendar() {
    const virtualCalendars = [...this.getVirtualCalendarsForEditor()];
    virtualCalendars.push({
      id: this.getNextVirtualCalendarId(),
      name: 'Virtual Calendar',
      icon: null,
      color: null,
      entities: []
    });

    this.emitConfigChanged({
      ...this.value,
      virtual_calendars: virtualCalendars
    });
    this.render();
  }

  removeVirtualCalendar(index) {
    const virtualCalendars = [...this.getVirtualCalendarsForEditor()];
    if (index < 0 || index >= virtualCalendars.length) return;
    virtualCalendars.splice(index, 1);

    this.emitConfigChanged({
      ...this.value,
      virtual_calendars: virtualCalendars
    });
    this.render();
  }

  moveVirtualCalendar(index, direction) {
    const renderableVirtualCalendars = this.getRenderableVirtualCalendarsForEditor();
    const renderIndex = renderableVirtualCalendars.findIndex((entry) => entry.index === index);
    const swapEntry = renderableVirtualCalendars[renderIndex + direction];
    const virtualCalendars = [...this.getVirtualCalendarsForEditor()];
    if (renderIndex === -1 || !swapEntry || index < 0 || index >= virtualCalendars.length) return;
    [virtualCalendars[index], virtualCalendars[swapEntry.index]] = [virtualCalendars[swapEntry.index], virtualCalendars[index]];

    this.emitConfigChanged({
      ...this.value,
      virtual_calendars: virtualCalendars
    });
    this.render();
  }

  handleVirtualCalendarAction(event) {
    const action = event.currentTarget.dataset.virtualCalendarAction;
    const index = Number(event.currentTarget.dataset.virtualCalendarIndex);
    if (action === 'add') this.addVirtualCalendar();
    else if (action === 'remove') this.removeVirtualCalendar(index);
    else if (action === 'move-up') this.moveVirtualCalendar(index, -1);
    else if (action === 'move-down') this.moveVirtualCalendar(index, 1);
  }

  handleVirtualCalendarInput(event) {
    const index = Number(event.target.dataset.virtualCalendarIndex);
    const field = event.target.dataset.virtualCalendarField;
    if (!field) return;
    const value = String(event.target.value || '').trim();
    this.updateVirtualCalendar(index, {
      [field]: field === 'icon' || field === 'color' ? (value || null) : value
    }, { render: field === 'id' || field === 'name' || field === 'color' });
  }

  handleVirtualCalendarEntityChange(event) {
    const index = Number(event.target.dataset.virtualCalendarIndex);
    const checkedEntities = Array.from(this.querySelectorAll(`input[data-virtual-calendar-entity][data-virtual-calendar-index="${index}"]:checked`))
      .map((input) => input.value)
      .filter((entityId) => typeof entityId === 'string' && entityId.startsWith('calendar.'));
    this.updateVirtualCalendar(index, { entities: checkedEntities });
  }

  renderWeekdayCheckboxes() {
    return renderEditorWeekdayCheckboxes({
      selectedWeekdays: new Set(this.getListFieldValue('week_days'))
    });
  }

  render() {
    this.captureOpenDisclosures();

    const displayLayoutSection = this.renderSection('Display & layout', `
      <div class="field-row">
        <div class="field field-inline">
          <label for="first_day_of_week">First day of week</label>
          <select id="first_day_of_week" data-field="first_day_of_week" data-type="number">
            <option value="0" ${Number(this._config.first_day_of_week) === 0 ? 'selected' : ''}>Sunday</option>
            <option value="1" ${Number(this._config.first_day_of_week) === 1 ? 'selected' : ''}>Monday</option>
            <option value="2" ${Number(this._config.first_day_of_week) === 2 ? 'selected' : ''}>Tuesday</option>
            <option value="3" ${Number(this._config.first_day_of_week) === 3 ? 'selected' : ''}>Wednesday</option>
            <option value="4" ${Number(this._config.first_day_of_week) === 4 ? 'selected' : ''}>Thursday</option>
            <option value="5" ${Number(this._config.first_day_of_week) === 5 ? 'selected' : ''}>Friday</option>
            <option value="6" ${Number(this._config.first_day_of_week) === 6 ? 'selected' : ''}>Saturday</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label>Week days</label>
        ${this.renderWeekdayCheckboxes()}
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="week_start_hour">Week start hour</label>
          <input id="week_start_hour" data-field="week_start_hour" data-type="number" type="number" min="0" max="23" value="${Number(this._config.week_start_hour ?? this.getEditorDefaultValue('week_start_hour'))}">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="week_end_hour">Week end hour</label>
          <input id="week_end_hour" data-field="week_end_hour" data-type="number" type="number" min="0" max="23" value="${Number(this._config.week_end_hour ?? this.getEditorDefaultValue('week_end_hour'))}">
        </div>
      </div>
      <div class="boolean-list">
        <label><input type="checkbox" data-field="lock_schedule_hours" ${this._config.lock_schedule_hours ? 'checked' : ''}> Schedule view: lock week start/end hours</label>
        <label class="field-inline">Past-ended events
          <select data-field="past_event_mode">
            <option value="none" ${this._config.past_event_mode === 'none' ? 'selected' : ''}>Show normally</option>
            <option value="hide" ${this._config.past_event_mode === 'hide' ? 'selected' : ''}>Hide</option>
            <option value="muted" ${this._config.past_event_mode === 'muted' ? 'selected' : ''}>Mute</option>
          </select>
        </label>
        <label><input type="checkbox" data-field="hide_empty_days" ${this._config.hide_empty_days ? 'checked' : ''}> Agenda view: hide empty days</label>
        <label><input type="checkbox" data-field="agenda_compact_events" ${this._config.agenda_compact_events ? 'checked' : ''}> Agenda view: compact events</label>
        <label><input type="checkbox" data-field="disable_swipe_controls" ${this._config.disable_swipe_controls ? 'checked' : ''}> Disable swipe period controls</label>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="rolling_days_week_compact">Rolling days (week view)</label>
          <input id="rolling_days_week_compact" data-field="rolling_days_week_compact" data-type="nullable-number" type="number" min="1" value="${this._config.rolling_days_week_compact ?? ''}" placeholder="Disabled">
        </div>
      </div>
      <div class="field-row week-compact-header-control-row">
        <div class="field field-inline week-compact-header-field">
          <label for="week_compact_weekday_font_size">Week Compact weekday font size (px)</label>
          <input id="week_compact_weekday_font_size" data-field="week_compact_weekday_font_size" data-type="number" type="number" min="1" value="${Number(this._config.week_compact_weekday_font_size ?? this.getEditorDefaultValue('week_compact_weekday_font_size'))}">
        </div>
      </div>
      <div class="field-row week-compact-header-control-row">
        <div class="field field-inline week-compact-header-field">
          <label for="week_compact_day_header_spacing">Week Compact day header spacing (px)</label>
          <input id="week_compact_day_header_spacing" data-field="week_compact_day_header_spacing" data-type="number" type="number" min="0" value="${Number(this._config.week_compact_day_header_spacing ?? this.getEditorDefaultValue('week_compact_day_header_spacing'))}">
        </div>
      </div>
      <div class="field-row week-compact-header-control-row">
        <div class="field field-inline week-compact-header-field week-compact-weekday-color-field">
          <label for="week_compact_weekday_color">Week Compact weekday color</label>
          <div class="week-compact-weekday-color-actions">
            ${this.renderColorInputControl({ id: 'week_compact_weekday_color', field: 'week_compact_weekday_color', value: this.getWeekCompactWeekdayColorPreview() })}
            <button type="button" class="secondary-action week-compact-theme-color-action" data-clear-config-field="week_compact_weekday_color" ${this._config.week_compact_weekday_color ? '' : 'disabled'}>Use theme color</button>
          </div>
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="rolling_days_schedule">Rolling days (schedule view)</label>
          <input id="rolling_days_schedule" data-field="rolling_days_schedule" data-type="nullable-number" type="number" min="1" value="${this._config.rolling_days_schedule ?? ''}" placeholder="Disabled">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="rolling_days_agenda">Rolling days (agenda view)</label>
          <input id="rolling_days_agenda" data-field="rolling_days_agenda" data-type="nullable-number" type="number" min="1" value="${this._config.rolling_days_agenda ?? ''}" placeholder="Disabled">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="rolling_weeks">Rolling weeks (month view)</label>
          <input id="rolling_weeks" data-field="rolling_weeks" data-type="nullable-number" type="number" min="1" value="${this._config.rolling_weeks ?? ''}" placeholder="Disabled">
        </div>
      </div>
      <div class="boolean-list">
        <label><input type="checkbox" data-field="compact_height" ${this._config.compact_height ? 'checked' : ''}> Compact height</label>
        <label><input type="checkbox" data-field="compact_width" ${this._config.compact_width ? 'checked' : ''}> Schedule view: compact width columns</label>
        <label><input type="checkbox" data-field="show_week_numbers_month" ${this._config.show_week_numbers_month ? 'checked' : ''}> Month view: show ISO week numbers</label>
        <label><input type="checkbox" data-field="show_all_events_month" ${this._config.show_all_events_month ? 'checked' : ''}> Month view: show all events (override compact height)</label>
        <label><input type="checkbox" data-field="show_all_details_month" ${this._config.show_all_details_month ? 'checked' : ''}> Month view: show all details (week-compact style + override compact height)</label>
        <label><input type="checkbox" data-field="compact_header" ${this._config.compact_header ? 'checked' : ''}> Compact header</label>
        <label><input type="checkbox" data-field="hide_year" ${this._config.hide_year ? 'checked' : ''}> Hide year in header period label</label>
        <label><input type="checkbox" data-field="hide_calendars" ${this._config.hide_calendars ? 'checked' : ''}> Hide calendar badges</label>
        <label><input type="checkbox" data-field="hide_header" ${this._config.hide_header ? 'checked' : ''}> Hide entire header</label>
        <label><input type="checkbox" data-field="hide_calendar_names" ${this._config.hide_calendar_names ? 'checked' : ''}> Header badges: hide calendar names</label>
        <label><input type="checkbox" data-field="hide_controls" ${this._config.hide_controls ? 'checked' : ''}> Hide all header controls</label>
        <label><input type="checkbox" data-field="hide_navigation_buttons" ${this._config.hide_navigation_buttons ? 'checked' : ''}> Hide previous/next and today buttons</label>
        <label><input type="checkbox" data-field="hide_add_event_button" ${this._config.hide_add_event_button ? 'checked' : ''}> Hide add event button</label>
        <label><input type="checkbox" data-field="hide_view_selector" ${this._config.hide_view_selector ? 'checked' : ''}> Hide view selector</label>
        <label><input type="checkbox" data-field="show_dashboard_nav_button" ${this._config.show_dashboard_nav_button ? 'checked' : ''}> Show left dashboard navigation button</label>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="week_number_prefix_mode">Month week-number prefix</label>
          <select id="week_number_prefix_mode" data-field="week_number_prefix_mode">
            <option value="default" ${this.getWeekNumberPrefixMode() === 'default' ? 'selected' : ''}>Localized default</option>
            <option value="number_only" ${this.getWeekNumberPrefixMode() === 'number_only' ? 'selected' : ''}>Number only</option>
            <option value="custom" ${this.getWeekNumberPrefixMode() === 'custom' ? 'selected' : ''}>Custom prefix</option>
          </select>
          ${this.getWeekNumberPrefixMode() === 'custom' ? `
            <input data-field="week_number_prefix" type="text" value="${this.escapeHtml(this._config.week_number_prefix)}" placeholder="Week">
          ` : ''}
          <p class="helper">Choose the localized prefix, the week number alone, or enter a custom prefix.</p>
        </div>
      </div>
      ${this._config.show_dashboard_nav_button ? `
      <div class="field-row">
        <div class="field field-inline">
          <label for="header_dashboard_path">Dashboard target</label>
          <select id="header_dashboard_path" data-field="header_dashboard_path">
            <option value="">Select a dashboard</option>
            ${this._dashboardOptions.map((dashboard) => `
              <option value="${this.escapeHtml(dashboard.path)}" ${this._config.header_dashboard_path === dashboard.path ? 'selected' : ''}>${this.escapeHtml(dashboard.title)}</option>
            `).join('')}
          </select>
        </div>
      </div>
      ` : ''}
      ${this._config.compact_height ? '' : `
        <div class="field">
          <label for="height_scale">Height scale</label>
          <input id="height_scale" data-field="height_scale" data-type="number" type="number" min="0.1" step="0.1" value="${Number(this._config.height_scale ?? this.getEditorDefaultValue('height_scale'))}">
        </div>
      `}
    `);

    const colorStylingSection = this.renderSection('Colors & styling', `
      <div class="field">
        <label for="header_color">Header color</label>
        <div class="field-row">
          ${this.renderColorInputControl({ id: 'header_color', field: 'header_color', value: this._config.header_color })}
          <input data-field="header_color_text" data-type="color-text" type="text" value="${this.escapeHtml(this._config.header_color || '')}" placeholder="var(--primary-color) or match-card-background">
        </div>
      </div>
      <div class="field">
        <label for="header_text_color">Header text color</label>
        <div class="field-row">
          ${this.renderColorInputControl({ id: 'header_text_color', field: 'header_text_color', value: this._config.header_text_color })}
          <input data-field="header_text_color_text" data-type="header-text-color-text" type="text" value="${this.escapeHtml(this._config.header_text_color || '')}" placeholder="Auto contrast">
        </div>
      </div>
      <div class="field">
        <label for="grid_color">Grid and divider color</label>
        <div class="field-row">
          ${this.renderColorInputControl({ id: 'grid_color', field: 'grid_color', value: this._config.grid_color })}
          <input data-field="grid_color_text" data-type="grid-color-text" type="text" value="${this.escapeHtml(this._config.grid_color || '')}" placeholder="Theme default">
        </div>
      </div>
      ${this.renderSubSection('Calendar colors', `<div class="map-grid">${this.renderMapRowInputs('colors', { label: 'calendar colors', inputType: 'color' })}</div>`)}
      ${this.renderSubSection('Event font colors', `<div class="map-grid">${this.renderMapRowInputs('event_font_colors', { label: 'event font colors', inputType: 'color' })}</div>`)}
      ${this.renderSubSection('Calendar display names', `<div class="map-grid">${this.renderMapRowInputs('calendar_names', { label: 'calendar names', placeholder: 'Display name' })}</div>`)}
      ${this.renderSubSection('Calendar badge icons', `<div class="map-grid">${this.renderMapRowInputs('calendar_badge_icons', { label: 'badge icons', placeholder: 'mdi:icon or URL' })}</div>`)}
      ${this.renderSubSection('Calendar badge people', `<div class="map-grid">${this.renderMapRowInputs('calendar_person_entities', { label: 'badge people', placeholder: 'person.ian' })}</div>`)}
      <div class="boolean-list">
        <label><input type="checkbox" data-field="header_background_transparent" ${this.normalizeBackgroundOpacity(this._config.header_background_opacity, this._config.header_background_transparent ? 100 : 0) >= 100 ? 'checked' : ''}> Transparent header surfaces</label>
        <label><input type="checkbox" data-field="background_transparent" ${this.normalizeBackgroundOpacity(this._config.background_opacity, this._config.background_transparent ? 100 : 0) >= 100 ? 'checked' : ''}> Transparent background surfaces</label>
        <label><input type="checkbox" data-field="hide_dark_mode_toggle" ${this._config.hide_dark_mode_toggle ? 'checked' : ''}> Hide dark mode toggle</label>
      </div>
      <div class="field">
        <label for="color_scheme">Color scheme</label>
        <select id="color_scheme" data-field="color_scheme">
          <option value="auto">Auto (browser/app)</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    `);

    const backgroundSection = this.renderSection('Background image', `
      <div class="field field-inline">
        <label for="header_background_opacity">Header opacity</label>
        <input id="header_background_opacity" data-field="header_background_opacity" data-type="number" type="number" min="0" max="100" step="1" value="${Number(this.normalizeBackgroundOpacity(this._config.header_background_opacity, this._config.header_background_transparent ? 100 : 0))}">
      </div>
      <div class="field field-inline">
        <label for="background_opacity">Background opacity</label>
        <input id="background_opacity" data-field="background_opacity" data-type="number" type="number" min="0" max="100" step="1" value="${Number(this.normalizeBackgroundOpacity(this._config.background_opacity, this._config.background_transparent ? 100 : 0))}">
      </div>
      <div class="field field-inline">
        <label for="background_image_url">Background image URL</label>
        <input id="background_image_url" data-field="background_image_url" type="text" value="${this._config.background_image_url || ''}" placeholder="https://... or /media/local/...">
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="background_image_size">Image size</label>
          <input id="background_image_size" data-field="background_image_size" type="text" value="${this._config.background_image_size || 'cover'}" placeholder="cover">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="background_image_position">Image position</label>
          <input id="background_image_position" data-field="background_image_position" type="text" value="${this._config.background_image_position || 'center'}" placeholder="center">
        </div>
      </div>
      <div class="field field-inline">
        <label for="background_image_repeat">Image repeat</label>
        <input id="background_image_repeat" data-field="background_image_repeat" type="text" value="${this._config.background_image_repeat || 'no-repeat'}" placeholder="no-repeat">
      </div>
    `);

    const eventSection = this.renderSection('Events & schedule', `
      <div class="field-row">
        <div class="field field-inline">
          <label for="month_day_tap_action">Month view: tapping a day</label>
          <select id="month_day_tap_action" data-field="month_day_tap_action">
            <option value="create" ${this._config.month_day_tap_action !== 'show_events' ? 'selected' : ''}>Opens new event (default)</option>
            <option value="show_events" ${this._config.month_day_tap_action === 'show_events' ? 'selected' : ''}>Shows that day's events</option>
          </select>
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="event_font_size">Event font size</label>
          <input id="event_font_size" data-field="event_font_size" data-type="number" type="number" min="8" max="32" value="${Number(this._config.event_font_size ?? this.getEditorDefaultValue('event_font_size'))}">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="event_time_font_size">Event time font size</label>
          <input id="event_time_font_size" data-field="event_time_font_size" data-type="number" type="number" min="8" max="32" value="${Number(this._config.event_time_font_size ?? this.getEditorDefaultValue('event_time_font_size'))}">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="event_location_font_size">Event location font size</label>
          <input id="event_location_font_size" data-field="event_location_font_size" data-type="number" type="number" min="8" max="32" value="${Number(this._config.event_location_font_size ?? this.getEditorDefaultValue('event_location_font_size'))}">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="event_calendar_bubble_mode">Event calendar bubble</label>
          <select id="event_calendar_bubble_mode" data-field="event_calendar_bubble_mode">
            <option value="icon" ${this.getEventCalendarBubbleMode() === 'icon' ? 'selected' : ''}>Icon</option>
            <option value="friendly_name" ${this.getEventCalendarBubbleMode() === 'friendly_name' ? 'selected' : ''}>Friendly Name</option>
            <option value="none" ${this.getEventCalendarBubbleMode() === 'none' ? 'selected' : ''}>None</option>
          </select>
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="event_title_prefix">Event title prefix</label>
          <select id="event_title_prefix" data-field="event_title_prefix">
            <option value="none" ${this._config.event_title_prefix === 'none' || !this._config.event_title_prefix ? 'selected' : ''}>None</option>
            <option value="badge_icon" ${this._config.event_title_prefix === 'badge_icon' ? 'selected' : ''}>Calendar Badge Icon</option>
            <option value="friendly_name" ${this._config.event_title_prefix === 'friendly_name' ? 'selected' : ''}>Calendar Friendly Name</option>
          </select>
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="event_color_mode">Event color style</label>
          <select id="event_color_mode" data-field="event_color_mode">
            <option value="classic" ${this._config.event_color_mode === 'classic' ? 'selected' : ''}>Classic</option>
            <option value="left-neutral" ${this._config.event_color_mode === 'left-neutral' ? 'selected' : ''}>Bar + Neutral</option>
            <option value="left-tint" ${this._config.event_color_mode === 'left-tint' ? 'selected' : ''}>Bar + Tint</option>
          </select>
        </div>
      </div>
      ${this._config.event_color_mode === 'left-neutral' ? `
      <div class="field-row">
        <div class="field field-inline">
          <label for="event_neutral_background">Neutral event background color</label>
          ${this.renderColorInputControl({ id: 'event_neutral_background', field: 'event_neutral_background', value: this._config.event_neutral_background || DEFAULT_EVENT_NEUTRAL_BACKGROUND })}
        </div>
      </div>
      ` : ''}
      ${this._config.event_color_mode === 'left-tint' ? `
      <div class="field-row">
        <div class="field field-inline">
          <label for="event_tint_opacity">Tint opacity</label>
          <input id="event_tint_opacity" data-field="event_tint_opacity" data-type="number" type="number" min="0" max="100" step="1" value="${Number(this._config.event_tint_opacity ?? DEFAULT_EVENT_TINT_OPACITY)}">
        </div>
      </div>
      ` : ''}
      ${this._config.event_color_mode !== 'classic' ? `
      <div class="field-row">
        <div class="field field-inline">
          <label for="event_color_bar_width">Event color bar width (px)</label>
          <input id="event_color_bar_width" data-field="event_color_bar_width" data-type="number" type="number" min="1" value="${Number(this._config.event_color_bar_width ?? this._config.combine_calendars_width ?? DEFAULT_EVENT_COLOR_BAR_WIDTH)}">
        </div>
      </div>
      ` : ''}
      ${this.renderSubSection('Hide times for calendars', `<div class="list-checkbox-grid">${this.renderCalendarListCheckboxes('hide_times_for_calendars', { label: 'hidden times calendars' })}</div>`)}
      <div class="boolean-list">
        <label><input type="checkbox" data-field="show_current_time_bar" ${this._config.show_current_time_bar ? 'checked' : ''}> Show current time bar</label>
        <label><input type="checkbox" data-field="use_24hr_schedule" ${this._config.use_24hr_schedule ? 'checked' : ''}> Use 24-hour schedule time</label>
        <label><input type="checkbox" data-field="shorten_event_times" ${this._config.shorten_event_times ? 'checked' : ''}> Shorten event times</label>
        <label><input type="checkbox" data-field="display_full_weekday_names" ${this._config.display_full_weekday_names ? 'checked' : ''}> Display full weekday names</label>
        <label><input type="checkbox" data-field="show_event_location" ${this._config.show_event_location ? 'checked' : ''}> Show event location</label>
        <label><input type="checkbox" data-field="use_short_location" ${this._config.use_short_location ? 'checked' : ''}> Shorten event location in views</label>
        <label><input type="checkbox" data-field="combine_calendars" ${this._config.combine_calendars ? 'checked' : ''}> Combine duplicate events across calendars</label>
      </div>
      ${this._config.combine_calendars ? `
      <div class="field-row">
        <div class="field field-inline">
          <label for="combine_style">Combined indicator style</label>
          <select id="combine_style" data-field="combine_style">
            <option value="stripes" ${this._config.combine_style === 'stripes' ? 'selected' : ''}>Stripes</option>
            <option value="bars" ${this._config.combine_style === 'bars' || !this._config.combine_style ? 'selected' : ''}>Bars</option>
            <option value="dots" ${this._config.combine_style === 'dots' ? 'selected' : ''}>Dots</option>
          </select>
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="combine_background_mode">Combined background</label>
          <select id="combine_background_mode" data-field="combine_background_mode">
            <option value="neutral" ${this._combineBackgroundMode === 'neutral' ? 'selected' : ''}>Neutral</option>
            <option value="primary" ${this._combineBackgroundMode === 'primary' ? 'selected' : ''}>Primary</option>
            <option value="hex" ${this._combineBackgroundMode === 'hex' ? 'selected' : ''}>Hex</option>
          </select>
        </div>
      </div>
      ${this._combineBackgroundMode === 'hex' ? `
      <div class="field-row">
        <div class="field field-inline">
          <label for="combine_background_hex">Combined background hex value</label>
          <input id="combine_background_hex" data-field="combine_background_hex" type="text" value="${this.escapeHtml(this._combineBackgroundHexDraft || '#FFFFFF')}" placeholder="#RRGGBB">
        </div>
      </div>
      ` : ''}
      <div class="field-row">
        <div class="field field-inline">
          <label for="combine_calendars_width">Combined indicator width (px)</label>
          <input id="combine_calendars_width" data-field="combine_calendars_width" data-type="number" type="number" min="1" value="${Number(this._config.combine_calendars_width ?? this.getEditorDefaultValue('combine_calendars_width'))}">
        </div>
      </div>
      ` : ''}
    `);

    const managementSection = this.renderSection('Event management', `
      <div class="boolean-list">
        <label><input type="checkbox" data-field="enable_event_management" ${this._config.enable_event_management !== false ? 'checked' : ''}> Enable event management</label>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="event_modal_size">Event modal size</label>
          <select id="event_modal_size" data-field="event_modal_size">
            <option value="narrow" ${this._config.event_modal_size === 'narrow' ? 'selected' : ''}>Narrow</option>
            <option value="medium" ${this._config.event_modal_size === DEFAULT_EVENT_MODAL_SIZE || !this._config.event_modal_size ? 'selected' : ''}>Medium</option>
            <option value="wide" ${this._config.event_modal_size === 'wide' ? 'selected' : ''}>Wide</option>
            <option value="full" ${this._config.event_modal_size === 'full' ? 'selected' : ''}>Full</option>
          </select>
        </div>
      </div>
      ${this.renderSubSection('Read-only calendars', `<div class="list-checkbox-grid">${this.renderCalendarListCheckboxes('readonly_calendars', { label: 'read-only calendars' })}</div>`)}
      ${this.renderSubSection('Hide header badges for calendars', `<div class="list-checkbox-grid">${this.renderCalendarListCheckboxes('hide_badge_calendars', { label: 'hidden header badges calendars' })}</div>`)}
      ${this.renderSubSection('Calendars hidden by default', `<div class="list-checkbox-grid">${this.renderCalendarListCheckboxes('default_hidden_calendars', { label: 'calendars hidden by default' })}</div>`)}
      ${this.renderSubSection('Virtual calendars', this.renderVirtualCalendarsEditor())}
    `);

    const localeSection = this.renderSection('Localization & preferences', `
      <div class="field-row">
        <div class="field field-inline">
          <label for="language">Language code</label>
          <input id="language" data-field="language" type="text" value="${this._config.language || ''}" placeholder="en, fr, de...">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="locale">Locale override</label>
          <input id="locale" data-field="locale" type="text" value="${this._config.locale || ''}" placeholder="en-US">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="header_time_sensor">Header time sensor</label>
          <input id="header_time_sensor" data-field="header_time_sensor" type="text" value="${this._config.header_time_sensor || ''}" placeholder="sensor.current_time">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="header_weather_sensor">Header weather sensor</label>
          <input id="header_weather_sensor" data-field="header_weather_sensor" type="text" value="${this._config.header_weather_sensor || ''}" placeholder="weather.home">
        </div>
      </div>
      <label class="checkbox-row">
        <input type="checkbox" data-field="show_daily_weather_forecast" ${this._config.show_daily_weather_forecast !== false ? 'checked' : ''}>
        Show daily weather forecasts
      </label>
      <div class="field field-inline">
        <label for="preference_storage_key">Preference storage key</label>
        <input id="preference_storage_key" data-field="preference_storage_key" type="text" value="${this._config.preference_storage_key || ''}" placeholder="Optional custom key">
      </div>
    `);

    const staleResourceDetection = detectStaleSkylightResource();
    const staleResourceDiagnostics = staleResourceDetection.detected ? `
      <p class="helper"><strong>Old Skylight resource detected:</strong> ${this.escapeHtml(staleResourceDetection.staleUrl)}</p>
      <p class="helper">Remove the old resource from Settings → Dashboards → Resources and keep /hacsfiles/daylight-calendar-card/skylight-calendar-card.js. HACS showing the latest version confirms the file is installed, but not that this dashboard loaded the current frontend resource.</p>
      <p class="helper"><a href="${STALE_RESOURCE_TROUBLESHOOTING_URL}" target="_blank" rel="noreferrer">Troubleshooting guide</a></p>
    ` : '';

    const diagnosticsSection = this.renderSection('About / Diagnostics', `
      <p class="helper">Daylight Calendar Card</p>
      <p class="helper">Loaded version: ${this.escapeHtml(getDaylightCalendarCardVersion())}</p>
      <p class="helper">Resource file: skylight-calendar-card.js</p>
      <p class="helper">If this version does not match the version shown in HACS, Home Assistant may be loading a cached or stale resource.</p>
      <div class="diagnostic-action">
        <button type="button" data-event-cache-action="flush">Flush event cache</button>
        <p class="helper">Clears persistent Daylight calendar event snapshots only. Hidden calendars and custom event colors are not changed.</p>
        ${this._eventCacheFlushStatus ? `<p class="helper">${this.escapeHtml(this._eventCacheFlushStatus)}</p>` : ''}
      </div>
      ${staleResourceDiagnostics}
    `);

    this.innerHTML = `
      <style>
        .card-config {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 8px 0;
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .field.field-inline {
          display: grid;
          grid-template-columns: minmax(180px, 260px) 1fr;
          align-items: center;
          gap: 8px;
        }

        .field-row {
          display: grid;
          gap: 8px;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        }

        .field label {
          font-weight: 500;
          color: var(--primary-text-color);
        }

        .field input,
        .field select,
        .field textarea {
          padding: 8px;
          border: 1px solid var(--divider-color);
          border-radius: 6px;
          font: inherit;
          color: var(--primary-text-color);
          background: var(--card-background-color);
        }

        .field textarea {
          min-height: 70px;
          resize: vertical;
        }

        .weekday-grid {
          display: grid;
          grid-template-columns: repeat(7, minmax(0, 1fr));
          gap: 6px;
          align-items: center;
          border: 1px solid var(--divider-color);
          border-radius: 6px;
          padding: 8px;
          background: var(--card-background-color);
        }

        .weekday-label {
          text-align: center;
          font-weight: 500;
          color: var(--secondary-text-color);
          font-size: 0.85rem;
        }

        .weekday-checkbox-wrap {
          display: flex;
          justify-content: center;
        }

        .map-grid {
          display: grid;
          gap: 8px;
        }

        .map-row {
          display: grid;
          grid-template-columns: minmax(160px, 220px) 1fr;
          gap: 8px;
          align-items: center;
        }

        .list-checkbox-grid {
          display: grid;
          gap: 8px;
        }

        .list-checkbox-row {
          display: grid;
          grid-template-columns: minmax(160px, 220px) 1fr;
          gap: 8px;
          align-items: center;
          font-weight: 400;
        }

        .list-checkbox-row input[type="checkbox"] {
          justify-self: end;
        }

        .virtual-calendars-editor {
          display: grid;
          gap: 10px;
        }

        .virtual-calendar-card {
          border: 1px solid var(--divider-color);
          border-radius: 8px;
          padding: 10px;
          background: var(--card-background-color);
          display: grid;
          gap: 10px;
        }

        .virtual-calendar-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        .virtual-calendar-actions {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }

        .virtual-calendar-actions button,
        .secondary-action {
          border: 1px solid var(--divider-color);
          background: var(--card-background-color);
          border-radius: 6px;
          padding: 6px 10px;
          cursor: pointer;
          color: var(--primary-text-color);
          font: inherit;
        }

        .virtual-calendar-actions button:disabled {
          cursor: default;
          opacity: 0.45;
        }

        .virtual-calendar-color-row {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 8px;
          align-items: center;
        }

        .virtual-calendar-color-status {
          grid-column: 1 / -1;
          color: var(--secondary-text-color);
          font-size: 0.85rem;
        }

        .virtual-calendar-color-status.no-override {
          font-style: italic;
        }

        .virtual-calendar-entities {
          border: 1px solid var(--divider-color);
          border-radius: 6px;
          padding: 8px;
        }

        .legacy-entity-row {
          color: var(--secondary-text-color);
        }

        .legacy-entity-row em {
          font-size: 0.85rem;
        }

        .validation-message {
          color: var(--error-color, #db4437);
          font-size: 0.85rem;
          margin: 2px 0 0;
        }

        input[aria-invalid="true"] {
          border-color: var(--error-color, #db4437);
        }

        .color-picker-wrap {
          display: inline-flex;
          align-items: center;
        }

        .selected-color-swatch {
          width: 26px;
          height: 26px;
          border-radius: 6px;
          border: 1px solid var(--divider-color);
          background: var(--selected-color);
          cursor: pointer;
          padding: 0;
          display: inline-block;
        }

        .week-compact-header-control-row,
        .week-compact-header-field {
          min-width: 0;
        }

        .field.field-inline.week-compact-header-field {
          grid-template-columns: minmax(0, 1fr) minmax(70px, 110px);
        }

        .week-compact-header-field > label {
          min-width: 0;
          overflow-wrap: anywhere;
        }

        .week-compact-header-field input {
          box-sizing: border-box;
          min-width: 0;
          width: 100%;
        }

        .field.field-inline.week-compact-weekday-color-field {
          grid-template-columns: minmax(0, 1fr) auto;
        }

        .week-compact-weekday-color-actions {
          display: inline-flex;
          align-items: center;
          justify-content: flex-end;
          gap: 6px;
          min-width: 0;
          white-space: nowrap;
        }

        .week-compact-theme-color-action {
          padding: 4px 7px;
          font-size: 0.8rem;
          white-space: nowrap;
        }

        .color-picker-dialog {
          display: none;
          position: fixed;
          inset: 0;
          z-index: 1000;
        }

        .color-picker-dialog.show {
          display: block;
        }

        .color-picker-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
        }

        .color-picker-modal {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: min(460px, calc(100vw - 24px));
          background: var(--card-background-color);
          border-radius: 12px;
          padding: 16px;
          box-shadow: 0 8px 26px rgba(0, 0, 0, 0.25);
          display: grid;
          gap: 12px;
        }

        .map-label {
          font-weight: 500;
          color: var(--primary-text-color);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .config-section {
          border: 1px solid var(--divider-color);
          border-radius: 6px;
          background: color-mix(in srgb, var(--card-background-color) 96%, var(--primary-text-color) 4%);
        }

        .config-section summary {
          cursor: pointer;
          padding: 10px;
          font-weight: 600;
          list-style: none;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .config-section summary::before,
        .config-subsection summary::before {
          content: '›';
          font-size: 1.2rem;
          line-height: 1;
          transform: rotate(0deg);
          transition: transform 120ms ease;
          color: var(--secondary-text-color);
        }

        .config-section[open] > summary::before,
        .config-subsection[open] > summary::before {
          transform: rotate(90deg);
        }

        .config-section summary::-webkit-details-marker {
          display: none;
        }

        .section-content {
          border-top: 1px solid var(--divider-color);
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .config-subsection {
          border: 1px solid var(--divider-color);
          border-radius: 6px;
          background: var(--card-background-color);
        }

        .config-subsection summary {
          cursor: pointer;
          padding: 8px 10px;
          font-weight: 600;
          list-style: none;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .config-subsection summary::-webkit-details-marker {
          display: none;
        }

        .subsection-content {
          border-top: 1px solid var(--divider-color);
          padding: 10px;
        }

        .entity-list,
        .boolean-list {
          display: grid;
          gap: 4px;
          border: 1px solid var(--divider-color);
          border-radius: 6px;
          padding: 8px;
          background: var(--card-background-color);
        }

        .entity-list {
          max-height: 200px;
          overflow: auto;
        }

        .entity-list label,
        .boolean-list label {
          font-weight: 400;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .helper {
          margin: 0;
          color: var(--secondary-text-color);
          font-size: 0.85rem;
        }
      </style>
      <div class="card-config">
        <div class="field field-inline">
          <label for="title">Title</label>
          <input id="title" data-field="title" type="text" value="${this._config.title || ''}" placeholder="Family Calendar">
        </div>

        <div class="field">
          <label for="default_view">Default view</label>
          <select id="default_view" data-field="default_view">
            <option value="month" ${this.normalizeDefaultViewForEditor(this._config.default_view) === 'month' ? 'selected' : ''}>Month</option>
            <option value="week-compact" ${this.normalizeDefaultViewForEditor(this._config.default_view) === 'week-compact' ? 'selected' : ''}>Week</option>
            <option value="week-standard" ${this.normalizeDefaultViewForEditor(this._config.default_view) === 'week-standard' ? 'selected' : ''}>Schedule</option>
            <option value="agenda" ${this.normalizeDefaultViewForEditor(this._config.default_view) === 'agenda' ? 'selected' : ''}>Agenda</option>
          </select>
        </div>

        <div class="field">
          <label>Calendars</label>
          <div class="entity-list" id="entity-list"></div>
          <p class="helper">Select one or more calendar entities to display.</p>
        </div>

        ${displayLayoutSection}
        ${colorStylingSection}
        ${backgroundSection}
        ${eventSection}
        ${managementSection}
        ${localeSection}
        ${diagnosticsSection}
      </div>
      ${this.renderColorPickerDialog()}
    `;

    this.refreshCalendarEntities();

    this.querySelectorAll('[data-field]').forEach((input) => {
      const eventName = input.type === 'text' ? 'input' : 'change';
      input.addEventListener(eventName, (event) => this.handleChange(event));
    });

    this.querySelectorAll('[data-map-field]').forEach((input) => {
      input.addEventListener('change', (event) => this.handleChange(event));
    });

    this.querySelectorAll('[data-list-field]').forEach((input) => {
      input.addEventListener('change', (event) => this.handleChange(event));
    });

    this.querySelectorAll('[data-weekday]').forEach((input) => {
      input.addEventListener('change', (event) => this.handleChange(event));
    });

    this.querySelectorAll('[data-virtual-calendar-action]').forEach((button) => {
      button.addEventListener('click', (event) => this.handleVirtualCalendarAction(event));
    });

    this.querySelectorAll('[data-event-cache-action="flush"]').forEach((button) => {
      button.addEventListener('click', () => this.handleFlushEventCache());
    });

    this.querySelectorAll('[data-virtual-calendar-field]').forEach((input) => {
      input.addEventListener('change', (event) => this.handleVirtualCalendarInput(event));
    });

    this.querySelectorAll('[data-virtual-calendar-entity]').forEach((input) => {
      input.addEventListener('change', (event) => this.handleVirtualCalendarEntityChange(event));
    });

    this.querySelectorAll('[data-color-trigger]').forEach((trigger) => {
      trigger.addEventListener('click', () => this.openColorPicker(trigger.dataset.colorField, trigger.dataset.colorMapKey || null));
    });

    this.querySelectorAll('[data-clear-config-field]').forEach((button) => {
      button.addEventListener('click', () => this.clearConfigField(button.dataset.clearConfigField));
    });

    const picker = this.querySelector('daylight-color-picker');
    if (picker) {
      picker.addEventListener('color-change', (event) => {
        this._colorPickerState.color = event.detail.color;
      });
      picker.addEventListener('color-cancel', () => this.closeColorPicker());
      picker.addEventListener('color-confirm', (event) => this.applyColorPickerColor(event.detail.color));
    }

    this.querySelectorAll('[data-close-color-picker]').forEach((button) => {
      button.addEventListener('click', () => this.closeColorPicker());
    });

    this._rendered = true;
  }

  async handleFlushEventCache() {
    const cleared = await clearAllEventCacheSnapshots();
    this._eventCacheFlushStatus = cleared
      ? 'Event cache cleared. The card will load fresh calendar data.'
      : 'Event cache is unavailable or could not be cleared; normal loading is unaffected.';
    window.dispatchEvent(new CustomEvent('daylight-calendar-card-flush-event-cache'));
    this.render();
  }

  clearConfigField(field) {
    if (!field || !Object.hasOwn(this._config, field)) return;
    const nextConfig = { ...this.value };
    delete nextConfig[field];
    this.emitConfigChanged(nextConfig);
    this.render();
  }

  refreshCalendarEntities() {
    const entityListContainer = this.querySelector('#entity-list');
    if (!entityListContainer) return;

    const calendarEntities = this.getCalendarEntities();
    const nextKey = calendarEntities.join('|');

    if (this._lastCalendarEntitiesKey === nextKey && entityListContainer.childElementCount > 0) {
      const selectedEntities = new Set(this._config.entities || []);
      entityListContainer.querySelectorAll('input[data-field="entity"]').forEach((checkbox) => {
        checkbox.checked = selectedEntities.has(checkbox.value);
      });
      return;
    }

    this._lastCalendarEntitiesKey = nextKey;
    const selectedEntities = new Set(this._config.entities || []);

    if (calendarEntities.length === 0) {
      entityListContainer.innerHTML = '<p class="helper">No calendar entities found yet.</p>';
      return;
    }

    entityListContainer.innerHTML = calendarEntities
      .map((entityId) => {
        const friendlyName = this._hass?.states?.[entityId]?.attributes?.friendly_name || entityId;
        const checked = selectedEntities.has(entityId) ? 'checked' : '';
        return `<label><input type="checkbox" data-field="entity" value="${entityId}" ${checked}> ${friendlyName}</label>`;
      })
      .join('');

    entityListContainer.querySelectorAll('input[data-field="entity"]').forEach((input) => {
      input.addEventListener('change', (event) => this.handleChange(event));
    });
  }

  updateFieldValues() {
    const titleInput = this.querySelector('input[data-field="title"]');
    if (titleInput && document.activeElement !== titleInput) {
      titleInput.value = this._config.title || '';
    }

    const defaultView = this.querySelector('select[data-field="default_view"]');
    if (defaultView && document.activeElement !== defaultView) {
      defaultView.value = this.normalizeDefaultViewForEditor(this._config.default_view);
    }

    const firstDayOfWeek = this.querySelector('select[data-field="first_day_of_week"]');
    if (firstDayOfWeek && document.activeElement !== firstDayOfWeek) {
      firstDayOfWeek.value = String(Number(this._config.first_day_of_week ?? 0));
    }

    this.querySelectorAll('input[type="checkbox"][data-field]').forEach((checkbox) => {
      if (checkbox.dataset.field === 'enable_event_management' || checkbox.dataset.field === 'show_daily_weather_forecast') {
        checkbox.checked = this._config[checkbox.dataset.field] !== false;
        return;
      }
      checkbox.checked = !!this._config[checkbox.dataset.field];
    });

    this.querySelectorAll('input[type="checkbox"][data-list-field]').forEach((checkbox) => {
      const listField = checkbox.dataset.listField;
      checkbox.checked = this.getListFieldValue(listField).includes(checkbox.value);
    });

    this.querySelectorAll('input[data-type="number"], input[data-type="nullable-number"], input[data-type="list"], input[data-field="language"], input[data-field="locale"], input[data-field="header_time_sensor"], input[data-field="header_weather_sensor"], input[data-field="preference_storage_key"], input[data-field="background_image_url"], input[data-field="background_image_size"], input[data-field="background_image_position"], input[data-field="background_image_repeat"]').forEach((input) => {
      if (document.activeElement === input) return;
      const field = input.dataset.field;
      const type = input.dataset.type;
      if (type === 'list') input.value = this.getListInputValue(field);
      else if (type === 'nullable-number') input.value = this._config[field] ?? '';
      else if (type === 'number') input.value = Number(this._config[field] ?? this.getEditorDefaultValue(field));
      else input.value = this._config[field] || '';
    });

    this.querySelectorAll('input[type="checkbox"][data-weekday]').forEach((checkbox) => {
      const weekday = Number(checkbox.dataset.weekday);
      checkbox.checked = this.getListFieldValue('week_days').includes(weekday);
    });

    this.querySelectorAll('select[data-field]').forEach((select) => {
      if (document.activeElement === select) return;
      const field = select.dataset.field;
      if (field === 'default_view') return;
      if (field === 'first_day_of_week') return;
      if (field === 'week_number_prefix_mode') {
        select.value = this.getWeekNumberPrefixMode();
        return;
      }
      if (field === 'event_calendar_bubble_mode') {
        select.value = this.getEventCalendarBubbleMode();
        return;
      }

      if (field === 'combine_background_mode') {
        select.value = this._combineBackgroundMode;
        return;
      }
      select.value = this._config[field] || '';
    });

    const combineBackgroundHexInput = this.querySelector('input[data-field="combine_background_hex"]');
    if (combineBackgroundHexInput && document.activeElement !== combineBackgroundHexInput) {
      combineBackgroundHexInput.value = this._combineBackgroundHexDraft || '#FFFFFF';
    }

    const headerColorTextInput = this.querySelector('input[data-field="header_color_text"]');
    if (headerColorTextInput && document.activeElement !== headerColorTextInput) {
      headerColorTextInput.value = this._config.header_color || '';
    }

    const headerTextColorTextInput = this.querySelector('input[data-field="header_text_color_text"]');
    if (headerTextColorTextInput && document.activeElement !== headerTextColorTextInput) {
      headerTextColorTextInput.value = this._config.header_text_color || '';
    }

    const gridColorTextInput = this.querySelector('input[data-field="grid_color_text"]');
    if (gridColorTextInput && document.activeElement !== gridColorTextInput) {
      gridColorTextInput.value = this._config.grid_color || '';
    }

    this.querySelectorAll('[data-map-field]').forEach((input) => {
      if (document.activeElement === input) return;
      const mapField = input.dataset.mapField;
      const mapKey = input.dataset.mapKey;
      const value = this.getMapFieldValue(mapField)[mapKey] || '';
      input.value = value;
    });

    this.querySelectorAll('[data-virtual-calendar-field]').forEach((input) => {
      if (document.activeElement === input) return;
      const index = Number(input.dataset.virtualCalendarIndex);
      const field = input.dataset.virtualCalendarField;
      const virtualCalendar = this.getVirtualCalendarsForEditor()[index] || {};
      input.value = virtualCalendar[field] || '';
    });

    this.querySelectorAll('[data-virtual-calendar-entity]').forEach((checkbox) => {
      const index = Number(checkbox.dataset.virtualCalendarIndex);
      const virtualCalendar = this.getVirtualCalendarsForEditor()[index] || {};
      const entities = Array.isArray(virtualCalendar.entities) ? virtualCalendar.entities : [];
      checkbox.checked = entities.includes(checkbox.value);
    });

    this.querySelectorAll('.selected-color-swatch').forEach((swatch) => {
      const field = swatch.dataset.colorField;
      const mapKey = swatch.dataset.colorMapKey || null;
      const nextColor = this.getColorValue(field, mapKey);
      swatch.style.setProperty('--selected-color', nextColor);
    });

    this.refreshCalendarEntities();
  }

  parseList(value, { asNumbers = false } = {}) {
    const parsed = String(value || '')
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);
    if (!asNumbers) return parsed;
    return parsed
      .map((item) => Number(item))
      .filter((item) => Number.isFinite(item));
  }

  handleChange(event) {
    const field = event.target.dataset.field;
    const nextConfig = { ...this.value };

    if (field === 'week_number_prefix_mode') {
      if (event.target.value === 'default') delete nextConfig.week_number_prefix;
      else if (event.target.value === 'number_only') nextConfig.week_number_prefix = '';
      else nextConfig.week_number_prefix = typeof this._config.week_number_prefix === 'string' && this._config.week_number_prefix ? this._config.week_number_prefix : 'Week';
      this.emitConfigChanged(nextConfig);
      this.render();
      return;
    }

    if (field === 'event_calendar_bubble_mode') {
      const selectedMode = event.target.value;
      if (selectedMode === 'friendly_name') {
        nextConfig.event_calendar_friendly_name = true;
        nextConfig.hide_event_calendar_bubble = false;
      } else if (selectedMode === 'none') {
        nextConfig.event_calendar_friendly_name = false;
        nextConfig.hide_event_calendar_bubble = true;
      } else {
        nextConfig.event_calendar_friendly_name = false;
        nextConfig.hide_event_calendar_bubble = false;
      }

      this._config = nextConfig;
      this.dispatchEvent(
        new CustomEvent('config-changed', {
          detail: { config: nextConfig },
          bubbles: true,
          composed: true
        })
      );
      return;
    }

    if (field === 'combine_background_mode') {
      this._combineBackgroundMode = event.target.value;
      if (this._combineBackgroundMode === 'hex') {
        const currentHex = this.normalizeHexColor(this._config.combine_background) || this._combineBackgroundHexDraft || '#FFFFFF';
        this._combineBackgroundHexDraft = currentHex;
        nextConfig.combine_background = currentHex;
      } else {
        this._combineBackgroundHexDraft = '';
        nextConfig.combine_background = this._combineBackgroundMode;
      }

      this._config = nextConfig;
      this.render();
      this.dispatchEvent(
        new CustomEvent('config-changed', {
          detail: { config: nextConfig },
          bubbles: true,
          composed: true
        })
      );
      return;
    }

    if (field === 'combine_background_hex') {
      const normalizedHex = this.normalizeHexColor(event.target.value);
      if (normalizedHex) {
        this._combineBackgroundHexDraft = normalizedHex;
        nextConfig.combine_background = normalizedHex;
      } else {
        this._combineBackgroundHexDraft = event.target.value;
      }

      this._config = nextConfig;
      this.render();
      this.dispatchEvent(
        new CustomEvent('config-changed', {
          detail: { config: nextConfig },
          bubbles: true,
          composed: true
        })
      );
      return;
    }

    if (field === 'entity') {
      const selected = Array.from(this.querySelectorAll('input[data-field="entity"]:checked')).map((input) => input.value);
      nextConfig.entities = selected;
      this._config = nextConfig;
      this.render();
      this.dispatchEvent(
        new CustomEvent('config-changed', {
          detail: { config: nextConfig },
          bubbles: true,
          composed: true
        })
      );
      return;
    } else if (event.target.dataset.mapField) {
      const mapField = event.target.dataset.mapField;
      const mapKey = event.target.dataset.mapKey;
      const mapValue = { ...this.getMapFieldValue(mapField) };
      const nextValue = event.target.value;
      if (nextValue === '') delete mapValue[mapKey];
      else mapValue[mapKey] = nextValue;
      nextConfig[mapField] = mapValue;
    } else if (event.target.dataset.listField) {
      const listField = event.target.dataset.listField;
      const checkedValues = Array.from(this.querySelectorAll(`input[data-list-field="${listField}"]:checked`)).map((input) => input.value);
      nextConfig[listField] = checkedValues;
    } else if (event.target.dataset.weekday !== undefined) {
      const selectedWeekdays = Array.from(this.querySelectorAll('input[data-weekday]:checked'))
        .map((input) => Number(input.dataset.weekday))
        .filter((value) => Number.isFinite(value))
        .sort((a, b) => a - b);
      nextConfig.week_days = selectedWeekdays;
    } else if (event.target.type === 'checkbox') {
      nextConfig[field] = event.target.checked;
      if (field === 'background_transparent') {
        nextConfig.background_opacity = event.target.checked ? 100 : 0;
      } else if (field === 'header_background_transparent') {
        nextConfig.header_background_opacity = event.target.checked ? 100 : 0;
      }
      if (field === 'compact_height' || field === 'combine_calendars' || field === 'show_dashboard_nav_button') {
        this._config = nextConfig;
        this.render();
        this.dispatchEvent(
          new CustomEvent('config-changed', {
            detail: { config: nextConfig },
            bubbles: true,
            composed: true
          })
        );
        return;
      }
    } else if (event.target.dataset.type === 'color') {
      nextConfig[field] = event.target.value;
    } else if (event.target.dataset.type === 'color-text') {
      nextConfig.header_color = event.target.value;
    } else if (event.target.dataset.type === 'header-text-color-text') {
      nextConfig.header_text_color = event.target.value;
    } else if (event.target.dataset.type === 'grid-color-text') {
      nextConfig.grid_color = event.target.value;
    } else if (event.target.dataset.type === 'number') {
      if (event.target.value === '') {
        nextConfig[field] = this.getEditorDefaultValue(field);
        if (field === 'background_opacity') {
          nextConfig.background_transparent = false;
        }
        if (field === 'header_background_opacity') {
          nextConfig.header_background_transparent = false;
        }
      } else {
        const numericValue = Number(event.target.value);
        const parsedValue = Number.isFinite(numericValue) ? numericValue : this.getEditorDefaultValue(field);
        if (field === 'week_start_hour' || field === 'week_end_hour') {
          nextConfig[field] = Math.min(23, Math.max(0, parsedValue));
        } else if (field === 'header_background_opacity') {
          nextConfig.header_background_opacity = this.normalizeBackgroundOpacity(parsedValue, 0);
          nextConfig.header_background_transparent = nextConfig.header_background_opacity >= 100;
        } else if (field === 'background_opacity') {
          nextConfig.background_opacity = this.normalizeBackgroundOpacity(parsedValue, 0);
          nextConfig.background_transparent = nextConfig.background_opacity >= 100;
        } else if (field === 'event_tint_opacity') {
          nextConfig.event_tint_opacity = this.normalizeBackgroundOpacity(parsedValue, DEFAULT_EVENT_TINT_OPACITY);
        } else {
          nextConfig[field] = parsedValue;
        }
      }
    } else if (event.target.dataset.type === 'nullable-number') {
      if (event.target.value === '') {
        nextConfig[field] = null;
      } else {
        const numericValue = Number(event.target.value);
        nextConfig[field] = Number.isFinite(numericValue) ? numericValue : null;
      }
    } else if (event.target.dataset.type === 'list') {
      nextConfig[field] = this.parseList(event.target.value);
    } else {
      nextConfig[field] = event.target.value;
      if (field === 'event_color_mode' || field === 'past_event_mode') {
        this._config = nextConfig;
        this.render();
        this.dispatchEvent(
          new CustomEvent('config-changed', {
            detail: { config: nextConfig },
            bubbles: true,
            composed: true
          })
        );
        return;
      }
    }

    this._config = nextConfig;
    this.dispatchEvent(
      new CustomEvent('config-changed', {
        detail: { config: nextConfig },
        bubbles: true,
        composed: true
      })
    );
  }
}

class LegacySkylightCalendarCardEditor extends SkylightCalendarCardEditor {}

function registerDaylightCalendarCardEditor() {
  customElements.define('daylight-calendar-card-editor', SkylightCalendarCardEditor);
  customElements.define('skylight-calendar-card-editor', LegacySkylightCalendarCardEditor);
}

function getCardStyles() {
  return `
      daylight-calendar-card,
      skylight-calendar-card {
        display: block;
        width: 100%;
        height: 100%;
        min-height: 0;
      }

      daylight-calendar-card.event-modal-open,
      skylight-calendar-card.event-modal-open {
        position: relative;
        z-index: 2147483000;
        overflow: visible;
      }

      .calendar-container {
        position: relative;
        border-radius: var(--ha-card-border-radius, 12px);
        border: var(--ha-card-border-width, 0) solid var(--ha-card-border-color, transparent);
        overflow: hidden;
        box-shadow: var(--ha-card-box-shadow, 0 2px 8px rgba(0,0,0,0.1));
        width: 100%;
        height: 100%;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        color-scheme: light;
        font-family: var(--ha-font-family-body, var(--paper-font-body1_-_font-family, inherit));
        --schedule-hour-line-color: #d1d5db;
      }

      .calendar-container::after {
        content: '';
        position: absolute;
        inset: 0;
        z-index: 0;
        background-image: var(--calendar-background-image, none);
        background-size: var(--calendar-background-size, cover);
        background-position: var(--calendar-background-position, center);
        background-repeat: var(--calendar-background-repeat, no-repeat);
        opacity: var(--calendar-background-image-opacity, 0);
        pointer-events: none;
      }

      .calendar-container > * {
        position: relative;
        z-index: 1;
      }

      .calendar-container,
      .calendar-container input,
      .calendar-container select,
      .calendar-container textarea,
      .calendar-container button {
        color-scheme: light;
      }

      .calendar-container input,
      .calendar-container select,
      .calendar-container textarea,
      .calendar-container button {
        font-family: inherit;
      }

      .header,
      .header-compact {
        position: relative;
        flex: 0 0 auto;
        background: transparent;
        color: var(--header-text-color, white);
      }

      .header::before,
      .header-compact::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: 0;
        background: var(--header-background-base, var(--header-background, var(--primary-color)));
        opacity: var(--header-background-alpha, 1);
        pointer-events: none;
      }

      .header > *,
      .header-compact > * {
        position: relative;
        z-index: 1;
      }

      .header {
        padding: 20px 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
      }

      .header-compact {
        padding: 16px 24px;
      }

      .event-refresh-warning {
        margin: 8px 12px 0;
        padding: 8px 10px;
        border-radius: 8px;
        background: rgba(251, 191, 36, 0.18);
        border: 1px solid rgba(245, 158, 11, 0.55);
        color: var(--warning-color, #92400e);
        font-size: 13px;
        line-height: 1.35;
      }

      .calendar-body {
        position: relative;
        z-index: 1;
        flex: 1 1 auto;
        min-height: 0;
        display: flex;
        flex-direction: column;
      }

      .calendar-body::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: 0;
        background: var(--calendar-background, var(--calendar-forced-background, var(--ha-card-background, var(--card-background-color, var(--calendar-default-background, #ffffff)))));
        opacity: var(--calendar-background-opacity, 1);
        pointer-events: none;
      }

      .calendar-body > * {
        position: relative;
        z-index: 1;
      }

      .header-left {
        display: flex;
        align-items: center;
        gap: 16px;
        min-width: 0;
        max-width: 100%;
      }

      .compact-header-left {
        display: flex;
        align-items: center;
        gap: 16px;
        flex-wrap: wrap;
        min-width: 0;
        max-width: 100%;
      }

      .header-compact.is-wrapped .compact-header-left,
      .header-compact.is-wrapped .compact-header-controls {
        width: 100%;
        justify-content: center;
        align-items: center;
      }

      .header-compact.is-wrapped {
        align-items: center;
        justify-content: center;
      }

      .header-compact.is-wrapped .compact-header-left {
        justify-content: center;
        text-align: center;
        flex-wrap: wrap;
      }

      .header-compact.is-wrapped .header-title-wrap {
        justify-content: center;
        text-align: center;
      }

      .header-compact.is-wrapped .compact-header-controls {
        justify-content: center;
        flex-wrap: wrap;
        row-gap: 12px;
        column-gap: 12px;
      }

      .header-compact.is-wrapped .compact-period-controls {
        margin-left: 0;
        justify-content: center;
        flex-wrap: wrap;
        width: auto;
      }

      .header-compact.is-wrapped .today-button,
      .header-compact.is-wrapped .compact-add-event-button,
      .header-compact.is-wrapped .view-mode-select,
      .header-compact.is-wrapped .nav-button {
        padding-left: 12px;
        padding-right: 12px;
      }

      .header.is-wrapped,
      .header-compact.is-wrapped {
        background: var(--header-wrapped-background, transparent);
      }

      .header.is-wrapped .header-left,
      .header.is-wrapped .header-controls {
        justify-content: center;
      }

      .header-controls.is-wrapped .period-controls {
        margin-left: 0;
      }

      .calendar-badges-inline {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }

      .calendar-badges-inline.is-wrapped {
        justify-content: center;
      }

      .calendar-badge-inline {
        padding: 6px 12px !important;
        font-size: 12px !important;
      }

      .calendar-badge-inline .calendar-badge-icon {
        width: 20px !important;
        height: 20px !important;
        font-size: 10px !important;
      }

      .calendar-badge-inline .calendar-badge-name {
        font-size: 12px;
      }

      .calendar-badge-inline .calendar-badge-person-state {
        font-size: 10px;
      }

      .calendar-badge.hide-calendar-name {
        justify-content: center;
        width: 40px;
        height: 40px;
        padding: 0 !important;
      }

      .calendar-badge-inline.hide-calendar-name {
        width: 32px;
        height: 32px;
      }

      .calendar-badge.hide-calendar-name .calendar-badge-icon {
        width: 100% !important;
        height: 100% !important;
        border-radius: inherit;
        font-size: 16px !important;
      }

      .calendar-badge-inline.hide-calendar-name .calendar-badge-icon {
        font-size: 14px !important;
      }

      .calendar-badge.hide-calendar-name .calendar-badge-icon ha-icon {
        --mdc-icon-size: 60%;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
      }

      .header-title {
        font-size: 24px;
        font-weight: 600;
        margin: 0;
        min-width: 0;
        max-width: 100%;
        overflow-wrap: anywhere;
      }

      .header-title-wrap {
        display: inline-flex;
        align-items: baseline;
        gap: 10px;
        flex-wrap: wrap;
        flex: 1 1 auto;
        min-width: 0;
        max-width: 100%;
        overflow-wrap: anywhere;
      }

      .header-time {
        font-size: 28px;
        font-weight: 500;
        opacity: 0.95;
        line-height: 1;
        white-space: nowrap;
      }

      .header-weather,
      .header-item {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 28px;
        font-weight: 500;
        opacity: 0.95;
        line-height: 1;
        white-space: nowrap;
      }

      .header-weather ha-icon,
      .header-item ha-icon {
        --mdc-icon-size: 28px;
      }

      .header-item-value {
        display: inline-block;
      }

      .add-event-button {
        background: var(--header-control-bg, rgba(255, 255, 255, 0.2));
        border: none;
        color: inherit;
        padding: 8px 16px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 13px;
        font-weight: 500;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        transition: background 0.2s;
      }

      .add-event-button:hover {
        background: var(--header-control-bg-hover, rgba(255, 255, 255, 0.3));
        border-color: var(--header-control-border-hover, rgba(255, 255, 255, 0.6));
        transform: none;
      }

      .add-event-button .icon {
        font-size: 14px;
      }

      .header-controls {
        display: flex;
        gap: 12px;
        align-items: center;
        flex-wrap: wrap;
        min-width: 0;
        max-width: 100%;
      }

      .compact-header-controls {
        justify-content: flex-end;
      }

      .header-controls-only {
        margin-left: auto;
      }

      .period-controls,
      .compact-period-controls {
        display: flex;
        align-items: center;
        gap: 12px;
        flex: 0 1 auto;
        margin-left: auto;
        min-width: 0;
        max-width: 100%;
      }

      .header-controls.is-wrapped {
        justify-content: center;
      }

      .compact-header-controls.is-wrapped {
        justify-content: center;
      }

      .compact-header-controls.is-wrapped .compact-period-controls {
        margin-left: 0;
      }

      .view-mode-buttons {
        display: inline-flex;
        align-items: center;
        background: var(--header-control-bg, rgba(255, 255, 255, 0.2));
        border-radius: 8px;
        padding: 0 10px;
        margin-left: 8px;
        position: relative;
      }

      .view-mode-buttons::after {
        content: "⌄";
        font-size: 13px;
        pointer-events: none;
        margin-left: 8px;
        opacity: 0.8;
      }

      .view-mode-select {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background: transparent;
        border: none;
        color: inherit;
        padding: 8px 0;
        padding-right: 2px;
        cursor: pointer;
        font-size: 13px;
        font-weight: 500;
        line-height: 1;
        min-width: 78px;
      }

      .view-mode-select:focus {
        outline: none;
      }

      .view-mode-select option {
        color: #111827;
        background: #ffffff;
      }

      .nav-button {
        background: var(--header-control-bg, rgba(255, 255, 255, 0.2));
        border: none;
        color: inherit;
        width: 36px;
        height: 36px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s;
      }

      .dashboard-nav-button {
        background: var(--header-control-bg, rgba(255, 255, 255, 0.2));
        border: 1px solid var(--header-control-border, rgba(255, 255, 255, 0.4));
        color: inherit;
        width: 36px;
        height: 36px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 18px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s, border-color 0.2s;
        line-height: 1;
      }

      .dashboard-nav-button:hover {
        background: var(--header-control-bg-hover, rgba(255, 255, 255, 0.3));
        border-color: var(--header-control-border-hover, rgba(255, 255, 255, 0.6));
      }

      .nav-button:hover {
        background: var(--header-control-bg-hover, rgba(255, 255, 255, 0.3));
      }

      .nav-button:disabled {
        opacity: 0.45;
        cursor: not-allowed;
      }

      .nav-button:disabled:hover {
        background: var(--header-control-bg, rgba(255, 255, 255, 0.2));
      }

      .today-button {
        background: var(--header-control-bg, rgba(255, 255, 255, 0.2));
        border: none;
        color: inherit;
        padding: 8px 16px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        transition: background 0.2s;
      }

      .today-button:hover {
        background: var(--header-control-bg-hover, rgba(255, 255, 255, 0.3));
      }

      .theme-toggle {
        width: 30px;
        height: 30px;
        border-radius: 8px;
        border: 1px solid var(--header-control-border, rgba(255, 255, 255, 0.4));
        background: var(--header-control-bg, rgba(255, 255, 255, 0.2));
        color: inherit;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 14px;
        line-height: 1;
        transition: all 0.2s;
      }

      .theme-toggle:hover,
      .compact-add-event-button:hover {
        background: var(--header-control-bg-hover, rgba(255, 255, 255, 0.3));
        border-color: var(--header-control-border-hover, rgba(255, 255, 255, 0.6));
      }

      .compact-add-event-button {
        width: 30px;
        height: 30px;
        border-radius: 8px;
        border: 1px solid var(--header-control-border, rgba(255, 255, 255, 0.4));
        background: var(--header-control-bg, rgba(255, 255, 255, 0.2));
        color: inherit;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 18px;
        line-height: 1;
        transition: all 0.2s;
        padding: 0;
      }

      .month-year {
        font-size: 18px;
        font-weight: 500;
        color: inherit;
        min-width: 210px;
        max-width: 100%;
        text-align: center;
        overflow-wrap: anywhere;
      }

      .calendar-container.hide-year .month-year {
        min-width: 145px;
      }

      .calendar-grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 1px;
        background: var(--calendar-grid-color, #e5e7eb);
        border-top: 1px solid var(--calendar-grid-color, #e5e7eb);
        flex: 1 1 auto;
        min-height: 0;
        overflow: auto;
      }

      .calendar-grid.month-week-numbers {
        grid-template-columns: 28px repeat(7, 1fr);
      }

      .month-week-number-header {
        background: #f9fafb;
      }

      .month-week-number-cell {
        background: #f9fafb;
        color: #6b7280;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px 0;
      }

      .month-week-number-text {
        color: inherit;
        font-size: 11px;
        font-weight: 600;
        line-height: 1;
        transform: rotate(-90deg);
        white-space: nowrap;
      }


      .calendar-grid.compact-month {
        align-items: stretch;
      }

      .calendar-grid.compact-month .day-cell {
        min-height: 0;
        overflow: visible;
      }

      .day-header {
        background: #f9fafb;
        padding: 12px 8px;
        text-align: center;
        font-weight: 600;
        font-size: 12px;
        text-transform: uppercase;
        color: #6b7280;
        letter-spacing: 0.5px;
      }

      .day-cell {
        background: white;
        min-height: 100px;
        min-width: 0;
        padding: 8px;
        position: relative;
        cursor: pointer;
        transition: background 0.2s;
      }

      .day-cell:hover {
        background: #f9fafb;
      }

      .day-cell.other-month {
        background: #fafafa;
        opacity: 0.5;
      }

      .day-cell.today {
        background: #eff6ff;
      }

      .day-cell.day-style-has-background,
      .week-day-column.day-style-has-background,
      .week-standard-day-column.day-style-has-background,
      .agenda-day-row.day-style-has-background {
        background: var(--day-conditional-background) !important;
      }

      .day-cell.day-style-has-background:hover {
        background: var(--day-conditional-background) !important;
      }

      .week-day-column.day-style-has-background .week-day-header,
      .week-standard-day-column.day-style-has-background .week-standard-day-header,
      .week-standard-day-column.day-style-has-background .all-day-events,
      .week-standard-day-column.day-style-has-background .day-time-slot,
      .agenda-day-row.day-style-has-background .agenda-day-label {
        background: transparent !important;
      }

      .day-cell.day-style-has-border,
      .week-day-column.day-style-has-border,
      .week-standard-day-column.day-style-has-border,
      .agenda-day-row.day-style-has-border {
        position: relative;
      }

      .day-cell.day-style-has-border::after,
      .week-day-column.day-style-has-border::after,
      .week-standard-day-column.day-style-has-border::after,
      .agenda-day-row.day-style-has-border::after {
        content: '';
        position: absolute;
        inset: 0;
        border: var(--day-style-border-width, 2px) solid var(--day-style-border-color, var(--divider-color, #d1d5db));
        border-radius: inherit;
        box-sizing: border-box;
        pointer-events: none;
        z-index: 2;
      }

      .day-number {
        font-size: 14px;
        font-weight: 600;
        color: #374151;
        margin-bottom: 4px;
      }

      .day-badges {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        margin-left: auto;
        max-width: 100%;
        overflow: hidden;
      }

      .day-badge {
        width: var(--dcc-day-badge-size, 30px);
        height: var(--dcc-day-badge-size, 30px);
        min-width: var(--dcc-day-badge-size, 30px);
        max-width: 100%;
        border-radius: 999px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: var(--dcc-day-badge-font-size, 12px);
        font-weight: 700;
        line-height: 1;
        background: var(--dcc-day-badge-background, var(--primary-color));
        color: var(--dcc-day-badge-color, var(--text-primary-color, #fff));
        overflow: hidden;
        box-sizing: border-box;
      }

      .day-badge-action {
        border: 0;
        padding: 0;
        font-family: inherit;
        appearance: none;
        cursor: pointer;
      }

      .day-badge.has-text {
        width: auto;
        gap: 4px;
        padding: 0 8px;
      }

      .day-badge ha-icon {
        --mdc-icon-size: calc(var(--dcc-day-badge-size, 30px) * 0.53);
        color: inherit;
        flex: 0 0 auto;
      }

      .day-badge-text {
        display: block;
        min-width: 0;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .day-header-row {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 6px;
        margin-bottom: 4px;
        min-height: 42px;
      }

      .day-header-row .day-number {
        margin-bottom: 0;
      }

      .month-day-forecast {
        display: inline-flex;
        align-items: center;
        gap: 4px;
      }

      .month-day-forecast .forecast-condition {
        font-size: 14px;
      }

      .month-day-forecast .forecast-condition ha-icon {
        --mdc-icon-size: 14px;
      }

      .month-day-forecast .forecast-temperatures {
        font-size: 12px;
        gap: 2px;
      }

      .day-cell.today .day-number {
        background: #3b82f6;
        color: white;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 4px;
      }

      .event {
        background: #3b82f6;
        color: var(--event-bubble-text-color, white);
        display: block;
        width: 100%;
        max-width: 100%;
        padding: 4px 6px 4px calc(6px + var(--combine-left-offset, 0px));
        border-radius: 4px;
        font-size: var(--event-bubble-font-size, 11px);
        line-height: 1.2;
        margin-bottom: 3px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        box-sizing: border-box;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
        font-weight: 500;
        position: relative;
        padding-bottom: calc(4px + (var(--combined-corner-bubbles, 0) * 14px));
      }

      .event:hover {
        transform: translateY(-1px);
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
      }
      .event.month-span-event {
        width: calc((100% * var(--month-event-visible-span, 1)) + ((16px + 1px) * var(--month-event-gap-count, 0)));
        max-width: none;
        z-index: 2;
      }

      .event.month-span-event.continues-prev {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      .event.month-span-event.continues-next {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }

      .month-span-event-spacer {
        visibility: hidden;
        pointer-events: none;
      }

      .month-span-event-spacer::before {
        content: "\\00a0";
      }


      .event-time {
        font-size: var(--event-time-font-size, 9px);
        opacity: 0.9;
        margin-right: 4px;
      }

      .more-events {
        font-size: 10px;
        color: #6b7280;
        margin-top: 2px;
        font-weight: 500;
        cursor: pointer;
        width: fit-content;
      }

      .more-events:hover {
        text-decoration: underline;
      }

      .week-compact-container.single-day-modal {
        grid-template-columns: 1fr;
        border-top: none;
        background: transparent;
      }

      /* Week Compact View Styles */
      .week-compact-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 1px;
        background: var(--calendar-grid-color, #e5e7eb);
        border-top: 1px solid var(--calendar-grid-color, #e5e7eb);
        flex: 1 1 auto;
        min-height: 0;
        overflow: auto;
      }

      .week-compact-container.compact-height {
        grid-auto-rows: max-content;
        align-content: start;
      }

      .week-day-column {
        background: white;
        padding: 16px 12px;
        min-height: 200px;
      }

      .week-day-header {
        text-align: center;
        margin-bottom: var(--week-compact-day-header-spacing, 12px);
        padding-bottom: var(--week-compact-day-header-spacing, 12px);
        border-bottom: 2px solid var(--calendar-grid-color, #e5e7eb);
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: var(--week-compact-header-height, auto);
        box-sizing: border-box;
      }

      .week-day-header-main {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
      }

      .week-day-meta-row {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-top: 2px;
        min-height: 32px;
      }

      .week-compact-container.day-badge-layout-stacked .week-day-meta-row,
      .week-standard-container.day-badge-layout-stacked .week-day-meta-row {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
        min-height: 0;
      }

      .week-compact-container.day-badge-layout-stacked .week-day-meta-row .day-badges,
      .week-standard-container.day-badge-layout-stacked .week-day-meta-row .day-badges {
        margin-left: 0;
        justify-content: center;
        flex-wrap: wrap;
        overflow: visible;
      }

      .week-day-forecast,
      .week-standard-day-forecast,
      .agenda-day-forecast {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        margin-top: 0;
        line-height: 1;
      }

      .forecast-condition {
        display: inline-flex;
        font-size: 16px;
      }

      .forecast-condition ha-icon {
        --mdc-icon-size: 20px;
      }

      .forecast-temperatures {
        display: inline-flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 3px;
        font-size: 14px;
        color: #374151;
      }

      .forecast-temp-low {
        opacity: 0.75;
      }

      .week-day-name {
        font-size: var(--week-compact-weekday-font-size, 12px);
        font-weight: 600;
        text-transform: uppercase;
        color: var(--week-compact-weekday-color, #6b7280);
        letter-spacing: 0.5px;
      }

      .week-day-date {
        font-size: 24px;
        font-weight: 700;
        color: #111827;
        margin-top: 0;
        line-height: 1;
      }

      .week-day-column.today .week-day-header {
        border-bottom-color: #3b82f6;
      }

      .week-day-column.today .week-day-date {
        color: #3b82f6;
      }

      .week-compact-event {
        background: #3b82f6;
        color: var(--event-bubble-text-color, white);
        font-size: var(--event-bubble-font-size, 11px);
        padding: 8px 10px 8px calc(10px + var(--combine-left-offset, 0px));
        border-radius: 6px;
        margin-bottom: 8px;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
        position: relative;
        padding-bottom: calc(8px + (var(--combined-corner-bubbles, 0) * 14px));
      }

      .week-compact-event:hover {
        transform: translateX(2px);
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      }

      .week-compact-event-time {
        font-size: var(--event-time-font-size, 9px);
        font-weight: 600;
        opacity: 0.9;
        margin-bottom: 4px;
      }

      .week-compact-event-title {
        font-size: 1em;
        font-weight: 500;
        line-height: 1.3;
      }

      .event-title-with-prefix {
        display: inline-flex;
        align-items: center;
        gap: clamp(4px, calc(var(--event-bubble-font-size, 11px) * 0.3), 7px);
        min-width: 0;
      }

      .event-style-icon {
        color: inherit;
        flex: 0 0 auto;
      }

      .event-style-icon-before-title {
        --mdc-icon-size: var(--event-style-icon-size, 1em);
        width: var(--mdc-icon-size);
        height: var(--mdc-icon-size);
        font-size: var(--mdc-icon-size);
        line-height: 1;
      }

      .event-style-icon-corner {
        --mdc-icon-size: var(--event-style-icon-size, var(--event-bubble-font-size, 14px));
        position: absolute;
        right: 6px;
        bottom: 4px;
        width: var(--mdc-icon-size);
        height: var(--mdc-icon-size);
        font-size: var(--mdc-icon-size);
        line-height: 1;
        pointer-events: none;
        z-index: 2;
      }

      .event-title-prefix-friendly-name {
        font-size: 0.9em;
        font-weight: 600;
        opacity: 0.95;
        white-space: nowrap;
      }

      .event-title-prefix-badge {
        --event-title-prefix-size: clamp(9px, calc(var(--event-bubble-font-size, 11px) * 0.8), 15px);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: var(--event-title-prefix-size);
        height: var(--event-title-prefix-size);
        border-radius: 50%;
        overflow: hidden;
        flex: 0 0 auto;
        line-height: 1;
      }

      .event-title-prefix-badges {
        display: inline-flex;
        align-items: center;
        gap: clamp(2px, calc(var(--event-bubble-font-size, 11px) * 0.15), 4px);
        flex: 0 0 auto;
      }

      .event-title-prefix-badge ha-icon {
        --mdc-icon-size: calc(var(--event-title-prefix-size) * 0.78);
        font-size: var(--mdc-icon-size);
        width: var(--mdc-icon-size);
        height: var(--mdc-icon-size);
        line-height: 1;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: inherit;
      }

      .event-title-prefix-badge span {
        font-size: calc(var(--event-title-prefix-size) * 0.62);
        font-weight: 600;
        line-height: 1;
      }

      .event-title-prefix-badge img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .week-compact-event-location {
        font-size: var(--event-location-font-size, 9px);
        opacity: 0.9;
        margin-top: 4px;
        line-height: 1.3;
        white-space: normal;
        overflow-wrap: anywhere;
        word-break: break-word;
      }

      .agenda-container {
        display: flex;
        flex-direction: column;
        gap: 8px;
        overflow-y: auto;
        padding-right: 4px;
        flex: 1 1 auto;
        min-height: 0;
      }

      .agenda-day-row {
        display: grid;
        grid-template-columns: 88px 1fr;
        gap: 12px;
        border-top: 1px solid var(--calendar-grid-color, #e5e7eb);
        padding-top: 8px;
      }

      .agenda-month-banner {
        width: 100%;
        border-top: 2px solid var(--calendar-grid-color, #d1d5db);
        border-bottom: 1px solid var(--calendar-grid-color, #d1d5db);
        color: #4b5563;
        font-size: 24px;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 48px;
        padding: 16px 0;
        margin-top: 6px;
      }

      .agenda-day-label {
        text-align: center;
        margin-bottom: 12px;
        padding-bottom: 12px;
        border-bottom: 2px solid var(--calendar-grid-color, #e5e7eb);
      }

      .agenda-day-weekday {
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        color: #6b7280;
        letter-spacing: 0.5px;
      }

      .agenda-day-date {
        font-size: 24px;
        font-weight: 700;
        color: #111827;
        margin-top: 4px;
      }

      .agenda-day-forecast {
        margin-top: 6px;
      }

      .agenda-day-forecast .forecast-condition ha-icon {
        --mdc-icon-size: 18px;
      }

      .agenda-day-forecast .forecast-temperatures {
        font-size: 11px;
      }

      .agenda-day-row.today .agenda-day-label {
        border-bottom-color: #3b82f6;
      }

      .agenda-day-events {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .agenda-event {
        border-radius: 8px;
        padding: 10px 64px 10px calc(12px + var(--combine-left-offset, 0px));
        cursor: pointer;
        overflow: hidden;
        color: var(--event-bubble-text-color, white);
        position: relative;
        height: auto;
        min-height: var(--agenda-event-min-height, 68px);
        box-sizing: border-box;
        padding-bottom: calc(10px + (var(--combined-corner-bubbles, 0) * 16px));
      }

      .agenda-event-time {
        font-size: var(--event-time-font-size, 10px);
        font-weight: 600;
        margin-bottom: 4px;
        min-height: 1.2em;
      }

      .agenda-event-title {
        font-size: var(--event-bubble-font-size, 16px);
        font-weight: 700;
        min-height: 1.2em;
        line-height: 1.25;
      }

      .agenda-event-location {
        font-size: var(--event-location-font-size, 9px);
        opacity: 0.95;
        margin-top: 4px;
        line-height: 1.3;
        white-space: normal;
        overflow-wrap: anywhere;
        word-break: break-word;
        min-height: 1.2em;
      }

      .agenda-event .week-standard-event-icons {
        position: absolute;
        top: 10px;
        right: 10px;
        margin-top: 0;
      }

      .calendar-container.agenda-compact-events .agenda-event {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: baseline;
        gap: 0 8px;
        height: auto;
        min-height: 0;
        padding: 8px 64px 8px calc(12px + var(--combine-left-offset, 0px));
        padding-bottom: calc(8px + (var(--combined-corner-bubbles, 0) * 16px));
      }

      .calendar-container.agenda-compact-events .agenda-event-title {
        flex: 1 1 auto;
        min-height: unset;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .calendar-container.agenda-compact-events .agenda-event-time {
        flex: 0 0 auto;
        min-height: unset;
        margin-bottom: 0;
        opacity: 0.9;
        white-space: nowrap;
      }

      .calendar-container.agenda-compact-events .agenda-event-location {
        flex: 0 0 100%;
        min-height: unset;
      }

      .calendar-container.agenda-compact-events .agenda-day-date {
        font-size: 16px;
      }

      .calendar-container.agenda-compact-events .agenda-day-label {
        margin-bottom: 2px;
        padding-bottom: 2px;
      }

      .calendar-container.agenda-compact-events .agenda-month-banner {
        font-size: 18px;
        min-height: 36px;
        padding: 8px 0;
      }

      .agenda-empty-day {
        color: #9ca3af;
        font-size: 12px;
        padding: 8px 0;
      }

      /* Week Standard View Styles */

      .calendar-badges-container {
        position: relative;
      }

      .calendar-badges {
        padding: 16px 24px;
        display: flex;
        gap: 12px;
        flex-wrap: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: thin;
        background: white;
        border-bottom: 1px solid var(--calendar-grid-color, #e5e7eb);
      }

      .calendar-badges-container.has-overflow::after,
      .calendar-badges-container.has-overflow::before {
        position: absolute;
        top: 0;
        bottom: 1px;
        width: 44px;
        pointer-events: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        font-weight: 800;
        text-shadow: 0 0 8px rgba(255, 255, 255, 0.85);
        opacity: 0;
        transition: opacity 0.2s ease;
      }

      .calendar-badges-container.has-overflow::after {
        content: '»';
        right: 0;
        color: rgba(17, 24, 39, 0.85);
        background: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
      }

      .calendar-badges-container.has-overflow::before {
        content: '«';
        left: 0;
        color: rgba(17, 24, 39, 0.75);
        background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
      }

      .calendar-badges-container.show-right-indicator::after,
      .calendar-badges-container.show-left-indicator::before {
        opacity: 1;
      }

      .calendar-badges-container.show-right-indicator::after {
        animation: badges-overflow-nudge-right 1.2s ease-in-out infinite;
      }

      .calendar-badges-container.show-left-indicator::before {
        animation: badges-overflow-nudge-left 1.2s ease-in-out infinite;
      }

      @keyframes badges-overflow-nudge-right {
        0%,
        100% {
          transform: translateX(0);
        }
        50% {
          transform: translateX(3px);
        }
      }

      @keyframes badges-overflow-nudge-left {
        0%,
        100% {
          transform: translateX(0);
        }
        50% {
          transform: translateX(-3px);
        }
      }

      .calendar-badge {
        display: inline-flex;
        align-items: center;
        flex: 0 0 auto;
        gap: 8px;
        padding: 8px 16px;
        border-radius: 20px;
        border: 2px solid;
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
        user-select: none;
      }

      .calendar-badge:hover {
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }

      .calendar-badge-hidden {
        opacity: 0.5;
      }

      .calendar-badge-icon {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--skylight-calendar-filter-icon-color, white);
        font-size: 11px;
        font-weight: 600;
        overflow: hidden;
      }

      .calendar-badge:not(.hide-calendar-name) .calendar-badge-person-icon {
        width: 32px;
        height: 32px;
        flex: 0 0 32px;
        font-size: 13px;
      }

      .calendar-badge-inline:not(.hide-calendar-name) .calendar-badge-person-icon {
        width: 28px !important;
        height: 28px !important;
        flex-basis: 28px;
        font-size: 12px !important;
      }

      .calendar-badge-icon ha-icon {
        --mdc-icon-size: 14px;
        color: inherit;
      }

      .calendar-badge:not(.hide-calendar-name) .calendar-badge-person-icon ha-icon {
        --mdc-icon-size: 18px;
      }

      .calendar-badge-photo img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }

      .calendar-badge-label {
        display: flex;
        flex-direction: column;
        min-width: 0;
        line-height: 1.15;
      }

      .calendar-badge-name {
        color: inherit;
      }

      .calendar-badge-person-state {
        font-size: 11px;
        font-weight: 400;
        opacity: 0.82;
        margin-top: 2px;
        white-space: nowrap;
      }

      .week-standard-container {
        --week-standard-column-gap: 12px;
        --week-standard-bridge-overlap: 2px;
        --all-day-horizontal-padding: 8px;
        display: flex;
        align-items: flex-start;
        background: #f9fafb;
        overflow: auto;
        padding: 16px;
        gap: var(--week-standard-column-gap);
        width: 100%;
        flex: 1 1 auto;
        min-height: 0;
        box-sizing: border-box;
      }

      .time-column {
        min-width: 60px;
        flex-shrink: 0;
        position: relative;
        background: transparent;
      }

      .time-column-header-spacer {
        height: var(--week-standard-time-header-spacer-height, 60px);
        background: transparent;
        flex-shrink: 0;
      }

      .time-column-allday-spacer {
        padding: 8px;
        background: transparent;
        border-bottom: 2px solid transparent;
        flex-shrink: 0;
        box-sizing: border-box;
      }

      .time-column-extra-spacer {
        height: 35px;
        background: transparent;
        flex-shrink: 0;
      }

      .time-slot {
        height: 120px;
        font-size: 11px;
        color: #9ca3af;
        text-align: right;
        font-weight: 500;
        position: relative;
        padding-right: 8px;
        display: flex;
        align-items: flex-start;
        padding-top: 0;
        box-sizing: border-box;
        border-top: 1px solid transparent;
      }

      .time-slot-label {
        position: absolute;
        top: -6px;
        right: 8px;
        line-height: 1;
      }

      .week-standard-day-column {
        flex: 1;
        min-width: 140px;
        background: white;
        border-radius: 8px;
        overflow: visible;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      }

      .week-standard-container.compact-width .week-standard-day-column {
        min-width: 0;
      }

      .week-standard-day-header {
        padding: 16px;
        text-align: center;
        border-bottom: 1px solid var(--calendar-grid-color, #e5e7eb);
        background: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: var(--week-standard-day-header-height, auto);
        box-sizing: border-box;
      }

      .week-standard-day-name {
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        color: #6b7280;
        letter-spacing: 0.5px;
      }

      .week-standard-day-date {
        font-size: 24px;
        font-weight: 700;
        color: #111827;
        margin-top: 0;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
        line-height: 1;
        position: relative;
        z-index: 1;
      }

      .week-standard-day-column.today .week-standard-day-date {
        background: #3b82f6;
        color: white;
        border-radius: 50%;
      }

      .day-time-slots {
        position: relative;
        min-height: 600px;
      }

      .all-day-events {
        padding: var(--all-day-horizontal-padding);
        background: #f9fafb;
        border-bottom: 2px solid var(--calendar-grid-color, #e5e7eb);
        display: flex;
        flex-direction: column;
        gap: 4px;
        box-sizing: border-box;
        overflow: visible;
      }

      .all-day-event {
        padding: 4px var(--all-day-horizontal-padding) 4px calc(var(--all-day-horizontal-padding) + var(--combine-left-offset, 0px));
        color: var(--event-bubble-text-color, white);
        border-radius: 6px;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
        font-size: var(--event-bubble-font-size, 11px);
        flex-shrink: 0;
        height: 24px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        overflow: visible;
        position: relative;
      }

      .all-day-event.continues-prev {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      .all-day-event.continues-next {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }

      .all-day-event.bridge-prev {
        margin-left: calc(-1 * (var(--week-standard-column-gap) + var(--week-standard-bridge-overlap)));
        padding-left: calc(var(--all-day-horizontal-padding) + var(--week-standard-column-gap) + var(--week-standard-bridge-overlap) + var(--combine-left-offset, 0px));
      }

      .all-day-event.bridge-next {
        margin-right: calc(-1 * (var(--week-standard-column-gap) + var(--week-standard-bridge-overlap)));
        padding-right: calc(var(--all-day-horizontal-padding) + var(--week-standard-column-gap) + var(--week-standard-bridge-overlap));
      }

      .all-day-event-spacer {
        height: 24px;
        flex-shrink: 0;
      }

      .all-day-event:hover {
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      }

      .all-day-event.leading-span-title {
        z-index: 2;
      }

      .all-day-event[data-all-day-span-days] {
        width: calc((100% * var(--all-day-visible-span, 1)) + ((var(--week-standard-column-gap) + var(--all-day-horizontal-padding) + var(--all-day-horizontal-padding)) * var(--all-day-title-gap-count, 0)));
        max-width: none;
        z-index: 2;
      }

      .all-day-event-title {
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: inherit;
        display: block;
        min-width: 0;
        max-width: 100%;
        flex: 1 1 auto;
      }

      .all-day-event-title.spans-multiple-days {
        position: static;
        transform: none;
        width: auto;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        z-index: 1;
        pointer-events: none;
      }

      .day-time-slot {
        height: 120px;
        border-top: 1px solid var(--calendar-grid-color, var(--schedule-hour-line-color, #e5e7eb));
        position: relative;
        box-sizing: border-box;
        cursor: pointer;
        transition: background 0.2s;
      }

      .day-time-slot:hover {
        background: rgba(59, 130, 246, 0.05);
      }

      .week-standard-event {
        position: absolute;
        left: 8px;
        right: 8px;
        color: var(--event-bubble-text-color, white);
        padding: 4px 8px 4px calc(8px + var(--combine-left-offset, 0px));
        border-radius: 8px;
        font-size: var(--event-bubble-font-size, 11px);
        overflow: hidden;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
        z-index: 1;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        box-sizing: border-box;
        padding-bottom: calc(4px + (var(--combined-corner-bubbles, 0) * 14px));
      }

      .week-standard-event:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10;
      }

      .week-standard-event-title {
        font-weight: 600;
        margin-bottom: 4px;
        line-height: 1.3;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .week-standard-event-time {
        font-size: var(--event-time-font-size, 9px);
        font-weight: 500;
        opacity: 0.85;
      }

      .week-standard-event-location {
        font-size: var(--event-location-font-size, 9px);
        opacity: 0.9;
        margin-top: 4px;
        line-height: 1.3;
        white-space: normal;
        overflow-wrap: anywhere;
        word-break: break-word;
      }

      .week-standard-event-calendar-name {
        font-size: 10px;
        font-weight: 600;
        opacity: 0.9;
      }

      .week-standard-event-icons {
        display: flex;
        justify-content: flex-end;
        gap: 4px;
        margin-top: 4px;
      }

      .week-standard-event-icon {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        flex-shrink: 0;
      }

      .combined-corner-bubbles {
        position: absolute;
        right: 6px;
        bottom: 4px;
        display: inline-flex;
        align-items: center;
        justify-content: flex-end;
        gap: 2px;
        pointer-events: none;
      }

      .combined-corner-bubble {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 8px;
        font-weight: 700;
        line-height: 1;
        box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.7);
      }

      .current-time-line {
        position: absolute;
        left: 0;
        right: 0;
        height: 2px;
        background: #ef4444;
        z-index: 5;
        pointer-events: none;
      }

      .current-time-line::before {
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #ef4444;
        left: -4px;
        top: -3px;
      }

      daylight-calendar-card.event-modal-open .calendar-container,
      daylight-calendar-card.event-modal-open .calendar-body,
      skylight-calendar-card.event-modal-open .calendar-container,
      skylight-calendar-card.event-modal-open .calendar-body {
        overflow: visible;
      }

      .event-modal {
        display: none;
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 2147483647;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        padding: 16px;
      }

      .event-modal.show {
        display: flex;
      }

      .modal-content {
        background: white;
        border-radius: 12px;
        padding: 24px;
        max-width: 500px;
        width: 90%;
        box-sizing: border-box;
        max-height: 80vh;
        max-height: min(80vh, calc(100dvh - 32px));
        overflow-y: auto;
        overflow-x: hidden;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
      }

      .modal-content.modal-size-narrow {
        box-sizing: border-box;
        max-width: 380px;
        width: min(90%, 380px);
      }

      .modal-content.modal-size-medium {
        box-sizing: border-box;
        max-width: 500px;
        width: 90%;
      }

      .modal-content.modal-size-wide {
        box-sizing: border-box;
        max-width: 760px;
        width: min(94%, 760px);
      }

      .modal-content.modal-size-full {
        box-sizing: border-box;
        max-width: none;
        width: calc(100vw - 32px);
        max-height: calc(100dvh - 32px);
      }

      .modal-content.modal-size-narrow > .confirm-dialog,
      .modal-content.modal-size-wide > .confirm-dialog,
      .modal-content.modal-size-full > .confirm-dialog {
        box-sizing: border-box;
        max-width: none;
        width: 100%;
      }

      @media (max-width: 480px) {
        .modal-content,
        .modal-content.modal-size-narrow,
        .modal-content.modal-size-medium,
        .modal-content.modal-size-wide,
        .modal-content.modal-size-full {
          width: calc(100vw - 24px);
          max-width: calc(100vw - 24px);
          max-height: calc(100dvh - 24px);
          padding: 16px;
          box-sizing: border-box;
        }
      }

      .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: start;
        margin-bottom: 16px;
      }

      .modal-title {
        font-size: 20px;
        font-weight: 600;
        color: #111827;
        margin: 0;
      }

      .modal-close {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: #6b7280;
        padding: 0;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        transition: background 0.2s;
      }

      .modal-close:hover {
        background: #f3f4f6;
      }

      .modal-body {
        color: #374151;
      }

      .modal-row {
        display: flex;
        gap: 12px;
        margin-bottom: 12px;
        font-size: 14px;
      }

      .modal-label {
        font-weight: 600;
        min-width: 80px;
        color: #6b7280;
      }

      .modal-value {
        flex: 1;
      }

      .modal-row-description {
        align-items: flex-start;
      }
      .modal-location-link {
        display: inline-flex;
        align-items: center;
        min-height: 36px;
        padding: 0;
        border: 0;
        background: transparent;
        color: var(--primary-color, #3b82f6);
        font: inherit;
        text-align: left;
        text-decoration: underline;
        cursor: pointer;
        overflow-wrap: anywhere;
      }

      .modal-location-actions {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 8px;
        margin-top: 4px;
        margin-bottom: 4px;
        width: 100%;
      }

      .modal-location-action {
        min-width: 0;
        min-height: 40px;
        padding: 8px 8px;
        font-size: 13px;
        white-space: nowrap;
      }

      @media (max-width: 480px) {
        .modal-location-action {
          padding: 8px 6px;
          font-size: 12px;
        }
      }

      .event-description-content {
        line-height: 1.5;
        overflow-wrap: anywhere;
      }

      .event-description-content > :first-child {
        margin-top: 0;
      }

      .event-description-content > :last-child {
        margin-bottom: 0;
      }

      .event-description-content p,
      .event-description-content ul,
      .event-description-content ol,
      .event-description-content blockquote,
      .event-description-content pre {
        margin: 0 0 10px;
      }

      .event-description-content ul,
      .event-description-content ol {
        padding-left: 20px;
      }

      .event-description-content li + li {
        margin-top: 4px;
      }

      .event-description-content h1,
      .event-description-content h2,
      .event-description-content h3,
      .event-description-content h4,
      .event-description-content h5,
      .event-description-content h6 {
        margin: 0 0 8px;
        font-weight: 700;
        line-height: 1.25;
        color: #111827;
      }

      .event-description-content h1 { font-size: 20px; }
      .event-description-content h2 { font-size: 18px; }
      .event-description-content h3 { font-size: 16px; }
      .event-description-content h4,
      .event-description-content h5,
      .event-description-content h6 { font-size: 14px; }

      .event-description-content blockquote {
        border-left: 3px solid #d1d5db;
        color: #4b5563;
        padding-left: 10px;
      }

      .event-description-content code {
        background: #f3f4f6;
        border-radius: 4px;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 0.9em;
        padding: 1px 4px;
      }

      .event-description-content pre {
        background: #f3f4f6;
        border-radius: 8px;
        overflow-x: auto;
        padding: 10px;
        white-space: pre-wrap;
      }

      .event-description-content pre code {
        background: transparent;
        padding: 0;
      }

      .event-description-content a {
        color: #2563eb;
        text-decoration: underline;
      }

      #create-event-form,
      #edit-event-form {
        display: flex;
        flex-direction: column;
        gap: 18px;
      }

      .form-group,
      .form-group-inline {
        margin-bottom: 0;
      }

      .form-label {
        display: block;
        font-size: 14px;
        font-weight: 600;
        color: #374151;
        margin-bottom: 8px;
      }

      .form-group-inline .form-label {
        margin-bottom: 0;
      }

      .form-inline-row {
        display: grid;
        grid-template-columns: 120px minmax(0, 1fr);
        gap: 12px;
        align-items: center;
      }

      .form-inline-row.form-inline-row-top {
        align-items: start;
      }

      .form-required {
        color: #ef4444;
        margin-left: 4px;
      }

      .form-input {
        width: 100%;
        padding: 10px 12px;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        font-size: 14px;
        font-family: inherit;
        transition: border-color 0.2s;
        box-sizing: border-box;
      }

      .form-input:focus {
        outline: none;
        border-color: #3b82f6;
      }

      .form-input.error {
        border-color: #ef4444;
      }

      .form-select {
        width: 100%;
        padding: 10px 12px;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        font-size: 14px;
        font-family: inherit;
        background: white;
        cursor: pointer;
        transition: border-color 0.2s;
        box-sizing: border-box;
      }

      .form-select:focus {
        outline: none;
        border-color: #3b82f6;
      }

      .form-textarea {
        width: 100%;
        padding: 10px 12px;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        font-size: 14px;
        font-family: inherit;
        min-height: 80px;
        resize: vertical;
        transition: border-color 0.2s;
        box-sizing: border-box;
      }

      .form-textarea:focus {
        outline: none;
        border-color: #3b82f6;
      }

      .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }

      .form-checkbox-group {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .form-checkbox-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
        gap: 10px 14px;
      }

      .form-checkbox-row {
        display: flex;
        flex-wrap: wrap;
        gap: 18px;
        margin-bottom: 0;
      }

      .form-checkbox-row .form-group {
        margin-bottom: 0;
      }

      .form-checkbox {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }

      .form-checkbox-label {
        font-size: 14px;
        color: #374151;
        cursor: pointer;
        user-select: none;
      }

      .recurrence-ends-label {
        margin-bottom: 10px;
      }

      .recurrence-end-row {
        display: grid;
        grid-template-columns: 110px minmax(0, 1fr);
        gap: 12px;
        align-items: center;
        margin-bottom: 10px;
      }

      .recurrence-end-option {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        color: #374151;
        cursor: pointer;
      }

      .recurrence-end-option input[type="radio"] {
        margin: 0;
      }

      .recurrence-end-row .form-input {
        margin: 0;
      }

      .recurrence-after-input {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .recurrence-after-input .form-input {
        max-width: 80px;
      }

      .form-error {
        color: #ef4444;
        font-size: 13px;
        margin-top: 4px;
      }

      .form-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        justify-content: flex-end;
        margin-top: 6px;
        max-width: 100%;
      }

      .btn {
        padding: 10px 20px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
        border: none;
        font-family: inherit;
        min-width: 0;
        max-width: 100%;
        white-space: normal;
        overflow-wrap: anywhere;
      }

      .btn-primary {
        background: #3b82f6;
        color: white;
      }

      .btn-primary:hover {
        background: #2563eb;
        transform: translateY(-1px);
      }

      .btn-primary:disabled {
        background: #9ca3af;
        cursor: not-allowed;
        transform: none;
      }

      .btn-secondary {
        background: #f3f4f6;
        color: #374151;
      }

      .btn-secondary:hover {
        background: #e5e7eb;
      }

      .btn-danger {
        background: #ef4444;
        color: white;
      }

      .btn-danger:hover {
        background: #dc2626;
        transform: translateY(-1px);
      }

      .btn-danger:disabled {
        background: #fca5a5;
        cursor: not-allowed;
        transform: none;
      }

      .modal-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        justify-content: space-between;
        margin-top: 24px;
        align-items: center;
        max-width: 100%;
      }

      .modal-actions-left {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        max-width: 100%;
      }

      .modal-actions-right {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        max-width: 100%;
      }

      .confirm-dialog {
        background: white;
        border-radius: 12px;
        padding: 24px;
        max-width: 400px;
        width: 90%;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
      }

      .confirm-title {
        font-size: 18px;
        font-weight: 600;
        color: #111827;
        margin: 0 0 12px 0;
      }

      .confirm-message {
        font-size: 14px;
        color: #6b7280;
        margin-bottom: 20px;
        line-height: 1.5;
      }

      .confirm-actions {
        display: flex;
        gap: 12px;
        justify-content: flex-end;
      }

      .recurring-options {
        background: #f9fafb;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        padding: 16px;
        margin-bottom: 16px;
      }

      .recurring-option {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px;
        cursor: pointer;
        border-radius: 6px;
        transition: background 0.2s;
        margin-bottom: 8px;
      }

      .recurring-option:hover {
        background: #f3f4f6;
      }

      .recurring-option.disabled-option {
        cursor: not-allowed;
        opacity: 0.72;
      }

      .recurring-option.disabled-option:hover {
        background: transparent;
      }

      .recurring-option:last-child {
        margin-bottom: 0;
      }

      .recurring-option input[type="radio"] {
        width: 18px;
        height: 18px;
        cursor: pointer;
      }

      .recurring-option-label {
        flex: 1;
      }

      .recurring-option-title {
        font-weight: 600;
        color: #111827;
        font-size: 14px;
        margin-bottom: 2px;
      }

      .recurring-option-description {
        font-size: 13px;
        color: #6b7280;
      }

      .error-message {
        background: #fef2f2;
        border: 1px solid #fecaca;
        color: #991b1b;
        padding: 12px 16px;
        border-radius: 8px;
        margin-bottom: 16px;
        font-size: 14px;
      }

      .success-message {
        background: #f0fdf4;
        border: 1px solid #bbf7d0;
        color: #166534;
        padding: 12px 16px;
        border-radius: 8px;
        margin-bottom: 16px;
        font-size: 14px;
      }

      .empty-state {
        padding: 40px 24px;
        text-align: center;
        color: #6b7280;
      }

      .empty-state-icon {
        font-size: 48px;
        margin-bottom: 16px;
        opacity: 0.5;
      }

      .empty-state-text {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 8px;
      }

      .empty-state-subtext {
        font-size: 14px;
        opacity: 0.8;
      }

      .day-modal-event {
        margin-bottom: 16px;
        padding: 12px;
        border-radius: 4px;
        cursor: pointer;
        color: var(--event-bubble-text-color, white);
        position: relative;
        padding-bottom: calc(12px + (var(--combined-corner-bubbles, 0) * 16px));
      }

      .day-modal-event-title {
        font-weight: 600;
        margin-bottom: 4px;
      }

      .day-modal-event-meta {
        font-size: 13px;
        color: inherit;
        opacity: 0.9;
      }

      .day-modal-event-location {
        font-size: 13px;
        color: inherit;
        opacity: 0.9;
        margin-top: 4px;
      }

      .info-banner {
        border-radius: 8px;
        padding: 12px;
        margin-top: 16px;
        font-size: 13px;
      }

      .info-banner.warning {
        background: #fef3c7;
        border: 1px solid #fbbf24;
        color: #92400e;
      }


      .calendar-container.dark-mode {
        color: #e8ecf1;
        color-scheme: dark;
        --schedule-hour-line-color: #556070;
      }

      .calendar-container.dark-mode,
      .calendar-container.dark-mode input,
      .calendar-container.dark-mode select,
      .calendar-container.dark-mode textarea,
      .calendar-container.dark-mode button {
        color-scheme: dark;
      }

      .calendar-container.dark-mode .week-standard-container,
      .calendar-container.dark-mode .calendar-badges {
        background: #30363f;
        border-color: var(--calendar-grid-color, #4b5563);
      }

      .calendar-container.dark-mode .calendar-badges-container.has-overflow::after {
        color: rgba(248, 250, 252, 0.95);
        text-shadow: 0 0 10px rgba(17, 24, 39, 0.75);
        background: linear-gradient(to left, rgba(48, 54, 63, 1), rgba(48, 54, 63, 0));
      }

      .calendar-container.dark-mode .calendar-badges-container.has-overflow::before {
        color: rgba(248, 250, 252, 0.9);
        text-shadow: 0 0 10px rgba(17, 24, 39, 0.75);
        background: linear-gradient(to right, rgba(48, 54, 63, 1), rgba(48, 54, 63, 0));
      }


      .calendar-container.dark-mode .day-cell,
      .calendar-container.dark-mode .week-day-column,
      .calendar-container.dark-mode .week-day-header,
      .calendar-container.dark-mode .week-standard-day-column,
      .calendar-container.dark-mode .week-standard-day-header,
      .calendar-container.dark-mode .all-day-events,
      .calendar-container.dark-mode .day-time-slot,
      .calendar-container.dark-mode .time-slot,
      .calendar-container.dark-mode .time-slot-label,
      .calendar-container.dark-mode .empty-state {
        background: #353c45;
        color: #dde3ea;
        border-color: var(--calendar-grid-color, #556070);
      }

      .calendar-container.dark-mode .time-slot {
        background: inherit;
        color: #dde3ea;
        border-top-color: transparent;
      }

      .calendar-container.dark-mode .week-standard-day-header,
      .calendar-container.dark-mode .all-day-events {
        border-bottom-color: var(--calendar-grid-color, transparent);
      }

	  .calendar-container.dark-mode .day-header,
      .calendar-container.dark-mode .month-week-number-header,
      .calendar-container.dark-mode .month-week-number-cell {
        background: #353b42;
        color: #dde3ea;
        border-color: var(--calendar-grid-color, #556070);
      }

      .calendar-container.dark-mode .week-day-column.today .week-day-header {
        border-bottom-color: #3b82f6;
      }

      .calendar-container.dark-mode .week-standard-day-name,
      .calendar-container.dark-mode .week-standard-day-date,
      .calendar-container.dark-mode .week-day-date {
        background: #3b434d;
        color: #dde3ea;
        border-color: var(--calendar-grid-color, #556070);
      }

      .calendar-container.dark-mode .week-day-name {
        background: #3b434d;
        color: var(--week-compact-weekday-color, #dde3ea);
        border-color: var(--calendar-grid-color, #556070);
      }

      .calendar-container.dark-mode .agenda-day-weekday,
      .calendar-container.dark-mode .agenda-day-date {
        background: transparent;
        color: #dde3ea;
      }

      .calendar-container.dark-mode .week-day-column.today .week-day-date {
        color: #3b82f6;
      }

      .calendar-container.dark-mode .week-standard-day-column.today .week-standard-day-date {
        background: #3b82f6;
        color: white;
        border-radius: 50%;
      }

      .calendar-container.dark-mode .week-standard-day-column {
        border: 1px solid var(--calendar-grid-color, #556070);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
      }

      .calendar-container.dark-mode .day-cell:hover,
      .calendar-container.dark-mode .day-time-slot:hover,
      .calendar-container.dark-mode .recurring-option:hover,
      .calendar-container.dark-mode .modal-close:hover,
      .calendar-container.dark-mode .btn-secondary:hover {
        background: #3f4752;
      }

      .calendar-container.dark-mode .recurring-option.disabled-option:hover {
        background: transparent;
      }

      .calendar-container.dark-mode .day-cell.other-month {
        background: #2f353e;
      }

      .calendar-container.dark-mode .day-number,
      .calendar-container.dark-mode .forecast-temperatures,
      .calendar-container.dark-mode .month-year,
      .calendar-container.dark-mode .modal-title,
      .calendar-container.dark-mode .confirm-title,
      .calendar-container.dark-mode .recurring-option-title {
        color: #f4f7fb;
      }

      .calendar-container.dark-mode .more-events,
      .calendar-container.dark-mode .modal-label,
      .calendar-container.dark-mode .confirm-message,
      .calendar-container.dark-mode .recurring-option-description,
      .calendar-container.dark-mode .day-modal-event-meta,
      .calendar-container.dark-mode .day-modal-event-location,
      .calendar-container.dark-mode .empty-state {
        color: #c7d0db;
      }

      .calendar-container.dark-mode .modal-content,
      .calendar-container.dark-mode .confirm-dialog,
      .calendar-container.dark-mode .form-input,
      .calendar-container.dark-mode .form-select,
      .calendar-container.dark-mode .form-textarea,
      .calendar-container.dark-mode .recurring-options,
      .calendar-container.dark-mode .btn-secondary,
      .calendar-container.dark-mode .day-modal-event {
        background: #3b434d;
        color: #e2e8f0;
        border-color: #606b7b;
        box-shadow: none;
      }

      .calendar-container.dark-mode .week-standard-day-column,
      .calendar-container.dark-mode .week-day-column {
        background: #3b434d;
        color: #e2e8f0;
        border-color: var(--calendar-grid-color, #606b7b);
        box-shadow: none;
      }

      .calendar-container.dark-mode .modal-header,
      .calendar-container.dark-mode .modal-row {
        border-color: #5b6676;
      }

      .calendar-container.dark-mode .form-checkbox-label,
      .calendar-container.dark-mode .recurrence-end-option,
      .calendar-container.dark-mode .modal-value,
      .calendar-container.dark-mode .form-label {
        color: #d6dee8;
      }

      .calendar-container.dark-mode .event-description-content h1,
      .calendar-container.dark-mode .event-description-content h2,
      .calendar-container.dark-mode .event-description-content h3,
      .calendar-container.dark-mode .event-description-content h4,
      .calendar-container.dark-mode .event-description-content h5,
      .calendar-container.dark-mode .event-description-content h6 {
        color: #f8fafc;
      }

      .calendar-container.dark-mode .event-description-content blockquote {
        border-left-color: #64748b;
        color: #cbd5e1;
      }

      .calendar-container.dark-mode .event-description-content code,
      .calendar-container.dark-mode .event-description-content pre {
        background: #28313d;
      }

      .calendar-container.dark-mode .event-description-content a {
        color: #93c5fd;
      }

      .calendar-container.dark-mode .form-required {
        color: #f87171;
      }

      .calendar-container.dark-mode .form-input::placeholder,
      .calendar-container.dark-mode .form-textarea::placeholder {
        color: #9aa6b8;
      }

      .calendar-container.dark-mode input[type="date"]::-webkit-calendar-picker-indicator,
      .calendar-container.dark-mode input[type="datetime-local"]::-webkit-calendar-picker-indicator,
      .calendar-container.dark-mode input[type="time"]::-webkit-calendar-picker-indicator {
        filter: invert(1) brightness(0.9);
      }

      .calendar-container.dark-mode .btn-secondary {
        border: 1px solid #606b7b;
      }

      .calendar-container.dark-mode .info-banner {
        background: #5a4a34;
        border-color: #8f7a56;
        color: #f3e5c7;
      }

      .calendar-container.dark-mode .view-mode-buttons,
      .calendar-container.dark-mode .add-event-button,
      .calendar-container.dark-mode .compact-add-event-button,
      .calendar-container.dark-mode .nav-button,
      .calendar-container.dark-mode .today-button,
      .calendar-container.dark-mode .theme-toggle {
        background: rgba(226, 232, 240, 0.14);
        border-color: rgba(226, 232, 240, 0.28);
      }

      .calendar-container.dark-mode .view-mode-select {
        color: #f8fafc;
      }

      .calendar-container.dark-mode .view-mode-select option {
        color: #f8fafc;
        background: #1f2937;
      }

      .calendar-container.dark-mode .week-day-header,
      .calendar-container.dark-mode .week-standard-day-header {
        background: #3b434d;
      }

      .calendar-container.dark-mode .agenda-day-row {
        border-top-color: var(--calendar-grid-color, #5b6676);
      }

      .calendar-container.dark-mode .agenda-day-label {
        border-bottom-color: var(--calendar-grid-color, #5b6676);
      }

      .calendar-container.dark-mode .agenda-month-banner {
        border-top-color: var(--calendar-grid-color, #5b6676);
        border-bottom-color: var(--calendar-grid-color, #5b6676);
        color: #c7d0db;
      }

      .calendar-container.dark-mode .agenda-day-date {
        color: #f4f7fb;
      }


      .calendar-container.custom-background .calendar-grid,
      .calendar-container.custom-background .week-compact-container,
      .calendar-container.custom-background .calendar-badges,
      .calendar-container.custom-background .week-day-header,
      .calendar-container.custom-background .week-standard-day-header,
      .calendar-container.custom-background .time-slot,
      .calendar-container.custom-background .time-slot-label,
      .calendar-container.custom-background .week-day-name,
      .calendar-container.custom-background .week-day-date,
      .calendar-container.custom-background .week-standard-day-name,
      .calendar-container.custom-background .week-standard-day-date,
      .calendar-container.custom-background .empty-state {
        background: transparent !important;
      }

      .calendar-container.custom-background .week-day-header,
      .calendar-container.custom-background .week-standard-day-header,
      .calendar-container.custom-background .calendar-grid,
      .calendar-container.custom-background .week-compact-container,
      .calendar-container.custom-background .calendar-badges {
        border-color: var(--calendar-grid-color, rgba(255, 255, 255, 0.35)) !important;
      }

      .calendar-container.custom-background .week-standard-container {
        background: rgba(var(--custom-surface-calendar-rgb, 249, 250, 251), var(--custom-surface-alpha, 0.55)) !important;
      }

      .calendar-container.custom-background .calendar-grid {
        background: transparent !important;
        border-top-color: var(--calendar-grid-color, rgba(255, 255, 255, 0.35)) !important;
      }

      .calendar-container.custom-background .calendar-grid > *,
      .calendar-container.custom-background .week-compact-container:not(.single-day-modal) > * {
        position: relative;
      }

      .calendar-container.custom-background .calendar-grid > *::before,
      .calendar-container.custom-background .week-compact-container:not(.single-day-modal) > *::before {
        content: '';
        position: absolute;
        inset: 0 -1px -1px 0;
        border-right: 1px solid var(--calendar-grid-color, rgba(255, 255, 255, 0.35));
        border-bottom: 1px solid var(--calendar-grid-color, rgba(255, 255, 255, 0.35));
        pointer-events: none;
        z-index: 1;
      }

      .calendar-container.custom-background .day-header,
      .calendar-container.custom-background .month-week-number-header {
        background: rgba(var(--custom-surface-all-day-rgb, 249, 250, 251), var(--custom-surface-alpha, 0.55)) !important;
      }

      .calendar-container.custom-background .day-cell,
      .calendar-container.custom-background .month-week-number-cell {
        background: rgba(var(--custom-surface-column-rgb, 255, 255, 255), var(--custom-surface-alpha, 0.55)) !important;
      }

      .calendar-container.custom-background .week-compact-container {
        background: transparent !important;
        border-top-color: var(--calendar-grid-color, rgba(255, 255, 255, 0.35)) !important;
      }

      .calendar-container.custom-background .week-day-column {
        background: rgba(var(--custom-surface-column-rgb, 255, 255, 255), var(--custom-surface-alpha, 0.55)) !important;
      }

      .calendar-container.custom-background .week-standard-day-column {
        background: rgba(var(--custom-surface-column-rgb, 255, 255, 255), var(--custom-surface-alpha, 0.55)) !important;
      }

      .calendar-container.custom-background .all-day-events {
        background: rgba(var(--custom-surface-all-day-rgb, 249, 250, 251), var(--custom-surface-alpha, 0.55)) !important;
      }

      .calendar-container.custom-background .day-time-slot {
        background: rgba(var(--custom-surface-slot-rgb, 255, 255, 255), var(--custom-surface-alpha, 0.55)) !important;
      }

      .calendar-container.custom-background .agenda-container,
      .calendar-container.custom-background .agenda-month-banner,
      .calendar-container.custom-background .agenda-day-row {
        background: rgba(var(--custom-surface-calendar-rgb, 249, 250, 251), var(--custom-surface-alpha, 0.55)) !important;
      }

      .calendar-container.custom-background .agenda-day-label {
        background: rgba(var(--custom-surface-all-day-rgb, 249, 250, 251), var(--custom-surface-alpha, 0.55)) !important;
      }

      .calendar-container.dark-mode.custom-background .week-standard-day-header,
      .calendar-container.dark-mode.custom-background .all-day-events {
        border-bottom-color: var(--calendar-grid-color, rgba(255, 255, 255, 0.35)) !important;
      }

      .calendar-container.dark-mode.custom-background .week-standard-day-column {
        border-color: var(--calendar-grid-color, rgba(255, 255, 255, 0.35)) !important;
        box-shadow: none !important;
      }

      .calendar-container.custom-background .week-standard-day-column.today .week-standard-day-date {
        background: #3b82f6 !important;
        color: #ffffff !important;
        border-radius: 50%;
      }

      .calendar-container.custom-background .calendar-badges-container.has-overflow::after,
      .calendar-container.custom-background .calendar-badges-container.has-overflow::before {
        display: none;
      }


      .calendar-container.custom-background .day-cell.other-month {
        background: rgba(255, 255, 255, calc(var(--custom-surface-alpha, 0.55) * 0.12)) !important;
      }

      .calendar-container.dark-mode.custom-background .day-cell.other-month {
        background: rgba(0, 0, 0, calc(var(--custom-surface-alpha, 0.55) * 0.2)) !important;
      }

      @media (max-width: 768px) {
        .header {
          flex-direction: column;
          align-items: stretch;
        }

        .header-controls {
          justify-content: space-between;
          width: 100%;
        }

        .header-left,
        .compact-header-left {
          width: 100%;
        }

        .compact-header-controls {
          justify-content: flex-start;
        }

        .period-controls,
        .compact-period-controls {
          width: 100%;
          justify-content: space-between;
          gap: 8px;
          margin-left: 0;
        }

        .period-controls .month-year,
        .compact-period-controls .month-year {
          flex: 1;
          min-width: 0;
          text-align: center;
        }


        .week-standard-container {
          font-size: 10px;
        }

        .week-standard-day-date {
          font-size: 14px;
        }

        .form-row {
          grid-template-columns: 1fr;
        }

        .form-inline-row {
          grid-template-columns: 88px minmax(0, 1fr);
          gap: 8px;
          align-items: center;
        }

        .form-group-inline .form-label {
          margin-bottom: 0;
        }

        .header-time {
          font-size: 22px;
        }
      }
  `;
}

// ============================================================================
// TRANSLATIONS
// ============================================================================
// To add a new language:
// 1. Add a new entry to the TRANSLATIONS object below
// 2. Set the locale (e.g., 'es-ES' for Spanish)
// 3. Copy the strings from 'en' and translate each value
// ============================================================================

const TRANSLATIONS = {
  en: {
    locale: 'en-US',
    strings: {
      defaultTitle: 'Family Calendar',
      addEvent: 'Add Event',
      today: 'Today',
      month: 'Month',
      week: 'Week',
      schedule: 'Schedule',
      agenda: 'Agenda',
      resetAgenda: 'Jump to Today',
      openDashboard: 'Open dashboard',
      calendars: 'Calendars',
      calendar: 'Calendar',
      eventTitle: 'Event Title',
      eventTitlePlaceholder: 'Team Meeting',
      allDayEvent: 'All-day event',
      recurring: 'Recurring',
      eventOptions: 'Event Options',
      customColor: 'Color',
      customColorTitle: 'Custom Color',
      useDefault: 'Use Default',
      applyColor: 'Apply Color',
      invalidHexColor: 'Enter a valid hex color like #3B82F6.',
      customColorCombinedPrompt: 'Select which calendar copy to color.',
      recurringEventOptions: 'Recurring options',
      recurrenceFrequency: 'Repeat',
      recurrenceEvery: 'Every',
      recurrenceIntervalSuffix: 'interval(s)',
      recurrenceEndsOn: 'Ends on',
      recurrenceCount: 'Occurrences (COUNT)',
      recurrenceWeekdays: 'Weekdays',
      recurrenceNoEndDate: 'No end date (optional)',
      recurrenceDaily: 'Daily',
      recurrenceWeekly: 'Weekly',
      recurrenceMonthly: 'Monthly',
      recurrenceYearly: 'Yearly',
      recurrenceNever: 'Never',
      recurrenceOn: 'On',
      recurrenceAfter: 'After',
      recurrenceOccurrences: 'occurrences',
      recurrenceSelectWeekday: 'Select at least one weekday for weekly recurring events',
      start: 'Start',
      end: 'End',
      startDate: 'Start Date',
      endDate: 'End Date',
      location: 'Location',
      locationPlaceholder: 'Conference Room A',
      openInGoogleMaps: 'Open in Google Maps',
      copyAddress: 'Copy address',
      description: 'Description',
      descriptionPlaceholder: 'Event details...',
      cancel: 'Cancel',
      createEvent: 'Create Event',
      creating: 'Creating...',
      forwardEvent: 'Forward',
      forwardEventTitle: 'Forward Event',
      forwardEventPrompt: 'Select one or more new calendars to forward this event to.',
      forwardEventAlreadyExists: 'Already has this event',
      forwardEventNoNewCalendars: 'Select at least one new calendar to forward this event to.',
      continue: 'Continue',
      editEvent: 'Edit',
      saveChanges: 'Save Changes',
      saving: 'Saving...',
      delete: 'Delete',
      deleting: 'Deleting...',
      deleteEventTitle: 'Delete Event',
      deleteRecurringEventTitle: 'Delete Recurring Event',
      deleteEventConfirm: 'Are you sure you want to delete "{title}"? This action cannot be undone.',
      deleteRecurringPrompt: '"{title}" is a recurring event. How would you like to delete it?',
      editRecurringEventTitle: 'Edit Recurring Event',
      editRecurringPrompt: '"{title}" is a recurring event. How would you like to edit it?',
      editThisOccurrence: 'Edit just this occurrence',
      editThisOccurrenceAndFuture: 'Edit this occurrence and all future occurrences',
      editEntireSeries: 'Edit the entire recurring series',
      deleteThisEventOnly: 'This event only',
      deleteThisOccurrence: 'Delete just this occurrence',
      deleteThisAndFutureEvents: 'This and future events',
      deleteThisOccurrenceAndFuture: 'Delete this occurrence and all future occurrences',
      deleteAllEvents: 'All events',
      deleteEntireSeries: 'Delete the entire recurring series',
      noEvents: 'No events',
      allDay: 'All Day',
      at: 'at',
      duration: 'Duration',
      attendees: 'Attendees',
      recurrence: 'Recurrence',
      recurringEvent: 'Recurring Event',
      unknownAttendee: 'Unknown',
      googleCalendarLimitationTitle: 'ℹ️ Google Calendar Limitation:',
      googleCalendarLimitationBody: 'Editing events is not currently supported for Google Calendar through Home Assistant. You can delete events from here, but to edit please use the Google Calendar app or website.',
      cannotModifyTitle: 'ℹ️ Cannot Modify:',
      cannotModifyBody: 'This event is missing required information (UID) for editing or deletion. You may need to recreate it.',
      untitledEvent: 'Untitled Event',
      noWritableCalendars: 'No writable calendars available',
      eventTitleRequired: 'Event title is required',
      startEndDatesRequired: 'Start and end dates are required',
      endDateBeforeStart: 'End date cannot be before start date',
      startEndTimesRequired: 'Start and end times are required',
      endTimeBeforeStart: 'End time must be after start time',
      failedCreateEvent: 'Failed to create event. Please try again.',
      failedUpdateEvent: 'Failed to update event. Please try again.',
      failedDeleteEvent: 'Failed to delete event. Please try again.',
      homeAssistantUnavailable: 'Home Assistant not available',
      googleCalendarEditError: 'Google Calendar does not support editing events through Home Assistant. Please use the Google Calendar app or website.',
      missingUidError: 'This event is missing required information (UID) and cannot be edited.',
      calendarNoModifyError: 'This calendar does not support event modifications. Try creating a new event instead.',
      createEventServiceError: 'Failed to create event',
      deleteEventServiceError: 'Failed to delete event',
      updateEventServiceError: 'Failed to update event. The calendar may not support modifications.',
      durationHour: '{count} hour',
      durationHours: '{count} hours',
      durationMinute: '{count} minute',
      durationMinutes: '{count} minutes',
      moreEvents: '+{count} more',
      eventTitleWithStartTime: '{title}, {time}',
      monthWeekPrefix: 'CW',
      monthWeekAriaLabel: 'Week {week}',
      eventRefreshStaleWarning: 'Unable to refresh calendar data since {time}'
    }
  },

  fr: {
    locale: 'fr-FR',
    strings: {
      defaultTitle: 'Calendrier familial',
      addEvent: 'Ajouter un événement',
      today: "Aujourd'hui",
      month: 'Mois',
      week: 'Semaine',
      schedule: 'Planning',
      agenda: 'Agenda',
      resetAgenda: "Retour à aujourd'hui",
      openDashboard: 'Ouvrir le tableau de bord',
      calendars: 'Calendriers',
      calendar: 'Calendrier',
      eventTitle: "Titre de l'événement",
      eventTitlePlaceholder: "Réunion d'équipe",
      allDayEvent: 'Événement sur toute la journée',
      recurring: 'Récurrent',
      eventOptions: "Options de l'événement",
      customColor: 'Couleur',
      customColorTitle: 'Couleur personnalisée',
      useDefault: 'Utiliser la valeur par défaut',
      applyColor: 'Appliquer la couleur',
      invalidHexColor: 'Saisissez une couleur hexadécimale valide comme #3B82F6.',
      customColorCombinedPrompt: 'Sélectionnez la copie du calendrier à colorer.',
      recurringEventOptions: 'Options de récurrence',
      recurrenceFrequency: 'Répéter',
      recurrenceEvery: 'Chaque',
      recurrenceIntervalSuffix: 'intervalle(s)',
      recurrenceEndsOn: 'Se termine le',
      recurrenceCount: 'Occurrences (COUNT)',
      recurrenceWeekdays: 'Jours de la semaine',
      recurrenceNoEndDate: 'Pas de date de fin (optionnel)',
      recurrenceDaily: 'Quotidien',
      recurrenceWeekly: 'Hebdomadaire',
      recurrenceMonthly: 'Mensuel',
      recurrenceYearly: 'Annuel',
      recurrenceNever: 'Jamais',
      recurrenceOn: 'Le',
      recurrenceAfter: 'Après',
      recurrenceOccurrences: 'occurrences',
      recurrenceSelectWeekday: 'Sélectionnez au moins un jour pour les événements hebdomadaires',
      start: 'Début',
      end: 'Fin',
      startDate: 'Date de début',
      endDate: 'Date de fin',
      location: 'Lieu',
      locationPlaceholder: 'Salle de conférence A',
      openInGoogleMaps: 'Ouvrir dans Google Maps',
      copyAddress: 'Copier l’adresse',
      description: 'Description',
      descriptionPlaceholder: "Détails de l'événement...",
      cancel: 'Annuler',
      createEvent: 'Créer un événement',
      creating: 'Création...',
      forwardEvent: 'Transférer',
      forwardEventTitle: "Transférer l'événement",
      forwardEventPrompt: 'Sélectionnez un ou plusieurs nouveaux calendriers vers lesquels transférer cet événement.',
      forwardEventAlreadyExists: 'Contient déjà cet événement',
      forwardEventNoNewCalendars: 'Sélectionnez au moins un nouveau calendrier vers lequel transférer cet événement.',
      continue: 'Continuer',
      editEvent: 'Modifier',
      saveChanges: 'Enregistrer les modifications',
      saving: 'Enregistrement...',
      delete: 'Supprimer',
      deleting: 'Suppression...',
      deleteEventTitle: "Supprimer l'événement",
      deleteRecurringEventTitle: "Supprimer l'événement récurrent",
      deleteEventConfirm: 'Voulez-vous vraiment supprimer "{title}" ? Cette action est irréversible.',
      deleteRecurringPrompt: '"{title}" est un événement récurrent. Comment souhaitez-vous le supprimer ?',
      editRecurringEventTitle: 'Modifier un événement récurrent',
      editRecurringPrompt: '"{title}" est un événement récurrent. Comment souhaitez-vous le modifier ?',
      editThisOccurrence: 'Modifier uniquement cette occurrence',
      editThisOccurrenceAndFuture: 'Modifier cette occurrence et toutes les occurrences futures',
      editEntireSeries: 'Modifier toute la série récurrente',
      deleteThisEventOnly: 'Cet événement uniquement',
      deleteThisOccurrence: 'Supprimer uniquement cette occurrence',
      deleteThisAndFutureEvents: 'Cet événement et les suivants',
      deleteThisOccurrenceAndFuture: 'Supprimer cette occurrence et toutes les occurrences futures',
      deleteAllEvents: 'Tous les événements',
      deleteEntireSeries: 'Supprimer toute la série récurrente',
      noEvents: 'Aucun événement',
      allDay: 'Toute la journée',
      at: 'à',
      duration: 'Durée',
      attendees: 'Participants',
      recurrence: 'Récurrence',
      recurringEvent: 'Événement récurrent',
      unknownAttendee: 'Inconnu',
      googleCalendarLimitationTitle: 'ℹ️ Limitation Google Agenda :',
      googleCalendarLimitationBody: "La modification des événements n'est pas prise en charge pour Google Agenda via Home Assistant. Vous pouvez supprimer des événements ici, mais pour les modifier veuillez utiliser l'application ou le site Google Agenda.",
      cannotModifyTitle: 'ℹ️ Impossible de modifier :',
      cannotModifyBody: 'Cet événement ne contient pas les informations requises (UID) pour être modifié ou supprimé. Vous devrez peut-être le recréer.',
      untitledEvent: 'Événement sans titre',
      noWritableCalendars: 'Aucun calendrier modifiable disponible',
      eventTitleRequired: "Le titre de l'événement est requis",
      startEndDatesRequired: 'Les dates de début et de fin sont requises',
      endDateBeforeStart: 'La date de fin ne peut pas être antérieure à la date de début',
      startEndTimesRequired: 'Les heures de début et de fin sont requises',
      endTimeBeforeStart: "L'heure de fin doit être après l'heure de début",
      failedCreateEvent: "Impossible de créer l'événement. Veuillez réessayer.",
      failedUpdateEvent: "Impossible de modifier l'événement. Veuillez réessayer.",
      failedDeleteEvent: "Impossible de supprimer l'événement. Veuillez réessayer.",
      homeAssistantUnavailable: "Home Assistant n'est pas disponible",
      googleCalendarEditError: "Google Agenda ne permet pas la modification des événements via Home Assistant. Veuillez utiliser l'application ou le site Google Agenda.",
      missingUidError: 'Cet événement ne contient pas les informations requises (UID) et ne peut pas être modifié.',
      calendarNoModifyError: "Ce calendrier ne prend pas en charge les modifications d'événements. Essayez plutôt de créer un nouvel événement.",
      createEventServiceError: "Impossible de créer l'événement",
      deleteEventServiceError: "Impossible de supprimer l'événement",
      updateEventServiceError: "Impossible de modifier l'événement. Le calendrier ne prend peut-être pas en charge les modifications.",
      durationHour: '{count} heure',
      durationHours: '{count} heures',
      durationMinute: '{count} minute',
      durationMinutes: '{count} minutes',
      moreEvents: '+{count} de plus',
      eventTitleWithStartTime: '{title}, {time}',
      monthWeekPrefix: 'Sem',
      monthWeekAriaLabel: 'Semaine {week}',
      eventRefreshStaleWarning: 'Impossible d’actualiser les données du calendrier depuis {time}'
    }
  },

  de: {
    locale: 'de-DE',
    strings: {
      defaultTitle: 'Familienkalender',
      addEvent: 'Termin hinzufügen',
      today: 'Heute',
      month: 'Monat',
      week: 'Woche',
      schedule: 'Zeitplan',
      agenda: 'Agenda',
      resetAgenda: 'Zu heute springen',
      openDashboard: 'Dashboard öffnen',
      calendars: 'Kalender',
      calendar: 'Kalender',
      eventTitle: 'Terminname',
      eventTitlePlaceholder: 'Team-Meeting',
      allDayEvent: 'Ganztägiges Ereignis',
      recurring: 'Wiederkehrend',
      eventOptions: 'Terminoptionen',
      customColor: 'Farbe',
      customColorTitle: 'Benutzerdefinierte Farbe',
      useDefault: 'Standard verwenden',
      applyColor: 'Farbe anwenden',
      invalidHexColor: 'Geben Sie eine gültige Hex-Farbe wie #3B82F6 ein.',
      customColorCombinedPrompt: 'Wählen Sie aus, welche Kalenderkopie eingefärbt werden soll.',
      recurringEventOptions: 'Wiederholungsoptionen',
      recurrenceFrequency: 'Wiederholen',
      recurrenceEvery: 'Alle',
      recurrenceIntervalSuffix: 'Intervall(e)',
      recurrenceEndsOn: 'Endet am',
      recurrenceCount: 'Anzahl (COUNT)',
      recurrenceWeekdays: 'Wochentage',
      recurrenceNoEndDate: 'Kein Enddatum (optional)',
      recurrenceDaily: 'Täglich',
      recurrenceWeekly: 'Wöchentlich',
      recurrenceMonthly: 'Monatlich',
      recurrenceYearly: 'Jährlich',
      recurrenceNever: 'Nie',
      recurrenceOn: 'Am',
      recurrenceAfter: 'Nach',
      recurrenceOccurrences: 'Vorkommen',
      recurrenceSelectWeekday: 'Wählen Sie mindestens einen Wochentag für wöchentliche Termine aus',
      start: 'Beginn',
      end: 'Ende',
      startDate: 'Startdatum',
      endDate: 'Enddatum',
      location: 'Ort',
      locationPlaceholder: 'Konferenzraum A',
      openInGoogleMaps: 'In Google Maps öffnen',
      copyAddress: 'Adresse kopieren',
      description: 'Beschreibung',
      descriptionPlaceholder: 'Ereignisdetails...',
      cancel: 'Abbrechen',
      createEvent: 'Termin erstellen',
      creating: 'Wird erstellt...',
      forwardEvent: 'Weiterleiten',
      forwardEventTitle: 'Termin weiterleiten',
      forwardEventPrompt: 'Wählen Sie einen oder mehrere neue Kalender aus, an die dieser Termin weitergeleitet werden soll.',
      forwardEventAlreadyExists: 'Enthält diesen Termin bereits',
      forwardEventNoNewCalendars: 'Wählen Sie mindestens einen neuen Kalender aus, an den dieser Termin weitergeleitet werden soll.',
      continue: 'Weiter',
      editEvent: 'Bearbeiten',
      saveChanges: 'Änderungen speichern',
      saving: 'Wird gespeichert...',
      delete: 'Löschen',
      deleting: 'Wird gelöscht...',
      deleteEventTitle: 'Termin löschen',
      deleteRecurringEventTitle: 'Wiederkehrenden Termin löschen',
      deleteEventConfirm: 'Möchten Sie "{title}" wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.',
      deleteRecurringPrompt: '"{title}" ist ein wiederkehrender Termin. Wie möchten Sie ihn löschen?',
      editRecurringEventTitle: 'Wiederkehrenden Termin bearbeiten',
      editRecurringPrompt: '"{title}" ist ein wiederkehrender Termin. Wie möchten Sie ihn bearbeiten?',
      editThisOccurrence: 'Nur dieses Vorkommen bearbeiten',
      editThisOccurrenceAndFuture: 'Dieses und alle zukünftigen Vorkommen bearbeiten',
      editEntireSeries: 'Die gesamte Serie bearbeiten',
      deleteThisEventOnly: 'Nur dieses Ereignis',
      deleteThisOccurrence: 'Nur dieses Vorkommen löschen',
      deleteThisAndFutureEvents: 'Dieses und zukünftige Ereignisse',
      deleteThisOccurrenceAndFuture: 'Dieses Vorkommen und alle zukünftigen Vorkommen löschen',
      deleteAllEvents: 'Alle Ereignisse',
      deleteEntireSeries: 'Die gesamte Serie löschen',
      noEvents: 'Keine Ereignisse',
      allDay: 'Ganztägig',
      at: 'um',
      duration: 'Dauer',
      attendees: 'Teilnehmende',
      recurrence: 'Wiederholung',
      recurringEvent: 'Wiederkehrender Termin',
      unknownAttendee: 'Unbekannt',
      googleCalendarLimitationTitle: 'ℹ️ Google-Kalender-Einschränkung:',
      googleCalendarLimitationBody: 'Das Bearbeiten von Terminen wird für Google Kalender in Home Assistant derzeit nicht unterstützt. Sie können Termine hier löschen, zum Bearbeiten nutzen Sie bitte die Google Kalender App oder Website.',
      cannotModifyTitle: 'ℹ️ Kann nicht bearbeitet werden:',
      cannotModifyBody: 'Diesem Ereignis fehlen erforderliche Informationen (UID) zum Bearbeiten oder Löschen. Möglicherweise müssen Sie es neu erstellen.',
      untitledEvent: 'Unbenannter Termin',
      noWritableCalendars: 'Keine beschreibbaren Kalender verfügbar',
      eventTitleRequired: 'Ein Terminname ist erforderlich',
      startEndDatesRequired: 'Start- und Enddatum sind erforderlich',
      endDateBeforeStart: 'Das Enddatum darf nicht vor dem Startdatum liegen',
      startEndTimesRequired: 'Start- und Endzeit sind erforderlich',
      endTimeBeforeStart: 'Die Endzeit muss nach der Startzeit liegen',
      failedCreateEvent: 'Termin konnte nicht erstellt werden. Bitte erneut versuchen.',
      failedUpdateEvent: 'Termin konnte nicht aktualisiert werden. Bitte erneut versuchen.',
      failedDeleteEvent: 'Termin konnte nicht gelöscht werden. Bitte erneut versuchen.',
      homeAssistantUnavailable: 'Home Assistant nicht verfügbar',
      googleCalendarEditError: 'Google Kalender unterstützt das Bearbeiten von Terminen über Home Assistant nicht. Bitte verwenden Sie die Google Kalender App oder Website.',
      missingUidError: 'Dieses Ereignis enthält keine erforderlichen Informationen (UID) und kann nicht bearbeitet werden.',
      calendarNoModifyError: 'Dieser Kalender unterstützt keine Terminänderungen. Bitte erstellen Sie stattdessen einen neuen Termin.',
      createEventServiceError: 'Termin konnte nicht erstellt werden',
      deleteEventServiceError: 'Termin konnte nicht gelöscht werden',
      updateEventServiceError: 'Termin konnte nicht aktualisiert werden. Der Kalender unterstützt möglicherweise keine Änderungen.',
      durationHour: '{count} Stunde',
      durationHours: '{count} Stunden',
      durationMinute: '{count} Minute',
      durationMinutes: '{count} Minuten',
      moreEvents: '+{count} mehr',
      eventTitleWithStartTime: '{title}, {time}',
      monthWeekPrefix: 'KW',
      monthWeekAriaLabel: 'Woche {week}',
      eventRefreshStaleWarning: 'Kalenderdaten konnten seit {time} nicht aktualisiert werden'
    }
  },

  nl: {
    locale: 'nl-NL',
    strings: {
      defaultTitle: 'Familie agenda',
      addEvent: 'Nieuwe afspraak',
      today: 'Vandaag',
      month: 'Maand',
      week: 'Week',
      schedule: 'Schema',
      agenda: 'Agenda',
      resetAgenda: 'Ga naar vandaag',
      openDashboard: 'Dashboard openen',
      calendars: "Agenda's",
      calendar: 'agenda',
      eventTitle: 'Afspraak onderwerp',
      eventTitlePlaceholder: 'Groepsafspraak',
      allDayEvent: 'Hele dag',
      recurring: 'Terugkerend',
      eventOptions: 'Afspraakopties',
      customColor: 'Kleur',
      customColorTitle: 'Aangepaste kleur',
      useDefault: 'Standaard gebruiken',
      applyColor: 'Kleur toepassen',
      invalidHexColor: 'Voer een geldige hexkleur in, zoals #3B82F6.',
      customColorCombinedPrompt: 'Selecteer welke agendakopie een kleur moet krijgen.',
      recurringEventOptions: 'terugkerend mogelijkheden',
      recurrenceFrequency: 'Herhaal',
      recurrenceEvery: 'Elke',
      recurrenceIntervalSuffix: 'herhalen elke',
      recurrenceEndsOn: 'Stop op',
      recurrenceCount: 'Gebeurtenissen (COUNT)',
      recurrenceWeekdays: 'Werkdagen',
      recurrenceNoEndDate: 'Geen einddatum (optioneel)',
      recurrenceDaily: 'Dagelijks',
      recurrenceWeekly: 'Wekelijks',
      recurrenceMonthly: 'Maandelijks',
      recurrenceYearly: 'Jaarlijks',
      recurrenceNever: 'Nooit',
      recurrenceOn: 'Op',
      recurrenceAfter: 'Na',
      recurrenceOccurrences: 'gebeurtenissen',
      recurrenceSelectWeekday: 'Selecteer ten minste één dag voor wekelijks terugkerende afspraken',
      start: 'Start',
      end: 'Einde',
      startDate: 'Begindatum',
      endDate: 'Einddatum',
      location: 'Locatie',
      locationPlaceholder: 'Vergaderruimte A',
      openInGoogleMaps: 'Openen in Google Maps',
      copyAddress: 'Adres kopiëren',
      description: 'Omschrijving',
      descriptionPlaceholder: 'Afspraak details...',
      cancel: 'Annuleren',
      createEvent: 'Afspraak toevoegen',
      creating: 'Aanmaken...',
      forwardEvent: 'Doorsturen',
      forwardEventTitle: 'Afspraak doorsturen',
      forwardEventPrompt: 'Selecteer een of meer nieuwe agenda’s waarnaar deze afspraak moet worden doorgestuurd.',
      forwardEventAlreadyExists: 'Bevat deze afspraak al',
      forwardEventNoNewCalendars: 'Selecteer minstens één nieuwe agenda om deze afspraak naar door te sturen.',
      continue: 'Doorgaan',
      editEvent: 'Bewerken',
      saveChanges: 'Wijzigingen opslaan',
      saving: 'Opslaan...',
      delete: 'Verwijder',
      deleting: 'Verwijderen...',
      deleteEventTitle: 'Afspraak verwijderen',
      deleteRecurringEventTitle: 'Herhaalafspraak verwijderen',
      deleteEventConfirm: 'Ben je er zeker van dat je "{title}" wil verwijderen? Deze actie is onomkeerbaar.',
      deleteRecurringPrompt: '"{title}" is een herhalende afspraak. Hoe wil je hem verwijderen?',
      editRecurringEventTitle: 'Herhalende afspraak bewerken',
      editRecurringPrompt: '"{title}" is een herhalende afspraak. Hoe wil je hem bewerken?',
      editThisOccurrence: 'Alleen deze afspraak wijzigen',
      editThisOccurrenceAndFuture: 'Deze afspraak en alle toekomstige afspraken bewerken',
      editEntireSeries: 'Bewerk de volledige afspraken reeks',
      deleteThisEventOnly: 'Alleen deze afspraak',
      deleteThisOccurrence: 'Verwijder alleen dit moment',
      deleteThisAndFutureEvents: 'Deze en alle toekomstige afspraken',
      deleteThisOccurrenceAndFuture: 'Verwijder deze en alle toekomstige afspraken',
      deleteAllEvents: 'Alle afspraken',
      deleteEntireSeries: 'Verwijder de volledige reeks',
      noEvents: 'Geen afspraken',
      allDay: 'Hele dag',
      at: 'op',
      duration: 'Duur',
      attendees: 'Deelnemers',
      recurrence: 'Terugkerend',
      recurringEvent: 'Terugkerende afpraak',
      unknownAttendee: 'Onbekend',
      googleCalendarLimitationTitle: 'ℹ️ Google Calendar beperking:',
      googleCalendarLimitationBody: 'Het bewerken van Google Calendar afspraken wordt momenteel niet ondersteund in Home Assistant. Je kunt afspraken verwijderen, maar voor het bewerken kun je de Google Calendar app of website gebruiken.',
      cannotModifyTitle: 'ℹ️ Kan het volgende niet aanpassen:',
      cannotModifyBody: 'Deze afspraak mist de vereiste informatie (UID) om te kunnen bewerken of verwijderen. Mogelijk moet je hem opnieuw aanmaken.',
      untitledEvent: 'Afspraak zonder onderwerp',
      noWritableCalendars: "Geen bewerkbare agenda's beschikbaar",
      eventTitleRequired: 'Afspraak onderwerp is verplicht',
      startEndDatesRequired: 'Begin- en einddatum zijn verplicht',
      endDateBeforeStart: 'Einddatum mag niet voor begindatum zijn',
      startEndTimesRequired: 'Begin- en eindtijd is verplicht',
      endTimeBeforeStart: 'Eindtijd mag niet voor begintijd zijn',
      failedCreateEvent: 'Niet gelukt om afspraak aan te maken. Probeer opnieuw.',
      failedUpdateEvent: 'Niet gelukt om afspraak bij te werken. Probeer opnieuw.',
      failedDeleteEvent: 'Niet gelukt om afspraak te verwijderen. Probeer opnieuw.',
      homeAssistantUnavailable: 'Home Assistant niet beschikbaar',
      googleCalendarEditError: 'Het wordt niet ondersteund om Google Calendar afspraken te bewerken binnen Home Assistant. Maak gebruik van de Google Calendar app of website.',
      missingUidError: 'Deze afspraak mist de vereiste informatie (UID) en kan daarom niet bewerkt worden.',
      calendarNoModifyError: 'Het bewerken van afspraken wordt niet ondersteund in deze agenda. Maak een nieuwe afspraak aan.',
      createEventServiceError: 'Niet gelukt om afspraak aan te maken',
      deleteEventServiceError: 'Niet gelukt om afspraak te verwijderen',
      updateEventServiceError: 'Niet gelukt om afspraak bij te werken. Mogelijk wordt dit niet ondersteund.',
      durationHour: '{count} uur',
      durationHours: '{count} uren',
      durationMinute: '{count} minuut',
      durationMinutes: '{count} minuten',
      moreEvents: '+{count} meer',
      eventTitleWithStartTime: '{title}, {time}',
      monthWeekPrefix: 'wk',
      monthWeekAriaLabel: 'Week {week}',
      eventRefreshStaleWarning: 'Kan agendagegevens niet vernieuwen sinds {time}'
    }
  },
  es: {
    locale: 'es-ES',
    strings: {
      defaultTitle: 'Calendario Familiar',
      addEvent: 'Añadir evento',
      today: 'Hoy',
      month: 'Mes',
      week: 'Semana',
      schedule: 'Horario',
      agenda: 'Agenda',
      resetAgenda: 'Ir a hoy',
      openDashboard: 'Abrir panel',
      calendars: 'Calendarios',
      calendar: 'Calendario',
      eventTitle: 'Título del evento',
      eventTitlePlaceholder: 'Reunión de equipo',
      allDayEvent: 'Evento de todo el día',
      recurring: 'Recurrente',
      eventOptions: 'Opciones del evento',
      customColor: 'Color',
      customColorTitle: 'Color personalizado',
      useDefault: 'Usar predeterminado',
      applyColor: 'Aplicar color',
      invalidHexColor: 'Introduce un color hexadecimal válido como #3B82F6.',
      customColorCombinedPrompt: 'Selecciona qué copia del calendario quieres colorear.',
      recurringEventOptions: 'Opciones de recurrencia',
      recurrenceFrequency: 'Repetir',
      recurrenceEvery: 'Cada',
      recurrenceIntervalSuffix: 'intervalo(s)',
      recurrenceEndsOn: 'Termina el',
      recurrenceCount: 'Ocurrencias (CANTIDAD)',
      recurrenceWeekdays: 'Días de la semana',
      recurrenceNoEndDate: 'Sin fecha de finalización (opcional)',
      recurrenceDaily: 'Diariamente',
      recurrenceWeekly: 'Semanalmente',
      recurrenceMonthly: 'Mensualmente',
      recurrenceYearly: 'Anualmente',
      recurrenceNever: 'Nunca',
      recurrenceOn: 'El',
      recurrenceAfter: 'Después de',
      recurrenceOccurrences: 'ocurrencias',
      recurrenceSelectWeekday: 'Selecciona al menos un día de la semana para los eventos recurrentes semanales',
      start: 'Inicio',
      end: 'Fin',
      startDate: 'Fecha de inicio',
      endDate: 'Fecha de fin',
      location: 'Ubicación',
      locationPlaceholder: 'Sala de conferencias A',
      openInGoogleMaps: 'Abrir en Google Maps',
      copyAddress: 'Copiar dirección',
      description: 'Descripción',
      descriptionPlaceholder: 'Detalles del evento...',
      cancel: 'Cancelar',
      createEvent: 'Crear evento',
      creating: 'Creando...',
      forwardEvent: 'Reenviar',
      forwardEventTitle: 'Reenviar evento',
      forwardEventPrompt: 'Selecciona uno o más calendarios nuevos a los que reenviar este evento.',
      forwardEventAlreadyExists: 'Ya contiene este evento',
      forwardEventNoNewCalendars: 'Selecciona al menos un calendario nuevo al que reenviar este evento.',
      continue: 'Continuar',
      editEvent: 'Editar',
      saveChanges: 'Guardar cambios',
      saving: 'Guardando...',
      delete: 'Eliminar',
      deleting: 'Eliminando...',
      deleteEventTitle: 'Eliminar evento',
      deleteRecurringEventTitle: 'Eliminar evento recurrente',
      deleteEventConfirm: '¿Estás seguro de que quieres eliminar "{title}"? Esta acción no se puede deshacer.',
      deleteRecurringPrompt: '"{title}" es un evento recurrente. ¿Cómo te gustaría eliminarlo?',
      editRecurringEventTitle: 'Editar evento recurrente',
      editRecurringPrompt: '"{title}" es un evento recurrente. ¿Cómo te gustaría editarlo?',
      editThisOccurrence: 'Editar solo esta ocurrencia',
      editThisOccurrenceAndFuture: 'Editar esta ocurrencia y todas las futuras',
      editEntireSeries: 'Editar toda la serie recurrente',
      deleteThisEventOnly: 'Solo este evento',
      deleteThisOccurrence: 'Eliminar solo esta ocurrencia',
      deleteThisAndFutureEvents: 'Este y los eventos futuros',
      deleteThisOccurrenceAndFuture: 'Eliminar esta ocurrencia y todas las futuras',
      deleteAllEvents: 'Todos los eventos',
      deleteEntireSeries: 'Eliminar toda la serie recurrente',
      noEvents: 'No hay eventos',
      allDay: 'Todo el día',
      at: 'a las',
      duration: 'Duración',
      attendees: 'Asistentes',
      recurrence: 'Recurrencia',
      recurringEvent: 'Evento recurrente',
      unknownAttendee: 'Desconocido',
      googleCalendarLimitationTitle: 'ℹ️ Limitación de Google Calendar:',
      googleCalendarLimitationBody: 'Actualmente no se admite la edición de eventos para Google Calendar a través de Home Assistant. Puedes eliminar eventos desde aquí, pero para editarlos, utiliza la aplicación o el sitio web de Google Calendar.',
      cannotModifyTitle: 'ℹ️ No se puede modificar:',
      cannotModifyBody: 'A este evento le falta información obligatoria (UID) para su edición o eliminación. Es posible que tengas que volver a crearlo.',
      untitledEvent: 'Evento sin título',
      noWritableCalendars: 'No hay calendarios editables disponibles',
      eventTitleRequired: 'El título del evento es obligatorio',
      startEndDatesRequired: 'Las fechas de inicio y fin son obligatorias',
      endDateBeforeStart: 'La fecha de fin no puede ser anterior a la fecha de inicio',
      startEndTimesRequired: 'Las horas de inicio y fin son obligatorias',
      endTimeBeforeStart: 'La hora de fin debe ser posterior a la hora de inicio',
      failedCreateEvent: 'Error al crear el evento. Por favor, inténtalo de nuevo.',
      failedUpdateEvent: 'Error al actualizar el evento. Por favor, inténtalo de nuevo.',
      failedDeleteEvent: 'Error al eliminar el evento. Por favor, inténtalo de nuevo.',
      homeAssistantUnavailable: 'Home Assistant no está disponible',
      googleCalendarEditError: 'Google Calendar no admite la edición de eventos a través de Home Assistant. Por favor, utiliza la aplicación o el sitio web de Google Calendar.',
      missingUidError: 'A este evento le falta información obligatoria (UID) y no se puede editar.',
      calendarNoModifyError: 'Este calendario no admite modificaciones de eventos. Intenta crear un nuevo evento en su lugar.',
      createEventServiceError: 'Error al crear el evento',
      deleteEventServiceError: 'Error al eliminar el evento',
      updateEventServiceError: 'Error al actualizar el evento. Es posible que el calendario no admita modificaciones.',
      durationHour: '{count} hora',
      durationHours: '{count} horas',
      durationMinute: '{count} minuto',
      durationMinutes: '{count} minutos',
      moreEvents: '+{count} más',
      eventTitleWithStartTime: '{title}, {time}',
      monthWeekPrefix: 'Sem.',
      monthWeekAriaLabel: 'Semana {week}',
      eventRefreshStaleWarning: 'No se pueden actualizar los datos del calendario desde {time}'
    }
  },
  
  et: {
    locale: 'et-EE',
    strings: {
      defaultTitle: 'Perekalender',
      addEvent: 'Lisa sündmus',
      today: 'Täna',
      month: 'Kuu',
      week: 'Nädal',
      schedule: 'Ajakava',
      agenda: 'Päevakava',
      resetAgenda: 'Hüppa tänasele päevale',
      openDashboard: 'Ava juhtpaneel',
      calendars: 'Kalendrid',
      calendar: 'Kalender',
      eventTitle: 'Sündmuse pealkiri',
      eventTitlePlaceholder: 'Koosolek',
      allDayEvent: 'Kogu päeva sündmus',
      recurring: 'Korduv',
      eventOptions: 'Sündmuse valikud',
      customColor: 'Värv',
      customColorTitle: 'Kohandatud värv',
      useDefault: 'Kasuta vaikimisi värvi',
      applyColor: 'Rakenda värv',
      invalidHexColor: 'Sisesta korrektne hex värvikood, näiteks #3B82F6.',
      customColorCombinedPrompt: 'Vali kalendrikoopia, millele värv rakendada.',
      recurringEventOptions: 'Korduvuse valikud',
      recurrenceFrequency: 'Kordus',
      recurrenceEvery: 'Iga',
      recurrenceIntervalSuffix: 'intervalliga',
      recurrenceEndsOn: 'Lõpeb',
      recurrenceCount: 'Korduste arv (COUNT)',
      recurrenceWeekdays: 'Nädalapäevad',
      recurrenceNoEndDate: 'Lõppkuupäev puudub (valikuline)',
      recurrenceDaily: 'Iga päev',
      recurrenceWeekly: 'Iga nädal',
      recurrenceMonthly: 'Iga kuu',
      recurrenceYearly: 'Iga aasta',
      recurrenceNever: 'Mitte kunagi',
      recurrenceOn: 'Kuupäeval',
      recurrenceAfter: 'Pärast',
      recurrenceOccurrences: 'kordust',
      recurrenceSelectWeekday: 'Vali iganädalase korduse jaoks vähemalt üks nädalapäev',
      start: 'Algus',
      end: 'Lõpp',
      startDate: 'Alguskuupäev',
      endDate: 'Lõppkuupäev',
      location: 'Asukoht',
      locationPlaceholder: 'Konverentsiruum A',
      openInGoogleMaps: 'Ava Google Mapsis',
      copyAddress: 'Kopeeri aadress',
      description: 'Kirjeldus',
      descriptionPlaceholder: 'Sündmuse üksikasjad...',
      cancel: 'Tühista',
      createEvent: 'Loo sündmus',
      creating: 'Loomine...',
      forwardEvent: 'Edasta',
      forwardEventTitle: 'Sündmuse edastamine',
      forwardEventPrompt: 'Vali üks või mitu uut kalendrit, kuhu see sündmus edastada.',
      forwardEventAlreadyExists: 'Sündmus on juba olemas',
      forwardEventNoNewCalendars: 'Vali vähemalt üks uus kalender, kuhu sündmus edastada.',
      continue: 'Jätka',
      editEvent: 'Muuda',
      saveChanges: 'Salvesta muudatused',
      saving: 'Salvestamine...',
      delete: 'Kustuta',
      deleting: 'Kustutamine...',
      deleteEventTitle: 'Kustuta sündmus',
      deleteRecurringEventTitle: 'Kustuta korduv sündmus',
      deleteEventConfirm: 'Kas oled kindel, et soovid kustutada "{title}"? Seda ei saa tagasi võtta.',
      deleteRecurringPrompt: '"{title}" on korduv sündmus. Kuidas soovid kustutada?',
      editRecurringEventTitle: 'Muuda korduvat sündmust',
      editRecurringPrompt: '"{title}" on korduv sündmus. Kuidas soovid muuta?',
      editThisOccurrence: 'Muuda ainult seda kordust',
      editThisOccurrenceAndFuture: 'Muuda seda ja kõiki tulevasi kordusi',
      editEntireSeries: 'Muuda kogu seeriat',
      deleteThisEventOnly: 'Ainult see sündmus',
      deleteThisOccurrence: 'Kustuta ainult see kordus',
      deleteThisAndFutureEvents: 'See ja tulevased sündmused',
      deleteThisOccurrenceAndFuture: 'Kustuta see ja kõik tulevased kordused',
      deleteAllEvents: 'Kõik sündmused',
      deleteEntireSeries: 'Kustuta kogu seeria',
      noEvents: 'Sündmusi pole',
      allDay: 'Kogu päev',
      at: 'kell',
      duration: 'Kestus',
      attendees: 'Osalejad',
      recurrence: 'Kordus',
      recurringEvent: 'Korduv sündmus',
      unknownAttendee: 'Tundmatu',
      googleCalendarLimitationTitle: 'ℹ️ Google Calendari piirang:',
      googleCalendarLimitationBody: 'Sündmuste muutmine ei ole Home Assistanti kaudu Google Calendaris toetatud. Saad neid kustutada, kuid muutmiseks kasuta Google Calendari rakendust või veebilehte.',
      cannotModifyTitle: 'ℹ️ Ei saa muuta:',
      cannotModifyBody: 'Sellel sündmusel puudub vajalik info (UID) muutmiseks või kustutamiseks. Võib-olla pead selle uuesti looma.',
      untitledEvent: 'Pealkirjata sündmus',
      noWritableCalendars: 'Pole ühtegi kirjutatavat kalendrit',
      eventTitleRequired: 'Sündmuse pealkiri on kohustuslik',
      startEndDatesRequired: 'Algus- ja lõppkuupäev on kohustuslikud',
      endDateBeforeStart: 'Lõppkuupäev ei saa olla enne algust',
      startEndTimesRequired: 'Algus- ja lõppaeg on kohustuslikud',
      endTimeBeforeStart: 'Lõppaeg peab olema hilisem kui algusaeg',
      failedCreateEvent: 'Sündmuse loomine ebaõnnestus. Proovi uuesti.',
      failedUpdateEvent: 'Sündmuse muutmine ebaõnnestus. Proovi uuesti.',
      failedDeleteEvent: 'Sündmuse kustutamine ebaõnnestus. Proovi uuesti.',
      homeAssistantUnavailable: 'Home Assistant ei ole saadaval',
      googleCalendarEditError: 'Google Calendar ei toeta Home Assistanti kaudu muutmist. Kasuta Google Calendari rakendust või veebilehte.',
      missingUidError: 'Sellel sündmusel puudub vajalik info (UID) ja seda ei saa muuta.',
      calendarNoModifyError: 'See kalender ei toeta sündmuste muutmist. Proovi luua uus sündmus.',
      createEventServiceError: 'Sündmuse loomine ebaõnnestus',
      deleteEventServiceError: 'Sündmuse kustutamine ebaõnnestus',
      updateEventServiceError: 'Sündmuse muutmine ebaõnnestus. Kalender ei pruugi muutmist toetada.',
      durationHour: '{count} tund',
      durationHours: '{count} tundi',
      durationMinute: '{count} minut',
      durationMinutes: '{count} minutit',
      moreEvents: '+{count} veel',
      eventTitleWithStartTime: '{title}, {time}',
      monthWeekPrefix: 'Nädal',
      monthWeekAriaLabel: 'Nädal {week}',
      eventRefreshStaleWarning: 'Kalendriandmeid ei saanud värskendada alates {time}'
    }
  },

  ca: {
    locale: 'ca-ES',
    strings: {
      defaultTitle: 'Calendari Familiar',
      addEvent: 'Afegir esdeveniment',
      today: 'Avui',
      month: 'Mes',
      week: 'Setmana',
      schedule: 'Horari',
      agenda: 'Agenda',
      resetAgenda: "Anar a avui",
      openDashboard: 'Obrir tauler',
      calendars: 'Calendaris',
      calendar: 'Calendari',
      eventTitle: "Títol de l'esdeveniment",
      eventTitlePlaceholder: "Reunió d'equip",
      allDayEvent: 'Esdeveniment de tot el dia',
      recurring: 'Recurrent',
      eventOptions: "Opcions de l'esdeveniment",
      customColor: 'Color',
      customColorTitle: 'Color personalitzat',
      useDefault: 'Utilitza el valor predeterminat',
      applyColor: 'Aplica el color',
      invalidHexColor: 'Introdueix un color hexadecimal vàlid com #3B82F6.',
      customColorCombinedPrompt: 'Selecciona quina còpia del calendari vols acolorir.',
      recurringEventOptions: 'Opcions de recurrència',
      recurrenceFrequency: 'Repetir',
      recurrenceEvery: 'Cada',
      recurrenceIntervalSuffix: 'interval(s)',
      recurrenceEndsOn: 'Acaba el',
      recurrenceCount: 'Ocurrències (QUANTITAT)',
      recurrenceWeekdays: 'Dies de la setmana',
      recurrenceNoEndDate: "Sense data de finalització (opcional)",
      recurrenceDaily: 'Diàriament',
      recurrenceWeekly: 'Setmanalment',
      recurrenceMonthly: 'Mensualment',
      recurrenceYearly: 'Anualment',
      recurrenceNever: 'Mai',
      recurrenceOn: 'El',
      recurrenceAfter: 'Després de',
      recurrenceOccurrences: 'ocurrències',
      recurrenceSelectWeekday: "Selecciona almenys un dia de la setmana per als esdeveniments recurrents setmanals",
      start: 'Inici',
      end: 'Fi',
      startDate: "Data d'inici",
      endDate: 'Data de fi',
      location: 'Ubicació',
      locationPlaceholder: 'Sala de conferències A',
      openInGoogleMaps: 'Obre a Google Maps',
      copyAddress: 'Copia l\'adreça',
      description: 'Descripció',
      descriptionPlaceholder: "Detalls de l'esdeveniment...",
      cancel: 'Cancel·lar',
      createEvent: 'Crear esdeveniment',
      creating: 'Creant...',
      forwardEvent: 'Reenviar',
      forwardEventTitle: "Reenviar esdeveniment",
      forwardEventPrompt: 'Selecciona un o més calendaris nous als quals reenviar aquest esdeveniment.',
      forwardEventAlreadyExists: 'Ja conté aquest esdeveniment',
      forwardEventNoNewCalendars: 'Selecciona almenys un calendari nou al qual reenviar aquest esdeveniment.',
      continue: 'Continuar',
      editEvent: 'Editar',
      saveChanges: 'Desar canvis',
      saving: 'Desant...',
      delete: 'Eliminar',
      deleting: 'Eliminant...',
      deleteEventTitle: "Eliminar esdeveniment",
      deleteRecurringEventTitle: 'Eliminar esdeveniment recurrent',
      deleteEventConfirm: 'Estàs segur que vols eliminar "{title}"? Aquesta acció no es pot desfer.',
      deleteRecurringPrompt: '"{title}" és un esdeveniment recurrent. Com vols eliminar-lo?',
      editRecurringEventTitle: 'Editar esdeveniment recurrent',
      editRecurringPrompt: '"{title}" és un esdeveniment recurrent. Com vols editar-lo?',
      editThisOccurrence: 'Editar només aquesta ocurrència',
      editThisOccurrenceAndFuture: 'Editar aquesta ocurrència i totes les futures',
      editEntireSeries: 'Editar tota la sèrie recurrent',
      deleteThisEventOnly: 'Només aquest esdeveniment',
      deleteThisOccurrence: 'Eliminar només aquesta ocurrència',
      deleteThisAndFutureEvents: 'Aquest i els esdeveniments futurs',
      deleteThisOccurrenceAndFuture: 'Eliminar aquesta ocurrència i totes les futures',
      deleteAllEvents: 'Tots els esdeveniments',
      deleteEntireSeries: 'Eliminar tota la sèrie recurrent',
      noEvents: 'No hi ha esdeveniments',
      allDay: 'Tot el dia',
      at: 'a les',
      duration: 'Durada',
      attendees: 'Assistents',
      recurrence: 'Recurrència',
      recurringEvent: 'Esdeveniment recurrent',
      unknownAttendee: 'Desconegut',
      googleCalendarLimitationTitle: 'ℹ️ Limitació de Google Calendar:',
      googleCalendarLimitationBody: "Actualment no es permet l'edició d'esdeveniments de Google Calendar a través de Home Assistant. Pots eliminar esdeveniments des d'aquí, però per editar-los, utilitza l'aplicació o el lloc web de Google Calendar.",
      cannotModifyTitle: 'ℹ️ No es pot modificar:',
      cannotModifyBody: "A aquest esdeveniment li falta informació obligatòria (UID) per a la seva edició o eliminació. Potser cal que el tornis a crear.",
      untitledEvent: 'Esdeveniment sense títol',
      noWritableCalendars: 'No hi ha calendaris editables disponibles',
      eventTitleRequired: "El títol de l'esdeveniment és obligatori",
      startEndDatesRequired: "Les dates d'inici i fi són obligatòries",
      endDateBeforeStart: "La data de fi no pot ser anterior a la data d'inici",
      startEndTimesRequired: "Les hores d'inici i fi són obligatòries",
      endTimeBeforeStart: "L'hora de fi ha de ser posterior a l'hora d'inici",
      failedCreateEvent: "Error en crear l'esdeveniment. Si us plau, torna-ho a provar.",
      failedUpdateEvent: "Error en actualitzar l'esdeveniment. Si us plau, torna-ho a provar.",
      failedDeleteEvent: "Error en eliminar l'esdeveniment. Si us plau, torna-ho a provar.",
      homeAssistantUnavailable: 'Home Assistant no està disponible',
      googleCalendarEditError: "Google Calendar no permet l'edició d'esdeveniments a través de Home Assistant. Si us plau, utilitza l'aplicació o el lloc web de Google Calendar.",
      missingUidError: "A aquest esdeveniment li falta informació obligatòria (UID) i no es pot editar.",
      calendarNoModifyError: "Aquest calendari no admet modificacions d'esdeveniments. Prova de crear un nou esdeveniment.",
      createEventServiceError: "Error en crear l'esdeveniment",
      deleteEventServiceError: "Error en eliminar l'esdeveniment",
      updateEventServiceError: "Error en actualitzar l'esdeveniment. És possible que el calendari no admeti modificacions.",
      durationHour: '{count} hora',
      durationHours: '{count} hores',
      durationMinute: '{count} minut',
      durationMinutes: '{count} minuts',
      moreEvents: '+{count} més',
      eventTitleWithStartTime: '{title}, {time}',
      monthWeekPrefix: 'Set.',
      monthWeekAriaLabel: 'Setmana {week}',
      eventRefreshStaleWarning: 'No es poden actualitzar les dades del calendari des de {time}'
    }
  },

  da: {
    locale: 'da-DK',
    strings: {
      defaultTitle: 'Familiekalender',
      addEvent: 'Tilføj begivenhed',
      today: 'I dag',
      month: 'Måned',
      week: 'Uge',
      schedule: 'Skema',
      agenda: 'Agenda',
      resetAgenda: 'Gå til i dag',
      openDashboard: 'Åbn dashboard',
      calendars: 'Kalendere',
      calendar: 'Kalender',
      eventTitle: 'Begivenhedstitel',
      eventTitlePlaceholder: 'Teammøde',
      allDayEvent: 'Heldagsbegivenhed',
      recurring: 'Gentagende',
      eventOptions: 'Begivenhedsindstillinger',
      customColor: 'Farve',
      customColorTitle: 'Brugerdefineret farve',
      useDefault: 'Brug standard',
      applyColor: 'Anvend farve',
      invalidHexColor: 'Indtast en gyldig hex-farve som #3B82F6.',
      customColorCombinedPrompt: 'Vælg hvilken kalenderkopi der skal farves.',
      recurringEventOptions: 'Gentagelsesindstillinger',
      recurrenceFrequency: 'Gentag',
      recurrenceEvery: 'Hver',
      recurrenceIntervalSuffix: 'interval(er)',
      recurrenceEndsOn: 'Slutter den',
      recurrenceCount: 'Antal forekomster',
      recurrenceWeekdays: 'Ugedage',
      recurrenceNoEndDate: 'Ingen slutdato (valgfrit)',
      recurrenceDaily: 'Dagligt',
      recurrenceWeekly: 'Ugentligt',
      recurrenceMonthly: 'Månedligt',
      recurrenceYearly: 'Årligt',
      recurrenceNever: 'Aldrig',
      recurrenceOn: 'Den',
      recurrenceAfter: 'Efter',
      recurrenceOccurrences: 'forekomster',
      recurrenceSelectWeekday: 'Vælg mindst én ugedag for ugentligt gentagende begivenheder',
      start: 'Start',
      end: 'Slut',
      startDate: 'Startdato',
      endDate: 'Slutdato',
      location: 'Sted',
      locationPlaceholder: 'Konferencerum A',
      openInGoogleMaps: 'Åbn i Google Maps',
      copyAddress: 'Kopiér adresse',
      description: 'Beskrivelse',
      descriptionPlaceholder: 'Begivenhedsdetaljer...',
      cancel: 'Annuller',
      createEvent: 'Opret begivenhed',
      creating: 'Opretter...',
      forwardEvent: 'Kopiér',
      forwardEventTitle: 'Kopiér begivenhed',
      forwardEventPrompt: 'Vælg en eller flere kalendere, som begivenheden skal kopieres til.',
      forwardEventAlreadyExists: 'Denne begivenhed findes allerede',
      forwardEventNoNewCalendars: 'Vælg mindst én ny kalender, som begivenheden skal kopieres til.',
      continue: 'Fortsæt',
      editEvent: 'Rediger',
      saveChanges: 'Gem ændringer',
      saving: 'Gemmer...',
      delete: 'Slet',
      deleting: 'Sletter...',
      deleteEventTitle: 'Slet begivenhed',
      deleteRecurringEventTitle: 'Slet gentagende begivenhed',
      deleteEventConfirm: 'Er du sikker på, at du vil slette "{title}"? Denne handling kan ikke fortrydes.',
      deleteRecurringPrompt: '"{title}" er en gentagende begivenhed. Hvordan vil du slette den?',
      editRecurringEventTitle: 'Rediger gentagende begivenhed',
      editRecurringPrompt: '"{title}" er en gentagende begivenhed. Hvordan vil du redigere den?',
      editThisOccurrence: 'Rediger kun denne forekomst',
      editThisOccurrenceAndFuture: 'Rediger denne forekomst og alle fremtidige forekomster',
      editEntireSeries: 'Rediger hele serien',
      deleteThisEventOnly: 'Kun denne begivenhed',
      deleteThisOccurrence: 'Slet kun denne forekomst',
      deleteThisAndFutureEvents: 'Denne og fremtidige begivenheder',
      deleteThisOccurrenceAndFuture: 'Slet denne forekomst og alle fremtidige forekomster',
      deleteAllEvents: 'Alle forekomster',
      deleteEntireSeries: 'Slet hele serien',
      noEvents: 'Ingen begivenheder',
      allDay: 'Hele dagen',
      at: 'kl.',
      duration: 'Varighed',
      attendees: 'Deltagere',
      recurrence: 'Gentagelse',
      recurringEvent: 'Gentagende begivenhed',
      unknownAttendee: 'Ukendt',
      googleCalendarLimitationTitle: 'ℹ️ Begrænsning i Google Kalender:',
      googleCalendarLimitationBody: 'Redigering af begivenheder understøttes i øjeblikket ikke for Google Kalender via Home Assistant. Du kan slette begivenheder herfra, men brug Google Kalender-appen eller webstedet for at redigere dem.',
      cannotModifyTitle: 'ℹ️ Kan ikke ændres:',
      cannotModifyBody: 'Denne begivenhed mangler nødvendige oplysninger (UID) til redigering eller sletning. Du skal muligvis oprette den igen.',
      untitledEvent: 'Begivenhed uden titel',
      noWritableCalendars: 'Ingen redigerbare kalendere tilgængelige',
      eventTitleRequired: 'Begivenhedstitel er påkrævet',
      startEndDatesRequired: 'Start- og slutdatoer er påkrævede',
      endDateBeforeStart: 'Slutdato kan ikke være før startdato',
      startEndTimesRequired: 'Start- og sluttidspunkter er påkrævede',
      endTimeBeforeStart: 'Sluttidspunkt skal være efter starttidspunkt',
      failedCreateEvent: 'Kunne ikke oprette begivenhed. Prøv igen.',
      failedUpdateEvent: 'Kunne ikke opdatere begivenhed. Prøv igen.',
      failedDeleteEvent: 'Kunne ikke slette begivenhed. Prøv igen.',
      homeAssistantUnavailable: 'Home Assistant er ikke tilgængelig',
      googleCalendarEditError: 'Google Kalender understøtter ikke redigering af begivenheder via Home Assistant. Brug Google Kalender-appen eller webstedet.',
      missingUidError: 'Denne begivenhed mangler nødvendige oplysninger (UID) og kan ikke redigeres.',
      calendarNoModifyError: 'Denne kalender understøtter ikke ændringer af begivenheder. Prøv at oprette en ny begivenhed i stedet.',
      createEventServiceError: 'Kunne ikke oprette begivenhed',
      deleteEventServiceError: 'Kunne ikke slette begivenhed',
      updateEventServiceError: 'Kunne ikke opdatere begivenhed. Kalenderen understøtter muligvis ikke ændringer.',
      durationHour: '{count} time',
      durationHours: '{count} timer',
      durationMinute: '{count} minut',
      durationMinutes: '{count} minutter',
      moreEvents: '+{count} flere',
      eventTitleWithStartTime: '{title}, {time}',
      monthWeekPrefix: 'Uge',
      monthWeekAriaLabel: 'Uge {week}',
      eventRefreshStaleWarning: 'Kan ikke opdatere kalenderdata siden {time}'
    }
  },

  sv: {
    locale: 'sv-SE',
    strings: {
      defaultTitle: 'Familjekalender',
      addEvent: 'Ny händelse',
      today: 'Idag',
      month: 'Månad',
      week: 'Vecka',
      schedule: 'Schema',
      agenda: 'Agenda',
      resetAgenda: 'Gå till idag',
      openDashboard: 'Öppna översikt',
      calendars: 'Kalendrar',
      calendar: 'Kalender',
      eventTitle: 'Händelsetitel',
      eventTitlePlaceholder: 'Teams-möte',
      allDayEvent: 'Hela dagen',
      recurring: 'Återkommande',
      eventOptions: 'Alternativ',
      customColor: 'Färg',
      customColorTitle: 'Anpassad färg',
      useDefault: 'Använd standard',
      applyColor: 'Använd färg',
      invalidHexColor: 'Ange en giltig hex-färg som #3B82F6.',
      customColorCombinedPrompt: 'Välj vilken kalenderkopia som ska färgsättas.',
      recurringEventOptions: 'Återkommande alternativ',
      recurrenceFrequency: 'Upprepa',
      recurrenceEvery: 'Varje',
      recurrenceIntervalSuffix: 'intervall(er)',
      recurrenceEndsOn: 'Slutar',
      recurrenceCount: 'Upprepningar (COUNT)',
      recurrenceWeekdays: 'Veckodagar',
      recurrenceNoEndDate: 'Inget slutdatum (valfritt)',
      recurrenceDaily: 'Dagligen',
      recurrenceWeekly: 'Veckovis',
      recurrenceMonthly: 'Månadsvis',
      recurrenceYearly: 'Årligen',
      recurrenceNever: 'Aldrig',
      recurrenceOn: 'På',
      recurrenceAfter: 'Efter',
      recurrenceOccurrences: 'Upprepningar',
      recurrenceSelectWeekday: 'Välj minst en veckodag för återkommande händelser.',
      start: 'Start',
      end: 'Slut',
      startDate: 'Startdatum',
      endDate: 'Slutdatum',
      location: 'Plats',
      locationPlaceholder: 'Konferensrum A',
      openInGoogleMaps: 'Öppna i Google Maps',
      copyAddress: 'Kopiera adress',
      description: 'Beskrivning',
      descriptionPlaceholder: 'Händelsebeskrivning...',
      cancel: 'Avbryt',
      createEvent: 'Skapa händelse',
      creating: 'Skapar...',
      forwardEvent: 'Vidarebefordra',
      forwardEventTitle: 'Vidarebefordra händelse',
      forwardEventPrompt: 'Välj en eller flera nya kalendrar att vidarebefordra händelsen till.',
      forwardEventAlreadyExists: 'Har redan den här händelsen',
      forwardEventNoNewCalendars: 'Välj minst en ny kalender att vidarebefordra händelsen till.',
      continue: 'Fortsätt',
      editEvent: 'Redigera',
      saveChanges: 'Spara ändringar',
      saving: 'Sparar...',
      delete: 'Ta bort',
      deleting: 'Tar bort...',
      deleteEventTitle: 'Ta bort händelse',
      deleteRecurringEventTitle: 'Ta bort återkommande händelser',
      deleteEventConfirm: 'Är du säker på att du vill radera "{title}"? Detta går inte att ångra.',
      deleteRecurringPrompt: '"{title}" är en återkommande händelse. Hur vill du ta bort den?',
      editRecurringEventTitle: 'Redigera återkommande händelse',
      editRecurringPrompt: '"{title}" är en återkommande händelse. Hur vill du redigera den?',
      editThisOccurrence: 'Redigera enbart den här händelsen i serien',
      editThisOccurrenceAndFuture: 'Redigera den här och alla återkommande händelser i serien',
      editEntireSeries: 'Redigera alla händelser i serien',
      deleteThisEventOnly: 'Den här händelsen enbart',
      deleteThisOccurrence: 'Ta bort enbart den här händelsen',
      deleteThisAndFutureEvents: 'Den här och framtida händelser',
      deleteThisOccurrenceAndFuture: 'Ta bort den här och alla framtida händelser i den här serien.',
      deleteAllEvents: 'Alla händelser',
      deleteEntireSeries: 'Ta bort alla händelser i serien.',
      noEvents: 'Inga händelser',
      allDay: 'Hela dagen',
      at: 'vid',
      duration: 'Varaktighet',
      attendees: 'Deltagare',
      recurrence: 'Upprepningar',
      recurringEvent: 'Återkommande händelse',
      unknownAttendee: 'Okänt',
      googleCalendarLimitationTitle: 'ℹ️ Begränsning i Google Kalender',
      googleCalendarLimitationBody: 'Redigering av händelser stöds inte för Google Kalender via Home Assistant. Du kan ta bort händelser, men för att redigera dem måste du använda Google Kalender-appen eller webbplatsen.',
      cannotModifyTitle: 'ℹ️ Kan inte ändra:',
      cannotModifyBody: 'Den här händelsen saknar nödvändig information (UID) för redigering eller borttagning. Du kan behöva skapa den på nytt.',
      untitledEvent: 'Ingen rubrik',
      noWritableCalendars: 'Inga tillgängliga kalendrar',
      eventTitleRequired: 'Händelserubrik saknas',
      startEndDatesRequired: 'Fyll i start- och slutdatum',
      endDateBeforeStart: 'Slutdatum måste vara efter startdatum',
      startEndTimesRequired: 'Fyll i start- och sluttider',
      endTimeBeforeStart: 'Sluttid måste vara efter starttid',
      failedCreateEvent: 'Misslyckades att skapa händelse. Försök igen.',
      failedUpdateEvent: 'Misslyckades att uppdatera händelse. Försök igen.',
      failedDeleteEvent: 'Misslyckades att radera händelse. Försök igen.',
      homeAssistantUnavailable: 'Home Assistant är inte tillgängligt',
      googleCalendarEditError: 'Redigering av händelser stöds inte för Google Kalender via Home Assistant. Använd Google Kalender-appen eller webbplatsen i stället.',
      missingUidError: 'Den här händelsen saknar nödvändig information (UID) och kan inte redigeras',
      calendarNoModifyError: 'Den här kalendern stöder inte ändringar av händelser. Försök skapa en ny händelse.',
      createEventServiceError: 'Skapa händelse misslyckades',
      deleteEventServiceError: 'Ta bort händelse misslyckades',
      updateEventServiceError: 'Uppdatera händelse misslyckades. Kalendern kanske inte har stöd för ändringar.',
      durationHour: '{count} timme',
      durationHours: '{count} timmar',
      durationMinute: '{count} minut',
      durationMinutes: '{count} minuter',
      moreEvents: '+{count} fler',
      eventTitleWithStartTime: '{title}, {time}',
      monthWeekPrefix: 'v.',
      monthWeekAriaLabel: 'Vecka {week}',
      eventRefreshStaleWarning: 'Det går inte att uppdatera kalenderdata sedan {time}'
    }
  }
};

function renderDayBadge(badge, { escapeHtml, registerDayBadgeAction } = {}) {
  const style = [
    badge.background_color ? `--dcc-day-badge-background: ${badge.background_color};` : '',
    badge.color ? `--dcc-day-badge-color: ${badge.color};` : '',
    badge.size ? `--dcc-day-badge-size: ${badge.size};` : '',
    badge.font_size ? `--dcc-day-badge-font-size: ${badge.font_size};` : ''
  ].join(' ');
  const hasIcon = Boolean(badge.icon);
  const hasText = Boolean(badge.text);
  const content = [
    hasIcon ? `<ha-icon icon="${escapeHtml(badge.icon)}"></ha-icon>` : '',
    hasText ? `<span class="day-badge-text">${escapeHtml(badge.text)}</span>` : ''
  ].join('');
  const actionId = badge.tap_action && typeof registerDayBadgeAction === 'function'
    ? registerDayBadgeAction(badge.tap_action)
    : null;
  const classes = ['day-badge', actionId ? 'day-badge-action' : '', hasIcon ? 'has-icon' : '', hasText ? 'has-text' : ''].filter(Boolean).join(' ');
  if (actionId) {
    return `<button type="button" class="${classes}" style="${style}" data-day-badge-action-id="${escapeHtml(actionId)}">${content}</button>`;
  }
  return `<span class="${classes}" style="${style}">${content}</span>`;
}

function renderDayBadges(date, dayEvents, { escapeHtml, getDayBadges, registerDayBadgeAction }) {
  const badges = getDayBadges(date, dayEvents);
  if (!badges.length) return '';

  const badgesHtml = badges.map((badge) => renderDayBadge(badge, { escapeHtml, registerDayBadgeAction })).join('');

  return `<div class="day-badges">${badgesHtml}</div>`;
}

function getDayForecastClass(viewMode = 'week-compact') {
  return viewMode === 'week-standard'
    ? 'week-standard-day-forecast'
    : viewMode === 'month'
      ? 'month-day-forecast'
      : viewMode === 'agenda'
        ? 'agenda-day-forecast'
        : 'week-day-forecast';
}

function renderWeatherIcon(icon, { escapeHtml }) {
  return `<span class="forecast-condition"><ha-icon icon="${escapeHtml(icon)}"></ha-icon></span>`;
}

function renderForecastTemperatures(forecast, { escapeHtml }) {
  return `<span class="forecast-temperatures">
          <span class="forecast-temp-high">${escapeHtml(forecast.highTemp)}</span>
          ${forecast.lowTemp ? `<span class="forecast-temp-low">${escapeHtml(forecast.lowTemp)}</span>` : ''}
        </span>`;
}

function renderDayForecast(date, viewMode = 'week-compact', { escapeHtml, getForecastForDate }) {
  const forecast = getForecastForDate(date);
  if (!forecast) return '';
  const forecastClass = getDayForecastClass(viewMode);

  return `
      <div class="${forecastClass}">
        ${renderWeatherIcon(forecast.conditionIcon, { escapeHtml })}
        ${renderForecastTemperatures(forecast, { escapeHtml })}
      </div>
    `;
}

function normalizeDayBadgeBlock(rule = {}, {
  normalizeEventTextValue,
  normalizeDayBadgeDisplayColor,
  normalizeStyleSizeValue
} = {}) {
  const normalized = {};
  const text = normalizeEventTextValue(rule.text);
  const icon = normalizeEventTextValue(rule.icon);
  const normalizedText = text || '';
  const normalizedIcon = icon || '';
  if (normalizedText) normalized.text = normalizedText;
  if (normalizedIcon) normalized.icon = normalizedIcon;

  const backgroundColor = normalizeDayBadgeDisplayColor(rule.background_color);
  if (backgroundColor) normalized.background_color = backgroundColor;
  const color = normalizeDayBadgeDisplayColor(rule.color);
  if (color) normalized.color = color;

  const size = normalizeStyleSizeValue(rule.size);
  if (size) normalized.size = size;

  const fontSize = normalizeStyleSizeValue(rule.font_size);
  if (fontSize) normalized.font_size = fontSize;

  const tapAction = normalizeDayBadgeTapAction(rule.tap_action);
  if (tapAction) normalized.tap_action = tapAction;
  return normalized;
}

function isPlainObject(value) {
  return !!value && typeof value === 'object' && !Array.isArray(value);
}

function normalizeDayBadgeTapAction(tapAction) {
  if (!isPlainObject(tapAction)) return undefined;
  if (tapAction.action !== 'fire-dom-event') return undefined;
  const eventType = typeof tapAction.event_type === 'string' ? tapAction.event_type.trim() : '';
  if (!eventType) return undefined;

  const normalized = {
    action: 'fire-dom-event',
    event_type: eventType
  };

  if (isPlainObject(tapAction.event_data)) {
    normalized.event_data = { ...tapAction.event_data };
  }

  return normalized;
}

function isFullValueTemplate(value) {
  return typeof value === 'string' && /^\s*\{\{\s*([A-Za-z0-9_.-]+)\s*\}\}\s*$/.test(value);
}

function normalizeDayBadgeDisplayColor(value, { normalizeSingleColor } = {}) {
  if (isFullValueTemplate(value)) return String(value).trim();
  return normalizeSingleColor(value);
}

function normalizeResolvedDayBadgeDisplayColor(value, { normalizeSingleColor } = {}) {
  const normalized = normalizeSingleColor(value);
  if (typeof normalized !== 'string') return undefined;
  const trimmed = normalized.trim();
  if (!trimmed) return undefined;

  if (/^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(trimmed)) return trimmed;
  if (/^rgba?\(\s*[+-]?(?:\d+|\d*\.\d+)%?\s*(?:,|\s)\s*[+-]?(?:\d+|\d*\.\d+)%?\s*(?:,|\s)\s*[+-]?(?:\d+|\d*\.\d+)%?(?:\s*(?:,|\/)\s*(?:[01](?:\.\d+)?|\.\d+|\d+%))?\s*\)$/i.test(trimmed)) return trimmed;
  if (/^hsla?\(\s*[+-]?(?:\d+|\d*\.\d+)(?:deg|grad|rad|turn)?\s*(?:,|\s)\s*[+-]?(?:\d+|\d*\.\d+)%\s*(?:,|\s)\s*[+-]?(?:\d+|\d*\.\d+)%(?:\s*(?:,|\/)\s*(?:[01](?:\.\d+)?|\.\d+|\d+%))?\s*\)$/i.test(trimmed)) return trimmed;

  return undefined;
}

function parseEventDescriptionJson(event) {
  const raw = String(event?.description || '').trim();
  if (!raw.startsWith('{') || !raw.endsWith('}')) return undefined;

  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return undefined;
    return parsed;
  } catch {
    return undefined;
  }
}

function buildDayBadgeResolutionContext(date, matchedEvent, { formatLocalDate } = {}) {
  const event = matchedEvent && typeof matchedEvent === 'object' ? matchedEvent : {};
  const calendar = event.entityId || event.entity_id || event.calendar;
  const title = event.summary || event.title;
  return {
    date: date instanceof Date && !Number.isNaN(date.getTime()) ? formatLocalDate(date) : date,
    calendar,
    title,
    event: {
      ...event,
      calendar,
      entity_id: event.entity_id || event.entityId,
      title,
      summary: event.summary || event.title,
      description_json: parseEventDescriptionJson(event)
    }
  };
}

function resolveSafePath(path, context) {
  if (typeof path !== 'string' || !path) return undefined;
  const blockedSegments = new Set(['__proto__', 'prototype', 'constructor']);
  const segments = path.split('.');
  if (!segments.length) return undefined;

  let current = context;
  for (const segment of segments) {
    if (!/^[A-Za-z0-9_-]+$/.test(segment) || blockedSegments.has(segment)) return undefined;
    if (current === null || current === undefined || (typeof current !== 'object' && typeof current !== 'function')) return undefined;
    if (!Object.prototype.hasOwnProperty.call(current, segment)) return undefined;
    current = current[segment];
  }

  if (current === null || current === undefined) return undefined;
  if (['string', 'number', 'boolean'].includes(typeof current)) return String(current);
  return undefined;
}

function resolveDayBadgeDisplayValue(value, context) {
  if (typeof value !== 'string') return value;
  const match = value.match(/^\s*\{\{\s*([A-Za-z0-9_.-]+)\s*\}\}\s*$/);
  if (!match) return value;
  return resolveSafePath(match[1], context);
}

function resolveDayBadgeTapAction(tapAction, context) {
  const normalized = normalizeDayBadgeTapAction(tapAction);
  if (!normalized) return undefined;

  const eventData = {};
  if (isPlainObject(normalized.event_data)) {
    Object.entries(normalized.event_data).forEach(([key, value]) => {
      if (!['string', 'number', 'boolean'].includes(typeof value)) return;
      const resolvedValue = resolveDayBadgeDisplayValue(value, context);
      if (!['string', 'number', 'boolean'].includes(typeof resolvedValue)) return;
      eventData[key] = resolvedValue;
    });
  }

  return {
    action: 'fire-dom-event',
    event_type: normalized.event_type,
    event_data: eventData
  };
}

function resolveDayBadgeForRender(rule, date, matchedEvent, {
  formatLocalDate,
  normalizeResolvedDayBadgeDisplayColor
} = {}) {
  const context = buildDayBadgeResolutionContext(date, matchedEvent, { formatLocalDate });
  const resolved = { ...rule };
  ['icon', 'text', 'background_color', 'color'].forEach((field) => {
    const value = resolveDayBadgeDisplayValue(rule[field], context);
    if (value === undefined || value === null || String(value).trim() === '') {
      delete resolved[field];
      return;
    }

    if (field === 'background_color' || field === 'color') {
      const normalizedColor = normalizeResolvedDayBadgeDisplayColor(value);
      if (normalizedColor) {
        resolved[field] = normalizedColor;
      } else {
        delete resolved[field];
      }
      return;
    }

    resolved[field] = String(value).trim();
  });
  const tapAction = resolveDayBadgeTapAction(rule.tap_action, context);
  if (tapAction) {
    resolved.tap_action = tapAction;
  } else {
    delete resolved.tap_action;
  }
  return resolved;
}

function normalizeDayBadgeConditions(rawConditions, { normalizeEventMatchConditions } = {}) {
  return normalizeEventMatchConditions(rawConditions);
}

function normalizeDayBadges(rawRules, {
  normalizeAdvancedRuleMatch,
  normalizeDayBadgeBlock
} = {}) {
  if (!Array.isArray(rawRules)) return [];

  return rawRules
    .map((rule, index) => {
      if (!rule || typeof rule !== 'object') return null;
      const rawMatch = rule.match && typeof rule.match === 'object'
        ? rule.match
        : (rule.conditions && typeof rule.conditions === 'object' ? { event: rule.conditions } : null);
      const match = normalizeAdvancedRuleMatch(rawMatch, 'event');
      if (!match) return null;

      const output = normalizeDayBadgeBlock(rule);
      if (!output.text && !output.icon) return null;

      const numericPriority = Number(rule.priority);
      const priority = Number.isFinite(numericPriority) ? numericPriority : 0;
      const normalized = {
        id: typeof rule.id === 'string' && rule.id.trim() ? rule.id.trim() : `day-badge-${index + 1}`,
        type: 'day_badge',
        priority,
        index,
        match,
        output,
        conditions: match.event
      };
      Object.assign(normalized, output);
      return normalized;
    })
    .filter(Boolean);
}

function normalizeSingleColor(colorValue) {
  if (colorValue === undefined || colorValue === null) {
    return colorValue;
  }

  const trimmed = String(colorValue).trim();
  if (!trimmed) return trimmed;

  const normalizedName = trimmed
    .toLowerCase()
    .replace(/[()]/g, '')
    .replace(/\s*\/\s*/g, '/')
    .replace(/\s+/g, ' ')
    .trim();
  const mappedColor = COMMON_NAMED_COLORS[normalizedName];
  if (mappedColor) {
    return mappedColor;
  }

  return trimmed;
}

function normalizeColorMap(colorMap, { normalizeColor = normalizeSingleColor } = {}) {
  if (!colorMap || typeof colorMap !== 'object') return {};

  return Object.entries(colorMap).reduce((acc, [entityId, color]) => {
    const normalized = normalizeColor(color);
    if (normalized !== undefined && normalized !== null && normalized !== '') {
      acc[entityId] = normalized;
    }
    return acc;
  }, {});
}

function colorToHex(color, { normalizeColor = normalizeSingleColor } = {}) {
  if (!color) return null;

  const normalizedColor = normalizeColor(color);
  if (typeof normalizedColor !== 'string') return null;

  const hex3Match = normalizedColor.match(/^#([\da-fA-F]{3})$/);
  if (hex3Match) {
    const [r, g, b] = hex3Match[1].split('');
    return `#${r}${r}${g}${g}${b}${b}`.toUpperCase();
  }

  const hex6Match = normalizedColor.match(/^#([\da-fA-F]{6})$/);
  if (hex6Match) {
    return `#${hex6Match[1].toUpperCase()}`;
  }

  return null;
}

function parseColorToRgb(color, {
  normalizeColor = normalizeSingleColor,
  resolveComputedCssColorToRgb = null
} = {}) {
  const normalizedColor = normalizeColor(color);
  if (typeof normalizedColor === 'string') {
    const rgbMatch = normalizedColor
      .match(/^rgba?\((.+)\)$/i);
    if (rgbMatch) {
      const normalizedChannels = rgbMatch[1]
        .replace(/\s*\/\s*.*/, '')
        .replace(/,/g, ' ')
        .trim()
        .split(/\s+/)
        .slice(0, 3)
        .map((channel) => Number(channel));

      if (normalizedChannels.length === 3 && normalizedChannels.every((value) => Number.isFinite(value))) {
        const [r, g, b] = normalizedChannels.map((value) => Math.max(0, Math.min(255, Math.round(value))));
        return { r, g, b };
      }
    }
  }

  const hex = colorToHex(normalizedColor, { normalizeColor });
  if (hex) {
    return {
      r: parseInt(hex.slice(1, 3), 16),
      g: parseInt(hex.slice(3, 5), 16),
      b: parseInt(hex.slice(5, 7), 16)
    };
  }

  return typeof resolveComputedCssColorToRgb === 'function'
    ? resolveComputedCssColorToRgb(normalizedColor)
    : null;
}

function colorWithAlpha(color, alpha = 1, { colorToRgb = parseColorToRgb } = {}) {
  const rgb = colorToRgb(color);
  if (!rgb) return color;

  const clamped = Math.max(0, Math.min(1, alpha));
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${clamped})`;
}

function blendRgb(top, bottom, topAlpha = 1) {
  if (!top && !bottom) return null;
  if (!top) return bottom;
  if (!bottom) return top;
  const clampedAlpha = Math.max(0, Math.min(1, topAlpha));
  return {
    r: Math.round((top.r * clampedAlpha) + (bottom.r * (1 - clampedAlpha))),
    g: Math.round((top.g * clampedAlpha) + (bottom.g * (1 - clampedAlpha))),
    b: Math.round((top.b * clampedAlpha) + (bottom.b * (1 - clampedAlpha)))
  };
}

function getContrastColor(backgroundColor, { colorToRgb = parseColorToRgb } = {}) {
  const rgb = colorToRgb(backgroundColor);
  if (!rgb) return 'white';

  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  return luminance > 0.6 ? 'black' : 'white';
}

function normalizeThemeMode(value) {
  if (value === true) return 'dark';
  if (value === false || value === undefined || value === null || value === '') return DEFAULT_THEME_MODE;

  return normalizeEnumValue(value, {
    allowed: THEME_MODE_OPTIONS,
    fallback: DEFAULT_THEME_MODE
  });
}

function normalizeEventTitlePrefixMode(value) {
  return normalizeEnumValue(value, {
    aliases: EVENT_TITLE_PREFIX_ALIASES,
    allowed: EVENT_TITLE_PREFIX_OPTIONS,
    fallback: DEFAULT_EVENT_TITLE_PREFIX
  });
}

function normalizePastEventMode(value) {
  return normalizeEnumValue(value, {
    allowed: PAST_EVENT_MODE_OPTIONS,
    fallback: DEFAULT_PAST_EVENT_MODE
  });
}

function normalizeDayBadgeLayoutWeek(value) {
  return normalizeEnumValue(value, {
    allowed: DAY_BADGE_LAYOUT_WEEK_OPTIONS,
    fallback: DEFAULT_DAY_BADGE_LAYOUT_WEEK
  });
}

function normalizeDefaultHiddenCalendars(config = {}) {
  const knownEntities = new Set(Array.isArray(config.entities) ? config.entities : []);
  const hiddenCalendars = new Set();

  if (Array.isArray(config.default_hidden_calendars)) {
    config.default_hidden_calendars.forEach((entityId) => {
      if (knownEntities.has(entityId)) hiddenCalendars.add(entityId);
    });
  }

  const visibilityMap = config.default_calendar_visibility || config.calendar_visibility || {};
  if (visibilityMap && typeof visibilityMap === 'object' && !Array.isArray(visibilityMap)) {
    Object.entries(visibilityMap).forEach(([entityId, value]) => {
      if (!knownEntities.has(entityId)) return;
      const normalizedValue = typeof value === 'string' ? value.trim().toLowerCase() : value;
      if (HIDDEN_CALENDAR_VISIBILITY_VALUES.includes(normalizedValue)) {
        hiddenCalendars.add(entityId);
      } else if (VISIBLE_CALENDAR_VISIBILITY_VALUES.includes(normalizedValue)) {
        hiddenCalendars.delete(entityId);
      }
    });
  }

  return Array.from(hiddenCalendars);
}

function normalizeCombineStyle(styleValue) {
  return normalizeEnumValue(styleValue, {
    allowed: COMBINE_STYLE_OPTIONS,
    fallback: DEFAULT_COMBINE_STYLE
  });
}

function normalizeEventColorMode(modeValue) {
  return normalizeEnumValue(modeValue, {
    allowed: EVENT_COLOR_MODE_OPTIONS,
    fallback: DEFAULT_EVENT_COLOR_MODE
  });
}

function normalizeCombineBackground(backgroundValue, { colorToHex: normalizeColorToHex = colorToHex } = {}) {
  const normalized = String(backgroundValue || '').trim();
  if (!normalized) return DEFAULT_COMBINE_BACKGROUND;

  const lower = normalized.toLowerCase();
  if (COMBINE_BACKGROUND_MODE_OPTIONS.includes(lower)) {
    return lower;
  }

  const hex = normalizeColorToHex(normalized);
  return hex || DEFAULT_COMBINE_BACKGROUND;
}

function normalizeBackgroundOpacity(opacityValue, fallback = 0) {
  const numericOpacity = Number(opacityValue);
  if (!Number.isFinite(numericOpacity)) {
    return fallback;
  }

  return Math.min(100, Math.max(0, numericOpacity));
}

function normalizeEventModalSize(value) {
  const normalized = String(value || '').trim().toLowerCase();
  return EVENT_MODAL_SIZE_OPTIONS.includes(normalized) ? normalized : DEFAULT_EVENT_MODAL_SIZE;
}

function normalizeEventTextValue(value) {
  return String(value || '')
    .normalize('NFKC')
    .replace(/\s+/g, ' ')
    .trim();
}

function escapeHtmlAttribute(text) {
  const replacements = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  return String(text ?? '').replace(/[&<>"']/g, (char) => replacements[char]);
}

const getEventIdentityKey = (entityId, event) => {
  const uid = event?.uid;
  const recurrenceId = event?.recurrence_id || event?.recurring_event_id;
  const start = event?.start?.dateTime || event?.start?.date || event?.start || '';
  const end = event?.end?.dateTime || event?.end?.date || event?.end || '';
  if (uid && recurrenceId) return `${entityId}|${uid}|${recurrenceId}`;
  if (uid) return `${entityId}|${uid}|${start}|${end}`;
  return `${entityId}|${recurrenceId || ''}|${start}|${end}|${event?.summary || ''}`;
};

const normalizeCalendarEvent = (event, { entityId, color }) => ({
  ...event,
  entityId,
  color
});

const getEventStartDate = (event, { parseLocalDate } = {}) => {
  if (event.start?.dateTime) return new Date(event.start.dateTime);
  if (event.start?.date) return parseLocalDate(event.start.date);
  return new Date(event.start);
};

const getEventDateTimeInfo = (event, { parseCalendarDate } = {}) => {
  if (event.start.dateTime) {
    return {
      eventStart: new Date(event.start.dateTime),
      eventEnd: new Date(event.end.dateTime),
      isAllDay: false
    };
  }

  if (event.start.date) {
    return {
      eventStart: parseCalendarDate(event.start.date),
      eventEnd: parseCalendarDate(event.end.date),
      isAllDay: true
    };
  }

  const isAllDay = !event.start.includes('T');
  return {
    eventStart: new Date(event.start),
    eventEnd: new Date(event.end),
    isAllDay
  };
};

const matchPrimitiveCondition = (value, condition) => {
  if (typeof condition === 'boolean') {
    return value === condition;
  }

  if (typeof condition === 'string') {
    const normalized = condition.trim().toLowerCase();
    if (normalized === 'true') return value === true;
    if (normalized === 'false') return value === false;
  }

  return value === condition;
};

const parseRegexCondition = (value) => {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  if (!trimmed) return null;

  const prefixed = trimmed.match(/^regex:(.+)$/i);
  if (prefixed) {
    try {
      return new RegExp(prefixed[1].trim(), 'i');
    } catch (error) {
      return null;
    }
  }

  const slashDelimited = trimmed.match(/^\/(.+)\/([dgimsuvy]*)$/);
  if (!slashDelimited) return null;

  try {
    return new RegExp(slashDelimited[1], slashDelimited[2] || 'i');
  } catch (error) {
    return null;
  }
};

const matchTextCondition = (value, condition, { normalizeEventTextValue }) => {
  const rawNormalizedValue = normalizeEventTextValue(value);
  if (!rawNormalizedValue) return false;
  const normalizedValue = rawNormalizedValue.toLowerCase();

  if (typeof condition === 'string') {
    const regex = parseRegexCondition(condition);
    if (regex) return regex.test(rawNormalizedValue);

    const normalizedCondition = condition.trim();
    if (!normalizedCondition) return false;

    const exactMatch = normalizedCondition.match(/^exact:(.+)$/i);
    if (exactMatch) {
      return normalizedValue === exactMatch[1].trim().toLowerCase();
    }

    const containsMatch = normalizedCondition.match(/^(?:contains|substring):(.+)$/i);
    if (containsMatch) {
      return normalizedValue.includes(containsMatch[1].trim().toLowerCase());
    }

    return normalizedValue.includes(normalizedCondition.toLowerCase());
  }

  if (condition && typeof condition === 'object' && !Array.isArray(condition)) {
    if (typeof condition.exact === 'string') {
      return normalizedValue === condition.exact.trim().toLowerCase();
    }
    if (typeof condition.substring === 'string') {
      return normalizedValue.includes(condition.substring.trim().toLowerCase());
    }
    if (typeof condition.contains === 'string') {
      return normalizedValue.includes(condition.contains.trim().toLowerCase());
    }
    if (typeof condition.regex === 'string') {
      const regex = parseRegexCondition(`regex:${condition.regex}`);
      return !!regex && regex.test(rawNormalizedValue);
    }
  }

  return false;
};

const eventFieldMatches = (event, field, condition, helpers) => {
  const fieldName = String(field || '').trim().toLowerCase();
  if (!fieldName) return false;

  if (fieldName === 'all_day') {
    const { isAllDay } = helpers.getEventDateTimeInfo(event);
    return matchPrimitiveCondition(isAllDay, condition);
  }

  if (fieldName === 'past') {
    return matchPrimitiveCondition(helpers.isPastEvent(event), condition);
  }

  if (fieldName === 'calendar') {
    return helpers.getEventCalendarMatchTokens(event).some((token) => matchTextCondition(token, condition, helpers));
  }

  const valueByField = {
    title: event.summary,
    summary: event.summary,
    location: event.location,
    description: event.description
  };
  return matchTextCondition(valueByField[fieldName], condition, helpers);
};

const eventMatchesNormalizedRule = (event, match, helpers) => {
  if (!event || !match || typeof match !== 'object') return false;

  const logicalKeys = new Set(['any', 'all', 'and', 'not']);
  const fieldKeys = Object.keys(match).filter((key) => !logicalKeys.has(key));
  const fieldsPass = fieldKeys.every((field) => eventFieldMatches(event, field, match[field], helpers));

  if (!fieldsPass) return false;

  const allConditions = Array.isArray(match.all) ? match.all : [];
  if (!allConditions.every((condition) => eventMatchesNormalizedRule(event, condition, helpers))) return false;

  const andConditions = Array.isArray(match.and) ? match.and : [];
  if (!andConditions.every((condition) => eventMatchesNormalizedRule(event, condition, helpers))) return false;

  if (Object.prototype.hasOwnProperty.call(match, 'any')) {
    const anyConditions = Array.isArray(match.any) ? match.any : [];
    if (anyConditions.length && !anyConditions.some((condition) => eventMatchesNormalizedRule(event, condition, helpers))) return false;
  }

  if (Object.prototype.hasOwnProperty.call(match, 'not')) {
    const notCondition = match.not;
    if (Array.isArray(notCondition)) {
      if (notCondition.some((condition) => eventMatchesNormalizedRule(event, condition, helpers))) return false;
    } else if (notCondition && eventMatchesNormalizedRule(event, notCondition, helpers)) {
      return false;
    }
  }

  return true;
};

const findMatchingEventForCondition = (condition, dayEvents = [], helpers) => {
  if (!Array.isArray(dayEvents) || !dayEvents.length) return null;
  if (condition === true) return dayEvents[0] || null;
  if (condition === false) return null;
  return dayEvents.find((event) => eventMatchesNormalizedRule(event, condition, helpers)) || null;
};

const dateMatchesDayCondition = (date, conditionName, conditionValue, context = {}) => {
  if (conditionValue === false) return false;
  const dayStart = new Date(date);
  dayStart.setHours(0, 0, 0, 0);
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);

  if (conditionName === 'today') return matchPrimitiveCondition(!!context.isToday, conditionValue);
  if (conditionName === 'past') return matchPrimitiveCondition(dayStart.getTime() < todayStart.getTime(), conditionValue);
  if (conditionName === 'future') return matchPrimitiveCondition(dayStart.getTime() > todayStart.getTime(), conditionValue);
  if (conditionName === 'weekend') return matchPrimitiveCondition(dayStart.getDay() === 0 || dayStart.getDay() === 6, conditionValue);
  if (conditionName === 'weekday') return matchPrimitiveCondition(dayStart.getDay() !== 0 && dayStart.getDay() !== 6, conditionValue);
  if (conditionName === 'day_of_week') return Array.isArray(conditionValue) && conditionValue.includes(dayStart.getDay());
  return false;
};

const dayMatchesNormalizedRule = (dayMatch, context = {}, helpers) => {
  if (!dayMatch || typeof dayMatch !== 'object') return { matches: true, matchedEvent: null };

  let matchedEvent = null;
  const logicalKeys = new Set(['any', 'all', 'and', 'not']);
  const fieldKeys = Object.keys(dayMatch).filter((key) => !logicalKeys.has(key));

  for (const field of fieldKeys) {
    const condition = dayMatch[field];
    if (field === 'has_event') {
      const event = findMatchingEventForCondition(condition, context.dayEvents || [], helpers);
      if (!event) return { matches: false, matchedEvent: null };
      if (!matchedEvent) matchedEvent = event;
      continue;
    }
    if (field === 'no_event') {
      const event = findMatchingEventForCondition(condition, context.dayEvents || [], helpers);
      if (event) return { matches: false, matchedEvent: null };
      continue;
    }
    if (!dateMatchesDayCondition(context.date, field, condition, context)) {
      return { matches: false, matchedEvent: null };
    }
  }

  const allConditions = Array.isArray(dayMatch.all) ? dayMatch.all : [];
  for (const condition of allConditions) {
    const result = dayMatchesNormalizedRule(condition, context, helpers);
    if (!result.matches) return { matches: false, matchedEvent: null };
    if (!matchedEvent && result.matchedEvent) matchedEvent = result.matchedEvent;
  }

  const andConditions = Array.isArray(dayMatch.and) ? dayMatch.and : [];
  for (const condition of andConditions) {
    const result = dayMatchesNormalizedRule(condition, context, helpers);
    if (!result.matches) return { matches: false, matchedEvent: null };
    if (!matchedEvent && result.matchedEvent) matchedEvent = result.matchedEvent;
  }

  if (Object.prototype.hasOwnProperty.call(dayMatch, 'any')) {
    const anyConditions = Array.isArray(dayMatch.any) ? dayMatch.any : [];
    if (!anyConditions.length) return { matches: true, matchedEvent };
    let anyMatched = false;
    for (const condition of anyConditions) {
      const result = dayMatchesNormalizedRule(condition, context, helpers);
      if (result.matches) {
        anyMatched = true;
        if (!matchedEvent && result.matchedEvent) matchedEvent = result.matchedEvent;
        break;
      }
    }
    if (!anyMatched) return { matches: false, matchedEvent: null };
  }

  if (Object.prototype.hasOwnProperty.call(dayMatch, 'not')) {
    const notCondition = dayMatch.not;
    if (Array.isArray(notCondition)) {
      for (const condition of notCondition) {
        if (dayMatchesNormalizedRule(condition, context, helpers).matches) return { matches: false, matchedEvent: null };
      }
    } else if (notCondition && dayMatchesNormalizedRule(notCondition, context, helpers).matches) {
      return { matches: false, matchedEvent: null };
    }
  }

  return { matches: true, matchedEvent };
};

const matchesAdvancedRule = (ruleOrMatch, context = {}, helpers) => {
  const match = ruleOrMatch?.match || ruleOrMatch;
  if (!match || typeof match !== 'object') return { matches: false, matchedEvent: null };

  let matchedEvent = null;
  const eventMatch = match.event && Object.keys(match.event).length ? match.event : null;
  if (eventMatch) {
    if (context.event) {
      if (!eventMatchesNormalizedRule(context.event, eventMatch, helpers)) return { matches: false, matchedEvent: null };
      matchedEvent = context.event;
    } else {
      const event = findMatchingEventForCondition(eventMatch, context.dayEvents || [], helpers);
      if (!event) return { matches: false, matchedEvent: null };
      matchedEvent = event;
    }
  }

  const dayMatch = match.day && Object.keys(match.day).length ? match.day : null;
  if (dayMatch) {
    const dayResult = dayMatchesNormalizedRule(dayMatch, context, helpers);
    if (!dayResult.matches) return { matches: false, matchedEvent: null };
    if (!matchedEvent && dayResult.matchedEvent) matchedEvent = dayResult.matchedEvent;
  }

  const allConditions = Array.isArray(match.all) ? match.all : [];
  for (const condition of allConditions) {
    const result = matchesAdvancedRule(condition, context, helpers);
    if (!result.matches) return { matches: false, matchedEvent: null };
    if (!matchedEvent && result.matchedEvent) matchedEvent = result.matchedEvent;
  }

  const anyConditions = Array.isArray(match.any) ? match.any : [];
  if (anyConditions.length) {
    let anyMatched = false;
    for (const condition of anyConditions) {
      const result = matchesAdvancedRule(condition, context, helpers);
      if (result.matches) {
        anyMatched = true;
        if (!matchedEvent && result.matchedEvent) matchedEvent = result.matchedEvent;
        break;
      }
    }
    if (!anyMatched) return { matches: false, matchedEvent: null };
  }

  if (Object.prototype.hasOwnProperty.call(match, 'not')) {
    const notCondition = match.not;
    if (Array.isArray(notCondition)) {
      for (const condition of notCondition) {
        if (matchesAdvancedRule(condition, context, helpers).matches) return { matches: false, matchedEvent: null };
      }
    } else if (notCondition && matchesAdvancedRule(notCondition, context, helpers).matches) {
      return { matches: false, matchedEvent: null };
    }
  }

  return { matches: true, matchedEvent };
};

const getEmptyAdvancedMatch = () => ({ event: {}, day: {}, any: [], all: [], not: null });

const normalizeEventMatchConditions = (rawMatch) => {
  if (!rawMatch || typeof rawMatch !== 'object' || Array.isArray(rawMatch)) return null;

  const normalized = {};
  const logicalKeys = new Set(['all', 'and', 'any', 'not']);
  const eventAliases = {
    title_contains: 'title',
    summary_contains: 'summary',
    location_contains: 'location',
    description_contains: 'description'
  };
  const calendarAliases = new Set(['calendar_entity', 'entity_id', 'entity']);

  Object.entries(rawMatch).forEach(([key, value]) => {
    const normalizedKey = String(key || '').trim().toLowerCase();
    if (!normalizedKey) return;

    if (logicalKeys.has(normalizedKey)) {
      if (normalizedKey === 'all' || normalizedKey === 'and') {
        const conditions = Array.isArray(value) ? value : [value];
        const normalizedConditions = conditions
          .map((condition) => normalizeEventMatchConditions(condition))
          .filter(Boolean);
        if (normalizedConditions.length) {
          if (!Array.isArray(normalized.all)) normalized.all = [];
          normalized.all.push(...normalizedConditions);
        }
        return;
      }

      if (normalizedKey === 'any') {
        const conditions = Array.isArray(value) ? value : [value];
        const normalizedConditions = conditions
          .map((condition) => normalizeEventMatchConditions(condition))
          .filter(Boolean);
        if (normalizedConditions.length) normalized.any = normalizedConditions;
        return;
      }

      if (normalizedKey === 'not') {
        if (Array.isArray(value)) {
          const normalizedConditions = value
            .map((condition) => normalizeEventMatchConditions(condition))
            .filter(Boolean);
          if (normalizedConditions.length) normalized.not = normalizedConditions;
        } else {
          const normalizedCondition = normalizeEventMatchConditions(value);
          if (normalizedCondition) normalized.not = normalizedCondition;
        }
        return;
      }
    }

    if (eventAliases[normalizedKey]) {
      const canonicalKey = eventAliases[normalizedKey];
      if (normalized[canonicalKey] === undefined) normalized[canonicalKey] = `contains:${value}`;
      return;
    }

    if (calendarAliases.has(normalizedKey)) {
      if (normalized.calendar === undefined) normalized.calendar = value;
      return;
    }

    if (normalizedKey === 'all_day_event') {
      if (normalized.all_day === undefined) normalized.all_day = value;
      return;
    }

    if (['title', 'summary', 'location', 'description', 'calendar', 'all_day', 'past'].includes(normalizedKey)) {
      normalized[normalizedKey] = value;
    }
  });

  return Object.keys(normalized).length ? normalized : null;
};

const normalizeDayMatchConditions = (rawMatch, { normalizeDayOfWeekRule, localeOverride = null } = {}) => {
  if (!rawMatch || typeof rawMatch !== 'object' || Array.isArray(rawMatch)) return null;

  const normalized = {};
  const logicalKeys = new Set(['all', 'and', 'any', 'not']);

  Object.entries(rawMatch).forEach(([key, value]) => {
    const normalizedKey = String(key || '').trim().toLowerCase();
    if (!normalizedKey) return;

    if (logicalKeys.has(normalizedKey)) {
      if (normalizedKey === 'all' || normalizedKey === 'and') {
        const conditions = Array.isArray(value) ? value : [value];
        const normalizedConditions = conditions
          .map((condition) => normalizeDayMatchConditions(condition, { normalizeDayOfWeekRule, localeOverride }))
          .filter(Boolean);
        if (normalizedConditions.length) {
          if (!Array.isArray(normalized.all)) normalized.all = [];
          normalized.all.push(...normalizedConditions);
        }
        return;
      }

      if (normalizedKey === 'any') {
        const conditions = Array.isArray(value) ? value : [value];
        const normalizedConditions = conditions
          .map((condition) => normalizeDayMatchConditions(condition, { normalizeDayOfWeekRule, localeOverride }))
          .filter(Boolean);
        if (normalizedConditions.length) normalized.any = normalizedConditions;
        return;
      }

      if (normalizedKey === 'not') {
        if (Array.isArray(value)) {
          const normalizedConditions = value
            .map((condition) => normalizeDayMatchConditions(condition, { normalizeDayOfWeekRule, localeOverride }))
            .filter(Boolean);
          if (normalizedConditions.length) normalized.not = normalizedConditions;
        } else {
          const normalizedCondition = normalizeDayMatchConditions(value, { normalizeDayOfWeekRule, localeOverride });
          if (normalizedCondition) normalized.not = normalizedCondition;
        }
        return;
      }
    }

    if (['today', 'past', 'future', 'weekend', 'weekday'].includes(normalizedKey)) {
      normalized[normalizedKey] = value;
      return;
    }

    if (normalizedKey === 'day_of_week') {
      const dayOfWeek = normalizeDayOfWeekRule(value, localeOverride);
      if (dayOfWeek.length) normalized.day_of_week = dayOfWeek;
      return;
    }

    if (normalizedKey === 'has_event' || normalizedKey === 'no_event') {
      if (value === true || value === false) {
        normalized[normalizedKey] = value;
      } else {
        const eventMatch = normalizeEventMatchConditions(value);
        if (eventMatch) normalized[normalizedKey] = eventMatch;
      }
    }
  });

  return Object.keys(normalized).length ? normalized : null;
};

const normalizeAdvancedRuleMatch = (rawMatch, { defaultScope = 'event', localeOverride = null, normalizeDayOfWeekRule } = {}) => {
  if (!rawMatch || typeof rawMatch !== 'object' || Array.isArray(rawMatch)) return null;

  const match = getEmptyAdvancedMatch();
  const logicalKeys = new Set(['all', 'and', 'any', 'not']);
  const explicitKeys = new Set(['event', 'day', ...logicalKeys]);
  let hasMatch = false;

  if (rawMatch.event && typeof rawMatch.event === 'object' && !Array.isArray(rawMatch.event)) {
    const eventMatch = normalizeEventMatchConditions(rawMatch.event);
    if (eventMatch) {
      match.event = eventMatch;
      hasMatch = true;
    }
  }

  if (rawMatch.day && typeof rawMatch.day === 'object' && !Array.isArray(rawMatch.day)) {
    const dayMatch = normalizeDayMatchConditions(rawMatch.day, { normalizeDayOfWeekRule, localeOverride });
    if (dayMatch) {
      match.day = dayMatch;
      hasMatch = true;
    }
  }

  const implicitRaw = Object.fromEntries(Object.entries(rawMatch).filter(([key]) => !explicitKeys.has(String(key || '').trim().toLowerCase())));
  if (Object.keys(implicitRaw).length) {
    if (defaultScope === 'day') {
      const dayMatch = normalizeDayMatchConditions(implicitRaw, { normalizeDayOfWeekRule, localeOverride });
      if (dayMatch) {
        match.day = { ...match.day, ...dayMatch };
        hasMatch = true;
      }
    } else {
      const eventMatch = normalizeEventMatchConditions(implicitRaw);
      if (eventMatch) {
        match.event = { ...match.event, ...eventMatch };
        hasMatch = true;
      }
    }
  }

  ['all', 'and'].forEach((key) => {
    if (rawMatch[key] === undefined) return;
    const conditions = Array.isArray(rawMatch[key]) ? rawMatch[key] : [rawMatch[key]];
    const normalizedConditions = conditions
      .map((condition) => normalizeAdvancedRuleMatch(condition, { defaultScope, localeOverride, normalizeDayOfWeekRule }))
      .filter(Boolean);
    if (normalizedConditions.length) {
      match.all.push(...normalizedConditions);
      hasMatch = true;
    }
  });

  if (rawMatch.any !== undefined) {
    const conditions = Array.isArray(rawMatch.any) ? rawMatch.any : [rawMatch.any];
    const normalizedConditions = conditions
      .map((condition) => normalizeAdvancedRuleMatch(condition, { defaultScope, localeOverride, normalizeDayOfWeekRule }))
      .filter(Boolean);
    if (normalizedConditions.length) {
      match.any = normalizedConditions;
      hasMatch = true;
    }
  }

  if (rawMatch.not !== undefined) {
    if (Array.isArray(rawMatch.not)) {
      const normalizedConditions = rawMatch.not
        .map((condition) => normalizeAdvancedRuleMatch(condition, { defaultScope, localeOverride, normalizeDayOfWeekRule }))
        .filter(Boolean);
      if (normalizedConditions.length) {
        match.not = normalizedConditions;
        hasMatch = true;
      }
    } else {
      const normalizedCondition = normalizeAdvancedRuleMatch(rawMatch.not, { defaultScope, localeOverride, normalizeDayOfWeekRule });
      if (normalizedCondition) {
        match.not = normalizedCondition;
        hasMatch = true;
      }
    }
  }

  return hasMatch ? match : null;
};

const normalizeLegacyDayStyleMatch = (rule, { localeOverride = null, normalizeDayOfWeekRule, normalizeAdvancedRuleMatch }) => {
  const rawCondition = String(rule.condition || '').trim().toLowerCase();
  if (!rawCondition) return null;

  const isNegatedCondition = rawCondition.startsWith('!');
  const condition = isNegatedCondition ? rawCondition.slice(1) : rawCondition;
  if (!condition) return null;

  if (!['today', 'past', 'future', 'weekend', 'weekday', 'day_of_week', 'has_event'].includes(condition)) return null;
  if (isNegatedCondition && condition !== 'has_event') return null;

  const dayMatch = {};
  if (condition === 'has_event') {
    const eventMatch = {};
    if (rule.calendar !== undefined && rule.calendar !== null && String(rule.calendar).trim()) {
      eventMatch.calendar = rule.calendar;
    }
    if (rule.title_match !== undefined && rule.title_match !== null && rule.title_match !== '') {
      eventMatch.title = rule.title_match;
    }
    if (!Object.keys(eventMatch).length) return null;
    dayMatch[isNegatedCondition ? 'no_event' : 'has_event'] = eventMatch;
  } else if (condition === 'day_of_week') {
    const dayOfWeek = normalizeDayOfWeekRule(rule.day_of_week ?? rule.day ?? rule.days, localeOverride);
    if (!dayOfWeek.length) return null;
    dayMatch.day_of_week = dayOfWeek;
  } else {
    dayMatch[condition] = true;
  }

  return normalizeAdvancedRuleMatch({ day: dayMatch }, 'day', localeOverride);
};

function isWeatherEntityId(entityId) {
  return !!entityId && entityId.startsWith('weather.');
}

function buildWeatherForecastSubscriptionMessage(entityId, forecastType = 'daily') {
  return {
    type: 'weather/subscribe_forecast',
    entity_id: entityId,
    forecast_type: forecastType
  };
}

function buildWeatherForecastRequestMessage(entityId, forecastType = 'daily') {
  return {
    type: 'weather/get_forecasts',
    entity_ids: [entityId],
    forecast_type: forecastType
  };
}

const DEFAULT_RETRY_DELAY_MS = 5 * 60 * 1000;

class WeatherForecastController {
  constructor({
    getHass,
    getWeatherEntityId,
    onForecastUpdated = () => {},
    now = () => Date.now(),
    requestForecast = null,
    subscribeForecast = null,
    retryDelayMs = DEFAULT_RETRY_DELAY_MS
  } = {}) {
    this.getHass = getHass || (() => null);
    this.getWeatherEntityId = getWeatherEntityId || (() => null);
    this.onForecastUpdated = onForecastUpdated;
    this.now = now;
    this.requestForecast = requestForecast;
    this.subscribeForecast = subscribeForecast;
    this.retryDelayMs = retryDelayMs;

    this.forecastByEntity = new Map();
    this.subscriptionEntityId = null;
    this.unsubscribe = null;
    this.subscriptionInFlight = null;
    this.subscriptionInFlightEntityId = null;
    this.subscriptionGeneration = 0;
    this.refreshInFlight = false;
    this.refreshRetryAtByEntity = new Map();
  }

  getActiveWeatherEntityId() {
    const entityId = this.getWeatherEntityId();
    return isWeatherEntityId(entityId) ? entityId : null;
  }

  handleConfigChanged(previousEntityId, nextEntityId) {
    if (previousEntityId !== nextEntityId) {
      this.teardownSubscription();
      this.clearForecasts();
      this.clearRetryTimes();
    }
  }

  clearForecasts() {
    this.forecastByEntity.clear();
  }

  clearRetryTimes() {
    this.refreshRetryAtByEntity.clear();
  }

  getForecastForEntity(entityId) {
    return this.forecastByEntity.get(entityId);
  }

  getRenderSignature(entityId) {
    const forecast = this.getForecastForEntity(entityId);
    return JSON.stringify(Array.isArray(forecast) ? forecast : null);
  }

  teardownSubscription() {
    this.subscriptionGeneration += 1;
    if (typeof this.unsubscribe === 'function') {
      this.unsubscribe();
    }
    this.unsubscribe = null;
    this.subscriptionEntityId = null;
    this.subscriptionInFlight = null;
    this.subscriptionInFlightEntityId = null;
  }

  async ensureSubscription() {
    const entityId = this.getActiveWeatherEntityId();
    if (!entityId) {
      this.teardownSubscription();
      return undefined;
    }

    const hass = this.getHass();
    const subscribeForecast = this.subscribeForecast || hass?.connection?.subscribeMessage?.bind(hass.connection);
    if (typeof subscribeForecast !== 'function') {
      return undefined;
    }

    if (this.subscriptionEntityId === entityId && this.unsubscribe) {
      return undefined;
    }

    if (this.subscriptionInFlight && this.subscriptionInFlightEntityId === entityId) {
      return this.subscriptionInFlight;
    }

    this.teardownSubscription();
    const subscriptionGeneration = this.subscriptionGeneration;
    this.subscriptionInFlightEntityId = entityId;

    const setupPromise = subscribeForecast(
      (message) => {
        const nextForecast = Array.isArray(message?.forecast) ? message.forecast : [];
        this.forecastByEntity.set(entityId, nextForecast);
        this.onForecastUpdated(entityId, nextForecast, { source: 'subscription' });
      },
      buildWeatherForecastSubscriptionMessage(entityId)
    )
      .then((unsubscribe) => {
        const generationMatches = subscriptionGeneration === this.subscriptionGeneration;
        const entityMatches = entityId === this.subscriptionInFlightEntityId;
        if (!generationMatches || !entityMatches) {
          if (typeof unsubscribe === 'function') {
            unsubscribe();
          }
          return;
        }

        this.unsubscribe = unsubscribe;
        this.subscriptionEntityId = entityId;
      })
      .catch(() => {
        if (subscriptionGeneration === this.subscriptionGeneration) {
          this.unsubscribe = null;
          this.subscriptionEntityId = null;
        }
      })
      .finally(() => {
        if (subscriptionGeneration === this.subscriptionGeneration) {
          this.subscriptionInFlight = null;
          this.subscriptionInFlightEntityId = null;
        }
      });

    this.subscriptionInFlight = setupPromise;
    return setupPromise;
  }

  async refreshForecastData() {
    const entityId = this.getActiveWeatherEntityId();
    if (!entityId) return undefined;
    const hass = this.getHass();
    if (!hass || this.refreshInFlight) return undefined;
    if (this.forecastByEntity.has(entityId)) return undefined;
    const now = this.now();
    const retryAt = this.refreshRetryAtByEntity.get(entityId) || 0;
    if (retryAt > now) return undefined;

    const requestForecast = this.requestForecast || ((message) => hass.callWS(message));
    if (typeof requestForecast !== 'function') return undefined;

    this.refreshInFlight = true;
    try {
      const wsResponse = await requestForecast(buildWeatherForecastRequestMessage(entityId));
      const dailyForecast = wsResponse?.[entityId]?.forecast;
      if (Array.isArray(dailyForecast)) {
        this.forecastByEntity.set(entityId, dailyForecast);
        this.refreshRetryAtByEntity.delete(entityId);
        this.onForecastUpdated(entityId, dailyForecast, { source: 'refresh' });
      }
    } catch (error) {
      this.refreshRetryAtByEntity.set(entityId, now + this.retryDelayMs);
    } finally {
      this.refreshInFlight = false;
    }
    return undefined;
  }
}

function createWeatherForecastController(dependencies) {
  return new WeatherForecastController(dependencies);
}

const resolveTimedEventRange = (startValue, endValue, fallbackDurationMs = 60 * 60 * 1000) => {
  const start = parsePossiblyLocalDateTime(startValue);
  if (!(start instanceof Date) || Number.isNaN(start.getTime())) {
    return { start: null, end: null };
  }

  const parsedEnd = endValue ? parsePossiblyLocalDateTime(endValue) : null;
  if (parsedEnd instanceof Date && !Number.isNaN(parsedEnd.getTime())) {
    return { start, end: parsedEnd };
  }

  return {
    start,
    end: new Date(start.getTime() + fallbackDurationMs)
  };
};

const buildRRuleFromInputs = ({ frequency, interval, untilDate, count, byDay }) => {
  const parts = [`FREQ=${frequency}`];
  const parsedInterval = parseInt(interval, 10);

  if (!Number.isNaN(parsedInterval) && parsedInterval > 1) {
    parts.push(`INTERVAL=${parsedInterval}`);
  }

  if (Array.isArray(byDay) && byDay.length > 0) {
    parts.push(`BYDAY=${byDay.join(',')}`);
  }

  const parsedCount = parseInt(count, 10);
  if (!Number.isNaN(parsedCount) && parsedCount > 0) {
    parts.push(`COUNT=${parsedCount}`);
  } else if (untilDate) {
    const until = new Date(`${untilDate}T23:59:59`);
    if (!Number.isNaN(until.getTime())) {
      const compactUntil = until.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
      parts.push(`UNTIL=${compactUntil}`);
    }
  }

  return parts.join(';');
};

const normalizeEventFormData = ({
  title,
  location,
  description,
  isAllDay,
  startDate,
  endDate,
  startDateTime,
  endDateTime,
  fallbackDurationMs = 60 * 60 * 1000,
  recurrence = null
}) => {
  if (!title) {
    return { valid: false, errorKey: 'eventTitleRequired' };
  }

  const eventData = {
    summary: title,
    location: location || undefined,
    description: description || undefined
  };

  if (isAllDay) {
    if (!startDate || !endDate) {
      return { valid: false, errorKey: 'startEndDatesRequired' };
    }

    const start = parseLocalDate(startDate);
    const end = parseLocalDate(endDate);

    if (end < start) {
      return { valid: false, errorKey: 'endDateBeforeStart' };
    }

    const exclusiveEndDate = new Date(end);
    exclusiveEndDate.setDate(exclusiveEndDate.getDate() + 1);
    const exclusiveEndDateStr = formatLocalDate(exclusiveEndDate);

    eventData.start = { date: startDate };
    eventData.end = { date: exclusiveEndDateStr };
  } else {
    if (!startDateTime) {
      return { valid: false, errorKey: 'startEndTimesRequired' };
    }

    const { start, end } = resolveTimedEventRange(startDateTime, endDateTime, fallbackDurationMs);

    if (end <= start) {
      return { valid: false, errorKey: 'endTimeBeforeStart' };
    }

    eventData.start = { dateTime: start.toISOString() };
    eventData.end = { dateTime: end.toISOString() };
  }

  if (recurrence?.enabled) {
    if (recurrence.frequency === 'WEEKLY' && (!Array.isArray(recurrence.byDay) || recurrence.byDay.length === 0)) {
      return { valid: false, errorKey: 'recurrenceSelectWeekday' };
    }

    eventData.rrule = buildRRuleFromInputs({
      frequency: recurrence.frequency,
      interval: recurrence.interval,
      untilDate: recurrence.untilDate,
      count: recurrence.count,
      byDay: recurrence.frequency === 'WEEKLY' ? recurrence.byDay : []
    });
  }

  return { valid: true, eventData };
};

const buildEventServiceData = (calendarId, eventData) => {
  const baseData = {
    entity_id: calendarId,
    summary: eventData.summary
  };

  if (eventData.location) {
    baseData.location = eventData.location;
  }

  if (eventData.description) {
    baseData.description = eventData.description;
  }

  if (eventData.start.date) {
    baseData.start_date = eventData.start.date;
    baseData.end_date = eventData.end.date;
  } else {
    baseData.start_date_time = eventData.start.dateTime;
    baseData.end_date_time = eventData.end.dateTime;
  }

  if (eventData.rrule) {
    baseData.rrule = eventData.rrule;
  }

  return baseData;
};

const buildCreateEventWebSocketPayload = (calendarId, eventData) => ({
  type: 'calendar/event/create',
  entity_id: calendarId,
  event: {
    summary: eventData.summary,
    location: eventData.location,
    description: eventData.description,
    rrule: eventData.rrule,
    dtstart: eventData.start.dateTime || eventData.start.date,
    dtend: eventData.end.dateTime || eventData.end.date
  }
});

const getRecurringUpdateControls = (originalEvent, eventData, editScope = 'this') => {
  const isRecurringUpdate = !!eventData.rrule || !!originalEvent.rrule;
  return {
    isRecurringUpdate,
    recurrenceId: (isRecurringUpdate && editScope !== 'all') ? originalEvent.recurrence_id : null,
    recurrenceRange: (isRecurringUpdate && editScope === 'future' && originalEvent.recurrence_id) ? 'THISANDFUTURE' : null
  };
};

const buildUpdateEventServiceData = (originalEvent, eventData, recurrenceId = null, recurrenceRange = null) => {
  const serviceData = {
    ...buildEventServiceData(originalEvent.entityId, eventData),
    uid: originalEvent.uid
  };

  if (recurrenceId) {
    serviceData.recurrence_id = recurrenceId;
  }

  if (recurrenceRange) {
    serviceData.recurrence_range = recurrenceRange;
  }

  return serviceData;
};

const buildUpdateEventWebSocketPayload = (originalEvent, eventData, recurrenceId = null, recurrenceRange = null) => {
  const dtstart = eventData.start.dateTime || eventData.start.date;
  const dtend = eventData.end.dateTime || eventData.end.date;

  const eventPayload = {
    summary: eventData.summary,
    dtstart,
    dtend
  };

  if (eventData.location) {
    eventPayload.location = eventData.location;
  }

  if (eventData.description) {
    eventPayload.description = eventData.description;
  }

  if (eventData.rrule) {
    eventPayload.rrule = eventData.rrule;
  }

  const wsPayload = {
    type: 'calendar/event/update',
    entity_id: originalEvent.entityId,
    uid: originalEvent.uid,
    event: eventPayload
  };

  if (recurrenceId) {
    wsPayload.recurrence_id = recurrenceId;
  }

  if (recurrenceRange) {
    wsPayload.recurrence_range = recurrenceRange;
  }

  return wsPayload;
};

const buildDeleteEventPayload = (calendarId, uid, recurrenceId = null, recurrenceRange = null) => {
  const payload = {
    entity_id: calendarId,
    uid: uid
  };

  if (recurrenceId) {
    payload.recurrence_id = recurrenceId;
  }

  if (recurrenceRange) {
    payload.recurrence_range = recurrenceRange;
  }

  return payload;
};

const buildDeleteEventWebSocketPayload = (calendarId, uid, recurrenceId = null, recurrenceRange = null) => ({
  type: 'calendar/event/delete',
  ...buildDeleteEventPayload(calendarId, uid, recurrenceId, recurrenceRange)
});

function getVisibleCalendarBadgesForEvent(event, { hiddenCalendars = new Set(), getVirtualBadgeForEvent, normalizeSingleColor, configColors = {} } = {}) {
  const virtualCalendar = getVirtualBadgeForEvent?.(event);
  if (virtualCalendar) {
    const visibleSourceEntityIds = virtualCalendar.entities.filter((entityId) => !hiddenCalendars.has(entityId));
    if (visibleSourceEntityIds.length === 0) return [];
    const fallbackColor = event?.color || normalizeSingleColor?.(configColors[virtualCalendar.entities[0]]);
    return [{ entityId: `virtual:${virtualCalendar.id}`, color: virtualCalendar.color || fallbackColor }];
  }

  if (event?.isCombinedCalendarEvent && Array.isArray(event.sourceCalendars)) {
    return event.sourceCalendars.filter(calendar => !hiddenCalendars.has(calendar.entityId));
  }

  return [{ entityId: event.entityId, color: event.color }];
}

function isCombinedEventWithinSingleVirtualCalendar(event, { hiddenCalendars = new Set(), getVirtualBadgeForEntity } = {}) {
  if (!event?.isCombinedCalendarEvent || !Array.isArray(event?.sourceEvents)) return false;

  const visibleSources = event.sourceEvents.filter((sourceEvent) => !hiddenCalendars.has(sourceEvent.entityId));
  if (visibleSources.length <= 1) return false;

  const virtualIds = new Set();
  for (const sourceEvent of visibleSources) {
    const virtualCalendar = getVirtualBadgeForEntity?.(sourceEvent.entityId);
    if (!virtualCalendar) return false;
    virtualIds.add(virtualCalendar.id);
    if (virtualIds.size > 1) return false;
  }

  return virtualIds.size === 1;
}

function shouldShowCombinedCornerBubbles(event, { combineCalendars = false, isSingleVirtualCalendar = false, styleOverrides = null } = {}) {
  if (!event?.isCombinedCalendarEvent || !combineCalendars) return false;
  if (isSingleVirtualCalendar) return false;
  return !!styleOverrides?.hasDuplicateBackgroundColors;
}

function getModalCalendarBadgesForEvent(event, { hiddenCalendars = new Set(), getVisibleCalendarBadges } = {}) {
  if (event?.isCombinedCalendarEvent && Array.isArray(event.sourceCalendars)) {
    const sourceBadges = event.sourceCalendars
      .filter((calendar) => calendar?.entityId && !hiddenCalendars.has(calendar.entityId))
      .map((calendar) => ({ entityId: calendar.entityId, color: calendar.color || event.color }));
    if (sourceBadges.length > 0) {
      return sourceBadges;
    }
  }

  return getVisibleCalendarBadges?.(event) || [];
}

function getEventFontSizeDisplayValue(configuredSize, fallbackPx = 11) {
  if (configuredSize === undefined || configuredSize === null || configuredSize === '') {
    return `${fallbackPx}px`;
  }

  if (typeof configuredSize === 'number' && Number.isFinite(configuredSize)) {
    return `${configuredSize}px`;
  }

  const normalized = String(configuredSize).trim();
  if (!normalized) return `${fallbackPx}px`;
  return /^\d+(\.\d+)?$/.test(normalized) ? `${normalized}px` : normalized;
}

function shouldShowEventLocation(event, { styleOverrides = null, showEventLocation = false } = {}) {
  const showLocation = styleOverrides?.show_event_location ?? showEventLocation;
  return !!(showLocation && event?.location);
}

function getDisplayLocation(location, { styleOverrides = null, useShortLocation = false } = {}) {
  const normalizedLocation = normalizeEventTextValue(location);
  if (!normalizedLocation) return '';
  const shouldShorten = styleOverrides?.use_short_location ?? useShortLocation;
  if (!shouldShorten) return normalizedLocation;

  const numberMatch = normalizedLocation.match(/\b\d+[A-Za-z0-9-]*\b/);
  if (!numberMatch) {
    return normalizedLocation;
  }

  const numberIndex = numberMatch.index ?? -1;
  const hasPrefix = numberIndex > 0;
  if (hasPrefix) {
    const prefix = normalizedLocation
      .slice(0, numberIndex)
      .replace(/[\s,;:\/\\|-]+$/g, '')
      .trim();
    if (prefix) {
      return prefix;
    }
    return normalizedLocation;
  }

  const commonStreetEndingPattern = /\b(street|st\.?|road|rd\.?|avenue|ave\.?|boulevard|blvd\.?|drive|dr\.?|lane|ln\.?|court|ct\.?|circle|cir\.?|place|pl\.?|parkway|pkwy\.?|way|terrace|ter\.?|highway|hwy\.?)\b/i;
  const firstSegmentEnd = normalizedLocation.search(/[,;]/);
  const streetSegment = firstSegmentEnd >= 0
    ? normalizedLocation.slice(0, firstSegmentEnd)
    : normalizedLocation;
  const endingMatch = streetSegment.match(commonStreetEndingPattern);
  if (!endingMatch) {
    return normalizedLocation;
  }

  const endingStart = endingMatch.index ?? -1;
  if (endingStart < 0) {
    return normalizedLocation;
  }

  const endingText = endingMatch[0] || '';
  const shortened = streetSegment
    .slice(0, endingStart + endingText.length)
    .replace(/[,\s;:\/\\|-]+$/g, '')
    .trim();

  return shortened || normalizedLocation;
}

function shouldShowEventTime(event, { styleOverrides = null, hiddenCalendars = new Set(), hideTimesForCalendars = [] } = {}) {
  if (!event) return true;
  if (styleOverrides?.hide_time === true) return false;
  if (styleOverrides?.show_time === true) return true;

  const visibleEntityIds = event.isCombinedCalendarEvent && Array.isArray(event.sourceEntityIds)
    ? event.sourceEntityIds.filter(entityId => !hiddenCalendars.has(entityId))
    : [event.entityId];

  if (visibleEntityIds.length === 0) {
    return false;
  }

  return visibleEntityIds.some(entityId => !hideTimesForCalendars.includes(entityId));
}

function getEventBubbleFontColor(event, { styleOverrides = null, hiddenCalendars = new Set(), eventFontColors = {}, normalizeSingleColor, getEventBackgroundColor, getContrastColor } = {}) {
  if (!event) return 'white';
  if (styleOverrides?.event_font_color) {
    return styleOverrides.event_font_color;
  }

  const visibleEntityIds = event.isCombinedCalendarEvent && Array.isArray(event.sourceEntityIds)
    ? event.sourceEntityIds.filter(entityId => !hiddenCalendars.has(entityId))
    : [event.entityId];

  const preferredEntityId = visibleEntityIds[0] || event.entityId;
  const configuredColor = preferredEntityId
    ? normalizeSingleColor?.(eventFontColors?.[preferredEntityId])
    : null;
  if (configuredColor) {
    return configuredColor;
  }

  return getContrastColor?.(getEventBackgroundColor?.(event)) || 'white';
}

function getScheduleVisualInfo(event, { getEventDateTimeInfo, shouldRenderTimedEventAsAllDayInSchedule, shouldShowEventTime: shouldShowTime, formatEventTime, getEventDisplayTitle, translate }) {
  const { eventStart, eventEnd, isAllDay } = getEventDateTimeInfo(event);
  const rendersAsAllDay = isAllDay || shouldRenderTimedEventAsAllDayInSchedule(eventStart, eventEnd);
  const displayTitle = getEventDisplayTitle?.(event) || event.summary || translate('untitledEvent');
  const shouldIncludeStartTime = !isAllDay && rendersAsAllDay && shouldShowTime(event);

  return {
    eventStart,
    eventEnd,
    isAllDay,
    rendersAsAllDay,
    displayTitle: shouldIncludeStartTime
      ? translate('eventTitleWithStartTime', {
          title: displayTitle,
          time: formatEventTime(eventStart, { schedule: true })
        })
      : displayTitle
  };
}

function buildContinuousDaySpanLayout(days, options = {}) {
  const {
    getDateKey,
    getEventsForDay,
    getEventDaySegment,
    getEventKey,
    isEventVisible = () => true,
    includeEvent = () => true,
    sortEvents = null
  } = options;

  const spans = [];
  const spanMap = new Map();

  days.forEach((date, dayIndex) => {
    const events = getEventsForDay(date) || [];
    events.forEach((event) => {
      if (!isEventVisible(event) || !includeEvent(event, date)) {
        return;
      }

      const daySegment = getEventDaySegment(event, date);
      if (!daySegment) {
        return;
      }

      const eventKey = getEventKey(event);
      let span = spanMap.get(eventKey);
      if (!span) {
        span = {
          event,
          displayTitle: daySegment.displayTitle,
          startIndex: dayIndex,
          endIndex: dayIndex,
          startsOnDayAtStartIndex: daySegment.startsOnDay,
          endsOnDayAtEndIndex: daySegment.endsOnDay
        };
        spanMap.set(eventKey, span);
        spans.push(span);
      } else {
        if (dayIndex < span.startIndex) {
          span.startIndex = dayIndex;
          span.startsOnDayAtStartIndex = daySegment.startsOnDay;
        }
        if (dayIndex > span.endIndex) {
          span.endIndex = dayIndex;
          span.endsOnDayAtEndIndex = daySegment.endsOnDay;
        }
      }

      if (dayIndex === span.startIndex) {
        span.startsOnDayAtStartIndex = daySegment.startsOnDay;
      }
      if (dayIndex === span.endIndex) {
        span.endsOnDayAtEndIndex = daySegment.endsOnDay;
      }
    });
  });

  const sortedSpans = sortEvents ? [...spans].sort(sortEvents) : spans.sort((a, b) => {
    if (a.startIndex !== b.startIndex) return a.startIndex - b.startIndex;
    const aDuration = a.endIndex - a.startIndex;
    const bDuration = b.endIndex - b.startIndex;
    if (aDuration !== bDuration) return bDuration - aDuration;
    return (a.event.summary || '').localeCompare(b.event.summary || '');
  });

  const laneEndIndexes = [];
  sortedSpans.forEach((span) => {
    let laneIndex = laneEndIndexes.findIndex((endIndex) => endIndex < span.startIndex);
    if (laneIndex === -1) {
      laneIndex = laneEndIndexes.length;
      laneEndIndexes.push(span.endIndex);
    } else {
      laneEndIndexes[laneIndex] = span.endIndex;
    }
    span.laneIndex = laneIndex;
  });

  const maxLanes = laneEndIndexes.length;
  const dayLanesByDateKey = new Map();
  days.forEach((date, dayIndex) => {
    const lanes = new Array(maxLanes).fill(null);
    sortedSpans.forEach((span) => {
      if (dayIndex < span.startIndex || dayIndex > span.endIndex) return;
      lanes[span.laneIndex] = {
        event: span.event,
        displayTitle: span.displayTitle,
        spanStartIndex: span.startIndex,
        spanEndIndex: span.endIndex,
        dayIndex,
        segmentIndexWithinVisibleSpan: dayIndex - span.startIndex,
        continuesFromPreviousDay: dayIndex > span.startIndex || !span.startsOnDayAtStartIndex,
        continuesToNextDay: dayIndex < span.endIndex || !span.endsOnDayAtEndIndex,
        startsBeforeVisibleSegment: !span.startsOnDayAtStartIndex,
        extendsBeforeVisibleRange: !span.startsOnDayAtStartIndex,
        extendsAfterVisibleRange: !span.endsOnDayAtEndIndex,
        bridgeFromPreviousDay: dayIndex > span.startIndex,
        bridgeToNextDay: dayIndex < span.endIndex,
        isFirstVisibleSegment: dayIndex === span.startIndex,
        isLastVisibleSegment: dayIndex === span.endIndex,
        showTitle: dayIndex === span.startIndex,
        visibleDaySpan: span.endIndex - span.startIndex + 1
      };
    });
    dayLanesByDateKey.set(getDateKey(date), lanes);
  });

  return { maxLanes, dayLanesByDateKey, spans: sortedSpans };
}

function getMonthGridDates(currentDate, firstDayOfWeek) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();
  const startDay = (firstDay - firstDayOfWeek + 7) % 7;
  const days = [];

  for (let i = startDay - 1; i >= 0; i--) {
    const day = daysInPrevMonth - i;
    days.push({ day, date: new Date(year, month - 1, day), isOtherMonth: true });
  }

  for (let day = 1; day <= daysInMonth; day++) {
    days.push({ day, date: new Date(year, month, day), isOtherMonth: false });
  }

  const totalCells = startDay + daysInMonth;
  const remainingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
  for (let day = 1; day <= remainingCells; day++) {
    days.push({ day, date: new Date(year, month + 1, day), isOtherMonth: true });
  }

  return days;
}

function getRollingMonthGridDates(currentDate, firstDayOfWeek, rollingWeeks) {
  const anchorDate = new Date(currentDate);
  anchorDate.setHours(0, 0, 0, 0);

  const currentDay = anchorDate.getDay();
  const diff = (currentDay - firstDayOfWeek + 7) % 7;
  const weekStart = new Date(anchorDate);
  weekStart.setDate(anchorDate.getDate() - diff);

  const totalWeeks = rollingWeeks + 1;
  const totalDays = totalWeeks * 7;
  const currentMonthStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const days = [];

  for (let i = 0; i < totalDays; i++) {
    const date = new Date(weekStart);
    date.setDate(weekStart.getDate() + i);
    days.push({ day: date.getDate(), date, isOtherMonth: date < currentMonthStart });
  }

  return days;
}

function getMonthVisibleDateRange(currentDate, firstDayOfWeek, rollingWeeks = null) {
  if (rollingWeeks !== null) {
    const days = getRollingMonthGridDates(currentDate, firstDayOfWeek, rollingWeeks);
    const startDate = new Date(days[0].date);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(days[days.length - 1].date);
    endDate.setHours(23, 59, 59, 999);
    return { startDate, endDate };
  }

  const days = getMonthGridDates(currentDate, firstDayOfWeek);
  const startDate = new Date(days[0].date);
  startDate.setHours(0, 0, 0, 0);
  const endDate = new Date(days[days.length - 1].date);
  endDate.setHours(23, 59, 59, 999);
  return { startDate, endDate };
}

function getRollingDaysForView(viewMode, config) {
  if (viewMode === 'week-compact' && config.rolling_days_week_compact !== null) {
    return config.rolling_days_week_compact;
  }

  if (viewMode === 'week-standard' && config.rolling_days_schedule !== null) {
    return config.rolling_days_schedule;
  }

  return null;
}

function getWeekDays({ currentDate, weekStart, weekDays, rollingDays }) {
  if (rollingDays !== null) {
    const days = [];
    const startDate = new Date(currentDate);
    startDate.setHours(0, 0, 0, 0);

    for (let i = 0; i <= rollingDays; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      days.push(date);
    }
    return days;
  }

  const days = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(weekStart);
    date.setDate(weekStart.getDate() + i);
    if (weekDays.includes(date.getDay())) {
      days.push(date);
    }
  }
  return days;
}

function getWeekVisibleDateRange(weekDays) {
  const startDate = new Date(weekDays[0]);
  startDate.setHours(0, 0, 0, 0);
  const endDate = new Date(weekDays[weekDays.length - 1]);
  endDate.setHours(23, 59, 59, 999);
  return { startDate, endDate };
}

function getAgendaRollingDays(config) {
  if (config?.rolling_days_agenda !== null && config?.rolling_days_agenda !== undefined) {
    return config.rolling_days_agenda;
  }

  return null;
}

function getAgendaPeriodDaySpan(config) {
  const rollingDays = getAgendaRollingDays(config);
  return rollingDays !== null ? rollingDays : 14;
}

function createAgendaWindow(today, daySpan) {
  const startDate = new Date(today);
  startDate.setHours(0, 0, 0, 0);
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + daySpan);
  endDate.setHours(23, 59, 59, 999);
  const visibleStartDate = new Date(startDate);
  const visibleEndDate = new Date(endDate);
  visibleEndDate.setHours(23, 59, 59, 999);
  return { startDate, endDate, visibleStartDate, visibleEndDate };
}

function getAgendaDays(startDate, endDate) {
  const days = [];
  const cursor = new Date(startDate);
  cursor.setHours(0, 0, 0, 0);
  const end = new Date(endDate);
  end.setHours(0, 0, 0, 0);

  while (cursor <= end) {
    days.push(new Date(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }

  return days;
}

function getAgendaVisibleDateRange(startDate, endDate) {
  const visibleStartDate = new Date(startDate);
  visibleStartDate.setHours(0, 0, 0, 0);
  const visibleEndDate = new Date(endDate);
  visibleEndDate.setHours(23, 59, 59, 999);
  return { startDate: visibleStartDate, endDate: visibleEndDate };
}

function isAgendaRangeWithinWindow(range, windowStartDate, windowEndDate) {
  if (!range?.startDate || !range?.endDate || !windowStartDate || !windowEndDate) {
    return false;
  }

  const rangeStart = new Date(range.startDate);
  rangeStart.setHours(0, 0, 0, 0);
  const rangeEnd = new Date(range.endDate);
  rangeEnd.setHours(23, 59, 59, 999);
  const windowStart = new Date(windowStartDate);
  windowStart.setHours(0, 0, 0, 0);
  const windowEnd = new Date(windowEndDate);
  windowEnd.setHours(23, 59, 59, 999);

  return rangeStart >= windowStart && rangeEnd <= windowEnd;
}

function buildAgendaDayEntries(agendaDays, { getEventsForDay, isEventHiddenByStyle, sortEventsForDate, hideEmptyDays }) {
  return agendaDays
    .map((date) => ({
      date,
      matchingEvents: getEventsForDay(date, { includeHiddenStyledEvents: true }),
      events: null
    }))
    .map((entry) => ({
      ...entry,
      events: sortEventsForDate(entry.matchingEvents.filter((event) => !isEventHiddenByStyle(event)), entry.date)
    }))
    .filter((entry) => !hideEmptyDays || entry.events.length > 0);
}

function renderAgendaView({
  agendaDays,
  agendaEventMinHeight,
  compactMaxHeight,
  config,
  today,
  dayNames,
  monthFormatter,
  helpers
}) {
  const containerStyle = helpers.getCompactContainerStyle(compactMaxHeight);
  const agendaRows = [];
  const shouldHideEmptyDays = !!config.hide_empty_days;
  const agendaDayEntries = buildAgendaDayEntries(agendaDays, {
    getEventsForDay: helpers.getEventsForDay,
    isEventHiddenByStyle: helpers.isEventHiddenByStyle,
    sortEventsForDate: helpers.sortEventsForDate,
    hideEmptyDays: shouldHideEmptyDays
  });

  agendaDayEntries.forEach((entry, index) => {
    const { date, events } = entry;
    if (index > 0) {
      const previousDate = agendaDayEntries[index - 1].date;
      const monthChanged = previousDate.getMonth() !== date.getMonth() || previousDate.getFullYear() !== date.getFullYear();
      if (monthChanged) {
        agendaRows.push(`<div class="agenda-month-banner">${helpers.escapeHtml(monthFormatter.format(date))}</div>`);
      }
    }

    const isToday = date.toDateString() === today.toDateString();
    const dayStyle = helpers.getDayStyleAttributes(date, entry.matchingEvents, isToday);
    const dayStyleAttr = dayStyle.style ? ` style="${dayStyle.style}"` : '';
    agendaRows.push(`
        <div class="agenda-day-row ${isToday ? 'today' : ''} ${dayStyle.className}" data-date="${date.toISOString()}"${dayStyleAttr}>
          <div class="agenda-day-label">
            <div class="agenda-day-weekday">${dayNames[date.getDay()]}</div>
            <div class="agenda-day-date">${date.getDate()}</div>
            ${helpers.renderDayForecast(date, 'agenda')}
          </div>
          <div class="agenda-day-events">
            ${events.map(event => {
              const daySegment = helpers.getEventDaySegment(event, date);
              if (!daySegment) return '';
              const { segmentStart, segmentEnd, isAllDaySegment } = daySegment;
              const timeLabel = isAllDaySegment
                ? helpers.t('allDay')
                : helpers.formatEventTimeRange(segmentStart, segmentEnd);
              const eventStyle = helpers.getEventStyle(event);
              const eventAgendaMinHeight = helpers.shouldShowCombinedCornerBubbles(event)
                ? `calc(${agendaEventMinHeight} + 16px)`
                : agendaEventMinHeight;

              return `
                <div class="agenda-event" style="${eventStyle} --agenda-event-min-height: ${eventAgendaMinHeight}; --event-bubble-font-size: ${helpers.getEventBubbleFontSize(event)}; --event-time-font-size: ${helpers.getEventTimeFontSize(event)}; --event-location-font-size: ${helpers.getEventLocationFontSize(event)}; --event-bubble-text-color: ${helpers.getEventBubbleFontColor(event)};" data-event='${JSON.stringify(event).replace(/'/g, "&#39;")}'>
                  <div class="agenda-event-title">${helpers.renderEventTitleWithPrefix(event, helpers.getEventDisplayTitle(event))}</div>
                  ${helpers.shouldShowEventTime(event) ? `<div class="agenda-event-time">${timeLabel}</div>` : ''}
                  ${helpers.shouldShowEventLocation(event) ? `<div class="agenda-event-location">📍 ${helpers.escapeHtml(helpers.getDisplayLocation(event.location, event))}</div>` : ''}
                  ${helpers.renderEventIcon(event)}
                  ${helpers.renderEventStyleCornerIcon(event)}
                  ${helpers.renderCombinedCornerBubbles(event)}
                </div>
              `;
            }).join('')}
            ${events.length === 0 ? `<div class="agenda-empty-day">${helpers.t('noEvents')}</div>` : ''}
          </div>
        </div>
      `);
  });

  return `
      ${!config.compact_header && !config.hide_calendars ? helpers.renderCalendarBadges() : ''}
      <div class="agenda-container" id="agenda-container" style="${containerStyle}">
        ${agendaRows.join('')}
      </div>
    `;
}

function renderEventDetailsModal({
  event,
  startDate,
  endDate,
  isAllDay,
  calendarName,
  visibleBadges,
  modalBadgeColor = event.color,
  modalBadgeTextColor = 'white',
  capabilities,
  hasUID,
  canEdit,
  canDelete,
  canForward,
  canModify,
  customColor = null,
  locationLinks = false,
  locationActionsExpanded = false,
  locationMapUrl = '',
  helpers
}) {
  const {
    escapeHtml,
    formatDate,
    formatEventTime,
    formatDuration,
    renderEventDescription,
    t
  } = helpers;

  const hasLocation = typeof event.location === 'string' ? event.location.trim() !== '' : !!event.location;
  const locationHtml = hasLocation && locationLinks
    ? `
          <div class="modal-row modal-location-row">
            <div class="modal-label">📍 ${t('location')}</div>
            <div class="modal-value">
              <button type="button" class="modal-location-link" id="event-location-toggle" aria-expanded="${locationActionsExpanded ? 'true' : 'false'}">${escapeHtml(event.location)}</button>
            </div>
          </div>
          ${locationActionsExpanded ? `
            <div class="modal-location-actions" id="event-location-actions">
              <button type="button" class="btn btn-secondary modal-location-action" id="open-location-map-btn" data-map-url="${escapeHtml(locationMapUrl)}">${t('openInGoogleMaps')}</button>
              <button type="button" class="btn btn-secondary modal-location-action" id="copy-location-address-btn">${t('copyAddress')}</button>
            </div>
          ` : ''}
        `
    : (hasLocation ? `
          <div class="modal-row">
            <div class="modal-label">📍 ${t('location')}</div>
            <div class="modal-value">${escapeHtml(event.location)}</div>
          </div>
        ` : '');

  const combinedBadgeHtml = event.isCombinedCalendarEvent
    ? `<div style="display:flex; gap:6px; flex-wrap:wrap; margin-top:8px;">${visibleBadges.map(calendar => `<span class="modal-calendar-badge" style="background: ${calendar.color}; color: ${calendar.textColor || 'white'}; display: inline-block; padding: 4px 10px; border-radius: 12px; font-size: 12px;">${escapeHtml(calendar.name)}</span>`).join('')}</div>`
    : `<div class="modal-calendar-badge" style="background: ${modalBadgeColor}; color: ${modalBadgeTextColor}; display: inline-block; padding: 4px 12px; border-radius: 12px; font-size: 12px; margin-top: 8px;">${escapeHtml(calendarName)}</div>`;

  return `
      <div class="modal-header">
        <div>
          <h3 class="modal-title">${escapeHtml(event.summary || t('untitledEvent'))}</h3>
          ${combinedBadgeHtml}
        </div>
        <button class="modal-close" id="close-modal">×</button>
      </div>
      <div class="modal-body">
        <div class="modal-row">
          <div class="modal-label">📅 ${t('start')}</div>
          <div class="modal-value">
            ${formatDate(startDate)}${!isAllDay ? ` ${t('at')} ${formatEventTime(startDate)}` : ` (${t('allDay')})`}
          </div>
        </div>
        <div class="modal-row">
          <div class="modal-label">🏁 ${t('end')}</div>
          <div class="modal-value">
            ${formatDate(endDate)}${!isAllDay ? ` ${t('at')} ${formatEventTime(endDate)}` : ` (${t('allDay')})`}
          </div>
        </div>
        ${!isAllDay ? `
          <div class="modal-row">
            <div class="modal-label">⏱️ ${t('duration')}</div>
            <div class="modal-value">${formatDuration(startDate, endDate)}</div>
          </div>
        ` : ''}
        ${locationHtml}
        ${event.description ? `
          <div class="modal-row modal-row-description">
            <div class="modal-label">📝 ${t('description')}</div>
            <div class="modal-value event-description-content">${renderEventDescription(event.description)}</div>
          </div>
        ` : ''}
        ${event.attendees && event.attendees.length > 0 ? `
          <div class="modal-row">
            <div class="modal-label">👥 ${t('attendees')}</div>
            <div class="modal-value">
              ${event.attendees.map(a => escapeHtml(a.email || a.displayName || t('unknownAttendee'))).join(', ')}
            </div>
          </div>
        ` : ''}
        ${event.rrule ? `
          <div class="modal-row">
            <div class="modal-label">🔁 ${t('recurrence')}</div>
            <div class="modal-value">${t('recurringEvent')}</div>
          </div>
        ` : ''}

        ${!canModify && !capabilities.isReadonly && capabilities.isGoogleCalendar ? `
          <div class="info-banner warning">
            <strong>${t('googleCalendarLimitationTitle')}</strong> ${t('googleCalendarLimitationBody')}
          </div>
        ` : ''}

        ${!canModify && !hasUID && !capabilities.isGoogleCalendar ? `
          <div class="info-banner warning">
            <strong>${t('cannotModifyTitle')}</strong> ${t('cannotModifyBody')}
          </div>
        ` : ''}

        <div class="modal-actions">
            <div class="modal-actions-left">
              ${canDelete ? `<button class="btn btn-danger" id="delete-event-btn">${t('delete')}</button>` : ''}
            </div>
            <div class="modal-actions-right">
              <button class="btn btn-secondary" id="custom-color-btn">${t('customColor')}${customColor ? ` <span style="display:inline-block;width:0.8em;height:0.8em;border-radius:50%;background:${customColor};vertical-align:-0.1em;"></span>` : ''}</button>
              ${canForward ? `<button class="btn btn-secondary" id="forward-event-btn">${t('forwardEvent')}</button>` : ''}
              ${canEdit ? `<button class="btn btn-primary" id="edit-event-btn">${t('editEvent')}</button>` : ''}
            </div>
          </div>
      </div>
    `;
}

const CUSTOM_EVENT_COLORS_VERSION = 1;

function createEmptyCustomEventColors() {
  return { version: CUSTOM_EVENT_COLORS_VERSION, occurrences: {}, series: {}, future: {} };
}

function normalizeHexColor(value) {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  const short = trimmed.match(/^#?([0-9a-fA-F]{3})$/);
  if (short) return `#${short[1].split('').map((char) => char + char).join('').toUpperCase()}`;
  const full = trimmed.match(/^#?([0-9a-fA-F]{6})$/);
  return full ? `#${full[1].toUpperCase()}` : null;
}

function stablePart(value) {
  return value === undefined || value === null ? '' : String(value).trim();
}

function getOccurrenceStartToken(event) {
  return stablePart(event?.recurrence_id) || stablePart(event?.start?.dateTime) || stablePart(event?.start?.date) || stablePart(event?.start);
}

function getCustomEventColorKeys(event, { getEventIdentityKey } = {}) {
  if (!event) return null;
  const entityId = stablePart(event.entityId);
  const uid = stablePart(event.uid) || stablePart(event.ical_uid) || stablePart(event.iCalUID);
  const recurringId = stablePart(event.recurring_event_id) || stablePart(event.recurringEventId) || stablePart(event.series_uid) || stablePart(event.seriesId);
  const rrule = stablePart(event.rrule);
  const isRecurring = !!(event.recurrence_id || recurringId || rrule);
  const seriesIdentity = recurringId || (isRecurring ? uid : '');
  const seriesKey = entityId && seriesIdentity ? `${entityId}|series|${seriesIdentity}` : null;
  const occurrenceToken = stablePart(event.recurrence_id) || getOccurrenceStartToken(event);
  let occurrenceKey = null;
  if (seriesKey && occurrenceToken) {
    occurrenceKey = `${seriesKey}|occurrence|${occurrenceToken}`;
  } else if (!isRecurring && entityId && uid) {
    occurrenceKey = `${entityId}|uid|${uid}`;
  } else {
    const fallback = getEventIdentityKey?.(entityId, event);
    occurrenceKey = fallback ? `${entityId}|identity|${fallback}` : null;
  }
  return { isRecurring, occurrenceKey, seriesKey, occurrenceToken, supportsSeries: !!seriesKey, supportsFuture: !!(seriesKey && occurrenceToken) };
}

function normalizeColorOrNull(value, allowNull = false) {
  if (value === null && allowNull) return null;
  return normalizeHexColor(value);
}

function normalizeCustomEventColors(value) {
  const next = createEmptyCustomEventColors();
  if (!value || typeof value !== 'object') return next;
  if (value.version !== CUSTOM_EVENT_COLORS_VERSION) return next;
  if (value.occurrences && typeof value.occurrences === 'object') {
    Object.entries(value.occurrences).forEach(([key, color]) => {
      const normalized = normalizeColorOrNull(color, true);
      if (key && (normalized || color === null)) next.occurrences[key] = normalized;
    });
  }
  if (value.series && typeof value.series === 'object') {
    Object.entries(value.series).forEach(([key, color]) => {
      const normalized = normalizeHexColor(color);
      if (key && normalized) next.series[key] = normalized;
    });
  }
  if (value.future && typeof value.future === 'object') {
    Object.entries(value.future).forEach(([key, rules]) => {
      if (!key || !Array.isArray(rules)) return;
      const normalizedRules = rules
        .map((rule) => {
          if (!rule || typeof rule !== 'object' || !stablePart(rule.from)) return null;
          const normalized = normalizeColorOrNull(rule.color, true);
          if (!normalized && rule.color !== null) return null;
          return { from: stablePart(rule.from), color: normalized };
        })
        .filter(Boolean)
        .sort((a, b) => a.from.localeCompare(b.from));
      if (normalizedRules.length) next.future[key] = normalizedRules;
    });
  }
  return next;
}

function resolveCustomEventColor(event, state, { getEventIdentityKey } = {}) {
  const colors = state || createEmptyCustomEventColors();
  const keys = getCustomEventColorKeys(event, { getEventIdentityKey });
  if (!keys?.occurrenceKey) return null;
  if (Object.prototype.hasOwnProperty.call(colors.occurrences, keys.occurrenceKey)) {
    return colors.occurrences[keys.occurrenceKey];
  }
  if (keys.seriesKey && keys.occurrenceToken) {
    const applicable = (colors.future[keys.seriesKey] || []).filter((rule) => rule.from <= keys.occurrenceToken).pop();
    if (applicable) return applicable.color;
    if (Object.prototype.hasOwnProperty.call(colors.series, keys.seriesKey)) return colors.series[keys.seriesKey];
  }
  return null;
}

function applyCustomEventColor(state, event, scope, color, { getEventIdentityKey } = {}) {
  const next = normalizeCustomEventColors(state);
  const keys = getCustomEventColorKeys(event, { getEventIdentityKey });
  const normalized = color === null ? null : normalizeHexColor(color);
  if (color !== null && !normalized) return next;
  if (scope === 'all' && keys?.seriesKey) {
    if (normalized === null) delete next.series[keys.seriesKey]; else next.series[keys.seriesKey] = normalized;
    delete next.future[keys.seriesKey];
    Object.keys(next.occurrences).forEach((key) => { if (key.startsWith(`${keys.seriesKey}|occurrence|`)) delete next.occurrences[key]; });
  } else if (scope === 'future' && keys?.seriesKey && keys?.occurrenceToken) {
    const rules = (next.future[keys.seriesKey] || []).filter((rule) => rule.from < keys.occurrenceToken);
    rules.push({ from: keys.occurrenceToken, color: normalized });
    next.future[keys.seriesKey] = rules.sort((a, b) => a.from.localeCompare(b.from));
  } else if (keys?.occurrenceKey) {
    if (normalized === null) next.occurrences[keys.occurrenceKey] = null;
    else next.occurrences[keys.occurrenceKey] = normalized;
  }
  return next;
}

function removeCustomEventColor(state, event, scope, options = {}) {
  const keys = getCustomEventColorKeys(event, options);
  if (scope === 'all' && keys?.seriesKey) return applyCustomEventColor(state, event, 'all', null, options);
  if (scope === 'future' && keys?.supportsFuture) return applyCustomEventColor(state, event, 'future', null, options);
  const next = normalizeCustomEventColors(state);
  if (keys?.occurrenceKey) {
    if (keys.seriesKey) next.occurrences[keys.occurrenceKey] = null;
    else delete next.occurrences[keys.occurrenceKey];
  }
  return next;
}

function renderEventIcon(event, {
  getEventStyleOverrides,
  eventCalendarFriendlyName = false,
  hideEventCalendarBubble = false,
  getModalCalendarBadgesForEvent,
  getCalendarName,
  escapeHtml
}) {
  const styleOverrides = getEventStyleOverrides(event);
  const hideCalendarBubble = styleOverrides?.hide_event_calendar_bubble ?? hideEventCalendarBubble;

  if (eventCalendarFriendlyName) {
    const visibleBadges = getModalCalendarBadgesForEvent(event);
    if (visibleBadges.length === 0) {
      return '';
    }

    const namesHtml = visibleBadges
      .map(calendar => `<div class="week-standard-event-calendar-name">${escapeHtml(getCalendarName(calendar.entityId))}</div>`)
      .join('');

    return `<div class="week-standard-event-icons">${namesHtml}</div>`;
  }

  if (hideCalendarBubble) {
    return '';
  }

  const visibleBadges = getModalCalendarBadgesForEvent(event);
  if (visibleBadges.length === 0) {
    return '';
  }

  const badgesHtml = visibleBadges.map(calendar => {
    const name = getCalendarName(calendar.entityId);
    const initial = name.charAt(0).toUpperCase();
    return `<div class="week-standard-event-icon" style="background: ${calendar.color}; color: white;">${initial}</div>`;
  }).join('');

  return `<div class="week-standard-event-icons">${badgesHtml}</div>`;
}

function renderCombinedCornerBubbles(event, {
  shouldShowCombinedCornerBubbles,
  getModalCalendarBadgesForEvent,
  getCalendarName,
  escapeHtml
}) {
  if (!shouldShowCombinedCornerBubbles(event)) return '';

  const visibleBadges = getModalCalendarBadgesForEvent(event);
  if (visibleBadges.length <= 1) return '';

  const bubblesHtml = visibleBadges.map((calendar) => {
    const name = getCalendarName(calendar.entityId);
    const initial = name.charAt(0).toUpperCase();
    return `<span class="combined-corner-bubble" style="background: ${calendar.color}; color: white;" title="${escapeHtml(name)}">${escapeHtml(initial)}</span>`;
  }).join('');

  return `<div class="combined-corner-bubbles">${bubblesHtml}</div>`;
}

function renderEventStyleIcon(iconConfig, { position = 'before_title', escapeHtml } = {}) {
  if (!iconConfig || iconConfig.position !== position) return '';

  const styleParts = [];
  if (iconConfig.color) styleParts.push(`color: ${iconConfig.color};`);
  if (iconConfig.size) styleParts.push(`--event-style-icon-size: ${iconConfig.size};`);
  const styleAttr = styleParts.length ? ` style="${styleParts.join(' ')}"` : '';
  const className = position === 'corner' ? 'event-style-icon event-style-icon-corner' : 'event-style-icon event-style-icon-before-title';
  return `<ha-icon class="${className}" icon="${escapeHtml(iconConfig.icon)}"${styleAttr}></ha-icon>`;
}

function renderEventStyleCornerIcon(event, { getEventStyleIconConfig, escapeHtml }) {
  return renderEventStyleIcon(getEventStyleIconConfig(event), { position: 'corner', escapeHtml });
}

function renderEventTitleWithPrefix(event, title, {
  t,
  escapeHtml,
  getEventStyleOverrides,
  getEventStyleIconConfig,
  normalizeEventTitlePrefixMode,
  configuredEventTitlePrefix,
  getModalCalendarBadgesForEvent,
  getCalendarName,
  normalizeSingleColor,
  getCalendarBadgeIcon,
  normalizeBackgroundImageUrl
}) {
  const titleText = escapeHtml(title || t('untitledEvent'));
  const styleOverrides = getEventStyleOverrides(event);
  const titleIcon = renderEventStyleIcon(getEventStyleIconConfig(event), { position: 'before_title', escapeHtml });
  const titleHtml = titleIcon ? `${titleIcon}<span>${titleText}</span>` : titleText;
  const prefixMode = normalizeEventTitlePrefixMode(styleOverrides?.event_title_prefix ?? configuredEventTitlePrefix);
  const visibleBadges = getModalCalendarBadgesForEvent(event);
  if (prefixMode === 'none' || visibleBadges.length === 0) {
    return titleIcon ? `<span class="event-title-with-prefix">${titleHtml}</span>` : titleText;
  }

  if (prefixMode === 'friendly_name') {
    const calendarNames = visibleBadges
      .map((calendar) => getCalendarName(calendar.entityId))
      .filter(Boolean);
    const uniqueCalendarNames = Array.from(new Set(calendarNames));
    const calendarNameLabel = escapeHtml(uniqueCalendarNames.join(', '));
    return `<span class="event-title-with-prefix"><span class="event-title-prefix-friendly-name">${calendarNameLabel}:</span>${titleHtml}</span>`;
  }

  const badgesHtml = visibleBadges.map((calendar) => {
    const iconColor = normalizeSingleColor(calendar.color) || '#6b7280';
    const configuredBadgeIcon = getCalendarBadgeIcon(calendar.entityId);
    let badgeIconHtml = '';
    if (configuredBadgeIcon && configuredBadgeIcon.startsWith('mdi:')) {
      badgeIconHtml = `<ha-icon icon="${escapeHtml(configuredBadgeIcon)}"></ha-icon>`;
    } else if (configuredBadgeIcon) {
      const normalizedUrl = normalizeBackgroundImageUrl(configuredBadgeIcon) || configuredBadgeIcon;
      badgeIconHtml = `<img src="${escapeHtml(normalizedUrl)}" alt="" loading="lazy">`;
    } else {
      const initial = escapeHtml(getCalendarName(calendar.entityId).charAt(0).toUpperCase());
      badgeIconHtml = `<span>${initial}</span>`;
    }
    return `<span class="event-title-prefix-badge" style="background: ${iconColor}; color: white;">${badgeIconHtml}</span>`;
  }).join('');

  return `<span class="event-title-with-prefix"><span class="event-title-prefix-badges">${badgesHtml}</span>${titleHtml}</span>`;
}

function renderCalendarBadges({ badgeItems, hideCalendarNames = false, helpers }) {
  if (badgeItems.length === 0) return '';

  return `
      <div class="calendar-badges-container">
        <div class="calendar-badges">
          ${badgeItems.map((badgeItem) => renderCalendarBadge({
            badgeItem,
            hideCalendarNames,
            inline: false,
            helpers
          })).join('')}
        </div>
      </div>
    `;
}

function renderCalendarBadgesInline({ badgeItems, hideCalendarNames = false, helpers }) {
  if (badgeItems.length === 0) return '';

  return `
      <div class="calendar-badges-inline">
        ${badgeItems.map((badgeItem) => renderCalendarBadge({
          badgeItem,
          hideCalendarNames,
          inline: true,
          helpers
        })).join('')}
      </div>
    `;
}

function renderCalendarBadge({ badgeItem, hideCalendarNames, inline, helpers }) {
  const badgeBackground = badgeItem.isHidden ? '#f3f4f6' : helpers.lightenColor(badgeItem.color, 0.85);
  const badgeTextColor = badgeItem.isHidden ? '#9ca3af' : helpers.getContractColor(badgeBackground);
  const inlineClass = inline ? ' calendar-badge-inline' : '';
  const cursorStyle = inline ? '' : '\n                          cursor: pointer;';

  return `
            <div class="calendar-badge${inlineClass} ${badgeItem.isHidden ? 'calendar-badge-hidden' : ''} ${hideCalendarNames ? 'hide-calendar-name' : ''}"
                 data-entity="${badgeItem.entityId}"
                 style="background: ${badgeBackground};
                        border-color: ${badgeItem.isHidden ? '#d1d5db' : badgeItem.color};${cursorStyle}">
              ${renderCalendarBadgeIcon({
                entityId: badgeItem.entityId,
                name: badgeItem.name,
                color: badgeItem.color,
                isHidden: badgeItem.isHidden,
                iconOverride: badgeItem.icon,
                helpers
              })}
              ${hideCalendarNames ? '' : renderCalendarBadgeLabel({ badgeItem, badgeTextColor, helpers })}
            </div>
          `;
}

function renderCalendarBadgeLabel({ badgeItem, badgeTextColor, helpers }) {
  const personStateLabel = helpers.formatPersonStateLabel(helpers.getCalendarBadgePersonState(badgeItem.entityId));
  return `
      <span class="calendar-badge-label" style="color: ${badgeTextColor}">
        <span class="calendar-badge-name">${helpers.escapeHtml(badgeItem.name)}</span>
        ${personStateLabel ? `<span class="calendar-badge-person-state">${helpers.escapeHtml(personStateLabel)}</span>` : ''}
      </span>
    `;
}

function renderCalendarBadgeIcon({ entityId, name, color, isHidden, iconOverride = null, helpers }) {
  const configuredBadgeIcon = iconOverride || helpers.getCalendarBadgeIcon(entityId);
  const hasPersonEntity = !!helpers.getCalendarBadgePersonEntityId(entityId);
  const personPictureUrl = configuredBadgeIcon ? null : helpers.getPersonEntityPictureUrl(helpers.getCalendarBadgePersonState(entityId));
  const iconBackground = isHidden ? '#9ca3af' : helpers.normalizeSingleColor(color);
  const personIconClass = hasPersonEntity ? ' calendar-badge-person-icon' : '';

  if (configuredBadgeIcon && configuredBadgeIcon.startsWith('mdi:')) {
    return `<div class="calendar-badge-icon${personIconClass}" style="background: ${iconBackground}"><ha-icon icon="${helpers.escapeHtml(configuredBadgeIcon)}"></ha-icon></div>`;
  }

  if (configuredBadgeIcon || personPictureUrl) {
    const imageUrl = configuredBadgeIcon || personPictureUrl;
    const normalizedUrl = helpers.normalizeBackgroundImageUrl(imageUrl) || imageUrl;
    return `<div class="calendar-badge-icon calendar-badge-photo${personIconClass}" style="background: ${iconBackground}"><img src="${helpers.escapeHtml(normalizedUrl)}" alt="${helpers.escapeHtml(name)}" loading="lazy"></div>`;
  }

  const initial = name.charAt(0).toUpperCase();
  return `<div class="calendar-badge-icon${personIconClass}" style="background: ${iconBackground}">${helpers.escapeHtml(initial)}</div>`;
}

function formatDateTimeLocal(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function renderRecurrenceControls({
  recurrenceData,
  recurrenceEndMode,
  recurrenceWeekdayOptions,
  showRecurringFields,
  showWeekdays,
  helpers
}) {
  const { escapeHtmlAttribute, t } = helpers;

  return `
          <div id="recurring-event-fields" style="display: ${showRecurringFields ? 'block' : 'none'};">
            <div class="form-row">
              <div class="form-group form-group-inline">
                <div class="form-inline-row">
                  <label class="form-label">${t('recurrenceFrequency')}</label>
                  <select class="form-select" id="event-recurrence-frequency">
                  <option value="DAILY" ${recurrenceData.frequency === 'DAILY' ? 'selected' : ''}>${t('recurrenceDaily')}</option>
                  <option value="WEEKLY" ${recurrenceData.frequency === 'WEEKLY' ? 'selected' : ''}>${t('recurrenceWeekly')}</option>
                  <option value="MONTHLY" ${recurrenceData.frequency === 'MONTHLY' ? 'selected' : ''}>${t('recurrenceMonthly')}</option>
                  <option value="YEARLY" ${recurrenceData.frequency === 'YEARLY' ? 'selected' : ''}>${t('recurrenceYearly')}</option>
                  </select>
                </div>
              </div>
              <div class="form-group form-group-inline">
                <div class="form-inline-row">
                  <label class="form-label">${t('recurrenceEvery')}</label>
                  <input type="number" class="form-input" id="event-recurrence-interval" min="1" value="${escapeHtmlAttribute(recurrenceData.interval || '1')}" />
                </div>
              </div>
            </div>
            <div class="form-group" id="event-recurrence-weekdays-group" style="display: ${showWeekdays ? 'block' : 'none'};">
              <label class="form-label">${t('recurrenceWeekdays')}</label>
              <div class="form-checkbox-group" style="flex-wrap: wrap; gap: 10px;">
                ${recurrenceWeekdayOptions.map(day => `
                  <label class="form-checkbox-label" style="display:flex;align-items:center;gap:6px;">
                    <input type="checkbox" class="form-checkbox event-recurrence-weekday" value="${day.key}" ${recurrenceData.byDay.includes(day.key) ? 'checked' : ''} />
                    <span>${day.label}</span>
                  </label>
                `).join('')}
              </div>
            </div>
            <div class="form-group">
              <label class="form-label recurrence-ends-label">${t('recurrenceEndsOn')}</label>
              <div class="recurrence-end-row">
                <label class="recurrence-end-option" for="event-recurrence-end-never">
                  <input type="radio" name="event-recurrence-end-mode" id="event-recurrence-end-never" value="never" ${recurrenceEndMode === 'never' ? 'checked' : ''} />
                  <span>${t('recurrenceNever')}</span>
                </label>
                <div></div>
              </div>
              <div class="recurrence-end-row">
                <label class="recurrence-end-option" for="event-recurrence-end-on">
                  <input type="radio" name="event-recurrence-end-mode" id="event-recurrence-end-on" value="on" ${recurrenceEndMode === 'on' ? 'checked' : ''} />
                  <span>${t('recurrenceOn')}</span>
                </label>
                <input type="date" class="form-input" id="event-recurrence-until" value="${escapeHtmlAttribute(recurrenceData.untilDate || '')}" ${recurrenceEndMode === 'on' ? '' : 'disabled'} />
              </div>
              <div class="recurrence-end-row">
                <label class="recurrence-end-option" for="event-recurrence-end-after">
                  <input type="radio" name="event-recurrence-end-mode" id="event-recurrence-end-after" value="after" ${recurrenceEndMode === 'after' ? 'checked' : ''} />
                  <span>${t('recurrenceAfter')}</span>
                </label>
                <div class="recurrence-after-input">
                  <input type="number" class="form-input" id="event-recurrence-count" min="1" placeholder="13" value="${escapeHtmlAttribute(recurrenceData.count || '')}" ${recurrenceEndMode === 'after' ? '' : 'disabled'} />
                  <span>${t('recurrenceOccurrences')}</span>
                </div>
              </div>
            </div>
          </div>`;
}

function renderEventFields({
  title,
  location,
  description,
  startDate,
  startTime,
  endDate,
  endTime,
  isAllDay,
  isRecurring,
  recurrenceData,
  recurrenceEndMode,
  recurrenceWeekdayOptions,
  helpers
}) {
  const { escapeHtml, escapeHtmlAttribute, t } = helpers;

  return `
          <div class="form-group form-group-inline">
            <div class="form-inline-row">
              <label class="form-label">
                ${t('eventTitle')}<span class="form-required">*</span>
              </label>
              <input type="text" class="form-input" id="event-title" placeholder="${escapeHtmlAttribute(t('eventTitlePlaceholder'))}" value="${escapeHtmlAttribute(title || '')}" required />
            </div>
          </div>

          <div class="form-group form-group-inline">
            <div class="form-inline-row form-inline-row-top">
              <label class="form-label">${t('eventOptions')}</label>
              <div class="form-checkbox-row">
                <div class="form-group">
                  <div class="form-checkbox-group">
                    <input type="checkbox" class="form-checkbox" id="event-all-day" ${isAllDay ? 'checked' : ''} />
                    <label class="form-checkbox-label" for="event-all-day">${t('allDayEvent')}</label>
                  </div>
                </div>

                <div class="form-group">
                  <div class="form-checkbox-group">
                    <input type="checkbox" class="form-checkbox" id="event-recurring" ${isRecurring ? 'checked' : ''} />
                    <label class="form-checkbox-label" for="event-recurring">${t('recurring')}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

${renderRecurrenceControls({
    recurrenceData,
    recurrenceEndMode,
    recurrenceWeekdayOptions,
    showRecurringFields: isRecurring,
    showWeekdays: isRecurring && recurrenceData.frequency === 'WEEKLY',
    helpers
  })}

          <div id="timed-event-fields" style="display: ${isAllDay ? 'none' : 'block'};">
            <div class="form-group form-group-inline">
              <div class="form-inline-row">
                <label class="form-label">${t('start')}</label>
                <input type="datetime-local" class="form-input" id="event-start"
                       value="${formatDateTimeLocal(startTime)}" required />
              </div>
            </div>

            <div class="form-group form-group-inline">
              <div class="form-inline-row">
                <label class="form-label">${t('end')}</label>
                <input type="datetime-local" class="form-input" id="event-end"
                       value="${formatDateTimeLocal(endTime)}" />
              </div>
            </div>
          </div>

          <div id="all-day-event-fields" style="display: ${isAllDay ? 'block' : 'none'};">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">${t('startDate')}</label>
                <input type="date" class="form-input" id="event-start-date"
                       value="${formatDate(startDate)}" />
              </div>

              <div class="form-group">
                <label class="form-label">${t('endDate')}</label>
                <input type="date" class="form-input" id="event-end-date"
                       value="${formatDate(endDate)}" />
              </div>
            </div>
          </div>

          <div class="form-group form-group-inline">
            <div class="form-inline-row">
              <label class="form-label">${t('location')}</label>
              <input type="text" class="form-input" id="event-location" placeholder="${escapeHtmlAttribute(t('locationPlaceholder'))}" value="${escapeHtmlAttribute(location || '')}" />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">${t('description')}</label>
            <textarea class="form-textarea" id="event-description" placeholder="${escapeHtmlAttribute(t('descriptionPlaceholder'))}">${escapeHtml(description || '')}</textarea>
          </div>

          <div id="form-error" class="error-message" style="display: none;"></div>`;
}

function renderCreateEventForm({
  writableCalendars,
  selectedCalendarIds,
  prefill,
  startDate,
  startTime,
  endDate,
  endTime,
  recurrenceData,
  isPrefilledRecurring,
  isPrefilledAllDay,
  recurrenceEndMode,
  recurrenceWeekdayOptions,
  helpers
}) {
  const { escapeHtml, getCalendarName, t } = helpers;

  return `
      <div class="modal-header">
        <h3 class="modal-title">${t('createEvent')}</h3>
        <button class="modal-close" id="close-modal">×</button>
      </div>
      <div class="modal-body">
        <form id="create-event-form">
          <div class="form-group form-group-inline">
            <div class="form-inline-row">
              <label class="form-label">
                ${t('calendars')}<span class="form-required">*</span>
              </label>
              <div class="form-checkbox-grid">
                ${writableCalendars.map((entityId, index) => `
                  <label class="form-checkbox-group" style="margin: 0;">
                    <input
                      type="checkbox"
                      class="form-checkbox create-event-calendar"
                      value="${entityId}"
                      ${(selectedCalendarIds.length > 0 ? selectedCalendarIds.includes(entityId) : index === 0) ? 'checked' : ''}
                    />
                    <span class="form-checkbox-label">${escapeHtml(getCalendarName(entityId))}</span>
                  </label>
                `).join('')}
              </div>
            </div>
          </div>

${renderEventFields({
    title: prefill?.summary || '',
    location: prefill?.location || '',
    description: prefill?.description || '',
    startDate,
    startTime,
    endDate,
    endTime,
    isAllDay: isPrefilledAllDay,
    isRecurring: isPrefilledRecurring,
    recurrenceData,
    recurrenceEndMode,
    recurrenceWeekdayOptions,
    helpers
  })}

          <div class="form-actions">
            <button type="button" class="btn btn-secondary" id="cancel-btn">${t('cancel')}</button>
            <button type="submit" class="btn btn-primary" id="submit-btn">${t('createEvent')}</button>
          </div>
        </form>
      </div>
    `;
}

function renderEditEventForm({
  event,
  startDate,
  endDate,
  isAllDay,
  visibleCalendarOptions,
  selectedCombinedCalendarIds,
  recurrenceData,
  recurringSelectedByDefault,
  recurrenceEndMode,
  recurrenceWeekdayOptions,
  helpers
}) {
  const { escapeHtml, getCalendarName, t } = helpers;

  return `
      <div class="modal-header">
        <h3 class="modal-title">${t('editEvent')}</h3>
        <button class="modal-close" id="close-modal">×</button>
      </div>
      <div class="modal-body">
        <form id="edit-event-form">
          <div class="form-group">
            <label class="form-label">
              ${t('calendar')}<span class="form-required">*</span>
            </label>
            <select class="form-select" id="event-calendar" required ${selectedCombinedCalendarIds.length > 1 ? 'disabled' : ''}>
              ${visibleCalendarOptions.map((entityId) => `
                <option value="${entityId}" ${entityId === event.entityId ? 'selected' : ''}>
                  ${escapeHtml(getCalendarName(entityId))}
                </option>
              `).join('')}
            </select>
          </div>

${renderEventFields({
    title: event.summary || '',
    location: event.location || '',
    description: event.description || '',
    startDate,
    startTime: startDate,
    endDate,
    endTime: endDate,
    isAllDay,
    isRecurring: recurringSelectedByDefault,
    recurrenceData,
    recurrenceEndMode,
    recurrenceWeekdayOptions,
    helpers
  })}

          <div class="form-actions">
            <button type="button" class="btn btn-secondary" id="cancel-btn">${t('cancel')}</button>
            <button type="submit" class="btn btn-primary" id="submit-btn">${t('saveChanges')}</button>
          </div>
        </form>
      </div>
    `;
}

function renderStandardHeader({
  canAddEvents,
  shouldShowControls,
  helpers
}) {
  const dashboardButton = helpers.renderDashboardNavButton();
  const headerTitle = helpers.renderHeaderTitle();
  const leftContent = `${dashboardButton}${headerTitle}`;

  if (!leftContent.trim() && !shouldShowControls) return '';

  return `
      <div class="header">
        ${leftContent.trim() ? `<div class="header-left">
          ${dashboardButton}
          ${headerTitle}
        </div>` : ''}
        ${shouldShowControls ? `
          <div class="header-controls${leftContent.trim() ? '' : ' header-controls-only'}">
            ${canAddEvents ? `<button class="add-event-button" id="add-event-btn"><span class="icon">+</span>${helpers.t('addEvent')}</button>` : ''}
            ${helpers.renderThemeToggle()}
            <div class="period-controls">
              ${helpers.renderPeriodNavigationButtons('previous')}
              <div class="month-year">${helpers.getPeriodLabel()}</div>
              ${helpers.renderPeriodNavigationButtons('next')}
              ${helpers.renderPeriodNavigationButtons('today')}
            </div>
            ${helpers.renderViewModeButtons()}
          </div>
        ` : ''}
      </div>
    `;
}

function renderCompactHeader({
  canAddEvents,
  shouldShowCalendars,
  shouldShowControls,
  helpers
}) {
  const dashboardButton = helpers.renderDashboardNavButton();
  const headerTitle = helpers.renderHeaderTitle();
  const calendarBadges = shouldShowCalendars ? helpers.renderCalendarBadgesInline() : '';
  const leftContent = `${dashboardButton}${headerTitle}${calendarBadges}`;

  if (!leftContent.trim() && !shouldShowControls) return '';

  return `
      <div class="header header-compact">
        ${leftContent.trim() ? `<div class="compact-header-left">
          ${dashboardButton}
          ${headerTitle}
          ${calendarBadges}
        </div>` : ''}
        ${shouldShowControls ? `
          <div class="header-controls compact-header-controls${leftContent.trim() ? '' : ' header-controls-only'}">
            <div class="compact-period-controls">
              ${helpers.renderPeriodNavigationButtons('previous')}
              <div class="month-year">${helpers.getPeriodLabel()}</div>
              ${helpers.renderPeriodNavigationButtons('next')}
              ${helpers.renderPeriodNavigationButtons('today')}
            </div>
            ${canAddEvents ? `<button class="compact-add-event-button" id="add-event-btn" aria-label="${helpers.t('addEvent')}" title="${helpers.t('addEvent')}">+</button>` : ''}
            ${helpers.renderThemeToggle()}
            ${helpers.renderViewModeButtons()}
          </div>
        ` : ''}
      </div>
    `;
}

function renderHeaderTitle({
  title,
  headerTime,
  headerWeather,
  headerItems = [],
  helpers
}) {
  const hasTitle = String(title ?? '').trim().length > 0;
  if (!hasTitle && !headerTime && !headerWeather && headerItems.length === 0) return '';

  return `
      <div class="header-title-wrap">
        ${hasTitle ? `<h2 class="header-title">${helpers.escapeHtml(title)}</h2>` : ''}
        ${headerTime ? `<span class="header-time">${helpers.escapeHtml(headerTime)}</span>` : ''}
        ${headerWeather ? `<span class="header-weather"><ha-icon icon="${helpers.escapeHtml(headerWeather.conditionIcon)}"></ha-icon>${helpers.escapeHtml(headerWeather.temperature)}</span>` : ''}
        ${headerItems.map((item) => `<span class="header-item">${item.icon ? `<ha-icon icon="${helpers.escapeHtmlAttribute(item.icon)}"></ha-icon>` : ''}<span class="header-item-value">${helpers.escapeHtml(item.value)}</span></span>`).join('')}
      </div>
    `;
}

function renderDashboardNavButton({ shouldShow, helpers }) {
  if (!shouldShow) return '';
  return `<button class="dashboard-nav-button" id="header-dashboard-btn" aria-label="${helpers.t('openDashboard')}" title="${helpers.t('openDashboard')}">⌂</button>`;
}

function renderPeriodNavigationButtons({
  buttonType,
  hideNavigationButtons,
  shouldDisablePreviousNavigation,
  helpers
}) {
  if (hideNavigationButtons) return '';

  if (buttonType === 'previous') {
    return `<button class="nav-button" id="prev-period" ${shouldDisablePreviousNavigation ? 'disabled' : ''}>‹</button>`;
  }

  if (buttonType === 'next') {
    return '<button class="nav-button" id="next-period">›</button>';
  }

  if (buttonType === 'today') {
    return `<button class="today-button" id="today">${helpers.t('today')}</button>`;
  }

  return '';
}

function renderViewModeButtons({ hideViewSelector, viewMode, helpers }) {
  if (hideViewSelector) return '';

  return `
      <div class="view-mode-buttons">
        <select class="view-mode-select" id="view-mode-select" aria-label="Select calendar view">
          <option value="month" ${viewMode === 'month' ? 'selected' : ''}>${helpers.t('month')}</option>
          <option value="week-compact" ${viewMode === 'week-compact' ? 'selected' : ''}>${helpers.t('week')}</option>
          <option value="week-standard" ${viewMode === 'week-standard' ? 'selected' : ''}>${helpers.t('schedule')}</option>
          <option value="agenda" ${viewMode === 'agenda' ? 'selected' : ''}>${helpers.t('agenda')}</option>
        </select>
      </div>
    `;
}

function renderThemeToggle({ hideDarkModeToggle, isDarkMode }) {
  if (hideDarkModeToggle) return '';
  return `<button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode" title="Toggle dark mode">${isDarkMode ? '☀︎' : '☾'}</button>`;
}

function renderDayCellHeader({
  date,
  dayEventsForMatching,
  dayNum,
  helpers
}) {
  return `
        <div class="day-header-row">
          <div class="day-number">${dayNum}</div>
          ${helpers.renderDayBadges(date, dayEventsForMatching)}
          ${helpers.renderDayForecast(date, 'month')}
        </div>`;
}

function renderDayCellEvents({
  date,
  dayEvents,
  hiddenEventCount,
  monthSpanLanes,
  monthSpanEventKeys,
  visibleEvents,
  helpers
}) {
  const lanes = monthSpanLanes || [];
  const spannedEventKeys = new Set((monthSpanEventKeys || lanes.filter(Boolean).map((lane) => helpers.getEventKey(lane.event))));
  const occupiedSpanLaneCount = lanes.filter(Boolean).length;
  const visibleNonSpannedEvents = dayEvents
    .filter((event) => !spannedEventKeys.has(helpers.getEventKey(event)))
    .slice(0, Math.max(0, visibleEvents - occupiedSpanLaneCount));

  let nextVisibleEventIndex = 0;
  const spanAndFilledLaneHtml = lanes.map((lane) => {
    if (lane) return helpers.renderMonthSpanLane(lane);
    const event = visibleNonSpannedEvents[nextVisibleEventIndex];
    if (event) {
      nextVisibleEventIndex += 1;
      return helpers.renderMonthDayEvent(event, date);
    }
    return helpers.renderMonthSpanLane(lane);
  }).join('');
  const dayEventHtml = visibleNonSpannedEvents
    .slice(nextVisibleEventIndex)
    .map(event => helpers.renderMonthDayEvent(event, date))
    .join('');

  return `
        ${spanAndFilledLaneHtml}${dayEventHtml}
        ${hiddenEventCount > 0 ? `<div class="more-events" data-click-target="more-events">${helpers.t('moreEvents', { count: hiddenEventCount })}</div>` : ''}`;
}

function renderDayCell({
  date,
  dayEvents,
  dayEventsForMatching,
  dayNum,
  dayStyle,
  hiddenEventCount,
  isOtherMonth,
  monthSpanLanes,
  monthSpanEventKeys,
  isToday,
  visibleEvents,
  helpers
}) {
  let classes = 'day-cell';
  if (isOtherMonth) classes += ' other-month';
  if (isToday) classes += ' today';
  classes += dayStyle.className ? ` ${dayStyle.className}` : '';
  const dayStyleAttr = dayStyle.style ? ` style="${dayStyle.style}"` : '';

  return `
      <div class="${classes}" data-date="${date.toISOString()}"${dayStyleAttr}>${renderDayCellHeader({
        date,
        dayEventsForMatching,
        dayNum,
        helpers
      })}${renderDayCellEvents({
        date,
        dayEvents,
        hiddenEventCount,
        monthSpanLanes,
        monthSpanEventKeys,
        visibleEvents,
        helpers
      })}
      </div>
    `;
}

function renderWeekCompactView({
  config,
  weekDays,
  today,
  dayNames,
  headerHeight,
  compactMaxHeight,
  helpers
}) {
  const headerHeightStyle = headerHeight ? `--week-compact-header-height: ${headerHeight}px;` : '';
  const weekdayColorStyle = config.week_compact_weekday_color ? `--week-compact-weekday-color: ${config.week_compact_weekday_color};` : '';
  const containerStyle = `${headerHeightStyle}--week-compact-weekday-font-size: ${config.week_compact_weekday_font_size}px;--week-compact-day-header-spacing: ${config.week_compact_day_header_spacing}px;${weekdayColorStyle}${helpers.getCompactContainerStyle(compactMaxHeight)}`;

  return `
      ${!config.compact_header && !config.hide_calendars ? helpers.renderCalendarBadges() : ''}
      <div class="week-compact-container${config.compact_height ? ' compact-height' : ''} day-badge-layout-${config.day_badge_layout_week}" style="${containerStyle}">
        ${weekDays.map(date => {
          const isToday = date.toDateString() === today.toDateString();
          const dayEventsForMatching = helpers.getEventsForDay(date, { includeHiddenStyledEvents: true });
          const events = helpers.sortEventsForDate(dayEventsForMatching.filter((event) => !helpers.isEventHiddenByStyle(event)), date);
          const dayStyle = helpers.getDayStyleAttributes(date, dayEventsForMatching, isToday);
          const dayStyleAttr = dayStyle.style ? ` style="${dayStyle.style}"` : '';

          return `
            <div class="week-day-column ${isToday ? 'today' : ''} ${dayStyle.className}" data-date="${date.toISOString()}" data-click-target="day-header"${dayStyleAttr}>
              <div class="week-day-header">
                <div class="week-day-header-main">
                  <div class="week-day-name">${dayNames[date.getDay()]}</div>
                  <div class="week-day-meta-row">
                    <div class="week-day-date">${date.getDate()}</div>
                    ${helpers.renderDayBadges(date, dayEventsForMatching)}
                    ${helpers.renderDayForecast(date, 'week-compact')}
                  </div>
                </div>
              </div>
              <div class="week-day-events">
                ${events.map(event => {
                  return helpers.renderWeekCompactEvent(event, date);
                }).join('')}
                ${events.length === 0 ? `<div style="color: #9ca3af; font-size: 13px; text-align: center; margin-top: 20px;">${helpers.t('noEvents')}</div>` : ''}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
}

function renderWeekStandardView({
  allDayHeight,
  allDayLayout,
  config,
  containerStyle,
  dayNames,
  dayTimeSlotsStyle,
  endHour,
  hasAllDayEvents,
  hourHeight,
  hours,
  showCurrentTimeBar,
  startHour,
  today,
  weekDays,
  helpers
}) {
  return `
      ${!config.compact_header && !config.hide_calendars ? helpers.renderCalendarBadges() : ''}
      <div class="week-standard-container ${config.compact_width ? 'compact-width' : ''} day-badge-layout-${config.day_badge_layout_week}" style="${containerStyle}">
        <!-- Time column -->
        <div class="time-column">
          <div class="time-column-header-spacer"></div>
          ${hasAllDayEvents ? `<div class="time-column-allday-spacer" style="height: ${allDayHeight}px;"></div>` : ''}
          <div class="time-column-extra-spacer"></div>
          ${hours.map(hour => `
            <div class="time-slot" style="height: ${hourHeight}px;">
              <span class="time-slot-label">${helpers.formatScheduleHour(hour)}</span>
            </div>
          `).join('')}
        </div>

        <!-- Day columns -->
        ${weekDays.map(date => {
          const isToday = date.toDateString() === today.toDateString();
          const dayEventsForMatching = helpers.getEventsForDay(date, { includeHiddenStyledEvents: true });
          const dayEvents = helpers.sortEventsForDate(dayEventsForMatching.filter((event) => !helpers.isEventHiddenByStyle(event)), date);
          const dateKey = helpers.getDateKey(date);
          const allDayLanes = allDayLayout.dayLanesByDateKey.get(dateKey) || [];
          const dayStyle = helpers.getDayStyleAttributes(date, dayEventsForMatching, isToday);
          const dayStyleAttr = dayStyle.style ? ` style="${dayStyle.style}"` : '';

          return `
            <div class="week-standard-day-column ${isToday ? 'today' : ''} ${dayStyle.className}" data-date="${date.toISOString()}"${dayStyleAttr}>
              <div class="week-standard-day-header" data-click-target="day-header">
                <div class="week-day-header-main">
                  <div class="week-standard-day-name">${dayNames[date.getDay()]}</div>
                  <div class="week-day-meta-row">
                    <div class="week-standard-day-date">${date.getDate()}</div>
                    ${helpers.renderDayBadges(date, dayEventsForMatching)}
                    ${helpers.renderDayForecast(date, 'week-standard')}
                  </div>
                </div>
              </div>
              ${hasAllDayEvents ? helpers.renderAllDayEventsForDay(allDayLanes, allDayHeight) : ''}
              <div class="day-time-slots" style="${dayTimeSlotsStyle}">
                ${hours.map(hour => `
                  <div class="day-time-slot" style="height: ${hourHeight}px;" data-hour="${hour}"></div>
                `).join('')}
                ${showCurrentTimeBar && isToday ? helpers.renderCurrentTimeLine(startHour, hourHeight) : ''}
                ${helpers.renderTimedEventsForDay(dayEvents, date, startHour, endHour, hourHeight)}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
}

function renderMonthDayHeaders({ weekdayNames, firstDayOfWeek, shouldShowWeekNumbers }) {
  const orderedDays = [
    ...weekdayNames.slice(firstDayOfWeek),
    ...weekdayNames.slice(0, firstDayOfWeek)
  ];

  const dayHeaders = orderedDays.map(day => `
      <div class="day-header">${day}</div>
    `).join('');

  if (!shouldShowWeekNumbers) {
    return dayHeaders;
  }

  return `<div class="month-week-number-header"></div>${dayHeaders}`;
}

function renderMonthGridDays({ currentDate, firstDayOfWeek, shouldShowWeekNumbers, helpers }) {
  let html = '';
  const dayEntries = getMonthGridDates(currentDate, firstDayOfWeek);
  const weekLayouts = [];

  dayEntries.forEach((dayEntry, dayIndex) => {
    if (shouldShowWeekNumbers && dayIndex % 7 === 0) {
      html += helpers.renderMonthWeekNumberCell(dayEntry.date);
    }
    const weekIndex = Math.floor(dayIndex / 7);
    if (!weekLayouts[weekIndex]) {
      weekLayouts[weekIndex] = helpers.getMonthSpanLayoutForWeek(dayEntries.slice(weekIndex * 7, weekIndex * 7 + 7).map((entry) => entry.date));
    }
    const weekLayout = weekLayouts[weekIndex];
    html += helpers.renderDay(dayEntry.day, dayEntry.date, dayEntry.isOtherMonth, weekLayout?.dayLanesByDateKey.get(helpers.getDateKey(dayEntry.date)) || []);
  });

  return html;
}

function renderRollingWeeks({ currentDate, firstDayOfWeek, rollingWeeks, shouldShowWeekNumbers, helpers }) {
  let html = '';
  const dayEntries = getRollingMonthGridDates(currentDate, firstDayOfWeek, rollingWeeks);
  const weekLayouts = [];

  dayEntries.forEach((dayEntry, dayIndex) => {
    if (shouldShowWeekNumbers && dayIndex % 7 === 0) {
      html += helpers.renderMonthWeekNumberCell(dayEntry.date);
    }

    const weekIndex = Math.floor(dayIndex / 7);
    if (!weekLayouts[weekIndex]) {
      weekLayouts[weekIndex] = helpers.getMonthSpanLayoutForWeek(dayEntries.slice(weekIndex * 7, weekIndex * 7 + 7).map((entry) => entry.date));
    }
    const weekLayout = weekLayouts[weekIndex];
    html += helpers.renderDay(dayEntry.day, dayEntry.date, dayEntry.isOtherMonth, weekLayout?.dayLanesByDateKey.get(helpers.getDateKey(dayEntry.date)) || []);
  });

  return html;
}

function renderMonthDays({ currentDate, config, viewMode, shouldShowWeekNumbers, helpers }) {
  // If rolling_weeks is set, show current week + N additional weeks
  if (config.rolling_weeks !== null && viewMode === 'month') {
    return renderRollingWeeks({
      currentDate,
      firstDayOfWeek: config.firstDayOfWeek,
      rollingWeeks: config.rolling_weeks,
      shouldShowWeekNumbers,
      helpers
    });
  }

  return renderMonthGridDays({
    currentDate,
    firstDayOfWeek: config.firstDayOfWeek,
    shouldShowWeekNumbers,
    helpers
  });
}

function renderMonthView({
  compactMaxHeight,
  config,
  currentDate,
  isCompactMonth,
  monthWeekRows,
  shouldShowHeaderBadges,
  shouldShowWeekNumbers,
  viewMode,
  weekdayNames,
  helpers
}) {
  const monthStyle = isCompactMonth ? helpers.getCompactMonthGridStyle(monthWeekRows, compactMaxHeight) : '';
  const monthClass = [
    'calendar-grid',
    isCompactMonth ? 'compact-month' : '',
    shouldShowWeekNumbers ? 'month-week-numbers' : ''
  ].filter(Boolean).join(' ');

  return `
        ${shouldShowHeaderBadges ? helpers.renderCalendarBadges() : ''}
        <div class="${monthClass}" style="${monthStyle}">
          ${renderMonthDayHeaders({
            weekdayNames,
            firstDayOfWeek: config.firstDayOfWeek,
            shouldShowWeekNumbers
          })}
          ${renderMonthDays({
            currentDate,
            config,
            viewMode,
            shouldShowWeekNumbers,
            helpers
          })}
        </div>
      `;
}

function normalizeVirtualCalendars(virtualCalendars, { normalizeSingleColor }) {
  if (!Array.isArray(virtualCalendars)) return [];

  return virtualCalendars
    .map((entry, index) => {
      if (!entry || typeof entry !== 'object') return null;
      const id = typeof entry.id === 'string' && entry.id.trim()
        ? entry.id.trim()
        : `virtual_${index + 1}`;
      const entities = Array.isArray(entry.entities)
        ? Array.from(new Set(entry.entities
          .map((entityId) => typeof entityId === 'string' ? entityId.trim() : '')
          .filter(Boolean)))
        : [];
      if (entities.length === 0) return null;
      return {
        id,
        name: typeof entry.name === 'string' && entry.name.trim() ? entry.name.trim() : id,
        icon: typeof entry.icon === 'string' && entry.icon.trim() ? entry.icon.trim() : null,
        color: normalizeSingleColor(entry.color),
        entities
      };
    })
    .filter(Boolean);
}

function getVirtualBadgeById(virtualCalendars = [], virtualId) {
  return (virtualCalendars || []).find((virtualCalendar) => virtualCalendar.id === virtualId) || null;
}

function getVirtualBadgeForEntity(virtualCalendars = [], entityId) {
  return (virtualCalendars || []).find((virtualCalendar) => virtualCalendar.entities.includes(entityId)) || null;
}

function getVirtualBadgeForEvent(virtualCalendars = [], event) {
  if (!event) return null;

  if (event.isCombinedCalendarEvent && Array.isArray(event.sourceEntityIds) && event.sourceEntityIds.length > 0) {
    const matchedVirtualCalendars = event.sourceEntityIds
      .map((entityId) => getVirtualBadgeForEntity(virtualCalendars, entityId))
      .filter(Boolean);
    if (matchedVirtualCalendars.length > 0) {
      return matchedVirtualCalendars[0];
    }
    return null;
  }

  return getVirtualBadgeForEntity(virtualCalendars, event.entityId);
}

function getCalendarColor(entityId, index = 0, { colors = {}, getDefaultColor, normalizeSingleColor }) {
  return normalizeSingleColor(
    colors?.[entityId] ||
    getDefaultColor(index)
  );
}

function getCalendarName(entityId, { calendarNames = {}, hassStates = {}, virtualCalendars = [] } = {}) {
  if (!entityId) {
    return '';
  }

  if (entityId.startsWith('virtual:')) {
    const virtualId = entityId.replace('virtual:', '');
    const virtualBadge = getVirtualBadgeById(virtualCalendars, virtualId);
    if (virtualBadge?.name) {
      return virtualBadge.name;
    }
    return virtualId;
  }

  // Check if there's a custom name mapping
  if (calendarNames && calendarNames[entityId]) {
    return calendarNames[entityId];
  }

  // Otherwise use friendly_name from entity or entity ID
  const entity = hassStates?.[entityId];
  const fallbackName = entityId.includes('.') ? entityId.split('.').slice(1).join('.') : entityId;
  return entity?.attributes?.friendly_name || fallbackName;
}

function getVirtualBadgeItems({
  entities = [],
  virtualCalendars = [],
  hideBadgeCalendars = [],
  hiddenCalendars = new Set(),
  getCalendarColor,
  getCalendarName,
  getCalendarBadgeIcon
}) {
  const hiddenBadgeCalendars = new Set(hideBadgeCalendars || []);
  const items = [];
  const insertedVirtualIds = new Set();

  entities.forEach((entityId, originalIndex) => {
    const virtualCalendar = getVirtualBadgeForEntity(virtualCalendars, entityId);
    if (virtualCalendar && !insertedVirtualIds.has(virtualCalendar.id)) {
      const configuredEntities = virtualCalendar.entities.filter((configuredEntityId) => entities.includes(configuredEntityId));
      const hasVisibleEntity = configuredEntities.some((configuredEntityId) => !hiddenBadgeCalendars.has(configuredEntityId));
      if (hasVisibleEntity) {
        const color = virtualCalendar.color || getCalendarColor(entityId, originalIndex);
        const isHidden = configuredEntities.every((configuredEntityId) => hiddenCalendars.has(configuredEntityId));
        items.push({
          id: virtualCalendar.id,
          entityId: `virtual:${virtualCalendar.id}`,
          name: virtualCalendar.name,
          icon: virtualCalendar.icon,
          color,
          entities: configuredEntities,
          isHidden,
          type: 'virtual'
        });
      }
      insertedVirtualIds.add(virtualCalendar.id);
      return;
    }

    if (virtualCalendar || hiddenBadgeCalendars.has(entityId)) return;
    const color = getCalendarColor(entityId, originalIndex);
    items.push({
      id: entityId,
      entityId,
      name: getCalendarName(entityId),
      icon: getCalendarBadgeIcon(entityId),
      color,
      entities: [entityId],
      isHidden: hiddenCalendars.has(entityId),
      type: 'entity'
    });
  });

  return items;
}

function getWritableCalendars(entities = [], calendarCapabilities = {}) {
  return entities.filter(entityId => {
    const caps = calendarCapabilities[entityId];
    return caps && caps.canCreate && !caps.isReadonly;
  });
}

function getCalendarBadgePersonEntityId(badgeEntityId, calendarPersonEntities = {}) {
  const mappings = calendarPersonEntities || {};
  if (!badgeEntityId) return null;

  if (mappings[badgeEntityId]) {
    return mappings[badgeEntityId];
  }

  if (badgeEntityId.startsWith('virtual:')) {
    const virtualId = badgeEntityId.replace('virtual:', '');
    return mappings[virtualId] || null;
  }

  return null;
}

console.info(`Daylight Calendar Card ${getDaylightCalendarCardVersion()} loaded from skylight-calendar-card.js`);

// ============================================================================
// TRANSLATION HELPER FUNCTIONS
// ============================================================================

const normalizeLanguage = (language) => {
  if (!language) return DEFAULT_LANGUAGE;
  return language.toLowerCase().split('-')[0];
};

const resolveLanguage = (language) => {
  const normalized = normalizeLanguage(language);
  return TRANSLATIONS[normalized] ? normalized : DEFAULT_LANGUAGE;
};

const interpolate = (template, params = {}) =>
  template.replace(/\{(\w+)\}/g, (_, key) => (params[key] !== undefined ? params[key] : ''));

const translate = (language, key, params = {}) => {
  const resolved = resolveLanguage(language);
  const fallbackStrings = TRANSLATIONS[DEFAULT_LANGUAGE]?.strings || {};
  const strings = TRANSLATIONS[resolved]?.strings || fallbackStrings;
  const fallback = fallbackStrings[key] || key;
  return interpolate(strings[key] || fallback, params);
};

const MAX_PERSISTED_EVENT_CACHE_SPAN_DAYS = 210;
const STALE_RESOURCE_BANNER_ID = 'daylight-calendar-card-stale-resource-warning';
let staleResourceWarningHandled = false;

const logStaleResourceWarning = (staleUrl) => {
  console.warn(
    `Daylight Calendar Card: old Skylight resource detected${staleUrl ? ` (${staleUrl})` : ''}. ` +
    'Remove it from Settings → Dashboards → Resources and keep /hacsfiles/daylight-calendar-card/skylight-calendar-card.js. ' +
    'The filename may still be skylight-calendar-card.js; the important part is the daylight-calendar-card folder.'
  );
};

const isStaleResourceWarningDismissed = () => {
  try {
    return window.localStorage?.getItem(STALE_RESOURCE_WARNING_STORAGE_KEY) === 'true';
  } catch (_error) {
    return false;
  }
};

const dismissStaleResourceWarning = (banner) => {
  try {
    window.localStorage?.setItem(STALE_RESOURCE_WARNING_STORAGE_KEY, 'true');
  } catch (_error) {
    // Ignore storage failures; the banner can still be dismissed for this page view.
  }
  banner?.remove?.();
};

const showStaleResourceWarningBanner = (staleUrl) => {
  if (isStaleResourceWarningDismissed() || document.getElementById?.(STALE_RESOURCE_BANNER_ID)) return;

  const banner = document.createElement('div');
  banner.id = STALE_RESOURCE_BANNER_ID;
  banner.setAttribute('role', 'status');
  banner.style.cssText = [
    'position: fixed',
    'left: 0',
    'right: 0',
    'bottom: 0',
    'z-index: 2147483647',
    'box-sizing: border-box',
    'width: 100%',
    'display: flex',
    'align-items: center',
    'gap: 12px',
    'padding: 12px 16px',
    'background: #323232',
    'color: #fff',
    'box-shadow: 0 3px 8px rgba(0, 0, 0, 0.32)',
    'font-family: var(--primary-font-family, Roboto, Arial, sans-serif)',
    'font-size: 14px',
    'line-height: 1.35',
    'pointer-events: auto'
  ].join(';');

  const message = document.createElement('span');
  message.textContent = 'Old Skylight Calendar Card resource detected. Remove it from Settings → Dashboards → Resources.';
  message.style.cssText = 'min-width: 0; flex: 1 1 auto;';
  if (staleUrl) {
    message.title = staleUrl;
  }
  const docsLink = document.createElement('a');
  docsLink.href = STALE_RESOURCE_TROUBLESHOOTING_URL;
  docsLink.target = '_blank';
  docsLink.rel = 'noreferrer';
  docsLink.textContent = 'Help';
  docsLink.style.cssText = [
    'color: #bbdefb',
    'font-size: 12px',
    'font-weight: 500',
    'text-decoration: none',
    'white-space: nowrap'
  ].join(';');

  const dismissButton = document.createElement('button');
  dismissButton.type = 'button';
  dismissButton.textContent = 'Dismiss';
  dismissButton.style.cssText = [
    'border: 0',
    'background: transparent',
    'color: #90caf9',
    'font: inherit',
    'font-weight: 500',
    'text-transform: uppercase',
    'cursor: pointer',
    'padding: 4px',
    'white-space: nowrap'
  ].join(';');
  dismissButton.addEventListener('click', () => dismissStaleResourceWarning(banner));

  banner.append(message, docsLink, dismissButton);
  document.body?.appendChild?.(banner);
};

const checkAndShowStaleResourceWarning = () => {
  if (staleResourceWarningHandled) return;
  staleResourceWarningHandled = true;

  const detection = detectStaleSkylightResource();
  if (!detection.detected) return;

  logStaleResourceWarning(detection.staleUrl);
  showStaleResourceWarningBanner(detection.staleUrl);
};

// ============================================================================
// MAIN CALENDAR CARD CLASS
// ============================================================================

class SkylightCalendarCard extends HTMLElement {
  static COMMON_NAMED_COLORS = COMMON_NAMED_COLORS;
  static detectStaleSkylightResource = detectStaleSkylightResource;

  constructor() {
    super();
    this._root = this;
    this._config = {};
    this._events = [];
    this._eventsByCalendar = {};
    this._eventCacheGeneration = 0;
    this._eventFetchGeneration = 0;
    this._eventWriteGeneration = 0;
    this._pendingEventRefreshAfterCurrentFetch = false;
    this._pendingEventRenderAfterCurrentFetch = false;
    this._eventRefreshWarningTimer = null;
    this._eventCacheHydrated = false;
    this._eventCacheLoadInFlight = false;
    this._eventLoadingInvalidatedWhileDisconnected = false;
    this._eventCacheLoadingInvalidatedWhileDisconnected = false;
    this._lastSuccessfulEventRefresh = null;
    this._lastEventRefreshFailed = false;
    this._calendarEventMetadata = {};
    this._currentDate = new Date();
    this._viewMode = DEFAULT_VIEW; // 'month', 'week-compact', 'week-standard', or 'agenda'
    this._weekStart = new Date();
    this._fetching = false;
    this._activeEventFetchRange = null;
    this._lastFetch = null;
    this._loadedEventRange = null;
    this._calendarDataSignatures = {}; // Track per-calendar data for change detection
    this._lastUnchangedDataRender = null; // Throttle unchanged-data UI refreshes
    this._hiddenCalendars = new Set(); // Track which calendars are hidden
    this._customEventColors = createEmptyCustomEventColors();
    this._calendarCapabilities = {}; // Track calendar capabilities
    this._activeLanguage = DEFAULT_LANGUAGE;
    this._hasCustomTitle = false;
    this._isDarkMode = false;
    this._themeMode = DEFAULT_THEME_MODE;
    this._systemThemeMediaQuery = null;
    this._handleSystemThemeChange = (event) => {
      if (this._themeMode !== DEFAULT_THEME_MODE) {
        return;
      }

      this._isDarkMode = !!event.matches;
      this.render();
    };
    this._weekStandardFixedOffsetHeight = null;
    this._weekStandardExtraHeaderHeight = 0;
    this._weekStandardHeaderHeight = null;
    this._weekCompactHeaderHeight = null;
    this._weekStandardContainerTopInViewport = null;
    this._weekCompactContainerTopInViewport = null;
    this._monthContainerTopInViewport = null;
    this._agendaContainerTopInViewport = null;
    this._agendaStartDate = null;
    this._agendaEndDate = null;
    this._agendaVisibleStartDate = null;
    this._agendaVisibleEndDate = null;
    this._agendaDaysPerScrollLoad = 7;
    this._agendaScrollLoadLock = false;
    this._agendaSuppressScrollHandling = false;
    this._agendaPendingScrollTop = null;
    this._swipeStartX = null;
    this._swipeStartY = null;
    this._swipeTracking = false;
    this._swipeStartedOnInteractive = false;
    this._dayBadgeActions = new Map();
    this._dayBadgeActionSequence = 0;
    this._activeModalBackHandler = null;
    this._combinedEditTargets = null;
    this._combinedDeleteTargets = null;
    this._customColorContext = null;
    this._eventLocationActionsExpanded = false;
    this._pendingHeaderSensorRender = false;
    this._weatherForecastController = createWeatherForecastController({
      getHass: () => this._hass,
      getWeatherEntityId: () => this._config?.show_daily_weather_forecast !== false
        ? this._config?.header_weather_sensor
        : null,
      onForecastUpdated: () => {
        if (!this.isEventManagementDialogOpen()) {
          this.renderPreservingAgendaScroll();
        } else {
          this._pendingHeaderSensorRender = true;
        }
      }
    });
    this._modalVisibilityObserver = null;
    this._monthMeasureRaf = null;
    this._monthMeasureRenderRaf = null;
    this._wrapMeasureRaf1 = null;
    this._wrapMeasureRaf2 = null;
    this._monthGridResizeObserver = null;
    this._headerResizeObserver = null;
    this._hostResizeObserver = null;
    this._hostResizeRaf = null;
    this._pendingHostResizeRender = false;
    this._pendingWidthDependentLayoutRefresh = false;
    this._observedResizeParent = null;
    this._lastObservedHostSize = null;
    this._monthCompactMeasurementDirty = true;
    this._lastCompactMonthViewportHeight = null;
    this._handleEventCacheFlush = () => this.flushEventCache({ refresh: true });
    this._handleViewportResize = () => {
      if (this.isEventManagementDialogOpen()) {
        return;
      }

      if (this._config.compact_height && (this._viewMode === 'week-standard' || this._viewMode === 'agenda')) {
        this.render();
        return;
      }

      if (this._viewMode === 'month' && this._config.compact_height && !this.shouldShowAllEventsInMonth()) {
        this._monthCompactMeasurementDirty = true;
        this.scheduleMonthCompactTopMeasurement();
        return;
      }

      this.updateCompactHeaderWrapState();
      this.updateCalendarBadgesScrollState();
      this.refreshWidthDependentLayoutMeasurements();
    };
  }

  getRootElementById(id) {
    return this._root?.querySelector(`#${id}`) || null;
  }

  shouldShowAllEventsInMonth() {
    return !!(this._config?.show_all_events_month || this._config?.show_all_details_month);
  }

  shouldRenderMonthEventsAsWeekCompact() {
    return this._viewMode === 'month' && !!this._config?.show_all_details_month;
  }

  getDashboardScopeKey() {
    const pathnameSegments = (window.location?.pathname || '').split('/').filter(Boolean);
    if (pathnameSegments.length > 0) {
      return pathnameSegments[0];
    }

    const hashPath = (window.location?.hash || '').replace(/^#/, '');
    const hashSegments = hashPath.split('/').filter(Boolean);
    if (hashSegments.length > 0) {
      return hashSegments[0];
    }

    return 'default';
  }

  getPreferenceStorageKey() {
    const dashboardScope = this.getDashboardScopeKey();
    const baseKey = this._config.preference_storage_key || (this._config.entities || []).join('|');

    if (!baseKey) {
      return null;
    }

    return `skylight-calendar-card:${dashboardScope}:${baseKey}`;
  }

  normalizeDashboardPath(pathValue) {
    return normalizeDashboardPath(pathValue);
  }

  getConfiguredDashboardPath() {
    return this.normalizeDashboardPath(this._config?.header_dashboard_path);
  }

  shouldShowDashboardNavButton() {
    return !!(this._config?.show_dashboard_nav_button && this.getConfiguredDashboardPath());
  }

  normalizeEnumValue(value, options) {
    return normalizeEnumValue(value, options);
  }

  normalizeDefaultDarkMode(value) {
    return normalizeThemeMode(value);
  }

  normalizeEventTitlePrefixMode(value) {
    return normalizeEventTitlePrefixMode(value);
  }

  normalizePastEventMode(value) {
    return normalizePastEventMode(value);
  }

  normalizeDayBadgeLayoutWeek(value) {
    return normalizeDayBadgeLayoutWeek(value);
  }

  normalizeEntityStringMap(value) {
    return normalizeEntityStringMap(value);
  }

  normalizeBooleanStyleValue(value) {
    return normalizeBooleanStyleValue(value);
  }

  applyThemeMode(mode = this._themeMode) {
    this._themeMode = this.normalizeDefaultDarkMode(mode);

    if (this._themeMode === 'dark') {
      this._isDarkMode = true;
      return;
    }

    if (this._themeMode === 'light') {
      this._isDarkMode = false;
      return;
    }

    const mediaQuery = window.matchMedia?.('(prefers-color-scheme: dark)');
    this._isDarkMode = !!mediaQuery?.matches;
  }

  attachSystemThemeListener() {
    const mediaQuery = window.matchMedia?.('(prefers-color-scheme: dark)');
    if (!mediaQuery || this._systemThemeMediaQuery === mediaQuery) {
      return;
    }

    this.detachSystemThemeListener();
    this._systemThemeMediaQuery = mediaQuery;

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', this._handleSystemThemeChange);
    } else if (typeof mediaQuery.addListener === 'function') {
      mediaQuery.addListener(this._handleSystemThemeChange);
    }
  }

  detachSystemThemeListener() {
    if (!this._systemThemeMediaQuery) {
      return;
    }

    if (typeof this._systemThemeMediaQuery.removeEventListener === 'function') {
      this._systemThemeMediaQuery.removeEventListener('change', this._handleSystemThemeChange);
    } else if (typeof this._systemThemeMediaQuery.removeListener === 'function') {
      this._systemThemeMediaQuery.removeListener(this._handleSystemThemeChange);
    }

    this._systemThemeMediaQuery = null;
  }

  getDefaultHiddenCalendarSet() {
    const knownEntities = new Set(this._config.entities || []);
    return new Set((this._config.default_hidden_calendars || []).filter((entityId) => knownEntities.has(entityId)));
  }

  normalizeDefaultHiddenCalendars(config = {}) {
    return normalizeDefaultHiddenCalendars(config);
  }

  loadPersistedPreferences() {
    this._customEventColors = createEmptyCustomEventColors();
    const storageKey = this.getPreferenceStorageKey();
    if (!storageKey) return false;

    try {
      const raw = window.localStorage?.getItem(storageKey);
      if (!raw) return false;

      const parsed = JSON.parse(raw);

      let loaded = false;
      if (Array.isArray(parsed.hiddenCalendars)) {
        const knownEntities = new Set(this._config.entities || []);
        this._hiddenCalendars = new Set(parsed.hiddenCalendars.filter((entityId) => knownEntities.has(entityId)));
        loaded = true;
      }
      if (parsed.customEventColors !== undefined) {
        this._customEventColors = normalizeCustomEventColors(parsed.customEventColors);
        loaded = true;
      }
      if (loaded) return true;
    } catch (error) {
      console.warn('Failed to load persisted calendar preferences:', error);
    }

    return false;
  }

  persistPreferences() {
    const storageKey = this.getPreferenceStorageKey();
    if (!storageKey) return;

    try {
      const payload = {
        hiddenCalendars: Array.from(this._hiddenCalendars),
        customEventColors: normalizeCustomEventColors(this._customEventColors)
      };
      window.localStorage?.setItem(storageKey, JSON.stringify(payload));
    } catch (error) {
      console.warn('Failed to persist calendar preferences:', error);
    }
  }

  updateCompactHeaderWrapState() {
    if (!this._root) return;
    if (typeof window.requestAnimationFrame !== 'function') {
      this.measureAndApplyHeaderWrapState();
      return;
    }
    if (this._wrapMeasureRaf1 !== null) window.cancelAnimationFrame(this._wrapMeasureRaf1);
    if (this._wrapMeasureRaf2 !== null) window.cancelAnimationFrame(this._wrapMeasureRaf2);
    this._wrapMeasureRaf1 = window.requestAnimationFrame(() => {
      this._wrapMeasureRaf1 = null;
      this._wrapMeasureRaf2 = window.requestAnimationFrame(() => {
        this._wrapMeasureRaf2 = null;
        this.measureAndApplyHeaderWrapState();
      });
    });
  }

  shouldMarkWrappedFromChildren(children) {
    const visibleChildren = children.filter((child) => child.offsetParent !== null);
    if (visibleChildren.length <= 1) return false;
    const firstTop = visibleChildren[0].offsetTop;
    return visibleChildren.some((child) => Math.abs(child.offsetTop - firstTop) > 1);
  }



  getElementContentWidth(element) {
    if (!element) return 0;

    const computed = window.getComputedStyle(element);
    const paddingLeft = parseFloat(computed.paddingLeft) || 0;
    const paddingRight = parseFloat(computed.paddingRight) || 0;

    return Math.max(0, element.clientWidth - paddingLeft - paddingRight);
  }

  getOuterWidth(element) {
    if (!element) return 0;

    const rect = element.getBoundingClientRect();
    const computed = window.getComputedStyle(element);
    const marginLeft = parseFloat(computed.marginLeft) || 0;
    const marginRight = parseFloat(computed.marginRight) || 0;

    return rect.width + marginLeft + marginRight;
  }

  measureNaturalGroupWidth(group) {
    if (!group) return 0;

    const computed = window.getComputedStyle(group);
    const children = Array.from(group.children || [])
      .filter((child) => child.offsetParent !== null);

    if (!children.length) {
      return Math.ceil(group.scrollWidth || 0);
    }

    const childWidths = children.reduce((sum, child) => {
      return sum + this.getOuterWidth(child);
    }, 0);

    const internalGap = parseFloat(computed.columnGap)
      || parseFloat(computed.gap)
      || 0;

    return Math.ceil(childWidths + internalGap * Math.max(children.length - 1, 0));
  }

  shouldMarkHeaderWrappedFromWidth(header, leftGroup, controlsGroup) {
    if (!header || !leftGroup || !controlsGroup) return false;

    const computedStyle = window.getComputedStyle(header);
    const gap = parseFloat(computedStyle.columnGap)
      || parseFloat(computedStyle.gap)
      || 0;
    const requiredWidth = this.measureNaturalGroupWidth(leftGroup)
      + this.measureNaturalGroupWidth(controlsGroup)
      + gap;
    const availableWidth = this.getElementContentWidth(header);
    const tolerance = 2;

    return requiredWidth > (availableWidth + tolerance);
  }

  getUnwrappedHeaderMeasurementElements(header) {
    if (!header || typeof header.cloneNode !== 'function') return null;

    const parent = header.parentNode || this._root;
    if (typeof parent?.appendChild !== 'function') return null;

    const clone = header.cloneNode(true);
    if (!clone) return null;

    clone.classList?.remove?.('is-wrapped');
    clone.querySelector?.('.header-controls')?.classList?.remove?.('is-wrapped');
    clone.querySelector?.('.compact-header-controls')?.classList?.remove?.('is-wrapped');
    clone.querySelector?.('.calendar-badges-inline')?.classList?.remove?.('is-wrapped');

    if (clone.style) {
      const width = header.getBoundingClientRect?.().width || header.clientWidth || 0;
      clone.style.position = 'absolute';
      clone.style.visibility = 'hidden';
      clone.style.pointerEvents = 'none';
      clone.style.left = '-10000px';
      clone.style.top = '0';
      clone.style.height = 'auto';
      clone.style.maxHeight = 'none';
      clone.style.overflow = 'visible';
      if (width > 0) clone.style.width = `${width}px`;
    }

    parent.appendChild(clone);
    return {
      clone,
      leftGroup: this._config.compact_header
        ? clone.querySelector?.('.compact-header-left')
        : clone.querySelector?.('.header-left'),
      controlsGroup: this._config.compact_header
        ? clone.querySelector?.('.compact-header-controls')
        : clone.querySelector?.('.header-controls')
    };
  }


  shouldMarkGroupWrappedFromWidth(group) {
    if (!group) return false;

    const requiredWidth = this.measureNaturalGroupWidth(group);
    const availableWidth = this.getElementContentWidth(group);
    const tolerance = 2;

    return requiredWidth > (availableWidth + tolerance);
  }

  setClassStateIfChanged(element, className, shouldHaveClass) {
    if (!element?.classList) return;
    if (element.classList.contains(className) === shouldHaveClass) return;
    element.classList.toggle(className, shouldHaveClass);
  }

  measureAndApplyHeaderWrapState() {
    if (!this._root) return;

    const headerSelector = this._config.compact_header ? '.header-compact' : '.header';
    const controlsSelector = this._config.compact_header ? '.compact-header-controls' : '.header-controls';
    const header = this._root.querySelector(headerSelector);
    const controls = this._root.querySelector(controlsSelector);
    const badges = this._root.querySelector('.calendar-badges-inline');

    if (header) {
      const liveLeftGroup = this._config.compact_header
        ? header.querySelector('.compact-header-left')
        : header.querySelector('.header-left');
      const liveControlsGroup = this._config.compact_header
        ? header.querySelector('.compact-header-controls')
        : header.querySelector('.header-controls');
      const probe = this.getUnwrappedHeaderMeasurementElements(header);
      let shouldWrapHeader = false;
      let shouldWrapControls = false;
      try {
        const leftGroup = probe?.leftGroup || liveLeftGroup;
        const controlsGroup = probe?.controlsGroup || liveControlsGroup;
        shouldWrapHeader = this.shouldMarkHeaderWrappedFromWidth(header, leftGroup, controlsGroup);
        shouldWrapControls = controls ? this.shouldMarkGroupWrappedFromWidth(probe?.controlsGroup || controls) : false;
      } finally {
        probe?.clone?.remove?.();
      }

      this.setClassStateIfChanged(header, 'is-wrapped', shouldWrapHeader);
      if (controls) {
        this.setClassStateIfChanged(controls, 'is-wrapped', shouldWrapControls);
      }
    } else if (controls) {
      const shouldWrapControls = this.shouldMarkGroupWrappedFromWidth(controls);
      this.setClassStateIfChanged(controls, 'is-wrapped', shouldWrapControls);
    }

    if (this._config.compact_header && badges) {
      const shouldWrapBadges = this.shouldMarkWrappedFromChildren(Array.from(badges.children));
      this.setClassStateIfChanged(badges, 'is-wrapped', shouldWrapBadges);
    }
  }


  updateCalendarBadgesScrollState() {
    if (!this._root || this._config.compact_header) return;

    const badgesContainer = this._root.querySelector('.calendar-badges-container');
    const badges = this._root.querySelector('.calendar-badges');
    if (!badgesContainer || !badges) return;

    const maxScrollLeft = badges.scrollWidth - badges.clientWidth;
    const hasOverflow = maxScrollLeft > 1;
    const showLeftIndicator = hasOverflow && badges.scrollLeft > 1;
    const showRightIndicator = hasOverflow && badges.scrollLeft < (maxScrollLeft - 1);

    badgesContainer.classList.toggle('has-overflow', hasOverflow);
    badgesContainer.classList.toggle('show-left-indicator', showLeftIndicator);
    badgesContainer.classList.toggle('show-right-indicator', showRightIndicator);
  }

  isEventManagementDialogOpen() {
    const modal = this.getRootElementById('event-modal');
    return !!modal && modal.classList.contains('show');
  }

  getConfigNormalizationSchema() {
    return createConfigNormalizationSchema({
      hasCustomTitle: this._hasCustomTitle,
      normalizeDashboardPath: this.normalizeDashboardPath.bind(this),
      normalizeCombineStyle: this.normalizeCombineStyle.bind(this),
      normalizeCombineBackground: this.normalizeCombineBackground.bind(this),
      normalizeEventColorMode: this.normalizeEventColorMode.bind(this),
      normalizeSingleColor: this.normalizeSingleColor.bind(this),
      normalizeBackgroundOpacity: this.normalizeBackgroundOpacity.bind(this),
      normalizeEventModalSize: this.normalizeEventModalSize.bind(this),
      normalizeVirtualCalendars: this.normalizeVirtualCalendars.bind(this),
      normalizeDefaultDarkMode: this.normalizeDefaultDarkMode.bind(this),
      getDefaultTitle: (language) => translate(language, 'defaultTitle')
    });
  }

  getConfigNormalizationContext(rawConfig, language) {
    const normalizedDefaultView = rawConfig.default_view === 'week'
      ? 'week-compact'
      : rawConfig.default_view === 'schedule'
        ? 'week-standard'
        : rawConfig.default_view;
    const hasConfiguredHeaderBackgroundOpacity = rawConfig.header_background_opacity !== undefined && rawConfig.header_background_opacity !== null && rawConfig.header_background_opacity !== '';
    const normalizedHeaderBackgroundOpacity = hasConfiguredHeaderBackgroundOpacity
      ? this.normalizeBackgroundOpacity(rawConfig.header_background_opacity, 0)
      : (rawConfig.header_background_transparent ? 100 : 0);
    const hasConfiguredBackgroundOpacity = rawConfig.background_opacity !== undefined && rawConfig.background_opacity !== null && rawConfig.background_opacity !== '';
    const normalizedBackgroundOpacity = hasConfiguredBackgroundOpacity
      ? this.normalizeBackgroundOpacity(rawConfig.background_opacity, 0)
      : (rawConfig.background_transparent ? 100 : 0);
    const configuredWeekStartHour = Number(rawConfig.week_start_hour);
    const normalizedWeekStartHour = Number.isFinite(configuredWeekStartHour)
      ? Math.min(23, Math.max(0, configuredWeekStartHour))
      : 0;
    const configuredWeekEndHour = Number(rawConfig.week_end_hour);
    const normalizedWeekEndHour = Number.isFinite(configuredWeekEndHour)
      ? Math.min(23, Math.max(0, configuredWeekEndHour))
      : 23;
    const rawCombineWidth = Number(rawConfig.combine_calendars_width);
    const rawEventBarWidth = Number(rawConfig.event_color_bar_width);
    const hasCombineWidth = Number.isFinite(rawCombineWidth) && rawCombineWidth > 0;
    const hasEventBarWidth = Number.isFinite(rawEventBarWidth) && rawEventBarWidth > 0;
    const normalizedCombineWidth = hasCombineWidth
      ? rawCombineWidth
      : (hasEventBarWidth ? rawEventBarWidth : DEFAULT_EVENT_COLOR_BAR_WIDTH);
    const normalizePositiveNumber = (value, fallback) => {
      const number = Number(value);
      return Number.isFinite(number) && number > 0 ? number : fallback;
    };
    const normalizeNonNegativeNumber = (value, fallback) => {
      const number = Number(value);
      return Number.isFinite(number) && number >= 0 ? number : fallback;
    };

    return {
      normalizedDefaultView,
      normalizedWeekCompactWeekdayFontSize: normalizePositiveNumber(rawConfig.week_compact_weekday_font_size, DEFAULT_CONFIG_VALUES.week_compact_weekday_font_size),
      normalizedWeekCompactWeekdayColor: this.normalizeSingleColor(rawConfig.week_compact_weekday_color),
      normalizedWeekCompactDayHeaderSpacing: normalizeNonNegativeNumber(rawConfig.week_compact_day_header_spacing, DEFAULT_CONFIG_VALUES.week_compact_day_header_spacing),
      normalizedCalendarColors: this.normalizeColorMap(rawConfig.colors || {}),
      normalizedEventFontColors: this.normalizeColorMap(rawConfig.event_font_colors || {}),
      normalizedEventStyles: this.normalizeEventStyles(rawConfig.event_styles || []),
      normalizedDayStyles: this.normalizeDayStyles(
        this.buildDayStyleRules(rawConfig),
        resolveLanguage(rawConfig.locale || rawConfig.language || this._hass?.locale?.language || this._hass?.language)
      ),
      normalizedDayBadges: this.normalizeDayBadges(rawConfig.day_badges || []),
      normalizedDayBadgeLayoutWeek: this.normalizeDayBadgeLayoutWeek(rawConfig.day_badge_layout_week),
      normalizedHeaderColor: this.normalizeSingleColor(rawConfig.header_color),
      normalizedGridColor: this.normalizeSingleColor(rawConfig.grid_color),
      normalizedHeaderTextColor: this.normalizeSingleColor(rawConfig.header_text_color),
      normalizedHeaderBackgroundOpacity,
      normalizedBackgroundOpacity,
      normalizedWeekStartHour,
      normalizedWeekEndHour,
      normalizedEventTitlePrefix: this.normalizeEventTitlePrefixMode(rawConfig.event_title_prefix),
      normalizedTimeZone: this.normalizeTimeZone(rawConfig.time_zone),
      normalizedPastEventMode: rawConfig.past_event_mode !== undefined && rawConfig.past_event_mode !== null && rawConfig.past_event_mode !== ''
        ? this.normalizePastEventMode(rawConfig.past_event_mode)
        : (rawConfig.hide_the_past ? 'hide' : 'none'),
      normalizedCombineWidth,
      normalizedEventBarWidth: hasEventBarWidth ? rawEventBarWidth : normalizedCombineWidth,
      normalizedCalendarPersonEntities: this.normalizeEntityStringMap(rawConfig.calendar_person_entities || {}),
      normalizedDefaultHiddenCalendars: this.normalizeDefaultHiddenCalendars(rawConfig),
      normalizedHeaderTimeSensor: typeof rawConfig.header_time_sensor === 'string' && rawConfig.header_time_sensor.trim()
        ? rawConfig.header_time_sensor.trim()
        : null,
      normalizedHeaderWeatherSensor: typeof rawConfig.header_weather_sensor === 'string' && rawConfig.header_weather_sensor.trim()
        ? rawConfig.header_weather_sensor.trim()
        : null,
      normalizedHeaderItems: normalizeHeaderItems(rawConfig.header_items),
      language
    };
  }

  normalizeConfig(rawConfig, language = resolveLanguage(rawConfig.language || this._hass?.language || this._hass?.locale?.language)) {
    const derived = this.getConfigNormalizationContext(rawConfig, language);
    const schemaContext = { rawConfig, language, derived };
    const schema = this.getConfigNormalizationSchema();
    const defaults = schema.reduce((acc, field) => {
      acc[field.key] = field.defaultValue(schemaContext);
      return acc;
    }, {});
    const normalizedOverrides = schema.reduce((acc, field) => {
      if (field.normalize) {
        acc[field.key] = field.normalize(schemaContext);
      }
      return acc;
    }, {});

    const normalizedConfig = {
      ...defaults,
      ...rawConfig,
      ...normalizedOverrides
    };
    if (!Object.prototype.hasOwnProperty.call(rawConfig, 'use_24hr_schedule')) {
      delete normalizedConfig.use_24hr_schedule; // Preserve locale-based hour cycle defaults when unset
    }
    return normalizedConfig;
  }

  setConfig(config) {
    const previousForecastWeatherSensor = this._config?.show_daily_weather_forecast !== false
      ? this._config?.header_weather_sensor || null
      : null;
    if (!config.entities || !Array.isArray(config.entities)) {
      throw new Error('You need to define calendar entities');
    }
    const language = resolveLanguage(config.language || this._hass?.language || this._hass?.locale?.language);
    this._hasCustomTitle = config.title !== undefined && config.title !== null;
    this._config = this.normalizeConfig(config, language);
    this._viewMode = this._config.default_view;
    this.applyThemeMode(this._config.color_scheme);
    this._hiddenCalendars = this.getDefaultHiddenCalendarSet();
    this._customEventColors = createEmptyCustomEventColors();
    this.loadPersistedPreferences();
    this._loadedEventRange = null;
    this._eventsByCalendar = {};
    this._eventCacheGeneration += 1;
    this._eventFetchGeneration += 1;
    this._eventWriteGeneration += 1;
    this._pendingEventRefreshAfterCurrentFetch = false;
    this._pendingEventRenderAfterCurrentFetch = false;
    this._eventCacheHydrated = false;
    this._lastSuccessfulEventRefresh = null;
    this._lastEventRefreshFailed = false;
    this._calendarEventMetadata = {};
    this.clearEventRefreshWarningTimer();
    this._calendarDataSignatures = {};
    this._lastUnchangedDataRender = null;
    this._lastFetch = null;
    const nextForecastWeatherSensor = this._config.show_daily_weather_forecast !== false
      ? this._config.header_weather_sensor
      : null;
    this._weatherForecastController.handleConfigChanged(previousForecastWeatherSensor, nextForecastWeatherSensor);
    this.ensureWeatherForecastSubscription();
    this.setWeekStart();
    this.resetAgendaWindowToToday();
    this.render();
    this._activeLanguage = language;
    this.loadEventCacheForCurrentConfig();
    if (this._hass) this.ensureEventsForCurrentRange({ force: true });
  }

  set hass(hass) {
    const oldHass = this._hass;
    this._hass = hass;
    let shouldRender = false;

    // Check calendar capabilities when hass is set
    if (!oldHass || this._hass !== oldHass) {
      this.checkAllCalendarCapabilities();
    }

    if (this._themeMode === DEFAULT_THEME_MODE) {
      const hassDarkMode = this._hass?.themes?.darkMode;
      if (typeof hassDarkMode === 'boolean' && this._isDarkMode !== hassDarkMode) {
        this._isDarkMode = hassDarkMode;
        shouldRender = true;
      }
    }

    const resolvedLanguage = this.getLanguage();
    if (resolvedLanguage !== this._activeLanguage) {
      this._activeLanguage = resolvedLanguage;
      if (!this._hasCustomTitle) {
        this._config.title = translate(this._activeLanguage, 'defaultTitle');
      }
      shouldRender = true;
    }

    const configuredHeaderTimeSensor = this._config?.header_time_sensor;
    const configuredHeaderWeatherSensor = this._config?.header_weather_sensor;
    const previousHeaderTimeSensorState = configuredHeaderTimeSensor
      ? this.getHeaderEntityRenderSignature(oldHass?.states?.[configuredHeaderTimeSensor])
      : null;
    const nextHeaderTimeSensorState = configuredHeaderTimeSensor
      ? this.getHeaderEntityRenderSignature(hass?.states?.[configuredHeaderTimeSensor])
      : null;
    const previousHeaderWeatherSensorState = configuredHeaderWeatherSensor
      ? this.getHeaderEntityRenderSignature(oldHass?.states?.[configuredHeaderWeatherSensor])
      : null;
    const nextHeaderWeatherSensorState = configuredHeaderWeatherSensor
      ? this.getHeaderEntityRenderSignature(hass?.states?.[configuredHeaderWeatherSensor])
      : null;
    const previousHeaderItemsState = getHeaderItemsRenderSignature(this._config?.header_items, oldHass);
    const nextHeaderItemsState = getHeaderItemsRenderSignature(this._config?.header_items, hass);
    const headerSensorChanged = previousHeaderTimeSensorState !== nextHeaderTimeSensorState ||
      previousHeaderWeatherSensorState !== nextHeaderWeatherSensorState ||
      previousHeaderItemsState !== nextHeaderItemsState;
    const badgePersonStateChanged = this.getCalendarBadgePersonRenderSignature(oldHass) !==
      this.getCalendarBadgePersonRenderSignature(hass);

    if (headerSensorChanged || badgePersonStateChanged) {
      if (this.isEventManagementDialogOpen()) {
        this._pendingHeaderSensorRender = true;
      } else {
        shouldRender = true;
        this._pendingHeaderSensorRender = false;
      }
    }

    this.ensureWeatherForecastSubscription();
    this.refreshWeatherForecastData();

    if (shouldRender) {
      this.renderPreservingAgendaScroll();
    }

    // Refresh only when stale or when current view needs dates outside loaded range.
    if (!oldHass) {
      this.loadEventCacheForCurrentConfig();
      this.ensureEventsForCurrentRange({ force: true });
    } else {
      this.ensureEventsForCurrentRange();
    }
  }

  async checkAllCalendarCapabilities() {
    if (!this._hass) return;

    for (const entityId of this._config.entities) {
      const entity = this._hass.states[entityId];
      if (entity) {
        const features = entity.attributes?.supported_features || 0;

        // Check if this is a Google Calendar (which doesn't support UPDATE/DELETE services)
        const isGoogleCalendar = entityId.includes('google') ||
                                 entity.attributes?.integration === 'google';

        this._calendarCapabilities[entityId] = {
          canCreate: true, // Most calendars support creation
          canUpdate: (features & 2) !== 0, // UPDATE_EVENT = 2
          canDelete: (features & 4) !== 0, // DELETE_EVENT = 4
          isReadonly: this._config.readonly_calendars.includes(entityId),
          isGoogleCalendar: isGoogleCalendar // Track Google Calendar separately
        };
      }
    }
  }


  normalizeColorMap(colorMap) {
    return normalizeColorMap(colorMap, {
      normalizeColor: this.normalizeSingleColor.bind(this)
    });
  }

  normalizeSingleColor(colorValue) {
    return normalizeSingleColor(colorValue);
  }

  colorToHex(color) {
    return colorToHex(color, {
      normalizeColor: this.normalizeSingleColor.bind(this)
    });
  }

  colorToRgb(color) {
    return parseColorToRgb(color, {
      normalizeColor: this.normalizeSingleColor.bind(this),
      resolveComputedCssColorToRgb: this.resolveComputedCssColorToRgb.bind(this)
    });
  }

  colorWithAlpha(color, alpha = 1) {
    return colorWithAlpha(color, alpha, {
      colorToRgb: this.colorToRgb.bind(this)
    });
  }

  blendRgb(top, bottom, topAlpha = 1) {
    return blendRgb(top, bottom, topAlpha);
  }



  resolveComputedCssColorToRgb(color) {
    if (typeof color !== 'string' || typeof window === 'undefined' || typeof document === 'undefined') {
      return null;
    }

    const probe = document.createElement('span');
    probe.style.color = color;
    probe.style.position = 'absolute';
    probe.style.pointerEvents = 'none';
    probe.style.opacity = '0';

    const parent = this.isConnected ? this : document.body;
    if (!parent) return null;

    parent.appendChild(probe);
    const computed = window.getComputedStyle(probe).color;
    probe.remove();

    const match = computed.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
    if (!match) return null;

    return {
      r: Number(match[1]),
      g: Number(match[2]),
      b: Number(match[3])
    };
  }

  normalizeCombineStyle(styleValue) {
    return normalizeCombineStyle(styleValue);
  }

  normalizeEventColorMode(modeValue) {
    return normalizeEventColorMode(modeValue);
  }

  normalizeCombineBackground(backgroundValue) {
    return normalizeCombineBackground(backgroundValue, {
      colorToHex: this.colorToHex.bind(this)
    });
  }

  getEmptyAdvancedMatch() {
    return getEmptyAdvancedMatch();
  }

  normalizeEventMatchConditions(rawMatch) {
    return normalizeEventMatchConditions(rawMatch);
  }

  normalizeDayMatchConditions(rawMatch, localeOverride = null) {
    return normalizeDayMatchConditions(rawMatch, {
      normalizeDayOfWeekRule: this.normalizeDayOfWeekRule.bind(this),
      localeOverride
    });
  }

  normalizeAdvancedRuleMatch(rawMatch, defaultScope = 'event', localeOverride = null) {
    return normalizeAdvancedRuleMatch(rawMatch, {
      defaultScope,
      localeOverride,
      normalizeDayOfWeekRule: this.normalizeDayOfWeekRule.bind(this)
    });
  }

  normalizeEventStyles(rawRules) {
    if (!Array.isArray(rawRules)) return [];

    return rawRules
      .map((rule, index) => {
        if (!rule || typeof rule !== 'object') return null;

        const rawMatch = rule.match && typeof rule.match === 'object' ? rule.match : (rule.when && typeof rule.when === 'object' ? rule.when : null);
        const match = this.normalizeAdvancedRuleMatch(rawMatch, 'event');
        let style = null;
        if (typeof rule.style === 'string' && rule.style.trim().toLowerCase() === 'hide') {
          style = { hide: true };
        } else if (rule.style && typeof rule.style === 'object') {
          style = rule.style;
        }
        if (!match || !style) return null;

        const numericPriority = Number(rule.priority);
        const priority = Number.isFinite(numericPriority) ? numericPriority : 0;
        const normalizedStyle = this.normalizeEventStyleBlock(style);
        if (!Object.keys(normalizedStyle).length) return null;

        return {
          id: typeof rule.id === 'string' && rule.id.trim() ? rule.id.trim() : `event-style-${index + 1}`,
          type: 'event_style',
          priority,
          index,
          match,
          output: { style: normalizedStyle },
          style: normalizedStyle
        };
      })
      .filter(Boolean);
  }

  normalizeLegacyDayStyleMatch(rule, localeOverride = null) {
    return normalizeLegacyDayStyleMatch(rule, {
      localeOverride,
      normalizeDayOfWeekRule: this.normalizeDayOfWeekRule.bind(this),
      normalizeAdvancedRuleMatch: this.normalizeAdvancedRuleMatch.bind(this)
    });
  }

  normalizeDayStyles(rawRules, localeOverride = null) {
    if (!Array.isArray(rawRules)) return [];

    return rawRules
      .map((rule, index) => {
        if (!rule || typeof rule !== 'object') return null;

        const rawExplicitMatch = rule.match && typeof rule.match === 'object' ? rule.match : (rule.when && typeof rule.when === 'object' ? rule.when : null);
        const match = rawExplicitMatch
          ? this.normalizeAdvancedRuleMatch(rawExplicitMatch, 'day', localeOverride)
          : this.normalizeLegacyDayStyleMatch(rule, localeOverride);
        if (!match) return null;

        const numericPriority = Number(rule.priority);
        const priority = Number.isFinite(numericPriority) ? numericPriority : 0;

        const style = this.normalizeDayStyleBlock(rule.style && typeof rule.style === 'object' ? rule.style : rule);
        if (
          style.background === undefined &&
          style.opacity === undefined &&
          style.background_opacity === undefined &&
          style.border_color === undefined &&
          style.border_width === undefined
        ) return null;

        const normalized = {
          id: typeof rule.id === 'string' && rule.id.trim() ? rule.id.trim() : `day-style-${index + 1}`,
          type: 'day_style',
          priority,
          index,
          match,
          output: { style },
          style
        };

        // Backward-compatible mirrors used by older internal tests and helper paths.
        if (style.background !== undefined) normalized.background = style.background;
        if (style.opacity !== undefined) normalized.opacity = style.opacity;
        if (style.background_opacity !== undefined) normalized.background_opacity = style.background_opacity;
        if (style.border_color !== undefined) normalized.border_color = style.border_color;
        if (style.border_width !== undefined) normalized.border_width = style.border_width;
        const day = match.day || {};
        if (day.today !== undefined) normalized.condition = 'today';
        else if (day.past !== undefined) normalized.condition = 'past';
        else if (day.future !== undefined) normalized.condition = 'future';
        else if (day.weekend !== undefined) normalized.condition = 'weekend';
        else if (day.weekday !== undefined) normalized.condition = 'weekday';
        else if (day.day_of_week !== undefined) {
          normalized.condition = 'day_of_week';
          normalized.day_of_week = day.day_of_week;
        } else if (day.has_event !== undefined) normalized.condition = 'has_event';
        else if (day.no_event !== undefined) {
          normalized.condition = 'has_event';
          normalized.negate = true;
        }

        return normalized;
      })
      .filter(Boolean);
  }

  buildDayStyleRules(rawConfig = {}) {
    const rules = Array.isArray(rawConfig.day_styles) ? [...rawConfig.day_styles] : [];
    const todayStyle = this.buildTodayDayStyleRule(rawConfig);
    if (todayStyle) rules.push(todayStyle);
    return rules;
  }

  buildTodayDayStyleRule(rawConfig = {}) {
    const hasTodayBackgroundColor = rawConfig.today_background_color !== undefined && rawConfig.today_background_color !== null && rawConfig.today_background_color !== '';
    const hasTodayStyle = rawConfig.today_style && typeof rawConfig.today_style === 'object' && !Array.isArray(rawConfig.today_style);
    if (!hasTodayBackgroundColor && !hasTodayStyle) return null;

    const style = {
      ...(hasTodayBackgroundColor ? { background_color: rawConfig.today_background_color } : {}),
      ...(hasTodayStyle ? rawConfig.today_style : {})
    };

    return {
      condition: 'today',
      priority: 0,
      style
    };
  }

  normalizeDayStyleBlock(style = {}) {
    const normalized = {};
    const backgroundValue = style.background !== undefined ? style.background : (style.background_color !== undefined ? style.background_color : style.color);
    const normalizedBackground = String(backgroundValue || '').trim().toLowerCase() === 'auto'
      ? 'auto'
      : this.normalizeSingleColor(backgroundValue);
    if (normalizedBackground) normalized.background = normalizedBackground;

    const numericOpacity = Number(style.opacity);
    if (Number.isFinite(numericOpacity)) {
      normalized.opacity = Math.max(0, Math.min(1, numericOpacity));
    }

    const numericBackgroundOpacity = Number(style.background_opacity);
    if (Number.isFinite(numericBackgroundOpacity)) {
      normalized.background_opacity = Math.max(0, Math.min(1, numericBackgroundOpacity));
    }

    const normalizedBorderColor = this.normalizeSingleColor(style.border_color);
    if (normalizedBorderColor) normalized.border_color = normalizedBorderColor;

    const normalizedBorderWidth = this.normalizeStyleBorderWidth(style.border_width);
    if (normalizedBorderWidth) normalized.border_width = normalizedBorderWidth;

    return normalized;
  }



  normalizeDayBadgeBlock(rule = {}) {
    return normalizeDayBadgeBlock(rule, {
      normalizeEventTextValue: this.normalizeEventTextValue.bind(this),
      normalizeDayBadgeDisplayColor: this.normalizeDayBadgeDisplayColor.bind(this),
      normalizeStyleSizeValue: this.normalizeStyleSizeValue.bind(this)
    });
  }

  isFullValueTemplate(value) {
    return isFullValueTemplate(value);
  }

  normalizeDayBadgeDisplayColor(value) {
    return normalizeDayBadgeDisplayColor(value, {
      normalizeSingleColor: this.normalizeSingleColor.bind(this)
    });
  }

  normalizeResolvedDayBadgeDisplayColor(value) {
    return normalizeResolvedDayBadgeDisplayColor(value, {
      normalizeSingleColor: this.normalizeSingleColor.bind(this)
    });
  }

  parseEventDescriptionJson(event) {
    return parseEventDescriptionJson(event);
  }

  buildDayBadgeResolutionContext(date, matchedEvent) {
    return buildDayBadgeResolutionContext(date, matchedEvent, {
      formatLocalDate: this.formatLocalDate.bind(this)
    });
  }

  resolveSafePath(path, context) {
    return resolveSafePath(path, context);
  }

  resolveDayBadgeDisplayValue(value, context) {
    return resolveDayBadgeDisplayValue(value, context);
  }

  resolveDayBadgeForRender(rule, date, matchedEvent) {
    return resolveDayBadgeForRender(rule, date, matchedEvent, {
      formatLocalDate: this.formatLocalDate.bind(this),
      normalizeResolvedDayBadgeDisplayColor: this.normalizeResolvedDayBadgeDisplayColor.bind(this)
    });
  }

  normalizeDayBadgeConditions(rawConditions) {
    return normalizeDayBadgeConditions(rawConditions, {
      normalizeEventMatchConditions: this.normalizeEventMatchConditions.bind(this)
    });
  }

  normalizeDayBadges(rawRules) {
    return normalizeDayBadges(rawRules, {
      normalizeAdvancedRuleMatch: this.normalizeAdvancedRuleMatch.bind(this),
      normalizeDayBadgeBlock: this.normalizeDayBadgeBlock.bind(this)
    });
  }


  normalizeCssLength(value, { allowZero = false } = {}) {
    if (value === undefined || value === null || value === '') return null;

    if (typeof value === 'number' && Number.isFinite(value)) {
      if (allowZero) return `${Math.max(0, value)}px`;
      return value > 0 ? `${value}px` : null;
    }

    const trimmed = String(value).trim();
    if (!trimmed) return null;

    if (/^\d*\.?\d+(px|rem|em|%)$/i.test(trimmed)) {
      return trimmed;
    }

    const parsed = Number(trimmed);
    if (Number.isFinite(parsed) && (allowZero ? parsed >= 0 : parsed > 0)) {
      return `${parsed}px`;
    }

    return null;
  }

  normalizeStyleSizeValue(value) {
    return this.normalizeCssLength(value, { allowZero: false });
  }

  normalizeStyleBorderWidth(value) {
    return this.normalizeCssLength(value, { allowZero: true });
  }

  normalizeDayOfWeekRule(value, localeOverride = null) {
    const dayMap = new Map([
      ['sun', 0], ['sunday', 0], ['0', 0],
      ['mon', 1], ['monday', 1], ['1', 1],
      ['tue', 2], ['tues', 2], ['tuesday', 2], ['2', 2],
      ['wed', 3], ['weds', 3], ['wednesday', 3], ['3', 3],
      ['thu', 4], ['thur', 4], ['thurs', 4], ['thursday', 4], ['4', 4],
      ['fri', 5], ['friday', 5], ['5', 5],
      ['sat', 6], ['saturday', 6], ['6', 6]
    ]);
    this.getLocalizedWeekdayMap(localeOverride).forEach((dayIndexes, token) => {
      if (!dayMap.has(token)) {
        dayMap.set(token, dayIndexes.length === 1 ? dayIndexes[0] : dayIndexes);
      }
    });

    const values = Array.isArray(value) ? value : [value];
    const normalizedDays = [];

    values.forEach((entry) => {
      if (entry === undefined || entry === null || entry === '') return;

      if (typeof entry === 'number' && Number.isInteger(entry) && entry >= 0 && entry <= 6) {
        normalizedDays.push(entry);
        return;
      }

      const normalizedEntry = String(entry).trim().toLowerCase();
      if (!normalizedEntry) return;
      if (dayMap.has(normalizedEntry)) {
        const mappedValue = dayMap.get(normalizedEntry);
        if (Array.isArray(mappedValue)) {
          normalizedDays.push(...mappedValue);
        } else {
          normalizedDays.push(mappedValue);
        }
      }
    });

    return Array.from(new Set(normalizedDays));
  }

  getLocalizedWeekdayMap(localeOverride = null) {
    const locale = resolveLanguage(localeOverride || this.getLocale());
    const cacheKey = locale || 'default';
    if (!this._localizedWeekdayMapCache) this._localizedWeekdayMapCache = new Map();
    if (this._localizedWeekdayMapCache.has(cacheKey)) return this._localizedWeekdayMapCache.get(cacheKey);

    const map = new Map();
    const formats = ['long', 'short', 'narrow'];
    const anchorSunday = new Date(Date.UTC(2024, 0, 7)); // Sunday

    formats.forEach((weekdayFormat) => {
      for (let dayIndex = 0; dayIndex < 7; dayIndex += 1) {
        const date = new Date(anchorSunday);
        date.setUTCDate(anchorSunday.getUTCDate() + dayIndex);
        const localizedName = new Intl.DateTimeFormat(locale, { weekday: weekdayFormat, timeZone: 'UTC' }).format(date);
        const normalizedName = String(localizedName || '').trim().toLowerCase();
        if (!normalizedName) continue;
        if (!map.has(normalizedName)) {
          map.set(normalizedName, [dayIndex]);
          continue;
        }
        const existingDayIndexes = map.get(normalizedName);
        if (!existingDayIndexes.includes(dayIndex)) existingDayIndexes.push(dayIndex);
      }
    });

    this._localizedWeekdayMapCache.set(cacheKey, map);
    return map;
  }

  normalizeEventStyleBlock(style = {}) {
    const normalized = {};
    const setIfDefined = (key, value) => {
      if (value !== undefined && value !== null && value !== '') {
        normalized[key] = value;
      }
    };

    const normalizedBackground = this.normalizeSingleColor(style.background_color ?? style.color);
    if (normalizedBackground) normalized.background_color = normalizedBackground;

    const normalizedFontColor = this.normalizeSingleColor(style.event_font_color ?? style.font_color);
    if (normalizedFontColor) normalized.event_font_color = normalizedFontColor;

    const normalizedOpacity = this.normalizeEventStyleOpacity(style.opacity);
    if (normalizedOpacity !== null) normalized.opacity = normalizedOpacity;

    const normalizedFilter = this.normalizeEventStyleFilter(style.filter);
    if (normalizedFilter !== null) normalized.filter = normalizedFilter;

    if (typeof style.display_title === 'string') {
      const displayTitle = this.normalizeEventTextValue(style.display_title);
      if (displayTitle) normalized.display_title = displayTitle;
    }

    setIfDefined('event_font_size', style.event_font_size);
    setIfDefined('event_time_font_size', style.event_time_font_size);
    setIfDefined('event_location_font_size', style.event_location_font_size);

    const icon = this.normalizeEventIconName(style.icon);
    if (icon) normalized.icon = icon;
    const iconColor = this.normalizeEventIconColor(style.icon_color);
    if (iconColor) normalized.icon_color = iconColor;
    const iconSize = this.normalizeStyleSizeValue(style.icon_size);
    if (iconSize) normalized.icon_size = iconSize;
    const iconPosition = this.normalizeEventIconPosition(style.icon_position);
    if (iconPosition) normalized.icon_position = iconPosition;

    const showEventLocation = this.normalizeBooleanStyleValue(style.show_event_location);
    if (showEventLocation !== null) normalized.show_event_location = showEventLocation;
    const useShortLocation = this.normalizeBooleanStyleValue(style.use_short_location);
    if (useShortLocation !== null) normalized.use_short_location = useShortLocation;
    const hideTime = this.normalizeBooleanStyleValue(style.hide_time);
    if (hideTime !== null) normalized.hide_time = hideTime;
    const showTime = this.normalizeBooleanStyleValue(style.show_time);
    if (showTime !== null) normalized.show_time = showTime;
    const hideCalendarBubble = this.normalizeBooleanStyleValue(style.hide_event_calendar_bubble);
    if (hideCalendarBubble !== null) normalized.hide_event_calendar_bubble = hideCalendarBubble;
    const hideEvent = this.normalizeBooleanStyleValue(style.hide);
    if (hideEvent !== null) normalized.hide = hideEvent;
    if (style.event_title_prefix !== undefined) normalized.event_title_prefix = this.normalizeEventTitlePrefixMode(style.event_title_prefix);

    return normalized;
  }

  normalizeEventIconName(iconValue) {
    const normalized = this.normalizeEventTextValue(iconValue);
    if (!normalized) return null;
    if (!/^mdi:[a-z0-9]+(?:-[a-z0-9]+)*$/.test(normalized)) return null;
    return normalized;
  }

  normalizeEventIconColor(colorValue) {
    if (colorValue === undefined || colorValue === null) return null;
    const normalized = this.normalizeSingleColor(colorValue);
    const trimmed = String(normalized || '').trim();
    if (!trimmed) return null;
    if (/[;{}<>\"']/.test(trimmed)) return null;
    return trimmed;
  }

  normalizeEventIconPosition(positionValue) {
    const normalized = String(positionValue || '').trim().toLowerCase();
    if (!normalized) return null;
    if (normalized === 'before_title' || normalized === 'corner') return normalized;
    return null;
  }

  normalizeEventStyleOpacity(opacityValue) {
    if (opacityValue === undefined || opacityValue === null || opacityValue === '') return null;
    const numericOpacity = Number(opacityValue);
    if (!Number.isFinite(numericOpacity)) return null;
    return Math.max(0, Math.min(1, numericOpacity));
  }

  normalizeEventStyleFilter(filterValue) {
    if (filterValue === undefined || filterValue === null) return null;
    const normalized = String(filterValue).trim();
    if (!normalized) return null;
    if (/[;{}<>\"']/.test(normalized)) return null;
    return normalized;
  }

  getRuleMatcherHelpers() {
    return {
      getEventCalendarMatchTokens: this.getEventCalendarMatchTokens.bind(this),
      getEventDateTimeInfo: this.getEventDateTimeInfo.bind(this),
      isPastEvent: this.isPastEvent.bind(this),
      normalizeEventTextValue: this.normalizeEventTextValue.bind(this)
    };
  }

  eventMatchesRule(event, match) {
    const normalizedMatch = this.normalizeEventMatchConditions(match);
    return this.eventMatchesNormalizedRule(event, normalizedMatch);
  }

  eventMatchesNormalizedRule(event, match) {
    return eventMatchesNormalizedRule(event, match, this.getRuleMatcherHelpers());
  }


  getEventCalendarMatchTokens(event) {
    const tokens = [];
    const entityIds = new Set();

    if (event?.entityId) entityIds.add(event.entityId);
    if (Array.isArray(event?.sourceEntityIds)) {
      event.sourceEntityIds.forEach((entityId) => entityId && entityIds.add(entityId));
    } else if (Array.isArray(event?.sourceCalendars)) {
      event.sourceCalendars.forEach((calendar) => calendar?.entityId && entityIds.add(calendar.entityId));
    }

    entityIds.forEach((entityId) => {
      tokens.push(entityId);
      tokens.push(this.getCalendarName(entityId));
      const virtualCalendar = this.getVirtualBadgeForEntity(entityId);
      if (virtualCalendar) {
        tokens.push(`virtual:${virtualCalendar.id}`);
        tokens.push(virtualCalendar.id);
        tokens.push(virtualCalendar.name);
      }
    });

    return Array.from(new Set(tokens.filter(Boolean)));
  }

  eventFieldMatches(event, field, condition) {
    return eventFieldMatches(event, field, condition, this.getRuleMatcherHelpers());
  }

  matchPrimitiveCondition(value, condition) {
    return matchPrimitiveCondition(value, condition);
  }

  parseRegexCondition(value) {
    return parseRegexCondition(value);
  }

  matchTextCondition(value, condition) {
    return matchTextCondition(value, condition, this.getRuleMatcherHelpers());
  }

  findMatchingEventForCondition(condition, dayEvents = []) {
    return findMatchingEventForCondition(condition, dayEvents, this.getRuleMatcherHelpers());
  }

  dateMatchesDayCondition(date, conditionName, conditionValue, context = {}) {
    return dateMatchesDayCondition(date, conditionName, conditionValue, context);
  }

  dayMatchesNormalizedRule(dayMatch, context = {}) {
    return dayMatchesNormalizedRule(dayMatch, context, this.getRuleMatcherHelpers());
  }

  matchesAdvancedRule(ruleOrMatch, context = {}) {
    return matchesAdvancedRule(ruleOrMatch, context, this.getRuleMatcherHelpers());
  }

  findMatchingDayStyleEvent(rule, dayEvents) {
    return this.matchesAdvancedRule(rule, { dayEvents }).matchedEvent;
  }

  getDayStyleConfig(date, dayEvents, isToday) {
    const rules = Array.isArray(this._config?.day_styles) ? this._config.day_styles : [];
    if (!rules.length) return null;

    const candidates = {};

    const applyCandidate = (key, value, rule) => {
      if (value === undefined || value === null) return;
      const candidatePriority = Number.isFinite(rule.priority) ? rule.priority : 0;
      const existing = candidates[key];
      if (!existing || candidatePriority > existing.priority || (candidatePriority === existing.priority && rule.index < existing.ruleIndex)) {
        candidates[key] = { value, priority: candidatePriority, ruleIndex: rule.index };
      }
    };

    rules.forEach((rule) => {
      const result = this.matchesAdvancedRule(rule, { date, dayEvents, isToday });
      if (!result.matches) return;

      const dayStyle = rule.output?.style || rule.style || {};
      if (dayStyle.background) {
        if (dayStyle.background === 'auto' && result.matchedEvent?.color) {
          applyCandidate('background', result.matchedEvent.color, rule);
        } else if (dayStyle.background !== 'auto') {
          applyCandidate('background', dayStyle.background, rule);
        }
      }

      applyCandidate('opacity', dayStyle.opacity, rule);
      applyCandidate('background_opacity', dayStyle.background_opacity, rule);
      applyCandidate('border_color', dayStyle.border_color, rule);
      applyCandidate('border_width', dayStyle.border_width, rule);
    });

    const background = candidates.background?.value ?? null;
    const opacity = candidates.opacity?.value ?? null;
    const backgroundOpacity = candidates.background_opacity?.value ?? null;
    const borderColor = candidates.border_color?.value ?? null;
    const borderWidth = candidates.border_width?.value ?? null;

    if (!background && opacity === null && backgroundOpacity === null && !borderColor && !borderWidth) return null;
    return {
      background,
      opacity,
      background_opacity: backgroundOpacity,
      border_color: borderColor,
      border_width: borderWidth
    };
  }

  getDayStyleAttributes(date, dayEvents, isToday) {
    const dayStyle = this.getDayStyleConfig(date, dayEvents, isToday);
    if (!dayStyle) return { className: '', style: '' };

    const styles = [];
    if (dayStyle.background) {
      const backgroundColor = dayStyle.background_opacity !== null
        ? this.colorWithAlpha(dayStyle.background, dayStyle.background_opacity)
        : dayStyle.background;
      styles.push(`--day-conditional-background: ${dayStyle.background}`);
      styles.push(`background: ${backgroundColor} !important`);
    }
    if (dayStyle.opacity !== null) {
      styles.push(`--day-conditional-opacity: ${dayStyle.opacity}`);
      styles.push(`opacity: ${dayStyle.opacity}`);
    }

    if (dayStyle.border_color || dayStyle.border_width) {
      const borderWidth = dayStyle.border_width || '2px';
      const borderColor = dayStyle.border_color || 'var(--divider-color, #d1d5db)';
      styles.push(`--day-style-border-width: ${borderWidth}`);
      styles.push(`--day-style-border-color: ${borderColor}`);
    }
    const classNames = ['day-style-rule'];
    if (dayStyle.background) classNames.push('day-style-has-background');
    if (dayStyle.border_color || dayStyle.border_width) classNames.push('day-style-has-border');

    return {
      className: classNames.join(' '),
      style: styles.join('; ')
    };
  }


  normalizeVirtualCalendars(virtualCalendars) {
    return normalizeVirtualCalendars(virtualCalendars, {
      normalizeSingleColor: this.normalizeSingleColor.bind(this)
    });
  }

  getVirtualBadgeById(virtualId) {
    return getVirtualBadgeById(this._config.virtual_calendars || [], virtualId);
  }

  getVirtualBadgeForEntity(entityId) {
    return getVirtualBadgeForEntity(this._config.virtual_calendars || [], entityId);
  }

  getVirtualBadgeForEvent(event) {
    return getVirtualBadgeForEvent(this._config.virtual_calendars || [], event);
  }

  getVirtualBadgeItems() {
    return getVirtualBadgeItems({
      entities: this._config.entities,
      virtualCalendars: this._config.virtual_calendars || [],
      hideBadgeCalendars: this._config.hide_badge_calendars || [],
      hiddenCalendars: this._hiddenCalendars,
      getCalendarColor: this.getCalendarColor.bind(this),
      getCalendarName: this.getCalendarName.bind(this),
      getCalendarBadgeIcon: this.getCalendarBadgeIcon.bind(this)
    });
  }

  getWritableCalendars() {
    return getWritableCalendars(this._config.entities, this._calendarCapabilities);
  }

  getEventIdentityKey(entityId, event) {
    return getEventIdentityKey(entityId, event);
  }

  async fetchEventsInRange(startDate, endDate) {
    const resultsByCalendar = await this.fetchEventsByCalendarInRange(startDate, endDate);
    if (Object.values(resultsByCalendar).some(result => !result?.success)) return null;
    return Object.values(resultsByCalendar).flatMap(result => result.events || []);
  }

  async fetchEventsByCalendarInRange(startDate, endDate) {
    return fetchEventsByCalendarInRange({
      hass: this._hass,
      entities: this._config.entities,
      startDate,
      endDate,
      getDateRangeChunks: this.getDateRangeChunks.bind(this),
      formatLocalDate: this.formatLocalDate.bind(this),
      getCalendarColor: this.getCalendarColor.bind(this),
      getEventIdentityKey: this.getEventIdentityKey.bind(this),
      normalizeCalendarEvent
    });
  }

  getCalendarColor(entityId, index = 0) {
    return getCalendarColor(entityId, index, {
      colors: this._config?.colors || {},
      getDefaultColor: this.getDefaultColor.bind(this),
      normalizeSingleColor: this.normalizeSingleColor.bind(this)
    });
  }

  async fetchEventsForCalendar(entityId, colorIndex, chunks) {
    return fetchEventsForCalendar({
      hass: this._hass,
      entityId,
      colorIndex,
      chunks,
      formatLocalDate: this.formatLocalDate.bind(this),
      getCalendarColor: this.getCalendarColor.bind(this),
      getEventIdentityKey: this.getEventIdentityKey.bind(this),
      normalizeCalendarEvent
    });
  }

  async fetchEventsForChunk(entityId, chunk) {
    return fetchEventsForChunk({
      hass: this._hass,
      entityId,
      chunk,
      formatLocalDate: this.formatLocalDate.bind(this)
    });
  }

  async fetchEventsViaWebSocket(entityId, chunkStartStr, chunkEndStr) {
    return fetchEventsViaWebSocket({
      hass: this._hass,
      entityId,
      chunkStartStr,
      chunkEndStr
    });
  }

  mergeEvents(existingEvents, incomingEvents) {
    return mergeEvents(existingEvents, incomingEvents, {
      getEventIdentityKey: this.getEventIdentityKey.bind(this),
      getEventStartDate: this.getEventStartDate.bind(this)
    });
  }

  toStableString(value) {
    return toStableString(value);
  }

  getCalendarDataSignature(events = []) {
    return getCalendarDataSignature(events);
  }

  getEventCacheUserScope() {
    return this._hass?.user?.id || this._hass?.user?.name || this._hass?.auth?.data?.user?.id || null;
  }

  getEventCacheConfigSignature() {
    const userScope = this.getEventCacheUserScope();
    if (!userScope) return null;
    return buildEventCacheConfigSignature({
      entities: this._config?.entities || [],
      timeZone: this.getConfiguredTimeZone(),
      colors: this._config?.colors || {},
      userScope
    });
  }

  getValidRange(startDate, endDate) {
    const start = startDate instanceof Date ? startDate : new Date(startDate);
    const end = endDate instanceof Date ? endDate : new Date(endDate);
    if (!Number.isFinite(start.getTime()) || !Number.isFinite(end.getTime()) || start > end) return null;
    return { startDate: start, endDate: end };
  }

  unionEventRanges(existingRange, incomingRange) {
    const existing = this.getValidRange(existingRange?.startDate, existingRange?.endDate);
    const incoming = this.getValidRange(incomingRange?.startDate, incomingRange?.endDate);
    if (!existing) return incoming;
    if (!incoming) return existing;
    if (incoming.endDate < existing.startDate || incoming.startDate > existing.endDate) {
      const disjointRanges = [
        ...(Array.isArray(existingRange?.disjointRanges) ? existingRange.disjointRanges : [existing]),
        incoming
      ].map(range => ({
        startDate: new Date(range.startDate),
        endDate: new Date(range.endDate)
      }));
      return { ...existing, disjointRanges };
    }
    return {
      startDate: new Date(Math.min(existing.startDate.getTime(), incoming.startDate.getTime())),
      endDate: new Date(Math.max(existing.endDate.getTime(), incoming.endDate.getTime()))
    };
  }

  doEventRangesOverlap(event, range) {
    const validRange = this.getValidRange(range?.startDate, range?.endDate);
    if (!validRange) return false;
    const eventStart = this.getEventStartDate(event);
    const eventEnd = this.getEventEndDate(event);
    if (!Number.isFinite(eventStart.getTime()) || !Number.isFinite(eventEnd.getTime())) return false;
    return eventEnd > validRange.startDate && eventStart < validRange.endDate;
  }

  isEventContainedInRange(event, range) {
    const validRange = this.getValidRange(range?.startDate, range?.endDate);
    if (!validRange) return false;
    const eventStart = this.getEventStartDate(event);
    const eventEnd = this.getEventEndDate(event);
    if (!Number.isFinite(eventStart.getTime()) || !Number.isFinite(eventEnd.getTime())) return false;
    return eventStart >= validRange.startDate && eventEnd <= validRange.endDate;
  }

  getEventLogicalIdentityKey(entityId, event) {
    return this.getEventIdentityKey(entityId, event);
  }

  getStableEventIdentityKey(entityId, event) {
    if (!event?.uid) return null;
    const recurrenceId = event.recurrence_id || event.recurring_event_id;
    if (recurrenceId) return `${entityId}|${event.uid}|${recurrenceId}`;
    return null;
  }

  reconcileEventsForFetchedRange(existingEvents = [], incomingEvents = [], fetchedRange = null) {
    const range = this.getValidRange(fetchedRange?.startDate, fetchedRange?.endDate);
    if (!range) return this.mergeEvents(existingEvents, incomingEvents);
    const incomingStableKeys = new Set(
      (incomingEvents || [])
        .map(event => this.getStableEventIdentityKey(event.entityId, event))
        .filter(Boolean)
    );
    const retainedExisting = (existingEvents || []).filter((event) => {
      const stableKey = this.getStableEventIdentityKey(event.entityId, event);
      if (stableKey && incomingStableKeys.has(stableKey)) return false;
      return !this.doEventRangesOverlap(event, range);
    });
    return this.mergeEvents(retainedExisting, incomingEvents);
  }

  recomputeLoadedEventRange() {
    const ranges = (this._config.entities || []).map((entityId) => {
      const range = this._calendarEventMetadata[entityId]?.range;
      return this.getValidRange(range?.startDate, range?.endDate);
    });
    if (ranges.length === 0 || ranges.some(range => !range)) {
      this._loadedEventRange = null;
      return;
    }
    const startDate = new Date(Math.max(...ranges.map(range => range.startDate.getTime())));
    const endDate = new Date(Math.min(...ranges.map(range => range.endDate.getTime())));
    this._loadedEventRange = startDate <= endDate ? { startDate, endDate } : null;
  }

  recomputeLastSuccessfulEventRefresh() {
    const refreshTimes = (this._config.entities || [])
      .map(entityId => this._calendarEventMetadata[entityId]?.lastSuccessfulRefresh)
      .filter(Number.isFinite);
    this._lastSuccessfulEventRefresh = refreshTimes.length ? Math.min(...refreshTimes) : null;
  }

  recomputeEventRefreshFailure() {
    this._lastEventRefreshFailed = (this._config.entities || [])
      .some(entityId => this._calendarEventMetadata[entityId]?.refreshFailed);
  }

  recomputeEventState() {
    this._events = sortEventsByStartDate(Object.values(this._eventsByCalendar).flat(), {
      getEventStartDate: this.getEventStartDate.bind(this)
    });
    this.recomputeLoadedEventRange();
    this.recomputeLastSuccessfulEventRefresh();
    this.recomputeEventRefreshFailure();
    this.scheduleEventRefreshWarningTimer();
  }

  applyEventsByCalendar(eventsByCalendar = {}, { startDate, endDate, lastSuccessfulRefresh = null, successfulEntityIds = null, failedEntityIds = [], source = 'network', requestId = null, coverageMode = 'replace', perCalendarMetadata = {} } = {}) {
    const range = this.getValidRange(startDate, endDate);
    const successfulSet = successfulEntityIds ? new Set(successfulEntityIds) : new Set(this._config.entities || []);
    const failedSet = new Set(failedEntityIds || []);
    (this._config.entities || []).forEach((entityId) => {
      const existingMetadata = this._calendarEventMetadata[entityId] || {};
      if (!successfulSet.has(entityId)) {
        const isFailure = failedSet.has(entityId);
        this._calendarEventMetadata[entityId] = {
          ...existingMetadata,
          lastSuccessfulRefresh: existingMetadata.lastSuccessfulRefresh,
          refreshFailed: isFailure || existingMetadata.refreshFailed,
          firstFailureAt: isFailure ? (existingMetadata.firstFailureAt ?? Date.now()) : existingMetadata.firstFailureAt,
          lastNetworkFailureRequest: isFailure && source === 'network' ? requestId : existingMetadata.lastNetworkFailureRequest
        };
        return;
      }
      const hasNewerNetworkSuccess = existingMetadata.lastNetworkSuccessRequest && existingMetadata.lastNetworkSuccessRequest > requestId;
      if (source === 'cache' && hasNewerNetworkSuccess) return;
      const hasNewerNetworkFailure = source === 'cache' && existingMetadata.lastNetworkFailureRequest && existingMetadata.lastNetworkFailureRequest > requestId;
      const events = Array.isArray(eventsByCalendar[entityId]) ? eventsByCalendar[entityId] : [];
      this._eventsByCalendar[entityId] = events;
      this._calendarDataSignatures[entityId] = this.getCalendarDataSignature(events);
      const cachedMetadata = perCalendarMetadata?.[entityId] || {};
      const cachedRange = this.getValidRange(cachedMetadata.range?.startDate, cachedMetadata.range?.endDate);
      const effectiveRange = source === 'cache' && cachedRange ? cachedRange : range;
      const effectiveLastSuccessfulRefresh = source === 'cache' && Number.isFinite(cachedMetadata.lastSuccessfulRefresh)
        ? cachedMetadata.lastSuccessfulRefresh
        : lastSuccessfulRefresh;
      const nextRange = coverageMode === 'union'
        ? this.unionEventRanges(existingMetadata.range, effectiveRange)
        : (effectiveRange || existingMetadata.range || null);
      this._calendarEventMetadata[entityId] = {
        ...existingMetadata,
        range: nextRange,
        lastSuccessfulRefresh: Number.isFinite(effectiveLastSuccessfulRefresh) ? effectiveLastSuccessfulRefresh : existingMetadata.lastSuccessfulRefresh,
        refreshFailed: hasNewerNetworkFailure ? existingMetadata.refreshFailed : false,
        firstFailureAt: hasNewerNetworkFailure ? existingMetadata.firstFailureAt : null,
        lastNetworkSuccessRequest: source === 'network' ? requestId : existingMetadata.lastNetworkSuccessRequest
      };
    });
    this.recomputeEventState();
  }

  async loadEventCacheForCurrentConfig() {
    const generation = ++this._eventCacheGeneration;
    const requestId = this._eventFetchGeneration;
    const configSignature = this.getEventCacheConfigSignature();
    if (!configSignature) return;
    this._eventCacheLoadInFlight = true;
    const { available, snapshot } = await readEventCacheSnapshot(configSignature).finally(() => {
      if (generation === this._eventCacheGeneration) this._eventCacheLoadInFlight = false;
    });
    if (generation !== this._eventCacheGeneration || !available || !snapshot) return;
    const hydratable = this.getHydratableEventCacheSnapshotData(snapshot, requestId);
    if (hydratable.successfulEntityIds.length === 0) return;
    this._eventCacheHydrated = true;
    this.applyEventsByCalendar(hydratable.eventsByCalendar, {
      startDate: new Date(snapshot.coveredRange.start),
      endDate: new Date(snapshot.coveredRange.end),
      lastSuccessfulRefresh: snapshot.lastSuccessfulRefresh,
      successfulEntityIds: hydratable.successfulEntityIds,
      source: 'cache',
      requestId,
      perCalendarMetadata: hydratable.perCalendarMetadata
    });
    this.render();
  }

  getHydratableEventCacheSnapshotData(snapshot, requestId = this._eventFetchGeneration) {
    const cacheEventsByCalendar = {};
    const cacheMetadataByCalendar = {};
    const successfulEntityIds = [];
    (this._config.entities || []).forEach((entityId) => {
      const metadata = this._calendarEventMetadata[entityId] || {};
      if (metadata.lastNetworkSuccessRequest && metadata.lastNetworkSuccessRequest > requestId) return;
      if (!Object.prototype.hasOwnProperty.call(snapshot.perCalendarMetadata || {}, entityId)) return;
      if (!Object.prototype.hasOwnProperty.call(snapshot.eventsByCalendar || {}, entityId)) return;
      if (!Array.isArray(snapshot.eventsByCalendar[entityId])) return;
      const cachedMetadata = snapshot.perCalendarMetadata[entityId] || {};
      const cachedRange = this.getValidRange(cachedMetadata.range?.startDate, cachedMetadata.range?.endDate);
      const cachedLastSuccessfulRefresh = cachedMetadata.lastSuccessfulRefresh;
      if (!cachedRange || !Number.isFinite(cachedLastSuccessfulRefresh)) return;
      const existingRange = this.getValidRange(metadata.range?.startDate, metadata.range?.endDate);
      if (existingRange
        && Number.isFinite(metadata.lastSuccessfulRefresh)
        && metadata.lastSuccessfulRefresh >= cachedLastSuccessfulRefresh) return;
      cacheEventsByCalendar[entityId] = snapshot.eventsByCalendar[entityId];
      cacheMetadataByCalendar[entityId] = {
        range: cachedRange,
        lastSuccessfulRefresh: cachedLastSuccessfulRefresh
      };
      successfulEntityIds.push(entityId);
    });
    return {
      eventsByCalendar: cacheEventsByCalendar,
      perCalendarMetadata: cacheMetadataByCalendar,
      successfulEntityIds
    };
  }

  getEventCacheRetentionAnchorRange() {
    if (this._viewMode === 'agenda') {
      const agendaVisibleRange = this.getValidRange(this._agendaVisibleStartDate, this._agendaVisibleEndDate);
      if (agendaVisibleRange && this.isAgendaRangeWithinCurrentWindow(agendaVisibleRange)) return agendaVisibleRange;
      const agendaWindowRange = this.getValidRange(this._agendaStartDate, this._agendaEndDate);
      if (agendaWindowRange) return agendaWindowRange;
      const fallbackStart = new Date(this._currentDate || Date.now());
      fallbackStart.setHours(0, 0, 0, 0);
      const fallbackEnd = new Date(fallbackStart);
      fallbackEnd.setDate(fallbackEnd.getDate() + 14);
      fallbackEnd.setHours(23, 59, 59, 999);
      return this.getValidRange(fallbackStart, fallbackEnd);
    }
    const visibleRange = this.getVisibleDateRange?.();
    return this.getValidRange(visibleRange?.startDate, visibleRange?.endDate) ||
      this.getValidRange(this._loadedEventRange?.startDate, this._loadedEventRange?.endDate);
  }

  setAgendaNavigationViewportAnchor(startDate = this._agendaStartDate) {
    const agendaWindowRange = this.getValidRange(this._agendaStartDate, this._agendaEndDate);
    const anchorStart = new Date(startDate || this._agendaStartDate || Date.now());
    anchorStart.setHours(0, 0, 0, 0);
    const viewportDays = Math.max(1, Number(this.getAgendaViewportDayCapacity?.() || 14));
    const anchorEnd = new Date(anchorStart);
    anchorEnd.setDate(anchorEnd.getDate() + viewportDays);
    anchorEnd.setHours(23, 59, 59, 999);
    if (agendaWindowRange) {
      const clampedStart = new Date(Math.max(anchorStart.getTime(), agendaWindowRange.startDate.getTime()));
      const clampedEnd = new Date(Math.min(anchorEnd.getTime(), agendaWindowRange.endDate.getTime()));
      this._agendaVisibleStartDate = clampedStart;
      this._agendaVisibleEndDate = clampedEnd >= clampedStart ? clampedEnd : new Date(clampedStart);
      return;
    }
    this._agendaVisibleStartDate = anchorStart;
    this._agendaVisibleEndDate = anchorEnd;
  }

  getEventCacheRetainedRange() {
    const validRange = this.getEventCacheRetentionAnchorRange();
    if (!validRange) return null;
    const maxSpanMs = MAX_PERSISTED_EVENT_CACHE_SPAN_DAYS * 24 * 60 * 60 * 1000;
    const rangeSpanMs = validRange.endDate.getTime() - validRange.startDate.getTime();
    const center = validRange.startDate.getTime() + Math.max(0, rangeSpanMs) / 2;
    const retainedStart = new Date(center - maxSpanMs / 2);
    const retainedEnd = new Date(center + maxSpanMs / 2);
    return { startDate: retainedStart, endDate: retainedEnd };
  }

  getPrunedEventsByCalendarForCache(eventsByCalendar = {}, range = this.getEventCacheRetainedRange()) {
    const retainedRange = this.getValidRange(range?.startDate, range?.endDate);
    if (!retainedRange) return eventsByCalendar;
    const pruned = {};
    Object.entries(eventsByCalendar || {}).forEach(([entityId, events]) => {
      pruned[entityId] = (Array.isArray(events) ? events : []).filter((event) => {
        const eventStart = this.getEventStartDate(event);
        const eventEnd = this.getEventEndDate(event);
        const safeEnd = Number.isFinite(eventEnd.getTime()) ? eventEnd : eventStart;
        return eventStart <= retainedRange.endDate && safeEnd >= retainedRange.startDate;
      });
    });
    return pruned;
  }

  getPrunedEventMetadataForCache(retainedRange = this.getEventCacheRetainedRange()) {
    const range = this.getValidRange(retainedRange?.startDate, retainedRange?.endDate);
    if (!range) return { perCalendarMetadata: {}, coveredRange: null };
    const perCalendarMetadata = {};
    let hasRetainedCalendar = false;
    (this._config.entities || []).forEach((entityId) => {
      const metadata = this._calendarEventMetadata[entityId] || {};
      const metadataRange = this.getValidRange(metadata.range?.startDate, metadata.range?.endDate);
      if (!metadataRange || !Number.isFinite(metadata.lastSuccessfulRefresh)) return;
      const clippedStart = new Date(Math.max(metadataRange.startDate.getTime(), range.startDate.getTime()));
      const clippedEnd = new Date(Math.min(metadataRange.endDate.getTime(), range.endDate.getTime()));
      if (clippedStart > clippedEnd) return;
      const clippedRange = { startDate: clippedStart, endDate: clippedEnd };
      perCalendarMetadata[entityId] = {
        ...metadata,
        range: clippedRange,
        lastSuccessfulRefresh: metadata.lastSuccessfulRefresh,
        refreshFailed: false,
        firstFailureAt: null
      };
      hasRetainedCalendar = true;
    });
    if (!hasRetainedCalendar) return { perCalendarMetadata, coveredRange: null };
    return {
      perCalendarMetadata,
      coveredRange: range
    };
  }

  async persistEventCacheSnapshot({ generation = this._eventWriteGeneration } = {}) {
    if (generation !== this._eventWriteGeneration) return false;
    const configSignature = this.getEventCacheConfigSignature();
    if (!configSignature) return false;
    const cacheEpoch = getEventCacheMutationEpoch();
    const retainedRange = this.getEventCacheRetainedRange();
    const { perCalendarMetadata, coveredRange } = this.getPrunedEventMetadataForCache(retainedRange);
    if (!coveredRange || !Number.isFinite(this._lastSuccessfulEventRefresh)) return false;
    const persistedEventsByCalendar = {};
    Object.keys(perCalendarMetadata).forEach((entityId) => {
      if (Object.prototype.hasOwnProperty.call(this._eventsByCalendar, entityId)) {
        persistedEventsByCalendar[entityId] = this.getPrunedEventsByCalendarForCache({ [entityId]: this._eventsByCalendar[entityId] }, retainedRange)[entityId] || [];
      }
    });
    const snapshot = createEventCacheSnapshot({
      configSignature,
      startDate: coveredRange.startDate,
      endDate: coveredRange.endDate,
      eventsByCalendar: persistedEventsByCalendar,
      lastSuccessfulRefresh: this._lastSuccessfulEventRefresh,
      perCalendarMetadata
    });
    if (!snapshot || generation !== this._eventWriteGeneration) return false;
    return writeEventCacheSnapshot(snapshot, { epoch: cacheEpoch });
  }

  async flushEventCache({ refresh = true } = {}) {
    this._eventCacheGeneration += 1;
    this._eventFetchGeneration += 1;
    this._eventWriteGeneration += 1;
    this._pendingEventRenderAfterCurrentFetch = false;
    const clearEpoch = beginEventCacheFlush();
    const cleared = await clearAllEventCacheSnapshots({ epoch: clearEpoch });
    this._eventCacheGeneration += 1;
    this._eventCacheHydrated = false;
    this._eventsByCalendar = {};
    this._events = [];
    this._loadedEventRange = null;
    this._calendarDataSignatures = {};
    this._calendarEventMetadata = {};
    this._lastSuccessfulEventRefresh = null;
    this._lastEventRefreshFailed = false;
    this.clearEventRefreshWarningTimer();
    this.render();
    if (refresh && this._hass) {
      if (this._fetching) {
        this._pendingEventRefreshAfterCurrentFetch = true;
      } else {
        await this.ensureEventsForCurrentRange({ force: true });
      }
    }
    return cleared;
  }

  getOldestFailedEventRefreshTime() {
    const failedTimes = (this._config.entities || [])
      .map(entityId => this._calendarEventMetadata[entityId])
      .filter(metadata => metadata?.refreshFailed && (Number.isFinite(metadata.lastSuccessfulRefresh) || Number.isFinite(metadata.firstFailureAt)))
      .map(metadata => Number.isFinite(metadata.lastSuccessfulRefresh) ? metadata.lastSuccessfulRefresh : metadata.firstFailureAt);
    return failedTimes.length ? Math.min(...failedTimes) : null;
  }

  clearEventRefreshWarningTimer() {
    if (this._eventRefreshWarningTimer) clearTimeout(this._eventRefreshWarningTimer);
    this._eventRefreshWarningTimer = null;
  }

  scheduleEventRefreshWarningTimer() {
    this.clearEventRefreshWarningTimer();
    const oldestFailedRefresh = this.getOldestFailedEventRefreshTime();
    if (!Number.isFinite(oldestFailedRefresh)) return;
    const delay = Math.max(0, oldestFailedRefresh + 30 * 60 * 1000 - Date.now());
    this._eventRefreshWarningTimer = setTimeout(() => {
      this._eventRefreshWarningTimer = null;
      this.render();
    }, delay);
    this._eventRefreshWarningTimer?.unref?.();
  }

  shouldShowEventRefreshWarning(now = Date.now()) {
    const oldestFailedRefresh = this.getOldestFailedEventRefreshTime();
    return Number.isFinite(oldestFailedRefresh) && (now - oldestFailedRefresh) >= 30 * 60 * 1000;
  }

  renderEventRefreshWarning() {
    if (!this.shouldShowEventRefreshWarning()) return '';
    const oldestFailedRefresh = this.getOldestFailedEventRefreshTime();
    return `<div class="event-refresh-warning" role="status">${this.t('eventRefreshStaleWarning', { time: this.formatTime(new Date(oldestFailedRefresh)) })}</div>`;
  }

  async updateEvents({ preserveScroll = false, renderAfterFetch = false } = {}) {
    if (!this._hass) return;
    if (this._fetching) {
      this._pendingEventRefreshAfterCurrentFetch = true;
      return;
    }

    const { startDate, endDate } = this.getEventFetchRange();
    const generation = ++this._eventFetchGeneration;
    this._fetching = true;
    this._activeEventFetchRange = { startDate, endDate };
    this._lastFetch = Date.now();

    try {
      const fetchResultsByCalendar = await this.fetchEventsByCalendarInRange(startDate, endDate);
      if (generation !== this._eventFetchGeneration) return;
      const nextEventsByCalendar = { ...this._eventsByCalendar };
      const successfulEntityIds = [];
      const failedEntityIds = [];
      let anyChanged = false;

      this._config.entities.forEach(entityId => {
        const result = fetchResultsByCalendar[entityId];
        if (!result?.success) {
          failedEntityIds.push(entityId);
          return;
        }
        successfulEntityIds.push(entityId);
        const events = Array.isArray(result.events) ? result.events : [];
        const oldSignature = this._calendarDataSignatures[entityId];
        const newSignature = this.getCalendarDataSignature(events);
        if (oldSignature !== newSignature) anyChanged = true;
        nextEventsByCalendar[entityId] = events;
      });

      if (successfulEntityIds.length === 0) {
        failedEntityIds.forEach((entityId) => {
          const existingMetadata = this._calendarEventMetadata[entityId] || {};
          this._calendarEventMetadata[entityId] = {
            ...existingMetadata,
            lastSuccessfulRefresh: existingMetadata.lastSuccessfulRefresh,
            refreshFailed: true,
            firstFailureAt: existingMetadata.firstFailureAt ?? Date.now(),
            lastNetworkFailureRequest: generation
          };
        });
        this.recomputeEventState();
        this.render();
        return;
      }

      const now = Date.now();
      const wasWarningVisible = this.shouldShowEventRefreshWarning(now);
      const shouldRenderForUnchangedData = !this._lastUnchangedDataRender ||
        (now - this._lastUnchangedDataRender >= 15 * 60 * 1000);
      this.applyEventsByCalendar(nextEventsByCalendar, {
        startDate,
        endDate,
        lastSuccessfulRefresh: now,
        successfulEntityIds,
        failedEntityIds,
        source: 'network',
        requestId: generation
      });
      const warningVisibilityChanged = wasWarningVisible !== this.shouldShowEventRefreshWarning(now);
      this.persistEventCacheSnapshot({ generation: this._eventWriteGeneration });
      if (anyChanged || shouldRenderForUnchangedData || failedEntityIds.length > 0 || warningVisibilityChanged || renderAfterFetch) {
        this._lastUnchangedDataRender = now;
        if (preserveScroll) {
          this.renderPreservingAgendaScroll();
        } else {
          this.render();
        }
      }
    } finally {
      this._fetching = false;
      this._activeEventFetchRange = null;
      const shouldRenderAfterFetch = this._pendingEventRenderAfterCurrentFetch;
      this._pendingEventRenderAfterCurrentFetch = false;
      if (this._pendingEventRefreshAfterCurrentFetch) {
        this._pendingEventRefreshAfterCurrentFetch = false;
        this.ensureEventsForCurrentRange({ force: true, renderIfCovered: shouldRenderAfterFetch });
      } else if (shouldRenderAfterFetch) {
        this.render();
      }
    }
  }

  async extendEventsForRange(startDate, endDate, { render = true, returnDetails = false } = {}) {
    const toResult = (complete, dataChanged = false, stateChanged = false) => (
      returnDetails ? { complete, dataChanged, stateChanged, applied: dataChanged || stateChanged } : complete
    );
    if (!this._hass) return toResult(false);
    if (this._fetching) {
      this._pendingEventRefreshAfterCurrentFetch = true;
      return toResult(false);
    }

    const generation = ++this._eventFetchGeneration;
    this._fetching = true;
    this._activeEventFetchRange = { startDate, endDate };
    this._lastFetch = Date.now();

    try {
      const fetchResultsByCalendar = await this.fetchEventsByCalendarInRange(startDate, endDate);
      if (generation !== this._eventFetchGeneration) return false;
      const nextEventsByCalendar = { ...this._eventsByCalendar };
      const successfulEntityIds = [];
      const failedEntityIds = [];
      let anyChanged = false;
      const stateSignatureBefore = this.toStableString((this._config.entities || []).map(entityId => ({
        entityId,
        refreshFailed: !!this._calendarEventMetadata[entityId]?.refreshFailed,
        firstFailureAt: this._calendarEventMetadata[entityId]?.firstFailureAt ?? null
      })));

      this._config.entities.forEach(entityId => {
        const result = fetchResultsByCalendar[entityId];
        if (!result?.success) {
          failedEntityIds.push(entityId);
          return;
        }
        successfulEntityIds.push(entityId);
        const fetchedRange = this.getValidRange(result.fetchedRange?.startDate, result.fetchedRange?.endDate) || { startDate, endDate };
        const mergedEvents = this.reconcileEventsForFetchedRange(this._eventsByCalendar[entityId] || [], result.events || [], fetchedRange);
        const oldSignature = this._calendarDataSignatures[entityId];
        const newSignature = this.getCalendarDataSignature(mergedEvents);
        if (oldSignature !== newSignature) anyChanged = true;
        nextEventsByCalendar[entityId] = mergedEvents;
      });

      if (successfulEntityIds.length === 0) {
        failedEntityIds.forEach((entityId) => {
          const existingMetadata = this._calendarEventMetadata[entityId] || {};
          this._calendarEventMetadata[entityId] = {
            ...existingMetadata,
            lastSuccessfulRefresh: existingMetadata.lastSuccessfulRefresh,
            refreshFailed: true,
            firstFailureAt: existingMetadata.firstFailureAt ?? Date.now(),
            lastNetworkFailureRequest: generation
          };
        });
        this.recomputeEventState();
        const stateSignatureAfter = this.toStableString((this._config.entities || []).map(entityId => ({
          entityId,
          refreshFailed: !!this._calendarEventMetadata[entityId]?.refreshFailed,
          firstFailureAt: this._calendarEventMetadata[entityId]?.firstFailureAt ?? null
        })));
        const stateChanged = stateSignatureBefore !== stateSignatureAfter;
        if (!returnDetails && (render || stateChanged) && stateChanged) this.render();
        return toResult(false, false, stateChanged);
      }

      const successfulFetchedRange = successfulEntityIds
        .map(entityId => fetchResultsByCalendar[entityId]?.fetchedRange)
        .map(range => this.getValidRange(range?.startDate, range?.endDate))
        .find(Boolean) || { startDate, endDate };
      this.applyEventsByCalendar(nextEventsByCalendar, {
        startDate: successfulFetchedRange.startDate,
        endDate: successfulFetchedRange.endDate,
        lastSuccessfulRefresh: Date.now(),
        successfulEntityIds,
        failedEntityIds,
        source: 'network',
        requestId: generation,
        coverageMode: 'union'
      });
      this.persistEventCacheSnapshot({ generation: this._eventWriteGeneration });
      const stateSignatureAfter = this.toStableString((this._config.entities || []).map(entityId => ({
        entityId,
        refreshFailed: !!this._calendarEventMetadata[entityId]?.refreshFailed,
        firstFailureAt: this._calendarEventMetadata[entityId]?.firstFailureAt ?? null
      })));
      const stateChanged = stateSignatureBefore !== stateSignatureAfter;
      if (!returnDetails && (render || failedEntityIds.length > 0) && (anyChanged || stateChanged)) this.render();
      return toResult(failedEntityIds.length === 0, anyChanged, stateChanged);
    } finally {
      this._fetching = false;
      this._activeEventFetchRange = null;
      const shouldRenderAfterFetch = this._pendingEventRenderAfterCurrentFetch;
      this._pendingEventRenderAfterCurrentFetch = false;
      if (this._pendingEventRefreshAfterCurrentFetch) {
        this._pendingEventRefreshAfterCurrentFetch = false;
        this.ensureEventsForCurrentRange({ force: true, renderIfCovered: shouldRenderAfterFetch });
      } else if (shouldRenderAfterFetch) {
        this.render();
      }
    }
  }

  isDateRangeCoveredByLoadedEvents(targetStartDate, targetEndDate) {
    return isDateRangeCoveredByLoadedEvents(this._loadedEventRange, targetStartDate, targetEndDate);
  }

  async ensureEventsForCurrentRange({ force = false, renderIfCovered = false } = {}) {
    const shouldRefreshForAge = shouldRefreshEvents({ lastFetch: this._lastFetch });
    const { startDate: visibleStartDate, endDate: visibleEndDate } = this.getVisibleDateRange();

    // Background stale refreshes run through this path via hass updates.
    // Keep dialogs stable by postponing only those refreshes while modal is open.
    if (this.isEventManagementDialogOpen() && (force || shouldRefreshForAge)) {
      return;
    }

    const { startDate, endDate } = this.getEventFetchRange();

    if (this._fetching) {
      if (force) {
        this._pendingEventRefreshAfterCurrentFetch = true;
        if (renderIfCovered) this._pendingEventRenderAfterCurrentFetch = true;
        return;
      }
      if (this.isDateRangeCoveredByLoadedEvents(visibleStartDate, visibleEndDate)) {
        if (renderIfCovered) this.render();
        return;
      }
      const activeRange = this.getValidRange(this._activeEventFetchRange?.startDate, this._activeEventFetchRange?.endDate);
      if (!activeRange || !isDateRangeCoveredByLoadedEvents(activeRange, startDate, endDate)) {
        this._pendingEventRefreshAfterCurrentFetch = true;
        if (renderIfCovered) this._pendingEventRenderAfterCurrentFetch = true;
      } else if (renderIfCovered) {
        this._pendingEventRenderAfterCurrentFetch = true;
      }
      return;
    }

    if (force || shouldRefreshForAge) {
      const shouldPreserveScrollDuringRefresh = this._viewMode === 'agenda' && !force && !renderIfCovered;
      await this.updateEvents({ preserveScroll: shouldPreserveScrollDuringRefresh, renderAfterFetch: renderIfCovered });
      return;
    }

    if (!this._loadedEventRange) {
      const hasLoadedCalendarRange = (this._config.entities || []).some((entityId) => {
        const range = this._calendarEventMetadata[entityId]?.range;
        return !!this.getValidRange(range?.startDate, range?.endDate);
      });
      const hasCalendarMetadata = (this._config.entities || []).some((entityId) => {
        const metadata = this._calendarEventMetadata[entityId];
        return !!metadata && Object.keys(metadata).length > 0;
      });
      if (renderIfCovered && hasLoadedCalendarRange) {
        await this.updateEvents({ renderAfterFetch: true });
        return;
      }
      // A lifecycle invalidation can leave _lastFetch looking recent even though
      // neither the cache nor the request was allowed to populate usable data.
      // Retry that unloaded state immediately, while retaining the normal retry
      // throttle for calendars with recorded failure metadata.
      if (!hasLoadedCalendarRange && !hasCalendarMetadata) {
        await this.updateEvents({ renderAfterFetch: renderIfCovered });
        return;
      }
      if (renderIfCovered) {
        this.render();
      }
      return;
    }

    // Gate fetches on the actually visible range. If the user can already see
    // all required dates from loaded data, avoid any network call.
    if (this.isDateRangeCoveredByLoadedEvents(visibleStartDate, visibleEndDate)) {
      if (renderIfCovered) {
        this.render();
      }
      return;
    }

    // Once visible range falls outside loaded coverage, fetch around current view
    // (with buffer) and only request missing leading/trailing segments.
    const missingRanges = [];

    if (startDate < this._loadedEventRange.startDate) {
      const missingStartEnd = new Date(this._loadedEventRange.startDate);
      missingRanges.push({ startDate, endDate: missingStartEnd });
    }

    if (endDate > this._loadedEventRange.endDate) {
      const missingEndStart = new Date(this._loadedEventRange.endDate);
      missingRanges.push({ startDate: missingEndStart, endDate });
    }

    let allExtended = true;
    let shouldRenderAfterExtensions = false;
    for (const range of missingRanges) {
      const extended = await this.extendEventsForRange(range.startDate, range.endDate, { render: false, returnDetails: true });
      if (!extended?.complete) allExtended = false;
      if (extended?.dataChanged || extended?.stateChanged) shouldRenderAfterExtensions = true;
    }

    if (allExtended || shouldRenderAfterExtensions) this.render();
  }

  getEventFetchRange() {
    const { startDate: visibleStart, endDate: visibleEnd } = this.getVisibleDateRange();

    // Keep a small look-behind and look-ahead buffer.
    const startDate = new Date(visibleStart);
    startDate.setDate(startDate.getDate() - 7);

    const endDate = new Date(visibleEnd);
    endDate.setDate(endDate.getDate() + 30);

    return { startDate, endDate };
  }

  getVisibleDateRange() {
    if (this._viewMode === 'agenda') {
      this.ensureAgendaWindowInitialized();
      return getAgendaVisibleDateRange(this._agendaStartDate, this._agendaEndDate);
    }

    if (this._viewMode === 'month') {
      return getMonthVisibleDateRange(this._currentDate, this._config.firstDayOfWeek, this._config.rolling_weeks);
    }

    // Week views: from first shown day to last shown day.
    return getWeekVisibleDateRange(this.getWeekDays());
  }

  getDateRangeChunks(startDate, endDate, chunkDays = 30) {
    return getDateRangeChunks(startDate, endDate, chunkDays);
  }

  getEventStartDate(event) {
    return getEventStartDate(event, { parseLocalDate: this.parseLocalDate.bind(this) });
  }

  getEventEndDate(event) {
    if (event?.end?.dateTime) return new Date(event.end.dateTime);
    if (event?.end?.date) return this.parseLocalDate(event.end.date);
    return new Date(event?.end);
  }

  parseLocalDate(dateStr) {
    return parseLocalDate(dateStr);
  }

  parseCalendarDate(dateStr) {
    if (!dateStr || typeof dateStr !== 'string') return new Date(dateStr);
    const [year, month, day] = dateStr.split('-').map(Number);
    if (![year, month, day].every(Number.isFinite)) return new Date(dateStr);
    return this.zonedTimeToDate(year, month, day, 0, 0, 0, 0);
  }

  parseCalendarDateWithOffset(dateStr, dayOffset = 0) {
    if (!dateStr || typeof dateStr !== 'string') return new Date(dateStr);
    const [year, month, day] = dateStr.split('-').map(Number);
    if (![year, month, day].every(Number.isFinite)) return new Date(dateStr);
    const adjusted = new Date(Date.UTC(year, month - 1, day + dayOffset));
    return this.zonedTimeToDate(adjusted.getUTCFullYear(), adjusted.getUTCMonth() + 1, adjusted.getUTCDate(), 0, 0, 0, 0);
  }

  parsePossiblyLocalDateTime(value) {
    return parsePossiblyLocalDateTime(value);
  }

  formatLocalDate(date) {
    return formatLocalDate(date);
  }


  normalizeTimeZone(timeZone) {
    if (timeZone === undefined || timeZone === null) return null;
    const normalized = String(timeZone).trim();
    if (!normalized) return null;

    try {
      return new Intl.DateTimeFormat('en-US', { timeZone: normalized }).resolvedOptions().timeZone || normalized;
    } catch (error) {
      console.warn(`Daylight Calendar Card: ignoring invalid time_zone config value "${normalized}".`);
      return null;
    }
  }

  getConfiguredTimeZone() {
    return this._config?.time_zone || null;
  }

  withTimeZone(formatOptions = {}) {
    const timeZone = this.getConfiguredTimeZone();
    return timeZone ? { ...formatOptions, timeZone } : formatOptions;
  }

  getDateTimeParts(date, options = {}) {
    const formatter = new Intl.DateTimeFormat('en-US', this.withTimeZone({
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', second: '2-digit',
      hourCycle: 'h23', ...options
    }));
    return formatter.formatToParts(date).reduce((acc, part) => {
      if (part.type !== 'literal') acc[part.type] = part.value;
      return acc;
    }, {});
  }

  getDateParts(date) {
    if (!this.getConfiguredTimeZone()) {
      return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate(), weekday: date.getDay() };
    }
    const parts = this.getDateTimeParts(date, { weekday: 'short' });
    const utcDate = new Date(Date.UTC(Number(parts.year), Number(parts.month) - 1, Number(parts.day)));
    return { year: Number(parts.year), month: Number(parts.month), day: Number(parts.day), weekday: utcDate.getUTCDay() };
  }

  getDisplayDateParts(date) {
    return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate(), weekday: date.getDay() };
  }

  zonedTimeToDate(year, month, day, hour = 0, minute = 0, second = 0, millisecond = 0) {
    const timeZone = this.getConfiguredTimeZone();
    if (!timeZone) return new Date(year, month - 1, day, hour, minute, second, millisecond);

    let timestamp = Date.UTC(year, month - 1, day, hour, minute, second, millisecond);
    for (let i = 0; i < 3; i++) {
      const parts = this.getDateTimeParts(new Date(timestamp));
      const asUTC = Date.UTC(Number(parts.year), Number(parts.month) - 1, Number(parts.day), Number(parts.hour), Number(parts.minute), Number(parts.second), millisecond);
      const wantedUTC = Date.UTC(year, month - 1, day, hour, minute, second, millisecond);
      const delta = asUTC - wantedUTC;
      if (delta === 0) break;
      timestamp -= delta;
    }
    return new Date(timestamp);
  }

  getDayBounds(date) {
    const { year, month, day } = this.getDisplayDateParts(date);
    const dayStart = this.zonedTimeToDate(year, month, day, 0, 0, 0, 0);
    const next = new Date(year, month - 1, day + 1);
    const nextDayStart = this.zonedTimeToDate(next.getFullYear(), next.getMonth() + 1, next.getDate(), 0, 0, 0, 0);
    return { dayStart, nextDayStart };
  }

  getDatePartValue(date, part) {
    return this.getDisplayDateParts(date)[part];
  }

  getDefaultColor(index) {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2'];
    return colors[index % colors.length];
  }

  connectedCallback() {
    checkAndShowStaleResourceWarning();
    window.addEventListener('resize', this._handleViewportResize);
    window.addEventListener('daylight-calendar-card-flush-event-cache', this._handleEventCacheFlush);
    window.visualViewport?.addEventListener('resize', this._handleViewportResize);
    this.attachSystemThemeListener();
    this.observeHostAndParentResize();
    this.render();
    if (this._eventLoadingInvalidatedWhileDisconnected) {
      this._eventLoadingInvalidatedWhileDisconnected = false;
      if (this._eventCacheLoadingInvalidatedWhileDisconnected) {
        this._eventCacheLoadingInvalidatedWhileDisconnected = false;
        this.loadEventCacheForCurrentConfig();
      }
      if (this._hass) this.ensureEventsForCurrentRange({ force: true });
    }
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this._handleViewportResize);
    window.removeEventListener('daylight-calendar-card-flush-event-cache', this._handleEventCacheFlush);
    window.visualViewport?.removeEventListener('resize', this._handleViewportResize);
    this._eventCacheLoadingInvalidatedWhileDisconnected = this._eventCacheLoadingInvalidatedWhileDisconnected
      || this._eventCacheLoadInFlight
      || !this._loadedEventRange;
    this._eventCacheGeneration += 1;
    this._eventCacheLoadInFlight = false;
    this._eventFetchGeneration += 1;
    this._eventLoadingInvalidatedWhileDisconnected = true;
    this.clearEventRefreshWarningTimer();
    this.cancelMonthCompactMeasurement();
    if (this._monthGridResizeObserver) {
      this._monthGridResizeObserver.disconnect();
      this._monthGridResizeObserver = null;
    }
    if (this._headerResizeObserver) {
      this._headerResizeObserver.disconnect();
      this._headerResizeObserver = null;
    }
    if (this._hostResizeObserver) {
      this._hostResizeObserver.disconnect();
      this._hostResizeObserver = null;
    }
    this._observedResizeParent = null;
    this._lastObservedHostSize = null;
    this._pendingHostResizeRender = false;
    if (this._hostResizeRaf !== null) {
      window.cancelAnimationFrame(this._hostResizeRaf);
      this._hostResizeRaf = null;
    }
    this.detachSystemThemeListener();
    this.teardownWeatherForecastSubscription();
    this.updateEventModalOpenState(null);
    if (this._modalVisibilityObserver) {
      this._modalVisibilityObserver.disconnect();
      this._modalVisibilityObserver = null;
    }
    if (this._wrapMeasureRaf1 !== null) {
      window.cancelAnimationFrame(this._wrapMeasureRaf1);
      this._wrapMeasureRaf1 = null;
    }
    if (this._wrapMeasureRaf2 !== null) {
      window.cancelAnimationFrame(this._wrapMeasureRaf2);
      this._wrapMeasureRaf2 = null;
    }
  }

  getCompactMaxHeight(containerTopInViewport = null) {
    if (!this._config.compact_height) return null;

    const viewportHeight = window.visualViewport?.height || window.innerHeight;
    const containerTop = Math.max(
      containerTopInViewport ?? this.getBoundingClientRect().top,
      0
    );
    const bottomSpacing = 0;
    const minimumHeight = 180;

    return Math.max(minimumHeight, Math.floor(viewportHeight - containerTop - bottomSpacing));
  }

  getElementSizeForAllocation(element) {
    if (!element || typeof element.getBoundingClientRect !== 'function') return { width: 0, height: 0 };
    const rect = element.getBoundingClientRect();
    return {
      width: Number.isFinite(rect.width) ? rect.width : 0,
      height: Number.isFinite(rect.height) ? rect.height : 0
    };
  }

  hasFixedHeightParentAllocation() {
    const parent = this.parentElement;
    if (!parent || typeof parent.getBoundingClientRect !== 'function') return false;

    const parentSize = this.getElementSizeForAllocation(parent);
    if (parentSize.height <= 0) return false;

    const parentStyle = typeof window.getComputedStyle === 'function' ? window.getComputedStyle(parent) : null;
    const parentMaxHeight = parentStyle?.maxHeight || '';
    const parentDisplay = parentStyle?.display || '';
    const parentOverflowY = parentStyle?.overflowY || parentStyle?.overflow || '';
    const inlineStyle = parent.getAttribute?.('style') || '';
    const hasExplicitCssHeight = Boolean(
      parent.style?.height ||
      parent.style?.minHeight ||
      parent.style?.maxHeight ||
      /(?:^|;)\s*(?:height|min-height|max-height)\s*:/i.test(inlineStyle) ||
      (parentMaxHeight && parentMaxHeight !== 'none' && parentMaxHeight !== '0px')
    );
    const looksLikeGridAllocation = /grid/i.test(parentDisplay) || parent.hasAttribute?.('grid_options') || parent.classList?.contains('grid-cell');
    const clipsOrScrollsOverflow = /(auto|hidden|scroll|clip)/.test(parentOverflowY);
    return hasExplicitCssHeight || looksLikeGridAllocation || clipsOrScrollsOverflow;
  }

  getGridAwareCompactContainerStyle() {
    return 'height: 100%; min-height: 0; overflow-y: auto;';
  }

  getCompactMonthGridStyle(monthWeekRows, compactMaxHeight = null) {
    const rowTemplate = `grid-template-rows: auto repeat(${monthWeekRows}, minmax(min-content, 1fr));`;

    if (this.hasFixedHeightParentAllocation()) {
      return `height: 100%; min-height: 0; overflow-y: auto; ${rowTemplate}`;
    }

    const resolvedMaxHeight = compactMaxHeight || this.getCompactMaxHeight(this._monthContainerTopInViewport);
    return resolvedMaxHeight
      ? `height: ${resolvedMaxHeight}px; overflow-y: auto; ${rowTemplate}`
      : '';
  }

  getCompactContainerStyle(maxHeight = null) {
    if (!this._config.compact_height) return '';

    if (this.hasFixedHeightParentAllocation()) {
      return this.getGridAwareCompactContainerStyle();
    }

    const resolvedMaxHeight = maxHeight || this.getCompactMaxHeight();
    if (!resolvedMaxHeight) return '';

    return `height: ${resolvedMaxHeight}px; max-height: ${resolvedMaxHeight}px; overflow-y: auto;`;
  }

  preserveAgendaScrollForNextRender() {
    if (this._viewMode !== 'agenda' || Number.isFinite(this._agendaPendingScrollTop)) return;
    const agendaContainer = this.getRootElementById('agenda-container');
    if (!agendaContainer) return;
    this._agendaPendingScrollTop = agendaContainer.scrollTop;
  }

  renderPreservingAgendaScroll() {
    this.preserveAgendaScrollForNextRender();
    this.render();
  }

  setAgendaScrollTopWithoutTriggeringLoad(container, scrollTop) {
    if (!container) return;

    this._agendaSuppressScrollHandling = true;
    container.scrollTop = scrollTop;

    window.requestAnimationFrame(() => {
      this._agendaSuppressScrollHandling = false;
    });
  }

  updateWeekStandardFixedOffsetHeightFromDom({ renderOnChange = true } = {}) {
    if (this._viewMode !== 'week-standard' || !this._root) return;
    if (this.isEventManagementDialogOpen()) return;

    const baselineHeaderHeight = 60;
    const container = this._root.querySelector('.week-standard-container');
    const dayHeaders = Array.from(this._root.querySelectorAll('.week-standard-day-header'));
    if (!container || dayHeaders.length === 0) return;

    const measuredContainerTop = Math.max(container.getBoundingClientRect().top, 0);
    if (!Number.isFinite(measuredContainerTop)) return;

    const hasRenderedStackedDayBadges = this._config.day_badge_layout_week === 'stacked'
      && dayHeaders.some((header) => Boolean(header.querySelector?.('.day-badges .day-badge')));

    if (!hasRenderedStackedDayBadges) {
      const extraHeaderHeightChanged = this._weekStandardExtraHeaderHeight !== 0;
      const headerHeightChanged = this._weekStandardHeaderHeight !== null;
      const containerTopChanged = this._weekStandardContainerTopInViewport === null || Math.abs(this._weekStandardContainerTopInViewport - measuredContainerTop) > 1;

      if (extraHeaderHeightChanged || headerHeightChanged || containerTopChanged) {
        this._weekStandardExtraHeaderHeight = 0;
        this._weekStandardHeaderHeight = null;
        this._weekStandardContainerTopInViewport = measuredContainerTop;
        container.style.removeProperty('--week-standard-day-header-height');
        container.style.removeProperty('--week-standard-time-header-spacer-height');
        if (renderOnChange) this.render();
      }
      return;
    }

    const previousHeaderHeightStyle = container.style.getPropertyValue('--week-standard-day-header-height');
    if (previousHeaderHeightStyle) {
      container.style.removeProperty('--week-standard-day-header-height');
    }

    const measuredSharedHeaderHeight = Math.ceil(Math.max(
      baselineHeaderHeight,
      ...dayHeaders.map((header) => header.getBoundingClientRect?.().height || 0)
    ));

    if (previousHeaderHeightStyle) {
      container.style.setProperty('--week-standard-day-header-height', previousHeaderHeightStyle);
    }

    if (!Number.isFinite(measuredSharedHeaderHeight)) return;

    const effectiveExtraHeaderHeight = Math.max(0, measuredSharedHeaderHeight - baselineHeaderHeight);
    const effectiveSharedHeaderHeight = effectiveExtraHeaderHeight > 0 ? measuredSharedHeaderHeight : null;
    const extraHeaderHeightChanged = Math.abs(this._weekStandardExtraHeaderHeight - effectiveExtraHeaderHeight) > 1;
    const headerHeightChanged = this._weekStandardHeaderHeight === null
      ? effectiveSharedHeaderHeight !== null
      : effectiveSharedHeaderHeight === null || Math.abs(this._weekStandardHeaderHeight - effectiveSharedHeaderHeight) > 1;
    const containerTopChanged = this._weekStandardContainerTopInViewport === null || Math.abs(this._weekStandardContainerTopInViewport - measuredContainerTop) > 1;

    if (extraHeaderHeightChanged || headerHeightChanged || containerTopChanged) {
      this._weekStandardExtraHeaderHeight = effectiveExtraHeaderHeight;
      this._weekStandardHeaderHeight = effectiveSharedHeaderHeight;
      this._weekStandardContainerTopInViewport = measuredContainerTop;
      if (effectiveSharedHeaderHeight === null) {
        container.style.removeProperty('--week-standard-day-header-height');
        container.style.removeProperty('--week-standard-time-header-spacer-height');
      } else {
        const timeHeaderSpacerHeight = Math.max(60, effectiveSharedHeaderHeight - 35);
        container.style.setProperty('--week-standard-day-header-height', `${effectiveSharedHeaderHeight}px`);
        container.style.setProperty('--week-standard-time-header-spacer-height', `${timeHeaderSpacerHeight}px`);
      }
      if (renderOnChange) this.render();
    }
  }

  updateWeekCompactStackedHeaderHeightFromDom({ renderOnChange = true } = {}) {
    if (this._viewMode !== 'week-compact' || !this._root) return;
    if (this.isEventManagementDialogOpen()) return;

    const container = this._root.querySelector('.week-compact-container');
    const dayHeaders = Array.from(this._root.querySelectorAll('.week-day-header'));
    if (!container || dayHeaders.length === 0) return;

    const measuredContainerTop = Math.max(0, container.getBoundingClientRect?.().top || 0);
    const containerTopChanged = this._weekCompactContainerTopInViewport === null || Math.abs(this._weekCompactContainerTopInViewport - measuredContainerTop) > 1;
    if (containerTopChanged) {
      this._weekCompactContainerTopInViewport = measuredContainerTop;
    }

    const hasRenderedStackedDayBadges = this._config.day_badge_layout_week === 'stacked'
      && dayHeaders.some((header) => Boolean(header.querySelector?.('.day-badges .day-badge')));

    if (!hasRenderedStackedDayBadges) {
      const headerHeightChanged = this._weekCompactHeaderHeight !== null;
      if (headerHeightChanged) {
        this._weekCompactHeaderHeight = null;
        container.style.removeProperty('--week-compact-header-height');
      }
      if (renderOnChange && (containerTopChanged || headerHeightChanged)) this.render();
      return;
    }

    const previousHeaderHeightStyle = container.style.getPropertyValue('--week-compact-header-height');
    if (previousHeaderHeightStyle) {
      container.style.removeProperty('--week-compact-header-height');
    }

    const measuredHeaderHeight = Math.ceil(Math.max(
      0,
      ...dayHeaders.map((header) => header.getBoundingClientRect?.().height || 0)
    ));

    if (previousHeaderHeightStyle) {
      container.style.setProperty('--week-compact-header-height', previousHeaderHeightStyle);
    }

    if (!Number.isFinite(measuredHeaderHeight) || measuredHeaderHeight <= 0) return;

    const headerHeightChanged = this._weekCompactHeaderHeight === null || Math.abs(this._weekCompactHeaderHeight - measuredHeaderHeight) > 1;
    if (headerHeightChanged) {
      this._weekCompactHeaderHeight = measuredHeaderHeight;
      container.style.setProperty('--week-compact-header-height', `${measuredHeaderHeight}px`);
    }
    if (renderOnChange && (headerHeightChanged || containerTopChanged)) this.render();
  }



  cancelMonthCompactMeasurement() {
    if (this._monthMeasureRaf !== null) {
      window.cancelAnimationFrame(this._monthMeasureRaf);
      this._monthMeasureRaf = null;
    }

    if (this._monthMeasureRenderRaf !== null) {
      window.cancelAnimationFrame(this._monthMeasureRenderRaf);
      this._monthMeasureRenderRaf = null;
    }
  }

  scheduleMonthCompactTopMeasurement(force = false) {
    if (this._viewMode !== 'month' || !this._config.compact_height || this.shouldShowAllEventsInMonth()) return;
    if (this.isEventManagementDialogOpen()) return;
    if (!force && !this._monthCompactMeasurementDirty && this._monthContainerTopInViewport !== null) return;
    if (this._monthMeasureRaf !== null) return;

    this._monthMeasureRaf = window.requestAnimationFrame(() => {
      this._monthMeasureRaf = null;
      this.updateMonthContainerTopInViewportFromDom();
      this._monthCompactMeasurementDirty = false;
    });
  }


  observeHostAndParentResize() {
    if (typeof window.ResizeObserver !== 'function') return;

    const parent = this.parentElement || null;
    if (this._hostResizeObserver && this._observedResizeParent === parent) return;

    if (this._hostResizeObserver) {
      this._hostResizeObserver.disconnect();
      this._hostResizeObserver = null;
    }

    this._observedResizeParent = parent;
    this._lastObservedHostSize = this.measureHostAndParentSize();
    this._hostResizeObserver = new window.ResizeObserver(() => {
      this.scheduleHostAndParentResizeHandling();
    });
    this._hostResizeObserver.observe(this);
    if (parent) {
      this._hostResizeObserver.observe(parent);
    }
  }

  measureHostAndParentSize() {
    const hostSize = this.getElementSizeForAllocation(this);
    const parentSize = this.getElementSizeForAllocation(this.parentElement);
    return {
      hostWidth: Math.round(hostSize.width),
      hostHeight: Math.round(hostSize.height),
      parentWidth: Math.round(parentSize.width),
      parentHeight: Math.round(parentSize.height)
    };
  }

  hasObservedHostSizeChanged(nextSize) {
    const previousSize = this._lastObservedHostSize;
    if (!previousSize) return true;
    return Object.keys(nextSize).some((key) => Math.abs(nextSize[key] - previousSize[key]) > 1);
  }

  scheduleHostAndParentResizeHandling() {
    if (this._hostResizeRaf !== null) return;

    this._hostResizeRaf = window.requestAnimationFrame(() => {
      this._hostResizeRaf = null;
      const nextSize = this.measureHostAndParentSize();
      if (!this.hasObservedHostSizeChanged(nextSize)) return;

      this._lastObservedHostSize = nextSize;
      const needsCompactHeightRender = !!this._config.compact_height;
      if (this._config.compact_height && this._viewMode === 'month' && !this.shouldShowAllEventsInMonth()) {
        this._monthCompactMeasurementDirty = true;
      }

      if (needsCompactHeightRender) {
        if (this.isEventManagementDialogOpen()) {
          this._pendingHostResizeRender = true;
          return;
        }

        this.render();
        return;
      }

      if (this.isEventManagementDialogOpen() && this.hasWidthDependentMeasuredLayoutState()) {
        this._pendingWidthDependentLayoutRefresh = true;
        return;
      }

      this.updateCompactHeaderWrapState();
      this.updateCalendarBadgesScrollState();
      this.refreshWidthDependentLayoutMeasurements();
    });
  }

  hasWidthDependentMeasuredLayoutState() {
    return this._config?.day_badge_layout_week === 'stacked'
      && (this._viewMode === 'week-standard' || this._viewMode === 'week-compact');
  }

  refreshWidthDependentLayoutMeasurements() {
    if (this._viewMode === 'week-standard') {
      this.updateWeekStandardFixedOffsetHeightFromDom({ renderOnChange: false });
    } else if (this._viewMode === 'week-compact') {
      this.updateWeekCompactStackedHeaderHeightFromDom({ renderOnChange: false });
    }
  }

  flushPendingHostResizeRender() {
    const shouldRender = this._pendingHostResizeRender;
    const shouldRefreshWidthMeasurements = this._pendingWidthDependentLayoutRefresh;
    this._pendingHostResizeRender = false;
    this._pendingWidthDependentLayoutRefresh = false;

    if (shouldRefreshWidthMeasurements) {
      this.refreshWidthDependentLayoutMeasurements();
    }

    if (shouldRender) {
      this.render();
    }
  }

  observeHeaderResize() {
    if (!this._root || typeof window.ResizeObserver !== 'function') return;

    if (this._headerResizeObserver) {
      this._headerResizeObserver.disconnect();
      this._headerResizeObserver = null;
    }

    const headerSelector = this._config.compact_header ? '.header-compact' : '.header';
    const header = this._root.querySelector(headerSelector);
    if (!header) return;

    this._headerResizeObserver = new window.ResizeObserver(() => {
      this.updateCompactHeaderWrapState();
    });
    this._headerResizeObserver.observe(header);
  }

  observeMonthGridResize() {
    if (!this._root || typeof window.ResizeObserver !== 'function') return;

    if (this._monthGridResizeObserver) {
      this._monthGridResizeObserver.disconnect();
      this._monthGridResizeObserver = null;
    }

    if (this._viewMode !== 'month' || !this._config.compact_height || this.shouldShowAllEventsInMonth()) return;

    const container = this._root.querySelector('.calendar-container');
    if (!container) return;

    this._monthGridResizeObserver = new window.ResizeObserver(() => {
      this._monthCompactMeasurementDirty = true;
      this.scheduleMonthCompactTopMeasurement();
    });
    this._monthGridResizeObserver.observe(container);
  }

  updateMonthContainerTopInViewportFromDom() {
    if (this._viewMode !== 'month' || !this._config.compact_height || this.shouldShowAllEventsInMonth() || !this._root) return;
    if (this.isEventManagementDialogOpen()) return;

    const container = this._root.querySelector('.calendar-grid');
    if (!container) return;

    const measuredContainerTop = Math.max(container.getBoundingClientRect().top, 0);
    const viewportHeight = window.visualViewport?.height || window.innerHeight;
    if (!Number.isFinite(measuredContainerTop)) return;
    if (!Number.isFinite(viewportHeight)) return;

    const containerTopChanged = this._monthContainerTopInViewport === null || Math.abs(this._monthContainerTopInViewport - measuredContainerTop) > 1;
    const viewportHeightChanged = this._lastCompactMonthViewportHeight === null || Math.abs(this._lastCompactMonthViewportHeight - viewportHeight) > 1;

    if (containerTopChanged) {
      this._monthContainerTopInViewport = measuredContainerTop;
    }
    if (viewportHeightChanged) {
      this._lastCompactMonthViewportHeight = viewportHeight;
    }

    if (containerTopChanged || viewportHeightChanged) {
      if (this._monthMeasureRenderRaf === null) {
        this._monthMeasureRenderRaf = window.requestAnimationFrame(() => {
          this._monthMeasureRenderRaf = null;
          this.render();
        });
      }
    }
  }

  updateAgendaContainerTopInViewportFromDom() {
    if (this._viewMode !== 'agenda' || !this._config.compact_height || !this._root) return;
    if (this.isEventManagementDialogOpen()) return;

    const container = this._root.querySelector('.agenda-container');
    if (!container) return;

    const measuredContainerTop = Math.max(container.getBoundingClientRect().top, 0);
    if (!Number.isFinite(measuredContainerTop)) return;

    const containerTopChanged = this._agendaContainerTopInViewport === null || Math.abs(this._agendaContainerTopInViewport - measuredContainerTop) > 1;
    if (containerTopChanged) {
      this._agendaContainerTopInViewport = measuredContainerTop;
      this.render();
    }
  }


  getLanguage() {
    return resolveLanguage(this._config.language || this._hass?.language || this._hass?.locale?.language);
  }

  getLocale() {
    if (this._config.locale) return this._config.locale;

    const configuredLanguage = this._config.language ? resolveLanguage(this._config.language) : null;
    if (configuredLanguage) return TRANSLATIONS[configuredLanguage]?.locale || this._config.language;

    const hassLocale = this._hass?.locale?.language;
    if (hassLocale) return hassLocale;

    const hassLanguage = this._hass?.language;
    if (hassLanguage) {
      const resolvedHassLanguage = resolveLanguage(hassLanguage);
      return TRANSLATIONS[resolvedHassLanguage]?.locale || hassLanguage;
    }

    return globalThis.navigator?.languages?.[0]
      || globalThis.navigator?.language
      || TRANSLATIONS[DEFAULT_LANGUAGE]?.locale
      || 'en-US';
  }

  t(key, params = {}) {
    return translate(this.getLanguage(), key, params);
  }

  getWeekdayNameFormat() {
    return this._config?.display_full_weekday_names ? 'long' : 'short';
  }

  getWeekdayNames(format = this.getWeekdayNameFormat()) {
    const formatter = new Intl.DateTimeFormat(this.getLocale(), { weekday: format });
    const baseDate = new Date(2021, 5, 6);
    const names = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(baseDate);
      date.setDate(baseDate.getDate() + i);
      names.push(formatter.format(date));
    }
    return names;
  }

  setWeekStart() {
    const date = new Date(this._currentDate);
    const day = date.getDay();
    const diff = (day - this._config.firstDayOfWeek + 7) % 7;
    date.setDate(date.getDate() - diff);
    date.setHours(0, 0, 0, 0);
    this._weekStart = date;
  }

  resetAgendaWindowToToday() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    this._currentDate = new Date(today);
    const agendaWindow = createAgendaWindow(today, this.getAgendaPeriodDaySpan());
    this._agendaStartDate = agendaWindow.startDate;
    this._agendaEndDate = agendaWindow.endDate;
    this._agendaVisibleStartDate = agendaWindow.visibleStartDate;
    this._agendaVisibleEndDate = agendaWindow.visibleEndDate;
  }

  ensureAgendaWindowInitialized() {
    if (this._agendaStartDate && this._agendaEndDate) return;
    this.resetAgendaWindowToToday();
  }

  getAgendaDays() {
    this.ensureAgendaWindowInitialized();
    return getAgendaDays(this._agendaStartDate, this._agendaEndDate);
  }

  getAgendaVisibleDateRangeFromDom() {
    if (!this._root || this._viewMode !== 'agenda') return null;

    const container = this.getRootElementById('agenda-container');
    if (!container) return null;

    const containerRect = container.getBoundingClientRect();
    const dayRows = Array.from(container.querySelectorAll('.agenda-day-row'));
    if (dayRows.length === 0) return null;

    const visibleDates = dayRows
      .map((row) => {
        const rect = row.getBoundingClientRect();
        const isVisible = rect.bottom > containerRect.top && rect.top < containerRect.bottom;
        if (!isVisible) return null;
        const rawDate = row.getAttribute('data-date');
        if (!rawDate) return null;
        return new Date(rawDate);
      })
      .filter((date) => date instanceof Date && !Number.isNaN(date.getTime()));

    if (visibleDates.length === 0) return null;

    const startDate = new Date(visibleDates[0]);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(visibleDates[visibleDates.length - 1]);
    endDate.setHours(23, 59, 59, 999);

    return { startDate, endDate };
  }

  updateAgendaVisibleDateRangeFromDom() {
    const visibleRange = this.getAgendaVisibleDateRangeFromDom();
    if (!visibleRange) {
      this._agendaVisibleStartDate = null;
      this._agendaVisibleEndDate = null;
      this.updateAgendaPeriodLabelInDom();
      return;
    }

    this._agendaVisibleStartDate = visibleRange.startDate;
    this._agendaVisibleEndDate = visibleRange.endDate;
    this.updateAgendaPeriodLabelInDom();
  }

  isAgendaRangeWithinCurrentWindow(range) {
    return isAgendaRangeWithinWindow(range, this._agendaStartDate, this._agendaEndDate);
  }

  updateAgendaPeriodLabelInDom() {
    if (!this._root || this._viewMode !== 'agenda') return;
    const label = this.getPeriodLabel();
    this._root.querySelectorAll('.month-year').forEach((labelEl) => {
      labelEl.textContent = label;
    });
  }

  getAgendaViewportDayCapacity() {
    if (!this._root || this._viewMode !== 'agenda') {
      return this._agendaDaysPerScrollLoad;
    }

    const container = this.getRootElementById('agenda-container');
    if (!container) {
      return this._agendaDaysPerScrollLoad;
    }

    const rows = Array.from(container.querySelectorAll('.agenda-day-row'));
    if (rows.length === 0) {
      return this._agendaDaysPerScrollLoad;
    }

    const maxHeight = container.clientHeight;
    if (!Number.isFinite(maxHeight) || maxHeight <= 0) {
      return this._agendaDaysPerScrollLoad;
    }

    let consumedHeight = 0;
    let dayCount = 0;

    for (const row of rows) {
      const rowHeight = row.getBoundingClientRect().height;
      if (!Number.isFinite(rowHeight) || rowHeight <= 0) continue;

      if ((consumedHeight + rowHeight) > maxHeight && dayCount > 0) {
        break;
      }

      consumedHeight += rowHeight;
      dayCount += 1;

      if (consumedHeight >= maxHeight) {
        break;
      }
    }

    return Math.max(1, dayCount || this._agendaDaysPerScrollLoad);
  }

  getAgendaRollingDays() {
    return getAgendaRollingDays(this._config);
  }

  getAgendaPeriodDaySpan() {
    return getAgendaPeriodDaySpan(this._config);
  }

  getRollingDaysForView(viewMode = this._viewMode) {
    return getRollingDaysForView(viewMode, this._config);
  }

  getWeekDays(viewMode = this._viewMode) {
    return getWeekDays({
      currentDate: this._currentDate,
      weekStart: this._weekStart,
      weekDays: this._config.week_days,
      rollingDays: this.getRollingDaysForView(viewMode)
    });
  }

  getStyles() {
    return getCardStyles();
  }

  render() {
    this._dayBadgeActions = new Map();
    this._dayBadgeActionSequence = 0;
    const shouldRestoreAgendaScrollPosition = this._viewMode === 'agenda' && Number.isFinite(this._agendaPendingScrollTop);
    const agendaScrollTopToRestore = shouldRestoreAgendaScrollPosition ? this._agendaPendingScrollTop : null;
    const today = new Date();
    const year = this._currentDate.getFullYear();
    const month = this._currentDate.getMonth();

    const themeCardBackground = this._isDarkMode ? '#2a2f36' : '#ffffff';
    const forcedThemeBackground = this._themeMode === DEFAULT_THEME_MODE ? null : themeCardBackground;
    const calendarBaseBackground = `var(--calendar-background, ${forcedThemeBackground || `var(--ha-card-background, var(--card-background-color, ${themeCardBackground}))`})`;
    const inheritedStyles = window.getComputedStyle(this);
    const getInheritedStyle = (property) => typeof inheritedStyles?.getPropertyValue === 'function'
      ? inheritedStyles.getPropertyValue(property).trim()
      : '';
    const inheritedCalendarBackground = getInheritedStyle('--calendar-background');
    const inheritedHaCardBackground = getInheritedStyle('--ha-card-background');
    const inheritedCardBackground = getInheritedStyle('--card-background-color');
    const resolvedCalendarBackgroundForContrast = inheritedCalendarBackground
      || forcedThemeBackground
      || inheritedHaCardBackground
      || inheritedCardBackground
      || themeCardBackground;
    const normalizedBackgroundOpacity = this.normalizeBackgroundOpacity(this._config.background_opacity, this._config.background_transparent ? 100 : 0);
    const rawHeaderBackgroundColor = this.normalizeSingleColor(this._config.header_color);
    const resolvedHeaderBackgroundBase = typeof rawHeaderBackgroundColor === 'string' && rawHeaderBackgroundColor.trim().toLowerCase() === 'match-card-background'
      ? calendarBaseBackground
      : (rawHeaderBackgroundColor || DEFAULT_CONFIG_VALUES.header_color);
    const normalizedHeaderBackgroundOpacity = this.normalizeBackgroundOpacity(
      this._config.header_background_opacity,
      this._config.header_background_transparent ? 100 : 0
    );
    const normalizedHeaderReveal = Math.max(0, Math.min(1, normalizedHeaderBackgroundOpacity / 100));
    const headerAlpha = Math.max(0.2, 1 - (normalizedHeaderReveal * 0.75));
    const configuredHeaderTextColor = this.normalizeSingleColor(this._config.header_text_color);
    let resolvedHeaderTextColor = configuredHeaderTextColor;
    if (!resolvedHeaderTextColor) {
      const headerBaseForContrast = typeof rawHeaderBackgroundColor === 'string' && rawHeaderBackgroundColor.trim().toLowerCase() === 'match-card-background'
        ? resolvedCalendarBackgroundForContrast
        : resolvedHeaderBackgroundBase;
      const headerBaseRgb = this.colorToRgb(headerBaseForContrast);
      const themeCardBackgroundRgb = this.colorToRgb(
        typeof rawHeaderBackgroundColor === 'string' && rawHeaderBackgroundColor.trim().toLowerCase() === 'match-card-background'
          ? resolvedCalendarBackgroundForContrast
          : themeCardBackground
      );

      if (headerBaseRgb && themeCardBackgroundRgb && headerAlpha < 1) {
        const blendedHeaderRgb = {
          r: Math.round((headerBaseRgb.r * headerAlpha) + (themeCardBackgroundRgb.r * (1 - headerAlpha))),
          g: Math.round((headerBaseRgb.g * headerAlpha) + (themeCardBackgroundRgb.g * (1 - headerAlpha))),
          b: Math.round((headerBaseRgb.b * headerAlpha) + (themeCardBackgroundRgb.b * (1 - headerAlpha)))
        };
        resolvedHeaderTextColor = this.getContractColor(`rgb(${blendedHeaderRgb.r}, ${blendedHeaderRgb.g}, ${blendedHeaderRgb.b})`);
      } else {
        resolvedHeaderTextColor = this.getContractColor(headerBaseForContrast);
      }
    }
    const headerControlBackground = this.colorWithAlpha(resolvedHeaderTextColor, 0.16);
    const headerControlHoverBackground = this.colorWithAlpha(resolvedHeaderTextColor, 0.24);
    const headerControlActiveBackground = this.colorWithAlpha(resolvedHeaderTextColor, 0.32);
    const headerControlBorder = this.colorWithAlpha(resolvedHeaderTextColor, 0.4);
    const headerControlBorderHover = this.colorWithAlpha(resolvedHeaderTextColor, 0.6);
    const wrappedHeaderBackground = normalizedHeaderBackgroundOpacity <= 0
      ? resolvedHeaderBackgroundBase
      : 'transparent';
    const headerStyle = `--header-background-base: ${resolvedHeaderBackgroundBase}; --header-background-alpha: ${headerAlpha}; --header-wrapped-background: ${wrappedHeaderBackground}; --header-text-color: ${resolvedHeaderTextColor}; --header-control-bg: ${headerControlBackground}; --header-control-bg-hover: ${headerControlHoverBackground}; --header-control-bg-active: ${headerControlActiveBackground}; --header-control-border: ${headerControlBorder}; --header-control-border-hover: ${headerControlBorderHover};`;
    const normalizedBackgroundImageUrl = this.normalizeBackgroundImageUrl(this._config.background_image_url);
    const safeBackgroundImageUrl = normalizedBackgroundImageUrl
      ? String(normalizedBackgroundImageUrl).replace(/[\'\\]/g, '\\$&')
      : null;
    const hasCustomBackground = normalizedBackgroundOpacity > 0;
    const backgroundImageStyle = safeBackgroundImageUrl
      ? `--calendar-background-image: url('${safeBackgroundImageUrl}'); --calendar-background-size: ${this._config.background_image_size}; --calendar-background-position: ${this._config.background_image_position}; --calendar-background-repeat: ${this._config.background_image_repeat};`
      : '';
    const backgroundAlpha = (100 - normalizedBackgroundOpacity) / 100;
    const normalizedReveal = Math.max(0, Math.min(1, normalizedBackgroundOpacity / 100));
    const scaledBackgroundImageAlpha = Math.max(0, Math.min(1, normalizedReveal * 0.75));
    const backgroundImageAlpha = safeBackgroundImageUrl ? scaledBackgroundImageAlpha : 0;
    const customSurfaceAlpha = 1 - normalizedReveal;
    const customSurfacePalette = this._isDarkMode
      ? {
        calendar: '48, 54, 63',
        column: '59, 67, 77',
        allDay: '53, 60, 69',
        slot: '53, 60, 69'
      }
      : {
        calendar: '249, 250, 251',
        column: '255, 255, 255',
        allDay: '249, 250, 251',
        slot: '255, 255, 255'
      };
    const forcedBackgroundStyle = forcedThemeBackground ? `--calendar-forced-background: ${forcedThemeBackground}; ` : '';
    const configuredGridColor = this.normalizeSingleColor(this._config.grid_color);
    const resolvedGridColor = configuredGridColor || (hasCustomBackground ? 'rgba(255, 255, 255, 0.35)' : null);
    const gridColorStyle = resolvedGridColor ? `--calendar-grid-color: ${resolvedGridColor}; ` : '';
    const backgroundStyle = `${forcedBackgroundStyle}--calendar-default-background: ${themeCardBackground}; --calendar-background-opacity: ${backgroundAlpha}; --calendar-background-image-opacity: ${backgroundImageAlpha}; --custom-surface-alpha: ${customSurfaceAlpha}; ${gridColorStyle}--custom-surface-calendar-rgb: ${customSurfacePalette.calendar}; --custom-surface-column-rgb: ${customSurfacePalette.column}; --custom-surface-all-day-rgb: ${customSurfacePalette.allDay}; --custom-surface-slot-rgb: ${customSurfacePalette.slot};`;
    const containerStyle = `${headerStyle} ${backgroundStyle} ${backgroundImageStyle}`.trim();

    this._root.innerHTML = `
      <style>
        ${this.getStyles()}
      </style>

      ${this._config.uix?.style ? `
        <style class="uix-style">
          ${this._config.uix.style}
        </style>
      ` : ''}

      <div class="calendar-container ${this._isDarkMode ? 'dark-mode' : ''} ${hasCustomBackground ? 'custom-background' : ''} ${this._config.hide_year ? 'hide-year' : ''} ${this._config.agenda_compact_events ? 'agenda-compact-events' : ''}" style="${containerStyle}">
        ${this._config.hide_header ? '' : (this._config.compact_header ? this.renderCompactHeader() : this.renderStandardHeader())}
        ${this.renderEventRefreshWarning()}
        <div class="calendar-body">
          ${this.renderCalendarView()}
        </div>

        <div class="event-modal" id="event-modal">
          <div class="modal-content ${this.getEventModalSizeClass()}" id="modal-content">
          </div>
        </div>
      </div>
    `;

    this.observeHostAndParentResize();
    this.attachEventListeners();
    this.updateCompactHeaderWrapState();
    this.updateCalendarBadgesScrollState();
    this.updateWeekStandardFixedOffsetHeightFromDom();
    this.updateWeekCompactStackedHeaderHeightFromDom();
    this.observeHeaderResize();
    this.observeMonthGridResize();
    if (this._viewMode === 'month' && this._config.compact_height && !this.shouldShowAllEventsInMonth()) {
      if (this._monthContainerTopInViewport === null) {
        this._monthCompactMeasurementDirty = true;
      }
      this.scheduleMonthCompactTopMeasurement();
    }
    this.updateAgendaContainerTopInViewportFromDom();

    if (shouldRestoreAgendaScrollPosition) {
      window.requestAnimationFrame(() => {
        const agendaContainer = this.getRootElementById('agenda-container');
        this.setAgendaScrollTopWithoutTriggeringLoad(agendaContainer, agendaScrollTopToRestore);
      });
    }
    this._agendaPendingScrollTop = null;

    if (this._viewMode === 'agenda') {
      window.requestAnimationFrame(() => {
        this.updateAgendaVisibleDateRangeFromDom();
      });
    }
  }

  getHeaderRenderHelpers() {
    return {
      escapeHtml: (value) => this.escapeHtml(value),
      escapeHtmlAttribute: (value) => this.escapeHtmlAttribute(value),
      getPeriodLabel: () => this.getPeriodLabel(),
      renderCalendarBadgesInline: () => this.renderCalendarBadgesInline(),
      renderDashboardNavButton: () => this.renderDashboardNavButton(),
      renderHeaderTitle: () => this.renderHeaderTitle(),
      renderPeriodNavigationButtons: (buttonType) => this.renderPeriodNavigationButtons(buttonType),
      renderThemeToggle: () => this.renderThemeToggle(),
      renderViewModeButtons: () => this.renderViewModeButtons(),
      t: (key, params) => this.t(key, params)
    };
  }

  renderStandardHeader() {
    const writableCalendars = this.getWritableCalendars();
    const canAddEvents = this._config.enable_event_management && writableCalendars.length > 0 && !this._config.hide_add_event_button;
    const shouldShowControls = !this._config.hide_controls;

    return renderStandardHeader({
      canAddEvents,
      shouldShowControls,
      helpers: this.getHeaderRenderHelpers()
    });
  }

  renderCompactHeader() {
    const writableCalendars = this.getWritableCalendars();
    const canAddEvents = this._config.enable_event_management && writableCalendars.length > 0 && !this._config.hide_add_event_button;
    const shouldShowCalendars = !this._config.hide_calendars;
    const shouldShowControls = !this._config.hide_controls;

    return renderCompactHeader({
      canAddEvents,
      shouldShowCalendars,
      shouldShowControls,
      helpers: this.getHeaderRenderHelpers()
    });
  }

  getCalendarBadgeRenderHelpers() {
    return {
      escapeHtml: (value) => this.escapeHtml(value),
      formatPersonStateLabel: (state) => this.formatPersonStateLabel(state),
      getCalendarBadgeIcon: (entityId) => this.getCalendarBadgeIcon(entityId),
      getCalendarBadgePersonEntityId: (entityId) => this.getCalendarBadgePersonEntityId(entityId),
      getCalendarBadgePersonState: (entityId) => this.getCalendarBadgePersonState(entityId),
      getContractColor: (color) => this.getContractColor(color),
      getPersonEntityPictureUrl: (state) => this.getPersonEntityPictureUrl(state),
      lightenColor: (color, amount) => this.lightenColor(color, amount),
      normalizeBackgroundImageUrl: (url) => this.normalizeBackgroundImageUrl(url),
      normalizeSingleColor: (color) => this.normalizeSingleColor(color)
    };
  }

  renderCalendarBadgesInline() {
    return renderCalendarBadgesInline({
      badgeItems: this.getVirtualBadgeItems(),
      hideCalendarNames: !!this._config.hide_calendar_names,
      helpers: this.getCalendarBadgeRenderHelpers()
    });
  }

  renderHeaderTitle() {
    const headerTime = this.getFormattedHeaderSensorTime();
    const headerWeather = this.getHeaderWeatherData();
    const headerItems = this.resolveHeaderItems();
    return renderHeaderTitle({
      title: this._config.title,
      headerTime,
      headerWeather,
      headerItems,
      helpers: this.getHeaderRenderHelpers()
    });
  }

  renderDashboardNavButton() {
    return renderDashboardNavButton({
      shouldShow: this.shouldShowDashboardNavButton(),
      helpers: this.getHeaderRenderHelpers()
    });
  }

  renderPeriodNavigationButtons(buttonType) {
    return renderPeriodNavigationButtons({
      buttonType,
      hideNavigationButtons: this._config.hide_navigation_buttons,
      shouldDisablePreviousNavigation: this.shouldDisablePreviousNavigation(),
      helpers: this.getHeaderRenderHelpers()
    });
  }

  renderViewModeButtons() {
    return renderViewModeButtons({
      hideViewSelector: this._config.hide_view_selector,
      viewMode: this._viewMode,
      helpers: this.getHeaderRenderHelpers()
    });
  }

  renderThemeToggle() {
    return renderThemeToggle({
      hideDarkModeToggle: this._config.hide_dark_mode_toggle,
      isDarkMode: this._isDarkMode
    });
  }

  getPeriodLabel() {
    const includeYear = !this._config.hide_year;

    if (this._viewMode === 'month') {
      // If rolling_weeks mode is active, show date range
      if (this._config.rolling_weeks !== null) {
        const anchorDate = new Date(this._currentDate);
        anchorDate.setHours(0, 0, 0, 0);

        const currentDay = anchorDate.getDay();
        const diff = (currentDay - this._config.firstDayOfWeek + 7) % 7;
        const weekStart = new Date(anchorDate);
        weekStart.setDate(anchorDate.getDate() - diff);

        const totalWeeks = this._config.rolling_weeks + 1;
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + (totalWeeks * 7) - 1);

        return this.formatPeriodDateRange(weekStart, weekEnd, includeYear);
      }

      // Standard month view
      const month = this._currentDate.getMonth();
      const year = this._currentDate.getFullYear();
      return includeYear ? `${this.getMonthName(month)} ${year}` : this.getMonthName(month);
    } else if (this._viewMode === 'agenda') {
      this.ensureAgendaWindowInitialized();
      const rangeStart = this._agendaVisibleStartDate || this._agendaStartDate;
      const rangeEnd = this._agendaVisibleEndDate || this._agendaEndDate;
      return this.formatPeriodDateRange(rangeStart, rangeEnd, includeYear);
    } else {
      const weekDays = this.getWeekDays();
      if (weekDays.length === 0) return '';
      const start = weekDays[0];
      const end = weekDays[weekDays.length - 1];
      return this.formatPeriodDateRange(start, end, includeYear);
    }
  }

  formatPeriodDateRange(startDate, endDate, includeYear = true) {
    const formatOptions = {
      month: 'short',
      day: 'numeric'
    };
    if (includeYear) {
      formatOptions.year = 'numeric';
    }

    const formatter = new Intl.DateTimeFormat(this.getLocale(), formatOptions);

    if (!includeYear) {
      if (startDate.getTime() === endDate.getTime()) {
        return formatter.format(startDate);
      }

      // Intl.DateTimeFormat#formatRange may still add a year when dates cross
      // year boundaries, even when year isn't requested in format options.
      // Build the range manually so hide_year always hides the year.
      return `${formatter.format(startDate)} - ${formatter.format(endDate)}`;
    }

    if (typeof formatter.formatRange === 'function') {
      return formatter.formatRange(startDate, endDate);
    }

    if (startDate.getTime() === endDate.getTime()) {
      return formatter.format(startDate);
    }

    return `${formatter.format(startDate)} - ${formatter.format(endDate)}`;
  }

  renderCalendarView() {
    const shouldShowHeaderBadges = !this._config.compact_header && !this._config.hide_calendars;

    if (this._viewMode === 'month') {
      const showAllEventsMonth = this.shouldShowAllEventsInMonth();
      const isCompactMonth = this._config.compact_height && !showAllEventsMonth;
      const compactMaxHeight = isCompactMonth && !this.hasFixedHeightParentAllocation() ? this.getCompactMaxHeight(this._monthContainerTopInViewport) : null;
      const monthWeekRows = this.getMonthWeekRowCount();
      const showMonthWeekNumbers = this.shouldShowMonthWeekNumbers();
      return renderMonthView({
        compactMaxHeight,
        config: this._config,
        currentDate: this._currentDate,
        isCompactMonth,
        monthWeekRows,
        shouldShowHeaderBadges,
        shouldShowWeekNumbers: showMonthWeekNumbers,
        viewMode: this._viewMode,
        weekdayNames: this.getWeekdayNames(),
        helpers: {
          getCompactMonthGridStyle: (weekRows, maxHeight) => this.getCompactMonthGridStyle(weekRows, maxHeight),
          renderCalendarBadges: () => this.renderCalendarBadges(),
          getDateKey: (date) => this.getDateKey(date),
          getMonthSpanLayoutForWeek: (weekDays) => this.buildMonthSpanLayoutForWeek(weekDays),
          renderDay: (day, date, isOtherMonth, monthSpanLanes) => this.renderDay(day, date, isOtherMonth, monthSpanLanes),
          renderMonthWeekNumberCell: (rowStartDate) => this.renderMonthWeekNumberCell(rowStartDate)
        }
      });
    } else if (this._viewMode === 'week-compact') {
      return this.renderWeekCompact();
    } else if (this._viewMode === 'week-standard') {
      return this.renderWeekStandard();
    } else if (this._viewMode === 'agenda') {
      return this.renderAgenda();
    }
  }

  renderDayHeaders() {
    return renderMonthDayHeaders({
      weekdayNames: this.getWeekdayNames(),
      firstDayOfWeek: this._config.firstDayOfWeek,
      shouldShowWeekNumbers: this.shouldShowMonthWeekNumbers()
    });
  }

  renderWeekCompact() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return renderWeekCompactView({
      config: this._config,
      weekDays: this.getWeekDays(),
      today,
      dayNames: this.getWeekdayNames(),
      headerHeight: this._weekCompactHeaderHeight,
      compactMaxHeight: this.getCompactMaxHeight(this._weekCompactContainerTopInViewport),
      helpers: {
        getCompactContainerStyle: (maxHeight) => this.getCompactContainerStyle(maxHeight),
        renderCalendarBadges: () => this.renderCalendarBadges(),
        getEventsForDay: (date, options) => this.getEventsForDay(date, options),
        isEventHiddenByStyle: (event) => this.isEventHiddenByStyle(event),
        sortEventsForDate: (events, date) => this.sortEventsForDate(events, date),
        getDayStyleAttributes: (date, events, isToday) => this.getDayStyleAttributes(date, events, isToday),
        renderDayBadges: (date, events) => this.renderDayBadges(date, events),
        renderDayForecast: (date, viewMode) => this.renderDayForecast(date, viewMode),
        renderWeekCompactEvent: (event, date) => this.renderWeekCompactEvent(event, date),
        t: (key, params) => this.t(key, params)
      }
    });
  }

  renderWeekStandard() {
    const weekDays = this.getWeekDays();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const { startHour, endHour } = this.getScheduleHourRangeForWeek(weekDays);
    const hours = [];

    for (let h = startHour; h <= endHour; h++) {
      hours.push(h);
    }

    const baseHourHeight = 120;
    const preferredHourHeight = baseHourHeight * (this._config.height_scale || 1.0);

    const dayNames = this.getWeekdayNames();

    const allDayLayout = this.buildAllDayLayoutForSchedule(weekDays);
    const maxAllDayEvents = allDayLayout.maxLanes;

    const hasAllDayEvents = maxAllDayEvents > 0;
    const allDayHeight = hasAllDayEvents
      ? 16 + (maxAllDayEvents * 24) + ((maxAllDayEvents - 1) * 4) + 2
      : 0;

    const compactMaxHeight = this.getCompactMaxHeight(this._weekStandardContainerTopInViewport);
    const fallbackOffsetHeight = 127 + allDayHeight;
    const headerOffsetAdjustment = this._weekStandardHeaderHeight ? Math.max(0, this._weekStandardHeaderHeight - 95) : 0;
    const staticOffsetHeight = fallbackOffsetHeight + headerOffsetAdjustment;
    const availableSlotHeight = compactMaxHeight ? compactMaxHeight - staticOffsetHeight : null;
    const compactHourHeight = availableSlotHeight && availableSlotHeight > 0 ? Math.floor(availableSlotHeight / hours.length) : null;
    const hourHeight = compactHourHeight ? Math.max(20, Math.min(preferredHourHeight, compactHourHeight)) : preferredHourHeight;
    const timelineHeight = hourHeight * hours.length;
    const dayTimeSlotsStyle = `height: ${timelineHeight}px; min-height: ${timelineHeight}px;`;
    const timeHeaderSpacerHeight = this._weekStandardHeaderHeight ? Math.max(60, this._weekStandardHeaderHeight - 35) : null;
    const headerHeightStyle = this._weekStandardHeaderHeight ? `--week-standard-day-header-height: ${this._weekStandardHeaderHeight}px;--week-standard-time-header-spacer-height: ${timeHeaderSpacerHeight}px;` : '';
    const containerStyle = `${headerHeightStyle}${this.getCompactContainerStyle(compactMaxHeight)}`;

    const showCurrentTimeBar = this._config.show_current_time_bar && this.shouldShowCurrentTimeBar(today, startHour, endHour);

    return renderWeekStandardView({
      allDayHeight,
      allDayLayout,
      config: this._config,
      containerStyle,
      dayNames,
      dayTimeSlotsStyle,
      endHour,
      hasAllDayEvents,
      hourHeight,
      hours,
      showCurrentTimeBar,
      startHour,
      today,
      weekDays,
      helpers: {
        formatScheduleHour: (hour) => this.formatScheduleHour(hour),
        getDateKey: (date) => this.getDateKey(date),
        getDayStyleAttributes: (date, events, isToday) => this.getDayStyleAttributes(date, events, isToday),
        getEventsForDay: (date, options) => this.getEventsForDay(date, options),
        isEventHiddenByStyle: (event) => this.isEventHiddenByStyle(event),
        renderAllDayEventsForDay: (allDayLanes, height) => this.renderAllDayEventsForDay(allDayLanes, height),
        renderCalendarBadges: () => this.renderCalendarBadges(),
        renderCurrentTimeLine: (rangeStartHour, height) => this.renderCurrentTimeLine(rangeStartHour, height),
        renderDayBadges: (date, events) => this.renderDayBadges(date, events),
        renderDayForecast: (date, viewMode) => this.renderDayForecast(date, viewMode),
        renderTimedEventsForDay: (events, date, rangeStartHour, rangeEndHour, height) => this.renderTimedEventsForDay(events, date, rangeStartHour, rangeEndHour, height),
        sortEventsForDate: (events, date) => this.sortEventsForDate(events, date)
      }
    });
  }

  renderAgenda() {
    this.ensureAgendaWindowInitialized();
    const agendaDays = this.getAgendaDays();
    const agendaEventMinHeight = this.getAgendaEventMinHeight();
    const compactMaxHeight = this.getCompactMaxHeight(this._agendaContainerTopInViewport);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dayNames = this.getWeekdayNames();
    const monthFormatter = new Intl.DateTimeFormat(this.getLocale(), this.withTimeZone({ month: 'long', year: 'numeric' }));

    return renderAgendaView({
      agendaDays,
      agendaEventMinHeight,
      compactMaxHeight,
      config: this._config,
      today,
      dayNames,
      monthFormatter,
      helpers: {
        escapeHtml: this.escapeHtml.bind(this),
        formatEventTimeRange: this.formatEventTimeRange.bind(this),
        getCompactContainerStyle: this.getCompactContainerStyle.bind(this),
        getDisplayLocation: this.getDisplayLocation.bind(this),
        getDayStyleAttributes: this.getDayStyleAttributes.bind(this),
        getEventBubbleFontColor: this.getEventBubbleFontColor.bind(this),
        getEventBubbleFontSize: this.getEventBubbleFontSize.bind(this),
        getEventDaySegment: this.getEventDaySegment.bind(this),
        getEventDisplayTitle: this.getEventDisplayTitle.bind(this),
        getEventLocationFontSize: this.getEventLocationFontSize.bind(this),
        getEventStyle: this.getEventStyle.bind(this),
        getEventTimeFontSize: this.getEventTimeFontSize.bind(this),
        getEventsForDay: this.getEventsForDay.bind(this),
        isEventHiddenByStyle: this.isEventHiddenByStyle.bind(this),
        renderCalendarBadges: this.renderCalendarBadges.bind(this),
        renderCombinedCornerBubbles: this.renderCombinedCornerBubbles.bind(this),
        renderDayForecast: this.renderDayForecast.bind(this),
        renderEventIcon: this.renderEventIcon.bind(this),
        renderEventStyleCornerIcon: this.renderEventStyleCornerIcon.bind(this),
        renderEventTitleWithPrefix: this.renderEventTitleWithPrefix.bind(this),
        shouldShowCombinedCornerBubbles: this.shouldShowCombinedCornerBubbles.bind(this),
        shouldShowEventLocation: this.shouldShowEventLocation.bind(this),
        shouldShowEventTime: this.shouldShowEventTime.bind(this),
        sortEventsForDate: this.sortEventsForDate.bind(this),
        t: this.t.bind(this)
      }
    });
  }

  getScheduleHourRangeForWeek(weekDays) {
    const configuredStartHour = Number.isFinite(Number(this._config.week_start_hour))
      ? Math.min(23, Math.max(0, Number(this._config.week_start_hour)))
      : 0;
    const configuredEndHour = Number.isFinite(Number(this._config.week_end_hour))
      ? Math.min(23, Math.max(0, Number(this._config.week_end_hour)))
      : 23;

    if (this._config.lock_schedule_hours) {
      const normalizedEndHour = Math.max(configuredStartHour, configuredEndHour);
      return { startHour: configuredStartHour, endHour: normalizedEndHour };
    }

    let dynamicStartHour = configuredStartHour;
    let dynamicEndHour = configuredEndHour;

    weekDays.forEach((date) => {
      this.getEventsForDay(date).forEach((event) => {
        if (this.getVisibleCalendarColorsForEvent(event).length === 0) {
          return;
        }

        const daySegment = this.getEventDaySegment(event, date, { useScheduleVisualTreatment: true });
        if (!daySegment || daySegment.isAllDaySegment) {
          return;
        }

        const startHourFloat = this.getLocalDayHourFloat(daySegment.segmentStart, date);
        const endHourFloat = this.getLocalDayHourFloat(daySegment.segmentEnd, date);

        if (Number.isFinite(startHourFloat)) {
          dynamicStartHour = Math.min(dynamicStartHour, Math.floor(startHourFloat));
        }
        if (Number.isFinite(endHourFloat)) {
          dynamicEndHour = Math.max(dynamicEndHour, Math.floor(endHourFloat));
        }
      });
    });

    const normalizedStartHour = Math.min(23, Math.max(0, dynamicStartHour));
    const normalizedEndHour = Math.max(normalizedStartHour, Math.min(23, Math.max(0, dynamicEndHour)));

    return { startHour: normalizedStartHour, endHour: normalizedEndHour };
  }

  buildAllDayLayoutForSchedule(weekDays) {
    return buildContinuousDaySpanLayout(weekDays, {
      getDateKey: this.getDateKey.bind(this),
      getEventsForDay: (date) => this.getEventsForDay(date),
      getEventDaySegment: (event, date) => {
        const daySegment = this.getEventDaySegment(event, date, { useScheduleVisualTreatment: true });
        return daySegment?.isAllDaySegment ? daySegment : null;
      },
      getEventKey: this.getScheduleAllDayEventKey.bind(this),
      isEventVisible: (event) => this.getVisibleCalendarColorsForEvent(event).length > 0
    });
  }

  buildMonthSpanLayoutForWeek(weekDays) {
    return buildContinuousDaySpanLayout(weekDays, {
      getDateKey: this.getDateKey.bind(this),
      getEventsForDay: (date) => this.sortEventsForDate(
        this.getEventsForDay(date, { includeHiddenStyledEvents: false }).filter((event) => !this.isEventHiddenByStyle(event)),
        date
      ),
      getEventDaySegment: (event, date) => {
        const daySegment = this.getEventDaySegment(event, date);
        if (!daySegment) return null;
        return daySegment.isAllDaySegment && (!daySegment.startsOnDay || !daySegment.endsOnDay) ? daySegment : null;
      },
      getEventKey: this.getScheduleAllDayEventKey.bind(this),
      isEventVisible: (event) => this.getVisibleCalendarColorsForEvent(event).length > 0
    });
  }

  getScheduleAllDayEventKey(event) {
    const uid = event.uid || event.id;
    if (uid) {
      return `${uid}|${event.start?.date || event.start?.dateTime || event.start}|${event.end?.date || event.end?.dateTime || event.end}`;
    }

    return `${event.entityId || 'unknown'}|${event.summary || ''}|${event.start?.date || event.start?.dateTime || event.start}|${event.end?.date || event.end?.dateTime || event.end}`;
  }

  getDateKey(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  }

  renderCalendarBadges() {
    return renderCalendarBadges({
      badgeItems: this.getVirtualBadgeItems(),
      hideCalendarNames: !!this._config.hide_calendar_names,
      helpers: this.getCalendarBadgeRenderHelpers()
    });
  }

  renderAllDayEventsForDay(allDayLanes, allDayHeight) {
    return `
      <div class="all-day-events" style="min-height: ${allDayHeight}px; height: ${allDayHeight}px;">
        ${allDayLanes.length > 0 ? allDayLanes.map(lane => {
          if (!lane) {
            return '<div class="all-day-event-spacer"></div>';
          }

          const {
            event,
            extendsBeforeVisibleRange,
            extendsAfterVisibleRange,
            showTitle,
            displayTitle,
            visibleDaySpan
          } = lane;
          if (!lane.isFirstVisibleSegment) {
            return '<div class="all-day-event-spacer all-day-event-span-placeholder"></div>';
          }

          const eventStyle = this.getEventStyle(event, { withBorderAccent: false });
          const spanStyle = visibleDaySpan > 1
            ? ` --all-day-title-span-days: ${visibleDaySpan}; --all-day-title-gap-count: ${Math.max(visibleDaySpan - 1, 0)}; --all-day-visible-span: ${visibleDaySpan};`
            : '';
          const spanDataAttribute = visibleDaySpan > 1 ? ` data-all-day-span-days="${visibleDaySpan}"` : '';
          return `
            <div class="all-day-event ${extendsBeforeVisibleRange ? 'continues-prev' : ''} ${extendsAfterVisibleRange ? 'continues-next' : ''} ${showTitle && visibleDaySpan > 1 ? 'leading-span-title' : ''}"
                 style="${eventStyle} --event-bubble-font-size: ${this.getEventBubbleFontSize(event)}; --event-time-font-size: ${this.getEventTimeFontSize(event)}; --event-bubble-text-color: ${this.getEventBubbleFontColor(event)};${spanStyle}"${spanDataAttribute}
                 data-event='${JSON.stringify(event).replace(/'/g, "&#39;")}'>
              <div class="all-day-event-title ${showTitle && visibleDaySpan > 1 ? 'spans-multiple-days' : ''}">${showTitle ? this.renderEventTitleWithPrefix(event, displayTitle || this.getEventDisplayTitle(event)) : ''}</div>
              ${this.renderEventStyleCornerIcon(event)}
            </div>
          `;
        }).join('') : ''}
      </div>
    `;
  }

  renderTimedEventsForDay(events, date, startHour, endHour, hourHeight) {
    const timedEvents = events.map(event => {
      const daySegment = this.getEventDaySegment(event, date, { useScheduleVisualTreatment: true });
      if (!daySegment || daySegment.isAllDaySegment) {
        return null;
      }
      return { event, daySegment };
    }).filter(Boolean);

    // Process timed events for overlaps
    const eventBlocks = timedEvents.map(({ event, daySegment }) => {
      const { segmentStart, segmentEnd } = daySegment;
      const startHourFloat = this.getLocalDayHourFloat(segmentStart, date);
      const endHourFloat = this.getLocalDayHourFloat(segmentEnd, date);

      return {
        event,
        displayTitle: daySegment.displayTitle,
        eventStart: segmentStart,
        eventEnd: segmentEnd,
        startHourFloat,
        endHourFloat,
        startMinutes: Math.round(startHourFloat * 60),
        endMinutes: Math.round(endHourFloat * 60)
      };
    }).filter(block => block.endHourFloat > startHour && block.startHourFloat < (endHour + 1));

    // Sort by start time, then by duration (longer first)
    eventBlocks.sort((a, b) => {
      if (a.startMinutes !== b.startMinutes) {
        return a.startMinutes - b.startMinutes;
      }
      return (b.endMinutes - b.startMinutes) - (a.endMinutes - a.startMinutes);
    });

    const overlaps = (first, second) =>
      first.startMinutes < second.endMinutes && first.endMinutes > second.startMinutes;

    const clusters = [];
    eventBlocks.forEach(block => {
      const matchingClusters = [];
      clusters.forEach((cluster, index) => {
        if (cluster.some(other => overlaps(block, other))) {
          matchingClusters.push(index);
        }
      });

      if (matchingClusters.length === 0) {
        clusters.push([block]);
        return;
      }

      const targetIndex = matchingClusters.shift();
      clusters[targetIndex].push(block);

      matchingClusters.reverse().forEach(index => {
        clusters[targetIndex].push(...clusters[index]);
        clusters.splice(index, 1);
      });
    });

    clusters.forEach(cluster => {
      const columns = [];
      cluster.forEach(block => {
        let placed = false;
        for (const col of columns) {
          const hasOverlap = col.some(other => overlaps(block, other));
          if (!hasOverlap) {
            col.push(block);
            block.column = columns.indexOf(col);
            placed = true;
            break;
          }
        }

        if (!placed) {
          columns.push([block]);
          block.column = columns.length - 1;
        }
      });

      const clusterColumns = columns.length;
      cluster.forEach(block => {
        block.clusterColumns = clusterColumns;
      });
    });

    // Render timed events
    return eventBlocks.map(block => {
      const { event, displayTitle, eventStart, eventEnd, startHourFloat, endHourFloat, column } = block;

      const clampedStartHour = Math.max(startHourFloat, startHour);
      const clampedEndHour = Math.min(endHourFloat, endHour + 1);
      if (clampedEndHour <= clampedStartHour) {
        return '';
      }

      const duration = clampedEndHour - clampedStartHour;
      const top = (clampedStartHour - startHour) * hourHeight;
      const extraHeightForCombinedBubbles = this.shouldShowCombinedCornerBubbles(event) ? 16 : 0;
      const height = (duration * hourHeight) + extraHeightForCombinedBubbles;

      const clusterColumns = block.clusterColumns || 1;
      // Calculate width and position for concurrent events
      const width = clusterColumns > 1 ? `calc((100% - 16px) / ${clusterColumns})` : 'calc(100% - 16px)';
      const left = clusterColumns > 1 ? `calc(8px + ((100% - 16px) / ${clusterColumns}) * ${column})` : '8px';

      const eventStyle = this.getEventStyle(event, { withBorderAccent: true });

      return `
        <div class="week-standard-event"
             style="top: ${top}px; height: ${height}px; width: ${width}; left: ${left}; ${eventStyle} --event-bubble-font-size: ${this.getEventBubbleFontSize(event)}; --event-time-font-size: ${this.getEventTimeFontSize(event)}; --event-location-font-size: ${this.getEventLocationFontSize(event)}; --event-bubble-text-color: ${this.getEventBubbleFontColor(event)};"
             data-event='${JSON.stringify(event).replace(/'/g, "&#39;")}'>
          <div class="week-standard-event-title">${this.renderEventTitleWithPrefix(event, displayTitle || this.getEventDisplayTitle(event))}</div>
          ${this.shouldShowEventTime(event) ? `<div class="week-standard-event-time">${this.formatEventTimeRange(eventStart, eventEnd, { schedule: true })}</div>` : ''}
          ${this.shouldShowEventLocation(event) ? `<div class="week-standard-event-location">📍 ${this.escapeHtml(this.getDisplayLocation(event.location, event))}</div>` : ''}
          ${this.renderEventIcon(event)}
          ${this.renderEventStyleCornerIcon(event)}
          ${this.renderCombinedCornerBubbles(event)}
        </div>
      `;
    }).join('');
  }

  getLocalDayHourFloat(dateTime, referenceDate) {
    // Use wall-clock hour values relative to the rendered day so DST transitions
    // do not visually shift events by ±1 hour in the schedule grid.
    const referenceParts = this.getDisplayDateParts(referenceDate);
    const timeParts = this.getDateTimeParts(dateTime);
    const dayKey = Date.UTC(referenceParts.year, referenceParts.month - 1, referenceParts.day);
    const timeKey = Date.UTC(Number(timeParts.year), Number(timeParts.month) - 1, Number(timeParts.day));
    const dayDiff = (timeKey - dayKey) / 86400000;

    return (dayDiff * 24) +
      Number(timeParts.hour) +
      (Number(timeParts.minute) / 60) +
      (Number(timeParts.second) / 3600) +
      (dateTime.getMilliseconds() / 3600000);
  }

  getVisibleCalendarBadgesForEvent(event) {
    return getVisibleCalendarBadgesForEvent(event, {
      hiddenCalendars: this._hiddenCalendars,
      getVirtualBadgeForEvent: (badgeEvent) => this.getVirtualBadgeForEvent(badgeEvent),
      normalizeSingleColor: (color) => this.normalizeSingleColor(color),
      configColors: this._config.colors
    });
  }

  renderEventIcon(event) {
    if (this.shouldShowCombinedCornerBubbles(event)) {
      return '';
    }

    return renderEventIcon(event, {
      getEventStyleOverrides: (iconEvent) => this.getEventStyleOverrides(iconEvent),
      eventCalendarFriendlyName: this._config.event_calendar_friendly_name,
      hideEventCalendarBubble: this._config.hide_event_calendar_bubble,
      getModalCalendarBadgesForEvent: (iconEvent) => this.getModalCalendarBadgesForEvent(iconEvent),
      getCalendarName: (entityId) => this.getCalendarName(entityId),
      escapeHtml: (value) => this.escapeHtml(value)
    });
  }


  isCombinedEventWithinSingleVirtualCalendar(event) {
    return isCombinedEventWithinSingleVirtualCalendar(event, {
      hiddenCalendars: this._hiddenCalendars,
      getVirtualBadgeForEntity: (entityId) => this.getVirtualBadgeForEntity(entityId)
    });
  }

  shouldShowCombinedCornerBubbles(event) {
    return shouldShowCombinedCornerBubbles(event, {
      combineCalendars: this._config.combine_calendars,
      isSingleVirtualCalendar: this.isCombinedEventWithinSingleVirtualCalendar(event),
      styleOverrides: this.getEventStyleOverrides(event)
    });
  }

  renderCombinedCornerBubbles(event) {
    return renderCombinedCornerBubbles(event, {
      shouldShowCombinedCornerBubbles: (bubbleEvent) => this.shouldShowCombinedCornerBubbles(bubbleEvent),
      getModalCalendarBadgesForEvent: (bubbleEvent) => this.getModalCalendarBadgesForEvent(bubbleEvent),
      getCalendarName: (entityId) => this.getCalendarName(entityId),
      escapeHtml: (value) => this.escapeHtml(value)
    });
  }

  getEventStyleIconConfig(event) {
    const styleOverrides = this.getEventStyleOverrides(event);
    const icon = this.normalizeEventIconName(styleOverrides?.icon);
    if (!icon) return null;

    return {
      icon,
      color: this.normalizeEventIconColor(styleOverrides?.icon_color),
      size: this.normalizeStyleSizeValue(styleOverrides?.icon_size),
      position: this.normalizeEventIconPosition(styleOverrides?.icon_position) || 'before_title'
    };
  }

  renderEventStyleIcon(event, { position = 'before_title' } = {}) {
    return renderEventStyleIcon(this.getEventStyleIconConfig(event), {
      position,
      escapeHtml: (value) => this.escapeHtml(value)
    });
  }

  renderEventStyleCornerIcon(event) {
    return renderEventStyleCornerIcon(event, {
      getEventStyleIconConfig: (iconEvent) => this.getEventStyleIconConfig(iconEvent),
      escapeHtml: (value) => this.escapeHtml(value)
    });
  }

  renderEventTitleWithPrefix(event, title) {
    return renderEventTitleWithPrefix(event, title, {
      t: (key) => this.t(key),
      escapeHtml: (value) => this.escapeHtml(value),
      getEventStyleOverrides: (titleEvent) => this.getEventStyleOverrides(titleEvent),
      getEventStyleIconConfig: (titleEvent) => this.getEventStyleIconConfig(titleEvent),
      normalizeEventTitlePrefixMode: (mode) => this.normalizeEventTitlePrefixMode(mode),
      configuredEventTitlePrefix: this._config.event_title_prefix,
      getModalCalendarBadgesForEvent: (titleEvent) => this.getModalCalendarBadgesForEvent(titleEvent),
      getCalendarName: (entityId) => this.getCalendarName(entityId),
      normalizeSingleColor: (color) => this.normalizeSingleColor(color),
      getCalendarBadgeIcon: (entityId) => this.getCalendarBadgeIcon(entityId),
      normalizeBackgroundImageUrl: (url) => this.normalizeBackgroundImageUrl(url)
    });
  }


  lightenColor(color, amount) {
    const rgb = this.colorToRgb(color);
    if (!rgb) {
      return this.normalizeSingleColor(color);
    }

    // Lighten by blending with white
    const nr = Math.round(rgb.r + (255 - rgb.r) * amount);
    const ng = Math.round(rgb.g + (255 - rgb.g) * amount);
    const nb = Math.round(rgb.b + (255 - rgb.b) * amount);

    return `rgb(${nr}, ${ng}, ${nb})`;
  }

  getEventFontSize(event = null, configKey = 'event_font_size', fallbackPx = 11) {
    const styleOverrides = event ? this.getEventStyleOverrides(event) : null;
    return getEventFontSizeDisplayValue(styleOverrides?.[configKey] ?? this._config?.[configKey], fallbackPx);
  }

  getEventBubbleFontSize(event = null) {
    return this.getEventFontSize(event, 'event_font_size', 11);
  }

  getEventTimeFontSize(event = null) {
    return this.getEventFontSize(event, 'event_time_font_size', 9);
  }

  getEventLocationFontSize(event = null) {
    return this.getEventFontSize(event, 'event_location_font_size', 9);
  }

  shouldShowEventLocation(event) {
    return shouldShowEventLocation(event, {
      styleOverrides: this.getEventStyleOverrides(event),
      showEventLocation: this._config.show_event_location
    });
  }

  getDisplayLocation(location, event = null) {
    return getDisplayLocation(location, {
      styleOverrides: event ? this.getEventStyleOverrides(event) : null,
      useShortLocation: this._config?.use_short_location
    });
  }

  getEventBubbleFontColor(event) {
    return getEventBubbleFontColor(event, {
      styleOverrides: event ? this.getEventStyleOverrides(event) : null,
      hiddenCalendars: this._hiddenCalendars,
      eventFontColors: this._config?.event_font_colors,
      normalizeSingleColor: (color) => this.normalizeSingleColor(color),
      getEventBackgroundColor: (colorEvent) => this.getEventBackgroundColor(colorEvent),
      getContrastColor: (color) => this.getContractColor(color)
    });
  }

  shouldShowEventTime(event) {
    return shouldShowEventTime(event, {
      styleOverrides: event ? this.getEventStyleOverrides(event) : null,
      hiddenCalendars: this._hiddenCalendars,
      hideTimesForCalendars: this._config.hide_times_for_calendars
    });
  }

  shouldShowCurrentTimeBar(today, startHour, endHour) {
    const now = new Date();
    now.setSeconds(0, 0);
    if (now.toDateString() !== today.toDateString()) {
      return false;
    }

    const currentHourFloat = now.getHours() + (now.getMinutes() / 60);
    return currentHourFloat >= startHour && currentHourFloat <= (endHour + 1);
  }

  renderCurrentTimeLine(startHour, hourHeight) {
    const now = new Date();
    const currentHourFloat = now.getHours() + (now.getMinutes() / 60);
    const top = (currentHourFloat - startHour) * hourHeight;
    return `<div class="current-time-line" style="top: ${top}px;"></div>`;
  }

  formatScheduleHour(hour) {
    const date = this.zonedTimeToDate(2020, 1, 1, hour, 0, 0, 0);
    return this.formatScheduleTime(date);
  }

  getTimeFormatOptions() {
    const formatOptions = {
      hour: 'numeric',
      minute: '2-digit'
    };

    const config = this._config || {};
    if (Object.prototype.hasOwnProperty.call(config, 'use_24hr_schedule')) {
      formatOptions.hour12 = !config.use_24hr_schedule;
    }

    return formatOptions;
  }

  formatScheduleTime(date) {
    return new Intl.DateTimeFormat(this.getLocale(), this.withTimeZone(this.getTimeFormatOptions())).format(date);
  }

  uses24HourEventTime() {
    const formatter = new Intl.DateTimeFormat(this.getLocale(), this.withTimeZone(this.getTimeFormatOptions()));
    return formatter.resolvedOptions().hour12 === false;
  }

  isWholeHour(date) {
    const parts = this.getDateTimeParts(date);
    return Number(parts.minute) === 0 && Number(parts.second) === 0 && date.getMilliseconds() === 0;
  }

  formatLocalizedHour(date) {
    const formatter = new Intl.DateTimeFormat(this.getLocale(), this.withTimeZone(this.getTimeFormatOptions()));
    const hourPart = formatter.formatToParts(date).find((part) => part.type === 'hour');
    if (hourPart) {
      return hourPart.value;
    }

    return new Intl.NumberFormat(this.getLocale(), { useGrouping: false }).format(date.getHours());
  }

  formatShort12HourEventTime(date, options = {}) {
    if (!this.isWholeHour(date)) {
      return this.formatBaseEventTime(date, options);
    }

    const formatter = new Intl.DateTimeFormat(this.getLocale(), this.withTimeZone(this.getTimeFormatOptions()));
    const parts = formatter.formatToParts(date);
    const minuteIndex = parts.findIndex((part) => part.type === 'minute');
    const shortenedParts = parts.filter((part, index) => {
      if (part.type === 'minute') return false;
      return !(part.type === 'literal' && index === minuteIndex - 1);
    });
    return shortenedParts.map((part) => part.value).join('').replace(/\s+/g, ' ').trim();
  }

  formatShort24HourEventTime(date, { appendHourSuffix = true, omitWholeHourMinutes = true, schedule = false } = {}) {
    if (this.isWholeHour(date) && omitWholeHourMinutes) {
      return `${this.formatLocalizedHour(date)}${appendHourSuffix ? 'h' : ''}`;
    }

    return this.formatBaseEventTime(date, { schedule });
  }

  formatBaseEventTime(date, { schedule = false } = {}) {
    return schedule ? this.formatScheduleTime(date) : this.formatTime(date);
  }

  formatEventTime(date, options = {}) {
    if (!this._config?.shorten_event_times) {
      return this.formatBaseEventTime(date, options);
    }

    if (this.uses24HourEventTime()) {
      return this.formatShort24HourEventTime(date, options);
    }

    return this.formatShort12HourEventTime(date, options);
  }

  formatEventTimeRange(startDate, endDate, options = {}) {
    if (!this._config?.shorten_event_times) {
      return `${this.formatBaseEventTime(startDate, options)} - ${this.formatBaseEventTime(endDate, options)}`;
    }

    if (!this.uses24HourEventTime()) {
      return `${this.formatShort12HourEventTime(startDate, options)} - ${this.formatShort12HourEventTime(endDate, options)}`;
    }

    const startWholeHour = this.isWholeHour(startDate);
    const endWholeHour = this.isWholeHour(endDate);
    if (startWholeHour && endWholeHour) {
      return `${this.formatShort24HourEventTime(startDate, { ...options, appendHourSuffix: false })}-${this.formatShort24HourEventTime(endDate, options)}`;
    }

    return `${this.formatShort24HourEventTime(startDate, { ...options, appendHourSuffix: false })}-${this.formatShort24HourEventTime(endDate, { ...options, appendHourSuffix: endWholeHour })}`;
  }

  getMonthWeekRowCount() {
    if (this._config.rolling_weeks !== null && this._viewMode === 'month') {
      return this._config.rolling_weeks + 1;
    }

    const year = this._currentDate.getFullYear();
    const month = this._currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startDay = (firstDay - this._config.firstDayOfWeek + 7) % 7;
    return Math.ceil((startDay + daysInMonth) / 7);
  }

  getEventBubbleFontSizePx() {
    const fallbackPx = 11;
    const sizeValue = this.getEventBubbleFontSize();

    if (typeof window === 'undefined' || !this._root) {
      const parsed = parseFloat(sizeValue);
      return Number.isFinite(parsed) ? parsed : fallbackPx;
    }

    const probe = document.createElement('span');
    probe.style.position = 'absolute';
    probe.style.visibility = 'hidden';
    probe.style.fontSize = sizeValue;
    probe.style.lineHeight = 'normal';
    probe.textContent = 'M';
    this._root.appendChild(probe);

    const computedFontSize = parseFloat(window.getComputedStyle(probe).fontSize);
    probe.remove();

    return Number.isFinite(computedFontSize) ? computedFontSize : fallbackPx;
  }

  getFontSizePx(sizeValue, fallbackPx = 11) {
    if (typeof window === 'undefined' || !this._root) {
      const parsed = parseFloat(sizeValue);
      return Number.isFinite(parsed) ? parsed : fallbackPx;
    }

    const probe = document.createElement('span');
    probe.style.position = 'absolute';
    probe.style.visibility = 'hidden';
    probe.style.fontSize = sizeValue;
    probe.style.lineHeight = 'normal';
    probe.textContent = 'M';
    this._root.appendChild(probe);

    const computedFontSize = parseFloat(window.getComputedStyle(probe).fontSize);
    probe.remove();

    return Number.isFinite(computedFontSize) ? computedFontSize : fallbackPx;
  }

  getAgendaEventMinHeight() {
    const timeFontPx = this.getFontSizePx(this.getEventTimeFontSize(), 9);
    const titleFontPx = this.getFontSizePx(this.getEventBubbleFontSize(), 11);
    const locationFontPx = this.getFontSizePx(this.getEventLocationFontSize(), 9);

    const timeRowHeight = Math.ceil(timeFontPx * 1.2);
    const titleRowHeight = Math.ceil(titleFontPx * 1.25);
    const locationRowHeight = Math.ceil(locationFontPx * 1.3);

    const verticalPadding = 20; // 10px top + 10px bottom
    const rowSpacing = 8; // time mb + location mt
    const buffer = 8;
    const total = verticalPadding + timeRowHeight + titleRowHeight + locationRowHeight + rowSpacing + buffer;

    return `${Math.max(56, total)}px`;
  }

  getMonthEventRowHeight() {
    const fontSizePx = this.getEventBubbleFontSizePx();
    const lineHeightPx = fontSizePx * 1.2;
    const verticalPaddingPx = 8; // .event has 4px top + 4px bottom padding
    const marginBottomPx = 3; // .event margin-bottom in month view
    return Math.ceil(lineHeightPx + verticalPaddingPx + marginBottomPx);
  }

  renderDays() {
    return renderMonthDays({
      currentDate: this._currentDate,
      config: this._config,
      viewMode: this._viewMode,
      shouldShowWeekNumbers: this.shouldShowMonthWeekNumbers(),
      helpers: {
        getDateKey: (date) => this.getDateKey(date),
        getMonthSpanLayoutForWeek: (weekDays) => this.buildMonthSpanLayoutForWeek(weekDays),
        renderDay: (day, date, isOtherMonth, monthSpanLanes) => this.renderDay(day, date, isOtherMonth, monthSpanLanes),
        renderMonthWeekNumberCell: (rowStartDate) => this.renderMonthWeekNumberCell(rowStartDate)
      }
    });
  }

  getMaxVisibleEventsForMonthDay() {
    const defaultMaxVisible = 3;

    if (this._viewMode === 'month' && this.shouldShowAllEventsInMonth()) {
      return Number.MAX_SAFE_INTEGER;
    }

    if (this._viewMode !== 'month' || !this._config.compact_height) {
      return defaultMaxVisible;
    }

    const compactMaxHeight = this.getCompactMaxHeight(this._monthContainerTopInViewport);
    if (!compactMaxHeight) {
      return defaultMaxVisible;
    }

    const weekRows = this.getMonthWeekRowCount();
    if (!weekRows || weekRows < 1) {
      return defaultMaxVisible;
    }

    const gridGap = 1;
    const dayHeaderRowHeight = 41;
    const dayCellVerticalPadding = 16; // .day-cell has 8px top + 8px bottom padding
    const dayNumberBlockHeight = 42; // .day-header-row min-height in CSS
    const eventRowHeight = this.getMonthEventRowHeight();

    const contentHeight = compactMaxHeight - dayHeaderRowHeight - (weekRows * gridGap);
    const dayCellHeight = Math.floor(contentHeight / weekRows);
    // Do not pre-reserve space for the "+N more" indicator here. Overflow handling
    // swaps one event row for the indicator in renderDay(), so reserving both causes
    // under-counting and hidden space.
    const usableEventHeight = dayCellHeight - dayCellVerticalPadding - dayNumberBlockHeight;
    if (!Number.isFinite(usableEventHeight) || usableEventHeight <= 0) {
      return 1;
    }

    return Math.max(1, Math.floor(usableEventHeight / eventRowHeight));
  }

  shouldShowMonthWeekNumbers() {
    return this._viewMode === 'month' && !!this._config?.show_week_numbers_month;
  }

  getIsoWeekNumber(date) {
    return getIsoWeekNumber(date);
  }

  formatMonthWeekNumberLabel(date) {
    const weekNumber = this.getIsoWeekNumber(date);
    const configuredPrefix = this._config?.week_number_prefix;
    const weekPrefix = configuredPrefix == null ? this.t('monthWeekPrefix') : configuredPrefix;
    const localizedWeekNumber = new Intl.NumberFormat(this.getLocale()).format(weekNumber);
    return weekPrefix ? `${weekPrefix} ${localizedWeekNumber}` : localizedWeekNumber;
  }

  getIsoWeekAnchorDateForRow(rowStartDate) {
    const anchorDate = new Date(rowStartDate);
    const daysUntilMonday = (1 - anchorDate.getDay() + 7) % 7;
    anchorDate.setDate(anchorDate.getDate() + daysUntilMonday);
    return anchorDate;
  }

  renderMonthWeekNumberCell(rowStartDate) {
    const anchorDate = this.getIsoWeekAnchorDateForRow(rowStartDate);
    const weekLabel = this.formatMonthWeekNumberLabel(anchorDate);
    const localizedWeekNumber = new Intl.NumberFormat(this.getLocale()).format(this.getIsoWeekNumber(anchorDate));
    const ariaLabel = this.t('monthWeekAriaLabel', { week: localizedWeekNumber });
    return `
      <div class="month-week-number-cell" aria-label="${this.escapeHtml(ariaLabel)}">
        <span class="month-week-number-text">${this.escapeHtml(weekLabel)}</span>
      </div>
    `;
  }

  getDayBadges(date, dayEvents) {
    const rules = Array.isArray(this._config?.day_badges) ? this._config.day_badges : [];
    if (!rules.length || !Array.isArray(dayEvents)) return [];

    return rules
      .map((rule) => {
        const matchResult = this.matchesAdvancedRule(rule, { date, dayEvents });
        if (!matchResult.matches) return null;
        const resolvedRule = this.resolveDayBadgeForRender(rule, date, matchResult.matchedEvent);
        if (!resolvedRule.icon && !resolvedRule.text) return null;
        return resolvedRule;
      })
      .filter(Boolean);
  }

  renderDayBadges(date, dayEvents) {
    return renderDayBadges(date, dayEvents, {
      escapeHtml: this.escapeHtml.bind(this),
      getDayBadges: this.getDayBadges.bind(this),
      registerDayBadgeAction: this.registerDayBadgeAction.bind(this)
    });
  }

  registerDayBadgeAction(tapAction) {
    if (!tapAction || tapAction.action !== 'fire-dom-event' || typeof tapAction.event_type !== 'string' || !tapAction.event_type.trim()) {
      return null;
    }
    if (!this._dayBadgeActions) this._dayBadgeActions = new Map();
    this._dayBadgeActionSequence = (this._dayBadgeActionSequence || 0) + 1;
    const actionId = `day-badge-action-${this._dayBadgeActionSequence}`;
    this._dayBadgeActions.set(actionId, {
      event_type: tapAction.event_type.trim(),
      event_data: tapAction.event_data && typeof tapAction.event_data === 'object' && !Array.isArray(tapAction.event_data)
        ? { ...tapAction.event_data }
        : {}
    });
    return actionId;
  }

  handleDayBadgeActionClick(event, actionEl) {
    event.preventDefault();
    event.stopPropagation();
    const actionId = actionEl?.getAttribute?.('data-day-badge-action-id');
    const action = actionId ? this._dayBadgeActions?.get(actionId) : null;
    if (!action?.event_type) return;

    this.dispatchEvent(new CustomEvent(action.event_type, {
      detail: action.event_data || {},
      bubbles: true,
      composed: true
    }));
  }

  trimTrailingNullMonthSpanLanes(monthSpanLanes = []) {
    let lastOccupiedLaneIndex = -1;
    (monthSpanLanes || []).forEach((lane, index) => {
      if (lane) lastOccupiedLaneIndex = index;
    });

    return lastOccupiedLaneIndex >= 0 ? monthSpanLanes.slice(0, lastOccupiedLaneIndex + 1) : [];
  }

  renderDay(dayNum, date, isOtherMonth, monthSpanLanes = []) {
    monthSpanLanes = this.trimTrailingNullMonthSpanLanes(monthSpanLanes);
    const today = new Date();
    const isToday = date.toDateString() === today.toDateString();
    const dayEventsForMatching = this.getEventsForDay(date, { includeHiddenStyledEvents: true });
    let dayEvents = dayEventsForMatching.filter((event) => !this.isEventHiddenByStyle(event));
    dayEvents = this.sortEventsForDate(dayEvents, date);

    const maxVisible = this.getMaxVisibleEventsForMonthDay();
    const spannedEventKeys = new Set((monthSpanLanes || [])
      .filter(Boolean)
      .map((lane) => this.getScheduleAllDayEventKey(lane.event)));
    const nonSpannedDayEvents = dayEvents.filter((event) => !spannedEventKeys.has(this.getScheduleAllDayEventKey(event)));
    const nonSpannedEventCount = nonSpannedDayEvents.length;
    const getHiddenEventCountForVisibleRows = (visibleRows) => {
      const visibleMonthSpanLanes = (monthSpanLanes || []).slice(0, visibleRows);
      const visibleSpanLaneCount = visibleMonthSpanLanes.filter(Boolean).length;
      const hiddenSpanLaneCount = (monthSpanLanes || []).slice(visibleRows).filter(Boolean).length;
      const hiddenNonSpannedEventCount = Math.max(0, nonSpannedEventCount - Math.max(0, visibleRows - visibleSpanLaneCount));

      return hiddenSpanLaneCount + hiddenNonSpannedEventCount;
    };
    const hasOverflow = getHiddenEventCountForVisibleRows(maxVisible) > 0;
    const visibleEvents = hasOverflow ? Math.max(0, maxVisible - 1) : maxVisible;
    const visibleMonthSpanLanes = (monthSpanLanes || []).slice(0, visibleEvents);
    const hiddenEventCount = getHiddenEventCountForVisibleRows(visibleEvents);

    const dayStyle = this.getDayStyleAttributes(date, dayEventsForMatching, isToday);

    return renderDayCell({
      date,
      dayEvents: nonSpannedDayEvents,
      dayEventsForMatching,
      dayNum,
      dayStyle,
      hiddenEventCount,
      isOtherMonth,
      monthSpanLanes: visibleMonthSpanLanes,
      monthSpanEventKeys: [...spannedEventKeys],
      isToday,
      visibleEvents,
      helpers: {
        renderDayBadges: this.renderDayBadges.bind(this),
        renderDayForecast: this.renderDayForecast.bind(this),
        getEventKey: this.getScheduleAllDayEventKey.bind(this),
        renderMonthDayEvent: this.renderMonthDayEvent.bind(this),
        renderMonthSpanLane: this.renderMonthSpanLane.bind(this),
        t: this.t.bind(this)
      }
    });
  }


  renderMonthSpanLane(lane) {
    if (!lane) {
      return '<div class="event month-span-event-spacer"></div>';
    }

    if (!lane.isFirstVisibleSegment) {
      return `<div class="event month-span-event-spacer month-span-event-placeholder" style="--event-bubble-font-size: ${this.getEventBubbleFontSize(lane.event)}; --event-time-font-size: ${this.getEventTimeFontSize(lane.event)}; --event-bubble-text-color: ${this.getEventBubbleFontColor(lane.event)};"></div>`;
    }

    const { event, extendsBeforeVisibleRange, extendsAfterVisibleRange, displayTitle, visibleDaySpan } = lane;
    const eventStyle = this.getEventStyle(event);
    const spanStyle = visibleDaySpan > 1
      ? ` --month-event-visible-span: ${visibleDaySpan}; --month-event-gap-count: ${Math.max(visibleDaySpan - 1, 0)};`
      : '';
    const spanDataAttribute = visibleDaySpan > 1 ? ` data-month-span-days="${visibleDaySpan}"` : '';

    return `
      <div class="event month-span-event ${extendsBeforeVisibleRange ? 'continues-prev' : ''} ${extendsAfterVisibleRange ? 'continues-next' : ''}" style="${eventStyle}; --event-bubble-font-size: ${this.getEventBubbleFontSize(event)}; --event-time-font-size: ${this.getEventTimeFontSize(event)}; --event-bubble-text-color: ${this.getEventBubbleFontColor(event)};${spanStyle}"${spanDataAttribute} data-event='${JSON.stringify(event).replace(/'/g, "&#39;")}'>
        ${this.renderEventTitleWithPrefix(event, displayTitle || this.getEventDisplayTitle(event))}
        ${this.renderEventStyleCornerIcon(event)}
        ${this.renderCombinedCornerBubbles(event)}
      </div>
    `;
  }

  renderMonthDayEvent(event, date) {
    if (this.shouldRenderMonthEventsAsWeekCompact()) {
      return this.renderWeekCompactEvent(event, date);
    }

    return this.renderEvent(event, date);
  }

  renderWeekCompactEvent(event, date) {
    const daySegment = this.getEventDaySegment(event, date);
    if (!daySegment) return '';
    const { segmentStart, segmentEnd, isAllDaySegment } = daySegment;
    const timeLabel = isAllDaySegment
      ? this.t('allDay')
      : this.formatEventTimeRange(segmentStart, segmentEnd);
    const eventStyle = this.getEventStyle(event);

    return `
      <div class="week-compact-event" style="${eventStyle} --event-bubble-font-size: ${this.getEventBubbleFontSize(event)}; --event-time-font-size: ${this.getEventTimeFontSize(event)}; --event-location-font-size: ${this.getEventLocationFontSize(event)}; --event-bubble-text-color: ${this.getEventBubbleFontColor(event)};" data-event='${JSON.stringify(event).replace(/'/g, "&#39;")}'>
        ${this.shouldShowEventTime(event) ? `<div class="week-compact-event-time">${timeLabel}</div>` : ''}
        <div class="week-compact-event-title">${this.renderEventTitleWithPrefix(event, this.getEventDisplayTitle(event))}</div>
        ${this.shouldShowEventLocation(event) ? `<div class="week-compact-event-location">📍 ${this.escapeHtml(this.getDisplayLocation(event.location, event))}</div>` : ''}
        ${this.renderEventStyleCornerIcon(event)}
        ${this.renderCombinedCornerBubbles(event)}
      </div>
    `;
  }

  renderEvent(event, date) {
    const daySegment = this.getEventDaySegment(event, date);
    if (!daySegment) return '';
    const { segmentStart, isAllDaySegment } = daySegment;
    const eventStyle = this.getEventStyle(event);

    return `
      <div class="event" style="${eventStyle}; --event-bubble-font-size: ${this.getEventBubbleFontSize(event)}; --event-time-font-size: ${this.getEventTimeFontSize(event)}; --event-bubble-text-color: ${this.getEventBubbleFontColor(event)};" data-event='${JSON.stringify(event).replace(/'/g, "&#39;")}'>
        ${!isAllDaySegment && this.shouldShowEventTime(event) ? `<span class="event-time">${this.formatEventTime(segmentStart)}</span>` : ''}
        ${this.renderEventTitleWithPrefix(event, this.getEventDisplayTitle(event))}
        ${this.renderEventStyleCornerIcon(event)}
        ${this.renderCombinedCornerBubbles(event)}
      </div>
    `;
  }

  normalizeEventTextValue(value) {
    return normalizeEventTextValue(value);
  }

  getNormalizedEventTimeValue(value) {
    if (!value) return '';

    const toDateTimeTimestamp = (rawValue) => {
      const normalizedRaw = this.normalizeEventTextValue(rawValue);
      if (!normalizedRaw) return null;

      const floatingMatch = normalizedRaw.match(/^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2})(?::(\d{2}))?(?:\.(\d+))?(Z|[+-]\d{2}:\d{2})?$/i);
      if (!floatingMatch) {
        return null;
      }

      const [, yearText, monthText, dayText, hourText, minuteText, secondText, fractionText, tzText] = floatingMatch;
      const year = Number(yearText);
      const month = Number(monthText);
      const day = Number(dayText);
      const hour = Number(hourText);
      const minute = Number(minuteText);
      const second = Number(secondText || '0');
      const millis = Number(((fractionText || '').slice(0, 3)).padEnd(3, '0'));

      const timestamp = tzText
        ? Date.parse(`${yearText}-${monthText}-${dayText}T${hourText}:${minuteText}:${String(second).padStart(2, '0')}.${String(millis).padStart(3, '0')}${tzText.toUpperCase()}`)
        : new Date(year, month - 1, day, hour, minute, second, millis).getTime();

      return Number.isFinite(timestamp) ? timestamp : null;
    };

    if (typeof value === 'object') {
      if (value.dateTime) {
        const parsedTimestamp = toDateTimeTimestamp(value.dateTime);
        if (parsedTimestamp !== null) return `dt:${parsedTimestamp}`;

        const ts = new Date(value.dateTime).getTime();
        return Number.isFinite(ts) ? `dt:${ts}` : `dt:${String(value.dateTime)}`;
      }

      if (value.date) {
        const day = this.normalizeEventTextValue(value.date);
        return `d:${day}`;
      }
    }

    const normalized = this.normalizeEventTextValue(value);
    if (!normalized) return '';

    if (/^\d{4}-\d{2}-\d{2}$/.test(normalized)) {
      return `d:${normalized}`;
    }

    const parsedTimestamp = toDateTimeTimestamp(normalized);
    if (parsedTimestamp !== null) return `dt:${parsedTimestamp}`;

    const ts = new Date(normalized).getTime();
    return Number.isFinite(ts) ? `dt:${ts}` : normalized;
  }

  getEventExactMatchKey(event) {
    const start = this.getNormalizedEventTimeValue(event.start);
    const end = this.getNormalizedEventTimeValue(event.end);
    const summary = this.normalizeEventTextValue(event.summary);
    const location = this.normalizeEventTextValue(event.location);
    return `${start}|${end}|${summary}|${location}`;
  }


  combineDuplicateCalendarEvents(events) {
    if (!this._config.combine_calendars) {
      return events;
    }

    const groupedEvents = new Map();

    events.forEach(event => {
      const key = this.getEventExactMatchKey(event);
      if (!groupedEvents.has(key)) {
        groupedEvents.set(key, {
          baseEvent: event,
          calendars: [{ entityId: event.entityId, color: event.color }],
          sourceEvents: [event]
        });
        return;
      }

      const grouped = groupedEvents.get(key);
      if (!grouped.calendars.some(calendar => calendar.entityId === event.entityId)) {
        grouped.calendars.push({ entityId: event.entityId, color: event.color });
      }
      grouped.sourceEvents.push(event);
    });

    return Array.from(groupedEvents.values()).flatMap(({ baseEvent, calendars, sourceEvents }) => {
      if (calendars.length === 1) {
        return sourceEvents;
      }

      return {
        ...baseEvent,
        isCombinedCalendarEvent: true,
        sourceCalendars: calendars,
        sourceEntityIds: calendars.map(calendar => calendar.entityId),
        sourceEvents,
        entityId: calendars[0].entityId,
        color: calendars[0].color
      };
    });
  }


  getCustomEventColor(event) {
    return resolveCustomEventColor(event, this._customEventColors, {
      getEventIdentityKey: this.getEventIdentityKey.bind(this)
    });
  }

  getCustomEventColorKeys(event) {
    return getCustomEventColorKeys(event, {
      getEventIdentityKey: this.getEventIdentityKey.bind(this)
    });
  }

  getEffectiveEventColor(event, styleCandidates = null, { virtualColor = null } = {}) {
    return this.getCustomEventColor(event) || styleCandidates?.background_color?.value || virtualColor || event?.color || null;
  }

  getEventAccentColor(event) {
    return this.getVisibleCalendarColorsForEvent(event)[0] || this.getEventBackgroundColor(event);
  }

  getVirtualCalendarColor(virtualCalendar, event = null) {
    if (!virtualCalendar) return null;
    const fallbackColor = event?.color || this.normalizeSingleColor(this._config.colors[virtualCalendar.entities[0]]);
    return virtualCalendar.color || fallbackColor;
  }

  getVisibleSourceEntityIdsForEvent(event) {
    if (!event) return [];
    if (event.isCombinedCalendarEvent && Array.isArray(event.sourceEvents)) {
      return event.sourceEvents
        .map((sourceEvent) => sourceEvent?.entityId)
        .filter((entityId) => entityId && !this._hiddenCalendars.has(entityId));
    }
    if (event.isCombinedCalendarEvent && Array.isArray(event.sourceEntityIds)) {
      return event.sourceEntityIds.filter((entityId) => entityId && !this._hiddenCalendars.has(entityId));
    }
    if (event.isCombinedCalendarEvent && Array.isArray(event.sourceCalendars)) {
      return event.sourceCalendars
        .map((calendar) => calendar?.entityId)
        .filter((entityId) => entityId && !this._hiddenCalendars.has(entityId));
    }
    return event.entityId && !this._hiddenCalendars.has(event.entityId) ? [event.entityId] : [];
  }

  getVisibleCalendarColorsForEvent(event) {
    const visibleSourceEntityIds = this.getVisibleSourceEntityIdsForEvent(event);
    if (visibleSourceEntityIds.length === 0) return [];

    const styleOverrides = this.getEventStyleOverrides(event);
    if (styleOverrides?.hasExplicitBackgroundColor && styleOverrides.backgroundColors?.length) {
      return styleOverrides.backgroundColors.filter(Boolean);
    }

    const virtualCalendar = this.getVirtualBadgeForEvent(event);
    if (virtualCalendar) {
      const hasVisibleVirtualSource = visibleSourceEntityIds.some((entityId) => virtualCalendar.entities.includes(entityId));
      if (!hasVisibleVirtualSource) return [];

      const virtualColor = this.getVirtualCalendarColor(virtualCalendar, event);

      if (event?.isCombinedCalendarEvent && Array.isArray(event.sourceCalendars)) {
        const additionalColors = Array.from(new Set(event.sourceCalendars
          .filter((calendar) => calendar?.entityId && !virtualCalendar.entities.includes(calendar.entityId))
          .filter((calendar) => !this._hiddenCalendars.has(calendar.entityId))
          .map((calendar) => calendar.color)
          .filter(Boolean)));

        if (additionalColors.length > 0) {
          return [virtualColor, ...additionalColors];
        }
      }

      return [virtualColor];
    }

    if (event.isCombinedCalendarEvent && Array.isArray(event.sourceCalendars)) {
      return event.sourceCalendars
        .filter(calendar => !this._hiddenCalendars.has(calendar.entityId))
        .map(calendar => calendar.color);
    }

    return [event.color];
  }

  getMatchedEventStyleRules(event) {
    const configuredRules = Array.isArray(this._config?.event_styles) ? this._config.event_styles : [];
    if (configuredRules.length === 0) return [];
    return configuredRules.filter((rule) => this.matchesAdvancedRule(rule, { event }).matches);
  }

  getSingleEventStyleCandidates(event) {
    const rules = this.getMatchedEventStyleRules(event);
    const candidates = {};

    rules.forEach((rule) => {
      Object.entries(rule.output?.style || rule.style || {}).forEach(([key, value]) => {
        if (value === undefined || value === null || value === '') return;
        const existing = candidates[key];
        if (!existing || rule.priority > existing.priority || (rule.priority === existing.priority && rule.index < existing.ruleIndex)) {
          candidates[key] = { value, priority: rule.priority, ruleIndex: rule.index };
        }
      });
    });

    return candidates;
  }

  getEventStyleOverrides(event) {
    if (!event) return null;

    if (event.isCombinedCalendarEvent && Array.isArray(event.sourceEvents)) {
      const visibleSources = event.sourceEvents.filter((sourceEvent) => !this._hiddenCalendars.has(sourceEvent.entityId));
      if (visibleSources.length === 0) return null;

      const sourceCandidates = visibleSources.map((sourceEvent, sourceIndex) => {
        const candidates = this.getSingleEventStyleCandidates(sourceEvent);
        const customColor = this.getCustomEventColor(sourceEvent);
        const virtualColor = this.getVirtualCalendarColor(this.getVirtualBadgeForEntity(sourceEvent.entityId), sourceEvent);
        return { sourceEvent, sourceIndex, candidates, customColor, virtualColor };
      });

      const hasExplicitBackgroundColor = sourceCandidates.some(({ candidates, customColor }) =>
        !!customColor || (candidates.background_color?.value !== undefined && candidates.background_color?.value !== null && candidates.background_color?.value !== '')
      );
      const backgroundColors = sourceCandidates.map(({ sourceEvent, candidates, virtualColor }) => this.getEffectiveEventColor(sourceEvent, candidates, { virtualColor }));
      const uniqueBackgroundCount = new Set(backgroundColors).size;
      const hasDuplicateBackgroundColors = uniqueBackgroundCount !== backgroundColors.length;

      const mergedOverrides = {};
      const allStyleKeys = new Set(sourceCandidates.flatMap(({ candidates }) => Object.keys(candidates)));
      allStyleKeys.delete('background_color');

      allStyleKeys.forEach((styleKey) => {
        let best = null;
        sourceCandidates.forEach(({ candidates, sourceIndex }) => {
          const candidate = candidates[styleKey];
          if (!candidate) return;
          const candidatePriority = Number.isFinite(candidate.priority) ? candidate.priority : 0;
          if (!best || candidatePriority > best.priority || (candidatePriority === best.priority && sourceIndex < best.sourceIndex)) {
            best = { ...candidate, priority: candidatePriority, sourceIndex };
          }
        });

        if (best) mergedOverrides[styleKey] = best.value;
      });

      return {
        ...mergedOverrides,
        backgroundColors,
        hasDuplicateBackgroundColors,
        hasExplicitBackgroundColor
      };
    }

    const candidates = this.getSingleEventStyleCandidates(event);
    const overrides = Object.entries(candidates).reduce((acc, [key, meta]) => {
      acc[key] = meta.value;
      return acc;
    }, {});
    const customColor = this.getCustomEventColor(event);
    if (customColor) {
      overrides.background_color = customColor;
    }
    overrides.backgroundColors = [this.getEffectiveEventColor(event, candidates)];
    overrides.hasDuplicateBackgroundColors = false;
    overrides.hasExplicitBackgroundColor = !!customColor || Object.prototype.hasOwnProperty.call(overrides, 'background_color');
    return overrides;
  }

  getEventDisplayTitle(event) {
    return this.getEventStyleOverrides(event)?.display_title || event?.summary || this.t('untitledEvent');
  }

  isEventHiddenByStyle(event) {
    return this.getEventStyleOverrides(event)?.hide === true;
  }

  createZebraStripeGradient(colors) {
    if (colors.length === 1) {
      return colors[0];
    }

    const configuredStripeWidth = Number(this._config?.combine_calendars_width);
    const stripeWidthPx = Number.isFinite(configuredStripeWidth) && configuredStripeWidth > 0
      ? configuredStripeWidth
      : 12;
    const cycle = colors.map((color, index) => {
      const start = index * stripeWidthPx;
      const end = start + stripeWidthPx;
      return `${color} ${start}px ${end}px`;
    }).join(', ');

    return `repeating-linear-gradient(135deg, ${cycle})`;
  }

  createVerticalBarsGradient(colors) {
    const segments = colors.map((color, index) => {
      const start = (index / colors.length) * 100;
      const end = ((index + 1) / colors.length) * 100;
      return `${color} ${start}% ${end}%`;
    }).join(', ');
    return `linear-gradient(to bottom, ${segments})`;
  }

  createDotsDecoration(colors, indicatorWidth) {
    const safeWidth = Math.max(1, indicatorWidth);
    const dotRadius = Math.max(2, Math.floor(safeWidth * 0.3));
    const x = safeWidth / 2;
    return colors
      .map((color, index) => {
        const y = (safeWidth / 2) + (index * safeWidth);
        return `radial-gradient(circle at ${x}px ${y}px, ${color} 0 ${dotRadius}px, transparent ${dotRadius + 1}px)`;
      })
      .join(', ');
  }

  getCombinedBackgroundColor(visibleColors, fallbackColor) {
    const primaryColor = visibleColors[0] || fallbackColor;
    const option = this.normalizeCombineBackground(this._config?.combine_background);
    if (option === DEFAULT_COMBINE_BACKGROUND) return primaryColor;
    if (option === 'neutral') return this.getEventNeutralBackgroundColor();
    return option;
  }

  getEventNeutralBackgroundColor() {
    const normalized = this.normalizeSingleColor(this._config?.event_neutral_background);
    return normalized || DEFAULT_EVENT_NEUTRAL_BACKGROUND;
  }

  getEventTintBackgroundColor(primaryColor) {
    const tintTransparency = this.normalizeBackgroundOpacity(this._config?.event_tint_opacity, DEFAULT_EVENT_TINT_OPACITY);
    const tintOpacity = 1 - (tintTransparency / 100);
    const baseRgb = this._isDarkMode
      ? { r: 42, g: 47, b: 54 }
      : { r: 255, g: 255, b: 255 };
    const primaryRgb = this.colorToRgb(primaryColor);
    if (!primaryRgb) return this.colorWithAlpha(primaryColor, tintOpacity);
    const composed = this.blendRgb(primaryRgb, baseRgb, tintOpacity);
    return `rgb(${composed.r}, ${composed.g}, ${composed.b})`;
  }

  getEventColorBarWidth() {
    const configuredWidth = Number(this._config?.event_color_bar_width);
    if (Number.isFinite(configuredWidth) && configuredWidth > 0) return configuredWidth;
    const combineWidth = Number(this._config?.combine_calendars_width);
    if (Number.isFinite(combineWidth) && combineWidth > 0) return combineWidth;
    return DEFAULT_EVENT_COLOR_BAR_WIDTH;
  }

  getEventBackgroundColor(event) {
    const visibleColors = this.getVisibleCalendarColorsForEvent(event);
    const primaryColor = visibleColors[0] || event?.color || '#3b82f6';
    const eventColorMode = this.normalizeEventColorMode(this._config?.event_color_mode);

    if (visibleColors.length <= 1) {
      if (eventColorMode === 'left-neutral') {
        return this.getEventNeutralBackgroundColor();
      }
      if (eventColorMode === 'left-tint') {
        return this.getEventTintBackgroundColor(primaryColor);
      }
      return primaryColor;
    }

    return this.getCombinedBackgroundColor(visibleColors, primaryColor);
  }

  getContractColor(backgroundColor) {
    return getContrastColor(backgroundColor, {
      colorToRgb: this.colorToRgb.bind(this)
    });
  }

  getIndicatorColors(visibleColors, combineStyle, combineBackgroundOption) {
    if ((combineStyle === 'bars' || combineStyle === 'dots') && combineBackgroundOption === 'primary') {
      return visibleColors.slice(1);
    }
    return visibleColors;
  }

  getEventStyle(event, { withBorderAccent = false } = {}) {
    const styleOverrides = this.getEventStyleOverrides(event);
    const virtualCalendar = this.getVirtualBadgeForEvent(event);
    const virtualColor = virtualCalendar
      ? (virtualCalendar.color || event?.color || this.normalizeSingleColor(this._config.colors[virtualCalendar.entities[0]]))
      : null;
    const resolvedVisibleColors = this.getVisibleCalendarColorsForEvent(event);
    const virtualExplicitColors = virtualCalendar && styleOverrides?.hasExplicitBackgroundColor
      ? Array.from(new Set((styleOverrides.backgroundColors || []).filter(Boolean)))
      : null;
    const visibleColors = virtualExplicitColors?.length
      ? virtualExplicitColors
      : (virtualCalendar
        ? resolvedVisibleColors
        : (styleOverrides?.backgroundColors?.length ? styleOverrides.backgroundColors : resolvedVisibleColors));
    const primaryColor = visibleColors[0] || event.color;

    const shouldShowBorderAccent = withBorderAccent && visibleColors.length <= 1;
    const borderStyle = shouldShowBorderAccent
      ? `border-left: 4px solid ${primaryColor};`
      : 'border-left: none;';
    const extraStyleParts = [];
    const isMutedPastEvent = this._config?.past_event_mode === 'muted' && this.isPastEvent(event);
    if (isMutedPastEvent && styleOverrides?.opacity === undefined) {
      extraStyleParts.push('opacity: 0.55;');
    }
    if (isMutedPastEvent && styleOverrides?.filter === undefined) {
      extraStyleParts.push('filter: grayscale(70%) saturate(45%);');
    }
    if (styleOverrides?.opacity !== undefined) {
      extraStyleParts.push(`opacity: ${styleOverrides.opacity};`);
    }
    if (styleOverrides?.filter !== undefined) {
      extraStyleParts.push(`filter: ${styleOverrides.filter};`);
    }
    const extraStyle = extraStyleParts.join(' ');
    const finalizeStyle = (style) => `${style} ${extraStyle}`.trim();

    const eventColorMode = this.normalizeEventColorMode(this._config?.event_color_mode);
    if (visibleColors.length <= 1) {
      if (eventColorMode === 'left-neutral') {
        const barWidth = this.getEventColorBarWidth();
        return finalizeStyle(`--combine-left-offset: ${barWidth}px; background-color: ${this.getEventNeutralBackgroundColor()}; background-image: linear-gradient(to right, ${primaryColor} 0 ${barWidth}px, transparent ${barWidth}px); background-size: ${barWidth}px 100%; background-position: left top; background-repeat: no-repeat; background-clip: padding-box; ${borderStyle}`);
      }
      if (eventColorMode === 'left-tint') {
        const barWidth = this.getEventColorBarWidth();
        return finalizeStyle(`--combine-left-offset: ${barWidth}px; background-color: ${this.getEventTintBackgroundColor(primaryColor)}; background-image: linear-gradient(to right, ${primaryColor} 0 ${barWidth}px, transparent ${barWidth}px); background-size: ${barWidth}px 100%; background-position: left top; background-repeat: no-repeat; background-clip: padding-box; ${borderStyle}`);
      }
      return finalizeStyle(`background-color: ${primaryColor}; background-image: none; background-clip: padding-box; ${borderStyle}`);
    }

    const combineStyle = this.normalizeCombineStyle(this._config?.combine_style);
    const combineBackgroundOption = this.normalizeCombineBackground(this._config?.combine_background);
    const backgroundColor = this.getCombinedBackgroundColor(visibleColors, primaryColor);
    const indicatorWidth = Number(this._config?.combine_calendars_width) > 0
      ? Number(this._config.combine_calendars_width)
      : 12;
    const indicatorColors = this.getIndicatorColors(visibleColors, combineStyle, combineBackgroundOption);
    const shouldShowCornerBadges = !!styleOverrides?.hasDuplicateBackgroundColors;

    if (combineStyle === 'bars') {
      const barsGradient = indicatorColors.length > 0 ? this.createVerticalBarsGradient(indicatorColors) : 'none';
      const leftOffset = indicatorColors.length > 0 ? `--combine-left-offset: ${indicatorWidth}px;` : '--combine-left-offset: 0px;';
      return finalizeStyle(`${leftOffset} background-color: ${backgroundColor}; background-image: ${barsGradient}; background-size: ${indicatorWidth}px 100%; background-position: left top; background-repeat: no-repeat; background-clip: padding-box; ${shouldShowCornerBadges ? '--combined-corner-bubbles: 1;' : ''} ${borderStyle}`);
    }

    if (combineStyle === 'dots') {
      const dots = indicatorColors.length > 0 ? this.createDotsDecoration(indicatorColors, indicatorWidth) : 'none';
      const leftOffset = indicatorColors.length > 0 ? `--combine-left-offset: ${indicatorWidth}px;` : '--combine-left-offset: 0px;';
      return finalizeStyle(`${leftOffset} background-color: ${backgroundColor}; background-image: ${dots}; background-repeat: no-repeat; background-clip: padding-box; ${shouldShowCornerBadges ? '--combined-corner-bubbles: 1;' : ''} ${borderStyle}`);
    }

    const stripeGradient = this.createZebraStripeGradient(visibleColors);
    return finalizeStyle(`--combine-left-offset: 0px; background-color: ${backgroundColor}; background-image: ${stripeGradient}; background-clip: padding-box; ${shouldShowCornerBadges ? '--combined-corner-bubbles: 1;' : ''} ${borderStyle}`);
  }

  getEventDateTimeInfo(event) {
    return getEventDateTimeInfo(event, { parseCalendarDate: this.parseCalendarDate.bind(this) });
  }

  getLocalDateKey(date) {
    const { year, month, day } = this.getDateParts(date);
    return Date.UTC(year, month - 1, day);
  }

  eventSpansMultipleLocalDates(eventStart, eventEnd) {
    return this.getLocalDateKey(eventStart) !== this.getLocalDateKey(eventEnd);
  }

  shouldRenderTimedEventAsAllDayInSchedule(eventStart, eventEnd) {
    const durationMs = eventEnd.getTime() - eventStart.getTime();
    return durationMs >= 86400000 && this.eventSpansMultipleLocalDates(eventStart, eventEnd);
  }

  getScheduleVisualInfo(event) {
    return getScheduleVisualInfo(event, {
      getEventDateTimeInfo: (infoEvent) => this.getEventDateTimeInfo(infoEvent),
      shouldRenderTimedEventAsAllDayInSchedule: (eventStart, eventEnd) => this.shouldRenderTimedEventAsAllDayInSchedule(eventStart, eventEnd),
      shouldShowEventTime: (timeEvent) => this.shouldShowEventTime(timeEvent),
      formatEventTime: (date, options) => this.formatEventTime(date, options),
      getEventDisplayTitle: (titleEvent) => this.getEventDisplayTitle(titleEvent),
      translate: (key, params) => this.t(key, params)
    });
  }

  getEventDaySegment(event, date, options = {}) {
    const scheduleVisualInfo = options.useScheduleVisualTreatment ? this.getScheduleVisualInfo(event) : null;
    const { eventStart, eventEnd, isAllDay } = scheduleVisualInfo || this.getEventDateTimeInfo(event);
    const rendersAsAllDay = scheduleVisualInfo?.rendersAsAllDay || isAllDay;

    const { dayStart, nextDayStart } = this.getDayBounds(date);

    if (eventEnd <= dayStart || eventStart >= nextDayStart) {
      return null;
    }

    const segmentStart = new Date(Math.max(eventStart.getTime(), dayStart.getTime()));
    const segmentEnd = new Date(Math.min(eventEnd.getTime(), nextDayStart.getTime()));
    const isAllDaySegment = rendersAsAllDay || (
      segmentStart.getTime() === dayStart.getTime() &&
      segmentEnd.getTime() === nextDayStart.getTime()
    );

    return {
      eventStart,
      eventEnd,
      segmentStart,
      segmentEnd,
      isAllDay,
      isAllDaySegment,
      startsOnDay: eventStart >= dayStart && eventStart < nextDayStart,
      endsOnDay: eventEnd > dayStart && eventEnd <= nextDayStart,
      displayTitle: scheduleVisualInfo?.displayTitle || this.getEventDisplayTitle(event),
      rendersAsAllDay
    };
  }

  sortEventsForDate(events, date) {
    return [...events].sort((a, b) => {
      const aSegment = this.getEventDaySegment(a, date);
      const bSegment = this.getEventDaySegment(b, date);

      if (!aSegment && !bSegment) return 0;
      if (!aSegment) return 1;
      if (!bSegment) return -1;

      if (aSegment.isAllDaySegment && !bSegment.isAllDaySegment) return -1;
      if (!aSegment.isAllDaySegment && bSegment.isAllDaySegment) return 1;

      return aSegment.segmentStart - bSegment.segmentStart;
    });
  }

  getEventsForDay(date, { includeHiddenStyledEvents = false } = {}) {
    const sourceEvents = this.combineDuplicateCalendarEvents(this._events);

    return sourceEvents.filter(event => {
      if (this.getVisibleCalendarColorsForEvent(event).length === 0) {
        return false;
      }
      if (!includeHiddenStyledEvents && this.isEventHiddenByStyle(event)) {
        return false;
      }

      if (this._config.past_event_mode === 'hide' && this.isPastEvent(event)) {
        return false;
      }

      return this.getEventDaySegment(event, date) !== null;
    });
  }

  isPastEvent(event) {
    if (!event) return false;
    const { eventEnd } = this.getEventDateTimeInfo(event);
    return eventEnd < new Date();
  }

  isCurrentDayInViewableRange() {
    const { startDate, endDate } = this.getVisibleDateRange();
    const now = new Date();
    return now >= startDate && now <= endDate;
  }

  shouldDisablePreviousNavigation() {
    return this._config.past_event_mode === 'hide' && this.isCurrentDayInViewableRange();
  }

  canNavigateToPreviousPeriod() {
    return !this.shouldDisablePreviousNavigation();
  }

  attachEventListeners() {
    const prevButton = this.getRootElementById('prev-period');
    const nextButton = this.getRootElementById('next-period');
    const todayButton = this.getRootElementById('today');
    const addEventButton = this.getRootElementById('add-event-btn');
    const themeToggleButton = this.getRootElementById('theme-toggle');
    const dashboardNavButton = this.getRootElementById('header-dashboard-btn');
    const modal = this.getRootElementById('event-modal');
    const agendaContainer = this.getRootElementById('agenda-container');
    this.observeModalVisibility(modal);

    // View mode selector
    const viewModeSelect = this.getRootElementById('view-mode-select');
    viewModeSelect?.addEventListener('change', () => {
      this._viewMode = viewModeSelect.value;
      if (this._viewMode === 'agenda') {
        this.resetAgendaWindowToToday();
      } else {
        this.setWeekStart();
      }
      this.ensureEventsForCurrentRange({ renderIfCovered: true });
    });

    const calendarBadgesStrip = this._root.querySelector('.calendar-badges');
    if (calendarBadgesStrip) {
      calendarBadgesStrip.addEventListener('scroll', () => this.updateCalendarBadgesScrollState(), { passive: true });
    }

    // Calendar badge toggle (both regular and inline)
    this._root.querySelectorAll('.calendar-badge, .calendar-badge-inline').forEach(badge => {
      badge.addEventListener('click', (e) => {
        const entityId = badge.getAttribute('data-entity');
        const virtualBadge = entityId?.startsWith('virtual:')
          ? this.getVirtualBadgeById(entityId.replace('virtual:', ''))
          : null;
        const targetEntities = virtualBadge ? virtualBadge.entities : [entityId];
        const allHidden = targetEntities.every((targetEntityId) => this._hiddenCalendars.has(targetEntityId));
        targetEntities.forEach((targetEntityId) => {
          if (allHidden) {
            this._hiddenCalendars.delete(targetEntityId);
          } else {
            this._hiddenCalendars.add(targetEntityId);
          }
        });
        this.persistPreferences();
        this.renderPreservingAgendaScroll();
      });
    });

    // Add event button
    addEventButton?.addEventListener('click', () => {
      this.showCreateEventModal();
    });

    themeToggleButton?.addEventListener('click', () => {
      this.applyThemeMode(this._isDarkMode ? 'light' : 'dark');
      this.persistPreferences();
      this.render();
    });

    dashboardNavButton?.addEventListener('click', () => this.navigateToConfiguredDashboard());

    prevButton?.addEventListener('click', () => this.navigateToPreviousPeriod());
    nextButton?.addEventListener('click', () => this.navigateToNextPeriod());

    todayButton?.addEventListener('click', () => {
      if (this._viewMode === 'agenda') {
        this.resetAgendaWindowToToday();
      } else {
        this._currentDate = new Date();
      }
      if (this._viewMode !== 'agenda' && this.getRollingDaysForView() === null) {
        this.setWeekStart();
      }
      this.ensureEventsForCurrentRange({ renderIfCovered: true });
    });

    agendaContainer?.addEventListener('scroll', async () => {
      if (this._viewMode !== 'agenda' || this._agendaScrollLoadLock || this._agendaSuppressScrollHandling) return;
      this.updateAgendaVisibleDateRangeFromDom();
      const threshold = 80;
      const nearBottom = agendaContainer.scrollTop + agendaContainer.clientHeight >= agendaContainer.scrollHeight - threshold;
      const nearTop = agendaContainer.scrollTop <= threshold;
      const canLoadPastAgendaDays = this.canNavigateToPreviousPeriod();
      const isRollingAgendaMode = this.getAgendaRollingDays() !== null;

      if (isRollingAgendaMode) return;
      if (!nearBottom && !(nearTop && canLoadPastAgendaDays)) return;

      this._agendaScrollLoadLock = true;
      const previousScrollHeight = agendaContainer.scrollHeight;

      if (nearBottom) {
        this._agendaPendingScrollTop = agendaContainer.scrollTop;
        this._agendaEndDate.setDate(this._agendaEndDate.getDate() + this._agendaDaysPerScrollLoad);
      } else if (nearTop && canLoadPastAgendaDays) {
        this._agendaPendingScrollTop = null;
        this._agendaStartDate.setDate(this._agendaStartDate.getDate() - this._agendaDaysPerScrollLoad);
      }

      await this.ensureEventsForCurrentRange({ renderIfCovered: true });

      if (nearTop && canLoadPastAgendaDays) {
        const updatedContainer = this.getRootElementById('agenda-container');
        if (updatedContainer) {
          this.setAgendaScrollTopWithoutTriggeringLoad(
            updatedContainer,
            updatedContainer.scrollHeight - previousScrollHeight + threshold
          );
        }
      }

      this._agendaScrollLoadLock = false;
    }, { passive: true });

    this.attachSwipeControls();

    this._root.querySelectorAll('.day-badge-action').forEach(actionEl => {
      actionEl.addEventListener('click', (e) => this.handleDayBadgeActionClick(e, actionEl));
    });

    // Event click handlers for all view modes
    this._root.querySelectorAll('.event, .week-compact-event, .week-standard-event, .all-day-event, .agenda-event').forEach(eventEl => {
      eventEl.addEventListener('click', (e) => {
        e.stopPropagation();
        const eventData = JSON.parse(eventEl.getAttribute('data-event'));
        this.showEventModal(eventData);
      });
    });

    // +N more click handlers (month view)
    this._root.querySelectorAll('.more-events').forEach(moreEl => {
      moreEl.addEventListener('click', (e) => {
        e.stopPropagation();
        const dayEl = moreEl.closest('.day-cell');
        if (!dayEl) return;

        const date = new Date(dayEl.getAttribute('data-date'));
        const events = this.getEventsForDay(date);

        if (events.length > 0) {
          this.showDayCompactModal(date, events);
        }
      });
    });

    // Day click handlers (month view only)
    this._root.querySelectorAll('.day-cell').forEach(dayEl => {
      dayEl.addEventListener('click', (e) => {
        // Don't open if clicking on an event
        if (e.target.classList.contains('event') || e.target.closest('.event') || e.target.closest('.day-badge-action')) {
          return;
        }

        const date = new Date(dayEl.getAttribute('data-date'));
        const canManage = this._config.enable_event_management && this.getWritableCalendars().length > 0;

        // Opt-in 'show_events': tapping a day with events opens the day list;
        // empty days still go straight to create so blank days stay fast to add to.
        if (this._config.month_day_tap_action === 'show_events') {
          const events = this.getEventsForDay(date);
          if (events.length > 0) {
            this.showDayModal(date, events);
          } else if (canManage) {
            this.showCreateEventModal(date);
          }
          return;
        }

        // Default 'create': if event management is enabled, show create modal
        if (canManage) {
          this.showCreateEventModal(date);
        } else {
          // Otherwise show events for that day
          const events = this.getEventsForDay(date);
          if (events.length > 0) {
            this.showDayModal(date, events);
          }
        }
      });
    });

    // Day row click handlers (agenda view)
    this._root.querySelectorAll('.agenda-day-row').forEach(rowEl => {
      rowEl.addEventListener('click', (e) => {
        // Don't open if clicking on an event
        if (e.target.classList.contains('agenda-event') || e.target.closest('.agenda-event') || e.target.closest('.day-badge-action')) {
          return;
        }

        if (e.target.closest('.day-badge-action') || !this._config.enable_event_management || this.getWritableCalendars().length === 0) {
          return;
        }

        const date = new Date(rowEl.getAttribute('data-date'));
        this.showCreateEventModal(date);
      });
    });

    // Time slot click handlers (schedule view)
    this._root.querySelectorAll('.day-time-slot').forEach(slotEl => {
      slotEl.addEventListener('click', (e) => {
        if (!this._config.enable_event_management || this.getWritableCalendars().length === 0) {
          return;
        }

        // Get the date and hour from the parent column
        const column = slotEl.closest('.week-standard-day-column');
        const date = new Date(column.getAttribute('data-date'));
        const hour = parseInt(slotEl.getAttribute('data-hour'));

        // Set the time on the date
        date.setHours(hour, 0, 0, 0);

        this.showCreateEventModal(date, date);
      });
    });

    // Day header click handlers (week views)
    this._root.querySelectorAll('[data-click-target="day-header"]').forEach(headerEl => {
      headerEl.addEventListener('click', (e) => {
        if (!this._config.enable_event_management || this.getWritableCalendars().length === 0) {
          return;
        }

        const column = headerEl.closest('[data-date]');
        const date = new Date(column.getAttribute('data-date'));

        this.showCreateEventModal(date);
      });
    });

  }

  updateEventModalOpenState(modal = this.getRootElementById('event-modal')) {
    const isOpen = !!modal && modal.classList.contains('show');
    this.classList?.toggle('event-modal-open', isOpen);
    if (!isOpen) {
      this.flushPendingHostResizeRender();
    }
  }

  observeModalVisibility(modal) {
    if (this._modalVisibilityObserver) {
      this._modalVisibilityObserver.disconnect();
      this._modalVisibilityObserver = null;
    }

    this.updateEventModalOpenState(modal);

    if (!modal) return;

    this._modalVisibilityObserver = new MutationObserver(() => {
      this.updateEventModalOpenState(modal);
      if (!this.isEventManagementDialogOpen()) {
        this.flushPendingHeaderTimeRender();
      }
    });

    this._modalVisibilityObserver.observe(modal, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  flushPendingHeaderTimeRender() {
    if (!this._pendingHeaderSensorRender) return;
    this._pendingHeaderSensorRender = false;
    this.renderPreservingAgendaScroll();
  }

  navigateToPreviousPeriod() {
    if (!this.canNavigateToPreviousPeriod()) {
      return;
    }

    if (this._viewMode === 'agenda') {
      this.ensureAgendaWindowInitialized();
      const rollingDays = this.getAgendaRollingDays();
      const backwardDays = rollingDays !== null
        ? rollingDays + 1
        : this.getAgendaViewportDayCapacity();
      this._agendaStartDate.setDate(this._agendaStartDate.getDate() - backwardDays);
      this._agendaStartDate.setHours(0, 0, 0, 0);
      this._agendaEndDate.setDate(this._agendaEndDate.getDate() - backwardDays);
      this._agendaEndDate.setHours(23, 59, 59, 999);
      this._currentDate = new Date(this._agendaStartDate);
      this.setAgendaNavigationViewportAnchor(this._agendaStartDate);
    } else if (this._viewMode === 'month') {
      if (this._config.rolling_weeks !== null) {
        // In rolling weeks mode, go back by the number of weeks shown
        const weeksToAdvance = this._config.rolling_weeks + 1;
        this._currentDate.setDate(this._currentDate.getDate() - (weeksToAdvance * 7));
      } else {
        // Standard month navigation
        this._currentDate.setMonth(this._currentDate.getMonth() - 1);
      }
    } else {
      // In rolling-days mode, advance by rolling days + 1, otherwise by 7
      const rollingDays = this.getRollingDaysForView();
      const daysToAdvance = rollingDays !== null
        ? rollingDays + 1
        : 7;
      this._currentDate.setDate(this._currentDate.getDate() - daysToAdvance);
      if (rollingDays === null) {
        this.setWeekStart();
      }
    }
    this.ensureEventsForCurrentRange({ renderIfCovered: true });
  }

  navigateToConfiguredDashboard() {
    const dashboardPath = this.getConfiguredDashboardPath();
    if (!dashboardPath) return;

    if (this._hass && typeof this._hass.navigate === 'function') {
      this._hass.navigate(dashboardPath);
      return;
    }

    window.history.pushState(null, '', dashboardPath);
    window.dispatchEvent(new Event('location-changed'));
  }

  navigateToNextPeriod() {
    if (this._viewMode === 'agenda') {
      this.ensureAgendaWindowInitialized();
      const rollingDays = this.getAgendaRollingDays();
      const dayMs = 24 * 60 * 60 * 1000;
      const windowSpanDays = rollingDays !== null
        ? rollingDays
        : Math.max(0, Math.round((this._agendaEndDate.getTime() - this._agendaStartDate.getTime()) / dayMs));
      const visibleRangeFromDom = this.getAgendaVisibleDateRangeFromDom();
      const visibleRangeFromCache = this._agendaVisibleStartDate && this._agendaVisibleEndDate
        ? { startDate: this._agendaVisibleStartDate, endDate: this._agendaVisibleEndDate }
        : null;
      const visibleRange = visibleRangeFromDom || (
        this.isAgendaRangeWithinCurrentWindow(visibleRangeFromCache) ? visibleRangeFromCache : null
      );
      const targetStart = rollingDays !== null
        ? new Date(this._agendaStartDate)
        : (visibleRange ? new Date(visibleRange.endDate) : new Date(this._agendaEndDate));
      targetStart.setHours(0, 0, 0, 0);
      if (rollingDays !== null) {
        targetStart.setDate(targetStart.getDate() + rollingDays + 1);
      }

      const targetEnd = new Date(targetStart);
      targetEnd.setDate(targetEnd.getDate() + windowSpanDays);
      targetEnd.setHours(23, 59, 59, 999);

      this._agendaStartDate = targetStart;
      this._agendaEndDate = targetEnd;
      this._currentDate = new Date(this._agendaStartDate);
      this.setAgendaNavigationViewportAnchor(this._agendaStartDate);
    } else if (this._viewMode === 'month') {
      if (this._config.rolling_weeks !== null) {
        // In rolling weeks mode, go forward by the number of weeks shown
        const weeksToAdvance = this._config.rolling_weeks + 1;
        this._currentDate.setDate(this._currentDate.getDate() + (weeksToAdvance * 7));
      } else {
        // Standard month navigation
        this._currentDate.setMonth(this._currentDate.getMonth() + 1);
      }
    } else {
      // In rolling-days mode, advance by rolling days + 1, otherwise by 7
      const rollingDays = this.getRollingDaysForView();
      const daysToAdvance = rollingDays !== null
        ? rollingDays + 1
        : 7;
      this._currentDate.setDate(this._currentDate.getDate() + daysToAdvance);
      if (rollingDays === null) {
        this.setWeekStart();
      }
    }
    this.ensureEventsForCurrentRange({ renderIfCovered: true });
  }

  shouldEnableSwipeControls() {
    return !this._config.disable_swipe_controls && this._viewMode !== 'agenda';
  }

  canTriggerSwipePeriodNavigation(deltaX) {
    if (this._viewMode !== 'week-standard') {
      return true;
    }

    const scheduleContainer = this._root?.querySelector('.week-standard-container');
    if (!scheduleContainer) {
      return true;
    }

    const maxScrollLeft = Math.max(0, scheduleContainer.scrollWidth - scheduleContainer.clientWidth);
    if (maxScrollLeft <= 1) {
      return true;
    }

    const edgeTolerance = 2;
    const isAtLeftEdge = scheduleContainer.scrollLeft <= edgeTolerance;
    const isAtRightEdge = scheduleContainer.scrollLeft >= (maxScrollLeft - edgeTolerance);

    // Swipe left should only paginate when the schedule is already fully scrolled right.
    if (deltaX < 0) {
      return isAtRightEdge;
    }

    // Swipe right should only paginate when the schedule is already fully scrolled left.
    return isAtLeftEdge;
  }

  attachSwipeControls() {
    if (!this._root) return;

    const container = this._root.querySelector('.calendar-container');
    if (!container) return;

    const swipeThreshold = 48;
    const maxVerticalDrift = 40;

    container.addEventListener('touchstart', (event) => {
      if (!this.shouldEnableSwipeControls() || event.touches.length !== 1) return;
      const touch = event.touches[0];
      this._swipeStartX = touch.clientX;
      this._swipeStartY = touch.clientY;
      this._swipeTracking = true;
      const eventTarget = event.target instanceof Element ? event.target : null;
      this._swipeStartedOnInteractive = !!eventTarget?.closest('button, select, input, textarea, .event, .week-compact-event, .week-standard-event, .all-day-event, .day-badge-action, [data-day-badge-action-id]');
    }, { passive: true });

    container.addEventListener('touchend', (event) => {
      if (!this._swipeTracking || !this.shouldEnableSwipeControls() || event.changedTouches.length !== 1) return;

      if (this._swipeStartedOnInteractive) {
        this._swipeTracking = false;
        this._swipeStartedOnInteractive = false;
        return;
      }

      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - this._swipeStartX;
      const deltaY = touch.clientY - this._swipeStartY;

      if (Math.abs(deltaX) >= swipeThreshold && Math.abs(deltaY) <= maxVerticalDrift) {
        if (this.canTriggerSwipePeriodNavigation(deltaX)) {
          if (deltaX < 0) {
            this.navigateToNextPeriod();
          } else if (this.canNavigateToPreviousPeriod()) {
            this.navigateToPreviousPeriod();
          }
        }
      }

      this._swipeTracking = false;
      this._swipeStartedOnInteractive = false;
    }, { passive: true });

    container.addEventListener('touchcancel', () => {
      this._swipeTracking = false;
      this._swipeStartedOnInteractive = false;
    }, { passive: true });
  }

  getRecurrenceWeekdayOptions() {
    return [
      { key: 'MO', label: 'Mon' },
      { key: 'TU', label: 'Tue' },
      { key: 'WE', label: 'Wed' },
      { key: 'TH', label: 'Thu' },
      { key: 'FR', label: 'Fri' },
      { key: 'SA', label: 'Sat' },
      { key: 'SU', label: 'Sun' }
    ];
  }

  buildRRuleFromInputs({ frequency, interval, untilDate, count, byDay }) {
    return buildRRuleFromInputs({ frequency, interval, untilDate, count, byDay });
  }

  parseRRule(rrule = '', fallbackStartDate = null) {
    const parsed = {
      frequency: 'DAILY',
      interval: '1',
      count: '',
      untilDate: '',
      byDay: []
    };

    if (!rrule || typeof rrule !== 'string') {
      return parsed;
    }

    const ruleWithoutPrefix = rrule.replace(/^RRULE:/i, '');
    const segments = ruleWithoutPrefix.split(';');

    segments.forEach((segment) => {
      const [rawKey, rawValue] = segment.split('=');
      const key = (rawKey || '').toUpperCase();
      const value = (rawValue || '').trim();

      if (!key || !value) {
        return;
      }

      if (key === 'FREQ') {
        parsed.frequency = value.toUpperCase();
      } else if (key === 'INTERVAL') {
        parsed.interval = value;
      } else if (key === 'COUNT') {
        parsed.count = value;
      } else if (key === 'BYDAY') {
        parsed.byDay = value.split(',').map((day) => day.trim()).filter(Boolean);
      } else if (key === 'UNTIL') {
        const untilCompact = value.replace(/Z$/, '');
        if (/^\d{8}/.test(untilCompact)) {
          parsed.untilDate = `${untilCompact.slice(0, 4)}-${untilCompact.slice(4, 6)}-${untilCompact.slice(6, 8)}`;
        }
      }
    });

    // WEEKLY rules may omit BYDAY, in which case the recurrence is implied
    // by DTSTART's weekday (RFC 5545 §3.3.10). Use the card's configured
    // time_zone (via getDateParts) rather than the browser's local zone,
    // since DTSTART's weekday can differ between the two.
    if (parsed.frequency === 'WEEKLY' && parsed.byDay.length === 0 &&
        fallbackStartDate instanceof Date && !Number.isNaN(fallbackStartDate.getTime())) {
      const weekdayCodes = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
      parsed.byDay = [weekdayCodes[this.getDateParts(fallbackStartDate).weekday]];
    }

    return parsed;
  }

  getRecurrenceEndMode(recurrenceData = {}) {
    if (recurrenceData.count) return 'after';
    if (recurrenceData.untilDate) return 'on';
    return 'never';
  }

  syncRecurrenceEndInputs() {
    const selected = this._root.querySelector('input[name="event-recurrence-end-mode"]:checked')?.value || 'never';
    const untilInput = this.getRootElementById('event-recurrence-until');
    const countInput = this.getRootElementById('event-recurrence-count');

    if (!untilInput || !countInput) return;

    if (selected === 'on') {
      untilInput.disabled = false;
      countInput.disabled = true;
      countInput.value = '';
    } else if (selected === 'after') {
      untilInput.disabled = true;
      untilInput.value = '';
      countInput.disabled = false;
    } else {
      untilInput.disabled = true;
      untilInput.value = '';
      countInput.disabled = true;
      countInput.value = '';
    }
  }

  setupStartEndDurationSync({ startInputId, endInputId, isDateOnly = false }) {
    const startInput = this.getRootElementById(startInputId);
    const endInput = this.getRootElementById(endInputId);
    if (!startInput || !endInput) return;

    const toDate = (value) => {
      if (!value) return null;
      return isDateOnly ? this.parseLocalDate(value) : this.parsePossiblyLocalDateTime(value);
    };

    const fromDate = (date) => {
      if (!(date instanceof Date) || Number.isNaN(date.getTime())) return '';
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      if (isDateOnly) {
        return `${year}-${month}-${day}`;
      }
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    let durationMs = 0;
    const recalculateDuration = () => {
      const start = toDate(startInput.value);
      const end = toDate(endInput.value);
      if (!start || !end) return;
      durationMs = end.getTime() - start.getTime();
    };

    recalculateDuration();

    startInput.addEventListener('change', () => {
      const nextStart = toDate(startInput.value);
      if (!nextStart) return;
      const nextEnd = new Date(nextStart.getTime() + durationMs);
      endInput.value = fromDate(nextEnd);
    });

    endInput.addEventListener('change', recalculateDuration);
  }

  resolveTimedEventRange(startValue, endValue, fallbackDurationMs = 60 * 60 * 1000) {
    return resolveTimedEventRange(startValue, endValue, fallbackDurationMs);
  }

  showCreateEventModal(defaultDate = null, defaultTime = null, options = {}) {

    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');
    this.applyEventModalSizeClass(content);

    const writableCalendars = this.getWritableCalendars();
    if (writableCalendars.length === 0) {
      this.showError(this.t('noWritableCalendars'));
      return;
    }

    const prefill = options?.prefill || null;
    const selectedCalendarIds = Array.isArray(options?.selectedCalendarIds)
      ? options.selectedCalendarIds.filter((entityId) => writableCalendars.includes(entityId))
      : [];

    // Set defaults
    const now = new Date();
    const startDate = prefill?.startDate ? new Date(prefill.startDate) : (defaultDate ? new Date(defaultDate) : now);
    const hasExplicitDefaultTime = defaultTime instanceof Date || !!prefill?.startDate;
    const startTime = hasExplicitDefaultTime ? new Date(prefill?.startDate || defaultTime) : new Date(startDate);

    // Round to next half hour for timed events
    if (!hasExplicitDefaultTime && (!defaultDate || defaultDate.getHours() !== 0)) {
      const minutes = startTime.getMinutes();
      if (minutes < 30) {
        startTime.setMinutes(30);
      } else {
        startTime.setHours(startTime.getHours() + 1);
        startTime.setMinutes(0);
      }
    }
    startTime.setSeconds(0);
    startTime.setMilliseconds(0);

    // End time is 1 hour after start (for timed events)
    const endTime = prefill?.endDate ? new Date(prefill.endDate) : new Date(startTime);
    if (!prefill?.endDate) {
      endTime.setHours(endTime.getHours() + 1);
    }

    // For all-day events, show same day to user (we'll add +1 when submitting)
    const endDate = prefill?.endDate ? new Date(prefill.endDate) : new Date(startDate);
    const recurrenceData = this.parseRRule(prefill?.rrule || '', startDate);
    const isPrefilledRecurring = !!prefill?.rrule;
    const isPrefilledAllDay = !!prefill?.isAllDay;

    content.innerHTML = renderCreateEventForm({
      writableCalendars,
      selectedCalendarIds,
      prefill,
      startDate,
      startTime,
      endDate,
      endTime,
      recurrenceData,
      isPrefilledRecurring,
      isPrefilledAllDay,
      recurrenceEndMode: this.getRecurrenceEndMode(recurrenceData),
      recurrenceWeekdayOptions: this.getRecurrenceWeekdayOptions(),
      helpers: {
        escapeHtml: (value) => this.escapeHtml(value),
        escapeHtmlAttribute: (value) => this.escapeHtmlAttribute(value),
        getCalendarName: (entityId) => this.getCalendarName(entityId),
        t: (key) => this.t(key)
      }
    });

    modal.classList.add('show');

    // Event listeners
    const form = this.getRootElementById('create-event-form');
    const allDayCheckbox = this.getRootElementById('event-all-day');
    const recurringCheckbox = this.getRootElementById('event-recurring');
    const recurrenceFrequency = this.getRootElementById('event-recurrence-frequency');
    const timedFields = this.getRootElementById('timed-event-fields');
    const allDayFields = this.getRootElementById('all-day-event-fields');
    const recurringFields = this.getRootElementById('recurring-event-fields');
    const recurrenceWeekdaysGroup = this.getRootElementById('event-recurrence-weekdays-group');
    const recurrenceEndModeInputs = this._root.querySelectorAll('input[name="event-recurrence-end-mode"]');
    const errorDiv = this.getRootElementById('form-error');

    // Toggle all-day fields
    allDayCheckbox.addEventListener('change', () => {
      if (allDayCheckbox.checked) {
        timedFields.style.display = 'none';
        allDayFields.style.display = 'block';
      } else {
        timedFields.style.display = 'block';
        allDayFields.style.display = 'none';
      }
    });

    const updateRecurringFrequencyVisibility = () => {
      recurrenceWeekdaysGroup.style.display = recurrenceFrequency.value === 'WEEKLY' ? 'block' : 'none';
    };

    recurringCheckbox.addEventListener('change', () => {
      recurringFields.style.display = recurringCheckbox.checked ? 'block' : 'none';
    });

    recurrenceFrequency.addEventListener('change', updateRecurringFrequencyVisibility);
    recurrenceEndModeInputs.forEach((input) => input.addEventListener('change', () => this.syncRecurrenceEndInputs()));
    updateRecurringFrequencyVisibility();
    this.syncRecurrenceEndInputs();

    this.setupStartEndDurationSync({ startInputId: 'event-start', endInputId: 'event-end' });
    this.setupStartEndDurationSync({ startInputId: 'event-start-date', endInputId: 'event-end-date', isDateOnly: true });

    // Close button
    this.getRootElementById('close-modal').addEventListener('click', () => {
      this._combinedEditTargets = null;
      this._combinedDeleteTargets = null;
      modal.classList.remove('show');
    });

    // Cancel button
    this.getRootElementById('cancel-btn').addEventListener('click', () => {
      this._combinedEditTargets = null;
      this._combinedDeleteTargets = null;
      modal.classList.remove('show');
    });

    // Form submission
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const selectedCalendarIds = Array.from(this._root.querySelectorAll('.create-event-calendar:checked'))
        .map((input) => input.value);
      const title = this.getRootElementById('event-title').value.trim();
      const isAllDay = this.getRootElementById('event-all-day').checked;
      const location = this.getRootElementById('event-location').value.trim();
      const description = this.getRootElementById('event-description').value.trim();

      if (selectedCalendarIds.length === 0) {
        this.showFormError(errorDiv, this.t('noWritableCalendars'));
        return;
      }

      const formResult = normalizeEventFormData({
        title,
        location,
        description,
        isAllDay,
        startDate: this.getRootElementById('event-start-date').value,
        endDate: this.getRootElementById('event-end-date').value,
        startDateTime: this.getRootElementById('event-start').value,
        endDateTime: this.getRootElementById('event-end').value
      });

      if (!formResult.valid) {
        this.showFormError(errorDiv, this.t(formResult.errorKey));
        return;
      }

      let eventData = formResult.eventData;

      if (recurringCheckbox.checked) {
        const frequency = this.getRootElementById('event-recurrence-frequency').value;
        const interval = this.getRootElementById('event-recurrence-interval').value;
        const untilDateRaw = this.getRootElementById('event-recurrence-until').value;
        const recurrenceCountRaw = this.getRootElementById('event-recurrence-count').value;
        const recurrenceEndMode = this._root.querySelector('input[name="event-recurrence-end-mode"]:checked')?.value || 'never';
        const untilDate = recurrenceEndMode === 'on' ? untilDateRaw : '';
        const recurrenceCount = recurrenceEndMode === 'after' ? recurrenceCountRaw : '';
        const byDay = Array.from(this._root.querySelectorAll('.event-recurrence-weekday:checked')).map((el) => el.value);
        const recurrenceResult = normalizeEventFormData({
          title,
          location,
          description,
          isAllDay,
          startDate: this.getRootElementById('event-start-date').value,
          endDate: this.getRootElementById('event-end-date').value,
          startDateTime: this.getRootElementById('event-start').value,
          endDateTime: this.getRootElementById('event-end').value,
          recurrence: {
            enabled: true,
            frequency,
            interval,
            untilDate,
            count: recurrenceCount,
            byDay
          }
        });

        if (!recurrenceResult.valid) {
          this.showFormError(errorDiv, this.t(recurrenceResult.errorKey));
          return;
        }

        eventData = recurrenceResult.eventData;
      }

      // Disable submit button
      const submitBtn = this.getRootElementById('submit-btn');
      submitBtn.disabled = true;
      submitBtn.textContent = this.t('creating');

      try {
        await Promise.all(selectedCalendarIds.map((calendarId) => this.createEvent(calendarId, eventData)));
        this._combinedDeleteTargets = null;
        this._combinedDeleteTargets = null;
        modal.classList.remove('show');

        // Refresh events
        this._lastFetch = null;
        await this.updateEvents({ preserveScroll: this._viewMode === 'agenda' });
        this.safeReturnToList(options?.onSaved);
      } catch (error) {
        console.error('Failed to create event:', error);
        this.showFormError(errorDiv, error.message || this.t('failedCreateEvent'));
        submitBtn.disabled = false;
        submitBtn.textContent = this.t('createEvent');
      }
    });

    // Focus on title input
    setTimeout(() => {
      this.getRootElementById('event-title')?.focus();
    }, 100);
  }

  showEditEventModal(event, startDate, endDate, isAllDay, editScope = 'this', onSaved = null) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');
    this.applyEventModalSizeClass(content);

    const writableCalendars = this.getWritableCalendars();
    if (writableCalendars.length === 0) {
      this.showError(this.t('noWritableCalendars'));
      return;
    }

    const selectedEditTargets = Array.isArray(this._combinedEditTargets) && this._combinedEditTargets.length > 0
      ? this._combinedEditTargets
      : null;
    const selectedCombinedCalendarIds = selectedEditTargets
      ? Array.from(new Set(selectedEditTargets.map(target => target.entityId))).filter((entityId) => writableCalendars.includes(entityId))
      : [];
    const visibleCalendarOptions = selectedCombinedCalendarIds.length > 0 ? selectedCombinedCalendarIds : writableCalendars;

    const recurrenceData = this.parseRRule(event.rrule || '', startDate);
    const isRecurring = !!event.rrule;
    const isSingleOccurrenceEdit = editScope === 'this' && isRecurring;
    const recurringSelectedByDefault = isRecurring && !isSingleOccurrenceEdit;

    content.innerHTML = renderEditEventForm({
      event,
      startDate,
      endDate,
      isAllDay,
      visibleCalendarOptions,
      selectedCombinedCalendarIds,
      recurrenceData,
      recurringSelectedByDefault,
      recurrenceEndMode: this.getRecurrenceEndMode(recurrenceData),
      recurrenceWeekdayOptions: this.getRecurrenceWeekdayOptions(),
      helpers: {
        escapeHtml: (value) => this.escapeHtml(value),
        escapeHtmlAttribute: (value) => this.escapeHtmlAttribute(value),
        getCalendarName: (entityId) => this.getCalendarName(entityId),
        t: (key) => this.t(key)
      }
    });

    modal.classList.add('show');

    // Event listeners
    const form = this.getRootElementById('edit-event-form');
    const allDayCheckbox = this.getRootElementById('event-all-day');
    const recurringCheckbox = this.getRootElementById('event-recurring');
    const recurrenceFrequency = this.getRootElementById('event-recurrence-frequency');
    const timedFields = this.getRootElementById('timed-event-fields');
    const allDayFields = this.getRootElementById('all-day-event-fields');
    const recurringFields = this.getRootElementById('recurring-event-fields');
    const recurrenceWeekdaysGroup = this.getRootElementById('event-recurrence-weekdays-group');
    const recurrenceEndModeInputs = this._root.querySelectorAll('input[name="event-recurrence-end-mode"]');
    const errorDiv = this.getRootElementById('form-error');

    // Toggle all-day fields
    allDayCheckbox.addEventListener('change', () => {
      if (allDayCheckbox.checked) {
        timedFields.style.display = 'none';
        allDayFields.style.display = 'block';
      } else {
        timedFields.style.display = 'block';
        allDayFields.style.display = 'none';
      }
    });

    const updateRecurringFrequencyVisibility = () => {
      recurrenceWeekdaysGroup.style.display = recurrenceFrequency.value === 'WEEKLY' ? 'block' : 'none';
    };

    recurringCheckbox.addEventListener('change', () => {
      recurringFields.style.display = recurringCheckbox.checked ? 'block' : 'none';
    });

    recurrenceFrequency.addEventListener('change', updateRecurringFrequencyVisibility);
    recurrenceEndModeInputs.forEach((input) => input.addEventListener('change', () => this.syncRecurrenceEndInputs()));
    updateRecurringFrequencyVisibility();
    this.syncRecurrenceEndInputs();

    this.setupStartEndDurationSync({ startInputId: 'event-start', endInputId: 'event-end' });
    this.setupStartEndDurationSync({ startInputId: 'event-start-date', endInputId: 'event-end-date', isDateOnly: true });

    // Close button
    this.getRootElementById('close-modal').addEventListener('click', () => {
      this._combinedEditTargets = null;
      this._combinedDeleteTargets = null;
      modal.classList.remove('show');
    });

    // Cancel button
    this.getRootElementById('cancel-btn').addEventListener('click', () => {
      this._combinedEditTargets = null;
      this._combinedDeleteTargets = null;
      modal.classList.remove('show');
    });

    // Form submission
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const calendarId = this.getRootElementById('event-calendar').value;
      const title = this.getRootElementById('event-title').value.trim();
      const isAllDayChecked = this.getRootElementById('event-all-day').checked;
      const location = this.getRootElementById('event-location').value.trim();
      const description = this.getRootElementById('event-description').value.trim();

      const formResult = normalizeEventFormData({
        title,
        location,
        description,
        isAllDay: isAllDayChecked,
        startDate: this.getRootElementById('event-start-date').value,
        endDate: this.getRootElementById('event-end-date').value,
        startDateTime: this.getRootElementById('event-start').value,
        endDateTime: this.getRootElementById('event-end').value,
        fallbackDurationMs: Math.max(endDate.getTime() - startDate.getTime(), 60 * 1000)
      });

      if (!formResult.valid) {
        this.showFormError(errorDiv, this.t(formResult.errorKey));
        return;
      }

      let eventData = formResult.eventData;

      if (recurringCheckbox.checked) {
        const frequency = this.getRootElementById('event-recurrence-frequency').value;
        const interval = this.getRootElementById('event-recurrence-interval').value;
        const untilDateRaw = this.getRootElementById('event-recurrence-until').value;
        const recurrenceCountRaw = this.getRootElementById('event-recurrence-count').value;
        const recurrenceEndMode = this._root.querySelector('input[name="event-recurrence-end-mode"]:checked')?.value || 'never';
        const untilDate = recurrenceEndMode === 'on' ? untilDateRaw : '';
        const recurrenceCount = recurrenceEndMode === 'after' ? recurrenceCountRaw : '';
        const byDay = Array.from(this._root.querySelectorAll('.event-recurrence-weekday:checked')).map((el) => el.value);
        const recurrenceResult = normalizeEventFormData({
          title,
          location,
          description,
          isAllDay: isAllDayChecked,
          startDate: this.getRootElementById('event-start-date').value,
          endDate: this.getRootElementById('event-end-date').value,
          startDateTime: this.getRootElementById('event-start').value,
          endDateTime: this.getRootElementById('event-end').value,
          fallbackDurationMs: Math.max(endDate.getTime() - startDate.getTime(), 60 * 1000),
          recurrence: {
            enabled: true,
            frequency,
            interval,
            untilDate,
            count: recurrenceCount,
            byDay
          }
        });

        if (!recurrenceResult.valid) {
          this.showFormError(errorDiv, this.t(recurrenceResult.errorKey));
          return;
        }

        eventData = recurrenceResult.eventData;
      }

      // Disable submit button
      const submitBtn = this.getRootElementById('submit-btn');
      submitBtn.disabled = true;
      submitBtn.textContent = this.t('saving');

      try {
        const editTargets = Array.isArray(this._combinedEditTargets) && this._combinedEditTargets.length > 0
          ? this._combinedEditTargets
          : [event];

        for (const targetEvent of editTargets) {
          const targetCalendarId = (editTargets.length > 1) ? targetEvent.entityId : calendarId;
          await this.updateEvent(targetEvent, targetCalendarId, eventData, editScope);
        }

        this._combinedEditTargets = null;
        this._combinedDeleteTargets = null;
        modal.classList.remove('show');

        // Refresh events
        this._lastFetch = null;
        await this.updateEvents({ preserveScroll: this._viewMode === 'agenda' });
        this.safeReturnToList(onSaved);
      } catch (error) {
        console.error('Failed to update event:', error);

        // Safety net: if edit was blocked by capability detection, still try create+delete.
        // Some integrations misreport update/delete support even though create+delete works.
        if (error.message === this.t('calendarNoModifyError')) {
          try {
            await this.createEvent(calendarId, eventData);
            await this.deleteEvent(event.entityId, event.uid, event.recurrence_id);
            modal.classList.remove('show');
            this._lastFetch = null;
            await this.updateEvents({ preserveScroll: this._viewMode === 'agenda' });
            this.safeReturnToList(onSaved);
            return;
          } catch (fallbackError) {
            console.error('Safety-net create+delete fallback failed:', fallbackError);
          }
        }

        this._combinedEditTargets = null;
        this._combinedDeleteTargets = null;
        this.showFormError(errorDiv, error.message || this.t('failedUpdateEvent'));
        submitBtn.disabled = false;
        submitBtn.textContent = this.t('saveChanges');
      }
    });

    // Focus on title input
    setTimeout(() => {
      this.getRootElementById('event-title')?.focus();
    }, 100);
  }

  async updateEvent(originalEvent, newCalendarId, eventData, editScope = 'this') {
    if (!this._hass) {
      throw new Error(this.t('homeAssistantUnavailable'));
    }

    const capabilities = this._calendarCapabilities[originalEvent.entityId] || {};

    // Check if we're moving to a different calendar
    const movingCalendar = newCalendarId !== originalEvent.entityId;

    if (!originalEvent.uid) {
      throw new Error(this.t('missingUidError'));
    }

    const { isRecurringUpdate, recurrenceId, recurrenceRange } = getRecurringUpdateControls(originalEvent, eventData, editScope);

    if (isRecurringUpdate && !movingCalendar && this._hass.connection?.sendMessagePromise) {
      const wsPayload = buildUpdateEventWebSocketPayload(originalEvent, eventData, recurrenceId, recurrenceRange);

      try {
        await this._hass.connection.sendMessagePromise(wsPayload);
        return;
      } catch (error) {
        console.error('Recurring update via WebSocket failed, falling back:', error?.message || error);
      }
    }

    // If calendar supports UPDATE, we're not moving calendars, and service exists, use update service
    const hasUpdateService = !!this._hass.services?.calendar?.update_event;
    if (capabilities.canUpdate && !movingCalendar && hasUpdateService) {
      try {
        const serviceData = buildUpdateEventServiceData(originalEvent, eventData, recurrenceId, recurrenceRange);

        await this._hass.callService('calendar', 'update_event', serviceData);
        return;
      } catch (error) {
        console.error('Update service failed, trying create+delete fallback:', error.message);
        // Fall through to create+delete pattern
      }
    } else if (capabilities.canUpdate && !movingCalendar && !hasUpdateService) {
      // Some integrations advertise update support but the service is not registered.
      // Skip update call to avoid misleading "Action calendar.update_event not found" pop-ups.
      console.debug('calendar.update_event service unavailable, using create+delete fallback');
    }

    // Fallback: Create new event and then delete old one
    // This prevents data loss when create fails on calendars without UPDATE support

    try {
      // Create in destination calendar first (might be same or different)
      await this.createEvent(newCalendarId, eventData);

      // Delete from original calendar only after successful create
      await this.deleteEvent(originalEvent.entityId, originalEvent.uid, recurrenceId, recurrenceRange);
    } catch (error) {
      console.error('Create+Delete fallback failed:', error);
      throw new Error(error.message || this.t('updateEventServiceError'));
    }
  }

  async deleteEvent(calendarId, uid, recurrenceId = null, recurrenceRange = null) {
    if (!this._hass) {
      throw new Error(this.t('homeAssistantUnavailable'));
    }

    // Try WebSocket API first (works for Google Calendar and others)
    // This is the official Calendar WebSocket API that the HA Calendar UI uses
    try {
      if (this._hass.connection && this._hass.connection.sendMessagePromise && uid) {
        const payload = buildDeleteEventWebSocketPayload(calendarId, uid, recurrenceId, recurrenceRange);

        await this._hass.connection.sendMessagePromise(payload);
        return; // Success via WebSocket
      }
    } catch (wsError) {
      console.log('WebSocket delete failed, trying service call:', wsError.message);
      // Fall through to service call attempt
    }

    // Fallback to service call (works for Local Calendar and some others)
    const serviceData = buildDeleteEventPayload(calendarId, uid, recurrenceId, recurrenceRange);

    try {
      await this._hass.callService('calendar', 'delete_event', serviceData);
    } catch (error) {
      console.error('Service call delete also failed:', error);
      throw new Error(error.message || this.t('deleteEventServiceError'));
    }
  }

  async createEvent(calendarId, eventData) {
    if (!this._hass) {
      throw new Error(this.t('homeAssistantUnavailable'));
    }

    const isRecurring = !!eventData.rrule;

    // Build service-style data (used by both API variants)
    const baseData = buildEventServiceData(calendarId, eventData);

    if (isRecurring) {
      baseData.rrule = eventData.rrule;

      // HA recurring event support is exposed through Calendar WebSocket API.
      // WebSocket schema expects event.dtstart / event.dtend (not start/end keys).
      const wsPayload = buildCreateEventWebSocketPayload(calendarId, eventData);

      try {
        if (this._hass.connection?.sendMessagePromise) {
          await this._hass.connection.sendMessagePromise(wsPayload);
          return;
        }
      } catch (error) {
        console.error('WebSocket recurring create failed:', error);
        throw new Error(error?.message || this.t('createEventServiceError'));
      }

      throw new Error(this.t('createEventServiceError'));
    }

    try {
      await this._hass.callService('calendar', 'create_event', baseData);
    } catch (error) {
      console.error('Service call failed:', error);
      throw new Error(error.message || this.t('createEventServiceError'));
    }
  }

  showFormError(errorDiv, message) {
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    setTimeout(() => {
      errorDiv.style.display = 'none';
    }, 5000);
  }


  getForwardExistingCalendarIds(event) {
    const existingCalendarIds = new Set();

    if (event?.entityId) existingCalendarIds.add(event.entityId);
    if (Array.isArray(event?.sourceEntityIds)) {
      event.sourceEntityIds.forEach((entityId) => entityId && existingCalendarIds.add(entityId));
    }
    if (Array.isArray(event?.sourceEvents)) {
      event.sourceEvents.forEach((sourceEvent) => sourceEvent?.entityId && existingCalendarIds.add(sourceEvent.entityId));
    }

    const eventKey = this.getEventExactMatchKey(event);
    (this._events || []).forEach((candidateEvent) => {
      if (candidateEvent?.entityId && this.getEventExactMatchKey(candidateEvent) === eventKey) {
        existingCalendarIds.add(candidateEvent.entityId);
      }
    });

    return existingCalendarIds;
  }

  showForwardEventModal(event, startDate, endDate, isAllDay) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');
    this.applyEventModalSizeClass(content);
    const writableCalendars = this.getWritableCalendars();
    const existingCalendarIds = this.getForwardExistingCalendarIds(event);

    if (writableCalendars.length === 0) {
      this.showError(this.t('noWritableCalendars'));
      return;
    }

    content.innerHTML = `
      <div class="confirm-dialog">
        <h3 class="confirm-title">${this.t('forwardEventTitle')}</h3>
        <p class="confirm-message">${this.t('forwardEventPrompt')}</p>

        <div class="recurring-options forward-calendar-options">
          ${writableCalendars.map((entityId) => {
            const alreadyExists = existingCalendarIds.has(entityId);
            return `
              <label class="recurring-option ${alreadyExists ? 'disabled-option' : ''}">
                <input type="checkbox" class="forward-calendar-option" value="${entityId}" ${alreadyExists ? 'checked disabled' : ''} />
                <div class="recurring-option-label">
                  <div class="recurring-option-title">${this.escapeHtml(this.getCalendarName(entityId))}</div>
                  <div class="recurring-option-description">${alreadyExists ? this.t('forwardEventAlreadyExists') : this.escapeHtml(entityId)}</div>
                </div>
              </label>
            `;
          }).join('')}
        </div>

        <div id="form-error" class="error-message" style="display: none;"></div>

        <div class="confirm-actions">
          <button class="btn btn-secondary" id="cancel-forward-event-btn">${this.t('cancel')}</button>
          <button class="btn btn-primary" id="confirm-forward-event-btn">${this.t('continue')}</button>
        </div>
      </div>
    `;

    modal.classList.add('show');

    this.getRootElementById('cancel-forward-event-btn')?.addEventListener('click', () => {
      modal.classList.remove('show');
      this.showEventModal(event);
    });

    this.getRootElementById('confirm-forward-event-btn')?.addEventListener('click', () => {
      const selectedCalendarIds = Array.from(this._root.querySelectorAll('.forward-calendar-option:checked'))
        .map((input) => input.value)
        .filter((entityId) => writableCalendars.includes(entityId) && !existingCalendarIds.has(entityId));
      const errorDiv = this.getRootElementById('form-error');

      if (selectedCalendarIds.length === 0) {
        this.showFormError(errorDiv, this.t('forwardEventNoNewCalendars'));
        return;
      }

      modal.classList.remove('show');
      this.showCreateEventModal(null, null, {
        selectedCalendarIds,
        prefill: {
          summary: event.summary || '',
          startDate,
          endDate,
          isAllDay,
          location: event.location || '',
          description: event.description || '',
          rrule: event.rrule || ''
        }
      });
    });
  }

  showEditConfirmation(event, startDate, endDate, isAllDay, selectedEvents = null, onSaved = null) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');
    this.applyEventModalSizeClass(content);

    const isRecurring = event.rrule || event.recurrence_id;
    if (!isRecurring) {
      this._combinedEditTargets = selectedEvents;
      this.showEditEventModal(event, startDate, endDate, isAllDay, 'this', onSaved);
      return;
    }

    content.innerHTML = `
      <div class="confirm-dialog">
        <h3 class="confirm-title">${this.t('editRecurringEventTitle')}</h3>
        <p class="confirm-message">
          ${this.t('editRecurringPrompt', { title: this.escapeHtml(event.summary || this.t('untitledEvent')) })}
        </p>

        <div class="recurring-options">
          <label class="recurring-option">
            <input type="radio" name="edit-option" value="this" checked />
            <div class="recurring-option-label">
              <div class="recurring-option-title">${this.t('deleteThisEventOnly')}</div>
              <div class="recurring-option-description">${this.t('editThisOccurrence')}</div>
            </div>
          </label>

          ${event.recurrence_id ? `
            <label class="recurring-option">
              <input type="radio" name="edit-option" value="future" />
              <div class="recurring-option-label">
                <div class="recurring-option-title">${this.t('deleteThisAndFutureEvents')}</div>
                <div class="recurring-option-description">${this.t('editThisOccurrenceAndFuture')}</div>
              </div>
            </label>
          ` : ''}

          <label class="recurring-option">
            <input type="radio" name="edit-option" value="all" />
            <div class="recurring-option-label">
              <div class="recurring-option-title">${this.t('deleteAllEvents')}</div>
              <div class="recurring-option-description">${this.t('editEntireSeries')}</div>
            </div>
          </label>
        </div>

        <div class="confirm-actions">
          <button class="btn btn-secondary" id="cancel-edit-option-btn">${this.t('cancel')}</button>
          <button class="btn btn-primary" id="confirm-edit-option-btn">${this.t('editEvent')}</button>
        </div>
      </div>
    `;

    modal.classList.add('show');

    this.getRootElementById('cancel-edit-option-btn')?.addEventListener('click', () => {
      modal.classList.remove('show');
      this.showEventModal(event);
    });

    this.getRootElementById('confirm-edit-option-btn')?.addEventListener('click', () => {
      const selectedOption = this._root.querySelector('input[name="edit-option"]:checked')?.value || 'this';
      modal.classList.remove('show');
      this._combinedEditTargets = selectedEvents;
      this.showEditEventModal(event, startDate, endDate, isAllDay, selectedOption, onSaved);
    });
  }


  showCombinedEditSelectionModal(event, startDate, endDate, isAllDay, onSaved = null) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');
    this.applyEventModalSizeClass(content);

    const sourceEvents = (event.sourceEvents || []).filter(sourceEvent => !this._hiddenCalendars.has(sourceEvent.entityId));

    content.innerHTML = `
      <div class="confirm-dialog">
        <h3 class="confirm-title">${this.t('editEvent')}</h3>
        <p class="confirm-message">Select which calendar copies to edit.</p>

        <div class="recurring-options">
          ${sourceEvents.map((sourceEvent, index) => `
            <label class="recurring-option">
              <input type="checkbox" class="combined-edit-option" data-index="${index}" checked />
              <div class="recurring-option-label">
                <div class="recurring-option-title">${this.escapeHtml(this.getCalendarName(sourceEvent.entityId))}</div>
                <div class="recurring-option-description">${this.escapeHtml(sourceEvent.summary || this.t('untitledEvent'))}</div>
              </div>
            </label>
          `).join('')}
        </div>

        <div class="confirm-actions">
          <button class="btn btn-secondary" id="cancel-combined-edit-btn">${this.t('cancel')}</button>
          <button class="btn btn-primary" id="confirm-combined-edit-btn">${this.t('editEvent')}</button>
        </div>
      </div>
    `;

    modal.classList.add('show');

    this.getRootElementById('cancel-combined-edit-btn')?.addEventListener('click', () => {
      modal.classList.remove('show');
      this.showEventModal(event);
    });

    this.getRootElementById('confirm-combined-edit-btn')?.addEventListener('click', () => {
      const selectedIndexes = Array.from(this._root.querySelectorAll('.combined-edit-option:checked'))
        .map(input => Number.parseInt(input.getAttribute('data-index'), 10))
        .filter(index => Number.isInteger(index) && index >= 0 && index < sourceEvents.length);

      if (selectedIndexes.length === 0) {
        return;
      }

      const selectedEvents = selectedIndexes.map(index => sourceEvents[index]);
      modal.classList.remove('show');
      this.showEditConfirmation(selectedEvents[0], startDate, endDate, isAllDay, selectedEvents, onSaved);
    });
  }


  showCombinedDeleteSelectionModal(event, onSaved = null) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');
    this.applyEventModalSizeClass(content);

    const sourceEvents = (event.sourceEvents || []).filter(sourceEvent => !this._hiddenCalendars.has(sourceEvent.entityId));

    content.innerHTML = `
      <div class="confirm-dialog">
        <h3 class="confirm-title">${this.t('deleteEventTitle')}</h3>
        <p class="confirm-message">Select which calendar copies to delete.</p>

        <div class="recurring-options">
          ${sourceEvents.map((sourceEvent, index) => `
            <label class="recurring-option">
              <input type="checkbox" class="combined-delete-option" data-index="${index}" checked />
              <div class="recurring-option-label">
                <div class="recurring-option-title">${this.escapeHtml(this.getCalendarName(sourceEvent.entityId))}</div>
                <div class="recurring-option-description">${this.escapeHtml(sourceEvent.summary || this.t('untitledEvent'))}</div>
              </div>
            </label>
          `).join('')}
        </div>

        <div class="confirm-actions">
          <button class="btn btn-secondary" id="cancel-combined-delete-btn">${this.t('cancel')}</button>
          <button class="btn btn-danger" id="confirm-combined-delete-btn">${this.t('delete')}</button>
        </div>
      </div>
    `;

    modal.classList.add('show');

    this.getRootElementById('cancel-combined-delete-btn')?.addEventListener('click', () => {
      this._combinedDeleteTargets = null;
      modal.classList.remove('show');
      this.showEventModal(event);
    });

    this.getRootElementById('confirm-combined-delete-btn')?.addEventListener('click', () => {
      const selectedIndexes = Array.from(this._root.querySelectorAll('.combined-delete-option:checked'))
        .map(input => Number.parseInt(input.getAttribute('data-index'), 10))
        .filter(index => Number.isInteger(index) && index >= 0 && index < sourceEvents.length);

      if (selectedIndexes.length === 0) {
        return;
      }

      const selectedDeleteTargets = selectedIndexes.map(index => sourceEvents[index]);
      this._combinedDeleteTargets = selectedDeleteTargets;
      modal.classList.remove('show');
      this.showDeleteConfirmation(selectedDeleteTargets[0], selectedDeleteTargets, onSaved);
    });
  }


  showDeleteConfirmation(event, selectedEvents = null, onSaved = null) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');
    this.applyEventModalSizeClass(content);
    const deleteTargets = Array.isArray(selectedEvents) && selectedEvents.length > 0
      ? selectedEvents
      : (Array.isArray(this._combinedDeleteTargets) && this._combinedDeleteTargets.length > 0
          ? this._combinedDeleteTargets
          : [event]);
    const representativeEvent = deleteTargets[0] || event;

    // Check if any selected target is recurring
    const hasRecurringTargets = deleteTargets.some(target => target.rrule || target.recurrence_id);
    const hasFutureCapableTargets = deleteTargets.some(target => target.recurrence_id);

    if (hasRecurringTargets) {
      // Show recurring event deletion options
      content.innerHTML = `
        <div class="confirm-dialog">
          <h3 class="confirm-title">${this.t('deleteRecurringEventTitle')}</h3>
          <p class="confirm-message">
            ${this.t('deleteRecurringPrompt', { title: this.escapeHtml(representativeEvent.summary || this.t('untitledEvent')) })}
          </p>

          <div class="recurring-options">
            <label class="recurring-option">
              <input type="radio" name="delete-option" value="this" checked />
              <div class="recurring-option-label">
                <div class="recurring-option-title">${this.t('deleteThisEventOnly')}</div>
                <div class="recurring-option-description">${this.t('deleteThisOccurrence')}</div>
              </div>
            </label>

            ${hasFutureCapableTargets ? `
              <label class="recurring-option">
                <input type="radio" name="delete-option" value="future" />
                <div class="recurring-option-label">
                  <div class="recurring-option-title">${this.t('deleteThisAndFutureEvents')}</div>
                  <div class="recurring-option-description">${this.t('deleteThisOccurrenceAndFuture')}</div>
                </div>
              </label>
            ` : ''}

            <label class="recurring-option">
              <input type="radio" name="delete-option" value="all" />
              <div class="recurring-option-label">
              <div class="recurring-option-title">${this.t('deleteAllEvents')}</div>
              <div class="recurring-option-description">${this.t('deleteEntireSeries')}</div>
              </div>
            </label>
          </div>

          <div class="confirm-actions">
            <button class="btn btn-secondary" id="cancel-delete-btn">${this.t('cancel')}</button>
            <button class="btn btn-danger" id="confirm-delete-btn">${this.t('delete')}</button>
          </div>
        </div>
      `;
    } else {
      // Show simple confirmation for non-recurring events
      content.innerHTML = `
        <div class="confirm-dialog">
          <h3 class="confirm-title">${this.t('deleteEventTitle')}</h3>
          <p class="confirm-message">
            ${this.t('deleteEventConfirm', { title: this.escapeHtml(representativeEvent.summary || this.t('untitledEvent')) })}
          </p>
          <div class="confirm-actions">
            <button class="btn btn-secondary" id="cancel-delete-btn">${this.t('cancel')}</button>
            <button class="btn btn-danger" id="confirm-delete-btn">${this.t('delete')}</button>
          </div>
        </div>
      `;
    }

    modal.classList.add('show');

    // Cancel button
    this.getRootElementById('cancel-delete-btn').addEventListener('click', () => {
      this._combinedDeleteTargets = null;
      modal.classList.remove('show');
    });

    // Confirm delete button
    this.getRootElementById('confirm-delete-btn').addEventListener('click', async () => {
      const deleteBtn = this.getRootElementById('confirm-delete-btn');
      deleteBtn.disabled = true;
      deleteBtn.textContent = this.t('deleting');

      try {
        if (hasRecurringTargets) {
          // Get the selected option
          const selectedOption = this._root.querySelector('input[name="delete-option"]:checked')?.value;

          for (const targetEvent of deleteTargets) {
            const targetIsRecurring = targetEvent.rrule || targetEvent.recurrence_id;

            if (!targetIsRecurring) {
              await this.deleteEvent(targetEvent.entityId, targetEvent.uid);
              continue;
            }

            if (selectedOption === 'future' && targetEvent.recurrence_id) {
              // Delete this and future instances when this target has an occurrence id
              await this.deleteEvent(targetEvent.entityId, targetEvent.uid, targetEvent.recurrence_id, 'THISANDFUTURE');
            } else if (selectedOption === 'this' && targetEvent.recurrence_id) {
              // Delete this instance only when this target has an occurrence id
              await this.deleteEvent(targetEvent.entityId, targetEvent.uid, targetEvent.recurrence_id);
            } else if (selectedOption === 'all') {
              // Delete entire series
              await this.deleteEvent(targetEvent.entityId, targetEvent.uid);
            } else {
              // Fallback for recurring targets without recurrence_id
              await this.deleteEvent(targetEvent.entityId, targetEvent.uid);
            }
          }
        } else {
          for (const targetEvent of deleteTargets) {
            // Delete single event
            await this.deleteEvent(targetEvent.entityId, targetEvent.uid);
          }
        }

        this._combinedDeleteTargets = null;
        modal.classList.remove('show');

        // Refresh events
        this._lastFetch = null;
        await this.updateEvents({ preserveScroll: this._viewMode === 'agenda' });
        this.safeReturnToList(onSaved);
      } catch (error) {
        console.error('Failed to delete event:', error);
        this._combinedDeleteTargets = null;
        alert(error.message || this.t('failedDeleteEvent'));
        deleteBtn.disabled = false;
        deleteBtn.textContent = this.t('delete');
      }
    });
  }

  showFormError(errorDiv, message) {
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    setTimeout(() => {
      errorDiv.style.display = 'none';
    }, 5000);
  }

  showError(message) {
    console.error(message);
    // Could add a toast notification here
  }

  setModalBackHandler(onCloseBack = null) {
    this._activeModalBackHandler = typeof onCloseBack === 'function' ? onCloseBack : null;
  }


  getModalCalendarBadgesForEvent(event) {
    return getModalCalendarBadgesForEvent(event, {
      hiddenCalendars: this._hiddenCalendars,
      getVisibleCalendarBadges: (badgeEvent) => this.getVisibleCalendarBadgesForEvent(badgeEvent)
    });
  }

  getLocationMapUrl(location) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location || '')}`;
  }

  async copyEventLocationAddress(location) {
    try {
      if (!globalThis.navigator?.clipboard?.writeText) return false;
      await globalThis.navigator.clipboard.writeText(location || '');
      return true;
    } catch (err) {
      return false;
    }
  }

  // Invoke a post-save return-to-list callback without letting its errors bubble
  // into the surrounding save try/catch (which would show a misleading save-failed error).
  safeReturnToList(callback) {
    if (typeof callback !== 'function') return;
    try {
      callback();
    } catch (error) {
      console.error('Return-to-list callback failed:', error);
    }
  }

  showEventModal(event, onCloseBack = null, options = {}) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');
    this.applyEventModalSizeClass(content);
    this._eventLocationActionsExpanded = options.locationActionsExpanded === true;
    // Post-save navigation, kept separate from close/back (_activeModalBackHandler).
    // Only supplied by showDayModal; the +N compact modal leaves it null so a save
    // there closes to the calendar rather than reopening a stale captured list.
    const onSaved = typeof options.onSaved === 'function' ? options.onSaved : null;

    let startDate, endDate, isAllDay;

    if (event.start.dateTime) {
      startDate = new Date(event.start.dateTime);
      endDate = new Date(event.end.dateTime);
      isAllDay = false;
    } else if (event.start.date) {
      // Date-only all-day events use configured-zone calendar bounds for display.
      startDate = this.parseCalendarDate(event.start.date);
      // End date is exclusive for all-day events, so subtract a configured-zone
      // calendar day before converting to a Date for display.
      endDate = this.parseCalendarDateWithOffset(event.end.date, -1);
      isAllDay = true;
    } else {
      startDate = new Date(event.start);
      endDate = new Date(event.end);
      isAllDay = !event.start.includes('T');
      // If it's an all-day event in string format, adjust end date
      if (isAllDay && event.end) {
        endDate.setDate(endDate.getDate() - 1);
      }
    }

    // Get calendar info and capabilities
    const calendarName = this.getCalendarName(event.entityId);
    const capabilities = this._calendarCapabilities[event.entityId] || {};
    const visibleSourceEvents = this.getVisibleCombinedSourceEvents(event);
    const visibleBadges = this.getModalCalendarBadgesForEvent(event)
      .map((calendar) => {
        const sourceEvent = visibleSourceEvents.find((candidate) => candidate.entityId === calendar.entityId);
        const colorEvent = sourceEvent || (calendar.entityId === event.entityId ? event : null);
        const color = colorEvent ? (this.getEffectiveEventColor(colorEvent) || calendar.color) : calendar.color;
        return {
          ...calendar,
          color,
          textColor: this.getContractColor(color),
          name: this.getCalendarName(calendar.entityId)
        };
      });
    const modalBadgeColor = this.getEffectiveEventColor(event) || event.color;

    // For edit/delete to work, we need:
    // 1. Event management enabled
    // 2. Calendar not read-only
    // 3. Event has a UID (required for modifications)
    const hasUID = event.uid !== undefined && event.uid !== null && event.uid !== '';
    const canModify = this._config.enable_event_management &&
                     !capabilities.isReadonly &&
                     hasUID;

    // WebSocket delete works for Google Calendar and other integrations
    const canEdit = canModify;
    const canDelete = canModify; // WebSocket delete works for all calendars including Google
    const canForward = !!this._config.enable_event_management && this.getWritableCalendars().length > 0;

    content.innerHTML = renderEventDetailsModal({
      event,
      startDate,
      endDate,
      isAllDay,
      calendarName,
      visibleBadges,
      modalBadgeColor,
      modalBadgeTextColor: this.getContractColor(modalBadgeColor),
      capabilities,
      hasUID,
      canEdit,
      canDelete,
      canForward,
      canModify,
      customColor: this.getCustomEventColor(event),
      locationLinks: this._config.location_links === true,
      locationActionsExpanded: this._eventLocationActionsExpanded,
      locationMapUrl: this.getLocationMapUrl(event.location),
      helpers: {
        escapeHtml: this.escapeHtml.bind(this),
        formatDate: this.formatDate.bind(this),
        formatEventTime: this.formatEventTime.bind(this),
        formatDuration: this.formatDuration.bind(this),
        renderEventDescription: this.renderEventDescription.bind(this),
        t: this.t.bind(this)
      }
    });

    modal.classList.add('show');
    this.setModalBackHandler(onCloseBack);

    // Close button
    this.getRootElementById('close-modal')?.addEventListener('click', () => {
      this._eventLocationActionsExpanded = false;
      if (this._activeModalBackHandler) {
        const backHandler = this._activeModalBackHandler;
        this._activeModalBackHandler = null;
        backHandler();
      } else {
        modal.classList.remove('show');
      }
    });

    this.getRootElementById('event-location-toggle')?.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.showEventModal(event, onCloseBack, { locationActionsExpanded: !this._eventLocationActionsExpanded, onSaved });
    });

    this.getRootElementById('open-location-map-btn')?.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      window.open(this.getLocationMapUrl(event.location), '_blank', 'noopener,noreferrer');
    });

    this.getRootElementById('copy-location-address-btn')?.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.copyEventLocationAddress(event.location);
    });

    // Edit button
    this.getRootElementById('edit-event-btn')?.addEventListener('click', () => {
      this._activeModalBackHandler = null;
      this._eventLocationActionsExpanded = false;
      modal.classList.remove('show');
      if (event.isCombinedCalendarEvent && Array.isArray(event.sourceEvents) && event.sourceEvents.length > 1) {
        this.showCombinedEditSelectionModal(event, startDate, endDate, isAllDay, onSaved);
        return;
      }
      this.showEditConfirmation(event, startDate, endDate, isAllDay, null, onSaved);
    });


    this.getRootElementById('custom-color-btn')?.addEventListener('click', () => {
      this._activeModalBackHandler = null;
      this._eventLocationActionsExpanded = false;
      modal.classList.remove('show');
      if (event.isCombinedCalendarEvent && Array.isArray(event.sourceEvents)) {
        const visibleSourceEvents = this.getVisibleCombinedSourceEvents(event);
        if (visibleSourceEvents.length > 1) {
          this.showCombinedCustomColorSelectionModal(event, onCloseBack, onSaved);
          return;
        }
        if (visibleSourceEvents.length === 1) {
          this.showCustomColorModal(visibleSourceEvents[0], event, onCloseBack, onSaved);
          return;
        }
      }
      this.showCustomColorModal(event, event, onCloseBack, onSaved);
    });


    // Forward button
    this.getRootElementById('forward-event-btn')?.addEventListener('click', () => {
      this._activeModalBackHandler = null;
      this._eventLocationActionsExpanded = false;
      modal.classList.remove('show');
      this.showForwardEventModal(event, startDate, endDate, isAllDay);
    });

    // Delete button
    this.getRootElementById('delete-event-btn')?.addEventListener('click', () => {
      this._activeModalBackHandler = null;
      this._eventLocationActionsExpanded = false;
      modal.classList.remove('show');
      if (event.isCombinedCalendarEvent && Array.isArray(event.sourceEvents) && event.sourceEvents.length > 1) {
        this.showCombinedDeleteSelectionModal(event, onSaved);
        return;
      }
      this.showDeleteConfirmation(event, null, onSaved);
    });
  }


  getVisibleCombinedSourceEvents(event) {
    if (!event?.isCombinedCalendarEvent || !Array.isArray(event.sourceEvents)) return [];
    return event.sourceEvents.filter((sourceEvent) => !this._hiddenCalendars.has(sourceEvent.entityId));
  }

  showCombinedCustomColorSelectionModal(wrapperEvent, onCloseBack = null, onSaved = null) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');
    this.applyEventModalSizeClass(content);
    const sourceEvents = this.getVisibleCombinedSourceEvents(wrapperEvent);
    content.innerHTML = `
      <div class="confirm-dialog">
        <h3 class="confirm-title">${this.t('customColorTitle')}</h3>
        <p class="confirm-message">${this.t('customColorCombinedPrompt')}</p>
        <div class="recurring-options">
          ${sourceEvents.map((sourceEvent, index) => `
            <label class="recurring-option">
              <input type="radio" name="combined-custom-color-option" data-index="${index}" ${index === 0 ? 'checked' : ''} />
              <div class="recurring-option-label">
                <div class="recurring-option-title">${this.escapeHtml(this.getCalendarName(sourceEvent.entityId))}</div>
                <div class="recurring-option-description">${this.escapeHtml(sourceEvent.summary || this.t('untitledEvent'))}</div>
              </div>
            </label>
          `).join('')}
        </div>
        <div class="confirm-actions">
          <button class="btn btn-secondary" id="cancel-combined-custom-color-btn">${this.t('cancel')}</button>
          <button class="btn btn-primary" id="confirm-combined-custom-color-btn">${this.t('continue')}</button>
        </div>
      </div>`;
    modal.classList.add('show');
    this.getRootElementById('cancel-combined-custom-color-btn')?.addEventListener('click', () => this.showEventModal(wrapperEvent, onCloseBack, { onSaved }));
    this.getRootElementById('confirm-combined-custom-color-btn')?.addEventListener('click', () => {
      const selected = this._root.querySelector('input[name="combined-custom-color-option"]:checked');
      const index = Number.parseInt(selected?.getAttribute('data-index') || '0', 10);
      this.showCustomColorModal(sourceEvents[index] || sourceEvents[0], wrapperEvent, onCloseBack, onSaved);
    });
  }

  getCustomColorScopes(event) {
    const keys = this.getCustomEventColorKeys(event);
    return [
      { value: 'this', label: this.t('deleteThisEventOnly'), show: true },
      { value: 'future', label: this.t('deleteThisAndFutureEvents'), show: !!keys?.supportsFuture },
      { value: 'all', label: this.t('deleteAllEvents'), show: !!keys?.supportsSeries }
    ].filter(scope => scope.show);
  }

  showCustomColorModal(targetEvent, returnEvent = targetEvent, onCloseBack = null, onSaved = null) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');
    this.applyEventModalSizeClass(content);
    const currentColor = this.getCustomEventColor(targetEvent) || this.getEventAccentColor(targetEvent) || targetEvent.color || '#3B82F6';
    let selectedColor = currentColor;
    const scopes = this.getCustomColorScopes(targetEvent);
    const scopeHtml = scopes.length > 1 ? `
      <div class="modal-row"><div class="modal-label">${this.t('recurringEventOptions')}</div><div class="modal-value recurring-options custom-color-scope-options">
        ${scopes.map((scope, index) => `<label class="recurring-option"><input type="radio" name="custom-color-scope" value="${scope.value}" ${index === 0 ? 'checked' : ''} /><div class="recurring-option-label"><div class="recurring-option-title">${scope.label}</div></div></label>`).join('')}
      </div></div>` : '';
    content.innerHTML = `
      <div class="modal-header"><h3 class="modal-title">${this.t('customColorTitle')}</h3><button class="modal-close" id="close-custom-color-modal">×</button></div>
      <div class="modal-body custom-color-modal">
        <daylight-color-picker id="custom-color-wheel" value="${currentColor}" title="${this.t('customColorTitle')}" show-actions="false"></daylight-color-picker>
        ${scopeHtml}
        <div class="modal-actions"><div class="modal-actions-left"><button class="btn btn-secondary" id="custom-color-default-btn">${this.t('useDefault')}</button></div><div class="modal-actions-right"><button class="btn btn-secondary" id="cancel-custom-color-btn">${this.t('cancel')}</button><button class="btn btn-primary" id="apply-custom-color-btn">${this.t('applyColor')}</button></div></div>
      </div>`;
    modal.classList.add('show');
    const close = () => this.showEventModal(returnEvent, onCloseBack, { onSaved });
    const picker = this.getRootElementById('custom-color-wheel');
    picker?.addEventListener('color-change', (event) => { selectedColor = event.detail.color; });
    this.getRootElementById('close-custom-color-modal')?.addEventListener('click', close);
    this.getRootElementById('cancel-custom-color-btn')?.addEventListener('click', close);
    const selectedScope = () => this._root.querySelector('input[name="custom-color-scope"]:checked')?.value || 'this';
    this.getRootElementById('apply-custom-color-btn')?.addEventListener('click', () => {
      const normalized = normalizeHexColor(selectedColor || picker?.value || currentColor);
      if (!normalized) return;
      this._customEventColors = applyCustomEventColor(this._customEventColors, targetEvent, selectedScope(), normalized, { getEventIdentityKey: this.getEventIdentityKey.bind(this) });
      this.persistPreferences();
      this.render();
      this.showEventModal(returnEvent, onCloseBack, { onSaved });
    });
    this.getRootElementById('custom-color-default-btn')?.addEventListener('click', () => {
      this._customEventColors = removeCustomEventColor(this._customEventColors, targetEvent, selectedScope(), { getEventIdentityKey: this.getEventIdentityKey.bind(this) });
      this.persistPreferences();
      this.render();
      this.showEventModal(returnEvent, onCloseBack, { onSaved });
    });
  }


  showDayCompactModal(date, events) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');
    this.applyEventModalSizeClass(content);

    const sortedEvents = this.sortEventsForDate(events, date);

    content.innerHTML = `
      <div class="modal-header">
        <h3 class="modal-title">${this.formatDisplayDate(date)}</h3>
        <button class="modal-close" id="close-modal">×</button>
      </div>
      <div class="modal-body">
        <div class="week-compact-container single-day-modal">
          <div class="week-day-column">
            <div class="week-day-header">
              <div class="week-day-name">${this.getWeekdayNames()[date.getDay()]}</div>
              <div class="week-day-date">${date.getDate()}</div>
            </div>
            ${sortedEvents.length > 0 ? sortedEvents.map(event => {
              const daySegment = this.getEventDaySegment(event, date);
              if (!daySegment) return '';
              const { segmentStart, isAllDaySegment } = daySegment;
              const timeLabel = isAllDaySegment ? this.t('allDay') : this.formatEventTime(segmentStart);
              const eventStyle = this.getEventStyle(event);
              return `
                <div class="week-compact-event" style="${eventStyle} --event-bubble-font-size: ${this.getEventBubbleFontSize(event)}; --event-time-font-size: ${this.getEventTimeFontSize(event)}; --event-location-font-size: ${this.getEventLocationFontSize(event)}; --event-bubble-text-color: ${this.getEventBubbleFontColor(event)};" data-event='${JSON.stringify(event).replace(/'/g, "&#39;")}'>
                  ${this.shouldShowEventTime(event) ? `${this.shouldShowEventTime(event) ? `<div class="week-compact-event-time">${timeLabel}</div>` : ''}` : ''}
                  <div class="week-compact-event-title">${this.renderEventTitleWithPrefix(event, this.getEventDisplayTitle(event))}</div>
                  ${this.shouldShowEventLocation(event) ? `<div class="week-compact-event-location">📍 ${this.escapeHtml(this.getDisplayLocation(event.location, event))}</div>` : ''}
                  ${this.renderEventStyleCornerIcon(event)}
                  ${this.renderCombinedCornerBubbles(event)}
                </div>
              `;
            }).join('') : `<div class="empty-state-subtext">${this.t('noEvents')}</div>`}
          </div>
        </div>
      </div>
    `;

    modal.classList.add('show');
    this._activeModalBackHandler = null;

    this.getRootElementById('close-modal')?.addEventListener('click', () => {
      this._activeModalBackHandler = null;
      this._eventLocationActionsExpanded = false;
      modal.classList.remove('show');
    });

    this._root.querySelectorAll('.week-compact-event').forEach(el => {
      el.addEventListener('click', () => {
        const eventData = JSON.parse(el.getAttribute('data-event'));
        this.showEventModal(eventData, () => this.showDayCompactModal(date, events));
      });
    });
  }

  showDayModal(date, events) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');
    this.applyEventModalSizeClass(content);

    const sortedEvents = this.sortEventsForDate(events, date);

    content.innerHTML = `
      <div class="modal-header">
        <h3 class="modal-title">${this.formatDisplayDate(date)}</h3>
        <button class="modal-close" id="close-modal">×</button>
      </div>
      <div class="modal-body">
        ${sortedEvents.map(event => {
          const daySegment = this.getEventDaySegment(event, date);
          if (!daySegment) return '';

          const { segmentStart, segmentEnd, isAllDaySegment } = daySegment;
          const eventStyle = this.getEventStyle(event, { withBorderAccent: true });

          return `
            <div class="day-event day-modal-event" style="${eventStyle} --event-bubble-font-size: ${this.getEventBubbleFontSize(event)}; --event-time-font-size: ${this.getEventTimeFontSize(event)}; --event-location-font-size: ${this.getEventLocationFontSize(event)}; --event-bubble-text-color: ${this.getEventBubbleFontColor(event)};" data-event='${JSON.stringify(event).replace(/'/g, "&#39;")}'>
              <div class="day-modal-event-title">${this.renderEventTitleWithPrefix(event, this.getEventDisplayTitle(event))}</div>
              ${this.shouldShowEventTime(event) ? `<div class="day-modal-event-meta">${isAllDaySegment ? this.t('allDay') : this.formatEventTimeRange(segmentStart, segmentEnd)}</div>` : ''}
              ${this.shouldShowEventLocation(event) ? `<div class="day-modal-event-location">📍 ${this.escapeHtml(this.getDisplayLocation(event.location, event))}</div>` : ''}
              ${this.renderEventStyleCornerIcon(event)}
              ${this.renderCombinedCornerBubbles(event)}
            </div>
          `;
        }).join('') || `<div class="empty-state-subtext">${this.t('noEvents')}</div>`}
      </div>
      ${(this._config.enable_event_management && this.getWritableCalendars().length > 0 && !this._config.hide_add_event_button) ? `
      <div class="modal-actions">
        <div class="modal-actions-right">
          <button class="btn btn-primary" id="day-modal-add-event">${this.t('addEvent')}</button>
        </div>
      </div>` : ''}
    `;

    modal.classList.add('show');
    this._activeModalBackHandler = null;

    this.getRootElementById('close-modal')?.addEventListener('click', () => {
      this._activeModalBackHandler = null;
      this._eventLocationActionsExpanded = false;
      modal.classList.remove('show');
    });

    // Reopen this day's list with freshly-fetched events (used for close/back AND
    // after a successful add/edit/delete). Always re-reads getEventsForDay so it
    // never shows a stale captured list.
    const reopenDayList = () => this.showDayModal(date, this.getEventsForDay(date));

    this.getRootElementById('day-modal-add-event')?.addEventListener('click', () => {
      this.showCreateEventModal(date, null, { onSaved: reopenDayList });
    });

    this._root.querySelectorAll('.day-event').forEach(el => {
      el.addEventListener('click', () => {
        const eventData = JSON.parse(el.getAttribute('data-event'));
        this.showEventModal(eventData, reopenDayList, { onSaved: reopenDayList });
      });
    });
  }

  getMonthName(month) {
    const formatter = new Intl.DateTimeFormat(this.getLocale(), { month: 'long' });
    return formatter.format(new Date(2020, month, 1));
  }

  getMonthNameShort(month) {
    const formatter = new Intl.DateTimeFormat(this.getLocale(), { month: 'short' });
    return formatter.format(new Date(2020, month, 1));
  }

  formatTime(date) {
    return new Intl.DateTimeFormat(this.getLocale(), this.withTimeZone(this.getTimeFormatOptions())).format(date);
  }

  parseTimeValue(value) {
    if (value === undefined || value === null) return null;
    const raw = String(value).trim();
    if (!raw || raw === 'unknown' || raw === 'unavailable') return null;

    const dateCandidate = new Date(raw);
    if (!Number.isNaN(dateCandidate.getTime())) {
      return dateCandidate;
    }

    const timeMatch = raw.match(/^(\d{1,2}):(\d{2})(?::(\d{2}))?(?:\s*([AaPp][Mm]))?$/);
    if (!timeMatch) return null;

    let hours = Number(timeMatch[1]);
    const minutes = Number(timeMatch[2]);
    const seconds = Number(timeMatch[3] || 0);
    const meridiem = timeMatch[4] ? timeMatch[4].toLowerCase() : null;

    if (!Number.isFinite(hours) || !Number.isFinite(minutes) || !Number.isFinite(seconds)) return null;
    if (minutes > 59 || seconds > 59) return null;

    if (meridiem) {
      if (hours < 1 || hours > 12) return null;
      if (meridiem === 'pm' && hours !== 12) hours += 12;
      if (meridiem === 'am' && hours === 12) hours = 0;
    } else if (hours > 23) {
      return null;
    }

    const parsed = new Date();
    parsed.setHours(hours, minutes, seconds, 0);
    return parsed;
  }

  teardownWeatherForecastSubscription() {
    this._weatherForecastController.teardownSubscription();
  }

  ensureWeatherForecastSubscription() {
    return this._weatherForecastController.ensureSubscription();
  }

  refreshWeatherForecastData() {
    return this._weatherForecastController.refreshForecastData();
  }

  getHeaderEntityRenderSignature(entityState) {
    return getHeaderEntityRenderSignatureFromState(entityState);
  }

  getFormattedHeaderSensorTime() {
    const sensorEntityId = this._config?.header_time_sensor;
    if (!sensorEntityId) return '';
    return getFormattedHeaderSensorTime(
      this._hass,
      sensorEntityId,
      (value) => this.parseTimeValue(value),
      (date) => this.formatTime(date)
    );
  }

  normalizeWeatherTemperature(value) {
    return normalizeWeatherTemperature(value);
  }

  mapWeatherConditionToIcon(conditionValue) {
    return mapWeatherConditionToIcon(conditionValue);
  }

  getHeaderWeatherData() {
    const sensorEntityId = this._config?.header_weather_sensor;
    if (!sensorEntityId) return null;
    return getHeaderWeatherDisplayData(this._hass, sensorEntityId);
  }

  resolveHeaderItems() {
    return resolveHeaderItems(this._config?.header_items, this._hass, {
      parseTimeValue: (value) => this.parseTimeValue(value),
      formatTime: (date) => this.formatTime(date),
      formatDate: (date) => new Intl.DateTimeFormat(this.getLocale(), this.withTimeZone({ month: 'short', day: 'numeric' })).format(date),
      formatDateTime: (date) => new Intl.DateTimeFormat(this.getLocale(), this.withTimeZone({ month: 'short', day: 'numeric', ...this.getTimeFormatOptions() })).format(date)
    });
  }

  getFormattedHeaderWeather() {
    const weatherData = this.getHeaderWeatherData();
    if (!weatherData) return '';
    return `${weatherData.conditionIcon} ${weatherData.temperature}`;
  }

  getForecastForDate(date) {
    if (this._config?.show_daily_weather_forecast === false) return null;
    const sensorEntityId = this._config?.header_weather_sensor;
    if (!sensorEntityId) return null;
    const weatherEntity = this._hass?.states?.[sensorEntityId];
    const wsForecast = this._weatherForecastController.getForecastForEntity(sensorEntityId);
    const forecasts = getWeatherEntityForecast(weatherEntity, wsForecast);
    return normalizeForecastForDate(forecasts, date, (forecastDate) => this.getDateKey(forecastDate));
  }

  renderDayForecast(date, viewMode = 'week-compact') {
    return renderDayForecast(date, viewMode, {
      escapeHtml: this.escapeHtml.bind(this),
      getForecastForDate: this.getForecastForDate.bind(this)
    });
  }

  formatDate(date) {
    return new Intl.DateTimeFormat(this.getLocale(), this.withTimeZone({ weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })).format(date);
  }

  formatDisplayDate(date) {
    return new Intl.DateTimeFormat(this.getLocale(), { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }).format(date);
  }

  formatDuration(startDate, endDate) {
    const diffMs = endDate - startDate;
    const diffMins = Math.floor(diffMs / 60000);
    const hours = Math.floor(diffMins / 60);
    const minutes = diffMins % 60;

    const parts = [];
    if (hours > 0) {
      parts.push(this.t(hours === 1 ? 'durationHour' : 'durationHours', { count: hours }));
    }
    if (minutes > 0) {
      parts.push(this.t(minutes === 1 ? 'durationMinute' : 'durationMinutes', { count: minutes }));
    }
    if (parts.length === 0) {
      return this.t('durationMinutes', { count: 0 });
    }
    return parts.join(' ');
  }

  getCalendarName(entityId) {
    return getCalendarName(entityId, {
      calendarNames: this._config.calendar_names || {},
      hassStates: this._hass?.states || {},
      virtualCalendars: this._config.virtual_calendars || []
    });
  }

  getCalendarBadgeIcon(entityId) {
    if (entityId && entityId.startsWith('virtual:')) {
      const virtualBadge = (this._config.virtual_calendars || []).find((calendar) => `virtual:${calendar.id}` === entityId);
      if (virtualBadge?.icon) return virtualBadge.icon;
    }
    const configured = this._config.calendar_badge_icons?.[entityId];
    if (!configured) return null;
    return String(configured).trim() || null;
  }

  getCalendarBadgePersonEntityId(badgeEntityId) {
    return getCalendarBadgePersonEntityId(badgeEntityId, this._config?.calendar_person_entities || {});
  }

  getCalendarBadgePersonState(badgeEntityId) {
    const personEntityId = this.getCalendarBadgePersonEntityId(badgeEntityId);
    if (!personEntityId) return null;
    return this._hass?.states?.[personEntityId] || null;
  }

  formatPersonStateLabel(personState) {
    return getPersonStateLabel(personState);
  }

  getPersonEntityPictureUrl(personState) {
    return getPersonEntityPictureUrl(this._hass, personState);
  }

  getCalendarBadgePersonRenderSignature(hass = this._hass) {
    const personEntityIds = Array.from(new Set(Object.values(this._config?.calendar_person_entities || {})
      .map((entityId) => typeof entityId === 'string' ? entityId.trim() : '')
      .filter(Boolean)));

    if (personEntityIds.length === 0) return '';

    return getEntityRenderSignature(hass, personEntityIds);
  }

  renderCalendarBadgeLabel(badgeItem, badgeTextColor) {
    return renderCalendarBadgeLabel({
      badgeItem,
      badgeTextColor,
      helpers: this.getCalendarBadgeRenderHelpers()
    });
  }

  renderCalendarBadgeIcon(entityId, name, color, isHidden, iconOverride = null) {
    return renderCalendarBadgeIcon({
      entityId,
      name,
      color,
      isHidden,
      iconOverride,
      helpers: this.getCalendarBadgeRenderHelpers()
    });
  }

  renderEventDescription(description) {
    const text = String(description ?? '').trim();
    if (!text) return '';

    return this.containsBlockHtml(text)
      ? this.sanitizeBasicDescriptionHtml(text)
      : this.renderMarkdownDescription(text);
  }

  containsBlockHtml(text) {
    return /<\/?(?:p|div|ul|ol|li|blockquote|pre|h[1-6]|table|tr|td|th)\b/i.test(String(text ?? ''));
  }

  renderMarkdownDescription(text) {
    const lines = String(text ?? '').replace(/\r\n?/g, '\n').split('\n');
    const htmlBlocks = [];
    let paragraphLines = [];
    let listItems = [];
    let listType = null;
    let quoteLines = [];

    const flushParagraph = () => {
      if (paragraphLines.length === 0) return;
      htmlBlocks.push(`<p>${paragraphLines.map(line => this.renderMarkdownInline(line)).join('<br>')}</p>`);
      paragraphLines = [];
    };

    const flushList = () => {
      if (!listType || listItems.length === 0) return;
      htmlBlocks.push(`<${listType}>${listItems.map(item => `<li>${this.renderMarkdownInline(item)}</li>`).join('')}</${listType}>`);
      listItems = [];
      listType = null;
    };

    const flushQuote = () => {
      if (quoteLines.length === 0) return;
      htmlBlocks.push(`<blockquote>${quoteLines.map(line => this.renderMarkdownInline(line)).join('<br>')}</blockquote>`);
      quoteLines = [];
    };

    const flushAll = () => {
      flushParagraph();
      flushList();
      flushQuote();
    };

    lines.forEach((line) => {
      if (!line.trim()) {
        flushAll();
        return;
      }

      const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
      if (headingMatch) {
        flushAll();
        const level = headingMatch[1].length;
        htmlBlocks.push(`<h${level}>${this.renderMarkdownInline(headingMatch[2])}</h${level}>`);
        return;
      }

      const unorderedMatch = line.match(/^\s*[-*+]\s+(.+)$/);
      if (unorderedMatch) {
        flushParagraph();
        flushQuote();
        if (listType && listType !== 'ul') flushList();
        listType = 'ul';
        listItems.push(unorderedMatch[1]);
        return;
      }

      const orderedMatch = line.match(/^\s*\d+\.\s+(.+)$/);
      if (orderedMatch) {
        flushParagraph();
        flushQuote();
        if (listType && listType !== 'ol') flushList();
        listType = 'ol';
        listItems.push(orderedMatch[1]);
        return;
      }

      const quoteMatch = line.match(/^\s*>\s?(.*)$/);
      if (quoteMatch) {
        flushParagraph();
        flushList();
        quoteLines.push(quoteMatch[1]);
        return;
      }

      flushList();
      flushQuote();
      paragraphLines.push(line);
    });

    flushAll();
    return htmlBlocks.join('');
  }

  renderMarkdownInline(text) {
    const codeSpans = [];
    let html = this.escapeHtml(text).replace(/`([^`]+)`/g, (_match, code) => {
      const token = `§CODESPAN${codeSpans.length}§`;
      codeSpans.push(`<code>${code}</code>`);
      return token;
    });

    html = html.replace(/\[([^\]]+)]\(([^)\s]+)\)/g, (_match, label, url) => {
      const safeUrl = this.getSafeDescriptionUrl(this.decodeHtmlEntities(url));
      if (!safeUrl) return label;
      return `<a href="${this.escapeHtmlAttribute(safeUrl)}" target="_blank" rel="noopener noreferrer">${label}</a>`;
    });

    html = html
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/__([^_]+)__/g, '<strong>$1</strong>')
      .replace(/~~([^~]+)~~/g, '<s>$1</s>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>')
      .replace(/_([^_]+)_/g, '<em>$1</em>');

    html = this.restoreAllowedDescriptionTags(html);
    codeSpans.forEach((codeHtml, index) => {
      html = html.replace(`§CODESPAN${index}§`, codeHtml);
    });

    return html;
  }

  sanitizeBasicDescriptionHtml(text) {
    const cleanText = String(text ?? '').replace(/<script\b[\s\S]*?<\/script>/gi, '').replace(/<style\b[\s\S]*?<\/style>/gi, '');
    const escaped = this.escapeHtml(cleanText).replace(/\r\n?|\n/g, '<br>');
    return this.restoreAllowedDescriptionTags(escaped);
  }

  restoreAllowedDescriptionTags(html) {
    const allowedSimpleTags = 'b|strong|i|em|u|s|br|p|div|ul|ol|li|blockquote|code|pre|h[1-6]|table|thead|tbody|tfoot|tr|td|th';

    const renderAnchor = (attrs, content = '') => {
      const hrefMatch = attrs.match(/href\s*=\s*(?:&quot;([^&]*)&quot;|&#39;([^&]*)&(?:#39|apos);|"([^"]*)"|'([^']*)'|([^\s&"']+))/i);
      const href = hrefMatch ? this.decodeHtmlEntities(hrefMatch[1] || hrefMatch[2] || hrefMatch[3] || hrefMatch[4] || hrefMatch[5] || '') : '';
      const safeUrl = this.getSafeDescriptionUrl(href);
      if (!safeUrl) return content;
      return `<a href="${this.escapeHtmlAttribute(safeUrl)}" target="_blank" rel="noopener noreferrer">${content}</a>`;
    };

    return String(html ?? '')
      .replace(/&lt;a\s+([\s\S]*?)&gt;([\s\S]*?)&lt;\/a&gt;/gi, (_match, attrs, content) => renderAnchor(attrs, content))
      .replace(/&lt;a\s+([\s\S]*?)&gt;/gi, (_match, attrs) => renderAnchor(attrs).replace('</a>', ''))
      .replace(/&lt;\/a&gt;/gi, '</a>')
      .replace(new RegExp(`&lt;(/?)(${allowedSimpleTags})(?:\\s+[\\s\\S]*?)?\\s*(/?)&gt;`, 'gi'), (_match, closing, tag, selfClosing) => {
        const normalizedTag = tag.toLowerCase();
        if (normalizedTag === 'br') return '<br>';
        return closing ? `</${normalizedTag}>` : `<${normalizedTag}${selfClosing ? ' /' : ''}>`;
      });
  }

  getSafeDescriptionUrl(url) {
    const value = String(url ?? '').trim();
    if (!value) return '';

    if (/^(https?:|mailto:|tel:)/i.test(value) || value.startsWith('/') || value.startsWith('#')) {
      return value;
    }

    return '';
  }

  decodeHtmlEntities(text) {
    return String(text ?? '')
      .replace(/&quot;/g, '"')
      .replace(/&#39;|&apos;/g, "'")
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  escapeHtmlAttribute(text) {
    return escapeHtmlAttribute(text);
  }

  normalizeBackgroundImageUrl(url) {
    if (!url) return null;

    const value = String(url).trim();
    if (!value) return null;

    const mediaSourcePrefix = 'media-source://media_source/local/';
    if (value.startsWith(mediaSourcePrefix)) {
      const localPath = value.slice(mediaSourcePrefix.length);
      return `/media/local/${localPath}`;
    }

    return value;
  }

  normalizeBackgroundOpacity(opacityValue, fallback = 0) {
    return normalizeBackgroundOpacity(opacityValue, fallback);
  }

  normalizeEventModalSize(value) {
    return normalizeEventModalSize(value);
  }

  getEventModalSizeClass() {
    return `modal-size-${this.normalizeEventModalSize(this._config?.event_modal_size)}`;
  }

  applyEventModalSizeClass(content = this.getRootElementById('modal-content')) {
    if (!content?.classList) return;

    content.classList.remove('modal-size-narrow', 'modal-size-medium', 'modal-size-wide', 'modal-size-full');
    content.classList.add(this.getEventModalSizeClass());
  }

  static getStubConfig() {
    return createDefaultStubConfig();
  }

  getCardSize() {
    return 6;
  }

  static async getConfigElement() {
    return document.createElement('daylight-calendar-card-editor');
  }
}

class LegacySkylightCalendarCard extends SkylightCalendarCard {}

customElements.define('daylight-calendar-card', SkylightCalendarCard);
customElements.define('skylight-calendar-card', LegacySkylightCalendarCard);
registerDaylightCalendarCardEditor();

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'daylight-calendar-card',
  name: 'Daylight Calendar Card',
  description: 'A bright, family-friendly calendar card for Home Assistant dashboards.',
  preview: true,
  documentationURL: 'https://docs.daylightcalendar.com'
});
