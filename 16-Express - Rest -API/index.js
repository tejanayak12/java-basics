// AT starting of this server creating on 4 methods of 
// 1.get() 
// 2.post()
// 3.put()
// 4.delete()

// At all the first you have to insatll npm init 
// the code in VS-CODE was npm init
// after that we have to install express // the code was // npm install express
// and againt there is an body-parser to install // the code was // npm install body-parser

// after all the packages was installed we can start our own server to create.....

// Create  express....

const express = require('express');
const app = express();

// Create a body-parser.........

const bodyparser = require('body-parser');
const { request, response } = require('express');
app.use(bodyparser.json());

// create a Spacific Port 

const Server_Port = 6000;
const ONserverStart = (request, response) => {
    console.log(`SERVER WAS RUNNING ON PORT = http://localhost:${Server_Port}`)
};

// NOW LISTEN THE SERVER .....
app.listen(Server_Port, ONserverStart);

//CREATING EXPRESS JS
app.get("/", (request, response) => {
    response.send('WELCOME TO THE PROJECT BUDDY!')
});

//---------------------------------------------------------------------------------------------------------------------------------
// CREATING A GET METHOD>>>>>>>>>
const user_endpoint = "/users";
const API_HANDLER = (request, response) => {
    response.json({
        Running_Status: true,
        Message: `THE GET METHOD WAS RUNNING....ON END-POINT = ${user_endpoint} , AND THE SERVER PORT IS = ${Server_Port}`
    })
};
// Now Call REQUEST to GET MEthod.....
app.get(user_endpoint, API_HANDLER);

//---------------------------------------------------------------------------------------------------------------------------------------
//CREATING A POST METHOD>>>>>>>>>>>>
const server_handler = (request, response) => {
    response.json({
        Running_Status: true,
        Message: `THE POST METHOD WAS RUNNING ON ENDING-POINT ${user_endpoint} AND THE SERVER PORT IS ${Server_Port} `
    })
};
// Now Call The REQUEST to Post MEthod.........
app.post(user_endpoint, server_handler);

//-----------------------------------------------------------------------------------------------------------------------------------------
// CREATING A PUT METHOD>>>>>>>>>>>> IT HELPS TO UPDATE AN VARABLE
app.put(`${user_endpoint}/:id`, (request, response) => {
    const user_id = request.params.id;
    response.json({
        Running_Status: true, id: user_id,
    })
});

// CREATING A DELETE METHOD >>>>>>>>>>>>>>>>>>>> IT HELPS TO DELETE AN VARABLE 
app.delete(`${user_endpoint}/:id`, (request, response) => {
    const user_id = request.params.id;
    response.json({
        Running_Status: true, id: user_id,
    })
});







