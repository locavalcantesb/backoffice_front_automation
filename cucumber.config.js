module.exports = {
  default: {
    require: ['src/step-definitions/**/*.ts'],
    format: ['progress', 'json:reports/cucumber-report.json', 'html:reports/cucumber-report.html'],
    formatOptions: {
      snippetInterface: 'async-await'
    },
    paths: ['src/features/**/*.feature'],
    publishQuiet: true,
    dryRun: false,
    failFast: false,
    retry: 0,
    strict: true,
    tags: 'not @skip'
  }
};
