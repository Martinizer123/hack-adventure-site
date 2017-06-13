var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const context = {
    title: 'Profile',
    name: 'Martin',
    age: '13',
    position: 'student',
    hobbies: ['tennis', 'golf', 'running', 'beach'],
  }
  res.render ('profile', context);
})

module.exports = router;
