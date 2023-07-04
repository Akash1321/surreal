import StyleSort from "./SortPosts.module.css";
import { usePosts } from "context/PostsContext";

const SortPosts = () => {
  const { postsDispatch, state: {sortBy} } = usePosts();

  const handleSortBy = (e) => {
    postsDispatch({ type: "CHANGE_SORT_BY", payload: e.target.value });
  };

  return (
    <form className={StyleSort.form}>
      <label className={`${sortBy === "latest" && `${StyleSort.active}`}`}>
        <input
          type="radio"
          name="sortPosts"
          value="latest"
          checked={sortBy === "latest"}
          onChange={handleSortBy}
        />
        Latest
      </label>

      <label className={`${sortBy === "trending" && `${StyleSort.active}`}`}>
        <input
          type="radio"
          name="sortPosts"
          value="trending"
          checked={sortBy === "trending"}
          onChange={handleSortBy}
        />
        Trending
      </label>
    </form>
  );
};

export { SortPosts };
