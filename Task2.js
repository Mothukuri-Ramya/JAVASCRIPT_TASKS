//a.Define a function calculate area which takes two parameters ,width and height and returns area of rectangle
function calculateArea(width,height){
    return width*height;
}


//b.call the calculatearea function with width=5,height=10 and log the result

console.log(calculateArea(5,10));

//c.modify the function to have default value of 1 for both width and height ,if no arguments provided function should return 1
function calculateArea1(width=1,height=1){
    return width*height;
}
console.log(calculateArea1());

//d.Rewrite the calculateArea function as a function expression and store it in a variable called calculateAreaFunction
let calculateAreaFunction=function(width,height){
    return width*height;
}
console.log(calculateAreaFunction(5,10));

//e.Rewrite the calculateArea function as an arrow function.
let calculateAreaFunction1=(width,height)=>{
    return width*height;
}
console.log(calculateAreaFunction1(5,10));
