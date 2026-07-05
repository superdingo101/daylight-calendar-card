export function renderDayBadge(badge, { escapeHtml, registerDayBadgeAction } = {}) {
  const style = [
    badge.background_color ? `--dcc-day-badge-background: ${badge.background_color};` : '',
    badge.color ? `--dcc-day-badge-color: ${badge.color};` : '',
    badge.size ? `--dcc-day-badge-size: ${badge.size};` : '',
    badge.font_size ? `--dcc-day-badge-font-size: ${badge.font_size};` : ''
  ].join(' ');
  const hasIcon = Boolean(badge.icon);
  const hasText = Boolean(badge.text);
  const content = [
    hasIcon ? `<ha-icon icon="${escapeHtml(badge.icon)}"></ha-icon>` : '',
    hasText ? `<span class="day-badge-text">${escapeHtml(badge.text)}</span>` : ''
  ].join('');
  const actionId = badge.tap_action && typeof registerDayBadgeAction === 'function'
    ? registerDayBadgeAction(badge.tap_action)
    : null;
  const classes = ['day-badge', actionId ? 'day-badge-action' : '', hasIcon ? 'has-icon' : '', hasText ? 'has-text' : ''].filter(Boolean).join(' ');
  if (actionId) {
    return `<button type="button" class="${classes}" style="${style}" data-day-badge-action-id="${escapeHtml(actionId)}">${content}</button>`;
  }
  return `<span class="${classes}" style="${style}">${content}</span>`;
}

export function renderDayBadges(date, dayEvents, { escapeHtml, getDayBadges, registerDayBadgeAction }) {
  const badges = getDayBadges(date, dayEvents);
  if (!badges.length) return '';

  const badgesHtml = badges.map((badge) => renderDayBadge(badge, { escapeHtml, registerDayBadgeAction })).join('');

  return `<div class="day-badges">${badgesHtml}</div>`;
}

export function getDayForecastClass(viewMode = 'week-compact') {
  return viewMode === 'week-standard'
    ? 'week-standard-day-forecast'
    : viewMode === 'month'
      ? 'month-day-forecast'
      : viewMode === 'agenda'
        ? 'agenda-day-forecast'
        : 'week-day-forecast';
}

export function renderWeatherIcon(icon, { escapeHtml }) {
  return `<span class="forecast-condition"><ha-icon icon="${escapeHtml(icon)}"></ha-icon></span>`;
}

export function renderForecastTemperatures(forecast, { escapeHtml }) {
  return `<span class="forecast-temperatures">
          <span class="forecast-temp-high">${escapeHtml(forecast.highTemp)}</span>
          ${forecast.lowTemp ? `<span class="forecast-temp-low">${escapeHtml(forecast.lowTemp)}</span>` : ''}
        </span>`;
}

export function renderDayForecast(date, viewMode = 'week-compact', { escapeHtml, getForecastForDate }) {
  const forecast = getForecastForDate(date);
  if (!forecast) return '';
  const forecastClass = getDayForecastClass(viewMode);

  return `
      <div class="${forecastClass}">
        ${renderWeatherIcon(forecast.conditionIcon, { escapeHtml })}
        ${renderForecastTemperatures(forecast, { escapeHtml })}
      </div>
    `;
}
