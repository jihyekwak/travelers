import { useState } from "react"
import * as PostService from "../../api/post.service"

export default function CommentForm() {

    const [body, setBody] = useState("");

    const handleSubmit = async () => {
        let newComment = { body }
        let res = await PostService.get().comments.push(newComment).then(() => {
            setBody("");
            console.log(newComment);
        })

        console.log(res)
        if (!res === 201) {
            alert(`Error! oh no! ot dope! it was code: ${res.satus}`)
        }
    }


    return (
        <div>
            <form>
            <label htmlFor="">
                    <input 
                        onChange = {(e) => setBody(e.target.value)}
                        value = {body}
                        type="text" 
                        name="body"
                        placeholder="leavea a Comment"
                        
                    />
                </label>
                <button onClick={handleSubmit}>Add comment</button>
            </form>
        </div>
    )
}