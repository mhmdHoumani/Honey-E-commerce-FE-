import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile, tablet } from "../responsive";

import batata from "../Assets/Images/20220628_132624.jpg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  color: white;
  ${mobile({ display: "none" })};
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  color: #f4900a;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  ${tablet({
    height: "auto",

    objectFit: "cover",
  })}
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 60px;
  position: absolute;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  width: 30%;

  padding: 15px;
  font-size: 20px;
  background-color: #f4900a;
  cursor: pointer;
  color: white;
  border: none;
  transition: 1s ease;

  &:hover {
    background-color: white;
    transform: scale(1.1);
    transition: 1s ease;
    color: #f4900a;
  }
`;

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined style={{ color: "#F4900A" }} />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImageContainer>
              <Image src={batata} />
            </ImageContainer>

            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined style={{ color: "#F4900A" }} />
      </Arrow>
    </Container>
  );
};
