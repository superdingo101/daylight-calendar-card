import {test} from 'node:test';
import assert from 'node:assert/strict';
import {pendingCount, createReturnSession, takeReturnSession} from './src/integration/daylight-import.js';

const cap = {entry_ids: ['entry'], capabilities: {direct_routes: 1, return_sessions: 1}};
const entity = {entity_id: 'sensor.changed', state: '2', attributes: {daylight_import_kind: 'pending_events', daylight_import_contract_version: 1, daylight_import_config_entry_id: 'entry'}};
test('discovers a renamed pending sensor and rejects unavailable or ambiguous counts', () => {
  assert.equal(pendingCount({states: {x: entity}}, cap), 2);
  assert.equal(pendingCount({states: {x: {...entity, state: 'unavailable'}}}, cap), null);
  assert.equal(pendingCount({states: {x: entity, y: {...entity, entity_id: 'sensor.other'}}}, cap), null);
  assert.equal(pendingCount({states: {x: entity}}, cap, 'sensor.missing'), null);
});
test('return sessions are per-card and consumed after a completed return', () => {
  const data = new Map();
  const storage = {get length() { return data.size; }, key: i => [...data.keys()][i],
    getItem: k => data.get(k), setItem: (k,v) => data.set(k,v), removeItem: k => data.delete(k)};
  const id = createReturnSession(storage, {getRandomValues: bytes => bytes.fill(4)}, '/dashboard/calendar', 'card-a', {view: 'month'}, 1000);
  assert.equal(takeReturnSession(storage, '/dashboard/calendar', 'card-a', 2000), null);
  const key = `daylight:return:v1:${id}`;
  const session = JSON.parse(data.get(key));
  session.result = {status: 'completed'};
  data.set(key, JSON.stringify(session));
  assert.equal(takeReturnSession(storage, '/dashboard/calendar', 'card-b', 2000), null);
  assert.deepEqual(takeReturnSession(storage, '/dashboard/calendar', 'card-a', 2000), {view: 'month'});
  assert.equal(data.size, 0);
});
