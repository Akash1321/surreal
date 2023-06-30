import { createContext, useContext, useEffect, useReducer } from "react";
import {
  editUserService,
  followUserService,
  getAllUsers,
  unfollowUserService,
} from "services/userServices";
import { useAuth } from "./AuthContext";

const UserContext = createContext();

const initials = {
  allUsers: [],
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "ALL_USERS":
      return { ...state, allUsers: action.payload };

    case "UPDATE_USER":
      return {
        ...state,
        allUsers: state.allUsers?.map((user) =>
          user._id === action.payload._id ? action.payload : user
        ),
      };

    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, initials);
  const { setUserInfo, token } = useAuth();

  const handleAllUsers = async () => {
    try {
      const {
        status,
        data: { users },
      } = await getAllUsers();
      if (status === 200) {
        userDispatch({ type: "ALL_USERS", payload: users });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleAllUsers();
  }, []);

  const handleEditUser = async (commentData) => {
    try{
      const {status, data: {user}} = await editUserService(commentData, token);

      if(status === 201){
        userDispatch({type: "UPDATE_USER", payload: user});
        setUserInfo(user);
      }

    }catch(error){
      console.log(error)
    }
  }

  const handleFollowUser = async (id) => {
    try {
      const {
        status,
        data: { user, followUser },
      } = await followUserService(id, token);

      if (status === 200) {

        setUserInfo(user);
        userDispatch({ type: "UPDATE_USER", payload: user });
        userDispatch({ type: "UPDATE_USER", payload: followUser });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnfollowUser = async (id) => {
    try {
      const {
        status,
        data: { user, followUser },
      } = await unfollowUserService(id, token);

      if (status === 200) {
        setUserInfo(user);
        userDispatch({ type: "UPDATE_USER", payload: user });
        userDispatch({ type: "UPDATE_USER", payload: followUser });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{ userState, handleEditUser ,handleFollowUser, handleUnfollowUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
