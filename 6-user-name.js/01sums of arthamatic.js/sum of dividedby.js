const readline = require("readline-sync");

console.log("****divided on way****");

const a = readline.question("value of a =");
const b = readline.question("value of b =");

console.log(`values ${a} is ${typeof a }`);
console.log(`values ${b} is ${typeof b }`);


const sum = a/b;

console.log(`value of${a} divided by  ${b} is ${sum}`);
