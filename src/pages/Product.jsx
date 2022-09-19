import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "../components/Card";
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

  const[shown,setShown]=useState([])

  const {state} = useLocation();
  console.log(state);
  const getData = async () => {
    const response = await fetch(`http://127.0.0.1:5000/products/`);
    let res = await response.json();

    setData(res);
    setShown(res);
    console.log(state.category);
    if(state.filter) {
      console.log('hi gi');
      console.log('shown');
      setShown(res.filter((ele)=> 
        ele.categories.includes(state.category)))
    }

    console.log(shown);
  };

  useEffect(() => {
    getData();
  }, [state]);

  return (
    <>
      <Container>
        {shown.map((e) => (
          <Card
            title={e.title}
            description={e.desc}
            price_1kg={e.price_1kg}
            price_500g={e.price_500g}
            weight={e.weight}
            _id={e._id}
            image={e.img}
          />
        ))}
      </Container>
    </>
  );
};
