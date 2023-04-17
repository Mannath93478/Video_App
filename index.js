//  Creating a express variable and Importing express
const express = require('express');

// Creating a http variable and Importing http
const http = require('http');

// Importing uuid to create the random id for the Meeting
// V4 is the version 4th version of uuid
// Universally Unique Identifier

const {v4 : uuidv4} = require('uuid');

// Creating a variable Socketio and Importing Socket.io
const socketio = require('socketio');

// Creating a Variable PORT and assigned PORT number as 5020
const PORT = 5020;

// Creating a Variable app using express
const app = express()

//const server = require('http').Server(app);
//const io = require('socketio')(server);

// Using the app instance we have created
// Serving static files from static directory
app.use(express.static('public'));

// setting view engine to ejs
app.set('view engine', 'ejs')

// Generating a Random Meet_ID
// Redirecting to the localhost:PORT/32-bit meet_id
app.get('/', (req, res) =>{
    //const meeting_ID = uuidv4();
    res.redirect(`/${uuidv4()}`);
})


// http GET request and taking response from the URL 
// and render the response to the meet views template
app.get('/:meet', (req, res) =>{
    res.render('meet',{ meet_ID : req.params.meet });
})

// It listens the incoming http requests on PORT
// and Prints the Message
app.listen(PORT, () =>{
    console.log("Server is running on PORT",PORT);
})