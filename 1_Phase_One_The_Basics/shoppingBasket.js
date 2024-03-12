class ShoppingBasket{
    constructor(){
        this.candyArray = []
    }
    getTotalPrice() {
        let totalPrice = 0
        const priceArray = this.candyArray.map((candy) => candy.getPrice());
        priceArray.forEach((candyPrice) => {totalPrice += candyPrice});
        return totalPrice;
        }
    
    addItem(newCandy) {
        this.candyArray.push(newCandy);
    }    
}
module.exports = ShoppingBasket;