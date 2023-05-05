import './style.css'
import Nav from './Nav'
import logo from './rocketship.jpg'
import { Route } from 'react-router-dom';

function newTask() {
    let category = document.getElementById("category").value
    let taskName = document.getElementById("tname").value
    let taskDetails = document.getElementById("tinfo").value
    let dueDate = document.getElementById("ddate").value
    let location = document.getElementById("loc").value

    var newTask = 
      {
        "category": category,
        "taskName": taskName, 
        "taskDetails": taskDetails, 
        "dueDate": dueDate, 
        "location": location,
      }

    
    console.log(newTask)
    console.log(JSON.stringify(newTask))
}

function CreateNew() {
    return (

   <body>
        <header>
          <div class="innerHeader">
            <h1><img class="logo" src={logo} alt="rocketshiplogo"/> Florida Tech Space Network / Create New Task</h1>
            <div class="usernav">
              <a class="usernav" href="Login">Log-In</a>
              <a class="usernav" href="Signup">Sign Up</a>
          </div>
          </div>
        </header>
        
        <main>
        <Nav style={{display: 'block'}}></Nav>

            <div class="container">
                <form>
                
                <div class="row">
                    <div class="col-25">
                      <label for="category">Category</label>
                    </div>
                    <div class="col-75">
                      <select id="category" name="category">
                        <option value="Essential Tasks">Essential Tasks</option>
                        <option value="Side Tasks">Side Tasks</option>
                        <option value="Miscellaneous Tasks">Miscellaneous Tasks</option>
                      </select>
                    </div>
                </div>
                  
                <div class="row">
                    <div class="col-25">
                      <label for="tname">Task Name</label>
                    </div>
                    <div class="col-75">
                      <input type="text" id="tname" name="taskname" placeholder="Task Subject"/>
                    </div>
                </div>
              
              
                <div class="row">
                    <div class="col-25">
                      <label for="tinfo">Task Details</label>
                    </div>
                    <div class="col-75">
                      <textarea id="tinfo" name="taskinfo" placeholder="Add Extra Task Information Here"></textarea>
                    </div>
                </div>
                  
                <div class="row">
                    <div class="col-25">
                      <label for="ddate">Due Date</label>
                    </div>
                    <div class="col-75">
                      <input type="text" id="ddate" name="duedate" placeholder="Due Date"/>
                    </div>
                </div>
                  
                <div class="row">
                    <div class="col-25">
                      <label for="loc">Location</label>
                    </div>
                    <div class="col-75">
                      <input type="text" id="loc" name="location" placeholder="Task Location"/>
                    </div>
                </div>
                  
                <div class="row">
                    <button onClick={newTask}>Submit Task</button>
                    {/* <input type="submit" value="Add Task"/> */}
                </div>
                  
                </form>
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

export default CreateNew;