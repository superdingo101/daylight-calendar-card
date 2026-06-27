export function isWeatherEntityId(entityId) {
  return !!entityId && entityId.startsWith('weather.');
}

export function buildWeatherForecastSubscriptionMessage(entityId, forecastType = 'daily') {
  return {
    type: 'weather/subscribe_forecast',
    entity_id: entityId,
    forecast_type: forecastType
  };
}

export function buildWeatherForecastRequestMessage(entityId, forecastType = 'daily') {
  return {
    type: 'weather/get_forecasts',
    entity_ids: [entityId],
    forecast_type: forecastType
  };
}
