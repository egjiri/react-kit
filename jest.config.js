module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: 'src/.+\\.test\\.ts',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
  ],
  coverageReporters: [
    'html',
    'json-summary',
  ],
};
