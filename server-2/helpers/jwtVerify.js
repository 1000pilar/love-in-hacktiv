var jwt = require('jsonwebtoken')


module.exports = {
  jwtVerify : (req, res, next)=>{
    jwt.verify(req.headers.token, 'secret', (err, decoded)=>{
      if(!err) {
        req.decoded = decoded
        next()
      } else {
        res.send({message: `Somthing wrong with your authentication`})
      }
    })
  }
}
