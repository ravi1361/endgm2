var express = require('express');
var router = express.Router();

const userModel = require("./users");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/create',async function(req, res) {
let userdata = await userModel.create({
   username : "harshi",
  nickname : "harshiiiiii",
  description : "hello everyone",
  categories : ['fashion','life','science'],
 })
 res.send(userdata);
});


router.get('/find',async function(req, res) {
  var regex = new RegExp("^harSh$",'i');
  let user = await userModel.find({username: regex});
  res.send(user);
});



module.exports = router;
