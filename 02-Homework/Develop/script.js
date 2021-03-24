// Assignment Code
var generateBtn = document.querySelector("#generate");
 

var user=prompt("choose a pasword between 8 to 20 characters long.");
if((parseInt(user) < 8 || parseInt(user) > 20)){
  alert("Invalid response. Please choose between 8 to 20 character long.");
} 


// Write password to the #password input
function writePassword(generatePassword) {
  var randomPassword="";
  var passwordText = document.querySelector("#password");
  if (password.SpecialArry){
    var randomSpecialCharacter= getRandomeElementFromArray(SpecialArry);
    randomPassword= randomPassword + randomSpecialCharacter;
  }

  if (password.numbers){
    var randomNumber= getRandomeElementFromArray(numbers);
    randomPassword= randomPassword + randomNumber;
  }

  if (password.lowerLetters){
    var randomLowerCharacter= getRandomeElementFromArray(lowerLetters);
    randomPassword= randomPassword + randomLowerCharacter;
  }
  
  if (password.upperLetters){
    var randomUpperCharacter= getRandomeElementFromArray(upperLetters);
    randomPassword= randomPassword + randomUpperCharacter;
  }
  var remainingCharacters= user - randomPassword.length;
  for(var i=0;i<remainingCharacters;i++){
    var randomSpecialCharacter= getRandomeElementFromArray(lowerLetters);
    randomPassword= randomPassword + randomSpecialCharacter;
  
  }
  passwordText.value = randomPassword;
}
function generateRandomNumber(maxValue) {
  var randomNumber=Math.random();
  var result=Math.floor(randomNumber * maxValue);
  return result;
}

function getRandomeElementFromArray(array){
  var randomPosition=generateRandomNumber(array.length);
  return array[randomPosition]
}

var password={
  SpecialArry:false,
  numbers:false,
  lowerLetters:false,
  upperLetters:false
};

//Array with characters
var SpecialArry=['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']; 
  password.SpecialArry=confirm("Click OK to include special characters in your password.");
  
    
var numbers=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  password.numbers=confirm("Click OK to include numerical characters in your password.");
  

var lowerLetters= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  password.lowerLetters=confirm("Click OK to include lowercase characters in your password.");
 


var upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  password.upperLetters=confirm("Click OK to include uppercase characters in your password.");
 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
