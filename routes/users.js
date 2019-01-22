var express = require('express');
var router = express.Router();
var userDao = require('../dao/userDao');
var result = require('../model/result')
/* GET users listing. */

router.get('/', function(req, res, next) {

});
router.get('/list',(req,res)=>{
  userDao.list((users)=>{
    res.json(result.createResult(true,users))
  })
});
module.exports = router;
