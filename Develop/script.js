// Assignment Code

// Get reference to the #generate element 
var generateBtn = document.querySelector("#generate");

//Variables added for password options and variables for collecting information 
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0","1","2","3","4","5","6","7","8","9"];
var special1 = ["!","@","#","$","%","^","&","*","(",")","_","+","=","-","~","'","`","'",":","?"];
var optionselection = [];
var randompassword="";


// Write password to the #password input
function writePassword() { 
var password = generatePassword();
var passwordText=document.querySelector("#password");

passwordText.value = password;

}


//~~~ When user clicks on "generate password" button, it will go through the generatePassword function~~~~

// Add Eventlistener to generate button 
generateBtn.addEventListener("click", writePassword);






function generatePassword () {


  // let lengthpass = {from: 8, to: 128};
  var lengthPass = window.prompt("Please enter length of password characters desired. Must be between 8 and 128 characters.", "8-128");
  console.log(lengthPass); //shares what number was choosen

  if (lengthPass >= 8 && lengthPass <= 128) {
    window.alert("Your number is between 8 and 128!" + " Selection: " + lengthPass);
  }
  else {
    window.alert("Must select a number between 8 and 128");
    return;
  }
 
  //~~~ User input regarding character types to include ~~~

  //Ask user if they want lowercase letters in password

  var incLowercase = window.confirm("Would you like lowercase characters?");
  if (incLowercase) {
    console.log("Ok button clicked - lowercase");
  }
  else {
    console.log("canceled - lowercase");
  }

  console.log(incLowercase + " Lowercase");


  //Ask user if they want uppercase letters in password

  var incUppercase = window.confirm("Would you like uppercase characters?");
  if (incUppercase) {
    console.log("Ok button clicked - uppercase");
  }
  else {
    console.log("canceled - uppercase");
  }
 
  console.log(incUppercase + " Uppercase");

  //Ask user if they want numeric characters in password

  var incNumeric = window.confirm("Would you like numeric characters?");
  if (incNumeric) {
    console.log("Ok button clicked - numeric");
  }
  else {
    console.log("canceled -numeric");
  }
  console.log(incNumeric + " Numeric");


  //Ask user if they want special characters in password

  var incSpecial1 = window.confirm("Would you like special characters?");

  if (incSpecial1) {
    console.log("Ok button clicked - special");
  }
  else {
    console.log("canceled - special");
  }
  console.log(incSpecial1 + " Special");



  // checking one character option is choosen as true
  if (incLowercase == false && incNumeric == false && incSpecial1 == false && incUppercase == false) {
    window.alert("One of the character options must be selected. Please try agian.");
    console.log("One of the character options must be selected");
    return;
  } 
  //if one is selected, it is ready to create password
  else if (incLowercase == true || incNumeric == true || incSpecial1 == true || incUppercase == true) {
    window.alert("All criteria met. Ready to generate password!");
    console.log("All criteria met. Ready to generate password");

    window.alert(
      "-Number of Characters: " + lengthPass + " -Lowercase Characters: " + incLowercase + " -Uppercase Characters: " + incUppercase + " -Numeric Characters: " + incNumeric + " -Special Characters: " + incSpecial1);

  }

  //collecting choices into optionselection array
  if (incLowercase) { 
    optionselection = optionselection.concat(lowercase); 
  }
  if (incUppercase) { 
    optionselection = optionselection.concat(uppercase); 
  }
  if (incNumeric) { 
    optionselection = optionselection.concat(numeric); 
  }
  if (incSpecial1) { 
    optionselection = optionselection.concat(special1); 
  }

 
// per selections on length and optionselection, create randompassword 
  for (var i = 0; i <= lengthPass; i++) {
    randompassword = randompassword+optionselection[Math.floor(Math.random()*optionselection.length)];
    console.log(randompassword);
  }
  
  //display password in window box
  return randompassword;

}








