import "./styles.css"
import {NavLink} from "react-router-dom";

export default function NavBar() {
    return(
        <div className="navBar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/users">Users</NavLink>
        </div>
    )
}