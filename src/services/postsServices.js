import axios from "axios";

const getAllPosts = () => {
    return axios.get("api/posts");
}

const getAllUsers = () => {
    return axios.get("api/users");
}


export {getAllPosts, getAllUsers}