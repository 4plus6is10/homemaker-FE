import React, { useContext } from 'react'
import Card from '../Search/card';
import { Col } from "antd";
import { Link } from 'react-router-dom';
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
    console.log(props.name);
    return (
      <Col lg={6} md={8} xs={24}>
      <Card >
        <div key={props.name}>
        <Link to={'/products/name?name=Umbra%20Mini%20Waste%20Can%201-1/2%20Gallon%20with%20Swing%20Lid,%20White' }> 
            <img src = {props.imglink} width = "20%" height = "20%"/>
            {/* <img src={`/showImage?asin=${props.asin}.png`} width = "70%" height = "70%"/> */}
            <h4>{props.name}</h4>
            <br/>
            <p>${props.price}</p>
            <br/>
            <p>Category : {props.category}</p>
            <br/>
            <p>ID: {props.id}</p>
        </Link>
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