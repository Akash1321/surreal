import { createContext, useState, useContext } from "react";

import { loginService } from "services/authServices";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const authDetails = JSON.parse(localStorage.getItem("authStorage"));

    const [token, setToken] = useState(authDetails?.token);
    const [userInfo, setUserInfo] = useState(authDetails?.userInfo);

    const handleUserLogin = async (username, password) => {
        try {
            const {
                status,
                data: { foundUser, encodedToken },
            } = await loginService(username, password);

            if (status === 200) {
                localStorage.setItem(
                    JSON.stringify({ userInfo: foundUser, token: encodedToken })
                );
                setToken(encodedToken);
                setUserInfo(foundUser);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AuthContext.Provider value={{ token, userInfo, handleUserLogin }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
