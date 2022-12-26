'use strict';
const express = require('express');
const app = express();
const router = express.Router();
const serverless = require('serverless-http');
app.use('/.netlify/functions/server', router);  // path must route to lambda

const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/', (req, res) => {
  console.log(`app.use('/') request received on /server2 ...`)
  res.writeHead(200, { 'Content-Type': 'text/html' });
  
  res.write(`<h1>app.use('/') on server2.js</h1>`);
  
  res.write('<p>.. home ... <a href="https://netlify-express-serverless.netlify.app/.netlify/functions/server" target="_self">https://netlify-express-serverless.netlify.app/.netlify/functions/server</a></p>');
  
  res.write('<p>.. source ... <a href="https://github.com/philanderson888/netlify-express/blob/master/express/server2.js" target="_self">https://github.com/philanderson888/netlify-express/blob/master/express/server2.js</a></p>');
  
  res.end();
});

module.exports = app;

module.exports.handler = serverless(app);

/*

router.get('/', (req, res) => {
  console.log(`router.get(/) command received`)
});

delete

app.use('/test2', (req, res) => {
  console.log('request for /test2 received')
  res.sendFile(path.join(__dirname, '../index.html'))
});

router.get('/test3', (req, res) => {
  console.log(`get '/test3' request received ...`)
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.write('<p>This web server is running using Netlify Serverless Functions</p>');
  res.write('<p>The live URL is <a href="https://netlify-express-serverless.netlify.app/.netlify/functions/server" target="_blank">https://netlify-express-serverless.netlify.app/.netlify/functions/server</a></p>');
  res.write('<p>The instructions to build this came from <a href="https://github.com/philanderson888/netlify-express">https://github.com/philanderson888/netlify-express</a></p>');
  res.write('<p>... which was a clone of <a href="https://github.com/neverendingqs/netlify-express">https://github.com/neverendingqs/netlify-express</a></p>');
  res.write('<p>... code to build this server is below ...</p>');
  res.write('<script src="https://gist.github.com/philanderson888/3b2c2c988c0425ef9360d145ff32966e.js"></script>');
  res.end();
});

router.get('/another', (req, res) => {
  console.log(`get() request received on /another path`)
  res.json({ route: req.originalUrl });
});

router.post('/', (req, res) => res.json({ postBody: req.body }));

delete

*/
