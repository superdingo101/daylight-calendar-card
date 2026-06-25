export function renderDayCellHeader({
  date,
  dayEventsForMatching,
  dayNum,
  helpers
}) {
  return `
        <div class="day-header-row">
          <div class="day-number">${dayNum}</div>
          ${helpers.renderDayBadges(date, dayEventsForMatching)}
          ${helpers.renderDayForecast(date, 'month')}
        </div>`;
}

export function renderDayCellEvents({
  date,
  dayEvents,
  hiddenEventCount,
  visibleEvents,
  helpers
}) {
  return `
        ${dayEvents.slice(0, visibleEvents).map(event => helpers.renderMonthDayEvent(event, date)).join('')}
        ${hiddenEventCount > 0 ? `<div class="more-events" data-click-target="more-events">${helpers.t('moreEvents', { count: hiddenEventCount })}</div>` : ''}`;
}

export function renderDayCell({
  date,
  dayEvents,
  dayEventsForMatching,
  dayNum,
  dayStyle,
  hiddenEventCount,
  isOtherMonth,
  isToday,
  visibleEvents,
  helpers
}) {
  let classes = 'day-cell';
  if (isOtherMonth) classes += ' other-month';
  if (isToday) classes += ' today';
  classes += dayStyle.className ? ` ${dayStyle.className}` : '';
  const dayStyleAttr = dayStyle.style ? ` style="${dayStyle.style}"` : '';

  return `
      <div class="${classes}" data-date="${date.toISOString()}"${dayStyleAttr}>${renderDayCellHeader({
        date,
        dayEventsForMatching,
        dayNum,
        helpers
      })}${renderDayCellEvents({
        date,
        dayEvents,
        hiddenEventCount,
        visibleEvents,
        helpers
      })}
      </div>
    `;
}
