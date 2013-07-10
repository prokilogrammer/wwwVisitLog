var http = require("http");
var url  = require("url");

// Function to start the HTTP Server
function start(route) {


    // Process incoming HTTP Requests
	function onRequest (request, response) {
		
		// Parse the request		
		var pathname = url.parse(request.url).pathname;
			
		// Route the request to the appropriate page
		route(pathname);

		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World");
		response.end();
	}

    // Setup the server and start listening
	http.createServer(onRequest).listen(process.env.PORT);
}


// List of functions exported by this module
exports.start = start;
