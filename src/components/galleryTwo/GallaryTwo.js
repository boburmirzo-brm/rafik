import React from 'react';
import LoaderImage from '../loader/LoaderImage';
import './GalleryTwo.css'


function GallaryTwo({imgs}) {
  return  <div className="gallery_two">
      {
          imgs.loader?
          <>
          <div className="gallery_twoBig">
              <LoaderImage/>
          </div>
          <div className="gallery_twoSmall">
              <div className="gallery_twoSmallItem">
                 <LoaderImage/>
              </div>
              <div className="gallery_twoSmallItem">
                <LoaderImage/>
              </div>
          </div>
          </>
          :
          imgs.bool ? 
          <>
            <div className="gallery_twoBig">
                {
                    imgs.one? <img src={imgs.one} alt="" />: <LoaderImage/>
                }
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
