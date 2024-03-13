const Candy = require('./Candy')

describe ("Candy Test Suite", () => {
    test ("test candy constructs with price and a name", () => {
        const newCandy = new Candy('Mars',4.99);
        expect(newCandy.name).toEqual('Mars');
        expect(newCandy.price).toEqual(4.99);
    });
    test ("test getName returns name", () => {
        const newCandy = new Candy('Mars',4.99);
        expect(newCandy.getName()).toEqual('Mars');
    });
    test ("test getPrice returns price", () => {
        const newCandy = new Candy('Mars',4.99);
        expect(newCandy.getPrice()).toEqual(4.99);
    });
})
