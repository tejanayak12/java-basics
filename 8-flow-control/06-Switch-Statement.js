/*import chalk from 'chalk';
import readline from 'readline-sync';

const Traffic_Lights =[
    'REd',
    'Green',
    'Yellow'
];

const user_lights = readline.keyInSelect(Traffic_Lights);
const userselectedlight = Traffic_Lights[user_lights];
console.log(`user Selected light was = ${user_lights}`);

const Red = 0;
const GREEN = 1;
const Yellow = 2;

switch(user_lights){
    case Red : console.log(chalk.bgRed('Stop.....'));
    break;

    case GREEN :console.log(chalk.bgGreen('Go.....'));
    break;

    case Yellow : console.log(chalk.bgYellow('Move Slow....'));

    default:console.log('unknow light');
};*/

import chalk from 'chalk';
import readline from 'readline-sync';

console.log(chalk.red('Welcome to pizza World'));

const Main_Menu = [
    'Chicken Pizza',
    'fry pizza',
    'boiled pizza',
    'Normal Pizza',
    'cashew pizza'
];

const chickenpizza = 0;
const frypizza = 1;
const boiledpizza =2;
const Normalpizza = 3;
const cashewpizza =4;


const user_item =readline.keyInSelect(Main_Menu);
const selecteduser = Main_Menu[user_item];
console.log(`selected values of customer = ${user_item}`);

switch (user_item){
    case chickenpizza :console.log(chalk.green('Thank you sir for conforming'));
    break;

    case frypizza : console.log(chalk.red('Thank you sir for conformation'));
    break;

    case boiledpizza : console.log(chalk.bgBlue(`thank you for conforimg sir`));
    break;

    case Normalpizza : console.log(chalk.bgCyan(`thank you sir for conformation`));
    break;

    case cashewpizza : console.log(chalk.bgGreen(`thank you sir for conformation`));
    break;

    default  : console.log(chalk.bgred(`sorry sir we want order it `))

};






