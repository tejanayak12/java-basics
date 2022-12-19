const readline = require("readline-sync");

console.log("*****resume maker****" );

const name = readline.question("ur name =");
const designation = readline.question("ur designation=");
const phone = readline.question("ur phone=");
const url = readline.question("ur weebsite=");
const email = readline.question("ur email= ");
const resume ={
    basics :{
        name : name,
        designation : designation, 
        phone : phone,
        url : url,
        email : email

    }
};
console.log(resume);

