const readline = require("readline-sync");

console.log("*****addition****");

const a =+readline.question("enter value of a =");
const b =Number(readline.question("enter value of b ="));

console.log(`value of ${a} is ${typeof a }`);
console.log(`value of ${b} is ${typeof b}`);

const sum = a+b;

console.log(`${a} plus ${b}is ${sum}`);

