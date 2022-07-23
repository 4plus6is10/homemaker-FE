import React, { useContext } from 'react'
import { Col,Card } from "antd";
import { Link } from 'react-router-dom';
// import { useHistory, useParams } from 'react-router-dom';


const {Meta} = Card;

const RecommandProducts = (props) => {
    return (
      <Link to={`/products/${props.asin}` }>
      <Col lg={6} md={8} xs={24}>
      <Card
    hoverable
    cover={<img src={props.imglink} width = "10%" height = "0%" />}
  >
        <div key={props.asin}>
            {/* <img src = {props.imglink} width = "20%" height = "20%"/> */}
            {/* <img src={`/showImage?asin=${props.asin}.png`} width = "70%" height = "70%"/> */}
            <Meta title={props.name} />
            <h4>{props.name}</h4>
            <br/>
            <p>$ {props.price}</p>
            <br/>
            <p>Category : {props.category}</p>
            <br/>
        </div>
      </Card>
      </Col>
      </Link>
    )
}

    


export default RecommandProducts