// Refresh PR checks after generated bundle regeneration.
export const DAYLIGHT_CALENDAR_CARD_VERSION = 'dev';

export function getDaylightCalendarCardVersion() {
  return DAYLIGHT_CALENDAR_CARD_VERSION.includes('__')
    ? 'dev'
    : DAYLIGHT_CALENDAR_CARD_VERSION;
}
