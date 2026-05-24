const { test, expect } = require('@playwright/test');
const path = require('path');

const FIXED_NOW = '2026-03-15T10:00:00.000Z';
const LONG_LOCATION = '12345 Extremely Long Conference Center Road, Building Q, Floor 42, Room 4201, Springfield, Oregon 97477';
const INLINE_BACKGROUND_SVG = `data:image/svg+xml,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96">
    <rect width="96" height="96" fill="#dbeafe"/>
    <path d="M0 0h48v48H0zM48 48h48v48H48z" fill="#bfdbfe"/>
    <path d="M0 96 96 0" stroke="#2563eb" stroke-width="8" stroke-opacity=".45"/>
  </svg>
`)}`;

const baseEvents = {
  'calendar.family': [
    { summary: 'Coffee', start: '2026-03-15T09:00:00Z', end: '2026-03-15T09:30:00Z', location: 'Kitchen' },
    { summary: 'All Day Holiday', start: '2026-03-16', end: '2026-03-17' },
    { summary: 'Conference', start: '2026-03-17', end: '2026-03-20' },
    { summary: 'Night Shift', start: '2026-03-15T23:30:00Z', end: '2026-03-16T06:30:00Z' }
  ],
  'calendar.work': [
    { summary: 'Standup', start: '2026-03-15T14:00:00Z', end: '2026-03-15T14:15:00Z', location: 'Zoom' },
    { summary: 'Planning', start: '2026-03-18T18:00:00Z', end: '2026-03-18T19:00:00Z' }
  ]
};

const duplicateEvents = {
  'calendar.family': [
    { summary: 'Shared Duplicate Demo', start: '2026-03-15T11:00:00Z', end: '2026-03-15T12:00:00Z', location: 'Shared Room' },
    { summary: 'Family Only Errand', start: '2026-03-16T09:00:00Z', end: '2026-03-16T10:00:00Z' }
  ],
  'calendar.work': [
    { summary: 'Shared Duplicate Demo', start: '2026-03-15T11:00:00Z', end: '2026-03-15T12:00:00Z', location: 'Shared Room' },
    { summary: 'Work Only Review', start: '2026-03-16T13:00:00Z', end: '2026-03-16T14:00:00Z' }
  ]
};

const overflowEvents = {
  'calendar.family': Array.from({ length: 7 }, (_, index) => ({
    summary: `Family Dense ${index + 1}`,
    start: `2026-03-15T${String(8 + index).padStart(2, '0')}:00:00Z`,
    end: `2026-03-15T${String(8 + index).padStart(2, '0')}:30:00Z`
  })),
  'calendar.work': Array.from({ length: 6 }, (_, index) => ({
    summary: `Work Dense ${index + 1}`,
    start: `2026-03-15T${String(15 + index).padStart(2, '0')}:00:00Z`,
    end: `2026-03-15T${String(15 + index).padStart(2, '0')}:30:00Z`
  }))
};

const locationEvents = {
  'calendar.family': [
    { summary: 'Long Location Review', start: '2026-03-15T09:30:00Z', end: '2026-03-15T10:30:00Z', location: LONG_LOCATION }
  ],
  'calendar.work': [
    { summary: 'Remote Workshop', start: '2026-03-15T13:00:00Z', end: '2026-03-15T14:30:00Z', location: '98765 International Collaboration Campus, North Annex, Presentation Theater, Metropolis, New York 10001' }
  ]
};

const hostileEvents = {
  'calendar.family': [
    { summary: '', start: '2026-03-15T00:00:00Z', end: '2026-03-15T00:05:00Z' },
    { summary: 'X'.repeat(180), start: '2026-03-15T12:00:00Z', end: '2026-03-15T13:00:00Z', location: 'https://very-long-url.example.com/path/to/resource' },
    { summary: 'Overlap A', start: '2026-03-15T15:00:00Z', end: '2026-03-15T17:30:00Z' },
    { summary: 'Overlap B', start: '2026-03-15T15:15:00Z', end: '2026-03-15T16:00:00Z' },
    { summary: 'Midnight <24', start: '2026-03-15T23:55:00Z', end: '2026-03-16T00:20:00Z' }
  ],
  'calendar.work': [
    { summary: 'All Day Zero End', start: '2026-03-16', end: '2026-03-16' },
    { summary: 'Emoji 🧪 / Symbols <> &', start: '2026-03-17T18:00:00Z', end: '2026-03-17T19:00:00Z' }
  ]
};

const richDescriptionEvents = {
  'calendar.family': [
    {
      summary: 'Markdown Description Demo',
      start: '2026-03-15T10:30:00Z',
      end: '2026-03-15T11:00:00Z',
      location: 'Kitchen',
      description: '## Markdown Details\n\nBring **snacks** and [menu](https://example.com/menu).\n- Chips\n- Drinks\n\nUse `door code`.'
    }
  ],
  'calendar.work': [
    {
      summary: 'HTML Description Demo',
      start: '2026-03-15T12:00:00Z',
      end: '2026-03-15T12:30:00Z',
      location: 'Conference Room',
      description: '<h3>HTML Details</h3><p>Please bring <em>printed notes</em>.</p><blockquote>Setup starts early.</blockquote><p><a href="/local/rich-info">More info</a></p>'
    }
  ]
};

const defaultColors = { 'calendar.family': '#ff5f66', 'calendar.work': '#14c8bd' };

const cases = [
  { name: 'month-basic-light', config: { default_view: 'month', color_scheme: 'light' }, darkMode: false, events: baseEvents, viewLabel: 'Month' },
  { name: 'month-basic-dark', config: { default_view: 'month', color_scheme: 'dark' }, darkMode: true, events: baseEvents, viewLabel: 'Month' },
  { name: 'week-basic-light', config: { default_view: 'week', color_scheme: 'light' }, darkMode: false, events: baseEvents, viewLabel: 'Week' },
  { name: 'week-basic-dark', config: { default_view: 'week', color_scheme: 'dark' }, darkMode: true, events: baseEvents, viewLabel: 'Week' },
  { name: 'week-compact-basic-light', config: { default_view: 'week-compact', color_scheme: 'light' }, darkMode: false, events: baseEvents, viewLabel: 'Week' },
  { name: 'week-standard-basic-light', config: { default_view: 'week-standard', color_scheme: 'light' }, darkMode: false, events: baseEvents, viewLabel: 'Schedule' },
  { name: 'schedule-basic-light', config: { default_view: 'schedule', color_scheme: 'light' }, darkMode: false, events: baseEvents, viewLabel: 'Schedule' },
  { name: 'schedule-basic-dark', config: { default_view: 'schedule', color_scheme: 'dark' }, darkMode: true, events: baseEvents, viewLabel: 'Schedule' },
  { name: 'agenda-basic-light', config: { default_view: 'agenda', color_scheme: 'light' }, darkMode: false, events: baseEvents, viewLabel: 'Agenda' },
  { name: 'agenda-basic-dark', config: { default_view: 'agenda', color_scheme: 'dark' }, darkMode: true, events: baseEvents, viewLabel: 'Agenda' },
  {
    name: 'multi-combined',
    config: { default_view: 'week', combine_calendars: true, combine_style: 'stripes', combine_background: '#d7ebff', colors: defaultColors },
    darkMode: false,
    events: duplicateEvents,
    viewLabel: 'Week',
    assert: async (card) => {
      await expect(card.locator('.week-compact-event').filter({ hasText: 'Shared Duplicate Demo' })).toHaveCount(1);
      await expect(card.locator('.week-compact-event').filter({ hasText: 'Shared Duplicate Demo' })).toHaveCSS('background-color', 'rgb(215, 235, 255)');
    }
  },
  {
    name: 'multi-split',
    config: { default_view: 'week', combine_calendars: false, colors: defaultColors },
    darkMode: false,
    events: duplicateEvents,
    viewLabel: 'Week',
    assert: async (card) => {
      await expect(card.locator('.week-compact-event').filter({ hasText: 'Shared Duplicate Demo' })).toHaveCount(2);
    }
  },
  { name: 'event-left-neutral-week', config: { default_view: 'week', event_color_mode: 'left-neutral', event_neutral_background: '#F8F3E9', event_color_bar_width: 18, colors: defaultColors }, darkMode: false, events: baseEvents, viewLabel: 'Week' },
  {
    name: 'past-event-mode-hide',
    config: { default_view: 'week', past_event_mode: 'hide', colors: defaultColors },
    darkMode: false,
    events: baseEvents,
    viewLabel: 'Week',
    assert: async (card) => {
      await expect(card.locator('.week-compact-event').filter({ hasText: 'Coffee' })).toHaveCount(0);
      await expect(card.locator('.week-compact-event').filter({ hasText: 'Standup' })).toHaveCount(1);
    }
  },
  {
    name: 'past-event-mode-muted',
    config: { default_view: 'week', past_event_mode: 'muted', colors: defaultColors },
    darkMode: false,
    events: baseEvents,
    viewLabel: 'Week',
    assert: async (card) => {
      const pastEvent = card.locator('.week-compact-event').filter({ hasText: 'Coffee' });
      await expect(pastEvent).toHaveCount(1);
      await expect(pastEvent).toHaveCSS('opacity', '0.55');
      await expect(pastEvent).toHaveAttribute('style', /filter: grayscale\(70%\) saturate\(45%\)/);
    }
  },
  { name: 'event-left-tint-schedule', config: { default_view: 'schedule', event_color_mode: 'left-tint', event_tint_opacity: 100, event_color_bar_width: 18, colors: defaultColors }, darkMode: false, events: baseEvents, viewLabel: 'Schedule' },
  { name: 'virtual-calendars', config: { default_view: 'schedule', virtual_calendars: [{ name: 'home+work', icon: 'mdi:calendar', entities: ['calendar.family', 'calendar.work'] }] }, darkMode: false, events: baseEvents, viewLabel: 'Schedule' },
  {
    name: 'styled-events-days',
    config: {
      default_view: 'month',
      event_styles: [{ id: 'style-standup', priority: 10, match: { title: 'Standup' }, style: { background_color: '#f8d7da', event_font_color: '#721c24' } }],
      day_styles: [{ condition: 'day_of_week', day_of_week: ['saturday', 'sunday'], background: '#dcfce7', opacity: 1 }]
    },
    darkMode: false,
    events: baseEvents,
    viewLabel: 'Month',
    assert: async (card) => {
      await expect(card).toContainText('Standup');
      await expect(card.locator('.event').filter({ hasText: 'Standup' })).toHaveCSS('background-color', 'rgb(248, 215, 218)');
      await expect(card.locator('.event').filter({ hasText: 'Standup' })).toHaveCSS('color', 'rgb(114, 28, 36)');
      await expect(card.locator('.day-cell[data-date^="2026-03-14"]').first()).toHaveClass(/day-style-has-background/);
      await expect(card.locator('.day-cell[data-date^="2026-03-14"]').first()).toHaveCSS('background-color', 'rgb(220, 252, 231)');
      await expect(card.locator('.day-cell[data-date^="2026-03-15"]').first()).toHaveClass(/day-style-has-background/);
      await expect(card.locator('.day-cell[data-date^="2026-03-15"]').first()).toHaveCSS('background-color', 'rgb(220, 252, 231)');
    }
  },
  { name: 'month-dense-overflow-collapsed', config: { default_view: 'month', show_all_events_month: false }, darkMode: false, events: overflowEvents, viewLabel: 'Month', assert: async (card) => { await expect(card.locator('.more-events')).toContainText(/\+\d+ more/); } },
  { name: 'month-dense-overflow-expanded', config: { default_view: 'month', show_all_events_month: true }, darkMode: false, events: overflowEvents, viewLabel: 'Month', assert: async (card) => { expect(await card.locator('.day-cell.today .event, .day-cell.today .week-compact-event').count()).toBeGreaterThan(8); } },
  { name: 'event-location-full', config: { default_view: 'week-standard', show_event_location: true, use_short_location: false, week_start_hour: 8, week_end_hour: 16 }, darkMode: false, events: locationEvents, viewLabel: 'Schedule', assert: async (card) => { await expect(card.locator('.week-standard-event-location').first()).toContainText('Building Q'); } },
  { name: 'event-location-short', config: { default_view: 'week-standard', show_event_location: true, use_short_location: true, week_start_hour: 8, week_end_hour: 16 }, darkMode: false, events: locationEvents, viewLabel: 'Schedule', assert: async (card) => { await expect(card.locator('.week-standard-event-location').first()).toContainText('Extremely Long Conference Center Road'); await expect(card.locator('.week-standard-event-location').first()).not.toContainText('Building Q'); } },
  { name: 'background-header-opacity', config: { default_view: 'month', background_opacity: 45, header_background_opacity: 20, background_image_url: INLINE_BACKGROUND_SVG, background_image_size: '96px 96px', background_image_position: 'top left', background_image_repeat: 'repeat', header_color: '#0f172a', header_text_color: '#ffffff' }, darkMode: false, events: baseEvents, viewLabel: 'Month' },
  { name: 'week-standard-current-time-bar', config: { default_view: 'week-standard', show_current_time_bar: true, week_start_hour: 8, week_end_hour: 18 }, darkMode: false, events: baseEvents, viewLabel: 'Schedule', assert: async (card) => { await expect(card.locator('.current-time-line')).toBeVisible(); } },
  { name: 'week-compact-compact-header', config: { default_view: 'week-compact', compact_header: true }, darkMode: false, events: baseEvents, viewLabel: 'Week', headerSelector: '.header-compact' },
  { name: 'month-compact-height', config: { default_view: 'month', compact_height: true }, darkMode: false, events: baseEvents, viewLabel: 'Month' },
  { name: 'month-mobile', config: { default_view: 'month', show_all_events_month: false }, darkMode: false, events: baseEvents, viewLabel: 'Month', viewport: { width: 390, height: 900 } },
  { name: 'week-compact-mobile', config: { default_view: 'week-compact' }, darkMode: false, events: baseEvents, viewLabel: 'Week', viewport: { width: 390, height: 900 } },
  { name: 'agenda-mobile', config: { default_view: 'agenda' }, darkMode: false, events: baseEvents, viewLabel: 'Agenda', viewport: { width: 390, height: 900 } },
  { name: 'hostile-dataset', config: { default_view: 'agenda', combine_calendars: true }, darkMode: false, events: hostileEvents, viewLabel: 'Agenda' },
  { name: 'configure-all-options', config: {
      default_view: 'agenda',
      combine_calendars: true,
      combine_style: 'stripes',
      combine_background: '#e3f2fd',
      show_all_events_month: true,
      show_all_details_month: true,
      event_calendar_friendly_name: true,
      event_title_prefix: 'badge_icon',
      show_event_location: true,
      use_short_location: false,
      show_current_time_bar: true,
      virtual_calendars: [{ id: 'all', name: 'All Calendars', icon: 'mdi:calendar-multiple', color: '#7c3aed', entities: ['calendar.family', 'calendar.work'] }],
      event_styles: [{ id: 'style-night', priority: 10, match: { title: 'Night' }, style: { background_color: '#ede9fe', event_font_color: '#4c1d95' } }],
      day_styles: [{ condition: 'weekday', background: '#1f2937', background_opacity: 0.4 }],
      colors: { 'calendar.family': '#2196f3', 'calendar.work': '#4caf50' },
      color_scheme: 'dark'
    },
    darkMode: true,
    events: baseEvents,
    viewLabel: 'Agenda'
  }
];

const eventSelectorByView = {
  month: '.event, .all-day-event',
  week: '.week-compact-event, .week-standard-event, .all-day-event',
  'week-compact': '.week-compact-event, .all-day-event',
  schedule: '.week-standard-event, .all-day-event',
  'week-standard': '.week-standard-event, .all-day-event',
  agenda: '.agenda-event'
};

test.beforeEach(async ({ page }) => {
  await page.addInitScript((now) => {
    const OriginalDate = Date;
    class MockDate extends OriginalDate {
      constructor(...args) {
        if (args.length === 0) return new OriginalDate(now);
        return new OriginalDate(...args);
      }
      static now() { return new OriginalDate(now).getTime(); }
    }
    window.Date = MockDate;
  }, FIXED_NOW);
});

test('visual: event modal renders rich markdown and HTML descriptions', async ({ page }) => {
  const fixtureUrl = `file://${path.join(process.cwd(), 'playwright', 'ha-fixture.html')}`;
  await page.goto(fixtureUrl);
  await page.evaluate((params) => window.renderCalendarCard(params), {
    config: { entities: ['calendar.family', 'calendar.work'], title: 'Rich Description Calendar', default_view: 'agenda' },
    events: richDescriptionEvents,
    darkMode: false
  });

  const card = page.locator('skylight-calendar-card');
  await expect(card).toBeVisible();

  await card.locator('.agenda-event').filter({ hasText: 'Markdown Description Demo' }).click();
  const modal = card.locator('#event-modal');
  await expect(modal).toHaveClass(/show/);

  const markdownDescription = modal.locator('.event-description-content');
  await expect(markdownDescription.locator('h2')).toHaveText('Markdown Details');
  await expect(markdownDescription.locator('strong')).toHaveText('snacks');
  await expect(markdownDescription.locator('a')).toHaveAttribute('href', 'https://example.com/menu');
  await expect(markdownDescription.locator('ul li')).toHaveText(['Chips', 'Drinks']);
  await expect(markdownDescription.locator('code')).toHaveText('door code');
  await expect(markdownDescription).toHaveCSS('overflow-wrap', 'anywhere');

  await modal.locator('.modal-close').click();
  await expect(modal).not.toHaveClass(/show/);

  await card.locator('.agenda-event').filter({ hasText: 'HTML Description Demo' }).click();
  await expect(modal).toHaveClass(/show/);

  const htmlDescription = modal.locator('.event-description-content');
  await expect(htmlDescription.locator('h3')).toHaveText('HTML Details');
  await expect(htmlDescription.locator('em')).toHaveText('printed notes');
  await expect(htmlDescription.locator('blockquote')).toHaveText('Setup starts early.');
  await expect(htmlDescription.locator('a')).toHaveAttribute('href', '/local/rich-info');
});

