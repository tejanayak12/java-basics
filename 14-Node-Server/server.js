const http = require("http");

const server = http.createServer((request , reponse)=>{
    const names = [
        "Teja",
        "likith",
        "ganapathi",
        "yasin",
        "naveen"
    ];
    const covertingtostring = JSON.stringify(names);
    reponse.writeHead(200);
    reponse.end(covertingtostring)
});
  // JSON.parse     => It convert your `string` type array/object into original object/array
  // JSON.stringify => It convert your array/object instance into plain string 
server.listen(82 , "localhost",()=>{
    console.log('Server is Running....... in http://localhost:82')
});

