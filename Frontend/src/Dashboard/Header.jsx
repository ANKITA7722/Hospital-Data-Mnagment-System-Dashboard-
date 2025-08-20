// import React from "react";
// import "../css/Dashboard/Dashboard.css";

// const Header = ({ adminName, onLogout }) => {
//   return (
//     <header className="dashboard-header">
//       <div className="logo">
//         <h2>Hospital Admin Dashboard</h2>
//       </div>

//       <div className="header-right">
//         <input
//           type="text"
//           placeholder="Search users..."
//           className="search-input"
//         />

//         <div className="admin-profile">
//           <span>{adminName}</span>
//           <button onClick={onLogout} className="logout-btn">
//             Logout
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
//==============================================================================

// import React from "react";
// import { FaBars, FaUserCircle } from "react-icons/fa";
// import "../css/Dashboard/Header.css";

// const Header = ({ adminName, onLogout, onToggleSidebar }) => {
//   return (
//     <header className="dashboard-header">
//       {/* Left: Logo & Toggle */}
//       <div className="header-left">
//         <button className="menu-toggle" onClick={onToggleSidebar}>
//           <FaBars />
//         </button>
//         <h2 className="logo">Hospital Admin</h2>
//       </div>

//       {/* Middle: Search */}
//       <div className="header-search">
//         <input type="text" placeholder="Search users..." />
//       </div>

//       {/* Right: Profile & Logout */}
//       <div className="header-right">
//         <div className="admin-profile">
//           <FaUserCircle className="profile-icon" />
//           <span className="admin-name">{adminName}</span>
//         </div>
//         <button onClick={onLogout} className="logout-btn">
//           Logout
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;

//================================================================

import React from "react";
import { FaBars } from "react-icons/fa";
import "../css/Dashboard/Header.css";
import AdminProfile from "../admin/AdminProfile";

const Header = ({ adminName, onLogout, onToggleSidebar }) => {
  return (
    <header className="dashboard-header">
      <div className="header-left">
        {/* Bars icon for mobile toggle */}
        <button className="menu-btn" onClick={onToggleSidebar}>
          <FaBars />
        </button>
        <h2 className="logo">Hospital Admin Dashboard</h2>
      </div>

      <div className="header-right">
        <input
          type="text"
          placeholder="Search users..."
          className="search-input"
        />

         <AdminProfile/> 

        {/* <div className="admin-profile">
          <AdminProfile/> 
          </div>  */}
          </div>
    
    </header>
  );
};

export default Header;



