import React from "react";
// import { Announcement } from "../../components/Announcement";
import Navbar from "../../components/NavBar";
import { Slider } from "../../components/Slider";
import CategoryCard from "../../components/CategoryCard";
import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

import InfoCard from "../../components/InfoCard";

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width:auto;
  // ${mobile({ display:"flex", justifyContent:"space-evenly",flexDirection:"column"})}
  ${tablet({})}
`;
function Home() {
  return (
    <div>
      {/* <Announcement /> */}
      {/* <Navbar /> */}
      <Slider />
      <InfoCard/>
      <CategoryContainer>
        <CategoryCard />
        {/* <InfoCards/> */}
      </CategoryContainer>
    </div>
  );
}

export default Home;
