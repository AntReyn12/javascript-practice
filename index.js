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

//*BUILD ARRAYS WITH STRINGS*//
//let featuredPosts = [
//"Check out my Netflix clone",
//"Here's code for my project",
//"I've just relaunched my portfolio",
//];
//const mySkills = ["HTML", "CSS", "JS", "React.JS", "BootStrap"];

//*MAKE ARRAY WITH THE 3 PRIMITIVE DATA TYPES *//
//const aboutMe = ["Anthony", 25, true];
//console.log(aboutMe);

//*PUSH AND POP NEW MESSAGE TO AN EXISITING ARRAY *//
//let messages = [
//"Hey, how is it going?",
//"I'm great, thanks! How about you?",
//"All good. Been working on my portfolio lately.",
//];
//let newMessage = "Same here!";
//messages.push(newMessage);
//messages.pop();
//console.log(messages);

//*COUNTING IN JAVASCRIPT*//
//for (let count = 10; count < 21; count += 1) {
//console.log(count);
//}

//*CREATE A FOR LOOP*//
//for (let i = 10; i <= 100; i += 10) {
//console.log(i);
//}

//*FOR LOOPS AND ARRAYS*//
//let cards = [7, 3, 9];
//for (i = 0; i < cards.length; i++) {
//console.log(cards[i]);
//}

//*FOR LOOP AND ARRAYS EXAMPLE*//
//let greetingEl = document.querySelector(".greeting-el");
//let sentence = ["Hello", "my", "name", "is", "Anthony"];
//for (let i = 0; i < sentence.length; i++) {
//greetingEl.textContent += sentence[i] + " ";
//console.log(sentence[i]);
//}

//*RETURNING VALUES IN A FUNCTION*//
//let player1Time = 102;
//let player2Time = 105;
//function getFastestTime() {
//if (player1Time < player2Time) {
//return player1Time;
//} else if (player2Time < player1Time) {
//return player2Time;
//} else {
//return "tie!";
//}
//}
//let fastestRacer = getFastestTime();
//function totalRaceTime() {
//return player1Time + player2Time;
//}
//let raceTimeTotal = totalRaceTime();
//console.log(raceTimeTotal);

//*GENERATING RANDOM NUMBERS FROM 1-6*//
//let randomNumber = Math.random() * 6;
//let flooredNumber = Math.floor(3.85632);
//function rollDice() {
//let randomFlooredNumber = Math.floor(Math.random() * 6) + 1;
//return randomFlooredNumber;
//}
//console.log(rollDice());

//*THE LOGICAL 'AND' OPERATOR*//
//let hasCompletedCourse = true;
//let givesCertificate = true;
//if (hasCompletedCourse === true && givesCertificate === true) {
//generateCertificate();
//}
//function generateCertificate() {
//console.log("Generating certificate....");
//}

//*WRITE YOUR FIRST LOGICAL OPERATOR*//
//let hasSolvedChallenge = false;
//let hasHintsLeft = false;
//if (hasSolvedChallenge === false && hasHintsLeft === false) {
//showSolution();
//}
//function showSolution() {
//console.log("Showing the solution...");
//}

//*THE LOGICAL 'OR' OPERATOR *//
const likesDocumentaries = true;
const likesStartups = true;

if (likesDocumentaries === true || likesStartups === true) {
  recommendMovie();
}

function recommendMovie() {
  console.log("Hey, check out this new film we think you will like!");
}
