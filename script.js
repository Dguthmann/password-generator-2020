// Assignment Code
var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return passwordText.value;
}

function generatePassword() {

  // Need this code in the function since generation needs pwLength
  var sizeCheck = true;

  // take user input for length, reprompt for things outside of specified range
  do {
    // console.log("I have arrived");
    var passwordLength = prompt("How many character to include in the password? (min. 8 max 120)");
    var pwLength = parseInt(passwordLength);
    // console.log(`My length is ${pwLength}`);
    if ((pwLength >= 8) && (pwLength <= 120)) {
      sizeCheck = false;
    }
  } while (sizeCheck) {
    console.log(`My length is ${pwLength}`);
  }
  //Confirm User for types of characters used run until at least 1 is selected
  do {
    //Confirm User Lowercase
    var caseLower = confirm("Should lowercase Letters be used?")
    //Confirm User Uppercase
    var caseUpper = confirm("Should uppercase letters be used?")
    //Confirm Numeric
    var caseNumeric = confirm("Should numeric characters be used?")
    //Confirm Special
    var caseSpecial = confirm("Should special characters be used?")
    //Leave function with testing variable
  } while (!(caseLower || caseUpper || caseNumeric || caseSpecial));

  // Generate tables of letters to random
  var charLower = `abcdefghijklmnopqrstuvwxyz`;
  var charUpper = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  var charNum = `0123456789`;
  var charSpec = `!@#$%^%&*(){}[]-=`;
  var charPool = ``;

  // 4 if loops confirming the addition of the strings to a character pool;
  if (caseLower) {
    charPool = charPool + charLower;
    // console.log(charPool);
  }
  if (caseUpper) {
    charPool = charPool + charUpper;
    // console.log(charPool);
  }
  if (caseNumeric) {
    charPool = charPool + charNum;
    // console.log(charPool);
  }
  if (caseSpecial) {
    charPool = charPool + charSpec;
    // console.log(charPool);
  }

  //With the Pool of Characters using random generated enough characters to fill the length required
  var placeHolder = 0;
  var createdPassword = ``;
  for (let i = 0; i < pwLength; i++) {
    //creates pseudorandom placeHolder check
    placeHolder = (Math.ceil(Math.random() * charPool.length));
    //takes placeHolder and adds the character selected to the password
    createdPassword = createdPassword + charPool.charAt(placeHolder);
    // console.log(createdPassword);
  }
  // console.log("I have exited.");
  return createdPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Below is for testing of generatedPassword function, if you wanted to use the page instead of console on a browser
// generateBtn.addEventListener("click", generatePassword);