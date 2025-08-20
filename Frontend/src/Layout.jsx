import { Outlet } from "react-router-dom";
import UserRegistration from "./component/Foms/UserRegistration";
import AdminLogin from "./admin/adminLogin";




const Layout=()=>{
    return(
    <>
     <AdminLogin/>
     <UserRegistration/>
     <Outlet/>
    </>
    )

}
export default Layout;