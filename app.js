
// =====================================
// Q1. Divisible by 3
// =====================================

var number = Number(prompt("Enter a number"));

if (number % 3 === 0) {
    console.log("Number is divisible by 3");
}
else {
    console.log("Number is not divisible by 3");
}


// =====================================
// Q2. Even or Odd Number
// =====================================

var num = Number(prompt("Enter a number"));

if (num % 2 === 0) {
    console.log("The number is Even");
}
else {
    console.log("The number is Odd");
}


// =====================================
// Q3. Age Check
// =====================================

var age = Number(prompt("Enter your age"));

if (age > 18) {
    console.log("Old enough");
}
else {
    console.log("Too young");
}


// =====================================
// Q4. Special Greeting
// =====================================

var firstName = prompt("Enter your name");

if (firstName === "Your Name") {
    console.log("Hello! Welcome " + firstName);
}


// =====================================
// Q5. Divisible by 3 Using Switch
// =====================================

var number2 = Number(prompt("Enter a number"));

switch (number2 % 3) {
    case 0:
        console.log("Number is divisible by 3");
        break;

    default:
        console.log("Number is not divisible by 3");
}


// =====================================
// Q6. Check Number, Uppercase or Lowercase
// =====================================

var character = prompt("Enter a character");

var ascii = character.charCodeAt(0);

if (character.length !== 1) {
    console.log("Please enter only one character");
}
else if (ascii >= 48 && ascii <= 57) {
    console.log("The given input is a number");
}
else if (ascii >= 65 && ascii <= 90) {
    console.log("The given input is an Uppercase letter");
}
else if (ascii >= 97 && ascii <= 122) {
    console.log("The given input is a Lowercase letter");
}
else {
    console.log("The given input is a special character");
}


// =====================================
// Q7. Calculator Using Switch Case
// =====================================

var number1 = Number(prompt("Enter first number"));
var number3 = Number(prompt("Enter second number"));

var operator = prompt("Enter operator (+, -, *, /, %)");

switch (operator) {
    case "+":
        console.log("Result: " + (number1 + number3));
        break;

    case "-":
        console.log("Result: " + (number1 - number3));
        break;

    case "*":
        console.log("Result: " + (number1 * number3));
        break;

    case "/":
        if (number3 !== 0) {
            console.log("Result: " + (number1 / number3));
        }
        else {
            console.log("Cannot divide by zero");
        }
        break;

    case "%":
        if (number3 !== 0) {
            console.log("Result: " + (number1 % number3));
        }
        else {
            console.log("Cannot divide by zero");
        }
        break;

    default:
        console.log("Invalid operator");
}


// =====================================
// Q8. Time Greeting (24 Hours Format)
// =====================================

var time = Number(prompt("Enter time in 24-hour format (e.g. 1900)"));

if (time >= 0 && time < 1200) {
    console.log("Good Morning");
}
else if (time >= 1200 && time < 1700) {
    console.log("Good Afternoon");
}
else if (time >= 1700 && time < 2100) {
    console.log("Good Evening");
}
else if (time >= 2100 && time <= 2359) {
    console.log("Good Night");
}
else {
    console.log("Invalid time");
}


// =====================================
// Q9. Leap Year
// =====================================

var year = Number(prompt("Enter a year"));

if ((year % 4 === 0 && year % 100 !== 0) ||
    (year % 400 === 0)) {

    console.log(year + " is a Leap Year");
}
else {
    console.log(year + " is not a Leap Year");
}


// =====================================
// Q10. Password Validation
// =====================================

var correctPassword = "12345";

var userPassword = prompt("Enter your password");

if (userPassword === null || userPassword === "") {
    console.log("Please enter your password");
}
else if (userPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password");
}
else {
    console.log("Incorrect password");
}


// =====================================
// Q11. Add Else Statement
// =====================================

var firstName2 = "Ali";

if (firstName2 === "Fahad") {
    console.log("Hello Fahad!");
}
else {
    console.log("You are not Fahad");
}


// =====================================
// Q12. Fix If/Else Statement
// =====================================

var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}

console.log(greeting);


// =====================================
// Q13. Find Larger Integer
// =====================================

var integer1 = Number(prompt("Enter first integer"));
var integer2 = Number(prompt("Enter second integer"));

if (integer1 > integer2) {
    console.log("Larger number is: " + integer1);
}
else if (integer2 > integer1) {
    console.log("Larger number is: " + integer2);
}
else {
    console.log("Both integers are equal");
}


// =====================================
// Q14. Positive, Negative or Zero
// =====================================

var checkNumber = Number(prompt("Enter a number"));

if (checkNumber > 0) {
    console.log("The number is Positive");
}
else if (checkNumber < 0) {
    console.log("The number is Negative");
}
else {
    console.log("The number is Zero");
}


// =====================================
// Q15. Meal Time
// =====================================

var currentHour = Number(prompt("Enter current hour (0-23)"));

if (currentHour >= 6 && currentHour <= 9) {
    console.log("Breakfast is served.");
}
else if (currentHour >= 11 && currentHour <= 13) {
    console.log("Time for lunch.");
}
else if (currentHour >= 17 && currentHour <= 20) {
    console.log("It's dinner time.");
}
else {
    console.log("Sorry, you'll have to wait, or go get a snack.");
}


// =====================================
// Q16. Check Variable Data Type
// =====================================

var value1 = 100;

console.log("Value: " + value1);
console.log("Type: " + typeof value1);

var value2 = "Hello";

console.log("Value: " + value2);
console.log("Type: " + typeof value2);

var value3 = true;

console.log("Value: " + value3);
console.log("Type: " + typeof value3);

var value4;

console.log("Value: " + value4);
console.log("Type: " + typeof value4);


// =====================================
// Q17. Check Vowel
// =====================================

var alphabet = prompt("Enter a character");

if (alphabet.length === 1) {

    alphabet = alphabet.toLowerCase();

    if (alphabet === "a" || alphabet === "e" ||
        alphabet === "i" || alphabet === "o" ||
        alphabet === "u") {

        console.log(true);
    }
    else {
        console.log(false);
    }

}
else {
    console.log(false);
}


// =====================================
// Q18. Not Equal Operator
// =====================================

var answer = 10 !== 8;

console.log(answer);


// =====================================
// Q19. Month Name Using Switch
// =====================================

var month = Number(prompt("Enter month number (1-12)"));

switch (month) {
    case 1:
        console.log("January");
        break;

    case 2:
        console.log("February");
        break;

    case 3:
        console.log("March");
        break;

    case 4:
        console.log("April");
        break;

    case 5:
        console.log("May");
        break;

    case 6:
        console.log("June");
        break;

    case 7:
        console.log("July");
        break;

    case 8:
        console.log("August");
        break;

    case 9:
        console.log("September");
        break;

    case 10:
        console.log("October");
        break;

    case 11:
        console.log("November");
        break;

    case 12:
        console.log("December");
        break;

    default:
        console.log("Invalid month number");
}


// =====================================
// Q20. Conditional (Ternary) Operator
// =====================================

var age2 = Number(prompt("Enter your age"));

var voteable = (age2 < 18) ? "Too young" : "Old enough";

console.log(voteable);
