// const express = require("express")
// const app = express()
// const cors = require("cors")
//
// app.use(cors())

function fetchData(){
    console.log("FETCH STARTED")

    fetch(`https://api.2b2t.com.au/v1/stats`, {mode: 'no-cors'}).then(response => {
        const body = response.text();
        console.log(body);
    }).then(data => {
        console.log(data);
    });
}

fetchData()



