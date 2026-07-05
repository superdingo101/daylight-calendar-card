import {
  getMonthGridDates,
  getRollingMonthGridDates
} from '../views/month-view-model.js';

export function renderMonthDayHeaders({ weekdayNames, firstDayOfWeek, shouldShowWeekNumbers }) {
  const orderedDays = [
    ...weekdayNames.slice(firstDayOfWeek),
    ...weekdayNames.slice(0, firstDayOfWeek)
  ];

  const dayHeaders = orderedDays.map(day => `
      <div class="day-header">${day}</div>
    `).join('');

  if (!shouldShowWeekNumbers) {
    return dayHeaders;
  }

  return `<div class="month-week-number-header"></div>${dayHeaders}`;
}

function renderMonthGridDays({ currentDate, firstDayOfWeek, shouldShowWeekNumbers, helpers }) {
  let html = '';
  const dayEntries = getMonthGridDates(currentDate, firstDayOfWeek);
  const weekLayouts = [];

  dayEntries.forEach((dayEntry, dayIndex) => {
    if (shouldShowWeekNumbers && dayIndex % 7 === 0) {
      html += helpers.renderMonthWeekNumberCell(dayEntry.date);
    }
    const weekIndex = Math.floor(dayIndex / 7);
    if (!weekLayouts[weekIndex]) {
      weekLayouts[weekIndex] = helpers.getMonthSpanLayoutForWeek(dayEntries.slice(weekIndex * 7, weekIndex * 7 + 7).map((entry) => entry.date));
    }
    const weekLayout = weekLayouts[weekIndex];
    html += helpers.renderDay(dayEntry.day, dayEntry.date, dayEntry.isOtherMonth, weekLayout?.dayLanesByDateKey.get(helpers.getDateKey(dayEntry.date)) || []);
  });

  return html;
}

function renderRollingWeeks({ currentDate, firstDayOfWeek, rollingWeeks, shouldShowWeekNumbers, helpers }) {
  let html = '';
  const dayEntries = getRollingMonthGridDates(currentDate, firstDayOfWeek, rollingWeeks);
  const weekLayouts = [];

  dayEntries.forEach((dayEntry, dayIndex) => {
    if (shouldShowWeekNumbers && dayIndex % 7 === 0) {
      html += helpers.renderMonthWeekNumberCell(dayEntry.date);
    }

    const weekIndex = Math.floor(dayIndex / 7);
    if (!weekLayouts[weekIndex]) {
      weekLayouts[weekIndex] = helpers.getMonthSpanLayoutForWeek(dayEntries.slice(weekIndex * 7, weekIndex * 7 + 7).map((entry) => entry.date));
    }
    const weekLayout = weekLayouts[weekIndex];
    html += helpers.renderDay(dayEntry.day, dayEntry.date, dayEntry.isOtherMonth, weekLayout?.dayLanesByDateKey.get(helpers.getDateKey(dayEntry.date)) || []);
  });

  return html;
}

export function renderMonthDays({ currentDate, config, viewMode, shouldShowWeekNumbers, helpers }) {
  // If rolling_weeks is set, show current week + N additional weeks
  if (config.rolling_weeks !== null && viewMode === 'month') {
    return renderRollingWeeks({
      currentDate,
      firstDayOfWeek: config.firstDayOfWeek,
      rollingWeeks: config.rolling_weeks,
      shouldShowWeekNumbers,
      helpers
    });
  }

  return renderMonthGridDays({
    currentDate,
    firstDayOfWeek: config.firstDayOfWeek,
    shouldShowWeekNumbers,
    helpers
  });
}

export function renderMonthView({
  compactMaxHeight,
  config,
  currentDate,
  isCompactMonth,
  monthWeekRows,
  shouldShowHeaderBadges,
  shouldShowWeekNumbers,
  viewMode,
  weekdayNames,
  helpers
}) {
  const monthStyle = isCompactMonth ? helpers.getCompactMonthGridStyle(monthWeekRows, compactMaxHeight) : '';
  const monthClass = [
    'calendar-grid',
    isCompactMonth ? 'compact-month' : '',
    shouldShowWeekNumbers ? 'month-week-numbers' : ''
  ].filter(Boolean).join(' ');

  return `
        ${shouldShowHeaderBadges ? helpers.renderCalendarBadges() : ''}
        <div class="${monthClass}" style="${monthStyle}">
          ${renderMonthDayHeaders({
            weekdayNames,
            firstDayOfWeek: config.firstDayOfWeek,
            shouldShowWeekNumbers
          })}
          ${renderMonthDays({
            currentDate,
            config,
            viewMode,
            shouldShowWeekNumbers,
            helpers
          })}
        </div>
      `;
}
