/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { PostList } from '../store/post-list-store'
import Post from './Post'

function PostList1() {
  const {postList} =useContext(PostList)
  return (
    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around'}}>
   {postList.map((post)=> <Post  key={post.id} post={post} />)}
    </div>
  )
}

export default PostList1