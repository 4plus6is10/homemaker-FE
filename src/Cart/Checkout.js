import React from 'react';
import './Checkout.css'
import photo1 from './amazonad.jpeg'
import product1 from './product1.jpg'
import product2 from './product2.jpg'
import product3 from './product3.jpeg'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct';
import { getBasketTotal } from '../Reducer';
import {useStateValue} from '../StateProvider'

function Checkout() {

    const[{basket}, dispatch] = useStateValue();

    return (
        <div className="checkout"> 
            <div className='checkout-left'>

                <img className="checkout_ad"
                    src={photo1}
                    alt="" />

                <div>
                    <h2 className="checkout_title">
                        장바구니
                    </h2>
                    
                    {basket.map(item => (
                        <CheckoutProduct id={item.id} name={item.name}
                        price={item.price} imglink={item.imglink} rating={item.rating}/>
                    ))}
                </div>

            </div>
            
            <div className='checkout_right'>
                <Subtotal />
            </div>
        </div>
);
}

export default Checkout;