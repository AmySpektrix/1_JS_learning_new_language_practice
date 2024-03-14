class Thermostat {
    constructor(){
        this.temperature = 20;
        this.powerSave = true
    }
    getTemperature() {
        return this.temperature;
    }
    up(){
        if (this.temperature >= 25 && this.powerSave === true) {}
        else {this.temperature += 1;}
    }
    down(){
        this.temperature -= 1;
    }
    setPowerSaveMode(boolian){
        this.powerSave = boolian;
    }
    reset(){
        this.temperature = 20;
    }
    getEnergyUse(){
        if (this.temperature < 18){return "Low Use";}
        else if (this.temperature<=25){return "Medium Use";}
        else {return "High Use";}
    }    
}

module.exports = Thermostat;