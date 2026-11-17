/** The versioned contract shared with Daylight Calendar Import. */
export const RETURN_PREFIX = 'daylight:return:v1:';
const DAY = 24 * 60 * 60 * 1000;

export function pendingCount(hass, capabilities, selected) {
  if (!capabilities?.capabilities?.return_sessions || !capabilities.capabilities.direct_routes) return null;
  const entries = capabilities.entry_ids || [];
  if (entries.length !== 1 && !selected) return null;
  const matches = Object.values(hass?.states || {}).filter(entity =>
    entity.entity_id?.startsWith('sensor.') &&
    entity.attributes?.daylight_import_kind === 'pending_events' &&
    entity.attributes?.daylight_import_contract_version === 1 &&
    entries.includes(entity.attributes?.daylight_import_config_entry_id) &&
    (!selected || entity.entity_id === selected));
  if (matches.length !== 1) return null;
  const state = matches[0].state;
  if (typeof state !== 'string' || !/^\d+$/.test(state)) return null;
  const value = Number(state);
  return Number.isSafeInteger(value) ? value : null;
}

/** Describe an element by position through light and shadow DOM. */
export function cardPath(element) {
  const parts = [];
  let node = element;
  while (node) {
    const root = node.parentNode;
    if (!root) break;
    const siblings = Array.from(root.children || []).filter(child => child.localName === node.localName);
    if (node.localName) parts.push(`${node.localName}:${siblings.indexOf(node)}`);
    node = root.host || (root.nodeType === 1 ? root : null);
  }
  return parts.reverse().join('/');
}

export function createReturnSession(storage, crypto, returnPath, cardId, cardState, now = Date.now()) {
  const random = new Uint8Array(16);
  crypto.getRandomValues(random);
  const id = Array.from(random, byte => byte.toString(16).padStart(2, '0')).join('');
  const session = {version: 1, id, created_at: now, expires_at: now + DAY,
    return_path: returnPath, card_instance_id: cardId, card_state: cardState, result: null};
  storage.setItem(RETURN_PREFIX + id, JSON.stringify(session));
  return id;
}

export function takeReturnSession(storage, returnPath, cardId, now = Date.now()) {
  for (let index = storage.length - 1; index >= 0; index--) {
    const key = storage.key(index);
    if (!key?.startsWith(RETURN_PREFIX)) continue;
    try {
      const session = JSON.parse(storage.getItem(key));
      if (!session || session.version !== 1 || session.expires_at <= now) {
        storage.removeItem(key);
      } else if (session.return_path === returnPath && session.card_instance_id === cardId &&
                 ['completed', 'cancelled'].includes(session.result?.status)) {
        storage.removeItem(key);
        return session.card_state;
      }
    } catch { storage.removeItem(key); }
  }
  return null;
}
