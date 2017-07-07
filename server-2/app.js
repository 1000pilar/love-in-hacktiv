var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var bcrypt = require('bcrypt');
var cors = require('cors');
var mongoose = require('mongoose');
var User = require('./models/user.js');

var users = require('./routes/users');
var lovers = require('./routes/lovers');

var app = express();

app.use(cors())
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/love-in-hacktiv', ()=>{
  console.log(`run in environment database mongodb!!`);
})

passport.use(new LocalStrategy(
  function (username, password, done){
    User.findOne({username: username}, function(err, user){
      if (err) { return done(err); }
      if (!user) { return done(null, {message: `username or password invalid`}); }
      if (!bcrypt.compareSync(password, user.password)) { return done(null, {message: `password invalid`}); }
      return done(null, user);
    })
  }
))

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

app.use('/api/users', users);
app.use('/api/lovers', lovers);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
