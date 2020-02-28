$(document).ready(function() {
  $('.viewContent').click(function (){
    $.ajax({
      type: "GET",
      url: '../component/view-content.html',
      beforeSend: function() {
        $(".profile").html("<h3>Loading...</h3>")
      },
      success: function(response) {
        setTimeout(function(){
          $(".profile").html(response)
        }, 2000)
      }
    });
  });
  $('.formContent').click(function (){
    $.ajax({
      type: "GET",
      url: '../component/edit-profile.html',
      beforeSend: function() {
        $(".profile").html("<h3>Loading...</h3>")
      },
      success: function(response) {
        setTimeout(function(){
          $(".profile").html(response)
        }, 2000)
      }
    });
  });
});