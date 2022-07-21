import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from "axios";
import ProductInfo from "./Sections/ProductInfo";
import ProductImage from "./Sections/ProductImage";
import { Row, Col } from "antd";


//왜 product를 못받아오는거지?!!!!!!!!!????????????????????????????????????????????????????????!?!??

function DetailProductPage(props) {
  // let productName = props.match.params.name;

  const {productName} = useParams();
  console.log(productName);
  const [product, setProduct] = useState({});
  
  useEffect(() => {
    axios
    .get(`/products/name?name=${productName}`)
    .then((response) => {
      //콘솔로 무슨결과가옴?
          console.log("error")
          console.log("response.data", response.data);
          setProduct(response.data);
      });
  }, []);
  return (
    <div style={{ width: "100%", padding: "3rem 4rem" }}>
      <br />
      <div stye={{ display: "flex", justifyContent: "center" }}>
          {/* <h1>{product.title}</h1> */}
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

export default DetailProductPage;
