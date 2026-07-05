export const CUSTOM_EVENT_COLORS_VERSION = 1;

export function createEmptyCustomEventColors() {
  return { version: CUSTOM_EVENT_COLORS_VERSION, occurrences: {}, series: {}, future: {} };
}

export function normalizeHexColor(value) {
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

export function getOccurrenceStartToken(event) {
  return stablePart(event?.recurrence_id) || stablePart(event?.start?.dateTime) || stablePart(event?.start?.date) || stablePart(event?.start);
}

export function getCustomEventColorKeys(event, { getEventIdentityKey } = {}) {
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

export function normalizeCustomEventColors(value) {
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

export function resolveCustomEventColor(event, state, { getEventIdentityKey } = {}) {
  const colors = normalizeCustomEventColors(state);
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

export function applyCustomEventColor(state, event, scope, color, { getEventIdentityKey } = {}) {
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

export function removeCustomEventColor(state, event, scope, options = {}) {
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
