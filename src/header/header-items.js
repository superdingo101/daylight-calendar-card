import { parseLocalDate, parsePossiblyLocalDateTime } from '../utils/date-utils.js';

const HEADER_ITEM_FORMATS = new Set(['auto', 'raw', 'time', 'date', 'datetime']);
const EMPTY_STATES = new Set(['', 'unknown', 'unavailable']);

function normalizeOptionalString(value) {
  if (value === undefined || value === null) return null;
  const normalized = String(value).trim();
  return normalized || null;
}

export function normalizeHeaderItems(items) {
  if (!Array.isArray(items)) return [];
  return items
    .filter((item) => item && typeof item === 'object' && !Array.isArray(item))
    .map((item) => ({
      icon: normalizeOptionalString(item.icon),
      entity: normalizeOptionalString(item.entity),
      attribute: normalizeOptionalString(item.attribute),
      text: normalizeOptionalString(item.text),
      format: HEADER_ITEM_FORMATS.has(normalizeOptionalString(item.format)) ? normalizeOptionalString(item.format) : 'auto'
    }))
    .filter((item) => item.icon || item.entity || item.text);
}

function isEmptyResolvedValue(value) {
  if (value === undefined || value === null) return true;
  if (typeof value === 'string') return EMPTY_STATES.has(value.trim().toLowerCase());
  return false;
}

function stringifyRawValue(value) {
  if (value instanceof Date) return value.toISOString();
  if (Array.isArray(value)) return value.join(', ');
  if (typeof value === 'object' && value !== null) return JSON.stringify(value);
  return String(value);
}

function parseDateValue(value, parseTimeValue) {
  if (value instanceof Date) return Number.isNaN(value.getTime()) ? null : value;
  if (typeof parseTimeValue === 'function') {
    const parsedTime = parseTimeValue(value);
    if (parsedTime) return parsedTime;
  }
  const raw = String(value ?? '').trim();
  if (!raw) return null;
  const parsed = /^\d{4}-\d{2}-\d{2}$/.test(raw) ? parseLocalDate(raw) : parsePossiblyLocalDateTime(raw);
  return parsed instanceof Date && !Number.isNaN(parsed.getTime()) ? parsed : null;
}

function formatDateValue(value, format, formatters = {}) {
  const parsed = parseDateValue(value, formatters.parseTimeValue);
  if (!parsed) return '';
  if (format === 'time') return formatters.formatTime?.(parsed) || '';
  if (format === 'date') return formatters.formatDate?.(parsed) || '';
  return formatters.formatDateTime?.(parsed) || '';
}

export function resolveHeaderItemValue(item, hass, formatters = {}) {
  const entityState = item.entity ? hass?.states?.[item.entity] : null;
  const hasEntityValue = !!entityState;
  const rawEntityValue = hasEntityValue
    ? (item.attribute ? entityState.attributes?.[item.attribute] : entityState.state)
    : undefined;
  const rawValue = !isEmptyResolvedValue(rawEntityValue) ? rawEntityValue : item.text;
  if (isEmptyResolvedValue(rawValue)) return '';

  const format = item.format || 'auto';
  if (format === 'time' || format === 'date' || format === 'datetime') {
    return formatDateValue(rawValue, format, formatters);
  }

  if (format === 'raw') return stringifyRawValue(rawValue);

  const deviceClass = normalizeOptionalString(entityState?.attributes?.device_class);
  if (deviceClass === 'timestamp') return formatDateValue(rawValue, 'time', formatters);
  if (deviceClass === 'date') return formatDateValue(rawValue, 'date', formatters);

  const rawText = stringifyRawValue(rawValue);
  const unit = normalizeOptionalString(entityState?.attributes?.unit_of_measurement);
  if (unit && hasEntityValue && !item.attribute) return `${rawText} ${unit}`;
  return rawText;
}

export function resolveHeaderItems(items, hass, formatters = {}) {
  return normalizeHeaderItems(items).map((item) => ({
    icon: item.icon,
    value: resolveHeaderItemValue(item, hass, formatters)
  })).filter((item) => !isEmptyResolvedValue(item.value));
}

export function getHeaderItemsRenderSignature(items, hass) {
  return JSON.stringify(normalizeHeaderItems(items).filter((item) => item.entity).map((item) => {
    const state = hass?.states?.[item.entity];
    return {
      entity: item.entity,
      attribute: item.attribute,
      state: state?.state ?? null,
      attributeValue: item.attribute ? state?.attributes?.[item.attribute] ?? null : null,
      deviceClass: state?.attributes?.device_class ?? null,
      unitOfMeasurement: state?.attributes?.unit_of_measurement ?? null,
      icon: state?.attributes?.icon ?? null
    };
  }));
}
