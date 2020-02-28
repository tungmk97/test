function validateLoginForm() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var count = 0;
  var countError = count;

  message = "madatory field cannot empty";

  if(email.value == "" || checkLengthInvalid(email.value.length, 5, 50)) {
    email.style.borderColor = "red";
    countError = count + 1;
  } else {
    email.style.borderColor = "green";
  }

  if(password.value == "" || checkLengthInvalid(password.value.length, 8, 30)) {
    password.style.borderColor = "red";
    countError = count + 1;
  } else {
    password.style.borderColor = "green"
  }

  if (email.value != "" && !validateEmail(email.value)) {
    message = "email is incorrec format";
    email.style.borderColor = "red";
    countError = count + 1;
  }

  var numberOfInput = document.getElementsByClassName("input-tag").length;
  var countNumberValidInput = 0;
  for (var j = 0; j < numberOfInput; j++) {
    if (document.getElementsByClassName("input-tag")[j].style.borderColor == "green") {
      countNumberValidInput++;
    }
  }

  if(numberOfInput == countNumberValidInput) {
    message = "";
    return true;
  }

  document.getElementById("error").innerHTML = message;
  
  if(countError > countError) {
    return false;
  }
}

function checkLengthInvalid(value, minLength, maxLength) {
  if(value <= minLength || value >= maxLength) {
    return true;
  }
  return false;
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function submitFormValidate() {
  if(validateLoginForm()) {
    document.getElementById("submitForm").submit();
  } else {
    alert("dang chua validate");
  }
}
