import { useUser } from "context/UserContext";
import {useParams} from "react-router-dom";
import { UserDetail } from "./components/UserDetail";
import { usePosts } from "context/PostsContext";
import { useEffect } from "react";
import { Post } from "components";

const Profile = () => {
    const {userName} = useParams();
    const {userState: {allUsers}} = useUser();
    const {handleGetUserPosts, state: {allUserPosts}} = usePosts();

    const userProfile = allUsers?.find(({username}) => username === userName);

    useEffect(() => {
        handleGetUserPosts(userName)
    }, [userName])

    return (
        <div className="content-container">
           <UserDetail {...userProfile} allUserPosts={allUserPosts}/>

           <ul className="flex-container feed">
                {allUserPosts?.map(postData => (
                    <Post key={postData._id} {...postData}/>
                ))}
            </ul>
        </div>
    )
}

export {Profile}