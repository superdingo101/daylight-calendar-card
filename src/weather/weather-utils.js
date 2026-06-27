export function normalizeWeatherTemperature(value) {
  const numericValue = Number(value);
  if (!Number.isFinite(numericValue)) return null;
  return `${Math.round(numericValue)}°`;
}

export function mapWeatherConditionToIcon(conditionValue) {
  const condition = String(conditionValue || '').trim().toLowerCase().replace(/_/g, '-');
  if (!condition || condition === 'unknown' || condition === 'unavailable') return '';

  const iconMap = {
    sunny: 'mdi:weather-sunny',
    clear: 'mdi:weather-sunny',
    'clear-night': 'mdi:weather-night',
    partlycloudy: 'mdi:weather-partly-cloudy',
    cloudy: 'mdi:weather-cloudy',
    overcast: 'mdi:weather-cloudy',
    rainy: 'mdi:weather-rainy',
    pouring: 'mdi:weather-pouring',
    snow: 'mdi:weather-snowy',
    snowy: 'mdi:weather-snowy',
    'snowy-rainy': 'mdi:weather-snowy-rainy',
    hail: 'mdi:weather-hail',
    lightning: 'mdi:weather-lightning',
    'lightning-rainy': 'mdi:weather-lightning-rainy',
    windy: 'mdi:weather-windy',
    'windy-variant': 'mdi:weather-windy-variant',
    fog: 'mdi:weather-fog',
    exceptional: 'mdi:alert-circle-outline'
  };

  return iconMap[condition] || '';
}

export function normalizeHeaderWeatherData(weatherEntity) {
  if (!weatherEntity) return null;

  const attrs = weatherEntity.attributes || {};
  const condition = attrs.condition || weatherEntity.state;
  const conditionIcon = mapWeatherConditionToIcon(condition);
  const temperature = normalizeWeatherTemperature(
    attrs.temperature ?? attrs.current_temperature ?? attrs.temp ?? weatherEntity.state
  );

  if (!conditionIcon || !temperature) return null;
  return { conditionIcon, temperature };
}

export function normalizeForecastForDate(forecasts, date, getDateKey) {
  if (!Array.isArray(forecasts) || forecasts.length === 0) return null;

  const targetDateKey = getDateKey(date);
  const match = forecasts.find((item) => {
    const forecastDateValue = item?.datetime || item?.date;
    if (!forecastDateValue) return false;
    const forecastDate = new Date(forecastDateValue);
    if (Number.isNaN(forecastDate.getTime())) return false;
    return getDateKey(forecastDate) === targetDateKey;
  });

  if (!match) return null;

  const highTemp = normalizeWeatherTemperature(match.temperature ?? match.temphigh ?? match.high);
  const lowTemp = normalizeWeatherTemperature(match.templow ?? match.low ?? match.temperature_low);
  const conditionIcon = mapWeatherConditionToIcon(match.condition);

  if (!conditionIcon || !highTemp) return null;
  return { conditionIcon, highTemp, lowTemp };
}

export function getWeatherEntityForecast(weatherEntity, wsForecast) {
  return Array.isArray(wsForecast) && wsForecast.length > 0
    ? wsForecast
    : weatherEntity?.attributes?.forecast;
}

export function getHeaderWeatherEntityRenderSignature(entityState) {
  if (!entityState) return '';
  const attrs = entityState.attributes || {};
  return JSON.stringify({
    state: entityState.state,
    temperature: attrs.temperature ?? attrs.current_temperature ?? attrs.temp ?? null,
    condition: attrs.condition ?? null,
    friendly_name: attrs.friendly_name ?? null,
    entity_picture: attrs.entity_picture ?? null,
    forecast: Array.isArray(attrs.forecast)
      ? attrs.forecast.map((forecastItem) => ({
        datetime: forecastItem?.datetime ?? forecastItem?.date ?? null,
        condition: forecastItem?.condition ?? null,
        high: forecastItem?.temperature ?? forecastItem?.temphigh ?? forecastItem?.high ?? null,
        low: forecastItem?.templow ?? forecastItem?.low ?? forecastItem?.temperature_low ?? null
      }))
      : null
  });
}