for (const scenario of cases) {
  test(`visual: ${scenario.name}`, async ({ page }) => {
    if (scenario.viewport) {
      await page.setViewportSize(scenario.viewport);
    }

    const fixtureUrl = `file://${path.join(process.cwd(), 'playwright', 'ha-fixture.html')}`;
    await page.goto(fixtureUrl);
    await page.evaluate((params) => window.renderCalendarCard(params), {
      config: { entities: ['calendar.family', 'calendar.work'], title: 'Visual Test Calendar', ...scenario.config },
      events: scenario.events,
      darkMode: scenario.darkMode
    });

    const card = page.locator('skylight-calendar-card');
    await expect(card).toBeVisible();
    await expect(card).toContainText('Visual Test Calendar');
    await expect(card).toContainText(scenario.viewLabel);
    await expect(card).not.toContainText('undefined');
    await expect(card).not.toContainText('null');
    await expect(card).not.toContainText('Invalid Date');

    const header = card.locator(scenario.headerSelector || '.header, .calendar-header').first();
    await expect(header).toBeVisible();
    await expect(header).toContainText('Visual Test Calendar');
    await expect(header.locator('.nav-button, .today-button, .view-mode-select')).not.toHaveCount(0);

    const view = scenario.config.default_view || 'month';
    const eventSelector = eventSelectorByView[view] || '.event';
    expect(await card.locator(eventSelector).count()).toBeGreaterThan(0);

    if (scenario.assert) {
      await scenario.assert(card, page);
    }

    await expect(card).toHaveScreenshot(`${scenario.name}.png`, {
      animations: 'disabled',
      maxDiffPixelRatio: 0.01
    });
  });
}

