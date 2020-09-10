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

  // MOVE THIS SECTION OF CODE TO OTHER FUCTION
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

  //END OF MOVE THIS CODE TO OTHER FUNCTION

  // Generate tables of letters to random
  // 4 need cases for each or needing simpler way
  var charLower = `abcdefghijklmnopqrstuv`
  var charUpper = ``
  var charNum = ``
  var charSpec = 

  console.log("I have exited.");
  return "works";
}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", generatePassword);