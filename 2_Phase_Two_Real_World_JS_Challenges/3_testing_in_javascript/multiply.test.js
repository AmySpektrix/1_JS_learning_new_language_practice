const multiply = require('./multiply');

describe ('multiply', () =>{
    it ('multiplies 2 and 5', () =>{
        expect(multiply(2,5)).toBe(10)
    });
    it ("multiplies -1 and 5", () =>{
        expect(multiply(-1,5)).toBe(-5)
    });
    it ("multiplies 0 and 5", () =>{
        expect(multiply(0,5)).toBe(0)
    })
})