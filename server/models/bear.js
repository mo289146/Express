var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BearSchema=new Schema({
  from:String,
  subject:String,
  date:String
});
module.exports= mongoose.model('users1',BearSchema, 'users1');
