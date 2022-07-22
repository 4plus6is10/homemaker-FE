import React, { useContext } from 'react'
import Card from '../Search/card';
import { Col } from "antd";
import { Link } from 'react-router-dom';
// import { useHistory, useParams } from 'react-router-dom';


// const BASE_URL = "";

// let {id} = useParams();
const Product = (props) => {
    console.log(props.asin);
    return (
      <Col lg={6} md={8} xs={24}>
      <Card >
        <div key={props.asin}>
        <Link to={`/products/${props.asin}` }> 
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

    


export default Product