import { expect, test } from 'vitest';
import { mapMessageForServer } from '../mapMessageForServer';

test('creates an object with 2 fields: chat_id: 2, text: "1"', () => {
  expect(mapMessageForServer('1', 2)).toStrictEqual({ chat_id: 2, txt: '1' });
});
