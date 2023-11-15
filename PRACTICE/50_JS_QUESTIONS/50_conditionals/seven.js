// Create a program that calculates the discount based on the purchase amount:
// If purchase amount is less than $50, no discount.
// If between $50 and $100 (inclusive), apply a 10% discount.
// If more than $100, apply a 20% discount.


function calculateDiscount(num) {
    let discount = 0

    if (typeof num === 'number') {
        if (num < 50) {
            return "Sorry! No Discount."
        } else if (num > 50 && num <= 100) {
                discount = 10
                return `You get a 10% discount and Your Discounted Price is ${(num - (num * (discount/100)))}`
        } else {        
                discount = 20
                return `You get a 20% discount and Your Discounted Price is ${(num - (num * (discount/100)))}`
    } 
} else {
    return "Please! Enter the price in number format!"
}
}


let price = 80
const result = calculateDiscount(price)
console.log(result);

