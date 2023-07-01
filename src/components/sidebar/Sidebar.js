import { Home, Compass, Bookmark, Search } from "react-feather";
import { NavLink } from "react-router-dom";

import SidebarStyles from "./Sidebar.module.css";
import { UserDp } from "components/userDp/UserDp";
import { useAuth } from "context/AuthContext";

const Sidebar = ({setShowCreatePost}) => {
  const { userInfo } = useAuth();
  const { dpUrl, username } = userInfo;

  const styleActive = ({ isActive }) =>
    isActive ? `${SidebarStyles.active}` : "";

  return (
    <nav className={`flex-container ${SidebarStyles.sidebar}`}>
      <ul>
        <li className={SidebarStyles.listItem}>
          <NavLink to="/" className={styleActive}>
            <Home className={SidebarStyles.icons} /> Home
          </NavLink>
        </li>

        <li className={SidebarStyles.listItem}>
          <NavLink to="/explore" className={styleActive}>
            <Compass className={SidebarStyles.icons} /> Explore
          </NavLink>
        </li>

        <li className={SidebarStyles.listItem}>
          <Search className={SidebarStyles.icons} /> Search
        </li>

        <li className={SidebarStyles.listItem}>
          <NavLink to="/bookmarks" className={styleActive}>
            <Bookmark className={SidebarStyles.icons} /> Bookmark
          </NavLink>
        </li>

        <li className={SidebarStyles.listItem}>
          <NavLink to={`/profile/${username}`} className={styleActive}>
            <UserDp
              dpUrl={dpUrl}
              username={username}
              dimensions={SidebarStyles.dp}
              className={SidebarStyles.icons}
            />{" "}
            Profile
          </NavLink>
        </li>
      </ul>

      <button className={SidebarStyles.create} onClick={() => setShowCreatePost(true)}>Create Post</button>
    </nav>
  );
};

export { Sidebar };
