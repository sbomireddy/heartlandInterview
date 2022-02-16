

exports.config = {
  allScriptsTimeout: 200000,
  
  resultJsonOutputFile:'./testResults.json', //output file path to store the final results in .json format
  specs: [
         './e2e/**/login.app.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://automationpractice.com/index.php',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 1000000,
    print: function() {}
  },
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
  },
  onPrepare() {
    browser.driver.manage().window().maximize();
  
    
  },
};
