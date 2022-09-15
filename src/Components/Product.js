import React from 'react';
import styled from "styled-components"
import "./Style.css";
import {Link} from "react-router-dom";
import { mobile } from '../Responsive';

const Info= styled.div`
opacity:0;
 width:100%;
 height:100%;
 position:absolute;
 top:0;
 left:0;
 background-color: rgba(0,0,0,0.2);
 z-index:3;
 display:flex;
 align-items:center;
 justify-content:center;
 transition: all 0.5s ease;
 cursor:pointer;
`
const Container = styled.div`
flex:1;
margin:5px;
min-width: 580px;
height: 350px;
display:flex;
align-items:center;
justify-content:center;
background-color: #f5fbfd;
position:relative;
${mobile({minWidth:"350px"})};

&:hover ${Info}{
    opacity:1;

}
`
const Circle = styled.div`
width:200px;
height:200px
border-radius:50%;
background-color:blue;
position:absolute;



`

const Icon = styled.div`

 width:40px;
 height:40px;
 border-radius:50%;
 background-color:white;
 margin:10px;
 display:flex;
 font-size:.9em;
 justify-content:center;
 align-items:center;
 transition: all 0.5s ease;

 &:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
 }

`
const Image = styled.img`
height: 75%;
z-index:2; 
${mobile({width: "50%"})};
`

const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src= {item.img}/>
        <Info>
            <Link to="/product">
            <Icon>
                <i className='icofont-cart'></i>

            </Icon>


            </Link>

            <Link to="/product">
            <Icon>
                <i className='icofont-look'></i>

            </Icon>

            </Link>
           
           
            <Icon>
                <i className='icofont-heart-alt'></i>

            </Icon>
        </Info>
    </Container>
  );
}

export default Product;
