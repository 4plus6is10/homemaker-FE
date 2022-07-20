import React, { useContext } from 'react'
import Card from '../Search/card';
import { Col } from "antd";
import Item from 'antd/lib/list/Item';
// import { useHistory, useParams } from 'react-router-dom';


// const BASE_URL = "";

// let {id} = useParams();
const Product = (props) => {

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
      <Card param = {Product.name}>
        <div key={props.name}>
          <a href={`/products/name?name=${props.name}`}>
            <img src = {props.imglink} width = "20%" height = "20%"/>
            {/* <img src={`/showImage?asin=${props.asin}.png`} width = "70%" height = "70%"/> */}
            <h4>{props.name}</h4>
            <br/>
            <p>${props.price}</p>
            <br/>
            <p>Category : {props.category}</p>
            <br/>
            <p>ID: {props.id}</p>
          </a>
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
    


export default Product