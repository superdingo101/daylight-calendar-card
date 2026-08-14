const serializeRecurrenceValue = (value, seen = new WeakSet()) => {
  if (value === null) return 'null';
  if (typeof value !== 'object') return JSON.stringify(value);
  if (seen.has(value)) return '"[Circular]"';
  seen.add(value);
  const serialized = Array.isArray(value)
    ? `[${value.map(item => serializeRecurrenceValue(item, seen)).join(',')}]`
    : `{${Object.keys(value).sort().map(key => `${JSON.stringify(key)}:${serializeRecurrenceValue(value[key], seen)}`).join(',')}}`;
  seen.delete(value);
  return serialized;
};

export const normalizeRecurrenceId = (value) => {
  if (value === undefined || value === null) return '';
  if (typeof value !== 'object') return String(value);
  if (value.dateTime !== undefined && value.dateTime !== null) return normalizeRecurrenceId(value.dateTime);
  if (value.date !== undefined && value.date !== null) return normalizeRecurrenceId(value.date);
  return serializeRecurrenceValue(value);
};

export const getEventIdentityKey = (entityId, event) => {
  const uid = event?.uid;
  const recurrenceId = normalizeRecurrenceId(event?.recurrence_id || event?.recurring_event_id);
  const start = event?.start?.dateTime || event?.start?.date || event?.start || '';
  const end = event?.end?.dateTime || event?.end?.date || event?.end || '';
  if (uid && recurrenceId) return `${entityId}|${uid}|${recurrenceId}`;
  if (uid) return `${entityId}|${uid}|${start}|${end}`;
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
