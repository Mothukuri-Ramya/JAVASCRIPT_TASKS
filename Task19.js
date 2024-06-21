//a.Define an array called cart containing several objects, each representing an item in the shopping cart. Each object should have properties such as name, price, and quantity.
cart=[
    {name:"shoes",price:2000,quantity:2},
    {name:"clothes",price:1000,quantity:2},
    {name:"lipstick",price:200,quantity:1}
]

//b.Define a function called calculateTotalPrice() that takes the shopping cart array as input and returns the total price of all items in the shopping cart.
function calculateTotalPrice(cart){
    total_price=0;
    
    for(product of cart){
        total_price+=product.price;
    }
    return total_price;
}


//c.Call the calculateTotalPrice() function with the cart array as an argument and log the result to the console.

console.log(calculateTotalPrice(cart));
