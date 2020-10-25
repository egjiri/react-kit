import { testExports } from '.';

import type { Cases } from '@egjiri/node-kit/testing/helpers';
import type { ChangeEvent } from 'react';

const { inferValueType, getValue } = testExports;

describe('test inferValueType function', () => {
  const cases: Cases<typeof inferValueType> = [
    ['number use case', ['number'], 'number'],
    ['boolean use case', ['checkbox'], 'boolean'],
    ['string use case', ['string'], 'string'],
    ['undefined use case', [undefined], 'string'],
  ];
  test.each(cases)('%s', (_, args, expected) => {
    const actual = inferValueType(...args);
    expect(actual).toEqual(expected);
  });
});

describe('test getValue function', () => {
  const cases: Cases<typeof getValue> = [
    ['number use case', [changeEventMock({ value: '1' }), 'number'], 1],
    ['empty number use case', [changeEventMock({ value: '' }), 'number'], NaN],
    ['boolean use case', [changeEventMock({ checked: true }), 'boolean'], true],
    ['boolean use case', [changeEventMock({ checked: true }), 'boolean'], true],
    ['string use case', [changeEventMock({ value: 'text' }), 'string'], 'text'],
    ['empty string use case', [changeEventMock({ value: '' }), 'string'], ''],
  ];
  test.each(cases)('%s', (_, args, expected) => {
    const actual = getValue(...args);
    expect(actual).toEqual(expected);
  });
});

function changeEventMock<T = HTMLInputElement>(target: { value?: string, checked?: boolean }) {
  return { target } as ChangeEvent<T>;
}
