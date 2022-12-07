const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportTitle: 'OrangeHR reports',
    reportPageTitle: 'OrangeHR report',
    reportFilename: 'API Report',
    embeddedScreenshots: true,
    charts: true,
    inline: true,
    overwrite: false,
    autoOpen: false,
    showPending: false,
    showSkipped: true,
    timestamp: "longDate",
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
