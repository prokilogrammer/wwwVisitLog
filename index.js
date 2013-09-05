var server = require("./server");
var router = require("./router");
var request_handlers = require("./request_handlers");

var handle = {}
handle["/"] = request_handlers.start;
handle["/store"] = request_handlers.store;
handle["/retrieve"] = request_handlers.retrieve; 

server.start(router.route, handle);
