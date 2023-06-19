import { useAuth } from "context/AuthContext";

const Bookmarks = () => {
    const {handleUserLogout} = useAuth();
    return (
        <div className="content-container">
            <h2>Bookmark</h2>
        <button onClick={handleUserLogout}>logout</button>
        </div>
        
    )
};

export {Bookmarks}