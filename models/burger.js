var orm = require('../config/orm.js');

var burger = {
    all: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },

    //
    insert: function(name, devoured, cb) {
      orm.insertOne("burgers", name, devoured, function(res) {
        cb(res);
      });
    },

    update: function(devoured, condition, cb) {
      orm.updateOne("burgers", devoured, condition, function(res) {
        cb(res);
      });
    }
  };


 module.exports = burger;
