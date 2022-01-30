import React from 'react';
import "./Gallery.css"
import dron from "../../assets/photos/dron.mp4"
// import { gallery } from '../../static/data';
// import { IoClose } from "react-icons/io5"
import Footer from '../../components/footer/Footer';
import Video from '../../components/video/Video';
import img10 from '../../assets/photos/4.jpg'
import img11 from '../../assets/photos/2.jpg'
import img12 from '../../assets/photos/3.jpg'
import img14 from '../../assets/photos/12.jpg'
import img15 from '../../assets/photos/15.jpg'
import movie from "../../assets/photos/dron.mp4"
import movie1 from "../../assets/photos/building.mp4"
import GallaryTwo from '../../components/galleryTwo/GallaryTwo';

function Gallery() {
    // const [image, setImage] = useState(false)
 
    // image ? document.body.style.overflow = "hidden": document.body.style.overflow = "auto"

  return <div id='galleryId' className='gallery'>
      <Video  name="Gallery" video={dron}/>
      <div className="gallery_wrapper">
          <div className="gallery_wrapperTitle">
              <h1>Gallary</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        <GallaryTwo imgs={{one:img11, two:img12, three:img10, bool: true}}/>
        <div className="gallery_three">
            <div className="gallery_threeItem">
                <img src={img11} alt="" />
            </div>
            <div className="gallery_threeItem">
                <video muted autoPlay loop="1000" src={movie}></video>
            </div>
            <div className="gallery_threeItem">
                <video muted autoPlay loop="1000" src={movie1}></video>

            </div>
        </div>
        <GallaryTwo imgs={{one:img12, two:img11, three:img10, bool: false}}/>
        <div className="gallery_three">
            <div className="gallery_threeItem">
                <video muted autoPlay loop="1000" src={movie1}></video>
            </div>
            <div className="gallery_threeItem">
                <img src={img11} alt="" />
            </div>
            <div className="gallery_threeItem">
                <video muted autoPlay loop="1000" src={movie}></video>
            </div>
        </div>
        <GallaryTwo imgs={{one:img14, two:img15, three:img10, bool: true}}/>
        {/* <div className="gallery_two">
            <div className="gallery_twoBig">
                <img src={img10} alt="" />
            </div>
            <div className="gallery_twoSmall">
                <div className="gallery_twoSmallItem">
                    <img src={img11} alt="" />
                </div>
                <div className="gallery_twoSmallItem">
                    <img src={img12} alt="" />
                </div>
            </div>
        </div> */}
      </div>
      {/* <div className="gallery_images">
          {
              gallery?.map(({id, img})=>(
                  <div onClick={()=> setImage(img)} key={id} className='gallery_imagesItem'>
                      <img src={img} alt="" />
                  </div>
              ))
          }
      </div>
      <div className={image? "gallery_hidden show":"gallery_hidden"}>
          <div className="gallery_hiddenImage">
              <img src={image? image : ""} alt="" />
          </div>
          <div onClick={()=>setImage(false)} className='gallery_hiddenClose'>
              <IoClose/>
          </div>
          <div onClick={()=>setImage(false)} className="gallery_hiddenBg"></div>
      </div> */}
      <Footer/>
  </div>;
}

export default Gallery;
