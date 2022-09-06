import React from "react";
import styled, { css } from "styled-components";
import Honey from "../images/Honey.png";

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 384px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 10px 0 #bbbbbb;
  border-radius: 7px;
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
  object-fit:contain;
  

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

// export const CardFieldset = styled.fieldset`
// //   position: relative;
//   padding: 0;
//   margin: 0;
//   border: 0;
// `;

export const CardButton = styled.button`
  display: block;
  width: 100%;
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

export const Card = () => {
  return (
    <div className="">
      <CardWrapper>
        <CardHeader>
          <CardImage src={Honey} />
          <CardHeading>Honey Jar</CardHeading>
        </CardHeader>

        <CardBody>
          <ProductDetails>
            <ProductName>Honey Jar</ProductName>
            <ProductDesc>Honey and hive</ProductDesc>
            <ProductPrice>20$</ProductPrice>
          </ProductDetails>
          <CardButton type="button">Add to cart</CardButton>

          {/* <CardFieldset>
            <CardButton type="button">Add to cart</CardButton>
          </CardFieldset> */}
        </CardBody>
      </CardWrapper>
    </div>
  );
};
