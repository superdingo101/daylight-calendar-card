function formatDateTimeLocal(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function renderRecurrenceControls({
  recurrenceData,
  recurrenceEndMode,
  recurrenceWeekdayOptions,
  showRecurringFields,
  showWeekdays,
  helpers
}) {
  const { escapeHtmlAttribute, t } = helpers;

  return `
          <div id="recurring-event-fields" style="display: ${showRecurringFields ? 'block' : 'none'};">
            <div class="form-row">
              <div class="form-group form-group-inline">
                <div class="form-inline-row">
                  <label class="form-label">${t('recurrenceFrequency')}</label>
                  <select class="form-select" id="event-recurrence-frequency">
                  <option value="DAILY" ${recurrenceData.frequency === 'DAILY' ? 'selected' : ''}>${t('recurrenceDaily')}</option>
                  <option value="WEEKLY" ${recurrenceData.frequency === 'WEEKLY' ? 'selected' : ''}>${t('recurrenceWeekly')}</option>
                  <option value="MONTHLY" ${recurrenceData.frequency === 'MONTHLY' ? 'selected' : ''}>${t('recurrenceMonthly')}</option>
                  <option value="YEARLY" ${recurrenceData.frequency === 'YEARLY' ? 'selected' : ''}>${t('recurrenceYearly')}</option>
                  </select>
                </div>
              </div>
              <div class="form-group form-group-inline">
                <div class="form-inline-row">
                  <label class="form-label">${t('recurrenceEvery')}</label>
                  <input type="number" class="form-input" id="event-recurrence-interval" min="1" value="${escapeHtmlAttribute(recurrenceData.interval || '1')}" />
                </div>
              </div>
            </div>
            <div class="form-group" id="event-recurrence-weekdays-group" style="display: ${showWeekdays ? 'block' : 'none'};">
              <label class="form-label">${t('recurrenceWeekdays')}</label>
              <div class="form-checkbox-group" style="flex-wrap: wrap; gap: 10px;">
                ${recurrenceWeekdayOptions.map(day => `
                  <label class="form-checkbox-label" style="display:flex;align-items:center;gap:6px;">
                    <input type="checkbox" class="form-checkbox event-recurrence-weekday" value="${day.key}" ${recurrenceData.byDay.includes(day.key) ? 'checked' : ''} />
                    <span>${day.label}</span>
                  </label>
                `).join('')}
              </div>
            </div>
            <div class="form-group">
              <label class="form-label recurrence-ends-label">${t('recurrenceEndsOn')}</label>
              <div class="recurrence-end-row">
                <label class="recurrence-end-option" for="event-recurrence-end-never">
                  <input type="radio" name="event-recurrence-end-mode" id="event-recurrence-end-never" value="never" ${recurrenceEndMode === 'never' ? 'checked' : ''} />
                  <span>${t('recurrenceNever')}</span>
                </label>
                <div></div>
              </div>
              <div class="recurrence-end-row">
                <label class="recurrence-end-option" for="event-recurrence-end-on">
                  <input type="radio" name="event-recurrence-end-mode" id="event-recurrence-end-on" value="on" ${recurrenceEndMode === 'on' ? 'checked' : ''} />
                  <span>${t('recurrenceOn')}</span>
                </label>
                <input type="date" class="form-input" id="event-recurrence-until" value="${escapeHtmlAttribute(recurrenceData.untilDate || '')}" ${recurrenceEndMode === 'on' ? '' : 'disabled'} />
              </div>
              <div class="recurrence-end-row">
                <label class="recurrence-end-option" for="event-recurrence-end-after">
                  <input type="radio" name="event-recurrence-end-mode" id="event-recurrence-end-after" value="after" ${recurrenceEndMode === 'after' ? 'checked' : ''} />
                  <span>${t('recurrenceAfter')}</span>
                </label>
                <div class="recurrence-after-input">
                  <input type="number" class="form-input" id="event-recurrence-count" min="1" placeholder="13" value="${escapeHtmlAttribute(recurrenceData.count || '')}" ${recurrenceEndMode === 'after' ? '' : 'disabled'} />
                  <span>${t('recurrenceOccurrences')}</span>
                </div>
              </div>
            </div>
          </div>`;
}

function renderEventFields({
  title,
  location,
  description,
  startDate,
  startTime,
  endDate,
  endTime,
  isAllDay,
  isRecurring,
  recurrenceData,
  recurrenceEndMode,
  recurrenceWeekdayOptions,
  helpers
}) {
  const { escapeHtml, escapeHtmlAttribute, t } = helpers;

  return `
          <div class="form-group form-group-inline">
            <div class="form-inline-row">
              <label class="form-label">
                ${t('eventTitle')}<span class="form-required">*</span>
              </label>
              <input type="text" class="form-input" id="event-title" placeholder="${escapeHtmlAttribute(t('eventTitlePlaceholder'))}" value="${escapeHtmlAttribute(title || '')}" required />
            </div>
          </div>

          <div class="form-group form-group-inline">
            <div class="form-inline-row form-inline-row-top">
              <label class="form-label">${t('eventOptions')}</label>
              <div class="form-checkbox-row">
                <div class="form-group">
                  <div class="form-checkbox-group">
                    <input type="checkbox" class="form-checkbox" id="event-all-day" ${isAllDay ? 'checked' : ''} />
                    <label class="form-checkbox-label" for="event-all-day">${t('allDayEvent')}</label>
                  </div>
                </div>

                <div class="form-group">
                  <div class="form-checkbox-group">
                    <input type="checkbox" class="form-checkbox" id="event-recurring" ${isRecurring ? 'checked' : ''} />
                    <label class="form-checkbox-label" for="event-recurring">${t('recurring')}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

${renderRecurrenceControls({
    recurrenceData,
    recurrenceEndMode,
    recurrenceWeekdayOptions,
    showRecurringFields: isRecurring,
    showWeekdays: isRecurring && recurrenceData.frequency === 'WEEKLY',
    helpers
  })}

          <div id="timed-event-fields" style="display: ${isAllDay ? 'none' : 'block'};">
            <div class="form-group form-group-inline">
              <div class="form-inline-row">
                <label class="form-label">${t('start')}</label>
                <input type="datetime-local" class="form-input" id="event-start"
                       value="${formatDateTimeLocal(startTime)}" required />
              </div>
            </div>

            <div class="form-group form-group-inline">
              <div class="form-inline-row">
                <label class="form-label">${t('end')}</label>
                <input type="datetime-local" class="form-input" id="event-end"
                       value="${formatDateTimeLocal(endTime)}" />
              </div>
            </div>
          </div>

          <div id="all-day-event-fields" style="display: ${isAllDay ? 'block' : 'none'};">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">${t('startDate')}</label>
                <input type="date" class="form-input" id="event-start-date"
                       value="${formatDate(startDate)}" />
              </div>

              <div class="form-group">
                <label class="form-label">${t('endDate')}</label>
                <input type="date" class="form-input" id="event-end-date"
                       value="${formatDate(endDate)}" />
              </div>
            </div>
          </div>

          <div class="form-group form-group-inline">
            <div class="form-inline-row">
              <label class="form-label">${t('location')}</label>
              <input type="text" class="form-input" id="event-location" placeholder="${escapeHtmlAttribute(t('locationPlaceholder'))}" value="${escapeHtmlAttribute(location || '')}" />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">${t('description')}</label>
            <textarea class="form-textarea" id="event-description" placeholder="${escapeHtmlAttribute(t('descriptionPlaceholder'))}">${escapeHtml(description || '')}</textarea>
          </div>

          <div id="form-error" class="error-message" style="display: none;"></div>`;
}

export function renderCreateEventForm({
  writableCalendars,
  selectedCalendarIds,
  prefill,
  startDate,
  startTime,
  endDate,
  endTime,
  recurrenceData,
  isPrefilledRecurring,
  isPrefilledAllDay,
  recurrenceEndMode,
  recurrenceWeekdayOptions,
  helpers
}) {
  const { escapeHtml, getCalendarName, t } = helpers;

  return `
      <div class="modal-header">
        <h3 class="modal-title">${t('createEvent')}</h3>
        <button class="modal-close" id="close-modal">×</button>
      </div>
      <div class="modal-body">
        <form id="create-event-form">
          <div class="form-group form-group-inline">
            <div class="form-inline-row">
              <label class="form-label">
                ${t('calendars')}<span class="form-required">*</span>
              </label>
              <div class="form-checkbox-grid">
                ${writableCalendars.map((entityId, index) => `
                  <label class="form-checkbox-group" style="margin: 0;">
                    <input
                      type="checkbox"
                      class="form-checkbox create-event-calendar"
                      value="${entityId}"
                      ${(selectedCalendarIds.length > 0 ? selectedCalendarIds.includes(entityId) : index === 0) ? 'checked' : ''}
                    />
                    <span class="form-checkbox-label">${escapeHtml(getCalendarName(entityId))}</span>
                  </label>
                `).join('')}
              </div>
            </div>
          </div>

${renderEventFields({
    title: prefill?.summary || '',
    location: prefill?.location || '',
    description: prefill?.description || '',
    startDate,
    startTime,
    endDate,
    endTime,
    isAllDay: isPrefilledAllDay,
    isRecurring: isPrefilledRecurring,
    recurrenceData,
    recurrenceEndMode,
    recurrenceWeekdayOptions,
    helpers
  })}

          <div class="form-actions">
            <button type="button" class="btn btn-secondary" id="cancel-btn">${t('cancel')}</button>
            <button type="submit" class="btn btn-primary" id="submit-btn">${t('createEvent')}</button>
          </div>
        </form>
      </div>
    `;
}

export function renderEditEventForm({
  event,
  startDate,
  endDate,
  isAllDay,
  visibleCalendarOptions,
  selectedCombinedCalendarIds,
  recurrenceData,
  recurringSelectedByDefault,
  recurrenceEndMode,
  recurrenceWeekdayOptions,
  helpers
}) {
  const { escapeHtml, getCalendarName, t } = helpers;

  return `
      <div class="modal-header">
        <h3 class="modal-title">${t('editEvent')}</h3>
        <button class="modal-close" id="close-modal">×</button>
      </div>
      <div class="modal-body">
        <form id="edit-event-form">
          <div class="form-group">
            <label class="form-label">
              ${t('calendar')}<span class="form-required">*</span>
            </label>
            <select class="form-select" id="event-calendar" required ${selectedCombinedCalendarIds.length > 1 ? 'disabled' : ''}>
              ${visibleCalendarOptions.map((entityId) => `
                <option value="${entityId}" ${entityId === event.entityId ? 'selected' : ''}>
                  ${escapeHtml(getCalendarName(entityId))}
                </option>
              `).join('')}
            </select>
          </div>

${renderEventFields({
    title: event.summary || '',
    location: event.location || '',
    description: event.description || '',
    startDate,
    startTime: startDate,
    endDate,
    endTime: endDate,
    isAllDay,
    isRecurring: recurringSelectedByDefault,
    recurrenceData,
    recurrenceEndMode,
    recurrenceWeekdayOptions,
    helpers
  })}

          <div class="form-actions">
            <button type="button" class="btn btn-secondary" id="cancel-btn">${t('cancel')}</button>
            <button type="submit" class="btn btn-primary" id="submit-btn">${t('saveChanges')}</button>
          </div>
        </form>
      </div>
    `;
}
