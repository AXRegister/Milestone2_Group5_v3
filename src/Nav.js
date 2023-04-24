import {Link} from "react-router-dom";
import './style.css';
const Nav = () =>{
    return (
        <div style={{"list-style-type": "none", margin: 0, padding: 0, overflow: "hidden", 'background-color': "#2b2826"}}>
            <nav>
                <Link to="/" style={{float: 'left', color: 'white', 'text-align': 'center', padding: '14px 16px', 'text-decoration': 'none'}}> Home Page
                </Link>
                <Link to="/List" style={{float: 'left', color: 'white', 'text-align': 'center', padding: '14px 16px', 'text-decoration': 'none'}}> My To Do List
                </Link>
                <Link to="/Detail" style={{float: 'left', color: 'white', 'text-align': 'center', padding: '14px 16px', 'text-decoration': 'none'}}> View Task Detail
                </Link>
                <Link to="/CreateNew" style={{float: 'left', color: 'white', 'text-align': 'center', padding: '14px 16px', 'text-decoration': 'none'}}> Create New Task
                </Link>
            </nav>      
            

        </div>

    );
};

export default Nav;