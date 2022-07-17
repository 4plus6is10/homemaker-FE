import React from "react";
import { Button, Descriptions } from "antd";

function ProductInfo(props) {
  return (
    <div>
      <Descriptions title="상품정보">
        <Descriptions.Item label="Price">
          {/* {props.product.price} */}
        </Descriptions.Item>
        <Descriptions.Item label="Sold">
          {/* {props.product.sold} */}
        </Descriptions.Item>
        <Descriptions.Item label="view">
          {props.product.views}
        </Descriptions.Item>
        <Descriptions.Item label="Description">
          {props.product.description}
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
