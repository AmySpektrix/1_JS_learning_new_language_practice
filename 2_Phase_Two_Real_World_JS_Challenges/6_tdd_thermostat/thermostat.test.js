const Thermostat = require('./thermostat')

describe ("Thermostat Unit Tests", () => {
    test ("An instance of the thermostat initialises with temperature: 20 degrees and power saving mode: on ", () => {
        const newThermostat = new Thermostat();
        expect(newThermostat.temperature).toEqual(20);
        expect(newThermostat.powerSave).toEqual(true)
    });
    test ("You can get the temperature using a function called getTemperature ", () => {
        const newThermostat = new Thermostat();
        expect(newThermostat.getTemperature()).toEqual(20);
    });
    test ("When you use a function called .up() you increase the temperature by 1 ", () => {
        const newThermostat = new Thermostat();
        newThermostat.up();
        newThermostat.up();
        expect(newThermostat.getTemperature()).toEqual(22);
    });
    test ("When you use a function called .down() you decrease the temperature by 1 ", () => {
        const newThermostat = new Thermostat();
        newThermostat.down();
        expect(newThermostat.getTemperature()).toEqual(19);
    });
    test ("when you use a function called .setPowerSaveMode it sets it to the boolian", () => {
        const newThermostat = new Thermostat();
        newThermostat.setPowerSaveMode(true);
        expect(newThermostat.powerSave).toEqual(true)
        newThermostat.setPowerSaveMode(false);
        expect(newThermostat.powerSave).toEqual(false)       
    })
    test ("when you go up many times the temperature caps at 25", () =>{
        const newThermostat = new Thermostat();
        for (let i = 0 ; i < 10 ; i++) {
            newThermostat.up();
        }
        expect(newThermostat.getTemperature()).toEqual(25);
    })
    test ("when set the power save off and then go up many times the temperature does not cap at 25", () =>{
        const newThermostat = new Thermostat();
        newThermostat.setPowerSaveMode(false);
        for (let i = 0 ; i < 10 ; i++) {
            newThermostat.up();
        }
        expect(newThermostat.getTemperature()).toEqual(30);
    })
    test ("when you call .reset gettemperature should be back to 20", () =>{
        const newThermostat = new Thermostat();
        newThermostat.setPowerSaveMode(false);
        for (let i = 0 ; i < 10 ; i++) {
            newThermostat.up();
        }
        newThermostat.reset();
        expect(newThermostat.getTemperature()).toEqual(20);
    })
    test ("When you use a function called .getEnergyUse() you get a response of low (<18), medium (<=25) or high (<25) ", () => {
        const newThermostat = new Thermostat();
        expect(newThermostat.getEnergyUse()).toEqual("Medium Use");
        newThermostat.temperature = 17
        expect(newThermostat.getEnergyUse()).toEqual("Low Use");
        newThermostat.temperature = 25
        expect(newThermostat.getEnergyUse()).toEqual("Medium Use");
        newThermostat.temperature = 26
        expect(newThermostat.getEnergyUse()).toEqual("High Use");
        newThermostat.temperature = 28
        expect(newThermostat.getEnergyUse()).toEqual("High Use"); 
        newThermostat.temperature = 0
        expect(newThermostat.getEnergyUse()).toEqual("Low Use");
        newThermostat.temperature = 100
        expect(newThermostat.getEnergyUse()).toEqual("High Use");      
    });
})