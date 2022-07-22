import React, { useContext } from 'react'
import Card from '../Search/card';
import { Col } from "antd";
import { Link } from 'react-router-dom';
import { Button, Descriptions } from "antd";
// import { useHistory, useParams } from 'react-router-dom';


// const BASE_URL = "";

// let {id} = useParams();
const Value = (props) => {
    console.log(props.name);
    return (
        <div>
          <Descriptions title="상품정보">
        <Descriptions.Item label="name">
          {props.name}
        </Descriptions.Item>
        <Descriptions.Item label="price">
          {props.price}
        </Descriptions.Item>
        <Descriptions.Item label="category">
          {props.category}
        </Descriptions.Item>
        <Descriptions.Item label="buylink">
          {props.buylink}
        </Descriptions.Item>
      </Descriptions>
      <br />
      <br />
      <br />
</div>
    )
}
    


export default Value