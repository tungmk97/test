$(document).ready(function() {
  alert(123);
  $("#submitForm").on(submit, function (event){
    alert("vao");
    event.preventDefault();
    
  });
});