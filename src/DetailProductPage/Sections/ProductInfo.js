import React from "react";
import { Button, Descriptions } from "antd";

function ProductInfo(props) {
  return (
    <div>
      <Descriptions title="상품정보">
        <Descriptions.Item label="name">
          {/* {props.product.name} */}
        </Descriptions.Item>
        <Descriptions.Item label="price">
          {/* {props.product.price} */}
        </Descriptions.Item>
        <Descriptions.Item label="category">
          {/* {props.product.category} */}
        </Descriptions.Item>
        <Descriptions.Item label="buylink">
          {/* {props.product.buylink} */}
        </Descriptions.Item>
      </Descriptions>
      <br />
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button size="large" shape="round" type="danger" onClick>
          스크랩
        </Button>
      </div>
    </div>
  );
  }

export default ProductInfo;
