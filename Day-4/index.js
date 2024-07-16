//? Task:1 (To print the numbers from 1 to 10 using for loop )
for (let i = 1; i <= 10; i++) {
  // console.log(i);
}

//? Task:2 (To print the multiplication of 5 using for loop )
for (let i = 1; i <= 10; i++) {
  let multi = 5 * i;
  console.log("5 * ", i, "= ", multi);
}

//? Task:3 (To calculate the  sum of numbers from 1 to 10 using while loop)
let sum = 0;
let i = 0;
while (i <= 10) {
  sum += i;
  i++;
}
console.log("Sum of numbers from 1 to 10 is ", sum);

//? Task:4 (To print the numbers from 10 to 1 using while loop)
let i2 = 10;
while (i2 >= 1) {
  // console.log(i2);
  i2--;
}

//? Task:5 (To print the numbers from 1 to 5 do while for loop )
let i3 = 1;
do {
  // console.log(i3);
  i3++;
} while (i3 <= 5);

//? Task:6 (To calculate the factorial fof no. using do while for loop )
let fact = 1;
let i4 = 1;
let n = 3;
do {
  fact *= i4;
  i4++;
} while (i4 <= n);
console.log("Factorial of 5 is ", fact);

//? Task:7 (To print a pattern using nested for loop0
// * 
// **
// ***
// ****
// *****
for (let i = 1; i <= 5; i++) {
    let pattern = ''
    for (let j = 1; j <= i; j++) {
     pattern += '*'
    }
    console.log(pattern)
}

//? Task:8 (To  print the numbers from 1 to 10, but skip no. 5 using continue statement)
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

//? Task:9 (To  print the numbers from 1 to 10, but stop  at 7 using the break statement)
for (let i = 1; i <= 10; i++) {
  if (i == 7) {
    break;
  }
  console.log(i);
}
