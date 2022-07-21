import React, { useEffect, useState } from "react";
import { useParams, useHistory } from 'react-router-dom'
import axios from "axios";
import ProductInfo from "./Sections/ProductInfo";
import ProductImage from "./Sections/ProductImage";
import { Row, Col } from "antd";

 
//왜 product를 못받아오는거지?!!!!!!!!!????????????????????????????????????????????????????????!?!??

function ProductDetailPage(props) {
  // let productName = props.match.params.name;
  let name  = useParams();
  // let matchedproduct = props.name.find(function(product){
  //   return props.name == name;
  // });

  console.log(name);

  const [product, setProduct] = useState([]);
  
  // let product = props.Products.find(function(product) {
  //   return product.name = productName;
    
  // })
  
  // useEffect(() => {

  //   getNameProducts();
  // }, []);

  // const getNameProducts = async() => {
  //   try {
  //     const response = await axios.get(`/products/name?name=${name}`)
  //     const responseData = response.data;
  
  //     // responseData = responseData.json();
  //     // responseData = responseData.slice(0,30);
  //     const productsData = [];
  //     for (const key in responseData) {
  //       productsData.push({
  //         id: key,
  //         seq: responseData[key].seq,
  //         name: responseData[key].name,
  //         asin: responseData[key].asin,
  //         price: responseData[key].price,
  //         buylink: responseData[key].buylink,
  //         imglink: responseData[key].imglink,
  //         category: responseData[key].category,
  //       });
  //     }
  //     setProduct(productsData);
  //     console.log(productsData);
  //   } catch(err) {
  //     console.log("Error >>",err)
  //   }
  // };
  
  return (
    <div style={{ width: "100%", padding: "3rem 4rem" }}>
      <br />
      <div stye={{ display: "flex", justifyContent: "center" }}>
          <h1>{props.name}</h1>
        </div>
      <br />
      <Row gutter={[16, 16]}>
        <Col lg={12} sm={24}>
          {/* ProductImage */}

          {/* <ProductImage detail={product}/> */}
        </Col>

        <Col lg={12} sm={24}>
          {/* ProductInfo */}

          <ProductInfo detail={product}/>
        </Col>
      </Row>
    </div>
  );
}

export default ProductDetailPage;
