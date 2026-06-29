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
  monthSpanLanes,
  visibleEvents,
  helpers
}) {
  const spannedEventKeys = new Set((monthSpanLanes || []).filter(Boolean).map((lane) => helpers.getEventKey(lane.event)));
  const spanHtml = (monthSpanLanes || []).map((lane) => helpers.renderMonthSpanLane(lane)).join('');
  const dayEventHtml = dayEvents
    .filter((event) => !spannedEventKeys.has(helpers.getEventKey(event)))
    .slice(0, Math.max(0, visibleEvents - (monthSpanLanes || []).length))
    .map(event => helpers.renderMonthDayEvent(event, date))
    .join('');

  return `
        ${spanHtml}${dayEventHtml}
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
  monthSpanLanes,
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
        monthSpanLanes,
        visibleEvents,
        helpers
      })}
      </div>
    `;
}
