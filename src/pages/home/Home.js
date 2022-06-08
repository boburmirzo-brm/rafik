import React, { useEffect } from 'react'
import Carausel from '../../components/carausel/Carausel'
import "./Home.css"
import img1 from "../../assets/photos/pcmain.JPG"
import img4 from "../../assets/photos/7.jpg"
import img12 from "../../assets/photos/12.jpg"
import img02 from "../../assets/photos/2.jpg"
import img16 from "../../assets/photos/16.jpg"
import Footer from '../../components/footer/Footer'
import AOS from "aos"
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

function Home() {
    useEffect(()=>{
        AOS.init()
    },[])
    return (
        <div className="home">
            <Carausel img={img1}/>
            <div className="home_banner">
                <div data-aos="fade-right"  className="home_bannerLeft">
                    <h2>Travel blog</h2>
                </div>
                <div data-aos="fade-left" className="home_bannerRight">
                  <h2>Magic city</h2>
                </div>
            </div>
            <div className="home_limited">
                <h1>Gallery</h1>
                <div className="home_limitedContainer">
                    <Link  data-aos="fade-up" to="/gallery">
                        <div className="home_limitedContainerItem">
                            <img src={img12} alt="" />
                            <h2>More</h2>
                        </div>
                    </Link>
                    <Link data-aos="fade-up" to="/gallery">
                        <div  className="home_limitedContainerItem">
                            <img src={img02} alt="" />
                            <h2>Creative</h2>
                        </div>
                    </Link>
                    <Link  data-aos="fade-up"  to="/gallery">
                        <div className="home_limitedContainerItem">
                            <img src={img16} alt="" />
                            <h2>Images</h2>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="home_life">
                <h2>Dream of America</h2>
            </div>
            <Carausel img={img4}/>
            <Footer/>
        </div>
    )
}

export default Home
