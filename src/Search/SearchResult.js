import React, { useEffect, useState } from "react";
import axios from "axios";
import {Col, Row } from "antd";
import Card from "./card";
import {RocketOutlined} from '@ant-design/icons'
import Meta from "antd/lib/card/Meta";
import SimpleImageSlider from "react-simple-image-slider";
import CheckBox from "./Sections/CheckBox";
import { continents, price } from "./Sections/Datas";
import RadioBox from "./Sections/RadioBox";
import Product from "../Product/Product";
import SearchBar from "../NavBar/Sections/SearchBar";

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

  getProducts();
},[]);

const getProducts = async() => {
  try {
    const response = await axios.get('/products')
    const responseData = response.data;

    // responseData = responseData.json();
    // responseData = responseData.slice(0,30);
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
    
    setProducts(productsData);
  } catch(err) {
    console.log("Error >>",err)
  }
};

// const getProducts = (Limit) => {
//   axios.get("/products", Limit).then((response) => {
//       if (Limit.loadMore) {
//         setProducts(...Products, ...response.data);
//       } else {
//         console.log(response.data)
//         setProducts(response.data);
//       }
//       setPostSize(response.data);
//     }
//   );
// };


  // 1번: setProduct를 잘라서 저장하는 방법
  // const loadMoreHandler = () => {
  //   let skip = Skip + Limit
    
  //   axios.get('products').then((res)=> {
  //     console.log(skip);
  //     setProducts([...res.data.slice(0,skip)]);
  //     setSkip(skip);
  //   })
  // };


  // 2번: setProduct를 모두를 저장하는 방법
  const loadMoreHandler = () => {
    let skip = Skip + Limit;
    console.log(skip);
    setSkip(skip);
  };

  const showFilteredResults = (filters) => {

    getProducts();
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
  
  const updateSearchTerm = (newSearchTerm) =>{
    setSearchTerm(newSearchTerm)

    setSkip(0)
    setSearchTerm(newSearchTerm)
    getProducts()
    console.log(true);
  }

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
  <div style={{display: "flex", justifyContent : "center", padding: "30px"}}>
      <SearchBar
          refreshFunction = { updateSearchTerm }
      />
  </div>
  {/* Card */}
  
  <Row gutter={[16, 16]}>{Products.slice(0,Limit+Skip)}</Row>

  <br />
     <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={loadMoreHandler}>더보기</button>
    </div>	
</div>

)
}


export default SearchResult


