import { Routes, Route } from "react-router-dom";

import { Bookmarks, Explore, Home, Login, PostDetail, Profile, Signup } from "pages";
import RequiresAuth from "./RequiresAuth";

const AllRoutes = () => {
    return (
        <Routes>

            <Route
                path="/"
                element={
                    <RequiresAuth>
                        <Home /> 
                    </RequiresAuth>
                }
            />

            <Route
                path="/explore"
                element={
                    <RequiresAuth>
                        <Explore />
                    </RequiresAuth>
                }
            />

            <Route
                path="/bookmarks"
                element={
                    <RequiresAuth>
                        <Bookmarks />
                    </RequiresAuth>
                }
            />
            
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/post/:postId" element={<PostDetail />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
};

export default AllRoutes;
