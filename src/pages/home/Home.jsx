import React from "react";
import { Announcement } from "../../components/Announcement";
import Navbar from "../../components/NavBar";
import { Slider } from "../../components/Slider";

function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
    </div>
  );
}

export default Home;
