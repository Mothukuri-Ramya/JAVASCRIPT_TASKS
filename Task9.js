//a.Define the Employee Class.The class should take parameters for name, email, age, department, position, and salary. Inside the constructor method, set these parameters as properties of the employee object.
class Employee{
    constructor(name,email,age,department,position,salary){
        this.name=name;
       this.email=email;
       this.age=age;
       this.department=department;
       this.position=position;
       this.salary=salary;
    }
//b.Add a method named introduce() inside the class that logs a greeting and the employee's name and position
introduce(){
    console.log(`Hello everyone, I am ${this.name}, ${this.position}`);
}
//c.Add a method named displaySalary() inside the class that logs the employee's salary 
displaySalary(){
    console.log(`Salary:${this.salary}`);
}
};
//d.Create an object named newEmployee with properties representing a new employee's name, email, age, department, position, and salary. Log this object to the console.
let newEmployee=new Employee("Tejaswi","abc@gmail.com",21,"CSE","Software Development","50000");
console.log(newEmployee);

//e.Create another object named manager with properties representing a manager. Log this object to the console.
let Manager= new Employee("Ramya","abc@gmail.com",21,"CSE","Software Development","60000");
console.log(Manager);

//f.On the newEmployee object, call the introduce() method to see a greeting and role.

console.log(newEmployee.introduce());

//g.Call the displaySalary() method on the manager object to log the salary details.
console.log(Manager.displaySalary());
