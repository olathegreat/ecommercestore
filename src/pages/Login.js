import React from 'react';
import styled from "styled-components";
import { mobile } from '../Responsive';

const Container = styled.div`
width:100vw;
height:100vh;
background: linear-gradient(rgba(255,255,255,0.5) ,rgba(255,255,255,0.6)) ,url("images/light.png");
background-size:cover;
background-position:center;
display:flex;
align-items:center;
justify-content:center;

`
const Wrapper = styled.div`
padding:20px;
width:25%;
background-color:white;
${mobile({width: "75%"})}

`
const Form = styled.form`
display: flex;
flex-direction:column;

`
const Title = styled.h1`
  font-size:24px;
  font-weight:500;

`
const Input = styled.input`
     flex:1;
     min-width:40%;
     margin:10px  0px;
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
  display:flex;
  

`

const Link = styled.a`

text-align:center;
margin:5px 0px;
font-size:12px;
text-decoration:underline;
cursor:pointer;

`


const Login = () => {
  return (
    <Container>
    <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          
            <Input placeholder="username"/>
        
            <Input placeholder="password"/>
            
          
            <Button>LOGIN</Button>
            <Link>Forgot password </Link>
            <Link>Create a new account</Link>
        </Form>
    </Wrapper>

</Container>
  );
}

export default Login;
