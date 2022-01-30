import React, { useEffect } from 'react'
import "./Carausel.css"
import AOS from "aos"
import 'aos/dist/aos.css'

function Carausel({img}) {
    useEffect(()=>{
        AOS.init()
    },[])
    return (
        <div data-aos="fade-up" data-aos-duration="1500" className="carausel">
            <div className="slider">
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default Carausel
