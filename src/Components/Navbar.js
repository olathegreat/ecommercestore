import React, {useState} from 'react';
import styled from "styled-components"
import "../regular/icofont.min.css"
import "./Style.css";
import {Link} from "react-router-dom";
import { mobile } from '../Responsive';




const Container = styled.div`
  ${mobile({height: "50px", marginBottom: "20px"})}

`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items:center;
  justify-content: space-between;
  ${mobile({display: "none"})};

`
const MobileWrapper = styled.div`

  
  flex-direction:column;
  display:none;
  ${mobile({display:"flex",})};


`
const Left= styled.div`
  flex:1;
  display: flex;
  align-items: center;

`
const Language = styled.span`
       font-size: 14px;
       cursor: pointer;
       ${mobile({display: "none"})}
`
const SearchContainer = styled.span`
    border: .5px solid lightgray;
    display:flex;
    align-items: center;
    margin-left: 25px;
    padding:5px;


`
const Input = styled.input`
  border: none;
  ${mobile({width: "50px"})}


`
const Logo = styled.h1`
   font-weight: bold;
   ${mobile({fontSize: "24px"})};
`
const Center = styled.div`
   flex:1;
   text-align: center;
`
const Right = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex:2,justifyContent: "flex-end", marginRight:"10px"})}

`
const MenuItem = styled.div`
   font-size: 14px;
   cursor: pointer;
   margin-left:25px;
   ${mobile({fontSize: "12px", marginLeft:"10px"})}
`

const Navbar = () => {
  const [displayToggle, setDisplayToggle] = useState(false);
  const displayToggler = () =>{
    setDisplayToggle(displayToggle=>!displayToggle);
  }
  return (
    <Container>
        <Wrapper>
          <Left>
             <Language>EN</Language>
             <SearchContainer>
                <Input placeholder="search" style={{color:"gray", fontSize:"16px"}}></Input>
                <i style={{color:"gray"}} className='icofont-look'></i>
             </SearchContainer>

          </Left>
          
          <Center><Logo><Link to="/">PyramidStore</Link></Logo></Center>
          <Right>

            <MenuItem><Link to="/register">Register</Link></MenuItem>
            <MenuItem><Link to="/login">Login</Link></MenuItem>
            <MenuItem>
              <Link to="/cart">

                   
                <div className='badge'>
                  <i  className='icofont-cart'></i>
                  <div className='message-number'>4</div>

                </div>


              </Link>


            
               
            </MenuItem>
          </Right>

        </Wrapper>
        <MobileWrapper  responsive="responsive">
          <div style={{display:"flex", justifyContent:"space-between"}}>
            <Left style={{marginLeft:"10px"}}><Logo><Link to="/">PyramidStore</Link></Logo></Left>
            <Right>
              <i onClick={()=>{displayToggler()}} style={{display:!displayToggle ? "flex" : "none", transition:"all 0.8s ease"}} className='icofont-navigation-menu'></i>
              <i onClick={()=>{displayToggler()}} style={{display:displayToggle ? "flex" : "none", transition:"all 0.8s ease"}} className='icofont-close'></i>

            </Right>
          </div>
           

            <div style={{display:displayToggle ? "flex" : "none", width:"100%",padding:"10px", height:"100px", justifyContent:"space-between", alignItems:"center" ,flexDirection:"column", zIndex:"3", background:"white", transition:"all 0.8s ease"}}>

                     <MenuItem><Link to="/register">Register</Link></MenuItem>
                     <MenuItem><Link to="/login">Login</Link></MenuItem>
                      <MenuItem>
                        <Link to="/cart">

                            
                          <div className='badge'>
                            <i  className='icofont-cart'></i>
                            <div className='message-number'>4</div>

                          </div>


                        </Link>


                      
                        
                      </MenuItem>
            </div>
            

        </MobileWrapper>
     
    </Container>
  );
}

export default Navbar;
