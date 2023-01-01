import readline from "readline-sync";
import chalk from "chalk";
console.log(chalk.bgRed("Welcome To 'Teja Cinemas'"));

const Number_ofTickets_Available = 100;

console.log(chalk.bgGreen`Number of tickets Available in This Show = ${Number_ofTickets_Available}`);

const numberof_Tickets_required = 15;

const canbytickets = numberof_Tickets_required <= Number_ofTickets_Available;

let message ='';

if (canbytickets){
   message = "Congrats 'your tickets are confromed'"
}else{
    message = "sorry dude 'your tickets are cancelled due to unvailable tickets'"
};
console.log(message);

/* Ticket Bookings
import readline from 'readline-sync';
// const readline = require('readline-sync');

const CURRENT_AVAILABLE_TICKETS = 10;
console.log(`Current available tickets are = ${CURRENT_AVAILABLE_TICKETS}`);

const numberTicketsRequired = 15;

                  //           15           <=             10
const canBuyTickets = numberTicketsRequired <= CURRENT_AVAILABLE_TICKETS;

// 1. canBuyTickets -> true   -> You're tickets are confirmed
// 2. canBuyTickets -> false  -> tickets are not available

let message = '';

if( canBuyTickets ) {
  message = `You're tickets are confirmed`
} else {
  message = `Tickets are not available`
}

console.log(message)*/