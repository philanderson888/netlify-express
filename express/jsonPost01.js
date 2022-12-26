'use strict';
const app = require('express')();
const serverless = require('serverless-http');

module.exports = app;
module.exports.handler = serverless(app);