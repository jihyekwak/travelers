import Header from "../../components/Header";
import PostForm from "../../components/PostForm";
import Post from "../../components/Post";

function Home() {
    return (
        <div>
            <Header />
            <PostForm />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default Home;