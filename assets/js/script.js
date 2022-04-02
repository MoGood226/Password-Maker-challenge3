// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "";
  var characters = "";
  var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890"
  var specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

  // window prompt boxes return a STRING - you need to turn it into a number - google convert string into a number javascript
  var promptLength = window.prompt("How long would you like your password to be between 8 and 128 characters?");

  if (promptLength < 8 || promptLength > 128) {
    window.alert("Password length is outside of parameter, try again");
    return "Try again, bro";
  } else if (isNaN(promptLength)) {
    window.alert("Password's lengths gotta be a number, try again");
    return "Try again, bro"
  }


  //Lowercase function
  var confirmLowerCase = window.confirm("Would you like lowercases in your password?");

  if (confirmLowerCase) {
    characters += lowerCaseChars;
  }

  //Uppercase function
  var confirmUpperCase = window.confirm("Would you like uppercases in your password?");

  if (confirmUpperCase) {
    characters += upperCaseChars
  }

  //Numbers function
  var confirmNumbers = window.confirm("Would you like numbers in yor password?");

  if (confirmNumbers) {
    characters += numbers
  }

  //Special characters function
  var confirmSpecials = window.confirm("Would you like special characters in yor password?");

  if (confirmSpecials) {
    characters += specialChars
  }

  //No choices selected function
  if (!confirmLowerCase && !confirmUpperCase && !confirmNumbers && !confirmSpecials) {
    window.alert("Hey, gotta choose at least 1, dude. Try again");
    return "Try again, bro"
  }

  var hasIncludedLowerCase = false;
  var hasIncludedUpperCase = false;
  var hasIncludedNumbers = false;
  var hasIncludedSpecialChar = false;

  //For loop to decide the password
  for (let i = 0; i < promptLength; i++) {
    var randomNumber = Math.floor(Math.random() * characters.length);
    var randomChar = characters.charAt(randomNumber);
    password += randomChar;

    //LEts see what type of char is this one
    if (lowerCaseChars.indexOf(randomChar) > -1) {
      hasIncludedLowerCase = true;
    }
    if (upperCaseChars.indexOf(randomChar) > -1) {
      hasIncludedUpperCase = true;
    }
    if (numbers.indexOf(randomChar) > -1) {
      hasIncludedNumbers = true;
    }
    if (specialChars.indexOf(randomChar) > -1) {
      hasIncludedSpecialChar = true;
    }
  }

  //Making sure password has all requirements
  if (confirmLowerCase && !hasIncludedLowerCase) {
    var randomIndexToReplace = Math.floor(Math.random() * password.length);
    var randomLowerCase = Math.floor(Math.random() * lowerCaseChars.length);
    password = password.split('');
    password[randomIndexToReplace] = lowerCaseChars.charAt(randomLowerCase);
    password = password.join('');
  }

  if (confirmUpperCase && !hasIncludedUpperCase) {
    var randomIndexToReplace = Math.floor(Math.random() * password.length);
    var randomUpperCase = Math.floor(Math.random() * upperCaseChars.length);
    password = password.split('');
    password[randomIndexToReplace] = upperCaseChars.charAt(randomUpperCase);
    password = password.join('');
  }

  if (confirmNumbers && !hasIncludedNumbers) {
    var randomIndexToReplace = Math.floor(Math.random() * password.length);
    var randomNumbers = Math.floor(Math.random() * numbers.length);
    password = password.split('');
    password[randomIndexToReplace] = numbers.charAt(randomNumbers);
    password = password.join('');
  }

  if (confirmSpecials && !hasIncludedSpecialChar) {
    var randomIndexToReplace = Math.floor(Math.random() * password.length);
    var randomSpecials = Math.floor(Math.random() * specialChars.length);
    password = password.split('');
    password[randomIndexToReplace] = specialChars.charAt(randomSpecials);
    password = password.join('');
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
