// https://jestjs.io/docs/en/configuration
module.exports = {
  verbose: false,
  testRegex: [/\.spec.js/],
  preset: 'jest-puppeteer',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
};
