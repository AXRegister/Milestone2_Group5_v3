const ToDoModel = require('../models/ToDoModel')
 

module.exports.getToDo = async (req, res) => {
    const toDo = await ToDoModel.find()
    res.send(toDo)
}

module.exports.saveToDo = async (req, res) => {

    const { taskID, category, taskName, taskDetails, dueDate, status, location } = req.body

    ToDoModel
        .create({taskID, category, taskName, taskDetails, dueDate, status, location})
        .then((data) => {
            console.log("Added Successfully");
            console.log(data);
            res.send(data);
        })
}

module.exports.updateToDo = (req, res) => {
    const { _id, category, taskName, taskDetails, dueDate, status, location } = req.body;

    console.log('Updating id ---> ', _id);

    ToDoModel
        .findByIdAndUpdate(_id, { category, taskName, taskDetails, dueDate, status, location })
        .then(() => res.set(201).send("Updated Successfully..."))
        .catch((err) => console.log(err));
}

module.exports.deleteToDo = (req, res) => {
    const { _id } = req.body;

    console.log('Deleting id ---> ', _id);

    ToDoModel
        .findByIdAndDelete(_id)
        .then(() => res.set(201).send("Deleted Successfully..."))
        .catch((err) => console.log(err));
}