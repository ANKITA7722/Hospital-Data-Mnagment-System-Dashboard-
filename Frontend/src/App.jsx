// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./Layout";
// import AdminLogin from "./admin/adminLogin";
// import Dashboard from "./Dashboard/Dashboard";
// import UsersTable from "./Dashboard/UsersTable";
// import Header from "./Dashboard/Header";
// import Sidebar from "./Dashboard/Sidebar";
// import UserRegistration from "./component/Foms/UserRegistration";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Admin Login */}
//         <Route path="/" element={<AdminLogin />} />
        
//         <Route path="/dashboard" element={<Dashboard />} />
//         {/* Dashboard and nested components */}
//         <Route path="/userregistration" element={<UserRegistration />} />

//         {/* Optional: separate routes if you want to view these directly */}
//         <Route path="/usertable" element={<UsersTable />} />
//         <Route path="/header" element={<Header />} />
//         <Route path="/sidebar" element={<Sidebar />} />

//         {/* Fallback for 404 */}
//         <Route path="*" element={<p>Page Not Found</p>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components / Pages

import Dashboard from "./Dashboard/Dashboard";
import UserRegistration from "./component/Foms/UserRegistration";
import UsersTable from "./Dashboard/UsersTable";
// import Logout from "./components/Logout"; // ✅ ye file create karni hogi
import Sidebar from "./Dashboard/Sidebar";
// import Layout from "./Layout";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <Router>
      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

        {/* Main Content Area */}
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/userregistration" element={<UserRegistration />} />
            <Route path="/usertable" element={<UsersTable />} />
            {/* <Route path="/logout" element={<Logout />} /> */}
            <Route path="/" element={<Dashboard />} /> {/* Default Home */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

