import { normalizeHeaderItems } from '../header/header-items.js';
import {
  DEFAULT_BACKGROUND_IMAGE_POSITION,
  DEFAULT_BACKGROUND_IMAGE_REPEAT,
  DEFAULT_BACKGROUND_IMAGE_SIZE,
  DEFAULT_COMBINE_BACKGROUND,
  DEFAULT_CONFIG_VALUES,
  DEFAULT_COMBINE_STYLE,
  DEFAULT_EVENT_COLOR_BAR_WIDTH,
  DEFAULT_EVENT_COLOR_MODE,
  DEFAULT_EVENT_MODAL_SIZE,
  DEFAULT_EVENT_NEUTRAL_BACKGROUND,
  DEFAULT_EVENT_TINT_OPACITY,
  DEFAULT_VIEW
} from '../defaults.js';
export function createConfigNormalizationSchema({
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
      { key: 'rolling_days_schedule', defaultValue: ({ rawConfig }) => rawConfig.rolling_days_schedule ?? DEFAULT_CONFIG_VALUES.rolling_days_schedule },
      { key: 'rolling_days_agenda', defaultValue: ({ rawConfig }) => rawConfig.rolling_days_agenda ?? DEFAULT_CONFIG_VALUES.rolling_days_agenda, normalize: ({ rawConfig }) => rawConfig.rolling_days_agenda ?? DEFAULT_CONFIG_VALUES.rolling_days_agenda },
      { key: 'rolling_weeks', defaultValue: ({ rawConfig }) => rawConfig.rolling_weeks || DEFAULT_CONFIG_VALUES.rolling_weeks },
      { key: 'show_week_numbers_month', defaultValue: ({ rawConfig }) => rawConfig.show_week_numbers_month || DEFAULT_CONFIG_VALUES.show_week_numbers_month },
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

export const EDITOR_DEFAULT_VALUES = Object.freeze({
  week_start_hour: 0,
  week_end_hour: 23,
  lock_schedule_hours: false,
  hide_the_past: false,
  past_event_mode: 'none',
  height_scale: 1,
  event_font_size: 11,
  event_time_font_size: 9,
  event_location_font_size: 9,
  combine_calendars_width: DEFAULT_EVENT_COLOR_BAR_WIDTH,
  event_color_bar_width: DEFAULT_EVENT_COLOR_BAR_WIDTH,
  event_tint_opacity: DEFAULT_EVENT_TINT_OPACITY,
  first_day_of_week: 0,
  header_background_opacity: 0,
  background_opacity: 0
});

export const EDITOR_WEEKDAY_OPTIONS = Object.freeze(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);

export function getEditorDefaultValue(key) {
  return Object.prototype.hasOwnProperty.call(EDITOR_DEFAULT_VALUES, key) ? EDITOR_DEFAULT_VALUES[key] : 0;
}

export function normalizeDefaultViewForEditor(value) {
  if (value === 'week') return 'week-compact';
  if (value === 'schedule') return 'week-standard';
  return value || DEFAULT_VIEW;
}

export function getEventCalendarBubbleMode(config = {}) {
  if (config.event_calendar_friendly_name) {
    return 'friendly_name';
  }

  if (config.hide_event_calendar_bubble) {
    return 'none';
  }

  return 'icon';
}
