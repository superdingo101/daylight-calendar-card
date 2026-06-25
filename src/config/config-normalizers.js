import {
  COMBINE_BACKGROUND_MODE_OPTIONS,
  COMBINE_STYLE_OPTIONS,
  DAY_BADGE_LAYOUT_WEEK_OPTIONS,
  DEFAULT_COMBINE_BACKGROUND,
  DEFAULT_COMBINE_STYLE,
  DEFAULT_DAY_BADGE_LAYOUT_WEEK,
  DEFAULT_EVENT_COLOR_MODE,
  DEFAULT_EVENT_MODAL_SIZE,
  DEFAULT_EVENT_TITLE_PREFIX,
  DEFAULT_PAST_EVENT_MODE,
  DEFAULT_THEME_MODE,
  EVENT_COLOR_MODE_OPTIONS,
  EVENT_MODAL_SIZE_OPTIONS,
  EVENT_TITLE_PREFIX_ALIASES,
  EVENT_TITLE_PREFIX_OPTIONS,
  HIDDEN_CALENDAR_VISIBILITY_VALUES,
  PAST_EVENT_MODE_OPTIONS,
  THEME_MODE_OPTIONS,
  VISIBLE_CALENDAR_VISIBILITY_VALUES
} from '../defaults.js';
import { normalizeEnumValue } from '../utils/normalization-utils.js';
import { colorToHex } from '../utils/color-utils.js';

export function normalizeThemeMode(value) {
  if (value === true) return 'dark';
  if (value === false || value === undefined || value === null || value === '') return DEFAULT_THEME_MODE;

  return normalizeEnumValue(value, {
    allowed: THEME_MODE_OPTIONS,
    fallback: DEFAULT_THEME_MODE
  });
}

export function normalizeEventTitlePrefixMode(value) {
  return normalizeEnumValue(value, {
    aliases: EVENT_TITLE_PREFIX_ALIASES,
    allowed: EVENT_TITLE_PREFIX_OPTIONS,
    fallback: DEFAULT_EVENT_TITLE_PREFIX
  });
}

export function normalizePastEventMode(value) {
  return normalizeEnumValue(value, {
    allowed: PAST_EVENT_MODE_OPTIONS,
    fallback: DEFAULT_PAST_EVENT_MODE
  });
}

export function normalizeDayBadgeLayoutWeek(value) {
  return normalizeEnumValue(value, {
    allowed: DAY_BADGE_LAYOUT_WEEK_OPTIONS,
    fallback: DEFAULT_DAY_BADGE_LAYOUT_WEEK
  });
}

export function normalizeDefaultHiddenCalendars(config = {}) {
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

export function normalizeCombineStyle(styleValue) {
  return normalizeEnumValue(styleValue, {
    allowed: COMBINE_STYLE_OPTIONS,
    fallback: DEFAULT_COMBINE_STYLE
  });
}

export function normalizeEventColorMode(modeValue) {
  return normalizeEnumValue(modeValue, {
    allowed: EVENT_COLOR_MODE_OPTIONS,
    fallback: DEFAULT_EVENT_COLOR_MODE
  });
}

export function normalizeCombineBackground(backgroundValue, { colorToHex: normalizeColorToHex = colorToHex } = {}) {
  const normalized = String(backgroundValue || '').trim();
  if (!normalized) return DEFAULT_COMBINE_BACKGROUND;

  const lower = normalized.toLowerCase();
  if (COMBINE_BACKGROUND_MODE_OPTIONS.includes(lower)) {
    return lower;
  }

  const hex = normalizeColorToHex(normalized);
  return hex || DEFAULT_COMBINE_BACKGROUND;
}

export function normalizeBackgroundOpacity(opacityValue, fallback = 0) {
  const numericOpacity = Number(opacityValue);
  if (!Number.isFinite(numericOpacity)) {
    return fallback;
  }

  return Math.min(100, Math.max(0, numericOpacity));
}

export function normalizeEventModalSize(value) {
  const normalized = String(value || '').trim().toLowerCase();
  return EVENT_MODAL_SIZE_OPTIONS.includes(normalized) ? normalized : DEFAULT_EVENT_MODAL_SIZE;
}
