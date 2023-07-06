import { Post } from "components";
import { usePosts } from "context/PostsContext";

const Explore = () => {
    const {state} = usePosts();

    return (
        <div className="content-container">
            <ul className="flex-container feed requires-top-padding">
                {state?.allPosts?.map(postData => (
                    <Post key={postData._id} {...postData}/>
                ))}
            </ul>
        </div>
    )
};

export {Explore}