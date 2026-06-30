export function normalizeDayBadgeBlock(rule = {}, {
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

export function isPlainObject(value) {
  return !!value && typeof value === 'object' && !Array.isArray(value);
}

export function normalizeDayBadgeTapAction(tapAction) {
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

export function isFullValueTemplate(value) {
  return typeof value === 'string' && /^\s*\{\{\s*([A-Za-z0-9_.-]+)\s*\}\}\s*$/.test(value);
}

export function normalizeDayBadgeDisplayColor(value, { normalizeSingleColor } = {}) {
  if (isFullValueTemplate(value)) return String(value).trim();
  return normalizeSingleColor(value);
}

export function normalizeResolvedDayBadgeDisplayColor(value, { normalizeSingleColor } = {}) {
  const normalized = normalizeSingleColor(value);
  if (typeof normalized !== 'string') return undefined;
  const trimmed = normalized.trim();
  if (!trimmed) return undefined;

  if (/^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(trimmed)) return trimmed;
  if (/^rgba?\(\s*[+-]?(?:\d+|\d*\.\d+)%?\s*(?:,|\s)\s*[+-]?(?:\d+|\d*\.\d+)%?\s*(?:,|\s)\s*[+-]?(?:\d+|\d*\.\d+)%?(?:\s*(?:,|\/)\s*(?:[01](?:\.\d+)?|\.\d+|\d+%))?\s*\)$/i.test(trimmed)) return trimmed;
  if (/^hsla?\(\s*[+-]?(?:\d+|\d*\.\d+)(?:deg|grad|rad|turn)?\s*(?:,|\s)\s*[+-]?(?:\d+|\d*\.\d+)%\s*(?:,|\s)\s*[+-]?(?:\d+|\d*\.\d+)%(?:\s*(?:,|\/)\s*(?:[01](?:\.\d+)?|\.\d+|\d+%))?\s*\)$/i.test(trimmed)) return trimmed;

  return undefined;
}

export function parseEventDescriptionJson(event) {
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

export function buildDayBadgeResolutionContext(date, matchedEvent, { formatLocalDate } = {}) {
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

export function resolveSafePath(path, context) {
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

export function resolveDayBadgeDisplayValue(value, context) {
  if (typeof value !== 'string') return value;
  const match = value.match(/^\s*\{\{\s*([A-Za-z0-9_.-]+)\s*\}\}\s*$/);
  if (!match) return value;
  return resolveSafePath(match[1], context);
}

export function resolveDayBadgeTapAction(tapAction, context) {
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

export function resolveDayBadgeForRender(rule, date, matchedEvent, {
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

export function normalizeDayBadgeConditions(rawConditions, { normalizeEventMatchConditions } = {}) {
  return normalizeEventMatchConditions(rawConditions);
}

export function normalizeDayBadges(rawRules, {
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
