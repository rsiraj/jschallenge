// VERY EASY
let num1 = 10;
let num2 = 6;

console.log(`The difference between ${num1} and ${num2} is ${num1-num2}.`);
//////////////////////

// EASY
let name1 = "Jonathan";
let name2 = "John";

console.log(`The name ${name1} is longer than ${name2} by ${(name1.length-name2.length)} characters.`);
//////////////////////

// MEDIUM
function mediumFunction() {
    let userText = prompt("Please type in some words", "YELL or whisper or neiTher");
    if (userText.trim() == "" ) {
        document.getElementById("mediumResult").innerHTML = `You didn't type anything`;
        console.log(`You didnt type anything`);
    }
    else if (userText == userText.toLowerCase()) {
      document.getElementById("mediumResult").innerHTML = `You whispered ${userText}`;
      console.log(`You whispered ${userText}`);
    }
    else if (userText == userText.toUpperCase()) {
        document.getElementById("mediumResult").innerHTML = `You shouted ${userText}`;
        console.log(`You shouted ${userText}`);
    }
    else {
        document.getElementById("mediumResult").innerHTML = `You neither shouted nor whispered ${userText}`;
        console.log(`You neither shouted nor whispered ${userText}`);
    }
  }
//////////////////////

// HARD: Create 4 math functions, one called add() that adds 2 numbers, one called subtract() that subtracts 2 numbers, one called multiply() to multiply 2 numbers, and one called divide() to divide two numbers.
function add(number1, number2) {
    console.log(`You used the add function to add ${number1} and ${number2} and got ${number1 + number2}`);
}
function subtract(number1, number2) {
    console.log(`You used the subtract function to subtract ${number1} by ${number2} and got ${number1 - number2}`);
}
function multiply(number1, number2) {
    console.log(`You used the multiply function to multiply ${number1} and ${number2} and got ${number1 * number2}`);
}
function divide(number1, number2) {
    console.log(`You used the divide function to divide ${number1} by ${number2} and got ${number1 / number2}`);
}

//VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"
function veryhard() {
    let number1 = Number(prompt("Please enter the first number"));
    let mathOperation = prompt("Please enter +, -, *, or /");
    let number2 = Number(prompt("Please enter the second number"));


    if (mathOperation === "+") {
            console.log(`You used the add function to add ${number1} and ${number2} and got ${number1 + number2}`);
    }
    else if (mathOperation === "-") {
            console.log(`You used the subtract function to subtract ${number1} by ${number2} and got ${number1 - number2}`);
    }
    else if (mathOperation === "*") {
            console.log(`You used the multiply function to multiply ${number1} and ${number2} and got ${number1 * number2}`);
    }
    else if (mathOperation === "/") {
            console.log(`You used the divide function to divide ${number1} by ${number2} and got ${number1 / number2}`);
    }
    else {
        console.log(`You didnt use a correct math function`);
    }
}