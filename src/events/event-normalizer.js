export const getEventIdentityKey = (entityId, event) => `${entityId}|${event.uid || ''}|${event.recurring_event_id || ''}|${event.start?.dateTime || event.start?.date || event.start || ''}|${event.end?.dateTime || event.end?.date || event.end || ''}|${event.summary || ''}`;

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
