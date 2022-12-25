'use strict';
const app = require('express')();
const serverless = require('serverless-http');
const path = require('path');
const fs = require('fs');

app.use('/',(request,response) => {
    console.log('app.use on json02.js')
    const filePath = path.join(__dirname + '/json02.js')
    console.log(`filePath is ${filePath}`);
    const jsonResponse = {
        a: "a",
        b: "b"
    }

   console.log(`\n\n=== how to check if a file exists`)
    const json01FilePath = path.join(__dirname + '/json01.js')
    try {
        if (fs.existsSync(json01FilePath)){
            console.log('json01 file exists')
        } else {
            console.log('json01.js file does not exist')
        }
    } catch (err) {
        console.log(err)
    }

    console.log(`\n\n=== how to check if a file exists using asynchronous 'access`);
    fs.access(json01FilePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.error(err);

            // Create the file
            console.log('\nCreating the file');
            fs.writeFileSync("example_file2.txt", "Test File");
        
            // Test the if the file exists again
            fs.access('example_file2.txt', fs.constants.F_OK, (err) => {
                console.log('\n> Checking if the file exists');
                if (err)
                    console.error('File does not exist');
                else {
                    console.log('File does exist');
                }
            });

            return;    
        }
        console.log('json01.js exists')
    });

    response.json(jsonResponse);
});
module.exports = app;
module.exports.handler = serverless(app);



