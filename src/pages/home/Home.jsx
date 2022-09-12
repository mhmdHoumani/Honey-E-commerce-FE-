import React from "react";
// import { Announcement } from "../../components/Announcement";
import Navbar from "../../components/Navbar";
import { Slider } from "../../components/Slider";
import CategoryCard from "../../components/CategoryCard";
import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  ${mobile({ flexDirection: "column" })}
  ${tablet({})}
`;
function Home() {
  return (
    <div>
      {/* <Announcement /> */}
      <Navbar />
      <Slider />
      <CategoryContainer>
        <CategoryCard />
      </CategoryContainer>
    </div>
  );
}

export default Home;
