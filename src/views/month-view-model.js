export function getMonthGridDates(currentDate, firstDayOfWeek) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();
  const startDay = (firstDay - firstDayOfWeek + 7) % 7;
  const days = [];

  for (let i = startDay - 1; i >= 0; i--) {
    const day = daysInPrevMonth - i;
    days.push({ day, date: new Date(year, month - 1, day), isOtherMonth: true });
  }

  for (let day = 1; day <= daysInMonth; day++) {
    days.push({ day, date: new Date(year, month, day), isOtherMonth: false });
  }

  const totalCells = startDay + daysInMonth;
  const remainingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
  for (let day = 1; day <= remainingCells; day++) {
    days.push({ day, date: new Date(year, month + 1, day), isOtherMonth: true });
  }

  return days;
}

export function getRollingMonthGridDates(currentDate, firstDayOfWeek, rollingWeeks) {
  const anchorDate = new Date(currentDate);
  anchorDate.setHours(0, 0, 0, 0);

  const currentDay = anchorDate.getDay();
  const diff = (currentDay - firstDayOfWeek + 7) % 7;
  const weekStart = new Date(anchorDate);
  weekStart.setDate(anchorDate.getDate() - diff);

  const totalWeeks = rollingWeeks + 1;
  const totalDays = totalWeeks * 7;
  const currentMonthStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const days = [];

  for (let i = 0; i < totalDays; i++) {
    const date = new Date(weekStart);
    date.setDate(weekStart.getDate() + i);
    days.push({ day: date.getDate(), date, isOtherMonth: date < currentMonthStart });
  }

  return days;
}

export function getMonthVisibleDateRange(currentDate, firstDayOfWeek, rollingWeeks = null) {
  if (rollingWeeks !== null) {
    const days = getRollingMonthGridDates(currentDate, firstDayOfWeek, rollingWeeks);
    const startDate = new Date(days[0].date);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(days[days.length - 1].date);
    endDate.setHours(23, 59, 59, 999);
    return { startDate, endDate };
  }

  const days = getMonthGridDates(currentDate, firstDayOfWeek);
  const startDate = new Date(days[0].date);
  startDate.setHours(0, 0, 0, 0);
  const endDate = new Date(days[days.length - 1].date);
  endDate.setHours(23, 59, 59, 999);
  return { startDate, endDate };
}
