function excute(parmone,parmtwo){
    const valueone = parmone();
    const valuetwo = parmtwo();
    return{
        valueone : parmone,
        valuetwo : parmtwo
    }
}

function addition (){
    return 100+350
};

function multiply (){
    return 100*350
};

var result = excute(addition,multiply);// ? { valueOne: 450, valueTwo: 350000 };
console.log(result);

const anotherresult = excute(
    ()=>{
        return 100+85
    },
    ()=>{
        return 561*523
    },
);

 // { valueOne: 200, valueTwo: 100 }
// execute( () => { return 20*10 }, () => { return 56+44 } );


console.log(anotherresult);// ? { valueOne: 185, valueTwo: 298,452};


const somenewresults = excute(

    ()=>{
        return 100/58
    },
    ()=>{
        return 100*25
    },
    ()=>{
        return 100-25
    },
);

console.log(somenewresults);