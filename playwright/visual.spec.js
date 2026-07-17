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


const monthVisualEvents = {
  'calendar.family': [
    { summary: 'Breakfast Prep', start: '2026-03-01T08:00:00Z', end: '2026-03-01T08:30:00Z' },
    { summary: 'School Spirit Week With A Long Title', start: '2026-03-02', end: '2026-03-06' },
    { summary: 'Dentist', start: '2026-03-03T16:00:00Z', end: '2026-03-03T16:30:00Z' },
    { summary: 'Family Dinner', start: '2026-03-05T18:00:00Z', end: '2026-03-05T19:00:00Z' },
    { summary: 'Weekend Trip Across Rows With A Long Title', start: '2026-03-07', end: '2026-03-10' },
    { summary: 'Soccer Practice', start: '2026-03-10T17:00:00Z', end: '2026-03-10T18:00:00Z' },
    { summary: 'Library Day', start: '2026-03-12T15:30:00Z', end: '2026-03-12T16:30:00Z' },
    { summary: 'Birthday Party', start: '2026-03-14T13:00:00Z', end: '2026-03-14T15:00:00Z' },
    { summary: 'Coffee', start: '2026-03-15T09:00:00Z', end: '2026-03-15T09:30:00Z', location: 'Kitchen' },
    { summary: 'All Day Holiday', start: '2026-03-16', end: '2026-03-17' },
    { summary: 'Conference With A Long Multi-Day Title', start: '2026-03-17', end: '2026-03-20' },
    { summary: 'Night Shift', start: '2026-03-15T23:30:00Z', end: '2026-03-16T06:30:00Z' },
    { summary: 'Shared Duplicate Demo', start: '2026-03-20T11:00:00Z', end: '2026-03-20T12:00:00Z', location: 'Shared Room' },
    { summary: 'Spring Break Multi-Day Family Event With A Long Title', start: '2026-03-22', end: '2026-03-26' },
    { summary: 'Park Meetup', start: '2026-03-23T15:00:00Z', end: '2026-03-23T16:00:00Z' },
    { summary: 'Overflow One', start: '2026-03-24T08:00:00Z', end: '2026-03-24T08:30:00Z' },
    { summary: 'Overflow Two', start: '2026-03-24T09:00:00Z', end: '2026-03-24T09:30:00Z' },
    { summary: 'Overflow Three', start: '2026-03-24T10:00:00Z', end: '2026-03-24T10:30:00Z' },
    { summary: 'Piano Lesson', start: '2026-03-25T17:30:00Z', end: '2026-03-25T18:00:00Z' },
    { summary: 'Month End Errand', start: '2026-03-29T11:00:00Z', end: '2026-03-29T12:00:00Z' },
    { summary: 'Overnight Guests Across Month Boundary', start: '2026-03-30', end: '2026-04-02' },
    { summary: 'Pay Bills', start: '2026-03-31T09:00:00Z', end: '2026-03-31T09:30:00Z' }
  ],
  'calendar.work': [
    { summary: 'Planning', start: '2026-03-02T13:00:00Z', end: '2026-03-02T14:00:00Z' },
    { summary: 'Design Review', start: '2026-03-04T10:00:00Z', end: '2026-03-04T11:00:00Z' },
    { summary: 'Release Window With Long Title', start: '2026-03-06', end: '2026-03-08' },
    { summary: 'Standup', start: '2026-03-09T14:00:00Z', end: '2026-03-09T14:15:00Z', location: 'Zoom' },
    { summary: 'Roadmap Review', start: '2026-03-11T16:00:00Z', end: '2026-03-11T17:00:00Z' },
    { summary: 'Customer Call', start: '2026-03-13T19:00:00Z', end: '2026-03-13T20:00:00Z' },
    { summary: 'Standup', start: '2026-03-15T14:00:00Z', end: '2026-03-15T14:15:00Z', location: 'Zoom' },
    { summary: 'Planning', start: '2026-03-18T18:00:00Z', end: '2026-03-18T19:00:00Z' },
    { summary: 'Shared Duplicate Demo', start: '2026-03-20T11:00:00Z', end: '2026-03-20T12:00:00Z', location: 'Shared Room' },
    { summary: 'Quarter Planning Multi-Day Work Event With A Long Title', start: '2026-03-24', end: '2026-03-28' },
    { summary: 'Sprint Demo', start: '2026-03-26T15:00:00Z', end: '2026-03-26T16:00:00Z' },
    { summary: 'Month End Report', start: '2026-03-30T16:00:00Z', end: '2026-03-30T17:00:00Z' },
    { summary: 'April Prep', start: '2026-03-31T20:00:00Z', end: '2026-03-31T21:00:00Z' }
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

const stackedDayBadgeEvents = {
  'calendar.family': [
    { summary: 'School Day', start: '2026-03-16', end: '2026-03-17' },
    { summary: 'Library Day', start: '2026-03-16T15:30:00Z', end: '2026-03-16T16:30:00Z' },
    { summary: 'Dinner', start: '2026-03-17T18:00:00Z', end: '2026-03-17T19:00:00Z' }
  ],
  'calendar.work': [
    { summary: 'Planning', start: '2026-03-18T13:00:00Z', end: '2026-03-18T14:00:00Z' }
  ]
};

const scheduleSpanEvents = {
  'calendar.family': [
    { summary: 'Classic Multi-Day Family Vacation With A Long Title', start: '2026-03-15', end: '2026-03-19' },
    { summary: 'Custom Blue School Break With A Long Title', start: '2026-03-16', end: '2026-03-19' },
    { summary: 'Custom Neutral Work Travel With A Long Title', start: '2026-03-17', end: '2026-03-20' },
    { summary: 'Combined Stripes Multi-Calendar Event With A Long Title', start: '2026-03-18', end: '2026-03-21' },
    { summary: 'Combined Bars Multi-Calendar Event With A Long Title', start: '2026-03-19', end: '2026-03-22' }
  ],
  'calendar.work': [
    { summary: 'Combined Stripes Multi-Calendar Event With A Long Title', start: '2026-03-18', end: '2026-03-21' },
    { summary: 'Combined Bars Multi-Calendar Event With A Long Title', start: '2026-03-19', end: '2026-03-22' }
  ]
};

const stackedDayBadgeConfig = {
  day_badge_layout_week: 'stacked',
  day_badges: [
    { conditions: { title: 'School Day' }, icon: 'mdi:school', text: 'School Day' },
    { conditions: { title: 'Library Day' }, icon: 'mdi:book-open-page-variant', text: 'Library Day' }
  ]
};

const defaultColors = { 'calendar.family': '#ff5f66', 'calendar.work': '#14c8bd' };

const cases = [
  {
    name: 'month-basic-light',
    config: { default_view: 'month', color_scheme: 'light' },
    darkMode: false,
    events: monthVisualEvents,
    viewLabel: 'Month',
    assert: async (card) => {
      const firstWeek = card.locator('.day-cell[data-date^="2026-03-03"]').first();
      const middleWeek = card.locator('.day-cell[data-date^="2026-03-15"]').first();
      const finalWeek = card.locator('.day-cell[data-date^="2026-03-31"]').first();
      await expect(firstWeek).toContainText('Dentist');
      await expect(card.locator('.day-cell[data-date^="2026-03-10"]').first()).toContainText('Soccer Practice');
      await expect(middleWeek).toContainText('Coffee');
      await expect(card.locator('.day-cell[data-date^="2026-03-24"]').first()).toContainText(/Overflow|more/);
      await expect(finalWeek).toContainText('Pay Bills');

      const sunday = card.locator('.day-cell[data-date^="2026-03-15"]').first();
      await expect(sunday).toContainText('Coffee');
      await expect(sunday).toContainText('Standup');
      await expect(sunday).toContainText('Night Shift');
      await expect(sunday.locator('.month-span-event-spacer')).toHaveCount(0);
      await expect(sunday.locator('.more-events')).toHaveCount(0);

      const coffeeBox = await sunday.locator('.event').filter({ hasText: 'Coffee' }).boundingBox();
      const standupBox = await sunday.locator('.event').filter({ hasText: 'Standup' }).boundingBox();
      const nightShiftBox = await sunday.locator('.event').filter({ hasText: 'Night Shift' }).boundingBox();
      expect(coffeeBox).not.toBeNull();
      expect(standupBox).not.toBeNull();
      expect(nightShiftBox).not.toBeNull();
      expect(standupBox.y - coffeeBox.y).toBeLessThan(40);
      expect(nightShiftBox.y - standupBox.y).toBeLessThan(40);

      await expect(card.locator('.month-span-event').filter({ hasText: 'Conference With A Long Multi-Day Title' })).toHaveCount(1);
      await expect(card.locator('.month-span-event').filter({ hasText: 'Conference With A Long Multi-Day Title' })).toHaveAttribute('data-month-span-days', '3');
      expect(await card.locator('.month-span-event-placeholder').count()).toBeGreaterThanOrEqual(2);

      const thursday = card.locator('.day-cell[data-date^="2026-03-26"]').first();
      const sprintDemoBox = await thursday.locator('.event').filter({ hasText: 'Sprint Demo' }).boundingBox();
      const quarterPlanningPlaceholderBox = await thursday.locator('.month-span-event-placeholder').first().boundingBox();
      expect(sprintDemoBox).not.toBeNull();
      expect(quarterPlanningPlaceholderBox).not.toBeNull();
      expect(sprintDemoBox.y + sprintDemoBox.height).toBeLessThanOrEqual(quarterPlanningPlaceholderBox.y + 1);
    }
  },
  { name: 'month-basic-dark', config: { default_view: 'month', color_scheme: 'dark' }, darkMode: true, events: monthVisualEvents, viewLabel: 'Month' },
  { name: 'week-basic-light', config: { default_view: 'week', color_scheme: 'light' }, darkMode: false, events: baseEvents, viewLabel: 'Week' },
  { name: 'week-basic-dark', config: { default_view: 'week', color_scheme: 'dark' }, darkMode: true, events: baseEvents, viewLabel: 'Week' },
  { name: 'week-compact-basic-light', config: { default_view: 'week-compact', color_scheme: 'light' }, darkMode: false, events: baseEvents, viewLabel: 'Week' },
  { name: 'week-standard-basic-light', config: { default_view: 'week-standard', color_scheme: 'light' }, darkMode: false, events: baseEvents, viewLabel: 'Schedule' },
  {
    name: 'week-standard-stacked-day-badges',
    config: { default_view: 'week-standard', color_scheme: 'light', ...stackedDayBadgeConfig },
    darkMode: false,
    events: stackedDayBadgeEvents,
    viewLabel: 'Schedule',
    assert: async (card) => {
      const mondayHeader = card.locator('.week-standard-day-column[data-date^="2026-03-16"] .week-standard-day-header');
      await expect(mondayHeader.locator('.day-badge')).toHaveCount(2);
      await expect(mondayHeader).toContainText('School Day');
      await expect(mondayHeader).toContainText('Library Day');

      const headerHeights = await card.locator('.week-standard-day-header').evaluateAll((headers) =>
        headers.map((header) => Math.round(header.getBoundingClientRect().height))
      );
      expect(new Set(headerHeights).size).toBe(1);

      const timeHeaderHeight = await card.locator('.time-column-header-spacer').evaluate((spacer) => Math.round(spacer.getBoundingClientRect().height));
      const extraSpacerHeight = await card.locator('.time-column-extra-spacer').evaluate((spacer) => Math.round(spacer.getBoundingClientRect().height));
      expect(timeHeaderHeight).not.toBe(headerHeights[0]);
      expect(timeHeaderHeight + extraSpacerHeight).toBe(headerHeights[0]);

      const slotTops = await card.locator('.day-time-slots').evaluateAll((slots) =>
        slots.map((slot) => Math.round(slot.getBoundingClientRect().top))
      );
      expect(new Set(slotTops).size).toBe(1);
    }
  },
  {
    name: 'week-compact-stacked-day-badges',
    config: { default_view: 'week-compact', color_scheme: 'light', ...stackedDayBadgeConfig },
    darkMode: false,
    events: stackedDayBadgeEvents,
    viewLabel: 'Week',
    assert: async (card) => {
      const mondayHeader = card.locator('.week-day-column[data-date^="2026-03-16"] .week-day-header');
      await expect(mondayHeader.locator('.day-badge')).toHaveCount(2);
      await expect(mondayHeader).toContainText('School Day');
      await expect(mondayHeader).toContainText('Library Day');
    }
  },
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
  {
    name: 'schedule-all-day-continuous-spans',
    config: {
      default_view: 'schedule',
      combine_calendars: true,
      combine_style: 'stripes',
      combine_background: '#d7ebff',
      colors: defaultColors,
      event_styles: [
        { match: { title: 'Custom Blue School Break With A Long Title' }, style: { background_color: '#e0f2fe', event_font_color: '#075985', icon: 'mdi:water' } },
        { match: { title: 'Custom Neutral Work Travel With A Long Title' }, style: { background_color: '#f8f3e9', event_font_color: '#7c2d12', icon: 'mdi:minus' } },
        { match: { title: 'Combined Bars Multi-Calendar Event With A Long Title' }, style: { background_color: '#fef3c7', event_font_color: '#78350f', icon: 'mdi:format-list-bulleted' } }
      ]
    },
    darkMode: false,
    events: scheduleSpanEvents,
    viewLabel: 'Schedule',
    assert: async (card) => {
      await expect(card.locator('.all-day-event').filter({ hasText: 'Classic Multi-Day Family Vacation With A Long Title' })).toHaveCount(1);
      await expect(card.locator('.all-day-event').filter({ hasText: 'Custom Blue School Break With A Long Title' })).toHaveCount(1);
      await expect(card.locator('.all-day-event').filter({ hasText: 'Custom Neutral Work Travel With A Long Title' })).toHaveCount(1);
      await expect(card.locator('.all-day-event').filter({ hasText: 'Combined Stripes Multi-Calendar Event With A Long Title' })).toHaveCount(1);
      await expect(card.locator('.all-day-event').filter({ hasText: 'Combined Bars Multi-Calendar Event With A Long Title' })).toHaveCount(1);
      expect(await card.locator('.all-day-event-span-placeholder').count()).toBeGreaterThan(5);
      const classicSpanBox = await card.locator('.all-day-event').filter({ hasText: 'Classic Multi-Day Family Vacation With A Long Title' }).boundingBox();
      const finalDayAllDayBox = await card.locator('.week-standard-day-column[data-date^="2026-03-18"] .all-day-events').boundingBox();
      expect(classicSpanBox).not.toBeNull();
      expect(finalDayAllDayBox).not.toBeNull();
      expect(Math.abs((classicSpanBox.x + classicSpanBox.width) - (finalDayAllDayBox.x + finalDayAllDayBox.width - 8))).toBeLessThanOrEqual(2);
    }
  },
  { name: 'virtual-calendars', config: { default_view: 'schedule', virtual_calendars: [{ name: 'home+work', icon: 'mdi:calendar', entities: ['calendar.family', 'calendar.work'] }] }, darkMode: false, events: baseEvents, viewLabel: 'Schedule' },
  {
    name: 'styled-events-days',
    config: {
      default_view: 'month',
      event_styles: [{ id: 'style-standup', priority: 10, match: { title: 'Standup' }, style: { background_color: '#f8d7da', event_font_color: '#721c24' } }],
      day_styles: [{ condition: 'day_of_week', day_of_week: ['saturday', 'sunday'], background: '#dcfce7', opacity: 1 }]
    },
    darkMode: false,
    events: monthVisualEvents,
    viewLabel: 'Month',
    assert: async (card) => {
      await expect(card).toContainText('Standup');
      await expect(card.locator('.event').filter({ hasText: 'Standup' }).first()).toHaveCSS('background-color', 'rgb(248, 215, 218)');
      await expect(card.locator('.event').filter({ hasText: 'Standup' }).first()).toHaveCSS('color', 'rgb(114, 28, 36)');
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
  {
    name: 'background-header-opacity',
    config: { default_view: 'month', background_opacity: 45, header_background_opacity: 20, background_image_url: INLINE_BACKGROUND_SVG, background_image_size: '96px 96px', background_image_position: 'top left', background_image_repeat: 'repeat', header_color: '#0f172a', header_text_color: '#ffffff' },
    darkMode: false,
    events: monthVisualEvents,
    viewLabel: 'Month',
    assert: async (card) => {
      const sunday = card.locator('.day-cell[data-date^="2026-03-15"]').first();
      await expect(sunday).toContainText('Night Shift');
      await expect(sunday.locator('.month-span-event-spacer')).toHaveCount(0);
      await expect(card.locator('.month-span-event').filter({ hasText: 'Conference With A Long Multi-Day Title' })).toHaveCount(1);
    }
  },
  { name: 'week-standard-current-time-bar', config: { default_view: 'week-standard', show_current_time_bar: true, week_start_hour: 8, week_end_hour: 18 }, darkMode: false, events: baseEvents, viewLabel: 'Schedule', assert: async (card) => { await expect(card.locator('.current-time-line')).toBeVisible(); } },
  { name: 'week-compact-compact-header', config: { default_view: 'week-compact', compact_header: true }, darkMode: false, events: baseEvents, viewLabel: 'Week', headerSelector: '.header-compact' },
  { name: 'month-compact-height', config: { default_view: 'month', compact_height: true }, darkMode: false, events: monthVisualEvents, viewLabel: 'Month' },
  { name: 'month-mobile', config: { default_view: 'month', show_all_events_month: false }, darkMode: false, events: monthVisualEvents, viewLabel: 'Month', viewport: { width: 390, height: 900 } },
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



const compactHeightViewports = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'medium', width: 980, height: 820 },
  { name: 'desktop', width: 1400, height: 1000 }
];

const compactHeightViews = [
  { name: 'month', defaultView: 'month', viewLabel: 'Month', containerSelector: '.calendar-grid', internalScrollSelector: '.calendar-grid' },
  { name: 'week-compact', defaultView: 'week-compact', viewLabel: 'Week', containerSelector: '.week-compact-container', internalScrollSelector: '.week-compact-container' },
  { name: 'week-standard', defaultView: 'week-standard', viewLabel: 'Schedule', containerSelector: '.week-standard-container', internalScrollSelector: '.week-standard-container' },
  { name: 'agenda', defaultView: 'agenda', viewLabel: 'Agenda', containerSelector: '.agenda-container', internalScrollSelector: '.agenda-container' }
];

const compactHeightAllocationModes = [
  { name: 'viewport', parentStyle: '' },
  { name: 'fixed-parent', parentStyle: 'width: 100%; min-width: 0; height: 620px; min-height: 0; overflow: hidden; display: grid; grid-template-columns: minmax(0, 1fr);' }
];

const sharedHeaderViewports = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'tablet', width: 768, height: 1024 }
];

const sharedHeaderLayouts = [
  { name: 'compact', compactHeader: true },
  { name: 'standard', compactHeader: false }
];

const sharedHeaderTitles = [
  { name: 'spaced', value: 'Family Calendar With A Really Long Name Testing Shared Header Wrapping' },
  { name: 'unbroken', value: 'FamilyCalendarwithareallylongnametesting' }
];

const compactStressEvents = {
  'calendar.family': [
    { summary: 'All Day School Closure With An Exceptionally Long Wrapping Title', start: '2026-03-15', end: '2026-03-16', location: LONG_LOCATION },
    { summary: 'Multi-Day Family Travel Across Several Busy Days With Wrapping Text', start: '2026-03-16', end: '2026-03-20', location: LONG_LOCATION },
    { summary: 'Early Breakfast Preparation With Long Notes', start: '2026-03-15T07:00:00Z', end: '2026-03-15T08:00:00Z', location: LONG_LOCATION },
    { summary: 'Morning School Dropoff And Supply Pickup With A Very Long Title', start: '2026-03-15T08:30:00Z', end: '2026-03-15T09:15:00Z', location: LONG_LOCATION },
    { summary: 'Lunch Planning Call That Wraps On Narrow Week Compact Columns', start: '2026-03-15T12:00:00Z', end: '2026-03-15T12:45:00Z', location: LONG_LOCATION },
    { summary: 'Afternoon Activity Signup Review', start: '2026-03-15T15:00:00Z', end: '2026-03-15T16:00:00Z', location: LONG_LOCATION },
    { summary: 'Dinner With Visiting Family And Very Long Location', start: '2026-03-15T18:00:00Z', end: '2026-03-15T19:30:00Z', location: LONG_LOCATION },
    { summary: 'Overnight Family Support Shift', start: '2026-03-15T23:00:00Z', end: '2026-03-16T02:00:00Z', location: LONG_LOCATION },
    { summary: 'Wednesday Piano Recital Setup', start: '2026-03-18T16:00:00Z', end: '2026-03-18T17:00:00Z', location: LONG_LOCATION },
    { summary: 'Weekend Tournament Multi-Day', start: '2026-03-20', end: '2026-03-23' }
  ],
  'calendar.work': [
    { summary: 'All Day Release Freeze With Long Calendar Badge Text', start: '2026-03-15', end: '2026-03-16', location: LONG_LOCATION },
    { summary: 'Weekly Planning Session With Long Wrapping Title And Location', start: '2026-03-15T09:30:00Z', end: '2026-03-15T10:30:00Z', location: LONG_LOCATION },
    { summary: 'Architecture Review With Many Participants And Wrapping Title', start: '2026-03-15T10:45:00Z', end: '2026-03-15T11:45:00Z', location: LONG_LOCATION },
    { summary: 'Customer Escalation Triage With Extremely Long Title', start: '2026-03-15T13:00:00Z', end: '2026-03-15T14:00:00Z', location: LONG_LOCATION },
    { summary: 'Design Critique And Follow Up', start: '2026-03-15T14:15:00Z', end: '2026-03-15T15:00:00Z', location: LONG_LOCATION },
    { summary: 'Late Deployment Window', start: '2026-03-15T20:00:00Z', end: '2026-03-15T22:00:00Z', location: LONG_LOCATION },
    { summary: 'Cross-Team Workshop Multi-Day With Long Title', start: '2026-03-17', end: '2026-03-21', location: LONG_LOCATION },
    { summary: 'Thursday Status Review', start: '2026-03-19T15:00:00Z', end: '2026-03-19T16:00:00Z', location: LONG_LOCATION }
  ]
};

const compactStressConfig = {
  compact_height: true,
  show_event_location: true,
  use_short_location: false,
  show_all_events_month: false,
  header_weather_sensor: 'weather.mock',
  colors: defaultColors,
  day_badge_layout_week: 'stacked',
  day_badges: [
    { conditions: { title_contains: 'School' }, icon: 'mdi:school', text: 'School' },
    { conditions: { title_contains: 'Release' }, icon: 'mdi:rocket-launch', text: 'Release' },
    { conditions: { title_contains: 'Travel' }, icon: 'mdi:bag-suitcase', text: 'Travel' }
  ]
};

const eventSelectorByView = {
  month: '.event, .all-day-event',
  week: '.week-compact-event, .week-standard-event, .all-day-event',
  'week-compact': '.week-compact-event, .all-day-event',
  schedule: '.week-standard-event, .all-day-event',
  'week-standard': '.week-standard-event, .all-day-event',
  agenda: '.agenda-event'
};

async function headerGroupsShareRow(left, controls) {
  const leftBox = await left.boundingBox();
  const controlsBox = await controls.boundingBox();

  if (!leftBox || !controlsBox) return false;

  const leftMid = leftBox.y + leftBox.height / 2;
  const controlsMid = controlsBox.y + controlsBox.height / 2;

  return (
    leftMid >= controlsBox.y &&
    leftMid <= controlsBox.y + controlsBox.height &&
    controlsMid >= leftBox.y &&
    controlsMid <= leftBox.y + leftBox.height
  );
}


async function centerOffsetWithinTolerance(container, child, tolerance = 12) {
  const containerBox = await container.boundingBox();
  const childBox = await child.boundingBox();
  if (!containerBox || !childBox) return false;

  const containerCenter = containerBox.x + containerBox.width / 2;
  const childCenter = childBox.x + childBox.width / 2;
  return Math.abs(containerCenter - childCenter) <= tolerance;
}

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

async function renderScheduleColorModeSpanCase(page, eventColorMode, title) {
  const fixtureUrl = `file://${path.join(process.cwd(), 'playwright', 'ha-fixture.html')}`;
  await page.goto(fixtureUrl);
  await page.evaluate((params) => window.renderCalendarCard(params), {
    config: {
      entities: ['calendar.family'],
      title: 'Schedule Color Mode Span Calendar',
      default_view: 'schedule',
      event_color_mode: eventColorMode,
      event_color_bar_width: 18,
      colors: { 'calendar.family': '#2563eb' }
    },
    events: {
      'calendar.family': [
        { summary: title, start: '2026-03-15', end: '2026-03-19' }
      ]
    },
    darkMode: false
  });

  const card = page.locator('skylight-calendar-card');
  await expect(card).toBeVisible();
  const event = card.locator('.all-day-event').filter({ hasText: title });
  await expect(event).toHaveCount(1);
  await expect(card.locator('.all-day-event-span-placeholder')).toHaveCount(3);

  const finalDayAllDayBox = await card.locator('.week-standard-day-column[data-date^="2026-03-18"] .all-day-events').boundingBox();
  const eventBox = await event.boundingBox();
  expect(finalDayAllDayBox).not.toBeNull();
  expect(eventBox).not.toBeNull();
  expect(Math.abs((eventBox.x + eventBox.width) - (finalDayAllDayBox.x + finalDayAllDayBox.width - 8))).toBeLessThanOrEqual(2);

  const eventClasses = await event.getAttribute('class');
  expect(eventClasses || '').not.toContain('continues-next');
  const borderTopRightRadius = await event.evaluate((element) => getComputedStyle(element).borderTopRightRadius);
  expect(borderTopRightRadius).not.toBe('0px');

  const backgroundImage = await event.evaluate((element) => getComputedStyle(element).backgroundImage);
  expect(backgroundImage).toContain('linear-gradient');
  expect(await card.locator('.all-day-event').evaluateAll((events) =>
    events.filter((element) => getComputedStyle(element).backgroundImage.includes('linear-gradient')).length
  )).toBe(1);
}

test('behavior: schedule left-tint multi-day all-day span renders one continuous left bar', async ({ page }) => {
  await renderScheduleColorModeSpanCase(
    page,
    'left-tint',
    'Left Tint Multi-Day School Break With A Long Title'
  );
});

test('behavior: schedule left-neutral multi-day all-day span renders one continuous left bar', async ({ page }) => {
  await renderScheduleColorModeSpanCase(
    page,
    'left-neutral',
    'Left Neutral Multi-Day Work Travel With A Long Title'
  );
});



test('behavior: month continuation placeholder reserves full event row height', async ({ page }) => {
  const fixtureUrl = `file://${path.join(process.cwd(), 'playwright', 'ha-fixture.html')}`;
  await page.goto(fixtureUrl);
  await page.evaluate((params) => window.renderCalendarCard(params), {
    config: {
      entities: ['calendar.family'],
      title: 'Month Span Placeholder Calendar',
      default_view: 'month',
      event_color_mode: 'left-tint',
      colors: { 'calendar.family': '#2563eb' },
      event_styles: [{
        match: { title_contains: 'Long Multi-Day' },
        style: { event_font_size: '15px' }
      }]
    },
    events: {
      'calendar.family': [
        { summary: 'Long Multi-Day Conference Planning Span With Extra Words', start: '2026-03-16', end: '2026-03-19' },
        { summary: 'Follow-up Timed Event', start: '2026-03-17T10:00:00Z', end: '2026-03-17T10:30:00Z' }
      ]
    },
    darkMode: false
  });

  const card = page.locator('skylight-calendar-card');
  await expect(card).toBeVisible();

  const visibleSpan = card.locator('.day-cell[data-date^="2026-03-16"] .month-span-event').filter({ hasText: 'Long Multi-Day' });
  const continuationPlaceholder = card.locator('.day-cell[data-date^="2026-03-17"] .month-span-event-placeholder').first();
  const timedEvent = card.locator('.day-cell[data-date^="2026-03-17"] .event').filter({ hasText: 'Follow-up Timed Event' });

  await expect(visibleSpan).toHaveCount(1);
  await expect(continuationPlaceholder).toHaveCount(1);
  await expect(timedEvent).toHaveCount(1);

  const visibleSpanBox = await visibleSpan.boundingBox();
  const placeholderBox = await continuationPlaceholder.boundingBox();
  const timedEventBox = await timedEvent.boundingBox();
  expect(visibleSpanBox).not.toBeNull();
  expect(placeholderBox).not.toBeNull();
  expect(timedEventBox).not.toBeNull();

  expect(Math.abs(placeholderBox.height - visibleSpanBox.height)).toBeLessThanOrEqual(1);
  expect(timedEventBox.y).toBeGreaterThanOrEqual(placeholderBox.y + placeholderBox.height - 1);
});


test('behavior: month compact-height continuous span is not clipped after first day', async ({ page }) => {
  const fixtureUrl = `file://${path.join(process.cwd(), 'playwright', 'ha-fixture.html')}`;
  await page.goto(fixtureUrl);
  await page.evaluate((params) => window.renderCalendarCard(params), {
    config: {
      entities: ['calendar.family'],
      title: 'Compact Month Span Calendar',
      default_view: 'month',
      compact_height: true,
      colors: { 'calendar.family': '#2563eb' }
    },
    events: {
      'calendar.family': [
        { summary: 'Compact Height Multi-Day Span With A Long Title', start: '2026-03-16', end: '2026-03-19' },
        { summary: 'Day Two Timed Event', start: '2026-03-17T10:00:00Z', end: '2026-03-17T10:30:00Z' }
      ]
    },
    darkMode: false
  });

  const card = page.locator('skylight-calendar-card');
  await expect(card).toBeVisible();

  const span = card.locator('.day-cell[data-date^="2026-03-16"] .month-span-event').filter({ hasText: 'Compact Height Multi-Day Span' });
  const firstDay = card.locator('.day-cell[data-date^="2026-03-16"]').first();
  const finalDay = card.locator('.day-cell[data-date^="2026-03-18"]').first();
  const timedEvent = card.locator('.day-cell[data-date^="2026-03-17"] .event').filter({ hasText: 'Day Two Timed Event' });

  await expect(span).toHaveCount(1);
  await expect(timedEvent).toHaveCount(1);

  const spanBox = await span.boundingBox();
  const firstDayBox = await firstDay.boundingBox();
  const finalDayBox = await finalDay.boundingBox();
  const timedEventBox = await timedEvent.boundingBox();
  expect(spanBox).not.toBeNull();
  expect(firstDayBox).not.toBeNull();
  expect(finalDayBox).not.toBeNull();
  expect(timedEventBox).not.toBeNull();

  expect(spanBox.x + spanBox.width).toBeGreaterThan(finalDayBox.x + finalDayBox.width - 10);
  expect(spanBox.x + spanBox.width).toBeGreaterThan(firstDayBox.x + firstDayBox.width + 20);
  expect(timedEventBox.y).toBeGreaterThan(spanBox.y + spanBox.height - 1);
});


test('behavior: month null span lane can be filled by a timed event above lower span', async ({ page }) => {
  const fixtureUrl = `file://${path.join(process.cwd(), 'playwright', 'ha-fixture.html')}`;
  await page.goto(fixtureUrl);
  await page.evaluate((params) => window.renderCalendarCard(params), {
    config: {
      entities: ['calendar.family', 'calendar.work'],
      title: 'Month Lane Packing Calendar',
      default_view: 'month',
      colors: { 'calendar.family': '#dc2626', 'calendar.work': '#0f766e' }
    },
    events: {
      'calendar.family': [
        { summary: 'Red Early Week Span', start: '2026-03-23', end: '2026-03-26' }
      ],
      'calendar.work': [
        { summary: 'Teal Lower Week Span', start: '2026-03-24', end: '2026-03-28' },
        { summary: 'Sprint Demo', start: '2026-03-26T15:00:00Z', end: '2026-03-26T16:00:00Z' }
      ]
    },
    darkMode: false
  });

  const card = page.locator('skylight-calendar-card');
  await expect(card).toBeVisible();

  const thursday = card.locator('.day-cell[data-date^="2026-03-26"]').first();
  const sprintDemo = thursday.locator('.event').filter({ hasText: 'Sprint Demo' });
  const tealSpan = card.locator('.day-cell[data-date^="2026-03-24"] .month-span-event').filter({ hasText: 'Teal Lower Week Span' });
  const tealContinuation = thursday.locator('.month-span-event-placeholder').first();

  await expect(sprintDemo).toHaveCount(1);
  await expect(tealSpan).toHaveCount(1);
  await expect(tealContinuation).toHaveCount(1);
  await expect(thursday.locator('.more-events')).toHaveCount(0);

  const sprintBox = await sprintDemo.boundingBox();
  const tealSpanBox = await tealSpan.boundingBox();
  const tealContinuationBox = await tealContinuation.boundingBox();
  const thursdayBox = await thursday.boundingBox();
  expect(sprintBox).not.toBeNull();
  expect(tealSpanBox).not.toBeNull();
  expect(tealContinuationBox).not.toBeNull();
  expect(thursdayBox).not.toBeNull();

  expect(sprintBox.y + sprintBox.height).toBeLessThanOrEqual(tealContinuationBox.y + 1);
  expect(Math.abs(tealSpanBox.y - tealContinuationBox.y)).toBeLessThanOrEqual(1);
  expect(tealSpanBox.x + tealSpanBox.width).toBeGreaterThan(thursdayBox.x + thursdayBox.width - 10);
});

test('behavior: event modal overlays native header at tablet viewport', async ({ page }) => {
  await page.setViewportSize({ width: 768, height: 1024 });
  const fixtureUrl = `file://${path.join(process.cwd(), 'playwright', 'ha-fixture.html')}`;
  await page.goto(fixtureUrl);
  await page.addStyleTag({
    content: `
      #native-ha-header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 64px;
        z-index: 100;
        background: rgb(37, 99, 235);
      }
      body { padding-top: 80px; }
    `
  });
  await page.evaluate(() => {
    const header = document.createElement('div');
    header.id = 'native-ha-header';
    header.textContent = 'Home Assistant';
    document.body.prepend(header);
  });
  await page.evaluate((params) => window.renderCalendarCard(params), {
    config: { entities: ['calendar.family', 'calendar.work'], title: 'Tablet Modal Calendar', default_view: 'month' },
    events: baseEvents,
    darkMode: false
  });

  const card = page.locator('skylight-calendar-card');
  await expect(card).toBeVisible();
  const coffeeEvent = card.locator('.event').filter({ hasText: 'Coffee' });
  await expect(coffeeEvent).toBeVisible();

  await coffeeEvent.click();
  const modal = card.locator('#event-modal');
  await expect(modal).toHaveClass(/show/);
  await expect(card).toHaveClass(/event-modal-open/);
  await expect(modal).toHaveCSS('position', 'fixed');
  await expect(modal).toHaveCSS('z-index', '2147483647');

  const modalBox = await modal.boundingBox();
  expect(modalBox.x).toBe(0);
  expect(modalBox.y).toBe(0);
  expect(modalBox.width).toBe(768);
  expect(modalBox.height).toBe(1024);

  const topElementInfo = await page.evaluate(() => {
    const el = document.elementFromPoint(384, 32);
    return {
      id: el?.id || '',
      className: typeof el?.className === 'string' ? el.className : '',
      closestModalId: el?.closest?.('#event-modal')?.id || ''
    };
  });
  expect(topElementInfo.closestModalId || topElementInfo.id).toBe('event-modal');
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
      maxDiffPixelRatio: scenario.maxDiffPixelRatio || 0.01
    });
  });
}


