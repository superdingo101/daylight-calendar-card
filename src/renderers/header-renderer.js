export function renderStandardHeader({
  canAddEvents,
  shouldShowControls,
  helpers
}) {
  return `
      <div class="header">
        <div class="header-left">
          ${helpers.renderDashboardNavButton()}
          ${helpers.renderHeaderTitle()}
        </div>
        ${shouldShowControls ? `
          <div class="header-controls">
            ${canAddEvents ? `<button class="add-event-button" id="add-event-btn"><span class="icon">+</span>${helpers.t('addEvent')}</button>` : ''}
            ${helpers.renderThemeToggle()}
            <div class="period-controls">
              ${helpers.renderPeriodNavigationButtons('previous')}
              <div class="month-year">${helpers.getPeriodLabel()}</div>
              ${helpers.renderPeriodNavigationButtons('next')}
              ${helpers.renderPeriodNavigationButtons('today')}
            </div>
            ${helpers.renderViewModeButtons()}
          </div>
        ` : ''}
      </div>
    `;
}

export function renderCompactHeader({
  canAddEvents,
  shouldShowCalendars,
  shouldShowControls,
  helpers
}) {
  return `
      <div class="header header-compact">
        <div class="compact-header-left">
          ${helpers.renderDashboardNavButton()}
          ${helpers.renderHeaderTitle()}
          ${shouldShowCalendars ? helpers.renderCalendarBadgesInline() : ''}
        </div>
        ${shouldShowControls ? `
          <div class="header-controls compact-header-controls">
            <div class="compact-period-controls">
              ${helpers.renderPeriodNavigationButtons('previous')}
              <div class="month-year">${helpers.getPeriodLabel()}</div>
              ${helpers.renderPeriodNavigationButtons('next')}
              ${helpers.renderPeriodNavigationButtons('today')}
            </div>
            ${canAddEvents ? `<button class="compact-add-event-button" id="add-event-btn" aria-label="${helpers.t('addEvent')}" title="${helpers.t('addEvent')}">+</button>` : ''}
            ${helpers.renderThemeToggle()}
            ${helpers.renderViewModeButtons()}
          </div>
        ` : ''}
      </div>
    `;
}

export function renderHeaderTitle({
  title,
  headerTime,
  headerWeather,
  helpers
}) {
  return `
      <div class="header-title-wrap">
        <h2 class="header-title">${helpers.escapeHtml(title || '')}</h2>
        ${headerTime ? `<span class="header-time">${helpers.escapeHtml(headerTime)}</span>` : ''}
        ${headerWeather ? `<span class="header-weather"><ha-icon icon="${helpers.escapeHtml(headerWeather.conditionIcon)}"></ha-icon>${helpers.escapeHtml(headerWeather.temperature)}</span>` : ''}
      </div>
    `;
}

export function renderDashboardNavButton({ shouldShow, helpers }) {
  if (!shouldShow) return '';
  return `<button class="dashboard-nav-button" id="header-dashboard-btn" aria-label="${helpers.t('openDashboard')}" title="${helpers.t('openDashboard')}">⌂</button>`;
}

export function renderPeriodNavigationButtons({
  buttonType,
  hideNavigationButtons,
  shouldDisablePreviousNavigation,
  helpers
}) {
  if (hideNavigationButtons) return '';

  if (buttonType === 'previous') {
    return `<button class="nav-button" id="prev-period" ${shouldDisablePreviousNavigation ? 'disabled' : ''}>‹</button>`;
  }

  if (buttonType === 'next') {
    return '<button class="nav-button" id="next-period">›</button>';
  }

  if (buttonType === 'today') {
    return `<button class="today-button" id="today">${helpers.t('today')}</button>`;
  }

  return '';
}

export function renderViewModeButtons({ hideViewSelector, viewMode, helpers }) {
  if (hideViewSelector) return '';

  return `
      <div class="view-mode-buttons">
        <select class="view-mode-select" id="view-mode-select" aria-label="Select calendar view">
          <option value="month" ${viewMode === 'month' ? 'selected' : ''}>${helpers.t('month')}</option>
          <option value="week-compact" ${viewMode === 'week-compact' ? 'selected' : ''}>${helpers.t('week')}</option>
          <option value="week-standard" ${viewMode === 'week-standard' ? 'selected' : ''}>${helpers.t('schedule')}</option>
          <option value="agenda" ${viewMode === 'agenda' ? 'selected' : ''}>${helpers.t('agenda')}</option>
        </select>
      </div>
    `;
}

export function renderThemeToggle({ hideDarkModeToggle, isDarkMode }) {
  if (hideDarkModeToggle) return '';
  return `<button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode" title="Toggle dark mode">${isDarkMode ? '☀︎' : '☾'}</button>`;
}
