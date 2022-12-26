'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
app.use(bodyParser.json());
app.use('/.netlify/functions/send-post-request-to-json-post-01', router); 
console.log('something received')
const fetch = require('node-fetch');
router.get('/', (req, res) => {
    console.log(`router.get('/') on json-send-post-request-to-json-post-01 .. `)

    const url = `https://github.com/philanderson888/netlify-express/blob/master/express/send-post-request-to-json-post-01.js`;

    const headers = {
      'Content-Type': 'application/json'
    }
  
    const postData = {
      name: 'phil'
    }
  
    fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(postData)
    })
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));

    res.writeHead(200, { 'Content-Type': 'text/html' });
  
    res.write(`<h1>router.get('/') on json-send-post-request-to-json-post-01 ..</h1>`);
  
    res.write(`<p>home .. router.get('/') <a target="_self" href="https://netlify-express-serverless.netlify.app/.netlify/functions/server">https://netlify-express-serverless.netlify.app/.netlify/functions/server</a></p>`);
      
    res.write(`<p>source .. <a href="https://github.com/philanderson888/netlify-express/blob/master/express/send-post-request-to-json-post-01.js">https://github.com/philanderson888/netlify-express/blob/master/express/send-post-request-to-json-post-01.js</a></p>`);
  
    res.write(`<p>The goal of this is to use nodejs to send a json POST fetch request to the given endpoind ... let's see if we can make it work ...`)

    res.end();
});
module.exports = app;
module.exports.handler = serverless(app);
