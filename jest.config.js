// https://jestjs.io/docs/en/configuration
module.exports = {
  verbose: false,
  testRegex: [/\.spec.js/],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  }
};
