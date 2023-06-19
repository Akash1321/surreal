import PostStyles from "./Post.module.css";
import { PostHeader } from "./components/PostHeader";
import { PostInteraction } from "./components/PostInteraction";

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
  return (
    <li className={PostStyles.postContainer}>
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
