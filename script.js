// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
//   return passwordText.value;
// }

function generatePassword() {

  // Need this code in the function since generation needs pwLength
  var sizeCheck = true;

  // take user input for length, reprompt for things outside of specified range
  do {
    console.log("I have arrived");
    var passwordLength = prompt("How many character to include in the password? (min. 8 max 120)");
    var pwLength = parseInt(passwordLength);
    console.log(`My length is ${pwLength}`);
    if ((pwLength >= 8) && (pwLength <= 120)) {
      sizeCheck = false;
    }
  } while (sizeCheck) {
    console.log(`My length is ${pwLength}`);
  }
  //Confirm User Lowercase
  do {
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
  // 4 need cases for each or needing simpler way
  var charLower = `abcdefghijklmnopqrstuvwxyz`;
  var charUpper = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  var charNum = `0123456789`;
  var charSpec = `!@#$%^%&*(){}[]-=`;
  var charPool = ``;

  // 4 if loops confirming the addition of the strings to a character pool;
  if(caseLower){
    charPool = charPool + charLower;
    console.log(charPool);
  }
  if(caseUpper){
    charPool = charPool + charUpper;
    console.log(charPool);
  }
  if(caseNumeric){
    charPool = charPool + charNum;
    console.log(charPool);
  }
  if(caseSpecial){
    charPool = charPool + charSpec;
    console.log(charPool);
  }

  //With the Pool of Characters using random generated enough characters to fill the length required




  console.log("I have exited.");
  return "works";
}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", generatePassword);