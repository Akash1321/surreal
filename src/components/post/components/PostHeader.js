import { UserDp } from "components/userDp/UserDp"
import { useUser } from "context/UserContext"
import PostStyles from "components/post/Post.module.css";
import { useAuth } from "context/AuthContext";
import { MoreHorizontal } from "react-feather";

const PostHeader = ({username, createdAt}) => {

    const {userInfo} = useAuth();
    const {userState: {allUsers}} = useUser();

    const user = allUsers?.find(detail => detail.username === username) ?? {};
    const {_id, name, dpUrl} = user;

    const event = new Date(createdAt)
    const timeOfPosting = event.toDateString().split(" ").slice(1, 4).join(" ")

    const checkProfile = userInfo?.username === username;

    return (
        <div className={PostStyles.header}>
            <UserDp username={username} dpUrl={dpUrl} dimensions={PostStyles.dp}/>
            <div>
                <p className={PostStyles.name}>{name}</p>
                <p className={PostStyles.username}>@{username}</p>
            </div>
            <p className={PostStyles.time}>{timeOfPosting}</p>
            {checkProfile && <button className={PostStyles.more}><MoreHorizontal /></button>}
        </div>
    )
}

export {PostHeader}