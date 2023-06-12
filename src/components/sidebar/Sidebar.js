import { Home, Compass, Bookmark, Search } from "react-feather";
import { NavLink } from "react-router-dom";

import SidebarStyles from "./Sidebar.module.css"

const Sidebar = () => {
  return (
    <nav className={`flex-container ${SidebarStyles.sidebar}`}>
      <ul>
        <li className={SidebarStyles.listItem}>
          <NavLink>
            <Home className={SidebarStyles.icons}/> Home
          </NavLink>
        </li>

        <li className={SidebarStyles.listItem}>
          <NavLink>
            <Compass className={SidebarStyles.icons}/> Explore
          </NavLink>
        </li>

        <li className={SidebarStyles.listItem} >
          <Search className={SidebarStyles.icons}/> Search
        </li>

        <li className={SidebarStyles.listItem}>
          <NavLink>
            <Bookmark className={SidebarStyles.icons}/> Bookmark
          </NavLink>
        </li>

      </ul>

      <button className={SidebarStyles.create}>Create Post</button>
    </nav>
  );
};

export { Sidebar };
