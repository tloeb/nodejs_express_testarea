var express = require('express');
var router = express.Router();

var user_list = [
  {"Name":"Anna", "ID":"1"},
  {"Name":"Bob", "ID":"2"}
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(user_list);
});

module.exports = router;

/* POST create user. */
router.post('/create', function(req, res, next) {
  console.log(req.body);
  if (req.body.name != null){
    user_list.push(
      {"Name": req.body.name, "ID": user_list.length + 1}
    );
    res.statusCode = 201;
    res.send();
  }
  else {
    res.statusCode = 400;
    res.send();
  }
});