// =============================
// QUESTION 1
// =============================
let num1 = prompt("Q1: Enter a positive number:");
num1 = Number(num1);

document.write("<h2>Question 1</h2>");
document.write("Number: " + num1 + "<br>");
document.write("Round off value: " + Math.round(num1) + "<br>");
document.write("Floor value: " + Math.floor(num1) + "<br>");
document.write("Ceil value: " + Math.ceil(num1) + "<br><br>");

// =============================
// QUESTION 2
// =============================
let num2 = prompt("Q2: Enter a negative floating point number:");
num2 = Number(num2);

document.write("<h2>Question 2</h2>");
document.write("Number: " + num2 + "<br>");
document.write("Round off value: " + Math.round(num2) + "<br>");
document.write("Floor value: " + Math.floor(num2) + "<br>");
document.write("Ceil value: " + Math.ceil(num2) + "<br><br>");

// =============================
// QUESTION 3
// =============================
let num3 = prompt("Q3: Enter any number to find absolute value:");

document.write("<h2>Question 3</h2>");
document.write("Absolute value: " + Math.abs(num3) + "<br><br>");

// =============================
// QUESTION 4
// =============================
let dice = Math.floor(Math.random() * 6) + 1;

document.write("<h2>Question 4</h2>");
document.write("Dice Value: " + dice + "<br><br>");

// =============================
// QUESTION 5
// =============================
let toss = Math.floor(Math.random() * 2) + 1;

document.write("<h2>Question 5</h2>");
if (toss === 1) {
    document.write("Coin Toss Result: Heads<br><br>");
} else {
    document.write("Coin Toss Result: Tails<br><br>");
}

// =============================
// QUESTION 6
// =============================
let randomNum = Math.floor(Math.random() * 100) + 1;

document.write("<h2>Question 6</h2>");
document.write("Random Number (1 to 100): " + randomNum + "<br><br>");

// =============================
// QUESTION 7
// =============================
let weight = prompt("Q7: Enter your weight:");
let parsedWeight = parseFloat(weight);

document.write("<h2>Question 7</h2>");
document.write("Your weight is: " + parsedWeight + " kgs<br><br>");

// =============================
// QUESTION 8
// =============================
let secretNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = prompt("Q8: Guess the secret number (1 to 10):");

document.write("<h2>Question 8</h2>");
if (Number(userGuess) === secretNumber) {
    document.write("🎉 Congratulations! You guessed the correct number.");
} else {
    document.write("❌ Sorry! The secret number was: " + secretNumber);
}
