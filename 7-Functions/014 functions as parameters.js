// We develop our program (solutions) based on available Values 

// String
// Number
// Boolean
// undefined
// null

// Object { key: value, key2: value2 }
// Array [ value, value2, value3, {}, [], function() {} ]

// function(value, value2, value3, ...) {}


// function add(a, b, c) {
//   return a + b + c;
// }

// console.log(add(1, 2, 3));
function add(x) {
    return function (y) {
      return function (z) {
        return x + y + z;
      }
    }
  }

var singelresult = add(58)(52)(12);
console.log(singelresult);

function mulyiply(x,y,z){
    return x*y*z
};

var result = mulyiply(5,2,8);
console.log(result);


console.log(`Executing return functions in one single `, singelresult);
console.log(`Executing return functions in one single typeof`, typeof  singelresult);

var callOne = add(58);
console.log(`typeof callOne is `, typeof callOne);
var callTwo = callOne(52);
console.log(`typeof callTwo is `, typeof callTwo);
var result = callTwo(12);
console.log(`typeof result is `, typeof result);


function welcome(name){
    return name;
};

function execute(param) {
  const value = param();
  return value;
}

console.log(welcome('teja nayak'));
var details = welcome('teja');
console.log(`welcome sir ${details}`);

execute(()=>{});
execute(welcome);
