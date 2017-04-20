/** server.js
 * Server for a CAS client
 */

// Constants
const PORT = 3100;

// Requires
var fs = require('fs');
var http = require('http');
//var https = require('https');
var express = require('express');
var config = require('./config/json');

// The Express app
var app = express();

/*// The webserver
var options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}
var sever = https.createServer(option, app);*/


// Serve files from public folder
app.use(express.static('public'));

// Set up Authentication
var AuthCAS = require('auth-cas');
var auth = new AuthCAS(config.host, config.casHost);

// Start the server
app.listen(PORT, function(){
  console.log(PORT);
});
