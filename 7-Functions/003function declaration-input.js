//const readline = require("readline-sync");
import readline from 'Readline-sync';


const firstValue = +readline.question('enter the  value of a =');
const secoundValue = Number(readline.question('enter the  value of b ='));

function mathop(Valueone,Valuetwo){
    console.log(`the value of a =${Valueone}`);
    console.log(`the values of b = ${Valuetwo}`);

    const addition = Valueone+Valuetwo;
    const substraction = Valueone-Valuetwo;
    const multiplication = Valueone*Valuetwo;
    const division = Valueone/Valuetwo;
    const modular = Valueone%Valuetwo;

        console.log(addition);
        console.log(substraction);
        console.log(multiplication);
        console.log(division);
        console.log(modular);

        console.log(`addicton ${Valueone} and ${Valuetwo} is additiction`);
        console.log(`subraction ${Valueone} and ${Valuetwo} is subraction`);
        console.log(` multiplication ${Valueone} and ${Valuetwo} is  multiplication`);
        console.log(`division ${Valueone} and ${Valuetwo} is  division`);
        console.log(`modular ${Valueone} and ${Valuetwo} is modular`);


        

};
mathop(firstValue,secoundValue);

/**zakeer code = 
// const readline = require('readline-sync');
//*import readline from 'readline-sync';

const firstValue = +readline.question(`Please enter the value of a = `); // string -> number
const secondValue = Number(readline.question(`Please enter the value of b = `)); // string -> number

// declaring a function
function maths(valueOne, valueTwo) {
  console.log(`Value of a is ${valueOne}`);
  console.log(`Value of b is ${valueTwo}`);

  const addition = valueOne + valueTwo;
  const subtraction = valueOne - valueTwo;
  const multiply = valueOne * valueTwo;
  const division = valueOne / valueTwo;
  const modulo = valueOne % valueTwo;

  console.log(`Addition of ${valueOne} and ${valueTwo} is ${addition}`);
  console.log(`Subtraction of ${valueOne} and ${valueTwo} is ${subtraction}`);
  console.log(`Multiply of ${valueOne} and ${valueTwo} is ${multiply}`);
  console.log(`Division of ${valueOne} and ${valueTwo} is ${division}`);
  console.log(`Modulo of ${valueOne} and ${valueTwo} is ${modulo}`);
}

maths(firstValue, secondValue);
*/