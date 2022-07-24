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
function RecommandProductsDetail({recommandAsins}){
  
  console.log(recommandAsins);
  const [recommandProducts,setRecommandProducts] = useState([]);

  // useEffect(() => {
  //   const results = recommandAsins && recommandAsins.reduce((prevPrms, recommandAsin) => (
  //     prevPrms.then(async prevRes => { 
  //       const currRes = await axios.get('http://localhost:5000/recoProducts/asin?asin='+recommandAsin)
  //       return [...prevRes, currRes]
  //       })
  //       ), Promise.resolve([])) 
        
  //       results.then(data => {
  //         setRecommandProducts(data)
  //         console.log(data);
  //       })
  //   // rendering();
  // }, []);
  // const rendering = () => {
  //   const result =[];
  //   for (let i = 0; i <recommandAsins.length; i++){
  //     result.push(axios.get('http://localhost:5000/recoProducts/asin?asin='+i));
  //   }
  //   console.log(result);
  //   return result;
//       const RecommandProducts = recommandProducts.map(recommandProduct =>
//         <Product
//         key = {recommandProduct.id}
//         seq = {recommandProduct.seq}
//         name = {recommandProduct.name}
//         asin = {recommandProduct.asin}
//         price = {recommandProduct.price}
//         buylink = {recommandProduct.buylink}
//         imglink = {recommandProduct.imglink}
//         category = {recommandProduct.category}
//     />
// )

    return (
      <div>
        {recommandProducts}
      </div>
  )
}



export default RecommandProductsDetail;