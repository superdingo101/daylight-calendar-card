export function renderCalendarBadges({ badgeItems, hideCalendarNames = false, helpers }) {
  if (badgeItems.length === 0) return '';

  return `
      <div class="calendar-badges-container">
        <div class="calendar-badges">
          ${badgeItems.map((badgeItem) => renderCalendarBadge({
            badgeItem,
            hideCalendarNames,
            inline: false,
            helpers
          })).join('')}
        </div>
      </div>
    `;
}

export function renderCalendarBadgesInline({ badgeItems, hideCalendarNames = false, helpers }) {
  if (badgeItems.length === 0) return '';

  return `
      <div class="calendar-badges-inline">
        ${badgeItems.map((badgeItem) => renderCalendarBadge({
          badgeItem,
          hideCalendarNames,
          inline: true,
          helpers
        })).join('')}
      </div>
    `;
}

function renderCalendarBadge({ badgeItem, hideCalendarNames, inline, helpers }) {
  const badgeBackground = badgeItem.isHidden ? '#f3f4f6' : helpers.lightenColor(badgeItem.color, 0.85);
  const badgeTextColor = badgeItem.isHidden ? '#9ca3af' : helpers.getContractColor(badgeBackground);
  const inlineClass = inline ? ' calendar-badge-inline' : '';
  const cursorStyle = inline ? '' : '\n                          cursor: pointer;';

  return `
            <div class="calendar-badge${inlineClass} ${badgeItem.isHidden ? 'calendar-badge-hidden' : ''} ${hideCalendarNames ? 'hide-calendar-name' : ''}"
                 data-entity="${badgeItem.entityId}"
                 style="background: ${badgeBackground};
                        border-color: ${badgeItem.isHidden ? '#d1d5db' : badgeItem.color};${cursorStyle}">
              ${renderCalendarBadgeIcon({
                entityId: badgeItem.entityId,
                name: badgeItem.name,
                color: badgeItem.color,
                isHidden: badgeItem.isHidden,
                iconOverride: badgeItem.icon,
                helpers
              })}
              ${hideCalendarNames ? '' : renderCalendarBadgeLabel({ badgeItem, badgeTextColor, helpers })}
            </div>
          `;
}

export function renderCalendarBadgeLabel({ badgeItem, badgeTextColor, helpers }) {
  const personStateLabel = helpers.formatPersonStateLabel(helpers.getCalendarBadgePersonState(badgeItem.entityId));
  return `
      <span class="calendar-badge-label" style="color: ${badgeTextColor}">
        <span class="calendar-badge-name">${helpers.escapeHtml(badgeItem.name)}</span>
        ${personStateLabel ? `<span class="calendar-badge-person-state">${helpers.escapeHtml(personStateLabel)}</span>` : ''}
      </span>
    `;
}

export function renderCalendarBadgeIcon({ entityId, name, color, isHidden, iconOverride = null, helpers }) {
  const configuredBadgeIcon = iconOverride || helpers.getCalendarBadgeIcon(entityId);
  const hasPersonEntity = !!helpers.getCalendarBadgePersonEntityId(entityId);
  const personPictureUrl = configuredBadgeIcon ? null : helpers.getPersonEntityPictureUrl(helpers.getCalendarBadgePersonState(entityId));
  const iconBackground = isHidden ? '#9ca3af' : helpers.normalizeSingleColor(color);
  const personIconClass = hasPersonEntity ? ' calendar-badge-person-icon' : '';

  if (configuredBadgeIcon && configuredBadgeIcon.startsWith('mdi:')) {
    return `<div class="calendar-badge-icon${personIconClass}" style="background: ${iconBackground}"><ha-icon icon="${helpers.escapeHtml(configuredBadgeIcon)}"></ha-icon></div>`;
  }

  if (configuredBadgeIcon || personPictureUrl) {
    const imageUrl = configuredBadgeIcon || personPictureUrl;
    const normalizedUrl = helpers.normalizeBackgroundImageUrl(imageUrl) || imageUrl;
    return `<div class="calendar-badge-icon calendar-badge-photo${personIconClass}" style="background: ${iconBackground}"><img src="${helpers.escapeHtml(normalizedUrl)}" alt="${helpers.escapeHtml(name)}" loading="lazy"></div>`;
  }

  const initial = name.charAt(0).toUpperCase();
  return `<div class="calendar-badge-icon${personIconClass}" style="background: ${iconBackground}">${helpers.escapeHtml(initial)}</div>`;
}
