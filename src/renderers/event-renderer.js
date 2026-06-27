export function renderEventIcon(event, {
  getEventStyleOverrides,
  eventCalendarFriendlyName = false,
  hideEventCalendarBubble = false,
  getModalCalendarBadgesForEvent,
  getCalendarName,
  escapeHtml
}) {
  const styleOverrides = getEventStyleOverrides(event);
  const hideCalendarBubble = styleOverrides?.hide_event_calendar_bubble ?? hideEventCalendarBubble;

  if (eventCalendarFriendlyName) {
    const visibleBadges = getModalCalendarBadgesForEvent(event);
    if (visibleBadges.length === 0) {
      return '';
    }

    const namesHtml = visibleBadges
      .map(calendar => `<div class="week-standard-event-calendar-name">${escapeHtml(getCalendarName(calendar.entityId))}</div>`)
      .join('');

    return `<div class="week-standard-event-icons">${namesHtml}</div>`;
  }

  if (hideCalendarBubble) {
    return '';
  }

  const visibleBadges = getModalCalendarBadgesForEvent(event);
  if (visibleBadges.length === 0) {
    return '';
  }

  const badgesHtml = visibleBadges.map(calendar => {
    const name = getCalendarName(calendar.entityId);
    const initial = name.charAt(0).toUpperCase();
    return `<div class="week-standard-event-icon" style="background: ${calendar.color}; color: white;">${initial}</div>`;
  }).join('');

  return `<div class="week-standard-event-icons">${badgesHtml}</div>`;
}

export function renderCombinedCornerBubbles(event, {
  shouldShowCombinedCornerBubbles,
  getModalCalendarBadgesForEvent,
  getCalendarName,
  escapeHtml
}) {
  if (!shouldShowCombinedCornerBubbles(event)) return '';

  const visibleBadges = getModalCalendarBadgesForEvent(event);
  if (visibleBadges.length <= 1) return '';

  const bubblesHtml = visibleBadges.map((calendar) => {
    const name = getCalendarName(calendar.entityId);
    const initial = name.charAt(0).toUpperCase();
    return `<span class="combined-corner-bubble" style="background: ${calendar.color}; color: white;" title="${escapeHtml(name)}">${escapeHtml(initial)}</span>`;
  }).join('');

  return `<div class="combined-corner-bubbles">${bubblesHtml}</div>`;
}

export function renderEventStyleIcon(iconConfig, { position = 'before_title', escapeHtml } = {}) {
  if (!iconConfig || iconConfig.position !== position) return '';

  const styleParts = [];
  if (iconConfig.color) styleParts.push(`color: ${iconConfig.color};`);
  if (iconConfig.size) styleParts.push(`--event-style-icon-size: ${iconConfig.size};`);
  const styleAttr = styleParts.length ? ` style="${styleParts.join(' ')}"` : '';
  const className = position === 'corner' ? 'event-style-icon event-style-icon-corner' : 'event-style-icon event-style-icon-before-title';
  return `<ha-icon class="${className}" icon="${escapeHtml(iconConfig.icon)}"${styleAttr}></ha-icon>`;
}

export function renderEventStyleCornerIcon(event, { getEventStyleIconConfig, escapeHtml }) {
  return renderEventStyleIcon(getEventStyleIconConfig(event), { position: 'corner', escapeHtml });
}

export function renderEventTitleWithPrefix(event, title, {
  t,
  escapeHtml,
  getEventStyleOverrides,
  getEventStyleIconConfig,
  normalizeEventTitlePrefixMode,
  configuredEventTitlePrefix,
  getModalCalendarBadgesForEvent,
  getCalendarName,
  normalizeSingleColor,
  getCalendarBadgeIcon,
  normalizeBackgroundImageUrl
}) {
  const titleText = escapeHtml(title || t('untitledEvent'));
  const styleOverrides = getEventStyleOverrides(event);
  const titleIcon = renderEventStyleIcon(getEventStyleIconConfig(event), { position: 'before_title', escapeHtml });
  const titleHtml = titleIcon ? `${titleIcon}<span>${titleText}</span>` : titleText;
  const prefixMode = normalizeEventTitlePrefixMode(styleOverrides?.event_title_prefix ?? configuredEventTitlePrefix);
  const visibleBadges = getModalCalendarBadgesForEvent(event);
  if (prefixMode === 'none' || visibleBadges.length === 0) {
    return titleIcon ? `<span class="event-title-with-prefix">${titleHtml}</span>` : titleText;
  }

  if (prefixMode === 'friendly_name') {
    const calendarNames = visibleBadges
      .map((calendar) => getCalendarName(calendar.entityId))
      .filter(Boolean);
    const uniqueCalendarNames = Array.from(new Set(calendarNames));
    const calendarNameLabel = escapeHtml(uniqueCalendarNames.join(', '));
    return `<span class="event-title-with-prefix"><span class="event-title-prefix-friendly-name">${calendarNameLabel}:</span>${titleHtml}</span>`;
  }

  const badgesHtml = visibleBadges.map((calendar) => {
    const iconColor = normalizeSingleColor(calendar.color) || '#6b7280';
    const configuredBadgeIcon = getCalendarBadgeIcon(calendar.entityId);
    let badgeIconHtml = '';
    if (configuredBadgeIcon && configuredBadgeIcon.startsWith('mdi:')) {
      badgeIconHtml = `<ha-icon icon="${escapeHtml(configuredBadgeIcon)}"></ha-icon>`;
    } else if (configuredBadgeIcon) {
      const normalizedUrl = normalizeBackgroundImageUrl(configuredBadgeIcon) || configuredBadgeIcon;
      badgeIconHtml = `<img src="${escapeHtml(normalizedUrl)}" alt="" loading="lazy">`;
    } else {
      const initial = escapeHtml(getCalendarName(calendar.entityId).charAt(0).toUpperCase());
      badgeIconHtml = `<span>${initial}</span>`;
    }
    return `<span class="event-title-prefix-badge" style="background: ${iconColor}; color: white;">${badgeIconHtml}</span>`;
  }).join('');

  return `<span class="event-title-with-prefix"><span class="event-title-prefix-badges">${badgesHtml}</span>${titleHtml}</span>`;
}