async function expectBoxWithin(inner, outer, tolerance = 2) {
  const innerBox = await inner.boundingBox();
  const outerBox = await outer.boundingBox();
  expect(innerBox).not.toBeNull();
  expect(outerBox).not.toBeNull();
  expect(innerBox.x).toBeGreaterThanOrEqual(outerBox.x - tolerance);
  expect(innerBox.x + innerBox.width).toBeLessThanOrEqual(outerBox.x + outerBox.width + tolerance);
  expect(innerBox.y).toBeGreaterThanOrEqual(outerBox.y - tolerance);
  expect(innerBox.y + innerBox.height).toBeLessThanOrEqual(outerBox.y + outerBox.height + tolerance);
}

async function expectBoxWithinViewport(locator, viewport, tolerance = 2) {
  const box = await locator.boundingBox();
  expect(box).not.toBeNull();
  expect(box.x).toBeGreaterThanOrEqual(0 - tolerance);
  expect(box.x + box.width).toBeLessThanOrEqual(viewport.width + tolerance);
  expect(box.y).toBeGreaterThanOrEqual(0 - tolerance);
  expect(box.y + box.height).toBeLessThanOrEqual(viewport.height + tolerance);
}

async function assertSharedHeaderGeometry(card, header, viewport, { fullContent = false } = {}) {
  const title = header.locator('.header-title');
  const left = header.locator('.header-left, .compact-header-left').first();
  const controlsGroup = header.locator('.header-controls').first();
  const requiredControls = [
    header.locator('.dashboard-nav-button'),
    header.locator('#prev-period'),
    header.locator('#next-period'),
    header.locator('.month-year'),
    header.locator('#today'),
    header.locator('#theme-toggle'),
    header.locator('#view-mode-select'),
    header.locator('#add-event-btn')
  ];
  const optionalContent = [
    header.locator('.header-time'),
    header.locator('.header-weather'),
    card.locator('.calendar-badge')
  ];

  const overflow = await Promise.all([card, header].map((locator) => locator.evaluate((el) => ({
    clientWidth: el.clientWidth,
    scrollWidth: el.scrollWidth
  }))));
  for (const dimensions of overflow) {
    expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth + 1);
  }

  await expectBoxWithin(header, card, 2);
  await expectBoxWithin(title, header, 2);
  for (const control of requiredControls) {
    await expect(control).toBeVisible();
    await expectBoxWithin(control, header, 2);
    await expectBoxWithin(control, card, 2);
  }

  if (fullContent) {
    await expect(header.locator('.header-time')).toBeVisible();
    await expect(header.locator('.header-weather')).toBeVisible();
    expect(await card.locator('.calendar-badge').count()).toBeGreaterThan(0);
  }

  for (const content of optionalContent) {
    for (let index = 0; index < await content.count(); index++) {
      const item = content.nth(index);
      await expect(item).toBeVisible();
      await expectBoxWithin(item, card, 2);
      if (await item.evaluate((el, headerEl) => headerEl.contains(el), await header.elementHandle())) {
        await expectBoxWithin(item, header, 2);
      }
    }
  }

  const leafItems = card.locator('.header-title, .header-time, .header-weather, .calendar-badge, .dashboard-nav-button, #prev-period, #next-period, .month-year, #today, #theme-toggle, #view-mode-select, #add-event-btn');
  const leafBoxes = await leafItems.evaluateAll((items) => items
    .filter((item) => {
      const style = getComputedStyle(item);
      const rect = item.getBoundingClientRect();
      return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0;
    })
    .map((item) => {
      const rect = item.getBoundingClientRect();
      return { x: rect.x, y: rect.y, width: rect.width, height: rect.height };
    }));
  for (let first = 0; first < leafBoxes.length; first++) {
    for (let second = first + 1; second < leafBoxes.length; second++) {
      const a = leafBoxes[first];
      const b = leafBoxes[second];
      expect(a).not.toBeNull();
      expect(b).not.toBeNull();
      const overlapWidth = Math.min(a.x + a.width, b.x + b.width) - Math.max(a.x, b.x);
      const overlapHeight = Math.min(a.y + a.height, b.y + b.height) - Math.max(a.y, b.y);
      expect(overlapWidth > 1 && overlapHeight > 1).toBe(false);
    }
  }

  const cardBox = await card.boundingBox();
  expect(cardBox).not.toBeNull();
  expect(cardBox.x).toBeGreaterThanOrEqual(-2);
  expect(cardBox.x + cardBox.width).toBeLessThanOrEqual(viewport.width + 2);
  for (let index = 0; index < await leafItems.count(); index++) {
    const item = leafItems.nth(index);
    const box = await item.boundingBox();
    expect(box.x).toBeGreaterThanOrEqual(-2);
    expect(box.x + box.width).toBeLessThanOrEqual(viewport.width + 2);
    expect(box.y).toBeGreaterThanOrEqual(-2);
    expect(box.y + box.height).toBeLessThanOrEqual(viewport.height + 2);
  }
  if (viewport.name === 'mobile') {
    await expect(header).toHaveClass(/is-wrapped/);
    await expect.poll(async () => headerGroupsShareRow(left, controlsGroup)).toBe(false);
  }
}

