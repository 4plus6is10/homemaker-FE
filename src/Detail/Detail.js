import React from 'react'
import './Detail.css'
import List from './List'
import Keywords from './Keywords'
import Product from '../Product/Product'
import recommendProduct from './recommendProduct'


function Detail() {
  return (
    <div>
        <List />
        <Product />
        <recommendProduct />
        <Keywords />
    </div>
    
  )
}

export default Detail