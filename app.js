const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=9ec03c5d160227def16d1bacbc9c3f42&query=37.8267,-122.4233&units=m'

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicG9udHVzc3ZlbiIsImEiOiJja2VpZmo4MDgwOHFqMnhwaXRlOW8xMG0xIn0.qKC6M1V6HSYpO3WrXndkxw'

// Geocode API
request({url: geocodeURL, json: true }, (error, response) => {

    if (error) {
        console.log('Unable to connect to weather service!')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location!')
    } else {
        const longitude = response.body.features[0].center[0]
        const latitude = response.body.features[0].center[1]
        console.log(latitude, longitude)
    }
})

// Weather API
request({ url: url, json: true }, (error, response) => {

    if (error) {
        console.log('Unable to connect to weather service!')
    } else if(response.body.error)  {
        console.log('Unable to find location! Try another search.')
    } else {
        console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees outside. It feels like ' + response.body.current.feelslike + ' degrees.')
    }
})



// Address -> Long/Lat -> Weather

