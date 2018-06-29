const request = require('request');

const geocodeAddress = (searchQuery, callback) => {
    const encodedURL = encodeURIComponent(searchQuery);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=AIzaSyAJLWk1-MCzf8uMcbt3IDOuEt2V9TESoA4`,
        json: true,
        // Required if working behind proxy
        proxy: 'http://172.22.218.218:8085'
    }, (error, response, body) => {
        if (error) {
            callback(`unable to connect to google server`);
        } else if(body.status === "ZERO_RESULTS") {
            callback('Unable to find address');
        } else if(body.status === 'OK'){
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        } else {
            callback('Unable to find address');
        }
    });
}


const geocodeAddressPromise = (searchQuery) => {
    return (new Promise((resolve, reject) => {
        const encodedURL = encodeURIComponent(searchQuery);
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=AIzaSyAJLWk1-MCzf8uMcbt3IDOuEt2V9TESoA4`,
            json: true,
            // Required if working behind proxy
            proxy: 'http://172.22.218.218:8085'
        }, (error, response, body) => {
            if (error) {
                reject(`unable to connect to google server`);
            } else if(body.status === "ZERO_RESULTS") {
                reject('Unable to find address');
            } else if(body.status === 'OK'){
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            } else {
                reject('Unable to find address');
            }
        });
    }));
}

module.exports = {
    geocodeAddress,
    geocodeAddressPromise
};