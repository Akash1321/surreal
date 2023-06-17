import DpStyles from "./UserDp.module.css";

const UserDp = ({dpUrl, username}) => {

    return (
        <div className={DpStyles.dpContainer}>
            <img src={dpUrl} alt={username} className={DpStyles.image}/>
        </div>
    )
}

export {UserDp}