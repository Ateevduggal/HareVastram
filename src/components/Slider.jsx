import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";
import React from 'react';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  @media (max-width: 700px) and(min-width:300px){
    width:100%;
    height: 100vh;
    display: flex;
    flex-direction:column;
    position: relative;
    overflow: hidden;
  }
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.0s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  @media (max-width: 700px) and(min-width:300px){
    height: 100%;
    display: flex;
    transition: all 1.0s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
  }
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
  @media (max-width: 700px) and(min-width:300px){
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${(props) => props.bg};
  }
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
  color : orange;
  animation : mover 5s linear infinite;
  @keyframes mover{
    0%{
        text-shadow: 0 0 30px rgb(0,0,0,0);
    }
    50%{
      text-shadow: 0 0 30px rgb(0,0,0,0.30);
      transform: translateY(30px)
    }
    100%{
      text-shadow: 0 0 30px rgb(0,0,0,0);
      
    }
  }
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  animation : mover 5s linear infinite;
  @keyframes mover{
    0%{
        text-shadow: 0 0 30px rgb(0,0,0,0);
    }
    50%{
      text-shadow: 0 0 30px rgb(0,0,0,0.30);
      transform: translateY(30px)
    }
    100%{
      text-shadow: 0 0 30px rgb(0,0,0,0);
      
    }
  }
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  color: blue;
  font: bolder;
  border : 2px solid pink;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;