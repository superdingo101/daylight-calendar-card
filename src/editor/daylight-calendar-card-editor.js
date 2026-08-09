import {
  COMBINE_BACKGROUND_MODE_OPTIONS,
  COMBINE_STYLE_OPTIONS,
  createDefaultStubConfig,
  DAY_BADGE_LAYOUT_WEEK_OPTIONS,
  DEFAULT_BACKGROUND_IMAGE_POSITION,
  DEFAULT_BACKGROUND_IMAGE_REPEAT,
  DEFAULT_BACKGROUND_IMAGE_SIZE,
  DEFAULT_COMBINE_BACKGROUND,
  DEFAULT_COMBINE_STYLE,
  DEFAULT_CONFIG_VALUES,
  DEFAULT_DAY_BADGE_LAYOUT_WEEK,
  DEFAULT_EVENT_COLOR_BAR_WIDTH,
  DEFAULT_EVENT_COLOR_MODE,
  DEFAULT_EVENT_MODAL_SIZE,
  DEFAULT_EVENT_NEUTRAL_BACKGROUND,
  DEFAULT_EVENT_TINT_OPACITY,
  DEFAULT_LANGUAGE,
  DEFAULT_PAST_EVENT_MODE,
  DEFAULT_THEME_MODE,
  DEFAULT_VIEW,
  EVENT_COLOR_MODE_OPTIONS,
  EVENT_MODAL_SIZE_OPTIONS,
  PAST_EVENT_MODE_OPTIONS,
  THEME_MODE_OPTIONS
} from '../defaults.js';
import {
  createConfigNormalizationSchema,
  getEditorDefaultValue as getEditorDefaultValueFromSchema,
  getEventCalendarBubbleMode as getEventCalendarBubbleModeFromConfig,
  normalizeDefaultViewForEditor as normalizeDefaultViewForEditorValue
} from './editor-schema.js';
import {
  renderEditorColorInputControl,
  renderEditorSection,
  renderEditorSubSection,
  renderEditorWeekdayCheckboxes
} from '../renderers/editor-renderer.js';
import { getEntityFriendlyName as getEntityFriendlyNameHelper } from '../ha/ha-state-helpers.js';
import { getDaylightCalendarCardVersion } from '../version.js';
import { clearAllEventCacheSnapshots } from '../events/event-cache.js';
import { normalizeDashboardPath, normalizeEnumValue } from '../utils/normalization-utils.js';
import { detectStaleSkylightResource, STALE_RESOURCE_TROUBLESHOOTING_URL } from '../utils/stale-resource-utils.js';
import '../components/daylight-color-picker.js';

function normalizeDefaultDarkMode(value) {
  if (value === true) return 'dark';
  if (value === false || value === undefined || value === null || value === '') return DEFAULT_THEME_MODE;

  return normalizeEnumValue(value, {
    allowed: THEME_MODE_OPTIONS,
    fallback: DEFAULT_THEME_MODE
  });
}

function normalizePastEventMode(value) {
  return normalizeEnumValue(value, {
    allowed: PAST_EVENT_MODE_OPTIONS,
    fallback: DEFAULT_PAST_EVENT_MODE
  });
}

function normalizeDayBadgeLayoutWeek(value) {
  return normalizeEnumValue(value, {
    allowed: DAY_BADGE_LAYOUT_WEEK_OPTIONS,
    fallback: DEFAULT_DAY_BADGE_LAYOUT_WEEK
  });
}

function normalizeEventModalSize(value) {
  const normalized = String(value || '').trim().toLowerCase();
  return EVENT_MODAL_SIZE_OPTIONS.includes(normalized) ? normalized : DEFAULT_EVENT_MODAL_SIZE;
}

function getDefaultColor(index) {
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2'];
  return colors[index % colors.length];
}

export class SkylightCalendarCardEditor extends HTMLElement {
  constructor() {
    super();
    this._config = createDefaultStubConfig();
    this._hass = null;
    this._rendered = false;
    this._eventCacheFlushStatus = '';
    this._lastCalendarEntitiesKey = '';
    this._colorPickerState = { field: null, mapKey: null, color: '#3f51b5' };
    this._combineBackgroundMode = DEFAULT_COMBINE_BACKGROUND;
    this._combineBackgroundHexDraft = '';
    this._openDisclosureKeys = new Set();
    this._dashboardOptions = [];
  }

