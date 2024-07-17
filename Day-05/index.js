//? Task:1 (Write a function to check  if a number is even  or odd)
function isEvenOrOdd(num) {
  if (num % 2 == 0) {
    console.log("The number is even");
  } else {
    console.log("The number is odd");
  }
}
isEvenOrOdd(52);

//? Task:2 (Write a function to calculate as square of a number)
function square(num) {
  return num * num;
}
console.log(square(6));

//? Task:3 (Write a function expression to find the maximum the  number)
function max(a, b) {
  return a > b ? a : b;
}
console.log(max(5, 6));

//? Task:4 (Write a function expression to concatenate two strings and return  result)
function concat(str1, str2) {
  return str1 + str2;
}
console.log(concat("Hello ", "World"));

//? Task:5 (Write an arrow function  to calculate  the sum of two numbers)
const sum = (a, b) => {
  return a + b;
};
console.log(sum(5, 6));

//? Task:6 (Write an arrow function  to check if a string contains a specific character and return a boolean value)
const check = (str, char) => {
  let result = str.includes(char);
  return result;
};
console.log(check("hello Chai", "he"));
console.log(check("hello Code", "z"));

//? Task:7 (Write an  function  that takes a two parameters and returns their product. Provide a default value for the second parameter.)
function product(a, b = 1) {
  return a * b;
}
console.log(product(4, 2));

//? Task:8 (Write an  function  that takes a person's name and age and returns a greeting message. Provide a default value for the age)
function greeting(name, age) {
  return `Hello ${name}, you are ${age} years old.`;
}
console.log(greeting("Akkal", 50));

//? Task:9 (Write a higher order function that takes a function and a number, and calls the function that many times)
function higherOrderFunction(func, num) {
  for (let i = 0; i < num; i++) {
    func();
  }
}
higherOrderFunction(() => console.log("Hello"), 9);

//? Task:10 (Write a higher order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the  result)
let functions = (func1, func2, value) => func2(func1(value));

let add = (x) => x + 2;
let multiply = (x) => x * 2;

let result = functions(add, multiply, 10);
console.log(result); // (10 + 2) * 2 = 24
