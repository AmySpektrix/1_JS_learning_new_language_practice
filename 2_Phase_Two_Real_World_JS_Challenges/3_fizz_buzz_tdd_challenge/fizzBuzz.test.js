const fizzBuzz = require('./fizzBuzz');

describe ('fizzBuzz', () => {
    it ('takes 3 and returns fizz', () => {
        expect(fizzBuzz(3)).toBe('Fizz')
    });
    it ('takes 5 and returns buzz', () =>{
        expect(fizzBuzz(5)).toBe('Buzz')
    });
    it ('takes 15 and returns FizzBuzz', () =>{
        expect(fizzBuzz(15)).toBe('FizzBuzz')
    });
    it ('takes 8 and returns 8', () => {
        expect(fizzBuzz(8)).toBe(8)
    })
    it ('takes 18 and returns Fizz', () => {
        expect(fizzBuzz(18)).toBe('Fizz')
    })
    it ('takes 8 and returns 8', () => {
        expect(fizzBuzz(20)).toBe('Buzz')
    })
})