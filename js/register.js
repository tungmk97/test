function validateLoginForm() {
  var userName = document.getElementById("userName");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var rePassword = document.getElementById("rePassword");
  var message = "madatory cannot empty";

  if (userName.value == "" || checkLengthInvalid(userName.value.length, 3, 30)) {
    userName.style.borderColor = "red";
  } else {
    userName.style.borderColor = "green";
  }

  if (email.value == "" || checkLengthInvalid(email.value.length, 5, 1000)) {
    email.style.borderColor = "red";
  } else {
    email.style.borderColor = "green";
  }

  if (password.value == "" || checkLengthInvalid(password.value.length, 8, 30)) {
    password.style.borderColor = "red";
  } else {
    password.style.borderColor = "green";
  }
  if (rePassword.value == "" || checkLengthInvalid(rePassword.value.length, 8, 30)) {
    rePassword.style.borderColor = "red";
  } else {
    rePassword.style.borderColor = "green";
  }

  if (email.value != "" && !validateEmail(email.value)) {
    message = "email is incorrec format";
    email.style.borderColor = "red";
  }
  if (password.value != rePassword.value) {
    message = "Confirm password is not match with password"
    rePassword.style.borderColor = "red";
  }

  var numberOfInput = document.getElementsByClassName("input-tag").length;
  var countNumberValidInput = 0;
  for (var j = 0; j < numberOfInput; j++) {
    if (document.getElementsByClassName("input-tag")[j].style.borderColor == "green") {
      countNumberValidInput++;
    }
  }

  if (numberOfInput == countNumberValidInput) {
    message = "";
  }

  document.getElementById("error").innerHTML = message;

}

function checkLengthInvalid(value, minLength, maxLength) {
  if (value <= minLength || value >= maxLength) {
    return true;
  }
  return false;
}


function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);

}