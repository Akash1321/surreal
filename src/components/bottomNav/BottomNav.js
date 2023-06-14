import { Home, Compass, Bookmark, Search, Plus } from "react-feather";
import { NavLink } from "react-router-dom";

import NavStyles from "./BottomNav.module.css";

const BottomNav = () => {

    const styleActive = ({ isActive }) =>
      isActive ? `${NavStyles.active}` : "";
  
    return (
      <nav className={`flex-container ${NavStyles.bottomNav}`}>
        <ul className={NavStyles.list}>
          <li className={NavStyles.listItem}>
            <NavLink to="/" className={styleActive}>
              <Home className={NavStyles.icons} />
            </NavLink>
          </li>
  
          <li className={NavStyles.listItem}>
            <NavLink to="/explore" className={styleActive}>
              <Compass className={NavStyles.icons} />
            </NavLink>
          </li>
  
          <li className={NavStyles.listItem}>
            <Search className={NavStyles.icons} />
          </li>
  
          <li className={NavStyles.listItem}>
            <NavLink to="/bookmarks" className={styleActive}>
              <Bookmark className={NavStyles.icons} />
            </NavLink>
          </li>
        </ul>

        <button className={NavStyles.create}><Plus className={NavStyles.plus}/></button>
      </nav>
    );
  };
  
  export { BottomNav };