  normalizeHexColor(colorValue) {
    const normalizedColor = String(colorValue || '').trim();
    if (!normalizedColor) return null;

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

  normalizeBackgroundOpacity(opacityValue, fallback = 0) {
    const numericOpacity = Number(opacityValue);
    if (!Number.isFinite(numericOpacity)) {
      return fallback;
    }

    return Math.min(100, Math.max(0, numericOpacity));
  }

  syncCombineBackgroundEditorState(backgroundValue) {
    const rawValue = String(backgroundValue || '').trim();
    const normalizedLower = rawValue.toLowerCase();
    if (COMBINE_BACKGROUND_MODE_OPTIONS.includes(normalizedLower)) {
      this._combineBackgroundMode = normalizedLower;
      this._combineBackgroundHexDraft = '';
      return;
    }

    const normalizedHex = this.normalizeHexColor(rawValue);
    if (normalizedHex) {
      this._combineBackgroundMode = 'hex';
      this._combineBackgroundHexDraft = normalizedHex;
      return;
    }

    this._combineBackgroundMode = DEFAULT_COMBINE_BACKGROUND;
    this._combineBackgroundHexDraft = '';
  }

  setConfig(config) {
    const previousEntities = Array.isArray(this._config?.entities) ? this._config.entities : [];
    const previousWeekNumberPrefixMode = this.getWeekNumberPrefixMode();
    const previousWeekNumberPrefix = this._config?.week_number_prefix;
    const normalizedDefaultView = config.default_view === 'week'
      ? 'week-compact'
      : config.default_view === 'schedule'
        ? 'week-standard'
        : config.default_view;
    const normalizedPastEventMode = config.past_event_mode !== undefined && config.past_event_mode !== null && config.past_event_mode !== ''
      ? normalizePastEventMode(config.past_event_mode)
      : (config.hide_the_past ? 'hide' : createDefaultStubConfig().past_event_mode);

    this._config = {
      ...createDefaultStubConfig(),
      ...config,
      default_view: normalizedDefaultView || (createDefaultStubConfig().default_view || DEFAULT_VIEW),
      past_event_mode: normalizedPastEventMode,
      color_scheme: normalizeDefaultDarkMode(config.color_scheme),
      header_dashboard_path: normalizeDashboardPath(config.header_dashboard_path),
      event_modal_size: normalizeEventModalSize(config.event_modal_size),
      day_badge_layout_week: normalizeDayBadgeLayoutWeek(config.day_badge_layout_week)
    };
    this.syncCombineBackgroundEditorState(this._config.combine_background);

    if (!this._rendered) {
      this.render();
      return;
    }

    const nextEntities = Array.isArray(this._config.entities) ? this._config.entities : [];
    const entitiesChanged = previousEntities.join('|') !== nextEntities.join('|');
    const nextWeekNumberPrefixMode = this.getWeekNumberPrefixMode();
    const weekNumberPrefixChanged = previousWeekNumberPrefixMode !== nextWeekNumberPrefixMode || (
      nextWeekNumberPrefixMode === 'custom' && previousWeekNumberPrefix !== this._config.week_number_prefix
    );

    if (entitiesChanged || weekNumberPrefixChanged) {
      this.render();
      return;
    }

    this.updateFieldValues();
  }

  set hass(hass) {
    this._hass = hass;
    this._dashboardOptions = this.getDashboardOptionsForEditor();

    if (!this._rendered) {
      this.render();
      return;
    }

    this.refreshCalendarEntities();
  }

  get value() {
    return this._config || createDefaultStubConfig();
  }

  getCalendarEntities() {
    return Object.keys(this._hass?.states || {})
      .filter((entityId) => entityId.startsWith('calendar.'))
      .sort();
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  normalizeDefaultViewForEditor(value) {
    return normalizeDefaultViewForEditorValue(value);
  }

  getEventCalendarBubbleMode() {
    return getEventCalendarBubbleModeFromConfig(this._config);
  }

  getWeekNumberPrefixMode() {
    const prefix = this._config?.week_number_prefix;
    if (prefix == null) return 'default';
    if (prefix === '') return 'number_only';
    return typeof prefix === 'string' ? 'custom' : 'default';
  }

  getMapFieldValue(key) {
    const value = this._config[key];
    return value && typeof value === 'object' && !Array.isArray(value) ? value : {};
  }

  getListFieldValue(key) {
    const value = this._config[key];
    return Array.isArray(value) ? value : [];
  }

  getListInputValue(key) {
    return this.getListFieldValue(key).join(', ');
  }

  getEditorDefaultValue(key) {
    return getEditorDefaultValueFromSchema(key);
  }

  getConfiguredEntitiesForEditor() {
    const entities = Array.isArray(this._config.entities) ? this._config.entities : [];
    return entities.filter((entityId) => typeof entityId === 'string' && entityId.startsWith('calendar.'));
  }

  getEntityFriendlyName(entityId) {
    return getEntityFriendlyNameHelper(this._hass, entityId);
  }

  getConfiguredEntityIndex(entityId) {
    return this.getConfiguredEntitiesForEditor().indexOf(entityId);
  }

  getEditorCalendarColor(entityId) {
    const entityIndex = this.getConfiguredEntityIndex(entityId);
    return this.normalizeHexColor(this.getMapFieldValue('colors')[entityId]) ||
      getDefaultColor(Math.max(entityIndex, 0));
  }

  getContrastingEditorColor(backgroundColor) {
    const hex = this.normalizeHexColor(backgroundColor);
    if (!hex) return '#FFFFFF';

    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.6 ? '#000000' : '#FFFFFF';
  }

  getEditorEventFontColor(entityId) {
    return this.normalizeHexColor(this.getMapFieldValue('event_font_colors')[entityId]) ||
      this.getContrastingEditorColor(this.getEditorCalendarColor(entityId));
  }

  getVirtualCalendarsForEditor() {
    return Array.isArray(this._config.virtual_calendars) ? this._config.virtual_calendars : [];
  }

  getRenderableVirtualCalendarsForEditor() {
    return this.getVirtualCalendarsForEditor()
      .map((virtualCalendar, index) => ({ virtualCalendar, index }))
      .filter(({ virtualCalendar }) => virtualCalendar && typeof virtualCalendar === 'object' && !Array.isArray(virtualCalendar));
  }

  getNextVirtualCalendarId() {
    const existingIds = new Set(this.getVirtualCalendarsForEditor()
      .filter((virtualCalendar) => virtualCalendar && typeof virtualCalendar === 'object')
      .map((virtualCalendar) => String(virtualCalendar.id || '').trim())
      .filter(Boolean));
    let index = 1;
    let candidate = `virtual_${index}`;
    while (existingIds.has(candidate)) {
      index += 1;
      candidate = `virtual_${index}`;
    }
    return candidate;
  }

  sanitizeVirtualCalendarForEditor(virtualCalendar) {
    const nextVirtualCalendar = {
      ...(virtualCalendar && typeof virtualCalendar === 'object' ? virtualCalendar : {})
    };

    nextVirtualCalendar.id = String(nextVirtualCalendar.id || '').trim();
    nextVirtualCalendar.name = String(nextVirtualCalendar.name || '').trim();

    const icon = String(nextVirtualCalendar.icon || '').trim();
    if (icon) nextVirtualCalendar.icon = icon;
    else nextVirtualCalendar.icon = null;

    const color = String(nextVirtualCalendar.color || '').trim();
    if (color) nextVirtualCalendar.color = color;
    else nextVirtualCalendar.color = null;

    nextVirtualCalendar.entities = Array.isArray(nextVirtualCalendar.entities)
      ? nextVirtualCalendar.entities.filter((entityId) => typeof entityId === 'string' && entityId.startsWith('calendar.'))
      : [];

    return nextVirtualCalendar;
  }

  getVirtualCalendarIdValidation(index) {
    const virtualCalendars = this.getVirtualCalendarsForEditor();
    const virtualCalendar = virtualCalendars[index];
    if (!virtualCalendar || typeof virtualCalendar !== 'object') return '';

    const id = String(virtualCalendar.id || '').trim();
    if (!id) return 'ID is required for runtime matching.';

    const duplicateIndex = virtualCalendars.findIndex((otherVirtualCalendar, otherIndex) => (
      otherIndex !== index &&
      otherVirtualCalendar &&
      typeof otherVirtualCalendar === 'object' &&
      String(otherVirtualCalendar.id || '').trim() === id
    ));

    return duplicateIndex === -1 ? '' : 'ID duplicates another virtual calendar.';
  }

  getEditorVirtualCalendarColor(index) {
    const virtualCalendar = this.getVirtualCalendarsForEditor()[index];
    return this.toColorInputValue(virtualCalendar?.color);
  }

  getEditorMapColorValue(field, entityId) {
    if (field === 'colors') {
      return this.getEditorCalendarColor(entityId);
    }

    if (field === 'event_font_colors') {
      return this.getEditorEventFontColor(entityId);
    }

    return this.toColorInputValue(this.getMapFieldValue(field)[entityId]);
  }

  getDashboardOptionsForEditor() {
    const panels = this._hass?.panels || {};
    const dashboards = Object.values(panels)
      .filter((panel) => panel?.component_name === 'lovelace' && typeof panel.url_path === 'string' && panel.url_path.trim())
      .map((panel) => {
        const path = panel.url_path.startsWith('/') ? panel.url_path : `/${panel.url_path}`;
        const title = panel.title || panel.config?.title || panel.url_path;
        return { path, title };
      });

    const uniqueByPath = new Map();
    dashboards.forEach((dashboard) => {
      uniqueByPath.set(dashboard.path, dashboard);
    });

    const configuredPath = normalizeDashboardPath(this._config.header_dashboard_path);
    if (configuredPath && !uniqueByPath.has(configuredPath)) {
      uniqueByPath.set(configuredPath, { path: configuredPath, title: configuredPath });
    }

    return Array.from(uniqueByPath.values())
      .sort((a, b) => a.title.localeCompare(b.title, undefined, { sensitivity: 'base' }));
  }

  toColorInputValue(value, fallback = '#3f51b5') {
    const normalized = String(value || '').trim();
    if (/^#[0-9a-fA-F]{6}$/.test(normalized)) {
      return normalized;
    }
    return fallback;
  }

  getColorValue(field, mapKey = null) {
    if (field === 'virtual_calendar_color') {
      return this.getEditorVirtualCalendarColor(Number(mapKey));
    }
    if (mapKey) {
      return this.getEditorMapColorValue(field, mapKey);
    }
    return this.toColorInputValue(this._config[field]);
  }

  emitConfigChanged(nextConfig) {
    this._config = nextConfig;
    this.dispatchEvent(
      new CustomEvent('config-changed', {
        detail: { config: nextConfig },
        bubbles: true,
        composed: true
      })
    );
  }

  openColorPicker(field, mapKey = null) {
    const initialColor = this.getColorValue(field, mapKey);
    this._colorPickerState = { field, mapKey, color: initialColor };
    const dialog = this.querySelector('.color-picker-dialog');
    const picker = this.querySelector('daylight-color-picker');
    if (picker) picker.value = initialColor;
    if (dialog) dialog.classList.add('show');
  }

  closeColorPicker() {
    const dialog = this.querySelector('.color-picker-dialog');
    if (dialog) dialog.classList.remove('show');
  }

  applyColorPickerColor(hexColor = null) {
    const { field, mapKey } = this._colorPickerState;
    const picker = this.querySelector('daylight-color-picker');
    const selectedColor = hexColor || picker?.value || this._colorPickerState.color;
    if (!field || !selectedColor) return;

    if (field === 'virtual_calendar_color') {
      this.updateVirtualCalendar(Number(mapKey), { color: selectedColor }, { render: true });
      this.closeColorPicker();
      return;
    }

    const nextConfig = { ...this.value };
    if (mapKey) {
      nextConfig[field] = {
        ...this.getMapFieldValue(field),
        [mapKey]: selectedColor
      };
    } else {
      nextConfig[field] = selectedColor;
    }

    this.emitConfigChanged(nextConfig);
    this.updateFieldValues();
    this.closeColorPicker();
  }

  renderColorPickerDialog() {
    return `
      <div class="color-picker-dialog">
        <div class="color-picker-overlay" data-close-color-picker="true"></div>
        <div class="color-picker-modal" role="dialog" aria-label="Select color">
          <daylight-color-picker title="Select color" confirm-label="Set" cancel-label="Cancel"></daylight-color-picker>
        </div>
      </div>
    `;
  }

  renderColorInputControl({ id, field, mapKey = null, value }) {
    return renderEditorColorInputControl({
      id,
      field,
      mapKey,
      value,
      toColorInputValue: (colorValue) => this.toColorInputValue(colorValue)
    });
  }

  renderMapRowInputs(mapKey, { label, inputType = 'text', placeholder = '' } = {}) {
    const mapValue = this.getMapFieldValue(mapKey);
    const entities = this.getConfiguredEntitiesForEditor();

    if (!entities.length) {
      return `<p class="helper">Select at least one calendar to configure ${label || mapKey}.</p>`;
    }

    return entities
      .map((entityId) => {
        const displayName = this.escapeHtml(this.getEntityFriendlyName(entityId));
        const value = inputType === 'color' ? this.getEditorMapColorValue(mapKey, entityId) : (mapValue[entityId] || '');
        if (inputType === 'color') {
          return `
            <div class="map-row">
              <label class="map-label" for="${mapKey}-${entityId}">${displayName}</label>
              ${this.renderColorInputControl({ id: `${mapKey}-${entityId}`, field: mapKey, mapKey: entityId, value })}
            </div>
          `;
        }

        return `
          <div class="map-row">
            <label class="map-label" for="${mapKey}-${entityId}">${displayName}</label>
            <input id="${mapKey}-${entityId}" type="text" data-map-field="${mapKey}" data-map-key="${entityId}" value="${this.escapeHtml(value)}" placeholder="${placeholder}">
          </div>
        `;
      })
      .join('');
  }

  renderCalendarListCheckboxes(field, { label }) {
    const entities = this.getConfiguredEntitiesForEditor();
    const selectedValues = new Set(this.getListFieldValue(field));

    if (!entities.length) {
      return `<p class="helper">Select at least one calendar to configure ${label || field}.</p>`;
    }

    return entities
      .map((entityId) => {
        const displayName = this.escapeHtml(this.getEntityFriendlyName(entityId));
        const checked = selectedValues.has(entityId) ? 'checked' : '';
        return `
          <label class="list-checkbox-row">
            <span>${displayName}</span>
            <input type="checkbox" data-list-field="${field}" value="${entityId}" ${checked}>
          </label>
        `;
      })
      .join('');
  }

  buildDisclosureKey(scope, title) {
    return `${scope}:${title}`;
  }

  captureOpenDisclosures() {
    const openKeys = new Set();
    this.querySelectorAll('details[data-disclosure-key][open]').forEach((detail) => {
      const key = detail.dataset.disclosureKey;
      if (key) openKeys.add(key);
    });
    this._openDisclosureKeys = openKeys;
  }

  renderSection(title, content) {
    const disclosureKey = this.buildDisclosureKey('section', title);
    return renderEditorSection({
      title,
      content,
      disclosureKey,
      open: this._openDisclosureKeys.has(disclosureKey)
    });
  }

  renderSubSection(title, content) {
    const disclosureKey = this.buildDisclosureKey('subsection', title);
    return renderEditorSubSection({
      title,
      content,
      disclosureKey,
      open: this._openDisclosureKeys.has(disclosureKey)
    });
  }

  renderVirtualCalendarsEditor() {
    const renderableVirtualCalendars = this.getRenderableVirtualCalendarsForEditor();

    return `
      <div class="virtual-calendars-editor">
        <p class="helper">Create display-only calendar badges that group one or more configured real calendars.</p>
        ${renderableVirtualCalendars.length ? renderableVirtualCalendars
          .map(({ virtualCalendar, index }, renderIndex) => this.renderVirtualCalendarRow(virtualCalendar, index, renderIndex, renderableVirtualCalendars.length))
          .join('') : '<p class="helper">No virtual calendars configured yet.</p>'}
        <button type="button" class="secondary-action" data-virtual-calendar-action="add">Add virtual calendar</button>
      </div>
    `;
  }

  renderVirtualCalendarRow(virtualCalendar, index, renderIndex = index, renderCount = this.getRenderableVirtualCalendarsForEditor().length) {
    const configuredEntities = this.getConfiguredEntitiesForEditor();
    const configuredEntitySet = new Set(configuredEntities);
    const selectedEntityValues = Array.isArray(virtualCalendar.entities)
      ? virtualCalendar.entities.filter((entityId) => typeof entityId === 'string' && entityId.startsWith('calendar.'))
      : [];
    const selectedEntities = new Set(selectedEntityValues);
    const legacyEntities = selectedEntityValues.filter((entityId) => !configuredEntitySet.has(entityId));
    const virtualCalendarName = String(virtualCalendar.name || '').trim();
    const virtualCalendarId = String(virtualCalendar.id || '').trim();
    const virtualCalendarIcon = String(virtualCalendar.icon || '').trim();
    const virtualCalendarColor = String(virtualCalendar.color || '').trim();
    const idValidation = this.getVirtualCalendarIdValidation(index);
    const idValidationMarkup = idValidation
      ? `<p class="validation-message" id="virtual-calendar-id-error-${index}">${this.escapeHtml(idValidation)}</p>`
      : '';
    const colorStatusMarkup = virtualCalendarColor
      ? `<span class="virtual-calendar-color-status">Override: ${this.escapeHtml(virtualCalendarColor)}</span>`
      : '<span class="virtual-calendar-color-status no-override">No color override set</span>';
    const checkboxRows = configuredEntities.map((entityId) => {
      const displayName = this.escapeHtml(this.getEntityFriendlyName(entityId));
      const checked = selectedEntities.has(entityId) ? 'checked' : '';
      return `
        <label class="list-checkbox-row virtual-calendar-entity-row">
          <span>${displayName}</span>
          <input type="checkbox" data-virtual-calendar-entity="true" data-virtual-calendar-index="${index}" value="${this.escapeHtml(entityId)}" ${checked}>
        </label>
      `;
    });

    legacyEntities.forEach((entityId) => {
      checkboxRows.push(`
        <label class="list-checkbox-row virtual-calendar-entity-row legacy-entity-row">
          <span>${this.escapeHtml(entityId)} <em>(not in configured calendars)</em></span>
          <input type="checkbox" data-virtual-calendar-entity="true" data-virtual-calendar-index="${index}" value="${this.escapeHtml(entityId)}" checked disabled>
        </label>
      `);
    });

    const checkboxMarkup = checkboxRows.length
      ? checkboxRows.join('')
      : '<p class="helper">Select at least one real calendar above to include calendars here.</p>';

    return `
      <div class="virtual-calendar-card" data-virtual-calendar-card="${index}">
        <div class="virtual-calendar-card-header">
          <strong>${this.escapeHtml(virtualCalendarName || virtualCalendarId || `Virtual calendar ${renderIndex + 1}`)}</strong>
          <div class="virtual-calendar-actions">
            <button type="button" title="Move up" data-virtual-calendar-action="move-up" data-virtual-calendar-index="${index}" ${renderIndex === 0 ? 'disabled' : ''}>↑</button>
            <button type="button" title="Move down" data-virtual-calendar-action="move-down" data-virtual-calendar-index="${index}" ${renderIndex === renderCount - 1 ? 'disabled' : ''}>↓</button>
            <button type="button" title="Remove" data-virtual-calendar-action="remove" data-virtual-calendar-index="${index}">Remove</button>
          </div>
        </div>
        <div class="field-row">
          <div class="field">
            <label for="virtual-calendar-name-${index}">Name</label>
            <input id="virtual-calendar-name-${index}" type="text" data-virtual-calendar-field="name" data-virtual-calendar-index="${index}" value="${this.escapeHtml(virtualCalendarName)}" placeholder="Virtual Calendar">
          </div>
          <div class="field">
            <label for="virtual-calendar-id-${index}">ID</label>
            <input id="virtual-calendar-id-${index}" type="text" data-virtual-calendar-field="id" data-virtual-calendar-index="${index}" value="${this.escapeHtml(virtualCalendarId)}" placeholder="virtual_1" ${idValidation ? 'aria-invalid="true"' : ''} ${idValidation ? `aria-describedby="virtual-calendar-id-error-${index}"` : ''}>
            ${idValidationMarkup}
          </div>
        </div>
        <div class="field-row">
          <div class="field">
            <label for="virtual-calendar-icon-${index}">Icon</label>
            <input id="virtual-calendar-icon-${index}" type="text" data-virtual-calendar-field="icon" data-virtual-calendar-index="${index}" value="${this.escapeHtml(virtualCalendarIcon)}" placeholder="mdi:calendar">
          </div>
          <div class="field virtual-calendar-color-field">
            <label for="virtual-calendar-color-${index}">Color override (optional)</label>
            <div class="virtual-calendar-color-row">
              ${this.renderColorInputControl({ id: `virtual-calendar-color-picker-${index}`, field: 'virtual_calendar_color', mapKey: String(index), value: virtualCalendarColor })}
              <input id="virtual-calendar-color-${index}" type="text" data-virtual-calendar-field="color" data-virtual-calendar-index="${index}" value="${this.escapeHtml(virtualCalendarColor)}" placeholder="#3f51b5">
              ${colorStatusMarkup}
            </div>
          </div>
        </div>
        <div class="field">
          <label>Included calendar entities</label>
          <div class="list-checkbox-grid virtual-calendar-entities">
            ${checkboxMarkup}
          </div>
        </div>
      </div>
    `;
  }

  updateVirtualCalendar(index, patch, { render = false } = {}) {
    const virtualCalendars = [...this.getVirtualCalendarsForEditor()];
    if (index < 0 || index >= virtualCalendars.length) return;
    const currentVirtualCalendar = virtualCalendars[index];
    if (!currentVirtualCalendar || typeof currentVirtualCalendar !== 'object' || Array.isArray(currentVirtualCalendar)) return;

    virtualCalendars[index] = this.sanitizeVirtualCalendarForEditor({
      ...currentVirtualCalendar,
      ...patch
    });

    this.emitConfigChanged({
      ...this.value,
      virtual_calendars: virtualCalendars
    });

    if (render) this.render();
    else this.updateFieldValues();
  }

  addVirtualCalendar() {
    const virtualCalendars = [...this.getVirtualCalendarsForEditor()];
    virtualCalendars.push({
      id: this.getNextVirtualCalendarId(),
      name: 'Virtual Calendar',
      icon: null,
      color: null,
      entities: []
    });

    this.emitConfigChanged({
      ...this.value,
      virtual_calendars: virtualCalendars
    });
    this.render();
  }

  removeVirtualCalendar(index) {
    const virtualCalendars = [...this.getVirtualCalendarsForEditor()];
    if (index < 0 || index >= virtualCalendars.length) return;
    virtualCalendars.splice(index, 1);

    this.emitConfigChanged({
      ...this.value,
      virtual_calendars: virtualCalendars
    });
    this.render();
  }

  moveVirtualCalendar(index, direction) {
    const renderableVirtualCalendars = this.getRenderableVirtualCalendarsForEditor();
    const renderIndex = renderableVirtualCalendars.findIndex((entry) => entry.index === index);
    const swapEntry = renderableVirtualCalendars[renderIndex + direction];
    const virtualCalendars = [...this.getVirtualCalendarsForEditor()];
    if (renderIndex === -1 || !swapEntry || index < 0 || index >= virtualCalendars.length) return;
    [virtualCalendars[index], virtualCalendars[swapEntry.index]] = [virtualCalendars[swapEntry.index], virtualCalendars[index]];

    this.emitConfigChanged({
      ...this.value,
      virtual_calendars: virtualCalendars
    });
    this.render();
  }

  handleVirtualCalendarAction(event) {
    const action = event.currentTarget.dataset.virtualCalendarAction;
    const index = Number(event.currentTarget.dataset.virtualCalendarIndex);
    if (action === 'add') this.addVirtualCalendar();
    else if (action === 'remove') this.removeVirtualCalendar(index);
    else if (action === 'move-up') this.moveVirtualCalendar(index, -1);
    else if (action === 'move-down') this.moveVirtualCalendar(index, 1);
  }

  handleVirtualCalendarInput(event) {
    const index = Number(event.target.dataset.virtualCalendarIndex);
    const field = event.target.dataset.virtualCalendarField;
    if (!field) return;
    const value = String(event.target.value || '').trim();
    this.updateVirtualCalendar(index, {
      [field]: field === 'icon' || field === 'color' ? (value || null) : value
    }, { render: field === 'id' || field === 'name' || field === 'color' });
  }

  handleVirtualCalendarEntityChange(event) {
    const index = Number(event.target.dataset.virtualCalendarIndex);
    const checkedEntities = Array.from(this.querySelectorAll(`input[data-virtual-calendar-entity][data-virtual-calendar-index="${index}"]:checked`))
      .map((input) => input.value)
      .filter((entityId) => typeof entityId === 'string' && entityId.startsWith('calendar.'));
    this.updateVirtualCalendar(index, { entities: checkedEntities });
  }

  renderWeekdayCheckboxes() {
    return renderEditorWeekdayCheckboxes({
      selectedWeekdays: new Set(this.getListFieldValue('week_days'))
    });
  }

  render() {
    this.captureOpenDisclosures();

    const displayLayoutSection = this.renderSection('Display & layout', `
      <div class="field-row">
        <div class="field field-inline">
          <label for="first_day_of_week">First day of week</label>
          <select id="first_day_of_week" data-field="first_day_of_week" data-type="number">
            <option value="0" ${Number(this._config.first_day_of_week) === 0 ? 'selected' : ''}>Sunday</option>
            <option value="1" ${Number(this._config.first_day_of_week) === 1 ? 'selected' : ''}>Monday</option>
            <option value="2" ${Number(this._config.first_day_of_week) === 2 ? 'selected' : ''}>Tuesday</option>
            <option value="3" ${Number(this._config.first_day_of_week) === 3 ? 'selected' : ''}>Wednesday</option>
            <option value="4" ${Number(this._config.first_day_of_week) === 4 ? 'selected' : ''}>Thursday</option>
            <option value="5" ${Number(this._config.first_day_of_week) === 5 ? 'selected' : ''}>Friday</option>
            <option value="6" ${Number(this._config.first_day_of_week) === 6 ? 'selected' : ''}>Saturday</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label>Week days</label>
        ${this.renderWeekdayCheckboxes()}
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="week_start_hour">Week start hour</label>
          <input id="week_start_hour" data-field="week_start_hour" data-type="number" type="number" min="0" max="23" value="${Number(this._config.week_start_hour ?? this.getEditorDefaultValue('week_start_hour'))}">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="week_end_hour">Week end hour</label>
          <input id="week_end_hour" data-field="week_end_hour" data-type="number" type="number" min="0" max="23" value="${Number(this._config.week_end_hour ?? this.getEditorDefaultValue('week_end_hour'))}">
        </div>
      </div>
      <div class="boolean-list">
        <label><input type="checkbox" data-field="lock_schedule_hours" ${this._config.lock_schedule_hours ? 'checked' : ''}> Schedule view: lock week start/end hours</label>
        <label class="field-inline">Past-ended events
          <select data-field="past_event_mode">
            <option value="none" ${this._config.past_event_mode === 'none' ? 'selected' : ''}>Show normally</option>
            <option value="hide" ${this._config.past_event_mode === 'hide' ? 'selected' : ''}>Hide</option>
            <option value="muted" ${this._config.past_event_mode === 'muted' ? 'selected' : ''}>Mute</option>
          </select>
        </label>
        <label><input type="checkbox" data-field="hide_empty_days" ${this._config.hide_empty_days ? 'checked' : ''}> Agenda view: hide empty days</label>
        <label><input type="checkbox" data-field="agenda_compact_events" ${this._config.agenda_compact_events ? 'checked' : ''}> Agenda view: compact events</label>
        <label><input type="checkbox" data-field="disable_swipe_controls" ${this._config.disable_swipe_controls ? 'checked' : ''}> Disable swipe period controls</label>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="rolling_days_week_compact">Rolling days (week view)</label>
          <input id="rolling_days_week_compact" data-field="rolling_days_week_compact" data-type="nullable-number" type="number" min="1" value="${this._config.rolling_days_week_compact ?? ''}" placeholder="Disabled">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="rolling_days_schedule">Rolling days (schedule view)</label>
          <input id="rolling_days_schedule" data-field="rolling_days_schedule" data-type="nullable-number" type="number" min="1" value="${this._config.rolling_days_schedule ?? ''}" placeholder="Disabled">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="rolling_days_agenda">Rolling days (agenda view)</label>
          <input id="rolling_days_agenda" data-field="rolling_days_agenda" data-type="nullable-number" type="number" min="1" value="${this._config.rolling_days_agenda ?? ''}" placeholder="Disabled">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="rolling_weeks">Rolling weeks (month view)</label>
          <input id="rolling_weeks" data-field="rolling_weeks" data-type="nullable-number" type="number" min="1" value="${this._config.rolling_weeks ?? ''}" placeholder="Disabled">
        </div>
      </div>
      <div class="boolean-list">
        <label><input type="checkbox" data-field="compact_height" ${this._config.compact_height ? 'checked' : ''}> Compact height</label>
        <label><input type="checkbox" data-field="compact_width" ${this._config.compact_width ? 'checked' : ''}> Schedule view: compact width columns</label>
        <label><input type="checkbox" data-field="show_week_numbers_month" ${this._config.show_week_numbers_month ? 'checked' : ''}> Month view: show ISO week numbers</label>
        <label><input type="checkbox" data-field="show_all_events_month" ${this._config.show_all_events_month ? 'checked' : ''}> Month view: show all events (override compact height)</label>
        <label><input type="checkbox" data-field="show_all_details_month" ${this._config.show_all_details_month ? 'checked' : ''}> Month view: show all details (week-compact style + override compact height)</label>
        <label><input type="checkbox" data-field="compact_header" ${this._config.compact_header ? 'checked' : ''}> Compact header</label>
        <label><input type="checkbox" data-field="hide_year" ${this._config.hide_year ? 'checked' : ''}> Hide year in header period label</label>
        <label><input type="checkbox" data-field="hide_calendars" ${this._config.hide_calendars ? 'checked' : ''}> Hide calendar badges</label>
        <label><input type="checkbox" data-field="hide_header" ${this._config.hide_header ? 'checked' : ''}> Hide entire header</label>
        <label><input type="checkbox" data-field="hide_calendar_names" ${this._config.hide_calendar_names ? 'checked' : ''}> Header badges: hide calendar names</label>
        <label><input type="checkbox" data-field="hide_controls" ${this._config.hide_controls ? 'checked' : ''}> Hide all header controls</label>
        <label><input type="checkbox" data-field="hide_navigation_buttons" ${this._config.hide_navigation_buttons ? 'checked' : ''}> Hide previous/next and today buttons</label>
        <label><input type="checkbox" data-field="hide_add_event_button" ${this._config.hide_add_event_button ? 'checked' : ''}> Hide add event button</label>
        <label><input type="checkbox" data-field="hide_view_selector" ${this._config.hide_view_selector ? 'checked' : ''}> Hide view selector</label>
        <label><input type="checkbox" data-field="show_dashboard_nav_button" ${this._config.show_dashboard_nav_button ? 'checked' : ''}> Show left dashboard navigation button</label>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="week_number_prefix_mode">Month week-number prefix</label>
          <select id="week_number_prefix_mode" data-field="week_number_prefix_mode">
            <option value="default" ${this.getWeekNumberPrefixMode() === 'default' ? 'selected' : ''}>Localized default</option>
            <option value="number_only" ${this.getWeekNumberPrefixMode() === 'number_only' ? 'selected' : ''}>Number only</option>
            <option value="custom" ${this.getWeekNumberPrefixMode() === 'custom' ? 'selected' : ''}>Custom prefix</option>
          </select>
          ${this.getWeekNumberPrefixMode() === 'custom' ? `
            <input data-field="week_number_prefix" type="text" value="${this.escapeHtml(this._config.week_number_prefix)}" placeholder="Week">
          ` : ''}
          <p class="helper">Choose the localized prefix, the week number alone, or enter a custom prefix.</p>
        </div>
      </div>
      ${this._config.show_dashboard_nav_button ? `
      <div class="field-row">
        <div class="field field-inline">
          <label for="header_dashboard_path">Dashboard target</label>
          <select id="header_dashboard_path" data-field="header_dashboard_path">
            <option value="">Select a dashboard</option>
            ${this._dashboardOptions.map((dashboard) => `
              <option value="${this.escapeHtml(dashboard.path)}" ${this._config.header_dashboard_path === dashboard.path ? 'selected' : ''}>${this.escapeHtml(dashboard.title)}</option>
            `).join('')}
          </select>
        </div>
      </div>
      ` : ''}
      ${this._config.compact_height ? '' : `
        <div class="field">
          <label for="height_scale">Height scale</label>
          <input id="height_scale" data-field="height_scale" data-type="number" type="number" min="0.1" step="0.1" value="${Number(this._config.height_scale ?? this.getEditorDefaultValue('height_scale'))}">
        </div>
      `}
    `);

    const colorStylingSection = this.renderSection('Colors & styling', `
      <div class="field">
        <label for="header_color">Header color</label>
        <div class="field-row">
          ${this.renderColorInputControl({ id: 'header_color', field: 'header_color', value: this._config.header_color })}
          <input data-field="header_color_text" data-type="color-text" type="text" value="${this.escapeHtml(this._config.header_color || '')}" placeholder="var(--primary-color) or match-card-background">
        </div>
      </div>
      <div class="field">
        <label for="header_text_color">Header text color</label>
        <div class="field-row">
          ${this.renderColorInputControl({ id: 'header_text_color', field: 'header_text_color', value: this._config.header_text_color })}
          <input data-field="header_text_color_text" data-type="header-text-color-text" type="text" value="${this.escapeHtml(this._config.header_text_color || '')}" placeholder="Auto contrast">
        </div>
      </div>
      <div class="field">
        <label for="grid_color">Grid and divider color</label>
        <div class="field-row">
          ${this.renderColorInputControl({ id: 'grid_color', field: 'grid_color', value: this._config.grid_color })}
          <input data-field="grid_color_text" data-type="grid-color-text" type="text" value="${this.escapeHtml(this._config.grid_color || '')}" placeholder="Theme default">
        </div>
      </div>
      ${this.renderSubSection('Calendar colors', `<div class="map-grid">${this.renderMapRowInputs('colors', { label: 'calendar colors', inputType: 'color' })}</div>`)}
      ${this.renderSubSection('Event font colors', `<div class="map-grid">${this.renderMapRowInputs('event_font_colors', { label: 'event font colors', inputType: 'color' })}</div>`)}
      ${this.renderSubSection('Calendar display names', `<div class="map-grid">${this.renderMapRowInputs('calendar_names', { label: 'calendar names', placeholder: 'Display name' })}</div>`)}
      ${this.renderSubSection('Calendar badge icons', `<div class="map-grid">${this.renderMapRowInputs('calendar_badge_icons', { label: 'badge icons', placeholder: 'mdi:icon or URL' })}</div>`)}
      ${this.renderSubSection('Calendar badge people', `<div class="map-grid">${this.renderMapRowInputs('calendar_person_entities', { label: 'badge people', placeholder: 'person.ian' })}</div>`)}
      <div class="boolean-list">
        <label><input type="checkbox" data-field="header_background_transparent" ${this.normalizeBackgroundOpacity(this._config.header_background_opacity, this._config.header_background_transparent ? 100 : 0) >= 100 ? 'checked' : ''}> Transparent header surfaces</label>
        <label><input type="checkbox" data-field="background_transparent" ${this.normalizeBackgroundOpacity(this._config.background_opacity, this._config.background_transparent ? 100 : 0) >= 100 ? 'checked' : ''}> Transparent background surfaces</label>
        <label><input type="checkbox" data-field="hide_dark_mode_toggle" ${this._config.hide_dark_mode_toggle ? 'checked' : ''}> Hide dark mode toggle</label>
      </div>
      <div class="field">
        <label for="color_scheme">Color scheme</label>
        <select id="color_scheme" data-field="color_scheme">
          <option value="auto">Auto (browser/app)</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    `);

    const backgroundSection = this.renderSection('Background image', `
      <div class="field field-inline">
        <label for="header_background_opacity">Header opacity</label>
        <input id="header_background_opacity" data-field="header_background_opacity" data-type="number" type="number" min="0" max="100" step="1" value="${Number(this.normalizeBackgroundOpacity(this._config.header_background_opacity, this._config.header_background_transparent ? 100 : 0))}">
      </div>
      <div class="field field-inline">
        <label for="background_opacity">Background opacity</label>
        <input id="background_opacity" data-field="background_opacity" data-type="number" type="number" min="0" max="100" step="1" value="${Number(this.normalizeBackgroundOpacity(this._config.background_opacity, this._config.background_transparent ? 100 : 0))}">
      </div>
      <div class="field field-inline">
        <label for="background_image_url">Background image URL</label>
        <input id="background_image_url" data-field="background_image_url" type="text" value="${this._config.background_image_url || ''}" placeholder="https://... or /media/local/...">
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="background_image_size">Image size</label>
          <input id="background_image_size" data-field="background_image_size" type="text" value="${this._config.background_image_size || 'cover'}" placeholder="cover">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="background_image_position">Image position</label>
          <input id="background_image_position" data-field="background_image_position" type="text" value="${this._config.background_image_position || 'center'}" placeholder="center">
        </div>
      </div>
      <div class="field field-inline">
        <label for="background_image_repeat">Image repeat</label>
        <input id="background_image_repeat" data-field="background_image_repeat" type="text" value="${this._config.background_image_repeat || 'no-repeat'}" placeholder="no-repeat">
      </div>
    `);

    const eventSection = this.renderSection('Events & schedule', `
      <div class="field-row">
        <div class="field field-inline">
          <label for="month_day_tap_action">Month view: tapping a day</label>
          <select id="month_day_tap_action" data-field="month_day_tap_action">
            <option value="create" ${this._config.month_day_tap_action !== 'show_events' ? 'selected' : ''}>Opens new event (default)</option>
            <option value="show_events" ${this._config.month_day_tap_action === 'show_events' ? 'selected' : ''}>Shows that day's events</option>
          </select>
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="event_font_size">Event font size</label>
          <input id="event_font_size" data-field="event_font_size" data-type="number" type="number" min="8" max="32" value="${Number(this._config.event_font_size ?? this.getEditorDefaultValue('event_font_size'))}">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="event_time_font_size">Event time font size</label>
          <input id="event_time_font_size" data-field="event_time_font_size" data-type="number" type="number" min="8" max="32" value="${Number(this._config.event_time_font_size ?? this.getEditorDefaultValue('event_time_font_size'))}">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="event_location_font_size">Event location font size</label>
          <input id="event_location_font_size" data-field="event_location_font_size" data-type="number" type="number" min="8" max="32" value="${Number(this._config.event_location_font_size ?? this.getEditorDefaultValue('event_location_font_size'))}">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="event_calendar_bubble_mode">Event calendar bubble</label>
          <select id="event_calendar_bubble_mode" data-field="event_calendar_bubble_mode">
            <option value="icon" ${this.getEventCalendarBubbleMode() === 'icon' ? 'selected' : ''}>Icon</option>
            <option value="friendly_name" ${this.getEventCalendarBubbleMode() === 'friendly_name' ? 'selected' : ''}>Friendly Name</option>
            <option value="none" ${this.getEventCalendarBubbleMode() === 'none' ? 'selected' : ''}>None</option>
          </select>
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="event_title_prefix">Event title prefix</label>
          <select id="event_title_prefix" data-field="event_title_prefix">
            <option value="none" ${this._config.event_title_prefix === 'none' || !this._config.event_title_prefix ? 'selected' : ''}>None</option>
            <option value="badge_icon" ${this._config.event_title_prefix === 'badge_icon' ? 'selected' : ''}>Calendar Badge Icon</option>
            <option value="friendly_name" ${this._config.event_title_prefix === 'friendly_name' ? 'selected' : ''}>Calendar Friendly Name</option>
          </select>
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="event_color_mode">Event color style</label>
          <select id="event_color_mode" data-field="event_color_mode">
            <option value="classic" ${this._config.event_color_mode === 'classic' ? 'selected' : ''}>Classic</option>
            <option value="left-neutral" ${this._config.event_color_mode === 'left-neutral' ? 'selected' : ''}>Bar + Neutral</option>
            <option value="left-tint" ${this._config.event_color_mode === 'left-tint' ? 'selected' : ''}>Bar + Tint</option>
          </select>
        </div>
      </div>
      ${this._config.event_color_mode === 'left-neutral' ? `
      <div class="field-row">
        <div class="field field-inline">
          <label for="event_neutral_background">Neutral event background color</label>
          ${this.renderColorInputControl({ id: 'event_neutral_background', field: 'event_neutral_background', value: this._config.event_neutral_background || DEFAULT_EVENT_NEUTRAL_BACKGROUND })}
        </div>
      </div>
      ` : ''}
      ${this._config.event_color_mode === 'left-tint' ? `
      <div class="field-row">
        <div class="field field-inline">
          <label for="event_tint_opacity">Tint opacity</label>
          <input id="event_tint_opacity" data-field="event_tint_opacity" data-type="number" type="number" min="0" max="100" step="1" value="${Number(this._config.event_tint_opacity ?? DEFAULT_EVENT_TINT_OPACITY)}">
        </div>
      </div>
      ` : ''}
      ${this._config.event_color_mode !== 'classic' ? `
      <div class="field-row">
        <div class="field field-inline">
          <label for="event_color_bar_width">Event color bar width (px)</label>
          <input id="event_color_bar_width" data-field="event_color_bar_width" data-type="number" type="number" min="1" value="${Number(this._config.event_color_bar_width ?? this._config.combine_calendars_width ?? DEFAULT_EVENT_COLOR_BAR_WIDTH)}">
        </div>
      </div>
      ` : ''}
      ${this.renderSubSection('Hide times for calendars', `<div class="list-checkbox-grid">${this.renderCalendarListCheckboxes('hide_times_for_calendars', { label: 'hidden times calendars' })}</div>`)}
      <div class="boolean-list">
        <label><input type="checkbox" data-field="show_current_time_bar" ${this._config.show_current_time_bar ? 'checked' : ''}> Show current time bar</label>
        <label><input type="checkbox" data-field="use_24hr_schedule" ${this._config.use_24hr_schedule ? 'checked' : ''}> Use 24-hour schedule time</label>
        <label><input type="checkbox" data-field="shorten_event_times" ${this._config.shorten_event_times ? 'checked' : ''}> Shorten event times</label>
        <label><input type="checkbox" data-field="display_full_weekday_names" ${this._config.display_full_weekday_names ? 'checked' : ''}> Display full weekday names</label>
        <label><input type="checkbox" data-field="show_event_location" ${this._config.show_event_location ? 'checked' : ''}> Show event location</label>
        <label><input type="checkbox" data-field="use_short_location" ${this._config.use_short_location ? 'checked' : ''}> Shorten event location in views</label>
        <label><input type="checkbox" data-field="combine_calendars" ${this._config.combine_calendars ? 'checked' : ''}> Combine duplicate events across calendars</label>
      </div>
      ${this._config.combine_calendars ? `
      <div class="field-row">
        <div class="field field-inline">
          <label for="combine_style">Combined indicator style</label>
          <select id="combine_style" data-field="combine_style">
            <option value="stripes" ${this._config.combine_style === 'stripes' ? 'selected' : ''}>Stripes</option>
            <option value="bars" ${this._config.combine_style === 'bars' || !this._config.combine_style ? 'selected' : ''}>Bars</option>
            <option value="dots" ${this._config.combine_style === 'dots' ? 'selected' : ''}>Dots</option>
          </select>
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="combine_background_mode">Combined background</label>
          <select id="combine_background_mode" data-field="combine_background_mode">
            <option value="neutral" ${this._combineBackgroundMode === 'neutral' ? 'selected' : ''}>Neutral</option>
            <option value="primary" ${this._combineBackgroundMode === 'primary' ? 'selected' : ''}>Primary</option>
            <option value="hex" ${this._combineBackgroundMode === 'hex' ? 'selected' : ''}>Hex</option>
          </select>
        </div>
      </div>
      ${this._combineBackgroundMode === 'hex' ? `
      <div class="field-row">
        <div class="field field-inline">
          <label for="combine_background_hex">Combined background hex value</label>
          <input id="combine_background_hex" data-field="combine_background_hex" type="text" value="${this.escapeHtml(this._combineBackgroundHexDraft || '#FFFFFF')}" placeholder="#RRGGBB">
        </div>
      </div>
      ` : ''}
      <div class="field-row">
        <div class="field field-inline">
          <label for="combine_calendars_width">Combined indicator width (px)</label>
          <input id="combine_calendars_width" data-field="combine_calendars_width" data-type="number" type="number" min="1" value="${Number(this._config.combine_calendars_width ?? this.getEditorDefaultValue('combine_calendars_width'))}">
        </div>
      </div>
      ` : ''}
    `);

    const managementSection = this.renderSection('Event management', `
      <div class="boolean-list">
        <label><input type="checkbox" data-field="enable_event_management" ${this._config.enable_event_management !== false ? 'checked' : ''}> Enable event management</label>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="event_modal_size">Event modal size</label>
          <select id="event_modal_size" data-field="event_modal_size">
            <option value="narrow" ${this._config.event_modal_size === 'narrow' ? 'selected' : ''}>Narrow</option>
            <option value="medium" ${this._config.event_modal_size === DEFAULT_EVENT_MODAL_SIZE || !this._config.event_modal_size ? 'selected' : ''}>Medium</option>
            <option value="wide" ${this._config.event_modal_size === 'wide' ? 'selected' : ''}>Wide</option>
            <option value="full" ${this._config.event_modal_size === 'full' ? 'selected' : ''}>Full</option>
          </select>
        </div>
      </div>
      ${this.renderSubSection('Read-only calendars', `<div class="list-checkbox-grid">${this.renderCalendarListCheckboxes('readonly_calendars', { label: 'read-only calendars' })}</div>`)}
      ${this.renderSubSection('Hide header badges for calendars', `<div class="list-checkbox-grid">${this.renderCalendarListCheckboxes('hide_badge_calendars', { label: 'hidden header badges calendars' })}</div>`)}
      ${this.renderSubSection('Calendars hidden by default', `<div class="list-checkbox-grid">${this.renderCalendarListCheckboxes('default_hidden_calendars', { label: 'calendars hidden by default' })}</div>`)}
      ${this.renderSubSection('Virtual calendars', this.renderVirtualCalendarsEditor())}
    `);

    const localeSection = this.renderSection('Localization & preferences', `
      <div class="field-row">
        <div class="field field-inline">
          <label for="language">Language code</label>
          <input id="language" data-field="language" type="text" value="${this._config.language || ''}" placeholder="en, fr, de...">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="locale">Locale override</label>
          <input id="locale" data-field="locale" type="text" value="${this._config.locale || ''}" placeholder="en-US">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="header_time_sensor">Header time sensor</label>
          <input id="header_time_sensor" data-field="header_time_sensor" type="text" value="${this._config.header_time_sensor || ''}" placeholder="sensor.current_time">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="header_weather_sensor">Header weather sensor</label>
          <input id="header_weather_sensor" data-field="header_weather_sensor" type="text" value="${this._config.header_weather_sensor || ''}" placeholder="weather.home">
        </div>
      </div>
      <label class="checkbox-row">
        <input type="checkbox" data-field="show_daily_weather_forecast" ${this._config.show_daily_weather_forecast !== false ? 'checked' : ''}>
        Show daily weather forecasts
      </label>
      <div class="field field-inline">
        <label for="preference_storage_key">Preference storage key</label>
        <input id="preference_storage_key" data-field="preference_storage_key" type="text" value="${this._config.preference_storage_key || ''}" placeholder="Optional custom key">
      </div>
    `);

    const staleResourceDetection = detectStaleSkylightResource();
    const staleResourceDiagnostics = staleResourceDetection.detected ? `
      <p class="helper"><strong>Old Skylight resource detected:</strong> ${this.escapeHtml(staleResourceDetection.staleUrl)}</p>
      <p class="helper">Remove the old resource from Settings → Dashboards → Resources and keep /hacsfiles/daylight-calendar-card/skylight-calendar-card.js. HACS showing the latest version confirms the file is installed, but not that this dashboard loaded the current frontend resource.</p>
      <p class="helper"><a href="${STALE_RESOURCE_TROUBLESHOOTING_URL}" target="_blank" rel="noreferrer">Troubleshooting guide</a></p>
    ` : '';

    const diagnosticsSection = this.renderSection('About / Diagnostics', `
      <p class="helper">Daylight Calendar Card</p>
      <p class="helper">Loaded version: ${this.escapeHtml(getDaylightCalendarCardVersion())}</p>
      <p class="helper">Resource file: skylight-calendar-card.js</p>
      <p class="helper">If this version does not match the version shown in HACS, Home Assistant may be loading a cached or stale resource.</p>
      <div class="diagnostic-action">
        <button type="button" data-event-cache-action="flush">Flush event cache</button>
        <p class="helper">Clears persistent Daylight calendar event snapshots only. Hidden calendars and custom event colors are not changed.</p>
        ${this._eventCacheFlushStatus ? `<p class="helper">${this.escapeHtml(this._eventCacheFlushStatus)}</p>` : ''}
      </div>
      ${staleResourceDiagnostics}
    `);

    this.innerHTML = `
      <style>
        .card-config {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 8px 0;
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .field.field-inline {
          display: grid;
          grid-template-columns: minmax(180px, 260px) 1fr;
          align-items: center;
          gap: 8px;
        }

        .field-row {
          display: grid;
          gap: 8px;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        }

        .field label {
          font-weight: 500;
          color: var(--primary-text-color);
        }

        .field input,
        .field select,
        .field textarea {
          padding: 8px;
          border: 1px solid var(--divider-color);
          border-radius: 6px;
          font: inherit;
          color: var(--primary-text-color);
          background: var(--card-background-color);
        }

        .field textarea {
          min-height: 70px;
          resize: vertical;
        }

        .weekday-grid {
          display: grid;
          grid-template-columns: repeat(7, minmax(0, 1fr));
          gap: 6px;
          align-items: center;
          border: 1px solid var(--divider-color);
          border-radius: 6px;
          padding: 8px;
          background: var(--card-background-color);
        }

        .weekday-label {
          text-align: center;
          font-weight: 500;
          color: var(--secondary-text-color);
          font-size: 0.85rem;
        }

        .weekday-checkbox-wrap {
          display: flex;
          justify-content: center;
        }

        .map-grid {
          display: grid;
          gap: 8px;
        }

        .map-row {
          display: grid;
          grid-template-columns: minmax(160px, 220px) 1fr;
          gap: 8px;
          align-items: center;
        }

        .list-checkbox-grid {
          display: grid;
          gap: 8px;
        }

        .list-checkbox-row {
          display: grid;
          grid-template-columns: minmax(160px, 220px) 1fr;
          gap: 8px;
          align-items: center;
          font-weight: 400;
        }

        .list-checkbox-row input[type="checkbox"] {
          justify-self: end;
        }

        .virtual-calendars-editor {
          display: grid;
          gap: 10px;
        }

        .virtual-calendar-card {
          border: 1px solid var(--divider-color);
          border-radius: 8px;
          padding: 10px;
          background: var(--card-background-color);
          display: grid;
          gap: 10px;
        }

        .virtual-calendar-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        .virtual-calendar-actions {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }

        .virtual-calendar-actions button,
        .secondary-action {
          border: 1px solid var(--divider-color);
          background: var(--card-background-color);
          border-radius: 6px;
          padding: 6px 10px;
          cursor: pointer;
          color: var(--primary-text-color);
          font: inherit;
        }

        .virtual-calendar-actions button:disabled {
          cursor: default;
          opacity: 0.45;
        }

        .virtual-calendar-color-row {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 8px;
          align-items: center;
        }

        .virtual-calendar-color-status {
          grid-column: 1 / -1;
          color: var(--secondary-text-color);
          font-size: 0.85rem;
        }

        .virtual-calendar-color-status.no-override {
          font-style: italic;
        }

        .virtual-calendar-entities {
          border: 1px solid var(--divider-color);
          border-radius: 6px;
          padding: 8px;
        }

        .legacy-entity-row {
          color: var(--secondary-text-color);
        }

        .legacy-entity-row em {
          font-size: 0.85rem;
        }

        .validation-message {
          color: var(--error-color, #db4437);
          font-size: 0.85rem;
          margin: 2px 0 0;
        }

        input[aria-invalid="true"] {
          border-color: var(--error-color, #db4437);
        }

        .color-picker-wrap {
          display: inline-flex;
          align-items: center;
        }

        .selected-color-swatch {
          width: 26px;
          height: 26px;
          border-radius: 6px;
          border: 1px solid var(--divider-color);
          background: var(--selected-color);
          cursor: pointer;
          padding: 0;
          display: inline-block;
        }

        .color-picker-dialog {
          display: none;
          position: fixed;
          inset: 0;
          z-index: 1000;
        }

        .color-picker-dialog.show {
          display: block;
        }

        .color-picker-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
        }

        .color-picker-modal {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: min(460px, calc(100vw - 24px));
          background: var(--card-background-color);
          border-radius: 12px;
          padding: 16px;
          box-shadow: 0 8px 26px rgba(0, 0, 0, 0.25);
          display: grid;
          gap: 12px;
        }

        .map-label {
          font-weight: 500;
          color: var(--primary-text-color);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .config-section {
          border: 1px solid var(--divider-color);
          border-radius: 6px;
          background: color-mix(in srgb, var(--card-background-color) 96%, var(--primary-text-color) 4%);
        }

        .config-section summary {
          cursor: pointer;
          padding: 10px;
          font-weight: 600;
          list-style: none;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .config-section summary::before,
        .config-subsection summary::before {
          content: '›';
          font-size: 1.2rem;
          line-height: 1;
          transform: rotate(0deg);
          transition: transform 120ms ease;
          color: var(--secondary-text-color);
        }

        .config-section[open] > summary::before,
        .config-subsection[open] > summary::before {
          transform: rotate(90deg);
        }

        .config-section summary::-webkit-details-marker {
          display: none;
        }

        .section-content {
          border-top: 1px solid var(--divider-color);
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .config-subsection {
          border: 1px solid var(--divider-color);
          border-radius: 6px;
          background: var(--card-background-color);
        }

        .config-subsection summary {
          cursor: pointer;
          padding: 8px 10px;
          font-weight: 600;
          list-style: none;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .config-subsection summary::-webkit-details-marker {
          display: none;
        }

        .subsection-content {
          border-top: 1px solid var(--divider-color);
          padding: 10px;
        }

        .entity-list,
        .boolean-list {
          display: grid;
          gap: 4px;
          border: 1px solid var(--divider-color);
          border-radius: 6px;
          padding: 8px;
          background: var(--card-background-color);
        }

        .entity-list {
          max-height: 200px;
          overflow: auto;
        }

        .entity-list label,
        .boolean-list label {
          font-weight: 400;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .helper {
          margin: 0;
          color: var(--secondary-text-color);
          font-size: 0.85rem;
        }
      </style>
      <div class="card-config">
        <div class="field field-inline">
          <label for="title">Title</label>
          <input id="title" data-field="title" type="text" value="${this._config.title || ''}" placeholder="Family Calendar">
        </div>

        <div class="field">
          <label for="default_view">Default view</label>
          <select id="default_view" data-field="default_view">
            <option value="month" ${this.normalizeDefaultViewForEditor(this._config.default_view) === 'month' ? 'selected' : ''}>Month</option>
            <option value="week-compact" ${this.normalizeDefaultViewForEditor(this._config.default_view) === 'week-compact' ? 'selected' : ''}>Week</option>
            <option value="week-standard" ${this.normalizeDefaultViewForEditor(this._config.default_view) === 'week-standard' ? 'selected' : ''}>Schedule</option>
            <option value="agenda" ${this.normalizeDefaultViewForEditor(this._config.default_view) === 'agenda' ? 'selected' : ''}>Agenda</option>
          </select>
        </div>

        <div class="field">
          <label>Calendars</label>
          <div class="entity-list" id="entity-list"></div>
          <p class="helper">Select one or more calendar entities to display.</p>
        </div>

        ${displayLayoutSection}
        ${colorStylingSection}
        ${backgroundSection}
        ${eventSection}
        ${managementSection}
        ${localeSection}
        ${diagnosticsSection}
      </div>
      ${this.renderColorPickerDialog()}
    `;

    this.refreshCalendarEntities();

    this.querySelectorAll('[data-field]').forEach((input) => {
      const eventName = input.type === 'text' ? 'input' : 'change';
      input.addEventListener(eventName, (event) => this.handleChange(event));
    });

    this.querySelectorAll('[data-map-field]').forEach((input) => {
      input.addEventListener('change', (event) => this.handleChange(event));
    });

    this.querySelectorAll('[data-list-field]').forEach((input) => {
      input.addEventListener('change', (event) => this.handleChange(event));
    });

    this.querySelectorAll('[data-weekday]').forEach((input) => {
      input.addEventListener('change', (event) => this.handleChange(event));
    });

    this.querySelectorAll('[data-virtual-calendar-action]').forEach((button) => {
      button.addEventListener('click', (event) => this.handleVirtualCalendarAction(event));
    });

    this.querySelectorAll('[data-event-cache-action="flush"]').forEach((button) => {
      button.addEventListener('click', () => this.handleFlushEventCache());
    });

    this.querySelectorAll('[data-virtual-calendar-field]').forEach((input) => {
      input.addEventListener('change', (event) => this.handleVirtualCalendarInput(event));
    });

    this.querySelectorAll('[data-virtual-calendar-entity]').forEach((input) => {
      input.addEventListener('change', (event) => this.handleVirtualCalendarEntityChange(event));
    });

    this.querySelectorAll('[data-color-trigger]').forEach((trigger) => {
      trigger.addEventListener('click', () => this.openColorPicker(trigger.dataset.colorField, trigger.dataset.colorMapKey || null));
    });

    const picker = this.querySelector('daylight-color-picker');
    if (picker) {
      picker.addEventListener('color-change', (event) => {
        this._colorPickerState.color = event.detail.color;
      });
      picker.addEventListener('color-cancel', () => this.closeColorPicker());
      picker.addEventListener('color-confirm', (event) => this.applyColorPickerColor(event.detail.color));
    }

    this.querySelectorAll('[data-close-color-picker]').forEach((button) => {
      button.addEventListener('click', () => this.closeColorPicker());
    });

    this._rendered = true;
  }

  async handleFlushEventCache() {
    const cleared = await clearAllEventCacheSnapshots();
    this._eventCacheFlushStatus = cleared
      ? 'Event cache cleared. The card will load fresh calendar data.'
      : 'Event cache is unavailable or could not be cleared; normal loading is unaffected.';
    window.dispatchEvent(new CustomEvent('daylight-calendar-card-flush-event-cache'));
    this.render();
  }

  refreshCalendarEntities() {
    const entityListContainer = this.querySelector('#entity-list');
    if (!entityListContainer) return;

    const calendarEntities = this.getCalendarEntities();
    const nextKey = calendarEntities.join('|');

    if (this._lastCalendarEntitiesKey === nextKey && entityListContainer.childElementCount > 0) {
      const selectedEntities = new Set(this._config.entities || []);
      entityListContainer.querySelectorAll('input[data-field="entity"]').forEach((checkbox) => {
        checkbox.checked = selectedEntities.has(checkbox.value);
      });
      return;
    }

    this._lastCalendarEntitiesKey = nextKey;
    const selectedEntities = new Set(this._config.entities || []);

    if (calendarEntities.length === 0) {
      entityListContainer.innerHTML = '<p class="helper">No calendar entities found yet.</p>';
      return;
    }

    entityListContainer.innerHTML = calendarEntities
      .map((entityId) => {
        const friendlyName = this._hass?.states?.[entityId]?.attributes?.friendly_name || entityId;
        const checked = selectedEntities.has(entityId) ? 'checked' : '';
        return `<label><input type="checkbox" data-field="entity" value="${entityId}" ${checked}> ${friendlyName}</label>`;
      })
      .join('');

    entityListContainer.querySelectorAll('input[data-field="entity"]').forEach((input) => {
      input.addEventListener('change', (event) => this.handleChange(event));
    });
  }

  updateFieldValues() {
    const titleInput = this.querySelector('input[data-field="title"]');
    if (titleInput && document.activeElement !== titleInput) {
      titleInput.value = this._config.title || '';
    }

    const defaultView = this.querySelector('select[data-field="default_view"]');
    if (defaultView && document.activeElement !== defaultView) {
      defaultView.value = this.normalizeDefaultViewForEditor(this._config.default_view);
    }

    const firstDayOfWeek = this.querySelector('select[data-field="first_day_of_week"]');
    if (firstDayOfWeek && document.activeElement !== firstDayOfWeek) {
      firstDayOfWeek.value = String(Number(this._config.first_day_of_week ?? 0));
    }

    this.querySelectorAll('input[type="checkbox"][data-field]').forEach((checkbox) => {
      if (checkbox.dataset.field === 'enable_event_management') {
        checkbox.checked = this._config.enable_event_management !== false;
        return;
      }
      checkbox.checked = !!this._config[checkbox.dataset.field];
    });

    this.querySelectorAll('input[type="checkbox"][data-list-field]').forEach((checkbox) => {
      const listField = checkbox.dataset.listField;
      checkbox.checked = this.getListFieldValue(listField).includes(checkbox.value);
    });

    this.querySelectorAll('input[data-type="number"], input[data-type="nullable-number"], input[data-type="list"], input[data-field="language"], input[data-field="locale"], input[data-field="header_time_sensor"], input[data-field="header_weather_sensor"], input[data-field="preference_storage_key"], input[data-field="background_image_url"], input[data-field="background_image_size"], input[data-field="background_image_position"], input[data-field="background_image_repeat"]').forEach((input) => {
      if (document.activeElement === input) return;
      const field = input.dataset.field;
      const type = input.dataset.type;
      if (type === 'list') input.value = this.getListInputValue(field);
      else if (type === 'nullable-number') input.value = this._config[field] ?? '';
      else if (type === 'number') input.value = Number(this._config[field] ?? this.getEditorDefaultValue(field));
      else input.value = this._config[field] || '';
    });

    this.querySelectorAll('input[type="checkbox"][data-weekday]').forEach((checkbox) => {
      const weekday = Number(checkbox.dataset.weekday);
      checkbox.checked = this.getListFieldValue('week_days').includes(weekday);
    });

    this.querySelectorAll('select[data-field]').forEach((select) => {
      if (document.activeElement === select) return;
      const field = select.dataset.field;
      if (field === 'default_view') return;
      if (field === 'first_day_of_week') return;
      if (field === 'week_number_prefix_mode') {
        select.value = this.getWeekNumberPrefixMode();
        return;
      }
      if (field === 'event_calendar_bubble_mode') {
        select.value = this.getEventCalendarBubbleMode();
        return;
      }

      if (field === 'combine_background_mode') {
        select.value = this._combineBackgroundMode;
        return;
      }
      select.value = this._config[field] || '';
    });

    const combineBackgroundHexInput = this.querySelector('input[data-field="combine_background_hex"]');
    if (combineBackgroundHexInput && document.activeElement !== combineBackgroundHexInput) {
      combineBackgroundHexInput.value = this._combineBackgroundHexDraft || '#FFFFFF';
    }

    const headerColorTextInput = this.querySelector('input[data-field="header_color_text"]');
    if (headerColorTextInput && document.activeElement !== headerColorTextInput) {
      headerColorTextInput.value = this._config.header_color || '';
    }

    const headerTextColorTextInput = this.querySelector('input[data-field="header_text_color_text"]');
    if (headerTextColorTextInput && document.activeElement !== headerTextColorTextInput) {
      headerTextColorTextInput.value = this._config.header_text_color || '';
    }

    const gridColorTextInput = this.querySelector('input[data-field="grid_color_text"]');
    if (gridColorTextInput && document.activeElement !== gridColorTextInput) {
      gridColorTextInput.value = this._config.grid_color || '';
    }

    this.querySelectorAll('[data-map-field]').forEach((input) => {
      if (document.activeElement === input) return;
      const mapField = input.dataset.mapField;
      const mapKey = input.dataset.mapKey;
      const value = this.getMapFieldValue(mapField)[mapKey] || '';
      input.value = value;
    });

    this.querySelectorAll('[data-virtual-calendar-field]').forEach((input) => {
      if (document.activeElement === input) return;
      const index = Number(input.dataset.virtualCalendarIndex);
      const field = input.dataset.virtualCalendarField;
      const virtualCalendar = this.getVirtualCalendarsForEditor()[index] || {};
      input.value = virtualCalendar[field] || '';
    });

    this.querySelectorAll('[data-virtual-calendar-entity]').forEach((checkbox) => {
      const index = Number(checkbox.dataset.virtualCalendarIndex);
      const virtualCalendar = this.getVirtualCalendarsForEditor()[index] || {};
      const entities = Array.isArray(virtualCalendar.entities) ? virtualCalendar.entities : [];
      checkbox.checked = entities.includes(checkbox.value);
    });

    this.querySelectorAll('.selected-color-swatch').forEach((swatch) => {
      const field = swatch.dataset.colorField;
      const mapKey = swatch.dataset.colorMapKey || null;
      const nextColor = this.getColorValue(field, mapKey);
      swatch.style.setProperty('--selected-color', nextColor);
    });

    this.refreshCalendarEntities();
  }

  parseList(value, { asNumbers = false } = {}) {
    const parsed = String(value || '')
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);
    if (!asNumbers) return parsed;
    return parsed
      .map((item) => Number(item))
      .filter((item) => Number.isFinite(item));
  }

  handleChange(event) {
    const field = event.target.dataset.field;
    const nextConfig = { ...this.value };

    if (field === 'week_number_prefix_mode') {
      if (event.target.value === 'default') delete nextConfig.week_number_prefix;
      else if (event.target.value === 'number_only') nextConfig.week_number_prefix = '';
      else nextConfig.week_number_prefix = typeof this._config.week_number_prefix === 'string' && this._config.week_number_prefix ? this._config.week_number_prefix : 'Week';
      this.emitConfigChanged(nextConfig);
      this.render();
      return;
    }

    if (field === 'event_calendar_bubble_mode') {
      const selectedMode = event.target.value;
      if (selectedMode === 'friendly_name') {
        nextConfig.event_calendar_friendly_name = true;
        nextConfig.hide_event_calendar_bubble = false;
      } else if (selectedMode === 'none') {
        nextConfig.event_calendar_friendly_name = false;
        nextConfig.hide_event_calendar_bubble = true;
      } else {
        nextConfig.event_calendar_friendly_name = false;
        nextConfig.hide_event_calendar_bubble = false;
      }

      this._config = nextConfig;
      this.dispatchEvent(
        new CustomEvent('config-changed', {
          detail: { config: nextConfig },
          bubbles: true,
          composed: true
        })
      );
      return;
    }

    if (field === 'combine_background_mode') {
      this._combineBackgroundMode = event.target.value;
      if (this._combineBackgroundMode === 'hex') {
        const currentHex = this.normalizeHexColor(this._config.combine_background) || this._combineBackgroundHexDraft || '#FFFFFF';
        this._combineBackgroundHexDraft = currentHex;
        nextConfig.combine_background = currentHex;
      } else {
        this._combineBackgroundHexDraft = '';
        nextConfig.combine_background = this._combineBackgroundMode;
      }

      this._config = nextConfig;
      this.render();
      this.dispatchEvent(
        new CustomEvent('config-changed', {
          detail: { config: nextConfig },
          bubbles: true,
          composed: true
        })
      );
      return;
    }

    if (field === 'combine_background_hex') {
      const normalizedHex = this.normalizeHexColor(event.target.value);
      if (normalizedHex) {
        this._combineBackgroundHexDraft = normalizedHex;
        nextConfig.combine_background = normalizedHex;
      } else {
        this._combineBackgroundHexDraft = event.target.value;
      }

      this._config = nextConfig;
      this.render();
      this.dispatchEvent(
        new CustomEvent('config-changed', {
          detail: { config: nextConfig },
          bubbles: true,
          composed: true
        })
      );
      return;
    }

    if (field === 'entity') {
      const selected = Array.from(this.querySelectorAll('input[data-field="entity"]:checked')).map((input) => input.value);
      nextConfig.entities = selected;
      this._config = nextConfig;
      this.render();
      this.dispatchEvent(
        new CustomEvent('config-changed', {
          detail: { config: nextConfig },
          bubbles: true,
          composed: true
        })
      );
      return;
    } else if (event.target.dataset.mapField) {
      const mapField = event.target.dataset.mapField;
      const mapKey = event.target.dataset.mapKey;
      const mapValue = { ...this.getMapFieldValue(mapField) };
      const nextValue = event.target.value;
      if (nextValue === '') delete mapValue[mapKey];
      else mapValue[mapKey] = nextValue;
      nextConfig[mapField] = mapValue;
    } else if (event.target.dataset.listField) {
      const listField = event.target.dataset.listField;
      const checkedValues = Array.from(this.querySelectorAll(`input[data-list-field="${listField}"]:checked`)).map((input) => input.value);
      nextConfig[listField] = checkedValues;
    } else if (event.target.dataset.weekday !== undefined) {
      const selectedWeekdays = Array.from(this.querySelectorAll('input[data-weekday]:checked'))
        .map((input) => Number(input.dataset.weekday))
        .filter((value) => Number.isFinite(value))
        .sort((a, b) => a - b);
      nextConfig.week_days = selectedWeekdays;
    } else if (event.target.type === 'checkbox') {
      nextConfig[field] = event.target.checked;
      if (field === 'background_transparent') {
        nextConfig.background_opacity = event.target.checked ? 100 : 0;
      } else if (field === 'header_background_transparent') {
        nextConfig.header_background_opacity = event.target.checked ? 100 : 0;
      }
      if (field === 'compact_height' || field === 'combine_calendars' || field === 'show_dashboard_nav_button') {
        this._config = nextConfig;
        this.render();
        this.dispatchEvent(
          new CustomEvent('config-changed', {
            detail: { config: nextConfig },
            bubbles: true,
            composed: true
          })
        );
        return;
      }
    } else if (event.target.dataset.type === 'color') {
      nextConfig[field] = event.target.value;
    } else if (event.target.dataset.type === 'color-text') {
      nextConfig.header_color = event.target.value;
    } else if (event.target.dataset.type === 'header-text-color-text') {
      nextConfig.header_text_color = event.target.value;
    } else if (event.target.dataset.type === 'grid-color-text') {
      nextConfig.grid_color = event.target.value;
    } else if (event.target.dataset.type === 'number') {
      if (event.target.value === '') {
        nextConfig[field] = this.getEditorDefaultValue(field);
        if (field === 'background_opacity') {
          nextConfig.background_transparent = false;
        }
        if (field === 'header_background_opacity') {
          nextConfig.header_background_transparent = false;
        }
      } else {
        const numericValue = Number(event.target.value);
        const parsedValue = Number.isFinite(numericValue) ? numericValue : this.getEditorDefaultValue(field);
        if (field === 'week_start_hour' || field === 'week_end_hour') {
          nextConfig[field] = Math.min(23, Math.max(0, parsedValue));
        } else if (field === 'header_background_opacity') {
          nextConfig.header_background_opacity = this.normalizeBackgroundOpacity(parsedValue, 0);
          nextConfig.header_background_transparent = nextConfig.header_background_opacity >= 100;
        } else if (field === 'background_opacity') {
          nextConfig.background_opacity = this.normalizeBackgroundOpacity(parsedValue, 0);
          nextConfig.background_transparent = nextConfig.background_opacity >= 100;
        } else if (field === 'event_tint_opacity') {
          nextConfig.event_tint_opacity = this.normalizeBackgroundOpacity(parsedValue, DEFAULT_EVENT_TINT_OPACITY);
        } else {
          nextConfig[field] = parsedValue;
        }
      }
    } else if (event.target.dataset.type === 'nullable-number') {
      if (event.target.value === '') {
        nextConfig[field] = null;
      } else {
        const numericValue = Number(event.target.value);
        nextConfig[field] = Number.isFinite(numericValue) ? numericValue : null;
      }
    } else if (event.target.dataset.type === 'list') {
      nextConfig[field] = this.parseList(event.target.value);
    } else {
      nextConfig[field] = event.target.value;
      if (field === 'event_color_mode' || field === 'past_event_mode') {
        this._config = nextConfig;
        this.render();
        this.dispatchEvent(
          new CustomEvent('config-changed', {
            detail: { config: nextConfig },
            bubbles: true,
            composed: true
          })
        );
        return;
      }
    }

    this._config = nextConfig;
    this.dispatchEvent(
      new CustomEvent('config-changed', {
        detail: { config: nextConfig },
        bubbles: true,
        composed: true
      })
    );
  }
}

export class LegacySkylightCalendarCardEditor extends SkylightCalendarCardEditor {}

export function registerDaylightCalendarCardEditor() {
  customElements.define('daylight-calendar-card-editor', SkylightCalendarCardEditor);
  customElements.define('skylight-calendar-card-editor', LegacySkylightCalendarCardEditor);
}
