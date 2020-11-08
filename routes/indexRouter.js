const express = require('express');
const router = express.Router();

const getWeather = require('../lib/getWeather');

router.get('/', async (req, res) => {
    let data = await getWeather('Stockport', 'gb');
    let name = data.name;
    let description = data.weather[0].description;
    let temp = data.main.temp;
    let feels_like = data.main.feels_like;
    res.render('index', {
        name,
        data: {description, temp, feels_like}});
});

module.exports = router;