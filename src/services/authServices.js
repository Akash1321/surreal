import axios from "axios";

const loginService = (username, password) => axios.post("api/auth/login", { username, password });

const signupService = (name, username, password) => axios.post("api/auth/signup", { name, username, password})





export {loginService, signupService}