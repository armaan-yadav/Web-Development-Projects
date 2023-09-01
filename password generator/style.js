function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    // Generate random number
    var j = Math.floor(Math.random() * (i + 1));

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  let str = array.join('');
  return str;
}
// ----------Slider-------------//

const input = document.querySelector("#input"); // from slider
const value = document.querySelector("#value"); // jidhar op show karna hai
value.textContent = input.value; // initial value joki slider ki thi..woh store kari hai  store  inside  *value*
input.addEventListener("input", (event) => {
  value.textContent = event.target.value; //current event jo ho rha hai->usko target karna hai-> and get value after targetting
});

// password generator //
// var length = value.textContent;
let length = 10; // default length
input.addEventListener("input", (event) => {
  // whenever #input gets triggered // update length
  length = parseInt(event.target.value); // event.target
});

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomNumber() {
  return getRandom(0, 9);
}

function getRandomLowerCase() {
  return String.fromCharCode(getRandom(97, 123));
}
function getRandomUpperCase() {
  return String.fromCharCode(getRandom(65, 91));
}
function getRandomSymbol() {
  const symbols = "@#$-_";
  return symbols.charAt(getRandom(0, symbols.length));
}

// copy text //
const finalText = document.querySelector("#passwd");

let text = finalText.textContent;
async function copyText() {
  if (finalText.value) {
    try {
      await navigator.clipboard.writeText(finalText.value);
      document.querySelector("#copied").innerHTML = "Copied";
    } catch (e) {
      document.querySelector("#copied").innerHTML = "Failes!";
    }
  }
  // async nature that means it returns a promise..wither fulfilled or rejected
}
let btn = document.querySelector("#buttonCopied");
btn.addEventListener("click", () => {
  setTimeout(() => {
    document.querySelector("#copied").style.display = "none";
  }, 2000);
});

// --------Strength-------------//

const checkUpper = document.querySelector("#up");
const checkLower = document.querySelector("#lw");
const checkNumber = document.querySelector("#num");
const checkSymbol = document.querySelector("#sym");

function strengthCalc() {
  let hasUpper = false;
  let hasLower = false;
  let hasNum = false;
  let hasSym = false;
  if (checkUpper.checked) hasUpper = true;
  if (checkLower.checked) hasLower = true;
  if (checkNumber.checked) hasNum = true;
  if (checkSymbol.checked) hasSym = true;

  if (hasUpper && hasLower && hasNum && hasSym) {
    const output = document.querySelector("#strength");
    output.innerHTML = "Excellent";
  } else if ((hasUpper && hasLower && hasNum) || hasSym) {
    const output = document.querySelector("#strength");
    output.innerHTML = "Good";
  } else if ((hasUpper && hasLower) || hasNum || hasSym) {
    const output = document.querySelector("#strength");
    output.innerHTML = "Average";
  } else if (hasUpper) {
    const output = document.querySelector("#strength");
    output.innerHTML = "Poor";
  }
}

// checkbox counter  //
let generateBtn = document.querySelector("#generateBtn");

let checkBox = document.querySelectorAll("input[type=checkBox]");

let checkCount = 0;
generateBtn.addEventListener("click", () => {
  checkCount = 0;
  checkBox.forEach((element) => {
    if (element.checked) checkCount++;
  });
});

// password generator //
let passwd = " ";
generateBtn.addEventListener("click", () => {
  passwd = "";
  if (checkCount <= 0) {
    return;
  }

  //   if (checkUpper.checked) {
  //     passwd += getRandomUpperCase();
  //   }

  //   if (checkLower.checked) {
  //     passwd += getRandomLowerCase();
  //   }

  //   if (checkNumber.checked) {
  //     passwd += getRandomNumber();
  //   }

  //   if (checkSymbol.checked) {
  //     passwd += getRandomSymbol();
  //   }

  let funArray = [];
  if (checkUpper.checked) {
    funArray.push(getRandomUpperCase());
  }
  if (checkLower.checked) {
    funArray.push(getRandomLowerCase());
  }
  if (checkNumber.checked) {
    funArray.push(getRandomNumber());
  }
  if (checkSymbol.checked) {
    funArray.push(getRandomSymbol());
  }

  // compulsory addition //
  for (let i = 0; i < funArray.length; i++) {
    passwd += funArray[i];
  }
  // remaining addition //
  for (let i = 0; i < length - funArray.length; i++) {
    const rand = getRandom(0, funArray.length);
    passwd += funArray[rand];
  }

  
  passwd = shuffleArray(Array.from(passwd));
  let abc = document.querySelector("#passwd");
  abc.value = passwd;
});
