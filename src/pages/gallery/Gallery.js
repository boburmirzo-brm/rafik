import React, {useState, useEffect} from 'react';
import {db} from "../../server/firebase"
import "./Gallery.css"
import Footer from '../../components/footer/Footer';
import Video from '../../components/video/Video';
import GallaryTwo from '../../components/galleryTwo/GallaryTwo';
import LoaderImage from '../../components/loader/LoaderImage';

// importing pictures and photos from assets folder
import videoUrl from '../../assets/photos/video-portrait1.mp4'
import videoUrl1 from '../../assets/photos/video-portrait.mp4'
import videoUrl2 from '../../assets/photos/video2.mp4'
import videoUrl3 from '../../assets/photos/building.mp4'
import videoUrl4 from '../../assets/photos/video1.mp4'




function Gallery() {
    const [imagesUrl, setImagesUrl] = useState(null)


    useEffect(()=>{
        db.collection("images").onSnapshot(item=>(
            setImagesUrl(item.docs.map(i=> i.data()) )
        ))
    },[])

    console.log(videoUrl4)
  return <div id='galleryId' className='gallery'>
      <Video  name="Gallery" video={videoUrl}/>
        <div className="gallery_wrapper">
          <div className="gallery_wrapperTitle">
              <h1>Gallary</h1>
              <p>Some photos of my dream America</p>
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
                    videoUrl1 ? <video muted autoPlay loop="1000" src={videoUrl1}></video> : <LoaderImage/>
                }
            </div>
            <div className="gallery_threeItem">
                {
                    videoUrl3 ? <video muted autoPlay loop="1000" src={videoUrl3}></video> : <LoaderImage/>
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
                    videoUrl2 ? <video muted autoPlay loop="1000" src={videoUrl2}></video> : <LoaderImage/>
                }
            </div>
            <div className="gallery_threeItem">
                {
                    imagesUrl? <img src={imagesUrl[0].img} alt="" /> : <LoaderImage/>
                }
            </div>
            <div className="gallery_threeItem">
                {
                    videoUrl4 ? <video muted autoPlay loop="1000" src={videoUrl4}></video> : <LoaderImage/>
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
