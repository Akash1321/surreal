import { createContext, useContext, useEffect, useReducer } from "react";

import {
  bookmarkPostService,
  bookmarkRemoveService,
  dislikePostService,
  getAllBookmarks,
  getAllPosts,
  likePostService,
} from "services/postsServices";

const PostsContext = createContext();

const initials = {
  allPosts: [],
  allBookmarks: [],
};

const postsReducer = (state, action) => {
  switch (action.type) {
    case "ALL_POSTS":
      return { ...state, allPosts: action.payload };

    case "ALL_BOOKMARKS":
      return { ...state, allBookmarks: action.payload };

    default:
      return state;
  }
};

export const PostsProvider = ({ children }) => {
  const [state, postsDispatch] = useReducer(postsReducer, initials);

  const handleAllPosts = async () => {
    try {
      const {
        status,
        data: { posts },
      } = await getAllPosts();
      if (status === 200) {
        postsDispatch({ type: "ALL_POSTS", payload: posts });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAllBookmarks = async () => {
    try {
      const {
        status,
        data: { bookmarks },
      } = await getAllBookmarks();

      if (status === 200) {
        postsDispatch({ type: "ALL_BOOKMARKS", payload: bookmarks });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleAllPosts();
    handleAllBookmarks();
  }, []);

  //post interaction api calls

  const handlePostLike = async (id) => {
    try {
      const {
        status,
        data: { posts },
      } = await likePostService(id);

      if (status === 201) {
        postsDispatch({ type: "ALL_POSTS", payload: posts });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePostDislike = async (id) => {
    try {
      const {
        status,
        data: { posts },
      } = await dislikePostService(id);

      if (status === 201) {
        postsDispatch({ type: "ALL_POSTS", payload: posts });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePostBookmark = async (id) => {
    try {
      const {
        status,
        data: { bookmarks },
      } = await bookmarkPostService(id);

      if (status === 200) {
        postsDispatch({ type: "ALL_BOOKMARKS", payload: bookmarks });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveBookmark = async (id) => {
    try {
      const {
        status,
        data: { bookmarks },
      } = await bookmarkRemoveService(id);

      if (status === 200) {
        postsDispatch({ type: "ALL_BOOKMARKS", payload: bookmarks });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PostsContext.Provider
      value={{
        state,
        handlePostLike,
        handlePostDislike,
        handlePostBookmark,
        handleRemoveBookmark,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);