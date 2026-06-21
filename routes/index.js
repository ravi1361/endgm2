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


router.get("/find", async function(req,res){
  var date1 = new Date ('2026-06-19');
  var date2 = new Date('2026-06-20');

  let user = await userModel.find({datecreated:{$gte:date1,$lte:date2}});
  res.send(user);
})





module.exports = router;
