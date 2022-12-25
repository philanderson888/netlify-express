'use strict';
const express = require('express');
const app = express();
const serverless = require('serverless-http');

app.use('/', (request, response) => {
    console.log(`app.use on server4.js`);
    const filePath =  path.join(__dirname + '/server3.html');   
	console.log('filePath is ' + filePath);
	response.sendFile(filePath);
});

module.exports = app;
module.exports.handler = serverless(app);