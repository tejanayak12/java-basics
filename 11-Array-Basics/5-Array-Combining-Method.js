const SchoolFriends = [
    'Harish',
    'Teja',
    'Likith',
    'Suresh',
    'Bharath'
];

const CollegeFriends = [
    'Chintu',
    'Rajashekhar',
    'Venkat Naidu',
    'Rj Bro',
    'khaza'
];

console.log(SchoolFriends);
console.log(CollegeFriends);

let friends = (SchoolFriends)+(CollegeFriends);

friends.concat(...CollegeFriends,...SchoolFriends);

console.log(friends);