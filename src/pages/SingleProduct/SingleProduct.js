// import React from 'react';
import styled from "styled-components";
import Honey from "../../Assets/Images/honeyDrops.jpg";
import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";



export const CardWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
// margin: 0 0 100px;
max-width: 80vw;
// box-shadow: 0 0 10px 0 #bbbbbb;
margin-top:10%;

 

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
 background-color: aqua; 

  width: 384px;
  height: 384px;
  object-fit: contain;
  box-shadow: 0 0 10px 0 #bbbbbb;
  margin: auto;

//   max-width: 30vw;
    transform: scale(0.88);
    border-radius: 5px;
    object-fit: contain;

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
float: left;
width: calc(50% - 30px);
`;


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
export const productLabel = styled.h2`
    font-size: 40px;
    font-weight: 600;
    letter-spacing: 0;
    text-transform: none;
    line-height: 1.5rem;
    margin-top: 30px;
    margin-bottom: 15px;
    // font-family: 'Signika', sans-serif;
`;
export const SingleProduct = () => {

//     const [data, setData] = useState([]);

//   const getData = async () => {
//     const response = await fetch(
//         `http://127.0.0.1:5000/products/find/${params.id}`
    
//     )
//     let data = await response.json();

//     setData(data);
  
//     console.log(data)
//   }

//   useEffect(() => {

//       getData()
  
//   }, []);

//   const params = useParams();
//   console.log({ params });

  return (
    // <div className='singleProduct_container'>
    //     <div className='image_container'>
    //     <img src={Honey}alt="Girl in a jacket" width="500" height="600"/>

    //     </div>
    //     <div className='details_container'>

    //     </div>
    // </div>

    <div className="container_p" style={{  maxWidth: '80vw', margin:'0px auto', padding:'1%'}}>
      <CardWrapper>
        <CardHeader>
          <CardImage src={Honey} />
          <CardHeading></CardHeading>
        </CardHeader>

        <CardBody>
          <ProductDetails>
          {/* <h1>id: {params.id}</h1> */}
           
            <ProductName>Honey Jar</ProductName>
            <ProductDesc>Price</ProductDesc>
            <ProductPrice>desc</ProductPrice>
          </ProductDetails>
          <CardButton type="button">Add to cart</CardButton>
        </CardBody>
      </CardWrapper>
    </div>
  )
}
