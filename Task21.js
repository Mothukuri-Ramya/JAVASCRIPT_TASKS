//a.Define an array called expenses containing several objects, each representing an expense. Each expense object should have properties such as id, name, amount, date, and any other relevant details.
expenses=[ 
 {
    id:1,
    name:"goods",
    amount:1000,
    date:new Date(2024,5,18)
},
{
    id:2,
    name:"rent",
    amount:7000,
    date:new Date(2024,6,20)

},
{
    id:3,
    name:"taxes",
    amount:500,
    date:new Date(2024,6,26)

}];


//b.Create a class called Expense to represent an expense, and use this class to create objects for each expense in the expenses array.
class Expense{
    constructor(id,name,amount,date){
        this.id=id;
        this.name=name;
        this.amount=amount;
        this.date=date;
    }
}


function addExpense(id,name,amount,date){
    let a=new Expense(id,name,amount,date);
    expenses.push(a);
}

function updateExpense(id,amount){
    existing_expense=expenses.find(function(expense){
     return expense.id==id;
    });
    existing_expense.amount=amount;

}
function removeExpense(id){
    expenses=expenses.filter(function(expense){
         if(expense.id!=id){
            return expense;
         }
    });
}
function displayExpenses(){
    expenses.forEach(function(expense){
        console.log(`${expense.name}-${expense.amount} (${expense.date})`);
    });
}

displayExpenses();
addExpense(4,"food",1000,new Date(2023,3,20));
addExpense(5,"groceries",3000,new Date(2021,6,25));
console.log("***************");
updateExpense(2,500);
displayExpenses();
console.log("****************");
removeExpense(1);
displayExpenses();
updateExpense(2,2000);
console.log("*************");
displayExpenses();
console.log("*************");

