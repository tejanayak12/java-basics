const add = (a,b)=>{
    return a+b ;
};
 
 
const addWithDefault = (a = 0, b = 0) => {
    return a + b;
};
const sumOf10Plus80 = addWithDefault(100+80);
console.log(`Sum of 100 plus 80 is ${sumOf10Plus80}`);

const sumofaddition =addWithDefault(10+25);
console.log(`values of 10 plus 25 is ${sumofaddition}`);

const sumOf2Plus8 = addWithDefault(2+8);
console.log(`Sum of 2 plus 8 is ${sumOf2Plus8}`);
