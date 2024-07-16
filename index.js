//? Task: 1
let num = -5;
if (num > 0) {
  console.log("Positive number");
} else if (num < 0) {
  console.log("Negative number");
} else {
  console.log("Zero");
}

//? Task: 2
let age = 1;
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}

//? Task: 3
let n1 = 2;
let n2 = 32;
let n3 = 4;
if (n1 > n2 && n1 > n3) {
  console.log(n1 + " is the largest number");
} else if (n2 > n1 && n2 > n3) {
  console.log(n2 + " is the largest number");
} else {
  console.log(n3 + " is the largest number");
}

//? Task: 4
let days = 7;
switch (days) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
    break;
}

//? Task: 5
let score = 100;
switch (score) {
  case 100:
    console.log("A");
    break;
  case 90:
    console.log("B");
    break;
  case 80:
    console.log("C");
    break;
  case 700:
    console.log("D");
    break;
  case 600:
    console.log("E");
    break;
  case 40:
    console.log("f");
    break;

  default:
    console.log("Invalid score");
    break;
}

//? Task: 6
let number = 89;
number % 2 == 0 ? console.log("Even") : console.log("Odd");

//? Task: 7
let year = 2012;
if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
  console.log("Leap year");
} else {
  console.log("Not a leap year");
}
