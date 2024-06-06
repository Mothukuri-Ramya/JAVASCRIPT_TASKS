//a.Create a callback function addNumbers that takes two numbers and returns their sum.
function addNumbers(num1,num2){
    return num1+num2;
}

//b.Create a callback function multiplyNumbers that takes two numbers and returns their product.
function multiplyNumbers(num1,num2){
    return num1*num2;
}

//c.Create a callback function subtractNumbers that takes two numbers and returns the result of subtracting the second number from the first.
function subtractNumbers(num1,num2){
    return num1-num2;
}

//d.Create a callback function divideNumbers that takes two numbers and returns the result of dividing the first number by the second, ensuring to handle division by zero.
function divideNumbers(num1,num2){
    return num1/num2;
}

//e.Define a function performArithmetic that accepts three parameters: num1 and num2 , and operation .
function performArithmetic(num1,num2,operation){
    return operation(num1,num2);
}

//f.Call performArithmetic with different pairs of numbers and each of the callback functions to see the results of the arithmetic operations.
console.log(performArithmetic(2,3,addNumbers));
console.log(performArithmetic(2,3,multiplyNumbers));
console.log(performArithmetic(3,2,subtractNumbers));
console.log(performArithmetic(6,3,divideNumbers));
