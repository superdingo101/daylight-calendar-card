import { test } from 'node:test';
import assert from 'node:assert/strict';

import {
  colorToHex,
  colorWithAlpha,
  getContrastColor,
  normalizeColorMap,
  normalizeSingleColor,
  parseColorToRgb
} from './src/utils/color-utils.js';
import {
  normalizeBackgroundOpacity,
  normalizeCombineBackground,
  normalizeDefaultHiddenCalendars,
  normalizeEventModalSize,
  normalizeEventTitlePrefixMode,
  normalizePastEventMode,
  normalizeThemeMode
} from './src/config/config-normalizers.js';

test('color utilities normalize named color aliases and hex values', () => {
  assert.equal(normalizeSingleColor(' Lime / Green '), '#00FF00');
  assert.equal(normalizeSingleColor('(dark green)'), '#008000');
  assert.equal(colorToHex('#abc'), '#AABBCC');
  assert.equal(colorToHex('#a1B2c3'), '#A1B2C3');
});

test('color utilities parse rgb and rgba channels without changing clamping behavior', () => {
  assert.deepEqual(parseColorToRgb('rgb(1, 2, 3)'), { r: 1, g: 2, b: 3 });
  assert.deepEqual(parseColorToRgb('rgba(10 20 30 / 0.4)'), { r: 10, g: 20, b: 30 });
  assert.deepEqual(parseColorToRgb('rgb(300, -5, 2.4)'), { r: 255, g: 0, b: 2 });
});

test('color utilities preserve invalid color fallback behavior', () => {
  assert.equal(colorToHex('not-a-color'), null);
  assert.equal(parseColorToRgb('not-a-color'), null);
  assert.equal(colorWithAlpha('not-a-color', 0.4), 'not-a-color');
  assert.deepEqual(normalizeColorMap({ a: ' red ', b: '', c: null, d: undefined }), { a: '#FF0000' });
});

test('contrast colors preserve card color name outputs', () => {
  assert.equal(getContrastColor('#ffffff'), 'black');
  assert.equal(getContrastColor('#000000'), 'white');
  assert.equal(getContrastColor('not-a-color'), 'white');
});

test('background opacity clamps finite values and preserves fallback for invalid values', () => {
  assert.equal(normalizeBackgroundOpacity(120, 10), 100);
  assert.equal(normalizeBackgroundOpacity(-5, 10), 0);
  assert.equal(normalizeBackgroundOpacity('55', 10), 55);
  assert.equal(normalizeBackgroundOpacity('bad', 10), 10);
});

test('config enum normalizers preserve aliases and fallbacks', () => {
  assert.equal(normalizeThemeMode(true), 'dark');
  assert.equal(normalizeThemeMode(false), 'auto');
  assert.equal(normalizeThemeMode('LIGHT'), 'light');
  assert.equal(normalizeThemeMode('unknown'), 'auto');
  assert.equal(normalizeEventTitlePrefixMode('icon'), 'badge_icon');
  assert.equal(normalizeEventTitlePrefixMode('friendly'), 'friendly_name');
  assert.equal(normalizeEventTitlePrefixMode('unknown'), 'none');
  assert.equal(normalizePastEventMode('muted'), 'muted');
  assert.equal(normalizePastEventMode('unknown'), 'none');
});

test('combine background accepts modes and hex colors with primary fallback', () => {
  assert.equal(normalizeCombineBackground('neutral'), 'neutral');
  assert.equal(normalizeCombineBackground('#abc'), '#AABBCC');
  assert.equal(normalizeCombineBackground('lime'), '#00FF00');
  assert.equal(normalizeCombineBackground('not-a-color'), 'primary');
  assert.equal(normalizeCombineBackground(''), 'primary');
});

test('default hidden calendar normalization filters unknowns and applies visibility overrides', () => {
  assert.deepEqual(normalizeDefaultHiddenCalendars({
    entities: ['calendar.a', 'calendar.b', 'calendar.c'],
    default_hidden_calendars: ['calendar.a', 'calendar.unknown'],
    default_calendar_visibility: {
      'calendar.a': 'show',
      'calendar.b': 'hidden',
      'calendar.c': false,
      'calendar.unknown': 'hidden'
    }
  }), ['calendar.b', 'calendar.c']);
});

test('event modal size falls back to the default medium size', () => {
  assert.equal(normalizeEventModalSize('wide'), 'wide');
  assert.equal(normalizeEventModalSize(' FULL '), 'full');
  assert.equal(normalizeEventModalSize('giant'), 'medium');
});
