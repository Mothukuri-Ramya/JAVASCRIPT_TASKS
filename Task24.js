//a.Define a variable named products and assign it an array containing several objects. Each object should represent a product and have properties like id, name, price, and category.
products=[
{
    id:1,
    name:"mobile",
    price:10000,
    category:"automobiles"

},
{
    id:2,
    name:"Biryani",
    price:350,
    category:"food"

},
{
    id:3,
    name:"Television",
    price:40000,
    category:"electronic devices"

},{
    id:4,
    name:"samosa",
    price:5,
    category:"food"
}
]

//b.Use the forEach method to iterate over the products array and log each product's name and price to the console.
products.forEach(function(product){
    console.log(product.name,product.price);
});

//c.Assume a tax rate of 10%. Use the map method to create a new array called productsWithTax that includes each product's name and a new price which is the original price plus the tax. Log the productsWithTax array to the console.
productsWithTax=products.map(function(product){
    tax=10;
    return{
        name:product.name,
        price:product.price+tax
    };
    });
console.log(productsWithTax);

//d.Use the filter method to create a new array called foodProducts that contains only the products from the category "Food". Log the foodProducts array to the console.
foodProducts=products.filter(function(product){
      return product.category=="food";
});
console.log(foodProducts);

//e.Use filter to find products with a price under $10, then map to return a string for each that includes the name and price (e.g., "Banana - $1.99"). Store these strings in an array called affordableProducts and log it to the console.
affordableProducts=products.filter(function(product){
    return product.price<10;

}).map(function(product){
    return product.name+ " - $"+ product.price;
});
console.log(affordableProducts);

//f.Initialize a variable totalPrice to 0. Use forEach to sum up the prices of all products and update totalPrice. Log totalPrice after the loop.
let totalPrice=0;
products.forEach(function(product){
    totalPrice+=product.price;   

});
console.log(totalPrice);
