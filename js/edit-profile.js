function validateLoginForm() {
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  var phone = document.getElementById("phone");
  var description = document.getElementById("desc");
  
  var message = "madatory cannot empty";

  if (firstName.value == "" || checkLengthInvalid(firstName.value.length, 3, 30)) {
    firstName.style.borderColor = "red";
  } else {
    firstName.style.borderColor = "green";
  }

  if (lastName.value == "" || checkLengthInvalid(lastName.value.length, 3, 30)) {
    lastName.style.borderColor = "red";
  } else {
    lastName.style.borderColor = "green";
  }

  if (phone.value == "" || checkLengthInvalid(phone.value.length, 9, 30)) {
    phone.style.borderColor = "red";
  } else {
    phone.style.borderColor = "green";
  }

  if(description.value.length >= 200){
    description.style.borderColor = "red";
  } else {
    description.style.borderColor = "green";
  }

  if(phone.value != "" && !validatePhone(phone.value)) {
    message = "invalid phone number";
    phone.style.borderColor = "red";
  }

  var numberOfInput = document.getElementsByClassName("check-valid").length;
  var countNumberValidInput = 0;
  for (var j = 0; j < numberOfInput; j++) {
    if (document.getElementsByClassName("check-valid")[j].style.borderColor == "green") {
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

function validatePhone(phone) {
  var re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  
  return re.test(phone);
}
