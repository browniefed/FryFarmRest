var restify = require('restify'),
	server  = restify.createServer();

server.use(restify.CORS());
server.use(restify.queryParser());
server.use(restify.gzipResponse());


server.post('/', function(req, res, next) {
	res.send('This is the API for FryFarms')
});



server.listen(process.env.PORT || 8080, function() {});