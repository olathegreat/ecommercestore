import React from 'react';
import styled from "styled-components"
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { mobile } from '../Responsive';

const Container = styled.div`
width:100vw;
height:100vh;
background: linear-gradient(rgba(255,255,255,0.5) ,rgba(255,255,255,0.6)) ,url("images/shirt.jpg");
background-size:cover;
background-position:center;
display:flex;
align-items:center;
justify-content:center;
${mobile({height: "auto"})}



`
const Wrapper = styled.div`
padding:20px;
width:40%;
background-color:white;
${mobile({width: "75%"})};

`
const Form = styled.form`
display: flex;
flex-wrap:wrap;
flex-direction:column;

`
const Title = styled.h1`
  font-size:24px;
  font-weight:500;

`
const Input = styled.input`
     flex:1;
     min-width:40%;
     margin:20px 10px 0px 0px;
     padding:10px;
`
const Agreement = styled.span`
 font-size:12px;
 margin: 20px 0px;
 font-size:24px
`
const Button = styled.button`
  width:40%;
  border:none;
  padding:15px 20px;
  background-color: teal;
  color:white;
  cursor:pointer;

`

const Register = () => {
  return (
 <div>
  <Navbar></Navbar>
  
    <Container>
      
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="lastname"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm assword"/>
                <Agreement>
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>Create</Button>
            </Form>
        </Wrapper>
        

    </Container>

  </div>
  );
}

export default Register;
