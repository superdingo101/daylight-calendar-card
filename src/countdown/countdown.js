// Countdown events: events marked as a countdown show "<title> · <n> days" in a bar below the header.
// An event is marked by a marker line in its description (set via the event form toggle),
// or by living in one of the configured countdown calendars.

export const DEFAULT_COUNTDOWN_MARKER = '⏳ Countdown';
export const DEFAULT_COUNTDOWN_DAYS_AHEAD = 90;
export const MAX_COUNTDOWN_DAYS_AHEAD = 366;
export const DEFAULT_COUNTDOWN_MAX_ITEMS = 3;
export const COUNTDOWN_ICON = 'mdi:timer-sand';

const MS_PER_DAY = 24 * 60 * 60 * 1000;

// Duck-typed on purpose: a replaced global Date (test fixtures) breaks `instanceof Date`.
function isValidDate(value) {
  return typeof value?.getTime === 'function' && !Number.isNaN(value.getTime());
}

function toPositiveInteger(value, fallback, max = Infinity) {
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed) || parsed < 1) return fallback;
  return Math.min(parsed, max);
}

export function normalizeCountdownConfig(rawCountdown) {
  if (rawCountdown === true) rawCountdown = {};
  if (!rawCountdown || typeof rawCountdown !== 'object' || Array.isArray(rawCountdown)) return null;
  if (rawCountdown.enabled === false) return null;

  const marker = typeof rawCountdown.marker === 'string' && rawCountdown.marker.trim()
    ? rawCountdown.marker.trim()
    : DEFAULT_COUNTDOWN_MARKER;
  const calendars = Array.isArray(rawCountdown.calendars)
    ? rawCountdown.calendars.filter((entityId) => typeof entityId === 'string' && entityId.trim()).map((entityId) => entityId.trim())
    : [];

  return {
    marker,
    days_ahead: toPositiveInteger(rawCountdown.days_ahead, DEFAULT_COUNTDOWN_DAYS_AHEAD, MAX_COUNTDOWN_DAYS_AHEAD),
    max_items: toPositiveInteger(rawCountdown.max_items, DEFAULT_COUNTDOWN_MAX_ITEMS),
    calendars,
    show_toggle: rawCountdown.show_toggle !== false
  };
}

// Normalized `countdown` config value: false, true, or an object with only the known, valid keys.
export function normalizeCountdownConfigValue(rawCountdown) {
  if (rawCountdown === true) return true;
  if (!rawCountdown || typeof rawCountdown !== 'object' || Array.isArray(rawCountdown)) return false;
  if (rawCountdown.enabled === false) return false;
  const normalized = normalizeCountdownConfig(rawCountdown);
  const value = {};
  if (typeof rawCountdown.marker === 'string' && rawCountdown.marker.trim()) value.marker = normalized.marker;
  if (rawCountdown.days_ahead !== undefined) value.days_ahead = normalized.days_ahead;
  if (rawCountdown.max_items !== undefined) value.max_items = normalized.max_items;
  if (normalized.calendars.length) value.calendars = normalized.calendars;
  if (rawCountdown.show_toggle === false) value.show_toggle = false;
  return Object.keys(value).length ? value : true;
}

function isMarkerLine(line, marker) {
  return String(line).trim().toLowerCase() === String(marker).trim().toLowerCase();
}

export function hasCountdownMarker(description, marker) {
  if (!description || !marker) return false;
  return String(description).split(/\r?\n/).some((line) => isMarkerLine(line, marker));
}

export function stripCountdownMarker(description, marker) {
  if (!description) return '';
  if (!marker) return String(description);
  return String(description)
    .split(/\r?\n/)
    .filter((line) => !isMarkerLine(line, marker))
    .join('\n')
    .trim();
}

export function applyCountdownMarker(description, marker, enabled) {
  const stripped = stripCountdownMarker(description, marker);
  if (!enabled || !marker) return stripped;
  return stripped ? `${stripped}\n\n${marker}` : marker;
}

