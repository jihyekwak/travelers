import PostForm from "../../components/PostForm";
import Post from "../../components/Post";
import ProfileCover from "../../components/ProfileCover";
import Profile from "../../components/Profile";
import "./styles.css"

export default function ProfilePage() {
    return(
        <div>
            <ProfileCover />
            <div className="profilePage">
            <div className="profileSection">
            <Profile />
            </div>
            <div className="postSection">
            <PostForm />
            <Post />
            <Post />
            </div>
            </div>
            
            
        </div>
    )
}