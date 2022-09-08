import React from 'react'
import styled from "styled-components";

export const FooterWrapper = styled.div`
  // max-height: 400px
  font-family: Quicksand, arial, sans-serif;
  background-color: #166191;
  padding-top: 100px;
  padding-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  // position: relative;
`;
export const Container_footer = styled.div`
  display: flex;
  justify-content: space_between;
`;
export const Content_footer = styled.div`
  align-items: center;  
  
  

`;
export const logo_footer = styled.div`
  justify-content: flex-start;
  text-align: left;
`;
export const list_footer = styled.ul`
  display: flex
`;
export const listNav_footer = styled.li`
  display: flex
`;



const Footer = () => {
  return (
   <FooterWrapper>
    <Container_footer>
      <Content_footer>
        <logo_footer>LOGO</logo_footer>
        <list_footer>
          <listNav_footer>Home</listNav_footer>
          <listNav_footer>Products</listNav_footer>
          <listNav_footer>Contact</listNav_footer>
          
        </list_footer>


      </Content_footer>

    </Container_footer>
   {/* <h1>hello</h1> */}
   </FooterWrapper>
  )
}

export default Footer