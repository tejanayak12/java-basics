import chalk, { modifierNames } from "chalk";

console.log(chalk.bgGreen("welcome to my world"));

function mydata(username) {
    console.log(chalk.bgRed`hello${username}`);
    return (username);
};

mydata("teja");

// functions of zakeer = 
// 1. Function declaration
// here `a` and `b` are parameters of add function
function add(a, b) {
    return a + b;
};
console.log(`adiition of a+b is ${5+10}`);



// 2. Function expression
const subtraction = function (a, b) {
    return a - b;
};
subtraction(5-8);

// 3.multiply
const multiply =(a,b)=> {
    return (a*b) ;
}; 
console.log(`values of a,b is ${8*5}`);
multiply(5+8);


const addition =add(55,100);
console.log(chalk.bgRed`addiction value is${addition}`);
add();

// Parameters (Variables defined in function)
// Arguments (Are actual values pass to function)

const minus = subtraction(100, 56);
console.log(`Minus of 100 and 56 is ${minus}`);
subtraction();

const twoMultiply = multiply(2, 99);
console.log(`Mutliple of 2 and 99 is ${twoMultiply}`);
multiply();

// What happend if we dont pass arguments
const addOne = add();
console.log(`Calling add function without arguments = ${addOne}`)

