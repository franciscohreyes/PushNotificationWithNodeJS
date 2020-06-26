/**
 * sendNotification
 */
var sendNotification = function(data) {
  var headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Authorization": "Basic YOUR_REST_API_KEY"
  };
  
  var options = {
    host: "onesignal.com",
    port: 443,
    path: "/api/v1/notifications",
    method: "POST",
    headers: headers
  };
  
  var https = require('https');
  var req = https.request(options, function(res) {  
    res.on('data', function(data) {
      console.log("Response:");
      console.log(JSON.parse(data));
    });
  });
  
  req.on('error', function(e) {
    console.log("ERROR:");
    console.log(e);
  });
  
  req.write(JSON.stringify(data));
  req.end();
};

/**
 * message
 */
var message = { 
  app_id: "YOUR_APP_ID",
  contents: {"en": "English Message"},
  included_segments: ["Active Users"]
};

/**
 * call function
 */
sendNotification(message);