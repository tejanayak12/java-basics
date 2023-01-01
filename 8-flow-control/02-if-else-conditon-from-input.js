import readline from 'readline-sync';
import chalk from 'chalk';

console.log(chalk.bgRed("Welcome To 'Teja Cinema's'"));

const Number_of_tickets_Available = 250;

const Tickets_required =readline.question(chalk.yellow("Please Enter The Tickets Required = "));


if(Tickets_required <=Number_of_tickets_Available  ){
    console.log(chalk.bgGreen("Congrats Your 'Tickets Conformed'"))
}else {
    console.log(chalk.bgRed("Sorry Your 'Tickets Are Unavailable'"))
};

console.log(Tickets_required<= Number_of_tickets_Available);



/*import readline from 'readline-sync';
import chalk from 'chalk';

const AVAILABLE_TICKETS = 10;
const userRequiredTickets = readline.question('How many tickets are required? '); // 18

if(userRequiredTickets <= AVAILABLE_TICKETS) {
  console.log( chalk.bgGreen(`Tickets are confirmed`) )
} else {
  console.log( chalk.bgRed(`Tickets are not available...`) )
}*/