async function assertIntendedVerticalScroller(card, scroller, requireOverflow = false) {
  const scrollInfo = await scroller.evaluate((el, host) => {
    const unexpectedScrollableAncestors = [];
    let current = el.parentElement;
    while (current && current !== host) {
      const style = getComputedStyle(current);
      if (/(auto|scroll)/.test(style.overflowY) && current.scrollHeight > current.clientHeight) {
        unexpectedScrollableAncestors.push(current.className || current.id || current.tagName.toLowerCase());
      }
      current = current.parentElement;
    }
    return {
      clientHeight: el.clientHeight,
      scrollHeight: el.scrollHeight,
      overflowY: getComputedStyle(el).overflowY,
      unexpectedScrollableAncestors
    };
  }, await card.elementHandle());
  expect(['auto', 'scroll']).toContain(scrollInfo.overflowY);
  expect(scrollInfo.scrollHeight).toBeGreaterThanOrEqual(scrollInfo.clientHeight);
  expect(scrollInfo.unexpectedScrollableAncestors).toEqual([]);
  if (requireOverflow) {
    expect(scrollInfo.scrollHeight).toBeGreaterThan(scrollInfo.clientHeight);
  }
}

async function assertCompactHeightGeometry(card, page, viewSpec, viewport, allocationMode) {
  const container = card.locator(viewSpec.containerSelector).first();
  const scroller = card.locator(viewSpec.internalScrollSelector).first();
  await expect(container).toBeVisible();

  if (allocationMode.name === 'fixed-parent') {
    const parent = page.locator('#app');
    await expectBoxWithin(card, parent, 2);
    await expectBoxWithin(container, parent, 2);
  } else {
    await expectBoxWithinViewport(card, viewport, 2);
    await expectBoxWithinViewport(container, viewport, 2);
  }

  const shouldRequireOverflow = viewSpec.name === 'week-compact' || viewSpec.name === 'agenda';
  await assertIntendedVerticalScroller(card, scroller, shouldRequireOverflow);

  if (viewSpec.name === 'month') {
    const rows = await card.locator('.day-cell').evaluateAll((cells) => {
      const rowMap = new Map();
      for (const cell of cells) {
        const rect = cell.getBoundingClientRect();
        const key = Math.round(rect.top);
        if (!rowMap.has(key)) rowMap.set(key, { top: rect.top, bottom: rect.bottom, cells: [] });
        rowMap.get(key).cells.push(cell);
        rowMap.get(key).bottom = Math.max(rowMap.get(key).bottom, rect.bottom);
      }
      return [...rowMap.values()].map((row) => ({
        top: row.top,
        bottom: row.bottom,
        eventRects: row.cells.flatMap((cell) => [...cell.querySelectorAll('.event, .month-span-event, .more-events')].map((event) => {
          const rect = event.getBoundingClientRect();
          return { top: rect.top, bottom: rect.bottom };
        }))
      }));
    });
    for (let i = 0; i < rows.length; i++) {
      for (const eventRect of rows[i].eventRects) {
        expect(eventRect.top).toBeGreaterThanOrEqual(rows[i].top - 2);
        expect(eventRect.bottom).toBeLessThanOrEqual(rows[i].bottom + 2);
      }
      if (rows[i + 1]) expect(rows[i].bottom).toBeLessThanOrEqual(rows[i + 1].top + 2);
    }
  } else if (viewSpec.name === 'week-compact') {
    const rows = await card.locator('.week-day-column').evaluateAll((columns) => {
      const rowMap = new Map();
      for (const column of columns) {
        const rect = column.getBoundingClientRect();
        const key = Math.round(rect.top);
        if (!rowMap.has(key)) rowMap.set(key, { top: rect.top, bottom: rect.bottom, eventRects: [] });
        const row = rowMap.get(key);
        row.bottom = Math.max(row.bottom, rect.bottom);
        row.eventRects.push(...[...column.querySelectorAll('.week-compact-event')].map((event) => {
          const eventRect = event.getBoundingClientRect();
          return { top: eventRect.top, bottom: eventRect.bottom };
        }));
      }
      return [...rowMap.values()].sort((a, b) => a.top - b.top);
    });
    if (viewport.width <= 768) expect(rows.length).toBeGreaterThan(1);
    const eventVisibility = await card.locator('.week-compact-event').evaluateAll((events) => events.every((event) => {
      const style = getComputedStyle(event);
      const rect = event.getBoundingClientRect();
      return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0;
    }));
    expect(eventVisibility).toBe(true);
    for (let i = 0; i < rows.length; i++) {
      for (const eventRect of rows[i].eventRects) {
        expect(eventRect.top).toBeGreaterThanOrEqual(rows[i].top - 2);
        expect(eventRect.bottom).toBeLessThanOrEqual(rows[i].bottom + 2);
      }
      if (rows[i + 1]) expect(rows[i].bottom).toBeLessThanOrEqual(rows[i + 1].top + 2);
    }
  } else if (viewSpec.name === 'week-standard') {
    const alignment = await card.locator('.week-standard-container').evaluate((containerEl) => {
      const headers = [...containerEl.querySelectorAll('.week-standard-day-header')].map((el) => Math.round(el.getBoundingClientRect().bottom));
      const allDay = [...containerEl.querySelectorAll('.all-day-events')].map((el) => Math.round(el.getBoundingClientRect().top));
      const slots = [...containerEl.querySelectorAll('.day-time-slots')].map((el) => Math.round(el.getBoundingClientRect().top));
      const timedContained = [...containerEl.querySelectorAll('.week-standard-event')].every((event) => {
        const owner = event.closest('.day-time-slots');
        if (!owner) return false;
        const eventRect = event.getBoundingClientRect();
        const ownerRect = owner.getBoundingClientRect();
        return eventRect.top >= ownerRect.top - 2 && eventRect.bottom <= ownerRect.bottom + 2;
      });
      const allDayContained = [...containerEl.querySelectorAll('.all-day-event')].every((event) => {
        const owner = event.closest('.all-day-events');
        if (!owner) return false;
        const eventRect = event.getBoundingClientRect();
        const ownerRect = owner.getBoundingClientRect();
        return eventRect.top >= ownerRect.top - 2 && eventRect.bottom <= ownerRect.bottom + 2;
      });
      return { headers, allDay, slots, timedContained, allDayContained };
    });
    expect(new Set(alignment.headers).size).toBe(1);
    expect(new Set(alignment.allDay).size).toBe(1);
    expect(new Set(alignment.slots).size).toBe(1);
    expect(alignment.timedContained).toBe(true);
    expect(alignment.allDayContained).toBe(true);
  } else if (viewSpec.name === 'agenda') {
    const rowsContained = await card.locator('.agenda-container').evaluate((containerEl) => {
      const c = containerEl.getBoundingClientRect();
      return [...containerEl.querySelectorAll('.agenda-event')].every((event) => {
        const owner = event.closest('.agenda-day-row');
        const r = event.getBoundingClientRect();
        const ownerRect = owner?.getBoundingClientRect();
        return ownerRect
          && r.left >= c.left - 2
          && r.right <= c.right + 2
          && r.top >= ownerRect.top - 2
          && r.bottom <= ownerRect.bottom + 2;
      });
    });
    expect(rowsContained).toBe(true);
  }
}

