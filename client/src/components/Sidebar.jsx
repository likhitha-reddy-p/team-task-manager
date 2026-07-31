import "../style/sidebar.css";
import { Link } from "react-router-dom";

function Sidebar(){

    return(

        <div className="sidebar">

            <h2>Menu</h2>

            <Link to="/dashboard">Dashboard</Link>

            <Link to="/projects">Projects</Link>

            <Link to="/tasks">Tasks</Link>

            <Link to="/create-project">Create Project</Link>

            <Link to="/create-task">Create Task</Link>

        </div>

    )

}

export default Sidebar;