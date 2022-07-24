import React, { useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import { Col,Card, Result } from "antd";
import { Link } from 'react-router-dom';
import StyledCard from '../Product/StyledCard'
import Product from '../Product/Product';
import RecommandProduct from './RecommandProduct';
// import { useHistory, useParams } from 'react-router-dom';

// 수정필요
function RecommandProductsDetail(){
  const {asin} = useParams();
  console.log(asin);
  const [recommandProducts,setRecommandProducts] = useState([]);

  useEffect(() => {
    getRecommandProduct1();
    // getRecommandProductsByAsin()
  }, []);

  //     const getRecommandProductsByAsin = () => {
  //       axios.get('http://localhost:8092/products/asin?asin='+ recommandAsins[0])
  //         .then((res)=> {
  //         setRecommandProducts(res.data);
  //         console.log(recommandProducts);});
  // }

      const getRecommandProduct1 =() =>{ axios.get('http://localhost:8092/products/asin?asin='+asin)
          .then((res)=> {
            setRecommandProducts(res.data);});
          }
      
          const RecommandProducts = recommandProducts.map(recommandProduct =>
            <Product
            key = {recommandProduct.id}
            seq = {recommandProduct.seq}
            name = {recommandProduct.name}
            asin = {recommandProduct.asin}
            price = {recommandProduct.price}
            buylink = {recommandProduct.buylink}
            imglink = {recommandProduct.imglink}
            category = {recommandProduct.category}
        />
    )
    return (
      <div>
        {RecommandProducts}
      </div>
     )
}



export default RecommandProductsDetail;