var mongoose  = require('mongoose')
  , Schema = mongoose.Schema


var userSchema = new Schema({
  name: String,
  username: {type: String, unique: true},
  password: String,
  email: String,
  role: String
}, {timestamps: true})


var User = mongoose.model('User', userSchema)

module.exports = User
