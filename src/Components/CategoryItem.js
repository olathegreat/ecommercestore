import React from 'react';
import styled from "styled-components";
import "../Direction Icons/icofont.min.css"
import "./Style.css"
import { mobile } from '../Responsive';
import {Link} from "react-router-dom";


const Container = styled.div`
flex:1;
margin-top:10px;
height: 70vh;
position:relative;

`
const Image = styled.img`
 width:100%;
 height: 100%;

 ${mobile({height: "50vh", objectFit:"cover"})} 
 `
const Info = styled.div`
position: absolute;
width:100%;
top:0;
left:0;
height:100%;
display:flex;
flex-direction:column;
align-items: center;
justify-content:center;


`
const Title = styled.h1`
 color:white;
 margin-bottom:20px;
`
const Button = styled.button`
cursor: pointer;
border:none;
padding:10px;
background-color:white;
color:gray;
font-weight:500;


`
const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button><Link to="/productlist">SHOP NOW</Link></Button>
        </Info>
      
    </Container>
  );
}

export default CategoryItem;
