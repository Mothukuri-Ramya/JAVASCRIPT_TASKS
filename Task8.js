//a.Create a new object named friend with similar properties to the student object, but with values representing a friend's name, email, age, and address. Log the friend object to the console.
let friend={
    name:"Rupa",
    email:"rupasarvani43@gmail.com",
    age:22,
    adress:{
        country:"India",
        city:"Guntur",
        pincode:523001
    }

}
console.log(friend);

//b.Create a new object named topper with similar properties to the student object, but with values representing a topper’s name, email, age, and address. Log the friend object to the console
let topper={
    name:"Tejaswi",
    email:"tejaswi4381@gmail.com",
    age:22,
    adress:{
        country:"India",
        city:"Rajamundry",
        pincode:523801
    }

}
console.log(topper);

//c.Define a class called Student that takes parameters for name, email, age, country, city, and pin_code. Inside the class, set these parameters as properties of the new object. Make sure to add the greet method inside the class.
class student{
    constructor(name,email,age,country,city,pincode){
       this.name=name,
       this.email=email,
       this.age=age,
       this.country=country,
       this.city=city,
       this.pincode=pincode;


    }
    greet(){
        return `Hello my name is ${this.name}`;
    }
    //d.Add a method called getFullAddress to the Student class that returns the full address of the student in this format (India, Bangalore - 560038).
    getFullAddress(){
        return `${this.country},${this.city} - ${this.pincode}`;

    }
}
let newstudent=new student("Ramya","rmaya123@gmail.com",21,"India","kanigiri","523117");
console.log(newstudent.greet());
console.log(newstudent.getFullAddress());

//e.Create objects of the Student class for yourself, your friend, and another student. Log these objects to the console to see the created objects.
//student object already created
let mystudent=new student("Ramyaa","abc@gmail.com",21,"India","Kanigiri","523117");
let friendstudent=new student("Rupa","rupa1234@gmail.com",21,"India","Guntur","52001");
let otherstudent=new student("Tejaswi","teju1234@gmail.com",21,"India","Rajamundry","523001");
console.log(mystudent);
console.log(friendstudent);
console.log(otherstudent);

//f.Call the getFullAddress method on one of the Student objects and log the result to the console.
console.log(friendstudent.getFullAddress());