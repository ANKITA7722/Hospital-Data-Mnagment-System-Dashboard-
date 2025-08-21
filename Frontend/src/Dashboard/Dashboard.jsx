import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import UsersTable from "./UsersTable";
import "../css/Dashboard/Dashboard.css";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const adminName = "Admin"; // You can make this dynamic

  useEffect(() => {
    // Fetch users from JSON
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  const handleLogout = () => {
    window.location.href = "/admin-login";
  };


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const ashokaCount = users.filter((u) => u.branch === "Ashoka Garden").length;
  const awadhCount = users.filter((u) => u.branch === "Awadh Puri").length;

  return (
    <div className="dashboard-container">
      {/* <button className="menu-btn" onClick={toggleSidebar}>
        ☰
      </button> */}
      {/* <Sidebar isOpen={isOpen} /> */}
      <div className="main-content">
        {/* <Header adminName={adminName} onLogout={handleLogout} /> */}
       
        <div className="dashboard-cards">
          <div className="card">Total Users: {users.length}</div>
          <div className="card">Ashoka Garden: {ashokaCount}</div>
          <div className="card">Awadh Puri: {awadhCount}</div>
          <div className="card">Messages Sent: 0</div>
        </div>

        <UsersTable users={users} />
        
      </div>
    </div>
  );
};

export default Dashboard;