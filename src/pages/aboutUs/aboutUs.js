import React from "react";
import "./aboutUs.css";
import honeyDrops from "../../Assets/Images/honeyDrops.jpg";
import honeyJar from "../../Assets/Images/honeyJar.jpg";

const AboutUs = () => {
  return (
    <div>
      <div className="banner">
        <h1>About Us</h1>
      </div>
      <div className="body">
        <div className="section1">
          <div className="leftSection1">
            <img src={honeyDrops} alt="honey drops" />
          </div>
          <div className="rightSection1">
            <div>
              <h2>The Incredible Honey</h2>
              <p>
                Quisque volutpat mattis eros. Nullam malesuada erat ut ki diaml
                ka dhuddu pochu turpis. Suspendisse urna nibh, viverra non,
                semper suscipit, posuere a, pede. Donec nec justo eget felis
                facilisis fermentum. Morbi in sem quis dui placerat ornare.
                Pellentesque odio nisi, euismod in, pharetra a, ultricies in,
                diam. Sed arcu. Cras consequat
              </p>
            </div>
            <div>
              <h4>Honey Farming</h4>
              <p>
                Sed vestibulum nulla elementum auctor tincidunt. Aliquam sit
                amet cursus mauris. Sed vitae mattis ipsum. Vestibulum enim
                nulla, sollicitudin ac hendrerit nec, tempor quis nisl
              </p>
            </div>
            <div>
              <h4>Honey Cultivation</h4>
              <p>
                Sed vestibulum nulla elementum auctor tincidunt. Aliquam sit
                amet cursus mauris. Sed vitae mattis ipsum. Vestibulum enim
                nulla, sollicitudin ac hendrerit nec, tempor quis nisl
              </p>
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="leftSection2">
            <div>
              <h2>The Incredible Honey</h2>
              <p>
                Quisque volutpat mattis eros. Nullam malesuada erat ut ki diaml
                ka dhuddu pochu turpis. Suspendisse urna nibh, viverra non,
                semper suscipit, posuere a, pede. Donec nec justo eget felis
                facilisis fermentum. Morbi in sem quis dui placerat ornare.
                Pellentesque odio nisi, euismod in, pharetra a, ultricies in,
                diam. Sed arcu. Cras consequat
              </p>
            </div>
            <div>
              <h4>Honey Farming</h4>
              <p>
                Sed vestibulum nulla elementum auctor tincidunt. Aliquam sit
                amet cursus mauris. Sed vitae mattis ipsum. Vestibulum enim
                nulla, sollicitudin ac hendrerit nec, tempor quis nisl
              </p>
            </div>
            <div>
              <h4>Honey Cultivation</h4>
              <p>
                Sed vestibulum nulla elementum auctor tincidunt. Aliquam sit
                amet cursus mauris. Sed vitae mattis ipsum. Vestibulum enim
                nulla, sollicitudin ac hendrerit nec, tempor quis nisl
              </p>
            </div>
          </div>
          <div className="rightSection2">
            <img src={honeyJar} alt="honey Jar" />
          </div>
        </div>
        <h3>Featured Clients</h3>
        <div className="section3">
          <div className="clients">
            <p>AL - Yamani</p>
            <p>Organic</p>
            <p>Maison</p>
            <p>client 4</p>
          </div>
          <div className="socials">
            <p>social 1</p>
            <p>social 1</p>
            <p>social 1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
