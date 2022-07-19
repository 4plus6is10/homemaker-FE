import React from 'react'
import './List.css'
import photo2 from './product.jpg'
import CurrencyFormat from 'react-currency-format'
import Product from '../Product/Product'
import Keywords from './Keywords'
import TotalPayment from './TotalPayment'

const List = (props) => {
    
    const product = {
        id : props.id,
        seq: props.seq,
        name: props.name,
        asin: props.asin,
        price: props.price,
        buylink : props.buylink,
        imglink : props.imglink,
        category : props.category
      };

  return (
    <div className='container'>

            <div className='detail_left'>
                <div className='detail_image'>
                    <h2>이미지</h2>
                    <img className='detail_photo'
                        src={props.imglink}
                        alt="" />
                </div>

                <div className='detail_info'>
                    <h3 className='detail_title'>
                        <h2>제품명</h2>
                        {props.name}
                    </h3>

                    <h3 className='detail_category'>
                        <h2>카테고리</h2>
                        {props.category}
                    </h3>

                    <h3 className='buylink'>
                        <h2>구매링크</h2>
                        {props.buylink}
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
                                        금액 : <strong> {props.price} </strong>
                                    </p>
                                </>
                            )}
                        
                                decimalScale={2}
                                value={0}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                                />
                        
                        <button>Add</button>
                        
                    </div>
                        
                </div>
            </div>
        </div>

        

)
}

export default List