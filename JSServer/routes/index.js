var express = require('express');
var router = express.Router();
var counter = require('../model/counter')

/* GET home page. */
router.get('/counter', function(req, res, next) {
  res.json({data: counter.getCounter()});
});

router.put('/counter/:number', function(req, res, next){
  var number = req.params.number;
  counter.setCounter(number);
});

module.exports = router;
