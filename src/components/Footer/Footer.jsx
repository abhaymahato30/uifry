import React from "react";
import './Footer.css'
import group from '../../assets/Group.png'
import group2 from '../../assets/group2.png'
import group3 from '../../assets/group3.png'


const Footer = () => {
  return (
    <>
      <footer className="flex justify-between footer padding_xaxis">
        <ul className=" flex-column gap-4">
          <li><img src={group} alt="" /></li>
          <li><img src={group2} alt="" className="footerlogo" /></li>
          <li><img src={group3} alt="" className="footerlogo" /></li>

    
      
        </ul>

        <ul className=" flex-column ">
          <li className="bold">Links</li>
          <li className="light">Home</li>
          <li className="light">About Us</li>
          <li className="light">Booking</li>
          <li className="light">Blog</li>
        </ul>
        <ul className=" flex-column">
        <li className="bold">Legal</li>
          <li className="light">Terms of use</li>
          <li className="light">privacy policy</li>
          <li className="light">cookie policy</li>

       
        </ul>
        <ul className=" flex-column">
        <li className="bold">Product</li>
          <li className="light">Take Tour</li>
          <li className="light">Live Chat</li>
          <li className="light">Reviews</li>
        </ul>
        <ul className="= flex-column">
        <li className="bold">NewsLetter</li>
          <li className="light">stay up to date</li>
          <li className="light flex"><input type="text" placeholder="Your Email" /><button className="dark-btn">subscribe</button></li>
        </ul>
       
       
      </footer>
      <div className="copyright_section">
        <p>Copyright 2022 uifry.com all rights reserved</p>

       </div>
    </>
  );
};

export default Footer;
