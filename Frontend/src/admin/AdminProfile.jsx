// import React, { useState } from "react";
// import "../css/Admin/AdminProfile.css"; // CSS alag rakha hai

// const AdminProfile = ({ adminName, onLogout }) => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="admin-profile">
//       {/* Profile Image */}
//       <img
//         src="https://via.placeholder.com/40" // yaha apna admin ka photo URL de do
//         alt="Admin"
//         className="profile-img"
//         onClick={() => setOpen(!open)} // toggle dropdown
//       />

//       {/* Dropdown box */}
//       {open && (
//         <div className="profile-dropdown">
//           <div className="profile-name">{adminName}</div>
//           <button onClick={onLogout} className="logout-btn">
//             Logout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminProfile;

import React, { useState, useEffect, useRef } from "react";
import "../css/Admin/AdminProfile.css"; // CSS alag rakha hai


import {
  FaUser,
  FaCog,
  FaCalendarAlt,
  FaLifeRing,
  FaSignOutAlt,
} from "react-icons/fa";


const ProfileMenu = ({ adminName, onLogout }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="profile-container" ref={menuRef}>
      {/* Profile top */}
      <div className="profile-trigger" onClick={() => setOpen(!open)}>
        <img
          src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg"
        //   alt="Admin"
          className="profile-img"
        />
        <span className="profile-name">{adminName}</span>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="profile-dropdown">
          <div className="welcome">WELCOME!</div>
          <ul>
            <li>
              <FaUser className="icon" /> My Profile
            </li>
            <li>
              <FaCog className="icon" /> Settings
            </li>
            <li>
              <FaCalendarAlt className="icon" /> Activity
            </li>
            <li>
              <FaLifeRing className="icon" /> Support
            </li>
            <li onClick={onLogout} className="logout">
              <FaSignOutAlt className="icon" /> Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;

