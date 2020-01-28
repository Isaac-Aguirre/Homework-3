// Assignment Code

window.addEventListener('load', ()=>{
  var generateBtn = document.querySelector("#generate");
 const chars = [1, 2 , 3]
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }
  function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}

  function generatePassword() {

    let leng = prompt("How long does the password have to be?");
    let choice1 = confirm("Include lowercase letters?");
    let choice2 = confirm("Include uppercase letters?");
    let choice3 = confirm("Include numbers?");
    let choice4 = confirm("Include special characters?");
    

    password = '';
    for (var i = 0; i < leng; i++) {
     password += getRandom(chars);
    }
    return password;
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

})
