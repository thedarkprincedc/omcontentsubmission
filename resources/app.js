var express        = require('express');
var fileUpload     = require('express-fileupload');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var timeout        = require("connect-timeout");
var compression    = require('compression');

//app.use(express.static(__dirname + 'public'));
var appPath = (process.env.production)?'./public':'../app';

var om_mongo_address = process.env.MONGODB_ADDRESS || "127.0.0.1";
var om_mongo_port = process.env.MONGODB_PORT || "27017";
var om_host_port = process.env.HOST_PORT || "8080";
var om_production = process.env.PRODUCTION || true;

mongoose.connect('mongodb://' + om_mongo_address + ':' + om_mongo_port + '/test');

app.use(compression());
app.use(express.static(appPath));
app.use(fileUpload());
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(timeout('100s'));
app.get('/', function(req, res) {
     res.redirect("/public");
});
var pp = process.argv.slice(2);
var om_resources = require('./om_resources.js')(app, mongoose, bodyParser);

var listenOnPort = process.env.host_port||pp[0] ||8080;
app.listen(listenOnPort);
console.log("App listening on port " + listenOnPort);
