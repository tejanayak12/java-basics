const readline = require("readline-sync");

console.log("*****Multiplication on way******");

const a = readline.question("value of a =");
const b = readline.question("value of b =");

console.log(`values ${a} is ${typeof a }`);
console.log(`values ${b} is ${typeof b }`);

const sum = a*b;

console.log(`${a} multiply ${b} is ${sum} `);
