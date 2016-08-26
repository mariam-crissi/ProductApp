var express = require('express');
//To configure application
module.exports = function(app, config) {
  app.configure(function () {
    app.use(express.compress());
    app.set('port', config.port);//To define port
    app.use(express.logger('dev'));//To log all requests of RESTful webservice
    app.use(express.bodyParser());
    app.use(express.methodOverride());

    app.use('/api', app.router);//To configure app to use /api
    app.use('/', express.static(__dirname + "/../client"));//To configure app to use files
  });
};
