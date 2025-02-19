'use strict';
const app = require('express')();
const serverless = require('serverless-http');
const path = require('path');
const fs = require('fs');

app.use('/',(request,response) => {
    console.log('app.use on json02.js')
    const filePath = path.join(__dirname + '/json02.js')
    console.log(`filePath is ${filePath}`);
    const jsonResponse = {
        a: "a",
        b: "b"
    }

   console.log(`\n\n=== how to check if a file exists`)
    const json01FilePath = path.join(__dirname + '/json01.js')
    try {
        if (fs.existsSync(json01FilePath)){
            console.log('json01 file exists')
        } else {
            console.log('json01.js file does not exist')
        }
    } catch (err) {
        console.log(err)
    }

    

    console.log('4')

    response.json(jsonResponse);
});
module.exports = app;
module.exports.handler = serverless(app);



