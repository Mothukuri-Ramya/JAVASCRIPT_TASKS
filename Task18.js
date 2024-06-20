//a.Define an array called people containing several objects, each representing a person. Each object should have properties such as name, and age.
people=[
    {name:"ramya",age:21},
    {name:"rupa",age:21},
    {name:"teju",age:21}

];


//b.Define a function called calculateAverageAge() that takes the people array as input and returns the average age of all the people in the array.
function calculateAverageAge(){
    let totalAge=0;
    for(person of people){
        totalAge+=person.age;
    }
    return totalAge/people.length;
}

//c.Call the calculateAverageAge() function with the people array as an argument and log the result to the console.
console.log(calculateAverageAge(people))