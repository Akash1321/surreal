import { Post } from "components";
import { usePosts } from "context/PostsContext";

const Explore = () => {
    const {state} = usePosts();

    return (
        <div className="content-container">
            <h2>Explore</h2>

            <ul className="flex-container feed">
                {state?.allPosts?.map(postData => (
                    <Post key={postData._id} {...postData}/>
                ))}
            </ul>
        </div>
    )
};

export {Explore}