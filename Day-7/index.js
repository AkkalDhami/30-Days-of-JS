//? Task:1 (1) Create an object representing a book with a properties : title, author, and year) 
const book = {
  title: "Book-1",
  author: "abc",
  year: 2009,
};
console.log(book);

//? Task:2 (Access and log the title and author  of the book object)
console.log(`Title of the Book: ${book.title}`);
console.log(`Author of the Book: ${book.author}`);

//? Task:3 (Add the method  to the book object that returns a string with the book's title and author)
let result1 = book.author.toString();
let result2 = book["title"].toString();
console.log(result1);
console.log(result2);

//? Task:4 (Add the method to the book object that takes a parameter(year) and update's the book's year)
book.updateYear = function (year) {
  this.year = year;
  console.log(this.year);
};
book.updateYear(2022);

//?   Task:5 (Create a nested  object representing a library with properties like name and books(an array of book objects), and log the library object to the console)
const library = {
  name: "Library1",
  books: [
    { title: "Book-1", author: "abc", year: 2009 },
    { title: "Book-2", author: "xyz", year: 2010 },
    { title: "Book-3", author: "pqr", year: 2011 },
  ],
};
console.log(library);

//?   Task:6 (Access and log the name of the library and titles of all the books in the library)
console.log(`Library namne: ${library.name}`);
library.books.forEach((book, idx) => {
  console.log(`Book title ${idx + 1}: ${book.title}`);
});

//?   Task:7 (Add the method to the book that uses the this keyword to return a string with the book's title and years)
// book.getBookInfo = function () {
//   return `Title: ${this.title} year: ${this.year}`;
// };
// console.log(book.getBookInfo());

//? Task:8 (Use a for..in loop to iterate over the properties of the book  object and log each property name and value)
for (let key in book) {
  console.log(`${key}: ${book[key]}`);
}


//? Task:9 (Use Object.keys and Object.values methods  to log the keys and values of the book object)
console.log(Object.keys(book));
console.log(Object.values(book));
