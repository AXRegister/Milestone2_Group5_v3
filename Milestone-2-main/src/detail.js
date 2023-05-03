import './style.css'
import Nav from './Nav'
import logo from './rocketship.jpg'
function Detail() {
    return (
    <body>
      <header>
        <div class="innerHeader">
            <h1><img class="logo" src={logo} alt="rocketshiplogo"/>  Florida Tech Space Network / View Task Detail</h1>
            <div class="usernav">
              <a class="usernav" href="list.html">Log-In</a>
              <a class="usernav" href="list.html">Sign Up</a>
          </div>
        </div>
    </header>
        <main>
            <Nav></Nav>
            <div class="container">
                <form action="detail.html">
                
                <div class="row">
                    <div class="col-25">
                      <label for="category">Category</label>
                      <input style={{display:"none"}} id="category"/>
                    </div>
                    <div class="col-75">
                      <label for="categoryCon">Essential Tasks</label>
                      <input style={{display:"none"}} id="categoryCon"/>
                    </div>
                </div>
                  
                <div class="row">
                    <div class="col-25">
                      <label for="tname">Task Name</label>
                      <input style={{display:"none"}} id="tname"/>
                    </div>
                    <div class="col-75">
                      <label for="tnameCon">Attend Classes</label>
                      <input style={{display:"none"}} id="tnameCon"/>
                    </div>
                </div>
              
              
                <div class="row">
                    <div class="col-25">
                      <label for="tinfo">Task Details</label>
                      <input style={{display:"none"}} id="tinfo"/>
                    </div>
                    <div class="col-75">
                      <label for="tinfoCon">
                        These classes are an important series of rigorous, yet enriching, courses that require your 
                        full attention. They may seem trivial, but they are essential for you to survive and thrive in the galaxy.<br/>
                      </label>
                      <input style={{display:"none"}} id="tinfoCon"/>
                    </div>
                </div>
                  
                <div class="row">
                    <div class="col-25">
                      <label for="ddate">Due Date</label>
                      <input style={{display:"none"}} id="ddate"/>
                    </div>
                    <div class="col-75">
                      <label for="ddateCon">Until Graduation</label>
                      <input style={{display:"none"}} id="ddateCon"/>
                    </div>
                </div>

                <div class="row">
                  <div class="col-25">
                    <label for="stat">Status</label>
                    <input style={{display:"none"}} id="stat"/>
                  </div>
                  <div class="col-75">
                    <label for="statCon">In-Progress</label>
                    <input style={{display:"none"}} id="statCon"/>
                  </div>
                </div>
                  
                <div class="row">
                    <div class="col-25">
                      <label for="loc">Location</label>
                      <input style={{display:"none"}} id="loc"/>
                    </div>
                    <div class="col-75">
                      <label for="locCon">Melbourne, Florida, Earth</label>
                      <input style={{display:"none"}} id="locCon"/>
                    </div>
                </div>
                  
                <div class="row">
                  <input type="submit" value="Edit Task"/>
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

export default Detail;