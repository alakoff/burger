var express = require("express");

var router = express.Router();

// Import the model burger.js to use its database functions
var burger = require("../models/burger.js");


//Get All Route
router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      res.render("index", hbsObject);
    });
  });

  
//Insert Route
router.post("/api/burgers", function(req, res) {
  burger.insert(req.body.name, req.body.devoured, function(result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});
  

//Update Route
router.put("/api/burgers/:id", function(req, res) {
  var condition = req.params.id;
  var devoured = req.body.devoured;

  burger.update(
    devoured,
    condition, function(results) {
      if (results.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
          res.status(200).end();
      }
      
    }
  );
});



// Export routes for server.js to use
module.exports = router;