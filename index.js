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

//*CALCULATOR*//
//const num1Span = document.getElementById("num1");
//const num2Span = document.getElementById("num2");
//const sumSpan = document.getElementById("sum");
//let num1 = 12;
//let num2 = 6;
//let totalNum = 0;
//num1Span.textContent = num1;
//num2Span.textContent = num2;
//function add() {
//totalNum = num1 + num2;
//sumSpan.textContent = "Sum: " + totalNum;
//}
//function subtract() {
//totalNum = num1 - num2;
//sumSpan.textContent = "Sum: " + totalNum;
//}
//function divide() {
//totalNum = num1 / num2;
//sumSpan.textContent = "Sum: " + totalNum;
//}

//function multiply() {
//totalNum = num1 * num2;
//sumSpan.textContent = "Sum: " + totalNum;
//}

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
//const likesDocumentaries = true;
//const likesStartups = true;
//if (likesDocumentaries === true || likesStartups === true) {
//recommendMovie();
//}
//function recommendMovie() {
//console.log("Hey, check out this new film we think you will like!");
//}

//*OBJECTS*//
//let course = {
//title: "Learn CSS Grid for free",
//lessons: 16,
//creator: "Anthony",
//length: 63,
//level: 2,
//isFree: true,
//tags: ["html", "css"],
//};
//console.log(course.tags[0]);

//*OBJECTS AND FUNCTIONS*//
//const person = {
//firstName: "Anthony",
//age: 25,
//country: "USA",
//};
//const {firstName, age, country} = person;
//function logData() {
//console.log(`${firstName} is ${age} years old and lives in ${country}.`);
//console.log(
//firstName + " is " + age + " years old and lives in " + country + "."
//);
//}
//logData();

//*IF ELSE*//
//let age = 66;
//if (age < 6) {
//console.log("free");
//} else if (age < 18) {
//console.log("child discount");
//} else if (age < 27) {
//console.log("student discount");
//} else if (age < 67) {
//console.log("full price");
//} else {
//console.log("senior citizen discount");
//}

//*LOOPS AND ARRAYS*//
//let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];
//console.log("The 5 largest countries in the world: ");
//for (let i = 0; i < largeCountries.length; i++) {
//console.log("- " + largeCountries[i]);
//}

//*PUSH, POP, UNSHIFT, SHIFT CHALLENGE*//
//let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];
//console.log(largeCountries);
//largeCountries.pop();
//largeCountries.push("Pakistan");
//console.log(largeCountries);
//largeCountries.shift();
//largeCountries.unshift("China");
//console.log(largeCountries);

//*LOGICAL 'AND' OPERATOR*//
//let dayOfMonth = 13;
//let weekday = "Friday";
//if (dayOfMonth === 13 && weekday === "Friday") {
//console.log("😱");
//}

//*ROCK, PAPER, SCISSORS*//
//let hands = ["rock", "paper", "scissor"];
//function returnRandomItem() {
//let randomReturn = Math.floor(Math.random() * hands.length);
//return hands[randomReturn];
//}
//console.log(returnRandomItem());

//*WRITE YOUR FIRST EVENT LISTENER*//
//const boxEl = document.querySelector("#box");
//boxEl.addEventListener("click", function () {
//console.log("I want to open the box!");
//});

//*USING .INNERTHML*//
//const boxEl = document.querySelector("#box");
//boxEl.innerHTML = "<button onclick='buy()'> Buy! </button> ";
//function buy() {
//boxEl.innerHTML += "<p>Thank you for buying!</p>";
//}

//*WRITE YOUR FIRST FUNCTION PARAMETER*//
//const welcomeEl = document.querySelector("#welcome-el");
//function greetUser(greeting) {
//welcomeEl.textContent = `${greeting}, Anthony!`;
//}
//greetUser("Welcome back");

//*WRITE FUNCTION WITH MULTIPLE PARAMETERS*//
//const welcomeEl = document.querySelector("#welcome-el");
//function greetUser(greeting, firstName, emoji) {
//welcomeEl.textContent = `${greeting}, ${firstName}! ${emoji}`;
//}
//greetUser("Welcome back", "Anthony", "😄");

//*USE NUMBERS AS PARAMETERS IN FUNCTIONS*//
//function add(num1, num2) {
//return num1 + num2;
//}
//console.log(add(3, 4));
//console.log(add(9, 201));

//*ARRAYS AS PARAMETERS*//
const array = ["first", "second", "third"];

function getFirst(arr) {
  return arr[0];
}

console.log(getFirst(array));
