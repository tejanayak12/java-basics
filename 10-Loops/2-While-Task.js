import chalk from "chalk";
import { start } from "repl";

console.log(chalk.bgRed("While Multiplication Table "));
let currentTable = 2
let currentNumber = 1;
let EndingNumber = 20;

while (currentNumber <= EndingNumber){
    console.log(`${currentTable} x ${currentNumber} is ${currentTable * currentNumber}`);
    currentNumber = currentNumber+1
};