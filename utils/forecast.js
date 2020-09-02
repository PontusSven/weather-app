const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9ec03c5d160227def16d1bacbc9c3f42&query=' + latitude + ',' + longitude + '&units=m'
    console.log(url)
    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to Weather API', undefined)
        } else if (response.body.error, undefined) {
            callback('Unable to find location! Try another search.')
        } else {
            callback(undefined, {
                temperature: response.body.current.temperature,
                feelslike: response.body.current.feelslike,
                humidity: response.body.current.humidity
            })
        }

    })
}

module.exports = forecast