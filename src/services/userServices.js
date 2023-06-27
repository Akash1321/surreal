import axios from "axios";

const getAllUsers = () => {
    return axios.get("/api/users");
}

const followUserService = (id, token) => {
    return axios.post(`/api/users/follow/${id}`,
    {},
    {
      headers: { authorization: token },
    })
}

const unfollowUserService = (id, token) => {
    return axios.post(`/api/users/unfollow/${id}`,
    {},
    {
      headers: { authorization: token },
    })
}


export {getAllUsers, followUserService, unfollowUserService}