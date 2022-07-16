import React, { useEffect, useState } from "react";
import axios from "axios";
import {Col, Card, Row } from "antd";
import {RocketOutlined} from '@ant-design/icons'
import Meta from "antd/lib/card/Meta";
import SimpleImageSlider from "react-simple-image-slider";
import CheckBox from "./Sections/CheckBox";
import { continents, price } from "./Sections/Datas";
import RadioBox from "./Sections/RadioBox";
import SearchFeature from "./Sections/SearchFeature";
import Product from "../Product/Product";

function SearchResult() {
  const [products, setProducts] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(8);
  const [PostSize, setPostSize] = useState(0);
  const [Filters, setFilters] = useState({
    continents: [],
    price: [],
  });
  const [SearchTerm, setSearchTerm] = useState("")

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
useEffect(() => {
  let body = {
    skip: Skip,
    limit: Limit,
  };

  fetchProducts();
},[]);

const fetchProducts = async() => {
  const response = await fetch('/products',
  {
    method: 'get',
      headers: {
        'Content-Type' : 'application/json',
      }
    })
  console.log(response);

  let responseData = await response.json();
  const productId = responseData.userId;

  console.log(responseData);
  responseData = responseData.slice(0,1);

  const productsData = [];
  for (const key in responseData) {
    productsData.push({
      id: key,
      seq: responseData[key].seq,
      name: responseData[key].name,
      asin: responseData[key].asin,
      price: responseData[key].price,
      buylink: responseData[key].buylink,
      imglink: responseData[key].imglink,
      category: responseData[key].category,
    });
  }
  console.log(productsData);
  setProducts(productsData);
};

    const handleFilters = (filters, category) => {
    const newFilters = { ...Filters };

    newFilters[category] = filters;

    showFilteredResults(newFilters);

    //filters 값에는 datas의 _id 값이 들어가있다
    console.log("filters", filters);

    if (category === "price") {
      let priceValues = handlePrice(filters);
      newFilters[category] = priceValues;
    }

    showFilteredResults(newFilters);
    setFilters(newFilters);
  };

  const renderCards = Products.map((product, id) => {
    return (
      <Col lg={6} md={8} xs={24} key={id}>
        <Card 
        //product _id로 주소를 만듬
        cover={<a href={`/product/${product.id}`}></a>}>
          <Meta title={product.title} description={`$${product.price}`} />
        </Card>
      </Col>
    );
  });

  // const updateSearchTerm = (newSearchTerm) =>{
  //   setSearchTerm(newSearchTerm)

  //   let body = {
  //     skip : 0,
  //     limit: Limit,
  //     filters: Filters,
  //     searchTerm: newSearchTerm
  //   }

  //   setSkip(0)
  //   setSearchTerm(newSearchTerm)
  //   getProducts(body)

  // }

  const loadMoreHandler = () => {
    let skip = Skip + Limit;
    // 더보기버튼 누를시 몇개더 나올지
    //  0  +   8
    //  8  +   8

    let body = {
      skip: skip,
      limit: Limit,
      loadMore: true,
    };

    // setProducts(productsData);
    setSkip(skip);
  };

  const showFilteredResults = (filters) => {
    let body = {
      skip: 0,
      limit: Limit,
      filters: filters,
    };

    // setProducts(productsData);
    setSkip(0);
  };

  //여기서 value 는 밑에 filter의 값
  const handlePrice = (value) => {
    const data = price;
    let array = [];

    for (let key in data) {
      if (data[key]._id === parseInt(value, 10)) {
        array = data[key].array;
      }
    }

    return array;
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
  {/* Filter */}
  <Row gutter={[16, 16]}>
    <Col lg={12} xs={24}>
      {/* CheckBox */}
      <CheckBox
        list={continents}
        handleFilters={(filters) => handleFilters(filters, "continents")}
      />
    </Col>
    <Col lg={12} xs={24}>
      {/* RadioBox */}
      <RadioBox
        list={price}
        handleFilters={(filters) => handleFilters(filters, "price")}
      />
    </Col>
  </Row>
  {/* Search */}
  {/* <div style={{display: "flex", justifyContent : "center", padding: "30px"}}>
      <SearchFeature
          refreshFunction = { updateSearchTerm }
      />
  </div> */}
  {/* Card */}
  <Row gutter={[16, 16]}>{renderCards}</Row>

  <br />
  {PostSize >= Limit && (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button onClick={loadMoreHandler}>더보기</button>
    </div>
  )}
</div>

)
}


export default SearchResult


