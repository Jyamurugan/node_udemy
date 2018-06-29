const request = require('request');
const axios = require('axios');
const geocode = require('./geocode/geocode');
const yargs = require('yargs');
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

const searchQuery = argv.address;
const geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${searchQuery}&key=AIzaSyAJLWk1-MCzf8uMcbt3IDOuEt2V9TESoA4`;

axios({
  
})
.then(result => console.log(result.data));