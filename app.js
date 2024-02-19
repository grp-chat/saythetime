const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const PORT = process.env.PORT || 3000;

const app = express();

const clientPath = `${__dirname}/client`;
console.log(`Serving static files from path ${clientPath}`);

app.use(express.static(clientPath));
const server = http.createServer(app);
const io = socketio(server);

server.listen(PORT);
console.log("Server listening at " + PORT);

const HOURS = [
    "twelve",
    "one", 
    "two", 
    "three", 
    "four", 
    "five", 
    "six", 
    "seven", 
    "eight", 
    "nine", 
    "ten", 
    "eleven"
];

const ONES = [
    "one", 
    "two", 
    "three", 
    "four", 
    "five", 
    "six", 
    "seven", 
    "eight", 
    "nine",
];

const TEENS = [
    "ten", 
    "eleven", 
    "twelve", 
    "thirteen", 
    "fourteen", 
    "fifteen", 
    "sixteen", 
    "seventeen", 
    "eighteen", 
    "nineteen"
];

const TENS = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty"
];





