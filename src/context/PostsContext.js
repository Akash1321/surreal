import { createContext, useContext, useEffect, useReducer } from "react";

import {
  addCommentService,
  bookmarkPostService,
  bookmarkRemoveService,
  deletePostService,
  dislikePostService,
  editPostService,
  getAllBookmarks,
  getAllPosts,
  getPostService,
  getUserPosts,
  likePostService,
  uploadPostService,
} from "services/postsServices";
import { useAuth } from "./AuthContext";

const PostsContext = createContext();

const initials = {
  allPosts: [],
  allBookmarks: [],
  allUserPosts: [],
  viewPost: {},
  sortBy: "latest",
};

const postsReducer = (state, action) => {
  switch (action.type) {
    case "ALL_POSTS":
      return { ...state, allPosts: action.payload };

    case "ALL_BOOKMARKS":
      return { ...state, allBookmarks: action.payload };

    case "SINGLE_POST":
      return { ...state, viewPost: action.payload };

    case "USER_POSTS":
      return {...state, allUserPosts: action.payload}

    case "CHANGE_SORT_BY":
      return {...state, sortBy: action.payload}

    default:
      return state;
  }
};

export const PostsProvider = ({ children }) => {
  const [state, postsDispatch] = useReducer(postsReducer, initials);
  const {token} = useAuth();

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

  const handleGetUserPosts = async (username) => {
    try{
      const {status, data : {posts}} = await getUserPosts(username);

      if(status === 200){
        postsDispatch({type: "USER_POSTS", payload: posts});
      }

    }catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    handleAllPosts();
    handleAllBookmarks();
  }, []);

  // get single post

  

  const handleGetPost = async (id) => {
    try {
      const {
        status,
        data: { post },
      } = await getPostService(id);

      if (status === 200) {
        postsDispatch({ type: "SINGLE_POST", payload: post });
      }
    } catch (error) {
      console.log(error);
    }
  };

  //upload post

  const handleUploadPost  = async (postData) => {
    try{
      const {status, data: {posts}} = await uploadPostService(postData, token);

      if(status === 201){
        postsDispatch({type: "ALL_POSTS", payload: posts});
      }

    }catch(error){
      console.log(error)
    }
  }

  //edot post

  const handleEditPost = async (postData, id) => {
    try{
      const {status, data: {posts}} = await editPostService(postData, id, token);

      if(status === 201){
        postsDispatch({type: "ALL_POSTS", payload: posts});
      }

    }catch(error){
      console.log(error)
    }
  }

  //delete post

  const handleDeletePost = async (id) => {
    try{
      const {status, data: {posts}} = await deletePostService(id, token);

      if(status === 201){
        postsDispatch({type: "ALL_POSTS", payload: posts})
      }

    }catch(error){
      console.log(error)
    }
  }

  //post interaction api calls

  const handlePostLike = async (id) => {
    try {
      const {
        status,
        data: { posts },
      } = await likePostService(id, token);

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
      } = await dislikePostService(id, token);

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
      } = await bookmarkPostService(id, token);

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
      } = await bookmarkRemoveService(id, token);

      if (status === 200) {
        postsDispatch({ type: "ALL_BOOKMARKS", payload: bookmarks });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddComment = async (id, comment) => {
    try{
      const {status, data: {posts}} = await addCommentService(id, comment, token);

      if(status === 201){
        postsDispatch({type: "ALL_POSTS", payload: posts})
      }
    }catch(error){
      console.log(error)
    }
  }

  
  return (
    <PostsContext.Provider
      value={{
        state,
        postsDispatch,
        handleGetUserPosts,
        handleGetPost,
        handleUploadPost,
        handleEditPost,
        handleDeletePost,
        handlePostLike,
        handlePostDislike,
        handlePostBookmark,
        handleRemoveBookmark,
        handleAddComment
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);
