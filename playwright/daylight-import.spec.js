const {test, expect} = require('@playwright/test');
const path = require('path');

test('pending review opens a return session and restores the originating card', async ({page}) => {
  await page.route('http://daylight.test/**', route => route.fulfill({status: 200, contentType: 'text/html', body: '<div id="app"></div>'}));
  await page.goto('http://daylight.test/dashboard/calendar');
  await page.addScriptTag({path: path.join(process.cwd(), 'skylight-calendar-card.js')});
  await page.evaluate(() => {
    window.makeCard = () => {
      const card = document.createElement('daylight-calendar-card');
      card.setConfig({entities: ['calendar.family'], default_view: 'month', daylight_import_card_id: 'family'});
      card.hass = {connection: {}, services: {daylight_calendar_import: {}}, states: {
        'calendar.family': {entity_id: 'calendar.family', state: 'off', attributes: {friendly_name: 'Family', supported_features: 7}},
        'sensor.pending': {entity_id: 'sensor.pending', state: '2', attributes: {daylight_import_kind: 'pending_events', daylight_import_contract_version: 1, daylight_import_config_entry_id: 'entry'}}
      }, callWS: async () => ({entry_ids: ['entry'], capabilities: {queue_metadata: 1, direct_routes: 1, return_sessions: 1}}),
      callApi: async () => [], callService: async () => ({})};
      document.getElementById('app').appendChild(card);
      return card;
    };
    window.card = window.makeCard();
  });
  await expect(page.locator('#daylight-import-pending')).toHaveText('+2');
  await page.locator('#add-event-btn').click();
  await expect(page.getByRole('button', {name: 'Import document'})).toBeVisible();
  await page.locator('#close-modal').click();
  await page.evaluate(() => { window.card._viewMode = 'week-compact'; window.card._currentDate = new Date('2027-02-01T12:00:00Z'); window.card.render(); });
  await page.locator('#daylight-import-pending').click();
  await expect(page).toHaveURL(/\/daylight-calendar-import\/review\?dl_return=/);
  await page.evaluate(() => {
    const key = Object.keys(sessionStorage).find(value => value.startsWith('daylight:return:v1:'));
    const record = JSON.parse(sessionStorage.getItem(key));
    record.result = {status: 'completed', calendar_may_have_changed: true, completed_at: Date.now()};
    sessionStorage.setItem(key, JSON.stringify(record));
    history.pushState({}, '', record.return_path);
    document.getElementById('app').replaceChildren();
    window.card = window.makeCard();
  });
  await expect.poll(() => page.evaluate(() => window.card._viewMode)).toBe('week-compact');
  expect(await page.evaluate(() => window.card._currentDate.toISOString())).toBe('2027-02-01T12:00:00.000Z');
});

test('Import document matches Create Event primary button styling without mobile overflow', async ({page}) => {
  await page.route('http://daylight.test/**', route => route.fulfill({status: 200, contentType: 'text/html', body: '<div id="app"></div>'}));
  await page.goto('http://daylight.test/dashboard/calendar');
  await page.addScriptTag({path: path.join(process.cwd(), 'skylight-calendar-card.js')});
  await page.evaluate(() => {
    const card = document.createElement('daylight-calendar-card');
    card.setConfig({entities: ['calendar.family'], default_view: 'month'});
    card.hass = {
      connection: {}, services: {daylight_calendar_import: {}},
      states: {'calendar.family': {entity_id: 'calendar.family', state: 'off', attributes: {friendly_name: 'Family', supported_features: 7}}},
      callWS: async () => ({entry_ids: ['entry'], capabilities: {direct_routes: 1, return_sessions: 1}}),
      callApi: async () => [], callService: async () => ({})
    };
    document.getElementById('app').appendChild(card);
  });

  await page.locator('#add-event-btn').click();
  const importButton = page.locator('#daylight-import-document');
  await expect(importButton).toBeVisible();

  for (const width of [390, 320]) {
    await page.setViewportSize({width, height: 844});
    const layout = await page.locator('#modal-content').evaluate(content => {
      const imported = content.querySelector('#daylight-import-document');
      const create = content.querySelector('#submit-btn');
      const choice = imported.closest('.daylight-import-choice');
      const properties = ['backgroundColor', 'color', 'fontSize', 'fontWeight',
        'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'borderRadius', 'borderTopWidth'];
      const style = element => {
        const computed = getComputedStyle(element);
        return Object.fromEntries(properties.map(property => [property, computed[property]]));
      };
      return {
        hasPrimaryClasses: imported.classList.contains('btn') && imported.classList.contains('btn-primary'),
        importStyle: style(imported),
        createStyle: style(create),
        importHeight: imported.getBoundingClientRect().height,
        createHeight: create.getBoundingClientRect().height,
        modalOverflows: content.scrollWidth > content.clientWidth + 1,
        choiceOverflows: choice.scrollWidth > choice.clientWidth + 1
      };
    });
    expect(layout.hasPrimaryClasses).toBe(true);
    expect(layout.importStyle).toEqual(layout.createStyle);
    expect(layout.importHeight).toBeCloseTo(layout.createHeight, 1);
    expect(layout.modalOverflows).toBe(false);
    expect(layout.choiceOverflows).toBe(false);
  }

  await importButton.click();
  await expect(page).toHaveURL(/\\/daylight-calendar-import\\/new\\/file\\?dl_return=/);
});
