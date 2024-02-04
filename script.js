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
var specialCharactersPref = confirm('Do you want special characters in your password?')





//preference for password length
var passwordLength = prompt('How many characters do you want your password to be?');
passwordLength= parseInt(passwordLength);
  if (isNaN(passwordLength)) {
 window.alert('Invalid! You need to enter a number.');
} else if (passwordLength < 8) {
 window.alert('Your password should be over 8 characters.');
} else if (passwordLength > 128) {
 window.alert('Your password should be less than 128 characters.');
} else {
 window.alert('Password length is valid!');
}


//an array of all the characters that can be used in the password

var passwordCharacters = []

if(lowerCasePref){
  passwordCharacters = passwordCharacters.concat(lowercase.split(''))
}
if(uppercasePref){
  passwordCharacters = passwordCharacters.concat(uppercase.split(''))
}
if(numbersPref){
  passwordCharacters = passwordCharacters.concat(numbers.split(''))
}
if(specialCharactersPref){
  passwordCharacters = passwordCharacters.concat(specialCharacters.split(''))
}

//create random password
var password = ''

for (var i = 0 ; i < passwordLength ; i++){
  var randomCharacterIndex = Math.floor(Math.random()*passwordCharacters.length)
  password += passwordCharacters[randomCharacterIndex]
}

return password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);











/*
//if they dont enter anything
else if (!passwordLength){
  window.alert('Invalid! You need to enter a number.')
}
*/