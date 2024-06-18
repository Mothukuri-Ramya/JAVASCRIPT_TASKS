// Operations on fruits

//a.Define a variable named fruits and assign it an array containing the names of several fruits
let fruits=["apple","banana","cherry","date"];

//b.Use the forEach method to iterate over the fruits array and log each fruit name capitalized to the console Rewrite the callback function passed to the foreach function as an arrow function.
fruits.forEach(fruit=>{
    let firstletter=fruit.charAt(0).toUpperCase();
    let rest=fruit.slice(1).toLowerCase();
    console.log(firstletter+rest);
});


//c.Use the map method to create a new array called reversedFruits that contains each fruit name reversed (e.g., "elppa"). Log the reversedFruits array to the console. Rewrite the callback function passed to the map function as an arrow function
let reversedFruits=fruits.map(fruit=>
    fruit.split('').reverse().join(''));
    console.log(reversedFruits);

//d.Use the filter method to create a new array called longFruits that contains only the fruit names that have more than 5 characters. Log the longFruits array to the console. Rewrite the callback function passed to the filter function as an arrow function.
let longFruits=fruits.filter(fruit=>fruit.length>5);   
console.log(longFruits);

//e.Use filter to find fruits that contain the letter 'a', and then map to return these fruits in uppercase. Store the result in an array called aFruitsUpper and log it to the console.
let Fruits=fruits.filter(fruit=>fruit.includes('a'));
let FruitsUpper=Fruits.map(fruit=>fruit.toUpperCase());
console.log(FruitsUpper);

//f.Initialize a variable totalCharacters to 0. Use forEach to add up the number of characters in each fruit name and update totalCharacters. Log totalCharacters after the loop.
let totalCharacters=0;
fruits.forEach(fruit=>{
    totalCharacters+=fruit.length;
});
console.log(totalCharacters);
  