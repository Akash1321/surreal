import axios from "axios";

const loginService = (username, password) => axios.post("api/auth/login", { username, password });





export {loginService}