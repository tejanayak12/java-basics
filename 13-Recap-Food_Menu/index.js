import chalk from "chalk";
import readline from 'readline-sync';
import { getcategory,getproductinfo,displayproductinfo } from "./utils.js"

console.log(chalk.bgGreen("Welcome to our shopping app"));
const selectedcategory = getcategory();

if (selectedcategory){
    const product = getproductinfo(selectedcategory);
    displayproductinfo(product)
};
