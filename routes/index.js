var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/failed', function(req, res) {
  req.flash("age" ,12);
  req.flash("name" ,"harsh");
  res.send("bangaya");
});

router.get('/checkkaro', function(req, res) {
  console.log(req.flash("age"),req.flash("name"));
  res.send("check karo be ke terminal par");
});

module.exports = router;
