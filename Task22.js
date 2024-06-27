//a.Define an array called inventory containing several objects, each representing a book in the bookstore's inventory. Each book object should have properties such as id, title, author, price, quantity, and any other relevant details.
inventory=[
    {
       id:1,
       title:"Wings Of Fire",
       author:"Abdul Kalam",
       price:200,
       quantity:10
   },
   {
    id:2,
    title:"The God of Small Things",
    author:"Arundati Roy",
    price:250,
    quantity:5
   
   },
   {
    id:1,
    title:"The Glass Palace",
    author:"Amitav Ghosh",
    price:300,
    quantity:5
   
   }];
   
   
   //b.Create a class called Book to represent a book, and use this class to create objects for each book in the inventory array.
   class Book{
       constructor(id,title,author,price,quantity){
           this.id=id;
           this.title=title;
           this.author=author;
           this.price=price;
           this.quantity=quantity;
       }
   }
   
   //c.Define functions addBook() to add a new book to the inventory, updateBook() to update the quantity of an existing book, removeBook() to remove a book from the inventory, and displayBooks() to display all books in the current inventory in the following format: BookTitle - Price (Quantity).

   function addBook(id,title,author,price,quantity){
       let a=new Book(id,title,author,price,quantity);
       inventory.push(a);
   }
   
   function updateBook(id,quantity){
       existing_quantity=inventory.find(function(book){
        return book.id==id;
       });
       existing_quantity.quantity=quantity;
   
   }
   function removeBook(id){
       inventory=inventory.filter(function(book){
            if(book.id!=id){
               return book;
            }
       });
   }
   function displayBooks(){
       inventory.forEach(function(book){
           console.log(`${book.title}-${book.price} (${book.quantity})`);
       });
   }
   
   displayBooks();
   addBook(4,"The Interpreter of Maladies","Jumpha Lahiri",150,5);
   addBook(5,"The Train to Pakisthan","Khushwant Singh",300,20);
   console.log("***************");
   updateBook(2,30);
   displayBooks();
   console.log("****************");
   removeBook(1);
   displayBooks();
   updateBook(2,2000);
   console.log("*************");
   displayBooks();
   console.log("*************");
   
   