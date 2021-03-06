// calls express package. Require express = gives us a function
const express = require('express');
// signing it to app for later use
const app = express();
// a port where the server is going to run(like an address/url)
const port = 5000;
// import from modules/quotes.js
const quotesData = require('./modules/quotes.js')
// express static file serving - public is the folder name
app.use(express.static('server/public'));



let index = 0;
//get route
app.get('/quotes', (req, res) => {
    console.log('hi from get request');
    //since an object is being passed. we need to use the key for the object
    res.send(quotesData.list);
})

app.get('/randomQuote', (req, res) => {
    let randomNumber = getRandom(quotesData.length)
    res.send(quotesData[randomNumber])
})
//function for random number generator
function getRandom (max){
    return Math.floor(Math.random() * Math.floor(max));
}

//post route
app.post('/quotes', (req, res)=>{
    console.log('hello from post');
    res.sendStatus(200);
});

// () => {} is an anon function
app.listen(port, () => {
    console.log('up and running on port:', port);
});