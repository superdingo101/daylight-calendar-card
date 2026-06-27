export function getAgendaRollingDays(config) {
  if (config?.rolling_days_agenda !== null && config?.rolling_days_agenda !== undefined) {
    return config.rolling_days_agenda;
  }

  return null;
}

export function getAgendaPeriodDaySpan(config) {
  const rollingDays = getAgendaRollingDays(config);
  return rollingDays !== null ? rollingDays : 14;
}

export function createAgendaWindow(today, daySpan) {
  const startDate = new Date(today);
  startDate.setHours(0, 0, 0, 0);
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + daySpan);
  endDate.setHours(23, 59, 59, 999);
  const visibleStartDate = new Date(startDate);
  const visibleEndDate = new Date(endDate);
  visibleEndDate.setHours(23, 59, 59, 999);
  return { startDate, endDate, visibleStartDate, visibleEndDate };
}

export function getAgendaDays(startDate, endDate) {
  const days = [];
  const cursor = new Date(startDate);
  cursor.setHours(0, 0, 0, 0);
  const end = new Date(endDate);
  end.setHours(0, 0, 0, 0);

  while (cursor <= end) {
    days.push(new Date(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }

  return days;
}

export function getAgendaVisibleDateRange(startDate, endDate) {
  const visibleStartDate = new Date(startDate);
  visibleStartDate.setHours(0, 0, 0, 0);
  const visibleEndDate = new Date(endDate);
  visibleEndDate.setHours(23, 59, 59, 999);
  return { startDate: visibleStartDate, endDate: visibleEndDate };
}

export function isAgendaRangeWithinWindow(range, windowStartDate, windowEndDate) {
  if (!range?.startDate || !range?.endDate || !windowStartDate || !windowEndDate) {
    return false;
  }

  const rangeStart = new Date(range.startDate);
  rangeStart.setHours(0, 0, 0, 0);
  const rangeEnd = new Date(range.endDate);
  rangeEnd.setHours(23, 59, 59, 999);
  const windowStart = new Date(windowStartDate);
  windowStart.setHours(0, 0, 0, 0);
  const windowEnd = new Date(windowEndDate);
  windowEnd.setHours(23, 59, 59, 999);

  return rangeStart >= windowStart && rangeEnd <= windowEnd;
}

export function buildAgendaDayEntries(agendaDays, { getEventsForDay, isEventHiddenByStyle, sortEventsForDate, hideEmptyDays }) {
  return agendaDays
    .map((date) => ({
      date,
      matchingEvents: getEventsForDay(date, { includeHiddenStyledEvents: true }),
      events: null
    }))
    .map((entry) => ({
      ...entry,
      events: sortEventsForDate(entry.matchingEvents.filter((event) => !isEventHiddenByStyle(event)), entry.date)
    }))
    .filter((entry) => !hideEmptyDays || entry.events.length > 0);
}
