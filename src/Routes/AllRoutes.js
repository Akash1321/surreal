import { Routes, Route } from "react-router-dom";

import { Bookmarks, Explore, Home, Login } from "pages";
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
        </Routes>
    );
};

export default AllRoutes;
