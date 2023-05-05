import './style.css'
import Nav from './Nav'
import logo from './rocketship.jpg'
import GetTasks from "./getTasks";
import Task from "./Task.js"
import EditTask from './editTask';
import {Routes, Route, useNavigate} from 'react-router-dom';

function List() {

    var Tasks = [];
    

    const finalData = GetTasks();

    function tempOutput(finalData) {

    var taskList = [];
    var i = 0;
    
    for (i = 0; i < finalData.length; i++) {

      var taskEntry = new Task();

      const parsedTask = JSON.parse((JSON.stringify(finalData[i])));
      console.log(parsedTask);
      taskEntry.taskID = parsedTask.taskID;
      taskEntry.category = parsedTask.category;
      taskEntry.taskName = parsedTask.taskName
      taskEntry.dueDate = parsedTask.dueDate;
      taskEntry.location = parsedTask.location;
      taskEntry.status = parsedTask.status;
      taskEntry.taskDetails = parsedTask.taskDetails;

      console.log(taskEntry.location);

      taskList.push(taskEntry)

    }

    console.log(taskList);

    return taskList;

  }

  function essentialTasks(Tasks) {
    var str = "";
    var finalString = "";
    var preText = '<li><p style="color: #F1E0C5"><a class="tasklist" href="list.html"></a>'
    var postText = '</a><button onclick="window.location.href=\'EditTask\';">Update</button></p></li>'

    for(var i=0; i< Tasks.length; i++) {

        var t = Tasks[i];

        if (t.category === "Essential Tasks") {
        
            str = t.taskName + " ";
            finalString += preText + str + postText;

        }
    }

    return (<div dangerouslySetInnerHTML={{__html: finalString}} />);

  }

  function sideTasks(Tasks) {

    var str = "";
    var finalString = "";
    var preText = '<li><p style="color: #F1E0C5"><a class="tasklist" href="list.html"></a>'
    var postText = '</a><button onclick="window.location.href=\'EditTask\';">Update</button></p></li>'

    for(var i=0; i< Tasks.length; i++) {

        var t = Tasks[i];

        if (t.category === "Side Tasks") {
        
            str = t.taskName + " ";
            finalString += preText + str + postText;

        }
    }

    return (<div dangerouslySetInnerHTML={{__html: finalString}} />);

  }

  function miscellaneousTasks(Tasks) {

    var str = "";
    var finalString = "";
    var preText = '<li><p style="color: #F1E0C5"><a class="tasklist" href="list.html"></a>'
    var postText = '</a><button onclick="window.location.href=\'EditTask\';">Update</button></p></li>'

    for(var i=0; i< Tasks.length; i++) {

        var t = Tasks[i];

        if (t.category === "Miscellaneous Tasks") {
        
            str = t.taskName + " ";
            finalString += preText + str + postText;

        }
    }

    return (<div dangerouslySetInnerHTML={{__html: finalString}} />);

  }

  Tasks = tempOutput(finalData);

    return(

    <body>
        <header>
            <div class="innerHeader">
                <h1><img class="logo" src={logo} alt="rocketshiplogo"/> Florida Tech Space Network / My To Do List</h1>
                <div class="usernav">
                    <a class="usernav" href="list.html">Log-In</a>
                    <a class="usernav" href="list.html">Sign Up</a>
                </div>
            </div>
        </header>   

        <main>
        <Nav></Nav>

            
            <ul>
                <li class = "tasK_obj">Essential Tasks</li>
            </ul>
            <div class="subtask">
            <ul>
                {(essentialTasks(Tasks))}
            </ul>
            </div>

            <ul>
                <li class = "tasK_obj">Side Tasks<br/></li>
            </ul>
            <div class="subtask">
            <ul>
                {(sideTasks(Tasks))}
            </ul>
            </div>

            <ul>
                <li class = "tasK_obj">Miscellaneous Tasks<br/></li>
            </ul>
            <div class="subtask">
            <ul>
                {(miscellaneousTasks(Tasks))}
            </ul>
            </div>

        </main>

        <footer>
            <p><span>&copy;</span>2223 FTSN (Team 5) All Rights Reserved.
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Privacy Policy | Contact Emergency Services | Contact FTSN | FOIA | Suppliers
            </p>
        </footer>
    </body>

    );
}

export default List;
