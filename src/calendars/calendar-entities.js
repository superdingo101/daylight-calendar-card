export function normalizeVirtualCalendars(virtualCalendars, { normalizeSingleColor }) {
  if (!Array.isArray(virtualCalendars)) return [];

  return virtualCalendars
    .map((entry, index) => {
      if (!entry || typeof entry !== 'object') return null;
      const id = typeof entry.id === 'string' && entry.id.trim()
        ? entry.id.trim()
        : `virtual_${index + 1}`;
      const entities = Array.isArray(entry.entities)
        ? Array.from(new Set(entry.entities
          .map((entityId) => typeof entityId === 'string' ? entityId.trim() : '')
          .filter(Boolean)))
        : [];
      if (entities.length === 0) return null;
      return {
        id,
        name: typeof entry.name === 'string' && entry.name.trim() ? entry.name.trim() : id,
        icon: typeof entry.icon === 'string' && entry.icon.trim() ? entry.icon.trim() : null,
        color: normalizeSingleColor(entry.color),
        entities
      };
    })
    .filter(Boolean);
}

export function getVirtualBadgeById(virtualCalendars = [], virtualId) {
  return (virtualCalendars || []).find((virtualCalendar) => virtualCalendar.id === virtualId) || null;
}

export function getVirtualBadgeForEntity(virtualCalendars = [], entityId) {
  return (virtualCalendars || []).find((virtualCalendar) => virtualCalendar.entities.includes(entityId)) || null;
}

export function getVirtualBadgeForEvent(virtualCalendars = [], event) {
  if (!event) return null;

  if (event.isCombinedCalendarEvent && Array.isArray(event.sourceEntityIds) && event.sourceEntityIds.length > 0) {
    const matchedVirtualCalendars = event.sourceEntityIds
      .map((entityId) => getVirtualBadgeForEntity(virtualCalendars, entityId))
      .filter(Boolean);
    if (matchedVirtualCalendars.length > 0) {
      return matchedVirtualCalendars[0];
    }
    return null;
  }

  return getVirtualBadgeForEntity(virtualCalendars, event.entityId);
}

export function getCalendarColor(entityId, index = 0, { colors = {}, getDefaultColor, normalizeSingleColor }) {
  return normalizeSingleColor(
    colors?.[entityId] ||
    getDefaultColor(index)
  );
}

export function getCalendarName(entityId, { calendarNames = {}, hassStates = {}, virtualCalendars = [] } = {}) {
  if (!entityId) {
    return '';
  }

  if (entityId.startsWith('virtual:')) {
    const virtualId = entityId.replace('virtual:', '');
    const virtualBadge = getVirtualBadgeById(virtualCalendars, virtualId);
    if (virtualBadge?.name) {
      return virtualBadge.name;
    }
    return virtualId;
  }

  // Check if there's a custom name mapping
  if (calendarNames && calendarNames[entityId]) {
    return calendarNames[entityId];
  }

  // Otherwise use friendly_name from entity or entity ID
  const entity = hassStates?.[entityId];
  const fallbackName = entityId.includes('.') ? entityId.split('.').slice(1).join('.') : entityId;
  return entity?.attributes?.friendly_name || fallbackName;
}

export function getVirtualBadgeItems({
  entities = [],
  virtualCalendars = [],
  hideBadgeCalendars = [],
  hiddenCalendars = new Set(),
  getCalendarColor,
  getCalendarName,
  getCalendarBadgeIcon
}) {
  const hiddenBadgeCalendars = new Set(hideBadgeCalendars || []);
  const items = [];
  const insertedVirtualIds = new Set();

  entities.forEach((entityId, originalIndex) => {
    const virtualCalendar = getVirtualBadgeForEntity(virtualCalendars, entityId);
    if (virtualCalendar && !insertedVirtualIds.has(virtualCalendar.id)) {
      const configuredEntities = virtualCalendar.entities.filter((configuredEntityId) => entities.includes(configuredEntityId));
      const hasVisibleEntity = configuredEntities.some((configuredEntityId) => !hiddenBadgeCalendars.has(configuredEntityId));
      if (hasVisibleEntity) {
        const color = virtualCalendar.color || getCalendarColor(entityId, originalIndex);
        const isHidden = configuredEntities.every((configuredEntityId) => hiddenCalendars.has(configuredEntityId));
        items.push({
          id: virtualCalendar.id,
          entityId: `virtual:${virtualCalendar.id}`,
          name: virtualCalendar.name,
          icon: virtualCalendar.icon,
          color,
          entities: configuredEntities,
          isHidden,
          type: 'virtual'
        });
      }
      insertedVirtualIds.add(virtualCalendar.id);
      return;
    }

    if (virtualCalendar || hiddenBadgeCalendars.has(entityId)) return;
    const color = getCalendarColor(entityId, originalIndex);
    items.push({
      id: entityId,
      entityId,
      name: getCalendarName(entityId),
      icon: getCalendarBadgeIcon(entityId),
      color,
      entities: [entityId],
      isHidden: hiddenCalendars.has(entityId),
      type: 'entity'
    });
  });

  return items;
}

export function getWritableCalendars(entities = [], calendarCapabilities = {}) {
  return entities.filter(entityId => {
    const caps = calendarCapabilities[entityId];
    return caps && caps.canCreate && !caps.isReadonly;
  });
}

export function getCalendarBadgePersonEntityId(badgeEntityId, calendarPersonEntities = {}) {
  const mappings = calendarPersonEntities || {};
  if (!badgeEntityId) return null;

  if (mappings[badgeEntityId]) {
    return mappings[badgeEntityId];
  }

  if (badgeEntityId.startsWith('virtual:')) {
    const virtualId = badgeEntityId.replace('virtual:', '');
    return mappings[virtualId] || null;
  }

  return null;
}
