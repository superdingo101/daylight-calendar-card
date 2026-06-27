export function renderWeekCompactView({
  config,
  weekDays,
  today,
  dayNames,
  headerHeight,
  helpers
}) {
  const headerHeightStyle = headerHeight ? `--week-compact-header-height: ${headerHeight}px;` : '';
  const containerStyle = `${headerHeightStyle}${helpers.getCompactContainerStyle()}`;

  return `
      ${!config.compact_header && !config.hide_calendars ? helpers.renderCalendarBadges() : ''}
      <div class="week-compact-container day-badge-layout-${config.day_badge_layout_week}" style="${containerStyle}">
        ${weekDays.map(date => {
          const isToday = date.toDateString() === today.toDateString();
          const dayEventsForMatching = helpers.getEventsForDay(date, { includeHiddenStyledEvents: true });
          const events = helpers.sortEventsForDate(dayEventsForMatching.filter((event) => !helpers.isEventHiddenByStyle(event)), date);
          const dayStyle = helpers.getDayStyleAttributes(date, dayEventsForMatching, isToday);
          const dayStyleAttr = dayStyle.style ? ` style="${dayStyle.style}"` : '';

          return `
            <div class="week-day-column ${isToday ? 'today' : ''} ${dayStyle.className}" data-date="${date.toISOString()}" data-click-target="day-header"${dayStyleAttr}>
              <div class="week-day-header">
                <div class="week-day-header-main">
                  <div class="week-day-name">${dayNames[date.getDay()]}</div>
                  <div class="week-day-meta-row">
                    <div class="week-day-date">${date.getDate()}</div>
                    ${helpers.renderDayBadges(date, dayEventsForMatching)}
                    ${helpers.renderDayForecast(date, 'week-compact')}
                  </div>
                </div>
              </div>
              <div class="week-day-events">
                ${events.map(event => {
                  return helpers.renderWeekCompactEvent(event, date);
                }).join('')}
                ${events.length === 0 ? `<div style="color: #9ca3af; font-size: 13px; text-align: center; margin-top: 20px;">${helpers.t('noEvents')}</div>` : ''}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
}
