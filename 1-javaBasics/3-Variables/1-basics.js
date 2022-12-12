
// 1. Declartation
// No value assigned to myName identifier (variable)
var myName;

// 2. Assigning value (any datatype) to myName identifier
myName = "Teja Sai Durga Prasad";


// Declaring variable and assigning value to it
var fullName = 'Teja Sai Durga prasad Nayak';


var firstName = 'Teja Sai';
var middleName = 'Durga Prasad';
var lastName = 'Nayak';


var myFullname = firstName + middleName + lastName;

var fullName = "firstName" + "middleName" + "lastName";

//var myName = firstName + " " + middleName + " " + lastName;
var myName = `${firstName} ${middleName}, ${lastName}`


var city = 'Guntur';
var state = "AP";
var country = "India";

var address = `${city}, ${state} ${country}`;

// lowercase (small letter) x
var x = 200 * 99;

// uppercase (Capital letter) X
var X = 89 * 78 / 10;

// '5' + 10 -> '510'
// `${ '5' + 10 }`

var output = `${'5' + 10}`; // '510'
var outputOne = `${Number('5') + 10}`; // '15'
var outputTwo = `${+'5' + 10}`; // '15'