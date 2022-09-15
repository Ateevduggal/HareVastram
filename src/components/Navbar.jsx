import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined,WhatsApp } from "@material-ui/icons";
// import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import React from 'react'
const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" ,width:'100%'})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: orange;
  font-style:Georgia (serif);
  font-weight : 800;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16, }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>HAREVASTRAM</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <socialIcon color="success">
              <a href="https://api.whatsapp.com/send?phone=%2B917017110988&fbclid=IwAR0Li9CaQfVXe5BMRlcHjpxs-b6lkKG3FqGo1H73jxFsdrErpA_9w9YcFiI">
                  <WhatsApp />
              </a>
            </socialIcon>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;