import React from 'react';
import styled from "styled-components"
import { mobile } from '../Responsive';
import {Link} from "react-router-dom";

const Container = styled.div`
display:flex;
${mobile({flexDirection: "column"})}

`
const Left = styled.div`
flex:1;
display:flex;
flex-direction: column ;
padding:20px;

`
const Logo = styled.h1`

`
const Desc = styled.p`
 margin:20px 0px;


`
const SocialContainer = styled.div`
display:flex;

`
const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color: #${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;
font-size:1em;

`
const Center = styled.div`
flex:1;
padding:20px;
${mobile({display: "none"})}

`
const Title = styled.h3`
margin-bottom:30px;
   
`
const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;


`
const ListItem = styled.li`
 width:50%;
 margin-bottom:10px;


`
const Right = styled.div`
flex:1;
padding:20px;
${mobile({backgroundColor: "#fff8f8"})}

`
const ContactItem = styled.div`
 margin-bottom:20px;
 display;flex;
 align-items:center;
`

const Payment = styled.img`
 width:60%;
`

const Footer = () => {
  return (
   <Container>
    <Left>
        <Logo><Link to="/">PyramidStore</Link></Logo>
        <Desc>
            
            There are varieties of online stores around, but nothing
            beats this platform . We have the best of quality wears, home 
            equipments, cosmetics and other beauty services available just for you.


        </Desc>
        <SocialContainer>
            <SocialIcon color="3b5999">
                <i style={{fontSize:"28px"}} className='icofont-facebook'></i>
            </SocialIcon>
            <SocialIcon  color="e4405f">
                <i style={{fontSize:"28px"}} className='icofont-instagram'></i>
            </SocialIcon>
            <SocialIcon color="55acee">
                <i style={{fontSize:"28px"}} className='icofont-twitter'></i>
            </SocialIcon>
            <SocialIcon color="e60023">
                <i style={{fontSize:"28px"}} className='icofont-pinterest'></i>
            </SocialIcon>
        </SocialContainer>
    </Left>
    <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem><Link to="/">Home</Link></ListItem>
            <ListItem><Link to="/cart">Cart</Link></ListItem>
            <ListItem><Link to="/productlist">Men Fashion</Link></ListItem>
            <ListItem><Link to="/productlist">Women Fashion</Link></ListItem>
            <ListItem><Link to="/productlist">Accessories</Link></ListItem>
            <ListItem><Link to="/login">My Account</Link></ListItem>
            <ListItem><Link to="/cart">Wishlist</Link></ListItem>
            <ListItem>Terms and Condition</ListItem>
        </List>

    </Center>
    <Right>
        <Title>Contact</Title>
        <ContactItem>
            <i style={{marginRight:"10px"}} className='icofont-institution'></i>
            622 dixie avenue, southern ohio, USA
        </ContactItem>
        <ContactItem>
            <i style={{marginRight:"10px"}} className='icofont-phone'></i>
            +123 456 789
        </ContactItem>
        <ContactItem>
            <i style={{marginRight:"10px"}} className='icofont-email'></i>
            contact@Olashop.dev
        </ContactItem>

        <Payment src="images/paymenticon.png"/>

    </Right>

   </Container>
  );
}

export default Footer;
