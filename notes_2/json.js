/*
var userInfo = {
    name: 'Jeyamurugan',
    age: 24
};

const stringUserInfo = JSON.stringify(userInfo);

parsedObject = JSON.parse(stringUserInfo);
*/
const fs = require('fs');

const note = [{
    title: 'sample',
    body: 'sample title @ 1233'
}];

const initialValue = JSON.stringify(note);

fs.writeFileSync('notes.json', initialValue);

notesString = JSON.parse(fs.readFileSync('notes.json'));

console.log(notesString);