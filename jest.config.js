// jest.config.js
module.exports = {
  testEnvironment: 'node',
  automock: false,
  coverageDirectory: 'coverage',
  coverageReporters: ['text-summary', 'json-summary', 'lcov', 'clover'],
  collectCoverageFrom: ['services/**/*.js'],
  coveragePathIgnorePatterns: ['node_modules']
}
