// server.js: This is a tiny NodeJS web server hosting static files from the /www folder in the Elastic Beanstalk deployment ZIP
// Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
const express = require('express');

// Let's create an instance of an express web server
const app = express();

app.use('/', express.static(__dirname + '/web'));

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/web/index.html');
});

// Start listening on the desired port for incoming traffic
// By default, let's use port 80, unless we provide a different value as argument or system environment variable
const port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log('NodeJS Express server listening on port:', port);
});