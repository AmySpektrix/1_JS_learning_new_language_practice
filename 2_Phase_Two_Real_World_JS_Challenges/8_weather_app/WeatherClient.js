const apiKey = require('./openWeatherapi');

class WeatherClient {
    constructor(){
    }
    fetchWeatherData(city){
        this.apiKey=apiKey
        this.city = city
        this.apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${this.city}&appid=${this.apiKey}`;
        return fetch(this.apiUrl).then((response) => response.json())
    }
}

module.exports = WeatherClient;