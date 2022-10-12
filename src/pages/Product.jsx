import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "../components/Card";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";
import { Loading } from "../components/loading page/Loading";
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  ${mobile({ flexDirection: "column" })}
  ${tablet({})}
`;
export const Product = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  const [shown, setShown] = useState([]);

  const { state } = useLocation();
  console.log(state);
  const getData = async () => {
    setLoading(true);
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/products/`)
      // let res = await response.json();
      // setData(res);
      // console.log(res);
      // setShown(res);
      // console.log(state.category);
      .then((res) => {
        res.json().then((data) => {
          setLoading(false);
          setData(data);
          setShown(data);
          if (state.filter) {
            console.log("hi gi");
            console.log("shown");
            setShown(
              data.filter((ele) => ele.categories.includes(state.category))
            );
          }
        });
      });

    console.log(shown);
  };

  useEffect(() => {
    getData();
  }, [state]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          {shown.map((e) => (
            <Card
              title={e.title}
              description={e.desc}
              price_1kg={e.price_1kg}
              price_500g={e.price_500g}
              weight={e.weight}
              _id={e._id}
              avatar={e.avatar}
            />
          ))}
        </Container>
      )}
    </>
  );
};
