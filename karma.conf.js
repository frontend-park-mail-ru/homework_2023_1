/* eslint-env node */

module.exports = function (config) {
  config.set({
    browsers: [
      'FirefoxHeadless',
      (process.platform === 'linux') ? 'ChromiumHeadless' : 'ChromeHeadless'
    ],
    frameworks: ['qunit'],
    files: [
      'source/*.js',
      'tests/*.test.js'
    ],
    autoWatch: false,
    singleRun: true,
    preprocessors: {
      'source/*.js': ['coverage']
    },
    reporters: ['dots', 'coverage'],
    coverageReporter: {
      reporters: [
        { type: 'lcov', dir: '.nyc_output/' },
        { type: 'json', dir: '.nyc_output/', subdir: '.' }
      ]
    }
  });
};
