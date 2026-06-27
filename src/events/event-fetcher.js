export async function fetchEventsByCalendarInRange({
  hass,
  entities = [],
  startDate,
  endDate,
  getDateRangeChunks,
  formatLocalDate,
  getCalendarColor,
  getEventIdentityKey,
  normalizeCalendarEvent
}) {
  const chunks = getDateRangeChunks(startDate, endDate, 30);
  const eventsByCalendar = await Promise.all(
    entities.map((entityId, index) => fetchEventsForCalendar({
      hass,
      entityId,
      colorIndex: index,
      chunks,
      formatLocalDate,
      getCalendarColor,
      getEventIdentityKey,
      normalizeCalendarEvent
    }))
  );

  return entities.reduce((acc, entityId, index) => {
    acc[entityId] = eventsByCalendar[index] || [];
    return acc;
  }, {});
}

export async function fetchEventsForCalendar({
  hass,
  entityId,
  colorIndex = 0,
  chunks = [],
  formatLocalDate,
  getCalendarColor,
  getEventIdentityKey,
  normalizeCalendarEvent
}) {
  const seen = new Set();
  const color = getCalendarColor(entityId, colorIndex);

  const chunkEventLists = await Promise.all(
    chunks.map(chunk => fetchEventsForChunk({ hass, entityId, chunk, formatLocalDate }))
  );

  const mergedEvents = [];
  chunkEventLists.forEach(events => {
    if (!events || !Array.isArray(events)) return;

    events.forEach(event => {
      const key = getEventIdentityKey(entityId, event);
      if (seen.has(key)) return;
      seen.add(key);

      mergedEvents.push(normalizeCalendarEvent(event, { entityId, color }));
    });
  });

  return mergedEvents;
}

export async function fetchEventsForChunk({ hass, entityId, chunk, formatLocalDate }) {
  const chunkStartStr = chunk.startDate.toISOString();
  const chunkEndStr = chunk.endDate.toISOString();

  try {
    return await fetchEventsViaWebSocket({ hass, entityId, chunkStartStr, chunkEndStr });
  } catch (error) {
    try {
      const startDateOnly = formatLocalDate(chunk.startDate);
      const endDateOnly = formatLocalDate(chunk.endDate);
      return await hass.callApi('GET', `calendars/${entityId}?start=${startDateOnly}T00:00:00Z&end=${endDateOnly}T23:59:59Z`);
    } catch (error2) {
      console.error(`Failed to fetch events for ${entityId}:`, error2.message || error2);
      return [];
    }
  }
}

export async function fetchEventsViaWebSocket({ hass, entityId, chunkStartStr, chunkEndStr }) {
  return hass.callWS({
    type: 'calendar/events',
    entity_id: entityId,
    start_date_time: chunkStartStr,
    end_date_time: chunkEndStr
  });
}

export function mergeEvents(existingEvents, incomingEvents, { getEventIdentityKey, getEventStartDate }) {
  const mergedByKey = new Map();

  existingEvents.forEach(event => {
    mergedByKey.set(getEventIdentityKey(event.entityId, event), event);
  });

  incomingEvents.forEach(event => {
    mergedByKey.set(getEventIdentityKey(event.entityId, event), event);
  });

  return sortEventsByStartDate(Array.from(mergedByKey.values()), { getEventStartDate });
}

export function sortEventsByStartDate(events, { getEventStartDate }) {
  return [...events].sort((a, b) => getEventStartDate(a) - getEventStartDate(b));
}

export function toStableString(value) {
  if (Array.isArray(value)) {
    return `[${value.map(item => toStableString(item)).join(',')}]`;
  }

  if (value && typeof value === 'object') {
    const entries = Object.keys(value)
      .sort()
      .map(key => `${JSON.stringify(key)}:${toStableString(value[key])}`);
    return `{${entries.join(',')}}`;
  }

  return JSON.stringify(value);
}

export function getCalendarDataSignature(events = []) {
  return events
    .map(event => {
      const { entityId, color, ...eventData } = event;
      return toStableString(eventData);
    })
    .sort()
    .join('|');
}

export function isDateRangeCoveredByLoadedEvents(loadedEventRange, targetStartDate, targetEndDate) {
  if (!loadedEventRange) return false;

  return targetStartDate >= loadedEventRange.startDate &&
         targetEndDate <= loadedEventRange.endDate;
}

export function shouldRefreshEvents({ lastFetch, now = Date.now(), maxAge = 60000 } = {}) {
  return !lastFetch || (now - lastFetch > maxAge);
}
