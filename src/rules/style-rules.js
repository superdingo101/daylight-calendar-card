export const getEmptyAdvancedMatch = () => ({ event: {}, day: {}, any: [], all: [], not: null });

export const normalizeEventMatchConditions = (rawMatch) => {
  if (!rawMatch || typeof rawMatch !== 'object' || Array.isArray(rawMatch)) return null;

  const normalized = {};
  const logicalKeys = new Set(['all', 'and', 'any', 'not']);
  const eventAliases = {
    title_contains: 'title',
    summary_contains: 'summary',
    location_contains: 'location',
    description_contains: 'description'
  };
  const calendarAliases = new Set(['calendar_entity', 'entity_id', 'entity']);

  Object.entries(rawMatch).forEach(([key, value]) => {
    const normalizedKey = String(key || '').trim().toLowerCase();
    if (!normalizedKey) return;

    if (logicalKeys.has(normalizedKey)) {
      if (normalizedKey === 'all' || normalizedKey === 'and') {
        const conditions = Array.isArray(value) ? value : [value];
        const normalizedConditions = conditions
          .map((condition) => normalizeEventMatchConditions(condition))
          .filter(Boolean);
        if (normalizedConditions.length) {
          if (!Array.isArray(normalized.all)) normalized.all = [];
          normalized.all.push(...normalizedConditions);
        }
        return;
      }

      if (normalizedKey === 'any') {
        const conditions = Array.isArray(value) ? value : [value];
        const normalizedConditions = conditions
          .map((condition) => normalizeEventMatchConditions(condition))
          .filter(Boolean);
        if (normalizedConditions.length) normalized.any = normalizedConditions;
        return;
      }

      if (normalizedKey === 'not') {
        if (Array.isArray(value)) {
          const normalizedConditions = value
            .map((condition) => normalizeEventMatchConditions(condition))
            .filter(Boolean);
          if (normalizedConditions.length) normalized.not = normalizedConditions;
        } else {
          const normalizedCondition = normalizeEventMatchConditions(value);
          if (normalizedCondition) normalized.not = normalizedCondition;
        }
        return;
      }
    }

    if (eventAliases[normalizedKey]) {
      const canonicalKey = eventAliases[normalizedKey];
      if (normalized[canonicalKey] === undefined) normalized[canonicalKey] = `contains:${value}`;
      return;
    }

    if (calendarAliases.has(normalizedKey)) {
      if (normalized.calendar === undefined) normalized.calendar = value;
      return;
    }

    if (normalizedKey === 'all_day_event') {
      if (normalized.all_day === undefined) normalized.all_day = value;
      return;
    }

    if (['title', 'summary', 'location', 'description', 'calendar', 'all_day', 'past'].includes(normalizedKey)) {
      normalized[normalizedKey] = value;
    }
  });

  return Object.keys(normalized).length ? normalized : null;
};

export const normalizeDayMatchConditions = (rawMatch, { normalizeDayOfWeekRule, localeOverride = null } = {}) => {
  if (!rawMatch || typeof rawMatch !== 'object' || Array.isArray(rawMatch)) return null;

  const normalized = {};
  const logicalKeys = new Set(['all', 'and', 'any', 'not']);

  Object.entries(rawMatch).forEach(([key, value]) => {
    const normalizedKey = String(key || '').trim().toLowerCase();
    if (!normalizedKey) return;

    if (logicalKeys.has(normalizedKey)) {
      if (normalizedKey === 'all' || normalizedKey === 'and') {
        const conditions = Array.isArray(value) ? value : [value];
        const normalizedConditions = conditions
          .map((condition) => normalizeDayMatchConditions(condition, { normalizeDayOfWeekRule, localeOverride }))
          .filter(Boolean);
        if (normalizedConditions.length) {
          if (!Array.isArray(normalized.all)) normalized.all = [];
          normalized.all.push(...normalizedConditions);
        }
        return;
      }

      if (normalizedKey === 'any') {
        const conditions = Array.isArray(value) ? value : [value];
        const normalizedConditions = conditions
          .map((condition) => normalizeDayMatchConditions(condition, { normalizeDayOfWeekRule, localeOverride }))
          .filter(Boolean);
        if (normalizedConditions.length) normalized.any = normalizedConditions;
        return;
      }

      if (normalizedKey === 'not') {
        if (Array.isArray(value)) {
          const normalizedConditions = value
            .map((condition) => normalizeDayMatchConditions(condition, { normalizeDayOfWeekRule, localeOverride }))
            .filter(Boolean);
          if (normalizedConditions.length) normalized.not = normalizedConditions;
        } else {
          const normalizedCondition = normalizeDayMatchConditions(value, { normalizeDayOfWeekRule, localeOverride });
          if (normalizedCondition) normalized.not = normalizedCondition;
        }
        return;
      }
    }

    if (['today', 'past', 'future', 'weekend', 'weekday'].includes(normalizedKey)) {
      normalized[normalizedKey] = value;
      return;
    }

    if (normalizedKey === 'day_of_week') {
      const dayOfWeek = normalizeDayOfWeekRule(value, localeOverride);
      if (dayOfWeek.length) normalized.day_of_week = dayOfWeek;
      return;
    }

    if (normalizedKey === 'has_event' || normalizedKey === 'no_event') {
      if (value === true || value === false) {
        normalized[normalizedKey] = value;
      } else {
        const eventMatch = normalizeEventMatchConditions(value);
        if (eventMatch) normalized[normalizedKey] = eventMatch;
      }
    }
  });

  return Object.keys(normalized).length ? normalized : null;
};

