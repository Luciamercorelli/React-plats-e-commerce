import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState,useContext } from 'react';
import Login  from '../pages/Login'
import Home from '../pages/Home';
import Product from '../pages/Product';
import {ProductType} from '../types/index';
import { CartProvider}  from '../context/index';
import Cart from '../pages/Cart';

interface CartProductType extends ProductType {
  quantity: number;
}

export function MyRoutes() {
  const [cart, setCart] = useState<CartProductType[]>(() => {
    
    const localData = localStorage.getItem('cart');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

 

  return (
    <CartProvider>
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/product/:productId" element={<Product  />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}
