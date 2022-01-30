import React from 'react';
import "./Footer.css"
import {BsFacebook, BsInstagram, BsTelegram} from 'react-icons/bs'

function Footer() {
  return <div className='footer'>
      <h2>Follow</h2>
      <div className="footer_icons">
          <a href="https://kun.uz"><BsFacebook/> </a>
          <a href="https://kun.uz"><BsInstagram/> </a>
          <a href="https://kun.uz"><BsTelegram/> </a>
      </div>
  </div>;
}

export default Footer;
