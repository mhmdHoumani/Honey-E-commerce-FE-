import React, {useEffect} from "react";
import "./footer.css";
import {
  AiOutlineInstagram,
  AiOutlineArrowUp,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";


const Footer = () => {

  return (
    <>
      <div className="container_footer">
        <div className="container_content_footer">
          <div className="LOGO_div">LOGO</div>
          <div className="List_div">
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/product">PRODUCT</NavLink>
            <NavLink to="/aboutUs">ABOUT US</NavLink>
          </div>
          <div className="socialMedia_div">
            <a className="" href="https://m.facebook.com/profile.php?id=100064305061300&_rdr">
              {" "}
              <RiFacebookFill />
            </a>
            <a className="" href="https://instagram.com/esperbeehoney?igshid=MmIxOGMzMTU=">
              {" "}
              <AiOutlineInstagram />
            </a>
            <a className="" href="https://www.whatsapp.com/">
              {" "}
              <AiOutlineWhatsApp />
            </a>
          </div>
        </div>

        <div className="buttom_footer">
          <div className="button_container">
            <button className="button_footer">Sign UP</button>
          </div>
          <div className="arrow_bottom">
            <a href="#navbar_section">
              <AiOutlineArrowUp />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
