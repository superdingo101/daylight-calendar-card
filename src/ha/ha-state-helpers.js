import {
  getHeaderWeatherEntityRenderSignature,
  normalizeHeaderWeatherData
} from '../weather/weather-utils.js';

export function getEntityState(hass, entityId) {
  if (!hass || !entityId) return null;
  return hass.states?.[entityId] || null;
}

export function getEntityFriendlyName(hass, entityId, fallback = entityId) {
  const friendlyName = getEntityState(hass, entityId)?.attributes?.friendly_name;
  return friendlyName || fallback;
}

export function getEntityIcon(hass, entityId, fallback = null) {
  const icon = getEntityState(hass, entityId)?.attributes?.icon;
  return typeof icon === 'string' && icon.trim() ? icon.trim() : fallback;
}

export function getEntityPicture(hass, entityId, fallback = null) {
  const picture = getEntityState(hass, entityId)?.attributes?.entity_picture;
  return typeof picture === 'string' && picture.trim() ? picture.trim() : fallback;
}

export function resolveEntityPictureUrl(hass, picture, fallback = null) {
  if (typeof picture !== 'string' || !picture.trim()) return fallback;
  const trimmedPicture = picture.trim();
  if (trimmedPicture.startsWith('/') && typeof hass?.hassUrl === 'function') {
    return hass.hassUrl(trimmedPicture);
  }
  return trimmedPicture;
}

export function getEntityPictureUrl(hass, entityId, fallback = null) {
  return resolveEntityPictureUrl(hass, getEntityPicture(hass, entityId), fallback);
}

export function getSensorDisplayValue(hass, entityId, fallback = '') {
  const state = getEntityState(hass, entityId)?.state;
  if (state === undefined || state === null || state === 'unknown' || state === 'unavailable') return fallback;
  const displayState = String(state).trim();
  return displayState || fallback;
}

export function getFormattedHeaderSensorTime(hass, entityId, parseTimeValue, formatTime, fallback = '') {
  const sensorState = getSensorDisplayValue(hass, entityId, null);
  if (!sensorState || typeof parseTimeValue !== 'function' || typeof formatTime !== 'function') return fallback;
  const parsed = parseTimeValue(sensorState);
  return parsed ? formatTime(parsed) : fallback;
}

export function getHeaderWeatherDisplayData(hass, entityId) {
  return normalizeHeaderWeatherData(getEntityState(hass, entityId));
}

export function getHeaderEntityRenderSignatureFromState(entityState) {
  return getHeaderWeatherEntityRenderSignature(entityState);
}

export function getHeaderEntityRenderSignature(hass, entityId) {
  return getHeaderEntityRenderSignatureFromState(getEntityState(hass, entityId));
}

export function getPersonStateLabel(personState) {
  if (!personState || !personState.state || ['unknown', 'unavailable'].includes(personState.state)) {
    return '';
  }

  if (personState.state === 'home') return 'Home';
  if (personState.state === 'not_home') return 'Away';

  return String(personState.state)
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function getPersonEntityPictureUrl(hass, personState) {
  return resolveEntityPictureUrl(hass, personState?.attributes?.entity_picture, null);
}

export function getEntityRenderSignature(hass, entityIds = []) {
  return JSON.stringify(entityIds.map((entityId) => {
    const entityState = getEntityState(hass, entityId);
    return {
      entityId,
      state: entityState?.state ?? null,
      picture: entityState?.attributes?.entity_picture ?? null,
      friendlyName: entityState?.attributes?.friendly_name ?? null
    };
  }));
}
