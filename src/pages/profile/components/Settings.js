import {Modal} from "components";
import ProfileStyles from "../Profile.module.css"
import { useAuth } from "context/AuthContext";


const Settings = ({setShowSettings}) => {
    const {handleUserLogout} = useAuth();
    return (
        <Modal setShowModal={setShowSettings}>
            <div className={ProfileStyles.settingContainer}>
            <h2>Settings</h2>
            <button className={ProfileStyles.settingButtons}>Change Theme</button>
            <button className={ProfileStyles.logout} onClick={handleUserLogout}>Logout</button>
            </div>
            
        </Modal>
    )
}

export {Settings}