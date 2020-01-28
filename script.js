// Assignment Code

window.addEventListener('load', ()=>{
  var generateBtn = document.querySelector("#generate");
  var lower = ["a","b","c","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var nums = ["1","2","3","4","5","6","7","8","9","0"];
  var special = ["!","@","#","$","%","&"];
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
    password = '';

    let chars = [""];

    let leng = prompt("How long does the password have to be?");
    let choice1 = confirm("Include lowercase letters?");

    if (choice1){
      password += getRandom(lower);
      for (var i = 0; i < lower.length; i++) {
        chars.push(lower[i]);
      }
    }
    let choice2 = confirm("Include uppercase letters?");
    if (choice2) {
      password += getRandom(upper);
      for (var i = 0; i < upper.length; i++) {
        chars.push(upper[i]);
      }
    }
    let choice3 = confirm("Include numbers?");
    if (choice3) {
      password += getRandom(nums);
      for (var i = 0; i < nums.length; i++) {
        chars.push(nums[i]);
      }
    }

    let choice4 = confirm("Include special characters?");
    if (choice4) {
      password += getRandom(special);
      for (var i = 0; i < special.length; i++) {
        chars.push(special[i]);
      }
    }



    for (var i = 0; i < leng; i++) {
     password += getRandom(chars);
    }
    return password;
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

})