for (const allocationMode of compactHeightAllocationModes) {
  for (const viewport of compactHeightViewports) {
    for (const viewSpec of compactHeightViews) {
      test(`visual: compact-height ${viewSpec.name} ${viewport.name} ${allocationMode.name}`, async ({ page }) => {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        const fixtureUrl = `file://${path.join(process.cwd(), 'playwright', 'ha-fixture.html')}`;
        await page.goto(fixtureUrl);
        await page.evaluate((params) => window.renderCalendarCard(params), {
          config: {
            entities: ['calendar.family', 'calendar.work'],
            title: 'Compact Height Stress Calendar',
            default_view: viewSpec.defaultView,
            ...compactStressConfig
          },
          events: compactStressEvents,
          weather: { 'weather.mock': { temperature: 62, condition: 'partlycloudy', forecast: [] } },
          darkMode: false,
          parentStyle: allocationMode.parentStyle
        });

        const card = page.locator('skylight-calendar-card');
        await expect(card).toBeVisible();
        await expect(card).toContainText(viewSpec.viewLabel);
        await expect(card.locator(eventSelectorByView[viewSpec.defaultView])).not.toHaveCount(0);
        await assertCompactHeightGeometry(card, page, viewSpec, viewport, allocationMode);
        await expect(card).toHaveScreenshot(
          `compact-height-${viewSpec.name}-${viewport.name}-${allocationMode.name}.png`,
          {
            animations: 'disabled',
            maxDiffPixelRatio: 0.01
          }
        );
      });
    }
  }
}

