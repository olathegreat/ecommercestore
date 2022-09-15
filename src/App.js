import React from 'react';
import Cart from './pages/Cart';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';


const App = () => {
  return (
     <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/productlist'  element={<ProductList/>}/>
      <Route path='/product'  element={<Product/>}/>
      <Route path='/register'  element={<Register/>}/>
      <Route path='/login'  element={<Login/>}/>
      <Route path='/cart'  element={<Cart/>}/>
     </Routes>  
  )
}

export default App;

    
