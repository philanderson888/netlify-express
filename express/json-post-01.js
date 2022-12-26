'use strict';
const express = require('express');
const app = express();
const router = express.Router();
const serverless = require('serverless-http');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use('/.netlify/functions/json-post-01', router); 

router.get('/', (req, res) => {

  console.log(`router.get('/') on json-post-01 .. `)

  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.write(`<h1>router.get('/') on json-post-01 ..</h1>`);
    
  res.write(`<p>source .. <a href="https://github.com/philanderson888/netlify-express/blob/master/express/json-post-01.js">https://github.com/philanderson888/netlify-express/blob/master/express/json-post-01.js</a></p>`);

  res.write(`<p>acknowledge <a target="_self" href="https://github.com/neverendingqs/netlify-express">https://github.com/neverendingqs/netlify-express</a></p>`);

  res.end();
});

console.log(1);
module.exports = app;
console.log(2);
module.exports.handler = serverless(app);
console.log(3);
