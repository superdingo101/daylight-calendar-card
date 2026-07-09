export const getEventIdentityKey = (entityId, event) => {
  const uid = event?.uid;
  const recurrenceId = event?.recurrence_id || event?.recurring_event_id;
  const start = event?.start?.dateTime || event?.start?.date || event?.start || '';
  const end = event?.end?.dateTime || event?.end?.date || event?.end || '';
  if (uid && recurrenceId) return `${entityId}|${uid}|${recurrenceId}`;
  if (uid && event?.rrule) return `${entityId}|${uid}|${start}|${end}`;
  // Non-recurring UID events are intentionally keyed by UID so later chunks/merges deterministically replace earlier copies.
  if (uid) return `${entityId}|${uid}`;
  return `${entityId}|${recurrenceId || ''}|${start}|${end}|${event?.summary || ''}`;
};

export const normalizeCalendarEvent = (event, { entityId, color }) => ({
  ...event,
  entityId,
  color
});

export const getEventStartDate = (event, { parseLocalDate } = {}) => {
  if (event.start?.dateTime) return new Date(event.start.dateTime);
  if (event.start?.date) return parseLocalDate(event.start.date);
  return new Date(event.start);
};

export const getEventDateTimeInfo = (event, { parseCalendarDate } = {}) => {
  if (event.start.dateTime) {
    return {
      eventStart: new Date(event.start.dateTime),
      eventEnd: new Date(event.end.dateTime),
      isAllDay: false
    };
  }

  if (event.start.date) {
    return {
      eventStart: parseCalendarDate(event.start.date),
      eventEnd: parseCalendarDate(event.end.date),
      isAllDay: true
    };
  }

  const isAllDay = !event.start.includes('T');
  return {
    eventStart: new Date(event.start),
    eventEnd: new Date(event.end),
    isAllDay
  };
};
