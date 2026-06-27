import {
  buildWeatherForecastRequestMessage,
  buildWeatherForecastSubscriptionMessage,
  isWeatherEntityId
} from './weather-service.js';

const DEFAULT_RETRY_DELAY_MS = 5 * 60 * 1000;

export class WeatherForecastController {
  constructor({
    getHass,
    getWeatherEntityId,
    onForecastUpdated = () => {},
    now = () => Date.now(),
    requestForecast = null,
    subscribeForecast = null,
    retryDelayMs = DEFAULT_RETRY_DELAY_MS
  } = {}) {
    this.getHass = getHass || (() => null);
    this.getWeatherEntityId = getWeatherEntityId || (() => null);
    this.onForecastUpdated = onForecastUpdated;
    this.now = now;
    this.requestForecast = requestForecast;
    this.subscribeForecast = subscribeForecast;
    this.retryDelayMs = retryDelayMs;

    this.forecastByEntity = new Map();
    this.subscriptionEntityId = null;
    this.unsubscribe = null;
    this.subscriptionInFlight = null;
    this.subscriptionInFlightEntityId = null;
    this.subscriptionGeneration = 0;
    this.refreshInFlight = false;
    this.refreshRetryAtByEntity = new Map();
  }

  getActiveWeatherEntityId() {
    const entityId = this.getWeatherEntityId();
    return isWeatherEntityId(entityId) ? entityId : null;
  }

  handleConfigChanged(previousEntityId, nextEntityId) {
    if (previousEntityId !== nextEntityId) {
      this.teardownSubscription();
      this.clearForecasts();
      this.clearRetryTimes();
    }
  }

  clearForecasts() {
    this.forecastByEntity.clear();
  }

  clearRetryTimes() {
    this.refreshRetryAtByEntity.clear();
  }

  getForecastForEntity(entityId) {
    return this.forecastByEntity.get(entityId);
  }

  getRenderSignature(entityId) {
    const forecast = this.getForecastForEntity(entityId);
    return JSON.stringify(Array.isArray(forecast) ? forecast : null);
  }

  teardownSubscription() {
    this.subscriptionGeneration += 1;
    if (typeof this.unsubscribe === 'function') {
      this.unsubscribe();
    }
    this.unsubscribe = null;
    this.subscriptionEntityId = null;
    this.subscriptionInFlight = null;
    this.subscriptionInFlightEntityId = null;
  }

  async ensureSubscription() {
    const entityId = this.getActiveWeatherEntityId();
    if (!entityId) {
      this.teardownSubscription();
      return undefined;
    }

    const hass = this.getHass();
    const subscribeForecast = this.subscribeForecast || hass?.connection?.subscribeMessage?.bind(hass.connection);
    if (typeof subscribeForecast !== 'function') {
      return undefined;
    }

    if (this.subscriptionEntityId === entityId && this.unsubscribe) {
      return undefined;
    }

    if (this.subscriptionInFlight && this.subscriptionInFlightEntityId === entityId) {
      return this.subscriptionInFlight;
    }

    this.teardownSubscription();
    const subscriptionGeneration = this.subscriptionGeneration;
    this.subscriptionInFlightEntityId = entityId;

    const setupPromise = subscribeForecast(
      (message) => {
        const nextForecast = Array.isArray(message?.forecast) ? message.forecast : [];
        this.forecastByEntity.set(entityId, nextForecast);
        this.onForecastUpdated(entityId, nextForecast, { source: 'subscription' });
      },
      buildWeatherForecastSubscriptionMessage(entityId)
    )
      .then((unsubscribe) => {
        const generationMatches = subscriptionGeneration === this.subscriptionGeneration;
        const entityMatches = entityId === this.subscriptionInFlightEntityId;
        if (!generationMatches || !entityMatches) {
          if (typeof unsubscribe === 'function') {
            unsubscribe();
          }
          return;
        }

        this.unsubscribe = unsubscribe;
        this.subscriptionEntityId = entityId;
      })
      .catch(() => {
        if (subscriptionGeneration === this.subscriptionGeneration) {
          this.unsubscribe = null;
          this.subscriptionEntityId = null;
        }
      })
      .finally(() => {
        if (subscriptionGeneration === this.subscriptionGeneration) {
          this.subscriptionInFlight = null;
          this.subscriptionInFlightEntityId = null;
        }
      });

    this.subscriptionInFlight = setupPromise;
    return setupPromise;
  }

  async refreshForecastData() {
    const entityId = this.getActiveWeatherEntityId();
    if (!entityId) return undefined;
    const hass = this.getHass();
    if (!hass || this.refreshInFlight) return undefined;
    if (this.forecastByEntity.has(entityId)) return undefined;
    const now = this.now();
    const retryAt = this.refreshRetryAtByEntity.get(entityId) || 0;
    if (retryAt > now) return undefined;

    const requestForecast = this.requestForecast || ((message) => hass.callWS(message));
    if (typeof requestForecast !== 'function') return undefined;

    this.refreshInFlight = true;
    try {
      const wsResponse = await requestForecast(buildWeatherForecastRequestMessage(entityId));
      const dailyForecast = wsResponse?.[entityId]?.forecast;
      if (Array.isArray(dailyForecast)) {
        this.forecastByEntity.set(entityId, dailyForecast);
        this.refreshRetryAtByEntity.delete(entityId);
        this.onForecastUpdated(entityId, dailyForecast, { source: 'refresh' });
      }
    } catch (error) {
      this.refreshRetryAtByEntity.set(entityId, now + this.retryDelayMs);
    } finally {
      this.refreshInFlight = false;
    }
    return undefined;
  }
}

export function createWeatherForecastController(dependencies) {
  return new WeatherForecastController(dependencies);
}
