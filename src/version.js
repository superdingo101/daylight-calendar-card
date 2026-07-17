export const DAYLIGHT_CALENDAR_CARD_VERSION = 'v4.9.1';

export function getDaylightCalendarCardVersion() {
  return DAYLIGHT_CALENDAR_CARD_VERSION.includes('__')
    ? 'dev'
    : DAYLIGHT_CALENDAR_CARD_VERSION;
}
