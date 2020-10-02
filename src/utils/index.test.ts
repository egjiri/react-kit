import { buildClassName } from '.';

describe('test buildClassName function', () => {
  const cases: [string, (string | undefined | null | false)[], string | undefined][] = [
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
