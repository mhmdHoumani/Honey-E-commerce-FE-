import React from "react";
import "./footer.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <div className="container_footer">
        <div className="container_content_footer">
          <div className="LOGO_div">LOGO</div>
          <div className="List_div">
            <a className="" href=""> HOME</a>
            <a href=""> HOME</a>
            <a href=""> HOME</a>

            {/* <ul className='List_div'>
          <li>h1</li>
          <li>h1</li>
          <li>h1</li>
        </ul> */}
          </div>
          <div className="socialMedia_div">
            <RiFacebookFill />
            <AiOutlineInstagram />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
