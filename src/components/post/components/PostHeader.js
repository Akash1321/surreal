import { UserDp } from "components/userDp/UserDp"
import { useUser } from "context/UserContext"
import PostStyles from "components/post/Post.module.css";
import { useAuth } from "context/AuthContext";
import { MoreHorizontal } from "react-feather";
import {useNavigate} from 'react-router-dom';
import { useState } from "react";
import { usePosts } from "context/PostsContext";

const PostHeader = ({id, username, createdAt, detail}) => {
    const [showMore, setShowMore] = useState(false);
    const {userInfo} = useAuth();
    const {userState: {allUsers}} = useUser();
    const {handleDeletePost} = usePosts();
    const navigate = useNavigate();

    const user = allUsers?.find(detail => detail.username === username) ?? {};
    const {name, dpUrl} = user;

    const event = new Date(createdAt)
    const timeOfPosting = event.toDateString().split(" ").slice(1, 4).join(" ")

    const checkProfile = userInfo?.username === username;

    const handleShowMore = (e) => {
        e.stopPropagation()
        setShowMore(prev => !prev)
    }

    const handleVisitProfile = (e) => {
        e.stopPropagation();
        navigate(`/profile/${username}`);
    }

    const handleDeleteClick = (e) => {
        e.stopPropagation();
        handleDeletePost(id);
    }

    return (
        <div className={PostStyles.header}>
            <UserDp username={username} dpUrl={dpUrl} dimensions={PostStyles.dp} onClick={handleVisitProfile}/>
            <div onClick={handleVisitProfile}>
                <p className={PostStyles.name}>{name}</p>
                <p className={PostStyles.username}>@{username}</p>
            </div>
            {!detail && <p className={PostStyles.time}>{timeOfPosting}</p>}
            {checkProfile && <button className={PostStyles.more} onClick={handleShowMore}><MoreHorizontal /></button>}
            {showMore && <div className={PostStyles.showMore}>
                <button>Edit</button>
                <button onClick={handleDeleteClick}>Delete</button>
                </div>}
        </div>
    )
}

export {PostHeader}