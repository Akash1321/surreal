import { UserDp } from "components/userDp/UserDp"
import { useUser } from "context/UserContext"
import PostStyles from "components/post/Post.module.css";
import { useAuth } from "context/AuthContext";
import { MoreHorizontal } from "react-feather";
import {useNavigate} from 'react-router-dom';

const PostHeader = ({username, createdAt, detail}) => {

    const {userInfo} = useAuth();
    const {userState: {allUsers}} = useUser();
    const navigate = useNavigate();

    const user = allUsers?.find(detail => detail.username === username) ?? {};
    const {name, dpUrl} = user;

    const event = new Date(createdAt)
    const timeOfPosting = event.toDateString().split(" ").slice(1, 4).join(" ")

    const checkProfile = userInfo?.username === username;

    const handleVisitProfile = (e) => {
        e.stopPropagation();
        navigate(`/profile/${username}`)
    }

    return (
        <div className={PostStyles.header}>
            <UserDp username={username} dpUrl={dpUrl} dimensions={PostStyles.dp} onClick={handleVisitProfile}/>
            <div onClick={handleVisitProfile}>
                <p className={PostStyles.name}>{name}</p>
                <p className={PostStyles.username}>@{username}</p>
            </div>
            {!detail && <p className={PostStyles.time}>{timeOfPosting}</p>}
            {checkProfile && <button className={PostStyles.more}><MoreHorizontal /></button>}
        </div>
    )
}

export {PostHeader}