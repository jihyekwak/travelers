import { useEffect, useState } from "react";
import * as UserService from "../../api/user.service";
import User from "../../components/User";
import "./styles.css"

export default function Users() {

    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        await UserService.getAll().then((res) => {
            setUsers(res.data.data)
        })
    }

    useEffect(()=> {
        fetchUsers();
    }, []);


    return(
        <>
        <h1>Users</h1>
        <div className="usersPage">
            {users.map((user)=> {
                return(
                    <User
                        avatar={user.avatar}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        username={user.username}
                        key={user._id}
                    />
                )
            })}
        </div>
        </>
        
    )
}