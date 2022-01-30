import React from 'react';
import './GalleryTwo.css'


function GallaryTwo({imgs}) {
  return  <div className="gallery_two">
      {
          imgs.bool ? 
          <>
            <div className="gallery_twoBig">
                <img src={imgs.one} alt="" />
            </div>
            <div className="gallery_twoSmall">
                <div className="gallery_twoSmallItem">
                    <img src={imgs.two} alt="" />
                </div>
                <div className="gallery_twoSmallItem">
                    <img src={imgs.three} alt="" />
                </div>
            </div>
            </>
            :
            <>
                <div className="gallery_twoSmall">
                    <div className="gallery_twoSmallItem">
                        <img src={imgs.two} alt="" />
                    </div>
                    <div className="gallery_twoSmallItem">
                        <img src={imgs.three} alt="" />
                    </div>
                </div>
                <div className="gallery_twoBig marg">
                    <img src={imgs.one} alt="" />
                </div>
            </>
      }
 
</div>;
}

export default GallaryTwo;
