export function renderWeekStandardView({
  allDayHeight,
  allDayLayout,
  config,
  containerStyle,
  dayNames,
  dayTimeSlotsStyle,
  endHour,
  hasAllDayEvents,
  hourHeight,
  hours,
  showCurrentTimeBar,
  startHour,
  today,
  weekDays,
  helpers
}) {
  return `
      ${!config.compact_header && !config.hide_calendars ? helpers.renderCalendarBadges() : ''}
      <div class="week-standard-container ${config.compact_width ? 'compact-width' : ''} day-badge-layout-${config.day_badge_layout_week}" style="${containerStyle}">
        <!-- Time column -->
        <div class="time-column">
          <div class="time-column-header-spacer"></div>
          ${hasAllDayEvents ? `<div class="time-column-allday-spacer" style="height: ${allDayHeight}px;"></div>` : ''}
          <div class="time-column-extra-spacer"></div>
          ${hours.map(hour => `
            <div class="time-slot" style="height: ${hourHeight}px;">
              <span class="time-slot-label">${helpers.formatScheduleHour(hour)}</span>
            </div>
          `).join('')}
        </div>

        <!-- Day columns -->
        ${weekDays.map(date => {
          const isToday = date.toDateString() === today.toDateString();
          const dayEventsForMatching = helpers.getEventsForDay(date, { includeHiddenStyledEvents: true });
          const dayEvents = helpers.sortEventsForDate(dayEventsForMatching.filter((event) => !helpers.isEventHiddenByStyle(event)), date);
          const dateKey = helpers.getDateKey(date);
          const allDayLanes = allDayLayout.dayLanesByDateKey.get(dateKey) || [];
          const dayStyle = helpers.getDayStyleAttributes(date, dayEventsForMatching, isToday);
          const dayStyleAttr = dayStyle.style ? ` style="${dayStyle.style}"` : '';

          return `
            <div class="week-standard-day-column ${isToday ? 'today' : ''} ${dayStyle.className}" data-date="${date.toISOString()}"${dayStyleAttr}>
              <div class="week-standard-day-header" data-click-target="day-header">
                <div class="week-day-header-main">
                  <div class="week-standard-day-name">${dayNames[date.getDay()]}</div>
                  <div class="week-day-meta-row">
                    <div class="week-standard-day-date">${date.getDate()}</div>
                    ${helpers.renderDayBadges(date, dayEventsForMatching)}
                    ${helpers.renderDayForecast(date, 'week-standard')}
                  </div>
                </div>
              </div>
              ${hasAllDayEvents ? helpers.renderAllDayEventsForDay(allDayLanes, allDayHeight) : ''}
              <div class="day-time-slots" style="${dayTimeSlotsStyle}">
                ${hours.map(hour => `
                  <div class="day-time-slot" style="height: ${hourHeight}px;" data-hour="${hour}"></div>
                `).join('')}
                ${showCurrentTimeBar && isToday ? helpers.renderCurrentTimeLine(startHour, hourHeight) : ''}
                ${helpers.renderTimedEventsForDay(dayEvents, date, startHour, endHour, hourHeight)}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
}
