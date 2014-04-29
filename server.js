var restify = require('restify'),
	server  = restify.createServer();

server.use(restify.CORS());
server.use(restify.queryParser());
server.use(restify.gzipResponse());

server.listen(process.env.PORT || 8080, function() {});