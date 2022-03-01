import {useState} from "react";
import * as userService from "../../api/user.service"

export default function RegisterForm() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        let newUser = {firstName, lastName, username, password};
        let res = await userService.create(newUser)
            .then(()=> {
                setFirstName("");
                setLastName("");
                setUsername("");
                setPassword("");
                console.log(newUser);
            })
            
            console.log(res);
            
            if (!res === 201) {
			alert(`ERROR! oh noes! not dope! it was code: ${res.status}`);
            }
    }


    return(
        <div>
            <h2>Register</h2>
            <form className="loginForm">
                <div className="formGroup">
                <label htmlFor="">First Name</label>
                <input 
                    onChange={(e)=> setFirstName(e.target.value)}
                    value={firstName}
                    type="text" 
                    name="firstName"
                    placeholder="First Name" />
                </div>
                <div className="formGroup">
                <label htmlFor="">Last Name</label>
                <input 
                    onChange={(e)=> setLastName(e.target.value)}
                    value={lastName}
                    type="text" 
                    name="lastName"
                    placeholder="Last Name" />
                </div>
                <div className="formGroup">
                <label>Username</label>
                <input 
                    onChange={(e)=> setUsername(e.target.value)}
                    value={username}
                    type="text" 
                    name="username"
                    placeholder="username" />
                    </div>
                    <div className="formGroup">
                <label>Password</label>
                <input 
                    onChange={(e)=> setPassword(e.target.value)}
                    value={password}
                    type="text" 
                    name="password"
                    placeholder="password" />
                    </div>
                <button className="loginBtn" onClick={handleSubmit}> Register </button>
            </form>
            
        </div>
    )
}