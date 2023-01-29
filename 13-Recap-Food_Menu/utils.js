import chalk from 'chalk';
import fileSystem from 'fs';
import readline from 'readline-sync';

function getFileData(filePath) {
  const fileBufferData = fileSystem.readFileSync(filePath);
  const convertToJSON = JSON.parse(fileBufferData);
  return convertToJSON;
}

// const categoriesBuffer = fileSystem.readFileSync("./data/categories.json");
// const categories = JSON.parse(categoriesBuffer);
// console.log(categories);

// const productsBuffer = fileSystem.readFileSync('./data/products.json');
// const products = JSON.parse(productsBuffer);
// console.log(products)

export const categories = getFileData('./data/categories.json');
export const products = getFileData("./data/products.json");

export function getcategory() {
  const displaycategory = categories.map((category) => {
    const firstname = category[0].toUpperCase();
    const remaining = category.substr(1).toLowerCase();
    return firstname + remaining
  });

  const userselectedindex = readline.keyInSelect(displaycategory);
  console.log(`user selected index is `, userselectedindex);
  const userselectedcategory = categories[userselectedindex];
  console.log(`user selected category`, userselectedcategory);
  return userselectedcategory
};

export function getproductinfo(category) {
  if (category) {
    const categoryproducts = products.filter(Product => Product.category === category);
    const productsnames = categoryproducts.map(product => product.title);
    const selectedproduct = readline.keyInSelect(productsnames);
    const selectedone = categoryproducts[selectedproduct];
    return selectedone
  }
};

export function displayproductinfo (product){
  if(product){
    const id = product.id;
    const title = product.title;
    const price = product.price;
    const category = product.category;
    console.log(chalk.bgRed(`product title `,title) , `id was `,id);
    console.log(chalk.bgGreen(`price is = `,price) , `category was = `,category);
  }
};