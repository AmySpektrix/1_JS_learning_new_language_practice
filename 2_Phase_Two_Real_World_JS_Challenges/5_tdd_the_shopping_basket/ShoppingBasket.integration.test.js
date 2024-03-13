const ShoppingBasket = require('./ShoppingBasket')
const Candy = require('./Candy')

describe ("Shopping Basket", () => {
    test ("test shopping basket constructs with an empty array", () => {
        const newBasket = new ShoppingBasket();
        expect(newBasket.basket).toEqual([]);
    })
    test("get total price starts at zero with empty basket", () => {
        const newBasket = new ShoppingBasket();
        expect(newBasket.getTotalPrice()).toEqual(0);
    })
    test("using addItem adds an item to the basket array", () => {
        const newBasket = new ShoppingBasket();
        const newCandy = new Candy('Mars', 4.99)
        newBasket.addItem(newCandy)
        expect(newBasket.basket).toEqual([newCandy]);
    })
    test("when you add an item it adds price to TotalPrice", () => {
        const newBasket = new ShoppingBasket();
        const newCandy = new Candy('Mars', 4.99)
        newBasket.addItem(newCandy)
        expect(newBasket.getTotalPrice()).toEqual(4.99);
    })
    test("adding multiple items to the basket adds up correctly", () => {
        const newBasket = new ShoppingBasket();
        const newCandy = new Candy('Mars', 4.99)
        const newCandy1 = new Candy ('Skittle', 3.99)
        const newCandy2 = new Candy ('Skittle', 3.99)
        newBasket.addItem(newCandy)
        newBasket.addItem(newCandy1)
        newBasket.addItem(newCandy2)
        expect(newBasket.getTotalPrice()).toEqual(12.97);
    })    
})