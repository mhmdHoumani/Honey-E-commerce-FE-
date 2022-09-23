import * as React from "react";
import styled, { css } from "styled-components";
import Honey from "../Assets/Images/Honey.png";
import { Link, useNavigate } from "react-router-dom";
import {cardNumContaxt} from '../App';
import { mobile, tablet } from "../responsive";


export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  // margin: 48px auto 0;
  margin-top: 17%;
  // margin-bottom: 2%;
  width: 384px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 10px 0 #bbbbbb;
  border-radius: 7px;
  ${mobile({ width: "300px" })}
  ${tablet({ width: "300px"})}


`;

export const CardHeader = styled.header`
  //   padding-top: 32px;
  padding-bottom: 32px;
`;

export const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;
//card image
export const CardImage = styled.img`
  width: 384px;
  height: 384px;
  object-fit: cover;
  ${mobile({ width: "200px", height: "200px"})}
  ${tablet({ width: "290px", height: "250px"})}

`;
export const ProductDetails = styled.div`
  text-align: center;
  justify-content: center;
`;
export const ProductName = styled.h4`
  font-size: 18px;
`;
export const ProductDesc = styled.h4`
  margin: 20px 0;
  line-height: normal;
  color: #aaa;
  font-size: 16px; 
  font: inherit;
`;
export const ProductPrice = styled.p`
  font-weight: 600;
  margin: 20px 0;
  margin-right: 10px;
  transition: all 0.3s linear;
  font-size: 25px;
  // color: #fbc41f;
`;

export const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ProductPageWrapper = styled.div`
height: "90vh"
`;

export const CardButton = styled.button`
  display: block;
  width: 45%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #fbc41f;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

export const Card = (props) => {
  const { title, description,weight,price_1kg, price_500g, avatar , _id} = props;
  const navigate=useNavigate()

  return (
   
      <ProductPageWrapper>

     
      
      <CardWrapper >
        <CardHeader>
          <CardImage src={avatar} />
          <CardHeading>{title}</CardHeading>
        </CardHeader>

        <CardBody>
          <ProductDetails>
            <ProductName>Honey Jar</ProductName>
            <ProductDesc>{description}</ProductDesc>
            <ProductPrice>{price_1kg}$</ProductPrice>
          </ProductDetails>
          <ButtonWrapper>
          <CardButton type="button">Add to cart</CardButton>
          <CardButton type="button" 
          onClick={()=>navigate('/product-details', { state: { title, description, price_1kg,price_500g, avatar , _id}} )}
          >show product</CardButton>
          </ButtonWrapper>
        </CardBody>
      </CardWrapper>
      </ProductPageWrapper>
    
  );
};
