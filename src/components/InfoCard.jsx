import React from "react";
import "./InfoCard.scss";
import beesImg from "../Assets/Images/d67d3535-e986-4cfd-90bb-adbc7f871904.jpeg";
import honeyImg from "../Assets/Images/20220628_135945.jpg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
width: auto;
height:auto;
display:flex;
margin: 20px;
flex-direction:row;
justify-content: space-between;
padding:150px;
${mobile({flexDirection:"column"})}
${tablet ({flexDirection: "column", marginTop:"0px", padding:"0px"})}
`

export default function InfoCard() {
  return (
    <Container>

    <div className="container-info">
      <div className="blog-card">
        <div className="meta">
          <div
            class="photo"
            style={{
              backgroundImage:
              `url(${beesImg})`,
            }}
            ></div>
        </div>
        <div className="description">
          <h1 className="title-info">Our Queen</h1>
          <h2>A Leader for our bees</h2>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
            dolorum architecto obcaecati enim dicta praesentium, quam nobis!
            Neque ad aliquam facilis numquam. Veritatis, sit.
          </p>
          <p className="read-more">
            <NavLink to="/aboutUs">Read More</NavLink>
            
          </p>
        </div>
      </div>
    </div>
       <div className="container-info">
       <div className="blog-card">
         <div className="meta">
           <div
             class="photo"
             style={{
               backgroundImage:
               `url(${honeyImg})`,
              }}
              ></div>
         </div>
         <div className="description">
           <h1 className="title-info">Our Honey</h1>
           <h2>A Leader for our bees</h2>
           <p>
             {" "}
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
             dolorum architecto obcaecati enim dicta praesentium, quam nobis!
             Neque ad aliquam facilis numquam. Veritatis, sit.
           </p>
           <p className="read-more">
             <a href="#">Read More</a>
           </p>
         </div>
       </div>
     </div>
              </Container>
  );
}
