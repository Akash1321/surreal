import axios from "axios";

const userInfo = JSON.parse(localStorage.getItem("authStorage"));
const token = userInfo?.token || "";

//posts

const getAllPosts = () => {
  return axios.get("api/posts");
};

const getPostService = (id) => {
  return axios.get(`/api/posts/${id}`);
};

//userPosts

const getUserPosts = (username) => {
  return axios.get(`/posts/user/${username}`)
}


//likes

const likePostService = (id) => {
  return axios.post(
    `api/posts/like/${id}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

const dislikePostService = (id) => {
  return axios.post(
    `api/posts/dislike/${id}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

//bookmarks

const getAllBookmarks = () => {
  return axios.get("api/users/");
};

const bookmarkPostService = (id) => {
  return axios.post(
    `api/users/bookmark/${id}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

const bookmarkRemoveService = (id) => {
  return axios.post(
    `api/users/remove-bookmark/${id}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

// comments

const addCommentService = (id, commentData) => {
  return axios.post(
    `api/comments/add/${id}`,
    { commentData },
    {
      headers: { authorization: token },
    }
  );
};




export {
  getAllPosts,
  getUserPosts,
  getPostService,
  likePostService,
  dislikePostService,
  getAllBookmarks,
  bookmarkPostService,
  bookmarkRemoveService,
  addCommentService,
  
};
