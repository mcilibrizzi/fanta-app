var express = require('express'),
    path 	= require('path');
var router 	= express.Router();

router.get("/",function(req,res){
	res.sendFile('home.html',{root : '../src/public'});
});
router.get("/page2",function(req,res){
	res.sendFile("page2.html",{root : '../src/public'})
});

module.exports = router;