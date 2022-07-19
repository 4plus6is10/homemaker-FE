import React from 'react'
import './List.css'
import CurrencyFormat from 'react-currency-format'
import Product from '../Product/Product'
import Keywords from './Keywords'
import TotalPayment from './TotalPayment'
import { price } from '../Search/Sections/Datas'
import { useStateValue } from '../StateProvider'


function List({id, name, imglink, price, category, rating, buylink}) {
    const [{basket}, dispatch] = useStateValue();
    
const addToBasket = () => {
    dispatch({
        type: 'ADD_TO_BASKET',
        item: {
            id: id,
            name: name,
            imglink: imglink,
            price: price,
            category:category,
            rating: rating,
            buylink: buylink
        },
    });
};

console.log("장바구니확인", basket);

  return (
    <div className='container'>

            <div className='detail_left'>
                <div className='detail_image'>
                    <h2>이미지</h2>
                    <img className='detail_photo'
                        src={imglink}
                        alt="" />
                </div>

                <div className='detail_info'>
                    <h3 className='detail_title'>
                        <h2>제품명</h2>
                        {name}
                    </h3>

                    <h3 className='detail_category'>
                        <h2>카테고리</h2>
                        {category}
                    </h3>

                    <h3 className='buylink'>
                        <h2>구매링크</h2>
                        {buylink}
                    </h3>

                </div>
            </div>
                    
            <div className='detail_right'>
                <div className='total_payment'>
                    <div className='payment'>
                        
                        <CurrencyFormat
                            renderText={(value) => (
                                <>
                                    <p>
                                        금액 : <strong> {price} </strong>
                                    </p>
                                </>
                            )}
                        
                                decimalScale={2}
                                value={0}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                                />
                        
                        <button onClick={addToBasket}>Add</button>
                        
                    </div>
                        
                </div>
            </div>
        </div>

        

)
}

export default List