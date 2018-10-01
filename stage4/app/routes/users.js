var express = require('express');
var router = express.Router();

var userModel = require('../model/user.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  userModel.User.find(function (err, userlist) {
    if (err) {
      userModel.connectWithRetry();
      return console.log(err);
    };
    res.statusCode = 200;
    res.send(userlist);
  });
});

/* POST create user. */
router.post('/create', function(req, res, next) {
  if (req.body.name != null){
    // Create a new user
    var new_user = new userModel.User({name: req.body.name});
    new_user.save(function (err, new_user) {
      if (err) return console.error(err);
      console.log(new_user);
    });
    res.statusCode = 201;
    res.send();
  }
  else {
    res.statusCode = 400;
    res.send();
  }
});

module.exports = router;