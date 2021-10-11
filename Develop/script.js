var numChar = ["0","1","2","3","4","5","6","7","8","9"];
var capChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R", "S","T","U","V","W","X","Y","Z"]
var lowChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var speChar = ["!","@","#","$","%","&","*","_","-"]
var randCharPool = []
var randPassword = ''

// Confirming what password specifications user wants
function getUserData() { 
  var userLower = confirm(
    'Would you like to include lowercase characters?'
  )
  var userUpper = confirm(
    'Would you like to include uppercase characters?'
  )
  var userSpec = confirm(
    'Would you like to include special characters?'
  )
  var userNum = confirm(
    'Would you like to include numbers?'
  )
  var userInput = window.prompt(
    'Please select for length of password from 8 to 128.'
  )

  // Get input from user and make to integer 
  var userInputInt = parseInt(userInput)
  if(userInputInt >= 128 ||userInputInt <=8){
    alert('Invalid value please select again.') 
    userInput = window.prompt('Please select for length of password from 8 to 128')
  }

  // If the user selects false to all, will return a message to select one.
  if (
    userLower === false && userUpper === false && userSpec === false && userNum === false
  ){
    alert(
      'Please select one of the following.'
    )
    return null
  }

  // Putting the characters into a pool depending on if user selects true or false to confirm statements.
  if (userLower){
    randCharPool = randCharPool.concat(lowChar)
  }
  if (userUpper){
    randCharPool = randCharPool.concat(capChar)
  }
  if (userSpec){
    randCharPool = randCharPool.concat(speChar)
  }
  if (userNum){
    randCharPool = randCharPool.concat(numChar)
  }

  // Generating the password.
for (let i = 0; i < userInputInt; i++){
  randPassword += randCharPool[Math.floor(Math.random() * randCharPool.length)]}
  var passwordText = document.querySelector("#password");

  passwordText.value = randPassword;
}
document.querySelector("#generate").addEventListener("click",getUserData);