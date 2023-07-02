
import './App.css';
import {BottomNav, CreatePost, Sidebar} from "components";
import { useAuth } from 'context/AuthContext';
import AllRoutes from 'Routes/AllRoutes';
import {useState} from "react";

function App() {
  const [showCreatePost, setShowCreatePost] = useState(false);

  const {token} = useAuth();
  return (
    <div className="App">

{token && (
        <>
        <Sidebar setShowCreatePost={setShowCreatePost}/>
        <BottomNav setShowCreatePost={setShowCreatePost}/>
        {showCreatePost && <CreatePost setShowCreatePost={setShowCreatePost}/>}
        </>
      )}

      <AllRoutes />

    </div>
  );
}

export default App;
