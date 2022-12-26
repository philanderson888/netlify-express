'use strict';
const express = require('express');
const app = express();
const serverless = require('serverless-http');
const fs = require('fs');

app.use('/', (req, res) => {
    console.log(`app.use on server4.js`);

    const files = fs.readdir(__dirname, (item) => {
        console.log(item);
    });

    console.log(`files = ${files}`);

    if (files === undefined){
        console.log('not reading any files so cannot serve any files')
    } else {
        console.log('files are found')
        console.log(`there are ${files.length} files in the directory`)
        console.log('serving file as response')   
        const filePath =  path.join(__dirname + '/server3.html');   
        console.log('filePath is ' + filePath);
        res.sendFile(filePath);
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
