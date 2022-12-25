'use strict';
const app = require('express')();

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