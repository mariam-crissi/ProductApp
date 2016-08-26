
var mongoose = require('mongoose'),Item = mongoose.model('Item');
//To retrieve all items from the db.
exports.findAll = function(req, res) {
         Item.find({}, function(err, items) {
              if (err) {
                          throw new Error(err);
               }
          res.send(items);
         });
};


//To retrieve item based on id from the db.
exports.findOne = function(req, res) {

       Item.findById(req.params.productid, function(err, item) {
           if (err) {
                   throw new Error(err);
           }

        res.send(item);

     });
};

//To create a new item in db.
exports.add = function(req, res) {
         var document = new Item(req.body);
         document.save(function(err, item) {
             if (err) {
                    throw new Error(err);
              }
         res.send(item);
         });
};

//To update the item in the db.
exports.update = function(req, res) {
         Item.findByIdAndUpdate(req.params.id, {
         $set: req.body
         }, function(err, item) {
                          if (err) {
                                    throw new Error(err);
                          }
         res.send(item);
  });
};

//To delete the item from the db.
exports.remove = function(req, res) {
        Item.findByIdAndRemove(req.params.id, function(err, item) {
        if (err) {
                throw new Error(err);
        }
        res.send(item);
  });
};
