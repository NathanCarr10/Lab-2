import { TasksInterface } from "./ex3";

class Todos implements TasksInterface{

    Tasks:Array<string> = [];

    addTask(task:string):number{

        let lenght: number = this.Tasks.push(task);
        console.log(task+" has been added to our Tasks Array.")
        return lenght;
        }
    }


    listAllTasks(): void {

        this.Tasks.forEach((item) => {
        console.log("Element " + item + "is on our Array Tasks");
        }

    }

    function deleteTask(task:string):number{

        let index:number = Tasks.indexOf(task);
        if(index > -1){
        this.Tasks.splice(index,1);
        console.log(task+ "has been deleted from Array Tasks");
        }else{
            console.log(task + "is not in our Tasks Array");
        }
        return this.Tasks.length;
    }

    let myTasks = new Todos();
    myTasks.addTask("Eat");
    myTasks.listAllTasks();
    myTasks.deleteTask("Eat");

