module.exports = {
  testMatch: ['**/?(*.)+(test).js'],
  verbose: false,
  silent: false,
  transform: {},
  testEnvironment: 'jsdom',
  collectCoverage: false,
  transform: {'/\.[jt]sx?$/': "babel-jest"},
  transformIgnorePatterns: ["/node_modules/(?!(d3-selection|d3-transition|d3-ease|fxsimplex|d3-interpolate-path)/).+\\.js$"]
};