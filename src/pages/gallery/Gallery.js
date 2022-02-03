import React, {useState, useEffect} from 'react';
import {db} from "../../server/firebase"
import "./Gallery.css"
// import dron from "../../assets/photos/dron.mp4"
// import { gallery } from '../../static/data';
// import { IoClose } from "react-icons/io5"
import Footer from '../../components/footer/Footer';
import Video from '../../components/video/Video';
// import img10 from '../../assets/photos/4.jpg'
// import img11 from '../../assets/photos/2.jpg'
// import img12 from '../../assets/photos/3.jpg'
// import img14 from '../../assets/photos/12.jpg'
// import img15 from '../../assets/photos/15.jpg'
// import movie from "../../assets/photos/dron.mp"
// import movie1 from "../../assets/photos/building.mp4"
import GallaryTwo from '../../components/galleryTwo/GallaryTwo';
import LoaderImage from '../../components/loader/LoaderImage';

function Gallery() {
    const [videoUrl, setVideoUrl] = useState(null)
    const [videoUrlSecond, setVideoUrlSecond] = useState(null)
    const [imagesUrl, setImagesUrl] = useState(null)

    useEffect(()=>{
        db.collection("videos").onSnapshot(item=>(
            setVideoUrl(item.docs.map(i=> i.data())[0].video )
        ))
    },[])
    useEffect(()=>{
        db.collection("videos").onSnapshot(item=>(
            setVideoUrlSecond(item.docs.map(i=> i.data())[1].video )
        ))
    },[])

    useEffect(()=>{
        db.collection("images").onSnapshot(item=>(
            setImagesUrl(item.docs.map(i=> i.data()) )
        ))
    },[])
 
  return <div id='galleryId' className='gallery'>
      <Video  name="Gallery" video={videoUrl}/>
        <div className="gallery_wrapper">
          <div className="gallery_wrapperTitle">
              <h1>Gallary</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
          {
            imagesUrl? 
            <GallaryTwo imgs={{one:imagesUrl[1].img, two:imagesUrl[0].img, three:imagesUrl[2].img, bool: true}}/>
            :
            <GallaryTwo imgs={{loader: true}}/>
          }
      
        <div className="gallery_three">
            <div className="gallery_threeItem">
                {
                    imagesUrl? <img src={imagesUrl[0].img} alt="" /> : <LoaderImage/>
                }
            </div>
            <div className="gallery_threeItem">
                {
                    videoUrl ? <video muted autoPlay loop="1000" src={videoUrl}></video> : <LoaderImage/>
                }
            </div>
            <div className="gallery_threeItem">
                {
                    videoUrlSecond ? <video muted autoPlay loop="1000" src={videoUrlSecond}></video> : <LoaderImage/>
                }
            </div>
        </div>
            {
            imagesUrl? 
            <GallaryTwo imgs={{one:imagesUrl[1].img, two:imagesUrl[2].img, three:imagesUrl[0].img, bool: true}}/>
            :
            <GallaryTwo imgs={{loader: true}}/>
          }
        <div className="gallery_three">
            <div className="gallery_threeItem">
                {
                    videoUrl ? <video muted autoPlay loop="1000" src={videoUrl}></video> : <LoaderImage/>
                }
            </div>
            <div className="gallery_threeItem">
                {
                    imagesUrl? <img src={imagesUrl[0].img} alt="" /> : <LoaderImage/>
                }
            </div>
            <div className="gallery_threeItem">
                {
                    videoUrlSecond ? <video muted autoPlay loop="1000" src={videoUrlSecond}></video> : <LoaderImage/>
                }
            </div>
        </div>
        {
            imagesUrl? 
            <GallaryTwo imgs={{one:imagesUrl[2].img, two:imagesUrl[0].img, three:imagesUrl[1].img, bool: true}}/>
            :
            <GallaryTwo imgs={{loader: true}}/>
          }
      </div>
      <Footer/>
  </div>;
}

export default Gallery;
