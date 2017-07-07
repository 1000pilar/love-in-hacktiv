var mongoose = require('mongoose')
var Schema = mongoose.Schema


var loverSchema = new Schema({
  lover_name: String,
  love_name: {type: String, unique: true},
  result: String,
  percentage: String,
  user_id: {type: Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true})



var Lover = mongoose.model('Lover', loverSchema)

module.exports = Lover


// { fname: 'John',
//   sname: 'Alice',
//   percentage: '46',
//   result: 'Can choose someone better.' }
