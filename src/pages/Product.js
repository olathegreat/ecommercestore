import React from 'react';
import styled from "styled-components"
import Announcements from '../Components/Announcements';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Newsletter from '../Components/Newsletter';
import { mobile } from '../Responsive';

const Container = styled.div`

`
const Wrapper = styled.div`
padding:50px;
display:flex;
${mobile({padding: "10px", flexDirection:"column"})}

`
const ImgContainer = styled.div`
flex:1;
`
const Image = styled.img`
width:100%;
height:90vh;
object-fit:cover;
${mobile({height: "40%"})}

`
const InfoContainer = styled.div`
flex:1;
padding:0px 50px;
display:flex;
flex-direction:column;
justify-content:center;
${mobile({padding: "10px"})}
`
const Title = styled.h1`

font-weight:600;

`
const Desc = styled.div`
   margin:20px 0px;
   font-size:28px;
   font-weight:300;
`
const Price = styled.div`
font-weight:100;
font-size:100px;

`
const FilterContainer = styled.div`
width:50%;
margin: 30px 0px;
display:flex;
justify-content:space-between;
${mobile({width: "100%"})}
`
const Filter = styled.div`
  display:flex;
  align-items:center;


`
const FilterTitle = styled.span`
  font-size:20px;
  font-weight:500;

`
const FilterColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color: ${props=>props.color};
margin:0 5px

`
const FilterSize = styled.select`
 margin-left:10px;
 padding:5px;

`
const FilterSizeOption = styled.option`

`
const AddContainer = styled.div`
width:50%;
display:flex;
align-items:center;
justify-content:space-between;
${mobile({width: "100%"})};

`
const AmountContainer = styled.div`
 display:flex;
 align-items:center;
 font-weight:700;

`
const Amount = styled.span`
width:30px;
height:30px;
border-radius:10px;
border:1px solid teal;
font-size:20px;
display:flex;
align-items:center;
justify-content:center;
margin:15px;

`
const Button = styled.button`   
    padding: 15px;
    border: 2px solid teal;
    background-color:white;
    cursor:pointer;
    font-weight: 500;
    transition: all 0.8s ease;

    &:hover{
        background-color:teal;
        color:white;
        
    }

`

const Product = () => {
  return (
    <Container>
       <Navbar/>
       <Announcements/>
       <Wrapper>
        <ImgContainer>
           <Image src="images/product6.png"></Image>
        </ImgContainer>
        <InfoContainer>
            <Title>Jump Sneakers</Title>
            <Desc>
                This product is a fully synthetic shoe all the way from
                the united states, with over 200 conducted research to make
                 this product environmental friendly, comfortable to use and highly
                 fashionistic. All to meet up with your glamour.
            </Desc>
            <Price>$20</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="black"/>
                    <FilterColor color="darkblue"/>
                    <FilterColor color="gray"/>
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>

                <AmountContainer>
                    <i className='icofont-minus'></i>
                    <Amount>1</Amount>
                    <i className='icofont-plus'></i>
                </AmountContainer>
                <Button>Add To Cart</Button>
            </AddContainer>
        </InfoContainer>

       </Wrapper>
       <Newsletter/>
       <Footer/>
    </Container>
  );
}

export default Product;
