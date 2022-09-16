import { Badge } from "@material-ui/core";
import { cardNumContaxt } from "../App";

import {
  PermIdentityOutlined,
  Search,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { mobile } from "../responsive";

const Container = styled.div`
  height: auto;
  position: absolute;
  z-index: 1;
  width: 100%;
  color: white;
  background-color: rgba(0, 0, 0, 0.9);
  ${mobile({ height: "50px" })};
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  ${mobile({ padding: "10px 0px" })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })};
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  background-color: transparent;
  ${mobile({ marginLeft: "0" })}
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  color: white;
  ${mobile({ width: "50px" })};
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  font-size: 20px;
  justify-content: center;
  display: flex;
  ${mobile({ fontSize: "10px" })};
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })};
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: white;
  text-decoration: none;
  list-style-type: none;
  && a::after {
    text-decoration: none;
    // color: white;
  }

  &:hover {
    color: #fbc41f;
    // background-color:#FBC41F;
    border: 1px solid #fbc41f;
    border-radius: 5px;
  }
  ${mobile({ fontSize: "8px", marginLeft: "2px" })};
`;

export default function Navbar() {
  // const { cardNum } = React.useContext(cardNumContaxt);
  const [cartNumbers, setCardNum] = useState(
    localStorage.getItem("cartNumbers")
  );
  useEffect(() => {}, [cartNumbers]);
let cart = JSON.parse(localStorage.getItem("cart_products")) || [];
// console.log(cart);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "grey", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>ESPER HONEY BEE</Logo>
        </Center>
        <Right>
          {/* <MenuItem>REGISTER</MenuItem> */}
          <MenuItem>
            <PermIdentityOutlined />
            {/* SIGN IN */}
          </MenuItem>
          <MenuItem>
            <NavLink style={{ textDecoration: "none", color: "white" }} to="/">
              HOME
            </NavLink>
          </MenuItem>

          <MenuItem>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/product"
            >
              PRODUCT
            </NavLink>
          </MenuItem>

          <MenuItem>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/aboutUs"
            >
              ABOUT US
            </NavLink>
          </MenuItem>

          <MenuItem>
            <Badge
              badgeContent={cart.length}
              color="primary"
            >
              <NavLink
            to="/cart"
          >
              <ShoppingCartOutlined />
              </NavLink>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}
