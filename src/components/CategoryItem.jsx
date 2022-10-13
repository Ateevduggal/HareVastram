import { WhatsApp } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import React from "react";
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 65%;
  object-fit: cover;
  align-items: center;
  justify-content: center;
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  color: black;
  margin-top: 75%;
  padding: 0 2%;
`;

const Button = styled.button`
  border: none;
  margin-top: 5%;
  padding: 5px 10px;
  background-color: teal;
  font-size: 15px;
  color: white;
  cursor: pointer;
  font-weight: bold;
  border-radius: 50px;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://api.whatsapp.com/send?phone=%2B917060941818&fbclid=IwAR0Li9CaQfVXe5BMRlcHjpxs-b6lkKG3FqGo1H73jxFsdrErpA_9w9YcFiI"
            target="_blank"
          >
            ORDER NOW
          </a>
        </Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
