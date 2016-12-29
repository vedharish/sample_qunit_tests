var browserstackRunner = require('browserstack-runner');

var config = require('./browserstack.json');

browserstackRunner.run(config, function(error, report) {
  if(error) {
    console.log("Error:" + error);
    return;
  }
  console.log(JSON.stringify(report, null, 2));
  console.log("Test Finished");
});
