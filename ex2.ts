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

}

function deleteTask(task:string):number{

    let index:number = Tasks.indexOf(task);
    if(index > -1){
    Tasks.splice(index,1);
    console.log(task+ "has been deleted from Array Tasks");
    }else{
        console.log(task + "is not in our Tasks Array");
    }
    return Tasks.length;
}

addTask("Homework!");
addTask("Eat");
listAllTasks();
deleteTask("Eat");
listAllTasks();

