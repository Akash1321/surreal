import { UserDp } from "components/userDp/UserDp"
import { useUser } from "context/UserContext"

const PostHeader = ({username, createdAt}) => {

    const {userState: {allUsers}} = useUser();

    const user = allUsers?.find(detail => detail.username === username) ?? {};
    const {_id, dpUrl} = user;

    console.log("allUsers", allUsers)
    return (
        <div>
            <UserDp username={username} dpUrl={dpUrl}/>
            <p>{username}</p>
            <p>{createdAt}</p>
        </div>
    )
}

export {PostHeader}