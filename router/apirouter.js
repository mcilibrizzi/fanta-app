var express 	= require('express'),
	apiRouter 	= express.Router();

apiRouter.get("/",function(req,res){
	res.send("API PAGE!!")
});

module.exports = apiRouter;