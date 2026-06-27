export function getRollingDaysForView(viewMode, config) {
  if (viewMode === 'week-compact' && config.rolling_days_week_compact !== null) {
    return config.rolling_days_week_compact;
  }

  if (viewMode === 'week-standard' && config.rolling_days_schedule !== null) {
    return config.rolling_days_schedule;
  }

  return null;
}

export function getWeekDays({ currentDate, weekStart, weekDays, rollingDays }) {
  if (rollingDays !== null) {
    const days = [];
    const startDate = new Date(currentDate);
    startDate.setHours(0, 0, 0, 0);

    for (let i = 0; i <= rollingDays; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      days.push(date);
    }
    return days;
  }

  const days = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(weekStart);
    date.setDate(weekStart.getDate() + i);
    if (weekDays.includes(date.getDay())) {
      days.push(date);
    }
  }
  return days;
}

export function getWeekVisibleDateRange(weekDays) {
  const startDate = new Date(weekDays[0]);
  startDate.setHours(0, 0, 0, 0);
  const endDate = new Date(weekDays[weekDays.length - 1]);
  endDate.setHours(23, 59, 59, 999);
  return { startDate, endDate };
}
