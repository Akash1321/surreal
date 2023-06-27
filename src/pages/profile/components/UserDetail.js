import { UserDp } from "components";
import { useAuth } from "context/AuthContext";
import ProfileStyles from "pages/profile/Profile.module.css";
import { Settings } from "react-feather";
import { Link } from "react-router-dom";

const UserDetail = (details) => {
  const { dpUrl, username, name, bio, website, allUserPosts, followers, following } = details;
  const { userInfo } = useAuth();

  const checkUser = userInfo?.username === username;

  return (
    <>
      <div className={ProfileStyles.details}>
        <UserDp
          dpUrl={dpUrl}
          username={username}
          dimensions={ProfileStyles.dp}
        />

        <div className={ProfileStyles.header}>
          {checkUser ? (
            <>
              <button className={ProfileStyles.editProfile}>
                Edit Profile
              </button>
              <Settings />
            </>
          ) : (
            <button className={ProfileStyles.follow}>Follow</button>
          )}
        </div>

      </div>

      <div className={ProfileStyles.info}>

        <div>
          <p className={ProfileStyles.name}>{name}</p>
          <p className={ProfileStyles.username}>@{username}</p>
        </div>

        <p className={ProfileStyles.bio}>{bio}</p>
        <Link to={website}>{website}</Link>

      </div>

      <div className={ProfileStyles.detailHighlight}>
        <div>{allUserPosts?.length} <span>posts</span></div>
        <button>{followers?.length} <span>followers</span></button>
        <button>{following?.length} <span>following</span></button>
      </div>
    </>
  );
};

export { UserDetail };
