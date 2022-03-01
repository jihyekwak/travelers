import Header from "../../components/Header";
import Post from "../../components/Post";
import * as PostService from "../../api/post.service";
import {useState, useEffect} from "react";
import "./styles.css"

function Home() {

    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        await PostService.getAll().then((res) => {
            setPosts(res.data.data.reverse())
        })
    }

    useEffect(()=> {
        fetchPosts();
    }, []);

    return (
        <div>
            <Header />
            <div className="posts">
            {posts.map(post => (
                <Post 
                    username={post.user}
                    body={post.body}
                    id={post._id}
                    comments={post.comments}
                    key={post._id}    
                />
            ))}
            </div>
            
        </div>
    );
}

export default Home;