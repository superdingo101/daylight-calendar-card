export function normalizeEventTextValue(value) {
  return String(value || '')
    .normalize('NFKC')
    .replace(/\s+/g, ' ')
    .trim();
}

export function escapeHtmlAttribute(text) {
  const replacements = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  return String(text ?? '').replace(/[&<>"']/g, (char) => replacements[char]);
}
