'use strict';
const app = require('express')();
const serverless = require('serverless-http');

app.use('/', (req,res) => {
    console.log('app.use on json-with-params.js')
    console.log(`request query = ${req.query}`)
    if (req.query != undefined) {
        const name = req.query.name
        const jsonResponse = {
            name: name
        }
        res.json(jsonResponse)
    }
    const jsonResponse = {
        name: "not supplied"
    }
    res.json(jsonResponse);
});
module.exports = app;
module.exports.handler = serverless(app);