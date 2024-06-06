//a.Create a callback function doubleNumber that takes a number and returns its double.

function doubleNumber(number){
    return number*2;
}


//b.Create another callback function squareNumber that takes a number and returns its square.

function squareNumber(number){
    return number*number;
}

//c.Create another callback function incrementNumber that takes a number and returns the number incremented by one.
 function incrementNumber(number){
    return number+1;
 }

 //d.Define a function performOperation that accepts two parameters: num  and operation.Inside performOperation, call the operation function and pass num as an argument. The function should return the result. 
function performOperation(num,operation){
    return operation(num);
}

//e.Call performOperation with a number and each of the callback functions in turn to see the results of the operations. Log the result to the console for each call to performOperation.

console.log(performOperation(5,doubleNumber));
console.log(performOperation(2,squareNumber));
console.log(performOperation(4,incrementNumber));



/*f.Observe the higher-order function, performOperation, to understand why higher-order functions are used.


performOperation is a higher-order function because it accepts another function (operation)
as one of its parameters.  By accepting different operations as arguments, performOperation 
can perform various tasks without needing to change its implementation.
*/

