import React, {useState} from 'react';
import styled from 'styled-components';
import { sliderItems } from '../data';
import "./Style.css"
import { mobile } from '../Responsive';
import {Link} from "react-router-dom";




const Container = styled.div`
     width: 100%;
     height: 100vh;
     display: flex;
     position: relative;
     overflow:hidden;
     ${mobile({display: "none"})} 

`
const Arrow = styled.div`
  width: 50px;
  height:50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top:0;
  bottom:0;
  left: ${props=>props.direction=== "left" && "10px"};
  right: ${props=>props.direction==="right" && "10px"};  
  margin:auto;
  cursor: pointer;
  background-color: grey;
  opacity: .5;
  
  z-index:2;
  color: black;
  



`
const ArrowItem = styled.i`
font-size:2em;



`
const Wrapper = styled.div`
  height:100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props=> props.slideIndex * -100}vw);
`

const Slide = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
background-color: #${props=>props.bg}


`

const ImgContainer = styled.div`
height:100%;
flex:1;


`

const InfoContainer = styled.div`
flex:1;
padding: 50px;

`
const Title = styled.h1`
 font-size: 70px;

`
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;

`
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`
const Image = styled.img`
 height:80%;
`

const Slider = () => {
  const [slideIndex, setSlideIndex] =  useState(0);

  const handleClick = (direction) =>{
    if(direction==="left"){
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2 )
    }    else{
      setSlideIndex(slideIndex<2 ? slideIndex + 1 : 0)
    }  
  };
  return (
   <Container>
       <Arrow  direction="left" onClick={()=>handleClick("left")} className="direction-left">
          <ArrowItem className='icofont-rounded-left'></ArrowItem>
       </Arrow>
       <Wrapper  slideIndex={slideIndex}>
         {sliderItems.map(item=>(

                  <Slide  key={item.id} bg={item.bg}>
                      <ImgContainer>
                        <Image src={item.img}/>
                      </ImgContainer>
                      <InfoContainer>
                          <Title>{item.title}</Title>
                          <Description>{item.desc}</Description>
                          <Link to="/productlist"><Button>SHOP NOW</Button></Link>


                          

                      </InfoContainer>

                  </Slide>



         ))}
 
          
       </Wrapper>
       <Arrow direction="right" onClick={()=>handleClick("right")} className="direction-right">
          <ArrowItem className='icofont-rounded-right'></ArrowItem>
       </Arrow>
   </Container>
  );
}

export default Slider;
