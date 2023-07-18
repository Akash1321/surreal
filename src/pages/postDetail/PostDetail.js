import { PageHeader, Post } from "components";
import { PostHeader } from "components/post/components/PostHeader";
import { usePosts } from "context/PostsContext";
import DetailStyles from "pages/postDetail/PostDetail.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const PostDetail = () => {
  const {postId} = useParams();
  const {
    state: { viewPost }, handleGetPost,
  } = usePosts();

  useEffect(() => {
    handleGetPost(postId)
  }, [postId])

  const { likes, comments } = viewPost ?? {};

  const isEmpty = comments?.length < 1;

  return (
    <div className="content-container">

      <PageHeader page="Post Detail"/>
      
      <Post {...viewPost} />

      <div className={DetailStyles.interactionInfo}>
        <p>{likes?.likeCount} Likes</p>
        {" | "}
        <p>{comments?.length} Comments</p>
      </div>
      
      <div className={DetailStyles.commentsContainer}>
        <h2 className={DetailStyles.commentHead}>{isEmpty ? "No Comments Yet" : "Comments" }</h2>
        <ul>
          {comments?.map((comment) => (
            <li key={comment._id} className={DetailStyles.comments}>
              <PostHeader username={comment.username} detail />
              <p>{comment.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { PostDetail };
