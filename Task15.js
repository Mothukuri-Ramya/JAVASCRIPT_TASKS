//a.Define a variable named temperatures and assign it an array containing several temperature readings
let temperatures=[-3,14,22,5,-10]
/*
b.Use the forEach method to iterate over the temperatures array and log each temperature to the console.
temperatures.forEach(function(element){
    console.log(element);
});
*/

// rewriting callback function passed to foreach function as an arrow function


temperatures.forEach(element=>{
    console.log(element);
});

//c.convert temperatures into farenheit
console.log("********");
temperatures.forEach(element=>{
    element=(element*9/5)+32;
    console.log(element);
});


//d.use map method to create new array for temperatuesinfarenheit and log the resulted array to the console. 
let temperaturesInFarenheit=temperatures.map(element=>{
    return (element*9/5)+32;
    
});
console.log(temperaturesInFarenheit);

//e.use filter method to create new array for temperatures below 0 degree celcius

let belowFreezing=temperatures.filter(element=>{
    if (element<0){
        return element;
    }
});
console.log(belowFreezing);

