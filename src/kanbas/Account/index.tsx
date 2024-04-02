import { Routes, Route, Navigate } from "react-router-dom";
import Signin from "../../users/signin";
import Profile from "../../users/profile";
import UserTable from "../../users/table";
import Signup from "../../users/signup";
export default function Account() {
    return (
        <div className="container-fluid">
            <Routes>
                <Route path="/" element={<Navigate to="/Kanbas/Account/Profile" />} />
                <Route path="/Signin" element={<Signin />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Admin/Users" element={<UserTable />} />
            </Routes>
        </div>
    );
}
