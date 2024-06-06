//a.Use a for loop to iterate over the colors array and log each color to the console.
let colors=["red","yellow","orange","green","white"];
colors.forEach(function(element){
    console.log(element);
})

//b.Use a while loop to iterate over the colors array and log each color to the console.
let i=0;
while(i<colors.length){
    console.log(colors[i]);
    i++;
}

//c.Use a for...of loop to iterate over the colors array and log each color to the console.
for (color of colors){
    console.log(color);
}

