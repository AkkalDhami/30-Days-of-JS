//? Task:1 (Use template literals  to create a string that includes variables for a person's name and age)
let name = "Aavash";
let age = 20;
console.log(`My name is ${name} and I am ${age} years old`);

//? Task:2 (Create a multi line string using template literals)
let address = "Kathmandu";
let std = "CS";
console.log(
  `My name is ${name} and I am ${age} years old. I am a student of ${std}. I am from ${address}`
);

//? Task:3 (Use array destructing to extract the first and second elements from an arary of numbers)
let arr = [1, 2, 3, 4, 5, 6];
let [first, second] = arr;
console.log(first, second);

//? Task:4 (Use object destructing to extract the title and author from a book object)
const book = {
  title: "Book-1",
  author: "abc",
  year: 2009,
};
const { title, author } = book;
console.log(title, author);

//? Task:5 (Use spread operator to create a new arary that includes all the elements of an existing araray plus additional elements)
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [...arr1, 7, 8, 9, 10];
console.log(arr2);

//? Task:6 (Use rest operator in a function to accept an arbitary number of arfuments, sum them and return the result)
function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));

//? Task:7 Write a function takes two parameters and returns their product, with the second parameter having default value of 1. log the result of this calling function with and without the second  parameter)
function product(p1, p2 = 1) {
  return p1 * p2;
}
console.log(product(2, 3)); //with second parameter
console.log(product(8)); // without second parameter

//? Task:8 (Use enhanced  object literals to create an object with methods and properties)
const person = {
  name: "Aavash",
  age: 20,
  address: "Kathmandu",
  getDetails: function () {
    return `My name is ${this.name} and I am ${this.age} years old. I am from ${this.address}`;
  },
};
console.log(person.getDetails());

//? Task:9 (Create an object with computed  property names based on variables and log the object to the  console)
let name2 = "Aavash";
let age2 = 20;
let address2 = "Kathmandu";
const obj = {
    'Name':`${name2}`,
    'Age':`${age2}`,
    'Address':`${address2}`
};
console.log(obj);