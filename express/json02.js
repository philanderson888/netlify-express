'use strict';
const app = require('express')();
const serverless = require('serverless-http');
const path = require('path');

app.use('/',(request,response) => {
    console.log('app.use on json02.js')
    const filePath = path.join(__dirname + '/json02.js')
    console.log(`filePath is ${filePath}`);
    const jsonResponse = {
        a: "a",
        b: "b"
    }
    response.json(jsonResponse);
});
module.exports = app;
module.exports.handler = serverless(app);
