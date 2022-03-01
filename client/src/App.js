import NavBar from "./components/NavBar";
import Home from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import Users from "./pages/UsersPage";
import {Routes, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PostPage from "./pages/PostPage";

export default function App() {

    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="profile" element={<ProfilePage />}></Route>
                <Route path="users" element={<Users />}></Route>
                <Route path="login" element={<LoginPage />}></Route>
                <Route path="posts/:id" element={<PostPage />}></Route>
            </Routes>
        </div>
    );
}