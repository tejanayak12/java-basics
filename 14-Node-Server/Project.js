const http = require('http');
const fs = require('fs');

const categories = fs.readFileSync('data/categories.json'); 
const products = fs.readFileSync('data/products.json'); 

function serverlistner(request , response){
    console.log(`Requested url is `,request.url)

    const Requested_url = request.url
    if (Requested_url === "/categories"){
        response.end(categories)
    } else if (Requested_url === "/products"){
        response.end(products)
    }else {
        if (Requested_url.includes("/products/")){
            const path = Requested_url.split("/");
            const productid = path[path.length - 1];
            console.log(`Product id `,productid)
            const productlist = JSON.parse(products)
            const product = productlist.find(product => product.id === +productid)
            if (product){
                response.end(JSON.stringify(product));
            }else{
                response.end(`the product was not found`)
            }
        }else{
            response.writeHead(404);
            response.end(`product was not found please try with /categories / products`);
        }
    }
};
const server = http.createServer(serverlistner);
const port = 4000;
const host = "localhost";
server.listen(port , host,() => {
    console.log(`the server was running in ${port},${host}`,'http://localhost:4000')
});