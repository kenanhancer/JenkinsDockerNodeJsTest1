// load the http module
var http = require('http');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello Kenan Hancer\n");
  console.log("OK");
});

var port = process.env.port || 8090;

// listen on localhost:8090
server.listen(port);
console.log("Server listening at http://127.0.0.1:/" + port);