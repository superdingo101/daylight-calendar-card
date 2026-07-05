export function renderEventDetailsModal({
  event,
  startDate,
  endDate,
  isAllDay,
  calendarName,
  visibleBadges,
  capabilities,
  hasUID,
  canEdit,
  canDelete,
  canForward,
  canModify,
  customColor = null,
  locationLinks = false,
  locationActionsExpanded = false,
  locationMapUrl = '',
  helpers
}) {
  const {
    escapeHtml,
    formatDate,
    formatEventTime,
    formatDuration,
    renderEventDescription,
    t
  } = helpers;

  const hasLocation = typeof event.location === 'string' ? event.location.trim() !== '' : !!event.location;
  const locationHtml = hasLocation && locationLinks
    ? `
          <div class="modal-row modal-location-row">
            <div class="modal-label">📍 ${t('location')}</div>
            <div class="modal-value">
              <button type="button" class="modal-location-link" id="event-location-toggle" aria-expanded="${locationActionsExpanded ? 'true' : 'false'}">${escapeHtml(event.location)}</button>
            </div>
          </div>
          ${locationActionsExpanded ? `
            <div class="modal-location-actions" id="event-location-actions">
              <button type="button" class="btn btn-secondary modal-location-action" id="open-location-map-btn" data-map-url="${escapeHtml(locationMapUrl)}">${t('openInGoogleMaps')}</button>
              <button type="button" class="btn btn-secondary modal-location-action" id="copy-location-address-btn">${t('copyAddress')}</button>
            </div>
          ` : ''}
        `
    : (hasLocation ? `
          <div class="modal-row">
            <div class="modal-label">📍 ${t('location')}</div>
            <div class="modal-value">${escapeHtml(event.location)}</div>
          </div>
        ` : '');

  const combinedBadgeHtml = event.isCombinedCalendarEvent
    ? `<div style="display:flex; gap:6px; flex-wrap:wrap; margin-top:8px;">${visibleBadges.map(calendar => `<span class="modal-calendar-badge" style="background: ${calendar.color}; color: white; display: inline-block; padding: 4px 10px; border-radius: 12px; font-size: 12px;">${escapeHtml(calendar.name)}</span>`).join('')}</div>`
    : `<div class="modal-calendar-badge" style="background: ${event.color}; color: white; display: inline-block; padding: 4px 12px; border-radius: 12px; font-size: 12px; margin-top: 8px;">${escapeHtml(calendarName)}</div>`;

  return `
      <div class="modal-header">
        <div>
          <h3 class="modal-title">${escapeHtml(event.summary || t('untitledEvent'))}</h3>
          ${combinedBadgeHtml}
        </div>
        <button class="modal-close" id="close-modal">×</button>
      </div>
      <div class="modal-body">
        <div class="modal-row">
          <div class="modal-label">📅 ${t('start')}</div>
          <div class="modal-value">
            ${formatDate(startDate)}${!isAllDay ? ` ${t('at')} ${formatEventTime(startDate)}` : ` (${t('allDay')})`}
          </div>
        </div>
        <div class="modal-row">
          <div class="modal-label">🏁 ${t('end')}</div>
          <div class="modal-value">
            ${formatDate(endDate)}${!isAllDay ? ` ${t('at')} ${formatEventTime(endDate)}` : ` (${t('allDay')})`}
          </div>
        </div>
        ${!isAllDay ? `
          <div class="modal-row">
            <div class="modal-label">⏱️ ${t('duration')}</div>
            <div class="modal-value">${formatDuration(startDate, endDate)}</div>
          </div>
        ` : ''}
        ${locationHtml}
        ${event.description ? `
          <div class="modal-row modal-row-description">
            <div class="modal-label">📝 ${t('description')}</div>
            <div class="modal-value event-description-content">${renderEventDescription(event.description)}</div>
          </div>
        ` : ''}
        ${event.attendees && event.attendees.length > 0 ? `
          <div class="modal-row">
            <div class="modal-label">👥 ${t('attendees')}</div>
            <div class="modal-value">
              ${event.attendees.map(a => escapeHtml(a.email || a.displayName || t('unknownAttendee'))).join(', ')}
            </div>
          </div>
        ` : ''}
        ${event.rrule ? `
          <div class="modal-row">
            <div class="modal-label">🔁 ${t('recurrence')}</div>
            <div class="modal-value">${t('recurringEvent')}</div>
          </div>
        ` : ''}

        ${!canModify && !capabilities.isReadonly && capabilities.isGoogleCalendar ? `
          <div class="info-banner warning">
            <strong>${t('googleCalendarLimitationTitle')}</strong> ${t('googleCalendarLimitationBody')}
          </div>
        ` : ''}

        ${!canModify && !hasUID && !capabilities.isGoogleCalendar ? `
          <div class="info-banner warning">
            <strong>${t('cannotModifyTitle')}</strong> ${t('cannotModifyBody')}
          </div>
        ` : ''}

        <div class="modal-actions">
            <div class="modal-actions-left">
              ${canDelete ? `<button class="btn btn-danger" id="delete-event-btn">${t('delete')}</button>` : ''}
            </div>
            <div class="modal-actions-right">
              <button class="btn btn-secondary" id="custom-color-btn">${t('customColor')}${customColor ? ` <span style="display:inline-block;width:0.8em;height:0.8em;border-radius:50%;background:${customColor};vertical-align:-0.1em;"></span>` : ''}</button>
              ${canForward ? `<button class="btn btn-secondary" id="forward-event-btn">${t('forwardEvent')}</button>` : ''}
              ${canEdit ? `<button class="btn btn-primary" id="edit-event-btn">${t('editEvent')}</button>` : ''}
            </div>
          </div>
      </div>
    `;
}
