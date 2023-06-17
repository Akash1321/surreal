import {createContext, useContext, useEffect, useReducer} from "react";

import { getAllPosts } from "services/postsServices";

const PostsContext = createContext();

const initials = {
    allPosts: []
}

const postsReducer = (state, action) => {
    switch(action.type){
        case "ALL_POSTS": 
        return {...state, allPosts: action.payload}

        default:
         return state

    }
}

export const PostsProvider = ({children}) => {

    const [state, postsDispatch] = useReducer(postsReducer, initials);

    const handleAllPosts = async () => {
        try{
            const {status, data: {posts}} = await getAllPosts();
            if(status === 200){
                postsDispatch({type: "ALL_POSTS", payload: posts});
                console.log(posts)
            }
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        handleAllPosts()
    }, [])

    return <PostsContext.Provider value={{state}}>
        {children}
    </PostsContext.Provider>
};

export const usePosts = () => useContext(PostsContext);
