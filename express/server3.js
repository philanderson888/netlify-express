'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
const fs = require('fs')

app.use(bodyParser.json());

app.use('/.netlify/functions/server', router);  // path must route to lambda

app.use('/', (req, res) => {
  console.log('app.use / request on /server3')
  console.log(__dirname)
  const files = fs.readdir(__dirname, (item) => {
    console.log(item);
  })
  console.log(`files = ${files}`);
  if (files === undefined){
    console.log('not reading any files so cannot serve any files')
  } else {
    console.log('files are found')
    console.log(`there are ${files.length} files in the directory`)
    console.log('serving file as response')
    files.foreach((file)=> {
      console.log(file);
    })
    res.sendFile('server3.html', { root: __dirname });
    res.sendFile(path.join(__dirname, 'server3.html'))
  }
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<h1>app.use('/') sending file but cannot find file ... </h1>`);   
  res.write(`<p>no file found ... </p>`);

  res.write('<p>home .. <a target="_self" href="https://netlify-express-serverless.netlify.app/.netlify/functions/server">https://netlify-express-serverless.netlify.app/.netlify/functions/server</a></p>');

  res.write('<p>source .. <a href="https://github.com/philanderson888/netlify-express/blob/master/express/server3.js">https://github.com/philanderson888/netlify-express/blob/master/express/server3.js</a></p>');

  res.end();
});
module.exports = app;
module.exports.handler = serverless(app);

/*

delete

router.get('/test3', (req, res) => {
  console.log(`get '/test3' request received ...`)
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.write('<p>This web server is running using Netlify Serverless Functions</p>');
  res.write('<p>The live URL is <a href="https://netlify-express-serverless.netlify.app/.netlify/functions/server" target="_self">https://netlify-express-serverless.netlify.app/.netlify/functions/server</a></p>');
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

app.use('/test2', (req, res) => {
  console.log('request for /test2 received')
  res.sendFile(path.join(__dirname, '../index.html'))
});

router.get('/', (req, res) => {
  console.log(`get '/' request received on /server3 ...`)
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.write('<p>This web server is running using Netlify Serverless Functions</p>');
  res.write('<p>The live URL is <a href="https://netlify-express-serverless.netlify.app/.netlify/functions/server" target="_self">https://netlify-express-serverless.netlify.app/.netlify/functions/server</a></p>');
  res.write('<p>The instructions to build this came from <a href="https://github.com/philanderson888/netlify-express">https://github.com/philanderson888/netlify-express</a></p>');
  res.write('<p>... which was a clone of <a href="https://github.com/neverendingqs/netlify-express">https://github.com/neverendingqs/netlify-express</a></p>');
  res.write('<p>... code to build this server is below ...</p>');
  res.write('<script src="https://gist.github.com/philanderson888/3b2c2c988c0425ef9360d145ff32966e.js"></script>');
  res.end();
});


*/
