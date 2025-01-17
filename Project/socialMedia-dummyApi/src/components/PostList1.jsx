/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { PostList } from '../store/post-list-store'
import Post from './Post'
import WelcomeMsg from './WelcomeMsg'


function PostList1() {
  const { postList,addInitialPost } = useContext(PostList)
// const [dataFetch,setDataFetch] =useState(false)

// if(!dataFetch){
//   fetch('https://dummyjson.com/posts')
//   .then(res => res.json())
//   .then(data=>addInitialPost(data.posts));
//   setDataFetch(true)
// }

  const handleClickBtn=()=>{
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data=>addInitialPost(data.posts));
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {
      postList.length === 0 && <WelcomeMsg
       handleOnClick={handleClickBtn}
        />
      }
      {postList.map((post) => <Post key={post.id} post={post} />)}
    </div>
  )
}

export default PostList1