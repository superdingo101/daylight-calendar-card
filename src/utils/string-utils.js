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

// Some calendar feeds HTML-encode ampersands in otherwise plain-text titles.
// Decode one layer for display only; callers must still escape the result.
export function decodeTitleAmpersands(value) {
  return String(value ?? '').replace(/&(?:amp|#0*38|#x0*26);/gi, '&');
}
