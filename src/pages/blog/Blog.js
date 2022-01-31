import React, { useState, useEffect } from 'react';
import Video from '../../components/video/Video';
import './Blog.css'
import video from "../../assets/photos/building.mp4"
import Footer from '../../components/footer/Footer';
import BlogCon from '../../components/blogCon/BlogCon';
import {db} from "../../server/firebase"

function Blog() {
  // const [text, setText] = useState(false)
  const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        db.collection("blogs").orderBy("createAt").onSnapshot(data=>{
            setBlogs(data.docs.map(item=>(
                item.data()
            )))
        })
    },[])

    console.log("login >>> ", process.env.REACT_APP_LOGIN);
    console.log("password >>> ", process.env.REACT_APP_PASSWORD);
    console.log("REACT_APP_API_KEY >>> ", process.env.REACT_APP_API_KEY);
    console.log("REACT_APP_APP_ID >>> ", process.env.REACT_APP_APP_ID);
  return <div className='blog'>
      <Video name="Blog" video={video}/>
          <div className="gallery_wrapperTitle">
              <h1>Blogs</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        <BlogCon blogs={[...blogs].reverse()}/>

      {/* <div  className="blog_main">
       
        <div className='blog_container'>
          {
            blog?.map(({id, title, desc})=>(
              <div  onClick={()=> setText(id === text? false: id)} key={id} className={text === id ? 'blog_containerItem showBlog': 'blog_containerItem'}>
                <h2>{title}</h2>
                {
                  text === id ? <p>{desc}</p> :  <p>{desc.length > 149 ? desc.slice(0, 150) + "..." : desc}</p> 
                } 
                {
                   desc.length > 149 ? <button onClick={()=> setText(id === text? false: id)} className={text === id? 'blog_btn showBlog':'blog_btn'}>{ text === id? "Hide" : "Show more" }</button> : ""
                }
               
              </div>
            ))
          }
       </div>
        <img className='blog_image' src={img200} alt="" />
      </div> */}
      <Footer/>
  </div>;
}

export default Blog;
