import axios from "axios";

const {token} = JSON.parse(localStorage.getItem("authStorage"));

//posts

const getAllPosts = () => {
    return axios.get("api/posts");
}

const getPostService = (id) => {
    return axios.get(`/api/posts/${id}`)
}

//likes

const likePostService = (id) => {
    return axios.post(`api/posts/like/${id}`,
    {},
    {
        headers: { "authorization" : token }
    } )
}

const dislikePostService = (id) => {
    return axios.post(`api/posts/dislike/${id}`,
    {},
    {
        headers: { "authorization" : token }
    } )
}

//bookmarks

const getAllBookmarks = () => {
    return axios.get("api/users/");
}

const bookmarkPostService = (id) => {
    return axios.post(`api/users/bookmark/${id}`,
    {},
    {
        headers: { "authorization" : token }
    } )
}

const bookmarkRemoveService = (id) => {
    return axios.post(`api/users/remove-bookmark/${id}`,
    {},
    {
        headers: { "authorization" : token }
    } )
}


export {getAllPosts, getPostService ,likePostService, dislikePostService, getAllBookmarks, bookmarkPostService, bookmarkRemoveService}