import axios from "axios";

const getAllUsers = () => {
    return axios.get("api/users");
}

export {getAllUsers}