import chalk from "chalk";
import readline from "readline-sync";
console.log(chalk.bgRed('While Input'));

let currentTable = readline.keyIn("select the table u want = ");
let start = 1;
let end = readline.keyIn('Select the End number = ')

while (start <= end){
    console.log(`${currentTable} x ${start} is ${currentTable * start}`)
    start++
};