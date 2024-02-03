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
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
