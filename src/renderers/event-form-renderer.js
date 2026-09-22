function formatDateTimeLocal(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

function padTwoDigits(value) {
  return String(value).padStart(2, '0');
}

function renderSteppedDateTimeControl({ id, value, step, required = false, field, hour12 = false, dayPeriodLabels = {}, helpers }) {
  const { escapeHtmlAttribute, t } = helpers;
  // Duck-type instead of instanceof so Date objects from another realm (or a patched global Date) still render.
  const date = value && typeof value.getTime === 'function' && !Number.isNaN(value.getTime()) ? value : null;
  const hourValue = date ? date.getHours() : null;
  const minuteValue = date ? date.getMinutes() : null;
  const minuteOptions = [];
  for (let minute = 0; minute < 60; minute += step) minuteOptions.push(minute);
  // Keep an existing off-step time selectable so editing never silently moves an event.
  // The option is flagged so setupSteppedDateTimeInputs can drop it once it is no longer selected.
  const offStepMinute = minuteValue !== null && !minuteOptions.includes(minuteValue) ? minuteValue : null;
  if (offStepMinute !== null) {
    minuteOptions.push(offStepMinute);
    minuteOptions.sort((a, b) => a - b);
  }
  // The visible hour list follows the card's 12/24-hour clock; the hidden input always stores 24-hour time.
  const hourOptions = hour12
    ? Array.from({ length: 12 }, (_, index) => index + 1)
    : Array.from({ length: 24 }, (_, hour) => hour);
  const selectedHour = hourValue === null ? null : (hour12 ? (hourValue % 12 || 12) : hourValue);
  const renderOptions = (values, selected, { format = padTwoDigits, offStepValue = null } = {}) => values
    .map((optionValue) => `<option value="${padTwoDigits(optionValue)}" ${optionValue === selected ? 'selected' : ''}${optionValue === offStepValue ? ' data-off-step="true"' : ''}>${format(optionValue)}</option>`)
    .join('');
  const periodLabel = (period, fallback) => escapeHtmlAttribute(dayPeriodLabels?.[period] || fallback);
  const periodSelect = hour12
    ? `<select class="form-select form-stepped-period" data-stepped-part="period" aria-label="${escapeHtmlAttribute(t(`${field}Period`))}">
                      <option value="AM" ${hourValue !== null && hourValue < 12 ? 'selected' : ''}>${periodLabel('am', 'AM')}</option>
                      <option value="PM" ${hourValue !== null && hourValue >= 12 ? 'selected' : ''}>${periodLabel('pm', 'PM')}</option>
                    </select>`
    : '';

  return `
                <div class="form-stepped-datetime" data-stepped-datetime="${id}" data-hour-cycle="${hour12 ? '12' : '24'}">
                  <input type="date" class="form-input form-stepped-date" data-stepped-part="date"
                         value="${date ? formatDate(date) : ''}" ${required ? 'required' : ''} aria-label="${escapeHtmlAttribute(t(`${field}Date`))}" />
                  <div class="form-stepped-time">
                    <select class="form-select form-stepped-hour" data-stepped-part="hour" aria-label="${escapeHtmlAttribute(t(`${field}Hour`))}">${renderOptions(hourOptions, selectedHour, { format: hour12 ? String : padTwoDigits })}</select>
                    <span class="form-stepped-separator" aria-hidden="true">:</span>
                    <select class="form-select form-stepped-minute" data-stepped-part="minute" aria-label="${escapeHtmlAttribute(t(`${field}Minute`))}">${renderOptions(minuteOptions, minuteValue, { offStepValue: offStepMinute })}</select>
                    ${periodSelect}
                  </div>
                  <input type="hidden" id="${id}" value="${date ? formatDateTimeLocal(date) : ''}" />
                </div>`;
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
  eventTimeStep = 1,
  eventTimeHour12 = false,
  eventTimeDayPeriods = {},
  helpers
}) {
  const { escapeHtml, escapeHtmlAttribute, t } = helpers;
  const useSteppedTime = Number.isInteger(eventTimeStep) && eventTimeStep > 1;

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
                ${useSteppedTime
    ? renderSteppedDateTimeControl({ id: 'event-start', value: startTime, step: eventTimeStep, required: true, field: 'start', hour12: eventTimeHour12, dayPeriodLabels: eventTimeDayPeriods, helpers })
    : `<input type="datetime-local" class="form-input" id="event-start"
                       value="${formatDateTimeLocal(startTime)}" required />`}
              </div>
            </div>

            <div class="form-group form-group-inline">
              <div class="form-inline-row">
                <label class="form-label">${t('end')}</label>
                ${useSteppedTime
    ? renderSteppedDateTimeControl({ id: 'event-end', value: endTime, step: eventTimeStep, field: 'end', hour12: eventTimeHour12, dayPeriodLabels: eventTimeDayPeriods, helpers })
    : `<input type="datetime-local" class="form-input" id="event-end"
                       value="${formatDateTimeLocal(endTime)}" />`}
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
  eventTimeStep = 1,
  eventTimeHour12 = false,
  eventTimeDayPeriods = {},
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
    eventTimeStep,
    eventTimeHour12,
    eventTimeDayPeriods,
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
  eventTimeStep = 1,
  eventTimeHour12 = false,
  eventTimeDayPeriods = {},
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
    eventTimeStep,
    eventTimeHour12,
    eventTimeDayPeriods,
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
