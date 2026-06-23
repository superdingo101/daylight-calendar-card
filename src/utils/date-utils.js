export function getDateRangeChunks(startDate, endDate, chunkDays = 30) {
  const chunks = [];
  let cursor = new Date(startDate);
  cursor.setHours(0, 0, 0, 0);

  while (cursor <= endDate) {
    const chunkStart = new Date(cursor);
    const chunkEnd = new Date(cursor);
    chunkEnd.setDate(chunkEnd.getDate() + chunkDays - 1);
    if (chunkEnd > endDate) {
      chunkEnd.setTime(endDate.getTime());
    }
    chunkEnd.setHours(23, 59, 59, 999);

    chunks.push({ startDate: chunkStart, endDate: chunkEnd });

    cursor = new Date(chunkEnd);
    cursor.setDate(cursor.getDate() + 1);
    cursor.setHours(0, 0, 0, 0);
  }

  return chunks;
}

export function parseLocalDate(dateStr) {
  if (!dateStr || typeof dateStr !== 'string') return new Date(dateStr);
  const [year, month, day] = dateStr.split('-').map(Number);
  if (![year, month, day].every(Number.isFinite)) return new Date(dateStr);
  return new Date(year, month - 1, day);
}

export function parsePossiblyLocalDateTime(value) {
  if (!value || typeof value !== 'string') return new Date(value);

  const hasTimezone = /(?:[zZ]|[+-]\d{2}:?\d{2})$/.test(value);
  if (hasTimezone) return new Date(value);

  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2})(?::(\d{2}))?$/);
  if (!match) return new Date(value);

  const [, year, month, day, hour, minute, second = '0'] = match;
  return new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hour),
    Number(minute),
    Number(second)
  );
}

export function formatLocalDate(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return '';
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getIsoWeekNumber(date) {
  const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNumber = utcDate.getUTCDay() || 7;
  utcDate.setUTCDate(utcDate.getUTCDate() + 4 - dayNumber);
  const yearStart = new Date(Date.UTC(utcDate.getUTCFullYear(), 0, 1));
  return Math.ceil((((utcDate - yearStart) / 86400000) + 1) / 7);
}
