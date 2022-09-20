import { Badge } from "@material-ui/core";
// import logo from "../Assets/Images/esper-honey-logo.jpeg";
import logo2 from "../Assets/Images/logo-bgTransp.png";

import {
  MenuOutlined,
  PermIdentityOutlined,
  Search,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { inBetween, mobile } from "../responsive";
import { tablet } from "../responsive";

const Container = styled.div`
  padding-top: 10px;
  height: 8vh;
  position: absolute;
  z-index: 1;
  width: 100%;
  color: white;
  background-color: rgba(0, 0, 0, 0.9);

  ${tablet({ height: "5vh" })}
  ${mobile({ height: "3vh" })}
`;
const Wrapper = styled.div`
  width: auto;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  ${mobile({ padding: "10px 0px" })};
  ${tablet({ fontSize: "smaller" })}
  ${inBetween({ width: "auto" })}
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
  ${mobile({ display: "none" })};
  ${inBetween({ display: "none" })}
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
  ${mobile({ fontSize: "10px", postion: "absolute", paddingLeft: "50px" })};
  ${tablet({ fontSize: "small" })}
`;

const LogoImage = styled.img`
  margin-left: 5px;
  width: 45px;
  height: 45px;
  margin-top: 0;
  position: absolute;
  // ${mobile({ width: "20%", height: "20%" })};
  ${mobile({ display: "none" })}
  ${tablet({ width: "20px", height: "20px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })};
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-weight: 600;

  && a {
    text-decoration: none;
    color: white;
  }
  && a:hover {
    color: #fbc41f;
  }
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

  && NavLink:hover {
    color: #fbc41f;
    // background-color:#FBC41F;
    border-radius: 5px;
  }
  // ${mobile({ fontSize: "8px", marginLeft: "2px", display: "none" })};
  ${tablet({ fontSize: "smaller" })};
`;

const BurgerMenu = styled.div`
  display: none;
  position: absolute;
  top: 25%;
  ${mobile({ display: "block" })}
`;

const user = localStorage.getItem("token");

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  let cart = JSON.parse(localStorage.getItem("cart_products")) || [];
  const theFunction = () => {
    setShowNav(!showNav);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
   window.location.reload();
  };
  return (
    <Container id="navbar_section">
      <Wrapper>
        <Left>
          <LogoImage src={logo2} />
          {/* <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "grey", fontSize: 16 }} />
          </SearchContainer> */}
        </Left>
        <Center>
          <Logo>ESPER HONEY BEE</Logo>
        </Center>
        <Right>
          {/* <MenuItem>REGISTER</MenuItem> */}
          <MenuItem>
            {user && (
              <div className="dropdown">
                <button className="dropbtn">
                  <PermIdentityOutlined />
                </button>
                <div className="dropdown-content">
                  <a
                    onClick={() => {
                      handleLogout();
                    }}
                  >
                    Log Out
                  </a>
                </div>
              </div>
            )}
            {!user && (
              <Button>
                <a href="/login">SIGN IN</a>
              </Button>
            )}
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
              PRODUCTS
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
            <Badge badgeContent={cart.length} color="yellow">
              <NavLink to="/cart">
                <ShoppingCartOutlined />
              </NavLink>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
      <BurgerMenu>
        <button
          onClick={theFunction}
          style={{
            backgroundColor: "transparent",
            color: "white",
            border: "none",
          }}
        >
          <MenuOutlined style={{ width: "200%", height: "200%" }} />
        </button>
        <div className={showNav ? "show" : "dontshow"}>
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/product">PRODUCTS</a>
            </li>
            <li>
              <a href="/aboutUs">ABOUT US</a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
          </ul>
        </div>
      </BurgerMenu>
    </Container>
  );
}
