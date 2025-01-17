/* eslint-disable react/prop-types */
import { useCallback,  useReducer} from "react";
import { createContext } from "react";


const PostList = createContext(
   {
      postList: [],
      addPost: () => { },
      deletePost: () => { },
   }
);


const reducer = (currPostList, action) => {
   let newPostList = currPostList
   if (action.type === "delete-post") {
      newPostList = currPostList.filter((post) => post.id !== action.payload.postId)
   } else if (action.type === "add-post") {
      const newPostLists = action.payload
    

      newPostList = [newPostLists, ...newPostList]
   } else if(action.type==="add-initial-post"){
      newPostList=action.payload.posts;
   }

   return newPostList;
}



const PostListProvider = ({ children }) => {
   const [postList, dispatch] = useReducer(reducer, [])

   const addInitialPost = (posts) => {
      dispatch(
         {
            type: "add-initial-post",
            payload: {
               posts,
            }
         }
      )
   }

   const addPost = (post) => {
      dispatch(
         {
            type: "add-post",
            payload: post,
           
         }
      )
   }
   const deletePost = useCallback((postId) => {   //useCallback  hook ::::
      dispatch(
         {
            type: "delete-post",
            payload: {
               postId,
            }
         },
      )
   },[dispatch])



   
  

   return (
      <PostList.Provider value={{ postList, addPost, deletePost }}>
         {children}
      </PostList.Provider>
   )
}



export { PostList };
export default PostListProvider;