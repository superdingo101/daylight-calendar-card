import { toStableString } from './event-fetcher.js';

export const EVENT_CACHE_SCHEMA_VERSION = 3;
const DB_NAME = 'daylight-calendar-card-events';
const STORE_NAME = 'eventSnapshots';
const MAX_CACHE_ENTRIES = 12;
let eventCacheMutationQueue = Promise.resolve();
let eventCacheMutationEpoch = 0;

export function getEventCacheMutationEpoch() {
  return eventCacheMutationEpoch;
}

export function beginEventCacheFlush() {
  eventCacheMutationEpoch += 1;
  return eventCacheMutationEpoch;
}

const queueEventCacheMutation = (callback) => {
  const run = eventCacheMutationQueue.then(callback, callback);
  eventCacheMutationQueue = run.catch(() => {});
  return run;
};

const openEventCacheDb = () => new Promise((resolve, reject) => {
  const indexedDBRef = globalThis.indexedDB;
  if (!indexedDBRef) {
    resolve(null);
    return;
  }
  const request = indexedDBRef.open(DB_NAME, 1);
  request.onupgradeneeded = () => {
    const db = request.result;
    if (!db.objectStoreNames.contains(STORE_NAME)) {
      db.createObjectStore(STORE_NAME, { keyPath: 'key' });
    }
  };
  request.onsuccess = () => resolve(request.result);
  request.onerror = () => reject(request.error || new Error('Unable to open event cache'));
});

const transact = async (mode, callback) => {
  const db = await openEventCacheDb();
  if (!db) return { available: false, value: null };
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, mode);
    const store = tx.objectStore(STORE_NAME);
    let callbackResult;
    tx.oncomplete = () => {
      db.close?.();
      resolve({ available: true, value: callbackResult });
    };
    tx.onerror = () => {
      db.close?.();
      reject(tx.error || new Error('Event cache transaction failed'));
    };
    tx.onabort = tx.onerror;
    callbackResult = callback(store, (value) => { callbackResult = value; });
  });
};

export function buildEventCacheConfigSignature({ entities = [], timeZone = null, colors = {}, userScope = null } = {}) {
  return toStableString({ entities, timeZone: timeZone || null, colors: colors || {}, userScope: userScope || null });
}

export function buildEventCacheKey(configSignature) {
  return `events:${configSignature}`;
}

export function normalizeEventCacheSnapshot(snapshot, { configSignature } = {}) {
  if (!snapshot || typeof snapshot !== 'object') return null;
  if (snapshot.schemaVersion !== EVENT_CACHE_SCHEMA_VERSION) return null;
  if (configSignature && snapshot.configSignature !== configSignature) return null;
  if (!snapshot.coveredRange || !snapshot.coveredRange.start || !snapshot.coveredRange.end) return null;
  const coveredStart = new Date(snapshot.coveredRange.start);
  const coveredEnd = new Date(snapshot.coveredRange.end);
  if (!Number.isFinite(coveredStart.getTime()) || !Number.isFinite(coveredEnd.getTime()) || coveredStart > coveredEnd) return null;
  if (!Number.isFinite(snapshot.lastSuccessfulRefresh)) return null;
  if (!snapshot.eventsByCalendar || typeof snapshot.eventsByCalendar !== 'object') return null;

  const getSupportedEventDateValue = (value) => {
    if (typeof value === 'string') return { kind: 'string', value };
    if (!value || typeof value !== 'object' || value instanceof Date) return null;
    if (typeof value.dateTime === 'string' && value.date === undefined) return { kind: 'dateTime', value: value.dateTime };
    if (typeof value.date === 'string' && value.dateTime === undefined) return { kind: 'date', value: value.date };
    return null;
  };
  const isValidCachedEvent = (event, entityId) => {
    if (!event || typeof event !== 'object') return false;
    if (event.entityId !== entityId) return false;
    const startValue = getSupportedEventDateValue(event.start);
    const endValue = getSupportedEventDateValue(event.end);
    if (!startValue || !endValue || startValue.kind !== endValue.kind) return false;
    const start = new Date(startValue.value);
    const end = new Date(endValue.value);
    return Number.isFinite(start.getTime()) && Number.isFinite(end.getTime()) && end >= start;
  };
  const eventsByCalendar = {};
  Object.entries(snapshot.eventsByCalendar).forEach(([entityId, events]) => {
    if (!Array.isArray(events)) return;
    if (events.length === 0) {
      eventsByCalendar[entityId] = [];
      return;
    }
    if (!events.every(event => isValidCachedEvent(event, entityId))) return;
    eventsByCalendar[entityId] = events;
  });

  return {
    schemaVersion: EVENT_CACHE_SCHEMA_VERSION,
    key: snapshot.key || buildEventCacheKey(snapshot.configSignature),
    updatedAt: Number(snapshot.updatedAt) || snapshot.lastSuccessfulRefresh,
    lastSuccessfulRefresh: snapshot.lastSuccessfulRefresh,
    coveredRange: {
      start: coveredStart.toISOString(),
      end: coveredEnd.toISOString()
    },
    configSignature: snapshot.configSignature,
    eventsByCalendar,
    perCalendarMetadata: snapshot.perCalendarMetadata && typeof snapshot.perCalendarMetadata === 'object' ? snapshot.perCalendarMetadata : {}
  };
}

