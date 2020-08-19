# Weather-Journal-App
## Introduction 
this progect is a weather calcuator .. i used 3 languages  **_html , css , js &node.js_**
on the home page you enter an usa zipcode then API will caculate the weather  for this city for you 
because we dont use city name you can only type zipcode for usa  "default city"
in  the server side "server.js"i use **_npm package manager & express package & cors to prevent  security problem  &body-parser_**

 ```const express = require('express');
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
```

then i start the server then use  get &post routes for take & send data to & from client side "app.js"
in the client side i use getWeather function to sen link to openweathermap website &get the weather   & send it to server side 
```
const getWeather = async (link) => {
    const res = await fetch(link);
    try {
        //if true
        const data = await res.json();
        return data;
    } catch (error) {
        //if there is error in try function  log it in cosloe
        console.log("error", error);
    }
}
```
and when server send data client side send it to the ui 



[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## How to run locally
when you download project from github got to terminal or cmd & type project folder path  to go there then type node server.js
then open any browser tab & goto localhost:3000
### note: 3000 is the port
## Dependencies 
font awesome 
```

    <link href="https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@600&family=Lobster&display=swap" rel="stylesheet">

```
express & cors &body-parser






