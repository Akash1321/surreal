import {Modal, User} from "components";
import { useAuth } from "context/AuthContext";
import PorfileStyles from "../Profile.module.css";


const UserList = ({toShow, setShowUserList}) => {

    const {userInfo} = useAuth();
    
    const showList = userInfo[toShow];

    return (
        <Modal setShowModal={setShowUserList}>
            <div className={PorfileStyles.userList}>
                <h2 className={PorfileStyles.userListHeader}>{toShow}</h2>
                <ul className={PorfileStyles.userListContainer}>
                    {showList?.length > 0 ? (showList?.map(user => (
                        <li key={user._id} onClick={() => setShowUserList(false)}>
                            <User {...user} dimensions={PorfileStyles.userListDp}/>
                        </li>
                    ))) : <p className={PorfileStyles.emptyListInfo}>No {toShow} yet</p>}
                </ul>
            </div>
        </Modal>
    )
}

export {UserList}