export function isCountdownEvent(event, countdownConfig) {
  if (!event || !countdownConfig) return false;
  if (countdownConfig.calendars.includes(event.entityId)) return true;
  return hasCountdownMarker(event.description, countdownConfig.marker);
}

function startOfLocalDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function getCountdownDays(eventStart, now = new Date()) {
  // Round instead of floor so a DST shift (23h/25h day) never skews the day count.
  return Math.round((startOfLocalDay(eventStart) - startOfLocalDay(now)) / MS_PER_DAY);
}

// The look-ahead window, minus the part the card already loaded for the visible range.
// Returns null when the loaded range already covers the whole window.
export function getCountdownFetchRange(countdownConfig, now = new Date(), loadedRange = null) {
  let startDate = startOfLocalDay(now);
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + countdownConfig.days_ahead + 1);
  if (isValidDate(loadedRange?.startDate) && isValidDate(loadedRange?.endDate)
    && loadedRange.startDate <= startDate && loadedRange.endDate > startDate) {
    startDate = new Date(loadedRange.endDate);
  }
  return startDate < endDate ? { startDate, endDate } : null;
}

// Returns the upcoming countdown events (one per recurring series), soonest first.
export function selectCountdownEvents(events, countdownConfig, { getEventStartDate, now = new Date() } = {}) {
  if (!countdownConfig || !Array.isArray(events)) return [];
  const bySeries = new Map();

  events.forEach((event) => {
    if (!isCountdownEvent(event, countdownConfig)) return;
    const start = getEventStartDate(event);
    if (!isValidDate(start)) return;
    const days = getCountdownDays(start, now);
    if (days < 0 || days > countdownConfig.days_ahead) return;

    const seriesKey = `${event.entityId}|${event.uid || event.summary || ''}`;
    const existing = bySeries.get(seriesKey);
    if (!existing || start < existing.start) {
      bySeries.set(seriesKey, { event, start, days });
    }
  });

  return Array.from(bySeries.values())
    .sort((a, b) => a.start - b.start || String(a.event.summary || '').localeCompare(String(b.event.summary || '')))
    .slice(0, countdownConfig.max_items);
}

export function formatCountdownLabel(days, t) {
  if (days === 0) return t('countdownToday');
  if (days === 1) return t('countdownTomorrow');
  return t('countdownDays', { count: days });
}

// Flat multi-colour hourglass for `weather_icon_style: colored`, drawn to match the colored weather icons.
export function renderColoredHourglassSvg() {
  return '<svg class="countdown-svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" aria-hidden="true">'
    + '<path class="hourglass-glass" d="M4.2 3H12.8C12.8 6 10 7.5 9 8.5C10 9.5 12.8 11 12.8 14H4.2C4.2 11 7 9.5 8 8.5C7 7.5 4.2 6 4.2 3Z"/>'
    + '<path class="hourglass-sand" d="M5.6 5H11.4C10.6 6.4 9.2 7.3 8.5 8C7.8 7.3 6.4 6.4 5.6 5Z"/>'
    + '<rect class="hourglass-sand" x="8.3" y="8" width="0.4" height="4"/>'
    + '<path class="hourglass-sand" d="M5 13.6C5.6 11.9 7.4 11.3 8.5 11.2C9.6 11.3 11.4 11.9 12 13.6Z"/>'
    + '<rect class="hourglass-frame" x="3" y="1.6" width="11" height="1.6" rx="0.6"/>'
    + '<rect class="hourglass-frame" x="3" y="13.8" width="11" height="1.6" rx="0.6"/>'
    + '</svg>';
}

export function getCountdownBarItems(countdownEntries, t, { iconHtml = '' } = {}) {
  return countdownEntries.map(({ event, days }) => ({
    icon: COUNTDOWN_ICON,
    iconHtml,
    title: String(event.summary || '').trim(),
    label: formatCountdownLabel(days, t)
  }));
}
