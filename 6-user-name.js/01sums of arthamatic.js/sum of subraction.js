const readline = require("readline-sync");

console.log("*****subraction on way******");

const a = readline.question("value of a =");
const b = Number(readline.question("value of b ="));

console.log(`values ${a} is ${typeof a }`);
console.log(`values ${b} is ${typeof b }`);

const sum = a-b;

console.log(`${a} sburact ${b} is ${sum} `);
