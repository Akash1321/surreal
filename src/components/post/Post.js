import PostStyles from "./Post.module.css";
import { PostHeader } from "./components/PostHeader";
import { PostInteraction } from "./components/PostInteraction";
import { useNavigate } from "react-router-dom";

const Post = ({
  _id,
  content,
  mediaURL: { image, video },
  likes,
  comments,
  username,
  createdAt,
  updatedAt,
}) => {

  const navigate = useNavigate();

  const handlePostClick = () => {
    navigate(`/post/${_id}`)
  }

  return (
    <li className={PostStyles.postContainer} onClick={handlePostClick}>
      <PostHeader username={username} createdAt={createdAt} />

      <div className={PostStyles.contentBox}>
        <p>{content}</p>
        {image && <img src={image} alt="user uploads" />}
        {video && <video controls><source src={video} /></video>}
      </div>

      <PostInteraction id={_id} likes={likes} comments={comments} />

    </li>
  );
};

export { Post };
