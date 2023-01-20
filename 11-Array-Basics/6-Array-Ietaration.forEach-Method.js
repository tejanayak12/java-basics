let friends = [
    'teja',
    'sai',
    'pavan',
    'likit',
    'ramesh'
];

console.log(friends.length);

const friendsLength = friends.length;

let index = 0;

while (index < friendsLength){
    console.log(`welocome ${friends[index]}`)
    index++;
};

console.log('-----------------------------------------')

for (let i = 0 ; i < friendsLength ; i++){
    console.log(`welcome ${friends}`)
};


//iternating with forEachMethod ;

friends.forEach((value , index, third)=> {
    console.log('------------------------------')
    console.log(`value of first param,`,value);
    console.log(`value of index param,`,index);
    console.log(`value of third param,`,third);
});


let studentsMarks = [45,89,54,36,98,100,850];

studentsMarks.forEach((value)=>{
    console.log(value)
});

console.log('------------------------------------')

studentsMarks.forEach((value , index)=>{
    console.log(`index = ${index} | marks = ${value}`)
});

function elterate (v , i ,arr){
    console.log('----------------------------------')
    console.log(`values = ${v} | index = ${i} | array = ${arr}`)
};

studentsMarks.forEach(elterate);

let Marks = function(values){
    console.log(`loop values = ${values}`)
};

const numbers = [56,54,96];
numbers.forEach(Marks);

/* Zakeer code 
const names = [
  "Syed",     // 0
  "Zakeer",   // 1
  "Hussain",  // 2
  // "Abid",
  // "Shaik",
  // "Afroz"
];

const namesLength = names.length; // 3

console.log(`Welcome ${names[0]}`);
console.log(`Welcome ${names[1]}`);
console.log(`Welcome ${names[2]}`);

// Iterating Array values using LOOPS
let index = 0;
while (index < namesLength) { // while condition 3 < 3 => true
  console.log(`Welcome ${names[index]}`);
  index++; // index = index + 1; 
}

for (let i = 0; i < namesLength; i++) {
  console.log(`Hey ${names[i]}`)
}

console.log(names);
console.log(typeof names); // typeof values alway return "object"

// How to identify the value is Array or not ?
// by using Array.isArray(value) will true/false

console.log(Array.isArray(names));
console.log(Array.isArray("Syed"));

// Iterating Array values using ARRAY.method() 
//  [].methodName()

// .forEach method 
// [].forEach 
// "".forEach (X)
// {}.forEach (X)

function loopItems() { }

[].forEach(() => { });
[].forEach(function () { });
[].forEach(loopItems)

// Looping array through forEach callbackFN

//     0        1         2
// [ 'Syed', 'Zakeer', 'Hussain' ]
names.forEach(function (first, second, third) {
  console.log("-------------------------------------")
  console.log("I am iterating through forEach Method");
  console.log(`First Param = `, first); // First Param always refers to VALUE in array
  console.log(`Second Param = `, second); // Second Param always refers to INDEX of VALUE
  console.log(`Third Param = `, third); // Third Param is original Array
});


let studentMarks = [99, 67, 55, 46, 36, 67];
studentMarks.forEach((value) => {
  console.log(value)
});

studentMarks.forEach((value, index) => {
  console.log(`Index = ${index} | MARKS = ${value}`)
});


function iterateMarks(v, i, arr) {
  console.log(`Marks: ${v} at index of ${i}`);
}

studentMarks.forEach(iterateMarks)

const loop = function (value) {
  console.log(`Loop value ${value}`);
};

const numbers = [10, 20, 30];
numbers.forEach(loop)



*/