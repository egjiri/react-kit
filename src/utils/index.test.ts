import { Cases } from '@egjiri/node-kit/testing/helpers';
import { buildClassName } from '.';

describe('test buildClassName function', () => {
  const cases: Cases<typeof buildClassName> = [
    ['normal use case', ['card'], 'card'],
    ['boolean use case', [true && 'true', false && 'false'], 'true'],
    ['falsy use case', ['', undefined && 'undefined', null && null, false && false], undefined],
    ['multiple use cases', ['card', true && 'active', false && 'false'], 'card active'],
  ];
  test.each(cases)('%s', (_, args, expected) => {
    const actual = buildClassName(...args);
    expect(actual).toEqual(expected);
  });
});
