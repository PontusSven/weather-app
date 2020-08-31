const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=9ec03c5d160227def16d1bacbc9c3f42&query=37.8267,-122.4233&units=m'

request({ url: url, json: true }, (error, response) => {
    //console.log(response.body.current)

    const temp = response.body.current.temperature
    const feelsLike = response.body.current.feelslike
    const description = response.body.current.weather_descriptions[0]

    console.log(description + '. It is currently ' + temp + ' degrees outside. It feels like ' + feelsLike + ' degrees.')
})