const ShoppingBasket = require('./ShoppingBasket')

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
        const doubleCandy = {
            name: 'Mars',
            price: 4.99
        }
        newBasket.addItem(doubleCandy)
        expect(newBasket.basket).toEqual([doubleCandy]);
    })
    test("when you add an item it adds price to TotalPrice", () => {
        const newBasket = new ShoppingBasket();
        const doubleCandy = {
            name: 'Mars',
            price: 4.99,
            getPrice: () => {return 4.99}
        }
        newBasket.addItem(doubleCandy)
        expect(newBasket.getTotalPrice()).toEqual(4.99);
    })
    test("adding multiple items to the basket adds up correctly", () => {
        const newBasket = new ShoppingBasket();
        const doubleCandy = {
            name: 'Mars',
            price: 4.99,
            getPrice: () => {return 4.99}
        }
        const doubleCandy1 = {
            name: 'Skittle',
            price: 3.99,
            getPrice: () => {return 3.99}
        }
        const doubleCandy2 = {
            name: 'Skittle',
            price: 3.99,
            getPrice: () => {return 3.99}
        }
        newBasket.addItem(doubleCandy)
        newBasket.addItem(doubleCandy1)
        newBasket.addItem(doubleCandy2)
        expect(newBasket.getTotalPrice()).toEqual(12.97);
    })    
})