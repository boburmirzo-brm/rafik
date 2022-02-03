import React from 'react';
import "./LoaderItem.css"

function LoaderItem() {
  return <div className='loader_item'>
      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  </div>;
}

export default LoaderItem;
