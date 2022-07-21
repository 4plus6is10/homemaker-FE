import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from "./NavBar/NavBar";
import Footer from './Footer/Footer';
import SearchResult from "./Search/Main";
import ProductDetailPage from "./DetailProductPage/ProductDetailPage"
import Checkout from "./Cart/Checkout"
import Detail from './Detail/Detail'
import Product from './Product/Product';
import Main from './Search/Main';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Routes>
          <Route path="/" element={<Main product={Product}/>} />
          <Route path="/search" element={<SearchResult product={Product}/>} />
          <Route path="/products/:name" element={<ProductDetailPage product={Product}/>} />
          {/* <Route path="/product" element={<ProductDetailPage/>} /> */}
          <Route path="/cart" element={<Checkout/>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

