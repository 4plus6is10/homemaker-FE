import React, { useEffect, useState } from "react";
import axios from "axios";
import {Col, Row } from "antd";
import {RocketOutlined} from '@ant-design/icons'
import Product from "../Product/Product";
import SearchIcon from '@material-ui/icons/Search'

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
        if (search === null || search ==='') { // 입력 안 할 시 전체 상품 출력
            axios.get('http://localhost:8092/products')
            .then((res)=> {setProducts(res.data)});
            console.log(products);
        }else {
            axios.get(`http://localhost:8092/products/keyword?keyword=${search}` // 입력 키워드를 받아와서 product로 설정
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
  <p/>
     <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={loadMoreHandler}>더보기</button>
    </div>	
</div>

)
}


export default SearchResult