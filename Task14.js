//a.Define a variable named numbers and assign it an array containing some numbers
let numbers=[1,2,3,4,5];

//b.Use the forEach method to iterate over the numbers array and log each number to the console
numbers.forEach(function(element){
    console.log(element);
});

//c.Use the forEach method to iterate over the numbers array and log each number multiplied by 2 to the console.
numbers.forEach(function(element){
    console.log(element*2);
});

//d.Use the map method to create a new array called squaredNumbers that contains the square of each number in the numbers array. Log the squaredNumbers array to the console.
squaredNumbers=numbers.map(function(element){
    return element*element;
});
console.log(squaredNumbers);

//e.Rewrite the callback function passed to the map function as an arrow function.
let squaredNumbers2=numbers.map(element=>element*element);
console.log(squaredNumbers2);

//f.Use the filter method to create a new array called evenNumbers that contains only the even numbers from the numbers array. Log the evenNumbers array to the console.
let evenNumbers = numbers.filter(function(element) {
    if (element % 2 === 0){
          return true;
    }
});
console.log(evenNumbers);

//g.Rewrite the callback function passed to the filter function as an arrow function.
let evennumbers=numbers.filter(element=>element%2==0);
console.log(evennumbers);