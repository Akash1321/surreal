import "./App.css";
import { BottomNav, CreatePost, Sidebar, Search, Suggestion } from "components";
import { useAuth } from "context/AuthContext";
import AllRoutes from "Routes/AllRoutes";
import { useEffect, useState } from "react";
import {useLocation} from "react-router-dom";

function App() {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const { token } = useAuth();
  const location = useLocation();

  const onLocationChange = () =>{
    setShowSearch(false);
    window.scroll(0, 0);
  }

  useEffect(() => {
    onLocationChange()
  }, [location]);

  return (
    <div className="App">
      {token && (
        <>
          <Sidebar
            setShowCreatePost={setShowCreatePost}
            showSearch={showSearch}
            setShowSearch={setShowSearch}
          />
          <BottomNav
            setShowCreatePost={setShowCreatePost}
            showSearch={showSearch}
            setShowSearch={setShowSearch}
          />
          {showCreatePost && (
            <CreatePost setShowCreatePost={setShowCreatePost} />
          )}
          <Suggestion />
        </>
      )}

      <Search showSearch={showSearch} setShowSearch={setShowSearch} />
      <AllRoutes />
    </div>
  );
}

export default App;
