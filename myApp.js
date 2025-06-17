const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet.hidePoweredBy());  // Hide the X-Powered-By header
app.use(helmet.frameguard({action: 'deny'})); // Prevent clickjacking by denying framing
app.use(helmet.xssFilter()); // Enable XSS filtering
app.use(helmet.noSniff()); // Prevent browsers from MIME-sniffing and override the content-type header
app.use(helmet.ieNoOpen()); // Prevent Internet Explorer from executing downloads in a frame
ninetyDaysInSeconds = 90*24*60*60; // 90 days in seconds
app.use(helmet.hsts({
  maxAge: ninetyDaysInSeconds,
  force: true
})); // Enable HTTP Strict Transport Security (HSTS) with a max age of 90 days














































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
