var http = require('http');

var handleRequest = function(request, response) {
	console.log('requete recue: ', request.url);
	response.writeHead(200);
	response.end('Hello ! Bye !!!');
};

var ww = http.createServer(handleRequest);
ww.listen(8080);