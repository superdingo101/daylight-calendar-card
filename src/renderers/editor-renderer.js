import { EDITOR_WEEKDAY_OPTIONS } from '../editor/editor-schema.js';

export function renderEditorSection({ title, content, disclosureKey, open = false }) {
  const openAttr = open ? 'open' : '';
  return `
      <details class="config-section" data-disclosure-key="${disclosureKey}" ${openAttr}>
        <summary>${title}</summary>
        <div class="section-content">${content}</div>
      </details>
    `;
}

export function renderEditorSubSection({ title, content, disclosureKey, open = false }) {
  const openAttr = open ? 'open' : '';
  return `
      <details class="config-subsection" data-disclosure-key="${disclosureKey}" ${openAttr}>
        <summary>${title}</summary>
        <div class="subsection-content">${content}</div>
      </details>
    `;
}

export function renderEditorColorInputControl({ id, field, mapKey = null, value, toColorInputValue }) {
  const colorValue = toColorInputValue(value);
  const triggerAttributes = mapKey
    ? `data-color-trigger="true" data-color-field="${field}" data-color-map-key="${mapKey}"`
    : `data-color-trigger="true" data-color-field="${field}"`;

  return `
      <div class="color-picker-wrap">
        <button id="${id}" class="selected-color-swatch" data-color-field="${field}" ${mapKey ? `data-color-map-key="${mapKey}"` : ''} ${triggerAttributes} style="--selected-color: ${colorValue};" title="Choose color" type="button"></button>
      </div>
    `;
}

export function renderEditorWeekdayCheckboxes({ selectedWeekdays }) {
  const days = EDITOR_WEEKDAY_OPTIONS;

  return `
      <div class="weekday-grid" role="group" aria-label="Week days">
        ${days.map((day) => `<span class="weekday-label">${day}</span>`).join('')}
        ${days.map((_, index) => `
          <label class="weekday-checkbox-wrap" aria-label="${days[index]}">
            <input type="checkbox" data-weekday="${index}" ${selectedWeekdays.has(index) ? 'checked' : ''}>
          </label>
        `).join('')}
      </div>
    `;
}
