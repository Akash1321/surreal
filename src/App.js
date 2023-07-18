import "./App.css";
import { BottomNav, CreatePost, Sidebar, Search, Suggestion } from "components";
import { useAuth } from "context/AuthContext";
import AllRoutes from "Routes/AllRoutes";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const { token } = useAuth();
  const location = useLocation();

  const onLocationChange = () => {
    setShowSearch(false);
    window.scroll(0, 0);
  };

  useEffect(() => {
    onLocationChange();
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

      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 1000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 2000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </div>
  );
}

export default App;
