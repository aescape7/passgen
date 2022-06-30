var generateBtn = document.querySelector("#generate");


 numbers = '1234567890';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var spechar = '~!@#$%^&*';

function generatePassword() {
  var passlength = prompt('type a passsword length between 8 and 128 characters:');
  // validate length is acceptable
  if(passlength < 8 || passlength > 128){
    alert('Please type a numerical value between 8 and 128.');
    var passlength = prompt('type a passsword length between 8 and 128 characters:');
  }
  var OptionUppercase = confirm('Presss OK if you would like uppercase letters');
  var OptionLowercase = confirm('Press OK for lowercase letters.');
  var OptionSpechar = confirm('Press OK for special characters.')
  var OptionNumber = confirm('Press OK if you would like numbers.')
  var generatedpasscode  = '';
  
  // convert value of length to an integer
  passlength = Number(passlength);

  // adding chosen characters to the pool of characters to pull from

  if(OptionUppercase){
    generatedpasscode += uppercase;
  }

  if(OptionLowercase){
    generatedpasscode += lowercase;
  } 

  if(OptionSpechar){
    generatedpasscode += Spechar;
  }

  if(OptionNumber){
    generatedpasscode += numbers;
  }

  // validate one character type has been selected
  if(OptionUppercase === false && OptionLowercase === false && OptionSpechar === false && optionNumber === false){
    var errorMsg = alert('select at least one character type, please cick the button and try again.');
  }

  // select characters from pool and assign to passwordResult until length is reached
var passgenout ='';
  for(var i = 0; i < length; i++){
    passgenout += generatedpasscode[Math.floor(Math.random() * (generatedpasscode.length-1) +1)];
  }

  return passgenout;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// call writePassword function to print password in text box


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);