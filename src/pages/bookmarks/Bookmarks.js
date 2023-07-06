import { Post } from "components";
import { usePosts } from "context/PostsContext";


const Bookmarks = () => {
    const {state: {allPosts, allBookmarks}} = usePosts();

    const bookmarkPosts = allPosts?.filter(({_id}) => allBookmarks?.includes(_id));
    
    return (
        <div className="content-container requires-top-padding">
            {bookmarkPosts.length > 0 ? (
                <ul className="flex-container feed">
                {bookmarkPosts?.map(postData => (
                    <Post key={postData._id} {...postData} />
                ))}
            </ul>
            ) : <p className="empty-list">No Bookmarks yet</p>}
        
        </div>
        
    )
};

export {Bookmarks}