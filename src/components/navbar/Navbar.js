import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./Navbar.css"
import { IoClose, IoMenu } from "react-icons/io5"
import {BsFacebook, BsInstagram, BsTelegram} from 'react-icons/bs'
import logo from "../../assets/photos/logo.svg"

function Navbar() {
    const [ menu, setMenu ] = useState(false)
    const location = useLocation()
    
    menu ? document.body.style.overflow = "hidden": document.body.style.overflow = "auto"
    if(location.pathname === "/approuter" || location.pathname === "/approuter/login" || location.pathname === "/approuter/admin" || location.pathname === "/approuter/admin/createblogs" || location.pathname === "/approuter/admin/getcontact"){
        return <></>
    }else{
    return (
    
        <div className={location.pathname === "/contact"? "navbar navBgdark":"navbar"} >
         
            <div className="nav_container">
                <div className="nav_logo">
                    <Link to="/">
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                    </Link>
                </div>
                <div onClick={()=> setMenu(prev => !prev)} className="nav_btns">
                    {
                        menu? <IoClose/> :  <IoMenu/>
                    }
                </div>
                    <div onClick={()=> setMenu(prev => !prev)} className={menu ? "nav_shadow nav_active" : "nav_shadow"}></div>
                    <ul className={menu ? "nav_collection nav_active": "nav_collection"}>
                        <li className="nav_collectionItem">
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav_collectionItem">
                            <Link to="/blog">
                                Blog
                            </Link>
                        </li>
                        <li className="nav_collectionItem">
                            <Link to="/gallery">
                                Gallery
                            </Link>
                        </li>
                        <li className="nav_collectionItem">
                            <Link to="/contact">
                                Contact Us
                            </Link>
                        </li>
                        <ul className="nav_icons">
                            <li><a href="https://kun.uz"><BsFacebook/> </a></li>
                            <li><a href="https://kun.uz"><BsInstagram/> </a></li>
                            <li><a href="https://kun.uz"><BsTelegram/> </a></li>
                        </ul>
                    </ul>
                </div>

        </div>
    )
}
}

export default Navbar
