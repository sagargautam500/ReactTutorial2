import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import PostList1, { postLoader } from './components/PostList1.jsx'
import CreatePost, { createPostAction } from './components/CreatePost.jsx'


const router = createBrowserRouter([
  {
     path:'/',
     element:<App/>,
     children:[
      {path:"/",element:<PostList1/>, loader:postLoader,},
      {path:"create-post",element:<CreatePost/>,action: createPostAction, }
     ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)


