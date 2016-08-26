var mongoose = require('mongoose');
//To configure Mongoose to connect to the MongoDB instance.
module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;

  db.on('error', function() {
    throw new Error('Unable to connect to database at ' + config.db);
  });
};
