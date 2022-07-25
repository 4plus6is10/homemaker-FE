import React, { useEffect, useState, Suspense} from "react";
import { useParams, useHistory } from 'react-router-dom'
import axios from "axios";
import PlaceOrder from "./PlaceOrder";
import RecommandProduct from "../Recommand/RecommandProduct"

function ProductDetailPage(asin) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductByAsin();
  }, []);

    const getProductByAsin = () => {
        axios.get('http://localhost:8092/products/asin?asin='+asin)
        .then((res)=> {
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
            <RecommandProduct asin={asin}/>
    </div>
    </div>
  </>);
}
export default Detail;
