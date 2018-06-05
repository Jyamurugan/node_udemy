const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=kollar%20street%20virudhunagar&key=AIzaSyAJLWk1-MCzf8uMcbt3IDOuEt2V9TESoA4',
    json: true
}, (error, response, body) => {
    if (error) {
        console.warn('Error in retrieving response');
    } else {
        console.log(JSON.stringify(body, undefined, 2));
    }
});