import { Badge } from "@material-ui/core";
import {  PermIdentityOutlined, Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
// import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  position:absolute;
  z-index:1;
  width:100%;
  color:white;

`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position:relative;

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;

`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  background-color:transparent;
  
`;

const Input = styled.input`
  border: none;
  background-color:transparent;
color:white;

`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  font-size: 20px;
  justify-content:center;
  display:flex;

`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
 
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

`;

export default function Navbar() {
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
          
        <PermIdentityOutlined/>
          {/* SIGN IN */}
          </MenuItem>
          <MenuItem>ABOUT US</MenuItem>

          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}
