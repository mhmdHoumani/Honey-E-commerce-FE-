import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #F4900A;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
`;

export const Announcement = () => {
  return <Container>Free Delivery in Beirut </Container>;
};
