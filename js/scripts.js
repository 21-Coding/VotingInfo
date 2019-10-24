


$(document).ready(function() {
  $("#go").click(function() {
    $(".minor").hide();
    $(".adult").hide();
    var userAge = parseInt($("#age").val());
    if (userAge < 18) {
      $(".minor").show();
    } else if (userAge >= 18) {
      $(".adult").show();
    } else {
      var enterNumber = confirm("Are you going to enter a number???");
      if (enterNumber) {
        alert("Thank you!");
      } else {
        alert("Don't be a jerk!")
      };
    };
  });
});

























// The page should prompt the user to enter their current age.
//
// If the user is too young to vote, they should see different information than if the user is old enough to legally vote.
//
// Minors should be offered links to websites where they may learn about the voting process and age requirements.
//
// Those old enough to vote should be offered links to websites to register to vote, locate their nearest polling location/ballot dropbox is, or list when upcoming elections will take place.
