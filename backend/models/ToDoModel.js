const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({ 
    taskID: String,
    category: String,
    taskName: String,
    taskDetails: String,
    dueDate: Date,
    status: String,
    location: String,
}, {collection : 'tasks'})

module.exports = mongoose.model('ToDo', todoSchema)