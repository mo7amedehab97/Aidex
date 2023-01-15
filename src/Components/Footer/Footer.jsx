import React from "react";
import "./index.css";
import Facebook from "../../assets/logo-facebook.svg";
import Whatsapp from "../../assets/logo-whatsapp.svg";
import Instagram from "../../assets/logo-instagram.svg";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_list">
        <div>
          <a href="#about"> about us</a>
          <a href="#services">services</a>
          <a href="#prices">prices</a>
          <a href="#reviews">reviews</a>
          <a href="#contact">contact us</a>
        </div>
        <div>
          <p>
            opening hours, address or other usefull information hours, address
            or other usefull information
          </p>
        </div>
      </div>
      <div className="footer_social">
        <div>
          {" "}
          <h3>+972 059 551 4207</h3>
        </div>
        <div>
          <img
            src={Facebook}
            alt=""
            width={30}
            className="social_image_footer_icons"
          />
          <img
            src={Whatsapp}
            alt=""
            width={30}
            className="social_image_footer_icons"
          />

          <img
            src={Instagram}
            alt=""
            width={30}
            className="social_image_footer_icons"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
