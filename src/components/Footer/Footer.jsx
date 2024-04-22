import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={assets.logo} alt="error" />

          <div className="footer-para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              totam quod. Cum nesciunt, ipsum omnis blanditiis voluptate saepe
              aliquam eos. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Nemo et voluptates iusto sapiente sit, aliquam deleniti
              adipisci maxime exercitationem nulla?
            </p>
          </div>

          <div className="footer-social">
            <img src={assets.linkedin_icon} alt="error" />
            <img src={assets.facebook_icon} alt="error" />
            <img src={assets.twitter_icon} alt="error" />
          </div>
        </div>

        <div className="footer-middle">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>7879057767</li>
            <li>Aditiu.202@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Cpyright 2024 &copy; Tomoato.com - All Rights are Reserved
      </p>
    </div>
  );
}

export default Footer