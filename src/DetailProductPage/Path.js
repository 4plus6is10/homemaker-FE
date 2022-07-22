import React, { useEffect, useState } from "react";
import { useParams, useHistory } from 'react-router-dom'
import axios from "axios";
import { Row, Col } from "antd";
import Value from "./Value";


function ProductDetailPage(asin) {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProductByName();
  }, []);

    const getProductByName = () => {
        axios.get('/products/asin?asin='+asin)
        .then((res)=> {
          console.log(res.data);
          console.log(res.data[0]);
          setProducts(res.data)});
      }

      const Products = products.map(product =>
        <Value
            key = {product.id}
            seq = {product.seq}
            name = {product.name}
            asin = {product.asin}
            price = {product.price}
            buylink = {product.buylink}
            imglink = {product.imglink}
            category = {product.category}
        />
    )

  return Products;
}
  
function Path() {

  const {asin} = useParams();
  const Products = ProductDetailPage(asin);

  return (<>
    <div>
        {Products}
    </div>
  </>);
}
export default Path;
