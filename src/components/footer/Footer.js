import React from 'react';
import "./Footer.css"
import {BsFacebook, BsInstagram, BsTelegram} from 'react-icons/bs'

function Footer() {
  return <div className='footer'>
      <h2>Follow</h2>
      <div className="footer_icons">
          <a href="https://www.facebook.com/rafik.bannaev" rel="noreferrer" target="_blank"><BsFacebook/> </a>
          <a href="https://www.instagram.com/rafikbannaev" rel="noreferrer" target="_blank"><BsInstagram/> </a>
          <a href="https://t.me/CaHiTT" rel="noreferrer" target="_blank"><BsTelegram/> </a>
      </div>
  </div>;
}

export default Footer;
