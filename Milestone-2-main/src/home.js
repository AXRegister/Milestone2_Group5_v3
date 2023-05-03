import './style.css';
import Nav from './Nav'
import logo from './rocketship.jpg'

function Home() {
    return(
<div>
<script src="script.js"></script> 

        
        <header>
            <div class="innerHeader">
                <h1><img class="logo" src={logo} alt="rocketshiplogo"/>  Florida Tech Space Network / Home Page</h1>
                <div class="usernav">
                    <a class="usernav" href="list.html">Log-In</a>
                    <a class="usernav" href="list.html">Sign Up</a>
                </div>
            </div>
        </header>

        <main>
            <Nav ></Nav>

            <div class="container">
                <p class="intro">
                    Have you ever wanted to explore the <span class="stars"> and discover what is out there?</span>
                </p>

                <p class="maintext">
                    So do we! We make it our mission to send our best and brightest students out into space to 
                    <span class="corpotalk"> out into the unknown reaches of the galaxy.</span><br/>
                    
                    In order to succeed in this endeavor, we have prepared a series of preset essential tasks to be completed 
                    in "My To Do List" before you can get out there and make humanity proud!<br/>

                    Once you complete the preset essential tasks, you can use this website to its full potential by creating <span class="lazycorpo"> you 
                    need to complete your day-to-day tasks in "Create New Task".
                    </span>
                </p>
            </div>

        </main>
        
        <footer>
            <p><span>&copy;</span>2223 FTSN (Team 5) All Rights Reserved.
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Privacy Policy | Contact Emergency Services | Contact FTSN | FOIA | Suppliers
            </p>
        </footer>
    </div>
);
}

export default Home;