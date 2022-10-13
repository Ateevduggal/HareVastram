import styled from "styled-components";
import React from "react";
const Container = styled.div`
  height: 50px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
  width: 100% @media (max-width: 700px) and(min-width: 300px) {
    width: 100%;
    height: 25px;
  }
`;

const Announcement = () => {
  return (
    <Container>
      <a
        style={{ color: "white" }}
        href="https://api.whatsapp.com/send?phone=%2B917060941818&fbclid=IwAR0Li9CaQfVXe5BMRlcHjpxs-b6lkKG3FqGo1H73jxFsdrErpA_9w9YcFiI"
        target="_blank"
      >
        Click to Order on Whatsapp
      </a>
    </Container>
  );
};

export default Announcement;
