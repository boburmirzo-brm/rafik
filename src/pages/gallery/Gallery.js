import React from "react";
import "./Gallery.css";
import Footer from "../../components/footer/Footer";
import Video from "../../components/video/Video";
import GallaryTwo from "../../components/galleryTwo/GallaryTwo";
import LoaderImage from "../../components/loader/LoaderImage";

// importing videos from assets folder
import videoUrl from "../../assets/photos/video-portrait1.mp4";
import videoUrl1 from "../../assets/photos/video-portrait.mp4";
import videoUrl2 from "../../assets/photos/video2.mp4";
import videoUrl3 from "../../assets/photos/building.mp4";
import videoUrl4 from "../../assets/photos/video1.mp4";
import videoUrl10 from "../../assets/photos/video10.mp4";
import videoUrl5 from "../../assets/photos/video3.mp4";

// importing images from assets folder
import img1 from "../../assets/photos/1pcmain.jpg";
import img2 from "../../assets/photos/2.jpg";
import img3 from "../../assets/photos/3.jpg";
import img6 from "../../assets/photos/6.jpg";
import img7 from "../../assets/photos/7.jpg";
import img8 from "../../assets/photos/8.jpg";
import img11 from "../../assets/photos/11.jpg";
import img13 from "../../assets/photos/13.jpg";
import img15 from "../../assets/photos/15.jpg";
import img16 from "../../assets/photos/16.jpg";
import img27 from "../../assets/photos/27.jpg";
import rasm1 from "../../assets/photos/rasm1.jpg";
import rasm3 from "../../assets/photos/rasm3.jpg";
import rasm4 from "../../assets/photos/rasm4.jpg";
import rasm2 from "../../assets/photos/mbmain.jpg";

function Gallery() {
  return (
    <div id="galleryId" className="gallery">
      <Video name="Gallery" video={videoUrl} />
      <div className="gallery_wrapper">
        <div className="gallery_wrapperTitle">
          <h1>Gallary</h1>
          <p>Some photos of my dream America</p>
        </div>
        {img1 ? (
          <GallaryTwo
            imgs={{ one: img1, two: img2, three: img3, bool: true }}
          />
        ) : (
          <GallaryTwo imgs={{ loader: true }} />
        )}

        <div className="gallery_three">
          <div className="gallery_threeItem">
            {img6 ? <img src={img6} alt="" /> : <LoaderImage />}
          </div>
          <div className="gallery_threeItem">
            {videoUrl1 ? (
              <video muted autoPlay loop="1000" src={videoUrl1}></video>
            ) : (
              <LoaderImage />
            )}
          </div>
          <div className="gallery_threeItem">
            {videoUrl3 ? (
              <video muted autoPlay loop="1000" src={videoUrl3}></video>
            ) : (
              <LoaderImage />
            )}
          </div>
        </div>
        {img7 ? (
          <GallaryTwo
            imgs={{ one: img7, two: img8, three: img11, bool: true }}
          />
        ) : (
          <GallaryTwo imgs={{ loader: true }} />
        )}
        <div className="gallery_three">
          <div className="gallery_threeItem">
            {videoUrl2 ? (
              <video muted autoPlay loop="1000" src={videoUrl2}></video>
            ) : (
              <LoaderImage />
            )}
          </div>
          <div className="gallery_threeItem">
            {img13 ? <img src={img13} alt="" /> : <LoaderImage />}
          </div>
          <div className="gallery_threeItem">
            {videoUrl4 ? (
              <video muted autoPlay loop="1000" src={videoUrl4}></video>
            ) : (
              <LoaderImage />
            )}
          </div>
        </div>
        {img15 ? (
          <GallaryTwo
            imgs={{ one: img15, two: img16, three: img27, bool: true }}
          />
        ) : (
          <GallaryTwo imgs={{ loader: true }} />
        )}
        <div className="gallery_three">
          <div className="gallery_threeItem">
            {rasm1 ? <img src={rasm1} alt="" /> : <LoaderImage />}
          </div>
          <div className="gallery_threeItem">
            {videoUrl10 ? (
              <video muted autoPlay loop="1000" src={videoUrl10}></video>
            ) : (
              <LoaderImage />
            )}
          </div>
          <div className="gallery_threeItem">
            {videoUrl5 ? (
              <video muted autoPlay loop="1000" src={videoUrl5}></video>
            ) : (
              <LoaderImage />
            )}
          </div>
        </div>
        {rasm3 ? (
          <GallaryTwo
            imgs={{ one: rasm3, two: rasm4, three: rasm2, bool: true }}
          />
        ) : (
          <GallaryTwo imgs={{ loader: true }} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
