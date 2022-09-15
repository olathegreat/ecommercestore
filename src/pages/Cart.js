
import styled from "styled-components";
import Announcements from '../Components/Announcements';
import Footer from '../Components/Footer';
import "../regular/icofont.min.css"
import Navbar from '../Components/Navbar';
import { mobile } from "../Responsive";
import {Link} from "react-router-dom";


const Container = styled.div`

`
const Wrapper = styled.div`
padding:20px;
${mobile({padding: "10px"})}

`
const Title = styled.h1`
 font-weight:300;
 text-align:center;
`

const Top = styled.div`
 display:flex;
 align-items:center;
 justify-content:space-between;
 padding:20px

`
const TopButton = styled.button`
   padding:10px;
   font-weight:600;
   cursor:pointer;
   border: ${props=>props.type==="filled" && "none"};
   background-color: ${props=>props.type==="filled" ?"black": "transparent"};
   color: ${props=>props.type==="filled" && "white"};

`
const TopTexts = styled.div`
${mobile({display: "none"})}


`
const TopText = styled.span`
text-decoration:underline;
margin:0px 10px;
cursor:pointer;

`
const  Bottom = styled.div`
display:flex;
justify-content:space-between;
${mobile({flexDirection: "column"})}

`
const Info = styled.div`
 flex:3;

`
const Product = styled.div`
display:flex;
justify-content:space-between;
${mobile({flexDirection: "column"})}

`
const ProductDetail = styled.div`
    flex:2;
    display:flex;
`
const Image = styled.img`
  width:200px;
`
const   Details = styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;

`
const ProductName = styled.span`

`
const ProductId = styled.span`

`
const ProductColor = styled.span`
width:20px;
height:20px;
border-radius:50%;
background-color: ${props=>props.color};


`
const ProductSize = styled.span`

`
const Pricedetail = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;

`
const ProductAmountContainer = styled.div`
 display:flex;
 align-items:center;
 margin-bottom:20px;


`
const ProductAmount = styled.div`
  font-size:24px;
  margin:5px;
  ${mobile({margin: "5px 15px"})}
`
const ProductPrice = styled.div`
font-size:30px;
font-weight:300;
${mobile({marginBottom: "20px"})}


`


const Summary = styled.div`
flex:1;
border: 0.5px solid lightgray;
border-radius:5px;
padding:20px;
height:50vh;
`

const Hr = styled.hr`
   background-color:white;
   border:none;
   height:1px;
`
const SummaryTitle = styled.h1`
font-weight:200;
 `
const SummaryItem = styled.div`
margin: 30px 0px;
display:flex;
justify-content:space-between;
font-weight : ${props=>props.type==="total" &&"500"};
font-size : ${props=>props.type==="total" &&"24px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
width:100%;
padding:10px;
background-color:black;
color:white;
font-weight:600;
`



const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton><Link to="/productlist">CONTINUE SHOPPING</Link></TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton  type="filled">CHECK OUT NOW</TopButton>
            </Top>
            <Bottom>

                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="images/product5.png"/>
                            <Details>
                                <ProductName><b>Product:</b> Nivea Perfume</ProductName>
                                <ProductId><b>Id:</b> 23456784</ProductId>
                                <ProductColor color="blue"/>
                                <ProductSize><b>Size:</b> 37.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <Pricedetail>
                            <ProductAmountContainer>
                                <i className="icofont-plus"></i>
                                <ProductAmount>2</ProductAmount>
                                <i className="icofont-minus"></i>
                            </ProductAmountContainer>
                            <ProductPrice>$20</ProductPrice>
                        </Pricedetail>
                    </Product>
                    <Hr/>

                    <Product>
                        <ProductDetail>
                            <Image src="images/product4.png"/>
                            <Details>
                                <ProductName><b>Product:</b> Nivea Perfume</ProductName>
                                <ProductId><b>Id:</b> 23456784</ProductId>
                                <ProductColor color="gold"/>
                                <ProductSize><b>Size:</b> 37.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <Pricedetail>
                            <ProductAmountContainer>
                                <i className="icofont-plus"></i>
                                <ProductAmount>2</ProductAmount>
                                <i className="icofont-minus"></i>
                            </ProductAmountContainer>
                            <ProductPrice>$ 10</ProductPrice>
                        </Pricedetail>
                    </Product>
                </Info>
                <Summary>
                   <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                   <SummaryItem>
                       <SummaryItemText>
                           SubTotal
                       </SummaryItemText>
                       <SummaryItemPrice>$ 50</SummaryItemPrice>
                   </SummaryItem>
                   <SummaryItem>
                       <SummaryItemText>
                           Estimated Shipping
                       </SummaryItemText>
                       <SummaryItemPrice>$ 30</SummaryItemPrice>
                   </SummaryItem>
                   <SummaryItem>
                       <SummaryItemText>
                           Shipping Discount
                       </SummaryItemText>
                       <SummaryItemPrice>-$ 5.90</SummaryItemPrice>
                   </SummaryItem>
                   <SummaryItem  type="total">
                       <SummaryItemText >
                           Total
                       </SummaryItemText>
                       <SummaryItemPrice>$74.10</SummaryItemPrice>
                   </SummaryItem>

                   <Button>CHECK NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  );
}

export default Cart;
