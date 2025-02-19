'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
const axios = require('axios');
app.use(bodyParser.json());
app.use('/.netlify/functions/send-post-request-to-json-post-01', router); 


router.get('/', (req, res) => {
    console.log(`router.get('/') on json-send-post-request-to-json-post-01 .. `)
    console.log(`*** this is not working either with fetch or axios .... not sure why! ****`)



    /*

    const url = `https://jsonplaceholder.typicode.com/users`;
  
    const user = {
      name: 'phil'
    }

    ==========  axios ============

    axios.post(url, user)
    .then(response => {
      console.log(`data successfully POSTed to ${url} and received this response`)
      console.log(response.data)
    });

    ==========  fetch ============

    const http = require('http');
    const fetch = require('node-fetch');
    const encoding = require('encoding')

    const headers = {
      'Content-Type': 'application/json'
    }

    fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));

    */
  
    res.writeHead(200, { 'Content-Type': 'text/html' });
  
    res.write(`<h1>router.get('/') on json-send-post-request-to-json-post-01 ..</h1>`);
  
    res.write(`<p>home .. router.get('/') <a target="_self" href="https://netlify-express-serverless.netlify.app/.netlify/functions/server">https://netlify-express-serverless.netlify.app/.netlify/functions/server</a></p>`);
      
    res.write(`<p>source .. <a href="https://github.com/philanderson888/netlify-express/blob/master/express/send-post-request-to-json-post-01.js">https://github.com/philanderson888/netlify-express/blob/master/express/send-post-request-to-json-post-01.js</a></p>`);
  
    res.write(`<p>The goal of this is to use nodejs to send a json POST fetch request to the given endpoind ... let's see if we can make it work ...`)

    res.end();
});
module.exports = app;
module.exports.handler = serverless(app);
