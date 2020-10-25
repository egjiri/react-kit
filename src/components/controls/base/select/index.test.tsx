import { testExports } from '.';

import type { Cases } from '@egjiri/node-kit/testing/helpers';
import type { ChangeEvent } from 'react';

const { inferValueType, getValue } = testExports;

describe('test inferValueType function', () => {
  const cases: Cases<typeof inferValueType> = [
    ['number use case', [1], 'number'],
    ['boolean use case', [true], 'boolean'],
    ['string use case', ['text'], 'string'],
  ];
  test.each(cases)('%s', (_, args, expected) => {
    const actual = inferValueType(...args);
    expect(actual).toEqual(expected);
  });
});

describe('test getValue function', () => {
  const cases: Cases<typeof getValue> = [
    ['number use case', [changeEventMock({ value: '1' }), 'number'], 1],
    ['boolean use case', [changeEventMock({ value: 'true' }), 'boolean'], true],
    ['string use case', [changeEventMock({ value: 'text' }), 'string'], 'text'],
  ];
  test.each(cases)('%s', (_, args, expected) => {
    const actual = getValue(...args);
    expect(actual).toEqual(expected);
  });
});

function changeEventMock<T = HTMLSelectElement>(target: { value?: string, checked?: boolean }) {
  return { target } as ChangeEvent<T>;
}
