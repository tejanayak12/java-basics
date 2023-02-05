// Expressjs is framework (external library)
// We need to download in from NPM registry

// 1. npm init
// 2. npm install express
const fs = require('fs');
const express = require('express');
const app = express();

function file_data(path){
    const data = fs.readFileSync(path);
    const file = JSON.parse(data);
    return file
};  

// const productsData = fs.readFileSync("../14-node-server/data/products.json"); // Buffer
// const products = JSON.parse(productsData);

const products = file_data("../14-Node-Server/data/products.json");
const categories = file_data("../14-Node-Server/data/categories.json");

const handelcategories = (request , response)=>{
    response.json(categories)
};

app.get("/" , (request,response) => {
    response.send("Express app was Running Currently......")
});

app.get("/products",(request,response)=>{
    response.json(products)
});

app.get("/categories",handelcategories);


app.get("/products/:productid",(request,response)=>{
    const productid = request.params.productid;
    const product = products.find(product => product.id === parseInt(productid));

    if(!product){
        response.json({
            error : true,
            message : `No product was found on ${productid}`
        })
    }else{
        response.json(product)
    }
});

app.listen(2000, ()=>{
    console.log("Server Running on port  https://localhost:2000")
});