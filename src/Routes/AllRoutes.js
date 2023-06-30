import { Routes, Route } from "react-router-dom";

import {
  Bookmarks,
  Explore,
  Home,
  Login,
  PostDetail,
  Profile,
  EditProfile,
  Signup,

} from "pages";
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

      <Route
        path="/post/:postId"
        element={
          <RequiresAuth>
            <PostDetail />
          </RequiresAuth>
        }
      />

      <Route
        path="/profile/:userName"
        element={
          <RequiresAuth>
            <Profile />
          </RequiresAuth>
        }
      />

<Route
        path="/editProfile"
        element={
          <RequiresAuth>
            <EditProfile />
          </RequiresAuth>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
  );
};

export default AllRoutes;