export const normalizeAdvancedRuleMatch = (rawMatch, { defaultScope = 'event', localeOverride = null, normalizeDayOfWeekRule } = {}) => {
  if (!rawMatch || typeof rawMatch !== 'object' || Array.isArray(rawMatch)) return null;

  const match = getEmptyAdvancedMatch();
  const logicalKeys = new Set(['all', 'and', 'any', 'not']);
  const explicitKeys = new Set(['event', 'day', ...logicalKeys]);
  let hasMatch = false;

  if (rawMatch.event && typeof rawMatch.event === 'object' && !Array.isArray(rawMatch.event)) {
    const eventMatch = normalizeEventMatchConditions(rawMatch.event);
    if (eventMatch) {
      match.event = eventMatch;
      hasMatch = true;
    }
  }

  if (rawMatch.day && typeof rawMatch.day === 'object' && !Array.isArray(rawMatch.day)) {
    const dayMatch = normalizeDayMatchConditions(rawMatch.day, { normalizeDayOfWeekRule, localeOverride });
    if (dayMatch) {
      match.day = dayMatch;
      hasMatch = true;
    }
  }

  const implicitRaw = Object.fromEntries(Object.entries(rawMatch).filter(([key]) => !explicitKeys.has(String(key || '').trim().toLowerCase())));
  if (Object.keys(implicitRaw).length) {
    if (defaultScope === 'day') {
      const dayMatch = normalizeDayMatchConditions(implicitRaw, { normalizeDayOfWeekRule, localeOverride });
      if (dayMatch) {
        match.day = { ...match.day, ...dayMatch };
        hasMatch = true;
      }
    } else {
      const eventMatch = normalizeEventMatchConditions(implicitRaw);
      if (eventMatch) {
        match.event = { ...match.event, ...eventMatch };
        hasMatch = true;
      }
    }
  }

  ['all', 'and'].forEach((key) => {
    if (rawMatch[key] === undefined) return;
    const conditions = Array.isArray(rawMatch[key]) ? rawMatch[key] : [rawMatch[key]];
    const normalizedConditions = conditions
      .map((condition) => normalizeAdvancedRuleMatch(condition, { defaultScope, localeOverride, normalizeDayOfWeekRule }))
      .filter(Boolean);
    if (normalizedConditions.length) {
      match.all.push(...normalizedConditions);
      hasMatch = true;
    }
  });

  if (rawMatch.any !== undefined) {
    const conditions = Array.isArray(rawMatch.any) ? rawMatch.any : [rawMatch.any];
    const normalizedConditions = conditions
      .map((condition) => normalizeAdvancedRuleMatch(condition, { defaultScope, localeOverride, normalizeDayOfWeekRule }))
      .filter(Boolean);
    if (normalizedConditions.length) {
      match.any = normalizedConditions;
      hasMatch = true;
    }
  }

  if (rawMatch.not !== undefined) {
    if (Array.isArray(rawMatch.not)) {
      const normalizedConditions = rawMatch.not
        .map((condition) => normalizeAdvancedRuleMatch(condition, { defaultScope, localeOverride, normalizeDayOfWeekRule }))
        .filter(Boolean);
      if (normalizedConditions.length) {
        match.not = normalizedConditions;
        hasMatch = true;
      }
    } else {
      const normalizedCondition = normalizeAdvancedRuleMatch(rawMatch.not, { defaultScope, localeOverride, normalizeDayOfWeekRule });
      if (normalizedCondition) {
        match.not = normalizedCondition;
        hasMatch = true;
      }
    }
  }

  return hasMatch ? match : null;
};

export const normalizeLegacyDayStyleMatch = (rule, { localeOverride = null, normalizeDayOfWeekRule, normalizeAdvancedRuleMatch }) => {
  const rawCondition = String(rule.condition || '').trim().toLowerCase();
  if (!rawCondition) return null;

  const isNegatedCondition = rawCondition.startsWith('!');
  const condition = isNegatedCondition ? rawCondition.slice(1) : rawCondition;
  if (!condition) return null;

  if (!['today', 'past', 'future', 'weekend', 'weekday', 'day_of_week', 'has_event'].includes(condition)) return null;
  if (isNegatedCondition && condition !== 'has_event') return null;

  const dayMatch = {};
  if (condition === 'has_event') {
    const eventMatch = {};
    if (rule.calendar !== undefined && rule.calendar !== null && String(rule.calendar).trim()) {
      eventMatch.calendar = rule.calendar;
    }
    if (rule.title_match !== undefined && rule.title_match !== null && rule.title_match !== '') {
      eventMatch.title = rule.title_match;
    }
    if (!Object.keys(eventMatch).length) return null;
    dayMatch[isNegatedCondition ? 'no_event' : 'has_event'] = eventMatch;
  } else if (condition === 'day_of_week') {
    const dayOfWeek = normalizeDayOfWeekRule(rule.day_of_week ?? rule.day ?? rule.days, localeOverride);
    if (!dayOfWeek.length) return null;
    dayMatch.day_of_week = dayOfWeek;
  } else {
    dayMatch[condition] = true;
  }

  return normalizeAdvancedRuleMatch({ day: dayMatch }, 'day', localeOverride);
};