export function createEventCacheSnapshot({ configSignature, startDate, endDate, eventsByCalendar, lastSuccessfulRefresh = Date.now(), perCalendarMetadata = {} }) {
  return normalizeEventCacheSnapshot({
    schemaVersion: EVENT_CACHE_SCHEMA_VERSION,
    key: buildEventCacheKey(configSignature),
    updatedAt: Date.now(),
    lastSuccessfulRefresh,
    coveredRange: {
      start: startDate instanceof Date ? startDate.toISOString() : startDate,
      end: endDate instanceof Date ? endDate.toISOString() : endDate
    },
    configSignature,
    eventsByCalendar,
    perCalendarMetadata
  }, { configSignature });
}

export async function readEventCacheSnapshot(configSignature) {
  try {
    const key = buildEventCacheKey(configSignature);
    const result = await transact('readonly', (store, setResult) => {
      const request = store.get(key);
      request.onsuccess = () => setResult(request.result || null);
    });
    if (!result.available) return { available: false, snapshot: null };
    return { available: true, snapshot: normalizeEventCacheSnapshot(result.value, { configSignature }) };
  } catch (error) {
    console.warn('Failed to read Daylight event cache:', error);
    return { available: false, snapshot: null, error };
  }
}

export async function writeEventCacheSnapshot(snapshot, { epoch = getEventCacheMutationEpoch() } = {}) {
  const normalized = normalizeEventCacheSnapshot(snapshot, { configSignature: snapshot?.configSignature });
  if (!normalized) return false;
  return queueEventCacheMutation(async () => {
    if (epoch !== eventCacheMutationEpoch) return false;
    try {
      const result = await transact('readwrite', (store) => {
        store.put(normalized);
        const getAllRequest = store.getAll();
        getAllRequest.onsuccess = () => {
          const entries = (getAllRequest.result || [])
            .filter((entry) => entry?.key && String(entry.key).startsWith('events:'))
            .sort((a, b) => (Number(b.updatedAt) || 0) - (Number(a.updatedAt) || 0));
          entries.slice(MAX_CACHE_ENTRIES).forEach((entry) => store.delete(entry.key));
        };
      });
      return epoch === eventCacheMutationEpoch && !!result.available;
    } catch (error) {
      console.warn('Failed to write Daylight event cache:', error);
      return false;
    }
  });
}

export async function clearAllEventCacheSnapshots({ epoch = beginEventCacheFlush() } = {}) {
  return queueEventCacheMutation(async () => {
    if (epoch !== eventCacheMutationEpoch) return false;
    try {
      const result = await transact('readwrite', (store) => {
        const getAllKeysRequest = store.getAllKeys();
        getAllKeysRequest.onsuccess = () => {
          (getAllKeysRequest.result || [])
            .filter((key) => String(key).startsWith('events:'))
            .forEach((key) => store.delete(key));
        };
      });
      return epoch === eventCacheMutationEpoch && !!result.available;
    } catch (error) {
      console.warn('Failed to clear Daylight event cache:', error);
      return false;
    }
  });
}
