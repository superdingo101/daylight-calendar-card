export const matchPrimitiveCondition = (value, condition) => {
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

export const parseRegexCondition = (value) => {
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

export const matchTextCondition = (value, condition, { normalizeEventTextValue }) => {
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

export const eventFieldMatches = (event, field, condition, helpers) => {
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

export const eventMatchesNormalizedRule = (event, match, helpers) => {
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

export const findMatchingEventForCondition = (condition, dayEvents = [], helpers) => {
  if (!Array.isArray(dayEvents) || !dayEvents.length) return null;
  if (condition === true) return dayEvents[0] || null;
  if (condition === false) return null;
  return dayEvents.find((event) => eventMatchesNormalizedRule(event, condition, helpers)) || null;
};

export const dateMatchesDayCondition = (date, conditionName, conditionValue, context = {}) => {
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

export const dayMatchesNormalizedRule = (dayMatch, context = {}, helpers) => {
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

export const matchesAdvancedRule = (ruleOrMatch, context = {}, helpers) => {
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
