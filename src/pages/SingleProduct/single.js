import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import SingleProd from "../../components/SingleProduct/SingleProd";
import "./singleProduct.css";
export const Single = () => {
  const location =useLocation()
  console.log(location.state);
  let {title, description,price,_id}=location.state
 
  return (
    <>
    <SingleProd title={title} description={description} price={price} _id={_id}/>
    </>
    
  );
};
