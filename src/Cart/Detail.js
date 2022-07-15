import React from 'react'
import './Detail.css'
import photo2 from './product.jpg'
import photo3 from './wordcloud.png'
import CurrencyFormat from 'react-currency-format';

function Detail() {
  return (
    <div className='detail'>
        <div className='detail_left'>
            <img className='detail_photo'
                src={photo2}
                alt="" />

        </div>

        <div className='detail_middle'>
            <h2 className='detail_title'>
                상품명
            </h2>

            <h2 className='detail_category'>
                카테고리
            </h2>

            <h2 className='buylink'>
                구매링크로 이동
            </h2>

        </div>
        
        <div className='detail_right'>
            
            <div className='payment'>
        
                <CurrencyFormat
                renderText={(value) => (
                    <>
                    <p>
                        금액 : <strong> 0원 </strong>
                    </p>
                    </>

                )}

                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₩"}
                />

                <button>Add</button>

            </div>

            <div className='keywords'>
            <img className='keywords_photo'
                src={photo3}
                alt="" />

        </div>

        </div>
        
    </div>
  )
}

export default Detail