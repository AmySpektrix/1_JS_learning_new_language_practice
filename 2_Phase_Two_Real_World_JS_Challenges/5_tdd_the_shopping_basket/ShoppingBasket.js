class ShoppingBasket{
    constructor(){
        this.basket = []        
}
getTotalPrice() {
    let totalPrice = 0
    this.basket.forEach((candy) => {totalPrice += candy.getPrice()});
    return totalPrice;
    }
addItem(newCandy) {
        this.basket.push(newCandy);
    }
}    
module.exports = ShoppingBasket;