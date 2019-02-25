var conn = require('./connection.js');

var orm = {

    selectAll: function(table,callback) {
      var sql = "SELECT * FROM ??";
      conn.query(sql, [table], function(err, result) {
        if (err) throw err;
        callback(result);
      });
    },

    insertOne: function(table,name,devoured,callback) {
      var sql = "INSERT INTO ?? (burger_name,devoured) VALUES (?,?)"
      conn.query(sql, [table, name, devoured], function(err, result) {
        if (err) throw err;
        callback(result);
      });
    },

    updateOne: function(table,devoured,condition,callback){
        var sql = 'UPDATE ?? SET devoured = ? WHERE id = ?'
        conn.query(sql, [table,devoured,condition], function(err, result) {
          if (err) throw err;
          callback(result);
        }); 
      }
  };


module.exports = orm;