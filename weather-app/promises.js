var somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('done');
    reject('unable to fulfill promise')
  }, 100)
});

const asyncAdd = (a, b) => {
  return (new Promise((resolve, reject) => {
      if(typeof a === 'number' && typeof b === 'number') {
        resolve( a + b);
      } else {
        reject('Arguments must be a number')
      }
  }));
}

asyncAdd(10, 20)
.then(result => console.log(result),
(error) => console.log(error));

asyncAdd(10, 'a')
.then(result => console.log(result),
(error) => console.log(error));

asyncAdd(10, '10')
.then(result => console.log(result),
(error) => console.log(error));

// promise chaining

asyncAdd(10, 10)
.then(result => { return asyncAdd(result, 20)},
error => console.log(error))
.then(result => { console.log(result);},
error => { console.log(error);})

// Will log error also undefined
asyncAdd(10, '10')
.then(result => { return asyncAdd(result, 20)},
error => console.log(error))
.then(result => { console.log(result);},
error => { console.log(error);})

asyncAdd(10, '10')
.then(result => { return asyncAdd(result, 20)})
.then(combinedResult => console.log('Combined Result : ', combinedResult))
// Catch errors
.catch(errors => console.log(errors))

//catch errors using catch block

somePromise
.then((message) => console.log('Success - ', message),
(error) => console.log(error));

// Wrapping request inside promises
const geocode = require('./geocode/geocode');

geocode
.geocodeAddressPromise(0)
.then(geolocation => console.log(JSON.stringify(geolocation, undefined, 2)))
.catch(error => console.log(error));