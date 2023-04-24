class Task {

    constructor(taskID, category, taskName, taskDetails, dueDate, status, location) {
        this.taskID = taskID;
        this.category = category;
        this.taskName = taskName;
        this.taskDetails = taskDetails;
        this.dueDate = dueDate;
        this.status = status;
        this.location = location;
        console.log(location);
    };

}

export default Task;
