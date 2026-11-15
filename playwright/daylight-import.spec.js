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
