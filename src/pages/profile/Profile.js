import { useUser } from "context/UserContext";
import {useParams} from "react-router-dom";
import { UserDetail } from "./components/UserDetail";
import { usePosts } from "context/PostsContext";
import { useEffect } from "react";

const Profile = () => {
    const {userName} = useParams();
    const {userState: {allUsers}} = useUser();
    const {handleGetUserPosts, state: {allUserPosts}} = usePosts();

    const userProfile = allUsers?.find(({username}) => username === userName);

    useEffect(() => {
        handleGetUserPosts(userName)
    }, [handleGetUserPosts, userName])

    console.log(userProfile);
    console.log(allUserPosts);
    return (
        <div className="content-container">
           <UserDetail {...userProfile}/>
        </div>
    )
}

export {Profile}