/* eslint-disable react/prop-types */
import { useReducer } from "react";
import { createContext } from "react";


const PostList = createContext(
   {
      postList: [],
      addPost: () => { },
      deletePost: () => { }
   }
);


const reducer = (currPostList, action) => {
   let newPostList = currPostList
   if (action.type === "delete-post") {
      newPostList = currPostList.filter((post) => post.id !== action.payload.postId)
   } else if (action.type === "add-post") {
      const newPostLists = {
         id: Date.now(),
         userId: action.payload.userId,
         title: action.payload.title,
         body: action.payload.body,
         reaction: action.payload.reaction,
         tags: action.payload.tags,
      }
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

   const addPost = (userId, title, body, reaction, tags) => {
      dispatch(
         {
            type: "add-post",
            payload: {
               userId,
               title,
               body,
               reaction,
               tags,
            },
         }
      )
   }
   const deletePost = (postId) => {
      dispatch(
         {
            type: "delete-post",
            payload: {
               postId,
            }
         },
      )
   }
   return (
      <PostList.Provider value={{ postList, addPost, deletePost, addInitialPost }}>
         {children}
      </PostList.Provider>
   )
}



export { PostList };
export default PostListProvider;