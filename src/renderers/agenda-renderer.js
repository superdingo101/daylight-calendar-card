import { buildAgendaDayEntries } from '../views/agenda-view-model.js';

export function renderAgendaView({
  agendaDays,
  agendaEventMinHeight,
  compactMaxHeight,
  config,
  today,
  dayNames,
  monthFormatter,
  helpers
}) {
  const containerStyle = helpers.getCompactContainerStyle(compactMaxHeight);
  const agendaRows = [];
  const shouldHideEmptyDays = !!config.hide_empty_days;
  const agendaDayEntries = buildAgendaDayEntries(agendaDays, {
    getEventsForDay: helpers.getEventsForDay,
    isEventHiddenByStyle: helpers.isEventHiddenByStyle,
    sortEventsForDate: helpers.sortEventsForDate,
    hideEmptyDays: shouldHideEmptyDays
  });

  agendaDayEntries.forEach((entry, index) => {
    const { date, events } = entry;
    if (index > 0) {
      const previousDate = agendaDayEntries[index - 1].date;
      const monthChanged = previousDate.getMonth() !== date.getMonth() || previousDate.getFullYear() !== date.getFullYear();
      if (monthChanged) {
        agendaRows.push(`<div class="agenda-month-banner">${helpers.escapeHtml(monthFormatter.format(date))}</div>`);
      }
    }

    const isToday = date.toDateString() === today.toDateString();
    const dayStyle = helpers.getDayStyleAttributes(date, entry.matchingEvents, isToday);
    const dayStyleAttr = dayStyle.style ? ` style="${dayStyle.style}"` : '';
    agendaRows.push(`
        <div class="agenda-day-row ${isToday ? 'today' : ''} ${dayStyle.className}" data-date="${date.toISOString()}"${dayStyleAttr}>
          <div class="agenda-day-label">
            <div class="agenda-day-weekday">${dayNames[date.getDay()]}</div>
            <div class="agenda-day-date">${date.getDate()}</div>
            ${helpers.renderDayForecast(date, 'agenda')}
          </div>
          <div class="agenda-day-events">
            ${events.map(event => {
              const daySegment = helpers.getEventDaySegment(event, date);
              if (!daySegment) return '';
              const { segmentStart, segmentEnd, isAllDaySegment } = daySegment;
              const timeLabel = isAllDaySegment
                ? helpers.t('allDay')
                : helpers.formatEventTimeRange(segmentStart, segmentEnd);
              const eventStyle = helpers.getEventStyle(event);
              const eventAgendaMinHeight = helpers.shouldShowCombinedCornerBubbles(event)
                ? `calc(${agendaEventMinHeight} + 16px)`
                : agendaEventMinHeight;

              return `
                <div class="agenda-event" style="${eventStyle} --agenda-event-min-height: ${eventAgendaMinHeight}; --event-bubble-font-size: ${helpers.getEventBubbleFontSize(event)}; --event-time-font-size: ${helpers.getEventTimeFontSize(event)}; --event-location-font-size: ${helpers.getEventLocationFontSize(event)}; --event-bubble-text-color: ${helpers.getEventBubbleFontColor(event)};" data-event='${JSON.stringify(event).replace(/'/g, "&#39;")}'>
                  <div class="agenda-event-title">${helpers.renderEventTitleWithPrefix(event, helpers.getEventDisplayTitle(event))}</div>
                  ${helpers.shouldShowEventTime(event) ? `<div class="agenda-event-time">${timeLabel}</div>` : ''}
                  ${helpers.shouldShowEventLocation(event) ? `<div class="agenda-event-location">📍 ${helpers.escapeHtml(helpers.getDisplayLocation(event.location, event))}</div>` : ''}
                  ${helpers.renderEventIcon(event)}
                  ${helpers.renderEventStyleCornerIcon(event)}
                  ${helpers.renderCombinedCornerBubbles(event)}
                </div>
              `;
            }).join('')}
            ${events.length === 0 ? `<div class="agenda-empty-day">${helpers.t('noEvents')}</div>` : ''}
          </div>
        </div>
      `);
  });

  return `
      ${!config.compact_header && !config.hide_calendars ? helpers.renderCalendarBadges() : ''}
      <div class="agenda-container" id="agenda-container" style="${containerStyle}">
        ${agendaRows.join('')}
      </div>
    `;
}
