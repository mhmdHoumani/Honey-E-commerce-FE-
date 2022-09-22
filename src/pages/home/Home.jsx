import React, { useEffect, useState } from "react";
// import { Announcement } from "../../components/Announcement";
import Navbar from "../../components/NavBar";
import { Slider } from "../../components/Slider";
import CategoryCard from "../../components/CategoryCard";
import styled from "styled-components";
import { mobile, tablet } from "../../responsive";
import  {Loading} from "../../components/loading page/Loading"

import InfoCard from "../../components/InfoCard";

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content: space-evenly;
  width:auto;
  // ${mobile({ flexDirection:"column"})}
  ${tablet({})}
`;


function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
    {loading ? 
      <Loading/> 
      : (
        
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
        )}
        </>
        );
      }

export default Home;
