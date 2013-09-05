var sqlite = require('sqlite3').verbose();
var db = new sqlite.Database('reading_db');
var sql_create = "CREATE TABLE IF NOT EXISTS summary "
                    + "(id INTEGER PRIMARY KEY AUTOINCREMENT, " 
                    + "title TEXT, url TEXT, summary TEXT, "
                    + "ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP)";

var sql_store = "INSERT INTO summary (title, url, summary) VALUES (?, ?, ?)";

var sql_retrieve_all = "SELECT * FROM summary";

function store(title, url, summary)
{
    db.serialize(function() {
        db.run(sql_create);

        var stmt = db.prepare(sql_store); 
        stmt.run(title, url, summary);
        stmt.finalize();
    });
}

function retrieve_all(callback, callback_data)
{
    var result = {};
    var counter=0;

    db.all(sql_retrieve_all, function(err, rows) {
        callback(callback_data, err, rows); 
    });
}

exports.store = store;
exports.retrieve_all = retrieve_all;
