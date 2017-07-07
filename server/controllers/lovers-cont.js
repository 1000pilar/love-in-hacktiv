const unirest = require('unirest')
var Lover = require('../models/lover.js')


module.exports = {
  create: (req, res)=>{
    unirest.post(`https://love-calculator.p.mashape.com/getPercentage?fname=${req.body.lover_name}&sname=${req.body.love_name}`)
    .header("X-Mashape-Key", "GEmfLeInuLmshD6AgNkJnDUqykdip1uKkS9jsn3Or7NQSq3bzT")
    .header("Accept", "application/json")
    .end(function (result) {
      console.log(result.body);
      var createLover = new Lover({
        lover_name: result.body.fname,
        love_name: result.body.sname,
        result: result.body.result,
        percentage: result.body.percentage,
        user_id: req.body.user_id
      })
      createLover.save((err, love)=>{
        if(!err) {
          res.send(love)
        } else {
          res.send(err)
        }
      })
    });
  },

  read: (req, res)=>{
    Lover.find({user_id: req.params.id}, (err, loves)=>{
      if(!err) {
        res.send(loves)
      } else {
        res.send(err)
      }
    })
  },

  delete: (req, res)=>{
    Lover.findOneAndRemove({_id: req.params.id}, (err, loves)=>{
      if(!err) {
        res.send(loves)
      } else {
        res.send(err)
      }
    })
  }
}
