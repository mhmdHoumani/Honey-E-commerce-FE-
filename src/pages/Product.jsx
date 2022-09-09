
import { Card } from "../components/Card";
import React from 'react'
import styled from "styled-components";
import { mobile, tablet } from "../responsive";
const Container = styled.div `
display :flex;
justify-content: space-evenly;
${mobile({flexDirection: "column"})}
${tablet({})}
`

export const Product = () => {
  return (
    <>
    <Container>
      <Card/>
      <Card/>
      <Card/>
      
    </Container>
    </>

  )
}
