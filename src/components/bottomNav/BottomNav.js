import { Home, Compass, Bookmark, Search, Plus } from "react-feather";
import { NavLink } from "react-router-dom";

import NavStyles from "./BottomNav.module.css";
import { UserDp } from "components/userDp/UserDp";
import { useAuth } from "context/AuthContext";

const BottomNav = ({setShowCreatePost, showSearch, setShowSearch}) => {

  const {userInfo} = useAuth();
  const {dpUrl, username} = userInfo;

    const styleActive = ({ isActive }) =>
      isActive && !showSearch ? `${NavStyles.active}` : "";

    const handleShowSearch = () => {
        setShowSearch(prev => !prev);
      }
  
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
  
          <li className={`${NavStyles.listItem} ${showSearch ? `${NavStyles.itemActive}` : ``}`} onClick={handleShowSearch}>
            <Search className={NavStyles.icons} />
          </li>
  
          <li className={NavStyles.listItem}>
            <NavLink to="/bookmarks" className={styleActive}>
              <Bookmark className={NavStyles.icons} />
            </NavLink>
          </li>

          <li className={NavStyles.listItem}>
            <NavLink to={`/profile/${username}`} className={styleActive}>
              <UserDp dpUrl={dpUrl} username={username} dimensions={NavStyles.dp} className={NavStyles.icons} />
            </NavLink>
          </li>
        </ul>

        <button className={NavStyles.create} onClick={() => setShowCreatePost(true)}><Plus className={NavStyles.plus}/></button>
      </nav>
    );
  };
  
  export { BottomNav };