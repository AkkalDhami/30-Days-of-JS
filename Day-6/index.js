//? Task:1 (create an array from 1 to 5)
let arr = [1, 2, 3, 4, 5];
console.log(arr);

//? Task:2 (Access the first and last element of the array)
let arr2 = [12, 22, 13, 4, 50, 7];
let firstElem = arr2[0];
let lastElem = arr2[arr2.length - 1];
console.log(
  `First Element of array: ${firstElem} and Last Element of Array: ${lastElem}`
);

//? Task:3 (Use the push method to add a new element to the end of the array)
let arr3 = ["chai", "or", "code"];
arr3.push("hitesh");
console.log(arr3);

//? Task:4 (Use the pop method to remove last element from the array
let arr4 = ["chai", "or", "code"];
arr4.pop();
console.log(arr4);

//? Task:5 (Use the shift method to remove first element from the array)
let arr5 = ["chai", "or", "code"];
arr5.shift();
console.log(arr5);

//? Task:6 (Use the unshift method to add a new  element to the beginning of the array)
let arr6 = ["chai", "or", "code"];
arr6.unshift("hitesh");
console.log(arr6);

//? Task:7 (Use map method to create a new array which number is doubled)
let map = [2, 3, 4, 5];
let newArr = map.map((a) => {
  return a * 2;
});
console.log(newArr);

//? Task:8 (Use filter method to create a new array with only even number)
let filterArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 26];
let newArr2 = filterArray.filter((a) => {
  return a % 2 == 0;
});
console.log(newArr2);

//? Task:9 (Use reduce method to the sum of all numbers in the array)
let arr9 = [1, 2, 3, 4, 5, 6, 7];
let newArr3 = arr9.reduce((a, b) => {
  return a + b;
}, 0);
console.log(newArr3);

//? Task:10 (Use for loop to iterate the over the array)
let arr10 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr10.length; i++) {
  console.log(arr10[i]);
}

//? Task:11 (Use foreach loop method to iterate the over the array)
let lang = ["JavaScript", "Python", "Ruby", "Go"];
let newLang = lang.forEach((a) => {
  console.log(a);
});

//? Task:12 (Create an two-dimensional array(matrix) and log the entire array)
let matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14],
  [16, 17, 18, 19],
];
console.log(matrix);

//? Task:12 (Access and log a specific element from two-dimensional array)
let matrix2 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14],
  [16, 17, 18, 19],
];
console.log(matrix2[0][1]);
console.log(matrix2[0][2]);
console.log(matrix2[0][3]);
