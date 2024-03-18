const WeatherClient = require ('./WeatherClient');

describe ('WeatherClient', () =>{
  test('test that when requesting data for london will return data for london',async () =>{
    const newClient = new WeatherClient();
    const city = 'London'
    londonData = await newClient.fetchWeatherData(city);
    expect(londonData.name).toEqual("London");
    expect(londonData.id).toEqual(2643743)
  })
})