import React, { useState, useEffect } from 'react';
import Video from '../../components/video/Video';
import './Blog.css'
import video from "../../assets/photos/building.mp4"
import Footer from '../../components/footer/Footer';
import BlogCon from '../../components/blogCon/BlogCon';
import {db} from "../../server/firebase"
import LoaderData from '../../components/loader/LoaderData';

function Blog() {
  const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        db.collection("blogs").orderBy("createAt").onSnapshot(data=>{
            setBlogs(data.docs.map(item=>(
                item.data()
            )))
        })
    },[])

  return <div className='blog'>
      <Video name="Blog" video={video}/>
          <div className="gallery_wrapperTitle">
              <h1>Blogs</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
          {
            blogs.length ? <BlogCon blogs={[...blogs].reverse()}/> : <LoaderData/>
          }
      <Footer/>
  </div>;
}

export default Blog;
