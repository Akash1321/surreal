import { Heart, Bookmark, MessageCircle, Share2 } from "react-feather";
import PostStyles from "components/post/Post.module.css";
import { usePosts } from "context/PostsContext";
import { useAuth } from "context/AuthContext";

const PostInteraction = ({ likes, id }) => {
 
    const {handlePostLike, handlePostDislike, handlePostBookmark, handleRemoveBookmark ,state: {allBookmarks}} = usePosts();
    const {userInfo: {username}} = useAuth();

    const isLiked = (() => {
        const check = likes.likedBy.find(user => user.username === username);
        return !!check
    })()

    const isBookmarked = allBookmarks?.includes(id)
    

  const handleLikeButton = () => {
    if(isLiked){
        handlePostDislike(id)
    }else{
        handlePostLike(id)
    }
  };

  const handleBookmarkButton = () => {
    if(isBookmarked){
      handleRemoveBookmark(id)
    }else{
      handlePostBookmark(id)
    }
    
  }
  
  return (
    <div className={PostStyles.interact}>
      <button onClick={handleLikeButton}>
        <Heart className={`${PostStyles.icons} ${isLiked && PostStyles.liked}`} />
      </button>

      <button>
        <MessageCircle className={PostStyles.icons} />
      </button>

      <button>
        <Share2 className={PostStyles.icons} />
      </button>

      <button className={PostStyles.bookmark} onClick={handleBookmarkButton}>
        <Bookmark className={`${PostStyles.icons} ${isBookmarked && PostStyles.bookmarked}`} />
      </button>
    </div>
  );
};

export { PostInteraction };