for (const viewport of sharedHeaderViewports) {
  for (const layout of sharedHeaderLayouts) {
    for (const titleSpec of sharedHeaderTitles) {
      test(`visual: shared-header ${layout.name} ${viewport.name} ${titleSpec.name}`, async ({ page }) => {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        const fixtureUrl = `file://${path.join(process.cwd(), 'playwright', 'ha-fixture.html')}`;
        await page.goto(fixtureUrl);
        await page.evaluate((params) => window.renderCalendarCard(params), {
          config: {
            entities: ['calendar.family', 'calendar.work'],
            title: titleSpec.value,
            default_view: 'month',
            compact_header: layout.compactHeader,
            show_dashboard_nav_button: true,
            header_dashboard_path: '/lovelace/home',
            enable_event_management: true
          },
          events: monthVisualEvents,
          darkMode: false
        });

        const card = page.locator('skylight-calendar-card');
        const header = card.locator(layout.compactHeader ? '.header-compact' : '.header').first();
        await expect(card).toBeVisible();
        await expect(header).toBeVisible();
        await expect(header.locator('.header-title')).toHaveText(titleSpec.value);
        await assertSharedHeaderGeometry(card, header, viewport);
        await expect(card).toHaveScreenshot(
          `shared-header-${layout.name}-${viewport.name}-${titleSpec.name}.png`,
          {
            animations: 'disabled',
            maxDiffPixelRatio: 0.01
          }
        );
      });
    }
  }
}

