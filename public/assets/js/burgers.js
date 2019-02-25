// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devour").on("click", function(event) {
    
      var id = $(this).data("id");
      var newDevour = 1;
  
      var newDevouredState = {
        devoured: newDevour
      };
  
      console.log('burgers.js line11: ',newDevour);

      // Send the PUT request
      console.log('burgers.js line 14: ',id);
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devoured to", newDevouredState);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    
    //Add new burger
    $(".add-burger").on("click", function(event) {
      event.preventDefault();

      var newBurger = {
        name: $("#ba").val().trim(),
        devoured: 0
      }

      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function(){
          console.log('created new burger');
          location.reload();
      })

    });

});

