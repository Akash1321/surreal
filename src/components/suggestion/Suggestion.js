import { useAuth } from "context/AuthContext";
import { useUser } from "context/UserContext";
import { User } from "components";
import StyleSuggestions from "./Suggestion.module.css";



const Suggestion = () => {
     const {userInfo} = useAuth();
     const {userState: {allUsers}} = useUser();

     const alreadyFollowing = userInfo?.following?.map(({username}) => username);
     const suggestions = allUsers?.filter(({username}) => !alreadyFollowing?.includes(username) && username !== userInfo?.username).slice(0, 4);
    
    return (
        <div className={StyleSuggestions.container}>
            <h2 className={StyleSuggestions.header}>Follow Suggestions</h2>
            <ul className={StyleSuggestions.list}>
                {suggestions?.map(user => (
                    <li key={user._id}>
                        <User {...user} dimensions={StyleSuggestions.dp}/>
                    </li>
                ))}
            </ul>


        </div>
    )
};

export {Suggestion}