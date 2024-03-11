module.exports = {
  projectId: 'zqumey',
  e2e: {
    setupNodeEvents(on, config) {
      {
        ("reporter");
        "mochawesome", "reporterOptions";
        {
          ("reportDir");
          "cypress/report/mochawesome-report", "overwrite";
          true, "html";
          true, "json";
          false, "timestamp";
          ("mmddyyyy_HHMMss");
        }
      }
    },
    video: true,
  },
};
