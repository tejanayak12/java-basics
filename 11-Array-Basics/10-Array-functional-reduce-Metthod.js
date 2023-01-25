// using reduce() Method;
console.log(` -------------While LOOP ---------------`    )
const marks = [
    63,
    29,
    78,
    32,
    85,
    92,
    98
];

let totoal = 0;
let index = 0;

while (index < marks.length){
    const currentvalue = marks[index];
    totoal = totoal + currentvalue
   index++;

};

console.log(`Sum Of While Loop `, totoal);

console.log(`---------------------------------------------`);

console.log(`-------------------FOR_LOOP--------------------------`);

let totoalvalue = 0;

for(index=0 ; index<marks.length ; index++){
    const currentvalue = marks[index];
    totoalvalue= totoalvalue + currentvalue
};

console.log(`SUm of for loop value is `,totoalvalue)

console.log(`Reduce Method ------------------------------`);

console.log(marks);

let sum_Of_Values = marks.reduce((currentvalue , previousvalue) => {
    return currentvalue + previousvalue
});

console.log(`sum of reduce method `, sum_Of_Values);

const studentsMarks = [
    [45, 89, 76, 56, 45, 99], // 410
    [89, 78, 90, 45, 77, 56], // 435
    [87, 47, 38, 65, 88, 51], // 376
    [45, 77, 56, 45, 89, 76], // 388
    [78, 90, 45, 76, 38, 65], // 392
];

let total_value = studentsMarks.map((array_value) => {
    return array_value.reduce((curr , prev) => curr + prev)
});

console.log(`sum of students value `, total_value);

let avarag_value = studentsMarks.map((value => (value /600)*100));
console.log(avarag_value);

let convert_to_Integer = studentsMarks.map(value => parseInt(value) + '%');
console.log(convert_to_Integer);

/*
zakeer code = 
const marks = [
  45,
  66,
  37,
  97,
  56,
  45,
  79
];

// 45 + 66 + 37 + 97 + 56 + 45 + 79;

let total = 0;
let index = 0;
while (index < marks.length) {
  const currentValue = marks[index];
  total = total + currentValue;
  index++;
}

console.log(`Sum of numbers using WHILE LOOP`, total);

let totalValue = 0;
for (let index = 0; index < marks.length; index++) {
  const currentValue = marks[index];
  totalValue = totalValue + currentValue;
}

console.log(`Sum of numbers using FOR LOOP`, totalValue);



/*
[
  45,  66,  37,  97,  56,  45,  79
];
*/

/*console.log(marks);
const sumOfValues = marks.reduce(function (
  previousValue,
  currentValue,
  // currentIndex,
  // originalArray
) {

  // console.log(`Previous Value = `, previousValue);
  // console.log(`Current Value = `, currentValue);
  // console.log(`Current Index = `, currentIndex);
  // console.log(`Original Array = `, originalArray);

  return previousValue + currentValue;

})

console.log(`Sum of values using reduce method`, sumOfValues);


const studentsMarks = [
  [45, 89, 76, 56, 45, 99], // 410
  [89, 78, 90, 45, 77, 56], // 435
  [87, 47, 38, 65, 88, 51], // 376
  [45, 77, 56, 45, 89, 76], // 388
  [78, 90, 45, 76, 38, 65], // 392
];

// const totalMarksOfStudents = [
//   410,
//   435,
//   376,
//   388,
//   392
// ]

const totalMarks = studentsMarks.map(function (arrayValue) {
  return arrayValue.reduce((prev, curr) => prev + curr);
});

console.log("-----------------------")
console.log("Total Marks of Student")
console.log("-----------------------")
console.log(totalMarks);

console.log("-----------------------")
console.log("Average Marks of Students")
console.log("-----------------------")

const averageMarks = totalMarks.map((value) => (value / 600) * 100);
console.log(averageMarks)

const convertToInteger = averageMarks.map(value => parseInt(value) + "%");
console.log(convertToInteger);

const markAbove65Percentage = averageMarks.filter((value) => {
  const valueInInterger = parseInt(value);
  return valueInInterger > 65;
});
console.log(markAbove65Percentage);
*/

