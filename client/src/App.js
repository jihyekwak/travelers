import NavBar from "./components/NavBar";
import Home from "./pages/HomePage";
import Profile from "./pages/ProfilePage";
import Users from "./pages/UsersPage";
import {Routes, Route} from "react-router-dom";

export default function App() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="profile" element={<Profile />}></Route>
                <Route path="users" element={<Users />}></Route>
            </Routes>
        </div>
    );
}