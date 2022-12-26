'use strict';
const app = require('express')();
const serverless = require('serverless-http');

console.log(1);
module.exports = app;
console.log(2);
module.exports.handler = serverless(app);
console.log(3);