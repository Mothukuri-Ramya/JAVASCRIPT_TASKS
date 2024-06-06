//Objects and Classes

//a.Define a variable named student and assign it an empty object
let student={

}
//b.Add properties to the student object for name, email, and age. Set their values to your own name, email, and age.
student.name="ramya";
student.email="ramyamotukuri2003@gmail.com";
student.age=21;

//c.Log the name property of the student object to the console.

console.log(student.name);

//d.Update the age property of the student object to some random value, say 10. Log the age property of the student object to the console to see the updated property.
student.age=22;
console.log(student.age);

//e.Add a method called greet to the student object that logs a greeting message using the name property. Call the greet method to see the greeting message.
let student1={
    name:"ramyaa",
    greet:function(){
        console.log(this.name);
    }
};
student1.greet();
