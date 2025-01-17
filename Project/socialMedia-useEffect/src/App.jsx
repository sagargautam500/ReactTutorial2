import { useState } from 'react'
import './App.css'
import CreatePost from './components/CreatePost'
import Footer from './components/Footer'
import Header from './components/Header'
import PostList1 from './components/PostList1'
import Sidebar from './components/Sidebar'
import PostListProvider from './store/post-list-store'


function App() {
  const [selectedTab, setSelectedTab] = useState("Home")
  return (
    <PostListProvider>
      <div className='appContainer'>

        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />

        <div className="content">
          <Header />
          {selectedTab === "Home" && <PostList1 />}
          {selectedTab === "CreatePost" && <CreatePost />}
          {selectedTab === "Video" && <CreatePost />}

          <Footer />
        </div>
      </div>
    </PostListProvider>
  )
}

export default App

