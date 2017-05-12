const express = require('express');
const request = require('request');
const chokidar = require('chokidar');
const route = require('./routes/index.js');
const cookieParser = require('cookie-parser');
const watcher = chokidar.watch('./orchestrator');
const ApiProxy = require('./utils/ApiProxy');
const apiPort = (process.env.API_PORT || 5000);
const app = express();

let clientRootPath = 'http://localhost:3000/';

app.use(cookieParser());

console.log(`process.env.API_PORT= ${process.env.API_PORT}, apiPort= ${apiPort}`);
console.log(`process.env.WEB_PORT= ${process.env.WEB_PORT}`);

app.set('port', (process.env.WEB_PORT || 3001));


if (process.env.NODE_ENV === 'production') {
    clientRootPath = '/'
}

route(app, clientRootPath);

// Setup the API Proxy.
app.use('/api/',  new ApiProxy("localhost",apiPort));

if (process.env.NODE_ENV === 'production') {
    console.log("Production");
    app.use(express.static('client/build'));
    app.use(express.static('/*'));
}


app.listen(app.get('port'), () => {
    console.log(`🤓  Hi there!`)
    console.log(`Server started on: ${new Date()}`)
    console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});



module.exports = app; // for testing
