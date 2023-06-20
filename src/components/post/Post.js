import { useState } from "react";
import PostStyles from "./Post.module.css";
import { PostHeader } from "./components/PostHeader";
import { PostInteraction } from "./components/PostInteraction";
import { useNavigate } from "react-router-dom";
import { usePosts } from "context/PostsContext";
import { FormInput } from "components/formInput/FormInput";

const Post = ({
  _id,
  content,
  mediaURL,
  likes,
  comments,
  username,
  createdAt,
  updatedAt,
}) => {
  const [addCommentView, setAddCommentView] = useState(false);

  const { handleGetPost, handleAddComment } = usePosts();
  const navigate = useNavigate();

  const handlePostClick = () => {
    navigate(`/post/${_id}`);
    handleGetPost(_id);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const commentInput = form.comment.value;
    console.log(commentInput);

    handleAddComment(_id, commentInput)
  };

  const handleInputContainer = (e) => {
    e.stopPropagation();
  }

  const handleCommentPost =(e) => {
    e.stopPropagation();
  }

  return (
    <li className={PostStyles.postContainer} onClick={handlePostClick}>
      <PostHeader username={username} createdAt={createdAt} />

      <div className={PostStyles.contentBox}>
        <p>{content}</p>
        {mediaURL?.image && <img src={mediaURL?.image} alt="user uploads" />}
        {mediaURL?.video && (
          <video controls>
            <source src={mediaURL?.video} />
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

    </li>
  );
};

export { Post };
