const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9ec03c5d160227def16d1bacbc9c3f42&query=' + latitude + ',' + longitude + '&units=m'
    console.log(url)
    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to Weather API', undefined)
        } else if (body.error, undefined) {
            callback('Unable to find location! Try another search.')
        } else {
            callback(undefined, 'Temp: ' 
            + body.current.temperature 
            + ' Feelslike: ' 
            + body.current.feelslike 
            + ' humidity: ' 
            + body.current.humidity
            )
        }

    })
}

module.exports = forecast