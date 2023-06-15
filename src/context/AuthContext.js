import { createContext, useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { loginService } from "services/authServices";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const authDetails = JSON.parse(localStorage.getItem("authStorage"));
    const [token, setToken] = useState(authDetails?.token);
    const [userInfo, setUserInfo] = useState(authDetails?.userInfo);

    const navigate = useNavigate();

    const handleUserLogin = async (username, password) => {
        try {
            const {
                status,
                data: { foundUser, encodedToken },
            } = await loginService(username, password);

            if (status === 200) {
                localStorage.setItem(
                    "authStorage", JSON.stringify({ userInfo: foundUser, token: encodedToken })
                );
                setToken(encodedToken);
                setUserInfo(foundUser);
                navigate("/")
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleUserLogout = () => {
        localStorage.removeItem("authStorage");
        setToken(null);
        setUserInfo(null);
    }

    return (
        <AuthContext.Provider value={{ token, userInfo, handleUserLogin, handleUserLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
