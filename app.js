const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=9ec03c5d160227def16d1bacbc9c3f42&query=37.8267,-122.4233'

request({ url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})