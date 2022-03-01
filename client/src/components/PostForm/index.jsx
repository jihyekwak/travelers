import "./styles.css"
import {useState, useEffect} from "react";
import * as PostService from "../../api/post.service"
import * as UserService from "../../api/user.service"

export default function PostForm() {

    const [body, setBody] = useState("");

    const handleSubmit = async () => {
        let newPost = { body, user }
        let res = await PostService.create(newPost).then(() => {
            setBody("");
            setUser("")
        })
        console.log(res)

        if (!res ===201) {
            alert(`Error ${res.status}`)
        } 
    }

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState("")
    

        const fetchUsers = async () => {
            await UserService.getAll().then((res) => {
                setUsers(res.data.data)
            })
        }
    
        useEffect(()=> {
            fetchUsers();
        }, []);


    return(
        <div className="postForm">
            <form>
                <textarea 
                    onChange={(e)=> setBody(e.target.value)}
                    value={body}
                    type="text"
                    name="body"
                    placeholder="Create Post"/>
                    <select value={user} onChange={(e)=>setUser(e.target.value)}>
                        <option>Select User</option>
                        {users.map((user, index) => (
                            <option
                                key={index}
                                value={user._id}>{user.username}</option>
                        ))}
                    </select>
                <button onClick={handleSubmit}>Add Post</button>
            </form>
        </div>
    )
}