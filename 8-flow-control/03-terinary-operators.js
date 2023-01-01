import chalk from 'chalk';
import readline from 'readline-sync';

console.log(chalk.bgRed("welcome to Teja's Cinema's"));

const Availale_Tickets = 250;

const userinput =readline.question(chalk.green("Enter The Tickets Required = "));

var message = '';

var message =userinput <= Availale_Tickets ? chalk.bgGreen('Tickets are booked') : chalk.bgRed('Tickets are not booked');

const condition =userinput <= Availale_Tickets

const truemessage = 'Tickets are booked' ;

const falsemessage = 'Tickets are not booked';

const anothermessage = condition ? truemessage : falsemessage;

console.log(`message value${message}`);
console.log(`Another value${anothermessage}`);

console.log(anothermessage);



