import {createContext, useContext, useEffect, useReducer} from "react";
import { getAllUsers } from "services/userServices";

const UserContext = createContext();

const initials = {
    allUsers: []
};

const userReducer = (state, action) => {
   switch(action.type){
    case "ALL_USERS":
      return {...state, allUsers: action.payload}



    default: 
      return state
   }
}

export const UserProvider = ({children}) => {

    const [userState, userDispatch] = useReducer(userReducer, initials);

    const handleAllUsers = async () => {
        try{
            const {status, data: {users}} = await getAllUsers();
            if(status === 200){
                userDispatch({type: "ALL_USERS", payload: users});
                console.log(users)
            }
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        handleAllUsers()
    }, [])

    return (
        <UserContext.Provider value={{userState}}>
            {children}
        </UserContext.Provider>
    )
}


export const useUser = () => useContext(UserContext);