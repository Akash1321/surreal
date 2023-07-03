import {UserDp} from "components"
import StyleUser from "./User.module.css";
import { useAuth } from "context/AuthContext";
import { Link } from "react-router-dom";
import { useUser } from "context/UserContext";

const User = (detail) => {
    const {_id, name, username, dpUrl, dimensions} = detail;
    const {userInfo} = useAuth();
    const { handleFollowUser, handleUnfollowUser } = useUser();

    const isUserLoggedIn = userInfo?._id !== _id;
    const isFollowing = !!userInfo?.following.find(user => user._id === _id);


    const handleFollowButton = (e) => {
        e.stopPropagation()
        handleFollowUser(_id);
      };
    
      const handleUnfollowButton = (e) => {
        e.stopPropagation()
        handleUnfollowUser(_id);
      };

    return (
        <div className={StyleUser.container}>
            <Link to={`/profile/${username}`} className={StyleUser.link}>
            <UserDp dpUrl={dpUrl} username={username} dimensions={dimensions}/>
            <div>
                <p className={StyleUser.name}>{name}</p>
                <p className={StyleUser.username}>@{username}</p>
            </div>
            </Link>

            {isUserLoggedIn && (
                <>
                {isFollowing ? <button className={StyleUser.unfollow} onClick={handleUnfollowButton}>Unfollow</button> : <button className={StyleUser.unfollow} onClick={handleFollowButton}>Follow</button>}
                </>
            )}
          
        </div>
    )
}

export {User}