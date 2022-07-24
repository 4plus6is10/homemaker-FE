import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from '../StateProvider'

function CheckoutProduct({id, name, imglink, price, rating}) {
    const [{basket}, dispatch] = useStateValue();

const removeFromBasket = () => {
    dispatch({
        type:'REMOVE_FROM_BASKET',
        id: id,
        })
}

  return (
    <div className="checkoutProduct">
        <img className="checkoutProduct_image" src={ imglink } alt=""/>

        <div className='checkoutProduct_info'>
            <p className='checkoutProduct_title'>
                { name }
            </p>

            <p className='checkoutProduct_price'>
                
                <strong>price: ${price}</strong>
                
            </p>

            <div className='checkoutProduct_rating'>
                {
                    Array(rating)
                        .fill()
                        .map((_ , i) => (
                            <p>★</p>
                        ))
                }                
            </div>

            <button onclick={removeFromBasket}>삭제</button>
        </div>

    </div>
  )
}

export default CheckoutProduct