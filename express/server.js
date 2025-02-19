'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

app.use(bodyParser.json());

app.use('/.netlify/functions/server', router);  // path must route to lambda

router.get('/', (req, res) => {
  console.log(`router.get('/') on /server .. `)
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<h1>router.get('/') Netlify serverless functions => server.js</h1>`);
    
  res.write(`<p>home .. router.get('/') <a target="_self" href="https://netlify-express-serverless.netlify.app/.netlify/functions/server">https://netlify-express-serverless.netlify.app/.netlify/functions/server</a></p>`);
  
  res.write(`<p>server .. router.get('/') .. <a target="_self" href="https://netlify-express-serverless.netlify.app/.netlify/functions/server">https://netlify-express-serverless.netlify.app/.netlify/functions/server</a></p>`);

  res.write(`<p>server2 .. app.use('/') .. <a href="https://netlify-express-serverless.netlify.app/.netlify/functions/server2" target="_self">https://netlify-express-serverless.netlify.app/.netlify/functions/server2</a></p>`);

  res.write(`<p>server3 .. app.use('/') .. <a href="https://netlify-express-serverless.netlify.app/.netlify/functions/server3" target="_self">https://netlify-express-serverless.netlify.app/.netlify/functions/server3</a></p>`);

  res.write(`<p>server4 .. app.use('/') .. <a href="https://netlify-express-serverless.netlify.app/.netlify/functions/server4" target="_self">https://netlify-express-serverless.netlify.app/.netlify/functions/server4</a></p>`);
  
  res.write(`<p>json01 .. return json ..<a href="https://netlify-express-serverless.netlify.app/.netlify/functions/json01" target="_self">https://netlify-express-serverless.netlify.app/.netlify/functions/json01</a></p>`);
  
  res.write(`<p>json02 .. return json <a href="https://netlify-express-serverless.netlify.app/.netlify/functions/json02" target="_self">https://netlify-express-serverless.netlify.app/.netlify/functions/json02</a></p>`);
  
  res.write(`<p>json send params <a href="https://netlify-express-serverless.netlify.app/.netlify/functions/json-with-params?name=phil&dob=210989" target="_self">https://netlify-express-serverless.netlify.app/.netlify/functions/json-with-params?name=phil&dob=210989</a></p>`);

  res.write(`<p>send-post-request-to-json-post-01 at <a href="https://netlify-express-serverless.netlify.app/.netlify/functions/send-post-request-to-json-post-01" target="_self">https://netlify-express-serverless.netlify.app/.netlify/functions/send-post-request-to-json-post-01</a></p>`);
  
  res.write(`<p>send-post-request-to-json-post-02 at <a href="https://netlify-express-serverless.netlify.app/.netlify/functions/send-post-request-to-json-post-02" target="_self">https://netlify-express-serverless.netlify.app/.netlify/functions/send-post-request-to-json-post-02</a></p>`);

  res.write(`<p>json-post-01 at <a href="https://netlify-express-serverless.netlify.app/.netlify/functions/json-post-01" target="_self">https://netlify-express-serverless.netlify.app/.netlify/functions/json-post-01</a></p>`);

  res.write(`<p>source .. <a href="https://github.com/philanderson888/netlify-express/blob/master/express/server.js">https://github.com/philanderson888/netlify-express/blob/master/express/server.js</a></p>`);

  res.write(`<p>acknowledge <a target="_self" href="https://github.com/neverendingqs/netlify-express">https://github.com/neverendingqs/netlify-express</a></p>`);

  res.write(`<p>... source .. </p>`);
  res.write(`<script src="https://gist.github.com/philanderson888/3b2c2c988c0425ef9360d145ff32966e.js"></script>`);
  res.end();
});

module.exports = app;

module.exports.handler = serverless(app);

/*

delete

router.get('/another', (req, res) => {
  console.log(`get() request received on /another path`)
  res.json({ route: req.originalUrl });
});

router.post('/', (req, res) => res.json({ postBody: req.body }));

app.use('/test2', (req, res) => {
  console.log('request for /test2 received')
  res.sendFile(path.join(__dirname, '../index.html'))
});

app.use('/', (req, res) => {
  console.log('app.use / request received on path /server2')
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!!</h1>');
  res.write('<p>This web server is running using Netlify Serverless Functions</p>');
  res.write('<p>The live URL is <a href="https://netlify-express-serverless.netlify.app/.netlify/functions/server" target="_self">https://netlify-express-serverless.netlify.app/.netlify/functions/server</a></p>');
  res.write('<p>The instructions to build this came from <a href="https://github.com/philanderson888/netlify-express">https://github.com/philanderson888/netlify-express</a></p>');
  res.write('<p>... which was a clone of <a href="https://github.com/neverendingqs/netlify-express">https://github.com/neverendingqs/netlify-express</a></p>');
  res.write('<p>... code to build this server is below ...</p>');
  res.write('<script src="https://gist.github.com/philanderson888/3b2c2c988c0425ef9360d145ff32966e.js"></script>');
  res.end();
//  res.sendFile(path.join(__dirname, '../index.html'))
});

delete

*/
