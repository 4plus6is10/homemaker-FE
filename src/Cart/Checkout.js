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