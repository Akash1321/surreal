import { PageHeader, Post } from "components";
import { usePosts } from "context/PostsContext";

const Explore = () => {
    const {state} = usePosts();

    return (
        <div className="content-container">
            <PageHeader page="Explore"/>
            <ul className="flex-container feed ">
                {state?.allPosts?.map(postData => (
                    <Post key={postData._id} {...postData}/>
                ))}
            </ul>
        </div>
    )
};

export {Explore}