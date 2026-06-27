import { COMMON_NAMED_COLORS } from '../constants.js';

export function normalizeSingleColor(colorValue) {
  if (colorValue === undefined || colorValue === null) {
    return colorValue;
  }

  const trimmed = String(colorValue).trim();
  if (!trimmed) return trimmed;

  const normalizedName = trimmed
    .toLowerCase()
    .replace(/[()]/g, '')
    .replace(/\s*\/\s*/g, '/')
    .replace(/\s+/g, ' ')
    .trim();
  const mappedColor = COMMON_NAMED_COLORS[normalizedName];
  if (mappedColor) {
    return mappedColor;
  }

  return trimmed;
}

export function normalizeColorMap(colorMap, { normalizeColor = normalizeSingleColor } = {}) {
  if (!colorMap || typeof colorMap !== 'object') return {};

  return Object.entries(colorMap).reduce((acc, [entityId, color]) => {
    const normalized = normalizeColor(color);
    if (normalized !== undefined && normalized !== null && normalized !== '') {
      acc[entityId] = normalized;
    }
    return acc;
  }, {});
}

export function colorToHex(color, { normalizeColor = normalizeSingleColor } = {}) {
  if (!color) return null;

  const normalizedColor = normalizeColor(color);
  if (typeof normalizedColor !== 'string') return null;

  const hex3Match = normalizedColor.match(/^#([\da-fA-F]{3})$/);
  if (hex3Match) {
    const [r, g, b] = hex3Match[1].split('');
    return `#${r}${r}${g}${g}${b}${b}`.toUpperCase();
  }

  const hex6Match = normalizedColor.match(/^#([\da-fA-F]{6})$/);
  if (hex6Match) {
    return `#${hex6Match[1].toUpperCase()}`;
  }

  return null;
}

export function parseColorToRgb(color, {
  normalizeColor = normalizeSingleColor,
  resolveComputedCssColorToRgb = null
} = {}) {
  const normalizedColor = normalizeColor(color);
  if (typeof normalizedColor === 'string') {
    const rgbMatch = normalizedColor
      .match(/^rgba?\((.+)\)$/i);
    if (rgbMatch) {
      const normalizedChannels = rgbMatch[1]
        .replace(/\s*\/\s*.*/, '')
        .replace(/,/g, ' ')
        .trim()
        .split(/\s+/)
        .slice(0, 3)
        .map((channel) => Number(channel));

      if (normalizedChannels.length === 3 && normalizedChannels.every((value) => Number.isFinite(value))) {
        const [r, g, b] = normalizedChannels.map((value) => Math.max(0, Math.min(255, Math.round(value))));
        return { r, g, b };
      }
    }
  }

  const hex = colorToHex(normalizedColor, { normalizeColor });
  if (hex) {
    return {
      r: parseInt(hex.slice(1, 3), 16),
      g: parseInt(hex.slice(3, 5), 16),
      b: parseInt(hex.slice(5, 7), 16)
    };
  }

  return typeof resolveComputedCssColorToRgb === 'function'
    ? resolveComputedCssColorToRgb(normalizedColor)
    : null;
}

export function colorWithAlpha(color, alpha = 1, { colorToRgb = parseColorToRgb } = {}) {
  const rgb = colorToRgb(color);
  if (!rgb) return color;

  const clamped = Math.max(0, Math.min(1, alpha));
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${clamped})`;
}

export function blendRgb(top, bottom, topAlpha = 1) {
  if (!top && !bottom) return null;
  if (!top) return bottom;
  if (!bottom) return top;
  const clampedAlpha = Math.max(0, Math.min(1, topAlpha));
  return {
    r: Math.round((top.r * clampedAlpha) + (bottom.r * (1 - clampedAlpha))),
    g: Math.round((top.g * clampedAlpha) + (bottom.g * (1 - clampedAlpha))),
    b: Math.round((top.b * clampedAlpha) + (bottom.b * (1 - clampedAlpha)))
  };
}

export function getContrastColor(backgroundColor, { colorToRgb = parseColorToRgb } = {}) {
  const rgb = colorToRgb(backgroundColor);
  if (!rgb) return 'white';

  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  return luminance > 0.6 ? 'black' : 'white';
}