test('regression: month compact-height view selector stays clickable without devtools', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 720 });

  const fixtureUrl = `file://${path.join(process.cwd(), 'playwright', 'ha-fixture.html')}`;
  await page.goto(fixtureUrl);
  await page.evaluate((params) => window.renderCalendarCard(params), {
    config: { entities: ['calendar.family', 'calendar.work'], title: 'Regression Calendar', default_view: 'month', compact_height: true },
    events: baseEvents,
    darkMode: false
  });

  const card = page.locator('skylight-calendar-card');
  await expect(card).toContainText('Month');

  const selector = card.locator('#view-mode-select');
  await expect(selector).toBeVisible();
  await expect(selector).toBeEnabled();
  await selector.selectOption('agenda');
  await expect(card.locator('.agenda-container')).toBeVisible();

  await selector.selectOption('month');
  await expect(card.locator('.calendar-grid')).toBeVisible();

  await page.setViewportSize({ width: 1280, height: 760 });
  await expect(card.locator('.calendar-grid')).toBeVisible();
  await expect(selector).toBeEnabled();
});

test('regression issue 321: compact header stays single-row in wide layout when naturally unwrapped', async ({ page }) => {
  await page.setViewportSize({ width: 1360, height: 820 });
  const fixtureUrl = `file://${path.join(process.cwd(), 'playwright', 'ha-fixture.html')}`;
  await page.goto(fixtureUrl);
  await page.evaluate((params) => window.renderCalendarCard(params), {
    config: {
      entities: ['calendar.family', 'calendar.work'],
      title: 'Issue 321 Compact',
      default_view: 'week-compact',
      compact_header: true,
      compact_height: false,
      hide_dark_mode_toggle: true,
      show_dashboard_nav_button: true,
      header_weather_sensor: 'weather.mock',
      enable_event_management: true,
      hide_view_selector: false,
      day_badges: [],
      uix: { style: '.nav-button,.today-button,.add-event-button,.view-mode-select{font-size:18px!important;}' }
    },
    events: baseEvents,
    weather: { 'weather.mock': { temperature: 72, condition: 'sunny' } },
    darkMode: false
  });

  const card = page.locator('skylight-calendar-card');
  await expect(card).toBeVisible();
  await expect(card.locator('.header-compact')).toBeVisible();

  await expect.poll(async () => {
    return await card.evaluate((host) => {
      const root = host.shadowRoot;
      const left = root.querySelector('.compact-header-left');
      const controls = root.querySelector('.compact-header-controls');
      if (!left || !controls) return null;
      const delta = Math.abs(left.getBoundingClientRect().top - controls.getBoundingClientRect().top);
      return delta;
    });
  }).toBeLessThan(2);
});

