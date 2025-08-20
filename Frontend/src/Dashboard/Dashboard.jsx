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
      <Sidebar isOpen={isOpen} />
      <div className="main-content">
        <Header adminName={adminName} onLogout={handleLogout} />
       
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

// import React, { useState } from "react";
// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import "../css/Dashboard/Dashboard.css";

// const Dashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);

//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

//   // const toggleSidebar = () => {
//   //   setIsSidebarOpen(!isSidebarOpen);
//   // };

//   const handleLogout = () => {
//     sessionStorage.removeItem("admin");
//     window.location.href = "/";
//   };

//   const admin = JSON.parse(sessionStorage.getItem("admin")) || { username: "Admin" };

//   // Dummy table data
//   const data = [
//     { id: 1, name: "John Doe", appointment: "General Checkup", date: "2025-08-18" },
//     { id: 2, name: "Jane Smith", appointment: "Dental", date: "2025-08-17" },
//     { id: 3, name: "Robert Brown", appointment: "ENT", date: "2025-08-15" },
//     { id: 4, name: "Emily Davis", appointment: "Cardiology", date: "2025-08-14" },
//     { id: 5, name: "Michael Wilson", appointment: "Orthopedic", date: "2025-08-13" },
//     { id: 6, name: "Sophia Taylor", appointment: "Dermatology", date: "2025-08-12" },
//     { id: 7, name: "David Miller", appointment: "Eye Checkup", date: "2025-08-11" },
//     { id: 8, name: "Olivia Johnson", appointment: "Physiotherapy", date: "2025-08-10" },
//   ];

//   const rowsPerPage = 4;
//   const indexOfLastRow = currentPage * rowsPerPage;
//   const indexOfFirstRow = indexOfLastRow - rowsPerPage;
//   const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

//   const totalPages = Math.ceil(data.length / rowsPerPage);

//   return (
    
//     <div className="dashboard-container">
//       <Sidebar isOpen={isSidebarOpen} />
//       <div className={`main-content ${isSidebarOpen ? "" : "expanded"}`}>
//         <Header
//           adminName={admin.username}
//           onLogout={handleLogout}
//           onToggleSidebar={toggleSidebar}
//         />

//         {/* Stats Cards */}
//         <div className="dashboard-cards">
//           <div className="card">Total Patients: 120</div>
//           <div className="card">Doctors: 25</div>
//           <div className="card">Appointments: 40</div>
//           <div className="card">Revenue: $12,000</div>
//         </div>

//         {/* Profile Section */}
//         <div className="profile-box">
//           <h3>Welcome, {admin.username}</h3>
//           <p>Manage your hospital dashboard efficiently with quick insights.</p>
//         </div>

//         {/* Table Section */}
//         <div className="table-container">
//           <h3>Recent Appointments</h3>
//           <table>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Patient Name</th>
//                 <th>Appointment</th>
//                 <th>Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentRows.map((row) => (
//                 <tr key={row.id}>
//                   <td>{row.id}</td>
//                   <td>{row.name}</td>
//                   <td>{row.appointment}</td>
//                   <td>{row.date}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Pagination */}
//           <div className="pagination">
//             <button
//               disabled={currentPage === 1}
//               onClick={() => setCurrentPage(currentPage - 1)}
//             >
//               Prev
//             </button>
//             <span>
//               Page {currentPage} of {totalPages}
//             </span>
//             <button
//               disabled={currentPage === totalPages}
//               onClick={() => setCurrentPage(currentPage + 1)}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



