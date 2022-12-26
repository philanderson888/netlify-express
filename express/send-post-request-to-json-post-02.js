'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
app.use(bodyParser.json());
app.use('/.netlify/functions/send-post-request-to-json-post-02', router);  // path must route to lambda
router.get('/', (req, res) => {
  console.log(`router.get('/') on /send-post-request-to-json-post-02 .. `)
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`.. something ..`);
  res.end();
});
module.exports = app;
module.exports.handler = serverless(app);
