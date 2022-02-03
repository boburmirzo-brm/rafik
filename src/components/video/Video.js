import React from 'react';
import LoaderImage from '../loader/LoaderImage';
import './Video.css'

function Video({video, name}) {
  return  <div className="gallery_vidoe">
      {
        video ? <>
            <video muted autoPlay loop="100" src={video} ></video>
            <h2>{name}</h2>
        </>:
           <LoaderImage/>
      }
     
    </div>;
}

export default Video;
