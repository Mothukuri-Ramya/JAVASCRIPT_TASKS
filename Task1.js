//a.creating a function and taking argument and returning message
function greet(name){
    return `Hello,${name}!`;
}

//b.calling the greet function 
console.log(greet("Ramya"));

//c.default arguments
function greet1(name="Guest"){
    return `Hello,${name}!`;
}
console.log(greet1());

//d.greet function as function expression 
const greetFunction=function(name="Guest"){
    return `Hello,${name}!`;
}
console.log(greetFunction());

//e.greet function as an arrow function
const greet2=(name="Guest")=> `Hello,${name}!`;
console.log(greet2());