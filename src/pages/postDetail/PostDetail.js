import {useParams} from "react-router-dom";

const PostDetail = () => {
    const {postId} = useParams();
    return (
    <div className="content-container">
        <h2>Post Detail</h2>
    </div>
    )
}

export {PostDetail}