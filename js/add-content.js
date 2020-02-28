function validateLoginForm() {
  var title = document.getElementById("title");
  var brief = document.getElementById("brief");
  var content = document.getElementById("content");

  message = "madatory field cannot empty";

  if(title.value == "" || checkLengthInvalid(title.value.length, 10, 200)) {
    title.style.borderColor = "red";
  } else {
    title.style.borderColor = "green";
  }

  if(brief.value == "" || checkLengthInvalid(brief.value.length, 30, 150)) {
    brief.style.borderColor = "red"
  } else {
    brief.style.borderColor = "green"
  }
  if(content.value == "" || checkLengthInvalid(content.value.length, 50, 1000)) {
    content.style.borderColor = "red"
  } else {
    content.style.borderColor = "green"
  }

  var numberOfInput = document.getElementsByClassName("input-check").length;
  var countNumberValidInput = 0;
  for (var j = 0; j < numberOfInput; j++) {
    if (document.getElementsByClassName("input-check")[j].style.borderColor == "green") {
      countNumberValidInput++;
    }
  }

  if(numberOfInput == countNumberValidInput) {
    message = "";
  }

  document.getElementById("error").innerHTML = message;
  
}

function checkLengthInvalid(value, minLength, maxLength) {
  if(value <= minLength || value >= maxLength) {
    return true;
  }
  return false;
}

