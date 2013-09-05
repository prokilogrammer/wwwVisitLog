var http = require("http");
var url  = require("url");

// Function to start the HTTP Server
function start(route, handle) {


    // Process incoming HTTP Requests
	function onRequest (request, response) {
		
		// Parse the request		
	    var URLData = url.parse(request.url, true);
        var pathname = URLData.pathname;
        var GETData = URLData.query;

		// Route the request to the appropriate page
		route(handle, pathname, response, GETData);
	}

    // Setup the server and start listening
	http.createServer(onRequest).listen(8080); //process.env.PORT);
}

// List of functions exported by this module
exports.start = start;
