function route (handle, pathname, response, data) {
	console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function')
    {
        handle[pathname](response, data);
    }
    else
    {
        console.log("No request handler found for " + pathname);
    }
}

exports.route = route;
