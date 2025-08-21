// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Components / Pages
// import Dashboard from "./Dashboard/Dashboard";
// import UserRegistration from "./component/Foms/UserRegistration";
// import UsersTable from "./Dashboard/UsersTable";
// import Sidebar from "./Dashboard/Sidebar";
// import Layout from "./Layout"; // ✅ Corrected

// const App = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   const toggleSidebar = () => setIsOpen(!isOpen);

//   return (
//     <Router>
//       <div style={{ display: "flex" }}>
//         {/* Sidebar */}
//         <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

//         {/* Main Content Area */}
//         <div style={{ flex: 1, padding: "20px" }}>
//           <Routes>
//             <Route path="/" element={<Layout />} /> {/* Default Home */}
//             <Route index element={<Dashboard />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/userregistration" element={<UserRegistration />} />
//             <Route path="/usertable" element={<UsersTable />} />
//             {/* <Route path="/logout" element={<Logout />} /> */}
//             <Route path="*" element={<p>Page Not Found</p>} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components / Pages
import Dashboard from "./Dashboard/Dashboard";
import UserRegistration from "./component/Foms/UserRegistration";
import UsersTable from "./Dashboard/UsersTable";
import Layout from "./Layout"; // Layout includes Sidebar + Header + Outlet

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Layout as parent route */}
        <Route path="/" element={<Layout />}>
          {/* Default index route */}
          <Route index element={<Dashboard />} />
          {/* Other pages */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="userregistration" element={<UserRegistration />} />
          <Route path="usertable" element={<UsersTable />} />
          {/* Fallback */}
          <Route path="*" element={<p>Page Not Found</p>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

