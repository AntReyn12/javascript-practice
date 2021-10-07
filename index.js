//*CONCATENATE TWO VARIABLES INTO A THIRD VARIABLE*//
//const firstName = "Anthony";
//const lastName = "Reynolds";
//const fullName = firstName + " " + lastName;
//console.log(fullName);

//*CREATE A FUNCTION THAT LOGS OUT A STRING WHEN CALLED*//
//const userName = "Linda";
//const greeting = "Hi there";
//function sayGreeting() {
//console.log(greeting + ", " + userName + "!");
//}
//sayGreeting();

//*INCREMENT AND DECREMENT TO ADD GET TO 10*//
//let myPoints = 3;
//function add3Points() {
//myPoints += 3;
//}
//function remove1Point() {
//myPoints -= 1;
//}
//add3Points();
//add3Points();
//add3Points();
//remove1Point();
//remove1Point();

//*DISPLAY AN ERROR MESSAGE WHEN A BUTTON IS CLICKED*//
//const errorMessage = document.getElementById("error");
//function errorButtonClicked() {
//errorMessage.textContent = "Something went wrong, please try again.";
//}
const num1Span = document.getElementById("num1");
const num2Span = document.getElementById("num2");
const sumSpan = document.getElementById("sum");

let num1 = 12;
let num2 = 6;
let totalNum = 0;
num1Span.textContent = num1;
num2Span.textContent = num2;

function add() {
  totalNum = num1 + num2;
  sumSpan.textContent = "Sum: " + totalNum;
}

function subtract() {
  totalNum = num1 - num2;
  sumSpan.textContent = "Sum: " + totalNum;
}

function divide() {
  totalNum = num1 / num2;
  sumSpan.textContent = "Sum: " + totalNum;
}

function multiply() {
  totalNum = num1 * num2;
  sumSpan.textContent = "Sum: " + totalNum;
}
