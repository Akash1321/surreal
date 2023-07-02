import "./App.css";
import { BottomNav, CreatePost, Sidebar, Search } from "components";
import { useAuth } from "context/AuthContext";
import AllRoutes from "Routes/AllRoutes";
import { useState } from "react";

function App() {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const { token } = useAuth();
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
        </>
      )}

      <Search showSearch={showSearch} setShowSearch={setShowSearch} />
      <AllRoutes />
    </div>
  );
}

export default App;
