//  empty JS object  as endpoint of all server data
let projectData = {};
//to run server 
const express = require('express');
// Dependencies
const bodyParser = require('body-parser');
//  instance
const app = express();

/* Middleware*/
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
// Cors for security
const cors = require('cors');
app.use(cors());
// pointing to main project folder
app.use(express.static('website'));
// Setup Server
const port = 3000;
const server = app.listen(port, () => {
    console.log(`running on localhost: ${port}`);
});
//post
//get data from client side and put it in projectData object
app.post('/add', (req, res) => {
    projectData.datee = req.body.datee;
    projectData.weather = req.body.weather;
    projectData.feeling = req.body.feel;
});
//get
//send data to client side 
app.get('/all', (req, res) => {
    res.send(projectData);
    console.log(projectData);
});