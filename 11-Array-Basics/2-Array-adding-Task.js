import readline from 'readline-sync'
import chalk from "chalk";

let addStudents = 'add Students' 
let listofstudents ='list of students'
 

let User_Input =[
    addStudents,
    listofstudents
];

let program = true;
let students = [];

while (program){
    const userindex = readline.keyInSelect(User_Input);
    const userchoice =User_Input[userindex];

    
    if (userchoice === addStudents){
        
    let newaddedstudent = readline.question(`please enter the student name = `);
        if(newaddedstudent){ students.push(newaddedstudent);
            console.log(chalk.bgRed(`student was added ${students}`));
            console.log(students);
        }
    }else if(userchoice === listofstudents){
        console.log(`list of students ${students}`)
        console.log(students)
    }else{
        program = false;
    }
};


/*const ADD_STUDENT = 'Add Student';
const SHOW_STUDENTS = 'Show list of Students'

const USER_INPUTS = [
  ADD_STUDENT,
  SHOW_STUDENTS,
]

let runProgram = true;
let students = [];

while (runProgram) {
  const userChoiceIndex = readline.keyInSelect(USER_INPUTS);
  const userChoice = USER_INPUTS[userChoiceIndex];
  // console.log(`User Selected choice is ${chalk.bgRed(userChoice)}`)

  if (userChoice === ADD_STUDENT) {

    const newStudentName = readline.question("Please enter new student name : ");
    if(newStudentName) {
      students.push(newStudentName);
      console.log(chalk.bgGreen(`${newStudentName} added to student list`));
    }

  } else if (userChoice == SHOW_STUDENTS) {
    console.log(`List of Students`);
    console.log(students);
  } else {
    runProgram = false;
  }
}*/