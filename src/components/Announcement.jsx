import styled from "styled-components";
import React from 'react'
const Container = styled.div`
  height: 50px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
  width:100%
  @media (max-width: 700px) and(min-width:300px){
    width:100%;
    height:25px;
  }
`;

const Announcement = () => {
  return <Container>Do order directly through whatsapp , Go on the top right corner</Container>;
};

export default Announcement;