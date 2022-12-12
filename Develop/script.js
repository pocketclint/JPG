// Assignment Code
//function to combine array values of user choices in password generation prompt boxes
function getRandomValue(array) {
  var randomValue = array[Math.floor(Math.random() * array.length)];
  return randomValue;
}

//function providing options to user with descriptions of each variable option in the prompt box
function generatePassword() {
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var special = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '/', ']', '^', '_', '`', '{', '|', '}', '~'];
  var choices = [];
  var generatedPassword = [];

  var passwordlength = (prompt("How many characters you would like your password to be?\nOption must be between 8-128 characters."));

  if (passwordlength < 8 || passwordlength > 128) {
    alert("Please choose between 8-128 characters.");
  } else {
  var upperCaseY = confirm("Select OK to include uppercase letters.");
  if (upperCaseY) {
    choices = choices.concat(upperCase);
  }
  var lowerCaseY = confirm("Select OK to include lowercase letters.");
  if (lowerCaseY) {
    choices = choices.concat(lowerCase);
  }
  var numbersY = confirm("Select OK to include numbers. (0-9)");
  if (numbersY) {
    choices = choices.concat(numbers);
  }
  var specialY = confirm("Select OK to include special characters. (!@#$)");
  if (specialY) {
    choices = choices.concat(special);
  }

  if (!upperCaseY && !lowerCaseY && !numbersY && !specialY) {
    alert("Please choose at least one option.");
    location.reload();
  }
}
//array combination of user's choices
for (var i = 0; i < passwordlength; i++) {
  generatedPassword.push(getRandomValue(choices));
}

//returns the information received in prior "for" statement
return generatedPassword.join("");
}

//original code starts here
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
