import StyleSearch from "./Search.module.css";
import { X } from "react-feather";
import { useUser } from "context/UserContext";
import { useState } from "react";
import {User} from "components";

const Search = ({ showSearch, setShowSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const {
    userState: { allUsers },
  } = useUser();
  const handleSearchView = () => {
    setShowSearch(false);
  };

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value.toLowerCase());
  };

//   const showUsers = allUsers?.filter(
//     ({ name, username }) =>
//       name.toLowerCase().includes(searchInput) ||
//       username.toLowerCase().includes(searchInput)
//   );

  const searchedUser = (() => {
    if(searchInput){
        return allUsers?.filter(
            ({ name, username }) =>
              name.toLowerCase().includes(searchInput) ||
              username.toLowerCase().includes(searchInput)
          );
    }else{
        return []
    }
  })()

  return (
    <div
      className={`${StyleSearch.container} ${
        showSearch ? `${StyleSearch.show}` : `${StyleSearch.hide}`
      }`}
    >
      <header className={StyleSearch.header}>
        <h2>Search User</h2>
        <X onClick={handleSearchView} />
      </header>

      <form className={StyleSearch.form}>
        <input
          type="text"
          placeholder="Search..."
          onChange={handleSearchInput}
        />
      </form>

      <ul className={StyleSearch.resultContainer}>
        {searchedUser?.map(user => (
            <li key={user._id}>
                <User {...user} dimensions={StyleSearch.dp}/>
                
            </li>
        ))}
      </ul>
    </div>
  );
};

export { Search };
