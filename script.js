let operation = "";
let shouldResetScreen = false;
let previousvalue = "";
let currentvalue = "";

const lastdiplayvalue = document.getElementById("last-value");
const currentdisplayvalue = document.getElementById("current-value");

const allclear = document.getElementById("all-clear");
const delbutton = document.getElementById("delete");
const equals = document.getElementById("equals");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operator");
const pointbutton = document.getElementById("point");




document.addEventListener("DOMContentLoaded", () => {
  clear();
});



delbutton.addEventListener("click", deletenumber);
allclear.addEventListener("click", clear);
pointbutton.addEventListener("click", appendpoint);
equals.addEventListener("click", () => {
  if (currentdisplayvalue.innerHTML != "" && lastdiplayvalue.innerHTML != "") {
    previousvalue = parseFloat(lastdiplayvalue.innerHTML);
    currentvalue = parseFloat(currentdisplayvalue.innerHTML);
    operate(operation, previousvalue, currentvalue);
  }
});


numbers.forEach((btn) => {
  btn.addEventListener("click", function () {
    inputNumber(this.id);
    console.log(this.id);
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    setoperation(operator.innerText);
  });
});


// *******
function deletenumber(){
  currentdisplayvalue.innerHTML = currentdisplayvalue.innerHTML.slice(0, -1);
}

function clear() {
  currentdisplayvalue.innerHTML = "";
  lastdiplayvalue.innerHTML = "";
  operation = "";
}



// ****
function add(x, y) {
  return (result = x + y);
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}




function operate(op, x, y) {
  if (op === "+") {
    currentdisplayvalue.innerHTML = add(x, y);
    lastdiplayvalue.innerHTML ="";
  }
  if (op === "-") {
    currentdisplayvalue.innerHTML = subtract(x, y);
    lastdiplayvalue.innerHTML ="";
  }
  if (op === "x") {
    currentdisplayvalue.innerHTML = multiply(x, y);
    lastdiplayvalue.innerHTML ="";
  }
  if (op === "÷") {
    if (currentdisplayvalue.innerText == 0) {
      alert("error");
      currentdisplayvalue.innerHTML = "Error";
      astdiplayvalue.innerHTML ="";
    }
    currentdisplayvalue.innerHTML = divide(x, y);
    lastdiplayvalue.innerHTML ="";
  } else {
    console.log("invalid operator");
    console.log(op, x, y);
    return -1;
  }
}

// **************

function inputNumber(number) {
  if (currentdisplayvalue.innerHTML === "0" || shouldResetScreen) resetScreen();
  currentdisplayvalue.innerHTML += number;
}
function resetScreen() {
  currentdisplayvalue.textContent = "";
  shouldResetScreen = false;
}

function appendpoint() {
  if (shouldResetScreen) resetScreen();
  if (currentdisplayvalue.textContent === "")
    currentdisplayvalue.textContent = "0";
  if (currentdisplayvalue.textContent.includes(".")) return;
  currentdisplayvalue.textContent += ".";
}

// **********
function setoperation(operator) {
  if (currentdisplayvalue.innerHTML != "" && lastdiplayvalue.innerHTML === "") {
    if (operator === "x") {
      lastdiplayvalue.innerHTML =
        currentdisplayvalue.innerHTML.toString() + " x";
      currentdisplayvalue.innerHTML = "";
      operation = operator;
      console.log(operation);
    }
    if (operator === "+") {
      lastdiplayvalue.innerHTML =
        currentdisplayvalue.innerHTML.toString() + " +";
      currentdisplayvalue.innerHTML = "";
      operation = operator;
      console.log(operation);
    }
    if (operator === "÷") {
      lastdiplayvalue.innerHTML =
        currentdisplayvalue.innerHTML.toString() + " ÷";
      currentdisplayvalue.innerHTML = "";
      operation = operator;
      console.log(operation);
    }
    if (operator === "-") {
      lastdiplayvalue.innerHTML =
        currentdisplayvalue.innerHTML.toString() + " -";
      currentdisplayvalue.innerHTML = "";
      operation = operator;
      console.log(operation);
    }
  }
}

