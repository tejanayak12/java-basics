const http = require('http');
const fs = require('fs');

let categories = fs.readFileSync("./data/categories.json");
console.log(categories);