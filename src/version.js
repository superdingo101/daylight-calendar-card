export const DAYLIGHT_CALENDAR_CARD_VERSION = 'v5.0.0-beta0';

export function getDaylightCalendarCardVersion() {
  return DAYLIGHT_CALENDAR_CARD_VERSION.includes('__')
    ? 'dev'
    : DAYLIGHT_CALENDAR_CARD_VERSION;
}
