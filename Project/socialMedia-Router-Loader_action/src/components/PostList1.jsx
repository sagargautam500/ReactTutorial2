/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from 'react'
import Post from './Post'
import WelcomeMsg from './WelcomeMsg'
import Loader from './Loader'
import { useLoaderData } from 'react-router-dom'


function PostList1() {
  const postList=useLoaderData();
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {
         postList.length === 0 && <WelcomeMsg />
      }
      { postList.map((post) => <Post key={post.id} post={post} />)}
    </div>
  )
}
export default PostList1;

export const postLoader = async () => {
  const res = await fetch('https://dummyjson.com/posts')
  const data = await res.json()
  return (data.posts)
}