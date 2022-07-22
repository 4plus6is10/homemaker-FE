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
                    <CheckoutProduct id="1" name="테스트 1"
                    price={3000} imglink={product1} rating={2}/>
                    <CheckoutProduct id="2" name="테스트 2"
                    price={5000} imglink={product2} rating={4}/>
                    

                </div>

            </div>
            
            <div className='checkout_right'>
                <Subtotal />
            </div>
        </div>
);
}

export default Checkout;


// import React, { useState } from 'react'
// import CartContext from './CartContext'

// const CartProvider = (props) => {
    
//     const [cartState, setCartState] =useState({
//     // items: [{id: 'book1', name: 'THE OLD MAN AND SEA', price: 15.23, amount: 5}],
//     // totalAmount: 76.15
//         items: [],
//         totalAmount: 0
//     });

//     // cart에 book 데이터를 추가하는 메서드
//     const addItemToCartHandler = (item) => {
//         // console.log('addItemToCartHandler called!');
//         console.log(item);

//         // 1. 기본으로 add할 경우,
//         // 기존에 cart에 등록된 items에 방금 새로 전달된 item 추가.
//         // const updatedItem = [
//         //     ...cartState.items,
//         //     item
//         // ]

//         // setCartState({items: updatedItem});

//         // 2.Add를 1개씩 여러번 추가하였을 떄 cart에 각각 listing 되지 않고, 중복된 수량으로 통합 연산되도록
//         // 이미 동일한 id값의 book이 cart에 존재 할 경우,
//         // 해당 book의 amount만 추가.

//         const existingCartItemIndex = cartState.items.findIndex(
//             (cartItem) => cartItem.id === item.id
//         );

//         const existingCartItem = cartState.items[existingCartItemIndex]

//         let updatedItems;
//         if (existingCartItem) { // 방금 새로 등록한 book(item)이 cart에 이미 존재할 때.
//             const updatedItem = {
//                 ...existingCartItem,
//                 amount: existingCartItem.amount + item.amount,
//             };
//             updatedItems = [...cartState.items];
//             updatedItems[existingCartItemIndex] = updatedItem;

//         }else { //방금 새로 등록한 book(item)이 cart에 존재하지 않을 때.}
//             updatedItems = cartState.items.concat(item);
//         }

//         const updatedTotalAmount = cartState.totalAmount + item.price * item.amount;
//         setCartState({items:updatedItems, totalAmount: updatedTotalAmount})
//     };

//     const cartContext = {
//         items: cartState.items,
//         totalAmount : cartState.totalAmount,
//         addItem: addItemToCartHandler,
//     }

//   return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
// }

// export default CartProvider