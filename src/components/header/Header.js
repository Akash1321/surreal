import headerStyles from "./Header.module.css";
import { useAuth } from "context/AuthContext";

const Header = () => {

    const {handleUserLogout} =  useAuth();
    return (
        <header className={headerStyles.header}>
            <h2 style={{
                textAlign: "center",
                color: "blueviolet"
            }}>Surreal</h2>

            <button onClick={handleUserLogout}>logout</button>
        </header>
    )
}

export {Header} 