var User = require('../models/user.js')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')


module.exports = {
  signup: (req, res)=>{
    var createUser = new User({
      name: req.body.name,
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, 10),
      email: req.body.email,
      role: req.body.role || 'member'
    })
    createUser.save((err, user)=>{
      if(!err) {
        res.send(user)
      } else {
        res.send({errmsg: `username already taken`})
      }
    })
  },

  signin: (req, res)=>{
    var user = req.user
    console.log(`aku sampai disini`);
    if(user.hasOwnProperty('message')) {
      res.send(user)
    } else {
      var token = jwt.sign({
        name: user.name,
        id: user._id,
        role: user.role
      },
      'secret',
      { expiresIn: '1h'
      }, (err, token)=>{
        if (!err){
          jwt.verify(token, 'secret', (err, decoded)=>{
            if(!err) {
              console.log(`aku sampai didalam`);
              res.send({token: token, name:decoded.name, role: decoded.role, id:decoded.id})
            } else {
              console.log(`ada yang ga beres sama tokennya`);
            }
          })
        } else {
          res.send(err)
        }
      })
    }
  },

  read: (req, res)=>{
    User.find((err, users)=>{
      if(!err) {
        res.send(users)
      } else {
        res.send(err)
      }
    })
  },

  delete: (req, res)=>{
    User.findOneAndRemove({_id: req.params.id}, (err)=>{
      if(!err) {
        res.send({message: `id ${req.params.id} deleted`})
      } else {
        res.send(err)
      }
    })
  }
}
