import React from 'react';
import "./BlogCon.css"


function BlogCon({blogs}) {

  return <div className='blog_con'>
      <div className="blog_conContainer">
          {
              blogs?.map((item,inx)=>(
                <div key={inx} className={item.desc.length > 1200 ? "blog_conItem long" : "blog_conItem"}>
                    <div className="blog_conItemText" >
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                    </div>
                    <div className="blog_conItemImage">
                        <img src={item.url} alt="" />
                    </div>
                 </div>
              ))
          }
     
      </div>
  </div>;
}

export default BlogCon;
