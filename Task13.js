//a.Use the typeof operator to check the type of colors array and console it.

let colors=["red","yellow","green","orange"];
console.log(typeof(colors));

//b.Log the length property of the colors array to the console to see the number of elements in the array.
console.log(colors.length);

//c.Use the push method to add another color to the end of the colors array.
colors.push("merun");

console.log(colors);
//d.Use the pop method to remove the last color from the colors array.
colors.pop();
console.log(colors);

//e.Use the indexOf method to find the index of a specific color (e.g., "blue") in the colors array.
console.log(colors.indexOf("green"));

//f.Add a property to the colors array called owner and set its value to your name. Log the colors array to see if the owner property is added.
colors.owner="ramya";
console.log(colors);
console.log(colors.owner);

//g.Use a for...in loop to iterate over the properties of the colors array and log each property name and the associated value to the console.
for(key in colors){
    console.log(`${key}:${colors[key]}`);

}