for (const layout of sharedHeaderLayouts) {
  test(`visual: shared-header full-content ${layout.name} mobile`, async ({ page }) => {
    const viewport = sharedHeaderViewports.find(({ name }) => name === 'mobile');
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    const fixtureUrl = `file://${path.join(process.cwd(), 'playwright', 'ha-fixture.html')}`;
    await page.goto(fixtureUrl);
    await page.evaluate((params) => window.renderCalendarCard(params), {
      config: {
        entities: ['calendar.family', 'calendar.work'],
        title: 'FamilyCalendarwithareallylongnametesting',
        default_view: 'month',
        compact_header: layout.compactHeader,
        show_dashboard_nav_button: true,
        header_dashboard_path: '/lovelace/home',
        header_time_sensor: 'sensor.header_time',
        header_weather_sensor: 'weather.mock',
        enable_event_management: true
      },
      events: monthVisualEvents,
      weather: { 'weather.mock': { temperature: 72, condition: 'sunny', forecast: [] } },
      states: {
        'sensor.header_time': { entity_id: 'sensor.header_time', state: '14:30', attributes: { friendly_name: 'Header Time' } }
      },
      darkMode: false
    });

    const card = page.locator('skylight-calendar-card');
    const header = card.locator(layout.compactHeader ? '.header-compact' : '.header').first();
    await expect(card).toBeVisible();
    await expect(header).toBeVisible();
    await assertSharedHeaderGeometry(card, header, viewport, { fullContent: true });
    await expect(card).toHaveScreenshot(
      `shared-header-full-content-${layout.name}-mobile.png`,
      {
        animations: 'disabled',
        maxDiffPixelRatio: 0.01
      }
    );
  });
}

