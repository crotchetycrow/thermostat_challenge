
describe("Feature Test:", function() {
    var thermostat;

    beforeEach(function(){
        thermostat = new Thermostat();
    });

    it("starts the temperature at 20 degrees", function(){

        expect(thermostat.getTemperature()).toEqual(20)
    });

    it("can increase the temperature by 1-degree increments", function() {
        thermostat.up();
        expect(thermostat.getTemperature()).toEqual(21);
    });

    it("can decrease the temperature by 1-degree increments", function() {
        thermostat.down();
        expect(thermostat.getTemperature()).toEqual(19);
    });

    it("prevents temperature from dropping below 10 degrees", function(){
        let counter = 1;
        while (counter <= 11) {
            thermostat.down();
            counter ++
        }
        expect(thermostat.getTemperature()).toEqual(10);
    });

    it("starts with power-saving mode on", function() {
        expect(thermostat.powerSaving).toEqual(true);
    });

    it("has max temp of 25 with power-saving on", function() {
        for(let i = 1; i <=6; i ++) {
            thermostat.up();
        }
        expect(thermostat.getTemperature()).toEqual(25);
    });

    it("can turn power-saving mode off", function() {
        thermostat.togglePS();
        expect(thermostat.powerSaving).toEqual(false);
    });

    it("has max temp of 32 with power-saving off", function() {
        thermostat.togglePS()
        for(let i = 1; i <=13; i ++) {
            thermostat.up();
        }
        expect(thermostat.getTemperature()).toEqual(32);
    });

    it("toggles power-saving mode", function() {
        thermostat.togglePS();
        expect(thermostat.powerSaving).toEqual(false)
    });

    it("toggles power-saving mode", function() {
        thermostat.togglePS();
        thermostat.togglePS();
        expect(thermostat.powerSaving).toEqual(true)
    });

    it("resets the temperature to the default of 20", function() {
        thermostat.reset();
        expect(thermostat.getTemperature()).toEqual(20)
    });

    it("can recognise medium energy usage", function() {
        expect(thermostat.currentUsage()).toEqual('medium')
    });

    it("can recognise low energy usage", function() {
        for(let i = 1; i <=3; i ++) {
            thermostat.down();
        }
        expect(thermostat.currentUsage()).toEqual('low')
    });

    it("can recognise high energy usage", function() {
        thermostat.togglePS();
        for(let i = 1; i <=6; i ++) {
            thermostat.up();
        }
        expect(thermostat.currentUsage()).toEqual('high')
    });
});
