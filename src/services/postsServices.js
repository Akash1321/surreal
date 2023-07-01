import axios from "axios";

//posts

const getAllPosts = () => {
  return axios.get("/api/posts");
};

const getPostService = (id) => {
  return axios.get(`/api/posts/${id}`);
};

//userPosts

const getUserPosts = (username) => {
  return axios.get(`/api/posts/user/${username}`)
}


//add Posts

const uploadPostService = (postData, token) => {
  return axios.post("/api/posts", 
  {postData},
  {
    headers: { authorization: token },
  }
  )
}

//likes

const likePostService = (id, token) => {
  return axios.post(
    `/api/posts/like/${id}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

const dislikePostService = (id, token) => {
  return axios.post(
    `/api/posts/dislike/${id}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

//bookmarks

const getAllBookmarks = () => {
  return axios.get("/api/users/");
};

const bookmarkPostService = (id, token) => {
  return axios.post(
    `/api/users/bookmark/${id}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

const bookmarkRemoveService = (id, token) => {
  return axios.post(
    `/api/users/remove-bookmark/${id}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

// comments

const addCommentService = (id, commentData, token) => {
  return axios.post(
    `/api/comments/add/${id}`,
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
  uploadPostService,
  likePostService,
  dislikePostService,
  getAllBookmarks,
  bookmarkPostService,
  bookmarkRemoveService,
  addCommentService,
  
};
