import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from "./NavBar/NavBar";
import Footer from './Footer/Footer';
import SearchResult from "./Search/SearchResult";
import ProductDetailPage from "./DetailProductPage/ProductDetailPage"
import Checkout from "./Cart/Checkout"
import Detail from './Detail/Detail'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Routes>
          <Route path="/" element={<SearchResult/>} />
          {/* <Route path="/product" element={<ProductDetailPage/>} /> */}
          <Route path="/cart" element={<Checkout/>} />
          <Route path="/detail" element={<Detail/>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

