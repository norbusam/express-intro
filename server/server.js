// calls express package. Require express = gives us a function
const express = require('express');
// signing it to app for later use
const app = express();
// a port where the server is going to run(like an address/url)
const port = 5000;

// express static file serving - public is the folder name
app.use(express.static('server/public'));

// () => {} is an anon function
app.listen(port, () => {
    console.log('up and running on port:', port);
});