import React from 'react'
import './Detail.css'
import Product from '../Product/Product'
import PlaceOrder from './PlaceOrder'


function Detail() {
  return (
    <div>
      <PlaceOrder />
        <div className='recommendation'>
          <h2> 추천 제품: </h2>
          <Product />
        </div>

    </div>
    
  )
}

export default Detail