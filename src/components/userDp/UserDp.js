import DpStyles from "./UserDp.module.css";

const UserDp = ({dpUrl, username, dimensions}) => {

    return (
        <div className={`${DpStyles.dpContainer} ${dimensions}`}>
            <img src={dpUrl} alt={username} className={DpStyles.image}/>
        </div>
    )
}

export {UserDp}