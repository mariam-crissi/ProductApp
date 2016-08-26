var env = process.env.NODE_ENV || 'development';

var config = {
  port: 3000, //port number
  db: 'mongodb://localhost/items',//databse URL
  host: 'localhost' //host
};
//To export configuration object
module.exports = config;
