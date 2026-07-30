import { normalizeEventTextValue } from '../utils/string-utils.js';

export function getVisibleCalendarBadgesForEvent(event, { hiddenCalendars = new Set(), getVirtualBadgeForEvent, normalizeSingleColor, configColors = {} } = {}) {
  const virtualCalendar = getVirtualBadgeForEvent?.(event);
  if (virtualCalendar) {
    const visibleSourceEntityIds = virtualCalendar.entities.filter((entityId) => !hiddenCalendars.has(entityId));
    if (visibleSourceEntityIds.length === 0) return [];
    const fallbackColor = event?.color || normalizeSingleColor?.(configColors[virtualCalendar.entities[0]]);
    return [{ entityId: `virtual:${virtualCalendar.id}`, color: virtualCalendar.color || fallbackColor }];
  }

  if (event?.isCombinedCalendarEvent && Array.isArray(event.sourceCalendars)) {
    return event.sourceCalendars.filter(calendar => !hiddenCalendars.has(calendar.entityId));
  }

  return [{ entityId: event.entityId, color: event.color }];
}

export function isCombinedEventWithinSingleVirtualCalendar(event, { hiddenCalendars = new Set(), getVirtualBadgeForEntity } = {}) {
  if (!event?.isCombinedCalendarEvent || !Array.isArray(event?.sourceEvents)) return false;

  const visibleSources = event.sourceEvents.filter((sourceEvent) => !hiddenCalendars.has(sourceEvent.entityId));
  if (visibleSources.length <= 1) return false;

  const virtualIds = new Set();
  for (const sourceEvent of visibleSources) {
    const virtualCalendar = getVirtualBadgeForEntity?.(sourceEvent.entityId);
    if (!virtualCalendar) return false;
    virtualIds.add(virtualCalendar.id);
    if (virtualIds.size > 1) return false;
  }

  return virtualIds.size === 1;
}

export function shouldShowCombinedCornerBubbles(event, { combineCalendars = false, isSingleVirtualCalendar = false, styleOverrides = null } = {}) {
  if (!event?.isCombinedCalendarEvent || !combineCalendars) return false;
  if (isSingleVirtualCalendar) return false;
  return !!styleOverrides?.hasDuplicateBackgroundColors;
}

export function getModalCalendarBadgesForEvent(event, { hiddenCalendars = new Set(), getVisibleCalendarBadges } = {}) {
  if (event?.isCombinedCalendarEvent && Array.isArray(event.sourceCalendars)) {
    const sourceBadges = event.sourceCalendars
      .filter((calendar) => calendar?.entityId && !hiddenCalendars.has(calendar.entityId))
      .map((calendar) => ({ entityId: calendar.entityId, color: calendar.color || event.color }));
    if (sourceBadges.length > 0) {
      return sourceBadges;
    }
  }

  return getVisibleCalendarBadges?.(event) || [];
}

export function getEventFontSizeDisplayValue(configuredSize, fallbackPx = 11) {
  if (configuredSize === undefined || configuredSize === null || configuredSize === '') {
    return `${fallbackPx}px`;
  }

  if (typeof configuredSize === 'number' && Number.isFinite(configuredSize)) {
    return `${configuredSize}px`;
  }

  const normalized = String(configuredSize).trim();
  if (!normalized) return `${fallbackPx}px`;
  return /^\d+(\.\d+)?$/.test(normalized) ? `${normalized}px` : normalized;
}

export function shouldShowEventLocation(event, { styleOverrides = null, showEventLocation = false } = {}) {
  const showLocation = styleOverrides?.show_event_location ?? showEventLocation;
  return !!(showLocation && event?.location);
}

