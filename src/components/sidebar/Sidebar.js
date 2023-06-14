import { Home, Compass, Bookmark, Search } from "react-feather";
import { NavLink } from "react-router-dom";

import SidebarStyles from "./Sidebar.module.css";

const Sidebar = () => {

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
      </ul>

      <button className={SidebarStyles.create}>Create Post</button>
    </nav>
  );
};

export { Sidebar };
