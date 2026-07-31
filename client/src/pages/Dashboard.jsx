import "../style/dashboard.css";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";

function Dashboard(){

    return(

        <>

        <Navbar/>

        <div className="dashboard">

            <Sidebar/>

            <div className="dashboard-content">

                <h1>Dashboard</h1>

                <div className="cards">

                    <DashboardCard title="Projects" value="1"/>

                    <DashboardCard title="Tasks" value="1"/>

                    <DashboardCard title="Completed" value="0"/>

                    <DashboardCard title="Pending" value="1"/>

                </div>

            </div>

        </div>

        </>

    )

}

export default Dashboard;