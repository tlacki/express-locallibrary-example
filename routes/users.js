var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource on users');
});

router.get('/cool/', function(req, res, next) {
  res.send('You\'re cool!');
}); 

module.exports = router;
