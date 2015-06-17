var express 	   = require ('express'),
    morgan  	   = require ('morgan'),
    router 	   	 = require('./router/router'),
    apiRouter 	 = require('./router/apirouter'),
    app 		     = express();

app.use(morgan('dev'));
app.use("/",router);
app.use("/api",apiRouter);

app.listen(3000);
