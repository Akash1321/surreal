import { Post, SortPosts } from "components";
import { useAuth } from "context/AuthContext";
import { usePosts } from "context/PostsContext";

const Home = () => {
  const {
    state: { allPosts, sortBy },
  } = usePosts();
  const {
    userInfo: { username, following },
  } = useAuth();

  const checkIsFollowing = (username) =>
    !!following?.find((user) => user.username === username);

  const userFeed = allPosts?.reduce((showPosts, post) => {
    if (checkIsFollowing(post.username) || post.username === username) {
      return [...showPosts, post];
    }

    return showPosts;
  }, []);

  const sortPosts =
    sortBy === "latest"
      ? userFeed.toSorted(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )
      : userFeed.toSorted((a, b) => b.likes.likeCount - a.likes.likeCount);

  return (
    <div className="content-container">
      <SortPosts />
      {sortPosts?.length > 0 ? (
        <ul className="flex-container feed">
        {sortPosts?.map((postData) => (
          <Post key={postData._id} {...postData} />
        ))}
      </ul>
      ) : <p className="empty-list">No Posts to show</p>}
    </div>
  );
};

export { Home };
