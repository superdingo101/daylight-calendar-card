import { formatLocalDate, parseLocalDate, parsePossiblyLocalDateTime } from '../utils/date-utils.js';

export const resolveTimedEventRange = (startValue, endValue, fallbackDurationMs = 60 * 60 * 1000) => {
  const start = parsePossiblyLocalDateTime(startValue);
  if (!(start instanceof Date) || Number.isNaN(start.getTime())) {
    return { start: null, end: null };
  }

  const parsedEnd = endValue ? parsePossiblyLocalDateTime(endValue) : null;
  if (parsedEnd instanceof Date && !Number.isNaN(parsedEnd.getTime())) {
    return { start, end: parsedEnd };
  }

  return {
    start,
    end: new Date(start.getTime() + fallbackDurationMs)
  };
};

export const buildRRuleFromInputs = ({ frequency, interval, untilDate, count, byDay }) => {
  const parts = [`FREQ=${frequency}`];
  const parsedInterval = parseInt(interval, 10);

  if (!Number.isNaN(parsedInterval) && parsedInterval > 1) {
    parts.push(`INTERVAL=${parsedInterval}`);
  }

  if (Array.isArray(byDay) && byDay.length > 0) {
    parts.push(`BYDAY=${byDay.join(',')}`);
  }

  const parsedCount = parseInt(count, 10);
  if (!Number.isNaN(parsedCount) && parsedCount > 0) {
    parts.push(`COUNT=${parsedCount}`);
  } else if (untilDate) {
    const until = new Date(`${untilDate}T23:59:59`);
    if (!Number.isNaN(until.getTime())) {
      const compactUntil = until.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
      parts.push(`UNTIL=${compactUntil}`);
    }
  }

  return parts.join(';');
};

export const normalizeEventFormData = ({
  title,
  location,
  description,
  isAllDay,
  startDate,
  endDate,
  startDateTime,
  endDateTime,
  fallbackDurationMs = 60 * 60 * 1000,
  recurrence = null
}) => {
  if (!title) {
    return { valid: false, errorKey: 'eventTitleRequired' };
  }

  const eventData = {
    summary: title,
    location: location || undefined,
    description: description || undefined
  };

  if (isAllDay) {
    if (!startDate || !endDate) {
      return { valid: false, errorKey: 'startEndDatesRequired' };
    }

    const start = parseLocalDate(startDate);
    const end = parseLocalDate(endDate);

    if (end < start) {
      return { valid: false, errorKey: 'endDateBeforeStart' };
    }

    const exclusiveEndDate = new Date(end);
    exclusiveEndDate.setDate(exclusiveEndDate.getDate() + 1);
    const exclusiveEndDateStr = formatLocalDate(exclusiveEndDate);

    eventData.start = { date: startDate };
    eventData.end = { date: exclusiveEndDateStr };
  } else {
    if (!startDateTime) {
      return { valid: false, errorKey: 'startEndTimesRequired' };
    }

    const { start, end } = resolveTimedEventRange(startDateTime, endDateTime, fallbackDurationMs);

    if (end <= start) {
      return { valid: false, errorKey: 'endTimeBeforeStart' };
    }

    eventData.start = { dateTime: start.toISOString() };
    eventData.end = { dateTime: end.toISOString() };
  }

  if (recurrence?.enabled) {
    if (recurrence.frequency === 'WEEKLY' && (!Array.isArray(recurrence.byDay) || recurrence.byDay.length === 0)) {
      return { valid: false, errorKey: 'recurrenceSelectWeekday' };
    }

    eventData.rrule = buildRRuleFromInputs({
      frequency: recurrence.frequency,
      interval: recurrence.interval,
      untilDate: recurrence.untilDate,
      count: recurrence.count,
      byDay: recurrence.frequency === 'WEEKLY' ? recurrence.byDay : []
    });
  }

  return { valid: true, eventData };
};
