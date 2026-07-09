import { COMMON_NAMED_COLORS } from './constants.js';
import { registerDaylightCalendarCardEditor } from './editor/daylight-calendar-card-editor.js';
import './components/daylight-color-picker.js';
import { getDaylightCalendarCardVersion } from './version.js';
import { getCardStyles } from './styles/card-styles.js';
import {
  createDefaultStubConfig,
  DEFAULT_COMBINE_BACKGROUND,
  DEFAULT_CONFIG_VALUES,
  DEFAULT_EVENT_COLOR_BAR_WIDTH,
  DEFAULT_EVENT_NEUTRAL_BACKGROUND,
  DEFAULT_EVENT_TINT_OPACITY,
  DEFAULT_LANGUAGE,
  DEFAULT_THEME_MODE,
  DEFAULT_VIEW
} from './defaults.js';
import { TRANSLATIONS } from './translations.js';
import { createConfigNormalizationSchema } from './editor/editor-schema.js';
import {
  renderDayBadges as renderDayBadgesHtml,
  renderDayForecast as renderDayForecastHtml
} from './renderers/day-weather-renderer.js';
import {
  normalizeDayBadgeBlock as normalizeDayBadgeBlockHelper,
  normalizeDayBadgeConditions as normalizeDayBadgeConditionsHelper,
  normalizeDayBadgeDisplayColor as normalizeDayBadgeDisplayColorHelper,
  normalizeDayBadges as normalizeDayBadgesHelper,
  normalizeResolvedDayBadgeDisplayColor as normalizeResolvedDayBadgeDisplayColorHelper,
  isFullValueTemplate as isFullValueTemplateHelper,
  parseEventDescriptionJson as parseEventDescriptionJsonHelper,
  buildDayBadgeResolutionContext as buildDayBadgeResolutionContextHelper,
  resolveSafePath as resolveSafePathHelper,
  resolveDayBadgeDisplayValue as resolveDayBadgeDisplayValueHelper,
  resolveDayBadgeForRender as resolveDayBadgeForRenderHelper
} from './badges/day-badges.js';
import {
  formatLocalDate,
  getDateRangeChunks,
  getIsoWeekNumber,
  parseLocalDate,
  parsePossiblyLocalDateTime
} from './utils/date-utils.js';
import {
  normalizeBooleanStyleValue,
  normalizeDashboardPath,
  normalizeEntityStringMap,
  normalizeEnumValue
} from './utils/normalization-utils.js';
import {
  blendRgb as blendRgbHelper,
  colorToHex as colorToHexHelper,
  colorWithAlpha as colorWithAlphaHelper,
  getContrastColor as getContrastColorHelper,
  normalizeColorMap as normalizeColorMapHelper,
  normalizeSingleColor as normalizeSingleColorHelper,
  parseColorToRgb as parseColorToRgbHelper
} from './utils/color-utils.js';
import {
  normalizeBackgroundOpacity as normalizeBackgroundOpacityHelper,
  normalizeCombineBackground as normalizeCombineBackgroundHelper,
  normalizeCombineStyle as normalizeCombineStyleHelper,
  normalizeDayBadgeLayoutWeek as normalizeDayBadgeLayoutWeekHelper,
  normalizeDefaultHiddenCalendars as normalizeDefaultHiddenCalendarsHelper,
  normalizeEventColorMode as normalizeEventColorModeHelper,
  normalizeEventModalSize as normalizeEventModalSizeHelper,
  normalizeEventTitlePrefixMode as normalizeEventTitlePrefixModeHelper,
  normalizePastEventMode as normalizePastEventModeHelper,
  normalizeThemeMode as normalizeThemeModeHelper
} from './config/config-normalizers.js';
import { escapeHtmlAttribute, normalizeEventTextValue } from './utils/string-utils.js';
import {
  detectStaleSkylightResource,
  STALE_RESOURCE_TROUBLESHOOTING_URL,
  STALE_RESOURCE_WARNING_STORAGE_KEY
} from './utils/stale-resource-utils.js';
import {
  getEventDateTimeInfo as getNormalizedEventDateTimeInfo,
  getEventIdentityKey as getNormalizedEventIdentityKey,
  getEventStartDate as getNormalizedEventStartDate,
  normalizeCalendarEvent
} from './events/event-normalizer.js';
import {
  dateMatchesDayCondition as matchDateDayCondition,
  dayMatchesNormalizedRule as matchNormalizedDayRule,
  eventFieldMatches as matchEventField,
  eventMatchesNormalizedRule as matchNormalizedEventRule,
  findMatchingEventForCondition as findRuleMatchingEvent,
  matchesAdvancedRule as matchAdvancedRule,
  matchPrimitiveCondition as matchPrimitiveRuleCondition,
  matchTextCondition as matchRuleTextCondition,
  parseRegexCondition as parseRuleRegexCondition
} from './rules/condition-matcher.js';
import {
  getEmptyAdvancedMatch as createEmptyAdvancedMatch,
  normalizeAdvancedRuleMatch as normalizeRuleMatch,
  normalizeDayMatchConditions as normalizeRuleDayMatchConditions,
  normalizeEventMatchConditions as normalizeRuleEventMatchConditions,
  normalizeLegacyDayStyleMatch as normalizeRuleLegacyDayStyleMatch
} from './rules/style-rules.js';
import {
  getWeatherEntityForecast,
  mapWeatherConditionToIcon as mapWeatherConditionToIconHelper,
  normalizeForecastForDate,
  normalizeWeatherTemperature as normalizeWeatherTemperatureHelper
} from './weather/weather-utils.js';
import {
  getEntityRenderSignature as getEntityRenderSignatureHelper,
  getFormattedHeaderSensorTime as getFormattedHeaderSensorTimeHelper,
  getHeaderEntityRenderSignatureFromState,
  getHeaderWeatherDisplayData,
  getPersonEntityPictureUrl as getPersonEntityPictureUrlHelper,
  getPersonStateLabel as getPersonStateLabelHelper
} from './ha/ha-state-helpers.js';
import { createWeatherForecastController } from './weather/weather-controller.js';
import {
  buildRRuleFromInputs as buildRRuleFromInputsHelper,
  normalizeEventFormData,
  resolveTimedEventRange as resolveTimedEventRangeHelper
} from './events/event-form.js';
import {
  buildCreateEventWebSocketPayload,
  buildDeleteEventPayload,
  buildDeleteEventWebSocketPayload,
  buildEventServiceData,
  buildUpdateEventServiceData,
  buildUpdateEventWebSocketPayload,
  getRecurringUpdateControls
} from './events/event-service.js';
import {
  getDisplayLocation as getDisplayLocationHelper,
  getEventBubbleFontColor as getEventBubbleFontColorHelper,
  getEventFontSizeDisplayValue,
  getModalCalendarBadgesForEvent as getModalCalendarBadgesForEventHelper,
  getScheduleVisualInfo as getScheduleVisualInfoHelper,
  getVisibleCalendarBadgesForEvent as getVisibleCalendarBadgesForEventHelper,
  isCombinedEventWithinSingleVirtualCalendar as isCombinedEventWithinSingleVirtualCalendarHelper,
  shouldShowCombinedCornerBubbles as shouldShowCombinedCornerBubblesHelper,
  shouldShowEventLocation as shouldShowEventLocationHelper,
  shouldShowEventTime as shouldShowEventTimeHelper
} from './events/event-display.js';
import {
  fetchEventsByCalendarInRange as fetchEventsByCalendarInRangeHelper,
  fetchEventsForCalendar as fetchEventsForCalendarHelper,
  fetchEventsForChunk as fetchEventsForChunkHelper,
  fetchEventsViaWebSocket as fetchEventsViaWebSocketHelper,
  getCalendarDataSignature as getCalendarDataSignatureHelper,
  isDateRangeCoveredByLoadedEvents as isDateRangeCoveredByLoadedEventsHelper,
  mergeEvents as mergeEventsHelper,
  shouldRefreshEvents as shouldRefreshEventsHelper,
  sortEventsByStartDate as sortEventsByStartDateHelper,
  toStableString as toStableStringHelper
} from './events/event-fetcher.js';
import { buildContinuousDaySpanLayout } from './events/continuous-day-span-layout.js';
import {
  buildEventCacheConfigSignature,
  clearAllEventCacheSnapshots,
  createEventCacheSnapshot,
  readEventCacheSnapshot,
  writeEventCacheSnapshot
} from './events/event-cache.js';
import { getMonthVisibleDateRange } from './views/month-view-model.js';
import {
  getRollingDaysForView as getRollingDaysForViewModel,
  getWeekDays as getWeekDaysViewModel,
  getWeekVisibleDateRange
} from './views/week-view-model.js';
import {
  createAgendaWindow,
  getAgendaDays as getAgendaDaysViewModel,
  getAgendaPeriodDaySpan as getAgendaPeriodDaySpanViewModel,
  getAgendaRollingDays as getAgendaRollingDaysViewModel,
  getAgendaVisibleDateRange,
  isAgendaRangeWithinWindow
} from './views/agenda-view-model.js';
import { renderAgendaView } from './renderers/agenda-renderer.js';
import { renderEventDetailsModal } from './renderers/event-modal-renderer.js';
import {
  applyCustomEventColor,
  createEmptyCustomEventColors,
  getCustomEventColorKeys,
  normalizeCustomEventColors,
  normalizeHexColor as normalizeCustomEventHexColor,
  removeCustomEventColor,
  resolveCustomEventColor
} from './events/custom-event-colors.js';
import {
  renderCombinedCornerBubbles as renderCombinedCornerBubblesHtml,
  renderEventIcon as renderEventIconHtml,
  renderEventStyleCornerIcon as renderEventStyleCornerIconHtml,
  renderEventStyleIcon as renderEventStyleIconHtml,
  renderEventTitleWithPrefix as renderEventTitleWithPrefixHtml
} from './renderers/event-renderer.js';
import {
  renderCalendarBadgeIcon as renderCalendarBadgeIconMarkup,
  renderCalendarBadgeLabel as renderCalendarBadgeLabelMarkup,
  renderCalendarBadges as renderCalendarBadgesMarkup,
  renderCalendarBadgesInline as renderCalendarBadgesInlineMarkup
} from './renderers/calendar-badge-renderer.js';
import { renderCreateEventForm, renderEditEventForm } from './renderers/event-form-renderer.js';
import {
  renderCompactHeader as renderCompactHeaderMarkup,
  renderDashboardNavButton as renderDashboardNavButtonMarkup,
  renderHeaderTitle as renderHeaderTitleMarkup,
  renderPeriodNavigationButtons as renderPeriodNavigationButtonsMarkup,
  renderStandardHeader as renderStandardHeaderMarkup,
  renderThemeToggle as renderThemeToggleMarkup,
  renderViewModeButtons as renderViewModeButtonsMarkup
} from './renderers/header-renderer.js';
import { renderDayCell } from './renderers/day-cell-renderer.js';
import { renderWeekCompactView } from './renderers/week-compact-renderer.js';
import { renderWeekStandardView } from './renderers/week-standard-renderer.js';
import {
  renderMonthDayHeaders,
  renderMonthDays,
  renderMonthView
} from './renderers/month-renderer.js';
import {
  getCalendarBadgePersonEntityId as getCalendarBadgePersonEntityIdHelper,
  getCalendarColor as getCalendarColorHelper,
  getCalendarName as getCalendarNameHelper,
  getVirtualBadgeById as getVirtualBadgeByIdHelper,
  getVirtualBadgeForEntity as getVirtualBadgeForEntityHelper,
  getVirtualBadgeForEvent as getVirtualBadgeForEventHelper,
  getVirtualBadgeItems as getVirtualBadgeItemsHelper,
  getWritableCalendars as getWritableCalendarsHelper,
  normalizeVirtualCalendars as normalizeVirtualCalendarsHelper
} from './calendars/calendar-entities.js';

console.info(`Daylight Calendar Card ${getDaylightCalendarCardVersion()} loaded from skylight-calendar-card.js`);

// ============================================================================
// TRANSLATION HELPER FUNCTIONS
// ============================================================================

const normalizeLanguage = (language) => {
  if (!language) return DEFAULT_LANGUAGE;
  return language.toLowerCase().split('-')[0];
};

const resolveLanguage = (language) => {
  const normalized = normalizeLanguage(language);
  return TRANSLATIONS[normalized] ? normalized : DEFAULT_LANGUAGE;
};

const interpolate = (template, params = {}) =>
  template.replace(/\{(\w+)\}/g, (_, key) => (params[key] !== undefined ? params[key] : ''));

const translate = (language, key, params = {}) => {
  const resolved = resolveLanguage(language);
  const fallbackStrings = TRANSLATIONS[DEFAULT_LANGUAGE]?.strings || {};
  const strings = TRANSLATIONS[resolved]?.strings || fallbackStrings;
  const fallback = fallbackStrings[key] || key;
  return interpolate(strings[key] || fallback, params);
};


const STALE_RESOURCE_BANNER_ID = 'daylight-calendar-card-stale-resource-warning';
let staleResourceWarningHandled = false;

const logStaleResourceWarning = (staleUrl) => {
  console.warn(
    `Daylight Calendar Card: old Skylight resource detected${staleUrl ? ` (${staleUrl})` : ''}. ` +
    'Remove it from Settings → Dashboards → Resources and keep /hacsfiles/daylight-calendar-card/skylight-calendar-card.js. ' +
    'The filename may still be skylight-calendar-card.js; the important part is the daylight-calendar-card folder.'
  );
};

const isStaleResourceWarningDismissed = () => {
  try {
    return window.localStorage?.getItem(STALE_RESOURCE_WARNING_STORAGE_KEY) === 'true';
  } catch (_error) {
    return false;
  }
};

const dismissStaleResourceWarning = (banner) => {
  try {
    window.localStorage?.setItem(STALE_RESOURCE_WARNING_STORAGE_KEY, 'true');
  } catch (_error) {
    // Ignore storage failures; the banner can still be dismissed for this page view.
  }
  banner?.remove?.();
};

const showStaleResourceWarningBanner = (staleUrl) => {
  if (isStaleResourceWarningDismissed() || document.getElementById?.(STALE_RESOURCE_BANNER_ID)) return;

  const banner = document.createElement('div');
  banner.id = STALE_RESOURCE_BANNER_ID;
  banner.setAttribute('role', 'status');
  banner.style.cssText = [
    'position: fixed',
    'left: 0',
    'right: 0',
    'bottom: 0',
    'z-index: 2147483647',
    'box-sizing: border-box',
    'width: 100%',
    'display: flex',
    'align-items: center',
    'gap: 12px',
    'padding: 12px 16px',
    'background: #323232',
    'color: #fff',
    'box-shadow: 0 3px 8px rgba(0, 0, 0, 0.32)',
    'font-family: var(--primary-font-family, Roboto, Arial, sans-serif)',
    'font-size: 14px',
    'line-height: 1.35',
    'pointer-events: auto'
  ].join(';');

  const message = document.createElement('span');
  message.textContent = 'Old Skylight Calendar Card resource detected. Remove it from Settings → Dashboards → Resources.';
  message.style.cssText = 'min-width: 0; flex: 1 1 auto;';
  if (staleUrl) {
    message.title = staleUrl;
  }
  const docsLink = document.createElement('a');
  docsLink.href = STALE_RESOURCE_TROUBLESHOOTING_URL;
  docsLink.target = '_blank';
  docsLink.rel = 'noreferrer';
  docsLink.textContent = 'Help';
  docsLink.style.cssText = [
    'color: #bbdefb',
    'font-size: 12px',
    'font-weight: 500',
    'text-decoration: none',
    'white-space: nowrap'
  ].join(';');

  const dismissButton = document.createElement('button');
  dismissButton.type = 'button';
  dismissButton.textContent = 'Dismiss';
  dismissButton.style.cssText = [
    'border: 0',
    'background: transparent',
    'color: #90caf9',
    'font: inherit',
    'font-weight: 500',
    'text-transform: uppercase',
    'cursor: pointer',
    'padding: 4px',
    'white-space: nowrap'
  ].join(';');
  dismissButton.addEventListener('click', () => dismissStaleResourceWarning(banner));

  banner.append(message, docsLink, dismissButton);
  document.body?.appendChild?.(banner);
};

const checkAndShowStaleResourceWarning = () => {
  if (staleResourceWarningHandled) return;
  staleResourceWarningHandled = true;

  const detection = detectStaleSkylightResource();
  if (!detection.detected) return;

  logStaleResourceWarning(detection.staleUrl);
  showStaleResourceWarningBanner(detection.staleUrl);
};

// ============================================================================
// MAIN CALENDAR CARD CLASS
// ============================================================================

class SkylightCalendarCard extends HTMLElement {
  static COMMON_NAMED_COLORS = COMMON_NAMED_COLORS;
  static detectStaleSkylightResource = detectStaleSkylightResource;

  constructor() {
    super();
    this._root = this;
    this._config = {};
    this._events = [];
    this._eventsByCalendar = {};
    this._eventCacheGeneration = 0;
    this._eventFetchGeneration = 0;
    this._eventWriteGeneration = 0;
    this._pendingEventRefreshAfterCurrentFetch = false;
    this._eventCacheMutationQueue = Promise.resolve();
    this._eventRefreshWarningTimer = null;
    this._eventCacheHydrated = false;
    this._lastSuccessfulEventRefresh = null;
    this._lastEventRefreshFailed = false;
    this._calendarEventMetadata = {};
    this._currentDate = new Date();
    this._viewMode = DEFAULT_VIEW; // 'month', 'week-compact', 'week-standard', or 'agenda'
    this._weekStart = new Date();
    this._fetching = false;
    this._lastFetch = null;
    this._loadedEventRange = null;
    this._calendarDataSignatures = {}; // Track per-calendar data for change detection
    this._lastUnchangedDataRender = null; // Throttle unchanged-data UI refreshes
    this._hiddenCalendars = new Set(); // Track which calendars are hidden
    this._customEventColors = createEmptyCustomEventColors();
    this._calendarCapabilities = {}; // Track calendar capabilities
    this._activeLanguage = DEFAULT_LANGUAGE;
    this._hasCustomTitle = false;
    this._isDarkMode = false;
    this._themeMode = DEFAULT_THEME_MODE;
    this._systemThemeMediaQuery = null;
    this._handleSystemThemeChange = (event) => {
      if (this._themeMode !== DEFAULT_THEME_MODE) {
        return;
      }

      this._isDarkMode = !!event.matches;
      this.render();
    };
    this._weekStandardFixedOffsetHeight = null;
    this._weekStandardExtraHeaderHeight = 0;
    this._weekStandardHeaderHeight = null;
    this._weekCompactHeaderHeight = null;
    this._weekStandardContainerTopInViewport = null;
    this._monthContainerTopInViewport = null;
    this._agendaContainerTopInViewport = null;
    this._agendaStartDate = null;
    this._agendaEndDate = null;
    this._agendaVisibleStartDate = null;
    this._agendaVisibleEndDate = null;
    this._agendaDaysPerScrollLoad = 7;
    this._agendaScrollLoadLock = false;
    this._agendaSuppressScrollHandling = false;
    this._agendaPendingScrollTop = null;
    this._swipeStartX = null;
    this._swipeStartY = null;
    this._swipeTracking = false;
    this._swipeStartedOnInteractive = false;
    this._dayBadgeActions = new Map();
    this._dayBadgeActionSequence = 0;
    this._activeModalBackHandler = null;
    this._combinedEditTargets = null;
    this._combinedDeleteTargets = null;
    this._customColorContext = null;
    this._eventLocationActionsExpanded = false;
    this._pendingHeaderSensorRender = false;
    this._weatherForecastController = createWeatherForecastController({
      getHass: () => this._hass,
      getWeatherEntityId: () => this._config?.header_weather_sensor,
      onForecastUpdated: () => {
        if (!this.isEventManagementDialogOpen()) {
          this.renderPreservingAgendaScroll();
        } else {
          this._pendingHeaderSensorRender = true;
        }
      }
    });
    this._modalVisibilityObserver = null;
    this._monthMeasureRaf = null;
    this._monthMeasureRenderRaf = null;
    this._wrapMeasureRaf1 = null;
    this._wrapMeasureRaf2 = null;
    this._monthGridResizeObserver = null;
    this._headerResizeObserver = null;
    this._hostResizeObserver = null;
    this._hostResizeRaf = null;
    this._pendingHostResizeRender = false;
    this._pendingWidthDependentLayoutRefresh = false;
    this._observedResizeParent = null;
    this._lastObservedHostSize = null;
    this._monthCompactMeasurementDirty = true;
    this._lastCompactMonthViewportHeight = null;
    this._handleEventCacheFlush = () => this.flushEventCache({ refresh: true });
    this._handleViewportResize = () => {
      if (this.isEventManagementDialogOpen()) {
        return;
      }

      if (this._config.compact_height && (this._viewMode === 'week-standard' || this._viewMode === 'agenda')) {
        this.render();
        return;
      }

      if (this._viewMode === 'month' && this._config.compact_height && !this.shouldShowAllEventsInMonth()) {
        this._monthCompactMeasurementDirty = true;
        this.scheduleMonthCompactTopMeasurement();
        return;
      }

      this.updateCompactHeaderWrapState();
      this.updateCalendarBadgesScrollState();
      this.refreshWidthDependentLayoutMeasurements();
    };
  }

  getRootElementById(id) {
    return this._root?.querySelector(`#${id}`) || null;
  }

  shouldShowAllEventsInMonth() {
    return !!(this._config?.show_all_events_month || this._config?.show_all_details_month);
  }

  shouldRenderMonthEventsAsWeekCompact() {
    return this._viewMode === 'month' && !!this._config?.show_all_details_month;
  }

  getDashboardScopeKey() {
    const pathnameSegments = (window.location?.pathname || '').split('/').filter(Boolean);
    if (pathnameSegments.length > 0) {
      return pathnameSegments[0];
    }

    const hashPath = (window.location?.hash || '').replace(/^#/, '');
    const hashSegments = hashPath.split('/').filter(Boolean);
    if (hashSegments.length > 0) {
      return hashSegments[0];
    }

    return 'default';
  }

  getPreferenceStorageKey() {
    const dashboardScope = this.getDashboardScopeKey();
    const baseKey = this._config.preference_storage_key || (this._config.entities || []).join('|');

    if (!baseKey) {
      return null;
    }

    return `skylight-calendar-card:${dashboardScope}:${baseKey}`;
  }

  normalizeDashboardPath(pathValue) {
    return normalizeDashboardPath(pathValue);
  }

  getConfiguredDashboardPath() {
    return this.normalizeDashboardPath(this._config?.header_dashboard_path);
  }

  shouldShowDashboardNavButton() {
    return !!(this._config?.show_dashboard_nav_button && this.getConfiguredDashboardPath());
  }

  normalizeEnumValue(value, options) {
    return normalizeEnumValue(value, options);
  }

  normalizeDefaultDarkMode(value) {
    return normalizeThemeModeHelper(value);
  }

  normalizeEventTitlePrefixMode(value) {
    return normalizeEventTitlePrefixModeHelper(value);
  }

  normalizePastEventMode(value) {
    return normalizePastEventModeHelper(value);
  }

  normalizeDayBadgeLayoutWeek(value) {
    return normalizeDayBadgeLayoutWeekHelper(value);
  }

  normalizeEntityStringMap(value) {
    return normalizeEntityStringMap(value);
  }

  normalizeBooleanStyleValue(value) {
    return normalizeBooleanStyleValue(value);
  }

  applyThemeMode(mode = this._themeMode) {
    this._themeMode = this.normalizeDefaultDarkMode(mode);

    if (this._themeMode === 'dark') {
      this._isDarkMode = true;
      return;
    }

    if (this._themeMode === 'light') {
      this._isDarkMode = false;
      return;
    }

    const mediaQuery = window.matchMedia?.('(prefers-color-scheme: dark)');
    this._isDarkMode = !!mediaQuery?.matches;
  }

  attachSystemThemeListener() {
    const mediaQuery = window.matchMedia?.('(prefers-color-scheme: dark)');
    if (!mediaQuery || this._systemThemeMediaQuery === mediaQuery) {
      return;
    }

    this.detachSystemThemeListener();
    this._systemThemeMediaQuery = mediaQuery;

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', this._handleSystemThemeChange);
    } else if (typeof mediaQuery.addListener === 'function') {
      mediaQuery.addListener(this._handleSystemThemeChange);
    }
  }

  detachSystemThemeListener() {
    if (!this._systemThemeMediaQuery) {
      return;
    }

    if (typeof this._systemThemeMediaQuery.removeEventListener === 'function') {
      this._systemThemeMediaQuery.removeEventListener('change', this._handleSystemThemeChange);
    } else if (typeof this._systemThemeMediaQuery.removeListener === 'function') {
      this._systemThemeMediaQuery.removeListener(this._handleSystemThemeChange);
    }

    this._systemThemeMediaQuery = null;
  }

  getDefaultHiddenCalendarSet() {
    const knownEntities = new Set(this._config.entities || []);
    return new Set((this._config.default_hidden_calendars || []).filter((entityId) => knownEntities.has(entityId)));
  }

  normalizeDefaultHiddenCalendars(config = {}) {
    return normalizeDefaultHiddenCalendarsHelper(config);
  }

  loadPersistedPreferences() {
    this._customEventColors = createEmptyCustomEventColors();
    const storageKey = this.getPreferenceStorageKey();
    if (!storageKey) return false;

    try {
      const raw = window.localStorage?.getItem(storageKey);
      if (!raw) return false;

      const parsed = JSON.parse(raw);

      let loaded = false;
      if (Array.isArray(parsed.hiddenCalendars)) {
        const knownEntities = new Set(this._config.entities || []);
        this._hiddenCalendars = new Set(parsed.hiddenCalendars.filter((entityId) => knownEntities.has(entityId)));
        loaded = true;
      }
      if (parsed.customEventColors !== undefined) {
        this._customEventColors = normalizeCustomEventColors(parsed.customEventColors);
        loaded = true;
      }
      if (loaded) return true;
    } catch (error) {
      console.warn('Failed to load persisted calendar preferences:', error);
    }

    return false;
  }

  persistPreferences() {
    const storageKey = this.getPreferenceStorageKey();
    if (!storageKey) return;

    try {
      const payload = {
        hiddenCalendars: Array.from(this._hiddenCalendars),
        customEventColors: normalizeCustomEventColors(this._customEventColors)
      };
      window.localStorage?.setItem(storageKey, JSON.stringify(payload));
    } catch (error) {
      console.warn('Failed to persist calendar preferences:', error);
    }
  }

  updateCompactHeaderWrapState() {
    if (!this._root) return;
    if (typeof window.requestAnimationFrame !== 'function') {
      this.measureAndApplyHeaderWrapState();
      return;
    }
    if (this._wrapMeasureRaf1 !== null) window.cancelAnimationFrame(this._wrapMeasureRaf1);
    if (this._wrapMeasureRaf2 !== null) window.cancelAnimationFrame(this._wrapMeasureRaf2);
    this._wrapMeasureRaf1 = window.requestAnimationFrame(() => {
      this._wrapMeasureRaf1 = null;
      this._wrapMeasureRaf2 = window.requestAnimationFrame(() => {
        this._wrapMeasureRaf2 = null;
        this.measureAndApplyHeaderWrapState();
      });
    });
  }

  shouldMarkWrappedFromChildren(children) {
    const visibleChildren = children.filter((child) => child.offsetParent !== null);
    if (visibleChildren.length <= 1) return false;
    const firstTop = visibleChildren[0].offsetTop;
    return visibleChildren.some((child) => Math.abs(child.offsetTop - firstTop) > 1);
  }



  getElementContentWidth(element) {
    if (!element) return 0;

    const computed = window.getComputedStyle(element);
    const paddingLeft = parseFloat(computed.paddingLeft) || 0;
    const paddingRight = parseFloat(computed.paddingRight) || 0;

    return Math.max(0, element.clientWidth - paddingLeft - paddingRight);
  }

  getOuterWidth(element) {
    if (!element) return 0;

    const rect = element.getBoundingClientRect();
    const computed = window.getComputedStyle(element);
    const marginLeft = parseFloat(computed.marginLeft) || 0;
    const marginRight = parseFloat(computed.marginRight) || 0;

    return rect.width + marginLeft + marginRight;
  }

  measureNaturalGroupWidth(group) {
    if (!group) return 0;

    const computed = window.getComputedStyle(group);
    const children = Array.from(group.children || [])
      .filter((child) => child.offsetParent !== null);

    if (!children.length) {
      return Math.ceil(group.scrollWidth || 0);
    }

    const childWidths = children.reduce((sum, child) => {
      return sum + this.getOuterWidth(child);
    }, 0);

    const internalGap = parseFloat(computed.columnGap)
      || parseFloat(computed.gap)
      || 0;

    return Math.ceil(childWidths + internalGap * Math.max(children.length - 1, 0));
  }

  shouldMarkHeaderWrappedFromWidth(header, leftGroup, controlsGroup) {
    if (!header || !leftGroup || !controlsGroup) return false;

    const computedStyle = window.getComputedStyle(header);
    const gap = parseFloat(computedStyle.columnGap)
      || parseFloat(computedStyle.gap)
      || 0;
    const requiredWidth = this.measureNaturalGroupWidth(leftGroup)
      + this.measureNaturalGroupWidth(controlsGroup)
      + gap;
    const availableWidth = this.getElementContentWidth(header);
    const tolerance = 2;

    return requiredWidth > (availableWidth + tolerance);
  }

  getUnwrappedHeaderMeasurementElements(header) {
    if (!header || typeof header.cloneNode !== 'function') return null;

    const parent = header.parentNode || this._root;
    if (typeof parent?.appendChild !== 'function') return null;

    const clone = header.cloneNode(true);
    if (!clone) return null;

    clone.classList?.remove?.('is-wrapped');
    clone.querySelector?.('.header-controls')?.classList?.remove?.('is-wrapped');
    clone.querySelector?.('.compact-header-controls')?.classList?.remove?.('is-wrapped');
    clone.querySelector?.('.calendar-badges-inline')?.classList?.remove?.('is-wrapped');

    if (clone.style) {
      const width = header.getBoundingClientRect?.().width || header.clientWidth || 0;
      clone.style.position = 'absolute';
      clone.style.visibility = 'hidden';
      clone.style.pointerEvents = 'none';
      clone.style.left = '-10000px';
      clone.style.top = '0';
      clone.style.height = 'auto';
      clone.style.maxHeight = 'none';
      clone.style.overflow = 'visible';
      if (width > 0) clone.style.width = `${width}px`;
    }

    parent.appendChild(clone);
    return {
      clone,
      leftGroup: this._config.compact_header
        ? clone.querySelector?.('.compact-header-left')
        : clone.querySelector?.('.header-left'),
      controlsGroup: this._config.compact_header
        ? clone.querySelector?.('.compact-header-controls')
        : clone.querySelector?.('.header-controls')
    };
  }


  shouldMarkGroupWrappedFromWidth(group) {
    if (!group) return false;

    const requiredWidth = this.measureNaturalGroupWidth(group);
    const availableWidth = this.getElementContentWidth(group);
    const tolerance = 2;

    return requiredWidth > (availableWidth + tolerance);
  }

  setClassStateIfChanged(element, className, shouldHaveClass) {
    if (!element?.classList) return;
    if (element.classList.contains(className) === shouldHaveClass) return;
    element.classList.toggle(className, shouldHaveClass);
  }

  measureAndApplyHeaderWrapState() {
    if (!this._root) return;

    const headerSelector = this._config.compact_header ? '.header-compact' : '.header';
    const controlsSelector = this._config.compact_header ? '.compact-header-controls' : '.header-controls';
    const header = this._root.querySelector(headerSelector);
    const controls = this._root.querySelector(controlsSelector);
    const badges = this._root.querySelector('.calendar-badges-inline');

    if (header) {
      const liveLeftGroup = this._config.compact_header
        ? header.querySelector('.compact-header-left')
        : header.querySelector('.header-left');
      const liveControlsGroup = this._config.compact_header
        ? header.querySelector('.compact-header-controls')
        : header.querySelector('.header-controls');
      const probe = this.getUnwrappedHeaderMeasurementElements(header);
      let shouldWrapHeader = false;
      let shouldWrapControls = false;
      try {
        const leftGroup = probe?.leftGroup || liveLeftGroup;
        const controlsGroup = probe?.controlsGroup || liveControlsGroup;
        shouldWrapHeader = this.shouldMarkHeaderWrappedFromWidth(header, leftGroup, controlsGroup);
        shouldWrapControls = controls ? this.shouldMarkGroupWrappedFromWidth(probe?.controlsGroup || controls) : false;
      } finally {
        probe?.clone?.remove?.();
      }

      this.setClassStateIfChanged(header, 'is-wrapped', shouldWrapHeader);
      if (controls) {
        this.setClassStateIfChanged(controls, 'is-wrapped', shouldWrapControls);
      }
    } else if (controls) {
      const shouldWrapControls = this.shouldMarkGroupWrappedFromWidth(controls);
      this.setClassStateIfChanged(controls, 'is-wrapped', shouldWrapControls);
    }

    if (this._config.compact_header && badges) {
      const shouldWrapBadges = this.shouldMarkWrappedFromChildren(Array.from(badges.children));
      this.setClassStateIfChanged(badges, 'is-wrapped', shouldWrapBadges);
    }
  }


  updateCalendarBadgesScrollState() {
    if (!this._root || this._config.compact_header) return;

    const badgesContainer = this._root.querySelector('.calendar-badges-container');
    const badges = this._root.querySelector('.calendar-badges');
    if (!badgesContainer || !badges) return;

    const maxScrollLeft = badges.scrollWidth - badges.clientWidth;
    const hasOverflow = maxScrollLeft > 1;
    const showLeftIndicator = hasOverflow && badges.scrollLeft > 1;
    const showRightIndicator = hasOverflow && badges.scrollLeft < (maxScrollLeft - 1);

    badgesContainer.classList.toggle('has-overflow', hasOverflow);
    badgesContainer.classList.toggle('show-left-indicator', showLeftIndicator);
    badgesContainer.classList.toggle('show-right-indicator', showRightIndicator);
  }

  isEventManagementDialogOpen() {
    const modal = this.getRootElementById('event-modal');
    return !!modal && modal.classList.contains('show');
  }

  getConfigNormalizationSchema() {
    return createConfigNormalizationSchema({
      hasCustomTitle: this._hasCustomTitle,
      normalizeDashboardPath: this.normalizeDashboardPath.bind(this),
      normalizeCombineStyle: this.normalizeCombineStyle.bind(this),
      normalizeCombineBackground: this.normalizeCombineBackground.bind(this),
      normalizeEventColorMode: this.normalizeEventColorMode.bind(this),
      normalizeSingleColor: this.normalizeSingleColor.bind(this),
      normalizeBackgroundOpacity: this.normalizeBackgroundOpacity.bind(this),
      normalizeEventModalSize: this.normalizeEventModalSize.bind(this),
      normalizeVirtualCalendars: this.normalizeVirtualCalendars.bind(this),
      normalizeDefaultDarkMode: this.normalizeDefaultDarkMode.bind(this),
      getDefaultTitle: (language) => translate(language, 'defaultTitle')
    });
  }

  getConfigNormalizationContext(rawConfig, language) {
    const normalizedDefaultView = rawConfig.default_view === 'week'
      ? 'week-compact'
      : rawConfig.default_view === 'schedule'
        ? 'week-standard'
        : rawConfig.default_view;
    const hasConfiguredHeaderBackgroundOpacity = rawConfig.header_background_opacity !== undefined && rawConfig.header_background_opacity !== null && rawConfig.header_background_opacity !== '';
    const normalizedHeaderBackgroundOpacity = hasConfiguredHeaderBackgroundOpacity
      ? this.normalizeBackgroundOpacity(rawConfig.header_background_opacity, 0)
      : (rawConfig.header_background_transparent ? 100 : 0);
    const hasConfiguredBackgroundOpacity = rawConfig.background_opacity !== undefined && rawConfig.background_opacity !== null && rawConfig.background_opacity !== '';
    const normalizedBackgroundOpacity = hasConfiguredBackgroundOpacity
      ? this.normalizeBackgroundOpacity(rawConfig.background_opacity, 0)
      : (rawConfig.background_transparent ? 100 : 0);
    const configuredWeekStartHour = Number(rawConfig.week_start_hour);
    const normalizedWeekStartHour = Number.isFinite(configuredWeekStartHour)
      ? Math.min(23, Math.max(0, configuredWeekStartHour))
      : 0;
    const configuredWeekEndHour = Number(rawConfig.week_end_hour);
    const normalizedWeekEndHour = Number.isFinite(configuredWeekEndHour)
      ? Math.min(23, Math.max(0, configuredWeekEndHour))
      : 23;
    const rawCombineWidth = Number(rawConfig.combine_calendars_width);
    const rawEventBarWidth = Number(rawConfig.event_color_bar_width);
    const hasCombineWidth = Number.isFinite(rawCombineWidth) && rawCombineWidth > 0;
    const hasEventBarWidth = Number.isFinite(rawEventBarWidth) && rawEventBarWidth > 0;
    const normalizedCombineWidth = hasCombineWidth
      ? rawCombineWidth
      : (hasEventBarWidth ? rawEventBarWidth : DEFAULT_EVENT_COLOR_BAR_WIDTH);

    return {
      normalizedDefaultView,
      normalizedCalendarColors: this.normalizeColorMap(rawConfig.colors || {}),
      normalizedEventFontColors: this.normalizeColorMap(rawConfig.event_font_colors || {}),
      normalizedEventStyles: this.normalizeEventStyles(rawConfig.event_styles || []),
      normalizedDayStyles: this.normalizeDayStyles(
        this.buildDayStyleRules(rawConfig),
        resolveLanguage(rawConfig.locale || rawConfig.language || this._hass?.locale?.language || this._hass?.language)
      ),
      normalizedDayBadges: this.normalizeDayBadges(rawConfig.day_badges || []),
      normalizedDayBadgeLayoutWeek: this.normalizeDayBadgeLayoutWeek(rawConfig.day_badge_layout_week),
      normalizedHeaderColor: this.normalizeSingleColor(rawConfig.header_color),
      normalizedHeaderTextColor: this.normalizeSingleColor(rawConfig.header_text_color),
      normalizedHeaderBackgroundOpacity,
      normalizedBackgroundOpacity,
      normalizedWeekStartHour,
      normalizedWeekEndHour,
      normalizedEventTitlePrefix: this.normalizeEventTitlePrefixMode(rawConfig.event_title_prefix),
      normalizedTimeZone: this.normalizeTimeZone(rawConfig.time_zone),
      normalizedPastEventMode: rawConfig.past_event_mode !== undefined && rawConfig.past_event_mode !== null && rawConfig.past_event_mode !== ''
        ? this.normalizePastEventMode(rawConfig.past_event_mode)
        : (rawConfig.hide_the_past ? 'hide' : 'none'),
      normalizedCombineWidth,
      normalizedEventBarWidth: hasEventBarWidth ? rawEventBarWidth : normalizedCombineWidth,
      normalizedCalendarPersonEntities: this.normalizeEntityStringMap(rawConfig.calendar_person_entities || {}),
      normalizedDefaultHiddenCalendars: this.normalizeDefaultHiddenCalendars(rawConfig),
      normalizedHeaderTimeSensor: typeof rawConfig.header_time_sensor === 'string' && rawConfig.header_time_sensor.trim()
        ? rawConfig.header_time_sensor.trim()
        : null,
      normalizedHeaderWeatherSensor: typeof rawConfig.header_weather_sensor === 'string' && rawConfig.header_weather_sensor.trim()
        ? rawConfig.header_weather_sensor.trim()
        : null,
      language
    };
  }

