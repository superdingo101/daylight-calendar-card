export function normalizeDashboardPath(pathValue) {
  if (typeof pathValue !== 'string') return null;
  const trimmedPath = pathValue.trim();
  if (!trimmedPath) return null;
  return trimmedPath.startsWith('/') ? trimmedPath : `/${trimmedPath}`;
}

export function normalizeEnumValue(value, { aliases = {}, allowed = [], fallback }) {
  const normalizedValue = String(value ?? '').trim().toLowerCase();
  const mappedValue = aliases[normalizedValue] ?? normalizedValue;
  return allowed.includes(mappedValue) ? mappedValue : fallback;
}

export function normalizeEntityStringMap(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return {};
  }

  return Object.entries(value).reduce((acc, [key, mappedValue]) => {
    const normalizedKey = typeof key === 'string' ? key.trim() : '';
    const normalizedValue = typeof mappedValue === 'string' ? mappedValue.trim() : '';
    if (normalizedKey && normalizedValue) {
      acc[normalizedKey] = normalizedValue;
    }
    return acc;
  }, {});
}

export function normalizeBooleanStyleValue(value) {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') {
    const normalizedValue = value.trim().toLowerCase();
    if (normalizedValue === 'true') return true;
    if (normalizedValue === 'false') return false;
  }
  return null;
}
