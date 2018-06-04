// node => js runs outside browser

// Global varibales

// process => same as document

// global => same as window

// Hello world

console.log('Hello World');

// Require js to import modules

// os, fs are inbuilt node modules
const os = require('os');
const fs = require('fs');

const user = os.userInfo();

fs.appendFile('logs.log', `${user.username}\n`, (err) => {
    // Callback
    if (err) {
        console.warn(err);
    }
});

// importing user created modules
const notes = require('./notes');

notes.addNote();

console.log(`Result: ${notes.add(4, -6)}`);