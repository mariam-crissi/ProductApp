var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//Schema Definition
var Item = new Schema({
    productid: Number,
    name: String,
    price:Number,
    grapes:String,
    country:String,
    region:String,
    notes:String,
    url:String
    },
    {
       versionKey: false,//To disable versionKey
       toJSON: {
                 virtuals: true,
                 transform: function(doc, ret, options) {
                            ret.id = ret._id.toHexString();//To create a new property id
                            delete ret._id;
                 }
  }
});
mongoose.model('Item', Item);
