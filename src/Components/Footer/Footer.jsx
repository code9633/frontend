import React from "react";
import "./Footer.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footerDetails">
        <img src="/Logo.svg" alt="" />
        <div className="footerContact">
          <h2>Contact</h2>
          <div className="footerContactDetails">
            <p>
              148/15 <br />
              Lotus Road <br />
              Colombo 08, Sri Lanka
            </p>
            <p>
              marketing@slt.lk <br /> 0112 818 660
            </p>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <div className="footerSocialIcons">
          <FaXTwitter />
          <FaInstagram />
          <FaSquareFacebook />
          <FaYoutube />
          <FaTiktok />
        </div>
        <div className="footerBottomText">
          <li>
            <img src="/SL_Flag.svg" alt="" />
            <span>Sri Lanka</span>
          </li>
          <li>
            <a href="">Privacy</a>
          </li>
          <li>
            <a href="">Sales Terms</a>
          </li>
          <li>
            <a href="">Term of Service</a>
          </li>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
