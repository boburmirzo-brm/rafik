import React, { useState, useEffect } from 'react';
import Video from '../../components/video/Video';
import './Blog.css'
// import video from "../../assets/photos/building.mp4"
import Footer from '../../components/footer/Footer';
import BlogCon from '../../components/blogCon/BlogCon';
import {db} from "../../server/firebase"
import LoaderData from '../../components/loader/LoaderData';
import videoUrl from "../../assets/photos/video-portrait.mp4"

function Blog() {
  const [blogs, setBlogs] = useState([])


    useEffect(()=>{
        db.collection("blogs").orderBy("createAt").onSnapshot(data=>{
            setBlogs(data.docs.map(item=>(
              {
                id: item.id,
                data: item.data()
              }
            )))
        })
    },[])

  return <div className='blog'>
      <Video name="Blog" video={videoUrl}/>
          <div className="gallery_wrapperTitle">
              <h1>Blogs</h1>
              <p>Feel free to write your opinions📋 and click likes👍</p>
          </div>
          {
            blogs.length ? <BlogCon blogs={[...blogs].reverse()} func={{admin:false}}/> : <LoaderData/>
          }
          
      <Footer/>
  </div>;
}

export default Blog;
