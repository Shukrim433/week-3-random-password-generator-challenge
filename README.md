# week-3-random-password-generator-challenge

## Description

- The reason I refactored the provided code was to help employees create secure passwords based on the criteria they select. So this application will randomly generate a password between 8 and 128 characters (with the character preferences the user chooses) each time they click the generate password button. This application will provide employees with a strong password that provides great security.

## Process

- The first thing I did was create a 'generatePassword' function with no parameters.

- Then inside the 'generatePassword' function I added 4 separate variables each containing a string of all the lowercase characters, uppercase characters, special characters and numbers available for the password.

- Next I set out the user preferences. Using the 'confirm()' function to allow the user to choose whichever of the 4 character preferences they wanted in their randomised password.

- Then to make sure the user chose atlease one character preferences out of the four, I used an if statement to say that if 'lowercasePref', 'uppercasePref', 'numbersPref' and 'specialCharactersPref' all returned a value of false then it would display an alert telling the user they need to pick atleast one preference.

- After that I set out the user preference for the password  length. To do this I used the 'prompt()' function which displays a text box for the user to input their prefered password length. I also used an if statement to ensure the password was between 8 and 128 characters.

- I had to make sure the user entered a number into the 'prompt()' text box. So in the same if statement's first condition I used the 'isNaN()' function to say if the 'passwordLength' variable returned is not a number, an alert will be displayed telling the user to enter a number.

- Then used the 'parseInt()' function to reassign the user's input (the value of the 'passwordLength' variable) to an integer. This is because the 'prompt()' function in javascript returns the user's input as a string no matter if the user enters a number or a word.
So no matter what the user enters they will get an alert telling them that they haven't entered a number even if they technically did. Therefore with the 'parseInt()' function if the first characters of the user's input string isnt a number it will return 'NaN'. But if it is a number in the string it will convert that string data typt to a number data type of the same value. 

- After that I created an array that would contain all the characters that the user could possibly have in their password based on their user preferences. To do this I made 4 separate if statements saying (for example) if 'lowercasePref' returned a value of true (meaning the user clicked 'okay' instead of 'cancel') then the 'lowercase' string should be added to the 'passwordCharacters' array.

- The way I added these strings to the array was by reassigning the value of the 'passwordCharacters' array and giving it a value of (for example) the 'lowercase' string. I used '.split('')' to split the 'lowercase' string into an array of lowercase character string elements. Then i used '.concat()' to concatenate (combine/join) the 'passwordCharacters' array with the array containing the lowercase characters. The same process is repeated for 'uppercase', 'numbers', and 'specialCharacters'.

-Finally i used a for loop. In that for loop I used the functions ' Math.floor(Math.random()*passwordCharacters.length)' which essentially picks a random number from 0 to 1 and multiplies that by the 'passwordCharacters' length and then rounds in down to the nearest integer, to give me a random index (character) of the 'passwordCharacter' array to add to the 'password' variable, to in turn, crate the random password.

- 

## Webpage

These are some screenshots of the deployed application:

![ screenshot of the webpage](./password%20generator.png)


This is a link to the deployed webpage:
