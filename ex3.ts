export interface TasksInterface{

    Tasks:Array<string>;
    addTask(tasks:string):number;
    listAllTasks():void;

}

class Todos implements TasksInterface{

    Tasks:Array<string> = [];

    addTask(task:string):number{

        let lenght: number = this.Tasks.push(task);
        console.log(task+" has been added to our Tasks Array.")
        return lenght;
        }

    }

    
