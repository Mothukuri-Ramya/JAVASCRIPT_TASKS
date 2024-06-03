// Higher order and callback functions:

//a.define higherOrderFunction that takes two parameters num and callback,inside that function call callback function and pass num as an argument

function higherOrderFunction(num,callback){
    callback(num);
}

//b.define callbackFunction that takes number as argument and logs it to console.call higherOrderFunction with number and pass callbackFunction as callback
function callbackFunction(number){
    console.log(number);

}
higherOrderFunction(10,callbackFunction);

//c.Modify the call to higherOrderFunction, to pass a number and the same callback but as a function expression
higherOrderFunction(20,function(number){
    console.log(number);
});
//d.modify function expression to log the square number to the console.
higherOrderFunction(5,function(number){
    console.log(number*number);
});

//e.In the call to higherOrderFunction, modify the callback function expression that takes two parameters, num1 and num2, and log their sum to the console. Make the necessary changes to higherOrderFunction to call the callback accordingly.
function higherOrderFunction1(num1,num2,callback){
    callback(num1,num2);
}
higherOrderFunction1(15,30,function(num1,num2){
    console.log(num1+num2);
});
