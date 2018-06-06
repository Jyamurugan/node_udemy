const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
// using yargs to get user inputs

const argv = yargs
.options({
    a: {
        demand: true,
        describe: 'address of location',
        alias: 'address'
    }
})
.help()
.alias('help', 'h')
.argv;

const searchQuery = argv.a;
geocode.geocodeAddress(searchQuery, (errorMessage, result) => {
    if(errorMessage) {
        console.warn(errorMessage);
    } else {
        console.log(JSON.stringify(result, undefined, 2));
    }
});

// Before Modularization
/*
const searchQuery = encodeURIComponent(argv.a);
request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${searchQuery}&key=AIzaSyAJLWk1-MCzf8uMcbt3IDOuEt2V9TESoA4`,
    json: true,
    // Required if working behind proxy
    proxy: 'http://172.22.218.218:8085'
}, (error, response, body) => {
    if (error) {
        console.log(`unable to connect to google server`);
    } else if(body.status === "ZERO_RESULTS") {
        console.log('Unable to find address');
    } else if(body.status === 'OK'){
        // console.log(JSON.stringify(response, undefined, 2));
        // console.log(JSON.stringify(body, undefined, 2));
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
        console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    } else {
        // TODO
    }
});
*/
