var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


//app.use(express.static(__dirname + '/public'));
var appPath = (process.env.production)?'./public':'../app';
mongoose.connect('mongodb://localhost:27017/test');

app.use(express.static(appPath));
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

var om_resources = require('./om_resources.js')(app, mongoose);
app.listen(process.env.host_port||8080);
console.log("App listening on port 8080");
