//note: if we dont pass return in a function's body it will return undefined

//NESTED FUNCTION - to fit one function inside an another function.
function variable1(a,b){
    function variable2(c){
        return c*c*c
    }
    return variable1(a)+variable2(b)

    
}
const cube = variable1(4,6);
console.log(cube);

//here function1 is a outer function ,function2 is a inner function
//The inner function can be accessed only from statements in the outer function.


const shoping = function bill(amount){
    const gst = ()=>{
        return amount+20
    }
    const discount =()=>{
        return 10
    }
    const totalbill = gst() - discount();
}
const total = shoping(8000); 
console.log(total);

console.log(`full bill details
    gst = ${gst};
    discount = ${discount};
    bill = ${bill};
`)
