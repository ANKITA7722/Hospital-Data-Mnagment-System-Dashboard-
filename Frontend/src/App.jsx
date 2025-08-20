import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import AdminLogin from "./admin/adminLogin";
import Dashboard from "./Dashboard/Dashboard";
import UsersTable from "./Dashboard/UsersTable";
import Header from "./Dashboard/Header";
import Sidebar from "./Dashboard/Sidebar";
import UserRegistration from "./component/Foms/UserRegistration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin Login */}
        <Route path="/" element={<AdminLogin />} />
        
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Dashboard and nested components */}
        <Route path="/userregistration" element={<UserRegistration />} />

        {/* Optional: separate routes if you want to view these directly */}
        <Route path="/usertable" element={<UsersTable />} />
        <Route path="/header" element={<Header />} />
        <Route path="/sidebar" element={<Sidebar />} />

        {/* Fallback for 404 */}
        <Route path="*" element={<p>Page Not Found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
