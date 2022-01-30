import React from 'react';
import './Video.css'

function Video({video, name}) {
  return  <div className="gallery_vidoe">
        <video muted autoPlay loop="100" src={video} ></video>
        <h2>{name}</h2>
    </div>;
}

export default Video;
