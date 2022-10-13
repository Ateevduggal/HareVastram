import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Room,
    WhatsApp,
  } from "@material-ui/icons";
  import styled from "styled-components";
  import { mobile } from "../responsive";
  import React from 'react';
  
  const Container = styled.div`
    display: flex;
    background-color : #232F3E;
    color: white;
    
    @media (max-width: 768px) {
      flex-direction: column;
      width:100%;
    }
    
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1`
    color:white;
  `;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>HAREVASTRAM</Logo>
          <Desc>
          Harevashtram is a indian online Lord Gopala's Dressing selling branded and own-label products 
          . Its an India's e-commerce store for lord gopala's dressing products, Its aims to providing a hassle free and enjoyable shopping experience to shoppers across the country with the widest range of brands and products on its portal.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <a href="https://www.facebook.com/profile.php?id=100085434391426">
              <Facebook />
              </a>
            </SocialIcon>
            <SocialIcon color="E4405F">
              <a href="https://instagram.com/harevastram?igshid=YmMyMTA2M2Y=">
              <Instagram />
              </a>
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <a href="https://api.whatsapp.com/send?phone=%2B917060941818&fbclid=IwAR0Li9CaQfVXe5BMRlcHjpxs-b6lkKG3FqGo1H73jxFsdrErpA_9w9YcFiI" target="_blank" >
              <WhatsApp />
              </a>
            </SocialIcon>
           
          </SocialContainer>
        </Left>
        {/* <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>LadduGopal Fashion</ListItem>
            <ListItem>New Collection</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center> */}
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> 
            2nd Floor, South Ving Plaza
            Opp. St. Anthony's Girls College
            Adarsh Nagar, Ajmer Road, Agra
            Uttar Pradesh - 282001, India
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> 7060941818
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> support@harevastram.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;