import React, { useState } from "react";
// import classes from './Search.module.css'
import { Input } from "antd";
import axios from "axios";

const { Search } = Input;

function SearchBar(props) {
  const [SearchTerm, setSearchTerm] = useState("");
  const [Products, setProducts] = useState([]);

  const searchHandler = (event) => {
    setSearchTerm(event.currentTarget.value);
    props.refreshFunction(event.currentTarget.value);
      axios.get('/products/keyword',{
          params: {
            keyword: SearchTerm
          }
      }).then((res)=> {setProducts(res.data)});
      console.log(Products);
    }

  return (
    <div>
      <Search
        placeholder="input search text"
        onChange={searchHandler}
        style={{ width: 200 }}
        value={SearchTerm}
      />
    </div>
  );
}
export default SearchBar