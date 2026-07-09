export const getEventIdentityKey = (entityId, event) => {
  const uid = event?.uid;
  const recurrenceId = event?.recurrence_id || event?.recurring_event_id;
  if (uid && recurrenceId) return `${entityId}|${uid}|${recurrenceId}`;
  if (uid) return `${entityId}|${uid}`;
  return `${entityId}|${recurrenceId || ''}|${event?.start?.dateTime || event?.start?.date || event?.start || ''}|${event?.end?.dateTime || event?.end?.date || event?.end || ''}|${event?.summary || ''}`;
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
