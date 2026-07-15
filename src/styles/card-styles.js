export function getCardStyles() {
  return `
      daylight-calendar-card,
      skylight-calendar-card {
        display: block;
        width: 100%;
        height: 100%;
        min-height: 0;
      }

      daylight-calendar-card.event-modal-open,
      skylight-calendar-card.event-modal-open {
        position: relative;
        z-index: 2147483000;
        overflow: visible;
      }

      .calendar-container {
        position: relative;
        border-radius: var(--ha-card-border-radius, 12px);
        border: var(--ha-card-border-width, 0) solid var(--ha-card-border-color, transparent);
        overflow: hidden;
        box-shadow: var(--ha-card-box-shadow, 0 2px 8px rgba(0,0,0,0.1));
        width: 100%;
        height: 100%;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        color-scheme: light;
        font-family: var(--ha-font-family-body, var(--paper-font-body1_-_font-family, inherit));
        --schedule-hour-line-color: #d1d5db;
      }

      .calendar-container::after {
        content: '';
        position: absolute;
        inset: 0;
        z-index: 0;
        background-image: var(--calendar-background-image, none);
        background-size: var(--calendar-background-size, cover);
        background-position: var(--calendar-background-position, center);
        background-repeat: var(--calendar-background-repeat, no-repeat);
        opacity: var(--calendar-background-image-opacity, 0);
        pointer-events: none;
      }

      .calendar-container > * {
        position: relative;
        z-index: 1;
      }

      .calendar-container,
      .calendar-container input,
      .calendar-container select,
      .calendar-container textarea,
      .calendar-container button {
        color-scheme: light;
      }

      .calendar-container input,
      .calendar-container select,
      .calendar-container textarea,
      .calendar-container button {
        font-family: inherit;
      }

      .header,
      .header-compact {
        position: relative;
        flex: 0 0 auto;
        background: transparent;
        color: var(--header-text-color, white);
      }

      .header::before,
      .header-compact::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: 0;
        background: var(--header-background-base, var(--header-background, var(--primary-color)));
        opacity: var(--header-background-alpha, 1);
        pointer-events: none;
      }

      .header > *,
      .header-compact > * {
        position: relative;
        z-index: 1;
      }

      .header {
        padding: 20px 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
      }

      .header-compact {
        padding: 16px 24px;
      }

      .event-refresh-warning {
        margin: 8px 12px 0;
        padding: 8px 10px;
        border-radius: 8px;
        background: rgba(251, 191, 36, 0.18);
        border: 1px solid rgba(245, 158, 11, 0.55);
        color: var(--warning-color, #92400e);
        font-size: 13px;
        line-height: 1.35;
      }

      .calendar-body {
        position: relative;
        z-index: 1;
        flex: 1 1 auto;
        min-height: 0;
        display: flex;
        flex-direction: column;
      }

      .calendar-body::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: 0;
        background: var(--calendar-background, var(--theme-card-background, var(--ha-card-background, var(--card-background-color, #ffffff))));
        opacity: var(--calendar-background-opacity, 1);
        pointer-events: none;
      }

      .calendar-body > * {
        position: relative;
        z-index: 1;
      }

      .header-left {
        display: flex;
        align-items: center;
        gap: 16px;
      }

      .compact-header-left {
        display: flex;
        align-items: center;
        gap: 16px;
        flex-wrap: wrap;
      }

      .header-compact.is-wrapped .compact-header-left,
      .header-compact.is-wrapped .compact-header-controls {
        width: 100%;
        justify-content: center;
        align-items: center;
      }

      .header-compact.is-wrapped {
        align-items: center;
        justify-content: center;
      }

      .header-compact.is-wrapped .compact-header-left {
        justify-content: center;
        text-align: center;
        flex-wrap: wrap;
      }

      .header-compact.is-wrapped .header-title-wrap {
        justify-content: center;
        text-align: center;
      }

      .header-compact.is-wrapped .compact-header-controls {
        justify-content: center;
        flex-wrap: wrap;
        row-gap: 12px;
        column-gap: 12px;
      }

      .header-compact.is-wrapped .compact-period-controls {
        margin-left: 0;
        justify-content: center;
        flex-wrap: wrap;
        width: auto;
      }

      .header-compact.is-wrapped .today-button,
      .header-compact.is-wrapped .compact-add-event-button,
      .header-compact.is-wrapped .view-mode-select,
      .header-compact.is-wrapped .nav-button {
        padding-left: 12px;
        padding-right: 12px;
      }

      .header.is-wrapped,
      .header-compact.is-wrapped {
        background: var(--header-wrapped-background, transparent);
      }

      .header.is-wrapped .header-left,
      .header.is-wrapped .header-controls {
        justify-content: center;
      }

      .header-controls.is-wrapped .period-controls {
        margin-left: 0;
      }

      .calendar-badges-inline {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }

      .calendar-badges-inline.is-wrapped {
        justify-content: center;
      }

      .calendar-badge-inline {
        padding: 6px 12px !important;
        font-size: 12px !important;
      }

      .calendar-badge-inline .calendar-badge-icon {
        width: 20px !important;
        height: 20px !important;
        font-size: 10px !important;
      }

      .calendar-badge-inline .calendar-badge-name {
        font-size: 12px;
      }

      .calendar-badge-inline .calendar-badge-person-state {
        font-size: 10px;
      }

      .calendar-badge.hide-calendar-name {
        justify-content: center;
        width: 40px;
        height: 40px;
        padding: 0 !important;
      }

      .calendar-badge-inline.hide-calendar-name {
        width: 32px;
        height: 32px;
      }

      .calendar-badge.hide-calendar-name .calendar-badge-icon {
        width: 100% !important;
        height: 100% !important;
        border-radius: inherit;
        font-size: 16px !important;
      }

      .calendar-badge-inline.hide-calendar-name .calendar-badge-icon {
        font-size: 14px !important;
      }

      .calendar-badge.hide-calendar-name .calendar-badge-icon ha-icon {
        --mdc-icon-size: 60%;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
      }

      .header-title {
        font-size: 24px;
        font-weight: 600;
        margin: 0;
      }

      .header-title-wrap {
        display: inline-flex;
        align-items: baseline;
        gap: 10px;
        flex-wrap: wrap;
      }

      .header-time {
        font-size: 28px;
        font-weight: 500;
        opacity: 0.95;
        line-height: 1;
        white-space: nowrap;
      }

      .header-weather,
      .header-item {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 28px;
        font-weight: 500;
        opacity: 0.95;
        line-height: 1;
        white-space: nowrap;
      }

      .header-weather ha-icon,
      .header-item ha-icon {
        --mdc-icon-size: 28px;
      }

      .header-item-value {
        display: inline-block;
      }

      .add-event-button {
        background: var(--header-control-bg, rgba(255, 255, 255, 0.2));
        border: none;
        color: inherit;
        padding: 8px 16px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 13px;
        font-weight: 500;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        transition: background 0.2s;
      }

      .add-event-button:hover {
        background: var(--header-control-bg-hover, rgba(255, 255, 255, 0.3));
        border-color: var(--header-control-border-hover, rgba(255, 255, 255, 0.6));
        transform: none;
      }

      .add-event-button .icon {
        font-size: 14px;
      }

      .header-controls {
        display: flex;
        gap: 12px;
        align-items: center;
        flex-wrap: wrap;
      }

      .compact-header-controls {
        justify-content: flex-end;
      }

      .period-controls,
      .compact-period-controls {
        display: flex;
        align-items: center;
        gap: 12px;
        flex: 0 1 auto;
        margin-left: auto;
      }

      .header-controls.is-wrapped {
        justify-content: center;
      }

      .compact-header-controls.is-wrapped {
        justify-content: center;
      }

      .compact-header-controls.is-wrapped .compact-period-controls {
        margin-left: 0;
      }

      .view-mode-buttons {
        display: inline-flex;
        align-items: center;
        background: var(--header-control-bg, rgba(255, 255, 255, 0.2));
        border-radius: 8px;
        padding: 0 10px;
        margin-left: 8px;
        position: relative;
      }

      .view-mode-buttons::after {
        content: "⌄";
        font-size: 13px;
        pointer-events: none;
        margin-left: 8px;
        opacity: 0.8;
      }

      .view-mode-select {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background: transparent;
        border: none;
        color: inherit;
        padding: 8px 0;
        padding-right: 2px;
        cursor: pointer;
        font-size: 13px;
        font-weight: 500;
        line-height: 1;
        min-width: 78px;
      }

      .view-mode-select:focus {
        outline: none;
      }

      .view-mode-select option {
        color: #111827;
        background: #ffffff;
      }

      .nav-button {
        background: var(--header-control-bg, rgba(255, 255, 255, 0.2));
        border: none;
        color: inherit;
        width: 36px;
        height: 36px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s;
      }

      .dashboard-nav-button {
        background: var(--header-control-bg, rgba(255, 255, 255, 0.2));
        border: 1px solid var(--header-control-border, rgba(255, 255, 255, 0.4));
        color: inherit;
        width: 36px;
        height: 36px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 18px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s, border-color 0.2s;
        line-height: 1;
      }

      .dashboard-nav-button:hover {
        background: var(--header-control-bg-hover, rgba(255, 255, 255, 0.3));
        border-color: var(--header-control-border-hover, rgba(255, 255, 255, 0.6));
      }

      .nav-button:hover {
        background: var(--header-control-bg-hover, rgba(255, 255, 255, 0.3));
      }

      .nav-button:disabled {
        opacity: 0.45;
        cursor: not-allowed;
      }

      .nav-button:disabled:hover {
        background: var(--header-control-bg, rgba(255, 255, 255, 0.2));
      }

      .today-button {
        background: var(--header-control-bg, rgba(255, 255, 255, 0.2));
        border: none;
        color: inherit;
        padding: 8px 16px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        transition: background 0.2s;
      }

      .today-button:hover {
        background: var(--header-control-bg-hover, rgba(255, 255, 255, 0.3));
      }

      .theme-toggle {
        width: 30px;
        height: 30px;
        border-radius: 8px;
        border: 1px solid var(--header-control-border, rgba(255, 255, 255, 0.4));
        background: var(--header-control-bg, rgba(255, 255, 255, 0.2));
        color: inherit;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 14px;
        line-height: 1;
        transition: all 0.2s;
      }

      .theme-toggle:hover,
      .compact-add-event-button:hover {
        background: var(--header-control-bg-hover, rgba(255, 255, 255, 0.3));
        border-color: var(--header-control-border-hover, rgba(255, 255, 255, 0.6));
      }

      .compact-add-event-button {
        width: 30px;
        height: 30px;
        border-radius: 8px;
        border: 1px solid var(--header-control-border, rgba(255, 255, 255, 0.4));
        background: var(--header-control-bg, rgba(255, 255, 255, 0.2));
        color: inherit;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 18px;
        line-height: 1;
        transition: all 0.2s;
        padding: 0;
      }

      .month-year {
        font-size: 18px;
        font-weight: 500;
        color: inherit;
        min-width: 210px;
        text-align: center;
      }

      .calendar-container.hide-year .month-year {
        min-width: 145px;
      }

      .calendar-grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 1px;
        background: #e5e7eb;
        border-top: 1px solid #e5e7eb;
        flex: 1 1 auto;
        min-height: 0;
        overflow: auto;
      }

      .calendar-grid.month-week-numbers {
        grid-template-columns: 28px repeat(7, 1fr);
      }

      .month-week-number-header {
        background: #f9fafb;
      }

      .month-week-number-cell {
        background: #f9fafb;
        color: #6b7280;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px 0;
      }

      .month-week-number-text {
        color: inherit;
        font-size: 11px;
        font-weight: 600;
        line-height: 1;
        transform: rotate(-90deg);
        white-space: nowrap;
      }


      .calendar-grid.compact-month {
        align-items: stretch;
      }

      .calendar-grid.compact-month .day-cell {
        min-height: 0;
        overflow: visible;
      }

      .day-header {
        background: #f9fafb;
        padding: 12px 8px;
        text-align: center;
        font-weight: 600;
        font-size: 12px;
        text-transform: uppercase;
        color: #6b7280;
        letter-spacing: 0.5px;
      }

      .day-cell {
        background: white;
        min-height: 100px;
        min-width: 0;
        padding: 8px;
        position: relative;
        cursor: pointer;
        transition: background 0.2s;
      }

      .day-cell:hover {
        background: #f9fafb;
      }

      .day-cell.other-month {
        background: #fafafa;
        opacity: 0.5;
      }

      .day-cell.today {
        background: #eff6ff;
      }

      .day-cell.day-style-has-background,
      .week-day-column.day-style-has-background,
      .week-standard-day-column.day-style-has-background,
      .agenda-day-row.day-style-has-background {
        background: var(--day-conditional-background) !important;
      }

      .day-cell.day-style-has-background:hover {
        background: var(--day-conditional-background) !important;
      }

      .week-day-column.day-style-has-background .week-day-header,
      .week-standard-day-column.day-style-has-background .week-standard-day-header,
      .week-standard-day-column.day-style-has-background .all-day-events,
      .week-standard-day-column.day-style-has-background .day-time-slot,
      .agenda-day-row.day-style-has-background .agenda-day-label {
        background: transparent !important;
      }

      .day-cell.day-style-has-border,
      .week-day-column.day-style-has-border,
      .week-standard-day-column.day-style-has-border,
      .agenda-day-row.day-style-has-border {
        position: relative;
      }

      .day-cell.day-style-has-border::after,
      .week-day-column.day-style-has-border::after,
      .week-standard-day-column.day-style-has-border::after,
      .agenda-day-row.day-style-has-border::after {
        content: '';
        position: absolute;
        inset: 0;
        border: var(--day-style-border-width, 2px) solid var(--day-style-border-color, var(--divider-color, #d1d5db));
        border-radius: inherit;
        box-sizing: border-box;
        pointer-events: none;
        z-index: 2;
      }

      .day-number {
        font-size: 14px;
        font-weight: 600;
        color: #374151;
        margin-bottom: 4px;
      }

      .day-badges {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        margin-left: auto;
        max-width: 100%;
        overflow: hidden;
      }

      .day-badge {
        width: var(--dcc-day-badge-size, 30px);
        height: var(--dcc-day-badge-size, 30px);
        min-width: var(--dcc-day-badge-size, 30px);
        max-width: 100%;
        border-radius: 999px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: var(--dcc-day-badge-font-size, 12px);
        font-weight: 700;
        line-height: 1;
        background: var(--dcc-day-badge-background, var(--primary-color));
        color: var(--dcc-day-badge-color, var(--text-primary-color, #fff));
        overflow: hidden;
        box-sizing: border-box;
      }

      .day-badge-action {
        border: 0;
        padding: 0;
        font-family: inherit;
        appearance: none;
        cursor: pointer;
      }

      .day-badge.has-text {
        width: auto;
        gap: 4px;
        padding: 0 8px;
      }

      .day-badge ha-icon {
        --mdc-icon-size: calc(var(--dcc-day-badge-size, 30px) * 0.53);
        color: inherit;
        flex: 0 0 auto;
      }

      .day-badge-text {
        display: block;
        min-width: 0;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .day-header-row {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 6px;
        margin-bottom: 4px;
        min-height: 42px;
      }

      .day-header-row .day-number {
        margin-bottom: 0;
      }

      .month-day-forecast {
        display: inline-flex;
        align-items: center;
        gap: 4px;
      }

      .month-day-forecast .forecast-condition {
        font-size: 14px;
      }

      .month-day-forecast .forecast-condition ha-icon {
        --mdc-icon-size: 14px;
      }

      .month-day-forecast .forecast-temperatures {
        font-size: 12px;
        gap: 2px;
      }

      .day-cell.today .day-number {
        background: #3b82f6;
        color: white;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 4px;
      }

      .event {
        background: #3b82f6;
        color: var(--event-bubble-text-color, white);
        display: block;
        width: 100%;
        max-width: 100%;
        padding: 4px 6px 4px calc(6px + var(--combine-left-offset, 0px));
        border-radius: 4px;
        font-size: var(--event-bubble-font-size, 11px);
        line-height: 1.2;
        margin-bottom: 3px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        box-sizing: border-box;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
        font-weight: 500;
        position: relative;
        padding-bottom: calc(4px + (var(--combined-corner-bubbles, 0) * 14px));
      }

      .event:hover {
        transform: translateY(-1px);
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
      }
      .event.month-span-event {
        width: calc((100% * var(--month-event-visible-span, 1)) + ((16px + 1px) * var(--month-event-gap-count, 0)));
        max-width: none;
        z-index: 2;
      }

      .event.month-span-event.continues-prev {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      .event.month-span-event.continues-next {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }

      .month-span-event-spacer {
        visibility: hidden;
        pointer-events: none;
      }

      .month-span-event-spacer::before {
        content: "\\00a0";
      }


      .event-time {
        font-size: var(--event-time-font-size, 9px);
        opacity: 0.9;
        margin-right: 4px;
      }

      .more-events {
        font-size: 10px;
        color: #6b7280;
        margin-top: 2px;
        font-weight: 500;
        cursor: pointer;
        width: fit-content;
      }

      .more-events:hover {
        text-decoration: underline;
      }

      .week-compact-container.single-day-modal {
        grid-template-columns: 1fr;
        border-top: none;
        background: transparent;
      }

      /* Week Compact View Styles */
      .week-compact-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 1px;
        background: #e5e7eb;
        border-top: 1px solid #e5e7eb;
        flex: 1 1 auto;
        min-height: 0;
        overflow: auto;
      }

      .week-compact-container.compact-height {
        grid-auto-rows: max-content;
        align-content: start;
      }

      .week-day-column {
        background: white;
        padding: 16px 12px;
        min-height: 200px;
      }

      .week-day-header {
        text-align: center;
        margin-bottom: 12px;
        padding-bottom: 12px;
        border-bottom: 2px solid #e5e7eb;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: var(--week-compact-header-height, auto);
        box-sizing: border-box;
      }

      .week-day-header-main {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
      }

      .week-day-meta-row {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-top: 2px;
        min-height: 32px;
      }

      .week-compact-container.day-badge-layout-stacked .week-day-meta-row,
      .week-standard-container.day-badge-layout-stacked .week-day-meta-row {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
        min-height: 0;
      }

      .week-compact-container.day-badge-layout-stacked .week-day-meta-row .day-badges,
      .week-standard-container.day-badge-layout-stacked .week-day-meta-row .day-badges {
        margin-left: 0;
        justify-content: center;
        flex-wrap: wrap;
        overflow: visible;
      }

      .week-day-forecast,
      .week-standard-day-forecast,
      .agenda-day-forecast {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        margin-top: 0;
        line-height: 1;
      }

      .forecast-condition {
        display: inline-flex;
        font-size: 16px;
      }

      .forecast-condition ha-icon {
        --mdc-icon-size: 20px;
      }

      .forecast-temperatures {
        display: inline-flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 3px;
        font-size: 14px;
        color: #374151;
      }

      .forecast-temp-low {
        opacity: 0.75;
      }

      .week-day-name {
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        color: #6b7280;
        letter-spacing: 0.5px;
      }

      .week-day-date {
        font-size: 24px;
        font-weight: 700;
        color: #111827;
        margin-top: 0;
        line-height: 1;
      }

      .week-day-column.today .week-day-header {
        border-bottom-color: #3b82f6;
      }

      .week-day-column.today .week-day-date {
        color: #3b82f6;
      }

      .week-compact-event {
        background: #3b82f6;
        color: var(--event-bubble-text-color, white);
        font-size: var(--event-bubble-font-size, 11px);
        padding: 8px 10px 8px calc(10px + var(--combine-left-offset, 0px));
        border-radius: 6px;
        margin-bottom: 8px;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
        position: relative;
        padding-bottom: calc(8px + (var(--combined-corner-bubbles, 0) * 14px));
      }

      .week-compact-event:hover {
        transform: translateX(2px);
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      }

      .week-compact-event-time {
        font-size: var(--event-time-font-size, 9px);
        font-weight: 600;
        opacity: 0.9;
        margin-bottom: 4px;
      }

      .week-compact-event-title {
        font-size: 1em;
        font-weight: 500;
        line-height: 1.3;
      }

      .event-title-with-prefix {
        display: inline-flex;
        align-items: center;
        gap: clamp(4px, calc(var(--event-bubble-font-size, 11px) * 0.3), 7px);
        min-width: 0;
      }

      .event-style-icon {
        color: inherit;
        flex: 0 0 auto;
      }

      .event-style-icon-before-title {
        --mdc-icon-size: var(--event-style-icon-size, 1em);
        width: var(--mdc-icon-size);
        height: var(--mdc-icon-size);
        font-size: var(--mdc-icon-size);
        line-height: 1;
      }

      .event-style-icon-corner {
        --mdc-icon-size: var(--event-style-icon-size, var(--event-bubble-font-size, 14px));
        position: absolute;
        right: 6px;
        bottom: 4px;
        width: var(--mdc-icon-size);
        height: var(--mdc-icon-size);
        font-size: var(--mdc-icon-size);
        line-height: 1;
        pointer-events: none;
        z-index: 2;
      }

      .event-title-prefix-friendly-name {
        font-size: 0.9em;
        font-weight: 600;
        opacity: 0.95;
        white-space: nowrap;
      }

      .event-title-prefix-badge {
        --event-title-prefix-size: clamp(9px, calc(var(--event-bubble-font-size, 11px) * 0.8), 15px);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: var(--event-title-prefix-size);
        height: var(--event-title-prefix-size);
        border-radius: 50%;
        overflow: hidden;
        flex: 0 0 auto;
        line-height: 1;
      }

      .event-title-prefix-badges {
        display: inline-flex;
        align-items: center;
        gap: clamp(2px, calc(var(--event-bubble-font-size, 11px) * 0.15), 4px);
        flex: 0 0 auto;
      }

      .event-title-prefix-badge ha-icon {
        --mdc-icon-size: calc(var(--event-title-prefix-size) * 0.78);
        font-size: var(--mdc-icon-size);
        width: var(--mdc-icon-size);
        height: var(--mdc-icon-size);
        line-height: 1;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: inherit;
      }

      .event-title-prefix-badge span {
        font-size: calc(var(--event-title-prefix-size) * 0.62);
        font-weight: 600;
        line-height: 1;
      }

      .event-title-prefix-badge img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .week-compact-event-location {
        font-size: var(--event-location-font-size, 9px);
        opacity: 0.9;
        margin-top: 4px;
        line-height: 1.3;
        white-space: normal;
        overflow-wrap: anywhere;
        word-break: break-word;
      }

      .agenda-container {
        display: flex;
        flex-direction: column;
        gap: 8px;
        overflow-y: auto;
        padding-right: 4px;
        flex: 1 1 auto;
        min-height: 0;
      }

      .agenda-day-row {
        display: grid;
        grid-template-columns: 88px 1fr;
        gap: 12px;
        border-top: 1px solid #e5e7eb;
        padding-top: 8px;
      }

      .agenda-month-banner {
        width: 100%;
        border-top: 2px solid #d1d5db;
        border-bottom: 1px solid #d1d5db;
        color: #4b5563;
        font-size: 24px;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 48px;
        padding: 16px 0;
        margin-top: 6px;
      }

      .agenda-day-label {
        text-align: center;
        margin-bottom: 12px;
        padding-bottom: 12px;
        border-bottom: 2px solid #e5e7eb;
      }

      .agenda-day-weekday {
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        color: #6b7280;
        letter-spacing: 0.5px;
      }

      .agenda-day-date {
        font-size: 24px;
        font-weight: 700;
        color: #111827;
        margin-top: 4px;
      }

      .agenda-day-forecast {
        margin-top: 6px;
      }

      .agenda-day-forecast .forecast-condition ha-icon {
        --mdc-icon-size: 18px;
      }

      .agenda-day-forecast .forecast-temperatures {
        font-size: 11px;
      }

      .agenda-day-row.today .agenda-day-label {
        border-bottom-color: #3b82f6;
      }

      .agenda-day-events {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .agenda-event {
        border-radius: 8px;
        padding: 10px 64px 10px calc(12px + var(--combine-left-offset, 0px));
        cursor: pointer;
        overflow: hidden;
        color: var(--event-bubble-text-color, white);
        position: relative;
        height: var(--agenda-event-min-height, 68px);
        box-sizing: border-box;
        padding-bottom: calc(10px + (var(--combined-corner-bubbles, 0) * 16px));
      }

      .agenda-event-time {
        font-size: var(--event-time-font-size, 10px);
        font-weight: 600;
        margin-bottom: 4px;
        min-height: 1.2em;
      }

      .agenda-event-title {
        font-size: var(--event-bubble-font-size, 16px);
        font-weight: 700;
        min-height: 1.2em;
        line-height: 1.25;
      }

      .agenda-event-location {
        font-size: var(--event-location-font-size, 9px);
        opacity: 0.95;
        margin-top: 4px;
        line-height: 1.3;
        white-space: normal;
        overflow-wrap: anywhere;
        word-break: break-word;
        min-height: 1.2em;
      }

      .agenda-event .week-standard-event-icons {
        position: absolute;
        top: 10px;
        right: 10px;
        margin-top: 0;
      }

      .calendar-container.agenda-compact-events .agenda-event {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: baseline;
        gap: 0 8px;
        height: auto;
        padding: 8px 64px 8px calc(12px + var(--combine-left-offset, 0px));
        padding-bottom: calc(8px + (var(--combined-corner-bubbles, 0) * 16px));
      }

      .calendar-container.agenda-compact-events .agenda-event-title {
        flex: 1 1 auto;
        min-height: unset;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .calendar-container.agenda-compact-events .agenda-event-time {
        flex: 0 0 auto;
        min-height: unset;
        margin-bottom: 0;
        opacity: 0.9;
        white-space: nowrap;
      }

      .calendar-container.agenda-compact-events .agenda-event-location {
        flex: 0 0 100%;
        min-height: unset;
      }

      .calendar-container.agenda-compact-events .agenda-day-date {
        font-size: 16px;
      }

      .calendar-container.agenda-compact-events .agenda-day-label {
        margin-bottom: 2px;
        padding-bottom: 2px;
      }

      .calendar-container.agenda-compact-events .agenda-month-banner {
        font-size: 18px;
        min-height: 36px;
        padding: 8px 0;
      }

      .agenda-empty-day {
        color: #9ca3af;
        font-size: 12px;
        padding: 8px 0;
      }

      /* Week Standard View Styles */

      .calendar-badges-container {
        position: relative;
      }

      .calendar-badges {
        padding: 16px 24px;
        display: flex;
        gap: 12px;
        flex-wrap: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: thin;
        background: white;
        border-bottom: 1px solid #e5e7eb;
      }

      .calendar-badges-container.has-overflow::after,
      .calendar-badges-container.has-overflow::before {
        position: absolute;
        top: 0;
        bottom: 1px;
        width: 44px;
        pointer-events: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        font-weight: 800;
        text-shadow: 0 0 8px rgba(255, 255, 255, 0.85);
        opacity: 0;
        transition: opacity 0.2s ease;
      }

      .calendar-badges-container.has-overflow::after {
        content: '»';
        right: 0;
        color: rgba(17, 24, 39, 0.85);
        background: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
      }

      .calendar-badges-container.has-overflow::before {
        content: '«';
        left: 0;
        color: rgba(17, 24, 39, 0.75);
        background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
      }

      .calendar-badges-container.show-right-indicator::after,
      .calendar-badges-container.show-left-indicator::before {
        opacity: 1;
      }

      .calendar-badges-container.show-right-indicator::after {
        animation: badges-overflow-nudge-right 1.2s ease-in-out infinite;
      }

      .calendar-badges-container.show-left-indicator::before {
        animation: badges-overflow-nudge-left 1.2s ease-in-out infinite;
      }

      @keyframes badges-overflow-nudge-right {
        0%,
        100% {
          transform: translateX(0);
        }
        50% {
          transform: translateX(3px);
        }
      }

      @keyframes badges-overflow-nudge-left {
        0%,
        100% {
          transform: translateX(0);
        }
        50% {
          transform: translateX(-3px);
        }
      }

      .calendar-badge {
        display: inline-flex;
        align-items: center;
        flex: 0 0 auto;
        gap: 8px;
        padding: 8px 16px;
        border-radius: 20px;
        border: 2px solid;
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
        user-select: none;
      }

      .calendar-badge:hover {
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }

      .calendar-badge-hidden {
        opacity: 0.5;
      }

      .calendar-badge-icon {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--skylight-calendar-filter-icon-color, white);
        font-size: 11px;
        font-weight: 600;
        overflow: hidden;
      }

      .calendar-badge:not(.hide-calendar-name) .calendar-badge-person-icon {
        width: 32px;
        height: 32px;
        flex: 0 0 32px;
        font-size: 13px;
      }

      .calendar-badge-inline:not(.hide-calendar-name) .calendar-badge-person-icon {
        width: 28px !important;
        height: 28px !important;
        flex-basis: 28px;
        font-size: 12px !important;
      }

      .calendar-badge-icon ha-icon {
        --mdc-icon-size: 14px;
        color: inherit;
      }

      .calendar-badge:not(.hide-calendar-name) .calendar-badge-person-icon ha-icon {
        --mdc-icon-size: 18px;
      }

      .calendar-badge-photo img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }

      .calendar-badge-label {
        display: flex;
        flex-direction: column;
        min-width: 0;
        line-height: 1.15;
      }

      .calendar-badge-name {
        color: inherit;
      }

      .calendar-badge-person-state {
        font-size: 11px;
        font-weight: 400;
        opacity: 0.82;
        margin-top: 2px;
        white-space: nowrap;
      }

      .week-standard-container {
        --week-standard-column-gap: 12px;
        --week-standard-bridge-overlap: 2px;
        --all-day-horizontal-padding: 8px;
        display: flex;
        align-items: flex-start;
        background: #f9fafb;
        overflow: auto;
        padding: 16px;
        gap: var(--week-standard-column-gap);
        width: 100%;
        flex: 1 1 auto;
        min-height: 0;
        box-sizing: border-box;
      }

      .time-column {
        min-width: 60px;
        flex-shrink: 0;
        position: relative;
        background: transparent;
      }

      .time-column-header-spacer {
        height: var(--week-standard-time-header-spacer-height, 60px);
        background: transparent;
        flex-shrink: 0;
      }

      .time-column-allday-spacer {
        padding: 8px;
        background: transparent;
        border-bottom: 2px solid transparent;
        flex-shrink: 0;
        box-sizing: border-box;
      }

      .time-column-extra-spacer {
        height: 35px;
        background: transparent;
        flex-shrink: 0;
      }

      .time-slot {
        height: 120px;
        font-size: 11px;
        color: #9ca3af;
        text-align: right;
        font-weight: 500;
        position: relative;
        padding-right: 8px;
        display: flex;
        align-items: flex-start;
        padding-top: 0;
        box-sizing: border-box;
        border-top: 1px solid transparent;
      }

      .time-slot-label {
        position: absolute;
        top: -6px;
        right: 8px;
        line-height: 1;
      }

      .week-standard-day-column {
        flex: 1;
        min-width: 140px;
        background: white;
        border-radius: 8px;
        overflow: visible;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      }

      .week-standard-container.compact-width .week-standard-day-column {
        min-width: 0;
      }

      .week-standard-day-header {
        padding: 16px;
        text-align: center;
        border-bottom: 1px solid #e5e7eb;
        background: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: var(--week-standard-day-header-height, auto);
        box-sizing: border-box;
      }

      .week-standard-day-name {
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        color: #6b7280;
        letter-spacing: 0.5px;
      }

      .week-standard-day-date {
        font-size: 24px;
        font-weight: 700;
        color: #111827;
        margin-top: 0;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
        line-height: 1;
        position: relative;
        z-index: 1;
      }

      .week-standard-day-column.today .week-standard-day-date {
        background: #3b82f6;
        color: white;
        border-radius: 50%;
      }

      .day-time-slots {
        position: relative;
        min-height: 600px;
      }

      .all-day-events {
        padding: var(--all-day-horizontal-padding);
        background: #f9fafb;
        border-bottom: 2px solid #e5e7eb;
        display: flex;
        flex-direction: column;
        gap: 4px;
        box-sizing: border-box;
        overflow: visible;
      }

      .all-day-event {
        padding: 4px var(--all-day-horizontal-padding) 4px calc(var(--all-day-horizontal-padding) + var(--combine-left-offset, 0px));
        color: var(--event-bubble-text-color, white);
        border-radius: 6px;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
        font-size: var(--event-bubble-font-size, 11px);
        flex-shrink: 0;
        height: 24px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        overflow: visible;
        position: relative;
      }

      .all-day-event.continues-prev {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      .all-day-event.continues-next {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }

      .all-day-event.bridge-prev {
        margin-left: calc(-1 * (var(--week-standard-column-gap) + var(--week-standard-bridge-overlap)));
        padding-left: calc(var(--all-day-horizontal-padding) + var(--week-standard-column-gap) + var(--week-standard-bridge-overlap) + var(--combine-left-offset, 0px));
      }

      .all-day-event.bridge-next {
        margin-right: calc(-1 * (var(--week-standard-column-gap) + var(--week-standard-bridge-overlap)));
        padding-right: calc(var(--all-day-horizontal-padding) + var(--week-standard-column-gap) + var(--week-standard-bridge-overlap));
      }

      .all-day-event-spacer {
        height: 24px;
        flex-shrink: 0;
      }

      .all-day-event:hover {
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      }

      .all-day-event.leading-span-title {
        z-index: 2;
      }

      .all-day-event[data-all-day-span-days] {
        width: calc((100% * var(--all-day-visible-span, 1)) + ((var(--week-standard-column-gap) + var(--all-day-horizontal-padding) + var(--all-day-horizontal-padding)) * var(--all-day-title-gap-count, 0)));
        max-width: none;
        z-index: 2;
      }

      .all-day-event-title {
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: inherit;
        display: block;
        min-width: 0;
        max-width: 100%;
        flex: 1 1 auto;
      }

      .all-day-event-title.spans-multiple-days {
        position: static;
        transform: none;
        width: auto;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        z-index: 1;
        pointer-events: none;
      }

      .day-time-slot {
        height: 120px;
        border-top: 1px solid var(--schedule-hour-line-color, #e5e7eb);
        position: relative;
        box-sizing: border-box;
        cursor: pointer;
        transition: background 0.2s;
      }

      .day-time-slot:hover {
        background: rgba(59, 130, 246, 0.05);
      }

      .week-standard-event {
        position: absolute;
        left: 8px;
        right: 8px;
        color: var(--event-bubble-text-color, white);
        padding: 4px 8px 4px calc(8px + var(--combine-left-offset, 0px));
        border-radius: 8px;
        font-size: var(--event-bubble-font-size, 11px);
        overflow: hidden;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
        z-index: 1;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        box-sizing: border-box;
        padding-bottom: calc(4px + (var(--combined-corner-bubbles, 0) * 14px));
      }

      .week-standard-event:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10;
      }

      .week-standard-event-title {
        font-weight: 600;
        margin-bottom: 4px;
        line-height: 1.3;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .week-standard-event-time {
        font-size: var(--event-time-font-size, 9px);
        font-weight: 500;
        opacity: 0.85;
      }

      .week-standard-event-location {
        font-size: var(--event-location-font-size, 9px);
        opacity: 0.9;
        margin-top: 4px;
        line-height: 1.3;
        white-space: normal;
        overflow-wrap: anywhere;
        word-break: break-word;
      }

      .week-standard-event-calendar-name {
        font-size: 10px;
        font-weight: 600;
        opacity: 0.9;
      }

      .week-standard-event-icons {
        display: flex;
        justify-content: flex-end;
        gap: 4px;
        margin-top: 4px;
      }

      .week-standard-event-icon {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        flex-shrink: 0;
      }

      .combined-corner-bubbles {
        position: absolute;
        right: 6px;
        bottom: 4px;
        display: inline-flex;
        align-items: center;
        justify-content: flex-end;
        gap: 2px;
        pointer-events: none;
      }

      .combined-corner-bubble {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 8px;
        font-weight: 700;
        line-height: 1;
        box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.7);
      }

      .current-time-line {
        position: absolute;
        left: 0;
        right: 0;
        height: 2px;
        background: #ef4444;
        z-index: 5;
        pointer-events: none;
      }

      .current-time-line::before {
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #ef4444;
        left: -4px;
        top: -3px;
      }

      daylight-calendar-card.event-modal-open .calendar-container,
      daylight-calendar-card.event-modal-open .calendar-body,
      skylight-calendar-card.event-modal-open .calendar-container,
      skylight-calendar-card.event-modal-open .calendar-body {
        overflow: visible;
      }

      .event-modal {
        display: none;
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 2147483647;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        padding: 16px;
      }

      .event-modal.show {
        display: flex;
      }

      .modal-content {
        background: white;
        border-radius: 12px;
        padding: 24px;
        max-width: 500px;
        width: 90%;
        max-height: 80vh;
        max-height: min(80vh, calc(100dvh - 32px));
        overflow-y: auto;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
      }

      .modal-content.modal-size-narrow {
        box-sizing: border-box;
        max-width: 380px;
        width: min(90%, 380px);
      }

      .modal-content.modal-size-medium {
        max-width: 500px;
        width: 90%;
      }

      .modal-content.modal-size-wide {
        box-sizing: border-box;
        max-width: 760px;
        width: min(94%, 760px);
      }

      .modal-content.modal-size-full {
        box-sizing: border-box;
        max-width: none;
        width: calc(100vw - 32px);
        max-height: calc(100dvh - 32px);
      }

      .modal-content.modal-size-narrow > .confirm-dialog,
      .modal-content.modal-size-wide > .confirm-dialog,
      .modal-content.modal-size-full > .confirm-dialog {
        box-sizing: border-box;
        max-width: none;
        width: 100%;
      }

      @media (max-width: 480px) {
        .modal-content,
        .modal-content.modal-size-narrow,
        .modal-content.modal-size-medium,
        .modal-content.modal-size-wide,
        .modal-content.modal-size-full {
          width: calc(100vw - 24px);
          max-width: calc(100vw - 24px);
          max-height: calc(100dvh - 24px);
          padding: 16px;
          box-sizing: border-box;
        }
      }

      .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: start;
        margin-bottom: 16px;
      }

      .modal-title {
        font-size: 20px;
        font-weight: 600;
        color: #111827;
        margin: 0;
      }

      .modal-close {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: #6b7280;
        padding: 0;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        transition: background 0.2s;
      }

      .modal-close:hover {
        background: #f3f4f6;
      }

      .modal-body {
        color: #374151;
      }

      .modal-row {
        display: flex;
        gap: 12px;
        margin-bottom: 12px;
        font-size: 14px;
      }

      .modal-label {
        font-weight: 600;
        min-width: 80px;
        color: #6b7280;
      }

      .modal-value {
        flex: 1;
      }

      .modal-row-description {
        align-items: flex-start;
      }
      .modal-location-link {
        display: inline-flex;
        align-items: center;
        min-height: 36px;
        padding: 0;
        border: 0;
        background: transparent;
        color: var(--primary-color, #3b82f6);
        font: inherit;
        text-align: left;
        text-decoration: underline;
        cursor: pointer;
        overflow-wrap: anywhere;
      }

      .modal-location-actions {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 8px;
        margin-top: 4px;
        margin-bottom: 4px;
        width: 100%;
      }

      .modal-location-action {
        min-width: 0;
        min-height: 40px;
        padding: 8px 8px;
        font-size: 13px;
        white-space: nowrap;
      }

      @media (max-width: 480px) {
        .modal-location-action {
          padding: 8px 6px;
          font-size: 12px;
        }
      }

      .event-description-content {
        line-height: 1.5;
        overflow-wrap: anywhere;
      }

      .event-description-content > :first-child {
        margin-top: 0;
      }

      .event-description-content > :last-child {
        margin-bottom: 0;
      }

      .event-description-content p,
      .event-description-content ul,
      .event-description-content ol,
      .event-description-content blockquote,
      .event-description-content pre {
        margin: 0 0 10px;
      }

      .event-description-content ul,
      .event-description-content ol {
        padding-left: 20px;
      }

      .event-description-content li + li {
        margin-top: 4px;
      }

      .event-description-content h1,
      .event-description-content h2,
      .event-description-content h3,
      .event-description-content h4,
      .event-description-content h5,
      .event-description-content h6 {
        margin: 0 0 8px;
        font-weight: 700;
        line-height: 1.25;
        color: #111827;
      }

      .event-description-content h1 { font-size: 20px; }
      .event-description-content h2 { font-size: 18px; }
      .event-description-content h3 { font-size: 16px; }
      .event-description-content h4,
      .event-description-content h5,
      .event-description-content h6 { font-size: 14px; }

      .event-description-content blockquote {
        border-left: 3px solid #d1d5db;
        color: #4b5563;
        padding-left: 10px;
      }

      .event-description-content code {
        background: #f3f4f6;
        border-radius: 4px;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 0.9em;
        padding: 1px 4px;
      }

      .event-description-content pre {
        background: #f3f4f6;
        border-radius: 8px;
        overflow-x: auto;
        padding: 10px;
        white-space: pre-wrap;
      }

      .event-description-content pre code {
        background: transparent;
        padding: 0;
      }

      .event-description-content a {
        color: #2563eb;
        text-decoration: underline;
      }

      #create-event-form,
      #edit-event-form {
        display: flex;
        flex-direction: column;
        gap: 18px;
      }

      .form-group,
      .form-group-inline {
        margin-bottom: 0;
      }

      .form-label {
        display: block;
        font-size: 14px;
        font-weight: 600;
        color: #374151;
        margin-bottom: 8px;
      }

      .form-group-inline .form-label {
        margin-bottom: 0;
      }

      .form-inline-row {
        display: grid;
        grid-template-columns: 120px minmax(0, 1fr);
        gap: 12px;
        align-items: center;
      }

      .form-inline-row.form-inline-row-top {
        align-items: start;
      }

      .form-required {
        color: #ef4444;
        margin-left: 4px;
      }

      .form-input {
        width: 100%;
        padding: 10px 12px;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        font-size: 14px;
        font-family: inherit;
        transition: border-color 0.2s;
        box-sizing: border-box;
      }

      .form-input:focus {
        outline: none;
        border-color: #3b82f6;
      }

      .form-input.error {
        border-color: #ef4444;
      }

      .form-select {
        width: 100%;
        padding: 10px 12px;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        font-size: 14px;
        font-family: inherit;
        background: white;
        cursor: pointer;
        transition: border-color 0.2s;
        box-sizing: border-box;
      }

      .form-select:focus {
        outline: none;
        border-color: #3b82f6;
      }

      .form-textarea {
        width: 100%;
        padding: 10px 12px;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        font-size: 14px;
        font-family: inherit;
        min-height: 80px;
        resize: vertical;
        transition: border-color 0.2s;
        box-sizing: border-box;
      }

      .form-textarea:focus {
        outline: none;
        border-color: #3b82f6;
      }

      .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }

      .form-checkbox-group {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .form-checkbox-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
        gap: 10px 14px;
      }

      .form-checkbox-row {
        display: flex;
        flex-wrap: wrap;
        gap: 18px;
        margin-bottom: 0;
      }

      .form-checkbox-row .form-group {
        margin-bottom: 0;
      }

      .form-checkbox {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }

      .form-checkbox-label {
        font-size: 14px;
        color: #374151;
        cursor: pointer;
        user-select: none;
      }

      .recurrence-ends-label {
        margin-bottom: 10px;
      }

      .recurrence-end-row {
        display: grid;
        grid-template-columns: 110px minmax(0, 1fr);
        gap: 12px;
        align-items: center;
        margin-bottom: 10px;
      }

      .recurrence-end-option {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        color: #374151;
        cursor: pointer;
      }

      .recurrence-end-option input[type="radio"] {
        margin: 0;
      }

      .recurrence-end-row .form-input {
        margin: 0;
      }

      .recurrence-after-input {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .recurrence-after-input .form-input {
        max-width: 80px;
      }

      .form-error {
        color: #ef4444;
        font-size: 13px;
        margin-top: 4px;
      }

      .form-actions {
        display: flex;
        gap: 12px;
        justify-content: flex-end;
        margin-top: 6px;
      }

      .btn {
        padding: 10px 20px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
        border: none;
        font-family: inherit;
      }

      .btn-primary {
        background: #3b82f6;
        color: white;
      }

      .btn-primary:hover {
        background: #2563eb;
        transform: translateY(-1px);
      }

      .btn-primary:disabled {
        background: #9ca3af;
        cursor: not-allowed;
        transform: none;
      }

      .btn-secondary {
        background: #f3f4f6;
        color: #374151;
      }

      .btn-secondary:hover {
        background: #e5e7eb;
      }

      .btn-danger {
        background: #ef4444;
        color: white;
      }

      .btn-danger:hover {
        background: #dc2626;
        transform: translateY(-1px);
      }

      .btn-danger:disabled {
        background: #fca5a5;
        cursor: not-allowed;
        transform: none;
      }

      .modal-actions {
        display: flex;
        gap: 12px;
        justify-content: space-between;
        margin-top: 24px;
        align-items: center;
      }

      .modal-actions-left {
        display: flex;
        gap: 12px;
      }

      .modal-actions-right {
        display: flex;
        gap: 12px;
      }

      .confirm-dialog {
        background: white;
        border-radius: 12px;
        padding: 24px;
        max-width: 400px;
        width: 90%;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
      }

      .confirm-title {
        font-size: 18px;
        font-weight: 600;
        color: #111827;
        margin: 0 0 12px 0;
      }

      .confirm-message {
        font-size: 14px;
        color: #6b7280;
        margin-bottom: 20px;
        line-height: 1.5;
      }

      .confirm-actions {
        display: flex;
        gap: 12px;
        justify-content: flex-end;
      }

      .recurring-options {
        background: #f9fafb;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        padding: 16px;
        margin-bottom: 16px;
      }

      .recurring-option {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px;
        cursor: pointer;
        border-radius: 6px;
        transition: background 0.2s;
        margin-bottom: 8px;
      }

      .recurring-option:hover {
        background: #f3f4f6;
      }

      .recurring-option.disabled-option {
        cursor: not-allowed;
        opacity: 0.72;
      }

      .recurring-option.disabled-option:hover {
        background: transparent;
      }

      .recurring-option:last-child {
        margin-bottom: 0;
      }

      .recurring-option input[type="radio"] {
        width: 18px;
        height: 18px;
        cursor: pointer;
      }

      .recurring-option-label {
        flex: 1;
      }

      .recurring-option-title {
        font-weight: 600;
        color: #111827;
        font-size: 14px;
        margin-bottom: 2px;
      }

      .recurring-option-description {
        font-size: 13px;
        color: #6b7280;
      }

      .error-message {
        background: #fef2f2;
        border: 1px solid #fecaca;
        color: #991b1b;
        padding: 12px 16px;
        border-radius: 8px;
        margin-bottom: 16px;
        font-size: 14px;
      }

      .success-message {
        background: #f0fdf4;
        border: 1px solid #bbf7d0;
        color: #166534;
        padding: 12px 16px;
        border-radius: 8px;
        margin-bottom: 16px;
        font-size: 14px;
      }

      .empty-state {
        padding: 40px 24px;
        text-align: center;
        color: #6b7280;
      }

      .empty-state-icon {
        font-size: 48px;
        margin-bottom: 16px;
        opacity: 0.5;
      }

      .empty-state-text {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 8px;
      }

      .empty-state-subtext {
        font-size: 14px;
        opacity: 0.8;
      }

      .day-modal-event {
        margin-bottom: 16px;
        padding: 12px;
        border-radius: 4px;
        cursor: pointer;
        color: var(--event-bubble-text-color, white);
        position: relative;
        padding-bottom: calc(12px + (var(--combined-corner-bubbles, 0) * 16px));
      }

      .day-modal-event-title {
        font-weight: 600;
        margin-bottom: 4px;
      }

      .day-modal-event-meta {
        font-size: 13px;
        color: inherit;
        opacity: 0.9;
      }

      .day-modal-event-location {
        font-size: 13px;
        color: inherit;
        opacity: 0.9;
        margin-top: 4px;
      }

      .info-banner {
        border-radius: 8px;
        padding: 12px;
        margin-top: 16px;
        font-size: 13px;
      }

      .info-banner.warning {
        background: #fef3c7;
        border: 1px solid #fbbf24;
        color: #92400e;
      }


      .calendar-container.dark-mode {
        color: #e8ecf1;
        color-scheme: dark;
        --schedule-hour-line-color: #556070;
      }

      .calendar-container.dark-mode,
      .calendar-container.dark-mode input,
      .calendar-container.dark-mode select,
      .calendar-container.dark-mode textarea,
      .calendar-container.dark-mode button {
        color-scheme: dark;
      }

      .calendar-container.dark-mode .week-standard-container,
      .calendar-container.dark-mode .calendar-badges {
        background: #30363f;
        border-color: #4b5563;
      }

      .calendar-container.dark-mode .calendar-badges-container.has-overflow::after {
        color: rgba(248, 250, 252, 0.95);
        text-shadow: 0 0 10px rgba(17, 24, 39, 0.75);
        background: linear-gradient(to left, rgba(48, 54, 63, 1), rgba(48, 54, 63, 0));
      }

      .calendar-container.dark-mode .calendar-badges-container.has-overflow::before {
        color: rgba(248, 250, 252, 0.9);
        text-shadow: 0 0 10px rgba(17, 24, 39, 0.75);
        background: linear-gradient(to right, rgba(48, 54, 63, 1), rgba(48, 54, 63, 0));
      }


      .calendar-container.dark-mode .day-cell,
      .calendar-container.dark-mode .week-day-column,
      .calendar-container.dark-mode .week-day-header,
      .calendar-container.dark-mode .week-standard-day-column,
      .calendar-container.dark-mode .week-standard-day-header,
      .calendar-container.dark-mode .all-day-events,
      .calendar-container.dark-mode .day-time-slot,
      .calendar-container.dark-mode .time-slot,
      .calendar-container.dark-mode .time-slot-label,
      .calendar-container.dark-mode .empty-state {
        background: #353c45;
        color: #dde3ea;
        border-color: #556070;
      }

      .calendar-container.dark-mode .time-slot {
        background: inherit;
        color: #dde3ea;
        border-top-color: transparent;
      }

      .calendar-container.dark-mode .week-standard-day-header,
      .calendar-container.dark-mode .all-day-events {
        border-bottom-color: transparent;
      }

	  .calendar-container.dark-mode .day-header,
      .calendar-container.dark-mode .month-week-number-header,
      .calendar-container.dark-mode .month-week-number-cell {
        background: #353b42;
        color: #dde3ea;
        border-color: #556070;
      }

      .calendar-container.dark-mode .week-day-column.today .week-day-header {
        border-bottom-color: #3b82f6;
      }

      .calendar-container.dark-mode .week-standard-day-name,
      .calendar-container.dark-mode .week-standard-day-date,
      .calendar-container.dark-mode .week-day-name,
      .calendar-container.dark-mode .week-day-date {
        background: #3b434d;
        color: #dde3ea;
        border-color: #556070;
      }

      .calendar-container.dark-mode .agenda-day-weekday,
      .calendar-container.dark-mode .agenda-day-date {
        background: transparent;
        color: #dde3ea;
      }

      .calendar-container.dark-mode .week-day-column.today .week-day-date {
        color: #3b82f6;
      }

      .calendar-container.dark-mode .week-standard-day-column.today .week-standard-day-date {
        background: #3b82f6;
        color: white;
        border-radius: 50%;
      }

      .calendar-container.dark-mode .week-standard-day-column {
        border: 1px solid #556070;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
      }

      .calendar-container.dark-mode .day-cell:hover,
      .calendar-container.dark-mode .day-time-slot:hover,
      .calendar-container.dark-mode .recurring-option:hover,
      .calendar-container.dark-mode .modal-close:hover,
      .calendar-container.dark-mode .btn-secondary:hover {
        background: #3f4752;
      }

      .calendar-container.dark-mode .recurring-option.disabled-option:hover {
        background: transparent;
      }

      .calendar-container.dark-mode .day-cell.other-month {
        background: #2f353e;
      }

      .calendar-container.dark-mode .day-number,
      .calendar-container.dark-mode .forecast-temperatures,
      .calendar-container.dark-mode .month-year,
      .calendar-container.dark-mode .modal-title,
      .calendar-container.dark-mode .confirm-title,
      .calendar-container.dark-mode .recurring-option-title {
        color: #f4f7fb;
      }

      .calendar-container.dark-mode .more-events,
      .calendar-container.dark-mode .modal-label,
      .calendar-container.dark-mode .confirm-message,
      .calendar-container.dark-mode .recurring-option-description,
      .calendar-container.dark-mode .day-modal-event-meta,
      .calendar-container.dark-mode .day-modal-event-location,
      .calendar-container.dark-mode .empty-state {
        color: #c7d0db;
      }

      .calendar-container.dark-mode .week-standard-day-column,
      .calendar-container.dark-mode .week-day-column,
      .calendar-container.dark-mode .modal-content,
      .calendar-container.dark-mode .confirm-dialog,
      .calendar-container.dark-mode .form-input,
      .calendar-container.dark-mode .form-select,
      .calendar-container.dark-mode .form-textarea,
      .calendar-container.dark-mode .recurring-options,
      .calendar-container.dark-mode .btn-secondary,
      .calendar-container.dark-mode .day-modal-event {
        background: #3b434d;
        color: #e2e8f0;
        border-color: #606b7b;
        box-shadow: none;
      }

      .calendar-container.dark-mode .modal-header,
      .calendar-container.dark-mode .modal-row {
        border-color: #5b6676;
      }

      .calendar-container.dark-mode .form-checkbox-label,
      .calendar-container.dark-mode .recurrence-end-option,
      .calendar-container.dark-mode .modal-value,
      .calendar-container.dark-mode .form-label {
        color: #d6dee8;
      }

      .calendar-container.dark-mode .event-description-content h1,
      .calendar-container.dark-mode .event-description-content h2,
      .calendar-container.dark-mode .event-description-content h3,
      .calendar-container.dark-mode .event-description-content h4,
      .calendar-container.dark-mode .event-description-content h5,
      .calendar-container.dark-mode .event-description-content h6 {
        color: #f8fafc;
      }

      .calendar-container.dark-mode .event-description-content blockquote {
        border-left-color: #64748b;
        color: #cbd5e1;
      }

      .calendar-container.dark-mode .event-description-content code,
      .calendar-container.dark-mode .event-description-content pre {
        background: #28313d;
      }

      .calendar-container.dark-mode .event-description-content a {
        color: #93c5fd;
      }

      .calendar-container.dark-mode .form-required {
        color: #f87171;
      }

      .calendar-container.dark-mode .form-input::placeholder,
      .calendar-container.dark-mode .form-textarea::placeholder {
        color: #9aa6b8;
      }

      .calendar-container.dark-mode input[type="date"]::-webkit-calendar-picker-indicator,
      .calendar-container.dark-mode input[type="datetime-local"]::-webkit-calendar-picker-indicator,
      .calendar-container.dark-mode input[type="time"]::-webkit-calendar-picker-indicator {
        filter: invert(1) brightness(0.9);
      }

      .calendar-container.dark-mode .btn-secondary {
        border: 1px solid #606b7b;
      }

      .calendar-container.dark-mode .info-banner {
        background: #5a4a34;
        border-color: #8f7a56;
        color: #f3e5c7;
      }

      .calendar-container.dark-mode .view-mode-buttons,
      .calendar-container.dark-mode .add-event-button,
      .calendar-container.dark-mode .compact-add-event-button,
      .calendar-container.dark-mode .nav-button,
      .calendar-container.dark-mode .today-button,
      .calendar-container.dark-mode .theme-toggle {
        background: rgba(226, 232, 240, 0.14);
        border-color: rgba(226, 232, 240, 0.28);
      }

      .calendar-container.dark-mode .view-mode-select {
        color: #f8fafc;
      }

      .calendar-container.dark-mode .view-mode-select option {
        color: #f8fafc;
        background: #1f2937;
      }

      .calendar-container.dark-mode .week-day-header,
      .calendar-container.dark-mode .week-standard-day-header {
        background: #3b434d;
      }

      .calendar-container.dark-mode .agenda-day-row {
        border-top-color: #5b6676;
      }

      .calendar-container.dark-mode .agenda-day-label {
        border-bottom-color: #5b6676;
      }

      .calendar-container.dark-mode .agenda-month-banner {
        border-top-color: #5b6676;
        border-bottom-color: #5b6676;
        color: #c7d0db;
      }

      .calendar-container.dark-mode .agenda-day-date {
        color: #f4f7fb;
      }


      .calendar-container.custom-background .calendar-grid,
      .calendar-container.custom-background .week-compact-container,
      .calendar-container.custom-background .calendar-badges,
      .calendar-container.custom-background .week-day-header,
      .calendar-container.custom-background .week-standard-day-header,
      .calendar-container.custom-background .time-slot,
      .calendar-container.custom-background .time-slot-label,
      .calendar-container.custom-background .week-day-name,
      .calendar-container.custom-background .week-day-date,
      .calendar-container.custom-background .week-standard-day-name,
      .calendar-container.custom-background .week-standard-day-date,
      .calendar-container.custom-background .empty-state {
        background: transparent !important;
      }

      .calendar-container.custom-background .week-day-header,
      .calendar-container.custom-background .week-standard-day-header,
      .calendar-container.custom-background .calendar-grid,
      .calendar-container.custom-background .week-compact-container,
      .calendar-container.custom-background .calendar-badges {
        border-color: rgba(255, 255, 255, 0.35) !important;
      }

      .calendar-container.custom-background .week-standard-container {
        background: rgba(var(--custom-surface-calendar-rgb, 249, 250, 251), var(--custom-surface-alpha, 0.55)) !important;
      }

      .calendar-container.custom-background .calendar-grid {
        background: rgba(var(--custom-surface-calendar-rgb, 249, 250, 251), var(--custom-surface-alpha, 0.55)) !important;
        border-top-color: rgba(var(--custom-surface-column-rgb, 255, 255, 255), var(--custom-surface-alpha, 0.55)) !important;
      }

      .calendar-container.custom-background .day-header,
      .calendar-container.custom-background .month-week-number-header {
        background: rgba(var(--custom-surface-all-day-rgb, 249, 250, 251), var(--custom-surface-alpha, 0.55)) !important;
      }

      .calendar-container.custom-background .day-cell,
      .calendar-container.custom-background .month-week-number-cell {
        background: rgba(var(--custom-surface-column-rgb, 255, 255, 255), var(--custom-surface-alpha, 0.55)) !important;
      }

      .calendar-container.custom-background .week-compact-container {
        background: rgba(var(--custom-surface-calendar-rgb, 249, 250, 251), var(--custom-surface-alpha, 0.55)) !important;
        border-top-color: rgba(var(--custom-surface-column-rgb, 255, 255, 255), var(--custom-surface-alpha, 0.55)) !important;
      }

      .calendar-container.custom-background .week-day-column {
        background: rgba(var(--custom-surface-column-rgb, 255, 255, 255), var(--custom-surface-alpha, 0.55)) !important;
      }

      .calendar-container.custom-background .week-standard-day-column {
        background: rgba(var(--custom-surface-column-rgb, 255, 255, 255), var(--custom-surface-alpha, 0.55)) !important;
      }

      .calendar-container.custom-background .all-day-events {
        background: rgba(var(--custom-surface-all-day-rgb, 249, 250, 251), var(--custom-surface-alpha, 0.55)) !important;
      }

      .calendar-container.custom-background .day-time-slot {
        background: rgba(var(--custom-surface-slot-rgb, 255, 255, 255), var(--custom-surface-alpha, 0.55)) !important;
      }

      .calendar-container.custom-background .agenda-container,
      .calendar-container.custom-background .agenda-month-banner,
      .calendar-container.custom-background .agenda-day-row {
        background: rgba(var(--custom-surface-calendar-rgb, 249, 250, 251), var(--custom-surface-alpha, 0.55)) !important;
      }

      .calendar-container.custom-background .agenda-day-label {
        background: rgba(var(--custom-surface-all-day-rgb, 249, 250, 251), var(--custom-surface-alpha, 0.55)) !important;
      }

      .calendar-container.dark-mode.custom-background .week-standard-day-header,
      .calendar-container.dark-mode.custom-background .all-day-events {
        border-bottom-color: transparent !important;
      }

      .calendar-container.dark-mode.custom-background .week-standard-day-column {
        border-color: transparent !important;
        box-shadow: none !important;
      }

      .calendar-container.custom-background .week-standard-day-column.today .week-standard-day-date {
        background: #3b82f6 !important;
        color: #ffffff !important;
        border-radius: 50%;
      }

      .calendar-container.custom-background .calendar-badges-container.has-overflow::after,
      .calendar-container.custom-background .calendar-badges-container.has-overflow::before {
        display: none;
      }


      .calendar-container.custom-background .day-cell.other-month {
        background: rgba(255, 255, 255, 0.12) !important;
      }

      .calendar-container.dark-mode.custom-background .day-cell.other-month {
        background: rgba(0, 0, 0, 0.2) !important;
      }

      @media (max-width: 768px) {
        .header {
          flex-direction: column;
          align-items: stretch;
        }

        .header-controls {
          justify-content: space-between;
        }

        .compact-header-controls {
          justify-content: flex-start;
        }

        .period-controls,
        .compact-period-controls {
          width: 100%;
          justify-content: space-between;
          gap: 8px;
          margin-left: 0;
        }

        .period-controls .month-year,
        .compact-period-controls .month-year {
          flex: 1;
          text-align: center;
        }


        .week-standard-container {
          font-size: 10px;
        }

        .week-standard-day-date {
          font-size: 14px;
        }

        .form-row {
          grid-template-columns: 1fr;
        }

        .form-inline-row {
          grid-template-columns: 88px minmax(0, 1fr);
          gap: 8px;
          align-items: center;
        }

        .form-group-inline .form-label {
          margin-bottom: 0;
        }

        .header-time {
          font-size: 22px;
        }
      }
  `;
}
