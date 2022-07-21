import React, { useEffect, useState } from "react";
import axios from "axios";
import {Col, Row } from "antd";
import {RocketOutlined} from '@ant-design/icons'
import Product from "../Product/Product";
import { Input } from "antd";

function SearchResult() {
    const [products, setProducts] = useState([]);
    const [Skip, setSkip] = useState(0);
    const [Limit, setLimit] = useState(8);
    const [search, setSearch] = useState("");
      
    const searchHandler = (event) => {
        event.preventDefault();
        setSearch(event.currentTarget.value);
    };

    const onSearch = (e) => {
        e.preventDefault();
        if (search === null || search ==='') {
            axios.get('/products')
            .then((res)=> {setProducts(res.data)});
            console.log(products);
        }else {
            axios.get(`/products/keyword?keyword=${search}`
            ).then((res)=> {setProducts(res.data)});
            console.log(products);
        }
    }
    const Products = products.map(product =>
        <Product
            key = {product.id}
            seq = {product.seq}
            name = {product.name}
            asin = {product.asin}
            price = {product.price}
            buylink = {product.buylink}
            imglink = {product.imglink}
            category = {product.category}
        />
    )
    const loadMoreHandler = () => {
        let skip = Skip + Limit;
        console.log(skip);
        setSkip(skip);
    };
  


return (
  <div style={{ width: "75%", margin: "3rem auto" }}>
  <div style={{ textAlign: "center" }}>
    <h2>
      {" "}
      HomeMaker <RocketOutlined />
    </h2>
  </div>
  <br />
  <br />
  <div style={{display: "flex", justifyContent : "center", padding: "30px"}}>
  {/* 검색창에 입력하는 도중 바뀌는건 어떻게? */}    
      <form onSubmit={e => onSearch(e)}>
        <input
          type="text"
          value={search}
          placeholder="input search text"
          onChange={searchHandler} />
      </form>
  </div>
  <Row gutter={[16, 16]}>{Products.slice(0,Limit+Skip)}</Row>
  <br />
     <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={loadMoreHandler}>더보기</button>
    </div>	
</div>

)
}


export default SearchResult