test('regression issue 321: standard header stays single-row in wide layout when naturally unwrapped', async ({ page }) => {
  await page.setViewportSize({ width: 1360, height: 820 });
  const fixtureUrl = `file://${path.join(process.cwd(), 'playwright', 'ha-fixture.html')}`;
  await page.goto(fixtureUrl);
  await page.evaluate((params) => window.renderCalendarCard(params), {
    config: {
      entities: ['calendar.family', 'calendar.work'],
      title: 'Issue 321 Standard',
      default_view: 'week-standard',
      compact_header: false,
      compact_height: false,
      hide_dark_mode_toggle: true,
      show_dashboard_nav_button: true,
      header_weather_sensor: 'weather.mock',
      enable_event_management: true,
      hide_view_selector: false,
      day_badges: [],
      uix: { style: '.nav-button,.today-button,.add-event-button,.view-mode-select{font-size:18px!important;}' }
    },
    events: baseEvents,
    weather: { 'weather.mock': { temperature: 72, condition: 'sunny' } },
    darkMode: false
  });

  const card = page.locator('skylight-calendar-card');
  await expect(card).toBeVisible();
  await expect(card.locator('.header')).toBeVisible();

  await expect.poll(async () => {
    return await card.evaluate((host) => {
      const root = host.shadowRoot;
      const left = root.querySelector('.header-left');
      const controls = root.querySelector('.header-controls');
      if (!left || !controls) return null;
      const delta = Math.abs(left.getBoundingClientRect().top - controls.getBoundingClientRect().top);
      return delta;
    });
  }).toBeLessThan(2);
});
