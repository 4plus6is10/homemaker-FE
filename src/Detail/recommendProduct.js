import React, { useContext } from 'react'
import Card from '../Search/card'
import { Col } from "antd";

// const BASE_URL = "";

const recommendProduct = (props) => {

    const product = {
      id : props.id,
      seq: props.seq,
      name: props.name,
      asin: props.asin,
      price: props.price,
      buylink : props.buylink,
      imglink : props.imglink,
      category : props.category
    };
    return (
      <Col lg={6} md={8} xs={24}>
      <Card>
        <div>
          <img src = {props.imglink} width = "20%" height = "20%"/>
       <h4>이름 : {props.name}</h4>
       <p>카테고리 : {props.category}</p>
       <p>가격: {props.price}</p>
        </div>
      </Card>
      </Col>
    )
}


    // await fetch(BASE_URL,
    //     {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type' : 'application/json',
    //       },
    //       body: JSON.stringify({
    //         // 
    //       })
    //     }
    //   );
    
export default recommendProduct