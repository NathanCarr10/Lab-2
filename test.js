var Tasks = [];
function addTask(task) {
    var lenght = Tasks.push(task);
    console.log(task + " has been added to our Tasks Array.");
    return lenght;
}
function listAllTasks() {
    Tasks.forEach(function (item) {
        console.log("Element " + item + "is in our Array Tasks.");
    });
    addTask("Homework!");
    listAllTasks();
}
