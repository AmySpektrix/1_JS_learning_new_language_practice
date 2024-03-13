class ShoppingBasket{
    constructor(candyArray){
        this.candyArray = candyArray || [] //if candyArray is truthy ie not undefined, null, false, 0, NaN, or an empty string it will give the candyArray if not it will give the []
    }
    getTotalPrice() {
        let totalPrice = 0
        this.candyArray.forEach((candy) => {totalPrice += candy.getPrice()});
        return totalPrice;
        }
    
    addItem(newCandy) {
        this.candyArray.push(newCandy);
    }    
}
module.exports = ShoppingBasket;

        // const priceArray = this.candyArray.map((candy) => candy.getPrice());