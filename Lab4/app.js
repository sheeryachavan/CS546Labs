const todoItems = require("./todo");
const connection = require("./mongoConnection");
async function main() {
    const createdTask = await todoItems.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?").catch(err => { console.log(err) });
    console.log(createdTask);
    const createdTask2 = await todoItems.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?").catch(err => { console.log(err) });
    console.log(createdTask2)
    var getTasks = await todoItems.getAllTasks().catch(err => { console.log(err) });;
    console.log(getTasks);
    var l_strTasktoRemoveId = String(getTasks[0]._id);
    const removeTask = await todoItems.removeTask(l_strTasktoRemoveId).catch(err => { console.log(err) });
    // console.log(removeTask);
    try {
        return await todoItems.getTask(l_strTasktoRemoveId).catch(err => { console.log(err) });
    } catch (error) {
        console.error(error);
    }
    getTasks = await todoItems.getAllTasks().catch(err => { console.log(err) });;
    console.log(getTasks);
    var l_arrfinishedTask;
    var task;
    var finishedTask;
    for (var i = 0; i < getTasks.length; i++) {
        task = await todoItems.getTask(String(getTasks[i]._id)).catch(err => { console.log(err) });
        finishedTask = await todoItems.completeTask(task._id).catch(err => { console.log(err) });
        l_arrfinishedTask.push(finishedTask);
    }
    console.log(l_arrfinishedTask);
    process.exit();
}

main().catch(err => {
    console.log(err)
});
