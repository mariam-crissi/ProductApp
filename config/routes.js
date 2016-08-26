var rest = require('../server/controllers/rest');

module.exports = function(app){
//To defining which REST endpoint is mapped to which method in the controller.

    // To find all products route
    app.get('/items', rest.findAll);

    // To find one product route
    app.get('/items/:id', rest.findOne);

     //To add product route
    app.post('/items', rest.add);

     // To update product route
    app.put('/items/:id', rest.update);

     //To delete product route
    app.del('/items/:id', rest.remove);
};
