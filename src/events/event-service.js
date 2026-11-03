import { normalizeRecurrenceId } from './event-normalizer.js';

export const buildEventServiceData = (calendarId, eventData) => {
  const baseData = {
    entity_id: calendarId,
    summary: eventData.summary
  };

  if (eventData.location) {
    baseData.location = eventData.location;
  }

  if (eventData.description) {
    baseData.description = eventData.description;
  }

  if (eventData.start.date) {
    baseData.start_date = eventData.start.date;
    baseData.end_date = eventData.end.date;
  } else {
    baseData.start_date_time = eventData.start.dateTime;
    baseData.end_date_time = eventData.end.dateTime;
  }

  if (eventData.rrule) {
    baseData.rrule = eventData.rrule;
  }

  return baseData;
};

export const buildCreateEventWebSocketPayload = (calendarId, eventData) => ({
  type: 'calendar/event/create',
  entity_id: calendarId,
  event: {
    summary: eventData.summary,
    location: eventData.location,
    description: eventData.description,
    rrule: eventData.rrule,
    dtstart: eventData.start.dateTime || eventData.start.date,
    dtend: eventData.end.dateTime || eventData.end.date
  }
});

export const getRecurringUpdateControls = (originalEvent, eventData, editScope = 'this') => {
  const isRecurringUpdate = !!eventData.rrule || !!originalEvent.rrule;
  return {
    isRecurringUpdate,
    recurrenceId: (isRecurringUpdate && editScope !== 'all') ? normalizeRecurrenceId(originalEvent.recurrence_id) : null,
    recurrenceRange: (isRecurringUpdate && editScope === 'future' && originalEvent.recurrence_id) ? 'THISANDFUTURE' : null
  };
};

export const buildUpdateEventServiceData = (originalEvent, eventData, recurrenceId = null, recurrenceRange = null) => {
  const serviceData = {
    ...buildEventServiceData(originalEvent.entityId, eventData),
    uid: originalEvent.uid
  };

  const normalizedRecurrenceId = normalizeRecurrenceId(recurrenceId);
  if (normalizedRecurrenceId) {
    serviceData.recurrence_id = normalizedRecurrenceId;
  }

  if (recurrenceRange) {
    serviceData.recurrence_range = recurrenceRange;
  }

  return serviceData;
};

export const buildUpdateEventWebSocketPayload = (originalEvent, eventData, recurrenceId = null, recurrenceRange = null) => {
  const dtstart = eventData.start.dateTime || eventData.start.date;
  const dtend = eventData.end.dateTime || eventData.end.date;

  const eventPayload = {
    summary: eventData.summary,
    dtstart,
    dtend
  };

  // Form normalization keeps cleared optional fields as own properties with undefined values.
  // Partial-update calendars need explicit empty strings to remove their previous values.
  if (Object.prototype.hasOwnProperty.call(eventData, 'location')) {
    eventPayload.location = eventData.location ?? '';
  }

  if (Object.prototype.hasOwnProperty.call(eventData, 'description')) {
    eventPayload.description = eventData.description ?? '';
  }

  if (eventData.rrule) {
    eventPayload.rrule = eventData.rrule;
  }

  const wsPayload = {
    type: 'calendar/event/update',
    entity_id: originalEvent.entityId,
    uid: originalEvent.uid,
    event: eventPayload
  };

  const normalizedRecurrenceId = normalizeRecurrenceId(recurrenceId);
  if (normalizedRecurrenceId) {
    wsPayload.recurrence_id = normalizedRecurrenceId;
  }

  if (recurrenceRange) {
    wsPayload.recurrence_range = recurrenceRange;
  }

  return wsPayload;
};

export const buildDeleteEventPayload = (calendarId, uid, recurrenceId = null, recurrenceRange = null) => {
  const payload = {
    entity_id: calendarId,
    uid: uid
  };

  const normalizedRecurrenceId = normalizeRecurrenceId(recurrenceId);
  if (normalizedRecurrenceId) {
    payload.recurrence_id = normalizedRecurrenceId;
  }

  if (recurrenceRange) {
    payload.recurrence_range = recurrenceRange;
  }

  return payload;
};

export const buildDeleteEventWebSocketPayload = (calendarId, uid, recurrenceId = null, recurrenceRange = null) => ({
  type: 'calendar/event/delete',
  ...buildDeleteEventPayload(calendarId, uid, recurrenceId, recurrenceRange)
});

// Home Assistant error codes that mean the request was rejected before the calendar changed
// anything, so replacing the event with create+delete cannot duplicate it or lose its UID.
// Anything else (connection lost, timeout, "failed" from the integration) leaves the outcome unknown.
const DEFINITIVE_REJECTION_CODES = new Set([
  'unknown_command',
  'not_supported',
  'not_found',
  'unauthorized',
  'invalid_format',
  'service_validation_error'
]);

export const isDefinitiveUpdateRejection = (error) => DEFINITIVE_REJECTION_CODES.has(error?.code);

// Every field buildUpdateEventServiceData can send for a plain event. The card picks the date or
// date-time pair per event, so a usable service has to accept both pairs, not just the one in
// the current payload. Spook's calendar.update_event shares uid/summary/start_date_time/
// end_date_time but uses them as lookup filters and has no date-only pair, so it is excluded.
const UPDATE_EVENT_SERVICE_FIELDS = ['uid', 'summary', 'start_date_time', 'end_date_time', 'start_date', 'end_date'];

const collectServiceFieldNames = (fields, names = new Set()) => {
  if (!fields || typeof fields !== 'object') {
    return names;
  }
  for (const [name, field] of Object.entries(fields)) {
    // Collapsible sections in services.yaml nest their own fields one level deeper.
    if (field && typeof field === 'object' && field.fields && typeof field.fields === 'object') {
      collectServiceFieldNames(field.fields, names);
    } else {
      names.add(name);
    }
  }
  return names;
};

// A calendar.update_event service is only usable when it declares every field the card sends.
export const isCompatibleUpdateEventService = (service, serviceData) => {
  const names = collectServiceFieldNames(service?.fields);
  if (names.size === 0) {
    return false;
  }
  const required = new Set([...UPDATE_EVENT_SERVICE_FIELDS, ...Object.keys(serviceData)]);
  required.delete('entity_id');
  return [...required].every((key) => names.has(key));
};
