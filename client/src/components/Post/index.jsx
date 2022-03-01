import "./styles.css"
import Like from "../Like"
import { Link } from "react-router-dom"
import CommentForm from "../CommentForm"

export default function Post(props) {

    return (
        <div className="post">
            <h3>User</h3>
            <p>{props.username}</p>
            <p>{props.body}</p>
            <div className="inPostBtns">
            <Like />
            <Link to={`/posts/${props.id}`}>Comments</Link>
            </div>
            <h4>Comments</h4>
            {/* {props.comments.map(comment => (
                <p key={comment._id}>{comment.body}</p>
            ))} */}
            <CommentForm />
            
        </div>
    )
}