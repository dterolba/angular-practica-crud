module.exports = (config:any) => {
    config.set({
      basePath: '../..',
      frameworks: ['jasmine'],
      coverageIstanbulReporter: {
        reports: [ 'html', 'lcovonly' ],
        fixWebpackSourcePaths: true,
        thresholds: {
          statements: 80,
          lines: 80,
          branches: 80,
          functions: 80
        }
      }
    });
  }