test('regression: month compact-height hides overflowing span lanes in more count', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 720 });

  const fixtureUrl = `file://${path.join(process.cwd(), 'playwright', 'ha-fixture.html')}`;
  await page.goto(fixtureUrl);
  await page.evaluate((params) => window.renderCalendarCard(params), {
    config: { entities: ['calendar.family'], title: 'Regression Calendar', default_view: 'month', compact_height: true },
    events: {
      'calendar.family': Array.from({ length: 5 }, (_, index) => ({
        summary: `Overlap Span ${index + 1}`,
        start: '2026-03-24',
        end: '2026-03-27'
      }))
    },
    darkMode: false
  });

  const card = page.locator('skylight-calendar-card');
  await expect(card).toContainText('Month');
  const dayCell = card.locator('.day-cell[data-date^="2026-03-24"]').first();
  await expect(dayCell).toBeVisible();
  await expect(dayCell.locator('.month-span-event')).toHaveCount(0);
  await expect(dayCell).toContainText('5 more');
  await expect(dayCell).not.toContainText('Overlap Span 1');
});

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

test('regression issue 321: compact header stays single-row', async ({ page }) => {
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

  const header = card.locator('.header-compact');
  const left = card.locator('.compact-header-left').first();
  const controls = card.locator('.compact-header-controls').first();

  await expect(header).toBeVisible();
  await expect(left).toBeVisible();
  await expect(controls).toBeVisible();

  await expect.poll(async () => {
    return headerGroupsShareRow(left, controls);
  }).toBe(true);
});


