var db = require('./db.js');

function start(response, data)
{
    retrieve(response);
}

function store(response, data)
{

var date = new Date();

db.store(data.title, data.url, data.summary);

var now = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear()  
    + "@" + date.getHours() + ":" + date.getMinutes() + ":"  + date.getSeconds();

response.writeHead(200, {"Content-Type": "text/plain"});
response.write("Title: " + data.title + "\n");
response.write("Url: " + data.url + "\n");
response.write("Summary: " + data.summary + "\n");
response.write("Written at: " + now + "\n"); 
response.end();
console.log("Store called\n");
}

function retrieve(response, data)
{
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Reading from database: \n\n"); 
    db.retrieve_all(retrieve_callback, response);
}

function retrieve_callback(response, err, result)
{
    for (i in result)
    {
        var row = result[i];
        response.write("1\n");
        response.write("ID: " + row.id + "\n");
        response.write("Title: " + row.title + "\n");
        response.write("URL: " + row.title + "\n");
        response.write("Summary: " + row.summary + "\n");
        response.write("When: " + row.ts + "\n");
        response.write("\n-----------------------------\n\n");
    }

    response.end();
}

exports.start = start;
exports.store = store;
exports.retrieve = retrieve;
