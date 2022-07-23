import React, { useEffect, useState } from "react";
import { useParams, useHistory } from 'react-router-dom'
import axios from "axios";
import { Row, Col } from "antd";
import PlaceOrder from "./PlaceOrder";
import RecommandProducts from "../Recommand/RecommandProducts"

function ProductDetailPage(asin) {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProductByAsin();
  }, []);

    const getProductByAsin = () => {
        axios.get('/products/asin?asin='+asin)
        .then((res)=> {
          console.log(res.data);
          console.log(res.data[0]);
          setProducts(res.data)});
      }

      const Products = products.map(product =>
        <PlaceOrder
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
  
function Detail() {

  const {asin} = useParams();
  const Products = ProductDetailPage(asin);

  return (<>
    <div>
      {Products}
        <div className='recommendation'>
            <h2> 추천 제품: </h2>
            <RecommandProducts/>
    </div>
    </div>
  </>);
}
export default Detail;
