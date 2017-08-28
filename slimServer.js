var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

var mimeTypes = {
	"html" : "text/html",
	"jpeg" : "image/jpeg",
	"jpg" : "image/jpg",
	"png" : "image/png",
	"js" : "text/javascript",
	"css" : "text/css"
};

http.createServer(function (req, res) {
	var uri = url.parse(req.url).pathname;
	var fileName = path.join(process.cwd(), unescape(uri));
	console.log("loading "+uri);
	var stats;

	try {
			stats = fs.lstatSync(fileName);
		} catch (e) {
		res.writeHead(404, {"Content-type":"text/html"});
		res.write("<h1>404 Not found</h1><p>Bummer!</p>");
		res.end();
		return;
	}
	
	
	
	if (stats.isFile()) {
		var mimeType = mimeTypes[path.extname(fileName).split(".")[1]];
		res.writeHead(200, {'Content-type': mimeType});
		var fileStream = fs.createReadStream(fileName);
		fileStream.pipe(res);
	} else if(stats.isDirectory()) {
		res.writeHead(200, {"location" : "index.html"});
		res.end();
	} else {
		res.writeHead(500, {"Content-type" : "text/html"});
		res.write("<h1>500 Internal Server Error</h1><p>Contact your server administrator</h1>");
		res.end();
	}


}).listen(3000);
console.log("Server running on port 3000");