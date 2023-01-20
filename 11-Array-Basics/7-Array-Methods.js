import chalk from "chalk";
let students = [];//  Created an empty array
console.log(students.length);

// Add value to array by using .push( NEW_VALUE ) method
students.push('teja','sai','durga','prasad','naik');

// Add Value using length property ARRAY[ ARRAY.length ] = NEW_VALUE
students[students.length] = 'nayak'
console.log(students);

console.log(students.length);


//Calling a function with an return value =>
function having_a_return_Value (){
    return 100+800
};

//calling a function with out having a return values id gives = undifined;

function not_having_return_value (){
    const full_amount = 100+800
};

const firstvalue = having_a_return_Value(); // it will gives us 900 excute value;
const secoundvalue = not_having_return_value();// it shows it was an "undifined value";

console.log(`valueone is ${chalk.green(firstvalue)}`);
console.log(`valuetwo is ${chalk.bgRed(secoundvalue)}`);

console.log('===============================================');

[].forEach;
/*
(method) Array<never>.forEach(
  callbackfn: (value: never, index: number, array: never[]) => void, 
  thisArg?: any
): void
Performs the specified action for each element in an array.
*/

[].map;
/*
(method) Array<never>.map<U>(
  callbackfn: (value: never, index: number, array: never[]) => U, 
  thisArg?: any
): U[]
Calls a defined callback function on each element of an array, and returns an array that contains the results.
*/

//using forEach Method => .....
console.log(chalk.bgRed(`forEach-Method ------------------------------------`));

students.forEach (students => {
    const message = `welcome ${students}`;
    console.log(message);
    return message
});

console.log(`value of an forEach-method =`,students);

console.log('========================================')
//using map Method => .....
console.log(chalk.bgRed(`map-Method ------------------------------------`));

console.log('-------------------------------')

students.map((students => {
    const message = `welcome Mr. ${students}`;
    console.log(message);
    return message
}));

console.log(`value of an map-method = `, students);

console.log(`----------------------------------------------------`)

let prices = [250,200,754,265,521];

const discount = [];

const discount_Percentage = 25;

function applyDiscount (amount ,discount_Percentage = 25){
    const value = (amount * discount_Percentage)/100;
    return amount - value
};

for (let i = 0 ; i < prices.length ; i++) {
    const value = prices[i];
    const discountamount = applyDiscount(value , discount_Percentage);
    discount.push(discountamount)

};

/*
const map_using_single_statement = shoppingPrices.map( amount => {
  return amount - 10;
} );
*/

//using map singel statement by using same way =>

let Map_using_singel_statement = prices.map(amount =>applyDiscount(amount) );

// discount percentage using map =>

let discount_using_map = prices.map(amount => {
    const values = applyDiscount (amount ,discount_Percentage);
    return values
})

console.log(prices);
console.log(discount);
console.log(Map_using_singel_statement);
console.log(discount_using_map);

/*
[].push(123); // [123]
[100, 200].push(300); // [100, 200, 300];
[].forEach( () => {} );
[].forEach( function() {} );
['Syed', 'Zakeer', 'Hussain'].forEach( (value) => { console.log(`Welcome {value}`) } );
// 'Syed' => ('Syed') => { console.log(`Welcome Syed') }
// 'Zakeer' => ('Zakeer') => { console.log(`Welcome Zakeer`) }
// 'Hussain'
['A', 'B', 'C'].map(char => char.toLowerCase());
// A => A => A.toLowerCase() ===> a
// B => B => B.toLowerCase() ===> b
// C => C => C.toLowerCase() ===> c
*/

const char =['A','B','C']

console.log(char.map(char => char.toLowerCase()));



