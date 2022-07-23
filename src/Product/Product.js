import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import StyledCard from './StyledCard';
import { Card, Col,Row } from 'antd';

const Product = (props) => {
    return (
      <Col lg={6} md={8} xs={24}>
        <Card style={{border:"none"}}>
          <StyledCard className="card-item">
            <Link to={`/products/${props.asin}` }>
              <div className="card-image-wrapper">
                <img className="card-img" src={props.imglink} />
              </div>
              <div className="card-content" key={props.asin}>
                {/* <img src={`/showImage?asin=${props.asin}.png`} width = "70%" height = "70%"/> */}
                <h1 className="card-name" >{props.name}</h1>
                <h3 className="card-price">price: $ {props.price}</h3>
                <p className="card-category">Category : {props.category}</p>
              </div>
            </Link>
          </StyledCard>
        </Card>
      </Col>
    )
}

    


export default Product