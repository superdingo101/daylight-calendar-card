export const STALE_RESOURCE_WARNING_STORAGE_KEY = 'daylight-calendar-card:stale-resource-warning-dismissed';
export const STALE_RESOURCE_TROUBLESHOOTING_URL = 'https://docs.daylightcalendar.com/troubleshooting#updated-to-the-latest-version-but-still-seeing-old-behavior';

const STALE_RESOURCE_SEGMENT = '/skylight-calendar-card/';
const CURRENT_HACS_RESOURCE_PATH = '/hacsfiles/daylight-calendar-card/skylight-calendar-card.js';

const normalizeResourceUrl = (value) => {
  if (typeof value !== 'string') return '';
  return value.trim();
};

const isStaleResourceUrl = (url) => {
  const normalized = normalizeResourceUrl(url).toLowerCase();
  if (!normalized) return false;
  return normalized.includes(STALE_RESOURCE_SEGMENT) && !normalized.includes(CURRENT_HACS_RESOURCE_PATH);
};

const collectResourceUrls = (documentLike) => {
  const urls = [];
  if (!documentLike) return urls;

  const addUrl = (value) => {
    const normalized = normalizeResourceUrl(value);
    if (normalized) urls.push(normalized);
  };

  try {
    for (const script of Array.from(documentLike.scripts || [])) {
      addUrl(script?.src);
    }
  } catch (_error) {
    // Ignore unavailable document APIs.
  }

  try {
    for (const link of Array.from(documentLike.querySelectorAll?.('link[href]') || [])) {
      addUrl(link?.href);
    }
  } catch (_error) {
    // Ignore unavailable document APIs.
  }

  return urls;
};

export const detectStaleSkylightResource = (documentLike = globalThis.document) => {
  const urls = collectResourceUrls(documentLike);
  const staleUrl = urls.find(isStaleResourceUrl) || null;
  return {
    detected: !!staleUrl,
    staleUrl,
    urls
  };
};
