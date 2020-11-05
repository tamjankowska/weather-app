const fetch = require('node-fetch');

require('dotenv').config();

const url = `https://api.openweathermap.org/data/2.5/weather?q=Stockport,gb&units=metric&appid=${process.env.APPID}`;
console.log(url);

const getWeather = async() => {
    let data = await fetch(url);
    return await data.json();
}

module.exports = getWeather;