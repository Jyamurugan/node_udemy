const getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/82cb3a0782487e03c17defb40534b753/${lat},${lng}`,
    JSON: true,
    proxy: 'http://172.22.218.218:8085'
  }, (error, response, body) => {
    if(error) {
        callback('Unable to get weather information')
    } else {
        callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        });
    }
  });
}

module.exports = {
  getWeather
};