test('regression issue 321: compact wrapped header rows stay centered at medium width', async ({ page }) => {
  await page.setViewportSize({ width: 980, height: 820 });
  const fixtureUrl = `file://${path.join(process.cwd(), 'playwright', 'ha-fixture.html')}`;
  await page.goto(fixtureUrl);
  await page.evaluate((params) => window.renderCalendarCard(params), {
    config: {
      entities: ['calendar.family', 'calendar.work'],
      title: 'Issue 321 Compact Wrapped',
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
  const header = card.locator('.header-compact');
  const left = card.locator('.compact-header-left').first();
  const controls = card.locator('.compact-header-controls').first();

  await expect(header).toBeVisible();
  await expect(left).toBeVisible();
  await expect(controls).toBeVisible();

  await expect.poll(async () => {
    const wrapped = await header.evaluate((el) => el.classList.contains('is-wrapped'));
    return wrapped;
  }).toBe(true);

  await expect.poll(async () => headerGroupsShareRow(left, controls)).toBe(false);
  await expect.poll(async () => centerOffsetWithinTolerance(header, left)).toBe(true);
  await expect.poll(async () => centerOffsetWithinTolerance(header, controls)).toBe(true);
});

test('regression issue 321: standard header stays single-row', async ({ page }) => {
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

  const header = card.locator('.header');
  const left = card.locator('.header-left').first();
  const controls = card.locator('.header-controls').first();

  await expect(header).toBeVisible();
  await expect(left).toBeVisible();
  await expect(controls).toBeVisible();

  await expect.poll(async () => {
    return headerGroupsShareRow(left, controls);
  }).toBe(true);
});
