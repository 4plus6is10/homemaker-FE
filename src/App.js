import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './NavBar/Header'
import Footer from './Footer/Footer';
import SearchResult from './Search/SearchResult'
import Detail from './DetailProductPage/Detail';
import Checkout from "./Cart/Checkout"
import Main from './Main';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route path="/search" element={<SearchResult/>} />
          <Route path="/products/:asin" element={<Detail/>} />
          <Route path="/cart" element={<Checkout/>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

