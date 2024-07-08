//a.Define an array called inventory containing several objects, each representing a product in the store's inventory. Each object should have properties such as id, name, price, quantity, and any other relevant details.
let inventory=[
    {
        id:1,
        name:"book",
        price:50,
        quantity:5
    },
    {
    id:2,
    name:"pen",
    price:15,
    quantity:5
    },
    {
        id:3,
        name:"bottle",
        price:150,
        quantity:2

    }
];

//b.Create a class called Product to represent a product, and use this class to create objects for each product in the inventory array.
class Product{
    constructor(id,name,price,quantity){
        this.id=id;
        this.name=name;
        this.price=price;
        this.quantity=quantity;
    }
}

//c.Define functions addProduct() to add a new product to the inventory, updateProduct() to update the quantity of an existing product, removeProduct() to remove a product from the inventory, and displayProducts() to display all the products in the current inventory 
function addProduct(id,name,price,quantity){
let a=new Product(id,name,price,quantity);
inventory.push(a);
}


let updateProduct=function (id,quantity){
    existing_product=inventory.find(function(product){
        return product.id==id;
    });
    existing_product.quantity=quantity;

};

let removeProduct=function (id){
    inventory=inventory.filter(function(product){
    if(product.id != id){
        return product;
    }
    });

};

let displayProducts=function (){
    inventory.forEach(function(product){
        console.log(`${product.name}-${product.price} (${product.quantity})`);
    });

};
displayProducts();
console.log("*****************")
addProduct(4,"ear phones",200,5);
addProduct(5,"fridge",40000,1);

displayProducts();
console.log("*****************")
updateProduct(2,20);
removeProduct(1);
displayProducts();