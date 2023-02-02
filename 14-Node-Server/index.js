// HTTP Server Module
// NodeJS InBuild Module (http)

const http = require('http');

/*const server = http.createServer(function(request , reponse){
    reponse.writeHead(200)
    reponse.end("hey data was running")
});*/

const requestListner = function(request , reponse){
    reponse.writeHead(200)
    reponse.end("hey server was running")
};

const server = http.createServer(requestListner);

server.listen(80,"localhost",()=>{
    console.log("server is running..........")
});

// Browser  -> localhost
// Terminal -> curl localhost

// Server STOP -> CTRL + C