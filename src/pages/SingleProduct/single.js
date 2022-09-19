import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import SingleProd from "../../components/SingleProduct/SingleProd";
import "./singleProduct.css";
export const Single = () => {
  const location =useLocation();
  console.log(location.state);
  let {title, description,price_1kg,price_500g,_id}=location.state
  return (
    <>
    <SingleProd title={title} description={description} price_1kg={price_1kg} price_500g={price_500g}  _id={_id}/>
    </>
    
  );
};
