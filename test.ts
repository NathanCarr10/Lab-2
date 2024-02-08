let Tasks:Array<string>=[];

function addTask(task:string):number{

let lenght: number = Tasks.push(task);
console.log(task+" has been added to our Tasks Array.")
return lenght;
}

function listAllTasks():void{

Tasks.forEach((item)=>{

console.log("Element " +item+"is in our Array Tasks."); 

})

addTask("Homework!");
listAllTasks();

}

