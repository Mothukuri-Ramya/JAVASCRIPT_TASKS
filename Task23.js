//a.Define an array called tasks containing several objects, each representing a task in the to-do list. Each task object should have properties such as id, description, dueDate, status, and any other relevant details.
tasks=[
    {
        id:1,
        description:"complete js tasks",
        dueDate:"10-08-2024",
        status:"ongoing"
    },
    {
        id:2,
        description:"complete coding tasks",
        dueDate:"10-08-2024",
        status:"ongoing"  
    },
    {
        id:3,
        description:"complete hackathon",
        dueDate:"01-07-2024",
        status:"completed"
    },
    {
        id:"4",
        description:"prepare resume topics",
        dueDate:"10-07-2024",
        status:"delayed"
    }
]

//b.Create a class called Task to represent a task, and use this class to create objects for each task in the tasks array.
class Task {
    constructor(id,description,dueDate,status){
        this.id=id;
        this.description=description;
        this.dueDate=dueDate;
        this.status=status;

    }

}

//c.Define functions addTask() to add a new task, updateTask() to update an existing task, removeTask() to remove a task, and displayTasks() to display all tasks in the following format: TaskDescription - DueDate (Status).
function addTask(id,description,dueDate,status){
    let a=new Task(id,description,dueDate,status);
    tasks.push(a);
}

function updateTask(id,dueDate){
    existing_dueDate=tasks.find(function(task){
        return task.id==id;
    });
    existing_dueDate.dueDate=dueDate;
}

function removeTask(id){
    tasks=tasks.filter(function(task){
       if(task.id!=id){
        return task;
       }
    });

}

function displayTasks(){
    tasks.forEach(function(task){
        console.log(`${task.description}-${task.dueDate} (${task.status})`);
    });
}

displayTasks();
addTask(4,"learn python","25-07-2024","pending");
addTask(5,"learn sql","30-07-2024","not started");
console.log("***************");
updateTask(2,"10-9-2024");
displayTasks();
console.log("****************");
removeTask(1);
displayTasks();
updateTask(3,"20-09-2025");
console.log("*************");
displayTasks();
console.log("*************");