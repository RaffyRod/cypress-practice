const { defineConfig } = require("cypress");
const date = new Date();
const reportDate = (date.toLocaleString('default', { month: 'long' }))+" "+date.getDate()+"/"+date.getFullYear() +"  " +" "+date.getHours() + ":" + date.getMinutes()+ 
":" + date.getSeconds();

module.exports = defineConfig({
  video: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportTitle: 'OrangeHRM Test report for ' +' ' + reportDate,
    reportPageTitle: 'OrangeHRM report',
    reportFilename: 'index',
    embeddedScreenshots: true,
    charts: true,
    inline: true,
    overwrite: false,
    autoOpen: false,
    showPending: false,
    showSkipped: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
