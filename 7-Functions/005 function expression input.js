import readline from "readline-sync"
import chalk from "chalk"

function meals(mealamount,tip,tax=2){
    console.log(mealamount+tax+tip)
    return(meals)
}

console.log(chalk.bgRed("welcome to Teja Hotel"));
console.log("Billing of Hotel policy");

const mealamount = +readline.question("enter the cost of an meal =");
const tax = +readline.question("urs experience tip amount =");
const tip =+readline.question("enter Gst tax = ");

console.log(chalk.bgRed(mealamount)+chalk.bgBlackBright(tip)+chalk.bgCyanBright(tax));

const totalbill = console.log(chalk.bgGreen(mealamount+tip+tax));
/**
 * // Expression function is a value or expression by assigning an anonymous function to a variable or parameter.

import readline from 'readline-sync';
import chalk from 'chalk';
                                           
const calculateBill = function(mealAmount, taxRate, tip) {
  const total = Number(mealAmount) + Number(taxRate) + Number(tip);
  return total;
}

const customerMealAmount = readline.question("Please enter meal amount: ");
const taxRate = readline.question("What is the Tax Rate?: ");
const tipValue = readline.question("Any tip amount ?: ");

const totalBill = calculateBill(customerMealAmount, taxRate, tipValue);

console.log( chalk.bgRed("Total Bill Amount:") + chalk.bgGreen(totalBill) );

 */