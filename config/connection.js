
var mysql = require("mysql");
var conn;

if (process.env.JAWSDB_URL) {
  conn = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rivahweb",
    database: "burgers_db"
  })
}

conn.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + conn.threadId);
});


module.exports = conn;