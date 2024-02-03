// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
// set out all the available characters:
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lowercase = 'abcdefghijklmnopqrstuvwxyz'
var specialCharacters = '!"#$%&()*+,-./:;<>=?@[\]^_`{}~|'
var numbers = '1234567890'

//set out the user preferences

//preference for the password characters
var lowerCasePref = confirm('Do you want lowercase letters in your password?')
var uppercasePref = confirm('Do you want uppercase letters in your password?')
var numbersPref = confirm('Do you want numbers letters in your password?')
var specialCharactersPref = confirm('Do you want uppercase letters in your password?')

//preference for password length


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