  normalizeConfig(rawConfig, language = resolveLanguage(rawConfig.language || this._hass?.language || this._hass?.locale?.language)) {
    const derived = this.getConfigNormalizationContext(rawConfig, language);
    const schemaContext = { rawConfig, language, derived };
    const schema = this.getConfigNormalizationSchema();
    const defaults = schema.reduce((acc, field) => {
      acc[field.key] = field.defaultValue(schemaContext);
      return acc;
    }, {});
    const normalizedOverrides = schema.reduce((acc, field) => {
      if (field.normalize) {
        acc[field.key] = field.normalize(schemaContext);
      }
      return acc;
    }, {});

    const normalizedConfig = {
      ...defaults,
      ...rawConfig,
      ...normalizedOverrides
    };
    if (!Object.prototype.hasOwnProperty.call(rawConfig, 'use_24hr_schedule')) {
      delete normalizedConfig.use_24hr_schedule; // Preserve locale-based hour cycle defaults when unset
    }
    return normalizedConfig;
  }

  setConfig(config) {
    const previousHeaderWeatherSensor = this._config?.header_weather_sensor || null;
    if (!config.entities || !Array.isArray(config.entities)) {
      throw new Error('You need to define calendar entities');
    }
    const language = resolveLanguage(config.language || this._hass?.language || this._hass?.locale?.language);
    this._hasCustomTitle = config.title !== undefined && config.title !== null;
    this._config = this.normalizeConfig(config, language);
    this._viewMode = this._config.default_view;
    this.applyThemeMode(this._config.color_scheme);
    this._hiddenCalendars = this.getDefaultHiddenCalendarSet();
    this._customEventColors = createEmptyCustomEventColors();
    this.loadPersistedPreferences();
    this._loadedEventRange = null;
    this._eventsByCalendar = {};
    this._eventCacheGeneration += 1;
    this._eventFetchGeneration += 1;
    this._eventWriteGeneration += 1;
    this._pendingEventRefreshAfterCurrentFetch = false;
    this._eventCacheHydrated = false;
    this._lastSuccessfulEventRefresh = null;
    this._lastEventRefreshFailed = false;
    this._calendarEventMetadata = {};
    this.clearEventRefreshWarningTimer();
    this._calendarDataSignatures = {};
    this._lastUnchangedDataRender = null;
    this._weatherForecastController.handleConfigChanged(previousHeaderWeatherSensor, this._config.header_weather_sensor);
    this.ensureWeatherForecastSubscription();
    this.setWeekStart();
    this.resetAgendaWindowToToday();
    this.render();
    this._activeLanguage = language;
    this.loadEventCacheForCurrentConfig();
  }

  set hass(hass) {
    const oldHass = this._hass;
    this._hass = hass;
    let shouldRender = false;

    // Check calendar capabilities when hass is set
    if (!oldHass || this._hass !== oldHass) {
      this.checkAllCalendarCapabilities();
    }

    if (this._themeMode === DEFAULT_THEME_MODE) {
      const hassDarkMode = this._hass?.themes?.darkMode;
      if (typeof hassDarkMode === 'boolean' && this._isDarkMode !== hassDarkMode) {
        this._isDarkMode = hassDarkMode;
        shouldRender = true;
      }
    }

    const resolvedLanguage = this.getLanguage();
    if (resolvedLanguage !== this._activeLanguage) {
      this._activeLanguage = resolvedLanguage;
      if (!this._hasCustomTitle) {
        this._config.title = translate(this._activeLanguage, 'defaultTitle');
      }
      shouldRender = true;
    }

    const configuredHeaderTimeSensor = this._config?.header_time_sensor;
    const configuredHeaderWeatherSensor = this._config?.header_weather_sensor;
    const previousHeaderTimeSensorState = configuredHeaderTimeSensor
      ? this.getHeaderEntityRenderSignature(oldHass?.states?.[configuredHeaderTimeSensor])
      : null;
    const nextHeaderTimeSensorState = configuredHeaderTimeSensor
      ? this.getHeaderEntityRenderSignature(hass?.states?.[configuredHeaderTimeSensor])
      : null;
    const previousHeaderWeatherSensorState = configuredHeaderWeatherSensor
      ? this.getHeaderEntityRenderSignature(oldHass?.states?.[configuredHeaderWeatherSensor])
      : null;
    const nextHeaderWeatherSensorState = configuredHeaderWeatherSensor
      ? this.getHeaderEntityRenderSignature(hass?.states?.[configuredHeaderWeatherSensor])
      : null;
    const headerSensorChanged = previousHeaderTimeSensorState !== nextHeaderTimeSensorState ||
      previousHeaderWeatherSensorState !== nextHeaderWeatherSensorState;
    const badgePersonStateChanged = this.getCalendarBadgePersonRenderSignature(oldHass) !==
      this.getCalendarBadgePersonRenderSignature(hass);

    if (headerSensorChanged || badgePersonStateChanged) {
      if (this.isEventManagementDialogOpen()) {
        this._pendingHeaderSensorRender = true;
      } else {
        shouldRender = true;
        this._pendingHeaderSensorRender = false;
      }
    }

    this.ensureWeatherForecastSubscription();
    this.refreshWeatherForecastData();

    if (shouldRender) {
      this.renderPreservingAgendaScroll();
    }

    // Refresh only when stale or when current view needs dates outside loaded range.
    if (!oldHass) {
      this.loadEventCacheForCurrentConfig();
      this.ensureEventsForCurrentRange({ force: true });
    } else {
      this.ensureEventsForCurrentRange();
    }
  }

  async checkAllCalendarCapabilities() {
    if (!this._hass) return;

    for (const entityId of this._config.entities) {
      const entity = this._hass.states[entityId];
      if (entity) {
        const features = entity.attributes?.supported_features || 0;

        // Check if this is a Google Calendar (which doesn't support UPDATE/DELETE services)
        const isGoogleCalendar = entityId.includes('google') ||
                                 entity.attributes?.integration === 'google';

        this._calendarCapabilities[entityId] = {
          canCreate: true, // Most calendars support creation
          canUpdate: (features & 2) !== 0, // UPDATE_EVENT = 2
          canDelete: (features & 4) !== 0, // DELETE_EVENT = 4
          isReadonly: this._config.readonly_calendars.includes(entityId),
          isGoogleCalendar: isGoogleCalendar // Track Google Calendar separately
        };
      }
    }
  }


  normalizeColorMap(colorMap) {
    return normalizeColorMapHelper(colorMap, {
      normalizeColor: this.normalizeSingleColor.bind(this)
    });
  }

  normalizeSingleColor(colorValue) {
    return normalizeSingleColorHelper(colorValue);
  }

  colorToHex(color) {
    return colorToHexHelper(color, {
      normalizeColor: this.normalizeSingleColor.bind(this)
    });
  }

  colorToRgb(color) {
    return parseColorToRgbHelper(color, {
      normalizeColor: this.normalizeSingleColor.bind(this),
      resolveComputedCssColorToRgb: this.resolveComputedCssColorToRgb.bind(this)
    });
  }

  colorWithAlpha(color, alpha = 1) {
    return colorWithAlphaHelper(color, alpha, {
      colorToRgb: this.colorToRgb.bind(this)
    });
  }

  blendRgb(top, bottom, topAlpha = 1) {
    return blendRgbHelper(top, bottom, topAlpha);
  }



  resolveComputedCssColorToRgb(color) {
    if (typeof color !== 'string' || typeof window === 'undefined' || typeof document === 'undefined') {
      return null;
    }

    const probe = document.createElement('span');
    probe.style.color = color;
    probe.style.position = 'absolute';
    probe.style.pointerEvents = 'none';
    probe.style.opacity = '0';

    const parent = this.isConnected ? this : document.body;
    if (!parent) return null;

    parent.appendChild(probe);
    const computed = window.getComputedStyle(probe).color;
    probe.remove();

    const match = computed.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
    if (!match) return null;

    return {
      r: Number(match[1]),
      g: Number(match[2]),
      b: Number(match[3])
    };
  }

  normalizeCombineStyle(styleValue) {
    return normalizeCombineStyleHelper(styleValue);
  }

  normalizeEventColorMode(modeValue) {
    return normalizeEventColorModeHelper(modeValue);
  }

  normalizeCombineBackground(backgroundValue) {
    return normalizeCombineBackgroundHelper(backgroundValue, {
      colorToHex: this.colorToHex.bind(this)
    });
  }

  getEmptyAdvancedMatch() {
    return createEmptyAdvancedMatch();
  }

  normalizeEventMatchConditions(rawMatch) {
    return normalizeRuleEventMatchConditions(rawMatch);
  }

  normalizeDayMatchConditions(rawMatch, localeOverride = null) {
    return normalizeRuleDayMatchConditions(rawMatch, {
      normalizeDayOfWeekRule: this.normalizeDayOfWeekRule.bind(this),
      localeOverride
    });
  }

  normalizeAdvancedRuleMatch(rawMatch, defaultScope = 'event', localeOverride = null) {
    return normalizeRuleMatch(rawMatch, {
      defaultScope,
      localeOverride,
      normalizeDayOfWeekRule: this.normalizeDayOfWeekRule.bind(this)
    });
  }

  normalizeEventStyles(rawRules) {
    if (!Array.isArray(rawRules)) return [];

    return rawRules
      .map((rule, index) => {
        if (!rule || typeof rule !== 'object') return null;

        const rawMatch = rule.match && typeof rule.match === 'object' ? rule.match : (rule.when && typeof rule.when === 'object' ? rule.when : null);
        const match = this.normalizeAdvancedRuleMatch(rawMatch, 'event');
        let style = null;
        if (typeof rule.style === 'string' && rule.style.trim().toLowerCase() === 'hide') {
          style = { hide: true };
        } else if (rule.style && typeof rule.style === 'object') {
          style = rule.style;
        }
        if (!match || !style) return null;

        const numericPriority = Number(rule.priority);
        const priority = Number.isFinite(numericPriority) ? numericPriority : 0;
        const normalizedStyle = this.normalizeEventStyleBlock(style);
        if (!Object.keys(normalizedStyle).length) return null;

        return {
          id: typeof rule.id === 'string' && rule.id.trim() ? rule.id.trim() : `event-style-${index + 1}`,
          type: 'event_style',
          priority,
          index,
          match,
          output: { style: normalizedStyle },
          style: normalizedStyle
        };
      })
      .filter(Boolean);
  }

  normalizeLegacyDayStyleMatch(rule, localeOverride = null) {
    return normalizeRuleLegacyDayStyleMatch(rule, {
      localeOverride,
      normalizeDayOfWeekRule: this.normalizeDayOfWeekRule.bind(this),
      normalizeAdvancedRuleMatch: this.normalizeAdvancedRuleMatch.bind(this)
    });
  }

  normalizeDayStyles(rawRules, localeOverride = null) {
    if (!Array.isArray(rawRules)) return [];

    return rawRules
      .map((rule, index) => {
        if (!rule || typeof rule !== 'object') return null;

        const rawExplicitMatch = rule.match && typeof rule.match === 'object' ? rule.match : (rule.when && typeof rule.when === 'object' ? rule.when : null);
        const match = rawExplicitMatch
          ? this.normalizeAdvancedRuleMatch(rawExplicitMatch, 'day', localeOverride)
          : this.normalizeLegacyDayStyleMatch(rule, localeOverride);
        if (!match) return null;

        const numericPriority = Number(rule.priority);
        const priority = Number.isFinite(numericPriority) ? numericPriority : 0;

        const style = this.normalizeDayStyleBlock(rule.style && typeof rule.style === 'object' ? rule.style : rule);
        if (
          style.background === undefined &&
          style.opacity === undefined &&
          style.background_opacity === undefined &&
          style.border_color === undefined &&
          style.border_width === undefined
        ) return null;

        const normalized = {
          id: typeof rule.id === 'string' && rule.id.trim() ? rule.id.trim() : `day-style-${index + 1}`,
          type: 'day_style',
          priority,
          index,
          match,
          output: { style },
          style
        };

        // Backward-compatible mirrors used by older internal tests and helper paths.
        if (style.background !== undefined) normalized.background = style.background;
        if (style.opacity !== undefined) normalized.opacity = style.opacity;
        if (style.background_opacity !== undefined) normalized.background_opacity = style.background_opacity;
        if (style.border_color !== undefined) normalized.border_color = style.border_color;
        if (style.border_width !== undefined) normalized.border_width = style.border_width;
        const day = match.day || {};
        if (day.today !== undefined) normalized.condition = 'today';
        else if (day.past !== undefined) normalized.condition = 'past';
        else if (day.future !== undefined) normalized.condition = 'future';
        else if (day.weekend !== undefined) normalized.condition = 'weekend';
        else if (day.weekday !== undefined) normalized.condition = 'weekday';
        else if (day.day_of_week !== undefined) {
          normalized.condition = 'day_of_week';
          normalized.day_of_week = day.day_of_week;
        } else if (day.has_event !== undefined) normalized.condition = 'has_event';
        else if (day.no_event !== undefined) {
          normalized.condition = 'has_event';
          normalized.negate = true;
        }

        return normalized;
      })
      .filter(Boolean);
  }

  buildDayStyleRules(rawConfig = {}) {
    const rules = Array.isArray(rawConfig.day_styles) ? [...rawConfig.day_styles] : [];
    const todayStyle = this.buildTodayDayStyleRule(rawConfig);
    if (todayStyle) rules.push(todayStyle);
    return rules;
  }

  buildTodayDayStyleRule(rawConfig = {}) {
    const hasTodayBackgroundColor = rawConfig.today_background_color !== undefined && rawConfig.today_background_color !== null && rawConfig.today_background_color !== '';
    const hasTodayStyle = rawConfig.today_style && typeof rawConfig.today_style === 'object' && !Array.isArray(rawConfig.today_style);
    if (!hasTodayBackgroundColor && !hasTodayStyle) return null;

    const style = {
      ...(hasTodayBackgroundColor ? { background_color: rawConfig.today_background_color } : {}),
      ...(hasTodayStyle ? rawConfig.today_style : {})
    };

    return {
      condition: 'today',
      priority: 0,
      style
    };
  }

  normalizeDayStyleBlock(style = {}) {
    const normalized = {};
    const backgroundValue = style.background !== undefined ? style.background : (style.background_color !== undefined ? style.background_color : style.color);
    const normalizedBackground = String(backgroundValue || '').trim().toLowerCase() === 'auto'
      ? 'auto'
      : this.normalizeSingleColor(backgroundValue);
    if (normalizedBackground) normalized.background = normalizedBackground;

    const numericOpacity = Number(style.opacity);
    if (Number.isFinite(numericOpacity)) {
      normalized.opacity = Math.max(0, Math.min(1, numericOpacity));
    }

    const numericBackgroundOpacity = Number(style.background_opacity);
    if (Number.isFinite(numericBackgroundOpacity)) {
      normalized.background_opacity = Math.max(0, Math.min(1, numericBackgroundOpacity));
    }

    const normalizedBorderColor = this.normalizeSingleColor(style.border_color);
    if (normalizedBorderColor) normalized.border_color = normalizedBorderColor;

    const normalizedBorderWidth = this.normalizeStyleBorderWidth(style.border_width);
    if (normalizedBorderWidth) normalized.border_width = normalizedBorderWidth;

    return normalized;
  }



  normalizeDayBadgeBlock(rule = {}) {
    return normalizeDayBadgeBlockHelper(rule, {
      normalizeEventTextValue: this.normalizeEventTextValue.bind(this),
      normalizeDayBadgeDisplayColor: this.normalizeDayBadgeDisplayColor.bind(this),
      normalizeStyleSizeValue: this.normalizeStyleSizeValue.bind(this)
    });
  }

  isFullValueTemplate(value) {
    return isFullValueTemplateHelper(value);
  }

  normalizeDayBadgeDisplayColor(value) {
    return normalizeDayBadgeDisplayColorHelper(value, {
      normalizeSingleColor: this.normalizeSingleColor.bind(this)
    });
  }

  normalizeResolvedDayBadgeDisplayColor(value) {
    return normalizeResolvedDayBadgeDisplayColorHelper(value, {
      normalizeSingleColor: this.normalizeSingleColor.bind(this)
    });
  }

  parseEventDescriptionJson(event) {
    return parseEventDescriptionJsonHelper(event);
  }

  buildDayBadgeResolutionContext(date, matchedEvent) {
    return buildDayBadgeResolutionContextHelper(date, matchedEvent, {
      formatLocalDate: this.formatLocalDate.bind(this)
    });
  }

  resolveSafePath(path, context) {
    return resolveSafePathHelper(path, context);
  }

  resolveDayBadgeDisplayValue(value, context) {
    return resolveDayBadgeDisplayValueHelper(value, context);
  }

  resolveDayBadgeForRender(rule, date, matchedEvent) {
    return resolveDayBadgeForRenderHelper(rule, date, matchedEvent, {
      formatLocalDate: this.formatLocalDate.bind(this),
      normalizeResolvedDayBadgeDisplayColor: this.normalizeResolvedDayBadgeDisplayColor.bind(this)
    });
  }

  normalizeDayBadgeConditions(rawConditions) {
    return normalizeDayBadgeConditionsHelper(rawConditions, {
      normalizeEventMatchConditions: this.normalizeEventMatchConditions.bind(this)
    });
  }

  normalizeDayBadges(rawRules) {
    return normalizeDayBadgesHelper(rawRules, {
      normalizeAdvancedRuleMatch: this.normalizeAdvancedRuleMatch.bind(this),
      normalizeDayBadgeBlock: this.normalizeDayBadgeBlock.bind(this)
    });
  }


  normalizeCssLength(value, { allowZero = false } = {}) {
    if (value === undefined || value === null || value === '') return null;

    if (typeof value === 'number' && Number.isFinite(value)) {
      if (allowZero) return `${Math.max(0, value)}px`;
      return value > 0 ? `${value}px` : null;
    }

    const trimmed = String(value).trim();
    if (!trimmed) return null;

    if (/^\d*\.?\d+(px|rem|em|%)$/i.test(trimmed)) {
      return trimmed;
    }

    const parsed = Number(trimmed);
    if (Number.isFinite(parsed) && (allowZero ? parsed >= 0 : parsed > 0)) {
      return `${parsed}px`;
    }

    return null;
  }

  normalizeStyleSizeValue(value) {
    return this.normalizeCssLength(value, { allowZero: false });
  }

  normalizeStyleBorderWidth(value) {
    return this.normalizeCssLength(value, { allowZero: true });
  }

  normalizeDayOfWeekRule(value, localeOverride = null) {
    const dayMap = new Map([
      ['sun', 0], ['sunday', 0], ['0', 0],
      ['mon', 1], ['monday', 1], ['1', 1],
      ['tue', 2], ['tues', 2], ['tuesday', 2], ['2', 2],
      ['wed', 3], ['weds', 3], ['wednesday', 3], ['3', 3],
      ['thu', 4], ['thur', 4], ['thurs', 4], ['thursday', 4], ['4', 4],
      ['fri', 5], ['friday', 5], ['5', 5],
      ['sat', 6], ['saturday', 6], ['6', 6]
    ]);
    this.getLocalizedWeekdayMap(localeOverride).forEach((dayIndexes, token) => {
      if (!dayMap.has(token)) {
        dayMap.set(token, dayIndexes.length === 1 ? dayIndexes[0] : dayIndexes);
      }
    });

    const values = Array.isArray(value) ? value : [value];
    const normalizedDays = [];

    values.forEach((entry) => {
      if (entry === undefined || entry === null || entry === '') return;

      if (typeof entry === 'number' && Number.isInteger(entry) && entry >= 0 && entry <= 6) {
        normalizedDays.push(entry);
        return;
      }

      const normalizedEntry = String(entry).trim().toLowerCase();
      if (!normalizedEntry) return;
      if (dayMap.has(normalizedEntry)) {
        const mappedValue = dayMap.get(normalizedEntry);
        if (Array.isArray(mappedValue)) {
          normalizedDays.push(...mappedValue);
        } else {
          normalizedDays.push(mappedValue);
        }
      }
    });

    return Array.from(new Set(normalizedDays));
  }

  getLocalizedWeekdayMap(localeOverride = null) {
    const locale = resolveLanguage(localeOverride || this.getLocale());
    const cacheKey = locale || 'default';
    if (!this._localizedWeekdayMapCache) this._localizedWeekdayMapCache = new Map();
    if (this._localizedWeekdayMapCache.has(cacheKey)) return this._localizedWeekdayMapCache.get(cacheKey);

    const map = new Map();
    const formats = ['long', 'short', 'narrow'];
    const anchorSunday = new Date(Date.UTC(2024, 0, 7)); // Sunday

    formats.forEach((weekdayFormat) => {
      for (let dayIndex = 0; dayIndex < 7; dayIndex += 1) {
        const date = new Date(anchorSunday);
        date.setUTCDate(anchorSunday.getUTCDate() + dayIndex);
        const localizedName = new Intl.DateTimeFormat(locale, { weekday: weekdayFormat, timeZone: 'UTC' }).format(date);
        const normalizedName = String(localizedName || '').trim().toLowerCase();
        if (!normalizedName) continue;
        if (!map.has(normalizedName)) {
          map.set(normalizedName, [dayIndex]);
          continue;
        }
        const existingDayIndexes = map.get(normalizedName);
        if (!existingDayIndexes.includes(dayIndex)) existingDayIndexes.push(dayIndex);
      }
    });

    this._localizedWeekdayMapCache.set(cacheKey, map);
    return map;
  }

  normalizeEventStyleBlock(style = {}) {
    const normalized = {};
    const setIfDefined = (key, value) => {
      if (value !== undefined && value !== null && value !== '') {
        normalized[key] = value;
      }
    };

    const normalizedBackground = this.normalizeSingleColor(style.background_color ?? style.color);
    if (normalizedBackground) normalized.background_color = normalizedBackground;

    const normalizedFontColor = this.normalizeSingleColor(style.event_font_color ?? style.font_color);
    if (normalizedFontColor) normalized.event_font_color = normalizedFontColor;

    const normalizedOpacity = this.normalizeEventStyleOpacity(style.opacity);
    if (normalizedOpacity !== null) normalized.opacity = normalizedOpacity;

    const normalizedFilter = this.normalizeEventStyleFilter(style.filter);
    if (normalizedFilter !== null) normalized.filter = normalizedFilter;

    setIfDefined('event_font_size', style.event_font_size);
    setIfDefined('event_time_font_size', style.event_time_font_size);
    setIfDefined('event_location_font_size', style.event_location_font_size);

    const icon = this.normalizeEventIconName(style.icon);
    if (icon) normalized.icon = icon;
    const iconColor = this.normalizeEventIconColor(style.icon_color);
    if (iconColor) normalized.icon_color = iconColor;
    const iconSize = this.normalizeStyleSizeValue(style.icon_size);
    if (iconSize) normalized.icon_size = iconSize;
    const iconPosition = this.normalizeEventIconPosition(style.icon_position);
    if (iconPosition) normalized.icon_position = iconPosition;

    const showEventLocation = this.normalizeBooleanStyleValue(style.show_event_location);
    if (showEventLocation !== null) normalized.show_event_location = showEventLocation;
    const useShortLocation = this.normalizeBooleanStyleValue(style.use_short_location);
    if (useShortLocation !== null) normalized.use_short_location = useShortLocation;
    const hideTime = this.normalizeBooleanStyleValue(style.hide_time);
    if (hideTime !== null) normalized.hide_time = hideTime;
    const showTime = this.normalizeBooleanStyleValue(style.show_time);
    if (showTime !== null) normalized.show_time = showTime;
    const hideCalendarBubble = this.normalizeBooleanStyleValue(style.hide_event_calendar_bubble);
    if (hideCalendarBubble !== null) normalized.hide_event_calendar_bubble = hideCalendarBubble;
    const hideEvent = this.normalizeBooleanStyleValue(style.hide);
    if (hideEvent !== null) normalized.hide = hideEvent;
    if (style.event_title_prefix !== undefined) normalized.event_title_prefix = this.normalizeEventTitlePrefixMode(style.event_title_prefix);

    return normalized;
  }

  normalizeEventIconName(iconValue) {
    const normalized = this.normalizeEventTextValue(iconValue);
    if (!normalized) return null;
    if (!/^mdi:[a-z0-9]+(?:-[a-z0-9]+)*$/.test(normalized)) return null;
    return normalized;
  }

