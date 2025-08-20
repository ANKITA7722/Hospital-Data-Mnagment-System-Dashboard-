// import React from "react";
// import { Link } from "react-router-dom";
// import "../css/Sidebar.css"

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <h2>Hospital Dashboard</h2>
//       <ul>
//         <li><Link to="/dashboard">Dashboard</Link></li>
//         <li><Link to="/users">Users Data</Link></li>
//         <li><Link to="/admin-login">Login</Link></li>
//         <li><Link to="/userregistration">Registration</Link></li>
//         <li><Link to="/logout">Logout</Link></li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

//============================================================
// import React from "react";
// import { Link } from "react-router-dom";
// import "../css/Sidebar.css"

// const Sidebar = ({ isOpen, onClose }) => {
//   return (
//     <div className={`sidebar ${isOpen ? "open" : ""}`}>
//       <h2>Hospital Dashboard</h2>
//       <ul>
//         <li><Link to="/dashboard" onClick={onClose}>Dashboard</Link></li>
//         <li><Link to="/users" onClick={onClose}>Users Data</Link></li>
//         <li><Link to="/admin-login" onClick={onClose}>Login</Link></li>
//         <li><Link to="/userregistration" onClick={onClose}>Registration</Link></li>
//         <li><Link to="/logout" onClick={onClose}>Logout</Link></li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
//=========================================================

import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // bars icon
import "../css/Sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      {/* Header with Bars Icon */}
      <div className="sidebar-header">
        <h2>Hospital Dashboard</h2>
        <button className="menu-btn" onClick={toggleSidebar}>
          <FaBars />
        </button>
      </div>

      {/* Sidebar Links */}
      <ul>
        <li><Link to="/dashboard" onClick={toggleSidebar}>Dashboard</Link></li>
        <li><Link to="/users" onClick={toggleSidebar}>Users Data</Link></li>
        <li><Link to="/admin-login" onClick={toggleSidebar}>Login</Link></li>
        <li><Link to="/userregistration" onClick={toggleSidebar}>Registration</Link></li>
        <li><Link to="/logout" onClick={toggleSidebar}>Logout</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;

