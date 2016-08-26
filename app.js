var express = require('express');
var mongoose = require('mongoose');
var fs = require('fs'); //To provide access to file system
var http = require('http');//To create HTTP web server
var bodyParser = require('body-parser');
var config = require('./config/config');
var root = __dirname;
var app = express();
var server = null;
require('./config/db')(config);//To configure mongoose

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//loading all models from the models directory
var modelsPath = __dirname + '/server/models';
   fs.readdirSync(modelsPath).forEach(function (file) {
                       if (file.indexOf('.js') >= 0) {
                               require(modelsPath + '/' + file);
                       }
   });

require('./config/express')(app, config);
require('./config/routes')(app);

//To start the server
var server = http.createServer(app);
    server.listen(config.port, config.host);
    console.log('App started on port ' + config.port);
