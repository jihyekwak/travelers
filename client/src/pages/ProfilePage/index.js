import PostForm from "../../components/PostForm";
import Post from "../../components/Post";
import ProfileCover from "../../components/ProfileCover";

export default function Profile() {
    return(
        <div>
            <ProfileCover />
            <PostForm />
            <Post />
            <Post />
        </div>
    )
}