  normalizeEventIconColor(colorValue) {
    if (colorValue === undefined || colorValue === null) return null;
    const normalized = this.normalizeSingleColor(colorValue);
    const trimmed = String(normalized || '').trim();
    if (!trimmed) return null;
    if (/[;{}<>\"']/.test(trimmed)) return null;
    return trimmed;
  }

  normalizeEventIconPosition(positionValue) {
    const normalized = String(positionValue || '').trim().toLowerCase();
    if (!normalized) return null;
    if (normalized === 'before_title' || normalized === 'corner') return normalized;
    return null;
  }

  normalizeEventStyleOpacity(opacityValue) {
    if (opacityValue === undefined || opacityValue === null || opacityValue === '') return null;
    const numericOpacity = Number(opacityValue);
    if (!Number.isFinite(numericOpacity)) return null;
    return Math.max(0, Math.min(1, numericOpacity));
  }

  normalizeEventStyleFilter(filterValue) {
    if (filterValue === undefined || filterValue === null) return null;
    const normalized = String(filterValue).trim();
    if (!normalized) return null;
    if (/[;{}<>\"']/.test(normalized)) return null;
    return normalized;
  }

  getRuleMatcherHelpers() {
    return {
      getEventCalendarMatchTokens: this.getEventCalendarMatchTokens.bind(this),
      getEventDateTimeInfo: this.getEventDateTimeInfo.bind(this),
      isPastEvent: this.isPastEvent.bind(this),
      normalizeEventTextValue: this.normalizeEventTextValue.bind(this)
    };
  }

  eventMatchesRule(event, match) {
    const normalizedMatch = this.normalizeEventMatchConditions(match);
    return this.eventMatchesNormalizedRule(event, normalizedMatch);
  }

  eventMatchesNormalizedRule(event, match) {
    return matchNormalizedEventRule(event, match, this.getRuleMatcherHelpers());
  }


  getEventCalendarMatchTokens(event) {
    const tokens = [];
    const entityIds = new Set();

    if (event?.entityId) entityIds.add(event.entityId);
    if (Array.isArray(event?.sourceEntityIds)) {
      event.sourceEntityIds.forEach((entityId) => entityId && entityIds.add(entityId));
    } else if (Array.isArray(event?.sourceCalendars)) {
      event.sourceCalendars.forEach((calendar) => calendar?.entityId && entityIds.add(calendar.entityId));
    }

    entityIds.forEach((entityId) => {
      tokens.push(entityId);
      tokens.push(this.getCalendarName(entityId));
      const virtualCalendar = this.getVirtualBadgeForEntity(entityId);
      if (virtualCalendar) {
        tokens.push(`virtual:${virtualCalendar.id}`);
        tokens.push(virtualCalendar.id);
        tokens.push(virtualCalendar.name);
      }
    });

    return Array.from(new Set(tokens.filter(Boolean)));
  }

  eventFieldMatches(event, field, condition) {
    return matchEventField(event, field, condition, this.getRuleMatcherHelpers());
  }

  matchPrimitiveCondition(value, condition) {
    return matchPrimitiveRuleCondition(value, condition);
  }

  parseRegexCondition(value) {
    return parseRuleRegexCondition(value);
  }

  matchTextCondition(value, condition) {
    return matchRuleTextCondition(value, condition, this.getRuleMatcherHelpers());
  }

  findMatchingEventForCondition(condition, dayEvents = []) {
    return findRuleMatchingEvent(condition, dayEvents, this.getRuleMatcherHelpers());
  }

  dateMatchesDayCondition(date, conditionName, conditionValue, context = {}) {
    return matchDateDayCondition(date, conditionName, conditionValue, context);
  }

  dayMatchesNormalizedRule(dayMatch, context = {}) {
    return matchNormalizedDayRule(dayMatch, context, this.getRuleMatcherHelpers());
  }

  matchesAdvancedRule(ruleOrMatch, context = {}) {
    return matchAdvancedRule(ruleOrMatch, context, this.getRuleMatcherHelpers());
  }

  findMatchingDayStyleEvent(rule, dayEvents) {
    return this.matchesAdvancedRule(rule, { dayEvents }).matchedEvent;
  }

  getDayStyleConfig(date, dayEvents, isToday) {
    const rules = Array.isArray(this._config?.day_styles) ? this._config.day_styles : [];
    if (!rules.length) return null;

    const candidates = {};

    const applyCandidate = (key, value, rule) => {
      if (value === undefined || value === null) return;
      const candidatePriority = Number.isFinite(rule.priority) ? rule.priority : 0;
      const existing = candidates[key];
      if (!existing || candidatePriority > existing.priority || (candidatePriority === existing.priority && rule.index < existing.ruleIndex)) {
        candidates[key] = { value, priority: candidatePriority, ruleIndex: rule.index };
      }
    };

    rules.forEach((rule) => {
      const result = this.matchesAdvancedRule(rule, { date, dayEvents, isToday });
      if (!result.matches) return;

      const dayStyle = rule.output?.style || rule.style || {};
      if (dayStyle.background) {
        if (dayStyle.background === 'auto' && result.matchedEvent?.color) {
          applyCandidate('background', result.matchedEvent.color, rule);
        } else if (dayStyle.background !== 'auto') {
          applyCandidate('background', dayStyle.background, rule);
        }
      }

      applyCandidate('opacity', dayStyle.opacity, rule);
      applyCandidate('background_opacity', dayStyle.background_opacity, rule);
      applyCandidate('border_color', dayStyle.border_color, rule);
      applyCandidate('border_width', dayStyle.border_width, rule);
    });

    const background = candidates.background?.value ?? null;
    const opacity = candidates.opacity?.value ?? null;
    const backgroundOpacity = candidates.background_opacity?.value ?? null;
    const borderColor = candidates.border_color?.value ?? null;
    const borderWidth = candidates.border_width?.value ?? null;

    if (!background && opacity === null && backgroundOpacity === null && !borderColor && !borderWidth) return null;
    return {
      background,
      opacity,
      background_opacity: backgroundOpacity,
      border_color: borderColor,
      border_width: borderWidth
    };
  }

  getDayStyleAttributes(date, dayEvents, isToday) {
    const dayStyle = this.getDayStyleConfig(date, dayEvents, isToday);
    if (!dayStyle) return { className: '', style: '' };

    const styles = [];
    if (dayStyle.background) {
      const backgroundColor = dayStyle.background_opacity !== null
        ? this.colorWithAlpha(dayStyle.background, dayStyle.background_opacity)
        : dayStyle.background;
      styles.push(`--day-conditional-background: ${dayStyle.background}`);
      styles.push(`background: ${backgroundColor} !important`);
    }
    if (dayStyle.opacity !== null) {
      styles.push(`--day-conditional-opacity: ${dayStyle.opacity}`);
      styles.push(`opacity: ${dayStyle.opacity}`);
    }

    if (dayStyle.border_color || dayStyle.border_width) {
      const borderWidth = dayStyle.border_width || '2px';
      const borderColor = dayStyle.border_color || 'var(--divider-color, #d1d5db)';
      styles.push(`--day-style-border-width: ${borderWidth}`);
      styles.push(`--day-style-border-color: ${borderColor}`);
    }
    const classNames = ['day-style-rule'];
    if (dayStyle.background) classNames.push('day-style-has-background');
    if (dayStyle.border_color || dayStyle.border_width) classNames.push('day-style-has-border');

    return {
      className: classNames.join(' '),
      style: styles.join('; ')
    };
  }


  normalizeVirtualCalendars(virtualCalendars) {
    return normalizeVirtualCalendarsHelper(virtualCalendars, {
      normalizeSingleColor: this.normalizeSingleColor.bind(this)
    });
  }

  getVirtualBadgeById(virtualId) {
    return getVirtualBadgeByIdHelper(this._config.virtual_calendars || [], virtualId);
  }

  getVirtualBadgeForEntity(entityId) {
    return getVirtualBadgeForEntityHelper(this._config.virtual_calendars || [], entityId);
  }

  getVirtualBadgeForEvent(event) {
    return getVirtualBadgeForEventHelper(this._config.virtual_calendars || [], event);
  }

  getVirtualBadgeItems() {
    return getVirtualBadgeItemsHelper({
      entities: this._config.entities,
      virtualCalendars: this._config.virtual_calendars || [],
      hideBadgeCalendars: this._config.hide_badge_calendars || [],
      hiddenCalendars: this._hiddenCalendars,
      getCalendarColor: this.getCalendarColor.bind(this),
      getCalendarName: this.getCalendarName.bind(this),
      getCalendarBadgeIcon: this.getCalendarBadgeIcon.bind(this)
    });
  }

  getWritableCalendars() {
    return getWritableCalendarsHelper(this._config.entities, this._calendarCapabilities);
  }

  getEventIdentityKey(entityId, event) {
    return getNormalizedEventIdentityKey(entityId, event);
  }

  async fetchEventsInRange(startDate, endDate) {
    const resultsByCalendar = await this.fetchEventsByCalendarInRange(startDate, endDate);
    if (Object.values(resultsByCalendar).some(result => !result?.success)) return null;
    return Object.values(resultsByCalendar).flatMap(result => result.events || []);
  }

  async fetchEventsByCalendarInRange(startDate, endDate) {
    return fetchEventsByCalendarInRangeHelper({
      hass: this._hass,
      entities: this._config.entities,
      startDate,
      endDate,
      getDateRangeChunks: this.getDateRangeChunks.bind(this),
      formatLocalDate: this.formatLocalDate.bind(this),
      getCalendarColor: this.getCalendarColor.bind(this),
      getEventIdentityKey: this.getEventIdentityKey.bind(this),
      normalizeCalendarEvent
    });
  }

  getCalendarColor(entityId, index = 0) {
    return getCalendarColorHelper(entityId, index, {
      colors: this._config?.colors || {},
      getDefaultColor: this.getDefaultColor.bind(this),
      normalizeSingleColor: this.normalizeSingleColor.bind(this)
    });
  }

  async fetchEventsForCalendar(entityId, colorIndex, chunks) {
    return fetchEventsForCalendarHelper({
      hass: this._hass,
      entityId,
      colorIndex,
      chunks,
      formatLocalDate: this.formatLocalDate.bind(this),
      getCalendarColor: this.getCalendarColor.bind(this),
      getEventIdentityKey: this.getEventIdentityKey.bind(this),
      normalizeCalendarEvent
    });
  }

  async fetchEventsForChunk(entityId, chunk) {
    return fetchEventsForChunkHelper({
      hass: this._hass,
      entityId,
      chunk,
      formatLocalDate: this.formatLocalDate.bind(this)
    });
  }

  async fetchEventsViaWebSocket(entityId, chunkStartStr, chunkEndStr) {
    return fetchEventsViaWebSocketHelper({
      hass: this._hass,
      entityId,
      chunkStartStr,
      chunkEndStr
    });
  }

  mergeEvents(existingEvents, incomingEvents) {
    return mergeEventsHelper(existingEvents, incomingEvents, {
      getEventIdentityKey: this.getEventIdentityKey.bind(this),
      getEventStartDate: this.getEventStartDate.bind(this)
    });
  }

  toStableString(value) {
    return toStableStringHelper(value);
  }

  getCalendarDataSignature(events = []) {
    return getCalendarDataSignatureHelper(events);
  }

  getEventCacheUserScope() {
    return this._hass?.user?.id || this._hass?.user?.name || this._hass?.auth?.data?.user?.id || null;
  }

  getEventCacheConfigSignature() {
    const userScope = this.getEventCacheUserScope();
    if (!userScope) return null;
    return buildEventCacheConfigSignature({
      entities: this._config?.entities || [],
      timeZone: this.getConfiguredTimeZone(),
      colors: this._config?.colors || {},
      userScope
    });
  }

  getValidRange(startDate, endDate) {
    const start = startDate instanceof Date ? startDate : new Date(startDate);
    const end = endDate instanceof Date ? endDate : new Date(endDate);
    if (!Number.isFinite(start.getTime()) || !Number.isFinite(end.getTime()) || start > end) return null;
    return { startDate: start, endDate: end };
  }

  unionEventRanges(existingRange, incomingRange) {
    const existing = this.getValidRange(existingRange?.startDate, existingRange?.endDate);
    if (!existing) return incomingRange;
    if (!incomingRange) return existing;
    return {
      startDate: new Date(Math.min(existing.startDate.getTime(), incomingRange.startDate.getTime())),
      endDate: new Date(Math.max(existing.endDate.getTime(), incomingRange.endDate.getTime()))
    };
  }

  queueEventCacheMutation(callback) {
    const run = this._eventCacheMutationQueue.then(callback, callback);
    this._eventCacheMutationQueue = run.catch(() => {});
    return run;
  }

  recomputeLoadedEventRange() {
    const ranges = (this._config.entities || []).map((entityId) => {
      const range = this._calendarEventMetadata[entityId]?.range;
      return this.getValidRange(range?.startDate, range?.endDate);
    });
    if (ranges.length === 0 || ranges.some(range => !range)) {
      this._loadedEventRange = null;
      return;
    }
    const startDate = new Date(Math.max(...ranges.map(range => range.startDate.getTime())));
    const endDate = new Date(Math.min(...ranges.map(range => range.endDate.getTime())));
    this._loadedEventRange = startDate <= endDate ? { startDate, endDate } : null;
  }

  recomputeLastSuccessfulEventRefresh() {
    const refreshTimes = (this._config.entities || [])
      .map(entityId => this._calendarEventMetadata[entityId]?.lastSuccessfulRefresh)
      .filter(Number.isFinite);
    this._lastSuccessfulEventRefresh = refreshTimes.length ? Math.min(...refreshTimes) : null;
  }

  recomputeEventRefreshFailure() {
    this._lastEventRefreshFailed = (this._config.entities || [])
      .some(entityId => this._calendarEventMetadata[entityId]?.refreshFailed);
  }

  recomputeEventState() {
    this._events = sortEventsByStartDateHelper(Object.values(this._eventsByCalendar).flat(), {
      getEventStartDate: this.getEventStartDate.bind(this)
    });
    this.recomputeLoadedEventRange();
    this.recomputeLastSuccessfulEventRefresh();
    this.recomputeEventRefreshFailure();
    this.scheduleEventRefreshWarningTimer();
  }

  applyEventsByCalendar(eventsByCalendar = {}, { startDate, endDate, lastSuccessfulRefresh = null, successfulEntityIds = null, failedEntityIds = [], source = 'network', requestId = null, coverageMode = 'replace' } = {}) {
    const range = this.getValidRange(startDate, endDate);
    const successfulSet = successfulEntityIds ? new Set(successfulEntityIds) : new Set(this._config.entities || []);
    const failedSet = new Set(failedEntityIds || []);
    (this._config.entities || []).forEach((entityId) => {
      const existingMetadata = this._calendarEventMetadata[entityId] || {};
      if (!successfulSet.has(entityId)) {
        const isFailure = failedSet.has(entityId);
        this._calendarEventMetadata[entityId] = {
          ...existingMetadata,
          lastSuccessfulRefresh: existingMetadata.lastSuccessfulRefresh ?? this._lastSuccessfulEventRefresh,
          refreshFailed: isFailure || existingMetadata.refreshFailed,
          firstFailureAt: isFailure ? (existingMetadata.firstFailureAt ?? Date.now()) : existingMetadata.firstFailureAt,
          lastNetworkFailureRequest: isFailure && source === 'network' ? requestId : existingMetadata.lastNetworkFailureRequest
        };
        return;
      }
      const hasNewerNetworkSuccess = existingMetadata.lastNetworkSuccessRequest && existingMetadata.lastNetworkSuccessRequest > requestId;
      if (source === 'cache' && hasNewerNetworkSuccess) return;
      const hasNewerNetworkFailure = source === 'cache' && existingMetadata.lastNetworkFailureRequest && existingMetadata.lastNetworkFailureRequest > requestId;
      const events = Array.isArray(eventsByCalendar[entityId]) ? eventsByCalendar[entityId] : [];
      this._eventsByCalendar[entityId] = events;
      this._calendarDataSignatures[entityId] = this.getCalendarDataSignature(events);
      const nextRange = coverageMode === 'union'
        ? this.unionEventRanges(existingMetadata.range, range)
        : (range || existingMetadata.range || null);
      this._calendarEventMetadata[entityId] = {
        ...existingMetadata,
        range: nextRange,
        lastSuccessfulRefresh: Number.isFinite(lastSuccessfulRefresh) ? lastSuccessfulRefresh : existingMetadata.lastSuccessfulRefresh,
        refreshFailed: hasNewerNetworkFailure ? existingMetadata.refreshFailed : false,
        firstFailureAt: hasNewerNetworkFailure ? existingMetadata.firstFailureAt : null,
        lastNetworkSuccessRequest: source === 'network' ? requestId : existingMetadata.lastNetworkSuccessRequest
      };
    });
    this.recomputeEventState();
  }

  async loadEventCacheForCurrentConfig() {
    const generation = ++this._eventCacheGeneration;
    const requestId = this._eventFetchGeneration;
    const configSignature = this.getEventCacheConfigSignature();
    if (!configSignature) return;
    const { available, snapshot } = await readEventCacheSnapshot(configSignature);
    if (generation !== this._eventCacheGeneration || !available || !snapshot) return;
    const cacheEventsByCalendar = {};
    const successfulEntityIds = [];
    (this._config.entities || []).forEach((entityId) => {
      const metadata = this._calendarEventMetadata[entityId] || {};
      if (metadata.lastNetworkSuccessRequest && metadata.lastNetworkSuccessRequest > requestId) return;
      cacheEventsByCalendar[entityId] = snapshot.eventsByCalendar[entityId] || [];
      successfulEntityIds.push(entityId);
    });
    if (successfulEntityIds.length === 0) return;
    this._eventCacheHydrated = true;
    this.applyEventsByCalendar(cacheEventsByCalendar, {
      startDate: new Date(snapshot.coveredRange.start),
      endDate: new Date(snapshot.coveredRange.end),
      lastSuccessfulRefresh: snapshot.lastSuccessfulRefresh,
      successfulEntityIds,
      source: 'cache',
      requestId
    });
    this.render();
  }

  async persistEventCacheSnapshot({ generation = this._eventWriteGeneration } = {}) {
    return this.queueEventCacheMutation(async () => {
      if (generation !== this._eventWriteGeneration) return false;
      if (!this._loadedEventRange || !Number.isFinite(this._lastSuccessfulEventRefresh)) return false;
      const configSignature = this.getEventCacheConfigSignature();
      if (!configSignature) return false;
      const snapshot = createEventCacheSnapshot({
        configSignature,
        startDate: this._loadedEventRange.startDate,
        endDate: this._loadedEventRange.endDate,
        eventsByCalendar: this._eventsByCalendar,
        lastSuccessfulRefresh: this._lastSuccessfulEventRefresh,
        perCalendarMetadata: this._calendarEventMetadata
      });
      if (!snapshot || generation !== this._eventWriteGeneration) return false;
      return writeEventCacheSnapshot(snapshot);
    });
  }

  async flushEventCache({ refresh = true } = {}) {
    this._eventCacheGeneration += 1;
    this._eventFetchGeneration += 1;
    this._eventWriteGeneration += 1;
    const clearGeneration = this._eventWriteGeneration;
    const cleared = await this.queueEventCacheMutation(async () => {
      if (clearGeneration !== this._eventWriteGeneration) return false;
      return clearAllEventCacheSnapshots();
    });
    this._eventCacheGeneration += 1;
    this._eventCacheHydrated = false;
    this._eventsByCalendar = {};
    this._events = [];
    this._loadedEventRange = null;
    this._calendarDataSignatures = {};
    this._calendarEventMetadata = {};
    this._lastSuccessfulEventRefresh = null;
    this._lastEventRefreshFailed = false;
    this.clearEventRefreshWarningTimer();
    this.render();
    if (refresh && this._hass) {
      if (this._fetching) {
        this._pendingEventRefreshAfterCurrentFetch = true;
      } else {
        await this.ensureEventsForCurrentRange({ force: true });
      }
    }
    return cleared;
  }

  getOldestFailedEventRefreshTime() {
    const failedTimes = (this._config.entities || [])
      .map(entityId => this._calendarEventMetadata[entityId])
      .filter(metadata => metadata?.refreshFailed && (Number.isFinite(metadata.lastSuccessfulRefresh) || Number.isFinite(metadata.firstFailureAt)))
      .map(metadata => Number.isFinite(metadata.lastSuccessfulRefresh) ? metadata.lastSuccessfulRefresh : metadata.firstFailureAt);
    return failedTimes.length ? Math.min(...failedTimes) : null;
  }

  clearEventRefreshWarningTimer() {
    if (this._eventRefreshWarningTimer) clearTimeout(this._eventRefreshWarningTimer);
    this._eventRefreshWarningTimer = null;
  }

  scheduleEventRefreshWarningTimer() {
    this.clearEventRefreshWarningTimer();
    const oldestFailedRefresh = this.getOldestFailedEventRefreshTime();
    if (!Number.isFinite(oldestFailedRefresh)) return;
    const delay = Math.max(0, oldestFailedRefresh + 30 * 60 * 1000 - Date.now());
    this._eventRefreshWarningTimer = setTimeout(() => {
      this._eventRefreshWarningTimer = null;
      this.render();
    }, delay);
    this._eventRefreshWarningTimer?.unref?.();
  }

  shouldShowEventRefreshWarning(now = Date.now()) {
    const oldestFailedRefresh = this.getOldestFailedEventRefreshTime();
    return Number.isFinite(oldestFailedRefresh) && (now - oldestFailedRefresh) > 30 * 60 * 1000;
  }

  renderEventRefreshWarning() {
    if (!this.shouldShowEventRefreshWarning()) return '';
    const oldestFailedRefresh = this.getOldestFailedEventRefreshTime();
    return `<div class="event-refresh-warning" role="status">${this.t('eventRefreshStaleWarning', { time: this.formatTime(new Date(oldestFailedRefresh)) })}</div>`;
  }

  async updateEvents({ preserveScroll = false } = {}) {
    if (!this._hass) return;
    if (this._fetching) {
      this._pendingEventRefreshAfterCurrentFetch = true;
      return;
    }

    const { startDate, endDate } = this.getEventFetchRange();
    const generation = ++this._eventFetchGeneration;
    this._fetching = true;
    this._lastFetch = Date.now();

    try {
      const fetchResultsByCalendar = await this.fetchEventsByCalendarInRange(startDate, endDate);
      if (generation !== this._eventFetchGeneration) return;
      const nextEventsByCalendar = { ...this._eventsByCalendar };
      const successfulEntityIds = [];
      const failedEntityIds = [];
      let anyChanged = false;

      this._config.entities.forEach(entityId => {
        const result = fetchResultsByCalendar[entityId];
        if (!result?.success) {
          failedEntityIds.push(entityId);
          return;
        }
        successfulEntityIds.push(entityId);
        const events = Array.isArray(result.events) ? result.events : [];
        const oldSignature = this._calendarDataSignatures[entityId];
        const newSignature = this.getCalendarDataSignature(events);
        if (oldSignature !== newSignature) anyChanged = true;
        nextEventsByCalendar[entityId] = events;
      });

      if (successfulEntityIds.length === 0) {
        failedEntityIds.forEach((entityId) => {
          const existingMetadata = this._calendarEventMetadata[entityId] || {};
          this._calendarEventMetadata[entityId] = {
            ...existingMetadata,
            lastSuccessfulRefresh: existingMetadata.lastSuccessfulRefresh ?? this._lastSuccessfulEventRefresh,
            refreshFailed: true,
            firstFailureAt: existingMetadata.firstFailureAt ?? Date.now(),
            lastNetworkFailureRequest: generation
          };
        });
        this.recomputeEventState();
        this.render();
        return;
      }

      const now = Date.now();
      const wasWarningVisible = this.shouldShowEventRefreshWarning(now);
      const shouldRenderForUnchangedData = !this._lastUnchangedDataRender ||
        (now - this._lastUnchangedDataRender >= 15 * 60 * 1000);
      this.applyEventsByCalendar(nextEventsByCalendar, {
        startDate,
        endDate,
        lastSuccessfulRefresh: now,
        successfulEntityIds,
        failedEntityIds,
        source: 'network',
        requestId: generation
      });
      const warningVisibilityChanged = wasWarningVisible !== this.shouldShowEventRefreshWarning(now);
      if (failedEntityIds.length === 0) this.persistEventCacheSnapshot({ generation: this._eventWriteGeneration });
      if (anyChanged || shouldRenderForUnchangedData || failedEntityIds.length > 0 || warningVisibilityChanged) {
        this._lastUnchangedDataRender = now;
        if (preserveScroll) {
          this.renderPreservingAgendaScroll();
        } else {
          this.render();
        }
      }
    } finally {
      this._fetching = false;
      if (this._pendingEventRefreshAfterCurrentFetch) {
        this._pendingEventRefreshAfterCurrentFetch = false;
        this.ensureEventsForCurrentRange({ force: true });
      }
    }
  }

  async extendEventsForRange(startDate, endDate, { render = true } = {}) {
    if (!this._hass) return;
    if (this._fetching) {
      this._pendingEventRefreshAfterCurrentFetch = true;
      return false;
    }

    const generation = ++this._eventFetchGeneration;
    this._fetching = true;
    this._lastFetch = Date.now();

    try {
      const fetchResultsByCalendar = await this.fetchEventsByCalendarInRange(startDate, endDate);
      if (generation !== this._eventFetchGeneration) return false;
      const nextEventsByCalendar = { ...this._eventsByCalendar };
      const successfulEntityIds = [];
      const failedEntityIds = [];
      let anyChanged = false;

      this._config.entities.forEach(entityId => {
        const result = fetchResultsByCalendar[entityId];
        if (!result?.success) {
          failedEntityIds.push(entityId);
          return;
        }
        successfulEntityIds.push(entityId);
        const mergedEvents = this.mergeEvents(this._eventsByCalendar[entityId] || [], result.events || []);
        const oldSignature = this._calendarDataSignatures[entityId];
        const newSignature = this.getCalendarDataSignature(mergedEvents);
        if (oldSignature !== newSignature) anyChanged = true;
        nextEventsByCalendar[entityId] = mergedEvents;
      });

      if (successfulEntityIds.length === 0) {
        failedEntityIds.forEach((entityId) => {
          const existingMetadata = this._calendarEventMetadata[entityId] || {};
          this._calendarEventMetadata[entityId] = {
            ...existingMetadata,
            lastSuccessfulRefresh: existingMetadata.lastSuccessfulRefresh ?? this._lastSuccessfulEventRefresh,
            refreshFailed: true,
            firstFailureAt: existingMetadata.firstFailureAt ?? Date.now(),
            lastNetworkFailureRequest: generation
          };
        });
        this.recomputeEventState();
        return false;
      }

      this.applyEventsByCalendar(nextEventsByCalendar, {
        startDate,
        endDate,
        lastSuccessfulRefresh: Date.now(),
        successfulEntityIds,
        failedEntityIds,
        source: 'network',
        requestId: generation,
        coverageMode: 'union'
      });
      if (failedEntityIds.length === 0) this.persistEventCacheSnapshot({ generation: this._eventWriteGeneration });
      if ((render || failedEntityIds.length > 0) && (anyChanged || failedEntityIds.length > 0)) this.render();
      return failedEntityIds.length === 0;
    } finally {
      this._fetching = false;
      if (this._pendingEventRefreshAfterCurrentFetch) {
        this._pendingEventRefreshAfterCurrentFetch = false;
        this.ensureEventsForCurrentRange({ force: true });
      }
    }
  }

  isDateRangeCoveredByLoadedEvents(targetStartDate, targetEndDate) {
    return isDateRangeCoveredByLoadedEventsHelper(this._loadedEventRange, targetStartDate, targetEndDate);
  }

  async ensureEventsForCurrentRange({ force = false, renderIfCovered = false } = {}) {
    const shouldRefreshForAge = shouldRefreshEventsHelper({ lastFetch: this._lastFetch });
    const { startDate: visibleStartDate, endDate: visibleEndDate } = this.getVisibleDateRange();

    // Background stale refreshes run through this path via hass updates.
    // Keep dialogs stable by postponing only those refreshes while modal is open.
    if (this.isEventManagementDialogOpen() && (force || shouldRefreshForAge)) {
      return;
    }

    if (force || shouldRefreshForAge || !this._loadedEventRange) {
      const shouldPreserveScrollDuringRefresh = this._viewMode === 'agenda' && !force && !renderIfCovered;
      await this.updateEvents({ preserveScroll: shouldPreserveScrollDuringRefresh });
      return;
    }

    // Gate fetches on the actually visible range. If the user can already see
    // all required dates from loaded data, avoid any network call.
    if (this.isDateRangeCoveredByLoadedEvents(visibleStartDate, visibleEndDate)) {
      if (renderIfCovered) {
        this.render();
      }
      return;
    }

    // Once visible range falls outside loaded coverage, fetch around current view
    // (with buffer) and only request missing leading/trailing segments.
    const { startDate, endDate } = this.getEventFetchRange();
    const missingRanges = [];

    if (startDate < this._loadedEventRange.startDate) {
      const missingStartEnd = new Date(this._loadedEventRange.startDate);
      missingStartEnd.setDate(missingStartEnd.getDate() - 1);
      missingStartEnd.setHours(23, 59, 59, 999);
      missingRanges.push({ startDate, endDate: missingStartEnd });
    }

    if (endDate > this._loadedEventRange.endDate) {
      const missingEndStart = new Date(this._loadedEventRange.endDate);
      missingEndStart.setDate(missingEndStart.getDate() + 1);
      missingEndStart.setHours(0, 0, 0, 0);
      missingRanges.push({ startDate: missingEndStart, endDate });
    }

    let allExtended = true;
    for (const range of missingRanges) {
      const extended = await this.extendEventsForRange(range.startDate, range.endDate, { render: false });
      if (extended === false) allExtended = false;
    }

    if (allExtended) this.render();
  }

  getEventFetchRange() {
    const { startDate: visibleStart, endDate: visibleEnd } = this.getVisibleDateRange();

    // Keep a small look-behind and look-ahead buffer.
    const startDate = new Date(visibleStart);
    startDate.setDate(startDate.getDate() - 7);

    const endDate = new Date(visibleEnd);
    endDate.setDate(endDate.getDate() + 30);

    return { startDate, endDate };
  }

  getVisibleDateRange() {
    if (this._viewMode === 'agenda') {
      this.ensureAgendaWindowInitialized();
      return getAgendaVisibleDateRange(this._agendaStartDate, this._agendaEndDate);
    }

    if (this._viewMode === 'month') {
      return getMonthVisibleDateRange(this._currentDate, this._config.firstDayOfWeek, this._config.rolling_weeks);
    }

    // Week views: from first shown day to last shown day.
    return getWeekVisibleDateRange(this.getWeekDays());
  }

  getDateRangeChunks(startDate, endDate, chunkDays = 30) {
    return getDateRangeChunks(startDate, endDate, chunkDays);
  }

  getEventStartDate(event) {
    return getNormalizedEventStartDate(event, { parseLocalDate: this.parseLocalDate.bind(this) });
  }

  parseLocalDate(dateStr) {
    return parseLocalDate(dateStr);
  }

  parseCalendarDate(dateStr) {
    if (!dateStr || typeof dateStr !== 'string') return new Date(dateStr);
    const [year, month, day] = dateStr.split('-').map(Number);
    if (![year, month, day].every(Number.isFinite)) return new Date(dateStr);
    return this.zonedTimeToDate(year, month, day, 0, 0, 0, 0);
  }

  parseCalendarDateWithOffset(dateStr, dayOffset = 0) {
    if (!dateStr || typeof dateStr !== 'string') return new Date(dateStr);
    const [year, month, day] = dateStr.split('-').map(Number);
    if (![year, month, day].every(Number.isFinite)) return new Date(dateStr);
    const adjusted = new Date(Date.UTC(year, month - 1, day + dayOffset));
    return this.zonedTimeToDate(adjusted.getUTCFullYear(), adjusted.getUTCMonth() + 1, adjusted.getUTCDate(), 0, 0, 0, 0);
  }

  parsePossiblyLocalDateTime(value) {
    return parsePossiblyLocalDateTime(value);
  }

  formatLocalDate(date) {
    return formatLocalDate(date);
  }


  normalizeTimeZone(timeZone) {
    if (timeZone === undefined || timeZone === null) return null;
    const normalized = String(timeZone).trim();
    if (!normalized) return null;

    try {
      return new Intl.DateTimeFormat('en-US', { timeZone: normalized }).resolvedOptions().timeZone || normalized;
    } catch (error) {
      console.warn(`Daylight Calendar Card: ignoring invalid time_zone config value "${normalized}".`);
      return null;
    }
  }

  getConfiguredTimeZone() {
    return this._config?.time_zone || null;
  }

  withTimeZone(formatOptions = {}) {
    const timeZone = this.getConfiguredTimeZone();
    return timeZone ? { ...formatOptions, timeZone } : formatOptions;
  }

  getDateTimeParts(date, options = {}) {
    const formatter = new Intl.DateTimeFormat('en-US', this.withTimeZone({
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', second: '2-digit',
      hourCycle: 'h23', ...options
    }));
    return formatter.formatToParts(date).reduce((acc, part) => {
      if (part.type !== 'literal') acc[part.type] = part.value;
      return acc;
    }, {});
  }

  getDateParts(date) {
    if (!this.getConfiguredTimeZone()) {
      return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate(), weekday: date.getDay() };
    }
    const parts = this.getDateTimeParts(date, { weekday: 'short' });
    const utcDate = new Date(Date.UTC(Number(parts.year), Number(parts.month) - 1, Number(parts.day)));
    return { year: Number(parts.year), month: Number(parts.month), day: Number(parts.day), weekday: utcDate.getUTCDay() };
  }

  getDisplayDateParts(date) {
    return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate(), weekday: date.getDay() };
  }

  zonedTimeToDate(year, month, day, hour = 0, minute = 0, second = 0, millisecond = 0) {
    const timeZone = this.getConfiguredTimeZone();
    if (!timeZone) return new Date(year, month - 1, day, hour, minute, second, millisecond);

    let timestamp = Date.UTC(year, month - 1, day, hour, minute, second, millisecond);
    for (let i = 0; i < 3; i++) {
      const parts = this.getDateTimeParts(new Date(timestamp));
      const asUTC = Date.UTC(Number(parts.year), Number(parts.month) - 1, Number(parts.day), Number(parts.hour), Number(parts.minute), Number(parts.second), millisecond);
      const wantedUTC = Date.UTC(year, month - 1, day, hour, minute, second, millisecond);
      const delta = asUTC - wantedUTC;
      if (delta === 0) break;
      timestamp -= delta;
    }
    return new Date(timestamp);
  }

  getDayBounds(date) {
    const { year, month, day } = this.getDisplayDateParts(date);
    const dayStart = this.zonedTimeToDate(year, month, day, 0, 0, 0, 0);
    const next = new Date(year, month - 1, day + 1);
    const nextDayStart = this.zonedTimeToDate(next.getFullYear(), next.getMonth() + 1, next.getDate(), 0, 0, 0, 0);
    return { dayStart, nextDayStart };
  }

  getDatePartValue(date, part) {
    return this.getDisplayDateParts(date)[part];
  }

  getDefaultColor(index) {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2'];
    return colors[index % colors.length];
  }

  connectedCallback() {
    checkAndShowStaleResourceWarning();
    window.addEventListener('resize', this._handleViewportResize);
    window.addEventListener('daylight-calendar-card-flush-event-cache', this._handleEventCacheFlush);
    window.visualViewport?.addEventListener('resize', this._handleViewportResize);
    this.attachSystemThemeListener();
    this.observeHostAndParentResize();
    this.render();
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this._handleViewportResize);
    window.removeEventListener('daylight-calendar-card-flush-event-cache', this._handleEventCacheFlush);
    window.visualViewport?.removeEventListener('resize', this._handleViewportResize);
    this._eventCacheGeneration += 1;
    this._eventFetchGeneration += 1;
    this.clearEventRefreshWarningTimer();
    this.cancelMonthCompactMeasurement();
    if (this._monthGridResizeObserver) {
      this._monthGridResizeObserver.disconnect();
      this._monthGridResizeObserver = null;
    }
    if (this._headerResizeObserver) {
      this._headerResizeObserver.disconnect();
      this._headerResizeObserver = null;
    }
    if (this._hostResizeObserver) {
      this._hostResizeObserver.disconnect();
      this._hostResizeObserver = null;
    }
    this._observedResizeParent = null;
    this._lastObservedHostSize = null;
    this._pendingHostResizeRender = false;
    if (this._hostResizeRaf !== null) {
      window.cancelAnimationFrame(this._hostResizeRaf);
      this._hostResizeRaf = null;
    }
    this.detachSystemThemeListener();
    this.teardownWeatherForecastSubscription();
    this.updateEventModalOpenState(null);
    if (this._modalVisibilityObserver) {
      this._modalVisibilityObserver.disconnect();
      this._modalVisibilityObserver = null;
    }
    if (this._wrapMeasureRaf1 !== null) {
      window.cancelAnimationFrame(this._wrapMeasureRaf1);
      this._wrapMeasureRaf1 = null;
    }
    if (this._wrapMeasureRaf2 !== null) {
      window.cancelAnimationFrame(this._wrapMeasureRaf2);
      this._wrapMeasureRaf2 = null;
    }
  }

  getCompactMaxHeight(containerTopInViewport = null) {
    if (!this._config.compact_height) return null;

    const viewportHeight = window.visualViewport?.height || window.innerHeight;
    const containerTop = Math.max(
      containerTopInViewport ?? this.getBoundingClientRect().top,
      0
    );
    const bottomSpacing = 0;
    const minimumHeight = 180;

    return Math.max(minimumHeight, Math.floor(viewportHeight - containerTop - bottomSpacing));
  }

  getElementSizeForAllocation(element) {
    if (!element || typeof element.getBoundingClientRect !== 'function') return { width: 0, height: 0 };
    const rect = element.getBoundingClientRect();
    return {
      width: Number.isFinite(rect.width) ? rect.width : 0,
      height: Number.isFinite(rect.height) ? rect.height : 0
    };
  }

  hasFixedHeightParentAllocation() {
    const parent = this.parentElement;
    if (!parent || typeof parent.getBoundingClientRect !== 'function') return false;

    const parentSize = this.getElementSizeForAllocation(parent);
    if (parentSize.height <= 0) return false;

    const parentStyle = typeof window.getComputedStyle === 'function' ? window.getComputedStyle(parent) : null;
    const parentMaxHeight = parentStyle?.maxHeight || '';
    const parentDisplay = parentStyle?.display || '';
    const parentOverflowY = parentStyle?.overflowY || parentStyle?.overflow || '';
    const inlineStyle = parent.getAttribute?.('style') || '';
    const hasExplicitCssHeight = Boolean(
      parent.style?.height ||
      parent.style?.minHeight ||
      parent.style?.maxHeight ||
      /(?:^|;)\s*(?:height|min-height|max-height)\s*:/i.test(inlineStyle) ||
      (parentMaxHeight && parentMaxHeight !== 'none' && parentMaxHeight !== '0px')
    );
    const looksLikeGridAllocation = /grid/i.test(parentDisplay) || parent.hasAttribute?.('grid_options') || parent.classList?.contains('grid-cell');
    const clipsOrScrollsOverflow = /(auto|hidden|scroll|clip)/.test(parentOverflowY);
    const hostSize = this.getElementSizeForAllocation(this);
    const parentHasExtraAllocatedHeight = hostSize.height > 0 && parentSize.height - hostSize.height > 1;

    return hasExplicitCssHeight || looksLikeGridAllocation || clipsOrScrollsOverflow || parentHasExtraAllocatedHeight;
  }

  getGridAwareCompactContainerStyle() {
    return 'height: 100%; min-height: 0; overflow-y: auto;';
  }

  getCompactMonthGridStyle(monthWeekRows, compactMaxHeight = null) {
    const rowTemplate = `grid-template-rows: auto repeat(${monthWeekRows}, minmax(0, 1fr));`;

    if (this.hasFixedHeightParentAllocation()) {
      return `height: 100%; min-height: 0; overflow-y: auto; ${rowTemplate}`;
    }

    const resolvedMaxHeight = compactMaxHeight || this.getCompactMaxHeight(this._monthContainerTopInViewport);
    return resolvedMaxHeight
      ? `height: ${resolvedMaxHeight}px; overflow-y: auto; ${rowTemplate}`
      : '';
  }

  getCompactContainerStyle(maxHeight = null) {
    if (!this._config.compact_height) return '';

    if (this.hasFixedHeightParentAllocation()) {
      return this.getGridAwareCompactContainerStyle();
    }

    const resolvedMaxHeight = maxHeight || this.getCompactMaxHeight();
    if (!resolvedMaxHeight) return '';

    return `height: ${resolvedMaxHeight}px; max-height: ${resolvedMaxHeight}px; overflow-y: auto;`;
  }

  preserveAgendaScrollForNextRender() {
    if (this._viewMode !== 'agenda' || Number.isFinite(this._agendaPendingScrollTop)) return;
    const agendaContainer = this.getRootElementById('agenda-container');
    if (!agendaContainer) return;
    this._agendaPendingScrollTop = agendaContainer.scrollTop;
  }

  renderPreservingAgendaScroll() {
    this.preserveAgendaScrollForNextRender();
    this.render();
  }

  setAgendaScrollTopWithoutTriggeringLoad(container, scrollTop) {
    if (!container) return;

    this._agendaSuppressScrollHandling = true;
    container.scrollTop = scrollTop;

    window.requestAnimationFrame(() => {
      this._agendaSuppressScrollHandling = false;
    });
  }

  updateWeekStandardFixedOffsetHeightFromDom({ renderOnChange = true } = {}) {
    if (this._viewMode !== 'week-standard' || !this._root) return;
    if (this.isEventManagementDialogOpen()) return;

    const baselineHeaderHeight = 60;
    const container = this._root.querySelector('.week-standard-container');
    const dayHeaders = Array.from(this._root.querySelectorAll('.week-standard-day-header'));
    if (!container || dayHeaders.length === 0) return;

    const measuredContainerTop = Math.max(container.getBoundingClientRect().top, 0);
    if (!Number.isFinite(measuredContainerTop)) return;

    const hasRenderedStackedDayBadges = this._config.day_badge_layout_week === 'stacked'
      && dayHeaders.some((header) => Boolean(header.querySelector?.('.day-badges .day-badge')));

    if (!hasRenderedStackedDayBadges) {
      const extraHeaderHeightChanged = this._weekStandardExtraHeaderHeight !== 0;
      const headerHeightChanged = this._weekStandardHeaderHeight !== null;
      const containerTopChanged = this._weekStandardContainerTopInViewport === null || Math.abs(this._weekStandardContainerTopInViewport - measuredContainerTop) > 1;

      if (extraHeaderHeightChanged || headerHeightChanged || containerTopChanged) {
        this._weekStandardExtraHeaderHeight = 0;
        this._weekStandardHeaderHeight = null;
        this._weekStandardContainerTopInViewport = measuredContainerTop;
        container.style.removeProperty('--week-standard-day-header-height');
        container.style.removeProperty('--week-standard-time-header-spacer-height');
        if (renderOnChange) this.render();
      }
      return;
    }

    const previousHeaderHeightStyle = container.style.getPropertyValue('--week-standard-day-header-height');
    if (previousHeaderHeightStyle) {
      container.style.removeProperty('--week-standard-day-header-height');
    }

    const measuredSharedHeaderHeight = Math.ceil(Math.max(
      baselineHeaderHeight,
      ...dayHeaders.map((header) => header.getBoundingClientRect?.().height || 0)
    ));

    if (previousHeaderHeightStyle) {
      container.style.setProperty('--week-standard-day-header-height', previousHeaderHeightStyle);
    }

    if (!Number.isFinite(measuredSharedHeaderHeight)) return;

    const effectiveExtraHeaderHeight = Math.max(0, measuredSharedHeaderHeight - baselineHeaderHeight);
    const effectiveSharedHeaderHeight = effectiveExtraHeaderHeight > 0 ? measuredSharedHeaderHeight : null;
    const extraHeaderHeightChanged = Math.abs(this._weekStandardExtraHeaderHeight - effectiveExtraHeaderHeight) > 1;
    const headerHeightChanged = this._weekStandardHeaderHeight === null
      ? effectiveSharedHeaderHeight !== null
      : effectiveSharedHeaderHeight === null || Math.abs(this._weekStandardHeaderHeight - effectiveSharedHeaderHeight) > 1;
    const containerTopChanged = this._weekStandardContainerTopInViewport === null || Math.abs(this._weekStandardContainerTopInViewport - measuredContainerTop) > 1;

    if (extraHeaderHeightChanged || headerHeightChanged || containerTopChanged) {
      this._weekStandardExtraHeaderHeight = effectiveExtraHeaderHeight;
      this._weekStandardHeaderHeight = effectiveSharedHeaderHeight;
      this._weekStandardContainerTopInViewport = measuredContainerTop;
      if (effectiveSharedHeaderHeight === null) {
        container.style.removeProperty('--week-standard-day-header-height');
        container.style.removeProperty('--week-standard-time-header-spacer-height');
      } else {
        const timeHeaderSpacerHeight = Math.max(60, effectiveSharedHeaderHeight - 35);
        container.style.setProperty('--week-standard-day-header-height', `${effectiveSharedHeaderHeight}px`);
        container.style.setProperty('--week-standard-time-header-spacer-height', `${timeHeaderSpacerHeight}px`);
      }
      if (renderOnChange) this.render();
    }
  }

  updateWeekCompactStackedHeaderHeightFromDom({ renderOnChange = true } = {}) {
    if (this._viewMode !== 'week-compact' || !this._root) return;
    if (this.isEventManagementDialogOpen()) return;

    const container = this._root.querySelector('.week-compact-container');
    const dayHeaders = Array.from(this._root.querySelectorAll('.week-day-header'));
    if (!container || dayHeaders.length === 0) return;

    const hasRenderedStackedDayBadges = this._config.day_badge_layout_week === 'stacked'
      && dayHeaders.some((header) => Boolean(header.querySelector?.('.day-badges .day-badge')));

    if (!hasRenderedStackedDayBadges) {
      if (this._weekCompactHeaderHeight !== null) {
        this._weekCompactHeaderHeight = null;
        container.style.removeProperty('--week-compact-header-height');
        if (renderOnChange) this.render();
      }
      return;
    }

    const previousHeaderHeightStyle = container.style.getPropertyValue('--week-compact-header-height');
    if (previousHeaderHeightStyle) {
      container.style.removeProperty('--week-compact-header-height');
    }

    const measuredHeaderHeight = Math.ceil(Math.max(
      0,
      ...dayHeaders.map((header) => header.getBoundingClientRect?.().height || 0)
    ));

    if (previousHeaderHeightStyle) {
      container.style.setProperty('--week-compact-header-height', previousHeaderHeightStyle);
    }

    if (!Number.isFinite(measuredHeaderHeight) || measuredHeaderHeight <= 0) return;

    const headerHeightChanged = this._weekCompactHeaderHeight === null || Math.abs(this._weekCompactHeaderHeight - measuredHeaderHeight) > 1;
    if (headerHeightChanged) {
      this._weekCompactHeaderHeight = measuredHeaderHeight;
      container.style.setProperty('--week-compact-header-height', `${measuredHeaderHeight}px`);
      if (renderOnChange) this.render();
    }
  }



  cancelMonthCompactMeasurement() {
    if (this._monthMeasureRaf !== null) {
      window.cancelAnimationFrame(this._monthMeasureRaf);
      this._monthMeasureRaf = null;
    }

    if (this._monthMeasureRenderRaf !== null) {
      window.cancelAnimationFrame(this._monthMeasureRenderRaf);
      this._monthMeasureRenderRaf = null;
    }
  }

  scheduleMonthCompactTopMeasurement(force = false) {
    if (this._viewMode !== 'month' || !this._config.compact_height || this.shouldShowAllEventsInMonth()) return;
    if (this.isEventManagementDialogOpen()) return;
    if (!force && !this._monthCompactMeasurementDirty && this._monthContainerTopInViewport !== null) return;
    if (this._monthMeasureRaf !== null) return;

    this._monthMeasureRaf = window.requestAnimationFrame(() => {
      this._monthMeasureRaf = null;
      this.updateMonthContainerTopInViewportFromDom();
      this._monthCompactMeasurementDirty = false;
    });
  }


  observeHostAndParentResize() {
    if (typeof window.ResizeObserver !== 'function') return;

    const parent = this.parentElement || null;
    if (this._hostResizeObserver && this._observedResizeParent === parent) return;

    if (this._hostResizeObserver) {
      this._hostResizeObserver.disconnect();
      this._hostResizeObserver = null;
    }

    this._observedResizeParent = parent;
    this._lastObservedHostSize = this.measureHostAndParentSize();
    this._hostResizeObserver = new window.ResizeObserver(() => {
      this.scheduleHostAndParentResizeHandling();
    });
    this._hostResizeObserver.observe(this);
    if (parent) {
      this._hostResizeObserver.observe(parent);
    }
  }

  measureHostAndParentSize() {
    const hostSize = this.getElementSizeForAllocation(this);
    const parentSize = this.getElementSizeForAllocation(this.parentElement);
    return {
      hostWidth: Math.round(hostSize.width),
      hostHeight: Math.round(hostSize.height),
      parentWidth: Math.round(parentSize.width),
      parentHeight: Math.round(parentSize.height)
    };
  }

  hasObservedHostSizeChanged(nextSize) {
    const previousSize = this._lastObservedHostSize;
    if (!previousSize) return true;
    return Object.keys(nextSize).some((key) => Math.abs(nextSize[key] - previousSize[key]) > 1);
  }

  scheduleHostAndParentResizeHandling() {
    if (this._hostResizeRaf !== null) return;

    this._hostResizeRaf = window.requestAnimationFrame(() => {
      this._hostResizeRaf = null;
      const nextSize = this.measureHostAndParentSize();
      if (!this.hasObservedHostSizeChanged(nextSize)) return;

      this._lastObservedHostSize = nextSize;
      const needsCompactHeightRender = !!this._config.compact_height;
      if (this._config.compact_height && this._viewMode === 'month' && !this.shouldShowAllEventsInMonth()) {
        this._monthCompactMeasurementDirty = true;
      }

      if (needsCompactHeightRender) {
        if (this.isEventManagementDialogOpen()) {
          this._pendingHostResizeRender = true;
          return;
        }

        this.render();
        return;
      }

      if (this.isEventManagementDialogOpen() && this.hasWidthDependentMeasuredLayoutState()) {
        this._pendingWidthDependentLayoutRefresh = true;
        return;
      }

      this.updateCompactHeaderWrapState();
      this.updateCalendarBadgesScrollState();
      this.refreshWidthDependentLayoutMeasurements();
    });
  }

  hasWidthDependentMeasuredLayoutState() {
    return this._config?.day_badge_layout_week === 'stacked'
      && (this._viewMode === 'week-standard' || this._viewMode === 'week-compact');
  }

  refreshWidthDependentLayoutMeasurements() {
    if (this._viewMode === 'week-standard') {
      this.updateWeekStandardFixedOffsetHeightFromDom({ renderOnChange: false });
    } else if (this._viewMode === 'week-compact') {
      this.updateWeekCompactStackedHeaderHeightFromDom({ renderOnChange: false });
    }
  }

  flushPendingHostResizeRender() {
    const shouldRender = this._pendingHostResizeRender;
    const shouldRefreshWidthMeasurements = this._pendingWidthDependentLayoutRefresh;
    this._pendingHostResizeRender = false;
    this._pendingWidthDependentLayoutRefresh = false;

    if (shouldRefreshWidthMeasurements) {
      this.refreshWidthDependentLayoutMeasurements();
    }

    if (shouldRender) {
      this.render();
    }
  }

  observeHeaderResize() {
    if (!this._root || typeof window.ResizeObserver !== 'function') return;

    if (this._headerResizeObserver) {
      this._headerResizeObserver.disconnect();
      this._headerResizeObserver = null;
    }

    const headerSelector = this._config.compact_header ? '.header-compact' : '.header';
    const header = this._root.querySelector(headerSelector);
    if (!header) return;

    this._headerResizeObserver = new window.ResizeObserver(() => {
      this.updateCompactHeaderWrapState();
    });
    this._headerResizeObserver.observe(header);
  }

  observeMonthGridResize() {
    if (!this._root || typeof window.ResizeObserver !== 'function') return;

    if (this._monthGridResizeObserver) {
      this._monthGridResizeObserver.disconnect();
      this._monthGridResizeObserver = null;
    }

    if (this._viewMode !== 'month' || !this._config.compact_height || this.shouldShowAllEventsInMonth()) return;

    const container = this._root.querySelector('.calendar-container');
    if (!container) return;

    this._monthGridResizeObserver = new window.ResizeObserver(() => {
      this._monthCompactMeasurementDirty = true;
      this.scheduleMonthCompactTopMeasurement();
    });
    this._monthGridResizeObserver.observe(container);
  }

  updateMonthContainerTopInViewportFromDom() {
    if (this._viewMode !== 'month' || !this._config.compact_height || this.shouldShowAllEventsInMonth() || !this._root) return;
    if (this.isEventManagementDialogOpen()) return;

    const container = this._root.querySelector('.calendar-grid');
    if (!container) return;

    const measuredContainerTop = Math.max(container.getBoundingClientRect().top, 0);
    const viewportHeight = window.visualViewport?.height || window.innerHeight;
    if (!Number.isFinite(measuredContainerTop)) return;
    if (!Number.isFinite(viewportHeight)) return;

    const containerTopChanged = this._monthContainerTopInViewport === null || Math.abs(this._monthContainerTopInViewport - measuredContainerTop) > 1;
    const viewportHeightChanged = this._lastCompactMonthViewportHeight === null || Math.abs(this._lastCompactMonthViewportHeight - viewportHeight) > 1;

    if (containerTopChanged) {
      this._monthContainerTopInViewport = measuredContainerTop;
    }
    if (viewportHeightChanged) {
      this._lastCompactMonthViewportHeight = viewportHeight;
    }

    if (containerTopChanged || viewportHeightChanged) {
      if (this._monthMeasureRenderRaf === null) {
        this._monthMeasureRenderRaf = window.requestAnimationFrame(() => {
          this._monthMeasureRenderRaf = null;
          this.render();
        });
      }
    }
  }

  updateAgendaContainerTopInViewportFromDom() {
    if (this._viewMode !== 'agenda' || !this._config.compact_height || !this._root) return;
    if (this.isEventManagementDialogOpen()) return;

    const container = this._root.querySelector('.agenda-container');
    if (!container) return;

    const measuredContainerTop = Math.max(container.getBoundingClientRect().top, 0);
    if (!Number.isFinite(measuredContainerTop)) return;

    const containerTopChanged = this._agendaContainerTopInViewport === null || Math.abs(this._agendaContainerTopInViewport - measuredContainerTop) > 1;
    if (containerTopChanged) {
      this._agendaContainerTopInViewport = measuredContainerTop;
      this.render();
    }
  }


  getLanguage() {
    return resolveLanguage(this._config.language || this._hass?.language || this._hass?.locale?.language);
  }

  getLocale() {
    if (this._config.locale) return this._config.locale;

    const configuredLanguage = this._config.language ? resolveLanguage(this._config.language) : null;
    if (configuredLanguage) return TRANSLATIONS[configuredLanguage]?.locale || this._config.language;

    const hassLocale = this._hass?.locale?.language;
    if (hassLocale) return hassLocale;

    const hassLanguage = this._hass?.language;
    if (hassLanguage) {
      const resolvedHassLanguage = resolveLanguage(hassLanguage);
      return TRANSLATIONS[resolvedHassLanguage]?.locale || hassLanguage;
    }

    return globalThis.navigator?.languages?.[0]
      || globalThis.navigator?.language
      || TRANSLATIONS[DEFAULT_LANGUAGE]?.locale
      || 'en-US';
  }

  t(key, params = {}) {
    return translate(this.getLanguage(), key, params);
  }

  getWeekdayNameFormat() {
    return this._config?.display_full_weekday_names ? 'long' : 'short';
  }

  getWeekdayNames(format = this.getWeekdayNameFormat()) {
    const formatter = new Intl.DateTimeFormat(this.getLocale(), { weekday: format });
    const baseDate = new Date(2021, 5, 6);
    const names = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(baseDate);
      date.setDate(baseDate.getDate() + i);
      names.push(formatter.format(date));
    }
    return names;
  }

