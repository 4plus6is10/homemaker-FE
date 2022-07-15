import React from 'react';
import './Checkout.css'
import photo1 from './amazonad.jpeg'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct';

function Checkout() {

    /*const[{basket}, {dispatch}] = useStateValue();
    
    나중에 밑줄로 이동해야함
    {basket.map(item => (
                        <CheckoutProduct id={item.id} title={item.title} image={item.image}
                        price={item.price} rating={item.rating} />
                    ))}
    */

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
                    
                    
                    
                    <CheckoutProduct/>
                    <CheckoutProduct/>
                    <CheckoutProduct/>

                </div>

            </div>
            
            <div className='checkout_right'>
                <Subtotal />
            </div>
        </div>
);
}

export default Checkout;