const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Product = new Schema({
productName:{
    type:String
},
productDescription:{
    type:String
},
productPrice:{
    type:String
}
},
{
  collection:'Product'
});
module.exports = mongoose.model('Product',Product);