import PostStyles from "./Post.module.css";
import { PostHeader } from "./components/PostHeader";

const Post  = ({_id, content, mediaUrl, likes, comments, username, createdAt, updatedAt}) => {
    return(
        <li className={PostStyles.postContainer}>
            <PostHeader username={username} createdAt={createdAt}/>
            {content}
        </li>
    )
}

export {Post};