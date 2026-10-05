// Client-side search over events fetched for the event_search window.

export const MIN_EVENT_SEARCH_LENGTH = 2;
export const MAX_EVENT_SEARCH_RESULTS = 50;

// Lowercase and strip diacritics so "cafe" finds "Café".
export function normalizeSearchText(value) {
  return String(value ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

export function getSearchTerms(query) {
  return normalizeSearchText(query).split(/\s+/).filter(Boolean);
}

// Every term must occur somewhere in the summary, location or description.
export function eventMatchesSearchTerms(event, terms) {
  if (!terms.length) return false;
  const haystack = normalizeSearchText([event?.summary, event?.location, event?.description].filter(Boolean).join(' '));
  return terms.every((term) => haystack.includes(term));
}

// Recurring events come back as one entry per occurrence; show each series once, at its next
// occurrence, or at its latest one when the whole series lies in the past.
export function collapseSearchResults(events, { now = new Date(), getEventStartDate, limit = MAX_EVENT_SEARCH_RESULTS } = {}) {
  const nowMs = now.getTime();
  const bySeries = new Map();
  events.forEach((event) => {
    const start = getEventStartDate(event);
    const startMs = typeof start?.getTime === 'function' ? start.getTime() : NaN;
    if (Number.isNaN(startMs)) return;
    const key = event.uid ? `${event.entityId}|${event.uid}` : `${event.entityId}|${event.summary}|${startMs}`;
    const existing = bySeries.get(key);
    const isUpcoming = startMs >= nowMs;
    if (!existing) {
      bySeries.set(key, { event, startMs, isUpcoming, occurrences: 1 });
      return;
    }
    existing.occurrences += 1;
    const better = isUpcoming
      ? (!existing.isUpcoming || startMs < existing.startMs)
      : (!existing.isUpcoming && startMs > existing.startMs);
    if (better) Object.assign(existing, { event, startMs, isUpcoming });
  });

  const entries = Array.from(bySeries.values());
  const upcoming = entries.filter((entry) => entry.isUpcoming).sort((a, b) => a.startMs - b.startMs);
  const past = entries.filter((entry) => !entry.isUpcoming).sort((a, b) => b.startMs - a.startMs);
  const toResult = (entry) => ({ event: entry.event, isRecurring: entry.occurrences > 1 || !!entry.event.rrule });
  return {
    upcoming: upcoming.slice(0, limit).map(toResult),
    past: past.slice(0, limit).map(toResult),
    total: entries.length
  };
}
