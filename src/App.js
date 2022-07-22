import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from "./NavBar/NavBar";
import Footer from './Footer/Footer';
import SearchResult from './Search/SearchResult'
import Path from './DetailProductPage/Path';
import Checkout from "./Cart/Checkout"
import Product from './Product/Product';
import Main from './Main';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route path="/search" element={<SearchResult/>} />
          {/* <Route path="/product" element={<ProductDetailPage/>} /> */}
          <Route path="/products/:asin" element={<Path/>} />
          <Route path="/cart" element={<Checkout/>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

