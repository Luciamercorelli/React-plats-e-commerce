
import { useState } from 'react';



import './App.css'
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Plants, { Plantsgrid } from './components/layout/Main/main';
import Background from './components/layout/Main/main';
import { MyRoutes } from './routes/routing';
import ProductList from './pages/ProductList/index';



function App() {

  return (
    <>
   <MyRoutes />
     
    </>
  );
}

export default App
