const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// user input
const input = process.argv[2]

if (input) {
    // Address -> Long/Lat -> Weather
    geocode(input, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return console.log(error)
        } else {
            forecast(latitude, longitude, (error, forcastData) => {
                if (error) {
                    return console.log(error)
                } 
                console.log(location)
                console.log(forcastData)
            })
        }
    })
} else {
    console.log('Please enter a valid location')
    const input = process.stdin
}



