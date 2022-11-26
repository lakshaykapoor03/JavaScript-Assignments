const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");
var length= document.getElementById("length");


let pwlength;
length.addEventListener('change', (event)=>{
    pwlength=event.target.value
});

// function myFunction(event) { 
//     length(event.target.value);
//   }

// const randomFunc = {
//   lower: getRandomLower,
//   upper: getRandomUpper,
//   number: getRandomNumber,
//   symbol: getRandomSymbol,
// };

generateEl.addEventListener("click", () => {
    const res = generatePassword("abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ","0123456789", "!@#$%^&*()",pwlength)
    console.log(res);
    resultEl.innerText = res

    
async function copyToClipboard() {
  await navigator.clipboard.writeText(input.value);
  alert("Copied to Clipboard");
}
return copyToClipboard;
});

 clipboardEl.addEventListener("click", copyToClipboard);

function generatePassword(lower, upper, number, symbol, length){
    console.log(length);
  var chars =
  lower+upper+number+symbol
  var passwordLength = length;
  var password = "";
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
    // console.log(chars.substring(randomNumber, randomNumber + 1));
    // console.log(randomNumber);
  }
  console.log(randomNumber);
  console.log(passwordLength);
  return password;
}


// console.log(generatePassword("abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ","0123456789", "!@#$%^&*()",pwlength));
// function getRandomLower() {}

// function getRandomUpper() {}

// function getRandomNumber() {}

// function getRandomSymbol() {}
