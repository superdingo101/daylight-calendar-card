import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  getEntityFriendlyName,
  getEntityIcon,
  getEntityPicture,
  getEntityPictureUrl,
  getEntityState,
  getFormattedHeaderSensorTime,
  getHeaderWeatherDisplayData,
  getPersonEntityPictureUrl,
  getSensorDisplayValue
} from './src/ha/ha-state-helpers.js';

const hass = {
  hassUrl: (path) => `https://ha.local${path}`,
  states: {
    'sensor.time': { state: '13:45', attributes: { friendly_name: 'Clock', icon: ' mdi:clock ', entity_picture: '/api/clock.png' } },
    'sensor.unknown': { state: 'unknown', attributes: {} },
    'sensor.unavailable': { state: 'unavailable', attributes: {} },
    'weather.home': { state: 'sunny', attributes: { temperature: 72, temperature_unit: '°F' } },
    'person.ian': { state: 'home', attributes: { entity_picture: '/api/ian.png' } }
  }
};

test('entity state helpers handle missing hass and missing entities', () => {
  assert.equal(getEntityState(null, 'sensor.time'), null);
  assert.equal(getEntityState(hass, 'sensor.missing'), null);
  assert.equal(getEntityFriendlyName(null, 'sensor.time'), 'sensor.time');
  assert.equal(getEntityIcon(hass, 'sensor.missing', 'mdi:help'), 'mdi:help');
  assert.equal(getEntityPicture(hass, 'sensor.missing', '/fallback.png'), '/fallback.png');
});

test('entity metadata helpers return friendly names, icons, and picture URLs with fallbacks', () => {
  assert.equal(getEntityFriendlyName(hass, 'sensor.time'), 'Clock');
  assert.equal(getEntityFriendlyName(hass, 'sensor.missing', 'Fallback name'), 'Fallback name');
  assert.equal(getEntityIcon(hass, 'sensor.time'), 'mdi:clock');
  assert.equal(getEntityPicture(hass, 'sensor.time'), '/api/clock.png');
  assert.equal(getEntityPictureUrl(hass, 'sensor.time'), 'https://ha.local/api/clock.png');
  assert.equal(getPersonEntityPictureUrl(hass, hass.states['person.ian']), 'https://ha.local/api/ian.png');
});

test('sensor display helper suppresses unknown and unavailable states', () => {
  assert.equal(getSensorDisplayValue(hass, 'sensor.time'), '13:45');
  assert.equal(getSensorDisplayValue(hass, 'sensor.unknown'), '');
  assert.equal(getSensorDisplayValue(hass, 'sensor.unavailable'), '');
  assert.equal(getSensorDisplayValue(hass, 'sensor.missing', 'fallback'), 'fallback');
});

test('header time and weather helpers format data from Home Assistant state', () => {
  const parseTimeValue = (value) => value === '13:45' ? new Date('2026-06-25T13:45:00Z') : null;
  const formatTime = (date) => date.toISOString().slice(11, 16);

  assert.equal(getFormattedHeaderSensorTime(hass, 'sensor.time', parseTimeValue, formatTime), '13:45');
  assert.equal(getFormattedHeaderSensorTime(hass, 'sensor.unknown', parseTimeValue, formatTime), '');
  assert.deepEqual(getHeaderWeatherDisplayData(hass, 'weather.home'), {
    conditionIcon: 'mdi:weather-sunny',
    temperature: '72°'
  });
  assert.equal(getHeaderWeatherDisplayData(hass, 'weather.missing'), null);
});
