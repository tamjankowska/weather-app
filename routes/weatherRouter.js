const express = require('express');
const router = express.Router();

const getWeather = require('../lib/getWeather');

router.get('/', (req, res) => {
    res.render('weather');
});

router.post('/', async (req, res) => {
    let city = req.body.city;
    let code = req.body.code;
    let data = await getWeather(city, code);
    if (data.cod == '404') {
        res.render('weather', {
            err: 'The provided location doesn\'t exist'
        });
        return;
    }
    let name = data.name;
    let description = data.weather[0].description;
    let temp = Math.floor(data.main.temp);
    let feels_like = Math.floor(data.main.feels_like);
    // let sunrise = data.city.sun.rise;
    // let sunset = sys.sunet;
    res.render('weather', {
        name,
        data: {temp, description, feels_like},
        listExists: true
    });
});

module.exports = router;