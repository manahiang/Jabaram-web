import React from 'react'
import { ImFacebook } from "react-icons/im";
import { SiTwitter } from "react-icons/si";
import { SiInstagram } from "react-icons/si";

function Footer() {
  return (
    <div>
    <div className='container'>
      <div className='container-footer'>
        <div className='center-grid-footer'>
          <div className='grid-footer'>
            <div className='card-footer'>
              <img src='https://jabaram.netlify.app/img/Jabaram-png.png' width={80} />
              <p>Careers</p>
              <p>Press</p>
              <p>Help</p>
              <p>Diversity & Belonging</p>
            </div>

            <div className='card-footer'>
              <p style={{ fontWeight: '600' }}>Discover</p>
              <p>Travel & Safety</p>
              <p>Travel Credit</p>
              <p>Gift Cards</p>
              <p>Jabaram Citizen</p>
              <p>Business Travel</p>
              <p>Guidebooks</p>
              <p>Jabaram mag</p>
              <p>Events</p>
            </div>

            <div className='card-footer'>
              <p style={{ fontWeight: '600' }}>Hosting</p>
              <p>Why Host</p>
              <p>Responsible Hosting</p>
              <p>Community Center</p>
              <p>Host Experience</p>
              <p>Open Homes</p>
            </div>

            <div className='card-footer'>
              <div className='link-to-privacy'>
                <span><ImFacebook className='link-icon' /></span>
                <span><SiTwitter className='link-icon' /></span>
                <span><SiInstagram className='link-icon' /></span>

              </div>
              <p>Careers</p>
              <p>Press</p>
              <p>Help</p>
              <p>Diversity & Belonging</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='end-footer'
    </div>
  )
}

export default Footer;