  setWeekStart() {
    const date = new Date(this._currentDate);
    const day = date.getDay();
    const diff = (day - this._config.firstDayOfWeek + 7) % 7;
    date.setDate(date.getDate() - diff);
    date.setHours(0, 0, 0, 0);
    this._weekStart = date;
  }

  resetAgendaWindowToToday() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    this._currentDate = new Date(today);
    const agendaWindow = createAgendaWindow(today, this.getAgendaPeriodDaySpan());
    this._agendaStartDate = agendaWindow.startDate;
    this._agendaEndDate = agendaWindow.endDate;
    this._agendaVisibleStartDate = agendaWindow.visibleStartDate;
    this._agendaVisibleEndDate = agendaWindow.visibleEndDate;
  }

  ensureAgendaWindowInitialized() {
    if (this._agendaStartDate && this._agendaEndDate) return;
    this.resetAgendaWindowToToday();
  }

  getAgendaDays() {
    this.ensureAgendaWindowInitialized();
    return getAgendaDaysViewModel(this._agendaStartDate, this._agendaEndDate);
  }

  getAgendaVisibleDateRangeFromDom() {
    if (!this._root || this._viewMode !== 'agenda') return null;

    const container = this.getRootElementById('agenda-container');
    if (!container) return null;

    const containerRect = container.getBoundingClientRect();
    const dayRows = Array.from(container.querySelectorAll('.agenda-day-row'));
    if (dayRows.length === 0) return null;

    const visibleDates = dayRows
      .map((row) => {
        const rect = row.getBoundingClientRect();
        const isVisible = rect.bottom > containerRect.top && rect.top < containerRect.bottom;
        if (!isVisible) return null;
        const rawDate = row.getAttribute('data-date');
        if (!rawDate) return null;
        return new Date(rawDate);
      })
      .filter((date) => date instanceof Date && !Number.isNaN(date.getTime()));

    if (visibleDates.length === 0) return null;

    const startDate = new Date(visibleDates[0]);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(visibleDates[visibleDates.length - 1]);
    endDate.setHours(23, 59, 59, 999);

    return { startDate, endDate };
  }

  updateAgendaVisibleDateRangeFromDom() {
    const visibleRange = this.getAgendaVisibleDateRangeFromDom();
    if (!visibleRange) {
      this._agendaVisibleStartDate = null;
      this._agendaVisibleEndDate = null;
      this.updateAgendaPeriodLabelInDom();
      return;
    }

    this._agendaVisibleStartDate = visibleRange.startDate;
    this._agendaVisibleEndDate = visibleRange.endDate;
    this.updateAgendaPeriodLabelInDom();
  }

  isAgendaRangeWithinCurrentWindow(range) {
    return isAgendaRangeWithinWindow(range, this._agendaStartDate, this._agendaEndDate);
  }

  updateAgendaPeriodLabelInDom() {
    if (!this._root || this._viewMode !== 'agenda') return;
    const label = this.getPeriodLabel();
    this._root.querySelectorAll('.month-year').forEach((labelEl) => {
      labelEl.textContent = label;
    });
  }

  getAgendaViewportDayCapacity() {
    if (!this._root || this._viewMode !== 'agenda') {
      return this._agendaDaysPerScrollLoad;
    }

    const container = this.getRootElementById('agenda-container');
    if (!container) {
      return this._agendaDaysPerScrollLoad;
    }

    const rows = Array.from(container.querySelectorAll('.agenda-day-row'));
    if (rows.length === 0) {
      return this._agendaDaysPerScrollLoad;
    }

    const maxHeight = container.clientHeight;
    if (!Number.isFinite(maxHeight) || maxHeight <= 0) {
      return this._agendaDaysPerScrollLoad;
    }

    let consumedHeight = 0;
    let dayCount = 0;

    for (const row of rows) {
      const rowHeight = row.getBoundingClientRect().height;
      if (!Number.isFinite(rowHeight) || rowHeight <= 0) continue;

      if ((consumedHeight + rowHeight) > maxHeight && dayCount > 0) {
        break;
      }

      consumedHeight += rowHeight;
      dayCount += 1;

      if (consumedHeight >= maxHeight) {
        break;
      }
    }

    return Math.max(1, dayCount || this._agendaDaysPerScrollLoad);
  }

  getAgendaRollingDays() {
    return getAgendaRollingDaysViewModel(this._config);
  }

  getAgendaPeriodDaySpan() {
    return getAgendaPeriodDaySpanViewModel(this._config);
  }

  getRollingDaysForView(viewMode = this._viewMode) {
    return getRollingDaysForViewModel(viewMode, this._config);
  }

  getWeekDays(viewMode = this._viewMode) {
    return getWeekDaysViewModel({
      currentDate: this._currentDate,
      weekStart: this._weekStart,
      weekDays: this._config.week_days,
      rollingDays: this.getRollingDaysForView(viewMode)
    });
  }

  getStyles() {
    return getCardStyles();
  }

  render() {
    this._dayBadgeActions = new Map();
    this._dayBadgeActionSequence = 0;
    const shouldRestoreAgendaScrollPosition = this._viewMode === 'agenda' && Number.isFinite(this._agendaPendingScrollTop);
    const agendaScrollTopToRestore = shouldRestoreAgendaScrollPosition ? this._agendaPendingScrollTop : null;
    const today = new Date();
    const year = this._currentDate.getFullYear();
    const month = this._currentDate.getMonth();

    const themeCardBackground = this._isDarkMode ? '#2a2f36' : '#ffffff';
    const calendarBaseBackground = `var(--calendar-background, var(--theme-card-background, var(--ha-card-background, var(--card-background-color, ${themeCardBackground}))))`;
    const normalizedBackgroundOpacity = this.normalizeBackgroundOpacity(this._config.background_opacity, this._config.background_transparent ? 100 : 0);
    const rawHeaderBackgroundColor = this.normalizeSingleColor(this._config.header_color);
    const resolvedHeaderBackgroundBase = typeof rawHeaderBackgroundColor === 'string' && rawHeaderBackgroundColor.trim().toLowerCase() === 'match-card-background'
      ? calendarBaseBackground
      : (rawHeaderBackgroundColor || DEFAULT_CONFIG_VALUES.header_color);
    const normalizedHeaderBackgroundOpacity = this.normalizeBackgroundOpacity(
      this._config.header_background_opacity,
      this._config.header_background_transparent ? 100 : 0
    );
    const normalizedHeaderReveal = Math.max(0, Math.min(1, normalizedHeaderBackgroundOpacity / 100));
    const headerAlpha = Math.max(0.2, 1 - (normalizedHeaderReveal * 0.75));
    const configuredHeaderTextColor = this.normalizeSingleColor(this._config.header_text_color);
    let resolvedHeaderTextColor = configuredHeaderTextColor;
    if (!resolvedHeaderTextColor) {
      const headerBaseForContrast = typeof rawHeaderBackgroundColor === 'string' && rawHeaderBackgroundColor.trim().toLowerCase() === 'match-card-background'
        ? themeCardBackground
        : resolvedHeaderBackgroundBase;
      const headerBaseRgb = this.colorToRgb(headerBaseForContrast);
      const themeCardBackgroundRgb = this.colorToRgb(themeCardBackground);

      if (headerBaseRgb && themeCardBackgroundRgb && headerAlpha < 1) {
        const blendedHeaderRgb = {
          r: Math.round((headerBaseRgb.r * headerAlpha) + (themeCardBackgroundRgb.r * (1 - headerAlpha))),
          g: Math.round((headerBaseRgb.g * headerAlpha) + (themeCardBackgroundRgb.g * (1 - headerAlpha))),
          b: Math.round((headerBaseRgb.b * headerAlpha) + (themeCardBackgroundRgb.b * (1 - headerAlpha)))
        };
        resolvedHeaderTextColor = this.getContractColor(`rgb(${blendedHeaderRgb.r}, ${blendedHeaderRgb.g}, ${blendedHeaderRgb.b})`);
      } else {
        resolvedHeaderTextColor = this.getContractColor(headerBaseForContrast);
      }
    }
    const headerControlBackground = this.colorWithAlpha(resolvedHeaderTextColor, 0.16);
    const headerControlHoverBackground = this.colorWithAlpha(resolvedHeaderTextColor, 0.24);
    const headerControlActiveBackground = this.colorWithAlpha(resolvedHeaderTextColor, 0.32);
    const headerControlBorder = this.colorWithAlpha(resolvedHeaderTextColor, 0.4);
    const headerControlBorderHover = this.colorWithAlpha(resolvedHeaderTextColor, 0.6);
    const wrappedHeaderBackground = normalizedHeaderBackgroundOpacity <= 0
      ? resolvedHeaderBackgroundBase
      : 'transparent';
    const headerStyle = `--header-background-base: ${resolvedHeaderBackgroundBase}; --header-background-alpha: ${headerAlpha}; --header-wrapped-background: ${wrappedHeaderBackground}; --header-text-color: ${resolvedHeaderTextColor}; --header-control-bg: ${headerControlBackground}; --header-control-bg-hover: ${headerControlHoverBackground}; --header-control-bg-active: ${headerControlActiveBackground}; --header-control-border: ${headerControlBorder}; --header-control-border-hover: ${headerControlBorderHover};`;
    const normalizedBackgroundImageUrl = this.normalizeBackgroundImageUrl(this._config.background_image_url);
    const safeBackgroundImageUrl = normalizedBackgroundImageUrl
      ? String(normalizedBackgroundImageUrl).replace(/[\'\\]/g, '\\$&')
      : null;
    const hasCustomBackground = normalizedBackgroundOpacity > 0;
    const backgroundImageStyle = safeBackgroundImageUrl
      ? `--calendar-background-image: url('${safeBackgroundImageUrl}'); --calendar-background-size: ${this._config.background_image_size}; --calendar-background-position: ${this._config.background_image_position}; --calendar-background-repeat: ${this._config.background_image_repeat};`
      : '';
    const backgroundAlpha = (100 - normalizedBackgroundOpacity) / 100;
    const normalizedReveal = Math.max(0, Math.min(1, normalizedBackgroundOpacity / 100));
    const scaledBackgroundImageAlpha = Math.max(0, Math.min(1, normalizedReveal * 0.75));
    const backgroundImageAlpha = safeBackgroundImageUrl ? scaledBackgroundImageAlpha : 0;
    const customSurfaceAlpha = Math.max(0.2, 1 - (normalizedReveal * 0.75));
    const customSurfacePalette = this._isDarkMode
      ? {
        calendar: '48, 54, 63',
        column: '59, 67, 77',
        allDay: '53, 60, 69',
        slot: '53, 60, 69'
      }
      : {
        calendar: '249, 250, 251',
        column: '255, 255, 255',
        allDay: '249, 250, 251',
        slot: '255, 255, 255'
      };
    const backgroundStyle = `--theme-card-background: ${themeCardBackground}; --calendar-background-opacity: ${backgroundAlpha}; --calendar-background-image-opacity: ${backgroundImageAlpha}; --custom-surface-alpha: ${customSurfaceAlpha}; --custom-surface-calendar-rgb: ${customSurfacePalette.calendar}; --custom-surface-column-rgb: ${customSurfacePalette.column}; --custom-surface-all-day-rgb: ${customSurfacePalette.allDay}; --custom-surface-slot-rgb: ${customSurfacePalette.slot};`;
    const containerStyle = `${headerStyle} ${backgroundStyle} ${backgroundImageStyle}`.trim();

    this._root.innerHTML = `
      <style>
        ${this.getStyles()}
      </style>

      ${this._config.uix?.style ? `
        <style class="uix-style">
          ${this._config.uix.style}
        </style>
      ` : ''}

      <div class="calendar-container ${this._isDarkMode ? 'dark-mode' : ''} ${hasCustomBackground ? 'custom-background' : ''} ${this._config.hide_year ? 'hide-year' : ''} ${this._config.agenda_compact_events ? 'agenda-compact-events' : ''}" style="${containerStyle}">
        ${this._config.hide_header ? '' : (this._config.compact_header ? this.renderCompactHeader() : this.renderStandardHeader())}
        ${this.renderEventRefreshWarning()}
        <div class="calendar-body">
          ${this.renderCalendarView()}
        </div>

        <div class="event-modal" id="event-modal">
          <div class="modal-content ${this.getEventModalSizeClass()}" id="modal-content">
          </div>
        </div>
      </div>
    `;

    this.observeHostAndParentResize();
    this.attachEventListeners();
    this.updateCompactHeaderWrapState();
    this.updateCalendarBadgesScrollState();
    this.updateWeekStandardFixedOffsetHeightFromDom();
    this.updateWeekCompactStackedHeaderHeightFromDom();
    this.observeHeaderResize();
    this.observeMonthGridResize();
    if (this._viewMode === 'month' && this._config.compact_height && !this.shouldShowAllEventsInMonth()) {
      if (this._monthContainerTopInViewport === null) {
        this._monthCompactMeasurementDirty = true;
      }
      this.scheduleMonthCompactTopMeasurement();
    }
    this.updateAgendaContainerTopInViewportFromDom();

    if (shouldRestoreAgendaScrollPosition) {
      window.requestAnimationFrame(() => {
        const agendaContainer = this.getRootElementById('agenda-container');
        this.setAgendaScrollTopWithoutTriggeringLoad(agendaContainer, agendaScrollTopToRestore);
      });
    }
    this._agendaPendingScrollTop = null;

    if (this._viewMode === 'agenda') {
      window.requestAnimationFrame(() => {
        this.updateAgendaVisibleDateRangeFromDom();
      });
    }
  }

  getHeaderRenderHelpers() {
    return {
      escapeHtml: (value) => this.escapeHtml(value),
      getPeriodLabel: () => this.getPeriodLabel(),
      renderCalendarBadgesInline: () => this.renderCalendarBadgesInline(),
      renderDashboardNavButton: () => this.renderDashboardNavButton(),
      renderHeaderTitle: () => this.renderHeaderTitle(),
      renderPeriodNavigationButtons: (buttonType) => this.renderPeriodNavigationButtons(buttonType),
      renderThemeToggle: () => this.renderThemeToggle(),
      renderViewModeButtons: () => this.renderViewModeButtons(),
      t: (key, params) => this.t(key, params)
    };
  }

  renderStandardHeader() {
    const writableCalendars = this.getWritableCalendars();
    const canAddEvents = this._config.enable_event_management && writableCalendars.length > 0 && !this._config.hide_add_event_button;
    const shouldShowControls = !this._config.hide_controls;

    return renderStandardHeaderMarkup({
      canAddEvents,
      shouldShowControls,
      helpers: this.getHeaderRenderHelpers()
    });
  }

  renderCompactHeader() {
    const writableCalendars = this.getWritableCalendars();
    const canAddEvents = this._config.enable_event_management && writableCalendars.length > 0 && !this._config.hide_add_event_button;
    const shouldShowCalendars = !this._config.hide_calendars;
    const shouldShowControls = !this._config.hide_controls;

    return renderCompactHeaderMarkup({
      canAddEvents,
      shouldShowCalendars,
      shouldShowControls,
      helpers: this.getHeaderRenderHelpers()
    });
  }

  getCalendarBadgeRenderHelpers() {
    return {
      escapeHtml: (value) => this.escapeHtml(value),
      formatPersonStateLabel: (state) => this.formatPersonStateLabel(state),
      getCalendarBadgeIcon: (entityId) => this.getCalendarBadgeIcon(entityId),
      getCalendarBadgePersonEntityId: (entityId) => this.getCalendarBadgePersonEntityId(entityId),
      getCalendarBadgePersonState: (entityId) => this.getCalendarBadgePersonState(entityId),
      getContractColor: (color) => this.getContractColor(color),
      getPersonEntityPictureUrl: (state) => this.getPersonEntityPictureUrl(state),
      lightenColor: (color, amount) => this.lightenColor(color, amount),
      normalizeBackgroundImageUrl: (url) => this.normalizeBackgroundImageUrl(url),
      normalizeSingleColor: (color) => this.normalizeSingleColor(color)
    };
  }

  renderCalendarBadgesInline() {
    return renderCalendarBadgesInlineMarkup({
      badgeItems: this.getVirtualBadgeItems(),
      hideCalendarNames: !!this._config.hide_calendar_names,
      helpers: this.getCalendarBadgeRenderHelpers()
    });
  }

  renderHeaderTitle() {
    const headerTime = this.getFormattedHeaderSensorTime();
    const headerWeather = this.getHeaderWeatherData();
    return renderHeaderTitleMarkup({
      title: this._config.title,
      headerTime,
      headerWeather,
      helpers: this.getHeaderRenderHelpers()
    });
  }

  renderDashboardNavButton() {
    return renderDashboardNavButtonMarkup({
      shouldShow: this.shouldShowDashboardNavButton(),
      helpers: this.getHeaderRenderHelpers()
    });
  }

  renderPeriodNavigationButtons(buttonType) {
    return renderPeriodNavigationButtonsMarkup({
      buttonType,
      hideNavigationButtons: this._config.hide_navigation_buttons,
      shouldDisablePreviousNavigation: this.shouldDisablePreviousNavigation(),
      helpers: this.getHeaderRenderHelpers()
    });
  }

  renderViewModeButtons() {
    return renderViewModeButtonsMarkup({
      hideViewSelector: this._config.hide_view_selector,
      viewMode: this._viewMode,
      helpers: this.getHeaderRenderHelpers()
    });
  }

  renderThemeToggle() {
    return renderThemeToggleMarkup({
      hideDarkModeToggle: this._config.hide_dark_mode_toggle,
      isDarkMode: this._isDarkMode
    });
  }

  getPeriodLabel() {
    const includeYear = !this._config.hide_year;

    if (this._viewMode === 'month') {
      // If rolling_weeks mode is active, show date range
      if (this._config.rolling_weeks !== null) {
        const anchorDate = new Date(this._currentDate);
        anchorDate.setHours(0, 0, 0, 0);

        const currentDay = anchorDate.getDay();
        const diff = (currentDay - this._config.firstDayOfWeek + 7) % 7;
        const weekStart = new Date(anchorDate);
        weekStart.setDate(anchorDate.getDate() - diff);

        const totalWeeks = this._config.rolling_weeks + 1;
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + (totalWeeks * 7) - 1);

        return this.formatPeriodDateRange(weekStart, weekEnd, includeYear);
      }

      // Standard month view
      const month = this._currentDate.getMonth();
      const year = this._currentDate.getFullYear();
      return includeYear ? `${this.getMonthName(month)} ${year}` : this.getMonthName(month);
    } else if (this._viewMode === 'agenda') {
      this.ensureAgendaWindowInitialized();
      const rangeStart = this._agendaVisibleStartDate || this._agendaStartDate;
      const rangeEnd = this._agendaVisibleEndDate || this._agendaEndDate;
      return this.formatPeriodDateRange(rangeStart, rangeEnd, includeYear);
    } else {
      const weekDays = this.getWeekDays();
      if (weekDays.length === 0) return '';
      const start = weekDays[0];
      const end = weekDays[weekDays.length - 1];
      return this.formatPeriodDateRange(start, end, includeYear);
    }
  }

  formatPeriodDateRange(startDate, endDate, includeYear = true) {
    const formatOptions = {
      month: 'short',
      day: 'numeric'
    };
    if (includeYear) {
      formatOptions.year = 'numeric';
    }

    const formatter = new Intl.DateTimeFormat(this.getLocale(), formatOptions);

    if (!includeYear) {
      if (startDate.getTime() === endDate.getTime()) {
        return formatter.format(startDate);
      }

      // Intl.DateTimeFormat#formatRange may still add a year when dates cross
      // year boundaries, even when year isn't requested in format options.
      // Build the range manually so hide_year always hides the year.
      return `${formatter.format(startDate)} - ${formatter.format(endDate)}`;
    }

    if (typeof formatter.formatRange === 'function') {
      return formatter.formatRange(startDate, endDate);
    }

    if (startDate.getTime() === endDate.getTime()) {
      return formatter.format(startDate);
    }

    return `${formatter.format(startDate)} - ${formatter.format(endDate)}`;
  }

  renderCalendarView() {
    const shouldShowHeaderBadges = !this._config.compact_header && !this._config.hide_calendars;

    if (this._viewMode === 'month') {
      const showAllEventsMonth = this.shouldShowAllEventsInMonth();
      const isCompactMonth = this._config.compact_height && !showAllEventsMonth;
      const compactMaxHeight = isCompactMonth && !this.hasFixedHeightParentAllocation() ? this.getCompactMaxHeight(this._monthContainerTopInViewport) : null;
      const monthWeekRows = this.getMonthWeekRowCount();
      const showMonthWeekNumbers = this.shouldShowMonthWeekNumbers();
      return renderMonthView({
        compactMaxHeight,
        config: this._config,
        currentDate: this._currentDate,
        isCompactMonth,
        monthWeekRows,
        shouldShowHeaderBadges,
        shouldShowWeekNumbers: showMonthWeekNumbers,
        viewMode: this._viewMode,
        weekdayNames: this.getWeekdayNames(),
        helpers: {
          getCompactMonthGridStyle: (weekRows, maxHeight) => this.getCompactMonthGridStyle(weekRows, maxHeight),
          renderCalendarBadges: () => this.renderCalendarBadges(),
          getDateKey: (date) => this.getDateKey(date),
          getMonthSpanLayoutForWeek: (weekDays) => this.buildMonthSpanLayoutForWeek(weekDays),
          renderDay: (day, date, isOtherMonth, monthSpanLanes) => this.renderDay(day, date, isOtherMonth, monthSpanLanes),
          renderMonthWeekNumberCell: (rowStartDate) => this.renderMonthWeekNumberCell(rowStartDate)
        }
      });
    } else if (this._viewMode === 'week-compact') {
      return this.renderWeekCompact();
    } else if (this._viewMode === 'week-standard') {
      return this.renderWeekStandard();
    } else if (this._viewMode === 'agenda') {
      return this.renderAgenda();
    }
  }

  renderDayHeaders() {
    return renderMonthDayHeaders({
      weekdayNames: this.getWeekdayNames(),
      firstDayOfWeek: this._config.firstDayOfWeek,
      shouldShowWeekNumbers: this.shouldShowMonthWeekNumbers()
    });
  }

  renderWeekCompact() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return renderWeekCompactView({
      config: this._config,
      weekDays: this.getWeekDays(),
      today,
      dayNames: this.getWeekdayNames(),
      headerHeight: this._weekCompactHeaderHeight,
      helpers: {
        getCompactContainerStyle: () => this.getCompactContainerStyle(),
        renderCalendarBadges: () => this.renderCalendarBadges(),
        getEventsForDay: (date, options) => this.getEventsForDay(date, options),
        isEventHiddenByStyle: (event) => this.isEventHiddenByStyle(event),
        sortEventsForDate: (events, date) => this.sortEventsForDate(events, date),
        getDayStyleAttributes: (date, events, isToday) => this.getDayStyleAttributes(date, events, isToday),
        renderDayBadges: (date, events) => this.renderDayBadges(date, events),
        renderDayForecast: (date, viewMode) => this.renderDayForecast(date, viewMode),
        renderWeekCompactEvent: (event, date) => this.renderWeekCompactEvent(event, date),
        t: (key, params) => this.t(key, params)
      }
    });
  }

  renderWeekStandard() {
    const weekDays = this.getWeekDays();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const { startHour, endHour } = this.getScheduleHourRangeForWeek(weekDays);
    const hours = [];

    for (let h = startHour; h <= endHour; h++) {
      hours.push(h);
    }

    const baseHourHeight = 120;
    const preferredHourHeight = baseHourHeight * (this._config.height_scale || 1.0);

    const dayNames = this.getWeekdayNames();

    const allDayLayout = this.buildAllDayLayoutForSchedule(weekDays);
    const maxAllDayEvents = allDayLayout.maxLanes;

    const hasAllDayEvents = maxAllDayEvents > 0;
    const allDayHeight = hasAllDayEvents
      ? 16 + (maxAllDayEvents * 24) + ((maxAllDayEvents - 1) * 4) + 2
      : 0;

    const compactMaxHeight = this.getCompactMaxHeight(this._weekStandardContainerTopInViewport);
    const fallbackOffsetHeight = 127 + allDayHeight;
    const headerOffsetAdjustment = this._weekStandardHeaderHeight ? Math.max(0, this._weekStandardHeaderHeight - 95) : 0;
    const staticOffsetHeight = fallbackOffsetHeight + headerOffsetAdjustment;
    const availableSlotHeight = compactMaxHeight ? compactMaxHeight - staticOffsetHeight : null;
    const compactHourHeight = availableSlotHeight && availableSlotHeight > 0 ? Math.floor(availableSlotHeight / hours.length) : null;
    const hourHeight = compactHourHeight ? Math.max(20, Math.min(preferredHourHeight, compactHourHeight)) : preferredHourHeight;
    const timelineHeight = hourHeight * hours.length;
    const dayTimeSlotsStyle = `height: ${timelineHeight}px; min-height: ${timelineHeight}px;`;
    const timeHeaderSpacerHeight = this._weekStandardHeaderHeight ? Math.max(60, this._weekStandardHeaderHeight - 35) : null;
    const headerHeightStyle = this._weekStandardHeaderHeight ? `--week-standard-day-header-height: ${this._weekStandardHeaderHeight}px;--week-standard-time-header-spacer-height: ${timeHeaderSpacerHeight}px;` : '';
    const containerStyle = `${headerHeightStyle}${this.getCompactContainerStyle(compactMaxHeight)}`;

    const showCurrentTimeBar = this._config.show_current_time_bar && this.shouldShowCurrentTimeBar(today, startHour, endHour);

    return renderWeekStandardView({
      allDayHeight,
      allDayLayout,
      config: this._config,
      containerStyle,
      dayNames,
      dayTimeSlotsStyle,
      endHour,
      hasAllDayEvents,
      hourHeight,
      hours,
      showCurrentTimeBar,
      startHour,
      today,
      weekDays,
      helpers: {
        formatScheduleHour: (hour) => this.formatScheduleHour(hour),
        getDateKey: (date) => this.getDateKey(date),
        getDayStyleAttributes: (date, events, isToday) => this.getDayStyleAttributes(date, events, isToday),
        getEventsForDay: (date, options) => this.getEventsForDay(date, options),
        isEventHiddenByStyle: (event) => this.isEventHiddenByStyle(event),
        renderAllDayEventsForDay: (allDayLanes, height) => this.renderAllDayEventsForDay(allDayLanes, height),
        renderCalendarBadges: () => this.renderCalendarBadges(),
        renderCurrentTimeLine: (rangeStartHour, height) => this.renderCurrentTimeLine(rangeStartHour, height),
        renderDayBadges: (date, events) => this.renderDayBadges(date, events),
        renderDayForecast: (date, viewMode) => this.renderDayForecast(date, viewMode),
        renderTimedEventsForDay: (events, date, rangeStartHour, rangeEndHour, height) => this.renderTimedEventsForDay(events, date, rangeStartHour, rangeEndHour, height),
        sortEventsForDate: (events, date) => this.sortEventsForDate(events, date)
      }
    });
  }

  renderAgenda() {
    this.ensureAgendaWindowInitialized();
    const agendaDays = this.getAgendaDays();
    const agendaEventMinHeight = this.getAgendaEventMinHeight();
    const compactMaxHeight = this.getCompactMaxHeight(this._agendaContainerTopInViewport);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dayNames = this.getWeekdayNames();
    const monthFormatter = new Intl.DateTimeFormat(this.getLocale(), this.withTimeZone({ month: 'long', year: 'numeric' }));

    return renderAgendaView({
      agendaDays,
      agendaEventMinHeight,
      compactMaxHeight,
      config: this._config,
      today,
      dayNames,
      monthFormatter,
      helpers: {
        escapeHtml: this.escapeHtml.bind(this),
        formatEventTimeRange: this.formatEventTimeRange.bind(this),
        getCompactContainerStyle: this.getCompactContainerStyle.bind(this),
        getDisplayLocation: this.getDisplayLocation.bind(this),
        getDayStyleAttributes: this.getDayStyleAttributes.bind(this),
        getEventBubbleFontColor: this.getEventBubbleFontColor.bind(this),
        getEventBubbleFontSize: this.getEventBubbleFontSize.bind(this),
        getEventDaySegment: this.getEventDaySegment.bind(this),
        getEventLocationFontSize: this.getEventLocationFontSize.bind(this),
        getEventStyle: this.getEventStyle.bind(this),
        getEventTimeFontSize: this.getEventTimeFontSize.bind(this),
        getEventsForDay: this.getEventsForDay.bind(this),
        isEventHiddenByStyle: this.isEventHiddenByStyle.bind(this),
        renderCalendarBadges: this.renderCalendarBadges.bind(this),
        renderCombinedCornerBubbles: this.renderCombinedCornerBubbles.bind(this),
        renderDayForecast: this.renderDayForecast.bind(this),
        renderEventIcon: this.renderEventIcon.bind(this),
        renderEventStyleCornerIcon: this.renderEventStyleCornerIcon.bind(this),
        renderEventTitleWithPrefix: this.renderEventTitleWithPrefix.bind(this),
        shouldShowCombinedCornerBubbles: this.shouldShowCombinedCornerBubbles.bind(this),
        shouldShowEventLocation: this.shouldShowEventLocation.bind(this),
        shouldShowEventTime: this.shouldShowEventTime.bind(this),
        sortEventsForDate: this.sortEventsForDate.bind(this),
        t: this.t.bind(this)
      }
    });
  }

  getScheduleHourRangeForWeek(weekDays) {
    const configuredStartHour = Number.isFinite(Number(this._config.week_start_hour))
      ? Math.min(23, Math.max(0, Number(this._config.week_start_hour)))
      : 0;
    const configuredEndHour = Number.isFinite(Number(this._config.week_end_hour))
      ? Math.min(23, Math.max(0, Number(this._config.week_end_hour)))
      : 23;

    if (this._config.lock_schedule_hours) {
      const normalizedEndHour = Math.max(configuredStartHour, configuredEndHour);
      return { startHour: configuredStartHour, endHour: normalizedEndHour };
    }

    let dynamicStartHour = configuredStartHour;
    let dynamicEndHour = configuredEndHour;

    weekDays.forEach((date) => {
      this.getEventsForDay(date).forEach((event) => {
        if (this.getVisibleCalendarColorsForEvent(event).length === 0) {
          return;
        }

        const daySegment = this.getEventDaySegment(event, date, { useScheduleVisualTreatment: true });
        if (!daySegment || daySegment.isAllDaySegment) {
          return;
        }

        const startHourFloat = this.getLocalDayHourFloat(daySegment.segmentStart, date);
        const endHourFloat = this.getLocalDayHourFloat(daySegment.segmentEnd, date);

        if (Number.isFinite(startHourFloat)) {
          dynamicStartHour = Math.min(dynamicStartHour, Math.floor(startHourFloat));
        }
        if (Number.isFinite(endHourFloat)) {
          dynamicEndHour = Math.max(dynamicEndHour, Math.floor(endHourFloat));
        }
      });
    });

    const normalizedStartHour = Math.min(23, Math.max(0, dynamicStartHour));
    const normalizedEndHour = Math.max(normalizedStartHour, Math.min(23, Math.max(0, dynamicEndHour)));

    return { startHour: normalizedStartHour, endHour: normalizedEndHour };
  }

  buildAllDayLayoutForSchedule(weekDays) {
    return buildContinuousDaySpanLayout(weekDays, {
      getDateKey: this.getDateKey.bind(this),
      getEventsForDay: (date) => this.getEventsForDay(date),
      getEventDaySegment: (event, date) => {
        const daySegment = this.getEventDaySegment(event, date, { useScheduleVisualTreatment: true });
        return daySegment?.isAllDaySegment ? daySegment : null;
      },
      getEventKey: this.getScheduleAllDayEventKey.bind(this),
      isEventVisible: (event) => this.getVisibleCalendarColorsForEvent(event).length > 0
    });
  }

  buildMonthSpanLayoutForWeek(weekDays) {
    return buildContinuousDaySpanLayout(weekDays, {
      getDateKey: this.getDateKey.bind(this),
      getEventsForDay: (date) => this.sortEventsForDate(
        this.getEventsForDay(date, { includeHiddenStyledEvents: false }).filter((event) => !this.isEventHiddenByStyle(event)),
        date
      ),
      getEventDaySegment: (event, date) => {
        const daySegment = this.getEventDaySegment(event, date);
        if (!daySegment) return null;
        return daySegment.isAllDaySegment && (!daySegment.startsOnDay || !daySegment.endsOnDay) ? daySegment : null;
      },
      getEventKey: this.getScheduleAllDayEventKey.bind(this),
      isEventVisible: (event) => this.getVisibleCalendarColorsForEvent(event).length > 0
    });
  }

  getScheduleAllDayEventKey(event) {
    const uid = event.uid || event.id;
    if (uid) {
      return `${uid}|${event.start?.date || event.start?.dateTime || event.start}|${event.end?.date || event.end?.dateTime || event.end}`;
    }

    return `${event.entityId || 'unknown'}|${event.summary || ''}|${event.start?.date || event.start?.dateTime || event.start}|${event.end?.date || event.end?.dateTime || event.end}`;
  }

  getDateKey(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  }

  renderCalendarBadges() {
    return renderCalendarBadgesMarkup({
      badgeItems: this.getVirtualBadgeItems(),
      hideCalendarNames: !!this._config.hide_calendar_names,
      helpers: this.getCalendarBadgeRenderHelpers()
    });
  }

  renderAllDayEventsForDay(allDayLanes, allDayHeight) {
    return `
      <div class="all-day-events" style="min-height: ${allDayHeight}px; height: ${allDayHeight}px;">
        ${allDayLanes.length > 0 ? allDayLanes.map(lane => {
          if (!lane) {
            return '<div class="all-day-event-spacer"></div>';
          }

          const {
            event,
            extendsBeforeVisibleRange,
            extendsAfterVisibleRange,
            showTitle,
            displayTitle,
            visibleDaySpan
          } = lane;
          if (!lane.isFirstVisibleSegment) {
            return '<div class="all-day-event-spacer all-day-event-span-placeholder"></div>';
          }

          const eventStyle = this.getEventStyle(event, { withBorderAccent: false });
          const spanStyle = visibleDaySpan > 1
            ? ` --all-day-title-span-days: ${visibleDaySpan}; --all-day-title-gap-count: ${Math.max(visibleDaySpan - 1, 0)}; --all-day-visible-span: ${visibleDaySpan};`
            : '';
          const spanDataAttribute = visibleDaySpan > 1 ? ` data-all-day-span-days="${visibleDaySpan}"` : '';
          return `
            <div class="all-day-event ${extendsBeforeVisibleRange ? 'continues-prev' : ''} ${extendsAfterVisibleRange ? 'continues-next' : ''} ${showTitle && visibleDaySpan > 1 ? 'leading-span-title' : ''}"
                 style="${eventStyle} --event-bubble-font-size: ${this.getEventBubbleFontSize(event)}; --event-time-font-size: ${this.getEventTimeFontSize(event)}; --event-bubble-text-color: ${this.getEventBubbleFontColor(event)};${spanStyle}"${spanDataAttribute}
                 data-event='${JSON.stringify(event).replace(/'/g, "&#39;")}'>
              <div class="all-day-event-title ${showTitle && visibleDaySpan > 1 ? 'spans-multiple-days' : ''}">${showTitle ? this.renderEventTitleWithPrefix(event, displayTitle || event.summary || this.t('untitledEvent')) : ''}</div>
              ${this.renderEventStyleCornerIcon(event)}
            </div>
          `;
        }).join('') : ''}
      </div>
    `;
  }

  renderTimedEventsForDay(events, date, startHour, endHour, hourHeight) {
    const timedEvents = events.map(event => {
      const daySegment = this.getEventDaySegment(event, date, { useScheduleVisualTreatment: true });
      if (!daySegment || daySegment.isAllDaySegment) {
        return null;
      }
      return { event, daySegment };
    }).filter(Boolean);

    // Process timed events for overlaps
    const eventBlocks = timedEvents.map(({ event, daySegment }) => {
      const { segmentStart, segmentEnd } = daySegment;
      const startHourFloat = this.getLocalDayHourFloat(segmentStart, date);
      const endHourFloat = this.getLocalDayHourFloat(segmentEnd, date);

      return {
        event,
        displayTitle: daySegment.displayTitle,
        eventStart: segmentStart,
        eventEnd: segmentEnd,
        startHourFloat,
        endHourFloat,
        startMinutes: Math.round(startHourFloat * 60),
        endMinutes: Math.round(endHourFloat * 60)
      };
    }).filter(block => block.endHourFloat > startHour && block.startHourFloat < (endHour + 1));

    // Sort by start time, then by duration (longer first)
    eventBlocks.sort((a, b) => {
      if (a.startMinutes !== b.startMinutes) {
        return a.startMinutes - b.startMinutes;
      }
      return (b.endMinutes - b.startMinutes) - (a.endMinutes - a.startMinutes);
    });

    const overlaps = (first, second) =>
      first.startMinutes < second.endMinutes && first.endMinutes > second.startMinutes;

    const clusters = [];
    eventBlocks.forEach(block => {
      const matchingClusters = [];
      clusters.forEach((cluster, index) => {
        if (cluster.some(other => overlaps(block, other))) {
          matchingClusters.push(index);
        }
      });

      if (matchingClusters.length === 0) {
        clusters.push([block]);
        return;
      }

      const targetIndex = matchingClusters.shift();
      clusters[targetIndex].push(block);

      matchingClusters.reverse().forEach(index => {
        clusters[targetIndex].push(...clusters[index]);
        clusters.splice(index, 1);
      });
    });

    clusters.forEach(cluster => {
      const columns = [];
      cluster.forEach(block => {
        let placed = false;
        for (const col of columns) {
          const hasOverlap = col.some(other => overlaps(block, other));
          if (!hasOverlap) {
            col.push(block);
            block.column = columns.indexOf(col);
            placed = true;
            break;
          }
        }

        if (!placed) {
          columns.push([block]);
          block.column = columns.length - 1;
        }
      });

      const clusterColumns = columns.length;
      cluster.forEach(block => {
        block.clusterColumns = clusterColumns;
      });
    });

    // Render timed events
    return eventBlocks.map(block => {
      const { event, displayTitle, eventStart, eventEnd, startHourFloat, endHourFloat, column } = block;

      const clampedStartHour = Math.max(startHourFloat, startHour);
      const clampedEndHour = Math.min(endHourFloat, endHour + 1);
      if (clampedEndHour <= clampedStartHour) {
        return '';
      }

      const duration = clampedEndHour - clampedStartHour;
      const top = (clampedStartHour - startHour) * hourHeight;
      const extraHeightForCombinedBubbles = this.shouldShowCombinedCornerBubbles(event) ? 16 : 0;
      const height = (duration * hourHeight) + extraHeightForCombinedBubbles;

      const clusterColumns = block.clusterColumns || 1;
      // Calculate width and position for concurrent events
      const width = clusterColumns > 1 ? `calc((100% - 16px) / ${clusterColumns})` : 'calc(100% - 16px)';
      const left = clusterColumns > 1 ? `calc(8px + ((100% - 16px) / ${clusterColumns}) * ${column})` : '8px';

      const eventStyle = this.getEventStyle(event, { withBorderAccent: true });

      return `
        <div class="week-standard-event"
             style="top: ${top}px; height: ${height}px; width: ${width}; left: ${left}; ${eventStyle} --event-bubble-font-size: ${this.getEventBubbleFontSize(event)}; --event-time-font-size: ${this.getEventTimeFontSize(event)}; --event-location-font-size: ${this.getEventLocationFontSize(event)}; --event-bubble-text-color: ${this.getEventBubbleFontColor(event)};"
             data-event='${JSON.stringify(event).replace(/'/g, "&#39;")}'>
          <div class="week-standard-event-title">${this.renderEventTitleWithPrefix(event, displayTitle || event.summary || this.t('untitledEvent'))}</div>
          ${this.shouldShowEventTime(event) ? `<div class="week-standard-event-time">${this.formatEventTimeRange(eventStart, eventEnd, { schedule: true })}</div>` : ''}
          ${this.shouldShowEventLocation(event) ? `<div class="week-standard-event-location">📍 ${this.escapeHtml(this.getDisplayLocation(event.location, event))}</div>` : ''}
          ${this.renderEventIcon(event)}
          ${this.renderEventStyleCornerIcon(event)}
          ${this.renderCombinedCornerBubbles(event)}
        </div>
      `;
    }).join('');
  }

  getLocalDayHourFloat(dateTime, referenceDate) {
    // Use wall-clock hour values relative to the rendered day so DST transitions
    // do not visually shift events by ±1 hour in the schedule grid.
    const referenceParts = this.getDisplayDateParts(referenceDate);
    const timeParts = this.getDateTimeParts(dateTime);
    const dayKey = Date.UTC(referenceParts.year, referenceParts.month - 1, referenceParts.day);
    const timeKey = Date.UTC(Number(timeParts.year), Number(timeParts.month) - 1, Number(timeParts.day));
    const dayDiff = (timeKey - dayKey) / 86400000;

    return (dayDiff * 24) +
      Number(timeParts.hour) +
      (Number(timeParts.minute) / 60) +
      (Number(timeParts.second) / 3600) +
      (dateTime.getMilliseconds() / 3600000);
  }

  getVisibleCalendarBadgesForEvent(event) {
    return getVisibleCalendarBadgesForEventHelper(event, {
      hiddenCalendars: this._hiddenCalendars,
      getVirtualBadgeForEvent: (badgeEvent) => this.getVirtualBadgeForEvent(badgeEvent),
      normalizeSingleColor: (color) => this.normalizeSingleColor(color),
      configColors: this._config.colors
    });
  }

  renderEventIcon(event) {
    if (this.shouldShowCombinedCornerBubbles(event)) {
      return '';
    }

    return renderEventIconHtml(event, {
      getEventStyleOverrides: (iconEvent) => this.getEventStyleOverrides(iconEvent),
      eventCalendarFriendlyName: this._config.event_calendar_friendly_name,
      hideEventCalendarBubble: this._config.hide_event_calendar_bubble,
      getModalCalendarBadgesForEvent: (iconEvent) => this.getModalCalendarBadgesForEvent(iconEvent),
      getCalendarName: (entityId) => this.getCalendarName(entityId),
      escapeHtml: (value) => this.escapeHtml(value)
    });
  }


  isCombinedEventWithinSingleVirtualCalendar(event) {
    return isCombinedEventWithinSingleVirtualCalendarHelper(event, {
      hiddenCalendars: this._hiddenCalendars,
      getVirtualBadgeForEntity: (entityId) => this.getVirtualBadgeForEntity(entityId)
    });
  }

  shouldShowCombinedCornerBubbles(event) {
    return shouldShowCombinedCornerBubblesHelper(event, {
      combineCalendars: this._config.combine_calendars,
      isSingleVirtualCalendar: this.isCombinedEventWithinSingleVirtualCalendar(event),
      styleOverrides: this.getEventStyleOverrides(event)
    });
  }

  renderCombinedCornerBubbles(event) {
    return renderCombinedCornerBubblesHtml(event, {
      shouldShowCombinedCornerBubbles: (bubbleEvent) => this.shouldShowCombinedCornerBubbles(bubbleEvent),
      getModalCalendarBadgesForEvent: (bubbleEvent) => this.getModalCalendarBadgesForEvent(bubbleEvent),
      getCalendarName: (entityId) => this.getCalendarName(entityId),
      escapeHtml: (value) => this.escapeHtml(value)
    });
  }

  getEventStyleIconConfig(event) {
    const styleOverrides = this.getEventStyleOverrides(event);
    const icon = this.normalizeEventIconName(styleOverrides?.icon);
    if (!icon) return null;

    return {
      icon,
      color: this.normalizeEventIconColor(styleOverrides?.icon_color),
      size: this.normalizeStyleSizeValue(styleOverrides?.icon_size),
      position: this.normalizeEventIconPosition(styleOverrides?.icon_position) || 'before_title'
    };
  }

  renderEventStyleIcon(event, { position = 'before_title' } = {}) {
    return renderEventStyleIconHtml(this.getEventStyleIconConfig(event), {
      position,
      escapeHtml: (value) => this.escapeHtml(value)
    });
  }

  renderEventStyleCornerIcon(event) {
    return renderEventStyleCornerIconHtml(event, {
      getEventStyleIconConfig: (iconEvent) => this.getEventStyleIconConfig(iconEvent),
      escapeHtml: (value) => this.escapeHtml(value)
    });
  }

  renderEventTitleWithPrefix(event, title) {
    return renderEventTitleWithPrefixHtml(event, title, {
      t: (key) => this.t(key),
      escapeHtml: (value) => this.escapeHtml(value),
      getEventStyleOverrides: (titleEvent) => this.getEventStyleOverrides(titleEvent),
      getEventStyleIconConfig: (titleEvent) => this.getEventStyleIconConfig(titleEvent),
      normalizeEventTitlePrefixMode: (mode) => this.normalizeEventTitlePrefixMode(mode),
      configuredEventTitlePrefix: this._config.event_title_prefix,
      getModalCalendarBadgesForEvent: (titleEvent) => this.getModalCalendarBadgesForEvent(titleEvent),
      getCalendarName: (entityId) => this.getCalendarName(entityId),
      normalizeSingleColor: (color) => this.normalizeSingleColor(color),
      getCalendarBadgeIcon: (entityId) => this.getCalendarBadgeIcon(entityId),
      normalizeBackgroundImageUrl: (url) => this.normalizeBackgroundImageUrl(url)
    });
  }


  lightenColor(color, amount) {
    const rgb = this.colorToRgb(color);
    if (!rgb) {
      return this.normalizeSingleColor(color);
    }

    // Lighten by blending with white
    const nr = Math.round(rgb.r + (255 - rgb.r) * amount);
    const ng = Math.round(rgb.g + (255 - rgb.g) * amount);
    const nb = Math.round(rgb.b + (255 - rgb.b) * amount);

    return `rgb(${nr}, ${ng}, ${nb})`;
  }

  getEventFontSize(event = null, configKey = 'event_font_size', fallbackPx = 11) {
    const styleOverrides = event ? this.getEventStyleOverrides(event) : null;
    return getEventFontSizeDisplayValue(styleOverrides?.[configKey] ?? this._config?.[configKey], fallbackPx);
  }

  getEventBubbleFontSize(event = null) {
    return this.getEventFontSize(event, 'event_font_size', 11);
  }

  getEventTimeFontSize(event = null) {
    return this.getEventFontSize(event, 'event_time_font_size', 9);
  }

  getEventLocationFontSize(event = null) {
    return this.getEventFontSize(event, 'event_location_font_size', 9);
  }

  shouldShowEventLocation(event) {
    return shouldShowEventLocationHelper(event, {
      styleOverrides: this.getEventStyleOverrides(event),
      showEventLocation: this._config.show_event_location
    });
  }

  getDisplayLocation(location, event = null) {
    return getDisplayLocationHelper(location, {
      styleOverrides: event ? this.getEventStyleOverrides(event) : null,
      useShortLocation: this._config?.use_short_location
    });
  }

  getEventBubbleFontColor(event) {
    return getEventBubbleFontColorHelper(event, {
      styleOverrides: event ? this.getEventStyleOverrides(event) : null,
      hiddenCalendars: this._hiddenCalendars,
      eventFontColors: this._config?.event_font_colors,
      normalizeSingleColor: (color) => this.normalizeSingleColor(color),
      getEventBackgroundColor: (colorEvent) => this.getEventBackgroundColor(colorEvent),
      getContrastColor: (color) => this.getContractColor(color)
    });
  }

  shouldShowEventTime(event) {
    return shouldShowEventTimeHelper(event, {
      styleOverrides: event ? this.getEventStyleOverrides(event) : null,
      hiddenCalendars: this._hiddenCalendars,
      hideTimesForCalendars: this._config.hide_times_for_calendars
    });
  }

  shouldShowCurrentTimeBar(today, startHour, endHour) {
    const now = new Date();
    now.setSeconds(0, 0);
    if (now.toDateString() !== today.toDateString()) {
      return false;
    }

    const currentHourFloat = now.getHours() + (now.getMinutes() / 60);
    return currentHourFloat >= startHour && currentHourFloat <= (endHour + 1);
  }

  renderCurrentTimeLine(startHour, hourHeight) {
    const now = new Date();
    const currentHourFloat = now.getHours() + (now.getMinutes() / 60);
    const top = (currentHourFloat - startHour) * hourHeight;
    return `<div class="current-time-line" style="top: ${top}px;"></div>`;
  }

  formatScheduleHour(hour) {
    const date = this.zonedTimeToDate(2020, 1, 1, hour, 0, 0, 0);
    return this.formatScheduleTime(date);
  }

  getTimeFormatOptions() {
    const formatOptions = {
      hour: 'numeric',
      minute: '2-digit'
    };

    const config = this._config || {};
    if (Object.prototype.hasOwnProperty.call(config, 'use_24hr_schedule')) {
      formatOptions.hour12 = !config.use_24hr_schedule;
    }

    return formatOptions;
  }

  formatScheduleTime(date) {
    return new Intl.DateTimeFormat(this.getLocale(), this.withTimeZone(this.getTimeFormatOptions())).format(date);
  }

  uses24HourEventTime() {
    const formatter = new Intl.DateTimeFormat(this.getLocale(), this.withTimeZone(this.getTimeFormatOptions()));
    return formatter.resolvedOptions().hour12 === false;
  }

  isWholeHour(date) {
    const parts = this.getDateTimeParts(date);
    return Number(parts.minute) === 0 && Number(parts.second) === 0 && date.getMilliseconds() === 0;
  }

  formatLocalizedHour(date) {
    const formatter = new Intl.DateTimeFormat(this.getLocale(), this.withTimeZone(this.getTimeFormatOptions()));
    const hourPart = formatter.formatToParts(date).find((part) => part.type === 'hour');
    if (hourPart) {
      return hourPart.value;
    }

    return new Intl.NumberFormat(this.getLocale(), { useGrouping: false }).format(date.getHours());
  }

  formatShort12HourEventTime(date, options = {}) {
    if (!this.isWholeHour(date)) {
      return this.formatBaseEventTime(date, options);
    }

    const formatter = new Intl.DateTimeFormat(this.getLocale(), this.withTimeZone(this.getTimeFormatOptions()));
    const parts = formatter.formatToParts(date);
    const minuteIndex = parts.findIndex((part) => part.type === 'minute');
    const shortenedParts = parts.filter((part, index) => {
      if (part.type === 'minute') return false;
      return !(part.type === 'literal' && index === minuteIndex - 1);
    });
    return shortenedParts.map((part) => part.value).join('').replace(/\s+/g, ' ').trim();
  }

  formatShort24HourEventTime(date, { appendHourSuffix = true, omitWholeHourMinutes = true, schedule = false } = {}) {
    if (this.isWholeHour(date) && omitWholeHourMinutes) {
      return `${this.formatLocalizedHour(date)}${appendHourSuffix ? 'h' : ''}`;
    }

    return this.formatBaseEventTime(date, { schedule });
  }

  formatBaseEventTime(date, { schedule = false } = {}) {
    return schedule ? this.formatScheduleTime(date) : this.formatTime(date);
  }

  formatEventTime(date, options = {}) {
    if (!this._config?.shorten_event_times) {
      return this.formatBaseEventTime(date, options);
    }

    if (this.uses24HourEventTime()) {
      return this.formatShort24HourEventTime(date, options);
    }

    return this.formatShort12HourEventTime(date, options);
  }

  formatEventTimeRange(startDate, endDate, options = {}) {
    if (!this._config?.shorten_event_times) {
      return `${this.formatBaseEventTime(startDate, options)} - ${this.formatBaseEventTime(endDate, options)}`;
    }

    if (!this.uses24HourEventTime()) {
      return `${this.formatShort12HourEventTime(startDate, options)} - ${this.formatShort12HourEventTime(endDate, options)}`;
    }

    const startWholeHour = this.isWholeHour(startDate);
    const endWholeHour = this.isWholeHour(endDate);
    if (startWholeHour && endWholeHour) {
      return `${this.formatShort24HourEventTime(startDate, { ...options, appendHourSuffix: false })}-${this.formatShort24HourEventTime(endDate, options)}`;
    }

    return `${this.formatShort24HourEventTime(startDate, { ...options, appendHourSuffix: false })}-${this.formatShort24HourEventTime(endDate, { ...options, appendHourSuffix: endWholeHour })}`;
  }

  getMonthWeekRowCount() {
    if (this._config.rolling_weeks !== null && this._viewMode === 'month') {
      return this._config.rolling_weeks + 1;
    }

    const year = this._currentDate.getFullYear();
    const month = this._currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startDay = (firstDay - this._config.firstDayOfWeek + 7) % 7;
    return Math.ceil((startDay + daysInMonth) / 7);
  }

  getEventBubbleFontSizePx() {
    const fallbackPx = 11;
    const sizeValue = this.getEventBubbleFontSize();

    if (typeof window === 'undefined' || !this._root) {
      const parsed = parseFloat(sizeValue);
      return Number.isFinite(parsed) ? parsed : fallbackPx;
    }

    const probe = document.createElement('span');
    probe.style.position = 'absolute';
    probe.style.visibility = 'hidden';
    probe.style.fontSize = sizeValue;
    probe.style.lineHeight = 'normal';
    probe.textContent = 'M';
    this._root.appendChild(probe);

    const computedFontSize = parseFloat(window.getComputedStyle(probe).fontSize);
    probe.remove();

    return Number.isFinite(computedFontSize) ? computedFontSize : fallbackPx;
  }

  getFontSizePx(sizeValue, fallbackPx = 11) {
    if (typeof window === 'undefined' || !this._root) {
      const parsed = parseFloat(sizeValue);
      return Number.isFinite(parsed) ? parsed : fallbackPx;
    }

    const probe = document.createElement('span');
    probe.style.position = 'absolute';
    probe.style.visibility = 'hidden';
    probe.style.fontSize = sizeValue;
    probe.style.lineHeight = 'normal';
    probe.textContent = 'M';
    this._root.appendChild(probe);

    const computedFontSize = parseFloat(window.getComputedStyle(probe).fontSize);
    probe.remove();

    return Number.isFinite(computedFontSize) ? computedFontSize : fallbackPx;
  }

  getAgendaEventMinHeight() {
    const timeFontPx = this.getFontSizePx(this.getEventTimeFontSize(), 9);
    const titleFontPx = this.getFontSizePx(this.getEventBubbleFontSize(), 11);
    const locationFontPx = this.getFontSizePx(this.getEventLocationFontSize(), 9);

    const timeRowHeight = Math.ceil(timeFontPx * 1.2);
    const titleRowHeight = Math.ceil(titleFontPx * 1.25);
    const locationRowHeight = Math.ceil(locationFontPx * 1.3);

    const verticalPadding = 20; // 10px top + 10px bottom
    const rowSpacing = 8; // time mb + location mt
    const buffer = 8;
    const total = verticalPadding + timeRowHeight + titleRowHeight + locationRowHeight + rowSpacing + buffer;

    return `${Math.max(56, total)}px`;
  }

  getMonthEventRowHeight() {
    const fontSizePx = this.getEventBubbleFontSizePx();
    const lineHeightPx = fontSizePx * 1.2;
    const verticalPaddingPx = 8; // .event has 4px top + 4px bottom padding
    const marginBottomPx = 3; // .event margin-bottom in month view
    return Math.ceil(lineHeightPx + verticalPaddingPx + marginBottomPx);
  }

  renderDays() {
    return renderMonthDays({
      currentDate: this._currentDate,
      config: this._config,
      viewMode: this._viewMode,
      shouldShowWeekNumbers: this.shouldShowMonthWeekNumbers(),
      helpers: {
        getDateKey: (date) => this.getDateKey(date),
        getMonthSpanLayoutForWeek: (weekDays) => this.buildMonthSpanLayoutForWeek(weekDays),
        renderDay: (day, date, isOtherMonth, monthSpanLanes) => this.renderDay(day, date, isOtherMonth, monthSpanLanes),
        renderMonthWeekNumberCell: (rowStartDate) => this.renderMonthWeekNumberCell(rowStartDate)
      }
    });
  }

  getMaxVisibleEventsForMonthDay() {
    const defaultMaxVisible = 3;

    if (this._viewMode === 'month' && this.shouldShowAllEventsInMonth()) {
      return Number.MAX_SAFE_INTEGER;
    }

    if (this._viewMode !== 'month' || !this._config.compact_height) {
      return defaultMaxVisible;
    }

    const compactMaxHeight = this.getCompactMaxHeight(this._monthContainerTopInViewport);
    if (!compactMaxHeight) {
      return defaultMaxVisible;
    }

    const weekRows = this.getMonthWeekRowCount();
    if (!weekRows || weekRows < 1) {
      return defaultMaxVisible;
    }

    const gridGap = 1;
    const dayHeaderRowHeight = 41;
    const dayCellVerticalPadding = 16; // .day-cell has 8px top + 8px bottom padding
    const dayNumberBlockHeight = 42; // .day-header-row min-height in CSS
    const eventRowHeight = this.getMonthEventRowHeight();

    const contentHeight = compactMaxHeight - dayHeaderRowHeight - (weekRows * gridGap);
    const dayCellHeight = Math.floor(contentHeight / weekRows);
    // Do not pre-reserve space for the "+N more" indicator here. Overflow handling
    // swaps one event row for the indicator in renderDay(), so reserving both causes
    // under-counting and hidden space.
    const usableEventHeight = dayCellHeight - dayCellVerticalPadding - dayNumberBlockHeight;
    if (!Number.isFinite(usableEventHeight) || usableEventHeight <= 0) {
      return 1;
    }

    return Math.max(1, Math.floor(usableEventHeight / eventRowHeight));
  }

  shouldShowMonthWeekNumbers() {
    return this._viewMode === 'month' && !!this._config?.show_week_numbers_month;
  }

  getIsoWeekNumber(date) {
    return getIsoWeekNumber(date);
  }

  formatMonthWeekNumberLabel(date) {
    const weekNumber = this.getIsoWeekNumber(date);
    const weekPrefix = this.t('monthWeekPrefix');
    const localizedWeekNumber = new Intl.NumberFormat(this.getLocale()).format(weekNumber);
    return `${weekPrefix}${localizedWeekNumber}`;
  }

  getIsoWeekAnchorDateForRow(rowStartDate) {
    const anchorDate = new Date(rowStartDate);
    const daysUntilMonday = (1 - anchorDate.getDay() + 7) % 7;
    anchorDate.setDate(anchorDate.getDate() + daysUntilMonday);
    return anchorDate;
  }

  renderMonthWeekNumberCell(rowStartDate) {
    const weekLabel = this.formatMonthWeekNumberLabel(this.getIsoWeekAnchorDateForRow(rowStartDate));
    return `
      <div class="month-week-number-cell" aria-label="${this.escapeHtml(weekLabel)}">
        <span class="month-week-number-text">${this.escapeHtml(weekLabel)}</span>
      </div>
    `;
  }

  getDayBadges(date, dayEvents) {
    const rules = Array.isArray(this._config?.day_badges) ? this._config.day_badges : [];
    if (!rules.length || !Array.isArray(dayEvents)) return [];

    return rules
      .map((rule) => {
        const matchResult = this.matchesAdvancedRule(rule, { date, dayEvents });
        if (!matchResult.matches) return null;
        const resolvedRule = this.resolveDayBadgeForRender(rule, date, matchResult.matchedEvent);
        if (!resolvedRule.icon && !resolvedRule.text) return null;
        return resolvedRule;
      })
      .filter(Boolean);
  }

  renderDayBadges(date, dayEvents) {
    return renderDayBadgesHtml(date, dayEvents, {
      escapeHtml: this.escapeHtml.bind(this),
      getDayBadges: this.getDayBadges.bind(this),
      registerDayBadgeAction: this.registerDayBadgeAction.bind(this)
    });
  }

  registerDayBadgeAction(tapAction) {
    if (!tapAction || tapAction.action !== 'fire-dom-event' || typeof tapAction.event_type !== 'string' || !tapAction.event_type.trim()) {
      return null;
    }
    if (!this._dayBadgeActions) this._dayBadgeActions = new Map();
    this._dayBadgeActionSequence = (this._dayBadgeActionSequence || 0) + 1;
    const actionId = `day-badge-action-${this._dayBadgeActionSequence}`;
    this._dayBadgeActions.set(actionId, {
      event_type: tapAction.event_type.trim(),
      event_data: tapAction.event_data && typeof tapAction.event_data === 'object' && !Array.isArray(tapAction.event_data)
        ? { ...tapAction.event_data }
        : {}
    });
    return actionId;
  }

  handleDayBadgeActionClick(event, actionEl) {
    event.preventDefault();
    event.stopPropagation();
    const actionId = actionEl?.getAttribute?.('data-day-badge-action-id');
    const action = actionId ? this._dayBadgeActions?.get(actionId) : null;
    if (!action?.event_type) return;

    this.dispatchEvent(new CustomEvent(action.event_type, {
      detail: action.event_data || {},
      bubbles: true,
      composed: true
    }));
  }

  trimTrailingNullMonthSpanLanes(monthSpanLanes = []) {
    let lastOccupiedLaneIndex = -1;
    (monthSpanLanes || []).forEach((lane, index) => {
      if (lane) lastOccupiedLaneIndex = index;
    });

    return lastOccupiedLaneIndex >= 0 ? monthSpanLanes.slice(0, lastOccupiedLaneIndex + 1) : [];
  }

  renderDay(dayNum, date, isOtherMonth, monthSpanLanes = []) {
    monthSpanLanes = this.trimTrailingNullMonthSpanLanes(monthSpanLanes);
    const today = new Date();
    const isToday = date.toDateString() === today.toDateString();
    const dayEventsForMatching = this.getEventsForDay(date, { includeHiddenStyledEvents: true });
    let dayEvents = dayEventsForMatching.filter((event) => !this.isEventHiddenByStyle(event));
    dayEvents = this.sortEventsForDate(dayEvents, date);

    const maxVisible = this.getMaxVisibleEventsForMonthDay();
    const spannedEventKeys = new Set((monthSpanLanes || [])
      .filter(Boolean)
      .map((lane) => this.getScheduleAllDayEventKey(lane.event)));
    const nonSpannedDayEvents = dayEvents.filter((event) => !spannedEventKeys.has(this.getScheduleAllDayEventKey(event)));
    const nonSpannedEventCount = nonSpannedDayEvents.length;
    const getHiddenEventCountForVisibleRows = (visibleRows) => {
      const visibleMonthSpanLanes = (monthSpanLanes || []).slice(0, visibleRows);
      const visibleSpanLaneCount = visibleMonthSpanLanes.filter(Boolean).length;
      const hiddenSpanLaneCount = (monthSpanLanes || []).slice(visibleRows).filter(Boolean).length;
      const hiddenNonSpannedEventCount = Math.max(0, nonSpannedEventCount - Math.max(0, visibleRows - visibleSpanLaneCount));

      return hiddenSpanLaneCount + hiddenNonSpannedEventCount;
    };
    const hasOverflow = getHiddenEventCountForVisibleRows(maxVisible) > 0;
    const visibleEvents = hasOverflow ? Math.max(0, maxVisible - 1) : maxVisible;
    const visibleMonthSpanLanes = (monthSpanLanes || []).slice(0, visibleEvents);
    const hiddenEventCount = getHiddenEventCountForVisibleRows(visibleEvents);

    const dayStyle = this.getDayStyleAttributes(date, dayEventsForMatching, isToday);

    return renderDayCell({
      date,
      dayEvents: nonSpannedDayEvents,
      dayEventsForMatching,
      dayNum,
      dayStyle,
      hiddenEventCount,
      isOtherMonth,
      monthSpanLanes: visibleMonthSpanLanes,
      monthSpanEventKeys: [...spannedEventKeys],
      isToday,
      visibleEvents,
      helpers: {
        renderDayBadges: this.renderDayBadges.bind(this),
        renderDayForecast: this.renderDayForecast.bind(this),
        getEventKey: this.getScheduleAllDayEventKey.bind(this),
        renderMonthDayEvent: this.renderMonthDayEvent.bind(this),
        renderMonthSpanLane: this.renderMonthSpanLane.bind(this),
        t: this.t.bind(this)
      }
    });
  }


  renderMonthSpanLane(lane) {
    if (!lane) {
      return '<div class="event month-span-event-spacer"></div>';
    }

    if (!lane.isFirstVisibleSegment) {
      return `<div class="event month-span-event-spacer month-span-event-placeholder" style="--event-bubble-font-size: ${this.getEventBubbleFontSize(lane.event)}; --event-time-font-size: ${this.getEventTimeFontSize(lane.event)}; --event-bubble-text-color: ${this.getEventBubbleFontColor(lane.event)};"></div>`;
    }

    const { event, extendsBeforeVisibleRange, extendsAfterVisibleRange, displayTitle, visibleDaySpan } = lane;
    const eventStyle = this.getEventStyle(event);
    const spanStyle = visibleDaySpan > 1
      ? ` --month-event-visible-span: ${visibleDaySpan}; --month-event-gap-count: ${Math.max(visibleDaySpan - 1, 0)};`
      : '';
    const spanDataAttribute = visibleDaySpan > 1 ? ` data-month-span-days="${visibleDaySpan}"` : '';

    return `
      <div class="event month-span-event ${extendsBeforeVisibleRange ? 'continues-prev' : ''} ${extendsAfterVisibleRange ? 'continues-next' : ''}" style="${eventStyle}; --event-bubble-font-size: ${this.getEventBubbleFontSize(event)}; --event-time-font-size: ${this.getEventTimeFontSize(event)}; --event-bubble-text-color: ${this.getEventBubbleFontColor(event)};${spanStyle}"${spanDataAttribute} data-event='${JSON.stringify(event).replace(/'/g, "&#39;")}'>
        ${this.renderEventTitleWithPrefix(event, displayTitle || event.summary || this.t('untitledEvent'))}
        ${this.renderEventStyleCornerIcon(event)}
        ${this.renderCombinedCornerBubbles(event)}
      </div>
    `;
  }

  renderMonthDayEvent(event, date) {
    if (this.shouldRenderMonthEventsAsWeekCompact()) {
      return this.renderWeekCompactEvent(event, date);
    }

    return this.renderEvent(event, date);
  }

  renderWeekCompactEvent(event, date) {
    const daySegment = this.getEventDaySegment(event, date);
    if (!daySegment) return '';
    const { segmentStart, segmentEnd, isAllDaySegment } = daySegment;
    const timeLabel = isAllDaySegment
      ? this.t('allDay')
      : this.formatEventTimeRange(segmentStart, segmentEnd);
    const eventStyle = this.getEventStyle(event);

    return `
      <div class="week-compact-event" style="${eventStyle} --event-bubble-font-size: ${this.getEventBubbleFontSize(event)}; --event-time-font-size: ${this.getEventTimeFontSize(event)}; --event-location-font-size: ${this.getEventLocationFontSize(event)}; --event-bubble-text-color: ${this.getEventBubbleFontColor(event)};" data-event='${JSON.stringify(event).replace(/'/g, "&#39;")}'>
        ${this.shouldShowEventTime(event) ? `<div class="week-compact-event-time">${timeLabel}</div>` : ''}
        <div class="week-compact-event-title">${this.renderEventTitleWithPrefix(event, event.summary || this.t('untitledEvent'))}</div>
        ${this.shouldShowEventLocation(event) ? `<div class="week-compact-event-location">📍 ${this.escapeHtml(this.getDisplayLocation(event.location, event))}</div>` : ''}
        ${this.renderEventStyleCornerIcon(event)}
        ${this.renderCombinedCornerBubbles(event)}
      </div>
    `;
  }

  renderEvent(event, date) {
    const daySegment = this.getEventDaySegment(event, date);
    if (!daySegment) return '';
    const { segmentStart, isAllDaySegment } = daySegment;
    const eventStyle = this.getEventStyle(event);

    return `
      <div class="event" style="${eventStyle}; --event-bubble-font-size: ${this.getEventBubbleFontSize(event)}; --event-time-font-size: ${this.getEventTimeFontSize(event)}; --event-bubble-text-color: ${this.getEventBubbleFontColor(event)};" data-event='${JSON.stringify(event).replace(/'/g, "&#39;")}'>
        ${!isAllDaySegment && this.shouldShowEventTime(event) ? `<span class="event-time">${this.formatEventTime(segmentStart)}</span>` : ''}
        ${this.renderEventTitleWithPrefix(event, event.summary || this.t('untitledEvent'))}
        ${this.renderEventStyleCornerIcon(event)}
        ${this.renderCombinedCornerBubbles(event)}
      </div>
    `;
  }

  normalizeEventTextValue(value) {
    return normalizeEventTextValue(value);
  }

  getNormalizedEventTimeValue(value) {
    if (!value) return '';

    const toDateTimeTimestamp = (rawValue) => {
      const normalizedRaw = this.normalizeEventTextValue(rawValue);
      if (!normalizedRaw) return null;

      const floatingMatch = normalizedRaw.match(/^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2})(?::(\d{2}))?(?:\.(\d+))?(Z|[+-]\d{2}:\d{2})?$/i);
      if (!floatingMatch) {
        return null;
      }

      const [, yearText, monthText, dayText, hourText, minuteText, secondText, fractionText, tzText] = floatingMatch;
      const year = Number(yearText);
      const month = Number(monthText);
      const day = Number(dayText);
      const hour = Number(hourText);
      const minute = Number(minuteText);
      const second = Number(secondText || '0');
      const millis = Number(((fractionText || '').slice(0, 3)).padEnd(3, '0'));

      const timestamp = tzText
        ? Date.parse(`${yearText}-${monthText}-${dayText}T${hourText}:${minuteText}:${String(second).padStart(2, '0')}.${String(millis).padStart(3, '0')}${tzText.toUpperCase()}`)
        : new Date(year, month - 1, day, hour, minute, second, millis).getTime();

      return Number.isFinite(timestamp) ? timestamp : null;
    };

    if (typeof value === 'object') {
      if (value.dateTime) {
        const parsedTimestamp = toDateTimeTimestamp(value.dateTime);
        if (parsedTimestamp !== null) return `dt:${parsedTimestamp}`;

        const ts = new Date(value.dateTime).getTime();
        return Number.isFinite(ts) ? `dt:${ts}` : `dt:${String(value.dateTime)}`;
      }

      if (value.date) {
        const day = this.normalizeEventTextValue(value.date);
        return `d:${day}`;
      }
    }

    const normalized = this.normalizeEventTextValue(value);
    if (!normalized) return '';

    if (/^\d{4}-\d{2}-\d{2}$/.test(normalized)) {
      return `d:${normalized}`;
    }

    const parsedTimestamp = toDateTimeTimestamp(normalized);
    if (parsedTimestamp !== null) return `dt:${parsedTimestamp}`;

    const ts = new Date(normalized).getTime();
    return Number.isFinite(ts) ? `dt:${ts}` : normalized;
  }

  getEventExactMatchKey(event) {
    const start = this.getNormalizedEventTimeValue(event.start);
    const end = this.getNormalizedEventTimeValue(event.end);
    const summary = this.normalizeEventTextValue(event.summary);
    const location = this.normalizeEventTextValue(event.location);
    return `${start}|${end}|${summary}|${location}`;
  }


  combineDuplicateCalendarEvents(events) {
    if (!this._config.combine_calendars) {
      return events;
    }

    const groupedEvents = new Map();

    events.forEach(event => {
      const key = this.getEventExactMatchKey(event);
      if (!groupedEvents.has(key)) {
        groupedEvents.set(key, {
          baseEvent: event,
          calendars: [{ entityId: event.entityId, color: event.color }],
          sourceEvents: [event]
        });
        return;
      }

      const grouped = groupedEvents.get(key);
      if (!grouped.calendars.some(calendar => calendar.entityId === event.entityId)) {
        grouped.calendars.push({ entityId: event.entityId, color: event.color });
      }
      grouped.sourceEvents.push(event);
    });

    return Array.from(groupedEvents.values()).flatMap(({ baseEvent, calendars, sourceEvents }) => {
      if (calendars.length === 1) {
        return sourceEvents;
      }

      return {
        ...baseEvent,
        isCombinedCalendarEvent: true,
        sourceCalendars: calendars,
        sourceEntityIds: calendars.map(calendar => calendar.entityId),
        sourceEvents,
        entityId: calendars[0].entityId,
        color: calendars[0].color
      };
    });
  }


  getCustomEventColor(event) {
    return resolveCustomEventColor(event, this._customEventColors, {
      getEventIdentityKey: this.getEventIdentityKey.bind(this)
    });
  }

  getCustomEventColorKeys(event) {
    return getCustomEventColorKeys(event, {
      getEventIdentityKey: this.getEventIdentityKey.bind(this)
    });
  }

  getEffectiveEventColor(event, styleCandidates = null, { virtualColor = null } = {}) {
    return this.getCustomEventColor(event) || styleCandidates?.background_color?.value || virtualColor || event?.color || null;
  }

  getEventAccentColor(event) {
    return this.getVisibleCalendarColorsForEvent(event)[0] || this.getEventBackgroundColor(event);
  }

  getVirtualCalendarColor(virtualCalendar, event = null) {
    if (!virtualCalendar) return null;
    const fallbackColor = event?.color || this.normalizeSingleColor(this._config.colors[virtualCalendar.entities[0]]);
    return virtualCalendar.color || fallbackColor;
  }

  getVisibleSourceEntityIdsForEvent(event) {
    if (!event) return [];
    if (event.isCombinedCalendarEvent && Array.isArray(event.sourceEvents)) {
      return event.sourceEvents
        .map((sourceEvent) => sourceEvent?.entityId)
        .filter((entityId) => entityId && !this._hiddenCalendars.has(entityId));
    }
    if (event.isCombinedCalendarEvent && Array.isArray(event.sourceEntityIds)) {
      return event.sourceEntityIds.filter((entityId) => entityId && !this._hiddenCalendars.has(entityId));
    }
    if (event.isCombinedCalendarEvent && Array.isArray(event.sourceCalendars)) {
      return event.sourceCalendars
        .map((calendar) => calendar?.entityId)
        .filter((entityId) => entityId && !this._hiddenCalendars.has(entityId));
    }
    return event.entityId && !this._hiddenCalendars.has(event.entityId) ? [event.entityId] : [];
  }

  getVisibleCalendarColorsForEvent(event) {
    const visibleSourceEntityIds = this.getVisibleSourceEntityIdsForEvent(event);
    if (visibleSourceEntityIds.length === 0) return [];

    const styleOverrides = this.getEventStyleOverrides(event);
    if (styleOverrides?.hasExplicitBackgroundColor && styleOverrides.backgroundColors?.length) {
      return styleOverrides.backgroundColors.filter(Boolean);
    }

    const virtualCalendar = this.getVirtualBadgeForEvent(event);
    if (virtualCalendar) {
      const hasVisibleVirtualSource = visibleSourceEntityIds.some((entityId) => virtualCalendar.entities.includes(entityId));
      if (!hasVisibleVirtualSource) return [];

      const virtualColor = this.getVirtualCalendarColor(virtualCalendar, event);

      if (event?.isCombinedCalendarEvent && Array.isArray(event.sourceCalendars)) {
        const additionalColors = Array.from(new Set(event.sourceCalendars
          .filter((calendar) => calendar?.entityId && !virtualCalendar.entities.includes(calendar.entityId))
          .filter((calendar) => !this._hiddenCalendars.has(calendar.entityId))
          .map((calendar) => calendar.color)
          .filter(Boolean)));

        if (additionalColors.length > 0) {
          return [virtualColor, ...additionalColors];
        }
      }

      return [virtualColor];
    }

    if (event.isCombinedCalendarEvent && Array.isArray(event.sourceCalendars)) {
      return event.sourceCalendars
        .filter(calendar => !this._hiddenCalendars.has(calendar.entityId))
        .map(calendar => calendar.color);
    }

    return [event.color];
  }

  getMatchedEventStyleRules(event) {
    const configuredRules = Array.isArray(this._config?.event_styles) ? this._config.event_styles : [];
    if (configuredRules.length === 0) return [];
    return configuredRules.filter((rule) => this.matchesAdvancedRule(rule, { event }).matches);
  }

  getSingleEventStyleCandidates(event) {
    const rules = this.getMatchedEventStyleRules(event);
    const candidates = {};

    rules.forEach((rule) => {
      Object.entries(rule.output?.style || rule.style || {}).forEach(([key, value]) => {
        if (value === undefined || value === null || value === '') return;
        const existing = candidates[key];
        if (!existing || rule.priority > existing.priority || (rule.priority === existing.priority && rule.index < existing.ruleIndex)) {
          candidates[key] = { value, priority: rule.priority, ruleIndex: rule.index };
        }
      });
    });

    return candidates;
  }

  getEventStyleOverrides(event) {
    if (!event) return null;

    if (event.isCombinedCalendarEvent && Array.isArray(event.sourceEvents)) {
      const visibleSources = event.sourceEvents.filter((sourceEvent) => !this._hiddenCalendars.has(sourceEvent.entityId));
      if (visibleSources.length === 0) return null;

      const sourceCandidates = visibleSources.map((sourceEvent, sourceIndex) => {
        const candidates = this.getSingleEventStyleCandidates(sourceEvent);
        const customColor = this.getCustomEventColor(sourceEvent);
        const virtualColor = this.getVirtualCalendarColor(this.getVirtualBadgeForEntity(sourceEvent.entityId), sourceEvent);
        return { sourceEvent, sourceIndex, candidates, customColor, virtualColor };
      });

      const hasExplicitBackgroundColor = sourceCandidates.some(({ candidates, customColor }) =>
        !!customColor || (candidates.background_color?.value !== undefined && candidates.background_color?.value !== null && candidates.background_color?.value !== '')
      );
      const backgroundColors = sourceCandidates.map(({ sourceEvent, candidates, virtualColor }) => this.getEffectiveEventColor(sourceEvent, candidates, { virtualColor }));
      const uniqueBackgroundCount = new Set(backgroundColors).size;
      const hasDuplicateBackgroundColors = uniqueBackgroundCount !== backgroundColors.length;

      const mergedOverrides = {};
      const allStyleKeys = new Set(sourceCandidates.flatMap(({ candidates }) => Object.keys(candidates)));
      allStyleKeys.delete('background_color');

      allStyleKeys.forEach((styleKey) => {
        let best = null;
        sourceCandidates.forEach(({ candidates, sourceIndex }) => {
          const candidate = candidates[styleKey];
          if (!candidate) return;
          const candidatePriority = Number.isFinite(candidate.priority) ? candidate.priority : 0;
          if (!best || candidatePriority > best.priority || (candidatePriority === best.priority && sourceIndex < best.sourceIndex)) {
            best = { ...candidate, priority: candidatePriority, sourceIndex };
          }
        });

        if (best) mergedOverrides[styleKey] = best.value;
      });

      return {
        ...mergedOverrides,
        backgroundColors,
        hasDuplicateBackgroundColors,
        hasExplicitBackgroundColor
      };
    }

    const candidates = this.getSingleEventStyleCandidates(event);
    const overrides = Object.entries(candidates).reduce((acc, [key, meta]) => {
      acc[key] = meta.value;
      return acc;
    }, {});
    const customColor = this.getCustomEventColor(event);
    if (customColor) {
      overrides.background_color = customColor;
    }
    overrides.backgroundColors = [this.getEffectiveEventColor(event, candidates)];
    overrides.hasDuplicateBackgroundColors = false;
    overrides.hasExplicitBackgroundColor = !!customColor || Object.prototype.hasOwnProperty.call(overrides, 'background_color');
    return overrides;
  }

  isEventHiddenByStyle(event) {
    return this.getEventStyleOverrides(event)?.hide === true;
  }

  createZebraStripeGradient(colors) {
    if (colors.length === 1) {
      return colors[0];
    }

    const configuredStripeWidth = Number(this._config?.combine_calendars_width);
    const stripeWidthPx = Number.isFinite(configuredStripeWidth) && configuredStripeWidth > 0
      ? configuredStripeWidth
      : 12;
    const cycle = colors.map((color, index) => {
      const start = index * stripeWidthPx;
      const end = start + stripeWidthPx;
      return `${color} ${start}px ${end}px`;
    }).join(', ');

    return `repeating-linear-gradient(135deg, ${cycle})`;
  }

  createVerticalBarsGradient(colors) {
    const segments = colors.map((color, index) => {
      const start = (index / colors.length) * 100;
      const end = ((index + 1) / colors.length) * 100;
      return `${color} ${start}% ${end}%`;
    }).join(', ');
    return `linear-gradient(to bottom, ${segments})`;
  }

  createDotsDecoration(colors, indicatorWidth) {
    const safeWidth = Math.max(1, indicatorWidth);
    const dotRadius = Math.max(2, Math.floor(safeWidth * 0.3));
    const x = safeWidth / 2;
    return colors
      .map((color, index) => {
        const y = (safeWidth / 2) + (index * safeWidth);
        return `radial-gradient(circle at ${x}px ${y}px, ${color} 0 ${dotRadius}px, transparent ${dotRadius + 1}px)`;
      })
      .join(', ');
  }

  getCombinedBackgroundColor(visibleColors, fallbackColor) {
    const primaryColor = visibleColors[0] || fallbackColor;
    const option = this.normalizeCombineBackground(this._config?.combine_background);
    if (option === DEFAULT_COMBINE_BACKGROUND) return primaryColor;
    if (option === 'neutral') return DEFAULT_EVENT_NEUTRAL_BACKGROUND;
    return option;
  }

  getEventNeutralBackgroundColor() {
    const normalized = this.normalizeSingleColor(this._config?.event_neutral_background);
    return normalized || DEFAULT_EVENT_NEUTRAL_BACKGROUND;
  }

  getEventTintBackgroundColor(primaryColor) {
    const tintTransparency = this.normalizeBackgroundOpacity(this._config?.event_tint_opacity, DEFAULT_EVENT_TINT_OPACITY);
    const tintOpacity = 1 - (tintTransparency / 100);
    const baseRgb = this._isDarkMode
      ? { r: 42, g: 47, b: 54 }
      : { r: 255, g: 255, b: 255 };
    const primaryRgb = this.colorToRgb(primaryColor);
    if (!primaryRgb) return this.colorWithAlpha(primaryColor, tintOpacity);
    const composed = this.blendRgb(primaryRgb, baseRgb, tintOpacity);
    return `rgb(${composed.r}, ${composed.g}, ${composed.b})`;
  }

  getEventColorBarWidth() {
    const configuredWidth = Number(this._config?.event_color_bar_width);
    if (Number.isFinite(configuredWidth) && configuredWidth > 0) return configuredWidth;
    const combineWidth = Number(this._config?.combine_calendars_width);
    if (Number.isFinite(combineWidth) && combineWidth > 0) return combineWidth;
    return DEFAULT_EVENT_COLOR_BAR_WIDTH;
  }

  getEventBackgroundColor(event) {
    const visibleColors = this.getVisibleCalendarColorsForEvent(event);
    const primaryColor = visibleColors[0] || event?.color || '#3b82f6';
    const eventColorMode = this.normalizeEventColorMode(this._config?.event_color_mode);

    if (visibleColors.length <= 1) {
      if (eventColorMode === 'left-neutral') {
        return this.getEventNeutralBackgroundColor();
      }
      if (eventColorMode === 'left-tint') {
        return this.getEventTintBackgroundColor(primaryColor);
      }
      return primaryColor;
    }

    return this.getCombinedBackgroundColor(visibleColors, primaryColor);
  }

  getContractColor(backgroundColor) {
    return getContrastColorHelper(backgroundColor, {
      colorToRgb: this.colorToRgb.bind(this)
    });
  }

  getIndicatorColors(visibleColors, combineStyle, combineBackgroundOption) {
    if ((combineStyle === 'bars' || combineStyle === 'dots') && combineBackgroundOption === 'primary') {
      return visibleColors.slice(1);
    }
    return visibleColors;
  }

  getEventStyle(event, { withBorderAccent = false } = {}) {
    const styleOverrides = this.getEventStyleOverrides(event);
    const virtualCalendar = this.getVirtualBadgeForEvent(event);
    const virtualColor = virtualCalendar
      ? (virtualCalendar.color || event?.color || this.normalizeSingleColor(this._config.colors[virtualCalendar.entities[0]]))
      : null;
    const resolvedVisibleColors = this.getVisibleCalendarColorsForEvent(event);
    const virtualExplicitColors = virtualCalendar && styleOverrides?.hasExplicitBackgroundColor
      ? Array.from(new Set((styleOverrides.backgroundColors || []).filter(Boolean)))
      : null;
    const visibleColors = virtualExplicitColors?.length
      ? virtualExplicitColors
      : (virtualCalendar
        ? resolvedVisibleColors
        : (styleOverrides?.backgroundColors?.length ? styleOverrides.backgroundColors : resolvedVisibleColors));
    const primaryColor = visibleColors[0] || event.color;

    const shouldShowBorderAccent = withBorderAccent && visibleColors.length <= 1;
    const borderStyle = shouldShowBorderAccent
      ? `border-left: 4px solid ${primaryColor};`
      : 'border-left: none;';
    const extraStyleParts = [];
    const isMutedPastEvent = this._config?.past_event_mode === 'muted' && this.isPastEvent(event);
    if (isMutedPastEvent && styleOverrides?.opacity === undefined) {
      extraStyleParts.push('opacity: 0.55;');
    }
    if (isMutedPastEvent && styleOverrides?.filter === undefined) {
      extraStyleParts.push('filter: grayscale(70%) saturate(45%);');
    }
    if (styleOverrides?.opacity !== undefined) {
      extraStyleParts.push(`opacity: ${styleOverrides.opacity};`);
    }
    if (styleOverrides?.filter !== undefined) {
      extraStyleParts.push(`filter: ${styleOverrides.filter};`);
    }
    const extraStyle = extraStyleParts.join(' ');
    const finalizeStyle = (style) => `${style} ${extraStyle}`.trim();

    const eventColorMode = this.normalizeEventColorMode(this._config?.event_color_mode);
    if (visibleColors.length <= 1) {
      if (eventColorMode === 'left-neutral') {
        const barWidth = this.getEventColorBarWidth();
        return finalizeStyle(`--combine-left-offset: ${barWidth}px; background-color: ${this.getEventNeutralBackgroundColor()}; background-image: linear-gradient(to right, ${primaryColor} 0 ${barWidth}px, transparent ${barWidth}px); background-size: ${barWidth}px 100%; background-position: left top; background-repeat: no-repeat; background-clip: padding-box; ${borderStyle}`);
      }
      if (eventColorMode === 'left-tint') {
        const barWidth = this.getEventColorBarWidth();
        return finalizeStyle(`--combine-left-offset: ${barWidth}px; background-color: ${this.getEventTintBackgroundColor(primaryColor)}; background-image: linear-gradient(to right, ${primaryColor} 0 ${barWidth}px, transparent ${barWidth}px); background-size: ${barWidth}px 100%; background-position: left top; background-repeat: no-repeat; background-clip: padding-box; ${borderStyle}`);
      }
      return finalizeStyle(`background-color: ${primaryColor}; background-image: none; background-clip: padding-box; ${borderStyle}`);
    }

    const combineStyle = this.normalizeCombineStyle(this._config?.combine_style);
    const combineBackgroundOption = this.normalizeCombineBackground(this._config?.combine_background);
    const backgroundColor = this.getCombinedBackgroundColor(visibleColors, primaryColor);
    const indicatorWidth = Number(this._config?.combine_calendars_width) > 0
      ? Number(this._config.combine_calendars_width)
      : 12;
    const indicatorColors = this.getIndicatorColors(visibleColors, combineStyle, combineBackgroundOption);
    const shouldShowCornerBadges = !!styleOverrides?.hasDuplicateBackgroundColors;

    if (combineStyle === 'bars') {
      const barsGradient = indicatorColors.length > 0 ? this.createVerticalBarsGradient(indicatorColors) : 'none';
      const leftOffset = indicatorColors.length > 0 ? `--combine-left-offset: ${indicatorWidth}px;` : '--combine-left-offset: 0px;';
      return finalizeStyle(`${leftOffset} background-color: ${backgroundColor}; background-image: ${barsGradient}; background-size: ${indicatorWidth}px 100%; background-position: left top; background-repeat: no-repeat; background-clip: padding-box; ${shouldShowCornerBadges ? '--combined-corner-bubbles: 1;' : ''} ${borderStyle}`);
    }

    if (combineStyle === 'dots') {
      const dots = indicatorColors.length > 0 ? this.createDotsDecoration(indicatorColors, indicatorWidth) : 'none';
      const leftOffset = indicatorColors.length > 0 ? `--combine-left-offset: ${indicatorWidth}px;` : '--combine-left-offset: 0px;';
      return finalizeStyle(`${leftOffset} background-color: ${backgroundColor}; background-image: ${dots}; background-repeat: no-repeat; background-clip: padding-box; ${shouldShowCornerBadges ? '--combined-corner-bubbles: 1;' : ''} ${borderStyle}`);
    }

    const stripeGradient = this.createZebraStripeGradient(visibleColors);
    return finalizeStyle(`--combine-left-offset: 0px; background-color: ${backgroundColor}; background-image: ${stripeGradient}; background-clip: padding-box; ${shouldShowCornerBadges ? '--combined-corner-bubbles: 1;' : ''} ${borderStyle}`);
  }

  getEventDateTimeInfo(event) {
    return getNormalizedEventDateTimeInfo(event, { parseCalendarDate: this.parseCalendarDate.bind(this) });
  }

  getLocalDateKey(date) {
    const { year, month, day } = this.getDateParts(date);
    return Date.UTC(year, month - 1, day);
  }

  eventSpansMultipleLocalDates(eventStart, eventEnd) {
    return this.getLocalDateKey(eventStart) !== this.getLocalDateKey(eventEnd);
  }

  shouldRenderTimedEventAsAllDayInSchedule(eventStart, eventEnd) {
    const durationMs = eventEnd.getTime() - eventStart.getTime();
    return durationMs >= 86400000 && this.eventSpansMultipleLocalDates(eventStart, eventEnd);
  }

  getScheduleVisualInfo(event) {
    return getScheduleVisualInfoHelper(event, {
      getEventDateTimeInfo: (infoEvent) => this.getEventDateTimeInfo(infoEvent),
      shouldRenderTimedEventAsAllDayInSchedule: (eventStart, eventEnd) => this.shouldRenderTimedEventAsAllDayInSchedule(eventStart, eventEnd),
      shouldShowEventTime: (timeEvent) => this.shouldShowEventTime(timeEvent),
      formatEventTime: (date, options) => this.formatEventTime(date, options),
      translate: (key, params) => this.t(key, params)
    });
  }

  getEventDaySegment(event, date, options = {}) {
    const scheduleVisualInfo = options.useScheduleVisualTreatment ? this.getScheduleVisualInfo(event) : null;
    const { eventStart, eventEnd, isAllDay } = scheduleVisualInfo || this.getEventDateTimeInfo(event);
    const rendersAsAllDay = scheduleVisualInfo?.rendersAsAllDay || isAllDay;

    const { dayStart, nextDayStart } = this.getDayBounds(date);

    if (eventEnd <= dayStart || eventStart >= nextDayStart) {
      return null;
    }

    const segmentStart = new Date(Math.max(eventStart.getTime(), dayStart.getTime()));
    const segmentEnd = new Date(Math.min(eventEnd.getTime(), nextDayStart.getTime()));
    const isAllDaySegment = rendersAsAllDay || (
      segmentStart.getTime() === dayStart.getTime() &&
      segmentEnd.getTime() === nextDayStart.getTime()
    );

    return {
      eventStart,
      eventEnd,
      segmentStart,
      segmentEnd,
      isAllDay,
      isAllDaySegment,
      startsOnDay: eventStart >= dayStart && eventStart < nextDayStart,
      endsOnDay: eventEnd > dayStart && eventEnd <= nextDayStart,
      displayTitle: scheduleVisualInfo?.displayTitle || event.summary || this.t('untitledEvent'),
      rendersAsAllDay
    };
  }

  sortEventsForDate(events, date) {
    return [...events].sort((a, b) => {
      const aSegment = this.getEventDaySegment(a, date);
      const bSegment = this.getEventDaySegment(b, date);

      if (!aSegment && !bSegment) return 0;
      if (!aSegment) return 1;
      if (!bSegment) return -1;

      if (aSegment.isAllDaySegment && !bSegment.isAllDaySegment) return -1;
      if (!aSegment.isAllDaySegment && bSegment.isAllDaySegment) return 1;

      return aSegment.segmentStart - bSegment.segmentStart;
    });
  }

  getEventsForDay(date, { includeHiddenStyledEvents = false } = {}) {
    const sourceEvents = this.combineDuplicateCalendarEvents(this._events);

    return sourceEvents.filter(event => {
      if (this.getVisibleCalendarColorsForEvent(event).length === 0) {
        return false;
      }
      if (!includeHiddenStyledEvents && this.isEventHiddenByStyle(event)) {
        return false;
      }

      if (this._config.past_event_mode === 'hide' && this.isPastEvent(event)) {
        return false;
      }

      return this.getEventDaySegment(event, date) !== null;
    });
  }

  isPastEvent(event) {
    if (!event) return false;
    const { eventEnd } = this.getEventDateTimeInfo(event);
    return eventEnd < new Date();
  }

  isCurrentDayInViewableRange() {
    const { startDate, endDate } = this.getVisibleDateRange();
    const now = new Date();
    return now >= startDate && now <= endDate;
  }

  shouldDisablePreviousNavigation() {
    return this._config.past_event_mode === 'hide' && this.isCurrentDayInViewableRange();
  }

  canNavigateToPreviousPeriod() {
    return !this.shouldDisablePreviousNavigation();
  }

  attachEventListeners() {
    const prevButton = this.getRootElementById('prev-period');
    const nextButton = this.getRootElementById('next-period');
    const todayButton = this.getRootElementById('today');
    const addEventButton = this.getRootElementById('add-event-btn');
    const themeToggleButton = this.getRootElementById('theme-toggle');
    const dashboardNavButton = this.getRootElementById('header-dashboard-btn');
    const modal = this.getRootElementById('event-modal');
    const agendaContainer = this.getRootElementById('agenda-container');
    this.observeModalVisibility(modal);

    // View mode selector
    const viewModeSelect = this.getRootElementById('view-mode-select');
    viewModeSelect?.addEventListener('change', () => {
      this._viewMode = viewModeSelect.value;
      if (this._viewMode === 'agenda') {
        this.resetAgendaWindowToToday();
      } else {
        this.setWeekStart();
      }
      this.ensureEventsForCurrentRange({ renderIfCovered: true });
    });

    const calendarBadgesStrip = this._root.querySelector('.calendar-badges');
    if (calendarBadgesStrip) {
      calendarBadgesStrip.addEventListener('scroll', () => this.updateCalendarBadgesScrollState(), { passive: true });
    }

    // Calendar badge toggle (both regular and inline)
    this._root.querySelectorAll('.calendar-badge, .calendar-badge-inline').forEach(badge => {
      badge.addEventListener('click', (e) => {
        const entityId = badge.getAttribute('data-entity');
        const virtualBadge = entityId?.startsWith('virtual:')
          ? this.getVirtualBadgeById(entityId.replace('virtual:', ''))
          : null;
        const targetEntities = virtualBadge ? virtualBadge.entities : [entityId];
        const allHidden = targetEntities.every((targetEntityId) => this._hiddenCalendars.has(targetEntityId));
        targetEntities.forEach((targetEntityId) => {
          if (allHidden) {
            this._hiddenCalendars.delete(targetEntityId);
          } else {
            this._hiddenCalendars.add(targetEntityId);
          }
        });
        this.persistPreferences();
        this.renderPreservingAgendaScroll();
      });
    });

    // Add event button
    addEventButton?.addEventListener('click', () => {
      this.showCreateEventModal();
    });

    themeToggleButton?.addEventListener('click', () => {
      this.applyThemeMode(this._isDarkMode ? 'light' : 'dark');
      this.persistPreferences();
      this.render();
    });

    dashboardNavButton?.addEventListener('click', () => this.navigateToConfiguredDashboard());

    prevButton?.addEventListener('click', () => this.navigateToPreviousPeriod());
    nextButton?.addEventListener('click', () => this.navigateToNextPeriod());

    todayButton?.addEventListener('click', () => {
      if (this._viewMode === 'agenda') {
        this.resetAgendaWindowToToday();
      } else {
        this._currentDate = new Date();
      }
      if (this._viewMode !== 'agenda' && this.getRollingDaysForView() === null) {
        this.setWeekStart();
      }
      this.ensureEventsForCurrentRange({ renderIfCovered: true });
    });

    agendaContainer?.addEventListener('scroll', async () => {
      if (this._viewMode !== 'agenda' || this._agendaScrollLoadLock || this._agendaSuppressScrollHandling) return;
      this.updateAgendaVisibleDateRangeFromDom();
      const threshold = 80;
      const nearBottom = agendaContainer.scrollTop + agendaContainer.clientHeight >= agendaContainer.scrollHeight - threshold;
      const nearTop = agendaContainer.scrollTop <= threshold;
      const canLoadPastAgendaDays = this.canNavigateToPreviousPeriod();
      const isRollingAgendaMode = this.getAgendaRollingDays() !== null;

      if (isRollingAgendaMode) return;
      if (!nearBottom && !(nearTop && canLoadPastAgendaDays)) return;

      this._agendaScrollLoadLock = true;
      const previousScrollHeight = agendaContainer.scrollHeight;

      if (nearBottom) {
        this._agendaPendingScrollTop = agendaContainer.scrollTop;
        this._agendaEndDate.setDate(this._agendaEndDate.getDate() + this._agendaDaysPerScrollLoad);
      } else if (nearTop && canLoadPastAgendaDays) {
        this._agendaPendingScrollTop = null;
        this._agendaStartDate.setDate(this._agendaStartDate.getDate() - this._agendaDaysPerScrollLoad);
      }

      await this.ensureEventsForCurrentRange({ renderIfCovered: true });

      if (nearTop && canLoadPastAgendaDays) {
        const updatedContainer = this.getRootElementById('agenda-container');
        if (updatedContainer) {
          this.setAgendaScrollTopWithoutTriggeringLoad(
            updatedContainer,
            updatedContainer.scrollHeight - previousScrollHeight + threshold
          );
        }
      }

      this._agendaScrollLoadLock = false;
    }, { passive: true });

    this.attachSwipeControls();

    this._root.querySelectorAll('.day-badge-action').forEach(actionEl => {
      actionEl.addEventListener('click', (e) => this.handleDayBadgeActionClick(e, actionEl));
    });

    // Event click handlers for all view modes
    this._root.querySelectorAll('.event, .week-compact-event, .week-standard-event, .all-day-event, .agenda-event').forEach(eventEl => {
      eventEl.addEventListener('click', (e) => {
        e.stopPropagation();
        const eventData = JSON.parse(eventEl.getAttribute('data-event'));
        this.showEventModal(eventData);
      });
    });

    // +N more click handlers (month view)
    this._root.querySelectorAll('.more-events').forEach(moreEl => {
      moreEl.addEventListener('click', (e) => {
        e.stopPropagation();
        const dayEl = moreEl.closest('.day-cell');
        if (!dayEl) return;

        const date = new Date(dayEl.getAttribute('data-date'));
        const events = this.getEventsForDay(date);

        if (events.length > 0) {
          this.showDayCompactModal(date, events);
        }
      });
    });

    // Day click handlers (month view only)
    this._root.querySelectorAll('.day-cell').forEach(dayEl => {
      dayEl.addEventListener('click', (e) => {
        // Don't open if clicking on an event
        if (e.target.classList.contains('event') || e.target.closest('.event') || e.target.closest('.day-badge-action')) {
          return;
        }

        const date = new Date(dayEl.getAttribute('data-date'));
        const canManage = this._config.enable_event_management && this.getWritableCalendars().length > 0;

        // Opt-in 'show_events': tapping a day with events opens the day list;
        // empty days still go straight to create so blank days stay fast to add to.
        if (this._config.month_day_tap_action === 'show_events') {
          const events = this.getEventsForDay(date);
          if (events.length > 0) {
            this.showDayModal(date, events);
          } else if (canManage) {
            this.showCreateEventModal(date);
          }
          return;
        }

        // Default 'create': if event management is enabled, show create modal
        if (canManage) {
          this.showCreateEventModal(date);
        } else {
          // Otherwise show events for that day
          const events = this.getEventsForDay(date);
          if (events.length > 0) {
            this.showDayModal(date, events);
          }
        }
      });
    });

    // Day row click handlers (agenda view)
    this._root.querySelectorAll('.agenda-day-row').forEach(rowEl => {
      rowEl.addEventListener('click', (e) => {
        // Don't open if clicking on an event
        if (e.target.classList.contains('agenda-event') || e.target.closest('.agenda-event') || e.target.closest('.day-badge-action')) {
          return;
        }

        if (e.target.closest('.day-badge-action') || !this._config.enable_event_management || this.getWritableCalendars().length === 0) {
          return;
        }

        const date = new Date(rowEl.getAttribute('data-date'));
        this.showCreateEventModal(date);
      });
    });

    // Time slot click handlers (schedule view)
    this._root.querySelectorAll('.day-time-slot').forEach(slotEl => {
      slotEl.addEventListener('click', (e) => {
        if (!this._config.enable_event_management || this.getWritableCalendars().length === 0) {
          return;
        }

        // Get the date and hour from the parent column
        const column = slotEl.closest('.week-standard-day-column');
        const date = new Date(column.getAttribute('data-date'));
        const hour = parseInt(slotEl.getAttribute('data-hour'));

        // Set the time on the date
        date.setHours(hour, 0, 0, 0);

        this.showCreateEventModal(date, date);
      });
    });

    // Day header click handlers (week views)
    this._root.querySelectorAll('[data-click-target="day-header"]').forEach(headerEl => {
      headerEl.addEventListener('click', (e) => {
        if (!this._config.enable_event_management || this.getWritableCalendars().length === 0) {
          return;
        }

        const column = headerEl.closest('[data-date]');
        const date = new Date(column.getAttribute('data-date'));

        this.showCreateEventModal(date);
      });
    });

  }

  updateEventModalOpenState(modal = this.getRootElementById('event-modal')) {
    const isOpen = !!modal && modal.classList.contains('show');
    this.classList?.toggle('event-modal-open', isOpen);
    if (!isOpen) {
      this.flushPendingHostResizeRender();
    }
  }

  observeModalVisibility(modal) {
    if (this._modalVisibilityObserver) {
      this._modalVisibilityObserver.disconnect();
      this._modalVisibilityObserver = null;
    }

    this.updateEventModalOpenState(modal);

    if (!modal) return;

    this._modalVisibilityObserver = new MutationObserver(() => {
      this.updateEventModalOpenState(modal);
      if (!this.isEventManagementDialogOpen()) {
        this.flushPendingHeaderTimeRender();
      }
    });

    this._modalVisibilityObserver.observe(modal, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  flushPendingHeaderTimeRender() {
    if (!this._pendingHeaderSensorRender) return;
    this._pendingHeaderSensorRender = false;
    this.renderPreservingAgendaScroll();
  }

  navigateToPreviousPeriod() {
    if (!this.canNavigateToPreviousPeriod()) {
      return;
    }

    if (this._viewMode === 'agenda') {
      this.ensureAgendaWindowInitialized();
      const rollingDays = this.getAgendaRollingDays();
      const backwardDays = rollingDays !== null
        ? rollingDays + 1
        : this.getAgendaViewportDayCapacity();
      this._agendaStartDate.setDate(this._agendaStartDate.getDate() - backwardDays);
      this._agendaStartDate.setHours(0, 0, 0, 0);
      this._agendaEndDate.setDate(this._agendaEndDate.getDate() - backwardDays);
      this._agendaEndDate.setHours(23, 59, 59, 999);
    } else if (this._viewMode === 'month') {
      if (this._config.rolling_weeks !== null) {
        // In rolling weeks mode, go back by the number of weeks shown
        const weeksToAdvance = this._config.rolling_weeks + 1;
        this._currentDate.setDate(this._currentDate.getDate() - (weeksToAdvance * 7));
      } else {
        // Standard month navigation
        this._currentDate.setMonth(this._currentDate.getMonth() - 1);
      }
    } else {
      // In rolling-days mode, advance by rolling days + 1, otherwise by 7
      const rollingDays = this.getRollingDaysForView();
      const daysToAdvance = rollingDays !== null
        ? rollingDays + 1
        : 7;
      this._currentDate.setDate(this._currentDate.getDate() - daysToAdvance);
      if (rollingDays === null) {
        this.setWeekStart();
      }
    }
    this.ensureEventsForCurrentRange({ renderIfCovered: true });
  }

  navigateToConfiguredDashboard() {
    const dashboardPath = this.getConfiguredDashboardPath();
    if (!dashboardPath) return;

    if (this._hass && typeof this._hass.navigate === 'function') {
      this._hass.navigate(dashboardPath);
      return;
    }

    window.history.pushState(null, '', dashboardPath);
    window.dispatchEvent(new Event('location-changed'));
  }

  navigateToNextPeriod() {
    if (this._viewMode === 'agenda') {
      this.ensureAgendaWindowInitialized();
      const rollingDays = this.getAgendaRollingDays();
      const dayMs = 24 * 60 * 60 * 1000;
      const windowSpanDays = rollingDays !== null
        ? rollingDays
        : Math.max(0, Math.round((this._agendaEndDate.getTime() - this._agendaStartDate.getTime()) / dayMs));
      const visibleRangeFromDom = this.getAgendaVisibleDateRangeFromDom();
      const visibleRangeFromCache = this._agendaVisibleStartDate && this._agendaVisibleEndDate
        ? { startDate: this._agendaVisibleStartDate, endDate: this._agendaVisibleEndDate }
        : null;
      const visibleRange = visibleRangeFromDom || (
        this.isAgendaRangeWithinCurrentWindow(visibleRangeFromCache) ? visibleRangeFromCache : null
      );
      const targetStart = rollingDays !== null
        ? new Date(this._agendaStartDate)
        : (visibleRange ? new Date(visibleRange.endDate) : new Date(this._agendaEndDate));
      targetStart.setHours(0, 0, 0, 0);
      if (rollingDays !== null) {
        targetStart.setDate(targetStart.getDate() + rollingDays + 1);
      }

      const targetEnd = new Date(targetStart);
      targetEnd.setDate(targetEnd.getDate() + windowSpanDays);
      targetEnd.setHours(23, 59, 59, 999);

      this._agendaStartDate = targetStart;
      this._agendaEndDate = targetEnd;
    } else if (this._viewMode === 'month') {
      if (this._config.rolling_weeks !== null) {
        // In rolling weeks mode, go forward by the number of weeks shown
        const weeksToAdvance = this._config.rolling_weeks + 1;
        this._currentDate.setDate(this._currentDate.getDate() + (weeksToAdvance * 7));
      } else {
        // Standard month navigation
        this._currentDate.setMonth(this._currentDate.getMonth() + 1);
      }
    } else {
      // In rolling-days mode, advance by rolling days + 1, otherwise by 7
      const rollingDays = this.getRollingDaysForView();
      const daysToAdvance = rollingDays !== null
        ? rollingDays + 1
        : 7;
      this._currentDate.setDate(this._currentDate.getDate() + daysToAdvance);
      if (rollingDays === null) {
        this.setWeekStart();
      }
    }
    this.ensureEventsForCurrentRange({ renderIfCovered: true });
  }

  shouldEnableSwipeControls() {
    return !this._config.disable_swipe_controls && this._viewMode !== 'agenda';
  }

  canTriggerSwipePeriodNavigation(deltaX) {
    if (this._viewMode !== 'week-standard') {
      return true;
    }

    const scheduleContainer = this._root?.querySelector('.week-standard-container');
    if (!scheduleContainer) {
      return true;
    }

    const maxScrollLeft = Math.max(0, scheduleContainer.scrollWidth - scheduleContainer.clientWidth);
    if (maxScrollLeft <= 1) {
      return true;
    }

    const edgeTolerance = 2;
    const isAtLeftEdge = scheduleContainer.scrollLeft <= edgeTolerance;
    const isAtRightEdge = scheduleContainer.scrollLeft >= (maxScrollLeft - edgeTolerance);

    // Swipe left should only paginate when the schedule is already fully scrolled right.
    if (deltaX < 0) {
      return isAtRightEdge;
    }

    // Swipe right should only paginate when the schedule is already fully scrolled left.
    return isAtLeftEdge;
  }

  attachSwipeControls() {
    if (!this._root) return;

    const container = this._root.querySelector('.calendar-container');
    if (!container) return;

    const swipeThreshold = 48;
    const maxVerticalDrift = 40;

    container.addEventListener('touchstart', (event) => {
      if (!this.shouldEnableSwipeControls() || event.touches.length !== 1) return;
      const touch = event.touches[0];
      this._swipeStartX = touch.clientX;
      this._swipeStartY = touch.clientY;
      this._swipeTracking = true;
      const eventTarget = event.target instanceof Element ? event.target : null;
      this._swipeStartedOnInteractive = !!eventTarget?.closest('button, select, input, textarea, .event, .week-compact-event, .week-standard-event, .all-day-event, .day-badge-action, [data-day-badge-action-id]');
    }, { passive: true });

    container.addEventListener('touchend', (event) => {
      if (!this._swipeTracking || !this.shouldEnableSwipeControls() || event.changedTouches.length !== 1) return;

      if (this._swipeStartedOnInteractive) {
        this._swipeTracking = false;
        this._swipeStartedOnInteractive = false;
        return;
      }

      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - this._swipeStartX;
      const deltaY = touch.clientY - this._swipeStartY;

      if (Math.abs(deltaX) >= swipeThreshold && Math.abs(deltaY) <= maxVerticalDrift) {
        if (this.canTriggerSwipePeriodNavigation(deltaX)) {
          if (deltaX < 0) {
            this.navigateToNextPeriod();
          } else if (this.canNavigateToPreviousPeriod()) {
            this.navigateToPreviousPeriod();
          }
        }
      }

      this._swipeTracking = false;
      this._swipeStartedOnInteractive = false;
    }, { passive: true });

    container.addEventListener('touchcancel', () => {
      this._swipeTracking = false;
      this._swipeStartedOnInteractive = false;
    }, { passive: true });
  }

  getRecurrenceWeekdayOptions() {
    return [
      { key: 'MO', label: 'Mon' },
      { key: 'TU', label: 'Tue' },
      { key: 'WE', label: 'Wed' },
      { key: 'TH', label: 'Thu' },
      { key: 'FR', label: 'Fri' },
      { key: 'SA', label: 'Sat' },
      { key: 'SU', label: 'Sun' }
    ];
  }

  buildRRuleFromInputs({ frequency, interval, untilDate, count, byDay }) {
    return buildRRuleFromInputsHelper({ frequency, interval, untilDate, count, byDay });
  }

  parseRRule(rrule = '') {
    const parsed = {
      frequency: 'DAILY',
      interval: '1',
      count: '',
      untilDate: '',
      byDay: []
    };

    if (!rrule || typeof rrule !== 'string') {
      return parsed;
    }

    const ruleWithoutPrefix = rrule.replace(/^RRULE:/i, '');
    const segments = ruleWithoutPrefix.split(';');

    segments.forEach((segment) => {
      const [rawKey, rawValue] = segment.split('=');
      const key = (rawKey || '').toUpperCase();
      const value = (rawValue || '').trim();

      if (!key || !value) {
        return;
      }

      if (key === 'FREQ') {
        parsed.frequency = value.toUpperCase();
      } else if (key === 'INTERVAL') {
        parsed.interval = value;
      } else if (key === 'COUNT') {
        parsed.count = value;
      } else if (key === 'BYDAY') {
        parsed.byDay = value.split(',').map((day) => day.trim()).filter(Boolean);
      } else if (key === 'UNTIL') {
        const untilCompact = value.replace(/Z$/, '');
        if (/^\d{8}/.test(untilCompact)) {
          parsed.untilDate = `${untilCompact.slice(0, 4)}-${untilCompact.slice(4, 6)}-${untilCompact.slice(6, 8)}`;
        }
      }
    });

    return parsed;
  }

  getRecurrenceEndMode(recurrenceData = {}) {
    if (recurrenceData.count) return 'after';
    if (recurrenceData.untilDate) return 'on';
    return 'never';
  }

  syncRecurrenceEndInputs() {
    const selected = this._root.querySelector('input[name="event-recurrence-end-mode"]:checked')?.value || 'never';
    const untilInput = this.getRootElementById('event-recurrence-until');
    const countInput = this.getRootElementById('event-recurrence-count');

    if (!untilInput || !countInput) return;

    if (selected === 'on') {
      untilInput.disabled = false;
      countInput.disabled = true;
      countInput.value = '';
    } else if (selected === 'after') {
      untilInput.disabled = true;
      untilInput.value = '';
      countInput.disabled = false;
    } else {
      untilInput.disabled = true;
      untilInput.value = '';
      countInput.disabled = true;
      countInput.value = '';
    }
  }

  setupStartEndDurationSync({ startInputId, endInputId, isDateOnly = false }) {
    const startInput = this.getRootElementById(startInputId);
    const endInput = this.getRootElementById(endInputId);
    if (!startInput || !endInput) return;

    const toDate = (value) => {
      if (!value) return null;
      return isDateOnly ? this.parseLocalDate(value) : this.parsePossiblyLocalDateTime(value);
    };

    const fromDate = (date) => {
      if (!(date instanceof Date) || Number.isNaN(date.getTime())) return '';
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      if (isDateOnly) {
        return `${year}-${month}-${day}`;
      }
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    let durationMs = 0;
    const recalculateDuration = () => {
      const start = toDate(startInput.value);
      const end = toDate(endInput.value);
      if (!start || !end) return;
      durationMs = end.getTime() - start.getTime();
    };

    recalculateDuration();

    startInput.addEventListener('change', () => {
      const nextStart = toDate(startInput.value);
      if (!nextStart) return;
      const nextEnd = new Date(nextStart.getTime() + durationMs);
      endInput.value = fromDate(nextEnd);
    });

    endInput.addEventListener('change', recalculateDuration);
  }

  resolveTimedEventRange(startValue, endValue, fallbackDurationMs = 60 * 60 * 1000) {
    return resolveTimedEventRangeHelper(startValue, endValue, fallbackDurationMs);
  }

  showCreateEventModal(defaultDate = null, defaultTime = null, options = {}) {

    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');
    this.applyEventModalSizeClass(content);

    const writableCalendars = this.getWritableCalendars();
    if (writableCalendars.length === 0) {
      this.showError(this.t('noWritableCalendars'));
      return;
    }

    const prefill = options?.prefill || null;
    const selectedCalendarIds = Array.isArray(options?.selectedCalendarIds)
      ? options.selectedCalendarIds.filter((entityId) => writableCalendars.includes(entityId))
      : [];

    // Set defaults
    const now = new Date();
    const startDate = prefill?.startDate ? new Date(prefill.startDate) : (defaultDate ? new Date(defaultDate) : now);
    const hasExplicitDefaultTime = defaultTime instanceof Date || !!prefill?.startDate;
    const startTime = hasExplicitDefaultTime ? new Date(prefill?.startDate || defaultTime) : new Date(startDate);

    // Round to next half hour for timed events
    if (!hasExplicitDefaultTime && (!defaultDate || defaultDate.getHours() !== 0)) {
      const minutes = startTime.getMinutes();
      if (minutes < 30) {
        startTime.setMinutes(30);
      } else {
        startTime.setHours(startTime.getHours() + 1);
        startTime.setMinutes(0);
      }
    }
    startTime.setSeconds(0);
    startTime.setMilliseconds(0);

    // End time is 1 hour after start (for timed events)
    const endTime = prefill?.endDate ? new Date(prefill.endDate) : new Date(startTime);
    if (!prefill?.endDate) {
      endTime.setHours(endTime.getHours() + 1);
    }

    // For all-day events, show same day to user (we'll add +1 when submitting)
    const endDate = prefill?.endDate ? new Date(prefill.endDate) : new Date(startDate);
    const recurrenceData = this.parseRRule(prefill?.rrule || '');
    const isPrefilledRecurring = !!prefill?.rrule;
    const isPrefilledAllDay = !!prefill?.isAllDay;

    content.innerHTML = renderCreateEventForm({
      writableCalendars,
      selectedCalendarIds,
      prefill,
      startDate,
      startTime,
      endDate,
      endTime,
      recurrenceData,
      isPrefilledRecurring,
      isPrefilledAllDay,
      recurrenceEndMode: this.getRecurrenceEndMode(recurrenceData),
      recurrenceWeekdayOptions: this.getRecurrenceWeekdayOptions(),
      helpers: {
        escapeHtml: (value) => this.escapeHtml(value),
        escapeHtmlAttribute: (value) => this.escapeHtmlAttribute(value),
        getCalendarName: (entityId) => this.getCalendarName(entityId),
        t: (key) => this.t(key)
      }
    });

    modal.classList.add('show');

    // Event listeners
    const form = this.getRootElementById('create-event-form');
    const allDayCheckbox = this.getRootElementById('event-all-day');
    const recurringCheckbox = this.getRootElementById('event-recurring');
    const recurrenceFrequency = this.getRootElementById('event-recurrence-frequency');
    const timedFields = this.getRootElementById('timed-event-fields');
    const allDayFields = this.getRootElementById('all-day-event-fields');
    const recurringFields = this.getRootElementById('recurring-event-fields');
    const recurrenceWeekdaysGroup = this.getRootElementById('event-recurrence-weekdays-group');
    const recurrenceEndModeInputs = this._root.querySelectorAll('input[name="event-recurrence-end-mode"]');
    const errorDiv = this.getRootElementById('form-error');

    // Toggle all-day fields
    allDayCheckbox.addEventListener('change', () => {
      if (allDayCheckbox.checked) {
        timedFields.style.display = 'none';
        allDayFields.style.display = 'block';
      } else {
        timedFields.style.display = 'block';
        allDayFields.style.display = 'none';
      }
    });

    const updateRecurringFrequencyVisibility = () => {
      recurrenceWeekdaysGroup.style.display = recurrenceFrequency.value === 'WEEKLY' ? 'block' : 'none';
    };

    recurringCheckbox.addEventListener('change', () => {
      recurringFields.style.display = recurringCheckbox.checked ? 'block' : 'none';
    });

    recurrenceFrequency.addEventListener('change', updateRecurringFrequencyVisibility);
    recurrenceEndModeInputs.forEach((input) => input.addEventListener('change', () => this.syncRecurrenceEndInputs()));
    updateRecurringFrequencyVisibility();
    this.syncRecurrenceEndInputs();

    this.setupStartEndDurationSync({ startInputId: 'event-start', endInputId: 'event-end' });
    this.setupStartEndDurationSync({ startInputId: 'event-start-date', endInputId: 'event-end-date', isDateOnly: true });

    // Close button
    this.getRootElementById('close-modal').addEventListener('click', () => {
      this._combinedEditTargets = null;
      this._combinedDeleteTargets = null;
      modal.classList.remove('show');
    });

    // Cancel button
    this.getRootElementById('cancel-btn').addEventListener('click', () => {
      this._combinedEditTargets = null;
      this._combinedDeleteTargets = null;
      modal.classList.remove('show');
    });

    // Form submission
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const selectedCalendarIds = Array.from(this._root.querySelectorAll('.create-event-calendar:checked'))
        .map((input) => input.value);
      const title = this.getRootElementById('event-title').value.trim();
      const isAllDay = this.getRootElementById('event-all-day').checked;
      const location = this.getRootElementById('event-location').value.trim();
      const description = this.getRootElementById('event-description').value.trim();

      if (selectedCalendarIds.length === 0) {
        this.showFormError(errorDiv, this.t('noWritableCalendars'));
        return;
      }

      const formResult = normalizeEventFormData({
        title,
        location,
        description,
        isAllDay,
        startDate: this.getRootElementById('event-start-date').value,
        endDate: this.getRootElementById('event-end-date').value,
        startDateTime: this.getRootElementById('event-start').value,
        endDateTime: this.getRootElementById('event-end').value
      });

      if (!formResult.valid) {
        this.showFormError(errorDiv, this.t(formResult.errorKey));
        return;
      }

      let eventData = formResult.eventData;

      if (recurringCheckbox.checked) {
        const frequency = this.getRootElementById('event-recurrence-frequency').value;
        const interval = this.getRootElementById('event-recurrence-interval').value;
        const untilDateRaw = this.getRootElementById('event-recurrence-until').value;
        const recurrenceCountRaw = this.getRootElementById('event-recurrence-count').value;
        const recurrenceEndMode = this._root.querySelector('input[name="event-recurrence-end-mode"]:checked')?.value || 'never';
        const untilDate = recurrenceEndMode === 'on' ? untilDateRaw : '';
        const recurrenceCount = recurrenceEndMode === 'after' ? recurrenceCountRaw : '';
        const byDay = Array.from(this._root.querySelectorAll('.event-recurrence-weekday:checked')).map((el) => el.value);
        const recurrenceResult = normalizeEventFormData({
          title,
          location,
          description,
          isAllDay,
          startDate: this.getRootElementById('event-start-date').value,
          endDate: this.getRootElementById('event-end-date').value,
          startDateTime: this.getRootElementById('event-start').value,
          endDateTime: this.getRootElementById('event-end').value,
          recurrence: {
            enabled: true,
            frequency,
            interval,
            untilDate,
            count: recurrenceCount,
            byDay
          }
        });

        if (!recurrenceResult.valid) {
          this.showFormError(errorDiv, this.t(recurrenceResult.errorKey));
          return;
        }

        eventData = recurrenceResult.eventData;
      }

      // Disable submit button
      const submitBtn = this.getRootElementById('submit-btn');
      submitBtn.disabled = true;
      submitBtn.textContent = this.t('creating');

      try {
        await Promise.all(selectedCalendarIds.map((calendarId) => this.createEvent(calendarId, eventData)));
        this._combinedDeleteTargets = null;
        this._combinedDeleteTargets = null;
        modal.classList.remove('show');

        // Refresh events
        this._lastFetch = null;
        await this.updateEvents({ preserveScroll: this._viewMode === 'agenda' });
        this.safeReturnToList(options?.onSaved);
      } catch (error) {
        console.error('Failed to create event:', error);
        this.showFormError(errorDiv, error.message || this.t('failedCreateEvent'));
        submitBtn.disabled = false;
        submitBtn.textContent = this.t('createEvent');
      }
    });

    // Focus on title input
    setTimeout(() => {
      this.getRootElementById('event-title')?.focus();
    }, 100);
  }

  showEditEventModal(event, startDate, endDate, isAllDay, editScope = 'this', onSaved = null) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');
    this.applyEventModalSizeClass(content);

    const writableCalendars = this.getWritableCalendars();
    if (writableCalendars.length === 0) {
      this.showError(this.t('noWritableCalendars'));
      return;
    }

    const selectedEditTargets = Array.isArray(this._combinedEditTargets) && this._combinedEditTargets.length > 0
      ? this._combinedEditTargets
      : null;
    const selectedCombinedCalendarIds = selectedEditTargets
      ? Array.from(new Set(selectedEditTargets.map(target => target.entityId))).filter((entityId) => writableCalendars.includes(entityId))
      : [];
    const visibleCalendarOptions = selectedCombinedCalendarIds.length > 0 ? selectedCombinedCalendarIds : writableCalendars;

    const recurrenceData = this.parseRRule(event.rrule || '');
    const isRecurring = !!event.rrule;
    const isSingleOccurrenceEdit = editScope === 'this' && isRecurring;
    const recurringSelectedByDefault = isRecurring && !isSingleOccurrenceEdit;

    content.innerHTML = renderEditEventForm({
      event,
      startDate,
      endDate,
      isAllDay,
      visibleCalendarOptions,
      selectedCombinedCalendarIds,
      recurrenceData,
      recurringSelectedByDefault,
      recurrenceEndMode: this.getRecurrenceEndMode(recurrenceData),
      recurrenceWeekdayOptions: this.getRecurrenceWeekdayOptions(),
      helpers: {
        escapeHtml: (value) => this.escapeHtml(value),
        escapeHtmlAttribute: (value) => this.escapeHtmlAttribute(value),
        getCalendarName: (entityId) => this.getCalendarName(entityId),
        t: (key) => this.t(key)
      }
    });

    modal.classList.add('show');

    // Event listeners
    const form = this.getRootElementById('edit-event-form');
    const allDayCheckbox = this.getRootElementById('event-all-day');
    const recurringCheckbox = this.getRootElementById('event-recurring');
    const recurrenceFrequency = this.getRootElementById('event-recurrence-frequency');
    const timedFields = this.getRootElementById('timed-event-fields');
    const allDayFields = this.getRootElementById('all-day-event-fields');
    const recurringFields = this.getRootElementById('recurring-event-fields');
    const recurrenceWeekdaysGroup = this.getRootElementById('event-recurrence-weekdays-group');
    const recurrenceEndModeInputs = this._root.querySelectorAll('input[name="event-recurrence-end-mode"]');
    const errorDiv = this.getRootElementById('form-error');

    // Toggle all-day fields
    allDayCheckbox.addEventListener('change', () => {
      if (allDayCheckbox.checked) {
        timedFields.style.display = 'none';
        allDayFields.style.display = 'block';
      } else {
        timedFields.style.display = 'block';
        allDayFields.style.display = 'none';
      }
    });

    const updateRecurringFrequencyVisibility = () => {
      recurrenceWeekdaysGroup.style.display = recurrenceFrequency.value === 'WEEKLY' ? 'block' : 'none';
    };

    recurringCheckbox.addEventListener('change', () => {
      recurringFields.style.display = recurringCheckbox.checked ? 'block' : 'none';
    });

    recurrenceFrequency.addEventListener('change', updateRecurringFrequencyVisibility);
    recurrenceEndModeInputs.forEach((input) => input.addEventListener('change', () => this.syncRecurrenceEndInputs()));
    updateRecurringFrequencyVisibility();
    this.syncRecurrenceEndInputs();

    this.setupStartEndDurationSync({ startInputId: 'event-start', endInputId: 'event-end' });
    this.setupStartEndDurationSync({ startInputId: 'event-start-date', endInputId: 'event-end-date', isDateOnly: true });

    // Close button
    this.getRootElementById('close-modal').addEventListener('click', () => {
      this._combinedEditTargets = null;
      this._combinedDeleteTargets = null;
      modal.classList.remove('show');
    });

    // Cancel button
    this.getRootElementById('cancel-btn').addEventListener('click', () => {
      this._combinedEditTargets = null;
      this._combinedDeleteTargets = null;
      modal.classList.remove('show');
    });

    // Form submission
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const calendarId = this.getRootElementById('event-calendar').value;
      const title = this.getRootElementById('event-title').value.trim();
      const isAllDayChecked = this.getRootElementById('event-all-day').checked;
      const location = this.getRootElementById('event-location').value.trim();
      const description = this.getRootElementById('event-description').value.trim();

      const formResult = normalizeEventFormData({
        title,
        location,
        description,
        isAllDay: isAllDayChecked,
        startDate: this.getRootElementById('event-start-date').value,
        endDate: this.getRootElementById('event-end-date').value,
        startDateTime: this.getRootElementById('event-start').value,
        endDateTime: this.getRootElementById('event-end').value,
        fallbackDurationMs: Math.max(endDate.getTime() - startDate.getTime(), 60 * 1000)
      });

      if (!formResult.valid) {
        this.showFormError(errorDiv, this.t(formResult.errorKey));
        return;
      }

      let eventData = formResult.eventData;

      if (recurringCheckbox.checked) {
        const frequency = this.getRootElementById('event-recurrence-frequency').value;
        const interval = this.getRootElementById('event-recurrence-interval').value;
        const untilDateRaw = this.getRootElementById('event-recurrence-until').value;
        const recurrenceCountRaw = this.getRootElementById('event-recurrence-count').value;
        const recurrenceEndMode = this._root.querySelector('input[name="event-recurrence-end-mode"]:checked')?.value || 'never';
        const untilDate = recurrenceEndMode === 'on' ? untilDateRaw : '';
        const recurrenceCount = recurrenceEndMode === 'after' ? recurrenceCountRaw : '';
        const byDay = Array.from(this._root.querySelectorAll('.event-recurrence-weekday:checked')).map((el) => el.value);
        const recurrenceResult = normalizeEventFormData({
          title,
          location,
          description,
          isAllDay: isAllDayChecked,
          startDate: this.getRootElementById('event-start-date').value,
          endDate: this.getRootElementById('event-end-date').value,
          startDateTime: this.getRootElementById('event-start').value,
          endDateTime: this.getRootElementById('event-end').value,
          fallbackDurationMs: Math.max(endDate.getTime() - startDate.getTime(), 60 * 1000),
          recurrence: {
            enabled: true,
            frequency,
            interval,
            untilDate,
            count: recurrenceCount,
            byDay
          }
        });

        if (!recurrenceResult.valid) {
          this.showFormError(errorDiv, this.t(recurrenceResult.errorKey));
          return;
        }

        eventData = recurrenceResult.eventData;
      }

      // Disable submit button
      const submitBtn = this.getRootElementById('submit-btn');
      submitBtn.disabled = true;
      submitBtn.textContent = this.t('saving');

      try {
        const editTargets = Array.isArray(this._combinedEditTargets) && this._combinedEditTargets.length > 0
          ? this._combinedEditTargets
          : [event];

        for (const targetEvent of editTargets) {
          const targetCalendarId = (editTargets.length > 1) ? targetEvent.entityId : calendarId;
          await this.updateEvent(targetEvent, targetCalendarId, eventData, editScope);
        }

        this._combinedEditTargets = null;
        this._combinedDeleteTargets = null;
        modal.classList.remove('show');

        // Refresh events
        this._lastFetch = null;
        await this.updateEvents({ preserveScroll: this._viewMode === 'agenda' });
        this.safeReturnToList(onSaved);
      } catch (error) {
        console.error('Failed to update event:', error);

        // Safety net: if edit was blocked by capability detection, still try create+delete.
        // Some integrations misreport update/delete support even though create+delete works.
        if (error.message === this.t('calendarNoModifyError')) {
          try {
            await this.createEvent(calendarId, eventData);
            await this.deleteEvent(event.entityId, event.uid, event.recurrence_id);
            modal.classList.remove('show');
            this._lastFetch = null;
            await this.updateEvents({ preserveScroll: this._viewMode === 'agenda' });
            this.safeReturnToList(onSaved);
            return;
          } catch (fallbackError) {
            console.error('Safety-net create+delete fallback failed:', fallbackError);
          }
        }

        this._combinedEditTargets = null;
        this._combinedDeleteTargets = null;
        this.showFormError(errorDiv, error.message || this.t('failedUpdateEvent'));
        submitBtn.disabled = false;
        submitBtn.textContent = this.t('saveChanges');
      }
    });

    // Focus on title input
    setTimeout(() => {
      this.getRootElementById('event-title')?.focus();
    }, 100);
  }

  async updateEvent(originalEvent, newCalendarId, eventData, editScope = 'this') {
    if (!this._hass) {
      throw new Error(this.t('homeAssistantUnavailable'));
    }

    const capabilities = this._calendarCapabilities[originalEvent.entityId] || {};

    // Check if we're moving to a different calendar
    const movingCalendar = newCalendarId !== originalEvent.entityId;

    if (!originalEvent.uid) {
      throw new Error(this.t('missingUidError'));
    }

    const { isRecurringUpdate, recurrenceId, recurrenceRange } = getRecurringUpdateControls(originalEvent, eventData, editScope);

    if (isRecurringUpdate && !movingCalendar && this._hass.connection?.sendMessagePromise) {
      const wsPayload = buildUpdateEventWebSocketPayload(originalEvent, eventData, recurrenceId, recurrenceRange);

      try {
        await this._hass.connection.sendMessagePromise(wsPayload);
        return;
      } catch (error) {
        console.error('Recurring update via WebSocket failed, falling back:', error?.message || error);
      }
    }

    // If calendar supports UPDATE, we're not moving calendars, and service exists, use update service
    const hasUpdateService = !!this._hass.services?.calendar?.update_event;
    if (capabilities.canUpdate && !movingCalendar && hasUpdateService) {
      try {
        const serviceData = buildUpdateEventServiceData(originalEvent, eventData, recurrenceId, recurrenceRange);

        await this._hass.callService('calendar', 'update_event', serviceData);
        return;
      } catch (error) {
        console.error('Update service failed, trying create+delete fallback:', error.message);
        // Fall through to create+delete pattern
      }
    } else if (capabilities.canUpdate && !movingCalendar && !hasUpdateService) {
      // Some integrations advertise update support but the service is not registered.
      // Skip update call to avoid misleading "Action calendar.update_event not found" pop-ups.
      console.debug('calendar.update_event service unavailable, using create+delete fallback');
    }

    // Fallback: Create new event and then delete old one
    // This prevents data loss when create fails on calendars without UPDATE support

    try {
      // Create in destination calendar first (might be same or different)
      await this.createEvent(newCalendarId, eventData);

      // Delete from original calendar only after successful create
      await this.deleteEvent(originalEvent.entityId, originalEvent.uid, recurrenceId, recurrenceRange);
    } catch (error) {
      console.error('Create+Delete fallback failed:', error);
      throw new Error(error.message || this.t('updateEventServiceError'));
    }
  }

  async deleteEvent(calendarId, uid, recurrenceId = null, recurrenceRange = null) {
    if (!this._hass) {
      throw new Error(this.t('homeAssistantUnavailable'));
    }

    // Try WebSocket API first (works for Google Calendar and others)
    // This is the official Calendar WebSocket API that the HA Calendar UI uses
    try {
      if (this._hass.connection && this._hass.connection.sendMessagePromise && uid) {
        const payload = buildDeleteEventWebSocketPayload(calendarId, uid, recurrenceId, recurrenceRange);

        await this._hass.connection.sendMessagePromise(payload);
        return; // Success via WebSocket
      }
    } catch (wsError) {
      console.log('WebSocket delete failed, trying service call:', wsError.message);
      // Fall through to service call attempt
    }

    // Fallback to service call (works for Local Calendar and some others)
    const serviceData = buildDeleteEventPayload(calendarId, uid, recurrenceId, recurrenceRange);

    try {
      await this._hass.callService('calendar', 'delete_event', serviceData);
    } catch (error) {
      console.error('Service call delete also failed:', error);
      throw new Error(error.message || this.t('deleteEventServiceError'));
    }
  }

  async createEvent(calendarId, eventData) {
    if (!this._hass) {
      throw new Error(this.t('homeAssistantUnavailable'));
    }

    const isRecurring = !!eventData.rrule;

    // Build service-style data (used by both API variants)
    const baseData = buildEventServiceData(calendarId, eventData);

    if (isRecurring) {
      baseData.rrule = eventData.rrule;

      // HA recurring event support is exposed through Calendar WebSocket API.
      // WebSocket schema expects event.dtstart / event.dtend (not start/end keys).
      const wsPayload = buildCreateEventWebSocketPayload(calendarId, eventData);

      try {
        if (this._hass.connection?.sendMessagePromise) {
          await this._hass.connection.sendMessagePromise(wsPayload);
          return;
        }
      } catch (error) {
        console.error('WebSocket recurring create failed:', error);
        throw new Error(error?.message || this.t('createEventServiceError'));
      }

      throw new Error(this.t('createEventServiceError'));
    }

    try {
      await this._hass.callService('calendar', 'create_event', baseData);
    } catch (error) {
      console.error('Service call failed:', error);
      throw new Error(error.message || this.t('createEventServiceError'));
    }
  }

  showFormError(errorDiv, message) {
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    setTimeout(() => {
      errorDiv.style.display = 'none';
    }, 5000);
  }


  getForwardExistingCalendarIds(event) {
    const existingCalendarIds = new Set();

    if (event?.entityId) existingCalendarIds.add(event.entityId);
    if (Array.isArray(event?.sourceEntityIds)) {
      event.sourceEntityIds.forEach((entityId) => entityId && existingCalendarIds.add(entityId));
    }
    if (Array.isArray(event?.sourceEvents)) {
      event.sourceEvents.forEach((sourceEvent) => sourceEvent?.entityId && existingCalendarIds.add(sourceEvent.entityId));
    }

    const eventKey = this.getEventExactMatchKey(event);
    (this._events || []).forEach((candidateEvent) => {
      if (candidateEvent?.entityId && this.getEventExactMatchKey(candidateEvent) === eventKey) {
        existingCalendarIds.add(candidateEvent.entityId);
      }
    });

    return existingCalendarIds;
  }

  showForwardEventModal(event, startDate, endDate, isAllDay) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');
    this.applyEventModalSizeClass(content);
    const writableCalendars = this.getWritableCalendars();
    const existingCalendarIds = this.getForwardExistingCalendarIds(event);

    if (writableCalendars.length === 0) {
      this.showError(this.t('noWritableCalendars'));
      return;
    }

    content.innerHTML = `
      <div class="confirm-dialog">
        <h3 class="confirm-title">${this.t('forwardEventTitle')}</h3>
        <p class="confirm-message">${this.t('forwardEventPrompt')}</p>

        <div class="recurring-options forward-calendar-options">
          ${writableCalendars.map((entityId) => {
            const alreadyExists = existingCalendarIds.has(entityId);
            return `
              <label class="recurring-option ${alreadyExists ? 'disabled-option' : ''}">
                <input type="checkbox" class="forward-calendar-option" value="${entityId}" ${alreadyExists ? 'checked disabled' : ''} />
                <div class="recurring-option-label">
                  <div class="recurring-option-title">${this.escapeHtml(this.getCalendarName(entityId))}</div>
                  <div class="recurring-option-description">${alreadyExists ? this.t('forwardEventAlreadyExists') : this.escapeHtml(entityId)}</div>
                </div>
              </label>
            `;
          }).join('')}
        </div>

        <div id="form-error" class="error-message" style="display: none;"></div>

        <div class="confirm-actions">
          <button class="btn btn-secondary" id="cancel-forward-event-btn">${this.t('cancel')}</button>
          <button class="btn btn-primary" id="confirm-forward-event-btn">${this.t('continue')}</button>
        </div>
      </div>
    `;

    modal.classList.add('show');

    this.getRootElementById('cancel-forward-event-btn')?.addEventListener('click', () => {
      modal.classList.remove('show');
      this.showEventModal(event);
    });

    this.getRootElementById('confirm-forward-event-btn')?.addEventListener('click', () => {
      const selectedCalendarIds = Array.from(this._root.querySelectorAll('.forward-calendar-option:checked'))
        .map((input) => input.value)
        .filter((entityId) => writableCalendars.includes(entityId) && !existingCalendarIds.has(entityId));
      const errorDiv = this.getRootElementById('form-error');

      if (selectedCalendarIds.length === 0) {
        this.showFormError(errorDiv, this.t('forwardEventNoNewCalendars'));
        return;
      }

      modal.classList.remove('show');
      this.showCreateEventModal(null, null, {
        selectedCalendarIds,
        prefill: {
          summary: event.summary || '',
          startDate,
          endDate,
          isAllDay,
          location: event.location || '',
          description: event.description || '',
          rrule: event.rrule || ''
        }
      });
    });
  }

  showEditConfirmation(event, startDate, endDate, isAllDay, selectedEvents = null, onSaved = null) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');
    this.applyEventModalSizeClass(content);

    const isRecurring = event.rrule || event.recurrence_id;
    if (!isRecurring) {
      this._combinedEditTargets = selectedEvents;
      this.showEditEventModal(event, startDate, endDate, isAllDay, 'this', onSaved);
      return;
    }

    content.innerHTML = `
      <div class="confirm-dialog">
        <h3 class="confirm-title">${this.t('editRecurringEventTitle')}</h3>
        <p class="confirm-message">
          ${this.t('editRecurringPrompt', { title: this.escapeHtml(event.summary || this.t('untitledEvent')) })}
        </p>

        <div class="recurring-options">
          <label class="recurring-option">
            <input type="radio" name="edit-option" value="this" checked />
            <div class="recurring-option-label">
              <div class="recurring-option-title">${this.t('deleteThisEventOnly')}</div>
              <div class="recurring-option-description">${this.t('editThisOccurrence')}</div>
            </div>
          </label>

          ${event.recurrence_id ? `
            <label class="recurring-option">
              <input type="radio" name="edit-option" value="future" />
              <div class="recurring-option-label">
                <div class="recurring-option-title">${this.t('deleteThisAndFutureEvents')}</div>
                <div class="recurring-option-description">${this.t('editThisOccurrenceAndFuture')}</div>
              </div>
            </label>
          ` : ''}

          <label class="recurring-option">
            <input type="radio" name="edit-option" value="all" />
            <div class="recurring-option-label">
              <div class="recurring-option-title">${this.t('deleteAllEvents')}</div>
              <div class="recurring-option-description">${this.t('editEntireSeries')}</div>
            </div>
          </label>
        </div>

        <div class="confirm-actions">
          <button class="btn btn-secondary" id="cancel-edit-option-btn">${this.t('cancel')}</button>
          <button class="btn btn-primary" id="confirm-edit-option-btn">${this.t('editEvent')}</button>
        </div>
      </div>
    `;

    modal.classList.add('show');

    this.getRootElementById('cancel-edit-option-btn')?.addEventListener('click', () => {
      modal.classList.remove('show');
      this.showEventModal(event);
    });

    this.getRootElementById('confirm-edit-option-btn')?.addEventListener('click', () => {
      const selectedOption = this._root.querySelector('input[name="edit-option"]:checked')?.value || 'this';
      modal.classList.remove('show');
      this._combinedEditTargets = selectedEvents;
      this.showEditEventModal(event, startDate, endDate, isAllDay, selectedOption, onSaved);
    });
  }


  showCombinedEditSelectionModal(event, startDate, endDate, isAllDay, onSaved = null) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');
    this.applyEventModalSizeClass(content);

    const sourceEvents = (event.sourceEvents || []).filter(sourceEvent => !this._hiddenCalendars.has(sourceEvent.entityId));

    content.innerHTML = `
      <div class="confirm-dialog">
        <h3 class="confirm-title">${this.t('editEvent')}</h3>
        <p class="confirm-message">Select which calendar copies to edit.</p>

        <div class="recurring-options">
          ${sourceEvents.map((sourceEvent, index) => `
            <label class="recurring-option">
              <input type="checkbox" class="combined-edit-option" data-index="${index}" checked />
              <div class="recurring-option-label">
                <div class="recurring-option-title">${this.escapeHtml(this.getCalendarName(sourceEvent.entityId))}</div>
                <div class="recurring-option-description">${this.escapeHtml(sourceEvent.summary || this.t('untitledEvent'))}</div>
              </div>
            </label>
          `).join('')}
        </div>

        <div class="confirm-actions">
          <button class="btn btn-secondary" id="cancel-combined-edit-btn">${this.t('cancel')}</button>
          <button class="btn btn-primary" id="confirm-combined-edit-btn">${this.t('editEvent')}</button>
        </div>
      </div>
    `;

    modal.classList.add('show');

    this.getRootElementById('cancel-combined-edit-btn')?.addEventListener('click', () => {
      modal.classList.remove('show');
      this.showEventModal(event);
    });

    this.getRootElementById('confirm-combined-edit-btn')?.addEventListener('click', () => {
      const selectedIndexes = Array.from(this._root.querySelectorAll('.combined-edit-option:checked'))
        .map(input => Number.parseInt(input.getAttribute('data-index'), 10))
        .filter(index => Number.isInteger(index) && index >= 0 && index < sourceEvents.length);

      if (selectedIndexes.length === 0) {
        return;
      }

      const selectedEvents = selectedIndexes.map(index => sourceEvents[index]);
      modal.classList.remove('show');
      this.showEditConfirmation(selectedEvents[0], startDate, endDate, isAllDay, selectedEvents, onSaved);
    });
  }


  showCombinedDeleteSelectionModal(event, onSaved = null) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');
    this.applyEventModalSizeClass(content);

    const sourceEvents = (event.sourceEvents || []).filter(sourceEvent => !this._hiddenCalendars.has(sourceEvent.entityId));

    content.innerHTML = `
      <div class="confirm-dialog">
        <h3 class="confirm-title">${this.t('deleteEventTitle')}</h3>
        <p class="confirm-message">Select which calendar copies to delete.</p>

        <div class="recurring-options">
          ${sourceEvents.map((sourceEvent, index) => `
            <label class="recurring-option">
              <input type="checkbox" class="combined-delete-option" data-index="${index}" checked />
              <div class="recurring-option-label">
                <div class="recurring-option-title">${this.escapeHtml(this.getCalendarName(sourceEvent.entityId))}</div>
                <div class="recurring-option-description">${this.escapeHtml(sourceEvent.summary || this.t('untitledEvent'))}</div>
              </div>
            </label>
          `).join('')}
        </div>

        <div class="confirm-actions">
          <button class="btn btn-secondary" id="cancel-combined-delete-btn">${this.t('cancel')}</button>
          <button class="btn btn-danger" id="confirm-combined-delete-btn">${this.t('delete')}</button>
        </div>
      </div>
    `;

    modal.classList.add('show');

    this.getRootElementById('cancel-combined-delete-btn')?.addEventListener('click', () => {
      this._combinedDeleteTargets = null;
      modal.classList.remove('show');
      this.showEventModal(event);
    });

    this.getRootElementById('confirm-combined-delete-btn')?.addEventListener('click', () => {
      const selectedIndexes = Array.from(this._root.querySelectorAll('.combined-delete-option:checked'))
        .map(input => Number.parseInt(input.getAttribute('data-index'), 10))
        .filter(index => Number.isInteger(index) && index >= 0 && index < sourceEvents.length);

      if (selectedIndexes.length === 0) {
        return;
      }

      const selectedDeleteTargets = selectedIndexes.map(index => sourceEvents[index]);
      this._combinedDeleteTargets = selectedDeleteTargets;
      modal.classList.remove('show');
      this.showDeleteConfirmation(selectedDeleteTargets[0], selectedDeleteTargets, onSaved);
    });
  }


  showDeleteConfirmation(event, selectedEvents = null, onSaved = null) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');
    this.applyEventModalSizeClass(content);
    const deleteTargets = Array.isArray(selectedEvents) && selectedEvents.length > 0
      ? selectedEvents
      : (Array.isArray(this._combinedDeleteTargets) && this._combinedDeleteTargets.length > 0
          ? this._combinedDeleteTargets
          : [event]);
    const representativeEvent = deleteTargets[0] || event;

    // Check if any selected target is recurring
    const hasRecurringTargets = deleteTargets.some(target => target.rrule || target.recurrence_id);
    const hasFutureCapableTargets = deleteTargets.some(target => target.recurrence_id);

    if (hasRecurringTargets) {
      // Show recurring event deletion options
      content.innerHTML = `
        <div class="confirm-dialog">
          <h3 class="confirm-title">${this.t('deleteRecurringEventTitle')}</h3>
          <p class="confirm-message">
            ${this.t('deleteRecurringPrompt', { title: this.escapeHtml(representativeEvent.summary || this.t('untitledEvent')) })}
          </p>

          <div class="recurring-options">
            <label class="recurring-option">
              <input type="radio" name="delete-option" value="this" checked />
              <div class="recurring-option-label">
                <div class="recurring-option-title">${this.t('deleteThisEventOnly')}</div>
                <div class="recurring-option-description">${this.t('deleteThisOccurrence')}</div>
              </div>
            </label>

            ${hasFutureCapableTargets ? `
              <label class="recurring-option">
                <input type="radio" name="delete-option" value="future" />
                <div class="recurring-option-label">
                  <div class="recurring-option-title">${this.t('deleteThisAndFutureEvents')}</div>
                  <div class="recurring-option-description">${this.t('deleteThisOccurrenceAndFuture')}</div>
                </div>
              </label>
            ` : ''}

            <label class="recurring-option">
              <input type="radio" name="delete-option" value="all" />
              <div class="recurring-option-label">
              <div class="recurring-option-title">${this.t('deleteAllEvents')}</div>
              <div class="recurring-option-description">${this.t('deleteEntireSeries')}</div>
              </div>
            </label>
          </div>

          <div class="confirm-actions">
            <button class="btn btn-secondary" id="cancel-delete-btn">${this.t('cancel')}</button>
            <button class="btn btn-danger" id="confirm-delete-btn">${this.t('delete')}</button>
          </div>
        </div>
      `;
    } else {
      // Show simple confirmation for non-recurring events
      content.innerHTML = `
        <div class="confirm-dialog">
          <h3 class="confirm-title">${this.t('deleteEventTitle')}</h3>
          <p class="confirm-message">
            ${this.t('deleteEventConfirm', { title: this.escapeHtml(representativeEvent.summary || this.t('untitledEvent')) })}
          </p>
          <div class="confirm-actions">
            <button class="btn btn-secondary" id="cancel-delete-btn">${this.t('cancel')}</button>
            <button class="btn btn-danger" id="confirm-delete-btn">${this.t('delete')}</button>
          </div>
        </div>
      `;
    }

    modal.classList.add('show');

    // Cancel button
    this.getRootElementById('cancel-delete-btn').addEventListener('click', () => {
      this._combinedDeleteTargets = null;
      modal.classList.remove('show');
    });

    // Confirm delete button
    this.getRootElementById('confirm-delete-btn').addEventListener('click', async () => {
      const deleteBtn = this.getRootElementById('confirm-delete-btn');
      deleteBtn.disabled = true;
      deleteBtn.textContent = this.t('deleting');

      try {
        if (hasRecurringTargets) {
          // Get the selected option
          const selectedOption = this._root.querySelector('input[name="delete-option"]:checked')?.value;

          for (const targetEvent of deleteTargets) {
            const targetIsRecurring = targetEvent.rrule || targetEvent.recurrence_id;

            if (!targetIsRecurring) {
              await this.deleteEvent(targetEvent.entityId, targetEvent.uid);
              continue;
            }

            if (selectedOption === 'future' && targetEvent.recurrence_id) {
              // Delete this and future instances when this target has an occurrence id
              await this.deleteEvent(targetEvent.entityId, targetEvent.uid, targetEvent.recurrence_id, 'THISANDFUTURE');
            } else if (selectedOption === 'this' && targetEvent.recurrence_id) {
              // Delete this instance only when this target has an occurrence id
              await this.deleteEvent(targetEvent.entityId, targetEvent.uid, targetEvent.recurrence_id);
            } else if (selectedOption === 'all') {
              // Delete entire series
              await this.deleteEvent(targetEvent.entityId, targetEvent.uid);
            } else {
              // Fallback for recurring targets without recurrence_id
              await this.deleteEvent(targetEvent.entityId, targetEvent.uid);
            }
          }
        } else {
          for (const targetEvent of deleteTargets) {
            // Delete single event
            await this.deleteEvent(targetEvent.entityId, targetEvent.uid);
          }
        }

        this._combinedDeleteTargets = null;
        modal.classList.remove('show');

        // Refresh events
        this._lastFetch = null;
        await this.updateEvents({ preserveScroll: this._viewMode === 'agenda' });
        this.safeReturnToList(onSaved);
      } catch (error) {
        console.error('Failed to delete event:', error);
        this._combinedDeleteTargets = null;
        alert(error.message || this.t('failedDeleteEvent'));
        deleteBtn.disabled = false;
        deleteBtn.textContent = this.t('delete');
      }
    });
  }

  showFormError(errorDiv, message) {
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    setTimeout(() => {
      errorDiv.style.display = 'none';
    }, 5000);
  }

  showError(message) {
    console.error(message);
    // Could add a toast notification here
  }

  setModalBackHandler(onCloseBack = null) {
    this._activeModalBackHandler = typeof onCloseBack === 'function' ? onCloseBack : null;
  }


  getModalCalendarBadgesForEvent(event) {
    return getModalCalendarBadgesForEventHelper(event, {
      hiddenCalendars: this._hiddenCalendars,
      getVisibleCalendarBadges: (badgeEvent) => this.getVisibleCalendarBadgesForEvent(badgeEvent)
    });
  }

  getLocationMapUrl(location) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location || '')}`;
  }

  async copyEventLocationAddress(location) {
    try {
      if (!globalThis.navigator?.clipboard?.writeText) return false;
      await globalThis.navigator.clipboard.writeText(location || '');
      return true;
    } catch (err) {
      return false;
    }
  }

  // Invoke a post-save return-to-list callback without letting its errors bubble
  // into the surrounding save try/catch (which would show a misleading save-failed error).
  safeReturnToList(callback) {
    if (typeof callback !== 'function') return;
    try {
      callback();
    } catch (error) {
      console.error('Return-to-list callback failed:', error);
    }
  }

  showEventModal(event, onCloseBack = null, options = {}) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');
    this.applyEventModalSizeClass(content);
    this._eventLocationActionsExpanded = options.locationActionsExpanded === true;
    // Post-save navigation, kept separate from close/back (_activeModalBackHandler).
    // Only supplied by showDayModal; the +N compact modal leaves it null so a save
    // there closes to the calendar rather than reopening a stale captured list.
    const onSaved = typeof options.onSaved === 'function' ? options.onSaved : null;

    let startDate, endDate, isAllDay;

    if (event.start.dateTime) {
      startDate = new Date(event.start.dateTime);
      endDate = new Date(event.end.dateTime);
      isAllDay = false;
    } else if (event.start.date) {
      // Date-only all-day events use configured-zone calendar bounds for display.
      startDate = this.parseCalendarDate(event.start.date);
      // End date is exclusive for all-day events, so subtract a configured-zone
      // calendar day before converting to a Date for display.
      endDate = this.parseCalendarDateWithOffset(event.end.date, -1);
      isAllDay = true;
    } else {
      startDate = new Date(event.start);
      endDate = new Date(event.end);
      isAllDay = !event.start.includes('T');
      // If it's an all-day event in string format, adjust end date
      if (isAllDay && event.end) {
        endDate.setDate(endDate.getDate() - 1);
      }
    }

    // Get calendar info and capabilities
    const calendarName = this.getCalendarName(event.entityId);
    const capabilities = this._calendarCapabilities[event.entityId] || {};
    const visibleSourceEvents = this.getVisibleCombinedSourceEvents(event);
    const visibleBadges = this.getModalCalendarBadgesForEvent(event)
      .map((calendar) => {
        const sourceEvent = visibleSourceEvents.find((candidate) => candidate.entityId === calendar.entityId);
        const colorEvent = sourceEvent || (calendar.entityId === event.entityId ? event : null);
        const color = colorEvent ? (this.getEffectiveEventColor(colorEvent) || calendar.color) : calendar.color;
        return {
          ...calendar,
          color,
          textColor: this.getContractColor(color),
          name: this.getCalendarName(calendar.entityId)
        };
      });
    const modalBadgeColor = this.getEffectiveEventColor(event) || event.color;

    // For edit/delete to work, we need:
    // 1. Event management enabled
    // 2. Calendar not read-only
    // 3. Event has a UID (required for modifications)
    const hasUID = event.uid !== undefined && event.uid !== null && event.uid !== '';
    const canModify = this._config.enable_event_management &&
                     !capabilities.isReadonly &&
                     hasUID;

    // WebSocket delete works for Google Calendar and other integrations
    const canEdit = canModify;
    const canDelete = canModify; // WebSocket delete works for all calendars including Google
    const canForward = !!this._config.enable_event_management && this.getWritableCalendars().length > 0;

    content.innerHTML = renderEventDetailsModal({
      event,
      startDate,
      endDate,
      isAllDay,
      calendarName,
      visibleBadges,
      modalBadgeColor,
      modalBadgeTextColor: this.getContractColor(modalBadgeColor),
      capabilities,
      hasUID,
      canEdit,
      canDelete,
      canForward,
      canModify,
      customColor: this.getCustomEventColor(event),
      locationLinks: this._config.location_links === true,
      locationActionsExpanded: this._eventLocationActionsExpanded,
      locationMapUrl: this.getLocationMapUrl(event.location),
      helpers: {
        escapeHtml: this.escapeHtml.bind(this),
        formatDate: this.formatDate.bind(this),
        formatEventTime: this.formatEventTime.bind(this),
        formatDuration: this.formatDuration.bind(this),
        renderEventDescription: this.renderEventDescription.bind(this),
        t: this.t.bind(this)
      }
    });

    modal.classList.add('show');
    this.setModalBackHandler(onCloseBack);

    // Close button
    this.getRootElementById('close-modal')?.addEventListener('click', () => {
      this._eventLocationActionsExpanded = false;
      if (this._activeModalBackHandler) {
        const backHandler = this._activeModalBackHandler;
        this._activeModalBackHandler = null;
        backHandler();
      } else {
        modal.classList.remove('show');
      }
    });

    this.getRootElementById('event-location-toggle')?.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.showEventModal(event, onCloseBack, { locationActionsExpanded: !this._eventLocationActionsExpanded, onSaved });
    });

    this.getRootElementById('open-location-map-btn')?.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      window.open(this.getLocationMapUrl(event.location), '_blank', 'noopener,noreferrer');
    });

    this.getRootElementById('copy-location-address-btn')?.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.copyEventLocationAddress(event.location);
    });

    // Edit button
    this.getRootElementById('edit-event-btn')?.addEventListener('click', () => {
      this._activeModalBackHandler = null;
      this._eventLocationActionsExpanded = false;
      modal.classList.remove('show');
      if (event.isCombinedCalendarEvent && Array.isArray(event.sourceEvents) && event.sourceEvents.length > 1) {
        this.showCombinedEditSelectionModal(event, startDate, endDate, isAllDay, onSaved);
        return;
      }
      this.showEditConfirmation(event, startDate, endDate, isAllDay, null, onSaved);
    });


    this.getRootElementById('custom-color-btn')?.addEventListener('click', () => {
      this._activeModalBackHandler = null;
      this._eventLocationActionsExpanded = false;
      modal.classList.remove('show');
      if (event.isCombinedCalendarEvent && Array.isArray(event.sourceEvents)) {
        const visibleSourceEvents = this.getVisibleCombinedSourceEvents(event);
        if (visibleSourceEvents.length > 1) {
          this.showCombinedCustomColorSelectionModal(event, onCloseBack, onSaved);
          return;
        }
        if (visibleSourceEvents.length === 1) {
          this.showCustomColorModal(visibleSourceEvents[0], event, onCloseBack, onSaved);
          return;
        }
      }
      this.showCustomColorModal(event, event, onCloseBack, onSaved);
    });


    // Forward button
    this.getRootElementById('forward-event-btn')?.addEventListener('click', () => {
      this._activeModalBackHandler = null;
      this._eventLocationActionsExpanded = false;
      modal.classList.remove('show');
      this.showForwardEventModal(event, startDate, endDate, isAllDay);
    });

    // Delete button
    this.getRootElementById('delete-event-btn')?.addEventListener('click', () => {
      this._activeModalBackHandler = null;
      this._eventLocationActionsExpanded = false;
      modal.classList.remove('show');
      if (event.isCombinedCalendarEvent && Array.isArray(event.sourceEvents) && event.sourceEvents.length > 1) {
        this.showCombinedDeleteSelectionModal(event, onSaved);
        return;
      }
      this.showDeleteConfirmation(event, null, onSaved);
    });
  }


  getVisibleCombinedSourceEvents(event) {
    if (!event?.isCombinedCalendarEvent || !Array.isArray(event.sourceEvents)) return [];
    return event.sourceEvents.filter((sourceEvent) => !this._hiddenCalendars.has(sourceEvent.entityId));
  }

  showCombinedCustomColorSelectionModal(wrapperEvent, onCloseBack = null, onSaved = null) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');
    this.applyEventModalSizeClass(content);
    const sourceEvents = this.getVisibleCombinedSourceEvents(wrapperEvent);
    content.innerHTML = `
      <div class="confirm-dialog">
        <h3 class="confirm-title">${this.t('customColor')}</h3>
        <p class="confirm-message">${this.t('customColorCombinedPrompt')}</p>
        <div class="recurring-options">
          ${sourceEvents.map((sourceEvent, index) => `
            <label class="recurring-option">
              <input type="radio" name="combined-custom-color-option" data-index="${index}" ${index === 0 ? 'checked' : ''} />
              <div class="recurring-option-label">
                <div class="recurring-option-title">${this.escapeHtml(this.getCalendarName(sourceEvent.entityId))}</div>
                <div class="recurring-option-description">${this.escapeHtml(sourceEvent.summary || this.t('untitledEvent'))}</div>
              </div>
            </label>
          `).join('')}
        </div>
        <div class="confirm-actions">
          <button class="btn btn-secondary" id="cancel-combined-custom-color-btn">${this.t('cancel')}</button>
          <button class="btn btn-primary" id="confirm-combined-custom-color-btn">${this.t('continue')}</button>
        </div>
      </div>`;
    modal.classList.add('show');
    this.getRootElementById('cancel-combined-custom-color-btn')?.addEventListener('click', () => this.showEventModal(wrapperEvent, onCloseBack, { onSaved }));
    this.getRootElementById('confirm-combined-custom-color-btn')?.addEventListener('click', () => {
      const selected = this._root.querySelector('input[name="combined-custom-color-option"]:checked');
      const index = Number.parseInt(selected?.getAttribute('data-index') || '0', 10);
      this.showCustomColorModal(sourceEvents[index] || sourceEvents[0], wrapperEvent, onCloseBack, onSaved);
    });
  }

  getCustomColorScopes(event) {
    const keys = this.getCustomEventColorKeys(event);
    return [
      { value: 'this', label: this.t('deleteThisEventOnly'), show: true },
      { value: 'future', label: this.t('deleteThisAndFutureEvents'), show: !!keys?.supportsFuture },
      { value: 'all', label: this.t('deleteAllEvents'), show: !!keys?.supportsSeries }
    ].filter(scope => scope.show);
  }

  showCustomColorModal(targetEvent, returnEvent = targetEvent, onCloseBack = null, onSaved = null) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');
    this.applyEventModalSizeClass(content);
    const currentColor = this.getCustomEventColor(targetEvent) || this.getEventAccentColor(targetEvent) || targetEvent.color || '#3B82F6';
    let selectedColor = currentColor;
    const scopes = this.getCustomColorScopes(targetEvent);
    const scopeHtml = scopes.length > 1 ? `
      <div class="modal-row"><div class="modal-label">${this.t('recurringEventOptions')}</div><div class="modal-value recurring-options custom-color-scope-options">
        ${scopes.map((scope, index) => `<label class="recurring-option"><input type="radio" name="custom-color-scope" value="${scope.value}" ${index === 0 ? 'checked' : ''} /><div class="recurring-option-label"><div class="recurring-option-title">${scope.label}</div></div></label>`).join('')}
      </div></div>` : '';
    content.innerHTML = `
      <div class="modal-header"><h3 class="modal-title">${this.t('customColor')}</h3><button class="modal-close" id="close-custom-color-modal">×</button></div>
      <div class="modal-body custom-color-modal">
        <daylight-color-picker id="custom-color-wheel" value="${currentColor}" title="${this.t('customColor')}" show-actions="false"></daylight-color-picker>
        ${scopeHtml}
        <div class="modal-actions"><div class="modal-actions-left"><button class="btn btn-secondary" id="custom-color-default-btn">${this.t('useDefault')}</button></div><div class="modal-actions-right"><button class="btn btn-secondary" id="cancel-custom-color-btn">${this.t('cancel')}</button><button class="btn btn-primary" id="apply-custom-color-btn">${this.t('applyColor')}</button></div></div>
      </div>`;
    modal.classList.add('show');
    const close = () => this.showEventModal(returnEvent, onCloseBack, { onSaved });
    const picker = this.getRootElementById('custom-color-wheel');
    picker?.addEventListener('color-change', (event) => { selectedColor = event.detail.color; });
    this.getRootElementById('close-custom-color-modal')?.addEventListener('click', close);
    this.getRootElementById('cancel-custom-color-btn')?.addEventListener('click', close);
    const selectedScope = () => this._root.querySelector('input[name="custom-color-scope"]:checked')?.value || 'this';
    this.getRootElementById('apply-custom-color-btn')?.addEventListener('click', () => {
      const normalized = normalizeCustomEventHexColor(selectedColor || picker?.value || currentColor);
      if (!normalized) return;
      this._customEventColors = applyCustomEventColor(this._customEventColors, targetEvent, selectedScope(), normalized, { getEventIdentityKey: this.getEventIdentityKey.bind(this) });
      this.persistPreferences();
      this.render();
      this.showEventModal(returnEvent, onCloseBack, { onSaved });
    });
    this.getRootElementById('custom-color-default-btn')?.addEventListener('click', () => {
      this._customEventColors = removeCustomEventColor(this._customEventColors, targetEvent, selectedScope(), { getEventIdentityKey: this.getEventIdentityKey.bind(this) });
      this.persistPreferences();
      this.render();
      this.showEventModal(returnEvent, onCloseBack, { onSaved });
    });
  }


  showDayCompactModal(date, events) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');
    this.applyEventModalSizeClass(content);

    const sortedEvents = this.sortEventsForDate(events, date);

    content.innerHTML = `
      <div class="modal-header">
        <h3 class="modal-title">${this.formatDisplayDate(date)}</h3>
        <button class="modal-close" id="close-modal">×</button>
      </div>
      <div class="modal-body">
        <div class="week-compact-container single-day-modal">
          <div class="week-day-column">
            <div class="week-day-header">
              <div class="week-day-name">${this.getWeekdayNames()[date.getDay()]}</div>
              <div class="week-day-date">${date.getDate()}</div>
            </div>
            ${sortedEvents.length > 0 ? sortedEvents.map(event => {
              const daySegment = this.getEventDaySegment(event, date);
              if (!daySegment) return '';
              const { segmentStart, isAllDaySegment } = daySegment;
              const timeLabel = isAllDaySegment ? this.t('allDay') : this.formatEventTime(segmentStart);
              const eventStyle = this.getEventStyle(event);
              return `
                <div class="week-compact-event" style="${eventStyle} --event-bubble-font-size: ${this.getEventBubbleFontSize(event)}; --event-time-font-size: ${this.getEventTimeFontSize(event)}; --event-location-font-size: ${this.getEventLocationFontSize(event)}; --event-bubble-text-color: ${this.getEventBubbleFontColor(event)};" data-event='${JSON.stringify(event).replace(/'/g, "&#39;")}'>
                  ${this.shouldShowEventTime(event) ? `${this.shouldShowEventTime(event) ? `<div class="week-compact-event-time">${timeLabel}</div>` : ''}` : ''}
                  <div class="week-compact-event-title">${this.renderEventTitleWithPrefix(event, event.summary || this.t('untitledEvent'))}</div>
                  ${this.shouldShowEventLocation(event) ? `<div class="week-compact-event-location">📍 ${this.escapeHtml(this.getDisplayLocation(event.location, event))}</div>` : ''}
                  ${this.renderEventStyleCornerIcon(event)}
                  ${this.renderCombinedCornerBubbles(event)}
                </div>
              `;
            }).join('') : `<div class="empty-state-subtext">${this.t('noEvents')}</div>`}
          </div>
        </div>
      </div>
    `;

    modal.classList.add('show');
    this._activeModalBackHandler = null;

    this.getRootElementById('close-modal')?.addEventListener('click', () => {
      this._activeModalBackHandler = null;
      this._eventLocationActionsExpanded = false;
      modal.classList.remove('show');
    });

    this._root.querySelectorAll('.week-compact-event').forEach(el => {
      el.addEventListener('click', () => {
        const eventData = JSON.parse(el.getAttribute('data-event'));
        this.showEventModal(eventData, () => this.showDayCompactModal(date, events));
      });
    });
  }

  showDayModal(date, events) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');
    this.applyEventModalSizeClass(content);

    const sortedEvents = this.sortEventsForDate(events, date);

    content.innerHTML = `
      <div class="modal-header">
        <h3 class="modal-title">${this.formatDisplayDate(date)}</h3>
        <button class="modal-close" id="close-modal">×</button>
      </div>
      <div class="modal-body">
        ${sortedEvents.map(event => {
          const daySegment = this.getEventDaySegment(event, date);
          if (!daySegment) return '';

          const { segmentStart, segmentEnd, isAllDaySegment } = daySegment;
          const eventStyle = this.getEventStyle(event, { withBorderAccent: true });

          return `
            <div class="day-event day-modal-event" style="${eventStyle} --event-bubble-font-size: ${this.getEventBubbleFontSize(event)}; --event-time-font-size: ${this.getEventTimeFontSize(event)}; --event-location-font-size: ${this.getEventLocationFontSize(event)}; --event-bubble-text-color: ${this.getEventBubbleFontColor(event)};" data-event='${JSON.stringify(event).replace(/'/g, "&#39;")}'>
              <div class="day-modal-event-title">${this.renderEventTitleWithPrefix(event, event.summary || this.t('untitledEvent'))}</div>
              ${this.shouldShowEventTime(event) ? `<div class="day-modal-event-meta">${isAllDaySegment ? this.t('allDay') : this.formatEventTimeRange(segmentStart, segmentEnd)}</div>` : ''}
              ${this.shouldShowEventLocation(event) ? `<div class="day-modal-event-location">📍 ${this.escapeHtml(this.getDisplayLocation(event.location, event))}</div>` : ''}
              ${this.renderEventStyleCornerIcon(event)}
              ${this.renderCombinedCornerBubbles(event)}
            </div>
          `;
        }).join('') || `<div class="empty-state-subtext">${this.t('noEvents')}</div>`}
      </div>
      ${(this._config.enable_event_management && this.getWritableCalendars().length > 0 && !this._config.hide_add_event_button) ? `
      <div class="modal-actions">
        <div class="modal-actions-right">
          <button class="btn btn-primary" id="day-modal-add-event">${this.t('addEvent')}</button>
        </div>
      </div>` : ''}
    `;

    modal.classList.add('show');
    this._activeModalBackHandler = null;

    this.getRootElementById('close-modal')?.addEventListener('click', () => {
      this._activeModalBackHandler = null;
      this._eventLocationActionsExpanded = false;
      modal.classList.remove('show');
    });

    // Reopen this day's list with freshly-fetched events (used for close/back AND
    // after a successful add/edit/delete). Always re-reads getEventsForDay so it
    // never shows a stale captured list.
    const reopenDayList = () => this.showDayModal(date, this.getEventsForDay(date));

    this.getRootElementById('day-modal-add-event')?.addEventListener('click', () => {
      this.showCreateEventModal(date, null, { onSaved: reopenDayList });
    });

    this._root.querySelectorAll('.day-event').forEach(el => {
      el.addEventListener('click', () => {
        const eventData = JSON.parse(el.getAttribute('data-event'));
        this.showEventModal(eventData, reopenDayList, { onSaved: reopenDayList });
      });
    });
  }

  getMonthName(month) {
    const formatter = new Intl.DateTimeFormat(this.getLocale(), { month: 'long' });
    return formatter.format(new Date(2020, month, 1));
  }

  getMonthNameShort(month) {
    const formatter = new Intl.DateTimeFormat(this.getLocale(), { month: 'short' });
    return formatter.format(new Date(2020, month, 1));
  }

  formatTime(date) {
    return new Intl.DateTimeFormat(this.getLocale(), this.withTimeZone(this.getTimeFormatOptions())).format(date);
  }

  parseTimeValue(value) {
    if (value === undefined || value === null) return null;
    const raw = String(value).trim();
    if (!raw || raw === 'unknown' || raw === 'unavailable') return null;

    const dateCandidate = new Date(raw);
    if (!Number.isNaN(dateCandidate.getTime())) {
      return dateCandidate;
    }

    const timeMatch = raw.match(/^(\d{1,2}):(\d{2})(?::(\d{2}))?(?:\s*([AaPp][Mm]))?$/);
    if (!timeMatch) return null;

    let hours = Number(timeMatch[1]);
    const minutes = Number(timeMatch[2]);
    const seconds = Number(timeMatch[3] || 0);
    const meridiem = timeMatch[4] ? timeMatch[4].toLowerCase() : null;

    if (!Number.isFinite(hours) || !Number.isFinite(minutes) || !Number.isFinite(seconds)) return null;
    if (minutes > 59 || seconds > 59) return null;

    if (meridiem) {
      if (hours < 1 || hours > 12) return null;
      if (meridiem === 'pm' && hours !== 12) hours += 12;
      if (meridiem === 'am' && hours === 12) hours = 0;
    } else if (hours > 23) {
      return null;
    }

    const parsed = new Date();
    parsed.setHours(hours, minutes, seconds, 0);
    return parsed;
  }

  teardownWeatherForecastSubscription() {
    this._weatherForecastController.teardownSubscription();
  }

  ensureWeatherForecastSubscription() {
    return this._weatherForecastController.ensureSubscription();
  }

  refreshWeatherForecastData() {
    return this._weatherForecastController.refreshForecastData();
  }

  getHeaderEntityRenderSignature(entityState) {
    return getHeaderEntityRenderSignatureFromState(entityState);
  }

  getFormattedHeaderSensorTime() {
    const sensorEntityId = this._config?.header_time_sensor;
    if (!sensorEntityId) return '';
    return getFormattedHeaderSensorTimeHelper(
      this._hass,
      sensorEntityId,
      (value) => this.parseTimeValue(value),
      (date) => this.formatTime(date)
    );
  }

  normalizeWeatherTemperature(value) {
    return normalizeWeatherTemperatureHelper(value);
  }

  mapWeatherConditionToIcon(conditionValue) {
    return mapWeatherConditionToIconHelper(conditionValue);
  }

  getHeaderWeatherData() {
    const sensorEntityId = this._config?.header_weather_sensor;
    if (!sensorEntityId) return null;
    return getHeaderWeatherDisplayData(this._hass, sensorEntityId);
  }

  getFormattedHeaderWeather() {
    const weatherData = this.getHeaderWeatherData();
    if (!weatherData) return '';
    return `${weatherData.conditionIcon} ${weatherData.temperature}`;
  }

  getForecastForDate(date) {
    const sensorEntityId = this._config?.header_weather_sensor;
    if (!sensorEntityId) return null;
    const weatherEntity = this._hass?.states?.[sensorEntityId];
    const wsForecast = this._weatherForecastController.getForecastForEntity(sensorEntityId);
    const forecasts = getWeatherEntityForecast(weatherEntity, wsForecast);
    return normalizeForecastForDate(forecasts, date, (forecastDate) => this.getDateKey(forecastDate));
  }

  renderDayForecast(date, viewMode = 'week-compact') {
    return renderDayForecastHtml(date, viewMode, {
      escapeHtml: this.escapeHtml.bind(this),
      getForecastForDate: this.getForecastForDate.bind(this)
    });
  }

  formatDate(date) {
    return new Intl.DateTimeFormat(this.getLocale(), this.withTimeZone({ weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })).format(date);
  }

  formatDisplayDate(date) {
    return new Intl.DateTimeFormat(this.getLocale(), { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }).format(date);
  }

  formatDuration(startDate, endDate) {
    const diffMs = endDate - startDate;
    const diffMins = Math.floor(diffMs / 60000);
    const hours = Math.floor(diffMins / 60);
    const minutes = diffMins % 60;

    const parts = [];
    if (hours > 0) {
      parts.push(this.t(hours === 1 ? 'durationHour' : 'durationHours', { count: hours }));
    }
    if (minutes > 0) {
      parts.push(this.t(minutes === 1 ? 'durationMinute' : 'durationMinutes', { count: minutes }));
    }
    if (parts.length === 0) {
      return this.t('durationMinutes', { count: 0 });
    }
    return parts.join(' ');
  }

  getCalendarName(entityId) {
    return getCalendarNameHelper(entityId, {
      calendarNames: this._config.calendar_names || {},
      hassStates: this._hass?.states || {},
      virtualCalendars: this._config.virtual_calendars || []
    });
  }

  getCalendarBadgeIcon(entityId) {
    if (entityId && entityId.startsWith('virtual:')) {
      const virtualBadge = (this._config.virtual_calendars || []).find((calendar) => `virtual:${calendar.id}` === entityId);
      if (virtualBadge?.icon) return virtualBadge.icon;
    }
    const configured = this._config.calendar_badge_icons?.[entityId];
    if (!configured) return null;
    return String(configured).trim() || null;
  }

  getCalendarBadgePersonEntityId(badgeEntityId) {
    return getCalendarBadgePersonEntityIdHelper(badgeEntityId, this._config?.calendar_person_entities || {});
  }

  getCalendarBadgePersonState(badgeEntityId) {
    const personEntityId = this.getCalendarBadgePersonEntityId(badgeEntityId);
    if (!personEntityId) return null;
    return this._hass?.states?.[personEntityId] || null;
  }

  formatPersonStateLabel(personState) {
    return getPersonStateLabelHelper(personState);
  }

  getPersonEntityPictureUrl(personState) {
    return getPersonEntityPictureUrlHelper(this._hass, personState);
  }

  getCalendarBadgePersonRenderSignature(hass = this._hass) {
    const personEntityIds = Array.from(new Set(Object.values(this._config?.calendar_person_entities || {})
      .map((entityId) => typeof entityId === 'string' ? entityId.trim() : '')
      .filter(Boolean)));

    if (personEntityIds.length === 0) return '';

    return getEntityRenderSignatureHelper(hass, personEntityIds);
  }

  renderCalendarBadgeLabel(badgeItem, badgeTextColor) {
    return renderCalendarBadgeLabelMarkup({
      badgeItem,
      badgeTextColor,
      helpers: this.getCalendarBadgeRenderHelpers()
    });
  }

  renderCalendarBadgeIcon(entityId, name, color, isHidden, iconOverride = null) {
    return renderCalendarBadgeIconMarkup({
      entityId,
      name,
      color,
      isHidden,
      iconOverride,
      helpers: this.getCalendarBadgeRenderHelpers()
    });
  }

  renderEventDescription(description) {
    const text = String(description ?? '').trim();
    if (!text) return '';

    return this.containsBlockHtml(text)
      ? this.sanitizeBasicDescriptionHtml(text)
      : this.renderMarkdownDescription(text);
  }

  containsBlockHtml(text) {
    return /<\/?(?:p|div|ul|ol|li|blockquote|pre|h[1-6]|table|tr|td|th)\b/i.test(String(text ?? ''));
  }

  renderMarkdownDescription(text) {
    const lines = String(text ?? '').replace(/\r\n?/g, '\n').split('\n');
    const htmlBlocks = [];
    let paragraphLines = [];
    let listItems = [];
    let listType = null;
    let quoteLines = [];

    const flushParagraph = () => {
      if (paragraphLines.length === 0) return;
      htmlBlocks.push(`<p>${paragraphLines.map(line => this.renderMarkdownInline(line)).join('<br>')}</p>`);
      paragraphLines = [];
    };

    const flushList = () => {
      if (!listType || listItems.length === 0) return;
      htmlBlocks.push(`<${listType}>${listItems.map(item => `<li>${this.renderMarkdownInline(item)}</li>`).join('')}</${listType}>`);
      listItems = [];
      listType = null;
    };

    const flushQuote = () => {
      if (quoteLines.length === 0) return;
      htmlBlocks.push(`<blockquote>${quoteLines.map(line => this.renderMarkdownInline(line)).join('<br>')}</blockquote>`);
      quoteLines = [];
    };

    const flushAll = () => {
      flushParagraph();
      flushList();
      flushQuote();
    };

    lines.forEach((line) => {
      if (!line.trim()) {
        flushAll();
        return;
      }

      const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
      if (headingMatch) {
        flushAll();
        const level = headingMatch[1].length;
        htmlBlocks.push(`<h${level}>${this.renderMarkdownInline(headingMatch[2])}</h${level}>`);
        return;
      }

      const unorderedMatch = line.match(/^\s*[-*+]\s+(.+)$/);
      if (unorderedMatch) {
        flushParagraph();
        flushQuote();
        if (listType && listType !== 'ul') flushList();
        listType = 'ul';
        listItems.push(unorderedMatch[1]);
        return;
      }

      const orderedMatch = line.match(/^\s*\d+\.\s+(.+)$/);
      if (orderedMatch) {
        flushParagraph();
        flushQuote();
        if (listType && listType !== 'ol') flushList();
        listType = 'ol';
        listItems.push(orderedMatch[1]);
        return;
      }

      const quoteMatch = line.match(/^\s*>\s?(.*)$/);
      if (quoteMatch) {
        flushParagraph();
        flushList();
        quoteLines.push(quoteMatch[1]);
        return;
      }

      flushList();
      flushQuote();
      paragraphLines.push(line);
    });

    flushAll();
    return htmlBlocks.join('');
  }

  renderMarkdownInline(text) {
    const codeSpans = [];
    let html = this.escapeHtml(text).replace(/`([^`]+)`/g, (_match, code) => {
      const token = `§CODESPAN${codeSpans.length}§`;
      codeSpans.push(`<code>${code}</code>`);
      return token;
    });

    html = html.replace(/\[([^\]]+)]\(([^)\s]+)\)/g, (_match, label, url) => {
      const safeUrl = this.getSafeDescriptionUrl(this.decodeHtmlEntities(url));
      if (!safeUrl) return label;
      return `<a href="${this.escapeHtmlAttribute(safeUrl)}" target="_blank" rel="noopener noreferrer">${label}</a>`;
    });

    html = html
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/__([^_]+)__/g, '<strong>$1</strong>')
      .replace(/~~([^~]+)~~/g, '<s>$1</s>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>')
      .replace(/_([^_]+)_/g, '<em>$1</em>');

    html = this.restoreAllowedDescriptionTags(html);
    codeSpans.forEach((codeHtml, index) => {
      html = html.replace(`§CODESPAN${index}§`, codeHtml);
    });

    return html;
  }

  sanitizeBasicDescriptionHtml(text) {
    const cleanText = String(text ?? '').replace(/<script\b[\s\S]*?<\/script>/gi, '').replace(/<style\b[\s\S]*?<\/style>/gi, '');
    const escaped = this.escapeHtml(cleanText).replace(/\r\n?|\n/g, '<br>');
    return this.restoreAllowedDescriptionTags(escaped);
  }

  restoreAllowedDescriptionTags(html) {
    const allowedSimpleTags = 'b|strong|i|em|u|s|br|p|div|ul|ol|li|blockquote|code|pre|h[1-6]|table|thead|tbody|tfoot|tr|td|th';

    const renderAnchor = (attrs, content = '') => {
      const hrefMatch = attrs.match(/href\s*=\s*(?:&quot;([^&]*)&quot;|&#39;([^&]*)&(?:#39|apos);|"([^"]*)"|'([^']*)'|([^\s&"']+))/i);
      const href = hrefMatch ? this.decodeHtmlEntities(hrefMatch[1] || hrefMatch[2] || hrefMatch[3] || hrefMatch[4] || hrefMatch[5] || '') : '';
      const safeUrl = this.getSafeDescriptionUrl(href);
      if (!safeUrl) return content;
      return `<a href="${this.escapeHtmlAttribute(safeUrl)}" target="_blank" rel="noopener noreferrer">${content}</a>`;
    };

    return String(html ?? '')
      .replace(/&lt;a\s+([\s\S]*?)&gt;([\s\S]*?)&lt;\/a&gt;/gi, (_match, attrs, content) => renderAnchor(attrs, content))
      .replace(/&lt;a\s+([\s\S]*?)&gt;/gi, (_match, attrs) => renderAnchor(attrs).replace('</a>', ''))
      .replace(/&lt;\/a&gt;/gi, '</a>')
      .replace(new RegExp(`&lt;(/?)(${allowedSimpleTags})(?:\\s+[\\s\\S]*?)?\\s*(/?)&gt;`, 'gi'), (_match, closing, tag, selfClosing) => {
        const normalizedTag = tag.toLowerCase();
        if (normalizedTag === 'br') return '<br>';
        return closing ? `</${normalizedTag}>` : `<${normalizedTag}${selfClosing ? ' /' : ''}>`;
      });
  }

  getSafeDescriptionUrl(url) {
    const value = String(url ?? '').trim();
    if (!value) return '';

    if (/^(https?:|mailto:|tel:)/i.test(value) || value.startsWith('/') || value.startsWith('#')) {
      return value;
    }

    return '';
  }

  decodeHtmlEntities(text) {
    return String(text ?? '')
      .replace(/&quot;/g, '"')
      .replace(/&#39;|&apos;/g, "'")
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  escapeHtmlAttribute(text) {
    return escapeHtmlAttribute(text);
  }

  normalizeBackgroundImageUrl(url) {
    if (!url) return null;

    const value = String(url).trim();
    if (!value) return null;

    const mediaSourcePrefix = 'media-source://media_source/local/';
    if (value.startsWith(mediaSourcePrefix)) {
      const localPath = value.slice(mediaSourcePrefix.length);
      return `/media/local/${localPath}`;
    }

    return value;
  }

  normalizeBackgroundOpacity(opacityValue, fallback = 0) {
    return normalizeBackgroundOpacityHelper(opacityValue, fallback);
  }

  normalizeEventModalSize(value) {
    return normalizeEventModalSizeHelper(value);
  }

  getEventModalSizeClass() {
    return `modal-size-${this.normalizeEventModalSize(this._config?.event_modal_size)}`;
  }

  applyEventModalSizeClass(content = this.getRootElementById('modal-content')) {
    if (!content?.classList) return;

    content.classList.remove('modal-size-narrow', 'modal-size-medium', 'modal-size-wide', 'modal-size-full');
    content.classList.add(this.getEventModalSizeClass());
  }

  static getStubConfig() {
    return createDefaultStubConfig();
  }

  getCardSize() {
    return 6;
  }

  static async getConfigElement() {
    return document.createElement('daylight-calendar-card-editor');
  }
}

class LegacySkylightCalendarCard extends SkylightCalendarCard {}

customElements.define('daylight-calendar-card', SkylightCalendarCard);
customElements.define('skylight-calendar-card', LegacySkylightCalendarCard);
registerDaylightCalendarCardEditor();

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'daylight-calendar-card',
  name: 'Daylight Calendar Card',
  description: 'A bright, family-friendly calendar card for Home Assistant dashboards.',
  preview: true,
  documentationURL: 'https://docs.daylightcalendar.com'
});
