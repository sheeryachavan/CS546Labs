
var mongo = require('./mongoConnection.js')
const mongoCollections = require("./mongoCollections");
const UUID = require("uuid/v1");
const todoCollectionOfItems = mongoCollections.todoItems;
async function createTask(title, description) {
    if (!title) throw "You must provide a title for todo list";
    title = String(title);
    if (!description)
        throw "You must provide a description";
    description = String(description);
    const todoCollection = await todoCollectionOfItems();

    let newItem = {
        _id: UUID(),
        title: title,
        description: description,
        completed: false,
        completedAt: null
    };

    const insertInfo = await todoCollection.insertOne(newItem);
    if (insertInfo.insertedCount === 0) throw "Could not add Item";

    const newId = insertInfo.insertedId;

    const Item = await this.getTask(newId);
    return Item;

};
async function getAllTasks() {
    const todoCollection = await todoCollectionOfItems();
    const todoItems = await todoCollection.find({}).toArray();
    return todoItems;
}
async function getTask(id) {
    if (!id) throw "You must provide an id to search for";

    const todoCollection = await todoCollectionOfItems();
    const Item = await todoCollection.findOne({ _id: id });
    if (Item === null) throw "No item with that id";

    return Item;


};
async function completeTask(taskId) {
    if (!taskId) throw "You must provide an id to search for";
    const todoCollection = await todoCollectionOfItems();;
    const updateItem = {
        completed: true,
        completedAt: new Date().toLocaleString()
    };
    const updateInfo = await todoCollection.updateOne({ _id: taskId }, { $set: updateItem });
    if (updateInfo.modifiedCount === 0) {
        throw "could not update dog successfully";
    }
    return await this.getTask(taskId);
};
async function removeTask(id) {
    if (!id) throw "You must provide an id to search for";
    const todoCollection = await todoCollectionOfItems();;
    const deletionInfo = await todoCollection.removeOne({ _id: id });
    if (deletionInfo.deletedCount === 0) {
        throw `Could not delete Item with id of ${id}`;
    }

}
module.exports = {
    firstName: "SHREESH",
    lastName: "CHAVAN",
    studentId: "10440695",
    createTask,
    getAllTasks,
    getTask,
    completeTask,
    removeTask
};



