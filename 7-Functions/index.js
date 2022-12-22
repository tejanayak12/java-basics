import chalk from "chalk";


console.log("Welcome to my page");


function myFriends() {
    console.log("Likith");
    console.log("ramesh");
    console.log("suresh")


}

myFriends();


function addition (firstValue , secondValue) {
    console.log("Addition of the two numbers");
    console.log( chalk.bgMagenta(firstValue) );
    console.log(chalk. bgCyan(secondValue));

    const output = firstValue +  secondValue ;
    console.log(chalk.white(output));
}


addition ( 50 , 36);


function substraction (firstValue , secondValue) {
    console.log("Substraction of the two numbers");
    console.log( chalk.bgMagenta(firstValue) );
    console.log(chalk. bgCyan(secondValue));

    const output = firstValue -  secondValue ;
    console.log(chalk.white(output));
}


substraction ( 76 , 344);

function multiplication (firstValue , secondValue) {
    console.log("Multiplication of the two numbers");
    console.log( chalk.bgMagenta(firstValue) );
    console.log(chalk. bgCyan(secondValue));

    const output = firstValue *  secondValue ;
    console.log(chalk.white(output));
}


multiplication ( 55 , 789);

function division (firstValue , secondValue) {
    console.log("Division of the two numbers");
    console.log( chalk.bgMagenta(firstValue) );
    console.log(chalk. bgCyan(secondValue));

    const output = firstValue / secondValue ;
    console.log(chalk.white(output));
}


division ( 51 , 7);


function modular (firstValue , secondValue) {
    console.log("Modular of the two numbers");
    console.log( chalk.bgMagenta(firstValue) );
    console.log(chalk. bgCyan(secondValue));

    const output = firstValue % secondValue ;
    console.log(chalk.white(output));
}


modular ( 65 , 89);