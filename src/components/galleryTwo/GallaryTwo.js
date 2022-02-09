import React from 'react';
import LoaderImage from '../loader/LoaderImage';
import './GalleryTwo.css'


function GallaryTwo({imgs}) {
    const  {loader, bool, one, two, three} = imgs;
  return  <div className="gallery_two">
      {
          loader?
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
          bool ? 
          <>
            <div className="gallery_twoBig">
                {
                    one? <img src={one} alt="" />: <LoaderImage/>
                }
            </div>
            <div className="gallery_twoSmall">
                <div className="gallery_twoSmallItem">
                    <img src={two} alt="" />
                </div>
                <div className="gallery_twoSmallItem">
                    <img src={three} alt="" />
                </div>
            </div>
            </>
            :
            <>
                <div className="gallery_twoSmall">
                    <div className="gallery_twoSmallItem">
                        <img src={two} alt="" />
                    </div>
                    <div className="gallery_twoSmallItem">
                        <img src={three} alt="" />
                    </div>
                </div>
                <div className="gallery_twoBig marg">
                    <img src={one} alt="" />
                </div>
            </>
      }
 
</div>;
}

export default GallaryTwo;
