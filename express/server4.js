'use strict';
const express = require('express');
const app = express();
const serverless = require('serverless-http');

app.use('/', (request, response) => {
    console.log(`app.use on server4.js`);
    response.sendFile(path.join(__dirname, `/server3.html`))
});

module.exports = app;
module.exports.handler = serverless(app);