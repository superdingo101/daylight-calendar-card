// Markup for the event_search button and modal. The card owns fetching, filtering and wiring.

const SEARCH_ICON = '<svg class="search-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false"><path fill="currentColor" d="M9.5 3a6.5 6.5 0 0 1 5.16 10.45l5.2 5.2-1.42 1.41-5.2-5.2A6.5 6.5 0 1 1 9.5 3m0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9"/></svg>';

export function renderSearchButton({ compact = false, helpers }) {
  const label = helpers.escapeHtmlAttribute(helpers.t('searchEvents'));
  return compact
    ? `<button class="compact-add-event-button search-events-button" id="search-events-btn" aria-label="${label}" title="${label}">${SEARCH_ICON}</button>`
    : `<button class="add-event-button search-events-button" id="search-events-btn" aria-label="${label}">${SEARCH_ICON}${helpers.t('searchEvents')}</button>`;
}

export function renderEventSearchModal({ query = '', helpers }) {
  const { escapeHtmlAttribute, t } = helpers;
  return `
      <div class="modal-header">
        <h3 class="modal-title">${t('searchEvents')}</h3>
        <button class="modal-close" id="close-modal">×</button>
      </div>
      <div class="modal-body">
        <input type="search" class="form-input event-search-input" id="event-search-input" autocomplete="off"
               placeholder="${escapeHtmlAttribute(t('searchPlaceholder'))}" aria-label="${escapeHtmlAttribute(t('searchEvents'))}"
               value="${escapeHtmlAttribute(query)}" />
        <div class="event-search-status" id="event-search-status"></div>
        <div class="event-search-results" id="event-search-results"></div>
      </div>
    `;
}

export function renderEventSearchResults({ upcoming = [], past = [], renderResult, helpers }) {
  const { t } = helpers;
  const section = (title, results) => (results.length === 0 ? '' : `
        <div class="event-search-section">
          <div class="event-search-section-title">${title}</div>
          ${results.map((result, index) => renderResult(result, index)).join('')}
        </div>`);
  return `${section(t('searchUpcoming'), upcoming)}${section(t('searchPast'), past)}`;
}
