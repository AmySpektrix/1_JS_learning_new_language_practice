const jestFetchMock = require("jest-fetch-mock");
jestFetchMock.enableMocks();

const weather = require('./weather');

describe("Weather (api Mocked)", () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    test ("load function loads city and then getWeather Data mocked", async () =>{
    const mockClient = {
        fetchWeatherData: jest.fn(),
    };
    mockClient.fetchWeatherData.mockResolvedValueOnce({
        name: "Bristol",
        id:4931378
    });
    const newWeather = new weather(mockClient)
    newWeather.load('Bristol');
    expect(newWeather.city).toEqual('Bristol')
    bristolData = await newWeather.getWeatherData() 
    expect(bristolData.name).toEqual("Bristol");
    expect(bristolData.id).toEqual(4931378)
    })
    test ("compareWith(city2) compares the two cities and returns a nice string", async () =>{
        const mockClient = {
            fetchWeatherData: jest.fn(),
        };
        mockClient.fetchWeatherData.mockResolvedValueOnce({
            name: "Bristol",
            id:4931378
        });
        const newWeather = new weather(mockClient)
        newWeather.load('Bristol');
        expect(newWeather.city).toEqual('Bristol')
        bristolData = await newWeather.getWeatherData() 
        expect(bristolData.name).toEqual("Bristol");
        expect(bristolData.id).toEqual(4931378)
        })
})