export function getDisplayLocation(location, { styleOverrides = null, useShortLocation = false } = {}) {
  const normalizedLocation = normalizeEventTextValue(location);
  if (!normalizedLocation) return '';
  const shouldShorten = styleOverrides?.use_short_location ?? useShortLocation;
  if (!shouldShorten) return normalizedLocation;

  const numberMatch = normalizedLocation.match(/\b\d+[A-Za-z0-9-]*\b/);
  if (!numberMatch) {
    return normalizedLocation;
  }

  const numberIndex = numberMatch.index ?? -1;
  const hasPrefix = numberIndex > 0;
  if (hasPrefix) {
    const prefix = normalizedLocation
      .slice(0, numberIndex)
      .replace(/[\s,;:\/\\|-]+$/g, '')
      .trim();
    if (prefix) {
      return prefix;
    }
    return normalizedLocation;
  }

  const commonStreetEndingPattern = /\b(street|st\.?|road|rd\.?|avenue|ave\.?|boulevard|blvd\.?|drive|dr\.?|lane|ln\.?|court|ct\.?|circle|cir\.?|place|pl\.?|parkway|pkwy\.?|way|terrace|ter\.?|highway|hwy\.?)\b/i;
  const firstSegmentEnd = normalizedLocation.search(/[,;]/);
  const streetSegment = firstSegmentEnd >= 0
    ? normalizedLocation.slice(0, firstSegmentEnd)
    : normalizedLocation;
  const endingMatch = streetSegment.match(commonStreetEndingPattern);
  if (!endingMatch) {
    return normalizedLocation;
  }

  const endingStart = endingMatch.index ?? -1;
  if (endingStart < 0) {
    return normalizedLocation;
  }

  const endingText = endingMatch[0] || '';
  const shortened = streetSegment
    .slice(0, endingStart + endingText.length)
    .replace(/[,\s;:\/\\|-]+$/g, '')
    .trim();

  return shortened || normalizedLocation;
}

export function shouldShowEventTime(event, { styleOverrides = null, hiddenCalendars = new Set(), hideTimesForCalendars = [] } = {}) {
  if (!event) return true;
  if (styleOverrides?.hide_time === true) return false;
  if (styleOverrides?.show_time === true) return true;

  const visibleEntityIds = event.isCombinedCalendarEvent && Array.isArray(event.sourceEntityIds)
    ? event.sourceEntityIds.filter(entityId => !hiddenCalendars.has(entityId))
    : [event.entityId];

  if (visibleEntityIds.length === 0) {
    return false;
  }

  return visibleEntityIds.some(entityId => !hideTimesForCalendars.includes(entityId));
}

export function getEventBubbleFontColor(event, { styleOverrides = null, hiddenCalendars = new Set(), eventFontColors = {}, normalizeSingleColor, getEventBackgroundColor, getContrastColor } = {}) {
  if (!event) return 'white';
  if (styleOverrides?.event_font_color) {
    return styleOverrides.event_font_color;
  }

  const visibleEntityIds = event.isCombinedCalendarEvent && Array.isArray(event.sourceEntityIds)
    ? event.sourceEntityIds.filter(entityId => !hiddenCalendars.has(entityId))
    : [event.entityId];

  const preferredEntityId = visibleEntityIds[0] || event.entityId;
  const configuredColor = preferredEntityId
    ? normalizeSingleColor?.(eventFontColors?.[preferredEntityId])
    : null;
  if (configuredColor) {
    return configuredColor;
  }

  return getContrastColor?.(getEventBackgroundColor?.(event)) || 'white';
}

export function getScheduleVisualInfo(event, { getEventDateTimeInfo, shouldRenderTimedEventAsAllDayInSchedule, shouldShowEventTime: shouldShowTime, formatEventTime, getEventDisplayTitle, translate }) {
  const { eventStart, eventEnd, isAllDay } = getEventDateTimeInfo(event);
  const rendersAsAllDay = isAllDay || shouldRenderTimedEventAsAllDayInSchedule(eventStart, eventEnd);
  const displayTitle = getEventDisplayTitle?.(event) || event.summary || translate('untitledEvent');
  const shouldIncludeStartTime = !isAllDay && rendersAsAllDay && shouldShowTime(event);

  return {
    eventStart,
    eventEnd,
    isAllDay,
    rendersAsAllDay,
    displayTitle: shouldIncludeStartTime
      ? translate('eventTitleWithStartTime', {
          title: displayTitle,
          time: formatEventTime(eventStart, { schedule: true })
        })
      : displayTitle
  };
}
