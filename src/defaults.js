export const DEFAULT_LANGUAGE = 'en';

export const DEFAULT_VIEW = 'month';

export const DEFAULT_WEEK_DAYS = [0, 1, 2, 3, 4, 5, 6];

export const DEFAULT_THEME_MODE = 'auto';
export const DEFAULT_EVENT_TITLE_PREFIX = 'none';
export const DEFAULT_PAST_EVENT_MODE = 'none';
export const DEFAULT_DAY_BADGE_LAYOUT_WEEK = 'inline';
export const DEFAULT_BACKGROUND_IMAGE_SIZE = 'cover';
export const DEFAULT_BACKGROUND_IMAGE_POSITION = 'center';
export const DEFAULT_BACKGROUND_IMAGE_REPEAT = 'no-repeat';
export const DEFAULT_COMBINE_STYLE = 'bars';
export const DEFAULT_COMBINE_BACKGROUND = 'primary';
export const DEFAULT_EVENT_COLOR_MODE = 'classic';
export const DEFAULT_EVENT_NEUTRAL_BACKGROUND = '#F8F3E9';
export const DEFAULT_EVENT_TINT_OPACITY = 80;
export const DEFAULT_EVENT_COLOR_BAR_WIDTH = 18;
export const DEFAULT_EVENT_MODAL_SIZE = 'medium';

export const THEME_MODE_OPTIONS = ['auto', 'light', 'dark'];
export const EVENT_TITLE_PREFIX_OPTIONS = ['friendly_name', 'badge_icon', 'none'];
export const PAST_EVENT_MODE_OPTIONS = ['none', 'hide', 'muted'];
export const DAY_BADGE_LAYOUT_WEEK_OPTIONS = ['inline', 'stacked'];
export const COMBINE_STYLE_OPTIONS = ['stripes', 'bars', 'dots'];
export const EVENT_COLOR_MODE_OPTIONS = ['classic', 'left-neutral', 'left-tint'];
export const COMBINE_BACKGROUND_MODE_OPTIONS = ['neutral', 'primary'];
export const EVENT_MODAL_SIZE_OPTIONS = ['narrow', 'medium', 'wide', 'full'];

export const EVENT_TITLE_PREFIX_ALIASES = {
  icon: 'badge_icon',
  badge: 'badge_icon',
  badgeicon: 'badge_icon',
  friendly: 'friendly_name',
  friendlyname: 'friendly_name'
};

export const HIDDEN_CALENDAR_VISIBILITY_VALUES = [false, 'hide', 'hidden', 'off'];
export const VISIBLE_CALENDAR_VISIBILITY_VALUES = [true, 'show', 'shown', 'visible', 'on'];


export const DEFAULT_CONFIG_VALUES = {
  firstDayOfWeek: 0,
  calendar_names: {},
  calendar_badge_icons: {},
  week_days: DEFAULT_WEEK_DAYS,
  rolling_days_week_compact: null,
  rolling_days_schedule: null,
  rolling_days_agenda: null,
  rolling_weeks: null,
  show_week_numbers_month: false,
  show_all_events_month: false,
  show_all_details_month: false,
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
  hide_event_calendar_bubble: false,
  show_event_location: false,
  use_short_location: false,
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

export const DEFAULT_STUB_CONFIG = {
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
};

export const createDefaultStubConfig = () => ({
  ...DEFAULT_STUB_CONFIG,
  entities: [...DEFAULT_STUB_CONFIG.entities],
  week_days: [...DEFAULT_STUB_CONFIG.week_days],
  day_badges: [...DEFAULT_STUB_CONFIG.day_badges],
  calendar_person_entities: { ...DEFAULT_STUB_CONFIG.calendar_person_entities },
  default_hidden_calendars: [...DEFAULT_STUB_CONFIG.default_hidden_calendars]
});
