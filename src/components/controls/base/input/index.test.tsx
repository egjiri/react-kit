import { Cases } from '@egjiri/node-kit/testing/helpers';
import { ChangeEvent } from 'react';
import { testExports } from '.';
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
    ['boolean use case', [changeEventMock({ checked: true }), 'boolean'], true],
    ['string use case', [changeEventMock({ value: 'text' }), 'string'], 'text'],
  ];
  test.each(cases)('%s', (_, args, expected) => {
    const actual = getValue(...args);
    expect(actual).toEqual(expected);
  });
});

function changeEventMock<T = HTMLInputElement>(target: { value?: string, checked?: boolean }) {
  return { target } as ChangeEvent<T>;
}
