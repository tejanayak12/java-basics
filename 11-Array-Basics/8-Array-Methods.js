const students = [];
console.log(students.length);
// Array  adding .push method
const push_mehod = students.push("Teja Nayak","Sai","Durga");
console.log(students);

// array adding using .length = 

const length_add = students[students.length] = "Prasad";
console.log(students);

// adding names using unshift to arrey in front = 

students.unshift("tejanayak");
console.log(students);

// Merging arrays with .concat() Method

const school_frnds = ['likith','kiran','jaguu','jyothi'];
const colleage_frnds = ['chintu','rajashekhar','venkat','venu'];

const all_frnds = school_frnds.concat(colleage_frnds);
console.log(all_frnds);

// Convert Array values to String with separator by using .join()
const join_method = all_frnds.join(' | ');
console.log(join_method);

// taking wanted names by using .slice()Method
const first_two_students = all_frnds.slice(0,3);
console.log(first_two_students);

// we can use another type also
const secoundvalue = all_frnds.slice(-2);
console.log(secoundvalue);

// taking first name bye .shift method
const first_student = all_frnds.shift();
console.log(first_student); 

//taking last name by .pop Method 

const last_student = all_frnds.pop();
console.log(last_student);
