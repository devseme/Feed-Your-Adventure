$(document).ready(function () {
    $("form#form").submit(function (event) {
      var email = $("input#email").val();
      var message = $("textarea#message").val();

      if ($("input#email").val()) {
        alert(
            "Your message has been received. Thank you for reaching out to us!"
        );
      } else {
        alert("Please enter your email!");
      }
    });
  });