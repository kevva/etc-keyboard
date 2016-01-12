import test from 'ava';
import m from './';

test('detect keyboard layout', async t => t.ok(await m()));
