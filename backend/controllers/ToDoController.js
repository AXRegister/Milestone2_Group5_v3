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