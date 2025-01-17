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
   } else if(action.type === "add-post"){
    const    newPostLists={
         id:Date.now(),
         userId:action.payload.userId,
         title:action.payload.title,
         body:action.payload.body,
         reaction:action.payload.reaction,
         tags:action.payload.tags,
      }
   newPostList=[newPostLists,...newPostList]
   }
    
   return newPostList;
}



const PostListProvider = ({ children }) => {
   const [postList, dispatch] = useReducer(reducer, default_postList)

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
      <PostList.Provider value={{ postList, addPost, deletePost }}>
         {children}
      </PostList.Provider>
   )
}

const default_postList = [
   {
      id: "1",
      title: "Trip for KTM",
      body: "hlo friends i am going to ktm for my vacation.we hope enjoy lots of ",
      reaction: 2,
      userId: "user_9",
      tags: ["ktm", "vacation", "enjoy"]

   },
   {
      id: "2",
      title: "Pass out graduate",
      body: "hlo friends i am successful pass out bachlor ",
      reaction: 10,
      userId: "user_12",
      tags: ["graduate", "unbelive", "enjoy"]

   },
   {
      id: "3",
      title: "Pass out the Exam ",
      body: "hlo friends i am successful pass out bachlor ",
      reaction:" 10",
      userId: "user_12",
      tags: ["#graduate", "#unbelive", "#enjoy"]

   }
]

export { PostList };
export default PostListProvider;