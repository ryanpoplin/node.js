var http = require('http');
var serv = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('<marquee>Poplinr\'s Node.js Experience...</marquee>');
	require('colors');
	console.log('Ryan Matthew Poplin'.rainbow);
});
serv.listen(4000);