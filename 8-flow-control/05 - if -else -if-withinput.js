import chalk from 'chalk';
import readline from 'readline-sync';

console.log(chalk.bgRed("Welcome to Teja's Restarant"));
const Chicken_Fry_Combo = 0;
const Pizza = 1;
const biryani =2;
const cold_drinks = 3;
const Veg_Meals =4;
const Main_menu_options = ['Chicken_Fry_Combo','Pizza','biryani','cold_drinks','Veg_Meals'];

const Select_items = +readline.question(chalk.greenBright(`Please select the item u need = ?
    [0].Chicken_Fry_Combo
    [1].pizza
    [2].biryani
    [3].cold_drinks
    [4].Veg_Meals
`));

//const Select_items =+readline.keyInSelect(`${Main_menu_options}`);
console.log(`Input value = ${Select_items} = ${Main_menu_options[Select_items]}`);

if (Select_items === Chicken_Fry_Combo){
    console.log(chalk.greenBright("Thanks For Conforming 'Sir' Please Wait at Table '1' We will Provide To u In '2 Mins'"))
}else if(Select_items === Pizza){
    console.log(chalk.blue("Thanks For Conforming 'Sir' Please Wait at Table '5' We will Provide To u In '15 Mins'"))
}else if(Select_items === biryani){
    console.log(chalk.bgCyan("Thanks For Conforming 'Sir' Please Wait at Table '6' We will Provide To u "))
}else if (Select_items === cold_drinks){
    console.log(chalk.bgGreen("Thanks For Conforming 'Sir' Please Wait at Table '4' We will Provide To u In '2 Mins'"))
}else if (Select_items === Veg_Meals){
    console.log(chalk.bgBlue("Thanks For Conforming 'Sir' Please Wait at Table '2' We will Provide To u In '10 Mins'"))
}else("Sorry Sir Your Input Was Invalid Please chose another one = ")

//zakeed code =>

/* We should restrict user to enter only Green, Red, Yellow;
import chalk from 'chalk';
import readline from 'readline-sync';

const GREEN = 0;
const RED = 1;
const YELLOW = 2;

// const userInput = readline.questionInt(`Select any one option for current light
//   1. Green
//   2. Red
//   3. Yellow
// `);
// Array Index  = [    0       1       2     ]
const COLOR_OPTIONS = ['Green', 'Red', 'Yellow'];

console.log(`Color value Index: 0 => ${COLOR_OPTIONS[0]}`)
console.log(`Color value Index: 1 => ${COLOR_OPTIONS[1]}`)
console.log(`Color value Index: 2 => ${COLOR_OPTIONS[2]}`)
console.log(`Color value Index: -1 => ${COLOR_OPTIONS[-1]}`)

const colorIndex = readline.keyInSelect(COLOR_OPTIONS);
console.log(`User Input value ${colorIndex} = ${COLOR_OPTIONS[colorIndex]}`);

if (colorIndex === GREEN) {
  console.log(chalk.bgGreen('GO'))
} else if (colorIndex === RED) {
  console.log(chalk.bgRed('STOP'))
} else if (colorIndex === YELLOW) {
  console.log(chalk.bgYellowBright('Move Slow..'))
}*/




