import React, { useEffect, useState } from "react";
import axios from "axios";
import {Col, Card, Row } from "antd";
import {RocketOutlined} from '@ant-design/icons'
import Meta from "antd/lib/card/Meta";
import SimpleImageSlider from "react-simple-image-slider";
import CheckBox from "./Sections/CheckBox";
import { continents, price } from "./Sections/Datas";
import RadioBox from "./Sections/RadioBox";
import SearchFeature from "./Sections/SearchFeature";
import Product from "../Product/Product";

function SearchResult() {
  const [products, setProducts] = useState([]);
  const [SearchTerm, setSearchTerm] = useState("")

  const Products = products.map(product =>
    <Product
        key = {product.seq}
        seq = {product.seq}
        name = {product.name}
        asin = {product.asin}
        price = {product.price}
        buylink = {product.buylink}
        imglink = {product.imglink}
        category = {product.category}
    />
)
useEffect(() => {
  const fetchProducts = async() => {
    const response = await fetch('/products',
    {
      method: 'get',
        headers: {
          'Content-Type' : 'application/json',
        }
      })
    console.log(response);

    let responseData = await response.json();
    console.log(responseData);
    responseData = responseData.slice(0,1);

    const productsData = [];
    for (const key in responseData) {
      productsData.push({
        id: key,
        seq: responseData[key].seq,
        name: responseData[key].name,
        asin: responseData[key].asin,
        price: responseData[key].price,
        buylink: responseData[key].buylink,
        imglink: responseData[key].imglink,
        category: responseData[key].category,
      });
    }
    console.log(productsData);
    setProducts(productsData);
  };

  fetchProducts();
},[]);

  const renderCards = Products.map((product, index) => {
    return (
      <Col lg={6} md={8} xs={24} key={index}>
        <Card 
        //product _id로 주소를 만듬
        cover={<a href={`/product/${product.name}`}><SimpleImageSlider images={product.imglink} /></a>}>
        </Card>
      </Col>
    );
  });

return (
    <div style={{display: "flex", justifyContent : "center", padding: "30px"}}>
      {renderCards}
      </div>
  

)
}

export default SearchResult
