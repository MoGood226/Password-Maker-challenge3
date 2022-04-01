// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "";
  var characters = "";
  // window prompt boxes return a STRING - you need to turn it into a number - google convert string into a number javascript
  var promptLength = window.prompt("How long would you like your password to be between 8 and 128 characters?");

  if (promptLength < 8 || promptLength > 128) {
    window.alert("Password length is outside of parameter, try again");
    return "nah";
  }

  //Lowercase function
  var confirmLowerCase = window.confirm("Would you like lowercases in your password?");

  if (confirmLowerCase) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }

  //Uppercase function
  var confirmUpperCase = window.confirm("Would you like uppercases in your password?");

  if (confirmUpperCase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  //Numbers function
  var confirmNumbers = window.confirm("Would you like numbers in yor password?");

  if (confirmNumbers) {
    characters += "1234567890"
  }

  //Special characters function
  var confirmSpecials = window.confirm("Would you like special characters in yor password?");

  if (confirmSpecials) {
    characters += " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    console.log(characters);
  }

  //For loop to decide the password
  for (let i = 0; i < promptLength; i++) {
    // use the character.charAt(randomNumber) method to add a character to password from characters once each iteration
    // use Math.floor(Math.random * characters.length) for the random number    
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
