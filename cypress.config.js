const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportTitle: 'OrangeHRM reports',
    reportPageTitle: 'OrangeHRM report',
    reportFilename: 'OrangeHRM Report',
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
