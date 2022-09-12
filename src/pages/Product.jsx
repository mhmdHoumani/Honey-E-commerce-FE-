import React, { useEffect, useState } from "react";

import { Card } from "../components/Card";
// import React from "react";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: space-evenly;
  ${mobile({ flexDirection: "column" })}
  ${tablet({})}
`;

export const Product = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(
      `http://127.0.0.1:5000/products`
    )
    let data = await response.json();

    setData(data);
  
    console.log(data)
  }

  useEffect(() => {

      getData()
  
  }, []);


  return (
    <>
      <Container>
      {data.map((e) => (
        <Card title={e.title} description={e.desc} price={e.price} />
      ))}
       
      </Container>
    </>
  );
};
