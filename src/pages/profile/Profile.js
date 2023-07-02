import { useEffect, useState } from "react";
import { useUser } from "context/UserContext";
import {useParams} from "react-router-dom";
import { UserDetail } from "./components/UserDetail";
import { usePosts } from "context/PostsContext";
import { Post } from "components";
import { Settings } from "./components/Settings";

const Profile = () => {
    const [showSettings, setShowSettings] = useState(false);
    const {userName} = useParams();
    const {userState: {allUsers}} = useUser();
    const {handleGetUserPosts, state: {allUserPosts}} = usePosts();

    const userProfile = allUsers?.find(({username}) => username === userName);

    useEffect(() => {
        handleGetUserPosts(userName)
    }, [userName])

    return (
        <div className="content-container">
           <UserDetail {...userProfile} allUserPosts={allUserPosts} setShowSettings={setShowSettings}/>

           <ul className="flex-container feed">
                {allUserPosts?.map(postData => (
                    <Post key={postData._id} {...postData}/>
                ))}
            </ul>
            {showSettings && <Settings setShowSettings={setShowSettings}/>}
        </div>
    )
}

export {Profile}