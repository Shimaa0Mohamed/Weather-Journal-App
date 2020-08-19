//Get the date
//WE ADD 1 TO .getMonth() because it start from 0
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

// add eventListner when click on form submit button
const generate = document.getElementById('generate');
generate.addEventListener('click', () => {
    const zipCode = document.getElementById('zip').value;
    const feel = document.getElementById('feel').value;
    //because city hasn,t set  in url we will use  only  usa zipcode in ui zipcode input
    let link =
        `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=0348e95846b9e4c0e051068a75269ecc`;

    //send data from ui to get client side method to handle it & covert data to json type to send to server
    getWeather(link)
        .then(function(data) {
            // add data to POST request ..
            // because there is a lot of data returned from weather website we will take the first one only"main"
            postData('/add', {
                datee: newDate,
                weather: data.main.temp,
                feel
            })
        }).then(() => {

            updateAPI();
        })

});

/* Function to GET Web API Data*/
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

/* Function to POST data */
const postData = async (url = '', data = {}) => {
    const req = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(data)
    })
    console.log(data);

    try {
        const newData = await req.json();
        return newData;
    } catch (error) {
        console.log(error);
    }
}


const updateAPI = async () => {
    const request = await fetch('/all');
    try {
        const data = await request.json()
        //send data to ui
        document.getElementById('datee').textContent = `current date :${data.datee}`;
        document.getElementById('weather').textContent = `current temperature :${data.weather}`;
        document.getElementById('feeling').textContent = `your feeling :${data.feeling}`;
    } catch (error) {
        console.log("error", error);
    }
};