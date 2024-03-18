class Weather {
    constructor(client) {
        this.client = client

    }
    load(city){
        this.city = city
    }
    getWeatherData(){
        this.WeatherData = this.client.fetchWeatherData(this.city);
        return this.WeatherData
    }
    async compareWith(city2){
        this.mainCityWeatherData = await this.getWeatherData().then((data)=> data);
        this.newCityWeatherData = await this.client.fetchWeatherData(city2).then((data)=> data);;
        const tempMain = this.mainCityWeatherData.main.temp
        const tempNew = this.newCityWeatherData.main.temp
        const cityMain = this.mainCityWeatherData.name
        const cityNew = this.newCityWeatherData.name
        console.log(`${cityMain} temp: ${tempMain}`)
        console.log(`${cityNew} temp: ${tempNew}`)        
        if (tempMain > tempNew) {console.log( `Today ${cityMain} is ${(tempMain-tempNew).toFixed(1)} degrees hotter than ${cityNew}!`)}
        else if (tempNew > tempMain) {console.log( `Today ${cityMain} is ${(tempMain-tempNew).toFixed(1)} degrees cooler than ${cityNew}!`)}
        else {console.log( `${cityMain} is exactly the same temperature as ${cityMain}!`)}
    }
    async displayWeather(){
        this.mainCityWeatherData = await this.getWeatherData().then((data)=> data);
  
        const humidity = this.mainCityWeatherData.main.humidity
        console.log(`City: ${this.mainCityWeatherData.name}`)
        console.log(`Weather: ${(this.mainCityWeatherData.weather[0].main)}`)
        console.log(`Temperature: ${(this.mainCityWeatherData.main.temp).toFixed(1)}`)
        console.log(`Feels like: ${this.mainCityWeatherData.main.feels_like.toFixed(1)}`)
        console.log(`Humitity: ${this.mainCityWeatherData.main.humidity}%`)
    }
}

module.exports = Weather;