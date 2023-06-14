import { Bookmarks, Explore, Home } from "pages";
import {Routes, Route} from "react-router-dom";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/explore" element={<Explore/>}/>
            <Route path="/bookmarks" element={<Bookmarks/>}/>


        </Routes>
    )
}

export default AllRoutes;