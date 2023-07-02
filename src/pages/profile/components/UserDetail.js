import { UserDp } from "components";
import { useAuth } from "context/AuthContext";
import { useUser } from "context/UserContext";
import ProfileStyles from "pages/profile/Profile.module.css";
import { Settings } from "react-feather";
import { Link, useNavigate } from "react-router-dom";

const UserDetail = (details) => {
  const {
    dpUrl,
    username,
    name,
    bio,
    website,
    allUserPosts,
    followers,
    following,
    _id,
    setShowSettings
  } = details;
  const { userInfo } = useAuth();
  const { handleFollowUser, handleUnfollowUser } = useUser();
  const navigate = useNavigate();

  const checkUser = userInfo?.username === username;

  const handleFollowButton = () => {
    handleFollowUser(_id);
  };

  const handleUnfollowButton = () => {
    handleUnfollowUser(_id);
  };

  const handleEditProfile = () => {
    navigate("/editProfile")
  }

  const handleSettingsClick = () => {
    setShowSettings(true);
  }

  const isFollowing = !!userInfo?.following.find(user => user._id === _id);

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
              <button className={ProfileStyles.editProfile} onClick={handleEditProfile}>
                Edit Profile
              </button>
              <button className={ProfileStyles.settings} onClick={handleSettingsClick}><Settings /></button>
            </>
          ) : (
            <>
              {isFollowing ? (
                <button
                  className={ProfileStyles.unfollow}
                  onClick={handleUnfollowButton}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  className={ProfileStyles.follow}
                  onClick={handleFollowButton}
                >
                  Follow
                </button>
              )}
            </>
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
        <div>
          {allUserPosts?.length} <span>posts</span>
        </div>

        <button>
          {followers?.length} <span>followers</span>
        </button>

        <button>
          {following?.length} <span>following</span>
        </button>
      </div>
    </>
  );
};

export { UserDetail };
