import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './component/footer'
import Header from './component/header'
import SideBar from './component/sidebar'
import CreatePost from './component/create-post'
import PostList from './component/postList'
import { useState } from 'react'
import PostListProvider from './store/post-list-store'

function App() {

  let [selectTab, setSelectTab] = useState('create-post');

  return (

    <PostListProvider>
      <div className="app-container">
        <SideBar setSelectTab={setSelectTab} selectTab={selectTab}></SideBar>
        <div className="content">
          <Header></Header>
          {selectTab === 'home' ? <CreatePost></CreatePost> : <PostList></PostList>}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>



  )
}

export default App
