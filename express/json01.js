'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
const fs = require('fs')

app.use('/', (req, res) => {
  console.log('app.use / request on /server3')
  console.log(__dirname)
  const files = fs.readdir(__dirname, (item) => {
    console.log(item);
  })
  console.log(`files = ${files}`);
  
  if (files === undefined){
    console.log(`files === undefined`)
    const files2 = fs.readdir('../', (item) => {
        console.log(item);
      })
      console.log(`files2 = ${files2}`)
      if (files2 === 'undefined') {
        console.log('no files in parent either')
      }
  } else if (files == 'undefined') {
    console.log(`files == undefined`)
    //console.log(`there are ${files.length} files in the directory`)
    //files.foreach((file)=> {
      //console.log(file);
    //})
  } else {
    console.log(`files != undefined`)
  }
  const name = 'phil'
  res.json({name: name});
});

module.exports = app;

module.exports.handler = serverless(app);
