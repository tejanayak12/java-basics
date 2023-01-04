// Traffic Lights
/**
1. Green    -> (Vehicle Can move / Go)
2. Red      -> (Vehicle should be stop)
3. Yellow   -> (vehicles can move but need go slow)
 */


import chalk from 'chalk';
import readline from 'readline-sync';

const Green_light = 'green';
const Red_Light = "red";
const Yellow_light = 'yellow'

var userinput = readline.question('please enter the colour = ');
var userinput = userinput.toLocaleLowerCase();
console.log(`the value of colour is ${userinput}`);

if (userinput === Green_light ){
    console.log(chalk.bgGreen('Go....'))
}else if (userinput === Red_Light){
    console.log(chalk.bgRed('Stop Please...'))
}else if (userinput === Yellow_light){
    console.log(chalk.bgYellow('Move slow'))
}else {
    console.log(chalk.bgGray("User Input Should Be 'red','green','yellow' "));
};
