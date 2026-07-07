export const DEFAULT_COLOR_PICKER_PRESETS = ['#ffffff', '#ff0000', '#ffff00', '#00ff00', '#000000', '#00ffff', '#0000ff', '#ff00ff'];

export function normalizePickerHexColor(value, fallback = null) {
  const raw = String(value || '').trim();
  if (!raw) return fallback;
  const withHash = raw.startsWith('#') ? raw : `#${raw}`;
  const short = withHash.match(/^#([0-9a-fA-F]{3})$/);
  if (short) {
    const [r, g, b] = short[1].split('');
    return `#${r}${r}${g}${g}${b}${b}`.toLowerCase();
  }
  return /^#[0-9a-fA-F]{6}$/.test(withHash) ? withHash.toLowerCase() : fallback;
}

export function hexToHsv(hex) {
  const normalizedHex = normalizePickerHexColor(hex, '#3f51b5').replace('#', '');
  const r = parseInt(normalizedHex.slice(0, 2), 16) / 255;
  const g = parseInt(normalizedHex.slice(2, 4), 16) / 255;
  const b = parseInt(normalizedHex.slice(4, 6), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  let h = 0;
  if (delta !== 0) {
    if (max === r) h = ((g - b) / delta) % 6;
    else if (max === g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;
    h = Math.round(h * 60);
    if (h < 0) h += 360;
  }
  return { h, s: max === 0 ? 0 : delta / max, v: max };
}

export function hsvToHex(h, s, v) {
  const hue = ((h % 360) + 360) % 360;
  const sat = Math.max(0, Math.min(1, s));
  const val = Math.max(0, Math.min(1, v));
  const c = val * sat;
  const x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
  const m = val - c;
  let r = 0;
  let g = 0;
  let b = 0;
  if (hue < 60) [r, g, b] = [c, x, 0];
  else if (hue < 120) [r, g, b] = [x, c, 0];
  else if (hue < 180) [r, g, b] = [0, c, x];
  else if (hue < 240) [r, g, b] = [0, x, c];
  else if (hue < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  const toHex = (n) => Math.round((n + m) * 255).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export class DaylightColorPicker extends HTMLElement {
  static get observedAttributes() { return ['value', 'title', 'confirm-label', 'cancel-label', 'show-actions']; }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._value = '#3f51b5';
    this._h = 0;
    this._s = 1;
    this._v = 1;
    this._presets = DEFAULT_COLOR_PICKER_PRESETS;
    this._dragging = false;
  }
  connectedCallback() { this.value = this.getAttribute('value') || this._value; this.render(); }
  attributeChangedCallback(name, oldValue, newValue) { if (oldValue !== newValue) { if (name === 'value') this.value = newValue; if (this.isConnected) this.render(); } }
  get value() { return this._value; }
  set value(nextValue) { const normalized = normalizePickerHexColor(nextValue, this._value || '#3f51b5'); const hsv = hexToHsv(normalized); this._value = normalized; this._h = hsv.h; this._s = hsv.s; this._v = hsv.v; this.syncUi(); }
  get presets() { return this._presets; }
  set presets(values) { this._presets = Array.isArray(values) && values.length ? values.map((color) => normalizePickerHexColor(color)).filter(Boolean) : DEFAULT_COLOR_PICKER_PRESETS; if (this.isConnected) this.render(); }
  get showActions() { return this.getAttribute('show-actions') !== 'false'; }
  setColorFromHsv(h, s, v, { emit = true } = {}) { this._h = h; this._s = Math.max(0, Math.min(1, s)); this._v = Math.max(0.05, Math.min(1, v)); this._value = hsvToHex(this._h, this._s, this._v); this.syncUi(); if (emit) this.emitColorChange(); }
  setColorFromHex(value, { emit = true } = {}) { const normalized = normalizePickerHexColor(value); if (!normalized) return false; const hsv = hexToHsv(normalized); this._value = normalized; this._h = hsv.h; this._s = hsv.s; this._v = hsv.v; this.syncUi(); if (emit) this.emitColorChange(); return true; }
  emitColorChange() { this.dispatchEvent(new CustomEvent('color-change', { detail: { color: this._value }, bubbles: true, composed: true })); }
  syncUi() {
    const root = this.shadowRoot; if (!root) return;
    const marker = root.querySelector('.color-picker-wheel-marker');
    const brightnessInput = root.querySelector('#color-picker-brightness');
    const hexInput = root.querySelector('#color-picker-hex');
    const preview = root.querySelector('.color-picker-preview');
    const valueText = root.querySelector('.color-picker-value');
    if (marker) { const angle = ((this._h - 90) * Math.PI) / 180; marker.style.left = `${50 + Math.cos(angle) * this._s * 50}%`; marker.style.top = `${50 + Math.sin(angle) * this._s * 50}%`; }
    if (brightnessInput) brightnessInput.value = String(Math.round(this._v * 100));
    if (hexInput && root.activeElement !== hexInput) hexInput.value = this._value;
    if (preview) preview.style.background = this._value;
    if (valueText) valueText.textContent = this._value;
  }
  updateFromWheelEvent(event) { const wheel = event.currentTarget; const rect = wheel.getBoundingClientRect(); const x = event.clientX - rect.left - rect.width / 2; const y = event.clientY - rect.top - rect.height / 2; const radius = rect.width / 2; const distance = Math.min(Math.sqrt(x * x + y * y), radius); const saturation = radius > 0 ? distance / radius : 0; const hue = (Math.atan2(y, x) * 180) / Math.PI + 90; this.setColorFromHsv(hue < 0 ? hue + 360 : hue, saturation, this._v); }
  bindEvents() {
    const root = this.shadowRoot;
    const wheel = root.querySelector('#color-picker-wheel');
    if (wheel) { wheel.addEventListener('pointerdown', (event) => { this._dragging = true; wheel.setPointerCapture?.(event.pointerId); this.updateFromWheelEvent(event); }); wheel.addEventListener('pointermove', (event) => { if (this._dragging) this.updateFromWheelEvent(event); }); const stopDragging = () => { this._dragging = false; }; wheel.addEventListener('pointerup', stopDragging); wheel.addEventListener('pointercancel', stopDragging); wheel.addEventListener('pointerleave', stopDragging); }
    root.querySelectorAll('[data-color-preset]').forEach((preset) => preset.addEventListener('click', () => this.setColorFromHex(preset.dataset.colorPreset)));
    root.querySelector('#color-picker-brightness')?.addEventListener('input', (event) => this.setColorFromHsv(this._h, this._s, Number(event.target.value) / 100));
    const hexInput = root.querySelector('#color-picker-hex');
    if (hexInput) { const syncHex = () => this.setColorFromHex(hexInput.value); hexInput.addEventListener('input', syncHex); hexInput.addEventListener('change', syncHex); }
    root.querySelector('[data-color-cancel]')?.addEventListener('click', () => this.dispatchEvent(new CustomEvent('color-cancel', { detail: { color: this._value }, bubbles: true, composed: true })));
    root.querySelector('[data-color-confirm]')?.addEventListener('click', () => this.dispatchEvent(new CustomEvent('color-confirm', { detail: { color: this._value }, bubbles: true, composed: true })));
  }
  render() {
    if (!this.shadowRoot) return;
    const title = this.getAttribute('title') || 'Select color'; const confirmLabel = this.getAttribute('confirm-label') || 'Set'; const cancelLabel = this.getAttribute('cancel-label') || 'Cancel';
    this.shadowRoot.innerHTML = `<style>:host{display:block;color:var(--primary-text-color)}.color-picker-modal{display:grid;gap:12px}.color-picker-title{font-size:1.8rem;font-weight:600}.color-picker-wheel{position:relative;width:min(260px,calc(100vw - 64px));max-width:100%;aspect-ratio:1;border-radius:50%;margin:0 auto;touch-action:none;background:radial-gradient(circle at center,#ffffff 0%,rgba(255,255,255,.85) 16%,rgba(255,255,255,0) 58%),conic-gradient(from 0deg,#ff0000,#ff7f00,#ffff00,#00ff00,#00ffff,#0000ff,#8b00ff,#ff00ff,#ff0000)}.color-picker-wheel-marker{position:absolute;width:16px;height:16px;border-radius:50%;border:2px solid white;box-shadow:0 0 0 1px rgba(0,0,0,.5);transform:translate(-50%,-50%);pointer-events:none}.color-picker-controls{display:grid;gap:6px}.color-picker-controls input[type="text"]{padding:8px;border:1px solid var(--divider-color);border-radius:6px;font:inherit;color:var(--primary-text-color);background:var(--card-background-color);min-width:0}.color-picker-presets{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.color-preset{width:100%;aspect-ratio:1;border-radius:50%;border:2px solid rgba(0,0,0,.08);cursor:pointer;min-height:36px}.color-picker-selected-row{display:flex;align-items:center;gap:10px;flex-wrap:wrap}.color-picker-preview{width:24px;height:24px;border-radius:4px;border:1px solid var(--divider-color)}.color-picker-value{font-family:monospace}.color-picker-actions{display:flex;justify-content:flex-end;gap:10px}.color-picker-actions button{border:1px solid var(--divider-color);background:var(--card-background-color);border-radius:6px;padding:8px 12px;cursor:pointer;color:var(--primary-text-color)}.color-picker-actions button.primary{background:var(--primary-color);color:white;border-color:transparent}</style><div class="color-picker-modal" role="group" aria-label="${title}"><div class="color-picker-title">${title}</div><div class="color-picker-wheel" id="color-picker-wheel"><div class="color-picker-wheel-marker"></div></div><div class="color-picker-controls"><label for="color-picker-brightness">Color brightness</label><input id="color-picker-brightness" type="range" min="5" max="100" step="1"></div><div class="color-picker-controls"><label for="color-picker-hex">Hex color</label><input id="color-picker-hex" type="text" placeholder="#3f51b5"></div><div class="color-picker-presets">${this._presets.map((color) => `<button type="button" class="color-preset" data-color-preset="${color}" style="background:${color}"></button>`).join('')}</div><div class="color-picker-selected-row"><span>Chosen color</span><span class="color-picker-preview"></span><span class="color-picker-value"></span></div>${this.showActions ? `<div class="color-picker-actions"><button type="button" data-color-cancel>${cancelLabel}</button><button type="button" class="primary" data-color-confirm>${confirmLabel}</button></div>` : ''}</div>`;
    this.bindEvents(); this.syncUi();
  }
}

if (!customElements.get('daylight-color-picker')) customElements.define('daylight-color-picker', DaylightColorPicker);
