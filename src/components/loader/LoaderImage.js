import React from 'react';
import "./LoaderImage.css"

function LoaderImage() {
  return <div className='loader_image'>
      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  </div>;
}

export default LoaderImage;
