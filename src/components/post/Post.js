import { useState } from "react";
import PostStyles from "./Post.module.css";
import { PostHeader } from "./components/PostHeader";
import { PostInteraction } from "./components/PostInteraction";
import { useNavigate } from "react-router-dom";
import { usePosts } from "context/PostsContext";
import { FormInput } from "components/formInput/FormInput";
import { CreatePost } from "components/createPost/CreatePost";

const Post = ({
  _id,
  content,
  mediaUrl,
  likes,
  comments,
  username,
  createdAt,
  updatedAt,
}) => {
  const [addCommentView, setAddCommentView] = useState(false);
  const [showEditPost, setShowEditPost] = useState(false);

  const { handleAddComment } = usePosts();
  const navigate = useNavigate();

  const handlePostClick = () => {
    navigate(`/post/${_id}`);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const commentInput = form.comment.value;

    handleAddComment(_id, commentInput);
    form.reset()
  };

  const handleInputContainer = (e) => {
    e.stopPropagation();
  }

  const handleCommentPost =(e) => {
    e.stopPropagation();
  }

  return (
    <li className={PostStyles.postContainer} onClick={handlePostClick}>
      <PostHeader id={_id} username={username} createdAt={createdAt} setShowEditPost={setShowEditPost} />

      <div className={PostStyles.contentBox}>
        <p>{content}</p>
        {mediaUrl?.image && <img src={mediaUrl?.image} alt="user uploads" />}
        {mediaUrl?.video && (
          <video controls>
            <source src={mediaUrl?.video} />
          </video>
        )}
      </div>

      <PostInteraction id={_id} likes={likes} comments={comments} setAddCommentView={setAddCommentView}/>

      {addCommentView && (
        <form onSubmit={handleCommentSubmit} className={PostStyles.commentForm}>
        <div className={PostStyles.inputContainer} onClick={handleInputContainer}>
          <FormInput
            type="text"
            name="comment"
            placeholder="Add a comment..."
            required
            nolabel
          />
        </div>

        <button className={PostStyles.post} onClick={handleCommentPost}>POST</button>
      </form>
      )}

      {showEditPost && <CreatePost setShowCreatePost={setShowEditPost} id={_id} content={content} mediaUrl={mediaUrl} editPost/>}
    </li>
  );
};

export { Post };
